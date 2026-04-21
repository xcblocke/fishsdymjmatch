
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_languageSelector/Scripts/UILanguageSelector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xhbmd1YWdlU2VsZWN0b3IvU2NyaXB0cy9VSUxhbmd1YWdlU2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsbURBQWtEO0FBQ2xELGlFQUE0RDtBQUM1RCx3REFBdUQ7QUFFdkQ7SUFBd0Msc0NBQU07SUFBOUM7UUFBQSxxRUEyR0M7UUExR0Msb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixXQUFLLEdBQUcsRUFBRSxDQUFDOztJQXNHYixDQUFDO0lBcEdDLG1DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNFLGlCQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxtQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUQsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JELEVB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LE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDL0M7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCw0Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCx3Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBcEdNLDRCQUFTLEdBQUcsd0NBQXdDLENBQUM7SUFPNUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO21EQUloQztJQWdCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7MkRBZ0NqQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQzt5REFLdEM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7NERBR3pDO0lBekVVLGtCQUFrQjtRQUQ5QixFQUFFLENBQUMsS0FBSztPQUNJLGtCQUFrQixDQTJHOUI7SUFBRCx5QkFBQztDQTNHRCxBQTJHQyxDQTNHdUMsZ0JBQU0sR0EyRzdDO0FBM0dZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVZpZXcgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCB7IFVJTGFuZ3VhZ2VJdGVtIH0gZnJvbSAnLi9VSUxhbmd1YWdlSXRlbSc7XG5pbXBvcnQgTGFuZ3VhZ2VTZWxlY3RvclRyYWl0IGZyb20gJy4vTGFuZ3VhZ2VTZWxlY3RvclRyYWl0JztcbmltcG9ydCB7IFRhYmxlVmlldyB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvVGFibGVWaWV3JztcbkBtai5jbGFzc1xuZXhwb3J0IGNsYXNzIFVJTGFuZ3VhZ2VTZWxlY3RvciBleHRlbmRzIFVJVmlldyB7XG4gIF9kaWFsb2dDb250ZW50ID0gbnVsbDtcbiAgX3Njcm9sbFZpZXcgPSBudWxsO1xuICBfdGFibGVWaWV3ID0gbnVsbDtcbiAgX2Nsb3NlQnRuID0gbnVsbDtcbiAgX2RhdGEgPSBbXTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy91aS9sYW5ndWFnZS9VSUxhbmd1YWdlU2VsZWN0b3JcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdFVJKCk7XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJMYW5nU2VsVndfc3RhcnRcIilcbiAgc3RhcnQoKSB7XG4gICAgc3VwZXIuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmluaXRUYWJsZVZpZXcoKTtcbiAgfVxuICBpbml0VUkoKSB7XG4gICAgdmFyIHQ7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSkge1xuICAgICAgdGhpcy5fZGlhbG9nQ29udGVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9kaWFsb2dDb250ZW50KSkge1xuICAgICAgICB2YXIgZSA9IHRoaXMuX2RpYWxvZ0NvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0b3BfYmdcIik7XG4gICAgICAgIGNjLmlzVmFsaWQoZSkgJiYgKHRoaXMuX2Nsb3NlQnRuID0gZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9jbG9zZVwiKSk7XG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXcgPSBudWxsID09PSAodCA9IHRoaXMuX2RpYWxvZ0NvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJzY3JvbGxWaWV3XCIpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW5pdEV2ZW50cygpIHtcbiAgICB0aGlzLl9jbG9zZUJ0biAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fY2xvc2VCdG4sIHRoaXMub25DbG9zZUJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTGFuZ1NlbFVJX2luaXRUVlwiKVxuICBpbml0VGFibGVWaWV3KCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAodGhpcy5fc2Nyb2xsVmlldykge1xuICAgICAgdmFyIGUgPSBMYW5ndWFnZVNlbGVjdG9yVHJhaXQuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHZhciBvID0gZS5nZXRMYW5ndWFnZXMoKTtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG8uY29uY2F0KCk7XG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXcuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLl90YWJsZVZpZXcgPSBuZXcgVGFibGVWaWV3KHtcbiAgICAgICAgICB2aWV3OiB0aGlzLl9zY3JvbGxWaWV3LFxuICAgICAgICAgIGlzUmV1c2VkOiB0cnVlLFxuICAgICAgICAgIGlzQ2VsbEFjdGl2ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3RhYmxlVmlldy5jZWxsU2l6ZUZvclRhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjYy5zaXplKDY4MCwgMTY1KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fdGFibGVWaWV3Lm51bWJlck9mQ2VsbHNJblRhYmxlVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdC5fZGF0YS5sZW5ndGg7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX3RhYmxlVmlldy5jZWxsQXRJbmRleCA9IGZ1bmN0aW9uIChlLCBvKSB7XG4gICAgICAgICAgdmFyIG4gPSB0LmdldEl0ZW1DZWxsKG8pLFxuICAgICAgICAgICAgYSA9IHQuZ2V0SXRlbUNlbGxDbXAobik7XG4gICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgIGEuc2V0T25DbGljayh0Lm9uTGFuZ3VhZ2VTZWxlY3QuYmluZCh0KSk7XG4gICAgICAgICAgICBhLnVwZGF0ZUNlbGwodC5fZGF0YVtvXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlU29ydExhbmd1YWdlTGlzdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkxhbmdTZWxVSV9nZXRJdGVtQ2VsbFwiKVxuICBnZXRJdGVtQ2VsbCgpIHtcbiAgICB2YXIgdCA9IHRoaXMuX3RhYmxlVmlldy5kZXF1ZXVlQ2VsbEJ5S2V5KFwibGFuZ3VhZ2VJdGVtXCIpO1xuICAgIHQgfHwgKHQgPSBVSUxhbmd1YWdlSXRlbS5jcmVhdGVDZWxsKFwibGFuZ3VhZ2VJdGVtXCIpKTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkxhbmdTZWxVSV9nZXRJdGVtQ2VsbENtcFwiKVxuICBnZXRJdGVtQ2VsbENtcCh0KSB7XG4gICAgcmV0dXJuIHQuZ2V0Q29tcG9uZW50KFVJTGFuZ3VhZ2VJdGVtKTtcbiAgfVxuICByZVNvcnRMYW5ndWFnZUxpc3QoKSB7XG4gICAgdmFyIHQgPSBMYW5ndWFnZVNlbGVjdG9yVHJhaXQuZ2V0SW5zdGFuY2UoKTtcbiAgICBpZiAodCkge1xuICAgICAgdmFyIGUgPSB0LmdldEN1cnJlbnRMYW5ndWFnZSgpLFxuICAgICAgICBvID0gdGhpcy5fZGF0YS5maW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIHQuY29kZSA9PT0gZTtcbiAgICAgICAgfSksXG4gICAgICAgIG4gPSB0aGlzLl9kYXRhLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiB0LmNvZGUgIT09IGU7XG4gICAgICAgIH0pO1xuICAgICAgbyAmJiAodGhpcy5fZGF0YSA9IFsuLi5bb10sIC4uLm5dKTtcbiAgICAgIHRoaXMuX3RhYmxlVmlldy5yZWxvYWREYXRhKCk7XG4gICAgfVxuICB9XG4gIG9uTGFuZ3VhZ2VTZWxlY3QodCkge1xuICAgIHZhciBlID0gTGFuZ3VhZ2VTZWxlY3RvclRyYWl0LmdldEluc3RhbmNlKCk7XG4gICAgZSAmJiBlLnNldExhbmd1YWdlKHQpO1xuICAgIHRoaXMucmVmcmVzaEFsbFZpc2libGVDZWxscygpO1xuICB9XG4gIHJlZnJlc2hBbGxWaXNpYmxlQ2VsbHMoKSB7XG4gICAgdGhpcy5fdGFibGVWaWV3ICYmIHRoaXMuX3RhYmxlVmlldy5nZXRDdXJyZW50Q2VsbHMoKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0KSkge1xuICAgICAgICB2YXIgZSA9IHQuZ2V0Q29tcG9uZW50KFVJTGFuZ3VhZ2VJdGVtKTtcbiAgICAgICAgZSAmJiBlLmdldERhdGEoKSAmJiBlLnVwZGF0ZUNlbGwoZS5nZXREYXRhKCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG9uQ2xvc2VCdG5DbGljaygpIHtcbiAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gIH1cbiAgY2xvc2VEaWFsb2coKSB7XG4gICAgdGhpcy5kZWxlZ2F0ZS5jbG9zZSgpO1xuICB9XG59Il19