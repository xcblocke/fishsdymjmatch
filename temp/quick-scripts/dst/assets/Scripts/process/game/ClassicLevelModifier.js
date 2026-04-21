
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/game/ClassicLevelModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvZ2FtZS9DbGFzc2ljTGV2ZWxNb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RDtJQUEwQyx3Q0FBYztJQUN0RCw4QkFBWSxDQUFDO2VBQ1gsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELDJDQUFZLEdBQVosVUFBYSxDQUFDLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsZ0RBQWlCLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUNELDJEQUE0QixHQUE1QixVQUE2QixDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFDckMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNSLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ25DLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxvREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQ25DLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4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QUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDeEQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQTNFQSxBQTJFQyxDQTNFeUMsK0JBQWMsR0EyRXZEO0FBM0VZLG9EQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuZXhwb3J0IGNsYXNzIENsYXNzaWNMZXZlbE1vZGlmaWVyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcih0KSB7XG4gICAgc3VwZXIodCk7XG4gIH1cbiAgcHVzaExldmVsU3RyKGUsIHQpIHtcbiAgICB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKS5hZGRCYXRjaEluZm8oZSwgdCk7XG4gIH1cbiAgZ2V0Q3VycmVudEJhdGNoSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRHYW1lRGF0YSgpLmdldEN1cnJlbnRCYXRjaElkKCk7XG4gIH1cbiAgZ2V0UmVtYWluaW5nVGlsZUNvdW50QnlCYXRjaChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgbyA9IDA7XG4gICAgdC50aWxlT2JqZWN0TWFwKCkuZm9yRWFjaChmdW5jdGlvbiAodCkge1xuICAgICAgdC5pc1ZhbGlkICYmIHQuYmF0Y2hJZCA9PT0gZSAmJiBvKys7XG4gICAgfSk7XG4gICAgcmV0dXJuIG87XG4gIH1cbiAgaW5zdGFuY2VOZXh0QmF0Y2hEYXRhKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4sXG4gICAgICBpID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIGEgPSB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKTtcbiAgICBhLnJlbW92ZU5leHRMZXZlbFN0cihlKTtcbiAgICBhLnNldEN1cnJlbnRCYXRjaElkKGUpO1xuICAgIGEucmVzZXRTY29yZUNvbWJvKCk7XG4gICAgdmFyIGwgPSBpLmFkZEdhbWVMYXllcihlLCB0KTtcbiAgICBpZiAodGhpcy5jb250ZXh0LmdldE9wZW5HZW5lcmF0ZVN0YXRlKCkpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIHMgPSBfX3ZhbHVlcyhsLnRpbGVPYmplY3RzKSwgYyA9IHMubmV4dCgpOyAhYy5kb25lOyBjID0gcy5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgdSA9IGMudmFsdWU7XG4gICAgICAgICAgaS5zZXRUaWxlR2VuZXJhdGVkKHUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYyAmJiAhYy5kb25lICYmIChuID0gcy5yZXR1cm4pICYmIG4uY2FsbChzKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobykgdGhyb3cgby5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaS51cGRhdGVJbml0R2FtZUxheWVyKCk7XG4gICAgICB2YXIgcCA9IHRoaXMuY29udGV4dC5nZXRPZmZzZXRZKCk7XG4gICAgICBpLnVwZGF0ZVBvc2l0b25PZmZzZXRGb3JDbGFzc2ljKHAsIGUpO1xuICAgICAgdmFyIGYgPSBpLmdldERyb3BUaWxlcyhlKTtcbiAgICAgIGwuZmFpbGluZ1RpbGVzID0gZjtcbiAgICAgIGEuc2V0V2FpdEV4Y3V0ZURyb3AoZi5sZW5ndGggPiAwID8gMSA6IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmID0gdGhpcy5yZXNldFJlbWFpblRpbGVPYmplY3QoZSk7XG4gICAgICBsLmZhaWxpbmdUaWxlcyA9IGY7XG4gICAgfVxuICAgIGwub3BlbkdlbmVyYXRlU3RhdGUgPSB0aGlzLmNvbnRleHQuZ2V0T3BlbkdlbmVyYXRlU3RhdGUoKTtcbiAgICB0aGlzLmNvbnRleHQuc2F2ZU1vZGlmaWVyLnNhdmVMZXZlbERhdGFUb0xvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiBsO1xuICB9XG4gIHRyeUV4Y3V0ZURyb3AoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKTtcbiAgICBpZiAoZS5nZXRXYWl0RXhjdXRlRHJvcCgpID4gMCkge1xuICAgICAgZS5yZXNldFdhaXRFeGN1dGVEcm9wKCk7XG4gICAgICByZXR1cm4gdGhpcy5yZXNldFJlbWFpblRpbGVPYmplY3QoZS5nZXRDdXJyZW50QmF0Y2hJZCgpKTtcbiAgICB9XG4gIH1cbiAgcmVzZXRSZW1haW5UaWxlT2JqZWN0KGUsIHQgPSB0cnVlKSB7XG4gICAgdmFyIG8gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgbiA9IG8uY2hlY2tBbmRBcHBseVRpbGVGYWxsaW5nKGUsIHQpO1xuICAgIG8udXBkYXRlSW5pdEdhbWVMYXllcigpO1xuICAgIHZhciBpID0gdGhpcy5jb250ZXh0LmdldE9mZnNldFkoKTtcbiAgICBvLnVwZGF0ZVBvc2l0b25PZmZzZXRGb3JDbGFzc2ljKGkpO1xuICAgIG8uY2xlYW51cEVtcHR5TGF5ZXJzKCk7XG4gICAgdGhpcy5jb250ZXh0LnNhdmVNb2RpZmllci5zYXZlTGV2ZWxEYXRhVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gbjtcbiAgfVxufSJdfQ==