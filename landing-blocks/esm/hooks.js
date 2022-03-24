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
import { useColorMode } from '@chakra-ui/react';
import { Faded } from 'baby-i-am-faded';
// import { Faded, FadedProps } from 'baby-i-am-faded'
import React, { useMemo, } from 'react';
export function useFaded(_a) {
    var _b = _a.animate, animate = _b === void 0 ? undefined : _b, _c = _a.triggerOnce, triggerOnce = _c === void 0 ? true : _c, rest = __rest(_a, ["animate", "triggerOnce"]);
    var component = useMemo(function () {
        var defaultProps = __assign({ cascade: true, animationName: typeof animate === 'string' ? animate : undefined, threshold: 0.2, duration: 400, whenInView: true, triggerOnce: triggerOnce, children: [] }, (typeof animate === 'object' ? animate : {}));
        return function (props) {
            return React.createElement(Faded, __assign({}, defaultProps, props));
        };
    }, []);
    return { Faded: animate ? component : 'div' };
}
export function useMyColorMode(_a) {
    var _b = _a.dark, dark = _b === void 0 ? false : _b;
    var colorMode = useColorMode().colorMode;
    if (dark) {
        return { colorMode: 'dark' };
    }
    return { colorMode: colorMode };
}
