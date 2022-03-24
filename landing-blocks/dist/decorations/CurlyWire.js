"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurlyWire = void 0;
var react_1 = require("@chakra-ui/react");
var color_js_1 = __importDefault(require("color-js"));
var react_2 = __importDefault(require("react"));
var support_1 = require("../support");
var svgs_1 = require("../svgs");
function lighter(c) {
    // const { colorMode } = useColorMode()
    // const isDark = colorMode === 'dark'
    c = (0, support_1.useColor)(c);
    var newColor = (0, color_js_1.default)(c).setAlpha(0.06);
    return newColor.toCSS();
}
var CurlyWire = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? 'primary' : _b, // #e9fcff
    _c = _a.secondary, // #e9fcff
    secondary = _c === void 0 ? 'secondary' : _c, // #fdf2ed
    rest = __rest(_a, ["primary", "secondary"]);
    primary = lighter(primary);
    secondary = lighter(secondary);
    return react_2.default.createElement(react_1.Box, __assign({ stroke: '#000', as: svgs_1.WireLong, w: '100%' }, rest));
};
exports.CurlyWire = CurlyWire;
