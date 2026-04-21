
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/motivationalWords/MotivationalWordsChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '496d5tk4jZKRpfo6Dph2OY8', 'MotivationalWordsChecker');
// Scripts/process/motivationalWords/MotivationalWordsChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.MotivationalWordsChecker = void 0;
var UserModel_1 = require("../../gamePlay/user/UserModel");
var BaseCoreObject_1 = require("../../BaseCoreObject");
var MotivationalWordsEffect_1 = require("../../MotivationalWordsEffect");
var MotivationalWordsChecker = /** @class */ (function (_super) {
    __extends(MotivationalWordsChecker, _super);
    function MotivationalWordsChecker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotivationalWordsChecker.prototype.canShowMotivationalWords = function () {
        if (!UserModel_1.default.getInstance().isGuideFinished())
            return {
                isShow: false,
                index: 0
            };
        var e = this.context.getGameData().getComboNum(), t = false, o = 0, n = this.getTrigMult();
        if (e % n == 0 && e > 0) {
            t = true;
            var i = MotivationalWordsEffect_1.MotivationalWordsEffect.soundNameArr.length - 1, r = Math.floor(e / n) - 1;
            o = Math.min(r, i);
        }
        return {
            isShow: t,
            index: o
        };
    };
    MotivationalWordsChecker.prototype.getTrigMult = function () {
        return 3;
    };
    __decorate([
        mj.traitEvent("MotivWdsChk_canShow")
    ], MotivationalWordsChecker.prototype, "canShowMotivationalWords", null);
    __decorate([
        mj.traitEvent("MotivWdsChk_trigMult")
    ], MotivationalWordsChecker.prototype, "getTrigMult", null);
    return MotivationalWordsChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.MotivationalWordsChecker = MotivationalWordsChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvbW90aXZhdGlvbmFsV29yZHMvTW90aXZhdGlvbmFsV29yZHNDaGVja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXNEO0FBQ3RELHVEQUFzRDtBQUN0RCx5RUFBd0U7QUFDeEU7SUFBOEMsNENBQWM7SUFBNUQ7O0lBMEJBLENBQUM7SUF4QkMsMkRBQXdCLEdBQXhCO1FBQ0UsSUFBSSxDQUFDLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsZUFBZSxFQUFFO1lBQUUsT0FBTztnQkFDckQsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFDOUMsQ0FBQyxHQUFHLEtBQUssRUFDVCxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDVCxJQUFJLENBQUMsR0FBRyxpREFBdUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDckQsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDcEI7UUFDRCxPQUFPO1lBQ0wsTUFBTSxFQUFFLENBQUM7WUFDVCxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUM7SUFDSixDQUFDO0lBRUQsOENBQVcsR0FBWDtRQUNFLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXZCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7NEVBb0JwQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQzsrREFHckM7SUFDSCwrQkFBQztDQTFCRCxBQTBCQyxDQTFCNkMsK0JBQWMsR0EwQjNEO0FBMUJZLDREQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgQmFzZUNvcmVPYmplY3QgfSBmcm9tICcuLi8uLi9CYXNlQ29yZU9iamVjdCc7XG5pbXBvcnQgeyBNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdCB9IGZyb20gJy4uLy4uL01vdGl2YXRpb25hbFdvcmRzRWZmZWN0JztcbmV4cG9ydCBjbGFzcyBNb3RpdmF0aW9uYWxXb3Jkc0NoZWNrZXIgZXh0ZW5kcyBCYXNlQ29yZU9iamVjdCB7XG4gIEBtai50cmFpdEV2ZW50KFwiTW90aXZXZHNDaGtfY2FuU2hvd1wiKVxuICBjYW5TaG93TW90aXZhdGlvbmFsV29yZHMoKSB7XG4gICAgaWYgKCFVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0d1aWRlRmluaXNoZWQoKSkgcmV0dXJuIHtcbiAgICAgIGlzU2hvdzogZmFsc2UsXG4gICAgICBpbmRleDogMFxuICAgIH07XG4gICAgdmFyIGUgPSB0aGlzLmNvbnRleHQuZ2V0R2FtZURhdGEoKS5nZXRDb21ib051bSgpLFxuICAgICAgdCA9IGZhbHNlLFxuICAgICAgbyA9IDAsXG4gICAgICBuID0gdGhpcy5nZXRUcmlnTXVsdCgpO1xuICAgIGlmIChlICUgbiA9PSAwICYmIGUgPiAwKSB7XG4gICAgICB0ID0gdHJ1ZTtcbiAgICAgIHZhciBpID0gTW90aXZhdGlvbmFsV29yZHNFZmZlY3Quc291bmROYW1lQXJyLmxlbmd0aCAtIDEsXG4gICAgICAgIHIgPSBNYXRoLmZsb29yKGUgLyBuKSAtIDE7XG4gICAgICBvID0gTWF0aC5taW4ociwgaSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpc1Nob3c6IHQsXG4gICAgICBpbmRleDogb1xuICAgIH07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNb3Rpdldkc0Noa190cmlnTXVsdFwiKVxuICBnZXRUcmlnTXVsdCgpIHtcbiAgICByZXR1cm4gMztcbiAgfVxufSJdfQ==