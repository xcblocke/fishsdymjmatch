
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/HallTravelBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0hhbGxUcmF2ZWxCdG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQywyRUFBc0U7QUFDdEUsNERBQXVEO0FBQ3ZELDJFQUFnRztBQUNoRyw2REFBd0Q7QUFDeEQsc0RBQTJGO0FBQzNGLHFEQUFxRTtBQUNyRSxxREFBMEU7QUFDMUUsOERBQTZEO0FBQzdELDBEQUF5RDtBQUN6RCx5RUFBc0U7QUFDdEUsd0RBQXFFO0FBQ3JFLElBQUssQ0FNSjtBQU5ELFdBQUssQ0FBQztJQUNKLHlCQUFRLENBQUE7SUFDUixtQ0FBYSxDQUFBO0lBQ2IsaUNBQVksQ0FBQTtJQUNaLGlDQUFZLENBQUE7SUFDWixtQ0FBYSxDQUFBO0FBQ2YsQ0FBQyxFQU5JLENBQUMsS0FBRCxDQUFDLFFBTUw7QUFFRDtJQUEyQyxpQ0FBTTtJQUFqRDtRQUFBLHFFQTJRQztRQXpRQyxjQUFRLEdBQWdCLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQXFCLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQXFCLElBQUksQ0FBQztRQUVsQyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFzQixJQUFJLENBQUM7UUFFckMsbUJBQWEsR0FBcUIsSUFBSSxDQUFDO1FBRXZDLG1CQUFhLEdBQTBCLElBQUksQ0FBQztRQUU1QyxtQkFBYSxHQUEwQixJQUFJLENBQUM7UUFFNUMsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDO1FBRW5DLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUVyQyxjQUFRLEdBQVcsSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBQy9CLFdBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsa0JBQVksR0FBRyxLQUFL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eURBV3hDO0lBUUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDO3dEQXNCckM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7c0RBQ3JCO0lBMVFDLGFBQWE7UUFEakMsRUFBRSxDQUFDLEtBQUs7T0FDWSxhQUFhLENBMlFqQztJQUFELG9CQUFDO0NBM1FELEFBMlFDLENBM1EwQyxnQkFBTSxHQTJRaEQ7a0JBM1FvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VVSSBmcm9tICcuL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IENvbnRyb2xsZXJNYW5hZ2VyIGZyb20gJy4vZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4vZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCwgeyBFVHJhdmVsUmVkUG9pbnRTdGF0ZSB9IGZyb20gJy4vZ2FtZVBsYXkvdHJhdmVsL21vZGVsL1RyYXZlbEdhbWVNb2RlbCc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4vY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IHsgVFJBVkVMX0dBTUVfU0VTU0lPTl9FTkQsIFRSQVZFTF9HQU1FX1NFU1NJT05fU1RBUlQgfSBmcm9tICcuL2NvbmZpZy9UcmF2ZWxDb25maWcnO1xuaW1wb3J0IHsgRG90R2FtZVBhZ2VTaG93LCBFUGFnZVNob3dUeXBlIH0gZnJvbSAnLi9kb3QvREdhbWVQYWdlU2hvdyc7XG5pbXBvcnQgeyBEb3RHYW1lQnRuQ2xpY2ssIEVIb21lUGFnZUNsaWNrVHlwZSB9IGZyb20gJy4vZG90L0RHYW1lQnRuQ2xpY2snO1xuaW1wb3J0IHsgQ29uZmlnVHlwZSB9IGZyb20gJy4vZ2FtZVBsYXkvYmFzZS9kYXRhL0NvbmZpZ1R5cGUnO1xuaW1wb3J0IHsgRGF0YVJlYWRlciB9IGZyb20gJy4vZnJhbWV3b3JrL2RhdGEvRGF0YVJlYWRlcic7XG5pbXBvcnQgeyBFUmVkRG90VHlwZSB9IGZyb20gJy4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBFVlRfTVNHX0hBTExfRk9SQ0VfVVBEQVRFIH0gZnJvbSAnLi9iYXNlL2V2ZW50L0V2ZW50RGVmaW5lJztcbmVudW0gbCB7XG4gIExvY2sgPSAwLFxuICBOZXdTZWFzb24gPSAxLFxuICBJblNlYXNvbiA9IDIsXG4gIENvbWVTb29uID0gMyxcbiAgU2Vhc29uRW5kID0gNCxcbn1cbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbFRyYXZlbEJ0biBleHRlbmRzIEJhc2VVSSB7XG4gIEBtai5ub2RlKFwiUm9vdC9Mb2NrXCIpXG4gIGxvY2tOb2RlOiBcIlJvb3QvTG9ja1wiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIlJvb3QvTG9jay9EZXNjXCIsIGNjLkxhYmVsKVxuICBsb2NrRGVzYzogXCJSb290L0xvY2svRGVzY1wiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIlJvb3QvTG9jay9BbmltXCIsIHNwLlNrZWxldG9uKVxuICBsb2NrQW5pbTogXCJSb290L0xvY2svQW5pbVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSb290L1RpbWVyXCIpXG4gIHRpbWVyTm9kZTogXCJSb290L1RpbWVyXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiUm9vdC9UaW1lci9UaW1lXCIsIGNjLkxhYmVsKVxuICB0aW1lckxhYmVsOiBcIlJvb3QvVGltZXIvVGltZVwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSb290L05ld1NlYXNvblwiKVxuICBuZXdTZWFzb25Ob2RlOiBcIlJvb3QvTmV3U2Vhc29uXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiUm9vdC9OZXdTZWFzb24vQW5pbVwiLCBzcC5Ta2VsZXRvbilcbiAgbmV3U2Vhc29uQW5pbTogXCJSb290L05ld1NlYXNvbi9BbmltXCIgPSBudWxsO1xuICBAbWoubm9kZShcIlJvb3QvTmV3U2Vhc29uL0ljb25cIilcbiAgbmV3U2Vhc29uSWNvbjogXCJSb290L05ld1NlYXNvbi9JY29uXCIgPSBudWxsO1xuICBAbWoubm9kZShcIlJvb3QvUmVkUG9pbnRcIilcbiAgcmVkRG90Tm9kZTogXCJSb290L1JlZFBvaW50XCIgPSBudWxsO1xuICBAbWoubm9kZShcIlJvb3QvQ29tZVNvb25cIilcbiAgY29tZVNvb25Ob2RlOiBcIlJvb3QvQ29tZVNvb25cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiUm9vdFwiKVxuICByb290Tm9kZTogXCJSb290XCIgPSBudWxsO1xuICBAbWoubm9kZShcIlJvb3QvVGl0bGVcIilcbiAgdGl0bGVOb2RlOiBcIlJvb3QvVGl0bGVcIiA9IG51bGw7XG4gIHN0YXRlID0gbC5Mb2NrO1xuICBpc05ld1Nlc3Npb24gPSBmYWxzZTtcbiAgam91cm5leUtleSA9IFwiXCI7XG4gIHVubG9ja0xldmVsID0gMDtcbiAgaXNOZWVkVXBkYXRlID0gZmFsc2U7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvam91cm5leS9IYWxsQnRuL0hhbGxUcmF2ZWxCdG5cIjtcbiAgZ2V0TWVzc2FnZUxpc3RlbmVycygpIHtcbiAgICB2YXIgX2UgPSB7fTtcbiAgICBfZVtFVlRfTVNHX0hBTExfRk9SQ0VfVVBEQVRFXSA9IHRoaXMub25Gb3JjZVVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRyYXZlbEJ0bl9vbkxvYWRcIilcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdENvbXBvbmVudHMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyQ2xpY2soKTtcbiAgICB0aGlzLmlzTmVlZFVwZGF0ZSAmJiB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gIH1cbiAgb25FbmFibGUoKSB7XG4gICAgc3VwZXIub25FbmFibGUgJiYgc3VwZXIub25FbmFibGUuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXCJNc2dFbmFibGVIb21lQnRuXCIsIHtcbiAgICAgIHR5cGU6IFwiVHJhdmVsXCIsXG4gICAgICBub2RlOiB0aGlzLm5vZGVcbiAgICB9KTtcbiAgfVxuICBvbkRpc2FibGUoKSB7XG4gICAgc3VwZXIub25EaXNhYmxlICYmIHN1cGVyLm9uRGlzYWJsZS5jYWxsKHRoaXMpO1xuICB9XG4gIGluaXRDb21wb25lbnRzKCkge31cbiAgcmVnaXN0ZXJDbGljaygpIHtcbiAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5ub2RlLCB7XG4gICAgICBmdW5jOiB0aGlzLm9uQnRuQ2xpY2tTdGFydC5iaW5kKHRoaXMpLFxuICAgICAgZXZlbnRUeXBlOiBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkRcbiAgICB9KTtcbiAgfVxuICByZXNldFVJKCkge1xuICAgIHRoaXMuY29tZVNvb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubG9ja05vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5uZXdTZWFzb25Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMudGltZXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVkRG90Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnRpdGxlTm9kZS54ID0gMDtcbiAgICB0aGlzLnRpdGxlTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnJvb3ROb2RlKTtcbiAgICB0aGlzLnVuc2NoZWR1bGVVcGRhdGVUaW1lcigpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVHJhdmVsQnRuX3VwZGF0ZVVJXCIpXG4gIHVwZGF0ZVVJKGUsIHQsIG8pIHtcbiAgICB0aGlzLmlzTmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgdGhpcy51bmxvY2tMZXZlbCA9IHQ7XG4gICAgdGhpcy5qb3VybmV5S2V5ID0gZTtcbiAgICB0aGlzLmlzTmV3U2Vzc2lvbiA9IG87XG4gICAgY2MuaXNWYWxpZCh0aGlzLmNvbWVTb29uTm9kZSkgJiYgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVHJhdmVsQnRuX3VwZGF0ZVN0YXRlXCIpXG4gIHVwZGF0ZVN0YXRlKCkge1xuICAgIHZhciBlID0gVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgaWYgKGUuaXNVbmxvY2tlZCgpKSB7XG4gICAgICBpZiAodGhpcy5pc05ld1Nlc3Npb24pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShsLk5ld1NlYXNvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5pc05ld1Nlc3Npb24gfHwgZS5pc1Nlc3Npb25BY3RpdmUoKSkge1xuICAgICAgICAgIGlmIChlLmlzU2Vzc2lvbkFjdGl2ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKGwuSW5TZWFzb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKGwuU2Vhc29uRW5kKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShsLkNvbWVTb29uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGwuTG9jayk7XG4gICAgfVxuICB9XG4gIHNldFN0YXRlKGUpIHtcbiAgICB0aGlzLnJlc2V0VUkoKTtcbiAgICB0aGlzLnN0YXRlID0gZTtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgbC5Mb2NrOlxuICAgICAgICB0aGlzLmNoYW5nZUxvY2soKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGwuTmV3U2Vhc29uOlxuICAgICAgICB0aGlzLmNoYW5nZU5ld1NlYXNvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgbC5Db21lU29vbjpcbiAgICAgICAgdGhpcy5jaGFuZ2VDb21lU29vbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgbC5JblNlYXNvbjpcbiAgICAgICAgdGhpcy5jaGFuZ2VJblNlYXNvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgbC5TZWFzb25FbmQ6XG4gICAgICAgIHRoaXMuY2hhbmdlU2Vhc29uRW5kKCk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVHJhdmVsQnRuX2NoYW5nZUxvY2tcIilcbiAgY2hhbmdlTG9jaygpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgdGhpcy5sb2NrTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMudGl0bGVOb2RlLnggPSAzMDtcbiAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMubG9ja0FuaW0sIFwiaW5cIiwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGUubG9ja0FuaW0uc2V0QW5pbWF0aW9uKDAsIFwiaW5pdFwiLCBmYWxzZSk7XG4gICAgfSk7XG4gICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLmxvY2tEZXNjLm5vZGUsIFwiVW5sb2NrIGF0IEx2LlwiICsgdGhpcy51bmxvY2tMZXZlbCwgXCJNYWhqb25nVGlsZXNfUHJvSGludF8xXCIsIFt0aGlzLnVubG9ja0xldmVsXSk7XG4gIH1cbiAgY2hhbmdlTmV3U2Vhc29uKCkge1xuICAgIHRoaXMudGl0bGVOb2RlLnggPSAwO1xuICAgIHRoaXMudXBkYXRlTmV3U2Vhc29uUmVkRG90KCk7XG4gICAgdGhpcy51cGRhdGVOZXdTZWFzb25UaW1lKCk7XG4gICAgdGhpcy51cGRhdGVOZXdTZWFzb25BbmltKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUcmF2ZWxCdG5fdXBkTlNlYXNvblRpbWVcIilcbiAgdXBkYXRlTmV3U2Vhc29uVGltZSgpIHtcbiAgICB0aGlzLnRpbWVyTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHZhciBlID0gRGF0YVJlYWRlci5nZXRCeUtleShDb25maWdUeXBlLlRyYXZlbCwgdGhpcy5qb3VybmV5S2V5KSxcbiAgICAgIHQgPSBfX3JlYWQoR2FtZVV0aWxzLmdldFJlbWFpblRpbWVQYXJ0cyhlLmR1cmF0aW9uKSwgNCksXG4gICAgICBvID0gdFswXSxcbiAgICAgIG4gPSB0WzFdLFxuICAgICAgaSA9IHRbMl0sXG4gICAgICByID0gKHRbM10sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgfSk7XG4gICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLnRpbWVyTGFiZWwubm9kZSwgcihvKSArIFwiZFwiICsgcihuKSArIFwiaFwiICsgcihpKSArIFwibVwiLCBcIkNvbW1vbl9Db3VudERvd25fTWludXRlXCIsIFtvLCBuLCBpXSk7XG4gIH1cbiAgdXBkYXRlTmV3U2Vhc29uUmVkRG90KCkge1xuICAgIHZhciBlID0ge1xuICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgIHR5cGU6IEVSZWREb3RUeXBlLkpvdXJuZXlcbiAgICB9O1xuICAgIG1qLnRyaWdnZXJJbnRlcm5hbEV2ZW50KFwiUmVkRG90Q3RybF9zaG93UmVkRG90XCIsIHRoaXMsIFtlXSk7XG4gICAgdGhpcy5yZWREb3ROb2RlLmFjdGl2ZSA9IGUuc2hvdztcbiAgfVxuICB1cGRhdGVOZXdTZWFzb25BbmltKCkge1xuICAgIHZhciBlID0ge1xuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9O1xuICAgIG1qLnRyaWdnZXJJbnRlcm5hbEV2ZW50KFwiTmV3U2Vhc29uX2lzVmlzaWJsZVwiLCB0aGlzLCBbZV0pO1xuICAgIGlmIChlLnZpc2libGUpIHtcbiAgICAgIHRoaXMudGl0bGVOb2RlLnggPSAzMDtcbiAgICAgIHRoaXMubmV3U2Vhc29uTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5wbGF5TmV3U2Vhc29uQW5pbSgpO1xuICAgIH1cbiAgfVxuICBjaGFuZ2VDb21lU29vbigpIHtcbiAgICB0aGlzLmNvbWVTb29uTm9kZS5hY3RpdmUgPSB0cnVlO1xuICB9XG4gIGNoYW5nZUluU2Vhc29uKCkge1xuICAgIHRoaXMudGltZXJOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy50aXRsZU5vZGUueCA9IDA7XG4gICAgdGhpcy51cGRhdGVUaW1lcigpO1xuICAgIHRoaXMudXBkYXRlSW5TZWFzb25SZWREb3QoKTtcbiAgfVxuICBjaGFuZ2VTZWFzb25FbmQoKSB7XG4gICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoVFJBVkVMX0dBTUVfU0VTU0lPTl9FTkQpO1xuICB9XG4gIGlzU2hvd1JlZERvdCgpIHtcbiAgICB2YXIgZSA9IHtcbiAgICAgIHNob3c6IHRydWUsXG4gICAgICB0eXBlOiBFUmVkRG90VHlwZS5Kb3VybmV5XG4gICAgfTtcbiAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIlJlZERvdEN0cmxfc2hvd1JlZERvdFwiLCB0aGlzLCBbZV0pO1xuICAgIHJldHVybiBlLnNob3c7XG4gIH1cbiAgdXBkYXRlSW5TZWFzb25SZWREb3QoKSB7XG4gICAgVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuZ2V0UmVkUG9pbnRTdGF0ZSgpID09PSBFVHJhdmVsUmVkUG9pbnRTdGF0ZS5TaG93ICYmICh0aGlzLnJlZERvdE5vZGUuYWN0aXZlID0gdGhpcy5pc1Nob3dSZWREb3QoKSk7XG4gIH1cbiAgcGxheU5ld1NlYXNvbkFuaW0oKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IGNjLnR3ZWVuKHRoaXMucm9vdE5vZGUpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGUubmV3U2Vhc29uQW5pbSwgXCJpbml0XCIsIGZhbHNlKTtcbiAgICAgIH0pLnRvKDAuNSwge1xuICAgICAgICBzY2FsZTogMS4wMVxuICAgICAgfSkudG8oMC41LCB7XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9KS50bygwLjUsIHtcbiAgICAgICAgc2NhbGU6IDEuMDFcbiAgICAgIH0pLnRvKDAuNSwge1xuICAgICAgICBzY2FsZTogMVxuICAgICAgfSkudG8oMC41LCB7XG4gICAgICAgIHNjYWxlOiAxLjAxXG4gICAgICB9KS50bygwLjUsIHtcbiAgICAgICAgc2NhbGU6IDFcbiAgICAgIH0pO1xuICAgIGNjLnR3ZWVuKHRoaXMucm9vdE5vZGUpLnJlcGVhdEZvcmV2ZXIodCkuc3RhcnQoKTtcbiAgfVxuICB1cGRhdGVUaW1lcigpIHtcbiAgICB2YXIgZSA9IFRyYXZlbEdhbWVNb2RlbC5nZXRJbnN0YW5jZSgpO1xuICAgIGlmIChlLmlzU2Vzc2lvbkFjdGl2ZSgpKSB7XG4gICAgICB2YXIgdCA9IGUuZ2V0UmVtYWluVGltZSgpO1xuICAgICAgdGhpcy51cGRhdGVSZW1haW5UaW1lKHQpO1xuICAgICAgdGhpcy5zY2hlZHVsZVVwZGF0ZVRpbWVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGltZXJOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChUUkFWRUxfR0FNRV9TRVNTSU9OX0VORCk7XG4gICAgICB0aGlzLnVuc2NoZWR1bGVVcGRhdGVUaW1lcigpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRyYXZlbEJ0bl91cGRSZW1haW5UaW1lXCIpXG4gIHVwZGF0ZVJlbWFpblRpbWUoZSkge1xuICAgIHRoaXMudGltZXJOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdmFyIHQgPSBfX3JlYWQoR2FtZVV0aWxzLmdldFJlbWFpblRpbWVQYXJ0cyhlKSwgNCksXG4gICAgICBvID0gdFswXSxcbiAgICAgIG4gPSB0WzFdLFxuICAgICAgaSA9IHRbMl0sXG4gICAgICByID0gKHRbM10sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgfSk7XG4gICAgSTE4TlN0cmluZ3Muc2V0VGV4dCh0aGlzLnRpbWVyTGFiZWwubm9kZSwgcihvKSArIFwiZFwiICsgcihuKSArIFwiaFwiICsgcihpKSArIFwibVwiLCBcIkNvbW1vbl9Db3VudERvd25fTWludXRlXCIsIFtvLCBuLCBpXSk7XG4gIH1cbiAgdW5zY2hlZHVsZVVwZGF0ZVRpbWVyKCkge1xuICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLmlzU2NoZWR1bGVkKHRoaXMudXBkYXRlVGltZXIsIHRoaXMpICYmIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyKTtcbiAgfVxuICBzY2hlZHVsZVVwZGF0ZVRpbWVyKCkge1xuICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLmlzU2NoZWR1bGVkKHRoaXMudXBkYXRlVGltZXIsIHRoaXMpIHx8IHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lciwgMSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUcmF2ZWxCdG5fb25CdG5DbGlja1wiKVxuICBvbkJ0bkNsaWNrU3RhcnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IGwuTG9jaykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IGwuQ29tZVNvb24pIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9PT0gbC5OZXdTZWFzb24gJiYgdGhpcy5kaXNwYXRjaEV2ZW50KFRSQVZFTF9HQU1FX1NFU1NJT05fU1RBUlQpO1xuICAgICAgICBpZiAoVHJhdmVsR2FtZU1vZGVsLmdldEluc3RhbmNlKCkuaXNTZXNzaW9uQWN0aXZlKCkpIHtcbiAgICAgICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiVHJhdmVsTWFwQ29udHJvbGxlclwiKTtcbiAgICAgICAgICBEb3RHYW1lQnRuQ2xpY2suZG90SGFsbChFSG9tZVBhZ2VDbGlja1R5cGUuVHJhdmVsKTtcbiAgICAgICAgICBEb3RHYW1lUGFnZVNob3cuZG90KEVQYWdlU2hvd1R5cGUuVHJhdmVsUGFnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGUgPSBJMThOU3RyaW5ncy5zdHJpbmdGb3JtYXQoSTE4TlN0cmluZ3MuZ2V0KFwiTWFoam9uZ1RpbGVzX1Byb0hpbnRfMVwiKSwgdGhpcy51bmxvY2tMZXZlbCk7XG4gICAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiTG9ja1RpcHNDb250cm9sbGVyXCIsIHtcbiAgICAgICAgaXNSZXVzZTogZmFsc2UsXG4gICAgICAgIHRpcHM6IGUsXG4gICAgICAgIG5vQmxvY2s6IHRydWUsXG4gICAgICAgIGlzR2xvYmFsOiBmYWxzZSxcbiAgICAgICAgYmdTdHlsZTogbnVsbCxcbiAgICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVHJhdmVsQnRuX2ZvcmNlVXBkYXRlXCIpXG4gIG9uRm9yY2VVcGRhdGUoKSB7fVxufSJdfQ==