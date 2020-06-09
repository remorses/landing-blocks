import { keyframes } from '@emotion/core'
import { Animation, Keyframe } from './types'
import { compose, getNextPercentage, rotateY, translateX } from './utils'

const translateAndRotate = compose(translateX, rotateY)

const noShake: Keyframe = {
    transform: translateX(0),
}

const TOTAL = 5

const headShake: Animation = {
    [getNextPercentage(0, TOTAL)]: noShake,
    [getNextPercentage(1, TOTAL)]: {
        transform: translateAndRotate('-6px', '-9deg'),
    },
    [getNextPercentage(2, TOTAL)]: {
        transform: translateAndRotate('5px', '7deg'),
    },
    [getNextPercentage(3, TOTAL)]: {
        transform: translateAndRotate('-3px', '-5deg'),
    },
    [getNextPercentage(4, TOTAL)]: {
        transform: translateAndRotate('2px', '3deg'),
    },
    [getNextPercentage(5, TOTAL)]: noShake,
}

export default keyframes`${headShake}`
