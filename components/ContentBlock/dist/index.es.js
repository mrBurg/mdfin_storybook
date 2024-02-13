import React, { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { ButtonWidget, BUTTON_TYPE } from 'mdfin-button-widget';

var scss = {"font-size":"16px","black":"#040404","white":"#ffffff","gray-dark":"#373742","gray":"#707070","gray-light":"#e1e1e1","gray-misty":"#f6f7fb","orange-dark":"#dfa700","orange":"#fec601","orange-light":"#ffd174","orange-misty":"#fff69e","blue-dark":"#1256aa","blue":"#2a70c8","blue-light":"#65a1ee","blue-misty":"#8bb5eb","indigo":"#25025d","green-dark":"#2d9031","green":"#4caf50","green-light":"#6bce6f","green-misty":"#b3ebaa","red-dark":"#af0008","red":"#ed1b22","red-light":"#ed3046","red-misty":"#eb7678","yellow-dark":"#eabe4f","yellow":"#fccc51","yellow-misty":"#fdfac8","rose-dark":"#50263a","rose":"#a8899d","rose-light":"#f5f0f9","rose-misty":"#eddbec","pink":"#bb5285","violet-dark":"#482c42","violet":"#6a385f","violet-light":"#865e7e","violet-misty":"#bebcdc","graphite-dark":"#1b242f","graphite":"#2c3e50","border":"#a8a8a8","xxs":"320px","small":"360px","xs":"480px","mob":"560px","sm":"640px","md":"768px","tab":"880px","lg":"960px","medium":"1150px","xl":"1200px","xxl":"1440px","contentBlock":"ContentBlock_contentBlock__sltxd","title":"ContentBlock_title__uhBsF","content":"ContentBlock_content__aqSp3","button":"ContentBlock_button__6lW6g","fontSize":"16px","grayDark":"#373742","grayLight":"#e1e1e1","grayMisty":"#f6f7fb","orangeDark":"#dfa700","orangeLight":"#ffd174","orangeMisty":"#fff69e","blueDark":"#1256aa","blueLight":"#65a1ee","blueMisty":"#8bb5eb","greenDark":"#2d9031","greenLight":"#6bce6f","greenMisty":"#b3ebaa","redDark":"#af0008","redLight":"#ed3046","redMisty":"#eb7678","yellowDark":"#eabe4f","yellowMisty":"#fdfac8","roseDark":"#50263a","roseLight":"#f5f0f9","roseMisty":"#eddbec","violetDark":"#482c42","violetLight":"#865e7e","violetMisty":"#bebcdc","graphiteDark":"#1b242f"};

function ContentBlock(props) {
    var title = props.title, content = props.content, buttonText = props.buttonText, action = props.action, className = props.className;
    var _a = useState(null), styleClass = _a[0], setStyleClass = _a[1];
    var renderTitle = useCallback(function () {
        if (title) {
            return React.createElement("h3", { className: classNames(scss.title) }, title);
        }
    }, [title]);
    var renderDefault = useCallback(function () { return React.createElement("div", { className: classNames(scss.content) }, content); }, [content]);
    var renderList = useCallback(function () { return (React.createElement("ul", { className: classNames(scss.content) }, _.map(content, function (item, index) { return (React.createElement("li", { key: index }, item)); }))); }, [content]);
    var renderContent = useCallback(function () {
        switch (true) {
            case _.isArray(content):
                return renderList();
            default:
                return renderDefault();
        }
    }, [content]);
    var renderButton = useCallback(function () {
        if (_.isFunction(action)) {
            return (React.createElement(ButtonWidget, { className: classNames(scss.button), type: BUTTON_TYPE.BUTTON, onClick: function () { return action(); } }, buttonText));
        }
    }, [action, buttonText]);
    useEffect(function () {
        setStyleClass(classNames('content-block', scss.contentBlock, className));
    }, [className]);
    return (React.createElement("div", { className: styleClass },
        renderTitle(),
        renderContent(),
        renderButton()));
}

export { ContentBlock };
