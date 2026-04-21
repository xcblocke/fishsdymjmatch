"use strict";
cc._RF.push(module, '62a98RM5KtEf49NaLVDDRVc', 'Tile2ReviveBehavior');
// Scripts/base/Tile2ReviveBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2ReviveBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var VibrateManager_1 = require("../gamePlay/base/vibrate/VibrateManager");
var Tile2ReviveBehavior = /** @class */ (function (_super) {
    __extends(Tile2ReviveBehavior, _super);
    function Tile2ReviveBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 0;
        return _this;
    }
    Tile2ReviveBehavior.prototype.start = function (e) {
        var t = e.data, o = t.returnedTileIds, n = t.reviveType;
        if (o && 0 !== o.length) {
            if ("clear" === n) {
                this.startClearMode(e);
            }
            else {
                this.startReturnMode(e);
            }
        }
        else {
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
    };
    Tile2ReviveBehavior.prototype.startReturnMode = function (e) {
        var t, o, n = this, i = e.data.returnedTileIds, r = this.context.gameView, s = null == r ? void 0 : r.slotBarView, u = this.context.getTileNodeMap();
        if (s) {
            var p = s.getNodeLayer();
            s.removeSlotBar(i);
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Fit);
            var f = 0, d = function d(e) {
                var t = u.get(e);
                if (!t) {
                    ++f >= i.length && h.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    return "continue";
                }
                t.tile2ReturnFromSlotBar(p, function () {
                    t.tile2RollCard();
                    if (++f >= i.length) {
                        n.playReviveVibrate();
                        n.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    }
                });
            }, h = this;
            try {
                for (var y = __values(i), m = y.next(); !m.done; m = y.next())
                    d(m.value);
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    m && !m.done && (o = y.return) && o.call(y);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2ReviveBehavior.prototype.playReviveVibrate = function () {
        VibrateManager_1.default.executeVibrate(VibrateManager_1.EVibrateStrength.StrongShort, VibrateManager_1.EVibratePoint.Tile2Revive);
    };
    Tile2ReviveBehavior.prototype.startClearMode = function (e) {
        var t = e.data.returnedTileIds, o = this.context.gameView, n = null == o ? void 0 : o.slotBarView;
        n && n.removeSlotBar(t);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("T2RvBhv_start")
    ], Tile2ReviveBehavior.prototype, "start", null);
    return Tile2ReviveBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2ReviveBehavior = Tile2ReviveBehavior;

cc._RF.pop();