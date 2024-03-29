import _ from 'lodash';
import classNames from 'classnames';
import React, { useState, useCallback, useEffect } from 'react';
import { SliderWidget } from 'mdfin-slider-widget';
import { LinkWidget, SimpleLinkTypes } from 'mdfin-link-widget';

var scss = {"font-size":"16px","black":"#040404","white":"#ffffff","gray-dark":"#373742","gray":"#707070","gray-light":"#e1e1e1","gray-misty":"#f6f7fb","orange-dark":"#dfa700","orange":"#fec601","orange-light":"#ffd174","orange-misty":"#fff69e","blue-dark":"#1256aa","blue":"#2a70c8","blue-light":"#65a1ee","blue-misty":"#8bb5eb","indigo":"#25025d","green-dark":"#2d9031","green":"#4caf50","green-light":"#6bce6f","green-misty":"#b3ebaa","red-dark":"#af0008","red":"#ed1b22","red-light":"#ed3046","red-misty":"#eb7678","yellow-dark":"#eabe4f","yellow":"#fccc51","yellow-misty":"#fdfac8","rose-dark":"#50263a","rose":"#a8899d","rose-light":"#f5f0f9","rose-misty":"#eddbec","pink":"#bb5285","violet-dark":"#482c42","violet":"#6a385f","violet-light":"#865e7e","violet-misty":"#bebcdc","graphite-dark":"#1b242f","graphite":"#2c3e50","border":"#a8a8a8","xxs":"320px","small":"360px","xs":"480px","mob":"560px","sm":"640px","md":"768px","tab":"880px","lg":"960px","medium":"1150px","xl":"1200px","xxl":"1440px","productSelector":"ProductSelector_productSelector__PT0JI","slider":"ProductSelector_slider__74mtV","sliderItem":"ProductSelector_sliderItem__BrG-L","button":"ProductSelector_button__h90lW","buttonHolder":"ProductSelector_buttonHolder__1isbQ","fontSize":"16px","grayDark":"#373742","grayLight":"#e1e1e1","grayMisty":"#f6f7fb","orangeDark":"#dfa700","orangeLight":"#ffd174","orangeMisty":"#fff69e","blueDark":"#1256aa","blueLight":"#65a1ee","blueMisty":"#8bb5eb","greenDark":"#2d9031","greenLight":"#6bce6f","greenMisty":"#b3ebaa","redDark":"#af0008","redLight":"#ed3046","redMisty":"#eb7678","yellowDark":"#eabe4f","yellowMisty":"#fdfac8","roseDark":"#50263a","roseLight":"#f5f0f9","roseMisty":"#eddbec","violetDark":"#482c42","violetLight":"#865e7e","violetMisty":"#bebcdc","graphiteDark":"#1b242f"};

function ProductSelector(props) {
    var className = props.className, amountSign = props.amountSign, amountText = props.amountText, amountStep = props.amountStep, amountMin = props.amountMin, amountMax = props.amountMax, amountMarks = props.amountMarks, onAmountChangeHandler = props.onAmountChangeHandler, termSign = props.termSign, termText = props.termText, termStep = props.termStep, termMin = props.termMin, termMax = props.termMax, termMarks = props.termMarks, onTermChangeHandler = props.onTermChangeHandler, buttonText = props.buttonText;
    var _a = useState(null), styleClass = _a[0], setStyleClass = _a[1];
    var getValue = useCallback(function (marks, currentValue) {
        if (_.size(marks) && marks[currentValue]) {
            return marks[currentValue].label;
        }
        return '';
    }, []);
    var _b = useState(getValue(amountMarks, amountMin)), amounOutputData = _b[0], setAmounOutputData = _b[1];
    var _c = useState(getValue(termMarks, termMin)), termOutputData = _c[0], setTermOutputData = _c[1];
    var onAmountOnChangeHandler = useCallback(function (value) {
        setAmounOutputData(getValue(amountMarks, value));
        if (onAmountChangeHandler) {
            onAmountChangeHandler(value);
        }
    }, []);
    var onTermOnChangeHandler = useCallback(function (value) {
        setTermOutputData(getValue(termMarks, value));
        if (onTermChangeHandler) {
            onTermChangeHandler(value);
        }
    }, []);
    useEffect(function () {
        setStyleClass(classNames(scss.productSelector, className));
    }, [className]);
    return (React.createElement("div", { className: styleClass },
        React.createElement("div", { className: scss.slider },
            React.createElement(SliderWidget, { output: true, outputData: amounOutputData, sign: amountSign, outputText: amountText, className: scss.sliderItem, marks: amountMarks, step: amountStep, min: amountMin, max: amountMax, defaultValue: amountMin, onChange: function (data) { return onAmountOnChangeHandler(data); } }),
            React.createElement(SliderWidget, { output: true, outputData: termOutputData, sign: termSign, outputText: termText, className: scss.sliderItem, marks: termMarks, step: termStep, min: termMin, max: termMax, defaultValue: termMin, onChange: function (data) { return onTermOnChangeHandler(data); } })),
        React.createElement("div", { className: scss.buttonHolder },
            React.createElement(LinkWidget, { type: SimpleLinkTypes.INLINE_BLOCK, className: scss.button }, buttonText))));
}

export { ProductSelector };
