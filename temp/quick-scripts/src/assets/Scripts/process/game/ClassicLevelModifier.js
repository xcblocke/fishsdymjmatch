"use strict";
cc._RF.push(module, 'eb6bb/qJCBKK68y76XKh2nX', 'ClassicLevelModifier');
// Scripts/process/game/ClassicLevelModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicLevelModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var ClassicLevelModifier = /** @class */ (function (_super) {
    __extends(ClassicLevelModifier, _super);
    function ClassicLevelModifier(t) {
        return _super.call(this, t) || this;
    }
    ClassicLevelModifier.prototype.pushLevelStr = function (e, t) {
        this.context.getGameData().addBatchInfo(e, t);
    };
    ClassicLevelModifier.prototype.getCurrentBatchId = function () {
        return this.context.getGameData().getCurrentBatchId();
    };
    ClassicLevelModifier.prototype.getRemainingTileCountByBatch = function (e) {
        var t = this.context.getTileMapObject(), o = 0;
        t.tileObjectMap().forEach(function (t) {
            t.isValid && t.batchId === e && o++;
        });
        return o;
    };
    ClassicLevelModifier.prototype.instanceNextBatchData = function (e, t) {
        var o, n, i = this.context.getTileMapObject(), a = this.context.getGameData();
        a.removeNextLevelStr(e);
        a.setCurrentBatchId(e);
        a.resetScoreCombo();
        var l = i.addGameLayer(e, t);
        if (this.context.getOpenGenerateState()) {
            try {
                for (var s = __values(l.tileObjects), c = s.next(); !c.done; c = s.next()) {
                    var u = c.value;
                    i.setTileGenerated(u, true);
                }
            }
            catch (e) {
                o = {
                    error: e
                };
            }
            finally {
                try {
                    c && !c.done && (n = s.return) && n.call(s);
                }
                finally {
                    if (o)
                        throw o.error;
                }
            }
            i.updateInitGameLayer();
            var p = this.context.getOffsetY();
            i.updatePositonOffsetForClassic(p, e);
            var f = i.getDropTiles(e);
            l.failingTiles = f;
            a.setWaitExcuteDrop(f.length > 0 ? 1 : 0);
        }
        else {
            f = this.resetRemainTileObject(e);
            l.failingTiles = f;
        }
        l.openGenerateState = this.context.getOpenGenerateState();
        this.context.saveModifier.saveLevelDataToLocalStorage();
        return l;
    };
    ClassicLevelModifier.prototype.tryExcuteDrop = function () {
        var e = this.context.getGameData();
        if (e.getWaitExcuteDrop() > 0) {
            e.resetWaitExcuteDrop();
            return this.resetRemainTileObject(e.getCurrentBatchId());
        }
    };
    ClassicLevelModifier.prototype.resetRemainTileObject = function (e, t) {
        if (t === void 0) { t = true; }
        var o = this.context.getTileMapObject(), n = o.checkAndApplyTileFalling(e, t);
        o.updateInitGameLayer();
        var i = this.context.getOffsetY();
        o.updatePositonOffsetForClassic(i);
        o.cleanupEmptyLayers();
        this.context.saveModifier.saveLevelDataToLocalStorage();
        return n;
    };
    return ClassicLevelModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.ClassicLevelModifier = ClassicLevelModifier;

cc._RF.pop();