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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMyColorMode = exports.useFaded = void 0;
var react_1 = require("@chakra-ui/react");
var baby_i_am_faded_1 = require("baby-i-am-faded");
// import { Faded, FadedProps } from 'baby-i-am-faded'
var react_2 = __importStar(require("react"));
function useFaded(_a) {
    var _b = _a.animate, animate = _b === void 0 ? undefined : _b, _c = _a.triggerOnce, triggerOnce = _c === void 0 ? true : _c, rest = __rest(_a, ["animate", "triggerOnce"]);
    var component = (0, react_2.useMemo)(function () {
        var defaultProps = __assign({ cascade: true, animationName: typeof animate === 'string' ? animate : undefined, threshold: 0.2, duration: 400, whenInView: true, triggerOnce: triggerOnce, children: [] }, (typeof animate === 'object' ? animate : {}));
        return function (props) {
            return react_2.default.createElement(baby_i_am_faded_1.Faded, __assign({}, defaultProps, props));
        };
    }, []);
    return { Faded: animate ? component : 'div' };
}
exports.useFaded = useFaded;
function useMyColorMode(_a) {
    var _b = _a.dark, dark = _b === void 0 ? false : _b;
    var colorMode = (0, react_1.useColorMode)().colorMode;
    if (dark) {
        return { colorMode: 'dark' };
    }
    return { colorMode: colorMode };
}
exports.useMyColorMode = useMyColorMode;
