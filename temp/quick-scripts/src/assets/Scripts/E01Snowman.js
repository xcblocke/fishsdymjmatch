"use strict";
cc._RF.push(module, 'ab952ozlhhD0Z22EfphjmlX', 'E01Snowman');
// Scripts/E01Snowman.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TravelMapInterface_1 = require("./TravelMapInterface");
var ElementLevel_1 = require("./ElementLevel");
var GameUtils_1 = require("./core/simulator/util/GameUtils");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var a = {
    locked: "locked",
    lockedTap: "locked_tap",
    unlockedIn: "in",
    unlockedIdle: "init"
};
var E01Snowman = /** @class */ (function (_super) {
    __extends(E01Snowman, _super);
    function E01Snowman() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.button = null;
        _this.cardSpine = null;
        _this.selectAnim = null;
        return _this;
    }
    E01Snowman.prototype.uiOnLoad = function () {
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
    E01Snowman.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.titleLabel.string = "" + this._data.level;
    };
    E01Snowman.prototype.resetState = function () { };
    E01Snowman.prototype.onButtonClick = function () {
        var e = this;
        if (cc.isValid(this.cardSpine)) {
            this._data.state !== TravelMapInterface_1.EJourneyMapState.Selected && this._data.state !== TravelMapInterface_1.EJourneyMapState.Locked || GameUtils_1.default.playSpine(this.cardSpine, a.lockedTap, false, function () {
                GameUtils_1.default.playSpine(e.cardSpine, a.locked, false);
            });
            this.goToTravelGame();
        }
    };
    E01Snowman.prototype.onLevelSelect = function () {
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
    E01Snowman.prototype.onLevelLock = function () {
        if (cc.isValid(this.cardSpine)) {
            GameUtils_1.default.playSpine(this.cardSpine, a.locked, false);
            this.selectAnim.node.active = false;
        }
    };
    E01Snowman.prototype.onLevelUnlock = function () {
        var e = this;
        if (cc.isValid(this.cardSpine)) {
            GameUtils_1.default.playSpine(this.cardSpine, a.unlockedIn, false, function () {
                cc.isValid(e.cardSpine) && GameUtils_1.default.playSpine(e.cardSpine, a.unlockedIdle, true);
            });
            this.selectAnim.node.active = false;
        }
    };
    E01Snowman.prototype.onLevelUnlockPass = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
        this.onLevelUnlock();
    };
    E01Snowman.prefabUrl = "prefabs/journeyMap/01/E01Snowman";
    E01Snowman.size = new cc.Size(348, 378);
    E01Snowman = __decorate([
        mj.class
    ], E01Snowman);
    return E01Snowman;
}(ElementLevel_1.default));
exports.default = E01Snowman;

cc._RF.pop();