"use strict";
cc._RF.push(module, '6b3a9qAhf9ECZIL2Q5nKr6g', 'E02GiftBoxBase');
// Scripts/E02GiftBoxBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ElementLevel_1 = require("./ElementLevel");
var TravelMapInterface_1 = require("./TravelMapInterface");
var GameUtils_1 = require("./core/simulator/util/GameUtils");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var E02GiftBoxBase = /** @class */ (function (_super) {
    __extends(E02GiftBoxBase, _super);
    function E02GiftBoxBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.titleLabel = null;
        _this.button = null;
        _this.animNode = null;
        _this.maskNode = null;
        _this.collectSpine = null;
        _this.cardNode = null;
        _this.selectAnim = null;
        _this.selectUpAnim = null;
        return _this;
    }
    E02GiftBoxBase.prototype.uiOnLoad = function () {
        _super.prototype.uiOnLoad.call(this);
        this.selectAnim = cc.find("Element/Card/Base/DownAnim", this.node).getComponent(sp.Skeleton);
        this.selectUpAnim = cc.find("Element/Card/Base/UpAnim", this.node).getComponent(sp.Skeleton);
        this.cardNode = cc.find("Element/Card/Base", this.node);
        this.titleLabel = cc.find("Element/Card/Base/Level", this.node).getComponent(cc.Label);
        this.button = cc.find("Element/Card", this.node);
        this.animNode = cc.find("Element/Card/Base/Anim", this.node);
        this.maskNode = cc.find("Element/Card/Base/Mask", this.node);
        this.collectSpine = cc.find("Element/Card/Collect", this.node).getComponent(sp.Skeleton);
        this.addLevelBtnClick(this.button, this.onButtonClick.bind(this), {
            clickAudio: GameTypeEnums_1.EAudioID.TravelButton1
        });
    };
    E02GiftBoxBase.prototype.updateUI = function () {
        _super.prototype.updateUI.call(this);
        this.titleLabel.string = "" + this._data.level;
    };
    E02GiftBoxBase.prototype.resetState = function () {
        this.collectSpine.node.active = false;
        this.selectAnim.node.active = false;
        this.cardNode.active = true;
        this.animNode.active = true;
        this.animNode.getComponent(sp.Skeleton).paused = true;
        this.selectAnim.paused = true;
        this.collectSpine.paused = true;
        this.maskNode.active = true;
        this.selectUpAnim.node.active = false;
        cc.Tween.stopAllByTarget(this.node);
    };
    E02GiftBoxBase.prototype.onLevelSelect = function () {
        this.selectAnim.node.active = true;
        this.maskNode.active = false;
        this.animNode.active = false;
        this.collectSpine.node.active = false;
        GameUtils_1.default.playSpine(this.selectAnim, "journey_map_level_big_down", true);
        this.selectUpAnim.node.active = true;
        GameUtils_1.default.playSpine(this.selectUpAnim, "journey_map_level_big_up", true);
        cc.Tween.stopAllByTarget(this.node);
        var e = cc.tween().to(0, {
            scale: 1
        }).to(0.5, {
            scale: 1.1
        }).to(0.5, {
            scale: 1
        });
        cc.tween(this.node).repeatForever(e).start();
    };
    E02GiftBoxBase.prototype.onLevelLock = function () {
        this.selectAnim.node.active = false;
        this.maskNode.active = true;
        this.animNode.active = true;
        this.collectSpine.node.active = false;
    };
    E02GiftBoxBase.prototype.onLevelUnlock = function () {
        this.cardNode.active = false;
        this.selectAnim.node.active = false;
        this.collectSpine.node.active = true;
        GameUtils_1.default.playSpine(this.collectSpine, "init", false);
    };
    E02GiftBoxBase.prototype.onLevelUnlockPass = function () {
        this._data.state = TravelMapInterface_1.EJourneyMapState.Unlocked;
        this.onLevelUnlock();
    };
    E02GiftBoxBase.prototype.badgeCollectStart = function () {
        this.cardNode.active = false;
        this.collectSpine.node.active = false;
    };
    E02GiftBoxBase.prototype.badgeCollectEnd = function () {
        var t = this;
        _super.prototype.badgeCollectEnd.call(this);
        this.cardNode.active = false;
        this.collectSpine.node.active = false;
        cc.Tween.stopAllByTarget(this.node);
        this.addBlockTouch();
        cc.tween(this.node).delay(0).call(function () {
            t.collectSpine.node.active = true;
            GameUtils_1.default.playSpine(t.collectSpine, "in", false, function () {
                t.onLevelUnlock();
            });
        }).start();
    };
    E02GiftBoxBase.prototype.onButtonClick = function () {
        this._data.state === TravelMapInterface_1.EJourneyMapState.Locked && GameUtils_1.default.playSpine(this.animNode.getComponent(sp.Skeleton), "in", false);
        this.goToTravelGame();
    };
    E02GiftBoxBase.prefabUrl = "";
    E02GiftBoxBase.size = new cc.Size(201, 270);
    E02GiftBoxBase = __decorate([
        mj.class
    ], E02GiftBoxBase);
    return E02GiftBoxBase;
}(ElementLevel_1.default));
exports.default = E02GiftBoxBase;

cc._RF.pop();