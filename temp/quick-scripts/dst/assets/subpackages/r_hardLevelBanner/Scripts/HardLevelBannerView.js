
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_hardLevelBanner/Scripts/HardLevelBannerView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33dd6EENtZNQIn9ZMvc+iqA', 'HardLevelBannerView');
// subpackages/r_hardLevelBanner/Scripts/HardLevelBannerView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var HardLevelBannerView = /** @class */ (function (_super) {
    __extends(HardLevelBannerView, _super);
    function HardLevelBannerView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._bannerBg = null;
        _this._lblText = null;
        _this._duration = 2.5;
        return _this;
    }
    HardLevelBannerView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.node.opacity = 0;
    };
    HardLevelBannerView.prototype.showBanner = function (e, t, n) {
        if (n === void 0) { n = 2.5; }
        this._duration = n;
        this.setBannerText(e, t);
        this.playEnterAnimation();
    };
    HardLevelBannerView.prototype.setBannerText = function (e, t) {
        var n = "<color=#FF5F40>" + t + "%</color>", r = I18NStrings_1.default.get(e);
        r = r ? "<color=#FFD987>" + r + "</color>" : this.getDefaultText();
        r = I18NStrings_1.default.stringFormat(r, [n]);
        this._lblText.getComponent(cc.RichText).string = r;
    };
    HardLevelBannerView.prototype.getDefaultText = function () {
        return "<color=#FF5F40>{0}</color> <color=#FFD987>of players find this level challenging</color>";
    };
    HardLevelBannerView.prototype.playEnterAnimation = function () {
        var e = this;
        cc.Tween.stopAllByTarget(this.node);
        this._bannerBg && cc.isValid(this._bannerBg) && cc.Tween.stopAllByTarget(this._bannerBg);
        this._lblText && cc.isValid(this._lblText) && cc.Tween.stopAllByTarget(this._lblText);
        this.node.opacity = 255;
        this.node.setScale(1);
        this.playBannerSound();
        this.playBannerBgAnimation();
        this.playTextAnimation();
        this.scheduleOnce(function () {
            e.playExitAnimation();
        }, 0.37 + this._duration);
    };
    HardLevelBannerView.prototype.playBannerSound = function () {
        mj.audioManager && mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.HardLevelBanner);
    };
    HardLevelBannerView.prototype.playBannerBgAnimation = function () {
        if (this._bannerBg && cc.isValid(this._bannerBg)) {
            this._bannerBg.opacity = 0;
            this._bannerBg.setScale(0.6, 1);
            cc.tween(this._bannerBg).to(0.17, {
                opacity: 255,
                scaleX: 1.03
            }, {
                easing: cc.easing.quadOut
            }).to(0.1, {
                scaleX: 1
            }, {
                easing: cc.easing.quadInOut
            }).start();
        }
    };
    HardLevelBannerView.prototype.playTextAnimation = function () {
        if (this._lblText && cc.isValid(this._lblText)) {
            this._lblText.opacity = 0;
            this._lblText.setScale(0.6);
            cc.tween(this._lblText).delay(0.1).to(0.17, {
                opacity: 255,
                scale: 1.02
            }, {
                easing: cc.easing.quadOut
            }).to(0.1, {
                scale: 1
            }, {
                easing: cc.easing.quadInOut
            }).start();
        }
    };
    HardLevelBannerView.prototype.playExitAnimation = function () {
        var e = this;
        cc.isValid(this.node) && cc.tween(this.node).to(0.17, {
            opacity: 0
        }, {
            easing: cc.easing.quadIn
        }).call(function () {
            e.destroyBanner();
        }).start();
    };
    HardLevelBannerView.prototype.destroyBanner = function () {
        cc.isValid(this.node) && this.node.destroy();
    };
    HardLevelBannerView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.unscheduleAllCallbacks();
        cc.Tween.stopAllByTarget(this.node);
        this._bannerBg && cc.isValid(this._bannerBg) && cc.Tween.stopAllByTarget(this._bannerBg);
        this._lblText && cc.isValid(this._lblText) && cc.Tween.stopAllByTarget(this._lblText);
    };
    HardLevelBannerView.prefabUrl = "prefabs/HardLevelBanner";
    HardLevelBannerView.bundleName = "r_hardLevelBanner";
    __decorate([
        mj.node("bannerBg")
    ], HardLevelBannerView.prototype, "_bannerBg", void 0);
    __decorate([
        mj.node("bannerBg/lblText")
    ], HardLevelBannerView.prototype, "_lblText", void 0);
    HardLevelBannerView = __decorate([
        mj.class
    ], HardLevelBannerView);
    return HardLevelBannerView;
}(BaseUI_1.default));
exports.default = HardLevelBannerView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2hhcmRMZXZlbEJhbm5lci9TY3JpcHRzL0hhcmRMZXZlbEJhbm5lclZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCwyRUFBc0U7QUFDdEUsd0ZBQWtGO0FBRWxGO0lBQWlELHVDQUFNO0lBQXZEO1FBQUEscUVBZ0dDO1FBOUZDLGVBQVMsR0FBZSxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUF1QixJQUFJLENBQUM7UUFDcEMsZUFBUyxHQUFHLEdBQUcsQ0FBQzs7SUEyRmxCLENBQUM7SUF4RkMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFDRCx3Q0FBVSxHQUFWLFVBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFPO1FBQVAsa0JBQUEsRUFBQSxPQUFPO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCwyQ0FBYSxHQUFiLFVBQWMsQ0FBQyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHLFdBQVcsRUFDekMsQ0FBQyxHQUFHLHFCQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuRSxDQUFDLEdBQUcscUJBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxF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LGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQXpGTSw2QkFBUyxHQUFHLHlCQUF5QixDQUFDO0lBQ3RDLDhCQUFVLEdBQUcsbUJBQW1CLENBQUM7SUFMeEM7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzswREFDUztJQUU3QjtRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7eURBQ1E7SUFKakIsbUJBQW1CO1FBRHZDLEVBQUUsQ0FBQyxLQUFLO09BQ1ksbUJBQW1CLENBZ0d2QztJQUFELDBCQUFDO0NBaEdELEFBZ0dDLENBaEdnRCxnQkFBTSxHQWdHdEQ7a0JBaEdvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhcmRMZXZlbEJhbm5lclZpZXcgZXh0ZW5kcyBCYXNlVUkge1xuICBAbWoubm9kZShcImJhbm5lckJnXCIpXG4gIF9iYW5uZXJCZzogXCJiYW5uZXJCZ1wiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJiYW5uZXJCZy9sYmxUZXh0XCIpXG4gIF9sYmxUZXh0OiBcImJhbm5lckJnL2xibFRleHRcIiA9IG51bGw7XG4gIF9kdXJhdGlvbiA9IDIuNTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9IYXJkTGV2ZWxCYW5uZXJcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBcInJfaGFyZExldmVsQmFubmVyXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gIH1cbiAgc2hvd0Jhbm5lcihlLCB0LCBuID0gMi41KSB7XG4gICAgdGhpcy5fZHVyYXRpb24gPSBuO1xuICAgIHRoaXMuc2V0QmFubmVyVGV4dChlLCB0KTtcbiAgICB0aGlzLnBsYXlFbnRlckFuaW1hdGlvbigpO1xuICB9XG4gIHNldEJhbm5lclRleHQoZSwgdCkge1xuICAgIHZhciBuID0gXCI8Y29sb3I9I0ZGNUY0MD5cIiArIHQgKyBcIiU8L2NvbG9yPlwiLFxuICAgICAgciA9IEkxOE5TdHJpbmdzLmdldChlKTtcbiAgICByID0gciA/IFwiPGNvbG9yPSNGRkQ5ODc+XCIgKyByICsgXCI8L2NvbG9yPlwiIDogdGhpcy5nZXREZWZhdWx0VGV4dCgpO1xuICAgIHIgPSBJMThOU3RyaW5ncy5zdHJpbmdGb3JtYXQociwgW25dKTtcbiAgICB0aGlzLl9sYmxUZXh0LmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gcjtcbiAgfVxuICBnZXREZWZhdWx0VGV4dCgpIHtcbiAgICByZXR1cm4gXCI8Y29sb3I9I0ZGNUY0MD57MH08L2NvbG9yPiA8Y29sb3I9I0ZGRDk4Nz5vZiBwbGF5ZXJzIGZpbmQgdGhpcyBsZXZlbCBjaGFsbGVuZ2luZzwvY29sb3I+XCI7XG4gIH1cbiAgcGxheUVudGVyQW5pbWF0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlKTtcbiAgICB0aGlzLl9iYW5uZXJCZyAmJiBjYy5pc1ZhbGlkKHRoaXMuX2Jhbm5lckJnKSAmJiBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5fYmFubmVyQmcpO1xuICAgIHRoaXMuX2xibFRleHQgJiYgY2MuaXNWYWxpZCh0aGlzLl9sYmxUZXh0KSAmJiBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5fbGJsVGV4dCk7XG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgdGhpcy5ub2RlLnNldFNjYWxlKDEpO1xuICAgIHRoaXMucGxheUJhbm5lclNvdW5kKCk7XG4gICAgdGhpcy5wbGF5QmFubmVyQmdBbmltYXRpb24oKTtcbiAgICB0aGlzLnBsYXlUZXh0QW5pbWF0aW9uKCk7XG4gICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZS5wbGF5RXhpdEFuaW1hdGlvbigpO1xuICAgIH0sIDAuMzcgKyB0aGlzLl9kdXJhdGlvbik7XG4gIH1cbiAgcGxheUJhbm5lclNvdW5kKCkge1xuICAgIG1qLmF1ZGlvTWFuYWdlciAmJiBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5IYXJkTGV2ZWxCYW5uZXIpO1xuICB9XG4gIHBsYXlCYW5uZXJCZ0FuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fYmFubmVyQmcgJiYgY2MuaXNWYWxpZCh0aGlzLl9iYW5uZXJCZykpIHtcbiAgICAgIHRoaXMuX2Jhbm5lckJnLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5fYmFubmVyQmcuc2V0U2NhbGUoMC42LCAxKTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMuX2Jhbm5lckJnKS50bygwLjE3LCB7XG4gICAgICAgIG9wYWNpdHk6IDI1NSxcbiAgICAgICAgc2NhbGVYOiAxLjAzXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRPdXRcbiAgICAgIH0pLnRvKDAuMSwge1xuICAgICAgICBzY2FsZVg6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZEluT3V0XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBwbGF5VGV4dEFuaW1hdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGJsVGV4dCAmJiBjYy5pc1ZhbGlkKHRoaXMuX2xibFRleHQpKSB7XG4gICAgICB0aGlzLl9sYmxUZXh0Lm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5fbGJsVGV4dC5zZXRTY2FsZSgwLjYpO1xuICAgICAgY2MudHdlZW4odGhpcy5fbGJsVGV4dCkuZGVsYXkoMC4xKS50bygwLjE3LCB7XG4gICAgICAgIG9wYWNpdHk6IDI1NSxcbiAgICAgICAgc2NhbGU6IDEuMDJcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhZE91dFxuICAgICAgfSkudG8oMC4xLCB7XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRJbk91dFxuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgcGxheUV4aXRBbmltYXRpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMTcsIHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IGNjLmVhc2luZy5xdWFkSW5cbiAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuZGVzdHJveUJhbm5lcigpO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgZGVzdHJveUJhbm5lcigpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMubm9kZSkgJiYgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgc3VwZXIub25EZXN0cm95LmNhbGwodGhpcyk7XG4gICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZSk7XG4gICAgdGhpcy5fYmFubmVyQmcgJiYgY2MuaXNWYWxpZCh0aGlzLl9iYW5uZXJCZykgJiYgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuX2Jhbm5lckJnKTtcbiAgICB0aGlzLl9sYmxUZXh0ICYmIGNjLmlzVmFsaWQodGhpcy5fbGJsVGV4dCkgJiYgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuX2xibFRleHQpO1xuICB9XG59Il19