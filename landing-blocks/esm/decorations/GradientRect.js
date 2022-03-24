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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Box } from '@chakra-ui/react';
import Color from 'color-js';
import React from 'react';
import { useColor } from '../support';
function lighter(c) {
    // const { colorMode } = useColorMode()
    // const isDark = colorMode === 'dark'
    c = useColor(c);
    var newColor = Color(c).setAlpha(0.06);
    return newColor.toCSS();
}
function getCliPath(_a) {
    var distortion = _a.distortion;
    var isNegative = distortion < 0;
    distortion = Math.abs(distortion);
    var a = distortion * 100;
    var b = 100 - distortion * 100;
    if (isNegative) {
        return "polygon(0 ".concat(a, "%, 100% 0, 100% ").concat(b, "%, 0 100%)");
    }
    return "polygon(0% 0, 100% ".concat(a, "%, 100% 100%, 0 ").concat(b, "%)");
}
export var GradientRect = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? 'primary' : _b, // #e9fcff
    _c = _a.secondary, // #e9fcff
    secondary = _c === void 0 ? 'secondary' : _c, // #fdf2ed
    _d = _a.distortion, // #fdf2ed
    distortion = _d === void 0 ? 0.3 : _d, rest = __rest(_a, ["primary", "secondary", "distortion"]);
    primary = lighter(primary);
    secondary = lighter(secondary);
    var clipPath = getCliPath({ distortion: distortion });
    return (React.createElement(Box, __assign({ w: '80%', height: '70%', background: "linear-gradient(45deg, ".concat(primary, " 30%, ").concat(secondary, " 60%)"), style: {
            clipPath: clipPath,
        } }, rest)));
};