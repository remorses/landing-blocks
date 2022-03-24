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
exports.TopBanner = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var Bullet_1 = require("./Bullet");
var layout_1 = require("./layout");
function TopBanner(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.cta, cta = _c === void 0 ? '' : _c, _d = _a.bullet, bullet = _d === void 0 ? '' : _d, rest = __rest(_a, ["heading", "cta", "bullet"]);
    return (react_2.default.createElement(layout_1.PageContainer, __assign({ py: '10px' }, rest),
        react_2.default.createElement(react_1.Stack, { alignSelf: 'center', spacing: '10px', direction: 'row', align: 'center', justify: 'center' },
            react_2.default.createElement(Bullet_1.Bullet, null, bullet),
            react_2.default.createElement(react_1.Box, null, heading),
            react_2.default.createElement(react_1.Box, null, cta))));
}
exports.TopBanner = TopBanner;
