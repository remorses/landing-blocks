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
import { DarkMode, useColorMode, } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import { Stack } from '@chakra-ui/react';
import merge from 'lodash/fp/merge';
import React, { Fragment, useMemo } from 'react';
import { PropagatedThemeProvider } from './layout';
/*
should customize
- font type
- font family
- buttons border radius
- primary color for buttons, illustrations, etc
- secondary color, for gradients, etc
- dark background mode
- black color for text, ...
- white color for text, ... if dark mode
*/
export function LandingProvider(_a) {
    var _b = _a.dark, dark = _b === void 0 ? undefined : _b, _c = _a.primary, primary = _c === void 0 ? 'purple' : _c, _d = _a.black, black = _d === void 0 ? '#222' : _d, _e = _a.white, white = _e === void 0 ? '#fff' : _e, _f = _a.secondary, secondary = _f === void 0 ? 'purple' : _f, _g = _a.pageWidth, pageWidth = _g === void 0 ? '1200px' : _g, _h = _a.pagePadding, pagePadding = _h === void 0 ? '20px' : _h, _j = _a.spacing, spacing = _j === void 0 ? '60px' : _j, _k = _a.fontFamily, fontFamily = _k === void 0 ? 'Roboto, system-ui, sans-serif' : _k, _l = _a.theme, themeProp = _l === void 0 ? {} : _l, children = _a.children, rest = __rest(_a, ["dark", "primary", "black", "white", "secondary", "pageWidth", "pagePadding", "spacing", "fontFamily", "theme", "children"]);
    var colorMode = useColorMode().colorMode;
    var Mode = dark ? DarkMode : Fragment;
    dark = dark !== null && dark !== void 0 ? dark : colorMode === 'dark';
    var theme = useMemo(function () {
        return merge({
            colors: {
                primary: primary,
                secondary: secondary,
                black: black,
                white: white,
            },
            sizes: {
                pageContainer: pageWidth,
            },
            space: {
                pagePadding: pagePadding,
            },
            fonts: {
                body: fontFamily,
                heading: fontFamily,
            },
            fontSizes: {
                text: '18px',
                heading: '42px',
                subheading: '24px',
                subtext: '15px',
            },
        }, themeProp || {});
    }, [pageWidth, primary, secondary, black, white, fontFamily, themeProp]);
    return (React.createElement(PropagatedThemeProvider, { theme: theme },
        React.createElement(Global, { styles: globalStyles }),
        React.createElement(Mode, null,
            React.createElement(Stack
            // overflowX='hidden'
            , __assign({ 
                // overflowX='hidden'
                width: '100%', minHeight: '100%', overflowX: 'hidden', fontFamily: fontFamily, spacing: spacing, align: 'stretch', color: dark ? 'white' : 'black', borderColor: dark ? 'rgba(255,255,255,.3)' : 'gray.300' }, rest), children))));
}
var globalStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    * {\n        box-sizing: border-box;\n    }\n    #__next {\n        min-height: 100%;\n        /* height: 100%; */\n    }\n    \n    @keyframes landingBlocksFadeDown {\n        from {\n            opacity: 0;\n            transform: translate3d(0px, -1em, 0px);\n        }\n        to {\n            transform: none;\n        }\n    }\n"], ["\n    * {\n        box-sizing: border-box;\n    }\n    #__next {\n        min-height: 100%;\n        /* height: 100%; */\n    }\n    \n    @keyframes landingBlocksFadeDown {\n        from {\n            opacity: 0;\n            transform: translate3d(0px, -1em, 0px);\n        }\n        to {\n            transform: none;\n        }\n    }\n"])));
var templateObject_1;
