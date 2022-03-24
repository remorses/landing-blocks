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
import { useFaded } from './hooks';
import { Col, PageContainer } from './layout';
import { Subheading } from './Subheading';
export function FeaturesList(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, features = _a.features, _d = _a.centerText, centerText = _d === void 0 ? false : _d, _e = _a.animate, animate = _e === void 0 ? undefined : _e, rest = __rest(_a, ["heading", "subheading", "features", "centerText", "animate"]);
    var Faded = useFaded({ animate: animate }).Faded;
    return (React.createElement(PageContainer, __assign({ spacing: '40px' }, rest),
        heading && subheading && (React.createElement(Stack, { as: Faded, spacing: '40px', flex: '1', textAlign: 'center', align: 'center' },
            React.createElement(Heading, { lineHeight: '50px', fontWeight: 'medium', fontSize: 'heading' }, heading),
            React.createElement(Subheading, null, subheading))),
        React.createElement(Stack, { as: Faded, direction: ['column', null, 'row'], spacing: '20px', flex: '1' }, features.map(function (step, i) { return (React.createElement(Feature, __assign({ minW: ['100%', '100%', '0'], flex: '1', key: i, centerText: centerText }, step))); }))));
}
var Feature = function (_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, _d = _a.icon, icon = _d === void 0 ? '' : _d, centerText = _a.centerText, rest = __rest(_a, ["heading", "subheading", "icon", "centerText"]);
    return (React.createElement(Stack, __assign({ textAlign: centerText ? 'center' : 'left', w: 'auto', spacing: '20px', 
        // align='stretch'
        p: '40px' }, rest),
        React.createElement(Col, { minW: '40px', maxW: '140px', align: 'center', fontWeight: 'medium', alignSelf: centerText ? 'center' : 'flex-start' }, icon),
        React.createElement(Heading, { width: '100%', fontSize: 'subheading' }, heading),
        React.createElement(Box, { width: '100%', fontSize: 'text', opacity: 0.6, lineHeight: '30px' }, subheading)));
};
