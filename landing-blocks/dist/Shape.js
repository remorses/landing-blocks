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
exports.Shape = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importStar(require("react"));
var support_1 = require("./support");
function Shape(_a) {
    var _b = _a.shape, shape = _b === void 0 ? 'circle' : _b, _c = _a.mainColor, mainColor = _c === void 0 ? 'gray' : _c, bg = _a.bg, color = _a.color, props = __rest(_a, ["shape", "mainColor", "bg", "color"]);
    var colorMode = (0, react_1.useColorMode)().colorMode;
    var dark = colorMode === 'dark';
    var realColor = (0, support_1.useColor)(mainColor);
    if (!props.children) {
        return react_2.default.createElement(react_2.Fragment, null);
    }
    if (shape === 'circle') {
        return (react_2.default.createElement(react_1.Box, __assign({ bg: bg ? bg : dark ? "white" : "black", color: color ? color : !dark ? "white" : "black", borderRadius: '100%', p: '1rem' }, props)));
    }
    return null;
}
exports.Shape = Shape;
