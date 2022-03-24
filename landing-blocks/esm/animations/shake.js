var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { keyframes } from '@emotion/react';
import { translate3d } from './utils';
var noShake = {
    transform: translate3d(0, 0, 0)
};
var downShake = {
    transform: translate3d('-10px', 0, 0)
};
var upShake = {
    transform: translate3d('10px', 0, 0)
};
var shake = {
    from: noShake,
    '10%': downShake,
    '20%': upShake,
    '30%': downShake,
    '40%': upShake,
    '50%': downShake,
    '60%': upShake,
    '70%': downShake,
    '80%': upShake,
    '90%': downShake,
    to: noShake
};
export default keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), shake);
var templateObject_1;
