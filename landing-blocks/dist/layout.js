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
exports.FloatingElement = exports.PageContainer = exports.PropagatedThemeProvider = exports.darkStyles = exports.Spacer = exports.Row = exports.Image = exports.Box = exports.Stack = exports.Col = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("@chakra-ui/react");
var react_3 = require("@chakra-ui/react");
var merge_1 = __importDefault(require("lodash/fp/merge"));
var react_4 = __importStar(require("react"));
exports.Col = (0, react_4.forwardRef)(function (props, ref) {
    return (react_4.default.createElement(react_3.Flex, __assign({ align: 'stretch', ref: ref, direction: 'column' }, props)));
});
var react_5 = require("@chakra-ui/react");
Object.defineProperty(exports, "Stack", { enumerable: true, get: function () { return react_5.Stack; } });
Object.defineProperty(exports, "Box", { enumerable: true, get: function () { return react_5.Box; } });
var react_6 = require("@chakra-ui/react");
Object.defineProperty(exports, "Image", { enumerable: true, get: function () { return react_6.Image; } });
exports.Row = (0, react_4.forwardRef)(function (props, ref) {
    return react_4.default.createElement(react_3.Flex, __assign({ align: 'stretch', ref: ref, direction: 'row' }, props));
});
var Spacer = function (_a) {
    var _b = _a.x, x = _b === void 0 ? '0px' : _b, _c = _a.y, y = _c === void 0 ? '0px' : _c;
    return react_4.default.createElement(react_3.Box, { mt: y, ml: x });
};
exports.Spacer = Spacer;
exports.darkStyles = {
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
function PropagatedThemeProvider(_a) {
    var theme = _a.theme, children = _a.children;
    var existingTheme = {};
    try {
        existingTheme = (0, react_2.useTheme)();
    }
    catch (_b) { }
    // console.log({ existingTheme: existingTheme.sizes })
    var merged = (0, react_4.useMemo)(function () {
        return (0, merge_1.default)(existingTheme || {}, theme);
    }, [theme, existingTheme]);
    return react_4.default.createElement(react_2.ThemeProvider, { theme: merged }, children);
}
exports.PropagatedThemeProvider = PropagatedThemeProvider;
exports.PageContainer = (0, react_4.forwardRef)(
// TODO rename to SectionContainer
function (_a, ref) {
    var children = _a.children, _b = _a.spacing, spacing = _b === void 0 ? '0px' : _b, _c = _a.floatingElement, floatingElement = _c === void 0 ? null : _c, _d = _a.dark, dark = _d === void 0 ? false : _d, _e = _a.primary, primary = _e === void 0 ? undefined : _e, _f = _a.pageWidth, pageWidth = _f === void 0 ? undefined : _f, _g = _a.as, as = _g === void 0 ? 'div' : _g, props = __rest(_a, ["children", "spacing", "floatingElement", "dark", "primary", "pageWidth", "as"]);
    var Mode = dark ? react_1.DarkMode : react_4.Fragment;
    var styles = dark ? exports.darkStyles : {};
    var theme = (0, react_4.useMemo)(function () { return ({
        colors: {
            primary: primary,
        },
        sizes: {
            pageContainer: pageWidth,
        },
    }); }, [pageWidth, primary]);
    return (react_4.default.createElement(exports.Col, __assign({ position: 'relative', ref: ref, width: '100%', px: 'pagePadding', align: 'center' }, styles, props),
        react_4.default.createElement(PropagatedThemeProvider, { theme: theme },
            react_4.default.createElement(Mode, null,
                react_4.default.createElement(exports.Col, { position: 'absolute', width: '100%', top: '0', left: '0', right: '0', bottom: '0', align: 'center', justify: 'center' }, floatingElement),
                react_4.default.createElement(react_3.Stack, { as: as, position: 'relative', align: 'stretch', 
                    // px={['0px', '0px', '20px']}
                    w: '100%', maxW: 'pageContainer', spacing: spacing, flex: '0' }, children)))));
});
exports.FloatingElement = (0, react_4.forwardRef)(function (_a, ref) {
    var children = _a.children, floatingElement = _a.floatingElement, rest = __rest(_a, ["children", "floatingElement"]);
    return (react_4.default.createElement(exports.Col, __assign({ position: 'relative' }, rest, { ref: ref }),
        react_4.default.createElement(exports.Col, { position: 'absolute', width: '100%', top: '0', left: '0', right: '0', bottom: '0', align: 'center', justify: 'center' }, floatingElement),
        children));
});
