
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_subOpTimeAdjust/Scripts/SubOpTimeAdjustTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2337QY2mZOFrRBc4pgCreU', 'SubOpTimeAdjustTrait');
// subpackages/l_subOpTimeAdjust/Scripts/SubOpTimeAdjustTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var SubOpTimeAdjustTrait = /** @class */ (function (_super) {
    __extends(SubOpTimeAdjustTrait, _super);
    function SubOpTimeAdjustTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SubOpTimeAdjustTrait.prototype, "scaleM", {
        get: function () {
            var t;
            return null !== (t = this.traitData.scaleM) && void 0 !== t ? t : 7;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SubOpTimeAdjustTrait.prototype, "baseM", {
        get: function () {
            var t;
            return null !== (t = this.traitData.baseM) && void 0 !== t ? t : 6;
        },
        enumerable: false,
        configurable: true
    });
    SubOpTimeAdjustTrait.prototype.onGameData_getBaseOpTime = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.ins.localData.avgClearIntervals, n = 0;
            r.length > 0 && (n = Math.min.apply(Math, __spreadArrays(r)));
            e({
                returnType: TraitCallbackReturnType.jump,
                isBreak: true,
                returnVal: n
            });
        }
        else
            e();
    };
    SubOpTimeAdjustTrait.prototype.onGameMod_modifyWin = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.args[0], n = t.ins, o = n.context.getGameData().getUserBaseOpTime() * n.context.getGameData().getNonAutoStepCount();
            t.args[0] = Math.max(0, r - o);
            e();
        }
        else
            e();
    };
    SubOpTimeAdjustTrait.prototype.onExtNormLv_getM = function (t, e) {
        if (this.checkGameMode()) {
            e({
                returnVal: t.beforReturnVal * this.scaleM / this.baseM
            });
        }
        else
            e();
    };
    SubOpTimeAdjustTrait.traitKey = "SubOpTimeAdjust";
    SubOpTimeAdjustTrait = __decorate([
        mj.trait,
        mj.class("SubOpTimeAdjustTrait")
    ], SubOpTimeAdjustTrait);
    return SubOpTimeAdjustTrait;
}(ExtractTrait_1.default));
exports.default = SubOpTimeAdjustTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N1Yk9wVGltZUFkanVzdC9TY3JpcHRzL1N1Yk9wVGltZUFkanVzdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFHekQ7SUFBa0Qsd0NBQVk7SUFBOUQ7O0lBc0NBLENBQUM7SUFwQ0Msc0JBQUksd0NBQU07YUFBVjtZQUNFLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksdUNBQUs7YUFBVDtZQUNFLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7OztPQUFBO0lBQ0QsdURBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUN2QyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxpQkFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtnQkFDeEMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxrREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDVCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNsRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvQixDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELCtDQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixDQUFDLENBQUM7Z0JBQ0EsU0FBUyxFQUFFLENBQUMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSzthQUN2RCxDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFwQ00sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQURqQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBc0N4QztJQUFELDJCQUFDO0NBdENELEFBc0NDLENBdENpRCxzQkFBWSxHQXNDN0Q7a0JBdENvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU3ViT3BUaW1lQWRqdXN0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1Yk9wVGltZUFkanVzdFRyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTdWJPcFRpbWVBZGp1c3RcIjtcbiAgZ2V0IHNjYWxlTSgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLnRyYWl0RGF0YS5zY2FsZU0pICYmIHZvaWQgMCAhPT0gdCA/IHQgOiA3O1xuICB9XG4gIGdldCBiYXNlTSgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLnRyYWl0RGF0YS5iYXNlTSkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDY7XG4gIH1cbiAgb25HYW1lRGF0YV9nZXRCYXNlT3BUaW1lKHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciByID0gdC5pbnMubG9jYWxEYXRhLmF2Z0NsZWFySW50ZXJ2YWxzLFxuICAgICAgICBuID0gMDtcbiAgICAgIHIubGVuZ3RoID4gMCAmJiAobiA9IE1hdGgubWluLmFwcGx5KE1hdGgsIFsuLi5yXSkpO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogblxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvbkdhbWVNb2RfbW9kaWZ5V2luKHQsIGUpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciByID0gdC5hcmdzWzBdLFxuICAgICAgICBuID0gdC5pbnMsXG4gICAgICAgIG8gPSBuLmNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRVc2VyQmFzZU9wVGltZSgpICogbi5jb250ZXh0LmdldEdhbWVEYXRhKCkuZ2V0Tm9uQXV0b1N0ZXBDb3VudCgpO1xuICAgICAgdC5hcmdzWzBdID0gTWF0aC5tYXgoMCwgciAtIG8pO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0TSh0LCBlKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVmFsOiB0LmJlZm9yUmV0dXJuVmFsICogdGhpcy5zY2FsZU0gLyB0aGlzLmJhc2VNXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19