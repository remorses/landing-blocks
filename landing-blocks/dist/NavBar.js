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
exports.NavBar = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("@chakra-ui/react");
var react_3 = __importDefault(require("react"));
var hooks_1 = require("./hooks");
var layout_1 = require("./layout");
var NavBar = function (_a) {
    var logo = _a.logo, _b = _a.navSpacing, navSpacing = _b === void 0 ? '26px' : _b, _c = _a.navs, navs = _c === void 0 ? [] : _c, rest = __rest(_a, ["logo", "navSpacing", "navs"]);
    var _d = (0, react_1.useDisclosure)(), isOpen = _d.isOpen, onOpen = _d.onOpen, onClose = _d.onClose;
    var colorMode = (0, hooks_1.useMyColorMode)(rest).colorMode;
    return (react_3.default.createElement(layout_1.PageContainer, __assign({ py: '20px' }, rest),
        react_3.default.createElement(layout_1.Row, null,
            react_3.default.createElement(react_2.Box, { alignSelf: 'flexStart' }, logo),
            react_3.default.createElement(react_2.Box, { flex: '1' }),
            react_3.default.createElement(react_2.Stack, { maxW: '100%', direction: 'row', spacing: '20px', align: 'center', display: ['none', 'none', 'flex'] }, Array.isArray(navs) ? (react_3.default.createElement(react_2.Stack, { align: 'center', direction: 'row', spacing: navSpacing }, navs.map(function (x, i) { return (react_3.default.createElement(react_2.Stack, { key: i, fontSize: 'text', alignItems: 'center', justify: 'center', fontWeight: 'medium' }, x)); }))) : (navs)),
            react_3.default.createElement(react_1.Button, { display: ['flex', 'flex', 'none'], variant: 'link', justifyContent: 'center', alignItems: 'center', onClick: onOpen },
                react_3.default.createElement(react_2.Box, { stroke: { light: 'black', dark: 'white' }[colorMode], as: Menu, boxSize: '36px' }))),
        react_3.default.createElement(react_1.Drawer, { isOpen: isOpen, placement: 'left', onClose: onClose, size: 'xs' },
            react_3.default.createElement(react_2.Box, __assign({}, (colorMode == 'dark' ? layout_1.darkStyles : {})),
                react_3.default.createElement(react_1.DrawerOverlay, null),
                react_3.default.createElement(react_1.DrawerContent, null,
                    react_3.default.createElement(react_1.DrawerCloseButton, null),
                    react_3.default.createElement(react_2.Box, { mt: '60px' }),
                    react_3.default.createElement(react_1.DrawerBody, null,
                        react_3.default.createElement(react_2.Stack, { maxW: '100%', isTruncated: true, spacing: '20px', align: 'center' }, Array.isArray(navs) ? (react_3.default.createElement(react_2.Stack, { spacing: '40px' }, navs.map(function (x, i) { return (react_3.default.createElement(react_2.Box, { key: i, fontSize: 'text', fontWeight: 'medium' }, x)); }))) : (navs))))))));
};
exports.NavBar = NavBar;
var Menu = function (props) {
    return (react_3.default.createElement("svg", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinejoin: 'round', strokeLinecap: 'round' }, props),
        react_3.default.createElement("line", { x1: '3', y1: '12', x2: '21', y2: '12' }),
        react_3.default.createElement("line", { x1: '3', y1: '6', x2: '21', y2: '6' }),
        react_3.default.createElement("line", { x1: '3', y1: '18', x2: '21', y2: '18' })));
};
