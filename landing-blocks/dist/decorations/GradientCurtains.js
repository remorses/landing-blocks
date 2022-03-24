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
exports.GradientCurtains = void 0;
var react_1 = require("@chakra-ui/react");
var color_js_1 = __importDefault(require("color-js"));
var react_2 = __importDefault(require("react"));
var support_1 = require("../support");
function lighter(c, amount) {
    if (amount === void 0) { amount = 0.04; }
    // const { colorMode } = useColorMode()
    // const isDark = colorMode === 'dark'
    c = (0, support_1.useColor)(c);
    var newColor = (0, color_js_1.default)(c).setAlpha(amount);
    return newColor.toCSS();
}
var GradientCurtains = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? 'primary' : _b, // #e9fcff
    _c = _a.secondary, // #e9fcff
    secondary = _c === void 0 ? 'secondary' : _c, // #fdf2ed
    rest = __rest(_a, ["primary", "secondary"]);
    var linesColor = "linear-gradient(217deg,".concat(lighter(primary), " 30%,").concat(lighter(primary, 1), ")");
    primary = lighter(primary);
    secondary = lighter(secondary);
    return (react_2.default.createElement(react_1.Box, __assign({ w: '100%', minHeight: '120%', backgroundImage: "radial-gradient(circle at 70% 70%,".concat(primary, ",").concat(secondary, ")"), transform: 'skewY(-14.5deg)', position: 'relative' }, rest),
        react_2.default.createElement(react_1.Box, { backgroundImage: linesColor, transform: 'rotate(-1deg)', height: '1px', position: 'absolute', w: '100%', opacity: 0.1, bottom: '-12px' }),
        react_2.default.createElement(react_1.Box, { backgroundImage: linesColor, transform: 'rotate(-3.5deg)', height: '1px', position: 'absolute', w: '100%', opacity: 0.4, bottom: '-42px' })));
};
exports.GradientCurtains = GradientCurtains;