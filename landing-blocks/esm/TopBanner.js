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
import { PageContainer } from './layout';
export function TopBanner(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.cta, cta = _c === void 0 ? '' : _c, _d = _a.bullet, bullet = _d === void 0 ? '' : _d, rest = __rest(_a, ["heading", "cta", "bullet"]);
    return (React.createElement(PageContainer, __assign({ py: '10px' }, rest),
        React.createElement(Stack, { alignSelf: 'center', spacing: '10px', direction: 'row', align: 'center', justify: 'center' },
            React.createElement(Bullet, null, bullet),
            React.createElement(Box, null, heading),
            React.createElement(Box, null, cta))));
}
