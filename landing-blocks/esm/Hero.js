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
/** @jsxRuntime classic */
// @jsx jsx
import { jsx } from '@emotion/react';
import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { Bullet } from './Bullet';
import { Heading } from './Heading';
import { useFaded } from './hooks';
import { Col, PageContainer, Row } from './layout';
import { Subheading } from './Subheading';
import { clone } from './support';
jsx;
export function Hero(_a) {
    var heading = _a.heading, subheading = _a.subheading, cta = _a.cta, image = _a.image, _b = _a.bullet, bullet = _b === void 0 ? '' : _b, _c = _a.fingerprint, fingerprint = _c === void 0 ? '' : _c, _d = _a.animate, animate = _d === void 0 ? undefined : _d, rest = __rest(_a, ["heading", "subheading", "cta", "image", "bullet", "fingerprint", "animate"]);
    var Faded = useFaded({ animate: animate }).Faded;
    return (React.createElement(PageContainer, __assign({}, rest),
        React.createElement(Row, { justify: image ? 'flex-start' : 'center', w: '100%', direction: ['column', 'column', 'row'], align: 'center' },
            React.createElement(Stack, { as: Faded, maxW: ['100%', null, image ? '60%' : '100%'], minW: '33%', spacing: '40px', align: [
                    'center',
                    'center',
                    image ? 'flex-start' : 'center',
                ], textAlign: ['center', 'center', image ? 'left' : 'center'] },
                React.createElement(Col, { align: [
                        'center',
                        null,
                        image ? 'flex-start' : 'center',
                    ] },
                    bullet && React.createElement(Bullet, { my: '10px' }, bullet),
                    React.createElement(Heading, { fontSize: '46px' }, heading)),
                React.createElement(Subheading, { maxW: '700px' }, subheading),
                React.createElement(Stack, { spacing: '6px', align: ['center', 'center', 'flex-start'] },
                    React.createElement(Box, null, clone(cta)),
                    React.createElement(Box, { opacity: 0.6, fontSize: 'subtext', lineHeight: '26px' }, fingerprint))),
            image && (React.createElement(Row, { direction: ['column', null, 'row'], as: Faded, flex: '1' },
                React.createElement(Box, { ml: '40px', mt: '40px', flex: '1' }),
                React.createElement(Col, { align: 'center' }, image))))));
}
