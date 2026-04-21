"use strict";
cc._RF.push(module, '37de7srz3hJo4LhXyIQra8w', 'LockMaskTrait');
// subpackages/l_lockMask/Scripts/LockMaskTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var ShowLockMaskEffect_1 = require("../../../Scripts/ShowLockMaskEffect");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var RemoveLockMaskBehavior_1 = require("../../../Scripts/base/RemoveLockMaskBehavior");
var ToggleShowLockMaskBehavior_1 = require("../../../Scripts/base/ToggleShowLockMaskBehavior");
var GameInteraction_1 = require("../../../Scripts/GameInteraction/GameInteraction");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var LockMaskTrait = /** @class */ (function (_super) {
    __extends(LockMaskTrait, _super);
    function LockMaskTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LockMaskTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.isNewParam() && this._registerBehaviors();
    };
    LockMaskTrait.prototype.isNewParam = function () {
        return "number" == typeof this._traitData.delay;
    };
    LockMaskTrait.prototype.isShowCoveredTile = function () {
        return true === this._traitData.showCovered;
    };
    LockMaskTrait.prototype._registerBehaviors = function () {
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.ToggleShowLockMask, ToggleShowLockMaskBehavior_1.ToggleShowLockMaskBehavior);
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.RemoveLockMask, RemoveLockMaskBehavior_1.RemoveLockMaskBehavior);
    };
    LockMaskTrait.prototype.getMessageListeners = function () {
        var _e = {};
        _e[GameEvent_1.EGameEvent.Effect_Shuffle] = this.onEffectShuffleCB.bind(this);
        return _e;
    };
    LockMaskTrait.prototype.onEffectShuffleCB = function () {
        this.isNewParam() && GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.RemoveLockMask
        });
    };
    LockMaskTrait.prototype.onIptTchStart_Lock = function (e, t) {
        t();
        this._handleLockMask(e.args[0], e.ins);
    };
    LockMaskTrait.prototype.onT2TchRunLock_exec = function (e, t) {
        t();
        var o = e.args[0], r = e.args[1];
        !this.isShowCoveredTile() && this._isTileCovered(o, r) || this._handleLockMask(r, o);
    };
    LockMaskTrait.prototype._isTileCovered = function (e, t) {
        if (!e || !t)
            return false;
        var o = e.tileMapObject;
        if (!o)
            return false;
        var r = o.getTileObject(t);
        return !!r && o.isHasCover(r);
    };
    LockMaskTrait.prototype._handleLockMask = function (e, t) {
        if (!this.shouldSkipAnimation() && e && t) {
            var o = new ShowLockMaskEffect_1.ShowLockMaskEffect({
                tileId: e,
                delay: this.isNewParam() ? this._traitData.delay : 0.7
            });
            t.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
        }
    };
    LockMaskTrait.prototype.onUISetDlg_updLckHL = function (e, t) {
        var o = e.args[0];
        this._toggleShowLockMask(o);
        t();
    };
    LockMaskTrait.prototype.onGuide_skip = function (e, t) {
        var o = UserModel_1.default.getInstance().isLockHighlightEnabled();
        this._toggleShowLockMask(o);
        t();
    };
    LockMaskTrait.prototype._toggleShowLockMask = function (e) {
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.ToggleShowLockMask,
            enabled: e
        });
    };
    LockMaskTrait.prototype.shouldSkipAnimation = function () {
        var e = UserModel_1.default.getInstance(), t = mj.getClassByName("GuideTrait");
        if (t && t.getInstance() && true === t.getInstance().eventEnabled && !e.isGuideFinished()) {
            var o = mj.getClassByName("CardLockDarkenTrait");
            if (o) {
                var r = o.getInstance();
                if (r && r.isEnabled())
                    return true;
            }
        }
        else if (e.isLockHighlightEnabled())
            return true;
        return false;
    };
    LockMaskTrait.prototype.onClearBhv_collision = function (e, t) {
        var o = e.ins.context;
        if (cc.isValid(o)) {
            var r = o.getTileMapObject(), i = o.getTileNodeMap();
            if (cc.isValid(r) && cc.isValid(i)) {
                i.forEach(function (e, t) {
                    var o = r.getTileObject(t);
                    if (o && o.isValid && 0 === o.isCardLock()) {
                        var i = e.tileNode.getChildByName("imgMaskFadeOut");
                        cc.isValid(i) && i.destroy();
                    }
                });
                t();
            }
            else
                t();
        }
        else
            t();
    };
    LockMaskTrait.traitKey = "LockMask";
    LockMaskTrait = __decorate([
        mj.trait,
        mj.class("LockMaskTrait")
    ], LockMaskTrait);
    return LockMaskTrait;
}(Trait_1.default));
exports.default = LockMaskTrait;

cc._RF.pop();