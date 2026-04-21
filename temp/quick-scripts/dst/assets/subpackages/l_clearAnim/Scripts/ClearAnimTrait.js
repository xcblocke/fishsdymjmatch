
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_clearAnim/Scripts/ClearAnimTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '822e2IswX5J6KKtHfO571+u', 'ClearAnimTrait');
// subpackages/l_clearAnim/Scripts/ClearAnimTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ClearAnimTrait = /** @class */ (function (_super) {
    __extends(ClearAnimTrait, _super);
    function ClearAnimTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClearAnimTrait_1 = ClearAnimTrait;
    ClearAnimTrait.prototype.onClearBhv_playMove = function (t, r) {
        try {
            var n = __read(t.args, 6), i = n[0], o = n[1], c = n[2], u = n[3], f = n[4], s = n[5], p = Math.abs(u[0].x - u[1].x), y = c, _ = cc.easing.cubicIn;
            if (p < 2 * i.width) {
                y = c + 0.05;
                _ = cc.easing.expoIn;
            }
            if (i && cc.isValid(i) && u && u.length > 0)
                cc.tween(i).to(o, {
                    position: u[0]
                }, {
                    easing: cc.easing.circOut
                }).to(y, {
                    position: u[1]
                }, {
                    easing: _
                }).call(function () {
                    null == f || f();
                    null == s || s();
                }).start();
            else {
                null == f || f();
                null == s || s();
            }
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        catch (t) {
            console.error("[" + ClearAnimTrait_1.traitKey + "] 消除动画异常: " + t.message);
            r();
        }
    };
    var ClearAnimTrait_1;
    ClearAnimTrait.traitKey = "ClearAnim";
    ClearAnimTrait = ClearAnimTrait_1 = __decorate([
        mj.trait,
        mj.class("ClearAnimTrait")
    ], ClearAnimTrait);
    return ClearAnimTrait;
}(Trait_1.default));
exports.default = ClearAnimTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsZWFyQW5pbS9TY3JpcHRzL0NsZWFyQW5pbVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQTRDLGtDQUFLO0lBQWpEOztJQTBDQSxDQUFDO3VCQTFDb0IsY0FBYztJQUVqQyw0Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDN0IsQ0FBQyxHQUFHLENBQUMsRUFDTCxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ25CLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNiLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUN0QjtZQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7b0JBQzdELFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNmLEVBQUU7b0JBQ0QsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTztpQkFDMUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7b0JBQ1AsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2YsRUFBRTtvQkFDRCxNQUFNLEVBQUUsQ0FBQztpQkFDVixDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNOLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUFLO2dCQUNkLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDbEI7WUFDRCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLGdCQUFjLENBQUMsUUFBUSxHQUFHLFlBQVksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7O0lBeENNLHVCQUFRLEdBQUcsV0FBVyxDQUFDO0lBRFgsY0FBYztRQUZsQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7T0FDTixjQUFjLENBMENsQztJQUFELHFCQUFDO0NBMUNELEFBMENDLENBMUMyQyxlQUFLLEdBMENoRDtrQkExQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDbGVhckFuaW1UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXJBbmltVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2xlYXJBbmltXCI7XG4gIG9uQ2xlYXJCaHZfcGxheU1vdmUodCwgcikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbiA9IF9fcmVhZCh0LmFyZ3MsIDYpLFxuICAgICAgICBpID0gblswXSxcbiAgICAgICAgbyA9IG5bMV0sXG4gICAgICAgIGMgPSBuWzJdLFxuICAgICAgICB1ID0gblszXSxcbiAgICAgICAgZiA9IG5bNF0sXG4gICAgICAgIHMgPSBuWzVdLFxuICAgICAgICBwID0gTWF0aC5hYnModVswXS54IC0gdVsxXS54KSxcbiAgICAgICAgeSA9IGMsXG4gICAgICAgIF8gPSBjYy5lYXNpbmcuY3ViaWNJbjtcbiAgICAgIGlmIChwIDwgMiAqIGkud2lkdGgpIHtcbiAgICAgICAgeSA9IGMgKyAwLjA1O1xuICAgICAgICBfID0gY2MuZWFzaW5nLmV4cG9JbjtcbiAgICAgIH1cbiAgICAgIGlmIChpICYmIGNjLmlzVmFsaWQoaSkgJiYgdSAmJiB1Lmxlbmd0aCA+IDApIGNjLnR3ZWVuKGkpLnRvKG8sIHtcbiAgICAgICAgcG9zaXRpb246IHVbMF1cbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuY2lyY091dFxuICAgICAgfSkudG8oeSwge1xuICAgICAgICBwb3NpdGlvbjogdVsxXVxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IF9cbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBudWxsID09IGYgfHwgZigpO1xuICAgICAgICBudWxsID09IHMgfHwgcygpO1xuICAgICAgfSkuc3RhcnQoKTtlbHNlIHtcbiAgICAgICAgbnVsbCA9PSBmIHx8IGYoKTtcbiAgICAgICAgbnVsbCA9PSBzIHx8IHMoKTtcbiAgICAgIH1cbiAgICAgIHIoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBDbGVhckFuaW1UcmFpdC50cmFpdEtleSArIFwiXSDmtojpmaTliqjnlLvlvILluLg6IFwiICsgdC5tZXNzYWdlKTtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbn0iXX0=