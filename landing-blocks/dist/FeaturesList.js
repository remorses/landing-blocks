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
exports.FeaturesList = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var Heading_1 = require("./Heading");
var hooks_1 = require("./hooks");
var layout_1 = require("./layout");
var Subheading_1 = require("./Subheading");
function FeaturesList(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, features = _a.features, _d = _a.centerText, centerText = _d === void 0 ? false : _d, _e = _a.animate, animate = _e === void 0 ? undefined : _e, rest = __rest(_a, ["heading", "subheading", "features", "centerText", "animate"]);
    var Faded = (0, hooks_1.useFaded)({ animate: animate }).Faded;
    return (react_2.default.createElement(layout_1.PageContainer, __assign({ spacing: '40px' }, rest),
        heading && subheading && (react_2.default.createElement(react_1.Stack, { as: Faded, spacing: '40px', flex: '1', textAlign: 'center', align: 'center' },
            react_2.default.createElement(Heading_1.Heading, { lineHeight: '50px', fontWeight: 'medium', fontSize: 'heading' }, heading),
            react_2.default.createElement(Subheading_1.Subheading, null, subheading))),
        react_2.default.createElement(react_1.Stack, { as: Faded, direction: ['column', null, 'row'], spacing: '20px', flex: '1' }, features.map(function (step, i) { return (react_2.default.createElement(Feature, __assign({ minW: ['100%', '100%', '0'], flex: '1', key: i, centerText: centerText }, step))); }))));
}
exports.FeaturesList = FeaturesList;
var Feature = function (_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, _d = _a.icon, icon = _d === void 0 ? '' : _d, centerText = _a.centerText, rest = __rest(_a, ["heading", "subheading", "icon", "centerText"]);
    return (react_2.default.createElement(react_1.Stack, __assign({ textAlign: centerText ? 'center' : 'left', w: 'auto', spacing: '20px', 
        // align='stretch'
        p: '40px' }, rest),
        react_2.default.createElement(layout_1.Col, { minW: '40px', maxW: '140px', align: 'center', fontWeight: 'medium', alignSelf: centerText ? 'center' : 'flex-start' }, icon),
        react_2.default.createElement(Heading_1.Heading, { width: '100%', fontSize: 'subheading' }, heading),
        react_2.default.createElement(react_1.Box, { width: '100%', fontSize: 'text', opacity: 0.6, lineHeight: '30px' }, subheading)));
};
