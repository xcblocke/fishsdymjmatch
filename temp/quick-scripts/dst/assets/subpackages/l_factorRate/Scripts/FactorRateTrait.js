
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_factorRate/Scripts/FactorRateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b38be5ibtxEso+U8DPse/hW', 'FactorRateTrait');
// subpackages/l_factorRate/Scripts/FactorRateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FactorRateTrait = /** @class */ (function (_super) {
    __extends(FactorRateTrait, _super);
    function FactorRateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FactorRateTrait.prototype.onExtNormLv_getFactorR = function (t, r) {
        var e, o;
        if (this.checkGameMode()) {
            var n = null !== (o = null === (e = this._traitData) || void 0 === e ? void 0 : e.rate) && void 0 !== o ? o : 1;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: n
            });
        }
        else
            r();
    };
    FactorRateTrait.traitKey = "FactorRate";
    FactorRateTrait = __decorate([
        mj.trait,
        mj.class("FactorRateTrait")
    ], FactorRateTrait);
    return FactorRateTrait;
}(ExtractTrait_1.default));
exports.default = FactorRateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZhY3RvclJhdGUvU2NyaXB0cy9GYWN0b3JSYXRlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUF5RDtBQUN6RCw4RUFBd0Y7QUFHeEY7SUFBNkMsbUNBQVk7SUFBekQ7O0lBYUEsQ0FBQztJQVhDLGdEQUFzQixHQUF0QixVQUF1QixDQUFDLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoSCxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBWE0sd0JBQVEsR0FBRyxZQUFZLENBQUM7SUFEWixlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0FhbkM7SUFBRCxzQkFBQztDQWJELEFBYUMsQ0FiNEMsc0JBQVksR0FheEQ7a0JBYm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRmFjdG9yUmF0ZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWN0b3JSYXRlVHJhaXQgZXh0ZW5kcyBFeHRyYWN0VHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkZhY3RvclJhdGVcIjtcbiAgb25FeHROb3JtTHZfZ2V0RmFjdG9yUih0LCByKSB7XG4gICAgdmFyIGUsIG87XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgbiA9IG51bGwgIT09IChvID0gbnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUucmF0ZSkgJiYgdm9pZCAwICE9PSBvID8gbyA6IDE7XG4gICAgICByKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IG5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSByKCk7XG4gIH1cbn0iXX0=