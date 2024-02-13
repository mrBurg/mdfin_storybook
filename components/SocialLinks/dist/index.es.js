import classNames from 'classnames';
import * as React from 'react';
import React__default, { useState, useEffect } from 'react';
import _ from 'lodash';
import { LinkWidget, REL, TARGET } from 'mdfin-link-widget';

var scss = {"socialLinks":"SocialLinks_socialLinks__GIq2Y"};

var _path;
function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var SvgFb = function SvgFb(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    width: 28,
    height: 28,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22.373 2.288a2.797 2.797 0 0 1 2.796 2.796v17.29a2.797 2.797 0 0 1-2.796 2.795h-4.758v-8.621h2.977l.566-3.693h-3.543V10.46c0-1.01.495-1.994 2.082-1.994h1.61V5.32s-1.461-.25-2.859-.25c-2.917 0-4.824 1.769-4.824 4.97v2.814H10.38v3.693h3.243v8.62h-8.54a2.797 2.797 0 0 1-2.796-2.795V5.083a2.797 2.797 0 0 1 2.796-2.795h17.29Z",
    fill: "#482C42"
  })));
};

var _g$1, _defs$1;
function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var SvgLinkedin = function SvgLinkedin(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    width: 28,
    height: 28,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$1 || (_g$1 = /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#linkedin_svg__a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.903 2.288A4.497 4.497 0 0 0 2.42 6.772v13.914a4.497 4.497 0 0 0 4.483 4.483h13.914a4.496 4.496 0 0 0 4.483-4.483V6.772a4.497 4.497 0 0 0-4.483-4.484H6.903Zm1.128 3.776c1.182 0 1.91.776 1.933 1.796 0 .998-.75 1.796-1.956 1.796h-.022c-1.16 0-1.91-.798-1.91-1.796 0-1.02.773-1.796 1.955-1.796Zm10.188 4.768c2.274 0 3.979 1.487 3.979 4.68v5.962h-3.456v-5.562c0-1.398-.5-2.351-1.75-2.351-.955 0-1.524.642-1.774 1.263-.091.222-.114.533-.114.843v5.807H11.65s.045-9.422 0-10.398h3.456v1.473c.46-.709 1.28-1.717 3.114-1.717Zm-11.938.245h3.455v10.397H6.281V11.077Z",
    fill: "#482C42"
  }))), _defs$1 || (_defs$1 = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "linkedin_svg__a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    transform: "translate(.132)",
    d: "M0 0h27.457v27.457H0z"
  })))));
};

var _g, _defs;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgTwitter = function SvgTwitter(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 28,
    height: 28,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#twitter_svg__a)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9.55 22.88c8.634 0 13.356-7.482 13.356-13.972 0-.212 0-.424-.013-.634a9.81 9.81 0 0 0 2.342-2.542 9.052 9.052 0 0 1-2.697.772 4.896 4.896 0 0 0 2.064-2.716 9.16 9.16 0 0 1-2.98 1.192 4.605 4.605 0 0 0-3.424-1.548c-2.577 0-4.698 2.219-4.698 4.915 0 .375.04.747.121 1.112C9.85 9.26 6.33 7.394 3.946 4.329 2.708 6.558 3.35 9.45 5.4 10.882a4.504 4.504 0 0 1-2.13-.614v.062c0 2.329 1.583 4.353 3.765 4.814a4.488 4.488 0 0 1-2.12.084c.614 1.996 2.383 3.371 4.387 3.41a9.16 9.16 0 0 1-5.83 2.107c-.374-.001-.747-.025-1.118-.071a12.869 12.869 0 0 0 7.196 2.202",
    fill: "#482C42"
  }))), _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "twitter_svg__a"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#fff",
    transform: "translate(.066)",
    d: "M0 0h27.457v27.457H0z"
  })))));
};

var _a;
var socialLinkList;
(function (socialLinkList) {
    socialLinkList["FB"] = "Facebook";
    socialLinkList["TW"] = "Twitter";
    socialLinkList["LI"] = "Linkedin";
    socialLinkList["IG"] = "Instagram";
    socialLinkList["YT"] = "Youtube";
})(socialLinkList || (socialLinkList = {}));
var socialLinkDataList = (_a = {},
    _a[socialLinkList.FB] = {
        name: socialLinkList.FB,
        href: 'https://www.facebook.com',
        icon: React__default.createElement(SvgFb, null),
    },
    _a[socialLinkList.TW] = {
        name: socialLinkList.TW,
        href: 'https://twitter.com',
        icon: React__default.createElement(SvgTwitter, null),
    },
    _a[socialLinkList.LI] = {
        name: socialLinkList.LI,
        href: 'https://www.linkedin.com',
        icon: React__default.createElement(SvgLinkedin, null),
    },
    _a[socialLinkList.IG] = {
        name: socialLinkList.IG,
        href: 'https://www.instagram.com',
    },
    _a[socialLinkList.YT] = {
        name: socialLinkList.YT,
        href: 'https://www.youtube.com',
    },
    _a);
function SocialLinks(props) {
    var socialLinks = props.socialLinks, className = props.className;
    var _a = useState(null), styleClass = _a[0], setStyleClass = _a[1];
    useEffect(function () {
        setStyleClass(classNames(scss.socialLinks, className));
    }, [className]);
    return (React__default.createElement("div", { className: styleClass }, _.map(socialLinks, function (item) {
        var linkData = socialLinkDataList[socialLinkList[item]];
        var href = linkData.href;
        if (props[item]) {
            href = String(props[item]);
        }
        return (React__default.createElement(LinkWidget, { key: item, rel: REL.NOREFERRER, target: TARGET.BLANK, href: href }, linkData.icon || linkData.name));
    })));
}

export { SocialLinks, socialLinkDataList, socialLinkList };
