"use strict";
cc._RF.push(module, '2c65528JVpCeLgYEJOrgEL3', 'HallTravelBtn');
// Scripts/HallTravelBtn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("./framework/ui/BaseUI");
var ControllerManager_1 = require("./framework/manager/ControllerManager");
var I18NStrings_1 = require("./framework/data/I18NStrings");
var TravelGameModel_1 = require("./gamePlay/travel/model/TravelGameModel");
var GameUtils_1 = require("./core/simulator/util/GameUtils");
var TravelConfig_1 = require("./config/TravelConfig");
var DGamePageShow_1 = require("./dot/DGamePageShow");
var DGameBtnClick_1 = require("./dot/DGameBtnClick");
var ConfigType_1 = require("./gamePlay/base/data/ConfigType");
var DataReader_1 = require("./framework/data/DataReader");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var EventDefine_1 = require("./base/event/EventDefine");
var l;
(function (l) {
    l[l["Lock"] = 0] = "Lock";
    l[l["NewSeason"] = 1] = "NewSeason";
    l[l["InSeason"] = 2] = "InSeason";
    l[l["ComeSoon"] = 3] = "ComeSoon";
    l[l["SeasonEnd"] = 4] = "SeasonEnd";
})(l || (l = {}));
var HallTravelBtn = /** @class */ (function (_super) {
    __extends(HallTravelBtn, _super);
    function HallTravelBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lockNode = null;
        _this.lockDesc = null;
        _this.lockAnim = null;
        _this.timerNode = null;
        _this.timerLabel = null;
        _this.newSeasonNode = null;
        _this.newSeasonAnim = null;
        _this.newSeasonIcon = null;
        _this.redDotNode = null;
        _this.comeSoonNode = null;
        _this.rootNode = null;
        _this.titleNode = null;
        _this.state = l.Lock;
        _this.isNewSession = false;
        _this.journeyKey = "";
        _this.unlockLevel = 0;
        _this.isNeedUpdate = false;
        return _this;
    }
    HallTravelBtn.prototype.getMessageListeners = function () {
        var _e = {};
        _e[EventDefine_1.EVT_MSG_HALL_FORCE_UPDATE] = this.onForceUpdate.bind(this);
        return _e;
    };
    HallTravelBtn.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initComponents();
        this.registerClick();
        this.isNeedUpdate && this.updateState();
    };
    HallTravelBtn.prototype.onEnable = function () {
        _super.prototype.onEnable && _super.prototype.onEnable.call(this);
        this.dispatchEvent("MsgEnableHomeBtn", {
            type: "Travel",
            node: this.node
        });
    };
    HallTravelBtn.prototype.onDisable = function () {
        _super.prototype.onDisable && _super.prototype.onDisable.call(this);
    };
    HallTravelBtn.prototype.initComponents = function () { };
    HallTravelBtn.prototype.registerClick = function () {
        this.OnButtonClick(this.node, {
            func: this.onBtnClickStart.bind(this),
            eventType: cc.Node.EventType.TOUCH_END
        });
    };
    HallTravelBtn.prototype.resetUI = function () {
        this.comeSoonNode.active = false;
        this.lockNode.active = false;
        this.newSeasonNode.active = false;
        this.timerNode.active = false;
        this.redDotNode.active = false;
        this.titleNode.x = 0;
        this.titleNode.active = true;
        cc.Tween.stopAllByTarget(this.rootNode);
        this.unscheduleUpdateTimer();
    };
    HallTravelBtn.prototype.updateUI = function (e, t, o) {
        this.isNeedUpdate = true;
        this.unlockLevel = t;
        this.journeyKey = e;
        this.isNewSession = o;
        cc.isValid(this.comeSoonNode) && this.updateState();
    };
    HallTravelBtn.prototype.updateState = function () {
        var e = TravelGameModel_1.default.getInstance();
        if (e.isUnlocked()) {
            if (this.isNewSession) {
                this.setState(l.NewSeason);
            }
            else {
                if (this.isNewSession || e.isSessionActive()) {
                    if (e.isSessionActive()) {
                        this.setState(l.InSeason);
                    }
                    else {
                        this.setState(l.SeasonEnd);
                    }
                }
                else {
                    this.setState(l.ComeSoon);
                }
            }
        }
        else {
            this.setState(l.Lock);
        }
    };
    HallTravelBtn.prototype.setState = function (e) {
        this.resetUI();
        this.state = e;
        switch (e) {
            case l.Lock:
                this.changeLock();
                break;
            case l.NewSeason:
                this.changeNewSeason();
                break;
            case l.ComeSoon:
                this.changeComeSoon();
                break;
            case l.InSeason:
                this.changeInSeason();
                break;
            case l.SeasonEnd:
                this.changeSeasonEnd();
        }
    };
    HallTravelBtn.prototype.changeLock = function () {
        var e = this;
        this.lockNode.active = true;
        this.titleNode.x = 30;
        GameUtils_1.default.playSpine(this.lockAnim, "in", false, function () {
            e.lockAnim.setAnimation(0, "init", false);
        });
        I18NStrings_1.default.setText(this.lockDesc.node, "Unlock at Lv." + this.unlockLevel, "MahjongTiles_ProHint_1", [this.unlockLevel]);
    };
    HallTravelBtn.prototype.changeNewSeason = function () {
        this.titleNode.x = 0;
        this.updateNewSeasonRedDot();
        this.updateNewSeasonTime();
        this.updateNewSeasonAnim();
    };
    HallTravelBtn.prototype.updateNewSeasonTime = function () {
        this.timerNode.active = true;
        var e = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, this.journeyKey), t = __read(GameUtils_1.default.getRemainTimeParts(e.duration), 4), o = t[0], n = t[1], i = t[2], r = (t[3], function (e) {
            return e.toString().padStart(2, "0");
        });
        I18NStrings_1.default.setText(this.timerLabel.node, r(o) + "d" + r(n) + "h" + r(i) + "m", "Common_CountDown_Minute", [o, n, i]);
    };
    HallTravelBtn.prototype.updateNewSeasonRedDot = function () {
        var e = {
            show: true,
            type: GameTypeEnums_1.ERedDotType.Journey
        };
        mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [e]);
        this.redDotNode.active = e.show;
    };
    HallTravelBtn.prototype.updateNewSeasonAnim = function () {
        var e = {
            visible: false
        };
        mj.triggerInternalEvent("NewSeason_isVisible", this, [e]);
        if (e.visible) {
            this.titleNode.x = 30;
            this.newSeasonNode.active = true;
            this.playNewSeasonAnim();
        }
    };
    HallTravelBtn.prototype.changeComeSoon = function () {
        this.comeSoonNode.active = true;
    };
    HallTravelBtn.prototype.changeInSeason = function () {
        this.timerNode.active = true;
        this.titleNode.x = 0;
        this.updateTimer();
        this.updateInSeasonRedDot();
    };
    HallTravelBtn.prototype.changeSeasonEnd = function () {
        this.node.destroy();
        this.dispatchEvent(TravelConfig_1.TRAVEL_GAME_SESSION_END);
    };
    HallTravelBtn.prototype.isShowRedDot = function () {
        var e = {
            show: true,
            type: GameTypeEnums_1.ERedDotType.Journey
        };
        mj.triggerInternalEvent("RedDotCtrl_showRedDot", this, [e]);
        return e.show;
    };
    HallTravelBtn.prototype.updateInSeasonRedDot = function () {
        TravelGameModel_1.default.getInstance().getRedPointState() === TravelGameModel_1.ETravelRedPointState.Show && (this.redDotNode.active = this.isShowRedDot());
    };
    HallTravelBtn.prototype.playNewSeasonAnim = function () {
        var e = this, t = cc.tween(this.rootNode).call(function () {
            GameUtils_1.default.playSpine(e.newSeasonAnim, "init", false);
        }).to(0.5, {
            scale: 1.01
        }).to(0.5, {
            scale: 1
        }).to(0.5, {
            scale: 1.01
        }).to(0.5, {
            scale: 1
        }).to(0.5, {
            scale: 1.01
        }).to(0.5, {
            scale: 1
        });
        cc.tween(this.rootNode).repeatForever(t).start();
    };
    HallTravelBtn.prototype.updateTimer = function () {
        var e = TravelGameModel_1.default.getInstance();
        if (e.isSessionActive()) {
            var t = e.getRemainTime();
            this.updateRemainTime(t);
            this.scheduleUpdateTimer();
        }
        else {
            this.timerNode.active = false;
            this.node.destroy();
            this.dispatchEvent(TravelConfig_1.TRAVEL_GAME_SESSION_END);
            this.unscheduleUpdateTimer();
        }
    };
    HallTravelBtn.prototype.updateRemainTime = function (e) {
        this.timerNode.active = true;
        var t = __read(GameUtils_1.default.getRemainTimeParts(e), 4), o = t[0], n = t[1], i = t[2], r = (t[3], function (e) {
            return e.toString().padStart(2, "0");
        });
        I18NStrings_1.default.setText(this.timerLabel.node, r(o) + "d" + r(n) + "h" + r(i) + "m", "Common_CountDown_Minute", [o, n, i]);
    };
    HallTravelBtn.prototype.unscheduleUpdateTimer = function () {
        cc.director.getScheduler().isScheduled(this.updateTimer, this) && this.unschedule(this.updateTimer);
    };
    HallTravelBtn.prototype.scheduleUpdateTimer = function () {
        cc.director.getScheduler().isScheduled(this.updateTimer, this) || this.schedule(this.updateTimer, 1);
    };
    HallTravelBtn.prototype.onBtnClickStart = function () {
        if (this.state !== l.Lock) {
            if (this.state !== l.ComeSoon) {
                this.state === l.NewSeason && this.dispatchEvent(TravelConfig_1.TRAVEL_GAME_SESSION_START);
                if (TravelGameModel_1.default.getInstance().isSessionActive()) {
                    ControllerManager_1.default.getInstance().pushViewByController("TravelMapController");
                    DGameBtnClick_1.DotGameBtnClick.dotHall(DGameBtnClick_1.EHomePageClickType.Travel);
                    DGamePageShow_1.DotGamePageShow.dot(DGamePageShow_1.EPageShowType.TravelPage);
                }
            }
        }
        else {
            var e = I18NStrings_1.default.stringFormat(I18NStrings_1.default.get("MahjongTiles_ProHint_1"), this.unlockLevel);
            ControllerManager_1.default.getInstance().pushViewByController("LockTipsController", {
                isReuse: false,
                tips: e,
                noBlock: true,
                isGlobal: false,
                bgStyle: null,
                isShowAction: false
            });
        }
    };
    HallTravelBtn.prototype.onForceUpdate = function () { };
    HallTravelBtn.prefabUrl = "prefabs/journey/HallBtn/HallTravelBtn";
    __decorate([
        mj.node("Root/Lock")
    ], HallTravelBtn.prototype, "lockNode", void 0);
    __decorate([
        mj.component("Root/Lock/Desc", cc.Label)
    ], HallTravelBtn.prototype, "lockDesc", void 0);
    __decorate([
        mj.component("Root/Lock/Anim", sp.Skeleton)
    ], HallTravelBtn.prototype, "lockAnim", void 0);
    __decorate([
        mj.node("Root/Timer")
    ], HallTravelBtn.prototype, "timerNode", void 0);
    __decorate([
        mj.component("Root/Timer/Time", cc.Label)
    ], HallTravelBtn.prototype, "timerLabel", void 0);
    __decorate([
        mj.node("Root/NewSeason")
    ], HallTravelBtn.prototype, "newSeasonNode", void 0);
    __decorate([
        mj.component("Root/NewSeason/Anim", sp.Skeleton)
    ], HallTravelBtn.prototype, "newSeasonAnim", void 0);
    __decorate([
        mj.node("Root/NewSeason/Icon")
    ], HallTravelBtn.prototype, "newSeasonIcon", void 0);
    __decorate([
        mj.node("Root/RedPoint")
    ], HallTravelBtn.prototype, "redDotNode", void 0);
    __decorate([
        mj.node("Root/ComeSoon")
    ], HallTravelBtn.prototype, "comeSoonNode", void 0);
    __decorate([
        mj.node("Root")
    ], HallTravelBtn.prototype, "rootNode", void 0);
    __decorate([
        mj.node("Root/Title")
    ], HallTravelBtn.prototype, "titleNode", void 0);
    __decorate([
        mj.traitEvent("TravelBtn_onLoad")
    ], HallTravelBtn.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("TravelBtn_updateUI")
    ], HallTravelBtn.prototype, "updateUI", null);
    __decorate([
        mj.traitEvent("TravelBtn_updateState")
    ], HallTravelBtn.prototype, "updateState", null);
    __decorate([
        mj.traitEvent("TravelBtn_changeLock")
    ], HallTravelBtn.prototype, "changeLock", null);
    __decorate([
        mj.traitEvent("TravelBtn_updNSeasonTime")
    ], HallTravelBtn.prototype, "updateNewSeasonTime", null);
    __decorate([
        mj.traitEvent("TravelBtn_updRemainTime")
    ], HallTravelBtn.prototype, "updateRemainTime", null);
    __decorate([
        mj.traitEvent("TravelBtn_onBtnClick")
    ], HallTravelBtn.prototype, "onBtnClickStart", null);
    __decorate([
        mj.traitEvent("TravelBtn_forceUpdate")
    ], HallTravelBtn.prototype, "onForceUpdate", null);
    HallTravelBtn = __decorate([
        mj.class
    ], HallTravelBtn);
    return HallTravelBtn;
}(BaseUI_1.default));
exports.default = HallTravelBtn;

cc._RF.pop();