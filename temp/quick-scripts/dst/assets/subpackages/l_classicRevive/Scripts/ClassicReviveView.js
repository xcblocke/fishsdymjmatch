
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_classicRevive/Scripts/ClassicReviveView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0e8edXbp1Byb4SZJ8PEvSD', 'ClassicReviveView');
// subpackages/l_classicRevive/Scripts/ClassicReviveView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent_1 = require("../../../Scripts/simulator/constant/GameEvent");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var AdManager_1 = require("../../../Scripts/base/ad/AdManager");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var DGameAdShow_1 = require("../../../Scripts/gamePlay/dot/DGameAdShow");
var DGameBtnClick_1 = require("../../../Scripts/dot/DGameBtnClick");
var ClassicReviveView = /** @class */ (function (_super) {
    __extends(ClassicReviveView, _super);
    function ClassicReviveView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgNode = null;
        _this.titleNode = null;
        _this.progressBar = null;
        _this.timerNode = null;
        _this.reviveBtn = null;
        _this.spineNode = null;
        _this.btnAnimNode = null;
        _this.countDownTween = null;
        _this.curNum = 0;
        _this.totalNum = 6;
        return _this;
    }
    ClassicReviveView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.OnButtonClick(this.reviveBtn, this.onReviveBtnClick.bind(this));
        this.playAnim();
    };
    ClassicReviveView.prototype.onReviveBtnClick = function () {
        var e;
        if (null !== this.countDownTween) {
            this.countDownTween.stop();
            this.countDownTween = null;
            DGameBtnClick_1.DotGameBtnClick.dotRevive(DGameBtnClick_1.EReviveClickType.Close);
            AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.InGameMotivation_Revive_Classic, {
                onSuccess: function () {
                    mj.EventManager.emit(GameEvent_1.EGameEvent.ClassicRevive_UseRevive, true);
                },
                onFailed: function () {
                    mj.EventManager.emit(GameEvent_1.EGameEvent.ClassicRevive_UseRevive, false);
                }
            });
            null === (e = this.delegate) || void 0 === e || e.close();
        }
    };
    ClassicReviveView.prototype.switchNum = function (e) {
        if (cc.isValid(this.timerNode) && !(e < 0)) {
            e > 5 && (e = 5);
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.ClassicRevive);
            cc.Tween.stopAllByTarget(this.timerNode);
            BaseSprite_1.default.refreshWithNode(this.timerNode, "atlas/revive_num/" + e, true, true, "l_classicRevive");
            cc.tween(this.timerNode).to(0.13, {
                scale: 1.15
            }).to(0.13, {
                scale: 0.95
            }).to(0.1, {
                scale: 1
            }).start();
        }
    };
    ClassicReviveView.prototype.showNextNum = function () {
        if (this.curNum >= this.totalNum) {
            if (this.countDownTween) {
                this.countDownTween.stop();
                this.countDownTween = null;
                mj.EventManager.emit(GameEvent_1.EGameEvent.ClassicRevive_UseRevive, false);
                this.delegate.close();
            }
        }
        else {
            this.switchNum(this.totalNum - this.curNum - 1);
            this.doCountDown();
        }
    };
    ClassicReviveView.prototype.doCountDown = function () {
        var e = this;
        this.countDownTween = cc.tween(this.progressBar).to(1, {
            progress: (this.curNum + 1) / this.totalNum
        }).call(function () {
            e.curNum += 1;
            e.showNextNum();
        }).start();
    };
    ClassicReviveView.prototype.playAnim = function () {
        cc.Tween.stopAllByTarget(this.bgNode);
        cc.Tween.stopAllByTarget(this.titleNode);
        cc.Tween.stopAllByTarget(this.progressBar.node);
        cc.Tween.stopAllByTarget(this.btnAnimNode);
        cc.Tween.stopAllByTarget(this.timerNode);
        cc.Tween.stopAllByTarget(this.spineNode);
        this.bgNode.opacity = 0;
        this.titleNode.opacity = 0;
        this.progressBar.node.scale = 0.85;
        this.progressBar.progress = 0;
        cc.tween(this.titleNode).to(0.17, {
            opacity: 255
        }).start();
        cc.tween(this.bgNode).to(0.17, {
            opacity: 255
        }).start();
        cc.tween(this.progressBar.node).to(0.17, {
            scale: 1
        }).start();
        this.spineNode.setAnimation(0, "init", true);
        var e = cc.tween(this.btnAnimNode).to(0.13, {
            scale: 1.04
        }).to(0.37, {
            scale: 1
        }, {
            easing: cc.easing.cubicInOut
        });
        cc.tween(this.btnAnimNode).repeatForever(e).start();
        this.showNextNum();
    };
    ClassicReviveView.prefabUrl = "prefabs/ClassicRevive";
    __decorate([
        mj.node("bg")
    ], ClassicReviveView.prototype, "bgNode", void 0);
    __decorate([
        mj.node("Title")
    ], ClassicReviveView.prototype, "titleNode", void 0);
    __decorate([
        mj.component("Progress", cc.ProgressBar)
    ], ClassicReviveView.prototype, "progressBar", void 0);
    __decorate([
        mj.node("Timer")
    ], ClassicReviveView.prototype, "timerNode", void 0);
    __decorate([
        mj.node("ReviveBtn")
    ], ClassicReviveView.prototype, "reviveBtn", void 0);
    __decorate([
        mj.component("ReviveBtn/AnimRoot/Layout/Ad/Spine", sp.Skeleton)
    ], ClassicReviveView.prototype, "spineNode", void 0);
    __decorate([
        mj.node("ReviveBtn/AnimRoot")
    ], ClassicReviveView.prototype, "btnAnimNode", void 0);
    ClassicReviveView = __decorate([
        mj.class
    ], ClassicReviveView);
    return ClassicReviveView;
}(UIView_1.default));
exports.default = ClassicReviveView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NsYXNzaWNSZXZpdmUvU2NyaXB0cy9DbGFzc2ljUmV2aXZlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQTJFO0FBQzNFLHdGQUFrRjtBQUNsRiwrREFBMEQ7QUFDMUQsZ0VBQTJEO0FBQzNELDJFQUFzRTtBQUN0RSx5RUFBd0U7QUFDeEUsb0VBQXVGO0FBRXZGO0lBQStDLHFDQUFNO0lBQXJEO1FBQUEscUVBNkdDO1FBM0dDLFlBQU0sR0FBUyxJQUFJLENBQUM7UUFFcEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFlLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBeUMsSUFBSSxDQUFDO1FBRXZELGlCQUFXLEdBQXlCLElBQUksQ0FBQztRQUN6QyxvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUE0RmYsQ0FBQztJQTFGQyxrQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0QsNENBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsK0JB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QUFFLENBQUMsUUFBUSxDQUFDO3dEQUNUO0lBRXZEO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQzswREFDVztJQWR0QixpQkFBaUI7UUFEckMsRUFBRSxDQUFDLEtBQUs7T0FDWSxpQkFBaUIsQ0E2R3JDO0lBQUQsd0JBQUM7Q0E3R0QsQUE2R0MsQ0E3RzhDLGdCQUFNLEdBNkdwRDtrQkE3R29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVHYW1lRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3NpbXVsYXRvci9jb25zdGFudC9HYW1lRXZlbnQnO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvYWQvQWRNYW5hZ2VyJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCB7IEVBZFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9kb3QvREdhbWVBZFNob3cnO1xuaW1wb3J0IHsgRG90R2FtZUJ0bkNsaWNrLCBFUmV2aXZlQ2xpY2tUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9kb3QvREdhbWVCdG5DbGljayc7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXNzaWNSZXZpdmVWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgQG1qLm5vZGUoXCJiZ1wiKVxuICBiZ05vZGU6IFwiYmdcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiVGl0bGVcIilcbiAgdGl0bGVOb2RlOiBcIlRpdGxlXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiUHJvZ3Jlc3NcIiwgY2MuUHJvZ3Jlc3NCYXIpXG4gIHByb2dyZXNzQmFyOiBcIlByb2dyZXNzXCIgPSBudWxsO1xuICBAbWoubm9kZShcIlRpbWVyXCIpXG4gIHRpbWVyTm9kZTogXCJUaW1lclwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJSZXZpdmVCdG5cIilcbiAgcmV2aXZlQnRuOiBcIlJldml2ZUJ0blwiID0gbnVsbDtcbiAgQG1qLmNvbXBvbmVudChcIlJldml2ZUJ0bi9BbmltUm9vdC9MYXlvdXQvQWQvU3BpbmVcIiwgc3AuU2tlbGV0b24pXG4gIHNwaW5lTm9kZTogXCJSZXZpdmVCdG4vQW5pbVJvb3QvTGF5b3V0L0FkL1NwaW5lXCIgPSBudWxsO1xuICBAbWoubm9kZShcIlJldml2ZUJ0bi9BbmltUm9vdFwiKVxuICBidG5BbmltTm9kZTogXCJSZXZpdmVCdG4vQW5pbVJvb3RcIiA9IG51bGw7XG4gIGNvdW50RG93blR3ZWVuID0gbnVsbDtcbiAgY3VyTnVtID0gMDtcbiAgdG90YWxOdW0gPSA2O1xuICBzdGF0aWMgcHJlZmFiVXJsID0gXCJwcmVmYWJzL0NsYXNzaWNSZXZpdmVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLnJldml2ZUJ0biwgdGhpcy5vblJldml2ZUJ0bkNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMucGxheUFuaW0oKTtcbiAgfVxuICBvblJldml2ZUJ0bkNsaWNrKCkge1xuICAgIHZhciBlO1xuICAgIGlmIChudWxsICE9PSB0aGlzLmNvdW50RG93blR3ZWVuKSB7XG4gICAgICB0aGlzLmNvdW50RG93blR3ZWVuLnN0b3AoKTtcbiAgICAgIHRoaXMuY291bnREb3duVHdlZW4gPSBudWxsO1xuICAgICAgRG90R2FtZUJ0bkNsaWNrLmRvdFJldml2ZShFUmV2aXZlQ2xpY2tUeXBlLkNsb3NlKTtcbiAgICAgIEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlWaWRlb0FkKEVBZFBvc2l0aW9uLkluR2FtZU1vdGl2YXRpb25fUmV2aXZlX0NsYXNzaWMsIHtcbiAgICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5DbGFzc2ljUmV2aXZlX1VzZVJldml2ZSwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRmFpbGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5DbGFzc2ljUmV2aXZlX1VzZVJldml2ZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG51bGwgPT09IChlID0gdGhpcy5kZWxlZ2F0ZSkgfHwgdm9pZCAwID09PSBlIHx8IGUuY2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgc3dpdGNoTnVtKGUpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLnRpbWVyTm9kZSkgJiYgIShlIDwgMCkpIHtcbiAgICAgIGUgPiA1ICYmIChlID0gNSk7XG4gICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5DbGFzc2ljUmV2aXZlKTtcbiAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnRpbWVyTm9kZSk7XG4gICAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLnRpbWVyTm9kZSwgXCJhdGxhcy9yZXZpdmVfbnVtL1wiICsgZSwgdHJ1ZSwgdHJ1ZSwgXCJsX2NsYXNzaWNSZXZpdmVcIik7XG4gICAgICBjYy50d2Vlbih0aGlzLnRpbWVyTm9kZSkudG8oMC4xMywge1xuICAgICAgICBzY2FsZTogMS4xNVxuICAgICAgfSkudG8oMC4xMywge1xuICAgICAgICBzY2FsZTogMC45NVxuICAgICAgfSkudG8oMC4xLCB7XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgfVxuICBzaG93TmV4dE51bSgpIHtcbiAgICBpZiAodGhpcy5jdXJOdW0gPj0gdGhpcy50b3RhbE51bSkge1xuICAgICAgaWYgKHRoaXMuY291bnREb3duVHdlZW4pIHtcbiAgICAgICAgdGhpcy5jb3VudERvd25Ud2Vlbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuY291bnREb3duVHdlZW4gPSBudWxsO1xuICAgICAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFR2FtZUV2ZW50LkNsYXNzaWNSZXZpdmVfVXNlUmV2aXZlLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zd2l0Y2hOdW0odGhpcy50b3RhbE51bSAtIHRoaXMuY3VyTnVtIC0gMSk7XG4gICAgICB0aGlzLmRvQ291bnREb3duKCk7XG4gICAgfVxuICB9XG4gIGRvQ291bnREb3duKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICB0aGlzLmNvdW50RG93blR3ZWVuID0gY2MudHdlZW4odGhpcy5wcm9ncmVzc0JhcikudG8oMSwge1xuICAgICAgcHJvZ3Jlc3M6ICh0aGlzLmN1ck51bSArIDEpIC8gdGhpcy50b3RhbE51bVxuICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgZS5jdXJOdW0gKz0gMTtcbiAgICAgIGUuc2hvd05leHROdW0oKTtcbiAgICB9KS5zdGFydCgpO1xuICB9XG4gIHBsYXlBbmltKCkge1xuICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmJnTm9kZSk7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMudGl0bGVOb2RlKTtcbiAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5wcm9ncmVzc0Jhci5ub2RlKTtcbiAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5idG5BbmltTm9kZSk7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMudGltZXJOb2RlKTtcbiAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5zcGluZU5vZGUpO1xuICAgIHRoaXMuYmdOb2RlLm9wYWNpdHkgPSAwO1xuICAgIHRoaXMudGl0bGVOb2RlLm9wYWNpdHkgPSAwO1xuICAgIHRoaXMucHJvZ3Jlc3NCYXIubm9kZS5zY2FsZSA9IDAuODU7XG4gICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IDA7XG4gICAgY2MudHdlZW4odGhpcy50aXRsZU5vZGUpLnRvKDAuMTcsIHtcbiAgICAgIG9wYWNpdHk6IDI1NVxuICAgIH0pLnN0YXJ0KCk7XG4gICAgY2MudHdlZW4odGhpcy5iZ05vZGUpLnRvKDAuMTcsIHtcbiAgICAgIG9wYWNpdHk6IDI1NVxuICAgIH0pLnN0YXJ0KCk7XG4gICAgY2MudHdlZW4odGhpcy5wcm9ncmVzc0Jhci5ub2RlKS50bygwLjE3LCB7XG4gICAgICBzY2FsZTogMVxuICAgIH0pLnN0YXJ0KCk7XG4gICAgdGhpcy5zcGluZU5vZGUuc2V0QW5pbWF0aW9uKDAsIFwiaW5pdFwiLCB0cnVlKTtcbiAgICB2YXIgZSA9IGNjLnR3ZWVuKHRoaXMuYnRuQW5pbU5vZGUpLnRvKDAuMTMsIHtcbiAgICAgIHNjYWxlOiAxLjA0XG4gICAgfSkudG8oMC4zNywge1xuICAgICAgc2NhbGU6IDFcbiAgICB9LCB7XG4gICAgICBlYXNpbmc6IGNjLmVhc2luZy5jdWJpY0luT3V0XG4gICAgfSk7XG4gICAgY2MudHdlZW4odGhpcy5idG5BbmltTm9kZSkucmVwZWF0Rm9yZXZlcihlKS5zdGFydCgpO1xuICAgIHRoaXMuc2hvd05leHROdW0oKTtcbiAgfVxufSJdfQ==