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
exports.Feature = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var Bullet_1 = require("./Bullet");
var Heading_1 = require("./Heading");
var hooks_1 = require("./hooks");
var layout_1 = require("./layout");
var Subheading_1 = require("./Subheading");
var support_1 = require("./support");
function Feature(_a) {
    var heading = _a.heading, subheading = _a.subheading, _b = _a.bullet, bullet = _b === void 0 ? '' : _b, _c = _a.image, image = _c === void 0 ? null : _c, _d = _a.flip, flip = _d === void 0 ? false : _d, _e = _a.cta, cta = _e === void 0 ? '' : _e, _f = _a.animate, animate = _f === void 0 ? undefined : _f, _g = _a.direction, direction = _g === void 0 ? 'row' : _g, rest = __rest(_a, ["heading", "subheading", "bullet", "image", "flip", "cta", "animate", "direction"]);
    var dir = function (direction) { return (flip ? "".concat(direction, "-reverse") : direction); };
    var Faded = (0, hooks_1.useFaded)({ animate: animate }).Faded;
    return (react_2.default.createElement(layout_1.PageContainer, __assign({ py: '80px' }, rest),
        react_2.default.createElement(react_1.Stack, { align: 'center', 
            // spacing='40px'
            justifyItems: 'space-between', 
            // isReversed={flip}
            direction: ['column', null, dir(direction)] },
            react_2.default.createElement(react_1.Stack, { as: Faded, spacing: '30px', flex: '1', minW: '300px' },
                bullet && react_2.default.createElement(Bullet_1.Bullet, { my: '10px' }, bullet),
                react_2.default.createElement(Heading_1.Heading, { lineHeight: '50px', fontWeight: 'medium', fontSize: 'heading' }, heading),
                react_2.default.createElement(Subheading_1.Subheading, { lineHeight: '34px', opacity: 0.6, fontWeight: 'normal', fontSize: 'text' }, subheading),
                cta && react_2.default.createElement(react_1.Box, null, (0, support_1.clone)(cta))),
            react_2.default.createElement(react_1.Box, { minW: '40px', minH: '40px' }),
            react_2.default.createElement(layout_1.Col, { as: Faded, align: 'center', flex: '1', minW: '300px' }, image))));
}
exports.Feature = Feature;
