"use strict";
cc._RF.push(module, '0e1b9UchWZHxaieIT6XblPR', 'ESimpleNormal');
// Scripts/ESimpleNormal.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ElementLevel_1 = require("./ElementLevel");
var TravelMapInterface_1 = require("./TravelMapInterface");
var GameUtils_1 = require("./core/simulator/util/GameUtils");
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var a = {
    lockedIdle: "locked_idle",
    lockedTap: "locked_tap",
    unlockedIdle: "unlocked_idle",
    unlockedTap: "unlocked_tap",
    selectIdle: "unlocking_idle",
    selectTap: "unlocking_tap",
    selectSwitch: "unlocking_in",
    selectLightIdle: "unlocking_idle_init",
    selectLightSwitch: "unlocking_idle_in"
};
var ESimpleNormal = /** @class */ (function (_super) {
    __extends(ESimpleNormal, _super);
    function ESimpleNormal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.button = null;
        _this.cardSpine = null;
        _this.selectSpine = null;
        _this.animProxy = null;
        _this.levelParent = null;
        _this.boxNode = null;
        return _this;
    }
    ESimpleNormal.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
        this.titleLabel = cc.find("Element/Level", this.node).getComponent(cc.Label);
        this.cardSpine = cc.find("Element/Card", this.node).getComponent(sp.Skeleton);
        this.selectSpine = cc.find("Element/Select", this.node).getComponent(sp.Skeleton);
        this.button = cc.find("Element", this.node);
        this.animProxy = BaseSpine_1.default.refreshWithNode(this.cardSpine.node);
        this.animProxy.reset("");
        this.animProxy.markReady("");
        this.levelParent = cc.find("Element", this.node);
        this.boxNode = cc.find("Element/Box", this.node);
        this.addLevelBtnClick(this.button, this.onButtonClick.bind(this), {
            clickAudio: GameTypeEnums_1.EAudioID.TravelButton1
        });
    };
    ESimpleNormal.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.hookNode(this.animProxy, "hook_level", this.titleLabel.node, this.levelParent);
        this.hookNode(this.animProxy, "hook_level", this.boxNode, this.levelParent);
        this.titleLabel.string = "" + this._data.level;
        this.updateReward();
    };
    ESimpleNormal.prototype.resetState = function () {
        cc.Tween.stopAllByTarget(this.titleLabel.node);
        this.cardSpine.paused = true;
        this.selectSpine.paused = true;
        this.selectSpine.node.active = false;
    };
    ESimpleNormal.prototype.updateReward = function () {
        var e = TravelMapInterface_1.LevelBoxIconPath[this._data.type];
        if (e) {
            var t = this._data.state === TravelMapInterface_1.EJourneyMapState.Unlocked ? e.openPath : e.path;
            BaseSprite_1.default.refreshWithNode(this.boxNode, t, e.atlas);
            this.boxNode.setScale(e.scale);
            this.boxNode.setPosition(e.offsetX, e.offsetY);
            this.titleLabel.node.active = false;
            this.boxNode.active = true;
        }
        else {
            this.boxNode.active = false;
            this.titleLabel.node.active = true;
        }
    };
    ESimpleNormal.prototype.onLevelSelect = function () {
        var e = this;
        if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine))
            if (this._data.isSelect) {
                this.selectSpine.node.active = true;
                GameUtils_1.default.playSpine(this.cardSpine, a.selectIdle, true);
                GameUtils_1.default.playSpine(this.selectSpine, a.selectLightIdle, true);
            }
            else {
                this._data.isSelect = true;
                GameUtils_1.default.playSpine(this.cardSpine, a.selectSwitch, false, function () {
                    if (e._data.state === TravelMapInterface_1.EJourneyMapState.Unlocked) {
                        GameUtils_1.default.playSpine(e.cardSpine, a.unlockedIdle, true);
                    }
                    else {
                        if (e._data.state === TravelMapInterface_1.EJourneyMapState.Locked) {
                            GameUtils_1.default.playSpine(e.cardSpine, a.lockedIdle, true);
                        }
                        else {
                            e._data.state === TravelMapInterface_1.EJourneyMapState.Selected && GameUtils_1.default.playSpine(e.cardSpine, a.selectIdle, true);
                        }
                    }
                });
                this.selectSpine.node.active = true;
                GameUtils_1.default.playSpine(this.selectSpine, a.selectLightSwitch, false, function () {
                    if (e._data.state === TravelMapInterface_1.EJourneyMapState.Selected) {
                        GameUtils_1.default.playSpine(e.selectSpine, a.selectLightIdle, true);
                    }
                    else {
                        e.selectSpine.node.active = false;
                    }
                });
            }
    };
    ESimpleNormal.prototype.onLevelLock = function () {
        if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine)) {
            this.selectSpine.node.active = false;
            GameUtils_1.default.playSpine(this.cardSpine, a.lockedIdle, false);
        }
    };
    ESimpleNormal.prototype.onLevelUnlock = function () {
        if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine)) {
            this.selectSpine.node.active = false;
            GameUtils_1.default.playSpine(this.cardSpine, a.unlockedIdle, false);
        }
    };
    ESimpleNormal.prototype.onLevelUnlockPass = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
        this.onLevelUnlock();
    };
    ESimpleNormal.prototype.onButtonClick = function () {
        var e = this;
        if (cc.isValid(this.cardSpine) && cc.isValid(this.selectSpine)) {
            var t = a.lockedTap, o = a.lockedIdle;
            if (this._data.state === TravelMapInterface_1.EJourneyMapState.Unlocked) {
                t = a.unlockedTap;
                o = a.unlockedIdle;
            }
            else if (this._data.state === TravelMapInterface_1.EJourneyMapState.Selected) {
                t = a.selectTap;
                o = a.selectIdle;
            }
            GameUtils_1.default.playSpine(this.cardSpine, t, false, function () {
                cc.isValid(e.cardSpine) && GameUtils_1.default.playSpine(e.cardSpine, o, false);
            });
            this.goToTravelGame();
        }
    };
    ESimpleNormal.prefabUrl = "prefabs/journeyMap/01/E01Normal";
    ESimpleNormal.size = new cc.Size(146, 164);
    ESimpleNormal = __decorate([
        mj.class
    ], ESimpleNormal);
    return ESimpleNormal;
}(ElementLevel_1.default));
exports.default = ESimpleNormal;

cc._RF.pop();