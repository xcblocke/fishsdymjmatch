"use strict";
cc._RF.push(module, 'f6b2bb625FOs4YKuUHXDD0o', 'TravelActiveView');
// Scripts/view/TravelActiveView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var I18NStrings_1 = require("../framework/data/I18NStrings");
var ControllerManager_1 = require("../framework/manager/ControllerManager");
var UIView_1 = require("../framework/ui/UIView");
var BaseSprite_1 = require("../gamePlay/base/ui/BaseSprite");
var DGameBtnClick_1 = require("../dot/DGameBtnClick");
var TravelConfig_1 = require("../config/TravelConfig");
var TravelGameModel_1 = require("../gamePlay/travel/model/TravelGameModel");
var TravelActiveView = /** @class */ (function (_super) {
    __extends(TravelActiveView, _super);
    function TravelActiveView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.closeBtn = null;
        _this.titleLabel = null;
        _this.descLabel = null;
        _this.timerLabel = null;
        _this.playBtn = null;
        _this.playBtnLabel = null;
        _this.journeyIcon = null;
        _this.config = null;
        _this.isNewSession = false;
        return _this;
    }
    TravelActiveView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.closeBtn, this.onCloseBtnClick.bind(this));
        this.OnButtonClick(this.playBtn, this.onPlayBtnClick.bind(this));
    };
    TravelActiveView.prototype.getMessageListeners = function () {
        var _e = {};
        _e[TravelConfig_1.TRAVEL_GAME_SESSION_END] = this.onTravelGameSessionEnd.bind(this);
        return _e;
    };
    TravelActiveView.prototype.onTravelGameSessionEnd = function () {
        var e;
        null === (e = this.delegate) || void 0 === e || e.close();
    };
    TravelActiveView.prototype.viewDidLoad = function (e) {
        this.config = e.config;
        this.isNewSession = e.isNewSession;
        var t = __read(this.getOpenImg(this.config.openImg), 2), o = t[0], n = t[1];
        I18NStrings_1.default.setText(this.titleLabel.node, "Adventure", this.config.name);
        I18NStrings_1.default.setText(this.descLabel.node, this.config.openDesc, this.config.openDesc);
        BaseSprite_1.default.refreshWithNode(this.journeyIcon.node, n, false, false, o);
        this.updateTime();
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.TravelDialogDisplayed);
    };
    TravelActiveView.prototype.getOpenImg = function (e) {
        var t = e.split(":");
        return 2 === t.length ? [t[0], "texture/" + t[1]] : ["mainRes", "texture/journeyMap/" + e];
    };
    TravelActiveView.prototype.viewDidShow = function () { };
    TravelActiveView.prototype.updateTime = function () {
        var e = this, t = TravelGameModel_1.default.getInstance().getRemainTime();
        this.isNewSession && (t = this.config.duration);
        var o = __read(GameUtils_1.default.getRemainTimeParts(t), 4), n = o[0], i = o[1], r = (o[2], o[3], function (e) {
            return e.toString().padStart(2, "0");
        });
        I18NStrings_1.default.setText(this.timerLabel.node, r(n) + "d" + r(i) + "h", "Common_CountDown_Hour", [n, i]);
        this.isNewSession || this.scheduleOnce(function () {
            e.updateTime();
        }, 5);
    };
    TravelActiveView.prototype.onCloseBtnClick = function () {
        var e;
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.TravelDialogClosed);
        null === (e = this.delegate) || void 0 === e || e.close();
    };
    TravelActiveView.prototype.onPlayBtnClick = function () {
        var e;
        if (TravelGameModel_1.default.getInstance().isSessionActive() || this.isNewSession) {
            this.isNewSession && this.dispatchEvent(TravelConfig_1.TRAVEL_GAME_SESSION_START);
            DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.TravelGameStart);
            this.gotoTravelMap();
        }
        else
            null === (e = this.delegate) || void 0 === e || e.close();
    };
    TravelActiveView.prototype.gotoTravelMap = function () {
        var e = this;
        ControllerManager_1.default.getInstance().pushViewByController("TravelMapController", {}, function () {
            var t;
            null === (t = e.delegate) || void 0 === t || t.close();
        });
    };
    TravelActiveView.prefabUrl = "prefabs/journey/JourneyActiveDialog";
    __decorate([
        mj.node("Content/Top/CloseBtn")
    ], TravelActiveView.prototype, "closeBtn", void 0);
    __decorate([
        mj.component("Content/Top/Label", cc.Label)
    ], TravelActiveView.prototype, "titleLabel", void 0);
    __decorate([
        mj.component("Content/Desc", cc.Label)
    ], TravelActiveView.prototype, "descLabel", void 0);
    __decorate([
        mj.component("Content/Timer/Label", cc.Label)
    ], TravelActiveView.prototype, "timerLabel", void 0);
    __decorate([
        mj.node("Content/PlayBtn")
    ], TravelActiveView.prototype, "playBtn", void 0);
    __decorate([
        mj.component("Content/PlayBtn/Bg/Label", cc.Label)
    ], TravelActiveView.prototype, "playBtnLabel", void 0);
    __decorate([
        mj.component("Content/Icon", cc.Sprite)
    ], TravelActiveView.prototype, "journeyIcon", void 0);
    __decorate([
        mj.traitEvent("TravelVw_closeBtnClk")
    ], TravelActiveView.prototype, "onCloseBtnClick", null);
    __decorate([
        mj.traitEvent("TravelVw_playBtnClk")
    ], TravelActiveView.prototype, "onPlayBtnClick", null);
    __decorate([
        mj.traitEvent("TravelVw_gotoTravelMap")
    ], TravelActiveView.prototype, "gotoTravelMap", null);
    TravelActiveView = __decorate([
        mj.class
    ], TravelActiveView);
    return TravelActiveView;
}(UIView_1.default));
exports.default = TravelActiveView;

cc._RF.pop();