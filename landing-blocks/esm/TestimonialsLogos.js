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
import { Stack } from '@chakra-ui/react';
import React from 'react';
import { Heading } from './Heading';
import { useFaded } from './hooks';
import { Col, PageContainer } from './layout';
import { Subheading } from './Subheading';
export function TestimonialsLogos(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, testimonials = _a.testimonials, _d = _a.animate, animate = _d === void 0 ? undefined : _d, rest = __rest(_a, ["heading", "subheading", "testimonials", "animate"]);
    var Faded = useFaded({ animate: animate }).Faded;
    return (React.createElement(PageContainer, __assign({ spacing: '40px', py: '20px' }, rest),
        (heading || subheading) && (React.createElement(Stack, { align: 'center', spacing: '20px' },
            React.createElement(Heading, { as: 'h2' }, heading),
            React.createElement(Subheading, null, subheading))),
        React.createElement(Stack, { as: Faded, direction: ['column', 'column', 'row'], justify: 'space-evenly', spacing: '40px', align: 'center' }, testimonials.map(function (x, i) { return (React.createElement(Col, { key: i, minW: ['100%', '100%', '160px'], align: 'center' },
            React.createElement(Col, { opacity: 0.7, minH: '80px', w: '160px', justify: 'center', align: 'center' }, x))); }))));
}
