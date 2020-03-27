import React, { Children, ReactElement, cloneElement } from 'react'
import { createContext } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { forwardRef } from 'react'
import { useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { useContext } from 'react'
import { renderToString } from 'react-dom/server'
import { getDisplayName } from './support'

export const EditableContext = createContext({ enabled: false })

export function useEditableContext(): {
    enabled: boolean
    onChange: (arg: { uid: string; newProps: any }) => void
} {
    const ctx = useContext(EditableContext)
    return ctx as any
}

function recursiveMap(children, fn) {
    return React.Children.map(children, (child: any) => {
        if (!React.isValidElement(child)) {
            return child
        }
        // @ts-ignore
        if (child.props && child.props.children) {
            child = React.cloneElement(child, {
                // @ts-ignore
                children: recursiveMap(child.props.children, fn),
            })
        }

        return fn(child)
    })
}

export function Editable({ children, tagName = 'div', uid, prop }) {
    const ref = useRef()
    const { onChange, enabled } = useEditableContext()
    if (!enabled) {
        return children
    }
    const onHtmlChange = (e) => {
        const html = e.target.value
        console.log({ html })
        onChange({ uid, newProps: { [prop]: html } })
    }
    return (
        <ContentEditable
            innerRef={ref}
            html={renderToString(children)} // TODO renderTOString should be passed to editable context to not include it in bundle
            disabled={!enabled}
            onChange={onHtmlChange}
            tagName={tagName}
        />
    )
}

export const EditableProvider = ({ children, onChange }) => {
    const value = {
        enabled: true,
        onChange: ({ uid, newProps }) => {
            const newChildren = recursiveMap(children, (c: ReactElement) => {
                if (c.props && c.props.uid === uid) {
                    // @ts-ignore
                    console.log(
                        `adding new props to ${getDisplayName(c)}: ${newProps}`,
                    )
                    const newChild = cloneElement(c, {
                        ...c.props,
                        ...(newProps || {}),
                    })
                    return newChild
                }
                // console.log({ props: c.props })
                return c
            })
            console.log({jsxchildren: newChildren[0]})
            const newChildrenJsx = reactElementToJSXString(newChildren[0]) // TODO should support array
            onChange(newChildrenJsx)
        },
    }
    // children = recursiveMap(children, (c, i) =>
    //     cloneElement(c, { ...c.props, key: i }),
    // )
    return (
        <EditableContext.Provider value={value}>
            {children}
        </EditableContext.Provider>
    )
}
