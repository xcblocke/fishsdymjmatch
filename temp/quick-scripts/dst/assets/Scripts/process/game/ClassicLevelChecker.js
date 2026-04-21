
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/game/ClassicLevelChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvZ2FtZS9DbGFzc2ljTGV2ZWxDaGVja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3REO0lBQXlDLHVDQUFjO0lBQXZEOztJQWlDQSxDQUFDO0lBaENDLGtEQUFvQixHQUFwQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN2RCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDckUsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELHdEQUEwQixHQUExQixVQUEyQixDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsRUFDckMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNSLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ25DLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxtREFBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLEVBQ3JDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsbURBQXFCLEdBQXJCLFVBQXNCLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7WUFBRSxPQUFPO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQztnQkFDVixRQUFRLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQzthQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsQ0FqQ3dDLCtCQUFjLEdBaUN0RDtBQWpDWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmV4cG9ydCBjbGFzcyBDbGFzc2ljTGV2ZWxDaGVja2VyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuICBnZXROZWVkSW5pdE5leHRMZXZlbCgpIHtcbiAgICB2YXIgZSA9IHRoaXMuY29udGV4dC5nZXRHYW1lRGF0YSgpLmdldEN1cnJlbnRCYXRjaElkKCk7XG4gICAgaWYgKHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuaGFzQ2hlY2tCYXRjaElkKGUpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaXMuZ2V0VmFsaWRlTGF5ZXJJbmRleGVzKCkuc2l6ZSA8PSAxKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmFkZENoZWNrQmF0Y2hJZChlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZ2V0Q3VycmVudEJhdGNoUmVtYWluQ291bnQoZSkge1xuICAgIHZhciB0ID0gdGhpcy5jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIG8gPSAwO1xuICAgIHQudGlsZU9iamVjdE1hcCgpLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHQuaXNWYWxpZCAmJiB0LmJhdGNoSWQgPT09IGUgJiYgbysrO1xuICAgIH0pO1xuICAgIHJldHVybiBvO1xuICB9XG4gIGdldFZhbGlkZUxheWVySW5kZXhlcygpIHtcbiAgICB2YXIgZSA9IHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCksXG4gICAgICB0ID0gbmV3IFNldCgpO1xuICAgIGUubWFwTGF5ZXJzKCkuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgIXQuaGFzKGUubGF5ZXJJbmRleCkgJiYgZS5oYXNWYWxpZENhcmQoKSAmJiB0LmFkZChlLmxheWVySW5kZXgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0O1xuICB9XG4gIGdldEJhdGNoSW5mb0J5QmF0Y2hJZChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKTtcbiAgICBpZiAodC5nZXRMZXZlbFN0ckJ5QmF0Y2hJZChlKSkgcmV0dXJuIHtcbiAgICAgIGJhdGNoSWQ6IGUsXG4gICAgICBsZXZlbFN0cjogdC5nZXRMZXZlbFN0ckJ5QmF0Y2hJZChlKVxuICAgIH07XG4gIH1cbn0iXX0=