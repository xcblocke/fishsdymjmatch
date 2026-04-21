
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_bannerDelay/Scripts/BannerDelayTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4504cI2GIpF36ZG64NBc1GD', 'BannerDelayTrait');
// subpackages/l_bannerDelay/Scripts/BannerDelayTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var BannerDelayTrait = /** @class */ (function (_super) {
    __extends(BannerDelayTrait, _super);
    function BannerDelayTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._delayTimeDone = false;
        _this._shouldShowBanner = false;
        return _this;
    }
    BannerDelayTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._config = {
            delayTime: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.delayTime) && void 0 !== r ? r : 10
        };
        this.startDelayTimer();
    };
    BannerDelayTrait.prototype.startDelayTimer = function () {
        var t = this, e = 1000 * this._config.delayTime;
        setTimeout(function () {
            t._delayTimeDone = true;
            t._shouldShowBanner && AdManager_1.default.getInstance().showBanner();
        }, e);
    };
    BannerDelayTrait.prototype.onAdMgr_showBanner = function (t, e) {
        this._shouldShowBanner = true;
        if (this._delayTimeDone) {
            e();
        }
        else {
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
    };
    BannerDelayTrait.prototype.onAdMgr_hideBanner = function (t, e) {
        this._shouldShowBanner = false;
        e();
    };
    BannerDelayTrait.traitKey = "BannerDelay";
    BannerDelayTrait = __decorate([
        mj.trait,
        mj.class("BannerDelayTrait")
    ], BannerDelayTrait);
    return BannerDelayTrait;
}(Trait_1.default));
exports.default = BannerDelayTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Jhbm5lckRlbGF5L1NjcmlwdHMvQmFubmVyRGVsYXlUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixnRUFBMkQ7QUFHM0Q7SUFBOEMsb0NBQUs7SUFBbkQ7UUFBQSxxRUFtQ0M7UUFsQ0Msb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsdUJBQWlCLEdBQUcsS0FBSyxDQUFDOztJQWlDNUIsQ0FBQztJQS9CQyxpQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsU0FBUyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN6SCxDQUFDO1FBQ0YsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCwwQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDcEMsVUFBVSxDQUFDO1lBQ1QsQ0FBQyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDeEIsQ0FBQyxDQUFDLGlCQUFpQixJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUNELDZDQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixDQUFDLEVBQUUsQ0FBQztTQUNMO2FBQU07WUFDTCxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0QsNkNBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBL0JNLHlCQUFRLEdBQUcsYUFBYSxDQUFDO0lBSGIsZ0JBQWdCO1FBRnBDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztPQUNSLGdCQUFnQixDQW1DcEM7SUFBRCx1QkFBQztDQW5DRCxBQW1DQyxDQW5DNkMsZUFBSyxHQW1DbEQ7a0JBbkNvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQmFubmVyRGVsYXlUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFubmVyRGVsYXlUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2RlbGF5VGltZURvbmUgPSBmYWxzZTtcbiAgX3Nob3VsZFNob3dCYW5uZXIgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJCYW5uZXJEZWxheVwiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIHI7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgZGVsYXlUaW1lOiBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmRlbGF5VGltZSkgJiYgdm9pZCAwICE9PSByID8gciA6IDEwXG4gICAgfTtcbiAgICB0aGlzLnN0YXJ0RGVsYXlUaW1lcigpO1xuICB9XG4gIHN0YXJ0RGVsYXlUaW1lcigpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBlID0gMTAwMCAqIHRoaXMuX2NvbmZpZy5kZWxheVRpbWU7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0Ll9kZWxheVRpbWVEb25lID0gdHJ1ZTtcbiAgICAgIHQuX3Nob3VsZFNob3dCYW5uZXIgJiYgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkuc2hvd0Jhbm5lcigpO1xuICAgIH0sIGUpO1xuICB9XG4gIG9uQWRNZ3Jfc2hvd0Jhbm5lcih0LCBlKSB7XG4gICAgdGhpcy5fc2hvdWxkU2hvd0Jhbm5lciA9IHRydWU7XG4gICAgaWYgKHRoaXMuX2RlbGF5VGltZURvbmUpIHtcbiAgICAgIGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uQWRNZ3JfaGlkZUJhbm5lcih0LCBlKSB7XG4gICAgdGhpcy5fc2hvdWxkU2hvd0Jhbm5lciA9IGZhbHNlO1xuICAgIGUoKTtcbiAgfVxufSJdfQ==