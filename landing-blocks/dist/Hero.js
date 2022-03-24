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
exports.Hero = void 0;
/** @jsxRuntime classic */
// @jsx jsx
var react_1 = require("@emotion/react");
var react_2 = require("@chakra-ui/react");
var react_3 = __importDefault(require("react"));
var Bullet_1 = require("./Bullet");
var Heading_1 = require("./Heading");
var hooks_1 = require("./hooks");
var layout_1 = require("./layout");
var Subheading_1 = require("./Subheading");
var support_1 = require("./support");
react_1.jsx;
function Hero(_a) {
    var heading = _a.heading, subheading = _a.subheading, cta = _a.cta, image = _a.image, _b = _a.bullet, bullet = _b === void 0 ? '' : _b, _c = _a.fingerprint, fingerprint = _c === void 0 ? '' : _c, _d = _a.animate, animate = _d === void 0 ? undefined : _d, rest = __rest(_a, ["heading", "subheading", "cta", "image", "bullet", "fingerprint", "animate"]);
    var Faded = (0, hooks_1.useFaded)({ animate: animate }).Faded;
    return (react_3.default.createElement(layout_1.PageContainer, __assign({}, rest),
        react_3.default.createElement(layout_1.Row, { justify: image ? 'flex-start' : 'center', w: '100%', direction: ['column', 'column', 'row'], align: 'center' },
            react_3.default.createElement(react_2.Stack, { as: Faded, maxW: ['100%', null, image ? '60%' : '100%'], minW: '33%', spacing: '40px', align: [
                    'center',
                    'center',
                    image ? 'flex-start' : 'center',
                ], textAlign: ['center', 'center', image ? 'left' : 'center'] },
                react_3.default.createElement(layout_1.Col, { align: [
                        'center',
                        null,
                        image ? 'flex-start' : 'center',
                    ] },
                    bullet && react_3.default.createElement(Bullet_1.Bullet, { my: '10px' }, bullet),
                    react_3.default.createElement(Heading_1.Heading, { fontSize: '46px' }, heading)),
                react_3.default.createElement(Subheading_1.Subheading, { maxW: '700px' }, subheading),
                react_3.default.createElement(react_2.Stack, { spacing: '6px', align: ['center', 'center', 'flex-start'] },
                    react_3.default.createElement(react_2.Box, null, (0, support_1.clone)(cta)),
                    react_3.default.createElement(react_2.Box, { opacity: 0.6, fontSize: 'subtext', lineHeight: '26px' }, fingerprint))),
            image && (react_3.default.createElement(layout_1.Row, { direction: ['column', null, 'row'], as: Faded, flex: '1' },
                react_3.default.createElement(react_2.Box, { ml: '40px', mt: '40px', flex: '1' }),
                react_3.default.createElement(layout_1.Col, { align: 'center' }, image))))));
}
exports.Hero = Hero;
