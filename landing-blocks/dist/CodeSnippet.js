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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.CodeSnippet = void 0;
var react_1 = require("@chakra-ui/react");
var prism_react_renderer_1 = __importStar(require("prism-react-renderer"));
var duotoneDark_1 = __importDefault(require("prism-react-renderer/themes/duotoneDark"));
// import lightTheme from 'prism-react-renderer/themes/nightOwlLight'
var duotoneLight_1 = __importDefault(require("prism-react-renderer/themes/duotoneLight"));
var react_2 = __importDefault(require("react"));
var react_typist_1 = __importDefault(require("react-typist"));
var CodeSnippet = function (_a) {
    var code = _a.code, language = _a.language, isTyping = _a.isTyping, lineNumbers = _a.lineNumbers, theme = _a.theme, dark = _a.dark, rest = __rest(_a, ["code", "language", "isTyping", "lineNumbers", "theme", "dark"]);
    theme = theme ? theme : dark ? duotoneDark_1.default : duotoneLight_1.default;
    var lineNoColor = dark ? '#fff' : '#000';
    var bg = dark ? 'black' : 'white';
    var lineNumberW = getLineNoWidth(code);
    return (react_2.default.createElement(prism_react_renderer_1.default, __assign({}, prism_react_renderer_1.defaultProps, { theme: theme, code: code, language: language }), function (_a) {
        var className = _a.className, _style = _a.style, tokens = _a.tokens, getLineProps = _a.getLineProps, getTokenProps = _a.getTokenProps;
        var _ = _style.background, __ = _style.backgroundColor, style = __rest(_style, ["background", "backgroundColor"]);
        var lines = tokens.map(function (line, i) { return (react_2.default.createElement("div", __assign({ key: i }, getLineProps({ line: line, key: i })),
            lineNumbers ? (react_2.default.createElement(react_1.Box, { w: lineNumberW, mr: '1.5em', color: lineNoColor, as: 'span', opacity: 0.4 }, String(i + 1))) : react_2.default.createElement(react_1.Box, null),
            line.map(function (token, key) { return (react_2.default.createElement("span", __assign({ key: key }, getTokenProps({ token: token, key: key })))); }))); });
        return (react_2.default.createElement(react_1.Box, __assign({ as: 'pre', bg: bg, minW: '300px', minH: '200px', className: className, overflow: 'hidden', borderRadius: '10px', p: '20px', style: __assign({}, style) }, rest), isTyping ? react_2.default.createElement(react_typist_1.default, null, lines) : lines));
    }));
};
exports.CodeSnippet = CodeSnippet;
function getLineNoWidth(code) {
    return (0.5 + // Start with a base value
        code
            .split(/\r\n|\r|\n/) // Split by newlines
            .length // Get number of lines
            .toString().length * // Get number of digits
            // Reduce by 30%
            0.7);
}
