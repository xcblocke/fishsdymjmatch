"use strict";
cc._RF.push(module, '2c59dkgbvJKSLnBb86BQyR/', 'ESimpleSpecial');
// Scripts/ESimpleSpecial.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var GameUtils_1 = require("./core/simulator/util/GameUtils");
var TravelMapInterface_1 = require("./TravelMapInterface");
var ElementLevel_1 = require("./ElementLevel");
var a = {
    locked: "locked",
    lockedTap: "locked_tap",
    unlockedIn: "in",
    unlockedIdle: "init"
};
var ESimpleSpecial = /** @class */ (function (_super) {
    __extends(ESimpleSpecial, _super);
    function ESimpleSpecial() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.button = null;
        _this.cardSpine = null;
        _this.selectAnim = null;
        return _this;
    }
    ESimpleSpecial.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
        this.titleLabel = cc.find("Element/Level", this.node).getComponent(cc.Label);
        this.button = cc.find("Element", this.node);
        this.cardSpine = cc.find("Element/Card", this.node).getComponent(sp.Skeleton);
        this.selectAnim = cc.find("Element/Select", this.node).getComponent(sp.Skeleton);
        this.selectAnim.node.active = false;
        this.addLevelBtnClick(this.button, this.onButtonClick.bind(this), {
            clickAudio: GameTypeEnums_1.EAudioID.TravelButton1
        });
    };
    ESimpleSpecial.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.titleLabel.string = "" + this._data.level;
    };
    ESimpleSpecial.prototype.resetState = function () { };
    ESimpleSpecial.prototype.onButtonClick = function () {
        var e = this;
        if (cc.isValid(this.cardSpine)) {
            this._data.state !== TravelMapInterface_1.EJourneyMapState.Selected && this._data.state !== TravelMapInterface_1.EJourneyMapState.Locked || GameUtils_1.default.playSpine(this.cardSpine, a.lockedTap, false, function () {
                GameUtils_1.default.playSpine(e.cardSpine, a.locked, false);
            });
            this.goToTravelGame();
        }
    };
    ESimpleSpecial.prototype.onLevelSelect = function () {
        var e = this;
        if (cc.isValid(this.cardSpine)) {
            GameUtils_1.default.playSpine(this.cardSpine, a.locked, false);
            this.selectAnim.node.active = true;
            if (this._data.isSelect)
                GameUtils_1.default.playSpine(this.selectAnim, "unlocking_idle_init", true);
            else {
                this._data.isSelect = true;
                GameUtils_1.default.playSpine(this.selectAnim, "unlocking_idle_in", false, function () {
                    GameUtils_1.default.playSpine(e.selectAnim, "unlocking_idle_init", true);
                });
            }
        }
    };
    ESimpleSpecial.prototype.onLevelLock = function () {
        if (cc.isValid(this.cardSpine)) {
            GameUtils_1.default.playSpine(this.cardSpine, a.locked, false);
            this.selectAnim.node.active = false;
        }
    };
    ESimpleSpecial.prototype.onLevelUnlock = function () {
        var e = this;
        if (cc.isValid(this.cardSpine)) {
            GameUtils_1.default.playSpine(this.cardSpine, a.unlockedIn, false, function () {
                cc.isValid(e.cardSpine) && GameUtils_1.default.playSpine(e.cardSpine, a.unlockedIdle, true);
            });
            this.selectAnim.node.active = false;
        }
    };
    ESimpleSpecial.prototype.onLevelUnlockPass = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
        this.onLevelUnlock();
    };
    ESimpleSpecial.prefabUrl = "prefabs/journeyMap/01/E01House";
    ESimpleSpecial.size = new cc.Size(348, 378);
    ESimpleSpecial = __decorate([
        mj.class
    ], ESimpleSpecial);
    return ESimpleSpecial;
}(ElementLevel_1.default));
exports.default = ESimpleSpecial;

cc._RF.pop();