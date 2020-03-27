import React, { Children, ReactElement, cloneElement } from 'react'
import { createContext } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { forwardRef } from 'react'
import { useRef } from 'react'
import ContentEditable from 'react-contenteditable'
import { useContext } from 'react'
import { renderToString } from 'react-dom/server'

export const EditableContext = createContext({ enabled: false })

export function useEditableContext(): {
    enabled: boolean
    onChange: (x: any) => void
} {
    const ctx = useContext(EditableContext)
    return ctx as any
}

function recursiveMap(children, fn) {
    return React.Children.map(children, (child: any) => {
        // if (!React.isValidElement(child)) {
        //     return child
        // }
        if (!child.props || !child.props.children) {
            return child
        }

        child = React.cloneElement(child, {
            children: recursiveMap(child.props.children, fn),
        })

        return fn(child)
    })
}

export function Editable({ children }) {
    const ref = useRef()
    const { onChange, enabled } = useEditableContext()
    if (!enabled) {
        return children
    }
    return (
        <ContentEditable
            innerRef={ref}
            html={renderToString(children)} // innerHTML of the editable div
            disabled={!enabled} // use true to disable editing
            onChange={onChange} // handle innerHTML change
            // tagName='article'
        />
    )
}

export const EditableProvider = ({ children, onChange }) => {
    const value = {
        enabled: true,
        onChange: ({ key, newProps }) => {
            const newChildren = recursiveMap(children, (c: ReactElement) => {
                if (c.props && c.props.key === key) {
                    const newChild = cloneElement(c, {
                        ...c.props,
                        ...newProps,
                    })
                    return newChild
                }
                return c
            })
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
