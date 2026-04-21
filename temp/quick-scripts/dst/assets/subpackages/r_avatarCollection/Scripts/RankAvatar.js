
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_avatarCollection/Scripts/RankAvatar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd0617hHHj1D57TQ/n0BJ8Rr', 'RankAvatar');
// subpackages/r_avatarCollection/Scripts/RankAvatar.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var Utils_1 = require("./Utils");
var ControllerManager_1 = require("../../../Scripts/framework/manager/ControllerManager");
var RankAvatar = /** @class */ (function (_super) {
    __extends(RankAvatar, _super);
    function RankAvatar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rootNode = null;
        _this._progressNode = null;
        _this._progressLabel = null;
        _this._progressBar = null;
        _this._cardSpr = null;
        _this.animTween = null;
        return _this;
    }
    RankAvatar.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerEvents();
        var e = this.node.getChildByName("bg");
        this._progressNode = e.getChildByName("progress");
        this._progressBar = this._progressNode.getComponent(cc.ProgressBar);
        this._progressLabel = this._progressNode.getChildByName("value").getComponent(cc.Label);
        this._cardSpr = e.getChildByName("cardBg").getChildByName("card").getComponent(cc.Sprite);
        this._rootNode = e;
    };
    RankAvatar.prototype.registerEvents = function () {
        this.OnButtonClick(this.node, this.onClickRankAvatar.bind(this));
    };
    RankAvatar.prototype.updateUI = function (t, e) {
        BaseSprite_1.default.refreshWithNode(this._cardSpr.node, t.path, t.fromAtlas, false, t.bundleName);
        this._progressLabel.string = e.curCount + "/" + e.maxCount;
        this._progressBar.progress = e.curCount / e.maxCount;
        this._progressNode.opacity = e.curCount == e.maxCount ? 0 : 255;
    };
    RankAvatar.prototype.playFinishAnim = function (t) {
        var e = this;
        this.stopAnim();
        this._progressNode.opacity = 255;
        var a = t.curCount, r = a - 2;
        this._progressLabel.string = r + "/" + a;
        this._progressBar.progress = r / a;
        var n = {
            value: r
        };
        this.animTween = cc.tween(n).to(0.34, {
            value: a
        }, {
            progress: function (a, r, n, o) {
                if (cc.isValid(e._progressLabel) && cc.isValid(e._progressBar)) {
                    var i = a + (r - a) * o;
                    e._progressLabel.string = Math.floor(i) + "/" + t.maxCount;
                    e._progressBar.progress = i / t.maxCount;
                }
            }
        }).call(function () {
            e.playEffect();
            e.playCardScale();
            e.playProgressFadeout();
            e.stopAnim();
        }).start();
    };
    RankAvatar.prototype.stopAnim = function () {
        if (this.animTween) {
            this.animTween.stop();
            this.animTween = null;
        }
    };
    RankAvatar.prototype.playProgressFadeout = function () {
        cc.tween(this._progressNode).to(0.1, {
            opacity: 0
        }).start();
    };
    RankAvatar.prototype.playCardScale = function () {
        cc.tween(this._cardSpr.node).to(0.1, {
            scale: 1.12
        }).to(0.07, {
            scale: 1.08
        }).to(0.16, {
            scale: 1.1
        }).start();
    };
    RankAvatar.prototype.playEffect = function () {
        var t = BaseSpine_1.default.create("spine/rank_progbar", "in_03", 1, null, true, Utils_1.getBundleName());
        t.node.parent = this._rootNode;
        t.node.position = cc.v3(0, 0, 0);
    };
    RankAvatar.prototype.onClickRankAvatar = function () {
        ControllerManager_1.default.getInstance().pushViewByController("UserInfoController");
    };
    RankAvatar.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.stopAnim();
    };
    RankAvatar.prefabUrl = "prefabs/RankAvatar";
    RankAvatar.bundleName = Utils_1.getBundleName();
    RankAvatar = __decorate([
        mj.class
    ], RankAvatar);
    return RankAvatar;
}(BaseUI_1.default));
exports.default = RankAvatar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2F2YXRhckNvbGxlY3Rpb24vU2NyaXB0cy9SYW5rQXZhdGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsMkVBQXNFO0FBQ3RFLHlFQUFvRTtBQUNwRSxpQ0FBd0M7QUFDeEMsMEZBQXFGO0FBRXJGO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBd0ZDO1FBdkZDLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFTLEdBQUcsSUFBSSxDQUFDOztJQWtGbkIsQ0FBQztJQS9FQywyQkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FB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QUNFLGlCQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFoRk0sb0JBQVMsR0FBRyxvQkFBb0IsQ0FBQztJQUNqQyxxQkFBVSxHQUFHLHFCQUFhLEVBQUUsQ0FBQztJQVJqQixVQUFVO1FBRDlCLEVBQUUsQ0FBQyxLQUFLO09BQ1ksVUFBVSxDQXdGOUI7SUFBRCxpQkFBQztDQXhGRCxBQXdGQyxDQXhGdUMsZ0JBQU0sR0F3RjdDO2tCQXhGb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlVUkgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdWkvQmFzZVVJJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgeyBnZXRCdW5kbGVOYW1lIH0gZnJvbSAnLi9VdGlscyc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvbWFuYWdlci9Db250cm9sbGVyTWFuYWdlcic7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtBdmF0YXIgZXh0ZW5kcyBCYXNlVUkge1xuICBfcm9vdE5vZGUgPSBudWxsO1xuICBfcHJvZ3Jlc3NOb2RlID0gbnVsbDtcbiAgX3Byb2dyZXNzTGFiZWwgPSBudWxsO1xuICBfcHJvZ3Jlc3NCYXIgPSBudWxsO1xuICBfY2FyZFNwciA9IG51bGw7XG4gIGFuaW1Ud2VlbiA9IG51bGw7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvUmFua0F2YXRhclwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IGdldEJ1bmRsZU5hbWUoKTtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB2YXIgZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpO1xuICAgIHRoaXMuX3Byb2dyZXNzTm9kZSA9IGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKTtcbiAgICB0aGlzLl9wcm9ncmVzc0JhciA9IHRoaXMuX3Byb2dyZXNzTm9kZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgIHRoaXMuX3Byb2dyZXNzTGFiZWwgPSB0aGlzLl9wcm9ncmVzc05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ2YWx1ZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX2NhcmRTcHIgPSBlLmdldENoaWxkQnlOYW1lKFwiY2FyZEJnXCIpLmdldENoaWxkQnlOYW1lKFwiY2FyZFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICB0aGlzLl9yb290Tm9kZSA9IGU7XG4gIH1cbiAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMubm9kZSwgdGhpcy5vbkNsaWNrUmFua0F2YXRhci5iaW5kKHRoaXMpKTtcbiAgfVxuICB1cGRhdGVVSSh0LCBlKSB7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5fY2FyZFNwci5ub2RlLCB0LnBhdGgsIHQuZnJvbUF0bGFzLCBmYWxzZSwgdC5idW5kbGVOYW1lKTtcbiAgICB0aGlzLl9wcm9ncmVzc0xhYmVsLnN0cmluZyA9IGUuY3VyQ291bnQgKyBcIi9cIiArIGUubWF4Q291bnQ7XG4gICAgdGhpcy5fcHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBlLmN1ckNvdW50IC8gZS5tYXhDb3VudDtcbiAgICB0aGlzLl9wcm9ncmVzc05vZGUub3BhY2l0eSA9IGUuY3VyQ291bnQgPT0gZS5tYXhDb3VudCA/IDAgOiAyNTU7XG4gIH1cbiAgcGxheUZpbmlzaEFuaW0odCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLnN0b3BBbmltKCk7XG4gICAgdGhpcy5fcHJvZ3Jlc3NOb2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgdmFyIGEgPSB0LmN1ckNvdW50LFxuICAgICAgciA9IGEgLSAyO1xuICAgIHRoaXMuX3Byb2dyZXNzTGFiZWwuc3RyaW5nID0gciArIFwiL1wiICsgYTtcbiAgICB0aGlzLl9wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHIgLyBhO1xuICAgIHZhciBuID0ge1xuICAgICAgdmFsdWU6IHJcbiAgICB9O1xuICAgIHRoaXMuYW5pbVR3ZWVuID0gY2MudHdlZW4obikudG8oMC4zNCwge1xuICAgICAgdmFsdWU6IGFcbiAgICB9LCB7XG4gICAgICBwcm9ncmVzczogZnVuY3Rpb24gKGEsIHIsIG4sIG8pIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoZS5fcHJvZ3Jlc3NMYWJlbCkgJiYgY2MuaXNWYWxpZChlLl9wcm9ncmVzc0JhcikpIHtcbiAgICAgICAgICB2YXIgaSA9IGEgKyAociAtIGEpICogbztcbiAgICAgICAgICBlLl9wcm9ncmVzc0xhYmVsLnN0cmluZyA9IE1hdGguZmxvb3IoaSkgKyBcIi9cIiArIHQubWF4Q291bnQ7XG4gICAgICAgICAgZS5fcHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBpIC8gdC5tYXhDb3VudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgZS5wbGF5RWZmZWN0KCk7XG4gICAgICBlLnBsYXlDYXJkU2NhbGUoKTtcbiAgICAgIGUucGxheVByb2dyZXNzRmFkZW91dCgpO1xuICAgICAgZS5zdG9wQW5pbSgpO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgc3RvcEFuaW0oKSB7XG4gICAgaWYgKHRoaXMuYW5pbVR3ZWVuKSB7XG4gICAgICB0aGlzLmFuaW1Ud2Vlbi5zdG9wKCk7XG4gICAgICB0aGlzLmFuaW1Ud2VlbiA9IG51bGw7XG4gICAgfVxuICB9XG4gIHBsYXlQcm9ncmVzc0ZhZGVvdXQoKSB7XG4gICAgY2MudHdlZW4odGhpcy5fcHJvZ3Jlc3NOb2RlKS50bygwLjEsIHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIHBsYXlDYXJkU2NhbGUoKSB7XG4gICAgY2MudHdlZW4odGhpcy5fY2FyZFNwci5ub2RlKS50bygwLjEsIHtcbiAgICAgIHNjYWxlOiAxLjEyXG4gICAgfSkudG8oMC4wNywge1xuICAgICAgc2NhbGU6IDEuMDhcbiAgICB9KS50bygwLjE2LCB7XG4gICAgICBzY2FsZTogMS4xXG4gICAgfSkuc3RhcnQoKTtcbiAgfVxuICBwbGF5RWZmZWN0KCkge1xuICAgIHZhciB0ID0gQmFzZVNwaW5lLmNyZWF0ZShcInNwaW5lL3JhbmtfcHJvZ2JhclwiLCBcImluXzAzXCIsIDEsIG51bGwsIHRydWUsIGdldEJ1bmRsZU5hbWUoKSk7XG4gICAgdC5ub2RlLnBhcmVudCA9IHRoaXMuX3Jvb3ROb2RlO1xuICAgIHQubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICB9XG4gIG9uQ2xpY2tSYW5rQXZhdGFyKCkge1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJVc2VySW5mb0NvbnRyb2xsZXJcIik7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIHRoaXMuc3RvcEFuaW0oKTtcbiAgfVxufSJdfQ==