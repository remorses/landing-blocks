var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a;
import { keyframes } from '@emotion/react';
import { compose, getNextPercentage, rotateY, translateX } from './utils';
var translateAndRotate = compose(translateX, rotateY);
var noShake = {
    transform: translateX(0),
};
var TOTAL = 5;
var headShake = (_a = {},
    _a[getNextPercentage(0, TOTAL)] = noShake,
    _a[getNextPercentage(1, TOTAL)] = {
        transform: translateAndRotate('-6px', '-9deg'),
    },
    _a[getNextPercentage(2, TOTAL)] = {
        transform: translateAndRotate('5px', '7deg'),
    },
    _a[getNextPercentage(3, TOTAL)] = {
        transform: translateAndRotate('-3px', '-5deg'),
    },
    _a[getNextPercentage(4, TOTAL)] = {
        transform: translateAndRotate('2px', '3deg'),
    },
    _a[getNextPercentage(5, TOTAL)] = noShake,
    _a);
export default keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), headShake);
var templateObject_1;
