"use strict";
cc._RF.push(module, 'c7846POpFdOV4jpzdZss0oR', 'ElementLevel');
// Scripts/ElementLevel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelMapInterface_1 = require("./TravelMapInterface");
var ElementBase_1 = require("./ElementBase");
var ControllerManager_1 = require("./framework/manager/ControllerManager");
var TravelGameModel_1 = require("./gamePlay/travel/model/TravelGameModel");
var TravelConfig_1 = require("./config/TravelConfig");
var DataReader_1 = require("./framework/data/DataReader");
var ConfigType_1 = require("./gamePlay/base/data/ConfigType");
var I18NStrings_1 = require("./framework/data/I18NStrings");
var DGameBtnClick_1 = require("./dot/DGameBtnClick");
var JumpManager_1 = require("./base/jump/JumpManager");
var ElementLevel = /** @class */ (function (_super) {
    __extends(ElementLevel, _super);
    function ElementLevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementLevel.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
    };
    ElementLevel.prototype.getMessageListeners = function () {
        var _e = {};
        _e[TravelConfig_1.TRAVEL_GAME_COLLECT_BADGE] = this.onTravelGameCollectBadge.bind(this);
        return _e;
    };
    ElementLevel.prototype.onTravelGameCollectBadge = function (e) {
        if (this._data.level === e) {
            this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
            this.badgeCollectEnd();
        }
    };
    ElementLevel.prototype.badgeCollectStart = function () { };
    ElementLevel.prototype.badgeCollectEnd = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
    };
    ElementLevel.prototype.addBlockTouch = function () {
        var e = cc.Canvas.instance.node, t = new cc.Node();
        t.addComponent(cc.BlockInputEvents);
        t.setContentSize(e.getContentSize());
        t.setPosition(cc.Vec3.ZERO);
        e.addChild(t);
        cc.tween(e).delay(1).call(function () {
            t.destroy();
        }).start();
    };
    ElementLevel.prototype.updateUI = function () {
        if (cc.isValid(this.node.parent)) {
            _super.prototype.updateUI.call(this);
            this.resetState();
            if (this._data.state === TravelMapInterface_1.EJourneyMapState.Selected) {
                this.onLevelSelect();
            }
            else {
                if (this._data.state === TravelMapInterface_1.EJourneyMapState.Locked) {
                    this.onLevelLock();
                }
                else {
                    if (this._data.state === TravelMapInterface_1.EJourneyMapState.Unlocked) {
                        this.onLevelUnlock();
                    }
                    else {
                        if (this._data.state === TravelMapInterface_1.EJourneyMapState.Collecting) {
                            this.badgeCollectStart();
                        }
                        else {
                            if (this._data.state === TravelMapInterface_1.EJourneyMapState.UnlockedPass) {
                                this.onLevelUnlockPass();
                            }
                            else {
                                this._data.state === TravelMapInterface_1.EJourneyMapState.SelectedUnlocked && this.onLevelSelectUnlocked();
                            }
                        }
                    }
                }
            }
        }
    };
    ElementLevel.prototype.onLevelSelectUnlocked = function () {
        this.onLevelSelect();
    };
    ElementLevel.prototype.addLevelBtnClick = function (e, t, o) {
        if (o === void 0) { o = {}; }
        e && this.OnButtonClick(e, Object.assign({
            func: t
        }, o));
    };
    ElementLevel.prototype.getLevelState = function () {
        var e;
        return null === (e = this._data) || void 0 === e ? void 0 : e.state;
    };
    ElementLevel.prototype.getLevelType = function () {
        var e;
        return null === (e = this._data) || void 0 === e ? void 0 : e.type;
    };
    ElementLevel.prototype.isBadgeLevel = function () {
        var e, t = null === (e = this._data) || void 0 === e ? void 0 : e.level;
        if (!t)
            return false;
        var o = TravelGameModel_1.default.getInstance(), n = o.getCurJourney();
        return o.getRewardInfo(n).some(function (e) {
            return e.lv === t && e.type === TravelConfig_1.ETravelRewardType.EBadge;
        });
    };
    ElementLevel.prototype.getDesignZOrder = function () {
        if (!cc.isValid(this.node.parent))
            return 0;
        for (var e = this.node.parent.children, t = 0; t < e.length; t++)
            if (cc.isValid(e[t])) {
                var o = e[t].getComponent(ElementBase_1.default);
                if (o && o._data && TravelMapInterface_1.TopThanLevelElement.includes(o._data.type))
                    return t;
            }
        return e.length;
    };
    ElementLevel.prototype.goToTravelGame = function () {
        var e = this, t = TravelGameModel_1.default.getInstance();
        if (t.isSessionActive()) {
            if (this._data.state === TravelMapInterface_1.EJourneyMapState.Selected || this._data.state === TravelMapInterface_1.EJourneyMapState.SelectedUnlocked) {
                ControllerManager_1.default.getInstance().pushViewByController("TravelGameController", {}, function () {
                    var t;
                    null === (t = e.delegate) || void 0 === t || t.close();
                });
                var o = t.getCurJourney(), n = DataReader_1.DataReader.getByKey(ConfigType_1.ConfigType.Travel, o);
                if (n) {
                    var i = I18NStrings_1.default.getCN(n.name);
                    DGameBtnClick_1.DotGameBtnClick.dotTravelMap(DGameBtnClick_1.ETravelMapClickType.Play, i, this._data.level);
                }
            }
        }
        else
            JumpManager_1.default.getInstance().jumpToHall();
    };
    __decorate([
        mj.traitEvent("ElemLv_addLevelBtn")
    ], ElementLevel.prototype, "addLevelBtnClick", null);
    ElementLevel = __decorate([
        mj.class
    ], ElementLevel);
    return ElementLevel;
}(ElementBase_1.default));
exports.default = ElementLevel;

cc._RF.pop();