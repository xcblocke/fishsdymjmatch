
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2InitTopBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97850PU+z9EErDiVT2WkL6j', 'Tile2InitTopBehavior');
// Scripts/base/Tile2InitTopBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2InitTopBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2NodeTopView_1 = require("../gamePlay/tile2game/view/Tile2NodeTopView");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2InitTopBehavior = /** @class */ (function (_super) {
    __extends(Tile2InitTopBehavior, _super);
    function Tile2InitTopBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2InitTopBehavior.prototype.start = function (e) {
        var t = this, o = e.data, n = o.level, i = o.matchNum, l = o.score, s = o.isCombo, c = this.context.gameView, u = null == c ? void 0 : c.nodeTopView;
        if (u) {
            u.updateLevel(n);
            u.updateMatchNum(i);
            u.updateScore(0, l, s);
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            Tile2NodeTopView_1.default.createUI("prefabs/game/Tile2nodeTop").then(function (e) {
                var o = c.getTopNode();
                if (cc.isValid(o)) {
                    e.parent = o;
                    var u = e.getComponent(Tile2NodeTopView_1.default);
                    c.setNodeTopView(u);
                    u.updateLevel(n);
                    u.updateMatchNum(i);
                    u.updateScore(0, l, s);
                    t.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    u.delegate = t.context.gameCtr;
                }
                else
                    t.finish(GameInputEnum_1.EBehaviorEnum.Fail);
            });
    };
    return Tile2InitTopBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2InitTopBehavior = Tile2InitTopBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJJbml0VG9wQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBb0U7QUFDcEUsZ0ZBQTJFO0FBQzNFLHlEQUF3RDtBQUN4RDtJQUEwQyx3Q0FBaUI7SUFBM0Q7O0lBNkJBLENBQUM7SUE1QkMsb0NBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQ2IsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUN6QixDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDekMsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQzs7WUFBTSwwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUM1RSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDakIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQywwQkFBZ0IsQ0FBQyxDQUFDO29CQUN6QyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztpQkFDaEM7O29CQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCwyQkFBQztBQUFELENBN0JBLEFBNkJDLENBN0J5QyxxQ0FBaUIsR0E2QjFEO0FBN0JZLG9EQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgVGlsZTJOb2RlVG9wVmlldyBmcm9tICcuLi9nYW1lUGxheS90aWxlMmdhbWUvdmlldy9UaWxlMk5vZGVUb3BWaWV3JztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgVGlsZTJJbml0VG9wQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBvID0gZS5kYXRhLFxuICAgICAgbiA9IG8ubGV2ZWwsXG4gICAgICBpID0gby5tYXRjaE51bSxcbiAgICAgIGwgPSBvLnNjb3JlLFxuICAgICAgcyA9IG8uaXNDb21ibyxcbiAgICAgIGMgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcsXG4gICAgICB1ID0gbnVsbCA9PSBjID8gdm9pZCAwIDogYy5ub2RlVG9wVmlldztcbiAgICBpZiAodSkge1xuICAgICAgdS51cGRhdGVMZXZlbChuKTtcbiAgICAgIHUudXBkYXRlTWF0Y2hOdW0oaSk7XG4gICAgICB1LnVwZGF0ZVNjb3JlKDAsIGwsIHMpO1xuICAgICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB9IGVsc2UgVGlsZTJOb2RlVG9wVmlldy5jcmVhdGVVSShcInByZWZhYnMvZ2FtZS9UaWxlMm5vZGVUb3BcIikudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG8gPSBjLmdldFRvcE5vZGUoKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgIGUucGFyZW50ID0gbztcbiAgICAgICAgdmFyIHUgPSBlLmdldENvbXBvbmVudChUaWxlMk5vZGVUb3BWaWV3KTtcbiAgICAgICAgYy5zZXROb2RlVG9wVmlldyh1KTtcbiAgICAgICAgdS51cGRhdGVMZXZlbChuKTtcbiAgICAgICAgdS51cGRhdGVNYXRjaE51bShpKTtcbiAgICAgICAgdS51cGRhdGVTY29yZSgwLCBsLCBzKTtcbiAgICAgICAgdC5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICAgICAgdS5kZWxlZ2F0ZSA9IHQuY29udGV4dC5nYW1lQ3RyO1xuICAgICAgfSBlbHNlIHQuZmluaXNoKEVCZWhhdmlvckVudW0uRmFpbCk7XG4gICAgfSk7XG4gIH1cbn0iXX0=