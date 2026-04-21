
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_ratingDialog/Scripts/UIRatingDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c339qLLxtOPJ3bn8nfY367', 'UIRatingDialog');
// subpackages/l_ratingDialog/Scripts/UIRatingDialog.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.UIRatingDialog = void 0;
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var UIView_1 = require("../../../Scripts/framework/ui/UIView");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var RatingDialogTrait_1 = require("./RatingDialogTrait");
var DFeedback_1 = require("../../../Scripts/DFeedback");
var CommonUtils_1 = require("../../../Scripts/framework/utils/CommonUtils");
var UIRatingDialog = /** @class */ (function (_super) {
    __extends(UIRatingDialog, _super);
    function UIRatingDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dialogContent = null;
        _this.starContainer = null;
        _this.submitBtn = null;
        _this.submitBtnGray = null;
        _this.closeBtn = null;
        _this.feedbackContainer = null;
        _this.isFeedbackState = false;
        _this._starsAnimNodes = [];
        _this._selectedStars = 0;
        _this._banClickStarBtn = false;
        return _this;
    }
    UIRatingDialog.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUI();
        this.initEvents();
        this.playShowAnimation(500);
        DFeedback_1.DotFeedback.dotPopupShow();
    };
    UIRatingDialog.prototype.initUI = function () {
        if (this.checkRootNodeLoaded()) {
            this.dialogContent = this.node.getChildByName("content");
            if (cc.isValid(this.dialogContent)) {
                this.starContainer = this.dialogContent.getChildByName("rateNode");
                this.submitBtn = this.dialogContent.getChildByName("btn_submit");
                this.submitBtnGray = this.dialogContent.getChildByName("btn_submit_gray");
                this.closeBtn = this.dialogContent.getChildByName("btn_close");
                this.feedbackContainer = this.dialogContent.getChildByName("feedback_node");
                if (this.starContainer) {
                    this.starContainer.active = true;
                    var t = this.starContainer.getChildByName("starAnim");
                    cc.isValid(t) && (this._starsAnimNodes = t.children);
                }
                this._banClickStarBtn = true;
                this.setSubmitBtnEnabled(false);
                this.setCloseBtnEnabled(false);
                if (this.feedbackContainer) {
                    this.feedbackContainer.active = false;
                    this.feedbackContainer.opacity = 0;
                    var e = this.feedbackContainer.getComponent(cc.EditBox);
                    if (e) {
                        e.placeholder = "Tell us what can be better";
                        e.string = "";
                    }
                }
            }
        }
    };
    UIRatingDialog.prototype.setSubmitBtnEnabled = function (t) {
        var e;
        if (this.checkRootNodeLoaded() && this.submitBtn && this.submitBtnGray) {
            this.submitBtn.active = t;
            this.submitBtnGray.active = !t;
            if (t) {
                var o = this.submitBtn.getChildByName("bg");
                if (!cc.isValid(o))
                    return;
                var i = null === (e = o.getChildByName("btn_text")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
                if (i) {
                    var a = this.getHighRatingStarIndex();
                    if (this._selectedStars < a && !this.isFeedbackState) {
                        I18NStrings_1.default.setText(i.node, "More Comments", "Common_Evaluate_Button_ToTease");
                    }
                    else {
                        I18NStrings_1.default.setText(i.node, "Submit", "Common_Evaluate_Button_Send");
                    }
                }
            }
        }
    };
    UIRatingDialog.prototype.setCloseBtnEnabled = function (t) {
        if (this.checkRootNodeLoaded() && this.closeBtn) {
            var e = this.closeBtn.getComponent(cc.Button);
            e && (e.interactable = t);
        }
    };
    UIRatingDialog.prototype.initEvents = function () {
        var t = this;
        if (this.checkRootNodeLoaded()) {
            this.OnButtonClick(this.submitBtn, this.onSubmitBtnClick.bind(this));
            this.OnButtonClick(this.closeBtn, this.onCloseBtnClick.bind(this));
            var e = this.starContainer.getChildByName("starBg");
            cc.isValid(e) && e.children.forEach(function (e, o) {
                e && t.OnButtonClick(e, t.onStarClick.bind(t, o + 1));
            });
            if (this.feedbackContainer) {
                var o = new cc.Component.EventHandler();
                o.target = this.node;
                o.component = "UIRatingDialog";
                o.handler = "onFeedbackInputChange";
                this.feedbackContainer.getComponent(cc.EditBox).textChanged.push(o);
            }
            RatingDialogTrait_1.default.getInstance().isSlideRatingEnabled() && this.createTouchNode();
        }
    };
    UIRatingDialog.prototype.onStarClick = function (t) {
        if (!this._banClickStarBtn) {
            this._selectedStars = t;
            this.updateStarsDisplay(t);
            this.setSubmitBtnEnabled(true);
        }
    };
    UIRatingDialog.prototype.updateStarsDisplay = function (t) {
        this.checkRootNodeLoaded() && this._starsAnimNodes && 0 !== this._starsAnimNodes.length && this._starsAnimNodes.forEach(function (e, o) {
            if (cc.isValid(e)) {
                var i = e.getComponent(sp.Skeleton);
                if (o < t) {
                    if (255 == e.opacity && "star_out" !== i.animation)
                        return;
                    e.opacity = 255;
                    GameUtils_1.default.playSpine(i, "star_in", false);
                }
                else {
                    if (0 == e.opacity)
                        return;
                    if ("star_out" == i.animation)
                        return;
                    GameUtils_1.default.playSpine(i, "star_out", false, function () {
                        e.opacity = 0;
                    }, 1.5);
                }
            }
        });
    };
    UIRatingDialog.prototype.playStarHintAnimation = function () {
        var t = this;
        if (this.checkRootNodeLoaded() && this._starsAnimNodes && 0 !== this._starsAnimNodes.length) {
            for (var e = function e(t) {
                var e = o._starsAnimNodes[t], i = t;
                cc.tween(e).delay(0.08 * i).call(function () {
                    var t = e.getComponent(sp.Skeleton);
                    GameUtils_1.default.playSpine(t, "star_in", false);
                }).start();
                var a = 0.08 * (10 - i);
                cc.tween(e).delay(a).call(function () {
                    var t = e.getComponent(sp.Skeleton);
                    GameUtils_1.default.playSpine(t, "star_out", false, function () {
                        e.opacity = 0;
                    });
                }).start();
            }, o = this, i = 0; i < this._starsAnimNodes.length; i++)
                e(i);
            cc.tween(this.node).delay(0.8).call(function () {
                t._banClickStarBtn = false;
                t.setCloseBtnEnabled(true);
            }).start();
        }
    };
    UIRatingDialog.prototype.getHighRatingStarIndex = function () {
        return 4;
    };
    UIRatingDialog.prototype.onSubmitBtnClick = function () {
        if (0 !== this._selectedStars) {
            var t = this.getHighRatingStarIndex();
            if (this._selectedStars >= t) {
                this.handleHighRating();
            }
            else {
                if (this.getFeedbackInputText().length > 0 && cc.isValid(this.feedbackContainer) && this.feedbackContainer.active) {
                    this.onFeedbackSendBtnClick();
                }
                else {
                    this.handleLowRating();
                }
            }
        }
    };
    UIRatingDialog.prototype.onFeedbackInputChange = function () {
        this.checkRootNodeLoaded() && this.feedbackContainer && (this.getFeedbackInputText().length > 0 ? this.setSubmitBtnEnabled(true) : this.setSubmitBtnEnabled(false));
    };
    UIRatingDialog.prototype.handleHighRating = function () {
        DFeedback_1.DotFeedback.dot(this._selectedStars, "");
        RatingDialogTrait_1.default.getInstance().onUserRating(this._selectedStars);
        this.closeDialog();
    };
    UIRatingDialog.prototype.handleLowRating = function () {
        this._banClickStarBtn = true;
        this.isFeedbackState = true;
        this.setSubmitBtnEnabled(false);
        this.showFeedbackInput();
    };
    UIRatingDialog.prototype.showFeedbackInput = function () {
        if (this.feedbackContainer) {
            this.feedbackContainer.active = true;
            this.feedbackContainer.opacity = 0;
            this.feedbackContainer.scaleY = 0;
            this.showStaticStarCount(this._selectedStars);
            cc.tween(this.feedbackContainer).to(0.3, {
                scaleY: 1,
                opacity: 255
            }, {
                easing: "backOut"
            }).start();
            this.starContainer && (this.starContainer.active = false);
        }
    };
    UIRatingDialog.prototype.showStaticStarCount = function (t) {
        var e;
        if (this.checkRootNodeLoaded()) {
            var o = this.feedbackContainer.getChildByName("stars");
            if (cc.isValid(o)) {
                var i = null === (e = o.getChildByName("starAnim")) || void 0 === e ? void 0 : e.children;
                i && 0 !== i.length && i.forEach(function (e, o) {
                    if (o < t) {
                        e.opacity = 255;
                        e.active = true;
                        var i = e.getComponent(sp.Skeleton);
                        GameUtils_1.default.playSpine(i, "star_idle", false);
                    }
                    else {
                        e.opacity = 0;
                        e.active = false;
                    }
                });
            }
        }
    };
    UIRatingDialog.prototype.onFeedbackSendBtnClick = function () {
        if (this.feedbackContainer) {
            var t = this.feedbackContainer.getComponent(cc.EditBox).string.trim();
            if (0 !== t.length) {
                DFeedback_1.DotFeedback.dot(this._selectedStars, t);
                RatingDialogTrait_1.default.getInstance().onUserRating(this._selectedStars);
                this.sendFeedbackToServer(t);
                this.closeDialog();
            }
        }
    };
    UIRatingDialog.prototype.getFeedbackInputText = function () {
        return cc.isValid(this.feedbackContainer) && cc.isValid(this.feedbackContainer.getComponent(cc.EditBox)) ? this.feedbackContainer.getComponent(cc.EditBox).string.trim() : "";
    };
    UIRatingDialog.prototype.sendFeedbackToServer = function (t) {
        var e = JSON.stringify({
            content: t
        });
        mj.sdk.callOpenFeedback(e);
    };
    UIRatingDialog.prototype.onCloseBtnClick = function () {
        RatingDialogTrait_1.default.getInstance().onUserClose();
        this.closeDialog();
    };
    UIRatingDialog.prototype.playShowAnimation = function (t) {
        var e = this;
        if (this.checkRootNodeLoaded() && this.dialogContent) {
            this.node.active = false;
            this.dialogContent.scale = 0.8;
            setTimeout(function () {
                if (e.checkRootNodeLoaded()) {
                    e.node.active = true;
                    var t = CommonUtils_1.createSingleColorScreenNode();
                    t.zIndex = -1;
                    t.parent = e.node;
                    t.name = "bg";
                    t.opacity = 0;
                    cc.tween(t).to(0.16, {
                        opacity: 150
                    }).start();
                    cc.tween(e.dialogContent).to(0.1, {
                        scale: 1
                    }).call(function () {
                        e.playStarHintAnimation();
                    }).start();
                }
            }, t);
        }
    };
    UIRatingDialog.prototype.playCloseAnimation = function (t) {
        var e = this.dialogContent;
        if (e) {
            cc.tween(e).to(0.15, {
                scale: 0.8,
                opacity: 0
            }).call(function () {
                t();
            }).start();
        }
        else {
            t();
        }
    };
    UIRatingDialog.prototype.closeDialog = function () {
        var t = this;
        this.playCloseAnimation(function () {
            t.delegate.close();
            RatingDialogTrait_1.default.getInstance().callNextCallback();
        });
    };
    UIRatingDialog.prototype.onDestroy = function () {
        var e = this;
        _super.prototype.onDestroy.call(this);
        DFeedback_1.DotFeedback.dotPopupClose();
        this.submitBtn && this.submitBtn.off(cc.Node.EventType.TOUCH_END, this.onSubmitBtnClick, this);
        this._starsAnimNodes.forEach(function (t) {
            t && t.targetOff(e);
        });
    };
    UIRatingDialog.prototype.checkRootNodeLoaded = function () {
        return !!cc.isValid(this.node);
    };
    UIRatingDialog.prototype.createTouchNode = function () {
        var t = new cc.Node();
        t.name = "touchNode";
        t.parent = this.starContainer;
        t.setPosition(cc.v3(0, 0, 0));
        t.width = 700;
        t.height = 150;
        t.on(cc.Node.EventType.TOUCH_START, this.onTouchNodeTouchStart.bind(this), this);
        t.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchNodeTouchMove.bind(this), this);
    };
    UIRatingDialog.prototype.onTouchNodeTouchStart = function (t) {
        if (!this._banClickStarBtn) {
            var e = this.getStarIndexFromTouch(t);
            e > 0 && this.updateStarSelection(e);
        }
    };
    UIRatingDialog.prototype.onTouchNodeTouchMove = function (t) {
        if (!this._banClickStarBtn) {
            var e = this.getStarIndexFromTouch(t);
            e > 0 && this._selectedStars !== e && this.updateStarSelection(e);
        }
    };
    UIRatingDialog.prototype.updateStarSelection = function (t) {
        this._selectedStars = t;
        this.updateStarsDisplay(t);
        this.setSubmitBtnEnabled(true);
    };
    UIRatingDialog.prototype.getStarIndexFromTouch = function (t) {
        if (!this._starsAnimNodes || 0 === this._starsAnimNodes.length)
            return 0;
        var e = t.touch.getLocation(), o = this.starContainer.getChildByName("starAnim");
        if (!cc.isValid(o))
            return 0;
        var i = o.convertToNodeSpaceAR(e), a = this._starsAnimNodes[0], n = this._starsAnimNodes[this._starsAnimNodes.length - 1];
        if (!cc.isValid(a) || !cc.isValid(n))
            return 0;
        var r = a.x, s = n.x - r, l = i.x - r;
        if (l < 0.1 * -s)
            return 0;
        if (l < 0)
            return 1;
        if (l > s + 0.1 * s)
            return 0;
        if (l > s)
            return this._starsAnimNodes.length;
        var c = s / (this._starsAnimNodes.length - 1), h = Math.round(l / c);
        return Math.max(1, Math.min(this._starsAnimNodes.length, h + 1));
    };
    UIRatingDialog.prefabUrl = "prefabs/ui/ratingDialog/UIRatingDialog";
    __decorate([
        mj.traitEvent("RatingDlg_subEnable")
    ], UIRatingDialog.prototype, "setSubmitBtnEnabled", null);
    __decorate([
        mj.traitEvent("RatingDlg_getHighStar")
    ], UIRatingDialog.prototype, "getHighRatingStarIndex", null);
    UIRatingDialog = __decorate([
        mj.class
    ], UIRatingDialog);
    return UIRatingDialog;
}(UIView_1.default));
exports.UIRatingDialog = UIRatingDialog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhdGluZ0RpYWxvZy9TY3JpcHRzL1VJUmF0aW5nRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQXVFO0FBQ3ZFLCtEQUEwRDtBQUMxRCwyRUFBc0U7QUFDdEUseURBQW9EO0FBQ3BELHdEQUF5RDtBQUN6RCw0RUFBMkY7QUFFM0Y7SUFBb0Msa0NBQU07SUFBMUM7UUFBQSxxRUFrVkM7UUFqVkMsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLHVCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixxQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixxQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixvQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7O0lBd1UzQixDQUFDO0lBdFVDLCtCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsdUJBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0QsK0JBQU0sR0FBTjtRQUNFLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6RCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFB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O1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFDM0MsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBdFVNLHdCQUFTLEdBQUcsd0NBQXdDLENBQUM7SUFzQzVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzs2REFvQnBDO0lBNEVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztnRUFHdEM7SUFsSlUsY0FBYztRQUQxQixFQUFFLENBQUMsS0FBSztPQUNJLGNBQWMsQ0FrVjFCO0lBQUQscUJBQUM7Q0FsVkQsQUFrVkMsQ0FsVm1DLGdCQUFNLEdBa1Z6QztBQWxWWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgVUlWaWV3IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3VpL1VJVmlldyc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgUmF0aW5nRGlhbG9nVHJhaXQgZnJvbSAnLi9SYXRpbmdEaWFsb2dUcmFpdCc7XG5pbXBvcnQgeyBEb3RGZWVkYmFjayB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvREZlZWRiYWNrJztcbmltcG9ydCB7IGNyZWF0ZVNpbmdsZUNvbG9yU2NyZWVuTm9kZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3V0aWxzL0NvbW1vblV0aWxzJztcbkBtai5jbGFzc1xuZXhwb3J0IGNsYXNzIFVJUmF0aW5nRGlhbG9nIGV4dGVuZHMgVUlWaWV3IHtcbiAgZGlhbG9nQ29udGVudCA9IG51bGw7XG4gIHN0YXJDb250YWluZXIgPSBudWxsO1xuICBzdWJtaXRCdG4gPSBudWxsO1xuICBzdWJtaXRCdG5HcmF5ID0gbnVsbDtcbiAgY2xvc2VCdG4gPSBudWxsO1xuICBmZWVkYmFja0NvbnRhaW5lciA9IG51bGw7XG4gIGlzRmVlZGJhY2tTdGF0ZSA9IGZhbHNlO1xuICBfc3RhcnNBbmltTm9kZXMgPSBbXTtcbiAgX3NlbGVjdGVkU3RhcnMgPSAwO1xuICBfYmFuQ2xpY2tTdGFyQnRuID0gZmFsc2U7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvdWkvcmF0aW5nRGlhbG9nL1VJUmF0aW5nRGlhbG9nXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmluaXRVSSgpO1xuICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIHRoaXMucGxheVNob3dBbmltYXRpb24oNTAwKTtcbiAgICBEb3RGZWVkYmFjay5kb3RQb3B1cFNob3coKTtcbiAgfVxuICBpbml0VUkoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tSb290Tm9kZUxvYWRlZCgpKSB7XG4gICAgICB0aGlzLmRpYWxvZ0NvbnRlbnQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5kaWFsb2dDb250ZW50KSkge1xuICAgICAgICB0aGlzLnN0YXJDb250YWluZXIgPSB0aGlzLmRpYWxvZ0NvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJyYXRlTm9kZVwiKTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdG4gPSB0aGlzLmRpYWxvZ0NvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fc3VibWl0XCIpO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ0bkdyYXkgPSB0aGlzLmRpYWxvZ0NvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fc3VibWl0X2dyYXlcIik7XG4gICAgICAgIHRoaXMuY2xvc2VCdG4gPSB0aGlzLmRpYWxvZ0NvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fY2xvc2VcIik7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tDb250YWluZXIgPSB0aGlzLmRpYWxvZ0NvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJmZWVkYmFja19ub2RlXCIpO1xuICAgICAgICBpZiAodGhpcy5zdGFyQ29udGFpbmVyKSB7XG4gICAgICAgICAgdGhpcy5zdGFyQ29udGFpbmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdmFyIHQgPSB0aGlzLnN0YXJDb250YWluZXIuZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyQW5pbVwiKTtcbiAgICAgICAgICBjYy5pc1ZhbGlkKHQpICYmICh0aGlzLl9zdGFyc0FuaW1Ob2RlcyA9IHQuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2JhbkNsaWNrU3RhckJ0biA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0U3VibWl0QnRuRW5hYmxlZChmYWxzZSk7XG4gICAgICAgIHRoaXMuc2V0Q2xvc2VCdG5FbmFibGVkKGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMuZmVlZGJhY2tDb250YWluZXIpIHtcbiAgICAgICAgICB0aGlzLmZlZWRiYWNrQ29udGFpbmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZmVlZGJhY2tDb250YWluZXIub3BhY2l0eSA9IDA7XG4gICAgICAgICAgdmFyIGUgPSB0aGlzLmZlZWRiYWNrQ29udGFpbmVyLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcbiAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgZS5wbGFjZWhvbGRlciA9IFwiVGVsbCB1cyB3aGF0IGNhbiBiZSBiZXR0ZXJcIjtcbiAgICAgICAgICAgIGUuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYXRpbmdEbGdfc3ViRW5hYmxlXCIpXG4gIHNldFN1Ym1pdEJ0bkVuYWJsZWQodCkge1xuICAgIHZhciBlO1xuICAgIGlmICh0aGlzLmNoZWNrUm9vdE5vZGVMb2FkZWQoKSAmJiB0aGlzLnN1Ym1pdEJ0biAmJiB0aGlzLnN1Ym1pdEJ0bkdyYXkpIHtcbiAgICAgIHRoaXMuc3VibWl0QnRuLmFjdGl2ZSA9IHQ7XG4gICAgICB0aGlzLnN1Ym1pdEJ0bkdyYXkuYWN0aXZlID0gIXQ7XG4gICAgICBpZiAodCkge1xuICAgICAgICB2YXIgbyA9IHRoaXMuc3VibWl0QnRuLmdldENoaWxkQnlOYW1lKFwiYmdcIik7XG4gICAgICAgIGlmICghY2MuaXNWYWxpZChvKSkgcmV0dXJuO1xuICAgICAgICB2YXIgaSA9IG51bGwgPT09IChlID0gby5nZXRDaGlsZEJ5TmFtZShcImJ0bl90ZXh0XCIpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgdmFyIGEgPSB0aGlzLmdldEhpZ2hSYXRpbmdTdGFySW5kZXgoKTtcbiAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRTdGFycyA8IGEgJiYgIXRoaXMuaXNGZWVkYmFja1N0YXRlKSB7XG4gICAgICAgICAgICBJMThOU3RyaW5ncy5zZXRUZXh0KGkubm9kZSwgXCJNb3JlIENvbW1lbnRzXCIsIFwiQ29tbW9uX0V2YWx1YXRlX0J1dHRvbl9Ub1RlYXNlXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBJMThOU3RyaW5ncy5zZXRUZXh0KGkubm9kZSwgXCJTdWJtaXRcIiwgXCJDb21tb25fRXZhbHVhdGVfQnV0dG9uX1NlbmRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNldENsb3NlQnRuRW5hYmxlZCh0KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tSb290Tm9kZUxvYWRlZCgpICYmIHRoaXMuY2xvc2VCdG4pIHtcbiAgICAgIHZhciBlID0gdGhpcy5jbG9zZUJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgIGUgJiYgKGUuaW50ZXJhY3RhYmxlID0gdCk7XG4gICAgfVxuICB9XG4gIGluaXRFdmVudHMoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICh0aGlzLmNoZWNrUm9vdE5vZGVMb2FkZWQoKSkge1xuICAgICAgdGhpcy5PbkJ1dHRvbkNsaWNrKHRoaXMuc3VibWl0QnRuLCB0aGlzLm9uU3VibWl0QnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLk9uQnV0dG9uQ2xpY2sodGhpcy5jbG9zZUJ0biwgdGhpcy5vbkNsb3NlQnRuQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICB2YXIgZSA9IHRoaXMuc3RhckNvbnRhaW5lci5nZXRDaGlsZEJ5TmFtZShcInN0YXJCZ1wiKTtcbiAgICAgIGNjLmlzVmFsaWQoZSkgJiYgZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlLCBvKSB7XG4gICAgICAgIGUgJiYgdC5PbkJ1dHRvbkNsaWNrKGUsIHQub25TdGFyQ2xpY2suYmluZCh0LCBvICsgMSkpO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5mZWVkYmFja0NvbnRhaW5lcikge1xuICAgICAgICB2YXIgbyA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XG4gICAgICAgIG8udGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICBvLmNvbXBvbmVudCA9IFwiVUlSYXRpbmdEaWFsb2dcIjtcbiAgICAgICAgby5oYW5kbGVyID0gXCJvbkZlZWRiYWNrSW5wdXRDaGFuZ2VcIjtcbiAgICAgICAgdGhpcy5mZWVkYmFja0NvbnRhaW5lci5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkudGV4dENoYW5nZWQucHVzaChvKTtcbiAgICAgIH1cbiAgICAgIFJhdGluZ0RpYWxvZ1RyYWl0LmdldEluc3RhbmNlKCkuaXNTbGlkZVJhdGluZ0VuYWJsZWQoKSAmJiB0aGlzLmNyZWF0ZVRvdWNoTm9kZSgpO1xuICAgIH1cbiAgfVxuICBvblN0YXJDbGljayh0KSB7XG4gICAgaWYgKCF0aGlzLl9iYW5DbGlja1N0YXJCdG4pIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkU3RhcnMgPSB0O1xuICAgICAgdGhpcy51cGRhdGVTdGFyc0Rpc3BsYXkodCk7XG4gICAgICB0aGlzLnNldFN1Ym1pdEJ0bkVuYWJsZWQodHJ1ZSk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVN0YXJzRGlzcGxheSh0KSB7XG4gICAgdGhpcy5jaGVja1Jvb3ROb2RlTG9hZGVkKCkgJiYgdGhpcy5fc3RhcnNBbmltTm9kZXMgJiYgMCAhPT0gdGhpcy5fc3RhcnNBbmltTm9kZXMubGVuZ3RoICYmIHRoaXMuX3N0YXJzQW5pbU5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGUsIG8pIHtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKGUpKSB7XG4gICAgICAgIHZhciBpID0gZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICBpZiAobyA8IHQpIHtcbiAgICAgICAgICBpZiAoMjU1ID09IGUub3BhY2l0eSAmJiBcInN0YXJfb3V0XCIgIT09IGkuYW5pbWF0aW9uKSByZXR1cm47XG4gICAgICAgICAgZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUoaSwgXCJzdGFyX2luXCIsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoMCA9PSBlLm9wYWNpdHkpIHJldHVybjtcbiAgICAgICAgICBpZiAoXCJzdGFyX291dFwiID09IGkuYW5pbWF0aW9uKSByZXR1cm47XG4gICAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShpLCBcInN0YXJfb3V0XCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgIH0sIDEuNSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBwbGF5U3RhckhpbnRBbmltYXRpb24oKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIGlmICh0aGlzLmNoZWNrUm9vdE5vZGVMb2FkZWQoKSAmJiB0aGlzLl9zdGFyc0FuaW1Ob2RlcyAmJiAwICE9PSB0aGlzLl9zdGFyc0FuaW1Ob2Rlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGUgPSBmdW5jdGlvbiBlKHQpIHtcbiAgICAgICAgICB2YXIgZSA9IG8uX3N0YXJzQW5pbU5vZGVzW3RdLFxuICAgICAgICAgICAgaSA9IHQ7XG4gICAgICAgICAgY2MudHdlZW4oZSkuZGVsYXkoMC4wOCAqIGkpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHQgPSBlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKHQsIFwic3Rhcl9pblwiLCBmYWxzZSk7XG4gICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICB2YXIgYSA9IDAuMDggKiAoMTAgLSBpKTtcbiAgICAgICAgICBjYy50d2VlbihlKS5kZWxheShhKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ID0gZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZSh0LCBcInN0YXJfb3V0XCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9LCBvID0gdGhpcywgaSA9IDA7IGkgPCB0aGlzLl9zdGFyc0FuaW1Ob2Rlcy5sZW5ndGg7IGkrKykgZShpKTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMC44KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5fYmFuQ2xpY2tTdGFyQnRuID0gZmFsc2U7XG4gICAgICAgIHQuc2V0Q2xvc2VCdG5FbmFibGVkKHRydWUpO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSYXRpbmdEbGdfZ2V0SGlnaFN0YXJcIilcbiAgZ2V0SGlnaFJhdGluZ1N0YXJJbmRleCgpIHtcbiAgICByZXR1cm4gNDtcbiAgfVxuICBvblN1Ym1pdEJ0bkNsaWNrKCkge1xuICAgIGlmICgwICE9PSB0aGlzLl9zZWxlY3RlZFN0YXJzKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuZ2V0SGlnaFJhdGluZ1N0YXJJbmRleCgpO1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkU3RhcnMgPj0gdCkge1xuICAgICAgICB0aGlzLmhhbmRsZUhpZ2hSYXRpbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmdldEZlZWRiYWNrSW5wdXRUZXh0KCkubGVuZ3RoID4gMCAmJiBjYy5pc1ZhbGlkKHRoaXMuZmVlZGJhY2tDb250YWluZXIpICYmIHRoaXMuZmVlZGJhY2tDb250YWluZXIuYWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5vbkZlZWRiYWNrU2VuZEJ0bkNsaWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVMb3dSYXRpbmcoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkZlZWRiYWNrSW5wdXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5jaGVja1Jvb3ROb2RlTG9hZGVkKCkgJiYgdGhpcy5mZWVkYmFja0NvbnRhaW5lciAmJiAodGhpcy5nZXRGZWVkYmFja0lucHV0VGV4dCgpLmxlbmd0aCA+IDAgPyB0aGlzLnNldFN1Ym1pdEJ0bkVuYWJsZWQodHJ1ZSkgOiB0aGlzLnNldFN1Ym1pdEJ0bkVuYWJsZWQoZmFsc2UpKTtcbiAgfVxuICBoYW5kbGVIaWdoUmF0aW5nKCkge1xuICAgIERvdEZlZWRiYWNrLmRvdCh0aGlzLl9zZWxlY3RlZFN0YXJzLCBcIlwiKTtcbiAgICBSYXRpbmdEaWFsb2dUcmFpdC5nZXRJbnN0YW5jZSgpLm9uVXNlclJhdGluZyh0aGlzLl9zZWxlY3RlZFN0YXJzKTtcbiAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gIH1cbiAgaGFuZGxlTG93UmF0aW5nKCkge1xuICAgIHRoaXMuX2JhbkNsaWNrU3RhckJ0biA9IHRydWU7XG4gICAgdGhpcy5pc0ZlZWRiYWNrU3RhdGUgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3VibWl0QnRuRW5hYmxlZChmYWxzZSk7XG4gICAgdGhpcy5zaG93RmVlZGJhY2tJbnB1dCgpO1xuICB9XG4gIHNob3dGZWVkYmFja0lucHV0KCkge1xuICAgIGlmICh0aGlzLmZlZWRiYWNrQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLmZlZWRiYWNrQ29udGFpbmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmZlZWRiYWNrQ29udGFpbmVyLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5mZWVkYmFja0NvbnRhaW5lci5zY2FsZVkgPSAwO1xuICAgICAgdGhpcy5zaG93U3RhdGljU3RhckNvdW50KHRoaXMuX3NlbGVjdGVkU3RhcnMpO1xuICAgICAgY2MudHdlZW4odGhpcy5mZWVkYmFja0NvbnRhaW5lcikudG8oMC4zLCB7XG4gICAgICAgIHNjYWxlWTogMSxcbiAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICB9LCB7XG4gICAgICAgIGVhc2luZzogXCJiYWNrT3V0XCJcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB0aGlzLnN0YXJDb250YWluZXIgJiYgKHRoaXMuc3RhckNvbnRhaW5lci5hY3RpdmUgPSBmYWxzZSk7XG4gICAgfVxuICB9XG4gIHNob3dTdGF0aWNTdGFyQ291bnQodCkge1xuICAgIHZhciBlO1xuICAgIGlmICh0aGlzLmNoZWNrUm9vdE5vZGVMb2FkZWQoKSkge1xuICAgICAgdmFyIG8gPSB0aGlzLmZlZWRiYWNrQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKFwic3RhcnNcIik7XG4gICAgICBpZiAoY2MuaXNWYWxpZChvKSkge1xuICAgICAgICB2YXIgaSA9IG51bGwgPT09IChlID0gby5nZXRDaGlsZEJ5TmFtZShcInN0YXJBbmltXCIpKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNoaWxkcmVuO1xuICAgICAgICBpICYmIDAgIT09IGkubGVuZ3RoICYmIGkuZm9yRWFjaChmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICAgIGlmIChvIDwgdCkge1xuICAgICAgICAgICAgZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGkgPSBlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGksIFwic3Rhcl9pZGxlXCIsIGZhbHNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25GZWVkYmFja1NlbmRCdG5DbGljaygpIHtcbiAgICBpZiAodGhpcy5mZWVkYmFja0NvbnRhaW5lcikge1xuICAgICAgdmFyIHQgPSB0aGlzLmZlZWRiYWNrQ29udGFpbmVyLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmcudHJpbSgpO1xuICAgICAgaWYgKDAgIT09IHQubGVuZ3RoKSB7XG4gICAgICAgIERvdEZlZWRiYWNrLmRvdCh0aGlzLl9zZWxlY3RlZFN0YXJzLCB0KTtcbiAgICAgICAgUmF0aW5nRGlhbG9nVHJhaXQuZ2V0SW5zdGFuY2UoKS5vblVzZXJSYXRpbmcodGhpcy5fc2VsZWN0ZWRTdGFycyk7XG4gICAgICAgIHRoaXMuc2VuZEZlZWRiYWNrVG9TZXJ2ZXIodCk7XG4gICAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0RmVlZGJhY2tJbnB1dFRleHQoKSB7XG4gICAgcmV0dXJuIGNjLmlzVmFsaWQodGhpcy5mZWVkYmFja0NvbnRhaW5lcikgJiYgY2MuaXNWYWxpZCh0aGlzLmZlZWRiYWNrQ29udGFpbmVyLmdldENvbXBvbmVudChjYy5FZGl0Qm94KSkgPyB0aGlzLmZlZWRiYWNrQ29udGFpbmVyLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmcudHJpbSgpIDogXCJcIjtcbiAgfVxuICBzZW5kRmVlZGJhY2tUb1NlcnZlcih0KSB7XG4gICAgdmFyIGUgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBjb250ZW50OiB0XG4gICAgfSk7XG4gICAgbWouc2RrLmNhbGxPcGVuRmVlZGJhY2soZSk7XG4gIH1cbiAgb25DbG9zZUJ0bkNsaWNrKCkge1xuICAgIFJhdGluZ0RpYWxvZ1RyYWl0LmdldEluc3RhbmNlKCkub25Vc2VyQ2xvc2UoKTtcbiAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gIH1cbiAgcGxheVNob3dBbmltYXRpb24odCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAodGhpcy5jaGVja1Jvb3ROb2RlTG9hZGVkKCkgJiYgdGhpcy5kaWFsb2dDb250ZW50KSB7XG4gICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmRpYWxvZ0NvbnRlbnQuc2NhbGUgPSAwLjg7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGUuY2hlY2tSb290Tm9kZUxvYWRlZCgpKSB7XG4gICAgICAgICAgZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdmFyIHQgPSBjcmVhdGVTaW5nbGVDb2xvclNjcmVlbk5vZGUoKTtcbiAgICAgICAgICB0LnpJbmRleCA9IC0xO1xuICAgICAgICAgIHQucGFyZW50ID0gZS5ub2RlO1xuICAgICAgICAgIHQubmFtZSA9IFwiYmdcIjtcbiAgICAgICAgICB0Lm9wYWNpdHkgPSAwO1xuICAgICAgICAgIGNjLnR3ZWVuKHQpLnRvKDAuMTYsIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE1MFxuICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgY2MudHdlZW4oZS5kaWFsb2dDb250ZW50KS50bygwLjEsIHtcbiAgICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlLnBsYXlTdGFySGludEFuaW1hdGlvbigpO1xuICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIHQpO1xuICAgIH1cbiAgfVxuICBwbGF5Q2xvc2VBbmltYXRpb24odCkge1xuICAgIHZhciBlID0gdGhpcy5kaWFsb2dDb250ZW50O1xuICAgIGlmIChlKSB7XG4gICAgICBjYy50d2VlbihlKS50bygwLjE1LCB7XG4gICAgICAgIHNjYWxlOiAwLjgsXG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICB0KCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIGNsb3NlRGlhbG9nKCkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICB0aGlzLnBsYXlDbG9zZUFuaW1hdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICB0LmRlbGVnYXRlLmNsb3NlKCk7XG4gICAgICBSYXRpbmdEaWFsb2dUcmFpdC5nZXRJbnN0YW5jZSgpLmNhbGxOZXh0Q2FsbGJhY2soKTtcbiAgICB9KTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHN1cGVyLm9uRGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIERvdEZlZWRiYWNrLmRvdFBvcHVwQ2xvc2UoKTtcbiAgICB0aGlzLnN1Ym1pdEJ0biAmJiB0aGlzLnN1Ym1pdEJ0bi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uU3VibWl0QnRuQ2xpY2ssIHRoaXMpO1xuICAgIHRoaXMuX3N0YXJzQW5pbU5vZGVzLmZvckVhY2goZnVuY3Rpb24gKHQpIHtcbiAgICAgIHQgJiYgdC50YXJnZXRPZmYoZSk7XG4gICAgfSk7XG4gIH1cbiAgY2hlY2tSb290Tm9kZUxvYWRlZCgpIHtcbiAgICByZXR1cm4gISFjYy5pc1ZhbGlkKHRoaXMubm9kZSk7XG4gIH1cbiAgY3JlYXRlVG91Y2hOb2RlKCkge1xuICAgIHZhciB0ID0gbmV3IGNjLk5vZGUoKTtcbiAgICB0Lm5hbWUgPSBcInRvdWNoTm9kZVwiO1xuICAgIHQucGFyZW50ID0gdGhpcy5zdGFyQ29udGFpbmVyO1xuICAgIHQuc2V0UG9zaXRpb24oY2MudjMoMCwgMCwgMCkpO1xuICAgIHQud2lkdGggPSA3MDA7XG4gICAgdC5oZWlnaHQgPSAxNTA7XG4gICAgdC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoTm9kZVRvdWNoU3RhcnQuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgdC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hOb2RlVG91Y2hNb3ZlLmJpbmQodGhpcyksIHRoaXMpO1xuICB9XG4gIG9uVG91Y2hOb2RlVG91Y2hTdGFydCh0KSB7XG4gICAgaWYgKCF0aGlzLl9iYW5DbGlja1N0YXJCdG4pIHtcbiAgICAgIHZhciBlID0gdGhpcy5nZXRTdGFySW5kZXhGcm9tVG91Y2godCk7XG4gICAgICBlID4gMCAmJiB0aGlzLnVwZGF0ZVN0YXJTZWxlY3Rpb24oZSk7XG4gICAgfVxuICB9XG4gIG9uVG91Y2hOb2RlVG91Y2hNb3ZlKHQpIHtcbiAgICBpZiAoIXRoaXMuX2JhbkNsaWNrU3RhckJ0bikge1xuICAgICAgdmFyIGUgPSB0aGlzLmdldFN0YXJJbmRleEZyb21Ub3VjaCh0KTtcbiAgICAgIGUgPiAwICYmIHRoaXMuX3NlbGVjdGVkU3RhcnMgIT09IGUgJiYgdGhpcy51cGRhdGVTdGFyU2VsZWN0aW9uKGUpO1xuICAgIH1cbiAgfVxuICB1cGRhdGVTdGFyU2VsZWN0aW9uKHQpIHtcbiAgICB0aGlzLl9zZWxlY3RlZFN0YXJzID0gdDtcbiAgICB0aGlzLnVwZGF0ZVN0YXJzRGlzcGxheSh0KTtcbiAgICB0aGlzLnNldFN1Ym1pdEJ0bkVuYWJsZWQodHJ1ZSk7XG4gIH1cbiAgZ2V0U3RhckluZGV4RnJvbVRvdWNoKHQpIHtcbiAgICBpZiAoIXRoaXMuX3N0YXJzQW5pbU5vZGVzIHx8IDAgPT09IHRoaXMuX3N0YXJzQW5pbU5vZGVzLmxlbmd0aCkgcmV0dXJuIDA7XG4gICAgdmFyIGUgPSB0LnRvdWNoLmdldExvY2F0aW9uKCksXG4gICAgICBvID0gdGhpcy5zdGFyQ29udGFpbmVyLmdldENoaWxkQnlOYW1lKFwic3RhckFuaW1cIik7XG4gICAgaWYgKCFjYy5pc1ZhbGlkKG8pKSByZXR1cm4gMDtcbiAgICB2YXIgaSA9IG8uY29udmVydFRvTm9kZVNwYWNlQVIoZSksXG4gICAgICBhID0gdGhpcy5fc3RhcnNBbmltTm9kZXNbMF0sXG4gICAgICBuID0gdGhpcy5fc3RhcnNBbmltTm9kZXNbdGhpcy5fc3RhcnNBbmltTm9kZXMubGVuZ3RoIC0gMV07XG4gICAgaWYgKCFjYy5pc1ZhbGlkKGEpIHx8ICFjYy5pc1ZhbGlkKG4pKSByZXR1cm4gMDtcbiAgICB2YXIgciA9IGEueCxcbiAgICAgIHMgPSBuLnggLSByLFxuICAgICAgbCA9IGkueCAtIHI7XG4gICAgaWYgKGwgPCAwLjEgKiAtcykgcmV0dXJuIDA7XG4gICAgaWYgKGwgPCAwKSByZXR1cm4gMTtcbiAgICBpZiAobCA+IHMgKyAwLjEgKiBzKSByZXR1cm4gMDtcbiAgICBpZiAobCA+IHMpIHJldHVybiB0aGlzLl9zdGFyc0FuaW1Ob2Rlcy5sZW5ndGg7XG4gICAgdmFyIGMgPSBzIC8gKHRoaXMuX3N0YXJzQW5pbU5vZGVzLmxlbmd0aCAtIDEpLFxuICAgICAgaCA9IE1hdGgucm91bmQobCAvIGMpO1xuICAgIHJldHVybiBNYXRoLm1heCgxLCBNYXRoLm1pbih0aGlzLl9zdGFyc0FuaW1Ob2Rlcy5sZW5ndGgsIGggKyAxKSk7XG4gIH1cbn0iXX0=