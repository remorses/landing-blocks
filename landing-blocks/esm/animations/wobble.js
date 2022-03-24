var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { keyframes } from '@emotion/react';
import { compose, rotate3d, translate3d } from './utils';
var translateAndRotate = compose(translate3d, rotate3d);
var noWobble = {
    transform: 'none'
};
var wobble = {
    from: noWobble,
    '15%': {
        transform: translateAndRotate(['-25%', 0, 0], [0, 0, 1, -5])
    },
    '30%': {
        transform: translateAndRotate(['20%', 0, 0], [0, 0, 1, -5])
    },
    '45%': {
        transform: translateAndRotate(['-15%', 0, 0], [0, 0, 1, -3])
    },
    '60%': {
        transform: translateAndRotate(['10%', 0, 0], [0, 0, 1, 2])
    },
    '75%': {
        transform: translateAndRotate(['-5%', 0, 0], [0, 0, 1, -1])
    },
    to: noWobble
};
export default keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), wobble);
var templateObject_1;
