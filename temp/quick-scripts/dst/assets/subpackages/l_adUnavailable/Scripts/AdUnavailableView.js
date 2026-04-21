
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_adUnavailable/Scripts/AdUnavailableView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75133r0z4BGNrjJhf8jZLYU', 'AdUnavailableView');
// subpackages/l_adUnavailable/Scripts/AdUnavailableView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var DAdVisit_1 = require("../../../Scripts/gamePlay/dot/DAdVisit");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var AdUnavailableView = /** @class */ (function (_super) {
    __extends(AdUnavailableView, _super);
    function AdUnavailableView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._btnClose = null;
        _this._btnCancel = null;
        _this._btnRetry = null;
        _this._btnNoNetwork = null;
        _this._btnLoading = null;
        return _this;
    }
    AdUnavailableView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._btnClose = cc.find("content_node/btn_close", this.node);
        this._btnCancel = cc.find("content_node/btn_cancel", this.node);
        this._btnRetry = cc.find("content_node/btn_retry", this.node);
        this._btnNoNetwork = cc.find("content_node/btn_noNet", this.node);
        this._btnLoading = cc.find("content_node/btn_loading", this.node);
        this.registerButtons();
        DGameBtnClick_1.DotGameBtnClick.dotADWindow(DGameBtnClick_1.EADWindowClickType.Show);
        this.autoClose();
    };
    AdUnavailableView.prototype.getAutoCloseTime = function () {
        return -1;
    };
    AdUnavailableView.prototype.autoClose = function () {
        var t = this, e = this.getAutoCloseTime();
        e <= 0 || cc.tween(this.node).delay(e).call(function () {
            t.delegate && cc.isValid(t.node) && t.delegate.close();
        }).start();
    };
    AdUnavailableView.prototype.registerButtons = function () {
        this._btnClose && this.OnButtonClick(this._btnClose, this.onCloseClick.bind(this));
        this._btnCancel && this.OnButtonClick(this._btnCancel, this.onCancelClick.bind(this));
        this._btnRetry && this.OnButtonClick(this._btnRetry, this.onRetryClick.bind(this));
    };
    AdUnavailableView.prototype.onCloseClick = function () {
        DAdVisit_1.DotAdVisit.dotAdVisitNoAd(false);
        DGameBtnClick_1.DotGameBtnClick.dotADWindow(DGameBtnClick_1.EADWindowClickType.Close);
        this.delegate.close();
    };
    AdUnavailableView.prototype.onCancelClick = function () {
        DAdVisit_1.DotAdVisit.dotAdVisitNoAd(false);
        DGameBtnClick_1.DotGameBtnClick.dotADWindow(DGameBtnClick_1.EADWindowClickType.Cancel);
        this.delegate.close();
    };
    AdUnavailableView.prototype.onRetryClick = function () {
        DAdVisit_1.DotAdVisit.dotAdVisitNoAd(true);
        DGameBtnClick_1.DotGameBtnClick.dotADWindow(DGameBtnClick_1.EADWindowClickType.Retry);
        this.delegate.retry();
    };
    AdUnavailableView.prototype.setContent = function () { };
    AdUnavailableView.prototype.showNoNetwork = function () {
        var t = this;
        this._btnRetry && cc.isValid(this._btnRetry) && (this._btnRetry.active = false);
        this._btnNoNetwork && cc.isValid(this._btnNoNetwork) && (this._btnNoNetwork.active = true);
        this._btnLoading && cc.isValid(this._btnLoading) && (this._btnLoading.active = false);
        this.scheduleOnce(function () {
            t.delegate && t.delegate.showViewByNetwork();
        }, 1);
    };
    AdUnavailableView.prototype.showRetry = function () {
        this._btnRetry && cc.isValid(this._btnRetry) && (this._btnRetry.active = true);
        this._btnNoNetwork && cc.isValid(this._btnNoNetwork) && (this._btnNoNetwork.active = false);
        this._btnLoading && cc.isValid(this._btnLoading) && (this._btnLoading.active = false);
    };
    AdUnavailableView.prototype.showLoading = function () {
        this._btnRetry && cc.isValid(this._btnRetry) && (this._btnRetry.active = false);
        this._btnNoNetwork && cc.isValid(this._btnNoNetwork) && (this._btnNoNetwork.active = false);
        this._btnLoading && cc.isValid(this._btnLoading) && (this._btnLoading.active = true);
    };
    AdUnavailableView.prototype.updateShowLabelNum = function (t) {
        if (this._btnLoading && cc.isValid(this._btnLoading)) {
            var e = Math.max(0, t), o = this._btnLoading.getChildByName("nodeNum");
            if (o) {
                var i = o.getChildByName("labelNum"), n = null == i ? void 0 : i.getComponent(cc.Label);
                n && (n.string = e.toString());
            }
        }
    };
    AdUnavailableView.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
    };
    AdUnavailableView.prefabUrl = "prefabs/ui/AdUnavailableView";
    AdUnavailableView.bundleName = "mainRes";
    __decorate([
        mj.traitEvent("AdUnavailVw_onLoad")
    ], AdUnavailableView.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("AdUnavailVw_autoCloseTime")
    ], AdUnavailableView.prototype, "getAutoCloseTime", null);
    __decorate([
        mj.traitEvent("AdUnavailVw_ShowNoNet")
    ], AdUnavailableView.prototype, "showNoNetwork", null);
    __decorate([
        mj.traitEvent("AdUnavailVw_ShowRetry")
    ], AdUnavailableView.prototype, "showRetry", null);
    __decorate([
        mj.traitEvent("AdUnavailVw_ShowLoading")
    ], AdUnavailableView.prototype, "showLoading", null);
    AdUnavailableView = __decorate([
        mj.class
    ], AdUnavailableView);
    return AdUnavailableView;
}(UIView_1.default));
exports.default = AdUnavailableView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2FkVW5hdmFpbGFibGUvU2NyaXB0cy9BZFVuYXZhaWxhYmxlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELG1FQUFvRTtBQUNwRSxvRUFBeUY7QUFFekY7SUFBK0MscUNBQU07SUFBckQ7UUFBQSxxRUF3RkM7UUF2RkMsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGlCQUFXLEdBQUcsSUFBSSxDQUFDOztJQW1GckIsQ0FBQztJQS9FQyxrQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLCtCQUFlLENBQUMsV0FBVyxDQUFDLGtDQUFrQixDQUFDLElB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LENBd0ZyQztJQUFELHdCQUFDO0NBeEZELEFBd0ZDLENBeEY4QyxnQkFBTSxHQXdGcEQ7a0JBeEZvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlWaWV3IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5pbXBvcnQgeyBEb3RBZFZpc2l0IH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREFkVmlzaXQnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFQURXaW5kb3dDbGlja1R5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2RvdC9ER2FtZUJ0bkNsaWNrJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRVbmF2YWlsYWJsZVZpZXcgZXh0ZW5kcyBVSVZpZXcge1xuICBfYnRuQ2xvc2UgPSBudWxsO1xuICBfYnRuQ2FuY2VsID0gbnVsbDtcbiAgX2J0blJldHJ5ID0gbnVsbDtcbiAgX2J0bk5vTmV0d29yayA9IG51bGw7XG4gIF9idG5Mb2FkaW5nID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy91aS9BZFVuYXZhaWxhYmxlVmlld1wiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwibWFpblJlc1wiO1xuICBAbWoudHJhaXRFdmVudChcIkFkVW5hdmFpbFZ3X29uTG9hZFwiKVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fYnRuQ2xvc2UgPSBjYy5maW5kKFwiY29udGVudF9ub2RlL2J0bl9jbG9zZVwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX2J0bkNhbmNlbCA9IGNjLmZpbmQoXCJjb250ZW50X25vZGUvYnRuX2NhbmNlbFwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX2J0blJldHJ5ID0gY2MuZmluZChcImNvbnRlbnRfbm9kZS9idG5fcmV0cnlcIiwgdGhpcy5ub2RlKTtcbiAgICB0aGlzLl9idG5Ob05ldHdvcmsgPSBjYy5maW5kKFwiY29udGVudF9ub2RlL2J0bl9ub05ldFwiLCB0aGlzLm5vZGUpO1xuICAgIHRoaXMuX2J0bkxvYWRpbmcgPSBjYy5maW5kKFwiY29udGVudF9ub2RlL2J0bl9sb2FkaW5nXCIsIHRoaXMubm9kZSk7XG4gICAgdGhpcy5yZWdpc3RlckJ1dHRvbnMoKTtcbiAgICBEb3RHYW1lQnRuQ2xpY2suZG90QURXaW5kb3coRUFEV2luZG93Q2xpY2tUeXBlLlNob3cpO1xuICAgIHRoaXMuYXV0b0Nsb3NlKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJBZFVuYXZhaWxWd19hdXRvQ2xvc2VUaW1lXCIpXG4gIGdldEF1dG9DbG9zZVRpbWUoKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGF1dG9DbG9zZSgpIHtcbiAgICB2YXIgdCA9IHRoaXMsXG4gICAgICBlID0gdGhpcy5nZXRBdXRvQ2xvc2VUaW1lKCk7XG4gICAgZSA8PSAwIHx8IGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoZSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICB0LmRlbGVnYXRlICYmIGNjLmlzVmFsaWQodC5ub2RlKSAmJiB0LmRlbGVnYXRlLmNsb3NlKCk7XG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICByZWdpc3RlckJ1dHRvbnMoKSB7XG4gICAgdGhpcy5fYnRuQ2xvc2UgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2J0bkNsb3NlLCB0aGlzLm9uQ2xvc2VDbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9idG5DYW5jZWwgJiYgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuX2J0bkNhbmNlbCwgdGhpcy5vbkNhbmNlbENsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX2J0blJldHJ5ICYmIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9idG5SZXRyeSwgdGhpcy5vblJldHJ5Q2xpY2suYmluZCh0aGlzKSk7XG4gIH1cbiAgb25DbG9zZUNsaWNrKCkge1xuICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdE5vQWQoZmFsc2UpO1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RBRFdpbmRvdyhFQURXaW5kb3dDbGlja1R5cGUuQ2xvc2UpO1xuICAgIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgfVxuICBvbkNhbmNlbENsaWNrKCkge1xuICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdE5vQWQoZmFsc2UpO1xuICAgIERvdEdhbWVCdG5DbGljay5kb3RBRFdpbmRvdyhFQURXaW5kb3dDbGlja1R5cGUuQ2FuY2VsKTtcbiAgICB0aGlzLmRlbGVnYXRlLmNsb3NlKCk7XG4gIH1cbiAgb25SZXRyeUNsaWNrKCkge1xuICAgIERvdEFkVmlzaXQuZG90QWRWaXNpdE5vQWQodHJ1ZSk7XG4gICAgRG90R2FtZUJ0bkNsaWNrLmRvdEFEV2luZG93KEVBRFdpbmRvd0NsaWNrVHlwZS5SZXRyeSk7XG4gICAgdGhpcy5kZWxlZ2F0ZS5yZXRyeSgpO1xuICB9XG4gIHNldENvbnRlbnQoKSB7fVxuICBAbWoudHJhaXRFdmVudChcIkFkVW5hdmFpbFZ3X1Nob3dOb05ldFwiKVxuICBzaG93Tm9OZXR3b3JrKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLl9idG5SZXRyeSAmJiBjYy5pc1ZhbGlkKHRoaXMuX2J0blJldHJ5KSAmJiAodGhpcy5fYnRuUmV0cnkuYWN0aXZlID0gZmFsc2UpO1xuICAgIHRoaXMuX2J0bk5vTmV0d29yayAmJiBjYy5pc1ZhbGlkKHRoaXMuX2J0bk5vTmV0d29yaykgJiYgKHRoaXMuX2J0bk5vTmV0d29yay5hY3RpdmUgPSB0cnVlKTtcbiAgICB0aGlzLl9idG5Mb2FkaW5nICYmIGNjLmlzVmFsaWQodGhpcy5fYnRuTG9hZGluZykgJiYgKHRoaXMuX2J0bkxvYWRpbmcuYWN0aXZlID0gZmFsc2UpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHQuZGVsZWdhdGUgJiYgdC5kZWxlZ2F0ZS5zaG93Vmlld0J5TmV0d29yaygpO1xuICAgIH0sIDEpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQWRVbmF2YWlsVndfU2hvd1JldHJ5XCIpXG4gIHNob3dSZXRyeSgpIHtcbiAgICB0aGlzLl9idG5SZXRyeSAmJiBjYy5pc1ZhbGlkKHRoaXMuX2J0blJldHJ5KSAmJiAodGhpcy5fYnRuUmV0cnkuYWN0aXZlID0gdHJ1ZSk7XG4gICAgdGhpcy5fYnRuTm9OZXR3b3JrICYmIGNjLmlzVmFsaWQodGhpcy5fYnRuTm9OZXR3b3JrKSAmJiAodGhpcy5fYnRuTm9OZXR3b3JrLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB0aGlzLl9idG5Mb2FkaW5nICYmIGNjLmlzVmFsaWQodGhpcy5fYnRuTG9hZGluZykgJiYgKHRoaXMuX2J0bkxvYWRpbmcuYWN0aXZlID0gZmFsc2UpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQWRVbmF2YWlsVndfU2hvd0xvYWRpbmdcIilcbiAgc2hvd0xvYWRpbmcoKSB7XG4gICAgdGhpcy5fYnRuUmV0cnkgJiYgY2MuaXNWYWxpZCh0aGlzLl9idG5SZXRyeSkgJiYgKHRoaXMuX2J0blJldHJ5LmFjdGl2ZSA9IGZhbHNlKTtcbiAgICB0aGlzLl9idG5Ob05ldHdvcmsgJiYgY2MuaXNWYWxpZCh0aGlzLl9idG5Ob05ldHdvcmspICYmICh0aGlzLl9idG5Ob05ldHdvcmsuYWN0aXZlID0gZmFsc2UpO1xuICAgIHRoaXMuX2J0bkxvYWRpbmcgJiYgY2MuaXNWYWxpZCh0aGlzLl9idG5Mb2FkaW5nKSAmJiAodGhpcy5fYnRuTG9hZGluZy5hY3RpdmUgPSB0cnVlKTtcbiAgfVxuICB1cGRhdGVTaG93TGFiZWxOdW0odCkge1xuICAgIGlmICh0aGlzLl9idG5Mb2FkaW5nICYmIGNjLmlzVmFsaWQodGhpcy5fYnRuTG9hZGluZykpIHtcbiAgICAgIHZhciBlID0gTWF0aC5tYXgoMCwgdCksXG4gICAgICAgIG8gPSB0aGlzLl9idG5Mb2FkaW5nLmdldENoaWxkQnlOYW1lKFwibm9kZU51bVwiKTtcbiAgICAgIGlmIChvKSB7XG4gICAgICAgIHZhciBpID0gby5nZXRDaGlsZEJ5TmFtZShcImxhYmVsTnVtXCIpLFxuICAgICAgICAgIG4gPSBudWxsID09IGkgPyB2b2lkIDAgOiBpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIG4gJiYgKG4uc3RyaW5nID0gZS50b1N0cmluZygpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveSAmJiBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxufSJdfQ==