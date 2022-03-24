"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pricing = void 0;
var react_1 = require("@chakra-ui/react");
var color_js_1 = __importDefault(require("color-js"));
var react_2 = require("@chakra-ui/react");
var react_3 = __importStar(require("react"));
var Heading_1 = require("./Heading");
var hooks_1 = require("./hooks");
var layout_1 = require("./layout");
var support_1 = require("./support");
var featureLineMinH = '36px';
var featuresWidth = '370px';
var pricingHeaderMinH = '160px';
var pricingNamesMinH = '60px';
function Pricing(_a) {
    var _b = _a.heading, heading = _b === void 0 ? 'Simple Pricing' : _b, _c = _a.subheading, subheading = _c === void 0 ? 'Real value for your work life' : _c, _d = _a.features, features = _d === void 0 ? [] : _d, _e = _a.prices, prices = _e === void 0 ? [] : _e, _f = _a.animate, animate = _f === void 0 ? undefined : _f, rest = __rest(_a, ["heading", "subheading", "features", "prices", "animate"]);
    var belowPrice = '/ month';
    var colorMode = (0, hooks_1.useMyColorMode)(rest).colorMode;
    return (react_3.default.createElement(layout_1.PageContainer, __assign({}, rest),
        react_3.default.createElement(react_2.Stack, { direction: ['column', null, 'row'] },
            react_3.default.createElement(react_2.Stack, { minW: featuresWidth, display: ['none', null, 'flex'] },
                react_3.default.createElement(react_2.Stack, { minH: pricingNamesMinH },
                    react_3.default.createElement(react_2.Box, { fontWeight: 'medium', fontSize: 'subheading' }, heading),
                    react_3.default.createElement(react_2.Box, { opacity: 0.7 }, subheading)),
                react_3.default.createElement(react_2.Box, { h: pricingHeaderMinH }),
                react_3.default.createElement(react_2.Stack, { direction: 'row' },
                    react_3.default.createElement(react_2.Stack, { spacing: '20px' }, features.map(function (x) { return (react_3.default.createElement(react_2.Box, { textAlign: 'right', minH: featureLineMinH }, x)); })))),
            react_3.default.createElement(react_2.Stack, { align: 'center', display: ['flex', null, 'none'] },
                react_3.default.createElement(react_2.Box, { fontWeight: 'medium', fontSize: 'subheading' }, heading),
                react_3.default.createElement(react_2.Box, { opacity: 0.7 }, subheading),
                react_3.default.createElement(react_2.Box, { h: '100px' })),
            react_3.default.createElement(react_2.Stack, { align: ['center', null, 'flex-start'], w: '100%', direction: ['column', null, 'row'], justify: 'space-between', spacing: ['100px'] }, prices.map(function (x) { return (react_3.default.createElement(react_2.Box, { w: '100%', h: '100%' },
                react_3.default.createElement(react_1.Divider, { display: ['block', null, 'none'] }),
                react_3.default.createElement(PriceColumn, { priceSection: x, belowPrice: belowPrice, features: features, dark: colorMode === 'dark', h: '100%', w: ['100%', null, '200px'] }),
                react_3.default.createElement(react_1.Divider, { display: ['block', null, 'none'] }))); })))));
}
exports.Pricing = Pricing;
function PriceColumn(_a) {
    var priceSection = _a.priceSection, belowPrice = _a.belowPrice, features = _a.features, dark = _a.dark, rest = __rest(_a, ["priceSection", "belowPrice", "features", "dark"]);
    var realBg = (0, support_1.useColor)(priceSection.background || (dark ? '#000' : '#fff'));
    var lightness = (0, color_js_1.default)(realBg).getLightness();
    var isDark = lightness < 0.7;
    var Mode = isDark ? react_1.DarkMode : react_3.Fragment;
    return (react_3.default.createElement(react_2.Stack, __assign({ align: 'center' }, rest),
        react_3.default.createElement(react_2.Stack, { align: 'center', minH: ['none', null, pricingNamesMinH], maxH: ['none', null, pricingNamesMinH] },
            react_3.default.createElement(react_2.Box, { fontWeight: 'medium' }, priceSection.heading),
            react_3.default.createElement(react_2.Box, { fontSize: 'subtext', opacity: 0.7 }, priceSection.subheading)),
        react_3.default.createElement(Mode, null,
            react_3.default.createElement(react_2.Stack, __assign({ w: '100%', h: '100%', align: 'center', bg: priceSection.background || 'transparent', borderRadius: '10px' }, (isDark ? layout_1.darkStyles : {}), { p: ['20px', null, '0'] }),
                react_3.default.createElement(react_2.Stack, { align: 'center', spacing: '10px', minH: ['none', null, pricingHeaderMinH], maxH: ['none', null, pricingHeaderMinH], py: '20px' },
                    react_3.default.createElement(Heading_1.Heading, { textAlign: 'center', fontWeight: 'semibold' }, priceSection.price),
                    react_3.default.createElement(react_2.Box, { fontSize: 'subtext', opacity: 0.7 }, belowPrice)),
                react_3.default.createElement(react_2.Stack, { spacing: '20px' }, features.map(function (x, i) {
                    var feature = priceSection.features[i];
                    if (!feature) {
                        return null;
                    }
                    return (react_3.default.createElement(react_2.Stack, { minH: featureLineMinH, px: ['10px', null, '0px'] },
                        react_3.default.createElement(react_2.Box, { display: ['block', null, 'none'], opacity: 0.6, fontWeight: 'normal' }, x),
                        react_3.default.createElement(react_2.Box, null, feature)));
                })),
                react_3.default.createElement(react_2.Box, { flex: '1' }),
                react_3.default.createElement(react_2.Stack, { p: '20px', fontWeight: 'medium', align: 'center', minH: '30px' }, priceSection.cta)))));
}
