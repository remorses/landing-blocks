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
import { Bullet } from './Bullet';
import { Heading } from './Heading';
import { useFaded } from './hooks';
import { Col, PageContainer } from './layout';
import { Subheading } from './Subheading';
import { clone } from './support';
export function Feature(_a) {
    var heading = _a.heading, subheading = _a.subheading, _b = _a.bullet, bullet = _b === void 0 ? '' : _b, _c = _a.image, image = _c === void 0 ? null : _c, _d = _a.flip, flip = _d === void 0 ? false : _d, _e = _a.cta, cta = _e === void 0 ? '' : _e, _f = _a.animate, animate = _f === void 0 ? undefined : _f, _g = _a.direction, direction = _g === void 0 ? 'row' : _g, rest = __rest(_a, ["heading", "subheading", "bullet", "image", "flip", "cta", "animate", "direction"]);
    var dir = function (direction) { return (flip ? "".concat(direction, "-reverse") : direction); };
    var Faded = useFaded({ animate: animate }).Faded;
    return (React.createElement(PageContainer, __assign({ py: '80px' }, rest),
        React.createElement(Stack, { align: 'center', 
            // spacing='40px'
            justifyItems: 'space-between', 
            // isReversed={flip}
            direction: ['column', null, dir(direction)] },
            React.createElement(Stack, { as: Faded, spacing: '30px', flex: '1', minW: '300px' },
                bullet && React.createElement(Bullet, { my: '10px' }, bullet),
                React.createElement(Heading, { lineHeight: '50px', fontWeight: 'medium', fontSize: 'heading' }, heading),
                React.createElement(Subheading, { lineHeight: '34px', opacity: 0.6, fontWeight: 'normal', fontSize: 'text' }, subheading),
                cta && React.createElement(Box, null, clone(cta))),
            React.createElement(Box, { minW: '40px', minH: '40px' }),
            React.createElement(Col, { as: Faded, align: 'center', flex: '1', minW: '300px' }, image))));
}
