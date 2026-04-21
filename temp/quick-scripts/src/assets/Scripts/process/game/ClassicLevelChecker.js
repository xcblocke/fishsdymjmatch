"use strict";
cc._RF.push(module, '66c3cifjxVNfqKyHnuQ+owp', 'ClassicLevelChecker');
// Scripts/process/game/ClassicLevelChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicLevelChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var ClassicLevelChecker = /** @class */ (function (_super) {
    __extends(ClassicLevelChecker, _super);
    function ClassicLevelChecker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassicLevelChecker.prototype.getNeedInitNextLevel = function () {
        var e = this.context.getGameData().getCurrentBatchId();
        if (this.context.getTileMapObject().hasCheckBatchId(e))
            return false;
        if (this.getValideLayerIndexes().size <= 1) {
            this.context.getTileMapObject().addCheckBatchId(e);
            return true;
        }
        return false;
    };
    ClassicLevelChecker.prototype.getCurrentBatchRemainCount = function (e) {
        var t = this.context.getTileMapObject(), o = 0;
        t.tileObjectMap().forEach(function (t) {
            t.isValid && t.batchId === e && o++;
        });
        return o;
    };
    ClassicLevelChecker.prototype.getValideLayerIndexes = function () {
        var e = this.context.getTileMapObject(), t = new Set();
        e.mapLayers().forEach(function (e) {
            !t.has(e.layerIndex) && e.hasValidCard() && t.add(e.layerIndex);
        });
        return t;
    };
    ClassicLevelChecker.prototype.getBatchInfoByBatchId = function (e) {
        var t = this.context.getGameData();
        if (t.getLevelStrByBatchId(e))
            return {
                batchId: e,
                levelStr: t.getLevelStrByBatchId(e)
            };
    };
    return ClassicLevelChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.ClassicLevelChecker = ClassicLevelChecker;

cc._RF.pop();