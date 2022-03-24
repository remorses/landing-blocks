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
import { useTheme } from '@chakra-ui/react';
import get from 'lodash.get';
import { cloneElement } from 'react';
export function useColor(name) {
    var theme = useTheme();
    var c = get(theme.colors, name) || name;
    return c;
}
export function getDisplayName(c) {
    return c.type.displayName || c.type.name;
}
export function removeUndefined(c) {
    Object.keys(c).forEach(function (k) {
        if (c[k] === undefined) {
            delete c[k];
        }
    });
    return c;
}
export function getPageContainerProps(props) {
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
export function clone(element) {
    if (!element) {
        return element;
    }
    if (typeof element === 'string') {
        return element;
    }
    if (typeof element === 'number') {
        return element;
    }
    return cloneElement(element);
}
