
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guideCombo/Scripts/GuideComboTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eed9d/qmqNKYpIUaSd5Mbz0', 'GuideComboTrait');
// subpackages/l_guideCombo/Scripts/GuideComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var GuideComboTrait = /** @class */ (function (_super) {
    __extends(GuideComboTrait, _super);
    function GuideComboTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GuideComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GuideComboTrait.prototype.onComboChk_canShowCombo = function (t, r) {
        var e = t.ins, o = e.context.getGameData(), n = o.getLevelId(), i = o.getComboNum(), a = e.getShowLimit();
        if (1 === n && i >= a) {
            r({
                returnVal: true,
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            r();
        }
    };
    GuideComboTrait.traitKey = "GuideCombo";
    GuideComboTrait = __decorate([
        mj.trait,
        mj.class("GuideComboTrait")
    ], GuideComboTrait);
    return GuideComboTrait;
}(Trait_1.default));
exports.default = GuideComboTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlQ29tYm8vU2NyaXB0cy9HdWlkZUNvbWJvVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFHeEY7SUFBNkMsbUNBQUs7SUFBbEQ7O0lBcUJBLENBQUM7SUFuQkMsZ0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELGlEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JCLENBQUMsQ0FBQztnQkFDQSxTQUFTLEVBQUUsSUFBSTtnQkFDZixPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTthQUMzQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7SUFuQk0sd0JBQVEsR0FBRyxZQUFZLENBQUM7SUFEWixlQUFlO1FBRm5DLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztPQUNQLGVBQWUsQ0FxQm5DO0lBQUQsc0JBQUM7Q0FyQkQsQUFxQkMsQ0FyQjRDLGVBQUssR0FxQmpEO2tCQXJCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkd1aWRlQ29tYm9UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3VpZGVDb21ib1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkd1aWRlQ29tYm9cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uQ29tYm9DaGtfY2FuU2hvd0NvbWJvKHQsIHIpIHtcbiAgICB2YXIgZSA9IHQuaW5zLFxuICAgICAgbyA9IGUuY29udGV4dC5nZXRHYW1lRGF0YSgpLFxuICAgICAgbiA9IG8uZ2V0TGV2ZWxJZCgpLFxuICAgICAgaSA9IG8uZ2V0Q29tYm9OdW0oKSxcbiAgICAgIGEgPSBlLmdldFNob3dMaW1pdCgpO1xuICAgIGlmICgxID09PSBuICYmIGkgPj0gYSkge1xuICAgICAgcih7XG4gICAgICAgIHJldHVyblZhbDogdHJ1ZSxcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcigpO1xuICAgIH1cbiAgfVxufSJdfQ==