import React, { useState } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { LinkWidget, SimpleLinkTypes, TARGET } from 'mdfin-link-widget';
import { ButtonWidget, BUTTON_TYPE, BUTTON_LAYOUT } from 'mdfin-button-widget';

var scss = {"font-size":"16px","black":"#040404","white":"#ffffff","gray-dark":"#373742","gray":"#707070","gray-light":"#e1e1e1","gray-misty":"#f6f7fb","orange-dark":"#dfa700","orange":"#fec601","orange-light":"#ffd174","orange-misty":"#fff69e","blue-dark":"#1256aa","blue":"#2a70c8","blue-light":"#65a1ee","blue-misty":"#8bb5eb","indigo":"#25025d","green-dark":"#2d9031","green":"#4caf50","green-light":"#6bce6f","green-misty":"#b3ebaa","red-dark":"#af0008","red":"#ed1b22","red-light":"#ed3046","red-misty":"#eb7678","yellow-dark":"#eabe4f","yellow":"#fccc51","yellow-misty":"#fdfac8","rose-dark":"#50263a","rose":"#a8899d","rose-light":"#f5f0f9","rose-misty":"#eddbec","pink":"#bb5285","violet-dark":"#482c42","violet":"#6a385f","violet-light":"#865e7e","violet-misty":"#bebcdc","graphite-dark":"#1b242f","graphite":"#2c3e50","border":"#a8a8a8","xxs":"320px","small":"360px","xs":"480px","mob":"560px","sm":"640px","md":"768px","tab":"TabsSwitcher_tab__Y0Kor","lg":"960px","medium":"1150px","xl":"1200px","xxl":"1440px","content":"TabsSwitcher_content__hYIUa","tabsWrap":"TabsSwitcher_tabsWrap__bof-u","active":"TabsSwitcher_active__50-7D","description":"TabsSwitcher_description__53p-9","listWrap":"TabsSwitcher_listWrap__1DpS5","tabTitle":"TabsSwitcher_tabTitle__-e6th","list":"TabsSwitcher_list__-mrKL","button":"TabsSwitcher_button__xJRTZ","img":"TabsSwitcher_img__qgFb0","image":"TabsSwitcher_image__7V-La","fontSize":"16px","grayDark":"#373742","grayLight":"#e1e1e1","grayMisty":"#f6f7fb","orangeDark":"#dfa700","orangeLight":"#ffd174","orangeMisty":"#fff69e","blueDark":"#1256aa","blueLight":"#65a1ee","blueMisty":"#8bb5eb","greenDark":"#2d9031","greenLight":"#6bce6f","greenMisty":"#b3ebaa","redDark":"#af0008","redLight":"#ed3046","redMisty":"#eb7678","yellowDark":"#eabe4f","yellowMisty":"#fdfac8","roseDark":"#50263a","roseLight":"#f5f0f9","roseMisty":"#eddbec","violetDark":"#482c42","violetLight":"#865e7e","violetMisty":"#bebcdc","graphiteDark":"#1b242f"};

function TabsSwitcher(props) {
    var tabs = props.tabs, buttonText = props.buttonText;
    var _a = useState('business'), activeTab = _a[0], setActiveItem = _a[1];
    var activeTabItem = _.filter(tabs, function (tab) { return tab.id == activeTab; })[0];
    return (React.createElement("div", { className: scss.content },
        React.createElement("div", { className: scss.tabsWrap }, _.map(tabs, function (tab, index) {
            var _a;
            return (React.createElement(ButtonWidget, { key: index, className: classNames(scss.tab, (_a = {},
                    _a['active'] = activeTab.includes(tab.id),
                    _a[scss.active] = activeTab.includes(tab.id),
                    _a)), onClick: function () { return setActiveItem(tab.id); }, type: BUTTON_TYPE.BUTTON, layout: BUTTON_LAYOUT.BUTTON }, tab.name));
        })),
        React.createElement("div", { className: scss.description },
            React.createElement("div", { className: scss.listWrap },
                React.createElement("span", { className: scss.tabTitle }, activeTabItem.title),
                React.createElement("ul", { className: scss.list }, _.map(activeTabItem.text, function (item, key) { return (React.createElement("li", { key: key }, item)); })),
                React.createElement(LinkWidget, { className: scss.buttonComponent, onClick: function () { }, type: SimpleLinkTypes.INLINE_BLOCK, target: TARGET.SELF }, buttonText)),
            React.createElement("div", { className: scss.image, style: {
                    backgroundImage: "url('".concat(activeTabItem.image, "')"),
                } }))));
}

export { TabsSwitcher };
