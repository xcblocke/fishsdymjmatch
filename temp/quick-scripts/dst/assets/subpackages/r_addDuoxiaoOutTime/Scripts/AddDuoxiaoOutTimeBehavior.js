
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_addDuoxiaoOutTime/Scripts/AddDuoxiaoOutTimeBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9adb4eiyi5JHotM7Vm/GZpE', 'AddDuoxiaoOutTimeBehavior');
// subpackages/r_addDuoxiaoOutTime/Scripts/AddDuoxiaoOutTimeBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDuoxiaoOutTimeBehavior = void 0;
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var AddDuoxiaoOutTimeBehavior = /** @class */ (function (_super) {
    __extends(AddDuoxiaoOutTimeBehavior, _super);
    function AddDuoxiaoOutTimeBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddDuoxiaoOutTimeBehavior.prototype.start = function (e) {
        var t = e.data, i = null == t ? void 0 : t.tileId;
        if (i) {
            this._rebuildTileNode(i);
            this._playFlashEffect(i);
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    AddDuoxiaoOutTimeBehavior.prototype._rebuildTileNode = function (e) {
        var t, i = null === (t = this.context.getTileNodeMap()) || void 0 === t ? void 0 : t.get(e);
        if (i) {
            var o = null == i ? void 0 : i.tileNode;
            if (o && cc.isValid(o)) {
                var a = o.getChildByName("DuoxiaoCardFlagNode");
                if (a) {
                    a.active = true;
                    return;
                }
            }
            var n = this.context.getTileNodeManager();
            n && n.rebuildChangeTypeTileNodes([i]);
        }
    };
    AddDuoxiaoOutTimeBehavior.prototype._playFlashEffect = function (e) {
        var t, i = null === (t = this.context.getTileNodeMap()) || void 0 === t ? void 0 : t.get(e), o = null == i ? void 0 : i.tileNode;
        if (o && cc.isValid(o)) {
            var a = BaseSpine_1.default.create("spine/gameplay_effect_3", "in", 1, function () {
                cc.isValid(null == a ? void 0 : a.node) && a.node.destroy();
            }, false, "r_addDuoxiaoOutTime");
            if (null == a ? void 0 : a.node) {
                a.node.parent = o;
                a.node.setPosition(-5, 7);
            }
        }
    };
    return AddDuoxiaoOutTimeBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.AddDuoxiaoOutTimeBehavior = AddDuoxiaoOutTimeBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FkZER1b3hpYW9PdXRUaW1lL1NjcmlwdHMvQWRkRHVveGlhb091dFRpbWVCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1GQUFrRjtBQUNsRiw2RUFBNEU7QUFDNUUseUVBQW9FO0FBQ3BFO0lBQStDLDZDQUFpQjtJQUFoRTs7SUF3Q0EsQ0FBQztJQXZDQyx5Q0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1osQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxFQUFFO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsb0RBQWdCLEdBQWhCLFVBQWlCLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2hCLE9BQU87aUJBQ1I7YUFDRjtZQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxQyxDQUFDLElBQUksQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFDRCxvREFBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNwRixDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO2dCQUMzRCxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5RCxDQUFDLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixDQUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtnQkFDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMzQjtTQUNGO0lBQ0gsQ0FBQztJQUNILGdDQUFDO0FBQUQsQ0F4Q0EsQUF3Q0MsQ0F4QzhDLHFDQUFpQixHQXdDL0Q7QUF4Q1ksOERBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvR2FtZUJlaGF2aW9yc0Jhc2UnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmV4cG9ydCBjbGFzcyBBZGREdW94aWFvT3V0VGltZUJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQgPSBlLmRhdGEsXG4gICAgICBpID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC50aWxlSWQ7XG4gICAgaWYgKGkpIHtcbiAgICAgIHRoaXMuX3JlYnVpbGRUaWxlTm9kZShpKTtcbiAgICAgIHRoaXMuX3BsYXlGbGFzaEVmZmVjdChpKTtcbiAgICB9XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBfcmVidWlsZFRpbGVOb2RlKGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIGkgPSBudWxsID09PSAodCA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldChlKTtcbiAgICBpZiAoaSkge1xuICAgICAgdmFyIG8gPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLnRpbGVOb2RlO1xuICAgICAgaWYgKG8gJiYgY2MuaXNWYWxpZChvKSkge1xuICAgICAgICB2YXIgYSA9IG8uZ2V0Q2hpbGRCeU5hbWUoXCJEdW94aWFvQ2FyZEZsYWdOb2RlXCIpO1xuICAgICAgICBpZiAoYSkge1xuICAgICAgICAgIGEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBuID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFuYWdlcigpO1xuICAgICAgbiAmJiBuLnJlYnVpbGRDaGFuZ2VUeXBlVGlsZU5vZGVzKFtpXSk7XG4gICAgfVxuICB9XG4gIF9wbGF5Rmxhc2hFZmZlY3QoZSkge1xuICAgIHZhciB0LFxuICAgICAgaSA9IG51bGwgPT09ICh0ID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFwKCkpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0KGUpLFxuICAgICAgbyA9IG51bGwgPT0gaSA/IHZvaWQgMCA6IGkudGlsZU5vZGU7XG4gICAgaWYgKG8gJiYgY2MuaXNWYWxpZChvKSkge1xuICAgICAgdmFyIGEgPSBCYXNlU3BpbmUuY3JlYXRlKFwic3BpbmUvZ2FtZXBsYXlfZWZmZWN0XzNcIiwgXCJpblwiLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNjLmlzVmFsaWQobnVsbCA9PSBhID8gdm9pZCAwIDogYS5ub2RlKSAmJiBhLm5vZGUuZGVzdHJveSgpO1xuICAgICAgfSwgZmFsc2UsIFwicl9hZGREdW94aWFvT3V0VGltZVwiKTtcbiAgICAgIGlmIChudWxsID09IGEgPyB2b2lkIDAgOiBhLm5vZGUpIHtcbiAgICAgICAgYS5ub2RlLnBhcmVudCA9IG87XG4gICAgICAgIGEubm9kZS5zZXRQb3NpdGlvbigtNSwgNyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19