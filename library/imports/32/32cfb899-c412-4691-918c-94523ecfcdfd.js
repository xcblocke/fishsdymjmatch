"use strict";
cc._RF.push(module, '32cfbiZxBJGkZGMlFI+z839', 'InputTouchStart');
// Scripts/InputTouchStart.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("./constant/BehaviorsEnum");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var ClickShowLockEffect_1 = require("./ClickShowLockEffect");
var LockEffect_1 = require("./LockEffect");
var UpdateScoreEffect_1 = require("./UpdateScoreEffect");
var InputBaseTouchStart_1 = require("./inputbase/InputBaseTouchStart");
var ClearHelper_1 = require("./ClearHelper");
var InputTouchStart = /** @class */ (function (_super) {
    __extends(InputTouchStart, _super);
    function InputTouchStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTouchStart.prototype.excute = function (t) {
        _super.prototype.excute.call(this, t);
    };
    InputTouchStart.prototype.runLock = function (t, o) {
        _super.prototype.runLock.call(this, t, o);
        this.gameContext.comboModifier.lockClick();
        this.gameContext.trackerModifier.triggerInvalid(o);
        this.excuteIsLock(o);
    };
    InputTouchStart.prototype.runClear = function (t, o) {
        _super.prototype.runClear.call(this, t, o);
        ClearHelper_1.default.runClear(this.gameContext, t, this);
    };
    InputTouchStart.prototype.excuteIsLock = function (e) {
        if (this.gameContext.touchData.isLock) {
            this.pushLockEffect(e);
            this.pushUpdateScoreEffectForLock();
            var t = this.gameController.tileMapObject.getTileObject(e);
            t && (this.gameController.tileMapObject.isOnlyHasLeftRight(t) ? this.pushHasLeftRightEffects(e) : this.gameController.tileMapObject.isHasCover(t) && this.pushHasCoverEffects(e));
        }
    };
    InputTouchStart.prototype.pushUnSelectAllTileIds = function () {
        var e = this;
        this.gameContext.getTileMapObject().unselectAllTileIds().forEach(function (t) {
            e.pushSelectEffect(t, true, void 0, true);
        });
    };
    InputTouchStart.prototype.pushUpdateScoreEffectForLock = function () {
        if (this.gameContext.gameType !== GameTypeEnums_1.MjGameType.Travel) {
            var e = this.gameContext.getGameData(), t = new UpdateScoreEffect_1.UpdateScoreEffect({
                addScore: 0,
                targetScore: e.getScore(),
                isShowCombo: this.gameContext.comboChecker.canShowCombo()
            });
            this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
        }
    };
    InputTouchStart.prototype.pushHasLeftRightEffects = function (e) {
        this.pushClickShowLockEffect(e);
    };
    InputTouchStart.prototype.pushClickShowLockEffect = function (e) {
        var t = new ClickShowLockEffect_1.ClickShowLockEffect({
            tileId: e
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputTouchStart.prototype.pushHasCoverEffects = function () { };
    InputTouchStart.prototype.pushLockEffect = function (e) {
        var t = this.gameController.tileMapObject.getTileObject(e), o = new LockEffect_1.LockEffect({
            isLock: true,
            tileId: e,
            lockCorrelationCard: this.gameController.tileMapObject.getAdjacentLockCards(t)
        });
        this.pushEffect(o);
    };
    __decorate([
        mj.traitEvent("IptTchStart_exec")
    ], InputTouchStart.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptTchStart_Lock")
    ], InputTouchStart.prototype, "excuteIsLock", null);
    __decorate([
        mj.traitEvent("IptTchStart_pushCvr")
    ], InputTouchStart.prototype, "pushHasCoverEffects", null);
    return InputTouchStart;
}(InputBaseTouchStart_1.default));
exports.default = InputTouchStart;

cc._RF.pop();