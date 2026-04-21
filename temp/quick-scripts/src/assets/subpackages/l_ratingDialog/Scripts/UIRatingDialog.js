"use strict";
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