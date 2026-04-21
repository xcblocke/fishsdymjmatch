
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_mainGameMatchNum/Scripts/MainGameMatchNumTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '45c1aF16oNMqLfzyObdLx7M', 'MainGameMatchNumTrait');
// subpackages/l_mainGameMatchNum/Scripts/MainGameMatchNumTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UpdateMatchNumEffect_1 = require("../../../Scripts/UpdateMatchNumEffect");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var MainGameMatchNumTrait = /** @class */ (function (_super) {
    __extends(MainGameMatchNumTrait, _super);
    function MainGameMatchNumTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainGameMatchNumTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    MainGameMatchNumTrait.prototype.onIptInitView_pushEff = function (t, e) {
        this.showMatchNum(t.ins);
        e();
    };
    MainGameMatchNumTrait.prototype.onIptEnterAni_excute = function (t, e) {
        this.showMatchNum(t.ins);
        e();
    };
    MainGameMatchNumTrait.prototype.showMatchNum = function (t) {
        var e = t.gameContext.gameType;
        if (e === GameTypeEnums_1.MjGameType.DailyChallenge || e === GameTypeEnums_1.MjGameType.Normal) {
            var o = new UpdateMatchNumEffect_1.UpdateMatchNumEffect({
                canMatchCardPairNum: t.gameContext.getTileMapObject().getCanMatchCardPairNum(),
                isShow: true
            });
            t.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
        }
    };
    MainGameMatchNumTrait.prototype.onUpdateMatchNumBhv_start = function (t, e) {
        var o, r, i;
        if (t.args[0] && (null === (o = t.args[0].data) || void 0 === o ? void 0 : o.isShow)) {
            var a = null === (i = null === (r = t.ins) || void 0 === r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameView;
            if (a && a.topRootNode) {
                var n = a.topRootNode.getChildByName("labelCanMatchNum");
                n && (n.active = true);
                var c = a.topRootNode.getChildByName("labelMatch");
                c && (c.active = true);
            }
        }
        e();
    };
    MainGameMatchNumTrait.prototype.onRwdComboBhv_bonusAud = function (t, e) {
        var o, r;
        this.hideMatchNum(null === (r = null === (o = t.ins) || void 0 === o ? void 0 : o.context) || void 0 === r ? void 0 : r.gameView);
        e();
    };
    MainGameMatchNumTrait.prototype.onFullComboBhv_playAudio = function (t, e) {
        var o, r;
        this.hideMatchNum(null === (r = null === (o = t.ins) || void 0 === o ? void 0 : o.context) || void 0 === r ? void 0 : r.gameView);
        e();
    };
    MainGameMatchNumTrait.prototype.hideMatchNum = function (t) {
        if (t && t.topRootNode) {
            var e = t.topRootNode.getChildByName("labelCanMatchNum");
            e && (e.active = false);
        }
    };
    MainGameMatchNumTrait.traitKey = "MainGameMatchNum";
    MainGameMatchNumTrait = __decorate([
        mj.trait,
        mj.class("MainGameMatchNumTrait")
    ], MainGameMatchNumTrait);
    return MainGameMatchNumTrait;
}(Trait_1.default));
exports.default = MainGameMatchNumTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21haW5HYW1lTWF0Y2hOdW0vU2NyaXB0cy9NYWluR2FtZU1hdGNoTnVtVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixnRUFBMkQ7QUFDM0QsOEVBQTZFO0FBQzdFLHlFQUFzRTtBQUd0RTtJQUFtRCx5Q0FBSztJQUF4RDs7SUFvREEsQ0FBQztJQWxEQyxzQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QscURBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELG9EQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCw0Q0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLDBCQUFVLENBQUMsY0FBYyxJQUFJLENBQUMsS0FBSywwQkFBVSxDQUFDLE1BQU0sRUFBRTtZQUM5RCxJQUFJLENBQUMsR0FBRyxJQUFJLDJDQUFvQixDQUFDO2dCQUMvQixtQkFBbUIsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsc0JBQXNCLEVBQUU7Z0JBQzlFLE1BQU0sRUFBRSxJQUFJO2FBQ2IsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QztJ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QUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBbERNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFEbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQW9EekM7SUFBRCw0QkFBQztDQXBERCxBQW9EQyxDQXBEa0QsZUFBSyxHQW9EdkQ7a0JBcERvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBVcGRhdGVNYXRjaE51bUVmZmVjdCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvVXBkYXRlTWF0Y2hOdW1FZmZlY3QnO1xuaW1wb3J0IHsgRUluc2VydFR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJNYWluR2FtZU1hdGNoTnVtVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5HYW1lTWF0Y2hOdW1UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNYWluR2FtZU1hdGNoTnVtXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbklwdEluaXRWaWV3X3B1c2hFZmYodCwgZSkge1xuICAgIHRoaXMuc2hvd01hdGNoTnVtKHQuaW5zKTtcbiAgICBlKCk7XG4gIH1cbiAgb25JcHRFbnRlckFuaV9leGN1dGUodCwgZSkge1xuICAgIHRoaXMuc2hvd01hdGNoTnVtKHQuaW5zKTtcbiAgICBlKCk7XG4gIH1cbiAgc2hvd01hdGNoTnVtKHQpIHtcbiAgICB2YXIgZSA9IHQuZ2FtZUNvbnRleHQuZ2FtZVR5cGU7XG4gICAgaWYgKGUgPT09IE1qR2FtZVR5cGUuRGFpbHlDaGFsbGVuZ2UgfHwgZSA9PT0gTWpHYW1lVHlwZS5Ob3JtYWwpIHtcbiAgICAgIHZhciBvID0gbmV3IFVwZGF0ZU1hdGNoTnVtRWZmZWN0KHtcbiAgICAgICAgY2FuTWF0Y2hDYXJkUGFpck51bTogdC5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0Q2FuTWF0Y2hDYXJkUGFpck51bSgpLFxuICAgICAgICBpc1Nob3c6IHRydWVcbiAgICAgIH0pO1xuICAgICAgdC5wdXNoRWZmZWN0KG8sIEVJbnNlcnRUeXBlLlBhcmFsbGVsKTtcbiAgICB9XG4gIH1cbiAgb25VcGRhdGVNYXRjaE51bUJodl9zdGFydCh0LCBlKSB7XG4gICAgdmFyIG8sIHIsIGk7XG4gICAgaWYgKHQuYXJnc1swXSAmJiAobnVsbCA9PT0gKG8gPSB0LmFyZ3NbMF0uZGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5pc1Nob3cpKSB7XG4gICAgICB2YXIgYSA9IG51bGwgPT09IChpID0gbnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5jb250ZXh0KSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmdhbWVWaWV3O1xuICAgICAgaWYgKGEgJiYgYS50b3BSb290Tm9kZSkge1xuICAgICAgICB2YXIgbiA9IGEudG9wUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbENhbk1hdGNoTnVtXCIpO1xuICAgICAgICBuICYmIChuLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgICB2YXIgYyA9IGEudG9wUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbE1hdGNoXCIpO1xuICAgICAgICBjICYmIChjLmFjdGl2ZSA9IHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25Sd2RDb21ib0Jodl9ib251c0F1ZCh0LCBlKSB7XG4gICAgdmFyIG8sIHI7XG4gICAgdGhpcy5oaWRlTWF0Y2hOdW0obnVsbCA9PT0gKHIgPSBudWxsID09PSAobyA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmNvbnRleHQpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZ2FtZVZpZXcpO1xuICAgIGUoKTtcbiAgfVxuICBvbkZ1bGxDb21ib0Jodl9wbGF5QXVkaW8odCwgZSkge1xuICAgIHZhciBvLCByO1xuICAgIHRoaXMuaGlkZU1hdGNoTnVtKG51bGwgPT09IChyID0gbnVsbCA9PT0gKG8gPSB0LmlucykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5jb250ZXh0KSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmdhbWVWaWV3KTtcbiAgICBlKCk7XG4gIH1cbiAgaGlkZU1hdGNoTnVtKHQpIHtcbiAgICBpZiAodCAmJiB0LnRvcFJvb3ROb2RlKSB7XG4gICAgICB2YXIgZSA9IHQudG9wUm9vdE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbENhbk1hdGNoTnVtXCIpO1xuICAgICAgZSAmJiAoZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgfVxuICB9XG59Il19