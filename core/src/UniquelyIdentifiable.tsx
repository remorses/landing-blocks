import React, { ReactComponentElement } from 'react'
import { useState, forwardRef } from 'react'
import uniqueId from 'lodash.uniqueid'

export function UniquelyIdentifiable<T extends any>(name: string, Comp: T): T {
    const c = (props) => {
        const [id] = useState(() => uniqueId())
        return <Comp {...props} key={id} />
    }
    // console.log('Comp.name', Comp.name)
    c.displayName = name
    return c as any
}
