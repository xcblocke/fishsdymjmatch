
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2RevertBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d9d8a/jOxJ9LQdE7ZKdLTL', 'Tile2RevertBehavior');
// Scripts/base/Tile2RevertBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2RevertBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2RevertBehavior = /** @class */ (function (_super) {
    __extends(Tile2RevertBehavior, _super);
    function Tile2RevertBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2RevertBehavior.prototype.start = function (e) {
        var t = this, o = e.data.tileId, n = this.context.getTileNodeMap().get(o);
        if (n) {
            var i = this.context.gameView, a = null == i ? void 0 : i.slotBarView;
            a && a.removeSlotBar([o]);
            n.tile2RevertFromSlotBar(function () {
                n.tile2RollCard();
                t.finish(GameInputEnum_1.EBehaviorEnum.Success);
            });
            this.playRevertSound();
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2RevertBehavior.prototype.playRevertSound = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Fit);
    };
    return Tile2RevertBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2RevertBehavior = Tile2RevertBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJSZXZlcnRCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQsMEVBQW9FO0FBQ3BFO0lBQXlDLHVDQUFpQjtJQUExRDs7SUFtQkEsQ0FBQztJQWxCQyxtQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQ2pCLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUMzQixDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDekMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNsQixDQUFDLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDeEI7O1lBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCw2Q0FBZSxHQUFmO1FBQ0UsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQW5CQSxBQW1CQyxDQW5Cd0MscUNBQWlCLEdBbUJ6RDtBQW5CWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5leHBvcnQgY2xhc3MgVGlsZTJSZXZlcnRCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIG8gPSBlLmRhdGEudGlsZUlkLFxuICAgICAgbiA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpLmdldChvKTtcbiAgICBpZiAobikge1xuICAgICAgdmFyIGkgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcsXG4gICAgICAgIGEgPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLnNsb3RCYXJWaWV3O1xuICAgICAgYSAmJiBhLnJlbW92ZVNsb3RCYXIoW29dKTtcbiAgICAgIG4udGlsZTJSZXZlcnRGcm9tU2xvdEJhcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIG4udGlsZTJSb2xsQ2FyZCgpO1xuICAgICAgICB0LmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnBsYXlSZXZlcnRTb3VuZCgpO1xuICAgIH0gZWxzZSB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIHBsYXlSZXZlcnRTb3VuZCgpIHtcbiAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5UaWxlMkZpdCk7XG4gIH1cbn0iXX0=