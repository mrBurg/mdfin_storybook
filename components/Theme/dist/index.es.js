var AbstractRoles;
(function (AbstractRoles) {
    AbstractRoles["roletype"] = "roletype";
    AbstractRoles["window"] = "window";
    AbstractRoles["widget"] = "widget";
    AbstractRoles["structure"] = "structure";
    AbstractRoles["command"] = "command";
    AbstractRoles["composite"] = "composite";
    AbstractRoles["landmark"] = "landmark";
    AbstractRoles["section"] = "section";
    AbstractRoles["sectionhead"] = "sectionhead";
    AbstractRoles["input"] = "input";
    AbstractRoles["select"] = "select";
    AbstractRoles["range"] = "range";
    AbstractRoles["presentation"] = "presentation";
})(AbstractRoles || (AbstractRoles = {}));
var WidgetRoles;
(function (WidgetRoles) {
    WidgetRoles["alert"] = "alert";
    WidgetRoles["button"] = "button";
    WidgetRoles["checkbox"] = "checkbox";
    WidgetRoles["radio"] = "radio";
    WidgetRoles["radiogroup"] = "radiogroup";
    WidgetRoles["dialog"] = "dialog";
    WidgetRoles["grid"] = "grid";
    WidgetRoles["gridcell"] = "gridcell";
    WidgetRoles["link"] = "link";
    WidgetRoles["log"] = "log";
    WidgetRoles["marquee"] = "marquee";
    WidgetRoles["menu"] = "menu";
    WidgetRoles["menubar"] = "menubar";
    WidgetRoles["menuitem"] = "menuitem";
    WidgetRoles["option"] = "option";
    WidgetRoles["listbox"] = "listbox";
    WidgetRoles["progressbar"] = "progressbar";
    WidgetRoles["scrollbar"] = "scrollbar";
    WidgetRoles["combobox"] = "combobox";
    WidgetRoles["textbox"] = "textbox";
    WidgetRoles["slider"] = "slider";
    WidgetRoles["Status"] = "Status";
    WidgetRoles["tab"] = "tab";
    WidgetRoles["tabpanel"] = "tabpanel";
    WidgetRoles["timer"] = "timer";
    WidgetRoles["tooltip"] = "tooltip";
    WidgetRoles["tree"] = "tree";
    WidgetRoles["treeitem"] = "treeitem";
})(WidgetRoles || (WidgetRoles = {}));
var DocumentStructureRoles;
(function (DocumentStructureRoles) {
    DocumentStructureRoles["document"] = "document";
    DocumentStructureRoles["article"] = "article";
    DocumentStructureRoles["definition"] = "definition";
    DocumentStructureRoles["directory"] = "directory";
    DocumentStructureRoles["group"] = "group";
    DocumentStructureRoles["heading"] = "heading";
    DocumentStructureRoles["img"] = "img";
    DocumentStructureRoles["list"] = "list";
    DocumentStructureRoles["listitem"] = "listitem";
    DocumentStructureRoles["math"] = "math";
    DocumentStructureRoles["region"] = "region";
    DocumentStructureRoles["row"] = "row";
    DocumentStructureRoles["toolbar"] = "toolbar";
    DocumentStructureRoles["note"] = "note";
})(DocumentStructureRoles || (DocumentStructureRoles = {}));
var LandmarkRoles;
(function (LandmarkRoles) {
    LandmarkRoles["application"] = "application";
    LandmarkRoles["banner"] = "banner";
    LandmarkRoles["complementary"] = "complementary";
    LandmarkRoles["contentinfo"] = "contentinfo";
    LandmarkRoles["form"] = "form";
    LandmarkRoles["main"] = "main";
    LandmarkRoles["navigation"] = "navigation";
    LandmarkRoles["search"] = "search";
})(LandmarkRoles || (LandmarkRoles = {}));
var NonStandardRoles;
(function (NonStandardRoles) {
    NonStandardRoles["textWithHTML"] = "text-with-HTML";
})(NonStandardRoles || (NonStandardRoles = {}));

var roles = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get AbstractRoles () { return AbstractRoles; },
  get DocumentStructureRoles () { return DocumentStructureRoles; },
  get LandmarkRoles () { return LandmarkRoles; },
  get NonStandardRoles () { return NonStandardRoles; },
  get WidgetRoles () { return WidgetRoles; }
});

var WidgetAria;
(function (WidgetAria) {
    WidgetAria["ariaAutocomplete"] = "aria-autocomplete";
    WidgetAria["ariaChecked"] = "aria-checked";
    WidgetAria["ariaDisabled"] = "aria-disabled";
    WidgetAria["ariaExpanded"] = "aria-expanded";
    WidgetAria["ariaHidden"] = "aria-hidden";
    WidgetAria["ariaMultiline"] = "aria-multiline";
    WidgetAria["ariaMultiselectable"] = "aria-multiselectable";
    WidgetAria["ariaOrientation"] = "aria-orientation";
    WidgetAria["ariaReadonly"] = "aria-readonly";
    WidgetAria["ariaRequired"] = "aria-required";
    WidgetAria["ariaSelected"] = "aria-selected";
    WidgetAria["ariaSort"] = "aria-sort";
})(WidgetAria || (WidgetAria = {}));
var LiveRegionAria;
(function (LiveRegionAria) {
    LiveRegionAria["ariaBusy"] = "aria-busy";
    LiveRegionAria["ariaLive"] = "aria-live";
})(LiveRegionAria || (LiveRegionAria = {}));
var DragAndDropAria;
(function (DragAndDropAria) {
    DragAndDropAria["ariaGrabbed"] = "aria-grabbed";
    DragAndDropAria["ariaDropeffect"] = "aria-dropeffect";
})(DragAndDropAria || (DragAndDropAria = {}));
var RelationAria;
(function (RelationAria) {
    RelationAria["ariaActivedescendant"] = "aria-activedescendant";
    RelationAria["ariaControls"] = "aria-controls";
    RelationAria["ariaDescribedb"] = "aria-describedb";
    RelationAria["ariaOwns"] = "aria-owns";
    RelationAria["ariaPosinset"] = "aria-posinset";
    RelationAria["ariaSetsize"] = "aria-setsize";
})(RelationAria || (RelationAria = {}));

var arias = /*#__PURE__*/Object.freeze({
  __proto__: null,
  get DragAndDropAria () { return DragAndDropAria; },
  get LiveRegionAria () { return LiveRegionAria; },
  get RelationAria () { return RelationAria; },
  get WidgetAria () { return WidgetAria; }
});

function Theme() {
    return {};
}

var constants$1 = {"font-size":"16px","black":"#040404","white":"#ffffff","gray-dark":"#373742","gray":"#707070","gray-light":"#e1e1e1","gray-misty":"#f6f7fb","orange-dark":"#dfa700","orange":"#fec601","orange-light":"#ffd174","orange-misty":"#fff69e","blue-dark":"#1256aa","blue":"#2a70c8","blue-light":"#65a1ee","blue-misty":"#8bb5eb","indigo":"#25025d","green-dark":"#2d9031","green":"#4caf50","green-light":"#6bce6f","green-misty":"#b3ebaa","red-dark":"#af0008","red":"#ed1b22","red-light":"#ed3046","red-misty":"#eb7678","yellow-dark":"#eabe4f","yellow":"#fccc51","yellow-misty":"#fdfac8","rose-dark":"#50263a","rose":"#a8899d","rose-light":"#f5f0f9","rose-misty":"#eddbec","pink":"#bb5285","violet-dark":"#482c42","violet":"#6a385f","violet-light":"#865e7e","violet-misty":"#bebcdc","graphite-dark":"#1b242f","graphite":"#2c3e50","border":"#a8a8a8","xxs":"320px","small":"360px","xs":"480px","mob":"560px","sm":"640px","md":"768px","tab":"880px","lg":"960px","medium":"1150px","xl":"1200px","xxl":"1440px","fontSize":"16px","grayDark":"#373742","grayLight":"#e1e1e1","grayMisty":"#f6f7fb","orangeDark":"#dfa700","orangeLight":"#ffd174","orangeMisty":"#fff69e","blueDark":"#1256aa","blueLight":"#65a1ee","blueMisty":"#8bb5eb","greenDark":"#2d9031","greenLight":"#6bce6f","greenMisty":"#b3ebaa","redDark":"#af0008","redLight":"#ed3046","redMisty":"#eb7678","yellowDark":"#eabe4f","yellowMisty":"#fdfac8","roseDark":"#50263a","roseLight":"#f5f0f9","roseMisty":"#eddbec","violetDark":"#482c42","violetLight":"#865e7e","violetMisty":"#bebcdc","graphiteDark":"#1b242f"};

var constants = {
    roles: roles,
    arias: arias,
};

export { Theme, constants, constants$1 as scssConstants };
