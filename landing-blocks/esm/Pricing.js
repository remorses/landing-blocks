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
import { DarkMode, Divider } from '@chakra-ui/react';
import Color from 'color-js';
import { Box, Stack } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { Heading } from './Heading';
import { useMyColorMode } from './hooks';
import { darkStyles, PageContainer } from './layout';
import { useColor } from './support';
var featureLineMinH = '36px';
var featuresWidth = '370px';
var pricingHeaderMinH = '160px';
var pricingNamesMinH = '60px';
export function Pricing(_a) {
    var _b = _a.heading, heading = _b === void 0 ? 'Simple Pricing' : _b, _c = _a.subheading, subheading = _c === void 0 ? 'Real value for your work life' : _c, _d = _a.features, features = _d === void 0 ? [] : _d, _e = _a.prices, prices = _e === void 0 ? [] : _e, _f = _a.animate, animate = _f === void 0 ? undefined : _f, rest = __rest(_a, ["heading", "subheading", "features", "prices", "animate"]);
    var belowPrice = '/ month';
    var colorMode = useMyColorMode(rest).colorMode;
    return (React.createElement(PageContainer, __assign({}, rest),
        React.createElement(Stack, { direction: ['column', null, 'row'] },
            React.createElement(Stack, { minW: featuresWidth, display: ['none', null, 'flex'] },
                React.createElement(Stack, { minH: pricingNamesMinH },
                    React.createElement(Box, { fontWeight: 'medium', fontSize: 'subheading' }, heading),
                    React.createElement(Box, { opacity: 0.7 }, subheading)),
                React.createElement(Box, { h: pricingHeaderMinH }),
                React.createElement(Stack, { direction: 'row' },
                    React.createElement(Stack, { spacing: '20px' }, features.map(function (x) { return (React.createElement(Box, { textAlign: 'right', minH: featureLineMinH }, x)); })))),
            React.createElement(Stack, { align: 'center', display: ['flex', null, 'none'] },
                React.createElement(Box, { fontWeight: 'medium', fontSize: 'subheading' }, heading),
                React.createElement(Box, { opacity: 0.7 }, subheading),
                React.createElement(Box, { h: '100px' })),
            React.createElement(Stack, { align: ['center', null, 'flex-start'], w: '100%', direction: ['column', null, 'row'], justify: 'space-between', spacing: ['100px'] }, prices.map(function (x) { return (React.createElement(Box, { w: '100%', h: '100%' },
                React.createElement(Divider, { display: ['block', null, 'none'] }),
                React.createElement(PriceColumn, { priceSection: x, belowPrice: belowPrice, features: features, dark: colorMode === 'dark', h: '100%', w: ['100%', null, '200px'] }),
                React.createElement(Divider, { display: ['block', null, 'none'] }))); })))));
}
function PriceColumn(_a) {
    var priceSection = _a.priceSection, belowPrice = _a.belowPrice, features = _a.features, dark = _a.dark, rest = __rest(_a, ["priceSection", "belowPrice", "features", "dark"]);
    var realBg = useColor(priceSection.background || (dark ? '#000' : '#fff'));
    var lightness = Color(realBg).getLightness();
    var isDark = lightness < 0.7;
    var Mode = isDark ? DarkMode : Fragment;
    return (React.createElement(Stack, __assign({ align: 'center' }, rest),
        React.createElement(Stack, { align: 'center', minH: ['none', null, pricingNamesMinH], maxH: ['none', null, pricingNamesMinH] },
            React.createElement(Box, { fontWeight: 'medium' }, priceSection.heading),
            React.createElement(Box, { fontSize: 'subtext', opacity: 0.7 }, priceSection.subheading)),
        React.createElement(Mode, null,
            React.createElement(Stack, __assign({ w: '100%', h: '100%', align: 'center', bg: priceSection.background || 'transparent', borderRadius: '10px' }, (isDark ? darkStyles : {}), { p: ['20px', null, '0'] }),
                React.createElement(Stack, { align: 'center', spacing: '10px', minH: ['none', null, pricingHeaderMinH], maxH: ['none', null, pricingHeaderMinH], py: '20px' },
                    React.createElement(Heading, { textAlign: 'center', fontWeight: 'semibold' }, priceSection.price),
                    React.createElement(Box, { fontSize: 'subtext', opacity: 0.7 }, belowPrice)),
                React.createElement(Stack, { spacing: '20px' }, features.map(function (x, i) {
                    var feature = priceSection.features[i];
                    if (!feature) {
                        return null;
                    }
                    return (React.createElement(Stack, { minH: featureLineMinH, px: ['10px', null, '0px'] },
                        React.createElement(Box, { display: ['block', null, 'none'], opacity: 0.6, fontWeight: 'normal' }, x),
                        React.createElement(Box, null, feature)));
                })),
                React.createElement(Box, { flex: '1' }),
                React.createElement(Stack, { p: '20px', fontWeight: 'medium', align: 'center', minH: '30px' }, priceSection.cta)))));
}
