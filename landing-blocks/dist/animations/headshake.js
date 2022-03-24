"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@emotion/react");
var utils_1 = require("./utils");
var translateAndRotate = (0, utils_1.compose)(utils_1.translateX, utils_1.rotateY);
var noShake = {
    transform: (0, utils_1.translateX)(0),
};
var TOTAL = 5;
var headShake = (_a = {},
    _a[(0, utils_1.getNextPercentage)(0, TOTAL)] = noShake,
    _a[(0, utils_1.getNextPercentage)(1, TOTAL)] = {
        transform: translateAndRotate('-6px', '-9deg'),
    },
    _a[(0, utils_1.getNextPercentage)(2, TOTAL)] = {
        transform: translateAndRotate('5px', '7deg'),
    },
    _a[(0, utils_1.getNextPercentage)(3, TOTAL)] = {
        transform: translateAndRotate('-3px', '-5deg'),
    },
    _a[(0, utils_1.getNextPercentage)(4, TOTAL)] = {
        transform: translateAndRotate('2px', '3deg'),
    },
    _a[(0, utils_1.getNextPercentage)(5, TOTAL)] = noShake,
    _a);
exports.default = (0, react_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ""], ["", ""])), headShake);
var templateObject_1;
