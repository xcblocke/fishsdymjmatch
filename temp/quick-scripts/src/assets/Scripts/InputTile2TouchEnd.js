"use strict";
cc._RF.push(module, '7e9ddTWYaNF6LYJx7po/M7k', 'InputTile2TouchEnd');
// Scripts/InputTile2TouchEnd.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("./constant/BehaviorsEnum");
var Tile2ResetMoveEffect_1 = require("./Tile2ResetMoveEffect");
var Tile2RollCardEffect_1 = require("./Tile2RollCardEffect");
var InputTile2BaseTouchEnd_1 = require("./inputbase/InputTile2BaseTouchEnd");
var ClearHelper_1 = require("./ClearHelper");
var InputTile2TouchEnd = /** @class */ (function (_super) {
    __extends(InputTile2TouchEnd, _super);
    function InputTile2TouchEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2TouchEnd.prototype.runClear = function (t) {
        _super.prototype.runClear.call(this, t);
        ClearHelper_1.default.runClear(this.gameContext, this.input, this, {
            tileIds: t
        });
    };
    InputTile2TouchEnd.prototype.runRollCard = function (t) {
        var o, n;
        _super.prototype.runRollCard.call(this, t);
        var i = this.pushNewRootEffect(this.input, "Tile2RollCardEffect");
        try {
            for (var r = __values(t), s = r.next(); !s.done; s = r.next()) {
                var u = s.value, p = new Tile2RollCardEffect_1.Tile2RollCardEffect({
                    tileId: u.tileId,
                    frontToBack: u.frontToBack
                });
                this.pushEffect(p, BehaviorsEnum_1.EInsertType.Parallel, i.newEffectId, false);
            }
        }
        catch (e) {
            o = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (n = r.return) && n.call(r);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    };
    InputTile2TouchEnd.prototype.runResetMove = function () {
        _super.prototype.runResetMove.call(this);
        var t = this.gameContext.tile2TouchData.tileId;
        if (this.gameContext.getTileMapObject().getTileObject(t)) {
            var o = new Tile2ResetMoveEffect_1.Tile2ResetMoveEffect({
                tileId: t
            });
            this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
        }
    };
    InputTile2TouchEnd.prototype.runLock = function (t) {
        _super.prototype.runLock.call(this, t);
        this.gameContext.inputTile2TouchRunLock.runLock(t, this);
    };
    __decorate([
        mj.traitEvent("Tile2IptTchEnd_runClr")
    ], InputTile2TouchEnd.prototype, "runClear", null);
    return InputTile2TouchEnd;
}(InputTile2BaseTouchEnd_1.default));
exports.default = InputTile2TouchEnd;

cc._RF.pop();