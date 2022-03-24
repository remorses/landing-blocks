var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
import { keyframes } from '@emotion/react';
import { cubicBezier, getNextPercentage, scale3d } from './utils';
var timing = {
    animationTimingFunction: cubicBezier(0.215, 0.61, 0.355, 1.0),
};
var TOTAL = 5;
var bounceIn = (_a = {
        from: timing
    },
    _a[getNextPercentage(0, TOTAL)] = {
        opacity: 0,
        transform: scale3d(0.3, 0.3, 0.3),
    },
    _a[getNextPercentage(1, TOTAL)] = __assign(__assign({}, timing), { transform: scale3d(1.1, 1.1, 1.1) }),
    _a[getNextPercentage(2, TOTAL)] = __assign(__assign({}, timing), { transform: scale3d(0.9, 0.9, 0.9) }),
    _a[getNextPercentage(3, TOTAL)] = __assign(__assign({}, timing), { opacity: 1, transform: scale3d(1.03, 1.03, 1.03) }),
    _a[getNextPercentage(4, TOTAL)] = __assign(__assign({}, timing), { transform: scale3d(0.97, 0.97, 0.97) }),
    _a.to = __assign(__assign({}, timing), { opacity: 1, transform: scale3d(1, 1, 1) }),
    _a);
export default keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), bounceIn);
var templateObject_1;
