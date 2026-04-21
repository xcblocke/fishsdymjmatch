
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/UpdateCollectTargetBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '818f7tVl9BIhJJH4EV3aAjU', 'UpdateCollectTargetBehavior');
// Scripts/base/UpdateCollectTargetBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCollectTargetBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var UpdateCollectTargetBehavior = /** @class */ (function (_super) {
    __extends(UpdateCollectTargetBehavior, _super);
    function UpdateCollectTargetBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._timeout = 3000;
        return _this;
    }
    UpdateCollectTargetBehavior.prototype.start = function (e) {
        var t, o;
        try {
            var n = e.data.collectDetails;
            if (!n || 0 === n.length) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            try {
                for (var i = __values(n), l = i.next(); !l.done; l = i.next()) {
                    var s = l.value;
                    this.updateSingleTarget(s);
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    l && !l.done && (o = i.return) && o.call(i);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        catch (e) {
            this.fail("更新收集目标失败");
        }
    };
    UpdateCollectTargetBehavior.prototype.updateSingleTarget = function (e) {
        var t = e.type === TileTypeEnum_1.ETileType.RollCard ? "" + e.type : e.type + "_" + e.cardId, o = this.context.getCollectTargetItem(t);
        if (o) {
            o.updateData(e);
            o.playCollectAnimation();
        }
    };
    return UpdateCollectTargetBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.UpdateCollectTargetBehavior = UpdateCollectTargetBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVXBkYXRlQ29sbGVjdFRhcmdldEJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLG1FQUErRDtBQUMvRCx5REFBd0Q7QUFDeEQ7SUFBaUQsK0NBQWlCO0lBQWxFO1FBQUEscUVBdUNDO1FBdENDLGNBQVEsR0FBRyxJQUFJLENBQUM7O0lBc0NsQixDQUFDO0lBckNDLDJDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzlCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkMsT0FBTzthQUNSO1lBQ0QsSUFBSTtnQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNoQixJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzVCO2FBQ0Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixDQUFDLEdBQUc7b0JBQ0YsS0FBSyxFQUFFLENBQUM7aUJBQ1QsQ0FBQzthQUNIO29CQUFTO2dCQUNSLElBQUk7b0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7d0JBQVM7b0JBQ1IsSUFBSSxDQUFDO3dCQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDdEI7YUFDRjtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFDRCx3REFBa0IsR0FBbEIsVUFBbUIsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLHdCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFDM0UsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUNILGtDQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsQ0F2Q2dELHFDQUFpQixHQXVDakU7QUF2Q1ksa0VBQTJCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEVUaWxlVHlwZSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBVcGRhdGVDb2xsZWN0VGFyZ2V0QmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIF90aW1lb3V0ID0gMzAwMDtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0LCBvO1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IGUuZGF0YS5jb2xsZWN0RGV0YWlscztcbiAgICAgIGlmICghbiB8fCAwID09PSBuLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMobiksIGwgPSBpLm5leHQoKTsgIWwuZG9uZTsgbCA9IGkubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIHMgPSBsLnZhbHVlO1xuICAgICAgICAgIHRoaXMudXBkYXRlU2luZ2xlVGFyZ2V0KHMpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgZXJyb3I6IGVcbiAgICAgICAgfTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbCAmJiAhbC5kb25lICYmIChvID0gaS5yZXR1cm4pICYmIG8uY2FsbChpKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodCkgdGhyb3cgdC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmZhaWwoXCLmm7TmlrDmlLbpm4bnm67moIflpLHotKVcIik7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVNpbmdsZVRhcmdldChlKSB7XG4gICAgdmFyIHQgPSBlLnR5cGUgPT09IEVUaWxlVHlwZS5Sb2xsQ2FyZCA/IFwiXCIgKyBlLnR5cGUgOiBlLnR5cGUgKyBcIl9cIiArIGUuY2FyZElkLFxuICAgICAgbyA9IHRoaXMuY29udGV4dC5nZXRDb2xsZWN0VGFyZ2V0SXRlbSh0KTtcbiAgICBpZiAobykge1xuICAgICAgby51cGRhdGVEYXRhKGUpO1xuICAgICAgby5wbGF5Q29sbGVjdEFuaW1hdGlvbigpO1xuICAgIH1cbiAgfVxufSJdfQ==