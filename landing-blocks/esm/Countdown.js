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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Box, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Bullet } from './Bullet';
import { Heading } from './Heading';
import { useFaded } from './hooks';
import { Col, PageContainer } from './layout';
import { Subheading } from './Subheading';
import { clone } from './support';
export function Countdown(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, deadline = _a.deadline, _d = _a.bullet, bullet = _d === void 0 ? '' : _d, _e = _a.cta, cta = _e === void 0 ? '' : _e, _f = _a.animate, animate = _f === void 0 ? undefined : _f, rest = __rest(_a, ["heading", "subheading", "deadline", "bullet", "cta", "animate"]);
    var _g = useState(calculateTimeLeft({ deadline: deadline })), timeLeft = _g[0], setTimeLeft = _g[1];
    useEffect(function () {
        setTimeout(function () {
            setTimeLeft(calculateTimeLeft({ deadline: deadline }));
        }, 1000);
    });
    var Faded = useFaded({ animate: animate }).Faded;
    return (React.createElement(PageContainer, __assign({}, rest),
        React.createElement(Stack, { as: Faded, alignSelf: 'center', maxW: '700px', spacing: '30px', align: 'center', textAlign: 'center' },
            React.createElement(Bullet, null, bullet),
            React.createElement(Heading, null, heading),
            React.createElement(Subheading, null, subheading),
            React.createElement(Stack, { spacing: '20px', direction: 'row' }, Object.keys(timeLeft).map(function (timeName, index) {
                var remaining = timeLeft[timeName];
                var isLast = index === Object.keys(timeLeft).length - 1;
                return (React.createElement(Stack, { direction: 'row', spacing: '20px', key: timeName },
                    React.createElement(Stack, { spacing: '10px', align: 'center' },
                        React.createElement(Box, null, remaining.split('').map(function (d, i) { return (React.createElement(AnimatedDigit, { digit: d, key: i })); })),
                        React.createElement(Box, { letterSpacing: '2px', opacity: 0.6 }, timeName.toUpperCase())),
                    !isLast && (React.createElement(Box, { opacity: 0.8, fontSize: '52px' }, ":"))));
            })),
            cta && (React.createElement(Col, { justify: 'center', align: 'center' }, clone(cta))))));
}
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
    var _b = useState('translate3d(0, 0, 0)'), translate = _b[0], setTranslate = _b[1];
    // console.log({ translate })
    useEffect(function () {
        var y = -Number(digit) * height;
        setTranslate("translate3d(0, ".concat(y, "px, 0)"));
    }, [digit]);
    return (React.createElement(Box, __assign({ fontSize: fontSize, height: fontSize, lineHeight: fontSize, mx: '2px', display: 'inline-block', overflow: 'hidden' }, rest),
        React.createElement(Box, { transition: '0.3s ease all', transform: translate }, '0123456789'.split('').map(function (d) { return (React.createElement(Box, { key: d, height: height }, d)); }))));
};
