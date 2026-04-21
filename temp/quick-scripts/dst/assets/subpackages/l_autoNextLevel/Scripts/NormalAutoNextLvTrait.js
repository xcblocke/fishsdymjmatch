
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_autoNextLevel/Scripts/NormalAutoNextLvTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93680lHe3RBA7mTefCSy05D', 'NormalAutoNextLvTrait');
// subpackages/l_autoNextLevel/Scripts/NormalAutoNextLvTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var NormalAutoNextLvTrait = /** @class */ (function (_super) {
    __extends(NormalAutoNextLvTrait, _super);
    function NormalAutoNextLvTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.canAutoNextLevel = false;
        _this.triggeredAuto = false;
        return _this;
    }
    Object.defineProperty(NormalAutoNextLvTrait.prototype, "delayTime", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.delayTime) && void 0 !== e ? e : 6;
        },
        enumerable: false,
        configurable: true
    });
    NormalAutoNextLvTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NormalAutoNextLvTrait.prototype.onWinVw_showWinVw = function (t, e) {
        var r = this;
        this.canAutoNextLevel = false;
        this.triggeredAuto = false;
        cc.isValid(t.ins) && t.ins.scheduleOnce(function () {
            if (cc.isValid(t.ins) && r.canAutoNextLevel && !r.triggeredAuto) {
                r.triggeredAuto = true;
                t.ins.onBtnNextClick();
            }
        }, this.delayTime);
        e();
    };
    NormalAutoNextLvTrait.prototype.onWinVw_popNextView = function (t, e) {
        var r, o, i, n, a, u, s = null !== (o = null === (r = t.args[0]) || void 0 === r ? void 0 : r.hasBoxReward) && void 0 !== o && o, l = null !== (n = null === (i = t.args[0]) || void 0 === i ? void 0 : i.hasTaskReward) && void 0 !== n && n, c = null !== (u = null === (a = t.args[0]) || void 0 === a ? void 0 : a.hasRating) && void 0 !== u && u;
        this.canAutoNextLevel = !(s || l || c);
        e();
    };
    NormalAutoNextLvTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        var r, o = null === (r = t.args) || void 0 === r ? void 0 : r[3];
        if ("beforeInterAd" === (null == o ? void 0 : o.adTimeType)) {
            if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal) {
                if (this.triggeredAuto) {
                    this.triggeredAuto = false;
                    e({
                        returnVal: false,
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    NormalAutoNextLvTrait.traitKey = "NormalAutoNextLv";
    NormalAutoNextLvTrait = __decorate([
        mj.trait,
        mj.class("NormalAutoNextLvTrait")
    ], NormalAutoNextLvTrait);
    return NormalAutoNextLvTrait;
}(Trait_1.default));
exports.default = NormalAutoNextLvTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2F1dG9OZXh0TGV2ZWwvU2NyaXB0cy9Ob3JtYWxBdXRvTmV4dEx2VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUdqRTtJQUFtRCx5Q0FBSztJQUF4RDtRQUFBLHFFQW9EQztRQW5EQyxzQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsbUJBQWEsR0FBRyxLQUFLLENBQUM7O0lBa0R4QixDQUFDO0lBaERDLHNCQUFJLDRDQUFTO2FBQWI7WUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RILENBQUM7OztPQUFBO0lBQ0Qsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELGlEQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3RDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRTtnQkFDL0QsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDeEI7UUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELG1EQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFDMUcsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUMzRyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELGtEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxlQUFlLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzNELElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsTUFBTSxFQUFFO2dCQUN0RSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO29CQUMzQixDQUFDLENBQUM7d0JBQ0EsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLE9BQU8sRUFBRSxJQUFJO3dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO3FCQUMzQyxDQUFDLENBQUM7aUJBQ0o7O29CQUFNLENBQUMsRUFBRSxDQUFDO2FBQ1o7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBaERNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFIbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQW9EekM7SUFBRCw0QkFBQztDQXBERCxBQW9EQyxDQXBEa0QsZUFBSyxHQW9EdkQ7a0JBcERvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJOb3JtYWxBdXRvTmV4dEx2VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vcm1hbEF1dG9OZXh0THZUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgY2FuQXV0b05leHRMZXZlbCA9IGZhbHNlO1xuICB0cmlnZ2VyZWRBdXRvID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTm9ybWFsQXV0b05leHRMdlwiO1xuICBnZXQgZGVsYXlUaW1lKCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmRlbGF5VGltZSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDY7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uV2luVndfc2hvd1dpblZ3KHQsIGUpIHtcbiAgICB2YXIgciA9IHRoaXM7XG4gICAgdGhpcy5jYW5BdXRvTmV4dExldmVsID0gZmFsc2U7XG4gICAgdGhpcy50cmlnZ2VyZWRBdXRvID0gZmFsc2U7XG4gICAgY2MuaXNWYWxpZCh0LmlucykgJiYgdC5pbnMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHQuaW5zKSAmJiByLmNhbkF1dG9OZXh0TGV2ZWwgJiYgIXIudHJpZ2dlcmVkQXV0bykge1xuICAgICAgICByLnRyaWdnZXJlZEF1dG8gPSB0cnVlO1xuICAgICAgICB0Lmlucy5vbkJ0bk5leHRDbGljaygpO1xuICAgICAgfVxuICAgIH0sIHRoaXMuZGVsYXlUaW1lKTtcbiAgICBlKCk7XG4gIH1cbiAgb25XaW5Wd19wb3BOZXh0Vmlldyh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBvLFxuICAgICAgaSxcbiAgICAgIG4sXG4gICAgICBhLFxuICAgICAgdSxcbiAgICAgIHMgPSBudWxsICE9PSAobyA9IG51bGwgPT09IChyID0gdC5hcmdzWzBdKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmhhc0JveFJld2FyZCkgJiYgdm9pZCAwICE9PSBvICYmIG8sXG4gICAgICBsID0gbnVsbCAhPT0gKG4gPSBudWxsID09PSAoaSA9IHQuYXJnc1swXSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5oYXNUYXNrUmV3YXJkKSAmJiB2b2lkIDAgIT09IG4gJiYgbixcbiAgICAgIGMgPSBudWxsICE9PSAodSA9IG51bGwgPT09IChhID0gdC5hcmdzWzBdKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmhhc1JhdGluZykgJiYgdm9pZCAwICE9PSB1ICYmIHU7XG4gICAgdGhpcy5jYW5BdXRvTmV4dExldmVsID0gIShzIHx8IGwgfHwgYyk7XG4gICAgZSgpO1xuICB9XG4gIG9uQWRNZ3JfY2hrSW50ZXJBZCh0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBvID0gbnVsbCA9PT0gKHIgPSB0LmFyZ3MpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHJbM107XG4gICAgaWYgKFwiYmVmb3JlSW50ZXJBZFwiID09PSAobnVsbCA9PSBvID8gdm9pZCAwIDogby5hZFRpbWVUeXBlKSkge1xuICAgICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLk5vcm1hbCkge1xuICAgICAgICBpZiAodGhpcy50cmlnZ2VyZWRBdXRvKSB7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyZWRBdXRvID0gZmFsc2U7XG4gICAgICAgICAgZSh7XG4gICAgICAgICAgICByZXR1cm5WYWw6IGZhbHNlLFxuICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgZSgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19