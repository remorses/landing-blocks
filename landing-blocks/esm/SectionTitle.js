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
import { Bullet } from './Bullet';
import { Heading } from './Heading';
import { useFaded } from './hooks';
import { Col, PageContainer } from './layout';
import { Subheading } from './Subheading';
import { clone } from './support';
export function SectionTitle(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, _d = _a.bullet, bullet = _d === void 0 ? '' : _d, _e = _a.cta, cta = _e === void 0 ? '' : _e, _f = _a.animate, animate = _f === void 0 ? undefined : _f, rest = __rest(_a, ["heading", "subheading", "bullet", "cta", "animate"]);
    var Faded = useFaded({ animate: animate }).Faded;
    return (React.createElement(PageContainer, __assign({}, rest),
        React.createElement(Stack, { as: Faded, alignSelf: 'center', maxW: '700px', spacing: '30px', align: 'center', textAlign: 'center' },
            React.createElement(Bullet, null, bullet),
            React.createElement(Heading, null, heading),
            React.createElement(Subheading, null, subheading),
            cta && (React.createElement(Col, { justify: 'center', align: 'center' }, clone(cta))))));
}
