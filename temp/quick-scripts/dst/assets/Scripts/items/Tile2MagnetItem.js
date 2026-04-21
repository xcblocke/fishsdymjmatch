
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/items/Tile2MagnetItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8bffcfw+zFAb5+JTIIZE6Ka', 'Tile2MagnetItem');
// Scripts/items/Tile2MagnetItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EMagnetState = void 0;
var BaseUI_1 = require("../framework/ui/BaseUI");
var AdManager_1 = require("../base/ad/AdManager");
var DGameAdShow_1 = require("../gamePlay/dot/DGameAdShow");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var DGameAdShowStage_1 = require("../gamePlay/dot/DGameAdShowStage");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var EMagnetState;
(function (EMagnetState) {
    EMagnetState[EMagnetState["ExitAnimation"] = 0] = "ExitAnimation";
    EMagnetState[EMagnetState["EnterAnimation"] = 1] = "EnterAnimation";
    EMagnetState[EMagnetState["Countdown"] = 2] = "Countdown";
    EMagnetState[EMagnetState["PlayingAd"] = 3] = "PlayingAd";
    EMagnetState[EMagnetState["Clearing"] = 4] = "Clearing";
})(EMagnetState = exports.EMagnetState || (exports.EMagnetState = {}));
var Tile2MagnetItem = /** @class */ (function (_super) {
    __extends(Tile2MagnetItem, _super);
    function Tile2MagnetItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._progressNode = null;
        _this._progressBar = null;
        _this._progressBarIcon = null;
        _this._progressBgSpine = null;
        _this._btnAd = null;
        _this._iconAdSpine = null;
        _this._state = EMagnetState.ExitAnimation;
        _this._aniInfo = null;
        _this._countdownDuration = 2;
        _this._isEnableTimeDown = false;
        _this._elapsedTime = 0;
        return _this;
    }
    Tile2MagnetItem.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        this.node.name = "magnetNode";
        this._progressNode = this.node.getChildByName("progress");
        if (this._progressNode) {
            this._progressBar = this._progressNode.getComponent(cc.ProgressBar);
            this._progressNode.active = true;
            this._progressBgSpine = this._progressNode.getComponent(sp.Skeleton);
            this._btnAd = this._progressNode.getComponent(cc.Button);
            this.OnButtonClick(this._progressNode, this.onMagnetClick.bind(this));
            this._progressBarIcon = this._progressNode.getChildByName("Bar");
            this._iconAdSpine = null === (t = this._progressNode.getChildByName("icon_ad")) || void 0 === t ? void 0 : t.getComponent(sp.Skeleton);
        }
        this.setState(EMagnetState.ExitAnimation);
    };
    Tile2MagnetItem.prototype.getState = function () {
        return this._state;
    };
    Tile2MagnetItem.prototype.setState = function (e) {
        this._state;
        this._state = e;
    };
    Tile2MagnetItem.prototype.update = function (e) {
        if (this._isEnableTimeDown) {
            this._elapsedTime += e;
            var t = Math.min(this._elapsedTime / this._countdownDuration, 1);
            this._progressBar && (this._progressBar.progress = t);
            t >= 1 && this.onCountdownFinish();
        }
    };
    Tile2MagnetItem.prototype.playEnterAnimation = function (e) {
        var t = this;
        if (this.node && cc.isValid(this.node) && this._progressBar && this._progressBarIcon && this._progressBgSpine && this._iconAdSpine && this._btnAd) {
            if (this.getState() === EMagnetState.ExitAnimation) {
                this._aniInfo = e;
                this.setState(EMagnetState.EnterAnimation);
                this._countdownDuration = e.countdownDuration;
                var o = e.targetPos;
                this.node.setPosition(o);
                this.node.opacity = 255;
                this._progressBar.progress = 0;
                this._progressBarIcon.opacity = 255;
                this._btnAd.interactable = false;
                GameUtils_1.default.playSpine(this._progressBgSpine, "in", false, function () {
                    if (cc.isValid(t.node)) {
                        t._btnAd.interactable = true;
                        GameUtils_1.default.playSpine(t._progressBgSpine, "init", true, null);
                        GameUtils_1.default.playSpine(t._iconAdSpine, "init", true, null);
                        t.startCountdown();
                    }
                });
                GameUtils_1.default.playSpine(this._iconAdSpine, "in", false);
            }
        }
    };
    Tile2MagnetItem.prototype.startCountdown = function () {
        this.setState(EMagnetState.Countdown);
        this._elapsedTime = 0;
        this._isEnableTimeDown = true;
        this._progressBar && (this._progressBar.progress = 0);
    };
    Tile2MagnetItem.prototype.stopCountdown = function () {
        this._isEnableTimeDown = false;
        this._elapsedTime = 0;
    };
    Tile2MagnetItem.prototype.onCountdownFinish = function () {
        var e = this;
        this.stopCountdown();
        this.setState(EMagnetState.ExitAnimation);
        if (this.node && cc.isValid(this.node)) {
            this._btnAd && (this._btnAd.interactable = false);
            this._progressBarIcon && (this._progressBarIcon.opacity = 0);
            if (this._progressBgSpine && this._iconAdSpine) {
                GameUtils_1.default.playSpine(this._progressBgSpine, "out", false, function () {
                    cc.isValid(e.node) && (e.node.active = false);
                });
                GameUtils_1.default.playSpine(this._iconAdSpine, "out", false, null);
            }
        }
    };
    Tile2MagnetItem.prototype.onMagnetClick = function () {
        var e = this;
        this.setState(EMagnetState.PlayingAd);
        this.stopCountdown();
        if (AdManager_1.default.getInstance().checkVideoAdIsReady() && cc.isValid(this.node)) {
            this._btnAd && (this._btnAd.interactable = false);
            this.node.opacity = 0;
        }
        DGameAdShowStage_1.DotGameAdShowStage.dot(false, "clickAdLock");
        AdManager_1.default.getInstance().playVideoAd(DGameAdShow_1.EAdPosition.InGameMotivation_Magnet, {
            onSuccess: function () {
                e.startAutoMerge();
            },
            onFailed: function (t) {
                e.onAdFailed(t);
            }
        }, "magnet_ad", {
            type: "magnet"
        });
    };
    Tile2MagnetItem.prototype.startAutoMerge = function () {
        if (this.node && cc.isValid(this.node)) {
            this.setState(EMagnetState.Clearing);
            if (this.node && cc.isValid(this.node)) {
                this.node.active = false;
                this.setState(EMagnetState.ExitAnimation);
            }
            this.autoMerger();
        }
    };
    Tile2MagnetItem.prototype.autoMerger = function () {
        var e, t = (null === (e = this._aniInfo) || void 0 === e ? void 0 : e.magnetCount) || 1;
        GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.Tile2MagnetMerge,
            type: "magnetMerge",
            magnetPair: t
        });
    };
    Tile2MagnetItem.prototype.onAdFailed = function () {
        this.forceExitWithoutAni();
    };
    Tile2MagnetItem.prototype.forceExitWithoutAni = function () {
        if (this.node && cc.isValid(this.node)) {
            this.node.active = false;
            this.stopCountdown();
            this.setState(EMagnetState.ExitAnimation);
        }
    };
    Tile2MagnetItem.prototype.onDestroy = function () {
        this._isEnableTimeDown = false;
        cc.Tween.stopAllByTarget(this.node);
        _super.prototype.onDestroy.call(this);
    };
    Tile2MagnetItem.prefabUrl = "prefabs/EffectMagnet";
    Tile2MagnetItem.bundleName = "l_magnet";
    __decorate([
        mj.traitEvent("T2MagnetItem_onLoad")
    ], Tile2MagnetItem.prototype, "onLoad", null);
    __decorate([
        mj.traitEvent("T2MagnetItem_enterAni")
    ], Tile2MagnetItem.prototype, "playEnterAnimation", null);
    __decorate([
        mj.traitEvent("T2MagnetItem_onDestroy")
    ], Tile2MagnetItem.prototype, "onDestroy", null);
    Tile2MagnetItem = __decorate([
        mj.class
    ], Tile2MagnetItem);
    return Tile2MagnetItem;
}(BaseUI_1.default));
exports.default = Tile2MagnetItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2l0ZW1zL1RpbGUyTWFnbmV0SXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUE0QztBQUM1QyxrREFBNkM7QUFDN0MsMkRBQTBEO0FBQzFELDhEQUF5RDtBQUN6RCxxRUFBc0U7QUFDdEUsc0VBQXFFO0FBQ3JFLHFFQUFxRTtBQUNyRSxJQUFZLFlBTVg7QUFORCxXQUFZLFlBQVk7SUFDdEIsaUVBQWlCLENBQUE7SUFDakIsbUVBQWtCLENBQUE7SUFDbEIseURBQWEsQ0FBQTtJQUNiLHlEQUFhLENBQUE7SUFDYix1REFBWSxDQUFBO0FBQ2QsQ0FBQyxFQU5XLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBTXZCO0FBRUQ7SUFBNkMsbUNBQU07SUFBbkQ7UUFBQSxxRUF3SkM7UUF2SkMsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2Qsa0JBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsWUFBTSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDcEMsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQix3QkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDdkIsdUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGtCQUFZLEdBQUcsQ0FBQyxDQUFDOztJQTZJbkIsQ0FBQztJQXpJQyxnQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFD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RyxVQUFVLENBQUM7SUFFL0I7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO2lEQWdCcEM7SUFpQkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDOzZEQXlCdEM7SUE0RUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO29EQUt2QztJQXZKa0IsZUFBZTtRQURuQyxFQUFFLENBQUMsS0FBSztPQUNZLGVBQWUsQ0F3Sm5DO0lBQUQsc0JBQUM7Q0F4SkQsQUF3SkMsQ0F4SjRDLGdCQUFNLEdBd0psRDtrQkF4Sm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVVJIGZyb20gJy4uL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IEFkTWFuYWdlciBmcm9tICcuLi9iYXNlL2FkL0FkTWFuYWdlcic7XG5pbXBvcnQgeyBFQWRQb3NpdGlvbiB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvdyc7XG5pbXBvcnQgR2FtZVV0aWxzIGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL3V0aWwvR2FtZVV0aWxzJztcbmltcG9ydCB7IERvdEdhbWVBZFNob3dTdGFnZSB9IGZyb20gJy4uL2dhbWVQbGF5L2RvdC9ER2FtZUFkU2hvd1N0YWdlJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4uL0dhbWVJbnRlcmFjdGlvbi9HYW1lSW50ZXJhY3Rpb24nO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5leHBvcnQgZW51bSBFTWFnbmV0U3RhdGUge1xuICBFeGl0QW5pbWF0aW9uID0gMCxcbiAgRW50ZXJBbmltYXRpb24gPSAxLFxuICBDb3VudGRvd24gPSAyLFxuICBQbGF5aW5nQWQgPSAzLFxuICBDbGVhcmluZyA9IDQsXG59XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyTWFnbmV0SXRlbSBleHRlbmRzIEJhc2VVSSB7XG4gIF9wcm9ncmVzc05vZGUgPSBudWxsO1xuICBfcHJvZ3Jlc3NCYXIgPSBudWxsO1xuICBfcHJvZ3Jlc3NCYXJJY29uID0gbnVsbDtcbiAgX3Byb2dyZXNzQmdTcGluZSA9IG51bGw7XG4gIF9idG5BZCA9IG51bGw7XG4gIF9pY29uQWRTcGluZSA9IG51bGw7XG4gIF9zdGF0ZSA9IEVNYWduZXRTdGF0ZS5FeGl0QW5pbWF0aW9uO1xuICBfYW5pSW5mbyA9IG51bGw7XG4gIF9jb3VudGRvd25EdXJhdGlvbiA9IDI7XG4gIF9pc0VuYWJsZVRpbWVEb3duID0gZmFsc2U7XG4gIF9lbGFwc2VkVGltZSA9IDA7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvRWZmZWN0TWFnbmV0XCI7XG4gIHN0YXRpYyBidW5kbGVOYW1lID0gXCJsX21hZ25ldFwiO1xuICBAbWoudHJhaXRFdmVudChcIlQyTWFnbmV0SXRlbV9vbkxvYWRcIilcbiAgb25Mb2FkKCkge1xuICAgIHZhciB0O1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMubm9kZS5uYW1lID0gXCJtYWduZXROb2RlXCI7XG4gICAgdGhpcy5fcHJvZ3Jlc3NOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NcIik7XG4gICAgaWYgKHRoaXMuX3Byb2dyZXNzTm9kZSkge1xuICAgICAgdGhpcy5fcHJvZ3Jlc3NCYXIgPSB0aGlzLl9wcm9ncmVzc05vZGUuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgIHRoaXMuX3Byb2dyZXNzTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5fcHJvZ3Jlc3NCZ1NwaW5lID0gdGhpcy5fcHJvZ3Jlc3NOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICB0aGlzLl9idG5BZCA9IHRoaXMuX3Byb2dyZXNzTm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgIHRoaXMuT25CdXR0b25DbGljayh0aGlzLl9wcm9ncmVzc05vZGUsIHRoaXMub25NYWduZXRDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuX3Byb2dyZXNzQmFySWNvbiA9IHRoaXMuX3Byb2dyZXNzTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhclwiKTtcbiAgICAgIHRoaXMuX2ljb25BZFNwaW5lID0gbnVsbCA9PT0gKHQgPSB0aGlzLl9wcm9ncmVzc05vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX2FkXCIpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoRU1hZ25ldFN0YXRlLkV4aXRBbmltYXRpb24pO1xuICB9XG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgfVxuICBzZXRTdGF0ZShlKSB7XG4gICAgdGhpcy5fc3RhdGU7XG4gICAgdGhpcy5fc3RhdGUgPSBlO1xuICB9XG4gIHVwZGF0ZShlKSB7XG4gICAgaWYgKHRoaXMuX2lzRW5hYmxlVGltZURvd24pIHtcbiAgICAgIHRoaXMuX2VsYXBzZWRUaW1lICs9IGU7XG4gICAgICB2YXIgdCA9IE1hdGgubWluKHRoaXMuX2VsYXBzZWRUaW1lIC8gdGhpcy5fY291bnRkb3duRHVyYXRpb24sIDEpO1xuICAgICAgdGhpcy5fcHJvZ3Jlc3NCYXIgJiYgKHRoaXMuX3Byb2dyZXNzQmFyLnByb2dyZXNzID0gdCk7XG4gICAgICB0ID49IDEgJiYgdGhpcy5vbkNvdW50ZG93bkZpbmlzaCgpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyTWFnbmV0SXRlbV9lbnRlckFuaVwiKVxuICBwbGF5RW50ZXJBbmltYXRpb24oZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAodGhpcy5ub2RlICYmIGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiB0aGlzLl9wcm9ncmVzc0JhciAmJiB0aGlzLl9wcm9ncmVzc0Jhckljb24gJiYgdGhpcy5fcHJvZ3Jlc3NCZ1NwaW5lICYmIHRoaXMuX2ljb25BZFNwaW5lICYmIHRoaXMuX2J0bkFkKSB7XG4gICAgICBpZiAodGhpcy5nZXRTdGF0ZSgpID09PSBFTWFnbmV0U3RhdGUuRXhpdEFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLl9hbmlJbmZvID0gZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShFTWFnbmV0U3RhdGUuRW50ZXJBbmltYXRpb24pO1xuICAgICAgICB0aGlzLl9jb3VudGRvd25EdXJhdGlvbiA9IGUuY291bnRkb3duRHVyYXRpb247XG4gICAgICAgIHZhciBvID0gZS50YXJnZXRQb3M7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihvKTtcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzQmFyLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NCYXJJY29uLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMuX2J0bkFkLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuX3Byb2dyZXNzQmdTcGluZSwgXCJpblwiLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHQubm9kZSkpIHtcbiAgICAgICAgICAgIHQuX2J0bkFkLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHQuX3Byb2dyZXNzQmdTcGluZSwgXCJpbml0XCIsIHRydWUsIG51bGwpO1xuICAgICAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0Ll9pY29uQWRTcGluZSwgXCJpbml0XCIsIHRydWUsIG51bGwpO1xuICAgICAgICAgICAgdC5zdGFydENvdW50ZG93bigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUodGhpcy5faWNvbkFkU3BpbmUsIFwiaW5cIiwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBzdGFydENvdW50ZG93bigpIHtcbiAgICB0aGlzLnNldFN0YXRlKEVNYWduZXRTdGF0ZS5Db3VudGRvd24pO1xuICAgIHRoaXMuX2VsYXBzZWRUaW1lID0gMDtcbiAgICB0aGlzLl9pc0VuYWJsZVRpbWVEb3duID0gdHJ1ZTtcbiAgICB0aGlzLl9wcm9ncmVzc0JhciAmJiAodGhpcy5fcHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSAwKTtcbiAgfVxuICBzdG9wQ291bnRkb3duKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlVGltZURvd24gPSBmYWxzZTtcbiAgICB0aGlzLl9lbGFwc2VkVGltZSA9IDA7XG4gIH1cbiAgb25Db3VudGRvd25GaW5pc2goKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuc3RvcENvdW50ZG93bigpO1xuICAgIHRoaXMuc2V0U3RhdGUoRU1hZ25ldFN0YXRlLkV4aXRBbmltYXRpb24pO1xuICAgIGlmICh0aGlzLm5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICB0aGlzLl9idG5BZCAmJiAodGhpcy5fYnRuQWQuaW50ZXJhY3RhYmxlID0gZmFsc2UpO1xuICAgICAgdGhpcy5fcHJvZ3Jlc3NCYXJJY29uICYmICh0aGlzLl9wcm9ncmVzc0Jhckljb24ub3BhY2l0eSA9IDApO1xuICAgICAgaWYgKHRoaXMuX3Byb2dyZXNzQmdTcGluZSAmJiB0aGlzLl9pY29uQWRTcGluZSkge1xuICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuX3Byb2dyZXNzQmdTcGluZSwgXCJvdXRcIiwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYy5pc1ZhbGlkKGUubm9kZSkgJiYgKGUubm9kZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHRoaXMuX2ljb25BZFNwaW5lLCBcIm91dFwiLCBmYWxzZSwgbnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTWFnbmV0Q2xpY2soKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuc2V0U3RhdGUoRU1hZ25ldFN0YXRlLlBsYXlpbmdBZCk7XG4gICAgdGhpcy5zdG9wQ291bnRkb3duKCk7XG4gICAgaWYgKEFkTWFuYWdlci5nZXRJbnN0YW5jZSgpLmNoZWNrVmlkZW9BZElzUmVhZHkoKSAmJiBjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHtcbiAgICAgIHRoaXMuX2J0bkFkICYmICh0aGlzLl9idG5BZC5pbnRlcmFjdGFibGUgPSBmYWxzZSk7XG4gICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgfVxuICAgIERvdEdhbWVBZFNob3dTdGFnZS5kb3QoZmFsc2UsIFwiY2xpY2tBZExvY2tcIik7XG4gICAgQWRNYW5hZ2VyLmdldEluc3RhbmNlKCkucGxheVZpZGVvQWQoRUFkUG9zaXRpb24uSW5HYW1lTW90aXZhdGlvbl9NYWduZXQsIHtcbiAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKCkge1xuICAgICAgICBlLnN0YXJ0QXV0b01lcmdlKCk7XG4gICAgICB9LFxuICAgICAgb25GYWlsZWQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGUub25BZEZhaWxlZCh0KTtcbiAgICAgIH1cbiAgICB9LCBcIm1hZ25ldF9hZFwiLCB7XG4gICAgICB0eXBlOiBcIm1hZ25ldFwiXG4gICAgfSk7XG4gIH1cbiAgc3RhcnRBdXRvTWVyZ2UoKSB7XG4gICAgaWYgKHRoaXMubm9kZSAmJiBjYy5pc1ZhbGlkKHRoaXMubm9kZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoRU1hZ25ldFN0YXRlLkNsZWFyaW5nKTtcbiAgICAgIGlmICh0aGlzLm5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShFTWFnbmV0U3RhdGUuRXhpdEFuaW1hdGlvbik7XG4gICAgICB9XG4gICAgICB0aGlzLmF1dG9NZXJnZXIoKTtcbiAgICB9XG4gIH1cbiAgYXV0b01lcmdlcigpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQgPSAobnVsbCA9PT0gKGUgPSB0aGlzLl9hbmlJbmZvKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLm1hZ25ldENvdW50KSB8fCAxO1xuICAgIEdhbWVJbnRlcmFjdGlvbi5pbnB1dCh7XG4gICAgICBpbnB1dFR5cGU6IEVHYW1lSW5wdXRFbnVtLlRpbGUyTWFnbmV0TWVyZ2UsXG4gICAgICB0eXBlOiBcIm1hZ25ldE1lcmdlXCIsXG4gICAgICBtYWduZXRQYWlyOiB0XG4gICAgfSk7XG4gIH1cbiAgb25BZEZhaWxlZCgpIHtcbiAgICB0aGlzLmZvcmNlRXhpdFdpdGhvdXRBbmkoKTtcbiAgfVxuICBmb3JjZUV4aXRXaXRob3V0QW5pKCkge1xuICAgIGlmICh0aGlzLm5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnN0b3BDb3VudGRvd24oKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoRU1hZ25ldFN0YXRlLkV4aXRBbmltYXRpb24pO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyTWFnbmV0SXRlbV9vbkRlc3Ryb3lcIilcbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMuX2lzRW5hYmxlVGltZURvd24gPSBmYWxzZTtcbiAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5ub2RlKTtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxufSJdfQ==