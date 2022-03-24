"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialsTweets = void 0;
var styled_1 = __importDefault(require("@emotion/styled"));
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var react_twitter_embed_1 = require("react-twitter-embed");
var Heading_1 = require("./Heading");
var hooks_1 = require("./hooks");
var layout_1 = require("./layout");
var Subheading_1 = require("./Subheading");
function TestimonialsTweets(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, _d = _a.tweets, tweets = _d === void 0 ? [] : _d, _e = _a.animate, animate = _e === void 0 ? undefined : _e, rest = __rest(_a, ["heading", "subheading", "tweets", "animate"]);
    tweets = tweets.map(convertUrlToTweetId);
    var Faded = (0, hooks_1.useFaded)({ animate: animate }).Faded;
    return (react_2.default.createElement(layout_1.PageContainer, __assign({ spacing: '20px', py: '20px' }, rest),
        (heading || subheading) && (react_2.default.createElement(react_1.Stack, { align: 'center', spacing: '20px' },
            react_2.default.createElement(Heading_1.Heading, { as: 'h2' }, heading),
            react_2.default.createElement(Subheading_1.Subheading, null, subheading))),
        react_2.default.createElement(react_1.Stack, { as: Faded, 
            // direction={['column', 'column', 'row']}
            direction: 'row', flexWrap: 'wrap', justify: 'space-evenly', align: 'center', minW: '100%' }, tweets.map(function (id, i) { return (react_2.default.createElement(layout_1.Col, { m: '10px', key: i, minW: '260px', shadow: 'md', borderRadius: 'lg', overflow: 'hidden' },
            react_2.default.createElement(Unclickable, { height: 'calc(fit-content - 20px)' },
                react_2.default.createElement(react_twitter_embed_1.TwitterTweetEmbed
                // style={{paddingBottom: 0, marginBottom: 0}}
                , { 
                    // style={{paddingBottom: 0, marginBottom: 0}}
                    placeholder: react_2.default.createElement(react_1.Box, { bg: '#fff', width: '400px', border: '1px solid #ddd', borderRadius: '10px', height: '200px' }), tweetId: id })))); }))));
}
exports.TestimonialsTweets = TestimonialsTweets;
var Unclickable = (0, styled_1.default)(react_1.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    pointer-events: none;\n    .twitter-tweet {\n        margin-bottom: 0px !important;\n    }\n"], ["\n    pointer-events: none;\n    .twitter-tweet {\n        margin-bottom: 0px !important;\n    }\n"])));
function convertUrlToTweetId(url) {
    if (url.startsWith('http')) {
        var path = new URL(url).pathname;
        return path.split('/').reverse()[0];
    }
    return url;
}
var templateObject_1;
