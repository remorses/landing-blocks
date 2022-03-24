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
import { PageContainer } from './layout';
export function Footer(_a) {
    var _b = _a.columns, columns = _b === void 0 ? {} : _b, _c = _a.businessName, businessName = _c === void 0 ? 'Monster Inc.' : _c, rest = __rest(_a, ["columns", "businessName"]);
    return (React.createElement(PageContainer, __assign({ fontWeight: 'medium', py: '60px', minHeight: '200px', spacing: '60px' }, rest),
        React.createElement(Stack, { direction: ['column', null, 'row'], justifyContent: 'space-evenly', spacing: '60px' }, Object.keys(columns).map(function (k, i) {
            return (React.createElement(Stack, { minW: ['100%', '100%', '0'], spacing: '20px', key: i },
                React.createElement(Box, { d: 'block', fontWeight: 'medium', width: 'auto', textAlign: 'left' }, k),
                columns[k].map(function (x, i) { return (React.createElement(Box, { opacity: 0.6, key: i }, x)); })));
        })),
        React.createElement(Box, { width: 'auto', opacity: 0.6, fontSize: 'sm', alignSelf: 'center' },
            "Copyright \u00A9 ",
            new Date().getFullYear(),
            " ",
            businessName)));
}
