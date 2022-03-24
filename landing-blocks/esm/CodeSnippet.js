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
import Highlight, { defaultProps } from 'prism-react-renderer';
import darkPrismTheme from 'prism-react-renderer/themes/duotoneDark';
// import lightTheme from 'prism-react-renderer/themes/nightOwlLight'
import lightPrismTheme from 'prism-react-renderer/themes/duotoneLight';
import React from 'react';
import Typist from 'react-typist';
export var CodeSnippet = function (_a) {
    var code = _a.code, language = _a.language, isTyping = _a.isTyping, lineNumbers = _a.lineNumbers, theme = _a.theme, dark = _a.dark, rest = __rest(_a, ["code", "language", "isTyping", "lineNumbers", "theme", "dark"]);
    theme = theme ? theme : dark ? darkPrismTheme : lightPrismTheme;
    var lineNoColor = dark ? '#fff' : '#000';
    var bg = dark ? 'black' : 'white';
    var lineNumberW = getLineNoWidth(code);
    return (React.createElement(Highlight, __assign({}, defaultProps, { theme: theme, code: code, language: language }), function (_a) {
        var className = _a.className, _style = _a.style, tokens = _a.tokens, getLineProps = _a.getLineProps, getTokenProps = _a.getTokenProps;
        var _ = _style.background, __ = _style.backgroundColor, style = __rest(_style, ["background", "backgroundColor"]);
        var lines = tokens.map(function (line, i) { return (React.createElement("div", __assign({ key: i }, getLineProps({ line: line, key: i })),
            lineNumbers ? (React.createElement(Box, { w: lineNumberW, mr: '1.5em', color: lineNoColor, as: 'span', opacity: 0.4 }, String(i + 1))) : React.createElement(Box, null),
            line.map(function (token, key) { return (React.createElement("span", __assign({ key: key }, getTokenProps({ token: token, key: key })))); }))); });
        return (React.createElement(Box, __assign({ as: 'pre', bg: bg, minW: '300px', minH: '200px', className: className, overflow: 'hidden', borderRadius: '10px', p: '20px', style: __assign({}, style) }, rest), isTyping ? React.createElement(Typist, null, lines) : lines));
    }));
};
function getLineNoWidth(code) {
    return (0.5 + // Start with a base value
        code
            .split(/\r\n|\r|\n/) // Split by newlines
            .length // Get number of lines
            .toString().length * // Get number of digits
            // Reduce by 30%
            0.7);
}
