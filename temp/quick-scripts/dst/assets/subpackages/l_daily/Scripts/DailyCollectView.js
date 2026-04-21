
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyCollectView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad7d5BSL6JN6ZAKujyuZa1R', 'DailyCollectView');
// subpackages/l_daily/Scripts/DailyCollectView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DailyTypes_1 = require("./DailyTypes");
var DailyCollectListView_1 = require("./DailyCollectListView");
var JourneyCollectListView_1 = require("./JourneyCollectListView");
var DailyModel_1 = require("./DailyModel");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var DailyCollectView = /** @class */ (function (_super) {
    __extends(DailyCollectView, _super);
    function DailyCollectView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._scrollViewNode = null;
        _this._scrollViewNode0 = null;
        _this._btnBack = null;
        _this._btnDaily = null;
        _this._btnJourney = null;
        _this._labDaily = null;
        _this._labJourney = null;
        _this._txtTitle = null;
        _this._itemEmpty = null;
        _this._txtEmpty = null;
        _this._dailyListView = null;
        _this._journeyListView = null;
        _this._dataList = [];
        _this._currentType = DailyTypes_1.DisplayType.Daily;
        return _this;
    }
    DailyCollectView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUserInfoUI();
        this.initDailyListView();
        this.registerEvents();
    };
    DailyCollectView.prototype.initDailyListView = function () {
        this._dailyListView = this._scrollViewNode.addComponent(DailyCollectListView_1.default);
        this._scrollViewNode.node.active = false;
        this._journeyListView = this._scrollViewNode0.addComponent(JourneyCollectListView_1.default);
        this._scrollViewNode0.node.active = false;
    };
    DailyCollectView.prototype.initUserInfoUI = function () { };
    DailyCollectView.prototype.registerEvents = function () {
        this.OnButtonClick(this._btnJourney.node, {
            func: this.onJourneyTabClick.bind(this),
            clickAudio: DailyTypes_1.EDailyAudioID.DailyMonthSlide,
            eventType: cc.Node.EventType.TOUCH_START
        });
        this.OnButtonClick(this._btnDaily.node, {
            func: this.onDailyTabClick.bind(this),
            clickAudio: DailyTypes_1.EDailyAudioID.DailyMonthSlide,
            eventType: cc.Node.EventType.TOUCH_START
        });
        this.OnButtonClick(this._btnBack.node, this.onCloseClick.bind(this));
        mj.EventManager.on("openDailyView", this.onOpenDailyView, this);
    };
    DailyCollectView.prototype.onJourneyTabClick = function () {
        if (this._currentType !== DailyTypes_1.DisplayType.Journey) {
            this._currentType = DailyTypes_1.DisplayType.Journey;
            this.updateTabButtonState(DailyTypes_1.DisplayType.Journey);
            this.delegate.setCurrentType(DailyTypes_1.DisplayType.Journey);
        }
    };
    DailyCollectView.prototype.onDailyTabClick = function () {
        if (this._currentType !== DailyTypes_1.DisplayType.Daily) {
            this._currentType = DailyTypes_1.DisplayType.Daily;
            this.updateTabButtonState(DailyTypes_1.DisplayType.Daily);
            this.delegate.setCurrentType(DailyTypes_1.DisplayType.Daily);
        }
    };
    DailyCollectView.prototype.onCloseClick = function () {
        DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.Closed);
        this.delegate.closeView();
    };
    DailyCollectView.prototype.updateTabButtonState = function (t) {
        var e = t === DailyTypes_1.DisplayType.Journey;
        this._currentType = t;
        this._btnJourney && (this._btnJourney.node.opacity = e ? 255 : 0);
        this._btnDaily && (this._btnDaily.node.opacity = e ? 0 : 255);
        this._labJourney && (this._labJourney.node.opacity = e ? 0 : 255);
        this._labDaily && (this._labDaily.node.opacity = e ? 255 : 0);
    };
    DailyCollectView.prototype.showDataList = function (t) {
        this._dataList = t;
        this._scrollViewNode.node.active = this._currentType === DailyTypes_1.DisplayType.Daily;
        this._scrollViewNode0.node.active = this._currentType === DailyTypes_1.DisplayType.Journey;
        var e = false, i = "";
        if (this._currentType === DailyTypes_1.DisplayType.Daily) {
            DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.Daily);
            this._dailyListView.refreshList(this._dataList);
            e = !DailyModel_1.default.getInstance().isOpen();
            i = "Badges_DailyChallenge_Nothing";
        }
        else {
            DGameBtnClick_1.DotGameBtnClick.dotBadge(DGameBtnClick_1.EBadgeClickType.Journey);
            this._journeyListView.refreshList(this._dataList);
            e = 0 == this._dataList.length;
            i = "Badges_Journey_Nothing";
        }
        this._itemEmpty.active = e;
        e && (this._txtEmpty.string = I18NStrings_1.default.get(i));
    };
    DailyCollectView.prototype.onOpenDailyView = function (t) {
        t && t.type === DailyTypes_1.DailyStatus.Unlocked && mj.EventManager.emit("openDailyView", {
            year: t.year,
            month: t.month,
            type: t.type
        });
    };
    DailyCollectView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    DailyCollectView.prefabUrl = "prefabs/daily/DailyCollectView";
    DailyCollectView.bundleName = "mainRes";
    __decorate([
        mj.component("nodeCollectView", cc.ScrollView)
    ], DailyCollectView.prototype, "_scrollViewNode", void 0);
    __decorate([
        mj.component("nodeCollectView0", cc.ScrollView)
    ], DailyCollectView.prototype, "_scrollViewNode0", void 0);
    __decorate([
        mj.component("node_top/btn_back", cc.Button)
    ], DailyCollectView.prototype, "_btnBack", void 0);
    __decorate([
        mj.component("btn_change/btn_daily", cc.Button)
    ], DailyCollectView.prototype, "_btnDaily", void 0);
    __decorate([
        mj.component("btn_change/btn_journey", cc.Button)
    ], DailyCollectView.prototype, "_btnJourney", void 0);
    __decorate([
        mj.component("btn_change/lab_deily", cc.Label)
    ], DailyCollectView.prototype, "_labDaily", void 0);
    __decorate([
        mj.component("btn_change/lab_journey", cc.Label)
    ], DailyCollectView.prototype, "_labJourney", void 0);
    __decorate([
        mj.component("node_top/txt_title", cc.Label)
    ], DailyCollectView.prototype, "_txtTitle", void 0);
    __decorate([
        mj.node("item_empty")
    ], DailyCollectView.prototype, "_itemEmpty", void 0);
    __decorate([
        mj.component("item_empty/txt_empty", cc.RichText)
    ], DailyCollectView.prototype, "_txtEmpty", void 0);
    __decorate([
        mj.traitEvent("DailyCollVw_onLoad")
    ], DailyCollectView.prototype, "onLoad", null);
    DailyCollectView = __decorate([
        mj.class
    ], DailyCollectView);
    return DailyCollectView;
}(UIView_1.default));
exports.default = DailyCollectView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlDb2xsZWN0Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXVFO0FBQ3ZFLCtEQUEwRDtBQUMxRCxtRUFBOEQ7QUFDOUQsMkNBQXNDO0FBQ3RDLCtEQUEwRDtBQUMxRCwyRUFBc0U7QUFDdEUsb0VBQXNGO0FBRXRGO0lBQThDLG9DQUFNO0lBQXBEO1FBQUEscUVBK0dDO1FBN0dDLHFCQUFlLEdBQXNCLElBQUksQ0FBQztRQUUxQyxzQkFBZ0IsR0FBdUIsSUFBSSxDQUFDO1FBRTVDLGNBQVEsR0FBd0IsSUFBSSxDQUFDO1FBRXJDLGVBQVMsR0FBMkIsSUFBSSxDQUFDO1FBRXpDLGlCQUFXLEdBQTZCLElBQUksQ0FBQztRQUU3QyxlQUFTLEdBQTJCLElBQUksQ0FBQztRQUV6QyxpQkFBVyxHQUE2QixJQUFJLENBQUM7UUFFN0MsZUFBUyxHQUF5QixJQUFJLENBQUM7UUFFdkMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBMkIsSUFBSSxDQUFDO1FBQ3pDLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysa0JBQVksR0FBRyx3QkFBVyxDQUFDLEtBQUssQ0FBQzs7SUF1Rm5DLENBQUM7SUFuRkMsaUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsNENBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyw4QkFB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O3NEQUNSO0lBRXJDO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNQO0lBRXpDO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNMO0lBRTdDO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNOO0lBRXpDO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO3lEQUNKO0lBRTdDO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNOO0lBRXZDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7d0RBQ1U7SUFFaEM7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7dURBQ1Q7SUFRekM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO2tEQU1uQztJQWpDa0IsZ0JBQWdCO1FBRHBDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksZ0JBQWdCLENBK0dwQztJQUFELHVCQUFDO0NBL0dELEFBK0dDLENBL0c2QyxnQkFBTSxHQStHbkQ7a0JBL0dvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwbGF5VHlwZSwgRURhaWx5QXVkaW9JRCwgRGFpbHlTdGF0dXMgfSBmcm9tICcuL0RhaWx5VHlwZXMnO1xuaW1wb3J0IERhaWx5Q29sbGVjdExpc3RWaWV3IGZyb20gJy4vRGFpbHlDb2xsZWN0TGlzdFZpZXcnO1xuaW1wb3J0IEpvdXJuZXlDb2xsZWN0TGlzdFZpZXcgZnJvbSAnLi9Kb3VybmV5Q29sbGVjdExpc3RWaWV3JztcbmltcG9ydCBEYWlseU1vZGVsIGZyb20gJy4vRGFpbHlNb2RlbCc7XG5pbXBvcnQgVUlWaWV3IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgeyBEb3RHYW1lQnRuQ2xpY2ssIEVCYWRnZUNsaWNrVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZG90L0RHYW1lQnRuQ2xpY2snO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseUNvbGxlY3RWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgQG1qLmNvbXBvbmVudChcIm5vZGVDb2xsZWN0Vmlld1wiLCBjYy5TY3JvbGxWaWV3KVxuICBfc2Nyb2xsVmlld05vZGU6IFwibm9kZUNvbGxlY3RWaWV3XCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwibm9kZUNvbGxlY3RWaWV3MFwiLCBjYy5TY3JvbGxWaWV3KVxuICBfc2Nyb2xsVmlld05vZGUwOiBcIm5vZGVDb2xsZWN0VmlldzBcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJub2RlX3RvcC9idG5fYmFja1wiLCBjYy5CdXR0b24pXG4gIF9idG5CYWNrOiBcIm5vZGVfdG9wL2J0bl9iYWNrXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiYnRuX2NoYW5nZS9idG5fZGFpbHlcIiwgY2MuQnV0dG9uKVxuICBfYnRuRGFpbHk6IFwiYnRuX2NoYW5nZS9idG5fZGFpbHlcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJidG5fY2hhbmdlL2J0bl9qb3VybmV5XCIsIGNjLkJ1dHRvbilcbiAgX2J0bkpvdXJuZXk6IFwiYnRuX2NoYW5nZS9idG5fam91cm5leVwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcImJ0bl9jaGFuZ2UvbGFiX2RlaWx5XCIsIGNjLkxhYmVsKVxuICBfbGFiRGFpbHk6IFwiYnRuX2NoYW5nZS9sYWJfZGVpbHlcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJidG5fY2hhbmdlL2xhYl9qb3VybmV5XCIsIGNjLkxhYmVsKVxuICBfbGFiSm91cm5leTogXCJidG5fY2hhbmdlL2xhYl9qb3VybmV5XCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwibm9kZV90b3AvdHh0X3RpdGxlXCIsIGNjLkxhYmVsKVxuICBfdHh0VGl0bGU6IFwibm9kZV90b3AvdHh0X3RpdGxlXCIgPSBudWxsO1xuICBAbWoubm9kZShcIml0ZW1fZW1wdHlcIilcbiAgX2l0ZW1FbXB0eTogXCJpdGVtX2VtcHR5XCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiaXRlbV9lbXB0eS90eHRfZW1wdHlcIiwgY2MuUmljaFRleHQpXG4gIF90eHRFbXB0eTogXCJpdGVtX2VtcHR5L3R4dF9lbXB0eVwiID0gbnVsbDtcbiAgX2RhaWx5TGlzdFZpZXcgPSBudWxsO1xuICBfam91cm5leUxpc3RWaWV3ID0gbnVsbDtcbiAgX2RhdGFMaXN0ID0gW107XG4gIF9jdXJyZW50VHlwZSA9IERpc3BsYXlUeXBlLkRhaWx5O1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL2RhaWx5L0RhaWx5Q29sbGVjdFZpZXdcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcIm1haW5SZXNcIjtcbiAgQG1qLnRyYWl0RXZlbnQoXCJEYWlseUNvbGxWd19vbkxvYWRcIilcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdFVzZXJJbmZvVUkoKTtcbiAgICB0aGlzLmluaXREYWlseUxpc3RWaWV3KCk7XG4gICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICB9XG4gIGluaXREYWlseUxpc3RWaWV3KCkge1xuICAgIHRoaXMuX2RhaWx5TGlzdFZpZXcgPSB0aGlzLl9zY3JvbGxWaWV3Tm9kZS5hZGRDb21wb25lbnQoRGFpbHlDb2xsZWN0TGlzdFZpZXcpO1xuICAgIHRoaXMuX3Njcm9sbFZpZXdOb2RlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5fam91cm5leUxpc3RWaWV3ID0gdGhpcy5fc2Nyb2xsVmlld05vZGUwLmFkZENvbXBvbmVudChKb3VybmV5Q29sbGVjdExpc3RWaWV3KTtcbiAgICB0aGlzLl9zY3JvbGxWaWV3Tm9kZTAubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuICBpbml0VXNlckluZm9VSSgpIHt9XG4gIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9idG5Kb3VybmV5Lm5vZGUsIHtcbiAgICAgIGZ1bmM6IHRoaXMub25Kb3VybmV5VGFiQ2xpY2suYmluZCh0aGlzKSxcbiAgICAgIGNsaWNrQXVkaW86IEVEYWlseUF1ZGlvSUQuRGFpbHlNb250aFNsaWRlLFxuICAgICAgZXZlbnRUeXBlOiBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVFxuICAgIH0pO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9idG5EYWlseS5ub2RlLCB7XG4gICAgICBmdW5jOiB0aGlzLm9uRGFpbHlUYWJDbGljay5iaW5kKHRoaXMpLFxuICAgICAgY2xpY2tBdWRpbzogRURhaWx5QXVkaW9JRC5EYWlseU1vbnRoU2xpZGUsXG4gICAgICBldmVudFR5cGU6IGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUXG4gICAgfSk7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2J0bkJhY2subm9kZSwgdGhpcy5vbkNsb3NlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgbWouRXZlbnRNYW5hZ2VyLm9uKFwib3BlbkRhaWx5Vmlld1wiLCB0aGlzLm9uT3BlbkRhaWx5VmlldywgdGhpcyk7XG4gIH1cbiAgb25Kb3VybmV5VGFiQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUeXBlICE9PSBEaXNwbGF5VHlwZS5Kb3VybmV5KSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHlwZSA9IERpc3BsYXlUeXBlLkpvdXJuZXk7XG4gICAgICB0aGlzLnVwZGF0ZVRhYkJ1dHRvblN0YXRlKERpc3BsYXlUeXBlLkpvdXJuZXkpO1xuICAgICAgdGhpcy5kZWxlZ2F0ZS5zZXRDdXJyZW50VHlwZShEaXNwbGF5VHlwZS5Kb3VybmV5KTtcbiAgICB9XG4gIH1cbiAgb25EYWlseVRhYkNsaWNrKCkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50VHlwZSAhPT0gRGlzcGxheVR5cGUuRGFpbHkpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUeXBlID0gRGlzcGxheVR5cGUuRGFpbHk7XG4gICAgICB0aGlzLnVwZGF0ZVRhYkJ1dHRvblN0YXRlKERpc3BsYXlUeXBlLkRhaWx5KTtcbiAgICAgIHRoaXMuZGVsZWdhdGUuc2V0Q3VycmVudFR5cGUoRGlzcGxheVR5cGUuRGFpbHkpO1xuICAgIH1cbiAgfVxuICBvbkNsb3NlQ2xpY2soKSB7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdEJhZGdlKEVCYWRnZUNsaWNrVHlwZS5DbG9zZWQpO1xuICAgIHRoaXMuZGVsZWdhdGUuY2xvc2VWaWV3KCk7XG4gIH1cbiAgdXBkYXRlVGFiQnV0dG9uU3RhdGUodCkge1xuICAgIHZhciBlID0gdCA9PT0gRGlzcGxheVR5cGUuSm91cm5leTtcbiAgICB0aGlzLl9jdXJyZW50VHlwZSA9IHQ7XG4gICAgdGhpcy5fYnRuSm91cm5leSAmJiAodGhpcy5fYnRuSm91cm5leS5ub2RlLm9wYWNpdHkgPSBlID8gMjU1IDogMCk7XG4gICAgdGhpcy5fYnRuRGFpbHkgJiYgKHRoaXMuX2J0bkRhaWx5Lm5vZGUub3BhY2l0eSA9IGUgPyAwIDogMjU1KTtcbiAgICB0aGlzLl9sYWJKb3VybmV5ICYmICh0aGlzLl9sYWJKb3VybmV5Lm5vZGUub3BhY2l0eSA9IGUgPyAwIDogMjU1KTtcbiAgICB0aGlzLl9sYWJEYWlseSAmJiAodGhpcy5fbGFiRGFpbHkubm9kZS5vcGFjaXR5ID0gZSA/IDI1NSA6IDApO1xuICB9XG4gIHNob3dEYXRhTGlzdCh0KSB7XG4gICAgdGhpcy5fZGF0YUxpc3QgPSB0O1xuICAgIHRoaXMuX3Njcm9sbFZpZXdOb2RlLm5vZGUuYWN0aXZlID0gdGhpcy5fY3VycmVudFR5cGUgPT09IERpc3BsYXlUeXBlLkRhaWx5O1xuICAgIHRoaXMuX3Njcm9sbFZpZXdOb2RlMC5ub2RlLmFjdGl2ZSA9IHRoaXMuX2N1cnJlbnRUeXBlID09PSBEaXNwbGF5VHlwZS5Kb3VybmV5O1xuICAgIHZhciBlID0gZmFsc2UsXG4gICAgICBpID0gXCJcIjtcbiAgICBpZiAodGhpcy5fY3VycmVudFR5cGUgPT09IERpc3BsYXlUeXBlLkRhaWx5KSB7XG4gICAgICBEb3RHYW1lQnRuQ2xpY2suZG90QmFkZ2UoRUJhZGdlQ2xpY2tUeXBlLkRhaWx5KTtcbiAgICAgIHRoaXMuX2RhaWx5TGlzdFZpZXcucmVmcmVzaExpc3QodGhpcy5fZGF0YUxpc3QpO1xuICAgICAgZSA9ICFEYWlseU1vZGVsLmdldEluc3RhbmNlKCkuaXNPcGVuKCk7XG4gICAgICBpID0gXCJCYWRnZXNfRGFpbHlDaGFsbGVuZ2VfTm90aGluZ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBEb3RHYW1lQnRuQ2xpY2suZG90QmFkZ2UoRUJhZGdlQ2xpY2tUeXBlLkpvdXJuZXkpO1xuICAgICAgdGhpcy5fam91cm5leUxpc3RWaWV3LnJlZnJlc2hMaXN0KHRoaXMuX2RhdGFMaXN0KTtcbiAgICAgIGUgPSAwID09IHRoaXMuX2RhdGFMaXN0Lmxlbmd0aDtcbiAgICAgIGkgPSBcIkJhZGdlc19Kb3VybmV5X05vdGhpbmdcIjtcbiAgICB9XG4gICAgdGhpcy5faXRlbUVtcHR5LmFjdGl2ZSA9IGU7XG4gICAgZSAmJiAodGhpcy5fdHh0RW1wdHkuc3RyaW5nID0gSTE4TlN0cmluZ3MuZ2V0KGkpKTtcbiAgfVxuICBvbk9wZW5EYWlseVZpZXcodCkge1xuICAgIHQgJiYgdC50eXBlID09PSBEYWlseVN0YXR1cy5VbmxvY2tlZCAmJiBtai5FdmVudE1hbmFnZXIuZW1pdChcIm9wZW5EYWlseVZpZXdcIiwge1xuICAgICAgeWVhcjogdC55ZWFyLFxuICAgICAgbW9udGg6IHQubW9udGgsXG4gICAgICB0eXBlOiB0LnR5cGVcbiAgICB9KTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gIH1cbn0iXX0=