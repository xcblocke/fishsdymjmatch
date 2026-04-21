
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_syncShadowAnim/Scripts/SyncShadowAnimTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ecaa0Y+Pb9LS678kJhTnZEB', 'SyncShadowAnimTrait');
// subpackages/l_syncShadowAnim/Scripts/SyncShadowAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var AnimationUtil_1 = require("../../../Scripts/util/AnimationUtil");
var SyncShadowAnimTrait = /** @class */ (function (_super) {
    __extends(SyncShadowAnimTrait, _super);
    function SyncShadowAnimTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SyncShadowAnimTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        AnimationUtil_1.AnimationUtil.setSyncShadowAnimation(true);
    };
    SyncShadowAnimTrait.prototype.onEnterAniBhv_playOld = function (t, r) {
        var e, o, n = t.ins.context;
        if (n) {
            var i = new Map(), l = n.getTileNodeMap();
            try {
                for (var u = __values(l), s = u.next(); !s.done; s = u.next()) {
                    var p = __read(s.value, 2)[1];
                    cc.isValid(p.cardNode) && cc.isValid(p.shadowNode) && i.set(p.cardNode, p.shadowNode);
                }
            }
            catch (t) {
                e = {
                    error: t
                };
            }
            finally {
                try {
                    s && !s.done && (o = u.return) && o.call(u);
                }
                finally {
                    if (e)
                        throw e.error;
                }
            }
            AnimationUtil_1.AnimationUtil.setCardToShadowMap(i);
            r();
        }
        else
            r();
    };
    SyncShadowAnimTrait.traitKey = "SyncShadowAnim";
    SyncShadowAnimTrait = __decorate([
        mj.trait,
        mj.class("SyncShadowAnimTrait")
    ], SyncShadowAnimTrait);
    return SyncShadowAnimTrait;
}(Trait_1.default));
exports.default = SyncShadowAnimTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N5bmNTaGFkb3dBbmltL1NjcmlwdHMvU3luY1NoYWRvd0FuaW1UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHFFQUFvRTtBQUdwRTtJQUFpRCx1Q0FBSztJQUF0RDs7SUFpQ0EsQ0FBQztJQS9CQyxvQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4Qiw2QkFBYSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxtREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUNwQixJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLEVBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN6QixJQUFJO2dCQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQzdELElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUN2RjthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsQ0FBQyxHQUFHO29CQUNGLEtBQUssRUFBRSxDQUFDO2lCQUNULENBQUM7YUFDSDtvQkFBUztnQkFDUixJQUFJO29CQUNGLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdDO3dCQUFTO29CQUNSLElBQUksQ0FBQzt3QkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7aUJBQ3RCO2FBQ0Y7WUFDRCw2QkFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBL0JNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFEaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQWlDdkM7SUFBRCwwQkFBQztDQWpDRCxBQWlDQyxDQWpDZ0QsZUFBSyxHQWlDckQ7a0JBakNvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgQW5pbWF0aW9uVXRpbCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvdXRpbC9BbmltYXRpb25VdGlsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU3luY1NoYWRvd0FuaW1UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3luY1NoYWRvd0FuaW1UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTeW5jU2hhZG93QW5pbVwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgQW5pbWF0aW9uVXRpbC5zZXRTeW5jU2hhZG93QW5pbWF0aW9uKHRydWUpO1xuICB9XG4gIG9uRW50ZXJBbmlCaHZfcGxheU9sZCh0LCByKSB7XG4gICAgdmFyIGUsXG4gICAgICBvLFxuICAgICAgbiA9IHQuaW5zLmNvbnRleHQ7XG4gICAgaWYgKG4pIHtcbiAgICAgIHZhciBpID0gbmV3IE1hcCgpLFxuICAgICAgICBsID0gbi5nZXRUaWxlTm9kZU1hcCgpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yICh2YXIgdSA9IF9fdmFsdWVzKGwpLCBzID0gdS5uZXh0KCk7ICFzLmRvbmU7IHMgPSB1Lm5leHQoKSkge1xuICAgICAgICAgIHZhciBwID0gX19yZWFkKHMudmFsdWUsIDIpWzFdO1xuICAgICAgICAgIGNjLmlzVmFsaWQocC5jYXJkTm9kZSkgJiYgY2MuaXNWYWxpZChwLnNoYWRvd05vZGUpICYmIGkuc2V0KHAuY2FyZE5vZGUsIHAuc2hhZG93Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgZSA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzICYmICFzLmRvbmUgJiYgKG8gPSB1LnJldHVybikgJiYgby5jYWxsKHUpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBbmltYXRpb25VdGlsLnNldENhcmRUb1NoYWRvd01hcChpKTtcbiAgICAgIHIoKTtcbiAgICB9IGVsc2UgcigpO1xuICB9XG59Il19