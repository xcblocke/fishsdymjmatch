
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_hallBtnsAniTimeSyn/Scripts/HallBtnsAniTimeSynTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0650kmTxVNQo8ooQpxHxgn', 'HallBtnsAniTimeSynTrait');
// subpackages/r_hallBtnsAniTimeSyn/Scripts/HallBtnsAniTimeSynTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var HallBtnsAniTimeSynTrait = /** @class */ (function (_super) {
    __extends(HallBtnsAniTimeSynTrait, _super);
    function HallBtnsAniTimeSynTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HallBtnsAniTimeSynTrait_1 = HallBtnsAniTimeSynTrait;
    HallBtnsAniTimeSynTrait.prototype.onHallCtl_initRes = function (t, n) {
        t.ins.addPreloadRes("SkeletonData", [HallBtnsAniTimeSynTrait_1.BUNDLE_NAME + ":" + HallBtnsAniTimeSynTrait_1.TRAVEL_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME + ":" + HallBtnsAniTimeSynTrait_1.RANK_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME + ":" + HallBtnsAniTimeSynTrait_1.TASK_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME + ":" + HallBtnsAniTimeSynTrait_1.CHALLENGE_SPINE_PATH]);
        n();
    };
    HallBtnsAniTimeSynTrait.prototype.onRankBtn_initComp = function (t, n) {
        var i = t.ins, r = cc.find("bg/down", i.node), o = cc.find("bg/up", i.node), a = BaseSpine_1.default.refreshWithNode(r, HallBtnsAniTimeSynTrait_1.RANK_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME);
        a.setAnimation("init_down", -1, null, false);
        a.attachNode("photo", function () {
            return i._cardSprNode;
        });
        BaseSpine_1.default.refreshWithNode(o, HallBtnsAniTimeSynTrait_1.RANK_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME).setAnimation("init_up", -1, null, false);
        n({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    HallBtnsAniTimeSynTrait.prototype.onTravelBtn_onLoad = function (t, n) {
        var i = t.ins, r = cc.find("Root/BgWood", i.node);
        BaseSpine_1.default.refreshWithNode(r, HallBtnsAniTimeSynTrait_1.TRAVEL_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME).setAnimation("init", -1, null, false);
        n();
    };
    HallBtnsAniTimeSynTrait.prototype.onTaskTt_onLoad = function (t, n) {
        var i = t.ins, r = cc.find("Bg/Icon", i.node);
        BaseSpine_1.default.refreshWithNode(r, HallBtnsAniTimeSynTrait_1.TASK_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME).setAnimation("init", -1, null, false);
        n();
    };
    HallBtnsAniTimeSynTrait.prototype.onHDailyBtn_initEff = function (t, n) {
        var i = t.ins, r = cc.find("eff_btn", i.node), o = BaseSpine_1.default.refreshWithNode(r, HallBtnsAniTimeSynTrait_1.CHALLENGE_SPINE_PATH, HallBtnsAniTimeSynTrait_1.BUNDLE_NAME);
        o.setAnimation("init", -1, null, false);
        i.animProxy = o;
        o.attachNode("hook_date", function () {
            if (!cc.isValid(i) || !cc.isValid(i.node))
                return null;
            var t = i._txtDay.node, n = i._txtDaily.node;
            o.attachNode("hook_date", function () {
                return t;
            });
            o.attachNode("hook_txtDaily", function () {
                return n;
            });
            t.setPosition(0, 0);
            n.setPosition(0, 0);
            return null;
        });
        n({
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    var HallBtnsAniTimeSynTrait_1;
    HallBtnsAniTimeSynTrait.traitKey = "HallBtnsAniTimeSyn";
    HallBtnsAniTimeSynTrait.BUNDLE_NAME = "r_hallBtnsAniTimeSyn";
    HallBtnsAniTimeSynTrait.TRAVEL_SPINE_PATH = "spine/main_icon_tile";
    HallBtnsAniTimeSynTrait.RANK_SPINE_PATH = "spine/main_icon_gardeningMaster";
    HallBtnsAniTimeSynTrait.TASK_SPINE_PATH = "spine/main_icon_dailyTask";
    HallBtnsAniTimeSynTrait.CHALLENGE_SPINE_PATH = "spine/main_dailyChallenge_btn";
    HallBtnsAniTimeSynTrait = HallBtnsAniTimeSynTrait_1 = __decorate([
        mj.trait,
        mj.class("HallBtnsAniTimeSynTrait")
    ], HallBtnsAniTimeSynTrait);
    return HallBtnsAniTimeSynTrait;
}(Trait_1.default));
exports.default = HallBtnsAniTimeSynTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2hhbGxCdG5zQW5pVGltZVN5bi9TY3JpcHRzL0hhbGxCdG5zQW5pVGltZVN5blRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QseUVBQW9FO0FBR3BFO0lBQXFELDJDQUFLO0lBQTFEOztJQStEQSxDQUFDO2dDQS9Eb0IsdUJBQXVCO0lBTzFDLG1EQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyx5QkFBdUIsQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLHlCQUF1QixDQUFDLGlCQUFpQixFQUFFLHlCQUF1QixDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcseUJBQXVCLENBQUMsZUFBZSxFQUFFLHlCQUF1QixDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcseUJBQXVCLENBQUMsZUFBZSxFQUFFLHlCQUF1QixDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcseUJBQXVCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ2pZLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELG9EQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNYLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQzlCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQzVCLENBQUMsR0FBRyxtQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUseUJBQXVCLENBQUMsZUFBZSxFQUFFLHlCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pILENBQUMsQ0FBQyxZQUFZLENBQUMsV0FB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QUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUNILENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7SUE3RE0sZ0NBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQUNoQyxtQ0FBVyxHQUFHLHNCQUFzQixDQUFDO0lBQ3JDLHlDQUFpQixHQUFHLHNCQUFzQixDQUFDO0lBQzNDLHVDQUFlLEdBQUcsaUNBQWlDLENBQUM7SUFDcEQsdUNBQWUsR0FBRywyQkFBMkIsQ0FBQztJQUM5Qyw0Q0FBb0IsR0FBRywrQkFBK0IsQ0FBQztJQU4zQyx1QkFBdUI7UUFGM0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO09BQ2YsdUJBQXVCLENBK0QzQztJQUFELDhCQUFDO0NBL0RELEFBK0RDLENBL0RvRCxlQUFLLEdBK0R6RDtrQkEvRG9CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJIYWxsQnRuc0FuaVRpbWVTeW5UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFsbEJ0bnNBbmlUaW1lU3luVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSGFsbEJ0bnNBbmlUaW1lU3luXCI7XG4gIHN0YXRpYyBCVU5ETEVfTkFNRSA9IFwicl9oYWxsQnRuc0FuaVRpbWVTeW5cIjtcbiAgc3RhdGljIFRSQVZFTF9TUElORV9QQVRIID0gXCJzcGluZS9tYWluX2ljb25fdGlsZVwiO1xuICBzdGF0aWMgUkFOS19TUElORV9QQVRIID0gXCJzcGluZS9tYWluX2ljb25fZ2FyZGVuaW5nTWFzdGVyXCI7XG4gIHN0YXRpYyBUQVNLX1NQSU5FX1BBVEggPSBcInNwaW5lL21haW5faWNvbl9kYWlseVRhc2tcIjtcbiAgc3RhdGljIENIQUxMRU5HRV9TUElORV9QQVRIID0gXCJzcGluZS9tYWluX2RhaWx5Q2hhbGxlbmdlX2J0blwiO1xuICBvbkhhbGxDdGxfaW5pdFJlcyh0LCBuKSB7XG4gICAgdC5pbnMuYWRkUHJlbG9hZFJlcyhcIlNrZWxldG9uRGF0YVwiLCBbSGFsbEJ0bnNBbmlUaW1lU3luVHJhaXQuQlVORExFX05BTUUgKyBcIjpcIiArIEhhbGxCdG5zQW5pVGltZVN5blRyYWl0LlRSQVZFTF9TUElORV9QQVRILCBIYWxsQnRuc0FuaVRpbWVTeW5UcmFpdC5CVU5ETEVfTkFNRSArIFwiOlwiICsgSGFsbEJ0bnNBbmlUaW1lU3luVHJhaXQuUkFOS19TUElORV9QQVRILCBIYWxsQnRuc0FuaVRpbWVTeW5UcmFpdC5CVU5ETEVfTkFNRSArIFwiOlwiICsgSGFsbEJ0bnNBbmlUaW1lU3luVHJhaXQuVEFTS19TUElORV9QQVRILCBIYWxsQnRuc0FuaVRpbWVTeW5UcmFpdC5CVU5ETEVfTkFNRSArIFwiOlwiICsgSGFsbEJ0bnNBbmlUaW1lU3luVHJhaXQuQ0hBTExFTkdFX1NQSU5FX1BBVEhdKTtcbiAgICBuKCk7XG4gIH1cbiAgb25SYW5rQnRuX2luaXRDb21wKHQsIG4pIHtcbiAgICB2YXIgaSA9IHQuaW5zLFxuICAgICAgciA9IGNjLmZpbmQoXCJiZy9kb3duXCIsIGkubm9kZSksXG4gICAgICBvID0gY2MuZmluZChcImJnL3VwXCIsIGkubm9kZSksXG4gICAgICBhID0gQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZShyLCBIYWxsQnRuc0FuaVRpbWVTeW5UcmFpdC5SQU5LX1NQSU5FX1BBVEgsIEhhbGxCdG5zQW5pVGltZVN5blRyYWl0LkJVTkRMRV9OQU1FKTtcbiAgICBhLnNldEFuaW1hdGlvbihcImluaXRfZG93blwiLCAtMSwgbnVsbCwgZmFsc2UpO1xuICAgIGEuYXR0YWNoTm9kZShcInBob3RvXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpLl9jYXJkU3ByTm9kZTtcbiAgICB9KTtcbiAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKG8sIEhhbGxCdG5zQW5pVGltZVN5blRyYWl0LlJBTktfU1BJTkVfUEFUSCwgSGFsbEJ0bnNBbmlUaW1lU3luVHJhaXQuQlVORExFX05BTUUpLnNldEFuaW1hdGlvbihcImluaXRfdXBcIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgICBuKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICB9KTtcbiAgfVxuICBvblRyYXZlbEJ0bl9vbkxvYWQodCwgbikge1xuICAgIHZhciBpID0gdC5pbnMsXG4gICAgICByID0gY2MuZmluZChcIlJvb3QvQmdXb29kXCIsIGkubm9kZSk7XG4gICAgQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZShyLCBIYWxsQnRuc0FuaVRpbWVTeW5UcmFpdC5UUkFWRUxfU1BJTkVfUEFUSCwgSGFsbEJ0bnNBbmlUaW1lU3luVHJhaXQuQlVORExFX05BTUUpLnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgICBuKCk7XG4gIH1cbiAgb25UYXNrVHRfb25Mb2FkKHQsIG4pIHtcbiAgICB2YXIgaSA9IHQuaW5zLFxuICAgICAgciA9IGNjLmZpbmQoXCJCZy9JY29uXCIsIGkubm9kZSk7XG4gICAgQmFzZVNwaW5lLnJlZnJlc2hXaXRoTm9kZShyLCBIYWxsQnRuc0FuaVRpbWVTeW5UcmFpdC5UQVNLX1NQSU5FX1BBVEgsIEhhbGxCdG5zQW5pVGltZVN5blRyYWl0LkJVTkRMRV9OQU1FKS5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xLCBudWxsLCBmYWxzZSk7XG4gICAgbigpO1xuICB9XG4gIG9uSERhaWx5QnRuX2luaXRFZmYodCwgbikge1xuICAgIHZhciBpID0gdC5pbnMsXG4gICAgICByID0gY2MuZmluZChcImVmZl9idG5cIiwgaS5ub2RlKSxcbiAgICAgIG8gPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHIsIEhhbGxCdG5zQW5pVGltZVN5blRyYWl0LkNIQUxMRU5HRV9TUElORV9QQVRILCBIYWxsQnRuc0FuaVRpbWVTeW5UcmFpdC5CVU5ETEVfTkFNRSk7XG4gICAgby5zZXRBbmltYXRpb24oXCJpbml0XCIsIC0xLCBudWxsLCBmYWxzZSk7XG4gICAgaS5hbmltUHJveHkgPSBvO1xuICAgIG8uYXR0YWNoTm9kZShcImhvb2tfZGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIWNjLmlzVmFsaWQoaSkgfHwgIWNjLmlzVmFsaWQoaS5ub2RlKSkgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgdCA9IGkuX3R4dERheS5ub2RlLFxuICAgICAgICBuID0gaS5fdHh0RGFpbHkubm9kZTtcbiAgICAgIG8uYXR0YWNoTm9kZShcImhvb2tfZGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0O1xuICAgICAgfSk7XG4gICAgICBvLmF0dGFjaE5vZGUoXCJob29rX3R4dERhaWx5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgICB9KTtcbiAgICAgIHQuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICBuLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4gICAgbih7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgfSk7XG4gIH1cbn0iXX0=