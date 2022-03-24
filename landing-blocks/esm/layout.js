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
import { DarkMode } from '@chakra-ui/react';
import { ThemeProvider, useTheme } from '@chakra-ui/react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import merge from 'lodash/fp/merge';
import React, { forwardRef, Fragment, useMemo } from 'react';
export var Col = forwardRef(function (props, ref) {
    return (React.createElement(Flex, __assign({ align: 'stretch', ref: ref, direction: 'column' }, props)));
});
export { Stack, Box } from '@chakra-ui/react';
export { Image } from '@chakra-ui/react';
export var Row = forwardRef(function (props, ref) {
    return React.createElement(Flex, __assign({ align: 'stretch', ref: ref, direction: 'row' }, props));
});
export var Spacer = function (_a) {
    var _b = _a.x, x = _b === void 0 ? '0px' : _b, _c = _a.y, y = _c === void 0 ? '0px' : _c;
    return React.createElement(Box, { mt: y, ml: x });
};
export var darkStyles = {
    // bg: 'gray.800',
    color: 'whiteAlpha.900',
    borderColor: 'whiteAlpha.300',
    placeholder: 'whiteAlpha.400',
};
// export function withColorMode(C) {
//     return (p: any) => {
//         const Mode = p.dark ? DarkMode : Fragment
//         const styles = p.dark ? darkStyles : {}
//         return (
//             <Mode>
//                 <C {...p} />
//             </Mode>
//         )
//     }
// }
export function PropagatedThemeProvider(_a) {
    var theme = _a.theme, children = _a.children;
    var existingTheme = {};
    try {
        existingTheme = useTheme();
    }
    catch (_b) { }
    // console.log({ existingTheme: existingTheme.sizes })
    var merged = useMemo(function () {
        return merge(existingTheme || {}, theme);
    }, [theme, existingTheme]);
    return React.createElement(ThemeProvider, { theme: merged }, children);
}
export var PageContainer = forwardRef(
// TODO rename to SectionContainer
function (_a, ref) {
    var children = _a.children, _b = _a.spacing, spacing = _b === void 0 ? '0px' : _b, _c = _a.floatingElement, floatingElement = _c === void 0 ? null : _c, _d = _a.dark, dark = _d === void 0 ? false : _d, _e = _a.primary, primary = _e === void 0 ? undefined : _e, _f = _a.pageWidth, pageWidth = _f === void 0 ? undefined : _f, _g = _a.as, as = _g === void 0 ? 'div' : _g, props = __rest(_a, ["children", "spacing", "floatingElement", "dark", "primary", "pageWidth", "as"]);
    var Mode = dark ? DarkMode : Fragment;
    var styles = dark ? darkStyles : {};
    var theme = useMemo(function () { return ({
        colors: {
            primary: primary,
        },
        sizes: {
            pageContainer: pageWidth,
        },
    }); }, [pageWidth, primary]);
    return (React.createElement(Col, __assign({ position: 'relative', ref: ref, width: '100%', px: 'pagePadding', align: 'center' }, styles, props),
        React.createElement(PropagatedThemeProvider, { theme: theme },
            React.createElement(Mode, null,
                React.createElement(Col, { position: 'absolute', width: '100%', top: '0', left: '0', right: '0', bottom: '0', align: 'center', justify: 'center' }, floatingElement),
                React.createElement(Stack, { as: as, position: 'relative', align: 'stretch', 
                    // px={['0px', '0px', '20px']}
                    w: '100%', maxW: 'pageContainer', spacing: spacing, flex: '0' }, children)))));
});
export var FloatingElement = forwardRef(function (_a, ref) {
    var children = _a.children, floatingElement = _a.floatingElement, rest = __rest(_a, ["children", "floatingElement"]);
    return (React.createElement(Col, __assign({ position: 'relative' }, rest, { ref: ref }),
        React.createElement(Col, { position: 'absolute', width: '100%', top: '0', left: '0', right: '0', bottom: '0', align: 'center', justify: 'center' }, floatingElement),
        children));
});
