"use strict";
cc._RF.push(module, 'a9615sFR81FBpI29KHRTNNs', 'UILanguageSelector');
// subpackages/l_languageSelector/Scripts/UILanguageSelector.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UILanguageSelector = void 0;
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var UILanguageItem_1 = require("./UILanguageItem");
var LanguageSelectorTrait_1 = require("./LanguageSelectorTrait");
var TableView_1 = require("../../../Scripts/TableView");
var UILanguageSelector = /** @class */ (function (_super) {
    __extends(UILanguageSelector, _super);
    function UILanguageSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._dialogContent = null;
        _this._scrollView = null;
        _this._tableView = null;
        _this._closeBtn = null;
        _this._data = [];
        return _this;
    }
    UILanguageSelector.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUI();
        this.initEvents();
    };
    UILanguageSelector.prototype.start = function () {
        _super.prototype.start.call(this);
        this.initTableView();
    };
    UILanguageSelector.prototype.initUI = function () {
        var t;
        if (cc.isValid(this.node)) {
            this._dialogContent = this.node.getChildByName("content");
            if (cc.isValid(this._dialogContent)) {
                var e = this._dialogContent.getChildByName("top_bg");
                cc.isValid(e) && (this._closeBtn = e.getChildByName("btn_close"));
                this._scrollView = null === (t = this._dialogContent.getChildByName("scrollView")) || void 0 === t ? void 0 : t.getComponent(cc.ScrollView);
            }
        }
    };
    UILanguageSelector.prototype.initEvents = function () {
        this._closeBtn && this.OnButtonClick(this._closeBtn, this.onCloseBtnClick.bind(this));
    };
    UILanguageSelector.prototype.initTableView = function () {
        var t = this;
        if (this._scrollView) {
            var e = LanguageSelectorTrait_1.default.getInstance();
            if (e) {
                var o = e.getLanguages();
                this._data = o.concat();
                this._scrollView.content.removeAllChildren();
                this._tableView = new TableView_1.TableView({
                    view: this._scrollView,
                    isReused: true,
                    isCellActive: false
                });
                this._tableView.cellSizeForTable = function () {
                    return cc.size(680, 165);
                };
                this._tableView.numberOfCellsInTableView = function () {
                    return t._data.length;
                };
                this._tableView.cellAtIndex = function (e, o) {
                    var n = t.getItemCell(o), a = t.getItemCellCmp(n);
                    if (a) {
                        a.setOnClick(t.onLanguageSelect.bind(t));
                        a.updateCell(t._data[o]);
                    }
                    return n;
                };
                this.reSortLanguageList();
            }
        }
    };
    UILanguageSelector.prototype.getItemCell = function () {
        var t = this._tableView.dequeueCellByKey("languageItem");
        t || (t = UILanguageItem_1.UILanguageItem.createCell("languageItem"));
        return t;
    };
    UILanguageSelector.prototype.getItemCellCmp = function (t) {
        return t.getComponent(UILanguageItem_1.UILanguageItem);
    };
    UILanguageSelector.prototype.reSortLanguageList = function () {
        var t = LanguageSelectorTrait_1.default.getInstance();
        if (t) {
            var e = t.getCurrentLanguage(), o = this._data.find(function (t) {
                return t.code === e;
            }), n = this._data.filter(function (t) {
                return t.code !== e;
            });
            o && (this._data = __spreadArrays([o], n));
            this._tableView.reloadData();
        }
    };
    UILanguageSelector.prototype.onLanguageSelect = function (t) {
        var e = LanguageSelectorTrait_1.default.getInstance();
        e && e.setLanguage(t);
        this.refreshAllVisibleCells();
    };
    UILanguageSelector.prototype.refreshAllVisibleCells = function () {
        this._tableView && this._tableView.getCurrentCells().forEach(function (t) {
            if (cc.isValid(t)) {
                var e = t.getComponent(UILanguageItem_1.UILanguageItem);
                e && e.getData() && e.updateCell(e.getData());
            }
        });
    };
    UILanguageSelector.prototype.onCloseBtnClick = function () {
        this.closeDialog();
    };
    UILanguageSelector.prototype.closeDialog = function () {
        this.delegate.close();
    };
    UILanguageSelector.prefabUrl = "prefabs/ui/language/UILanguageSelector";
    __decorate([
        mj.traitEvent("LangSelVw_start")
    ], UILanguageSelector.prototype, "start", null);
    __decorate([
        mj.traitEvent("LangSelUI_initTV")
    ], UILanguageSelector.prototype, "initTableView", null);
    __decorate([
        mj.traitEvent("LangSelUI_getItemCell")
    ], UILanguageSelector.prototype, "getItemCell", null);
    __decorate([
        mj.traitEvent("LangSelUI_getItemCellCmp")
    ], UILanguageSelector.prototype, "getItemCellCmp", null);
    UILanguageSelector = __decorate([
        mj.class
    ], UILanguageSelector);
    return UILanguageSelector;
}(UIView_1.default));
exports.UILanguageSelector = UILanguageSelector;

cc._RF.pop();