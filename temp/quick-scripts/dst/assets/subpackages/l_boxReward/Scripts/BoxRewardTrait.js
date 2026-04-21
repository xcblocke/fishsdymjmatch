
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_boxReward/Scripts/BoxRewardTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f874FSgNpGr4UAGRPvna99', 'BoxRewardTrait');
// subpackages/l_boxReward/Scripts/BoxRewardTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BoxRewardUI_1 = require("./BoxRewardUI");
var BoxRewardTrait = /** @class */ (function (_super) {
    __extends(BoxRewardTrait, _super);
    function BoxRewardTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.requireRes = ["prefabs/boxReward/RewardUI", "prefabs/boxReward/OpenAnim", "prefabs/boxReward/BoxBarItem"];
        return _this;
    }
    BoxRewardTrait_1 = BoxRewardTrait;
    BoxRewardTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BoxRewardTrait.prototype.onWinCtrl_initRes = function (t, e) {
        var i = t.ins;
        null == i || i.addPreloadRes("Prefab", this.requireRes);
        e();
    };
    BoxRewardTrait.prototype.onWinCtrl_viewShow = function (t, e) {
        var o, n = t.ins, a = null == n ? void 0 : n.rootView;
        try {
            if (cc.isValid(a)) {
                var r = ((null === (o = n.args) || void 0 === o ? void 0 : o.data) || {}).curLv, c = void 0 === r ? 1 : r, l = n._viewComponent;
                if (cc.isValid(l)) {
                    var d = l.getContentNode();
                    if (cc.isValid(d)) {
                        var p = d.getChildByName("RewardUI");
                        if (!cc.isValid(p)) {
                            p = l.createUISync(BoxRewardUI_1.default);
                            if (cc.isValid(p)) {
                                d.addChild(p);
                                var u = p.getComponent(BoxRewardUI_1.default);
                                cc.isValid(u) && u.showBoxRewardUI(c, this._traitData.config);
                            }
                        }
                    }
                }
            }
        }
        catch (t) {
            console.error("[" + BoxRewardTrait_1.traitKey + "] 显示宝箱奖励UI失败: " + (null == t ? void 0 : t.message));
        }
        e();
    };
    var BoxRewardTrait_1;
    BoxRewardTrait.traitKey = "BoxReward";
    BoxRewardTrait = BoxRewardTrait_1 = __decorate([
        mj.trait,
        mj.class("BoxRewardTrait")
    ], BoxRewardTrait);
    return BoxRewardTrait;
}(Trait_1.default));
exports.default = BoxRewardTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JveFJld2FyZC9TY3JpcHRzL0JveFJld2FyZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsNkNBQXdDO0FBR3hDO0lBQTRDLGtDQUFLO0lBQWpEO1FBQUEscUVBd0NDO1FBdkNDLGdCQUFVLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSw0QkFBNEIsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDOztJQXVDNUcsQ0FBQzt1QkF4Q29CLGNBQWM7SUFHakMsK0JBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDBDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsMkNBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNULENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN0QyxJQUFJO1lBQ0YsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUM3RSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUM7Z0JBQ3ZCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUMzQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3JDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxxQkFBVyxDQUFDLENBQUM7NEJBQ2hDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQ0FDakIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDZCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFXLENBQUMsQ0FBQztnQ0FDcEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZCQUMvRDt5QkFDRjtxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLGdCQUFjLENBQUMsUUFBUSxHQUFHLGdCQUFnQixHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3BHO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDOztJQXJDTSx1QkFBUSxHQUFHLFdBQVcsQ0FBQztJQUZYLGNBQWM7UUFGbEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQXdDbEM7SUFBRCxxQkFBQztDQXhDRCxBQXdDQyxDQXhDMkMsZUFBSyxHQXdDaEQ7a0JBeENvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBCb3hSZXdhcmRVSSBmcm9tICcuL0JveFJld2FyZFVJJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQm94UmV3YXJkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJveFJld2FyZFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICByZXF1aXJlUmVzID0gW1wicHJlZmFicy9ib3hSZXdhcmQvUmV3YXJkVUlcIiwgXCJwcmVmYWJzL2JveFJld2FyZC9PcGVuQW5pbVwiLCBcInByZWZhYnMvYm94UmV3YXJkL0JveEJhckl0ZW1cIl07XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQm94UmV3YXJkXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbldpbkN0cmxfaW5pdFJlcyh0LCBlKSB7XG4gICAgdmFyIGkgPSB0LmlucztcbiAgICBudWxsID09IGkgfHwgaS5hZGRQcmVsb2FkUmVzKFwiUHJlZmFiXCIsIHRoaXMucmVxdWlyZVJlcyk7XG4gICAgZSgpO1xuICB9XG4gIG9uV2luQ3RybF92aWV3U2hvdyh0LCBlKSB7XG4gICAgdmFyIG8sXG4gICAgICBuID0gdC5pbnMsXG4gICAgICBhID0gbnVsbCA9PSBuID8gdm9pZCAwIDogbi5yb290VmlldztcbiAgICB0cnkge1xuICAgICAgaWYgKGNjLmlzVmFsaWQoYSkpIHtcbiAgICAgICAgdmFyIHIgPSAoKG51bGwgPT09IChvID0gbi5hcmdzKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmRhdGEpIHx8IHt9KS5jdXJMdixcbiAgICAgICAgICBjID0gdm9pZCAwID09PSByID8gMSA6IHIsXG4gICAgICAgICAgbCA9IG4uX3ZpZXdDb21wb25lbnQ7XG4gICAgICAgIGlmIChjYy5pc1ZhbGlkKGwpKSB7XG4gICAgICAgICAgdmFyIGQgPSBsLmdldENvbnRlbnROb2RlKCk7XG4gICAgICAgICAgaWYgKGNjLmlzVmFsaWQoZCkpIHtcbiAgICAgICAgICAgIHZhciBwID0gZC5nZXRDaGlsZEJ5TmFtZShcIlJld2FyZFVJXCIpO1xuICAgICAgICAgICAgaWYgKCFjYy5pc1ZhbGlkKHApKSB7XG4gICAgICAgICAgICAgIHAgPSBsLmNyZWF0ZVVJU3luYyhCb3hSZXdhcmRVSSk7XG4gICAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHApKSB7XG4gICAgICAgICAgICAgICAgZC5hZGRDaGlsZChwKTtcbiAgICAgICAgICAgICAgICB2YXIgdSA9IHAuZ2V0Q29tcG9uZW50KEJveFJld2FyZFVJKTtcbiAgICAgICAgICAgICAgICBjYy5pc1ZhbGlkKHUpICYmIHUuc2hvd0JveFJld2FyZFVJKGMsIHRoaXMuX3RyYWl0RGF0YS5jb25maWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIEJveFJld2FyZFRyYWl0LnRyYWl0S2V5ICsgXCJdIOaYvuekuuWuneeuseWlluWKsVVJ5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZSgpO1xuICB9XG59Il19