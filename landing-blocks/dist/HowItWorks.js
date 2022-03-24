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
exports.HowItWorks = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var Heading_1 = require("./Heading");
var Subheading_1 = require("./Subheading");
var hooks_1 = require("./hooks");
var layout_1 = require("./layout");
function HowItWorks(_a) {
    var heading = _a.heading, subheading = _a.subheading, steps = _a.steps, _b = _a.animate, animate = _b === void 0 ? undefined : _b, rest = __rest(_a, ["heading", "subheading", "steps", "animate"]);
    var Faded = (0, hooks_1.useFaded)({ animate: animate }).Faded;
    return (react_2.default.createElement(layout_1.PageContainer, __assign({ spacing: '40px', py: '60px' }, rest),
        react_2.default.createElement(react_1.Stack, { as: Faded, spacing: '40px', flex: '1', textAlign: 'center', align: 'center' },
            react_2.default.createElement(Heading_1.Heading, { lineHeight: '50px' }, heading),
            react_2.default.createElement(Subheading_1.Subheading, { maxW: '700px' }, subheading)),
        react_2.default.createElement(react_1.Stack, { align: 'stretch', spacing: '60px', flex: '1' }, steps.map(function (step, i) { return (react_2.default.createElement(Step, __assign({ key: i, animate: animate, number: i + 1, flip: i % 2 !== 0 }, step))); }))));
}
exports.HowItWorks = HowItWorks;
var Step = function (_a) {
    var heading = _a.heading, subheading = _a.subheading, number = _a.number, image = _a.image, decorativeHeading = _a.decorativeHeading, _b = _a.flip, flip = _b === void 0 ? false : _b, _c = _a.animate, animate = _c === void 0 ? undefined : _c, rest = __rest(_a, ["heading", "subheading", "number", "image", "decorativeHeading", "flip", "animate"]);
    var Faded = (0, hooks_1.useFaded)({ animate: animate }).Faded;
    return (react_2.default.createElement(react_1.Stack, __assign({ justify: 'space-between', align: 'center', direction: ['column', null, flip ? 'row-reverse' : 'row'], spacing: '40px' }, rest),
        react_2.default.createElement(react_1.Stack, { as: Faded, minW: '300px', maxW: '500px', flex: '1', spacing: '40px' },
            react_2.default.createElement(react_1.Stack, { direction: 'row', align: 'flex-end', opacity: 0.4 },
                react_2.default.createElement(react_1.Box, { opacity: 0.7, lineHeight: '60px', fontSize: '80px' }, number),
                react_2.default.createElement(Heading_1.Heading, { isTruncated: true, maxW: '300px', fontWeight: 'bold', fontSize: 'text' },
                    react_2.default.createElement(react_1.Box, { d: 'inline', mx: '0.6em', children: ' . ' }),
                    decorativeHeading || heading)),
            react_2.default.createElement(Subheading_1.Subheading, { opacity: 0.8, fontWeight: 'medium' }, heading),
            react_2.default.createElement(react_1.Box, { maxW: '400px', fontWeight: 'medium', lineHeight: '1.8em', opacity: 0.5, fontSize: 'subtext' }, subheading)),
        react_2.default.createElement(react_1.Box, { as: Faded, minW: '300px', maxW: '500px', flex: '1' }, image)));
};
