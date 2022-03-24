var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { keyframes } from '@emotion/react';
import { skewXY } from './utils';
var noSkew = {
    transform: 'none'
};
var jello = {
    from: noSkew,
    '11.1%': noSkew,
    '22.2%': {
        transform: skewXY(-12.5, -12.5)
    },
    '33.3': {
        transform: skewXY(6.25, 6.25)
    },
    '44.4': {
        transform: skewXY(-3.125, -3.125)
    },
    '55.5': {
        transform: skewXY(1.5625, 1.5625)
    },
    '66.6': {
        transform: skewXY(-0.78125, -0.78125)
    },
    '77.7': {
        transform: skewXY(0.390625, 0.390625)
    },
    '88.8': {
        transform: skewXY(-0.1953125, -0.1953125)
    },
    to: noSkew
};
export default keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), jello);
var templateObject_1;
