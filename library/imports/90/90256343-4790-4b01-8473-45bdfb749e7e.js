"use strict";
cc._RF.push(module, '90256NDR5BLAYRzRb37dJ5+', 'InputTile2TouchMove');
// Scripts/input/InputTile2TouchMove.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var Tile2MoveEffect_1 = require("../Tile2MoveEffect");
var Tile2RollCardEffect_1 = require("../Tile2RollCardEffect");
var InputTile2BaseTouchMove_1 = require("../inputbase/InputTile2BaseTouchMove");
var InputTile2TouchMove = /** @class */ (function (_super) {
    __extends(InputTile2TouchMove, _super);
    function InputTile2TouchMove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2TouchMove.prototype.excute = function (t) {
        _super.prototype.excute.call(this, t);
    };
    InputTile2TouchMove.prototype.runStartMove = function (t) {
        _super.prototype.runStartMove.call(this, t);
        var o = this.gameContext.tile2TouchData.tileId;
        this.gameContext.getTileMapObject().getTileObject(o) && this.gameContext.tile2DotTrackerModifier.recordErrorDrag(o);
    };
    InputTile2TouchMove.prototype.runMove = function (t, o) {
        var n, i;
        _super.prototype.runMove.call(this, t, o);
        var c = o.iFirstMove, u = o.rollCardDatas, p = this.gameContext.tile2TouchData.tileId, f = this.pushNewRootEffect(this.input, "Tile2MoveEffect"), d = this.gameContext.tileSelector.getExpandMultiple();
        try {
            for (var h = __values(u), y = h.next(); !y.done; y = h.next()) {
                var m = y.value, v = m.tileId, g = m.frontToBack, _ = new Tile2RollCardEffect_1.Tile2RollCardEffect({
                    tileId: v,
                    frontToBack: g
                });
                this.pushEffect(_, BehaviorsEnum_1.EInsertType.Parallel, f.newEffectId, false);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                y && !y.done && (i = h.return) && i.call(h);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        var T = new Tile2MoveEffect_1.Tile2MoveEffect({
            tileId: p,
            pos: t.pos,
            delta: t.delta,
            iFirstMove: c,
            multiple: d
        });
        this.pushEffect(T, BehaviorsEnum_1.EInsertType.Parallel, f.newEffectId, false);
    };
    InputTile2TouchMove.prototype.runLock = function (t) {
        _super.prototype.runLock.call(this, t);
        this.gameContext.inputTile2TouchRunLock.runLock(t, this);
    };
    return InputTile2TouchMove;
}(InputTile2BaseTouchMove_1.default));
exports.default = InputTile2TouchMove;

cc._RF.pop();