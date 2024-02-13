import _ from 'lodash';
import classNames from 'classnames';
import React, { useMemo, useState, useEffect } from 'react';
import htmlParser from 'html-react-parser';
import Slider from 'rc-slider';
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

var scss = {"font-size":"16px","black":"#040404","white":"#ffffff","gray-dark":"#373742","gray":"#707070","gray-light":"#e1e1e1","gray-misty":"#f6f7fb","orange-dark":"#dfa700","orange":"#fec601","orange-light":"#ffd174","orange-misty":"#fff69e","blue-dark":"#1256aa","blue":"#2a70c8","blue-light":"#65a1ee","blue-misty":"#8bb5eb","indigo":"#25025d","green-dark":"#2d9031","green":"#4caf50","green-light":"#6bce6f","green-misty":"#b3ebaa","red-dark":"#af0008","red":"#ed1b22","red-light":"#ed3046","red-misty":"#eb7678","yellow-dark":"#eabe4f","yellow":"#fccc51","yellow-misty":"#fdfac8","rose-dark":"#50263a","rose":"#a8899d","rose-light":"#f5f0f9","rose-misty":"#eddbec","pink":"#bb5285","violet-dark":"#482c42","violet":"#6a385f","violet-light":"#865e7e","violet-misty":"#bebcdc","graphite-dark":"#1b242f","graphite":"#2c3e50","border":"#a8a8a8","xxs":"320px","small":"360px","xs":"480px","mob":"560px","sm":"640px","md":"768px","tab":"880px","lg":"960px","medium":"1150px","xl":"1200px","xxl":"1440px","simpleSlider":"SimpleSlider_simpleSlider__rvEuH","simpleSlider_marks":"SimpleSlider_simpleSlider_marks__X8y8K","fontSize":"16px","grayDark":"#373742","grayLight":"#e1e1e1","grayMisty":"#f6f7fb","orangeDark":"#dfa700","orangeLight":"#ffd174","orangeMisty":"#fff69e","blueDark":"#1256aa","blueLight":"#65a1ee","blueMisty":"#8bb5eb","greenDark":"#2d9031","greenLight":"#6bce6f","greenMisty":"#b3ebaa","redDark":"#af0008","redLight":"#ed3046","redMisty":"#eb7678","yellowDark":"#eabe4f","yellowMisty":"#fdfac8","roseDark":"#50263a","roseLight":"#f5f0f9","roseMisty":"#eddbec","violetDark":"#482c42","violetLight":"#865e7e","violetMisty":"#bebcdc","graphiteDark":"#1b242f","simpleSliderMarks":"SimpleSlider_simpleSlider_marks__X8y8K"};

var styleDot = {
};
var styleHandle = {
};
var styleTrack = {
};
var styleMarks = {
};
var styleData = {
	styleDot: styleDot,
	styleHandle: styleHandle,
	styleTrack: styleTrack,
	styleMarks: styleMarks
};

var AbstractRoles = constants.roles.AbstractRoles;
function SimpleSlider(props) {
    var _a = props.dots, dots = _a === void 0 ? false : _a, dotStyle = props.dotStyle, handleStyle = props.handleStyle, trackStyle = props.trackStyle, markStyle = props.markStyle, marks = props.marks, className = props.className, restProps = __rest(props, ["dots", "dotStyle", "handleStyle", "trackStyle", "markStyle", "marks", "className"]);
    var markaData = useMemo(function () {
        if (markStyle) {
            _.each(marks, function (item) {
                return (item.style = Object.assign({}, item.style, markStyle));
            });
        }
        _.each(marks, function (item) {
            if (_.isString(item.label)) {
                item.label = htmlParser(String(item.label));
            }
        });
        return marks;
    }, [markStyle]);
    var _b = useState(null), styleClass = _b[0], setStyleClass = _b[1];
    var _c = useState(null), slider = _c[0], setSlider = _c[1];
    useEffect(function () {
        var _a;
        setStyleClass(classNames(scss.simpleSlider, className, (_a = {},
            _a[scss.simpleSlider_marks] = markaData,
            _a)));
    }, [className]);
    useEffect(function () {
        setSlider(React.createElement(Slider, __assign({}, restProps, { role: AbstractRoles.range, dots: dots, dotStyle: Object.assign({}, styleData.styleDot, dotStyle), handleStyle: Object.assign({}, styleData.styleHandle, handleStyle), trackStyle: Object.assign({}, styleData.styleTrack, trackStyle), marks: markaData })));
    }, [className]);
    return React.createElement("div", { className: styleClass }, slider);
}

export { SimpleSlider };
