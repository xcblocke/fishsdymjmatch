"use strict";
cc._RF.push(module, 'c2a6ejPDadDRrvIbQDau5Gp', 'TravelValentineView');
// subpackages/l_travelValentine/Scripts/TravelValentineView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var TravelConfig_1 = require("../../../Scripts/config/TravelConfig");
var TravelGameModel_1 = require("../../../Scripts/gamePlay/travel/model/TravelGameModel");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var TravelValentineView = /** @class */ (function (_super) {
    __extends(TravelValentineView, _super);
    function TravelValentineView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.popNode = null;
        _this.timerNode = null;
        _this.watchNode = null;
        _this.timerLabel = null;
        _this.playBtn = null;
        _this.titleLabel = null;
        _this.popSpine = null;
        _this.watchSpine = null;
        _this.config = null;
        _this.isNewSession = false;
        _this.isInit = false;
        return _this;
    }
    TravelValentineView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.OnButtonClick(this.playBtn, this.onPlayBtnClick.bind(this));
        this.tryPlayPop();
    };
    TravelValentineView.prototype.initComponents = function () {
        if (!this.isInit) {
            this.popNode = cc.find("Pop", this.node);
            this.timerNode = cc.find("Timer", this.node);
            this.watchNode = cc.find("Timer/Watch", this.node);
            this.timerLabel = cc.find("Timer/TimerLabel", this.node);
            this.playBtn = cc.find("PlayBtn", this.node);
            this.titleLabel = cc.find("Title", this.node);
            this.titleLabel.setPosition(0, 0, 0);
            this.playBtn.setPosition(0, 0, 0);
            this.popSpine = this.popNode.addComponent(BaseSpine_1.default);
            this.watchSpine = this.watchNode.addComponent(BaseSpine_1.default);
            this.popSpine.markReady("");
            this.watchSpine.markReady("");
            this.hookNodes();
            this.isInit = true;
        }
    };
    TravelValentineView.prototype.tryPlayPop = function () {
        this.config && this.isInit && this.playAction();
    };
    TravelValentineView.prototype.playAction = function () {
        var e = this;
        this.playButtonInAction();
        this.popSpine.setAnimation("in", 1, function () {
            if (cc.isValid(e.popSpine)) {
                e.popSpine.setAnimation("init", -1);
                e.playButtonInitAction();
            }
        });
        this.watchSpine.setAnimation("clock_in", 1, function () {
            cc.isValid(e.watchSpine) && e.watchSpine.setAnimation("clock_init", -1);
        });
    };
    TravelValentineView.prototype.hookNodes = function () {
        var e = this;
        this.popSpine.attachNode("clock", function () {
            return e.timerNode;
        });
        this.popSpine.attachNode("Btn_Play_Green", function () {
            return e.playBtn;
        });
        this.popSpine.attachNode("title", function () {
            return e.titleLabel;
        });
    };
    TravelValentineView.prototype.getMessageListeners = function () {
        var _e = {};
        _e[TravelConfig_1.TRAVEL_GAME_SESSION_END] = this.onTravelGameSessionEnd.bind(this);
        return _e;
    };
    TravelValentineView.prototype.onTravelGameSessionEnd = function () {
        var e;
        null === (e = this.delegate) || void 0 === e || e.close();
    };
    TravelValentineView.prototype.updateData = function (e) {
        this.config = e.config;
        this.isNewSession = e.isNewSession;
        this.updateTime();
        DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.TravelDialogDisplayed);
        this.tryPlayPop();
    };
    TravelValentineView.prototype.updateTime = function () {
        var e = this, t = TravelGameModel_1.default.getInstance().getRemainTime();
        this.isNewSession && (t = this.config.duration);
        var r = __read(GameUtils_1.default.getRemainTimeParts(t), 4), n = r[0], o = r[1], i = r[2], c = (r[3], function (e) {
            return e.toString().padStart(2, "0");
        });
        I18NStrings_1.default.setText(this.timerLabel, c(n) + "d" + c(o) + "h" + c(i) + "m", "Common_CountDown_Minute", [n, o, i]);
        this.isNewSession || this.scheduleOnce(function () {
            e.updateTime();
        }, 5);
    };
    TravelValentineView.prototype.onPlayBtnClick = function () {
        var e;
        if (TravelGameModel_1.default.getInstance().isSessionActive() || this.isNewSession) {
            this.isNewSession && this.dispatchEvent(TravelConfig_1.TRAVEL_GAME_SESSION_START);
            DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.TravelGameStart);
            this.gotoTravelMap();
        }
        else
            null === (e = this.delegate) || void 0 === e || e.close();
    };
    TravelValentineView.prototype.gotoTravelMap = function () {
        var e = this;
        ControllerManager_1.default.getInstance().pushViewByController("TravelMapController", {}, function () {
            var t;
            null === (t = e.delegate) || void 0 === t || t.close();
        });
    };
    TravelValentineView.prototype.playButtonInAction = function () {
        cc.Tween.stopAllByTarget(this.playBtn);
        this.playBtn.opacity = 0;
        this.playBtn.scale = 0.7;
        cc.tween(this.playBtn).delay(0.133).to(0.2, {
            opacity: 255,
            scale: 1.1
        }).to(0.333, {
            scale: 1
        }).to(0.5, {
            scale: 1.1
        }).to(0.494, {
            scale: 1
        }).delay(1.76).to(1.67, {
            scale: 1
        }).to(0.5, {
            scale: 1.1
        }).to(0.5, {
            scale: 1
        }).start();
    };
    TravelValentineView.prototype.playButtonInitAction = function () {
        cc.Tween.stopAllByTarget(this.playBtn);
        this.playBtn.scale = 1;
        var e = cc.tween(this.playBtn).sequence(cc.tween().to(0.5, {
            scale: 1.1
        }), cc.tween().to(1, {
            scale: 1
        }), cc.tween().delay(2));
        cc.tween(this.playBtn).repeatForever(e).start();
    };
    TravelValentineView.prefabUrl = "prefabs/TravelValentine";
    __decorate([
        mj.traitEvent("TLValVw_gotoTravelMap")
    ], TravelValentineView.prototype, "gotoTravelMap", null);
    TravelValentineView = __decorate([
        mj.class
    ], TravelValentineView);
    return TravelValentineView;
}(UIView_1.default));
exports.default = TravelValentineView;

cc._RF.pop();