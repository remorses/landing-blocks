import React, { Children, ReactElement, cloneElement } from 'react'
import { createContext } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { forwardRef } from 'react'
import { useRef } from 'react'

const EditableContext = createContext({})


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

export const EditableProvider = ({ children, onChange }) => {
    const value = {
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
