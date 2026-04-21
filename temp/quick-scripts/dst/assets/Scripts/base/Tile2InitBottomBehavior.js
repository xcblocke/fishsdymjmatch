
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2InitBottomBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10613FtSKJB5ru4URVr08gB', 'Tile2InitBottomBehavior');
// Scripts/base/Tile2InitBottomBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2InitBottomBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2NodeBottomView_1 = require("../gamePlay/tile2game/view/Tile2NodeBottomView");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2InitBottomBehavior = /** @class */ (function (_super) {
    __extends(Tile2InitBottomBehavior, _super);
    function Tile2InitBottomBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2InitBottomBehavior.prototype.start = function (e) {
        var t = this, o = e.data, n = o.shuffleNum, i = o.hitTipsNum, l = o.revertNum, s = this.context.gameView, c = null == s ? void 0 : s.nodeBottomView, u = function u(e) {
            e.updateShuffleNum(n);
            e.updateHitTipsNum(i);
            e.updateRevertNum(l);
        };
        if (c) {
            u(c);
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            Tile2NodeBottomView_1.default.createUI("prefabs/game/Tile2nodeBottom").then(function (e) {
                var o = s.getBottomNode();
                if (cc.isValid(o)) {
                    e.parent = o;
                    var n = e.getComponent(Tile2NodeBottomView_1.default);
                    s.setNodeBottomView(n);
                    u(n);
                    n.delegate = t.context.gameCtr;
                    t.finish(GameInputEnum_1.EBehaviorEnum.Success);
                }
                else
                    t.finish(GameInputEnum_1.EBehaviorEnum.Fail);
            });
    };
    return Tile2InitBottomBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2InitBottomBehavior = Tile2InitBottomBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJJbml0Qm90dG9tQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUsc0ZBQWlGO0FBQ2pGLHlEQUF3RDtBQUN4RDtJQUE2QywyQ0FBaUI7SUFBOUQ7O0lBNkJBLENBQUM7SUE1QkMsdUNBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQ2hCLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFDZixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQ3pCLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFDekMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDZCxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7O1lBQU0sNkJBQW1CLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMxQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2pCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsNkJBQW1CLENBQUMsQ0FBQztvQkFDNUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDL0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNqQzs7b0JBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0E3QkEsQUE2QkMsQ0E3QjRDLHFDQUFpQixHQTZCN0Q7QUE3QlksMERBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCBUaWxlMk5vZGVCb3R0b21WaWV3IGZyb20gJy4uL2dhbWVQbGF5L3RpbGUyZ2FtZS92aWV3L1RpbGUyTm9kZUJvdHRvbVZpZXcnO1xuaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmV4cG9ydCBjbGFzcyBUaWxlMkluaXRCb3R0b21CZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0ID0gdGhpcyxcbiAgICAgIG8gPSBlLmRhdGEsXG4gICAgICBuID0gby5zaHVmZmxlTnVtLFxuICAgICAgaSA9IG8uaGl0VGlwc051bSxcbiAgICAgIGwgPSBvLnJldmVydE51bSxcbiAgICAgIHMgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcsXG4gICAgICBjID0gbnVsbCA9PSBzID8gdm9pZCAwIDogcy5ub2RlQm90dG9tVmlldyxcbiAgICAgIHUgPSBmdW5jdGlvbiB1KGUpIHtcbiAgICAgICAgZS51cGRhdGVTaHVmZmxlTnVtKG4pO1xuICAgICAgICBlLnVwZGF0ZUhpdFRpcHNOdW0oaSk7XG4gICAgICAgIGUudXBkYXRlUmV2ZXJ0TnVtKGwpO1xuICAgICAgfTtcbiAgICBpZiAoYykge1xuICAgICAgdShjKTtcbiAgICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgfSBlbHNlIFRpbGUyTm9kZUJvdHRvbVZpZXcuY3JlYXRlVUkoXCJwcmVmYWJzL2dhbWUvVGlsZTJub2RlQm90dG9tXCIpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvID0gcy5nZXRCb3R0b21Ob2RlKCk7XG4gICAgICBpZiAoY2MuaXNWYWxpZChvKSkge1xuICAgICAgICBlLnBhcmVudCA9IG87XG4gICAgICAgIHZhciBuID0gZS5nZXRDb21wb25lbnQoVGlsZTJOb2RlQm90dG9tVmlldyk7XG4gICAgICAgIHMuc2V0Tm9kZUJvdHRvbVZpZXcobik7XG4gICAgICAgIHUobik7XG4gICAgICAgIG4uZGVsZWdhdGUgPSB0LmNvbnRleHQuZ2FtZUN0cjtcbiAgICAgICAgdC5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgIH0gZWxzZSB0LmZpbmlzaChFQmVoYXZpb3JFbnVtLkZhaWwpO1xuICAgIH0pO1xuICB9XG59Il19