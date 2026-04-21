
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2NormalBackBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0acc1E1jW1AKLwaO8nmC2Ri', 'Tile2NormalBackBehavior');
// Scripts/base/Tile2NormalBackBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NormalBackBehavior = void 0;
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var Tile2NormalBackBehavior = /** @class */ (function (_super) {
    __extends(Tile2NormalBackBehavior, _super);
    function Tile2NormalBackBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2NormalBackBehavior.prototype.start = function (e) {
        var t, o, n = this.context.getTileNodeMap();
        if (e.data.normalBackList && 0 != e.data.normalBackList.length) {
            try {
                for (var i = __values(e.data.normalBackList), a = i.next(); !a.done; a = i.next()) {
                    var s = a.value, c = n.get(s.tileId);
                    c && c.tile2RollCard();
                }
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    a && !a.done && (o = i.return) && o.call(i);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    return Tile2NormalBackBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2NormalBackBehavior = Tile2NormalBackBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJOb3JtYWxCYWNrQmVoYXZpb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBd0Q7QUFDeEQscUVBQW9FO0FBQ3BFO0lBQTZDLDJDQUFpQjtJQUE5RDs7SUEwQkEsQ0FBQztJQXpCQyx1Q0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsSUFBSTtnQkFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ2pGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QixDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO2lCQUN4QjthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsQ0FBQyxHQUFHO29CQUNGLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUM7YUFDSDtvQkFBUztnQkFDUixJQUFJO29CQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdDO3dCQUFTO29CQUNSLElBQUksQ0FBQzt3QkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3RCO2FBQ0Y7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDcEM7O1lBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyw2QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDSCw4QkFBQztBQUFELENBMUJBLEFBMEJDLENBMUI0QyxxQ0FBaUIsR0EwQjdEO0FBMUJZLDBEQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5pbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuZXhwb3J0IGNsYXNzIFRpbGUyTm9ybWFsQmFja0JlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvLFxuICAgICAgbiA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpO1xuICAgIGlmIChlLmRhdGEubm9ybWFsQmFja0xpc3QgJiYgMCAhPSBlLmRhdGEubm9ybWFsQmFja0xpc3QubGVuZ3RoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBpID0gX192YWx1ZXMoZS5kYXRhLm5vcm1hbEJhY2tMaXN0KSwgYSA9IGkubmV4dCgpOyAhYS5kb25lOyBhID0gaS5uZXh0KCkpIHtcbiAgICAgICAgICB2YXIgcyA9IGEudmFsdWUsXG4gICAgICAgICAgICBjID0gbi5nZXQocy50aWxlSWQpO1xuICAgICAgICAgIGMgJiYgYy50aWxlMlJvbGxDYXJkKCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdCA9IHtcbiAgICAgICAgICBlcnJvcjogZVxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhICYmICFhLmRvbmUgJiYgKG8gPSBpLnJldHVybikgJiYgby5jYWxsKGkpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgIH0gZWxzZSB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG59Il19