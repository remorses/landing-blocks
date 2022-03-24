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
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Heading } from '@chakra-ui/react';
import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { useFaded } from './hooks';
import { PageContainer } from './layout';
import { Subheading } from './Subheading';
export function Faqs(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, faqs = _a.faqs, _d = _a.animate, animate = _d === void 0 ? undefined : _d, rest = __rest(_a, ["heading", "subheading", "faqs", "animate"]);
    var Faded = useFaded({ animate: animate }).Faded;
    return (React.createElement(PageContainer, __assign({}, rest),
        React.createElement(Stack, { as: Faded, alignSelf: 'center', spacing: '30px', align: 'center', textAlign: 'center', minWidth: '100%' },
            React.createElement(Heading, null, heading),
            React.createElement(Subheading, { fontSize: 'text', maxW: '700px' }, subheading),
            React.createElement(Accordion, { allowToggle: true, minWidth: '100%' }, faqs.map(function (x) { return (React.createElement(AccordionItem, { key: x.question.toString(), minWidth: '100%' },
                React.createElement(AccordionButton, { minH: '60px' },
                    React.createElement(Box, { fontSize: '24px', fontWeight: 'medium', flex: '1', textAlign: 'left' }, x.question),
                    React.createElement(AccordionIcon, { boxSize: '40px' })),
                React.createElement(AccordionPanel, { py: '20px', minH: '100px', textAlign: 'left' }, x.answer))); })))));
}
