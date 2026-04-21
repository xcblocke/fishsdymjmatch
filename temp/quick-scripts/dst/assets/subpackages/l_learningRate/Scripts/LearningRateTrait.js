
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_learningRate/Scripts/LearningRateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87ded7RYuZN5rYtA7dsE7gr', 'LearningRateTrait');
// subpackages/l_learningRate/Scripts/LearningRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractNormalLevels_1 = require("../../../Scripts/core/extractQuestion/ExtractNormalLevels");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LearningRateTrait = /** @class */ (function (_super) {
    __extends(LearningRateTrait, _super);
    function LearningRateTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MaxDiffulty = 0;
        _this.MinDiffulty = 0;
        return _this;
    }
    LearningRateTrait.prototype.onExtNormLv_getK = function (t, e) {
        var r, i;
        if (this.checkGameMode()) {
            var a = t.args[0];
            this.MaxDiffulty = a.MaxDiffulty;
            this.MinDiffulty = a.MinDiffulty;
            var n = this._traitData.config;
            null == n.type && (n.type = 1);
            if (1 == n.type || 2 == n.type) {
                var c = null !== (i = null === (r = ExtractNormalLevels_1.ExtractDimension.getData()) || void 0 === r ? void 0 : r.ru) && void 0 !== i ? i : this.MinDiffulty, u = this.getLearningRate(n, c);
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: u
                });
            }
            else
                e();
        }
        else
            e();
    };
    LearningRateTrait.prototype.getLearningRate = function (t, e) {
        var r = 1 == t.type ? this.getS1(t) : this.getS2(t);
        return e > r ? r - this.MinDiffulty : this.MaxDiffulty - r;
    };
    LearningRateTrait.prototype.getS1 = function (t) {
        var e = NormalGameData_1.default.getInstance().getLevelId();
        return t.S_max - t.a / (t.b * e + t.c);
    };
    LearningRateTrait.prototype.getS2 = function (t) {
        var e = NormalGameData_1.default.getInstance().getLevelId();
        return t.S_max / (1 + Math.exp(-t.a * (e - t.b)));
    };
    LearningRateTrait.traitKey = "LearningRate";
    LearningRateTrait = __decorate([
        mj.trait,
        mj.class("LearningRateTrait")
    ], LearningRateTrait);
    return LearningRateTrait;
}(ExtractTrait_1.default));
exports.default = LearningRateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xlYXJuaW5nUmF0ZS9TY3JpcHRzL0xlYXJuaW5nUmF0ZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpR0FBNkY7QUFDN0YsOERBQXlEO0FBQ3pELHNGQUFpRjtBQUNqRiw4RUFBd0Y7QUFHeEY7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFtQ0M7UUFsQ0MsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsaUJBQVcsR0FBRyxDQUFDLENBQUM7O0lBaUNsQixDQUFDO0lBL0JDLDRDQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDakMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDL0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsc0NBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQ3JJLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxDQUFDO29CQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO29CQUMxQyxPQUFPLEVBQUUsSUFBSTtvQkFDYixTQUFTLEVBQUUsQ0FBQztpQkFDYixDQUFDLENBQUM7YUFDSjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCwyQ0FBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxpQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxHQUFHLHdCQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEQsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELGlDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsd0JBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsRCxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBL0JNLDBCQUFRLEdBQUcsY0FBYyxDQUFDO0lBSGQsaUJBQWlCO1FBRnJDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztPQUNULGlCQUFpQixDQW1DckM7SUFBRCx3QkFBQztDQW5DRCxBQW1DQyxDQW5DOEMsc0JBQVksR0FtQzFEO2tCQW5Db0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0cmFjdERpbWVuc2lvbiB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdE5vcm1hbExldmVscyc7XG5pbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbmltcG9ydCBOb3JtYWxHYW1lRGF0YSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvTm9ybWFsR2FtZURhdGEnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJMZWFybmluZ1JhdGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVhcm5pbmdSYXRlVHJhaXQgZXh0ZW5kcyBFeHRyYWN0VHJhaXQge1xuICBNYXhEaWZmdWx0eSA9IDA7XG4gIE1pbkRpZmZ1bHR5ID0gMDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJMZWFybmluZ1JhdGVcIjtcbiAgb25FeHROb3JtTHZfZ2V0Syh0LCBlKSB7XG4gICAgdmFyIHIsIGk7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgYSA9IHQuYXJnc1swXTtcbiAgICAgIHRoaXMuTWF4RGlmZnVsdHkgPSBhLk1heERpZmZ1bHR5O1xuICAgICAgdGhpcy5NaW5EaWZmdWx0eSA9IGEuTWluRGlmZnVsdHk7XG4gICAgICB2YXIgbiA9IHRoaXMuX3RyYWl0RGF0YS5jb25maWc7XG4gICAgICBudWxsID09IG4udHlwZSAmJiAobi50eXBlID0gMSk7XG4gICAgICBpZiAoMSA9PSBuLnR5cGUgfHwgMiA9PSBuLnR5cGUpIHtcbiAgICAgICAgdmFyIGMgPSBudWxsICE9PSAoaSA9IG51bGwgPT09IChyID0gRXh0cmFjdERpbWVuc2lvbi5nZXREYXRhKCkpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIucnUpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiB0aGlzLk1pbkRpZmZ1bHR5LFxuICAgICAgICAgIHUgPSB0aGlzLmdldExlYXJuaW5nUmF0ZShuLCBjKTtcbiAgICAgICAgZSh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiB1XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIGdldExlYXJuaW5nUmF0ZSh0LCBlKSB7XG4gICAgdmFyIHIgPSAxID09IHQudHlwZSA/IHRoaXMuZ2V0UzEodCkgOiB0aGlzLmdldFMyKHQpO1xuICAgIHJldHVybiBlID4gciA/IHIgLSB0aGlzLk1pbkRpZmZ1bHR5IDogdGhpcy5NYXhEaWZmdWx0eSAtIHI7XG4gIH1cbiAgZ2V0UzEodCkge1xuICAgIHZhciBlID0gTm9ybWFsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbElkKCk7XG4gICAgcmV0dXJuIHQuU19tYXggLSB0LmEgLyAodC5iICogZSArIHQuYyk7XG4gIH1cbiAgZ2V0UzIodCkge1xuICAgIHZhciBlID0gTm9ybWFsR2FtZURhdGEuZ2V0SW5zdGFuY2UoKS5nZXRMZXZlbElkKCk7XG4gICAgcmV0dXJuIHQuU19tYXggLyAoMSArIE1hdGguZXhwKC10LmEgKiAoZSAtIHQuYikpKTtcbiAgfVxufSJdfQ==