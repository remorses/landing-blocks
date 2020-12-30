import { keyframes } from '@emotion/react'
import { Animation, Keyframe } from './types'
import { cubicBezier, getNextPercentage, scale3d } from './utils'

const timing: Keyframe = {
    animationTimingFunction: cubicBezier(0.215, 0.61, 0.355, 1.0),
}

const TOTAL = 5

const bounceIn: Animation = {
    from: timing,
    [getNextPercentage(0, TOTAL)]: {
        opacity: 0,
        transform: scale3d(0.3, 0.3, 0.3),
    },
    [getNextPercentage(1, TOTAL)]: {
        ...timing,
        transform: scale3d(1.1, 1.1, 1.1),
    },
    [getNextPercentage(2, TOTAL)]: {
        ...timing,
        transform: scale3d(0.9, 0.9, 0.9),
    },
    [getNextPercentage(3, TOTAL)]: {
        ...timing,
        opacity: 1,
        transform: scale3d(1.03, 1.03, 1.03),
    },
    [getNextPercentage(4, TOTAL)]: {
        ...timing,
        transform: scale3d(0.97, 0.97, 0.97),
    },
    to: {
        ...timing,
        opacity: 1,
        transform: scale3d(1, 1, 1),
    },
}

export default keyframes`${bounceIn}`
