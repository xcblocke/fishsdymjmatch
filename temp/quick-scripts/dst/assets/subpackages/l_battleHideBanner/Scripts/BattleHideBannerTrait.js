
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_battleHideBanner/Scripts/BattleHideBannerTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a90c5IPc4xCRZAhIEknsk4V', 'BattleHideBannerTrait');
// subpackages/l_battleHideBanner/Scripts/BattleHideBannerTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var BattleHideBannerTrait = /** @class */ (function (_super) {
    __extends(BattleHideBannerTrait, _super);
    function BattleHideBannerTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isInBattle = false;
        return _this;
    }
    BattleHideBannerTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    BattleHideBannerTrait.prototype.onMainGameCtrl_vwLoad = function (t, e) {
        this._isInBattle = true;
        AdManager_1.default.getInstance().hideBanner();
        e();
    };
    BattleHideBannerTrait.prototype.onMainGameCtrl_uiDes = function (t, e) {
        this._isInBattle = false;
        AdManager_1.default.getInstance().showBanner();
        e();
    };
    BattleHideBannerTrait.prototype.onAdMgr_showBanner = function (t, e) {
        if (this._isInBattle) {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else {
            e();
        }
    };
    BattleHideBannerTrait.traitKey = "BattleHideBanner";
    BattleHideBannerTrait = __decorate([
        mj.trait,
        mj.class("BattleHideBannerTrait")
    ], BattleHideBannerTrait);
    return BattleHideBannerTrait;
}(Trait_1.default));
exports.default = BattleHideBannerTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2JhdHRsZUhpZGVCYW5uZXIvU2NyaXB0cy9CYXR0bGVIaWRlQmFubmVyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsZ0VBQTJEO0FBRzNEO0lBQW1ELHlDQUFLO0lBQXhEO1FBQUEscUVBMEJDO1FBekJDLGlCQUFXLEdBQUcsS0FBSyxDQUFDOztJQXlCdEIsQ0FBQztJQXZCQyxzQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QscURBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsb0RBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckMsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0Qsa0RBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBdkJNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFGbEIscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQTBCekM7SUFBRCw0QkFBQztDQTFCRCxBQTBCQyxDQTFCa0QsZUFBSyxHQTBCdkQ7a0JBMUJvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQmF0dGxlSGlkZUJhbm5lclRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXR0bGVIaWRlQmFubmVyVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9pc0luQmF0dGxlID0gZmFsc2U7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQmF0dGxlSGlkZUJhbm5lclwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfdndMb2FkKHQsIGUpIHtcbiAgICB0aGlzLl9pc0luQmF0dGxlID0gdHJ1ZTtcbiAgICBBZE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5oaWRlQmFubmVyKCk7XG4gICAgZSgpO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX3VpRGVzKHQsIGUpIHtcbiAgICB0aGlzLl9pc0luQmF0dGxlID0gZmFsc2U7XG4gICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2hvd0Jhbm5lcigpO1xuICAgIGUoKTtcbiAgfVxuICBvbkFkTWdyX3Nob3dCYW5uZXIodCwgZSkge1xuICAgIGlmICh0aGlzLl9pc0luQmF0dGxlKSB7XG4gICAgICBlKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==