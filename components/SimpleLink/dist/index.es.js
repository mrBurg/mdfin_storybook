import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { constants } from 'mdfin-theme';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var scss = {"font-size":"16px","black":"#040404","white":"#ffffff","gray-dark":"#373742","gray":"#707070","gray-light":"#e1e1e1","gray-misty":"#f6f7fb","orange-dark":"#dfa700","orange":"#fec601","orange-light":"#ffd174","orange-misty":"#fff69e","blue-dark":"#1256aa","blue":"#2a70c8","blue-light":"#65a1ee","blue-misty":"#8bb5eb","indigo":"#25025d","green-dark":"#2d9031","green":"#4caf50","green-light":"#6bce6f","green-misty":"#b3ebaa","red-dark":"#af0008","red":"#ed1b22","red-light":"#ed3046","red-misty":"#eb7678","yellow-dark":"#eabe4f","yellow":"#fccc51","yellow-misty":"#fdfac8","rose-dark":"#50263a","rose":"#a8899d","rose-light":"#f5f0f9","rose-misty":"#eddbec","pink":"#bb5285","violet-dark":"#482c42","violet":"#6a385f","violet-light":"#865e7e","violet-misty":"#bebcdc","graphite-dark":"#1b242f","graphite":"#2c3e50","border":"#a8a8a8","xxs":"320px","small":"360px","xs":"480px","mob":"560px","sm":"640px","md":"768px","tab":"880px","lg":"960px","medium":"1150px","xl":"1200px","xxl":"1440px","simpleLink":"SimpleLink_simpleLink__SPB76","inlineBlock":"SimpleLink_inlineBlock__DkCyx","inline":"SimpleLink_inline__A-eh-","fontSize":"16px","grayDark":"#373742","grayLight":"#e1e1e1","grayMisty":"#f6f7fb","orangeDark":"#dfa700","orangeLight":"#ffd174","orangeMisty":"#fff69e","blueDark":"#1256aa","blueLight":"#65a1ee","blueMisty":"#8bb5eb","greenDark":"#2d9031","greenLight":"#6bce6f","greenMisty":"#b3ebaa","redDark":"#af0008","redLight":"#ed3046","redMisty":"#eb7678","yellowDark":"#eabe4f","yellowMisty":"#fdfac8","roseDark":"#50263a","roseLight":"#f5f0f9","roseMisty":"#eddbec","violetDark":"#482c42","violetLight":"#865e7e","violetMisty":"#bebcdc","graphiteDark":"#1b242f"};

var WidgetRoles = constants.roles.WidgetRoles;
var TARGET;
(function (TARGET) {
    TARGET["BLANK"] = "_blank";
    TARGET["SELF"] = "_self";
    TARGET["TOP"] = "_top";
    TARGET["PARENT"] = "_parent";
})(TARGET || (TARGET = {}));
var REL;
(function (REL) {
    REL["NOREFERRER"] = "noreferrer";
    REL["NOOPENER"] = "noopener";
})(REL || (REL = {}));
var SimpleLinkTypes;
(function (SimpleLinkTypes) {
    SimpleLinkTypes["INLINE_BLOCK"] = "inlineBlock";
    SimpleLinkTypes["INLINE"] = "inline";
})(SimpleLinkTypes || (SimpleLinkTypes = {}));
function SimpleLink(props) {
    var _a = props.type, type = _a === void 0 ? SimpleLinkTypes.INLINE : _a, _b = props.role, role = _b === void 0 ? WidgetRoles.link : _b, className = props.className, children = props.children, restProps = __rest(props, ["type", "role", "className", "children"]);
    var _c = useState(null), styleClass = _c[0], setStyleClass = _c[1];
    useEffect(function () {
        setStyleClass(classNames('simple-link', scss.simpleLink, scss[type], className));
    }, [className]);
    return (React.createElement("a", __assign({}, restProps, { role: role, className: styleClass }), children));
}

export { REL, SimpleLink, SimpleLinkTypes, TARGET };
