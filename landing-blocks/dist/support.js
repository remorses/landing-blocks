"use strict";
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
exports.clone = exports.getPageContainerProps = exports.removeUndefined = exports.getDisplayName = exports.useColor = void 0;
var react_1 = require("@chakra-ui/react");
var lodash_get_1 = __importDefault(require("lodash.get"));
var react_2 = require("react");
function useColor(name) {
    var theme = (0, react_1.useTheme)();
    var c = (0, lodash_get_1.default)(theme.colors, name) || name;
    return c;
}
exports.useColor = useColor;
function getDisplayName(c) {
    return c.type.displayName || c.type.name;
}
exports.getDisplayName = getDisplayName;
function removeUndefined(c) {
    Object.keys(c).forEach(function (k) {
        if (c[k] === undefined) {
            delete c[k];
        }
    });
    return c;
}
exports.removeUndefined = removeUndefined;
function getPageContainerProps(props) {
    var m = props.m, mt = props.mt, mb = props.mb, ml = props.ml, mr = props.mr, my = props.my, mx = props.mx, p = props.p, px = props.px, py = props.py, pl = props.pl, pr = props.pr, pt = props.pt, pb = props.pb, spacing = props.spacing, floatingElement = props.floatingElement, dark = props.dark, primary = props.primary, pageWidth = props.pageWidth, rest = __rest(props, ["m", "mt", "mb", "ml", "mr", "my", "mx", "p", "px", "py", "pl", "pr", "pt", "pb", "spacing", "floatingElement", "dark", "primary", "pageWidth"]);
    return [
        removeUndefined({
            m: m,
            mt: mt,
            mb: mb,
            ml: ml,
            mr: mr,
            my: my,
            mx: mx,
            p: p,
            px: px,
            py: py,
            pl: pl,
            pr: pr,
            pt: pt,
            pb: pb,
            spacing: spacing,
            floatingElement: floatingElement,
            dark: dark,
            primary: primary,
            pageWidth: pageWidth,
        }),
        rest,
    ];
}
exports.getPageContainerProps = getPageContainerProps;
function clone(element) {
    if (!element) {
        return element;
    }
    if (typeof element === 'string') {
        return element;
    }
    if (typeof element === 'number') {
        return element;
    }
    return (0, react_2.cloneElement)(element);
}
exports.clone = clone;
