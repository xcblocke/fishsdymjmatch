
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_rankMotivation/Scripts/RankMotivationTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac28bi658NE+qvczrN7CeXi', 'RankMotivationTrait');
// subpackages/r_rankMotivation/Scripts/RankMotivationTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankMotivationUI_1 = require("./RankMotivationUI");
var RankMotivationTrait = /** @class */ (function (_super) {
    __extends(RankMotivationTrait, _super);
    function RankMotivationTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankMotivationTrait_1 = RankMotivationTrait;
    Object.defineProperty(RankMotivationTrait.prototype, "increaseRankCount", {
        get: function () {
            return null != this._traitData.increaseRankCount ? this._traitData.increaseRankCount : 1;
        },
        enumerable: false,
        configurable: true
    });
    RankMotivationTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        e();
        t.ins.addPreloadRes("Prefab", [RankMotivationTrait_1.BUNDLE_NAME + ":prefabs/rankMotivation"]);
    };
    RankMotivationTrait.prototype.onRankBonusVw_show = function (t, e) {
        var n;
        e();
        var r = mj.getClassByName("RankModel");
        if (r && r.getInstance()) {
            var i = r.getInstance().getRankGameData(), a = r.getInstance().getSelfRank();
            if (i) {
                for (var s = a, l = 0; l < (null === (n = i.rankList) || void 0 === n ? void 0 : n.length); l++) {
                    var f = i.rankList[l];
                    if (i.joinActInfo.score >= f.score) {
                        s = l + 1;
                        break;
                    }
                }
                var p = a - s;
                if (!(p < this.increaseRankCount)) {
                    var u = t.ins._timeLabelNode;
                    u.getComponent(cc.Label).fontSize = 30;
                    u.color = new cc.Color().fromHEX("#89512a");
                    var d = t.ins.node, _ = t.ins._titleNode, v = t.ins._timeNode;
                    _.getSiblingIndex();
                    RankMotivationUI_1.default.createUI().then(function (t) {
                        if (cc.isValid(t) && cc.isValid(d) && cc.isValid(_) && cc.isValid(v)) {
                            t.setSiblingIndex(-1);
                            d.addChild(t);
                            t.getComponent(RankMotivationUI_1.default).updateUI(_, v, p);
                        }
                    }).catch(function (t) {
                        console.error("[" + RankMotivationTrait_1.traitKey + "] 游戏内创建RankMotivationUI失败:" + ((null == t ? void 0 : t.message) || "RankMotivationUI创建失败"));
                    });
                }
            }
        }
    };
    RankMotivationTrait.prototype.onRkBnsWinRate_show = function (t, e) {
        for (var o = t.ins._barLabelNodes, n = 0; n < o.length; n++) {
            var r = o[n];
            r[0].getComponent(cc.Label).fontSize = 52;
            r[1].getComponent(cc.Label).fontSize = 52;
        }
        e();
    };
    var RankMotivationTrait_1;
    RankMotivationTrait.traitKey = "RankMotivation";
    RankMotivationTrait.BUNDLE_NAME = "r_rankMotivation";
    RankMotivationTrait = RankMotivationTrait_1 = __decorate([
        mj.trait,
        mj.class("RankMotivationTrait")
    ], RankMotivationTrait);
    return RankMotivationTrait;
}(Trait_1.default));
exports.default = RankMotivationTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3JhbmtNb3RpdmF0aW9uL1NjcmlwdHMvUmFua01vdGl2YXRpb25UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHVEQUFrRDtBQUdsRDtJQUFpRCx1Q0FBSztJQUF0RDs7SUF1REEsQ0FBQzs0QkF2RG9CLG1CQUFtQjtJQUd0QyxzQkFBSSxrREFBaUI7YUFBckI7WUFDRSxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0YsQ0FBQzs7O09BQUE7SUFDRCxvREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFFLENBQUM7UUFDSixDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxxQkFBbUIsQ0FBQyxXQUFXLEdBQUcseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFDRCxnREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLENBQUM7UUFDTixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFDdkMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsRUFBRTtnQkFDTCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFF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WUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQzNDO1FBQ0QsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDOztJQXJETSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBQzVCLCtCQUFXLEdBQUcsa0JBQWtCLENBQUM7SUFGckIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQXVEdkM7SUFBRCwwQkFBQztDQXZERCxBQXVEQyxDQXZEZ0QsZUFBSyxHQXVEckQ7a0JBdkRvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFJhbmtNb3RpdmF0aW9uVUkgZnJvbSAnLi9SYW5rTW90aXZhdGlvblVJJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmFua01vdGl2YXRpb25UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFua01vdGl2YXRpb25UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSYW5rTW90aXZhdGlvblwiO1xuICBzdGF0aWMgQlVORExFX05BTUUgPSBcInJfcmFua01vdGl2YXRpb25cIjtcbiAgZ2V0IGluY3JlYXNlUmFua0NvdW50KCkge1xuICAgIHJldHVybiBudWxsICE9IHRoaXMuX3RyYWl0RGF0YS5pbmNyZWFzZVJhbmtDb3VudCA/IHRoaXMuX3RyYWl0RGF0YS5pbmNyZWFzZVJhbmtDb3VudCA6IDE7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfaW5pdFJlcyh0LCBlKSB7XG4gICAgZSgpO1xuICAgIHQuaW5zLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgW1JhbmtNb3RpdmF0aW9uVHJhaXQuQlVORExFX05BTUUgKyBcIjpwcmVmYWJzL3JhbmtNb3RpdmF0aW9uXCJdKTtcbiAgfVxuICBvblJhbmtCb251c1Z3X3Nob3codCwgZSkge1xuICAgIHZhciBuO1xuICAgIGUoKTtcbiAgICB2YXIgciA9IG1qLmdldENsYXNzQnlOYW1lKFwiUmFua01vZGVsXCIpO1xuICAgIGlmIChyICYmIHIuZ2V0SW5zdGFuY2UoKSkge1xuICAgICAgdmFyIGkgPSByLmdldEluc3RhbmNlKCkuZ2V0UmFua0dhbWVEYXRhKCksXG4gICAgICAgIGEgPSByLmdldEluc3RhbmNlKCkuZ2V0U2VsZlJhbmsoKTtcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIGZvciAodmFyIHMgPSBhLCBsID0gMDsgbCA8IChudWxsID09PSAobiA9IGkucmFua0xpc3QpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4ubGVuZ3RoKTsgbCsrKSB7XG4gICAgICAgICAgdmFyIGYgPSBpLnJhbmtMaXN0W2xdO1xuICAgICAgICAgIGlmIChpLmpvaW5BY3RJbmZvLnNjb3JlID49IGYuc2NvcmUpIHtcbiAgICAgICAgICAgIHMgPSBsICsgMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcCA9IGEgLSBzO1xuICAgICAgICBpZiAoIShwIDwgdGhpcy5pbmNyZWFzZVJhbmtDb3VudCkpIHtcbiAgICAgICAgICB2YXIgdSA9IHQuaW5zLl90aW1lTGFiZWxOb2RlO1xuICAgICAgICAgIHUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDMwO1xuICAgICAgICAgIHUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiIzg5NTEyYVwiKTtcbiAgICAgICAgICB2YXIgZCA9IHQuaW5zLm5vZGUsXG4gICAgICAgICAgICBfID0gdC5pbnMuX3RpdGxlTm9kZSxcbiAgICAgICAgICAgIHYgPSB0Lmlucy5fdGltZU5vZGU7XG4gICAgICAgICAgXy5nZXRTaWJsaW5nSW5kZXgoKTtcbiAgICAgICAgICBSYW5rTW90aXZhdGlvblVJLmNyZWF0ZVVJKCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodCkgJiYgY2MuaXNWYWxpZChkKSAmJiBjYy5pc1ZhbGlkKF8pICYmIGNjLmlzVmFsaWQodikpIHtcbiAgICAgICAgICAgICAgdC5zZXRTaWJsaW5nSW5kZXgoLTEpO1xuICAgICAgICAgICAgICBkLmFkZENoaWxkKHQpO1xuICAgICAgICAgICAgICB0LmdldENvbXBvbmVudChSYW5rTW90aXZhdGlvblVJKS51cGRhdGVVSShfLCB2LCBwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIFJhbmtNb3RpdmF0aW9uVHJhaXQudHJhaXRLZXkgKyBcIl0g5ri45oiP5YaF5Yib5bu6UmFua01vdGl2YXRpb25VSeWksei0pTpcIiArICgobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSB8fCBcIlJhbmtNb3RpdmF0aW9uVUnliJvlu7rlpLHotKVcIikpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uUmtCbnNXaW5SYXRlX3Nob3codCwgZSkge1xuICAgIGZvciAodmFyIG8gPSB0Lmlucy5fYmFyTGFiZWxOb2RlcywgbiA9IDA7IG4gPCBvLmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgciA9IG9bbl07XG4gICAgICByWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSA1MjtcbiAgICAgIHJbMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDUyO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbn0iXX0=