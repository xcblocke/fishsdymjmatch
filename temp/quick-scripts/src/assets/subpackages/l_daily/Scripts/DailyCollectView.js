"use strict";
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