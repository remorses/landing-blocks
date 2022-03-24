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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bullet = void 0;
var react_1 = require("@chakra-ui/react");
var color_js_1 = __importDefault(require("color-js"));
var react_2 = __importStar(require("react"));
var Bullet = function (props) {
    var colorMode = (0, react_1.useColorMode)().colorMode;
    if (!props.children) {
        return react_2.default.createElement(react_2.Fragment, null);
    }
    return (react_2.default.createElement(react_1.Box, __assign({ w: 'fit-content', py: '2px', px: '6px', bg: {
            light: (0, color_js_1.default)('black').setAlpha(0.1).toCSS(),
            dark: (0, color_js_1.default)('white').setAlpha(0.2).toCSS(),
        }[colorMode], fontWeight: 'medium', fontSize: 'subtext', borderRadius: '4px', isTruncated: true }, props)));
};
exports.Bullet = Bullet;
