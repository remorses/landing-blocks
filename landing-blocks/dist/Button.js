"use strict";
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
exports.Button = void 0;
/** @jsxRuntime classic */
/** @jsx jsx */
var react_1 = require("@chakra-ui/react");
var react_2 = require("@emotion/react");
var color_js_1 = __importDefault(require("color-js"));
var react_3 = require("react");
var bouncein_1 = __importDefault(require("./animations/bouncein"));
var headshake_1 = __importDefault(require("./animations/headshake"));
var shake_1 = __importDefault(require("./animations/shake"));
var wobble_1 = __importDefault(require("./animations/wobble"));
var support_1 = require("./support");
var myAnimations = {
    wobble: wobble_1.default,
    bounceIn: bouncein_1.default,
    headShake: headshake_1.default,
    shake: shake_1.default,
};
exports.Button = (0, react_3.forwardRef)(function (_a, ref) {
    var _b = _a.bg, bg = _b === void 0 ? 'primary' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.biggerOnHover, biggerOnHover = _d === void 0 ? false : _d, animate = _a.animate, props = __rest(_a, ["bg", "className", "biggerOnHover", "animate"]);
    var realBg = (0, support_1.useColor)(bg);
    var lightness = (0, color_js_1.default)(realBg).getLightness();
    var isDark = lightness < 0.7;
    var color = isDark ? 'white' : 'black';
    if (!props.children) {
        return (0, react_2.jsx)(react_3.Fragment, null);
    }
    var animationCss = (0, react_3.useMemo)(function () {
        if (animate === true) {
            return makeAnimationCss(bouncein_1.default);
        }
        if (animate && animate in myAnimations) {
            return makeAnimationCss(myAnimations[animate]);
        }
        return (0, react_2.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
    }, [animate]);
    var biggerOnHoverStyle = (0, react_3.useMemo)(function () {
        return makeBiggerOnHoverStyle(realBg);
    }, [realBg]);
    return ((0, react_2.jsx)(react_1.Button, __assign({ css: [biggerOnHover ? biggerOnHoverStyle : {}, animationCss], ref: ref, as: props.href ? 'a' : 'button', 
        // transition='all 0.1s ease-in-out'
        px: '20px', className: className, d: 'block', width: 'auto', color: color, bg: bg, fontSize: 'text', fontWeight: 'medium' }, props)));
});
var makeBiggerOnHoverStyle = function (bg) {
    var highlight = (0, color_js_1.default)(bg).setAlpha(0.2).toHSL().toString();
    return (0, react_2.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        & {\n            box-shadow: 0 0 0 0 ", ";\n            animation: landingBlocksPulseAnimation 1.75s infinite\n                cubic-bezier(0.66, 0, 0, 1);\n        }\n\n        @keyframes landingBlocksPulseAnimation {\n            to {\n                box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);\n            }\n        }\n\n        & {\n            transition: transform 0.15s;\n            cursor: pointer;\n            position: relative;\n            z-index: 1;\n        }\n\n        &::after {\n            content: '';\n            background-color: ", ";\n            transition: transform 0.15s;\n            border-radius: 7px;\n            position: absolute;\n            inset: 0;\n            z-index: -1;\n        }\n\n        &:hover::after {\n            transform: scale(1.06);\n        }\n    "], ["\n        & {\n            box-shadow: 0 0 0 0 ", ";\n            animation: landingBlocksPulseAnimation 1.75s infinite\n                cubic-bezier(0.66, 0, 0, 1);\n        }\n\n        @keyframes landingBlocksPulseAnimation {\n            to {\n                box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);\n            }\n        }\n\n        & {\n            transition: transform 0.15s;\n            cursor: pointer;\n            position: relative;\n            z-index: 1;\n        }\n\n        &::after {\n            content: '';\n            background-color: ", ";\n            transition: transform 0.15s;\n            border-radius: 7px;\n            position: absolute;\n            inset: 0;\n            z-index: -1;\n        }\n\n        &:hover::after {\n            transform: scale(1.06);\n        }\n    "])), highlight, bg);
};
function makeAnimationCss(keyframes) {
    return (0, react_2.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        animation-duration: 0.6s;\n        /* animation-delay: 1s; */\n        animation-timing-function: ease-in-out;\n        animation-name: ", ";\n        animation-direction: normal;\n        /* animation-iteration-count: infinite; */\n    "], ["\n        animation-duration: 0.6s;\n        /* animation-delay: 1s; */\n        animation-timing-function: ease-in-out;\n        animation-name: ", ";\n        animation-direction: normal;\n        /* animation-iteration-count: infinite; */\n    "])), keyframes);
}
var templateObject_1, templateObject_2, templateObject_3;
