
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_daily/Scripts/DailyRewardNotScrollTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14a1eHPjCBHCIiPgMJu/9tv', 'DailyRewardNotScrollTrait');
// subpackages/l_daily/Scripts/DailyRewardNotScrollTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DailyRewardNotScrollTrait = /** @class */ (function (_super) {
    __extends(DailyRewardNotScrollTrait, _super);
    function DailyRewardNotScrollTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyRewardNotScrollTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    DailyRewardNotScrollTrait.prototype.onDailyRwdLVw_regScrollEvts = function (t, e) {
        this.setScrollEnabled(t.ins, false);
        e({
            returnType: TraitManager_1.TraitCallbackReturnType.jump
        });
    };
    DailyRewardNotScrollTrait.prototype.setScrollEnabled = function (t, e) {
        var i, o = (null == t ? void 0 : t._scrollView) || (null === (i = null == t ? void 0 : t.node) || void 0 === i ? void 0 : i.getComponent(cc.ScrollView)) || null;
        if (o) {
            o.enabled = e;
            e || o.stopAutoScroll();
        }
        var n = (null == t ? void 0 : t.dailyScrollView) || null;
        if (n) {
            n.enabled = false;
            n.stopAutoScroll();
        }
    };
    DailyRewardNotScrollTrait.traitKey = "DailyRewardNotScroll";
    DailyRewardNotScrollTrait = __decorate([
        mj.trait,
        mj.class("DailyRewardNotScrollTrait")
    ], DailyRewardNotScrollTrait);
    return DailyRewardNotScrollTrait;
}(Trait_1.default));
exports.default = DailyRewardNotScrollTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RhaWx5L1NjcmlwdHMvRGFpbHlSZXdhcmROb3RTY3JvbGxUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUF1RCw2Q0FBSztJQUE1RDs7SUF3QkEsQ0FBQztJQXRCQywwQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsK0RBQTJCLEdBQTNCLFVBQTRCLENBQUMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQztZQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxJQUFJO1NBQ3pDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxvREFBZ0IsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO1FBQzVKLElBQUksQ0FBQyxFQUFFO1lBQ0wsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUN6RCxJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7SUF0Qk0sa0NBQVEsR0FBRyxzQkFBc0IsQ0FBQztJQUR0Qix5QkFBeUI7UUFGN0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO09BQ2pCLHlCQUF5QixDQXdCN0M7SUFBRCxnQ0FBQztDQXhCRCxBQXdCQyxDQXhCc0QsZUFBSyxHQXdCM0Q7a0JBeEJvQix5QkFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJEYWlseVJld2FyZE5vdFNjcm9sbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYWlseVJld2FyZE5vdFNjcm9sbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRhaWx5UmV3YXJkTm90U2Nyb2xsXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkRhaWx5UndkTFZ3X3JlZ1Njcm9sbEV2dHModCwgZSkge1xuICAgIHRoaXMuc2V0U2Nyb2xsRW5hYmxlZCh0LmlucywgZmFsc2UpO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgIH0pO1xuICB9XG4gIHNldFNjcm9sbEVuYWJsZWQodCwgZSkge1xuICAgIHZhciBpLFxuICAgICAgbyA9IChudWxsID09IHQgPyB2b2lkIDAgOiB0Ll9zY3JvbGxWaWV3KSB8fCAobnVsbCA9PT0gKGkgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0Lm5vZGUpIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpKSB8fCBudWxsO1xuICAgIGlmIChvKSB7XG4gICAgICBvLmVuYWJsZWQgPSBlO1xuICAgICAgZSB8fCBvLnN0b3BBdXRvU2Nyb2xsKCk7XG4gICAgfVxuICAgIHZhciBuID0gKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQuZGFpbHlTY3JvbGxWaWV3KSB8fCBudWxsO1xuICAgIGlmIChuKSB7XG4gICAgICBuLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIG4uc3RvcEF1dG9TY3JvbGwoKTtcbiAgICB9XG4gIH1cbn0iXX0=