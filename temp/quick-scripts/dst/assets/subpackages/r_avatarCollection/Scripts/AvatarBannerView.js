
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_avatarCollection/Scripts/AvatarBannerView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa046TJISVOprSbvU3ldD3+', 'AvatarBannerView');
// subpackages/r_avatarCollection/Scripts/AvatarBannerView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var Utils_1 = require("./Utils");
var AvatarBannerView = /** @class */ (function (_super) {
    __extends(AvatarBannerView, _super);
    function AvatarBannerView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.SHOW_MOVE_DURATION = 0.17;
        _this.SHOW_OPACITY_DURATION = 0.23;
        _this.BOUNCE_DURATION = 0.06;
        _this.WAIT_AFTER_SHOW = 0.1;
        _this.PROGRESS_SEGMENT_DURATION = 0.17;
        _this.WAIT_AFTER_COMPLETE = 0.17;
        _this.HIDE_DURATION = 0.23;
        _this.BOUNCE_OFFSET = 15;
        _this.BANNER_SLIDE_OFFSET = 300;
        _this.contentNode = null;
        _this.iconSprite = null;
        _this.progressLabel = null;
        _this.progressBar = null;
        _this.animTweens = [];
        _this.oriContentY = 0;
        _this.data = null;
        return _this;
    }
    AvatarBannerView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUI();
        this.resetToHiddenPosition();
    };
    AvatarBannerView.prototype.onDestroy = function () {
        this.stopAllAnimations();
        _super.prototype.onDestroy.call(this);
    };
    AvatarBannerView.prototype.show = function (t) {
        this.data = null == t ? void 0 : t.data;
        this.stopAllAnimations();
        this.updateUI();
        this.playCompleteAnimation();
    };
    AvatarBannerView.prototype.initUI = function () {
        var t, e, a, r;
        this.contentNode = this.node.getChildByName("content");
        null === (t = this.contentNode.getComponent(cc.Widget)) || void 0 === t || t.updateAlignment();
        this.oriContentY = this.contentNode.y;
        this.iconSprite = null === (e = cc.find("content/node_title_icon/node_mj/mj", this.node)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite);
        this.progressLabel = null === (a = cc.find("content/lb_progress", this.node)) || void 0 === a ? void 0 : a.getComponent(cc.Label);
        this.progressBar = null === (r = cc.find("content/progressBar", this.node)) || void 0 === r ? void 0 : r.getComponent(cc.ProgressBar);
    };
    AvatarBannerView.prototype.resetToHiddenPosition = function () {
        this.contentNode.y = this.oriContentY + this.BANNER_SLIDE_OFFSET;
        this.contentNode.opacity = 0;
    };
    AvatarBannerView.prototype.updateUI = function () {
        var t = this.data.maxCount - 2, e = this.data.maxCount;
        this.progressLabel && (this.progressLabel.string = t + "/" + e);
        this.progressBar && (this.progressBar.progress = t / e);
        var a = CardUtil_1.default.getAtlasPathAndBundleName(this.data.resName), r = a.path, n = a.bundleName, o = a.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.iconSprite.node, r, o, false, n);
    };
    AvatarBannerView.prototype.playCompleteAnimation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t, e;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.playSlideDownAnimation()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.wait(this.WAIT_AFTER_SHOW)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.playProgressAnimation()];
                    case 3:
                        _a.sent();
                        console.time("playSpineDoneAnimation");
                        return [4 /*yield*/, this.playSpineDoneAnimation()];
                    case 4:
                        _a.sent();
                        console.timeEnd("playSpineDoneAnimation");
                        return [4 /*yield*/, this.wait(this.WAIT_AFTER_COMPLETE)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.playHideAnimation()];
                    case 6:
                        _a.sent();
                        null === (t = this.delegate) || void 0 === t || t.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    AvatarBannerView.prototype.playSlideDownAnimation = function () {
        var t = this;
        return new Promise(function (e) {
            var a = cc.tween(t.contentNode).to(t.SHOW_MOVE_DURATION, {
                y: t.oriContentY - t.BOUNCE_OFFSET,
                opacity: 255
            }, {
                easing: cc.easing.quadInOut
            }).to(t.SHOW_OPACITY_DURATION - t.SHOW_MOVE_DURATION, {
                y: t.oriContentY
            }).call(e).start();
            t.animTweens.push(a);
        });
    };
    AvatarBannerView.prototype.playProgressAnimation = function () {
        var t = this;
        return new Promise(function (e) {
            var a = t.data.maxCount, r = {
                value: a - 2
            }, n = cc.tween(r).to(2 * t.PROGRESS_SEGMENT_DURATION, {
                value: a
            }, {
                easing: "linear",
                progress: function (e, r, n, o) {
                    if (cc.isValid(t.progressBar) && cc.isValid(t.progressLabel)) {
                        var i = e + (r - e) * o;
                        t.progressBar.progress = i / a;
                        t.progressLabel.string = Math.floor(i) + "/" + a;
                    }
                }
            }).call(e).start();
            t.animTweens.push(n.start());
        });
    };
    AvatarBannerView.prototype.playSpineDoneAnimation = function () {
        var t = this;
        return new Promise(function (e) {
            var a = BaseSpine_1.default.create("spine/rank_progbar", "in_01", 1, function () {
                return e();
            }, false, Utils_1.getBundleName());
            a.node.parent = t.contentNode;
            a.node.position = cc.v3(0, 0, 0);
        });
    };
    AvatarBannerView.prototype.playHideAnimation = function () {
        var t = this;
        return new Promise(function (e) {
            var a = cc.tween(t.contentNode).to(t.SHOW_MOVE_DURATION, {
                y: t.oriContentY - t.BOUNCE_OFFSET
            }, {
                easing: "sineOut"
            }).to(t.BOUNCE_DURATION, {
                y: t.oriContentY + t.BANNER_SLIDE_OFFSET
            }, {
                easing: "sineOut"
            }).call(e).start();
            t.animTweens.push(a);
        });
    };
    AvatarBannerView.prototype.wait = function (t) {
        var e = this;
        return new Promise(function (a) {
            var r = cc.tween(e.node).delay(t).call(a).start();
            e.animTweens.push(r);
        });
    };
    AvatarBannerView.prototype.stopAllAnimations = function () {
        this.animTweens.forEach(function (t) {
            return null == t ? void 0 : t.stop();
        });
        this.animTweens = [];
    };
    AvatarBannerView.prefabUrl = "prefabs/AvatarBanner";
    AvatarBannerView.bundleName = Utils_1.getBundleName();
    AvatarBannerView = __decorate([
        mj.class
    ], AvatarBannerView);
    return AvatarBannerView;
}(UIView_1.default));
exports.default = AvatarBannerView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2F2YXRhckNvbGxlY3Rpb24vU2NyaXB0cy9BdmF0YXJCYW5uZXJWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBMEQ7QUFDMUQsMkVBQXNFO0FBQ3RFLHlFQUFvRTtBQUNwRSxvRUFBK0Q7QUFDL0QsaUNBQXdDO0FBRXhDO0lBQThDLG9DQUFNO0lBQXBEO1FBQUEscUVBaUpDO1FBaEpDLHdCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQiwyQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDN0IscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIscUJBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIsK0JBQXlCLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLHlCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixtQkFBYSxHQUFHLEVBQUUsQ0FBQztRQUNuQix5QkFBbUIsR0FBRyxHQUFHLENBQUM7UUFDMUIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZ0JBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsVUFBSSxHQUFHLElBQUksQ0FBQzs7SUFpSWQsQ0FBQztJQTlIQyxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0Qsb0NBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLGlCQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFB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QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBL0hNLDBCQUFTLEdBQUcsc0JBQXNCLENBQUM7SUFDbkMsMkJBQVUsR0FBRyxxQkFBYSxFQUFFLENBQUM7SUFsQmpCLGdCQUFnQjtRQURwQyxFQUFFLENBQUMsS0FBSztPQUNZLGdCQUFnQixDQWlKcEM7SUFBRCx1QkFBQztDQWpKRCxBQWlKQyxDQWpKNkMsZ0JBQU0sR0FpSm5EO2tCQWpKb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJVmlldyBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay91aS9VSVZpZXcnO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcHJpdGUnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuaW1wb3J0IHsgZ2V0QnVuZGxlTmFtZSB9IGZyb20gJy4vVXRpbHMnO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXJCYW5uZXJWaWV3IGV4dGVuZHMgVUlWaWV3IHtcbiAgU0hPV19NT1ZFX0RVUkFUSU9OID0gMC4xNztcbiAgU0hPV19PUEFDSVRZX0RVUkFUSU9OID0gMC4yMztcbiAgQk9VTkNFX0RVUkFUSU9OID0gMC4wNjtcbiAgV0FJVF9BRlRFUl9TSE9XID0gMC4xO1xuICBQUk9HUkVTU19TRUdNRU5UX0RVUkFUSU9OID0gMC4xNztcbiAgV0FJVF9BRlRFUl9DT01QTEVURSA9IDAuMTc7XG4gIEhJREVfRFVSQVRJT04gPSAwLjIzO1xuICBCT1VOQ0VfT0ZGU0VUID0gMTU7XG4gIEJBTk5FUl9TTElERV9PRkZTRVQgPSAzMDA7XG4gIGNvbnRlbnROb2RlID0gbnVsbDtcbiAgaWNvblNwcml0ZSA9IG51bGw7XG4gIHByb2dyZXNzTGFiZWwgPSBudWxsO1xuICBwcm9ncmVzc0JhciA9IG51bGw7XG4gIGFuaW1Ud2VlbnMgPSBbXTtcbiAgb3JpQ29udGVudFkgPSAwO1xuICBkYXRhID0gbnVsbDtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9BdmF0YXJCYW5uZXJcIjtcbiAgc3RhdGljIGJ1bmRsZU5hbWUgPSBnZXRCdW5kbGVOYW1lKCk7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmluaXRVSSgpO1xuICAgIHRoaXMucmVzZXRUb0hpZGRlblBvc2l0aW9uKCk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RvcEFsbEFuaW1hdGlvbnMoKTtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxuICBzaG93KHQpIHtcbiAgICB0aGlzLmRhdGEgPSBudWxsID09IHQgPyB2b2lkIDAgOiB0LmRhdGE7XG4gICAgdGhpcy5zdG9wQWxsQW5pbWF0aW9ucygpO1xuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICB0aGlzLnBsYXlDb21wbGV0ZUFuaW1hdGlvbigpO1xuICB9XG4gIGluaXRVSSgpIHtcbiAgICB2YXIgdCwgZSwgYSwgcjtcbiAgICB0aGlzLmNvbnRlbnROb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuY29udGVudE5vZGUuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnVwZGF0ZUFsaWdubWVudCgpO1xuICAgIHRoaXMub3JpQ29udGVudFkgPSB0aGlzLmNvbnRlbnROb2RlLnk7XG4gICAgdGhpcy5pY29uU3ByaXRlID0gbnVsbCA9PT0gKGUgPSBjYy5maW5kKFwiY29udGVudC9ub2RlX3RpdGxlX2ljb24vbm9kZV9tai9talwiLCB0aGlzLm5vZGUpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIHRoaXMucHJvZ3Jlc3NMYWJlbCA9IG51bGwgPT09IChhID0gY2MuZmluZChcImNvbnRlbnQvbGJfcHJvZ3Jlc3NcIiwgdGhpcy5ub2RlKSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBudWxsID09PSAociA9IGNjLmZpbmQoXCJjb250ZW50L3Byb2dyZXNzQmFyXCIsIHRoaXMubm9kZSkpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgfVxuICByZXNldFRvSGlkZGVuUG9zaXRpb24oKSB7XG4gICAgdGhpcy5jb250ZW50Tm9kZS55ID0gdGhpcy5vcmlDb250ZW50WSArIHRoaXMuQkFOTkVSX1NMSURFX09GRlNFVDtcbiAgICB0aGlzLmNvbnRlbnROb2RlLm9wYWNpdHkgPSAwO1xuICB9XG4gIHVwZGF0ZVVJKCkge1xuICAgIHZhciB0ID0gdGhpcy5kYXRhLm1heENvdW50IC0gMixcbiAgICAgIGUgPSB0aGlzLmRhdGEubWF4Q291bnQ7XG4gICAgdGhpcy5wcm9ncmVzc0xhYmVsICYmICh0aGlzLnByb2dyZXNzTGFiZWwuc3RyaW5nID0gdCArIFwiL1wiICsgZSk7XG4gICAgdGhpcy5wcm9ncmVzc0JhciAmJiAodGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHQgLyBlKTtcbiAgICB2YXIgYSA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUodGhpcy5kYXRhLnJlc05hbWUpLFxuICAgICAgciA9IGEucGF0aCxcbiAgICAgIG4gPSBhLmJ1bmRsZU5hbWUsXG4gICAgICBvID0gYS5mcm9tQXRsYXM7XG4gICAgQmFzZVNwcml0ZS5yZWZyZXNoV2l0aE5vZGUodGhpcy5pY29uU3ByaXRlLm5vZGUsIHIsIG8sIGZhbHNlLCBuKTtcbiAgfVxuICBhc3luYyBwbGF5Q29tcGxldGVBbmltYXRpb24oKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgYXdhaXQgdGhpcy5wbGF5U2xpZGVEb3duQW5pbWF0aW9uKCk7XG4gICAgYXdhaXQgdGhpcy53YWl0KHRoaXMuV0FJVF9BRlRFUl9TSE9XKTtcbiAgICBhd2FpdCB0aGlzLnBsYXlQcm9ncmVzc0FuaW1hdGlvbigpO1xuICAgIGNvbnNvbGUudGltZShcInBsYXlTcGluZURvbmVBbmltYXRpb25cIik7XG4gICAgYXdhaXQgdGhpcy5wbGF5U3BpbmVEb25lQW5pbWF0aW9uKCk7XG4gICAgY29uc29sZS50aW1lRW5kKFwicGxheVNwaW5lRG9uZUFuaW1hdGlvblwiKTtcbiAgICBhd2FpdCB0aGlzLndhaXQodGhpcy5XQUlUX0FGVEVSX0NPTVBMRVRFKTtcbiAgICBhd2FpdCB0aGlzLnBsYXlIaWRlQW5pbWF0aW9uKCk7XG4gICAgbnVsbCA9PT0gKHQgPSB0aGlzLmRlbGVnYXRlKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5jbG9zZSgpO1xuICAgIHJldHVybjtcbiAgfVxuICBwbGF5U2xpZGVEb3duQW5pbWF0aW9uKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBhID0gY2MudHdlZW4odC5jb250ZW50Tm9kZSkudG8odC5TSE9XX01PVkVfRFVSQVRJT04sIHtcbiAgICAgICAgeTogdC5vcmlDb250ZW50WSAtIHQuQk9VTkNFX09GRlNFVCxcbiAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogY2MuZWFzaW5nLnF1YWRJbk91dFxuICAgICAgfSkudG8odC5TSE9XX09QQUNJVFlfRFVSQVRJT04gLSB0LlNIT1dfTU9WRV9EVVJBVElPTiwge1xuICAgICAgICB5OiB0Lm9yaUNvbnRlbnRZXG4gICAgICB9KS5jYWxsKGUpLnN0YXJ0KCk7XG4gICAgICB0LmFuaW1Ud2VlbnMucHVzaChhKTtcbiAgICB9KTtcbiAgfVxuICBwbGF5UHJvZ3Jlc3NBbmltYXRpb24oKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGEgPSB0LmRhdGEubWF4Q291bnQsXG4gICAgICAgIHIgPSB7XG4gICAgICAgICAgdmFsdWU6IGEgLSAyXG4gICAgICAgIH0sXG4gICAgICAgIG4gPSBjYy50d2VlbihyKS50bygyICogdC5QUk9HUkVTU19TRUdNRU5UX0RVUkFUSU9OLCB7XG4gICAgICAgICAgdmFsdWU6IGFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGVhc2luZzogXCJsaW5lYXJcIixcbiAgICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKGUsIHIsIG4sIG8pIHtcbiAgICAgICAgICAgIGlmIChjYy5pc1ZhbGlkKHQucHJvZ3Jlc3NCYXIpICYmIGNjLmlzVmFsaWQodC5wcm9ncmVzc0xhYmVsKSkge1xuICAgICAgICAgICAgICB2YXIgaSA9IGUgKyAociAtIGUpICogbztcbiAgICAgICAgICAgICAgdC5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IGkgLyBhO1xuICAgICAgICAgICAgICB0LnByb2dyZXNzTGFiZWwuc3RyaW5nID0gTWF0aC5mbG9vcihpKSArIFwiL1wiICsgYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLmNhbGwoZSkuc3RhcnQoKTtcbiAgICAgIHQuYW5pbVR3ZWVucy5wdXNoKG4uc3RhcnQoKSk7XG4gICAgfSk7XG4gIH1cbiAgcGxheVNwaW5lRG9uZUFuaW1hdGlvbigpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgYSA9IEJhc2VTcGluZS5jcmVhdGUoXCJzcGluZS9yYW5rX3Byb2diYXJcIiwgXCJpbl8wMVwiLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlKCk7XG4gICAgICB9LCBmYWxzZSwgZ2V0QnVuZGxlTmFtZSgpKTtcbiAgICAgIGEubm9kZS5wYXJlbnQgPSB0LmNvbnRlbnROb2RlO1xuICAgICAgYS5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgfSk7XG4gIH1cbiAgcGxheUhpZGVBbmltYXRpb24oKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGEgPSBjYy50d2Vlbih0LmNvbnRlbnROb2RlKS50byh0LlNIT1dfTU9WRV9EVVJBVElPTiwge1xuICAgICAgICB5OiB0Lm9yaUNvbnRlbnRZIC0gdC5CT1VOQ0VfT0ZGU0VUXG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJzaW5lT3V0XCJcbiAgICAgIH0pLnRvKHQuQk9VTkNFX0RVUkFUSU9OLCB7XG4gICAgICAgIHk6IHQub3JpQ29udGVudFkgKyB0LkJBTk5FUl9TTElERV9PRkZTRVRcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInNpbmVPdXRcIlxuICAgICAgfSkuY2FsbChlKS5zdGFydCgpO1xuICAgICAgdC5hbmltVHdlZW5zLnB1c2goYSk7XG4gICAgfSk7XG4gIH1cbiAgd2FpdCh0KSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSkge1xuICAgICAgdmFyIHIgPSBjYy50d2VlbihlLm5vZGUpLmRlbGF5KHQpLmNhbGwoYSkuc3RhcnQoKTtcbiAgICAgIGUuYW5pbVR3ZWVucy5wdXNoKHIpO1xuICAgIH0pO1xuICB9XG4gIHN0b3BBbGxBbmltYXRpb25zKCkge1xuICAgIHRoaXMuYW5pbVR3ZWVucy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5zdG9wKCk7XG4gICAgfSk7XG4gICAgdGhpcy5hbmltVHdlZW5zID0gW107XG4gIH1cbn0iXX0=