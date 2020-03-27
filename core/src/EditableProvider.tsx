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
    onChange: (arg: { key: string; newProps: any }) => void
} {
    const ctx = useContext(EditableContext)
    return ctx as any
}

function recursiveMap(children, fn) {
    // TODO recursiveMap should be breadth first
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

export function Editable({ children, tagName = 'div', key, prop }) {
    const ref = useRef()
    const { onChange, enabled } = useEditableContext()
    if (!enabled) {
        return children
    }
    const onHtmlChange = (e) => {
        const html = e.target.value
        console.log({ html })
        onChange({ key, newProps: { [prop]: html } })
    }
    return (
        <ContentEditable
            innerRef={ref}
            html={renderToString(children)}
            disabled={!enabled}
            onChange={onHtmlChange}
            tagName={tagName}
        />
    )
    // TODO if children are jsx elements recursivley make the mcontenteditables, but to update these should have a key prop set in the code
    // TODO renderTOString should be passed to editable context to not include it in bundle
    const childrenArr = Children.toArray(children)
    console.log({ childrenArr })
    if (childrenArr.length === 1 && typeof childrenArr[0] === 'string') {
        console.log('found string element')
        return (
            <ContentEditable
                innerRef={ref}
                html={children[0]}
                disabled={!enabled}
                onChange={onHtmlChange}
                tagName={tagName}
            />
        )
    }
    children = recursiveMap(children, (child) => {
        const newC = cloneElement(child, {
            ...child.props,
            children: (
                <Editable
                    children={child.props.children}
                    key={key}
                    prop={prop}
                    // TODO there should be a special key to represent child, then the onChange receives the new prop as a jsx element 
                />
            ),
        })
        return newC
    })
    return children
}

export const EditableProvider = ({ children, onChange }) => {
    const value = {
        enabled: true,
        onChange: ({ key, newProps }) => {
            const newChildren = recursiveMap(children, (c: ReactElement) => {
                if (c.props && c.props.key === key) {
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
            console.log({ jsxchildren: newChildren[0] })
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
