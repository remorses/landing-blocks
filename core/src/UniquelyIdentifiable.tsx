import React, { ReactComponentElement, FC } from 'react'
import { useState, forwardRef } from 'react'
import uniqueId from 'lodash.uniqueid'

export function UniquelyIdentifiable<P=any>(
    name: string,
    Comp: FC<P>,
): FC<Omit<P, 'key'>> {
    const c = (props) => {
        const [id] = useState(() => uniqueId())
        console.log({ id })
        return <Comp {...props} key={id} />
    }
    // console.log('Comp.name', Comp.name)
    c.displayName = name
    return c as any
}
