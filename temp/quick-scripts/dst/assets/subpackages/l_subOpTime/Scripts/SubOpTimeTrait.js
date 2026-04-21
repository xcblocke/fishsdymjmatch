
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_subOpTime/Scripts/SubOpTimeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b11686xzulDdo1A32TJkVBc', 'SubOpTimeTrait');
// subpackages/l_subOpTime/Scripts/SubOpTimeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var SubOpTimeTrait = /** @class */ (function (_super) {
    __extends(SubOpTimeTrait, _super);
    function SubOpTimeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SubOpTimeTrait.prototype, "scaleM", {
        get: function () {
            var t;
            return null !== (t = this.traitData.scaleM) && void 0 !== t ? t : 6;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SubOpTimeTrait.prototype, "baseM", {
        get: function () {
            var t;
            return null !== (t = this.traitData.baseM) && void 0 !== t ? t : 6;
        },
        enumerable: false,
        configurable: true
    });
    SubOpTimeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    SubOpTimeTrait.prototype.onGameMod_modifyWin = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.args[0], o = t.ins, n = o.context.getGameData().getUserBaseOpTime() * o.context.getGameData().getStepCount();
            t.args[0] = Math.max(0, r - n);
            e();
        }
        else
            e();
    };
    SubOpTimeTrait.prototype.onExtNormLv_getM = function (t, e) {
        if (this.checkGameMode()) {
            e({
                returnVal: t.beforReturnVal * this.scaleM / this.baseM
            });
        }
        else
            e();
    };
    SubOpTimeTrait.traitKey = "SubOpTime";
    SubOpTimeTrait = __decorate([
        mj.trait,
        mj.class("SubOpTimeTrait")
    ], SubOpTimeTrait);
    return SubOpTimeTrait;
}(ExtractTrait_1.default));
exports.default = SubOpTimeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N1Yk9wVGltZS9TY3JpcHRzL1N1Yk9wVGltZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFHekQ7SUFBNEMsa0NBQVk7SUFBeEQ7O0lBNkJBLENBQUM7SUEzQkMsc0JBQUksa0NBQU07YUFBVjtZQUNFLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksaUNBQUs7YUFBVDtZQUNFLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7OztPQUFBO0lBQ0QsK0JBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDRDQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNmLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNULENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUMzRixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvQixDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELHlDQUFnQixHQUFoQixVQUFpQixDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixDQUFDLENBQUM7Z0JBQ0EsU0FBUyxFQUFFLENBQUMsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSzthQUN2RCxDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUEzQk0sdUJBQVEsR0FBRyxXQUFXLENBQUM7SUFEWCxjQUFjO1FBRmxDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztPQUNOLGNBQWMsQ0E2QmxDO0lBQUQscUJBQUM7Q0E3QkQsQUE2QkMsQ0E3QjJDLHNCQUFZLEdBNkJ2RDtrQkE3Qm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU3ViT3BUaW1lVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1Yk9wVGltZVRyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTdWJPcFRpbWVcIjtcbiAgZ2V0IHNjYWxlTSgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLnRyYWl0RGF0YS5zY2FsZU0pICYmIHZvaWQgMCAhPT0gdCA/IHQgOiA2O1xuICB9XG4gIGdldCBiYXNlTSgpIHtcbiAgICB2YXIgdDtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLnRyYWl0RGF0YS5iYXNlTSkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDY7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uR2FtZU1vZF9tb2RpZnlXaW4odCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSB0LmFyZ3NbMF0sXG4gICAgICAgIG8gPSB0LmlucyxcbiAgICAgICAgbiA9IG8uY29udGV4dC5nZXRHYW1lRGF0YSgpLmdldFVzZXJCYXNlT3BUaW1lKCkgKiBvLmNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRTdGVwQ291bnQoKTtcbiAgICAgIHQuYXJnc1swXSA9IE1hdGgubWF4KDAsIHIgLSBuKTtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG4gIG9uRXh0Tm9ybUx2X2dldE0odCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblZhbDogdC5iZWZvclJldHVyblZhbCAqIHRoaXMuc2NhbGVNIC8gdGhpcy5iYXNlTVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==