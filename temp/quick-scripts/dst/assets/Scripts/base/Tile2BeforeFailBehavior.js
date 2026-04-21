
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2BeforeFailBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae404uKXMBKa4jGu64zNth8', 'Tile2BeforeFailBehavior');
// Scripts/base/Tile2BeforeFailBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2BeforeFailBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var EffectLayerEnum_1 = require("../constant/EffectLayerEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var CommonUtils_1 = require("../framework/utils/CommonUtils");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2BeforeFailBehavior = /** @class */ (function (_super) {
    __extends(Tile2BeforeFailBehavior, _super);
    function Tile2BeforeFailBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2BeforeFailBehavior.prototype.onAbort = function () {
        var e;
        null === (e = this.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
    };
    Tile2BeforeFailBehavior.prototype.start = function (e) {
        var t, o, n = this, i = e.data.tileIds, l = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
        if (l && cc.isValid(l)) {
            if (this.context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot3) {
                null === (o = this.context.gameView) || void 0 === o || o.setSwallowEventNodeActive(true);
                for (var s = this.createMaskNode(l), p = 0; p < i.length; p++) {
                    var f = i[p], d = this.context.getTileNodeByTileId(f);
                    d && d.tile2BeforeFail(l);
                }
                mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Fail3Slot);
                this.playMaskFadeIn(s, function () {
                    var e;
                    cc.isValid(s) && s.destroy();
                    null === (e = n.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
                    n.finish(GameInputEnum_1.EBehaviorEnum.Success);
                });
            }
            else
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2BeforeFailBehavior.prototype.createMaskNode = function (e) {
        var t = CommonUtils_1.createSingleColorNode(cc.Color.BLACK, cc.size(9999, 9999));
        t.zIndex = -1;
        t.parent = e;
        return t;
    };
    Tile2BeforeFailBehavior.prototype.playMaskFadeIn = function (e, t) {
        if (e && cc.isValid(e)) {
            e.opacity = 0;
            var o = Math.round(76.5);
            cc.tween(e).to(0.27, {
                opacity: o
            }, {
                easing: cc.easing.sineInOut
            }).delay(1).call(function () {
                null == t || t();
            }).start();
        }
        else
            null == t || t();
    };
    return Tile2BeforeFailBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2BeforeFailBehavior = Tile2BeforeFailBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJCZWZvcmVGYWlsQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUsK0RBQTBEO0FBQzFELHlEQUF3RDtBQUN4RCw4REFBdUU7QUFDdkUsMEVBQW9GO0FBQ3BGO0lBQTZDLDJDQUFpQjtJQUE5RDs7SUFnREEsQ0FBQztJQS9DQyx5Q0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDRCx1Q0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFDbEIsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsNkJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLDhCQUFjLENBQUMsS0FBSyxFQUFFO2dCQUM1RCxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxRixLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDN0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNWLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDM0I7Z0JBQ0QsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxDQUFDO29CQUNOLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUM3QixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN4RixDQUFDLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2FBQ0o7O2dCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQzs7WUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELGdEQUFjLEdBQWQsVUFBZSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsbUNBQXFCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDYixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxnREFBYyxHQUFkLFVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0QixDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO2dCQUNuQixPQUFPLEVBQUUsQ0FBQzthQUNYLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUzthQUM1QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7O1lBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQWhEQSxBQWdEQyxDQWhENEMscUNBQWlCLEdBZ0Q3RDtBQWhEWSwwREFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRWZmZWN0TGF5ZXIgfSBmcm9tICcuLi9jb25zdGFudC9FZmZlY3RMYXllckVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmltcG9ydCB7IGNyZWF0ZVNpbmdsZUNvbG9yTm9kZSB9IGZyb20gJy4uL2ZyYW1ld29yay91dGlscy9Db21tb25VdGlscyc7XG5pbXBvcnQgeyBFVGlsZTJTbG90VHlwZSwgRUF1ZGlvSUQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmV4cG9ydCBjbGFzcyBUaWxlMkJlZm9yZUZhaWxCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgb25BYm9ydCgpIHtcbiAgICB2YXIgZTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuY29udGV4dC5nYW1lVmlldykgfHwgdm9pZCAwID09PSBlIHx8IGUuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZShmYWxzZSk7XG4gIH1cbiAgc3RhcnQoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSB0aGlzLFxuICAgICAgaSA9IGUuZGF0YS50aWxlSWRzLFxuICAgICAgbCA9IG51bGwgPT09ICh0ID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3KSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldEVmZmVjdExheWVyKEVmZmVjdExheWVyLlRvcCk7XG4gICAgaWYgKGwgJiYgY2MuaXNWYWxpZChsKSkge1xuICAgICAgaWYgKHRoaXMuY29udGV4dC5nZXRUaWxlMlNsb3RUeXBlKCkgPT09IEVUaWxlMlNsb3RUeXBlLlNsb3QzKSB7XG4gICAgICAgIG51bGwgPT09IChvID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3KSB8fCB2b2lkIDAgPT09IG8gfHwgby5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKHRydWUpO1xuICAgICAgICBmb3IgKHZhciBzID0gdGhpcy5jcmVhdGVNYXNrTm9kZShsKSwgcCA9IDA7IHAgPCBpLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgICAgdmFyIGYgPSBpW3BdLFxuICAgICAgICAgICAgZCA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZUJ5VGlsZUlkKGYpO1xuICAgICAgICAgIGQgJiYgZC50aWxlMkJlZm9yZUZhaWwobCk7XG4gICAgICAgIH1cbiAgICAgICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuVGlsZTJGYWlsM1Nsb3QpO1xuICAgICAgICB0aGlzLnBsYXlNYXNrRmFkZUluKHMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICBjYy5pc1ZhbGlkKHMpICYmIHMuZGVzdHJveSgpO1xuICAgICAgICAgIG51bGwgPT09IChlID0gbi5jb250ZXh0LmdhbWVWaWV3KSB8fCB2b2lkIDAgPT09IGUgfHwgZS5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICBuLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgIH0gZWxzZSB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIGNyZWF0ZU1hc2tOb2RlKGUpIHtcbiAgICB2YXIgdCA9IGNyZWF0ZVNpbmdsZUNvbG9yTm9kZShjYy5Db2xvci5CTEFDSywgY2Muc2l6ZSg5OTk5LCA5OTk5KSk7XG4gICAgdC56SW5kZXggPSAtMTtcbiAgICB0LnBhcmVudCA9IGU7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgcGxheU1hc2tGYWRlSW4oZSwgdCkge1xuICAgIGlmIChlICYmIGNjLmlzVmFsaWQoZSkpIHtcbiAgICAgIGUub3BhY2l0eSA9IDA7XG4gICAgICB2YXIgbyA9IE1hdGgucm91bmQoNzYuNSk7XG4gICAgICBjYy50d2VlbihlKS50bygwLjI3LCB7XG4gICAgICAgIG9wYWNpdHk6IG9cbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluT3V0XG4gICAgICB9KS5kZWxheSgxKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIG51bGwgPT0gdCB8fCB0KCk7XG4gIH1cbn0iXX0=