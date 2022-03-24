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
import styled from '@emotion/styled';
import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { Heading } from './Heading';
import { useFaded } from './hooks';
import { Col, PageContainer } from './layout';
import { Subheading } from './Subheading';
export function TestimonialsTweets(_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, _c = _a.subheading, subheading = _c === void 0 ? '' : _c, _d = _a.tweets, tweets = _d === void 0 ? [] : _d, _e = _a.animate, animate = _e === void 0 ? undefined : _e, rest = __rest(_a, ["heading", "subheading", "tweets", "animate"]);
    tweets = tweets.map(convertUrlToTweetId);
    var Faded = useFaded({ animate: animate }).Faded;
    return (React.createElement(PageContainer, __assign({ spacing: '20px', py: '20px' }, rest),
        (heading || subheading) && (React.createElement(Stack, { align: 'center', spacing: '20px' },
            React.createElement(Heading, { as: 'h2' }, heading),
            React.createElement(Subheading, null, subheading))),
        React.createElement(Stack, { as: Faded, 
            // direction={['column', 'column', 'row']}
            direction: 'row', flexWrap: 'wrap', justify: 'space-evenly', align: 'center', minW: '100%' }, tweets.map(function (id, i) { return (React.createElement(Col, { m: '10px', key: i, minW: '260px', shadow: 'md', borderRadius: 'lg', overflow: 'hidden' },
            React.createElement(Unclickable, { height: 'calc(fit-content - 20px)' },
                React.createElement(TwitterTweetEmbed
                // style={{paddingBottom: 0, marginBottom: 0}}
                , { 
                    // style={{paddingBottom: 0, marginBottom: 0}}
                    placeholder: React.createElement(Box, { bg: '#fff', width: '400px', border: '1px solid #ddd', borderRadius: '10px', height: '200px' }), tweetId: id })))); }))));
}
var Unclickable = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    pointer-events: none;\n    .twitter-tweet {\n        margin-bottom: 0px !important;\n    }\n"], ["\n    pointer-events: none;\n    .twitter-tweet {\n        margin-bottom: 0px !important;\n    }\n"])));
function convertUrlToTweetId(url) {
    if (url.startsWith('http')) {
        var path = new URL(url).pathname;
        return path.split('/').reverse()[0];
    }
    return url;
}
var templateObject_1;
