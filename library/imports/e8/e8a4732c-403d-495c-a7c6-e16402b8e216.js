"use strict";
cc._RF.push(module, 'e8a47MsQD1JXKfG4WQCuOIW', 'InputTile2TouchRunLock');
// Scripts/input/InputTile2TouchRunLock.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseCoreObject_1 = require("../BaseCoreObject");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var ClickShowLockEffect_1 = require("../ClickShowLockEffect");
var LockEffect_1 = require("../LockEffect");
var Tile2ScreenEdgeEffect_1 = require("../Tile2ScreenEdgeEffect");
var Tile2UpdateScoreEffect_1 = require("../Tile2UpdateScoreEffect");
var InputTile2TouchRunLock = /** @class */ (function (_super) {
    __extends(InputTile2TouchRunLock, _super);
    function InputTile2TouchRunLock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2TouchRunLock.prototype.runLock = function (e, t) {
        t.gameContext.comboModifier.lockClick();
        var o = t.gameContext.tile2TouchData.tileId;
        t.gameContext.tile2DotTrackerModifier.recordErrorLock(o);
        this.excuteIsLock(t, o);
    };
    InputTile2TouchRunLock.prototype.excuteIsLock = function (e, t) {
        var o = e.gameContext.getTileMapObject(), n = o.getTileObject(t);
        if (n) {
            this.pushLockEffect(e, t);
            this.pushUpdateScoreEffectForLock(e);
            var i = e.gameContext.getGameData();
            e.gameContext.tile2ComboChecker.checkIsComboState(i.getComboNum()) || this.pushScreenEdgeClearEffect(e);
            if (o.isOnlyHasLeftRight(n)) {
                this.pushHasLeftRightEffects(e, t);
            }
            else {
                o.isHasCover(n) && this.pushHasCoverEffects(t);
            }
        }
    };
    InputTile2TouchRunLock.prototype.pushLockEffect = function (e, t) {
        var o = e.gameContext.getTileMapObject(), n = o.getTileObject(t), i = new LockEffect_1.LockEffect({
            isLock: true,
            tileId: t,
            lockCorrelationCard: o.getAdjacentLockCards(n)
        });
        e.pushEffect(i);
    };
    InputTile2TouchRunLock.prototype.pushUpdateScoreEffectForLock = function (e) {
        var t = e.gameContext.getGameData(), o = new Tile2UpdateScoreEffect_1.Tile2UpdateScoreEffect({
            addScore: 0,
            targetScore: t.getScore(),
            isShowCombo: e.gameContext.tile2ComboChecker.checkIsComboState(t.getComboNum())
        });
        e.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputTile2TouchRunLock.prototype.pushHasLeftRightEffects = function (e, t) {
        this.pushClickShowLockEffect(e, t);
    };
    InputTile2TouchRunLock.prototype.pushClickShowLockEffect = function (e, t) {
        var o = new ClickShowLockEffect_1.ClickShowLockEffect({
            tileId: t
        });
        e.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputTile2TouchRunLock.prototype.pushScreenEdgeClearEffect = function (e) {
        var t = new Tile2ScreenEdgeEffect_1.Tile2ScreenEdgeEffect({
            isClear: true
        });
        e.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputTile2TouchRunLock.prototype.pushHasCoverEffects = function () { };
    __decorate([
        mj.traitEvent("T2TchRunLock_exec")
    ], InputTile2TouchRunLock.prototype, "excuteIsLock", null);
    return InputTile2TouchRunLock;
}(BaseCoreObject_1.BaseCoreObject));
exports.default = InputTile2TouchRunLock;

cc._RF.pop();