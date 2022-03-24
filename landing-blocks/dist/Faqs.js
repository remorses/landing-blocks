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
exports.Faqs = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = require("@chakra-ui/react");
var react_3 = __importDefault(require("react"));
var hooks_1 = require("./hooks");
var layout_1 = require("./layout");
var Subheading_1 = require("./Subheading");
function Faqs(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, faqs = _a.faqs, _d = _a.animate, animate = _d === void 0 ? undefined : _d, rest = __rest(_a, ["heading", "subheading", "faqs", "animate"]);
    var Faded = (0, hooks_1.useFaded)({ animate: animate }).Faded;
    return (react_3.default.createElement(layout_1.PageContainer, __assign({}, rest),
        react_3.default.createElement(react_2.Stack, { as: Faded, alignSelf: 'center', spacing: '30px', align: 'center', textAlign: 'center', minWidth: '100%' },
            react_3.default.createElement(react_1.Heading, null, heading),
            react_3.default.createElement(Subheading_1.Subheading, { fontSize: 'text', maxW: '700px' }, subheading),
            react_3.default.createElement(react_1.Accordion, { allowToggle: true, minWidth: '100%' }, faqs.map(function (x) { return (react_3.default.createElement(react_1.AccordionItem, { key: x.question.toString(), minWidth: '100%' },
                react_3.default.createElement(react_1.AccordionButton, { minH: '60px' },
                    react_3.default.createElement(react_2.Box, { fontSize: '24px', fontWeight: 'medium', flex: '1', textAlign: 'left' }, x.question),
                    react_3.default.createElement(react_1.AccordionIcon, { boxSize: '40px' })),
                react_3.default.createElement(react_1.AccordionPanel, { py: '20px', minH: '100px', textAlign: 'left' }, x.answer))); })))));
}
exports.Faqs = Faqs;
