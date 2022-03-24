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
import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { Heading } from './Heading';
import { Subheading } from './Subheading';
import { useFaded } from './hooks';
import { PageContainer } from './layout';
export function HowItWorks(_a) {
    var heading = _a.heading, subheading = _a.subheading, steps = _a.steps, _b = _a.animate, animate = _b === void 0 ? undefined : _b, rest = __rest(_a, ["heading", "subheading", "steps", "animate"]);
    var Faded = useFaded({ animate: animate }).Faded;
    return (React.createElement(PageContainer, __assign({ spacing: '40px', py: '60px' }, rest),
        React.createElement(Stack, { as: Faded, spacing: '40px', flex: '1', textAlign: 'center', align: 'center' },
            React.createElement(Heading, { lineHeight: '50px' }, heading),
            React.createElement(Subheading, { maxW: '700px' }, subheading)),
        React.createElement(Stack, { align: 'stretch', spacing: '60px', flex: '1' }, steps.map(function (step, i) { return (React.createElement(Step, __assign({ key: i, animate: animate, number: i + 1, flip: i % 2 !== 0 }, step))); }))));
}
var Step = function (_a) {
    var heading = _a.heading, subheading = _a.subheading, number = _a.number, image = _a.image, decorativeHeading = _a.decorativeHeading, _b = _a.flip, flip = _b === void 0 ? false : _b, _c = _a.animate, animate = _c === void 0 ? undefined : _c, rest = __rest(_a, ["heading", "subheading", "number", "image", "decorativeHeading", "flip", "animate"]);
    var Faded = useFaded({ animate: animate }).Faded;
    return (React.createElement(Stack, __assign({ justify: 'space-between', align: 'center', direction: ['column', null, flip ? 'row-reverse' : 'row'], spacing: '40px' }, rest),
        React.createElement(Stack, { as: Faded, minW: '300px', maxW: '500px', flex: '1', spacing: '40px' },
            React.createElement(Stack, { direction: 'row', align: 'flex-end', opacity: 0.4 },
                React.createElement(Box, { opacity: 0.7, lineHeight: '60px', fontSize: '80px' }, number),
                React.createElement(Heading, { isTruncated: true, maxW: '300px', fontWeight: 'bold', fontSize: 'text' },
                    React.createElement(Box, { d: 'inline', mx: '0.6em', children: ' . ' }),
                    decorativeHeading || heading)),
            React.createElement(Subheading, { opacity: 0.8, fontWeight: 'medium' }, heading),
            React.createElement(Box, { maxW: '400px', fontWeight: 'medium', lineHeight: '1.8em', opacity: 0.5, fontSize: 'subtext' }, subheading)),
        React.createElement(Box, { as: Faded, minW: '300px', maxW: '500px', flex: '1' }, image)));
};
