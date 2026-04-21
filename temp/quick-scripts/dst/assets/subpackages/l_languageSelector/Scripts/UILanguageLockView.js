
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_languageSelector/Scripts/UILanguageLockView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69a36aX0T1LLJnLt55QHHG3', 'UILanguageLockView');
// subpackages/l_languageSelector/Scripts/UILanguageLockView.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UILanguageLockView = void 0;
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var DAdRewardEnter_1 = require("../../../Scripts/gamePlay/dot/DAdRewardEnter");
var DAdVisit_1 = require("../../../Scripts/gamePlay/dot/DAdVisit");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var UILanguageLockView = /** @class */ (function (_super) {
    __extends(UILanguageLockView, _super);
    function UILanguageLockView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._imgCard = null;
        _this._btnSure = null;
        _this._itemAdFailTips = null;
        _this._desc2 = null;
        _this._closeBtn = null;
        _this._imgLine = null;
        _this._txtClose = null;
        return _this;
    }
    UILanguageLockView.prototype.onLoad = function () {
        var e = this;
        _super.prototype.onLoad.call(this);
        this.initEvents();
        cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function () {
            e._imgLine.width = e._txtClose.width;
        });
    };
    UILanguageLockView.prototype.initEvents = function () {
        this._closeBtn && this.OnButtonClick(this._closeBtn, this.onCloseClick.bind(this));
        this._btnSure && this.OnButtonClick(this._btnSure, this.onSureClick.bind(this));
    };
    UILanguageLockView.prototype.onSureClick = function () {
        var t = DGameAdShow_1.EAdPosition.OpenSkinByLanguageAd;
        DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(t, true);
        DAdRewardEnter_1.DotAdRewardEnter.dot(false, t);
        this.delegate.playAd();
    };
    UILanguageLockView.prototype.onCloseClick = function () {
        var t = DGameAdShow_1.EAdPosition.OpenSkinByLanguageAd;
        DAdVisit_1.DotAdVisit.dotAdVisitRewardAD(t, false);
        this.delegate.close();
    };
    UILanguageLockView.prototype.setCard = function (t, e) {
        if (this._imgCard && cc.isValid(this._imgCard.node)) {
            "l_lanCardJP" == e && (e = "mainRes");
            BaseSprite_1.default.refreshWithNode(this._imgCard.node, "atlas/cardIcon/" + t, true, true, e);
        }
    };
    UILanguageLockView.prototype.onFail = function () {
        if (cc.isValid(this._itemAdFailTips)) {
            var t = this._itemAdFailTips;
            cc.Tween.stopAllByTarget(t);
            t.active = true;
            t.y = -100;
            t.scale = 0;
            t.opacity = 0;
            cc.tween(t).to(0.166, {
                y: 0,
                scale: 1,
                opacity: 255
            }, {
                easing: cc.easing.quartOut
            }).delay(0.494).to(0.24, {
                opacity: 0
            }).call(function () {
                cc.isValid(t) && (t.active = false);
            }).start();
        }
    };
    UILanguageLockView.prefabUrl = "prefab/UILanguageLockView";
    UILanguageLockView.bundleName = "r_changeBaseCardByLan";
    __decorate([
        mj.component("imgCardBg/imgCard", cc.Sprite)
    ], UILanguageLockView.prototype, "_imgCard", void 0);
    __decorate([
        mj.node("content_node/btn_sure")
    ], UILanguageLockView.prototype, "_btnSure", void 0);
    __decorate([
        mj.node("item_adFailTips")
    ], UILanguageLockView.prototype, "_itemAdFailTips", void 0);
    __decorate([
        mj.component("item_adFailTips/desc2", cc.Label)
    ], UILanguageLockView.prototype, "_desc2", void 0);
    __decorate([
        mj.node("btn_close")
    ], UILanguageLockView.prototype, "_closeBtn", void 0);
    __decorate([
        mj.node("btn_close/img_line")
    ], UILanguageLockView.prototype, "_imgLine", void 0);
    __decorate([
        mj.node("btn_close/txt_close")
    ], UILanguageLockView.prototype, "_txtClose", void 0);
    UILanguageLockView = __decorate([
        mj.class
    ], UILanguageLockView);
    return UILanguageLockView;
}(UIView_1.default));
exports.UILanguageLockView = UILanguageLockView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xhbmd1YWdlU2VsZWN0b3IvU2NyaXB0cy9VSUxhbmd1YWdlTG9ja1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsMkVBQXNFO0FBQ3RFLCtFQUFnRjtBQUNoRixtRUFBb0U7QUFDcEUseUVBQXdFO0FBRXhFO0lBQXdDLHNDQUFNO0lBQTlDO1FBQUEscUVBbUVDO1FBakVDLGNBQVEsR0FBd0IsSUFBSSxDQUFDO1FBRXJDLGNBQVEsR0FBNEIsSUFBSSxDQUFDO1FBRXpDLHFCQUFlLEdBQXNCLElBQUksQ0FBQztRQUUxQyxZQUFNLEdBQTRCLElBQUksQ0FBQztRQUV2QyxlQUFTLEdBQWdCLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQXlCLElBQUksQ0FBQztRQUV0QyxlQUFTLEdBQTBCLElBQUksQ0FBQzs7SUFxRDFDLENBQUM7SUFsREMsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUU7WUFDL0MsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsdUNBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0Qsd0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLHlCQUFXLENBQUMsb0JBQW9CLENBQUM7UUFDekMscUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkMsaUNBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCx5Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEdBQUcseUJBQVcsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6QyxxQkFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxvQ0FBTyxHQUFQLFVBQVEsQ0FBQyxFQUFFLENBQUM7UUFDVixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25ELGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7WUFDdEMsb0JBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdEY7SUFDSCxDQUFDO0lBQ0QsbUNBQU0sR0FBTjtRQUNFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDWixDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtnQkFDcEIsQ0FBQyxFQUFFLENBQUM7Z0JBQ0osS0FBSyxFQUFFLENBQUM7Z0JBQ1IsT0FBTyxFQUFFLEdBQUc7YUFDYixFQUFFO2dCQUNELE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVE7YUFDM0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO2dCQUN2QixPQUFPLEVBQUUsQ0FBQzthQUNYLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDWjtJQUNILENBQUM7SUFuRE0sNEJBQVMsR0FBRywyQkFBMkIsQ0FBQztJQUN4Qyw2QkFBVSxHQUFHLHVCQUF1QixDQUFDO0lBZDVDO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNSO0lBRXJDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQzt3REFDUTtJQUV6QztRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7K0RBQ2U7SUFFMUM7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ1Q7SUFFdkM7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt5REFDUztJQUU5QjtRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7d0RBQ1E7SUFFdEM7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO3lEQUNTO0lBZDdCLGtCQUFrQjtRQUQ5QixFQUFFLENBQUMsS0FBSztPQUNJLGtCQUFrQixDQW1FOUI7SUFBRCx5QkFBQztDQW5FRCxBQW1FQyxDQW5FdUMsZ0JBQU0sR0FtRTdDO0FBbkVZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVZpZXcgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvVUlWaWV3JztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCB7IERvdEFkUmV3YXJkRW50ZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9EQWRSZXdhcmRFbnRlcic7XG5pbXBvcnQgeyBEb3RBZFZpc2l0IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREFkVmlzaXQnO1xuaW1wb3J0IHsgRUFkUG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvdyc7XG5AbWouY2xhc3NcbmV4cG9ydCBjbGFzcyBVSUxhbmd1YWdlTG9ja1ZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBAbWouY29tcG9uZW50KFwiaW1nQ2FyZEJnL2ltZ0NhcmRcIiwgY2MuU3ByaXRlKVxuICBfaW1nQ2FyZDogXCJpbWdDYXJkQmcvaW1nQ2FyZFwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJjb250ZW50X25vZGUvYnRuX3N1cmVcIilcbiAgX2J0blN1cmU6IFwiY29udGVudF9ub2RlL2J0bl9zdXJlXCIgPSBudWxsO1xuICBAbWoubm9kZShcIml0ZW1fYWRGYWlsVGlwc1wiKVxuICBfaXRlbUFkRmFpbFRpcHM6IFwiaXRlbV9hZEZhaWxUaXBzXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiaXRlbV9hZEZhaWxUaXBzL2Rlc2MyXCIsIGNjLkxhYmVsKVxuICBfZGVzYzI6IFwiaXRlbV9hZEZhaWxUaXBzL2Rlc2MyXCIgPSBudWxsO1xuICBAbWoubm9kZShcImJ0bl9jbG9zZVwiKVxuICBfY2xvc2VCdG46IFwiYnRuX2Nsb3NlXCIgPSBudWxsO1xuICBAbWoubm9kZShcImJ0bl9jbG9zZS9pbWdfbGluZVwiKVxuICBfaW1nTGluZTogXCJidG5fY2xvc2UvaW1nX2xpbmVcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiYnRuX2Nsb3NlL3R4dF9jbG9zZVwiKVxuICBfdHh0Q2xvc2U6IFwiYnRuX2Nsb3NlL3R4dF9jbG9zZVwiID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFiL1VJTGFuZ3VhZ2VMb2NrVmlld1wiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwicl9jaGFuZ2VCYXNlQ2FyZEJ5TGFuXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgY2MuZGlyZWN0b3Iub25jZShjYy5EaXJlY3Rvci5FVkVOVF9BRlRFUl9VUERBVEUsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGUuX2ltZ0xpbmUud2lkdGggPSBlLl90eHRDbG9zZS53aWR0aDtcbiAgICB9KTtcbiAgfVxuICBpbml0RXZlbnRzKCkge1xuICAgIHRoaXMuX2Nsb3NlQnRuICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9jbG9zZUJ0biwgdGhpcy5vbkNsb3NlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5fYnRuU3VyZSAmJiB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5fYnRuU3VyZSwgdGhpcy5vblN1cmVDbGljay5iaW5kKHRoaXMpKTtcbiAgfVxuICBvblN1cmVDbGljaygpIHtcbiAgICB2YXIgdCA9IEVBZFBvc2l0aW9uLk9wZW5Ta2luQnlMYW5ndWFnZUFkO1xuICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdFJld2FyZEFEKHQsIHRydWUpO1xuICAgIERvdEFkUmV3YXJkRW50ZXIuZG90KGZhbHNlLCB0KTtcbiAgICB0aGlzLmRlbGVnYXRlLnBsYXlBZCgpO1xuICB9XG4gIG9uQ2xvc2VDbGljaygpIHtcbiAgICB2YXIgdCA9IEVBZFBvc2l0aW9uLk9wZW5Ta2luQnlMYW5ndWFnZUFkO1xuICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdFJld2FyZEFEKHQsIGZhbHNlKTtcbiAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gIH1cbiAgc2V0Q2FyZCh0LCBlKSB7XG4gICAgaWYgKHRoaXMuX2ltZ0NhcmQgJiYgY2MuaXNWYWxpZCh0aGlzLl9pbWdDYXJkLm5vZGUpKSB7XG4gICAgICBcImxfbGFuQ2FyZEpQXCIgPT0gZSAmJiAoZSA9IFwibWFpblJlc1wiKTtcbiAgICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2ltZ0NhcmQubm9kZSwgXCJhdGxhcy9jYXJkSWNvbi9cIiArIHQsIHRydWUsIHRydWUsIGUpO1xuICAgIH1cbiAgfVxuICBvbkZhaWwoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5faXRlbUFkRmFpbFRpcHMpKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuX2l0ZW1BZEZhaWxUaXBzO1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHQpO1xuICAgICAgdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgdC55ID0gLTEwMDtcbiAgICAgIHQuc2NhbGUgPSAwO1xuICAgICAgdC5vcGFjaXR5ID0gMDtcbiAgICAgIGNjLnR3ZWVuKHQpLnRvKDAuMTY2LCB7XG4gICAgICAgIHk6IDAsXG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcucXVhcnRPdXRcbiAgICAgIH0pLmRlbGF5KDAuNDk0KS50bygwLjI0LCB7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYy5pc1ZhbGlkKHQpICYmICh0LmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG59Il19