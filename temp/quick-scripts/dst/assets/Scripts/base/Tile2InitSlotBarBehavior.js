
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2InitSlotBarBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '818e88p3/VPN46ep0zxR6/a', 'Tile2InitSlotBarBehavior');
// Scripts/base/Tile2InitSlotBarBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2InitSlotBarBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var SlotBarView_1 = require("../gamePlay/tile2game/view/SlotBarView");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2InitSlotBarBehavior = /** @class */ (function (_super) {
    __extends(Tile2InitSlotBarBehavior, _super);
    function Tile2InitSlotBarBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2InitSlotBarBehavior.prototype.start = function (e) {
        var t = this, o = e.data, n = o.tileIds, i = o.slotLevel, r = this.context.gameView, l = null == r ? void 0 : r.slotBarView;
        if (l)
            this.initSlotBar(l, n, i);
        else {
            var u = "prefabs/game/Tile2nodeSlotBar";
            e.data.slotType === GameTypeEnums_1.ETile2SlotType.Slot4 && (u = "prefabs/game/Tile2Slot4nodeSlotBar");
            SlotBarView_1.default.createUI(u).then(function (o) {
                var l = r.getSlotBarNode();
                if (cc.isValid(l)) {
                    l.setContentSize(o.getContentSize());
                    o.parent = l;
                    var c = o.getComponent(SlotBarView_1.default);
                    r.setSlotBarView(c);
                    c.init(e.data.slotType);
                    t.initSlotBar(c, n, i);
                }
                else
                    t.finish(GameInputEnum_1.EBehaviorEnum.Fail);
            });
        }
    };
    Tile2InitSlotBarBehavior.prototype.initSlotBar = function (e, t, o) {
        var n = this.context.getTileNodeMap();
        t.forEach(function (t, o) {
            var i = n.get(t);
            if (i) {
                e.addTileNode(i, o);
                i.tile2ShowFrontImmediately();
            }
        });
        o > 0 && e.slotBarEffectManager && e.slotBarEffectManager.initToLevel(o);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    __decorate([
        mj.traitEvent("T2InitSlotBarBhv_start")
    ], Tile2InitSlotBarBehavior.prototype, "start", null);
    return Tile2InitSlotBarBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2InitSlotBarBehavior = Tile2InitSlotBarBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJJbml0U2xvdEJhckJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLHlEQUF3RDtBQUN4RCxzRUFBaUU7QUFDakUsMEVBQTBFO0FBQzFFO0lBQThDLDRDQUFpQjtJQUEvRDs7SUFxQ0EsQ0FBQztJQW5DQyx3Q0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFDYixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFDZixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQ3pCLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFBSztZQUNwQyxJQUFJLENBQUMsR0FBRywrQkFBK0IsQ0FBQztZQUN4QyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyw4QkFBYyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxvQ0FBb0MsQ0FBQyxDQUFDO1lBQ3ZGLHFCQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNqQixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUNyQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztvQkFDcEMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4QixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3hCOztvQkFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFDRCw4Q0FBVyxHQUFYLFVBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBbENEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzt5REF1QnZDO0lBYUgsK0JBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQzZDLHFDQUFpQixHQXFDOUQ7QUFyQ1ksNERBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5pbXBvcnQgU2xvdEJhclZpZXcgZnJvbSAnLi4vZ2FtZVBsYXkvdGlsZTJnYW1lL3ZpZXcvU2xvdEJhclZpZXcnO1xuaW1wb3J0IHsgRVRpbGUyU2xvdFR5cGUgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmV4cG9ydCBjbGFzcyBUaWxlMkluaXRTbG90QmFyQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIEBtai50cmFpdEV2ZW50KFwiVDJJbml0U2xvdEJhckJodl9zdGFydFwiKVxuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgbyA9IGUuZGF0YSxcbiAgICAgIG4gPSBvLnRpbGVJZHMsXG4gICAgICBpID0gby5zbG90TGV2ZWwsXG4gICAgICByID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LFxuICAgICAgbCA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIuc2xvdEJhclZpZXc7XG4gICAgaWYgKGwpIHRoaXMuaW5pdFNsb3RCYXIobCwgbiwgaSk7ZWxzZSB7XG4gICAgICB2YXIgdSA9IFwicHJlZmFicy9nYW1lL1RpbGUybm9kZVNsb3RCYXJcIjtcbiAgICAgIGUuZGF0YS5zbG90VHlwZSA9PT0gRVRpbGUyU2xvdFR5cGUuU2xvdDQgJiYgKHUgPSBcInByZWZhYnMvZ2FtZS9UaWxlMlNsb3Q0bm9kZVNsb3RCYXJcIik7XG4gICAgICBTbG90QmFyVmlldy5jcmVhdGVVSSh1KS50aGVuKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHZhciBsID0gci5nZXRTbG90QmFyTm9kZSgpO1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChsKSkge1xuICAgICAgICAgIGwuc2V0Q29udGVudFNpemUoby5nZXRDb250ZW50U2l6ZSgpKTtcbiAgICAgICAgICBvLnBhcmVudCA9IGw7XG4gICAgICAgICAgdmFyIGMgPSBvLmdldENvbXBvbmVudChTbG90QmFyVmlldyk7XG4gICAgICAgICAgci5zZXRTbG90QmFyVmlldyhjKTtcbiAgICAgICAgICBjLmluaXQoZS5kYXRhLnNsb3RUeXBlKTtcbiAgICAgICAgICB0LmluaXRTbG90QmFyKGMsIG4sIGkpO1xuICAgICAgICB9IGVsc2UgdC5maW5pc2goRUJlaGF2aW9yRW51bS5GYWlsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpbml0U2xvdEJhcihlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYXAoKTtcbiAgICB0LmZvckVhY2goZnVuY3Rpb24gKHQsIG8pIHtcbiAgICAgIHZhciBpID0gbi5nZXQodCk7XG4gICAgICBpZiAoaSkge1xuICAgICAgICBlLmFkZFRpbGVOb2RlKGksIG8pO1xuICAgICAgICBpLnRpbGUyU2hvd0Zyb250SW1tZWRpYXRlbHkoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvID4gMCAmJiBlLnNsb3RCYXJFZmZlY3RNYW5hZ2VyICYmIGUuc2xvdEJhckVmZmVjdE1hbmFnZXIuaW5pdFRvTGV2ZWwobyk7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxufSJdfQ==