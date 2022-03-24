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
exports.Banner = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var Bullet_1 = require("./Bullet");
var Heading_1 = require("./Heading");
var hooks_1 = require("./hooks");
var layout_1 = require("./layout");
var Subheading_1 = require("./Subheading");
var support_1 = require("./support");
function Banner(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, _d = _a.bullet, bullet = _d === void 0 ? '' : _d, _e = _a.cta, cta = _e === void 0 ? '' : _e, _f = _a.image, image = _f === void 0 ? null : _f, _g = _a.flip, flip = _g === void 0 ? false : _g, _h = _a.fingerprint, fingerprint = _h === void 0 ? '' : _h, _j = _a.animate, animate = _j === void 0 ? undefined : _j, props = __rest(_a, ["heading", "subheading", "bullet", "cta", "image", "flip", "fingerprint", "animate"]);
    var _k = (0, support_1.getPageContainerProps)(props), spacing = _k[0], rest = _k[1];
    var direction = flip ? 'row-reverse' : 'row';
    var Faded = (0, hooks_1.useFaded)({ animate: animate }).Faded;
    return (react_2.default.createElement(layout_1.PageContainer, __assign({}, spacing),
        react_2.default.createElement(react_1.Stack, __assign({ as: Faded, align: 'center', spacing: '40px', bg: 'gray.100', 
            // isReversed={flip}
            direction: ['column', null, direction], w: '100%', borderRadius: '10px', p: '30px' }, rest),
            image && flip && react_2.default.createElement(react_1.Box, { flex: '1' }),
            react_2.default.createElement(react_1.Stack, { spacing: '20px', minW: '300px', w: image ? 'auto' : '100%', justify: 'space-between', align: 'stretch', direction: ['column', null, image ? 'column' : 'row'] },
                react_2.default.createElement(react_1.Stack, { spacing: '20px' },
                    bullet && react_2.default.createElement(Bullet_1.Bullet, { my: '10px' }, bullet),
                    react_2.default.createElement(Heading_1.Heading, { lineHeight: '50px', fontWeight: 'medium', fontSize: 'heading' }, heading),
                    react_2.default.createElement(Subheading_1.Subheading, { lineHeight: '34px', opacity: 0.6, maxW: '600px', fontWeight: 'normal', fontSize: 'text' }, subheading)),
                react_2.default.createElement(react_1.Stack, { spacing: '10px', w: 'auto', justify: 'center' },
                    react_2.default.createElement(react_1.Box, null, cta),
                    fingerprint && (react_2.default.createElement(react_1.Box, { opacity: 0.4, fontSize: 'subtext', lineHeight: '26px' }, fingerprint)))),
            image && !flip && react_2.default.createElement(react_1.Box, { flex: '1' }),
            image && (react_2.default.createElement(layout_1.Col, { align: 'center', 
                // flex='1'
                minW: '300px', minH: '100%' }, image)))));
}
exports.Banner = Banner;
