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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Countdown = void 0;
var react_1 = require("@chakra-ui/react");
var react_2 = __importStar(require("react"));
var Bullet_1 = require("./Bullet");
var Heading_1 = require("./Heading");
var hooks_1 = require("./hooks");
var layout_1 = require("./layout");
var Subheading_1 = require("./Subheading");
var support_1 = require("./support");
function Countdown(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, deadline = _a.deadline, _d = _a.bullet, bullet = _d === void 0 ? '' : _d, _e = _a.cta, cta = _e === void 0 ? '' : _e, _f = _a.animate, animate = _f === void 0 ? undefined : _f, rest = __rest(_a, ["heading", "subheading", "deadline", "bullet", "cta", "animate"]);
    var _g = (0, react_2.useState)(calculateTimeLeft({ deadline: deadline })), timeLeft = _g[0], setTimeLeft = _g[1];
    (0, react_2.useEffect)(function () {
        setTimeout(function () {
            setTimeLeft(calculateTimeLeft({ deadline: deadline }));
        }, 1000);
    });
    var Faded = (0, hooks_1.useFaded)({ animate: animate }).Faded;
    return (react_2.default.createElement(layout_1.PageContainer, __assign({}, rest),
        react_2.default.createElement(react_1.Stack, { as: Faded, alignSelf: 'center', maxW: '700px', spacing: '30px', align: 'center', textAlign: 'center' },
            react_2.default.createElement(Bullet_1.Bullet, null, bullet),
            react_2.default.createElement(Heading_1.Heading, null, heading),
            react_2.default.createElement(Subheading_1.Subheading, null, subheading),
            react_2.default.createElement(react_1.Stack, { spacing: '20px', direction: 'row' }, Object.keys(timeLeft).map(function (timeName, index) {
                var remaining = timeLeft[timeName];
                var isLast = index === Object.keys(timeLeft).length - 1;
                return (react_2.default.createElement(react_1.Stack, { direction: 'row', spacing: '20px', key: timeName },
                    react_2.default.createElement(react_1.Stack, { spacing: '10px', align: 'center' },
                        react_2.default.createElement(react_1.Box, null, remaining.split('').map(function (d, i) { return (react_2.default.createElement(AnimatedDigit, { digit: d, key: i })); })),
                        react_2.default.createElement(react_1.Box, { letterSpacing: '2px', opacity: 0.6 }, timeName.toUpperCase())),
                    !isLast && (react_2.default.createElement(react_1.Box, { opacity: 0.8, fontSize: '52px' }, ":"))));
            })),
            cta && (react_2.default.createElement(layout_1.Col, { justify: 'center', align: 'center' }, (0, support_1.clone)(cta))))));
}
exports.Countdown = Countdown;
var calculateTimeLeft = function (_a) {
    var deadline = _a.deadline;
    var difference = +new Date(deadline) - +new Date();
    var timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
    timeLeft = Object.assign.apply(Object, __spreadArray([{}], Object.keys(timeLeft).map(function (k) {
        var _a;
        return (_a = {},
            _a[k] = padZeros(timeLeft[k], 2),
            _a);
    }), false));
    return timeLeft;
};
function padZeros(number, length) {
    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }
    return my_string;
}
var AnimatedDigit = function (_a) {
    var digit = _a.digit, rest = __rest(_a, ["digit"]);
    var fontSize = rest.fontSize || '62px';
    var height = Number(fontSize.replace('px', ''));
    var _b = (0, react_2.useState)('translate3d(0, 0, 0)'), translate = _b[0], setTranslate = _b[1];
    // console.log({ translate })
    (0, react_2.useEffect)(function () {
        var y = -Number(digit) * height;
        setTranslate("translate3d(0, ".concat(y, "px, 0)"));
    }, [digit]);
    return (react_2.default.createElement(react_1.Box, __assign({ fontSize: fontSize, height: fontSize, lineHeight: fontSize, mx: '2px', display: 'inline-block', overflow: 'hidden' }, rest),
        react_2.default.createElement(react_1.Box, { transition: '0.3s ease all', transform: translate }, '0123456789'.split('').map(function (d) { return (react_2.default.createElement(react_1.Box, { key: d, height: height }, d)); }))));
};
