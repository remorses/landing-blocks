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
exports.Divider = void 0;
var react_1 = require("@chakra-ui/react");
var color_js_1 = __importDefault(require("color-js"));
var react_2 = require("@chakra-ui/react");
var react_3 = __importDefault(require("react"));
var layout_1 = require("./layout");
var hooks_1 = require("./hooks");
var Divider = function (_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, animate = _a.animate, rest = __rest(_a, ["heading", "animate"]);
    var Faded = (0, hooks_1.useFaded)({ animate: animate }).Faded;
    return (react_3.default.createElement(layout_1.PageContainer, __assign({ as: Faded }, rest), heading ? (react_3.default.createElement(react_2.Stack, { justify: 'center', align: 'center', spacing: '20px', direction: 'row', opacity: 0.6 },
        react_3.default.createElement(Line, null),
        react_3.default.createElement(react_2.Box, { fontWeight: 'medium', fontSize: 'text', letterSpacing: '0.1em', textAlign: 'center' }, heading),
        react_3.default.createElement(Line, null))) : (react_3.default.createElement(Line, null))));
};
exports.Divider = Divider;
function Line(porps) {
    var colorMode = (0, react_1.useColorMode)().colorMode;
    return (react_3.default.createElement(react_2.Box, __assign({ bg: {
            light: (0, color_js_1.default)('black').setAlpha(0.3).toCSS(),
            dark: (0, color_js_1.default)('white').setAlpha(0.3).toCSS(),
        }[colorMode], w: '100%', flex: '1', minH: '1px', maxH: '1px' }, porps)));
}
