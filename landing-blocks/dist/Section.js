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
exports.Section = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var support_1 = require("./support");
var Section = function (_a) {
    var children = _a.children, _b = _a.degree, degree = _b === void 0 ? 2 : _b, props = __rest(_a, ["children", "degree"]);
    var _c = (0, support_1.getPageContainerProps)(props), spacing = _c[0], rest = _c[1];
    // const { bg } = rest
    var baseProps = __assign({ width: '100%', top: 0, left: 0, right: 0, bottom: 0, position: 'absolute', transform: "skewY(".concat(degree, "deg)"), transformOrigin: 'center' }, rest);
    return (react_2.default.createElement(react_1.Stack, __assign({ spacing: '0px', position: 'relative', as: 'section' }, rest),
        react_2.default.createElement(react_1.Box, __assign({ m: 0 }, baseProps)),
        react_2.default.createElement(react_1.Box, __assign({}, baseProps, { m: 0, transform: "skewY(".concat(degree + 2, "deg)"), transformOrigin: '60%', opacity: 0.2 })),
        react_2.default.createElement(react_1.Box, __assign({}, baseProps, { m: 0, transform: "skewY(".concat(degree + 3, "deg)"), transformOrigin: '70%', opacity: 0.1 })),
        react_2.default.createElement(react_1.Stack, __assign({ align: 'stretch', width: '100%', m: 0 }, spacing), children)));
};
exports.Section = Section;
