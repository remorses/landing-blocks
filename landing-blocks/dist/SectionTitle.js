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
exports.SectionTitle = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var Bullet_1 = require("./Bullet");
var Heading_1 = require("./Heading");
var hooks_1 = require("./hooks");
var layout_1 = require("./layout");
var Subheading_1 = require("./Subheading");
var support_1 = require("./support");
function SectionTitle(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, _d = _a.bullet, bullet = _d === void 0 ? '' : _d, _e = _a.cta, cta = _e === void 0 ? '' : _e, _f = _a.animate, animate = _f === void 0 ? undefined : _f, rest = __rest(_a, ["heading", "subheading", "bullet", "cta", "animate"]);
    var Faded = (0, hooks_1.useFaded)({ animate: animate }).Faded;
    return (react_2.default.createElement(layout_1.PageContainer, __assign({}, rest),
        react_2.default.createElement(react_1.Stack, { as: Faded, alignSelf: 'center', maxW: '700px', spacing: '30px', align: 'center', textAlign: 'center' },
            react_2.default.createElement(Bullet_1.Bullet, null, bullet),
            react_2.default.createElement(Heading_1.Heading, null, heading),
            react_2.default.createElement(Subheading_1.Subheading, null, subheading),
            cta && (react_2.default.createElement(layout_1.Col, { justify: 'center', align: 'center' }, (0, support_1.clone)(cta))))));
}
exports.SectionTitle = SectionTitle;
