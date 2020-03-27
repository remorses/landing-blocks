import React, { ReactComponentElement } from 'react'
import { useState, forwardRef } from 'react'
import uniqueId from 'lodash.uniqueid'

export function UniquelyIdentifiable<T extends any>(Comp: T): T {
    return forwardRef((props, ref) => {
        const [id] = useState(() => uniqueId())
        return <Comp ref={ref} {...props} key={id} />
    }) as any
}
