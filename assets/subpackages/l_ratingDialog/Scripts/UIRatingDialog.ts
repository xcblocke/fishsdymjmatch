import GameUtils from '../../../Scripts/core/simulator/util/GameUtils';
import UIView from '../../../Scripts/framework/ui/UIView';
import I18NStrings from '../../../Scripts/framework/data/I18NStrings';
import RatingDialogTrait from './RatingDialogTrait';
import { DotFeedback } from '../../../Scripts/DFeedback';
import { createSingleColorScreenNode } from '../../../Scripts/framework/utils/CommonUtils';
@mj.class
export class UIRatingDialog extends UIView {
  dialogContent = null;
  starContainer = null;
  submitBtn = null;
  submitBtnGray = null;
  closeBtn = null;
  feedbackContainer = null;
  isFeedbackState = false;
  _starsAnimNodes = [];
  _selectedStars = 0;
  _banClickStarBtn = false;
  static prefabUrl = "prefabs/ui/ratingDialog/UIRatingDialog";
  onLoad() {
    super.onLoad.call(this);
    this.initUI();
    this.initEvents();
    this.playShowAnimation(500);
    DotFeedback.dotPopupShow();
  }
  initUI() {
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
  }
  @mj.traitEvent("RatingDlg_subEnable")
  setSubmitBtnEnabled(t) {
    var e;
    if (this.checkRootNodeLoaded() && this.submitBtn && this.submitBtnGray) {
      this.submitBtn.active = t;
      this.submitBtnGray.active = !t;
      if (t) {
        var o = this.submitBtn.getChildByName("bg");
        if (!cc.isValid(o)) return;
        var i = null === (e = o.getChildByName("btn_text")) || void 0 === e ? void 0 : e.getComponent(cc.Label);
        if (i) {
          var a = this.getHighRatingStarIndex();
          if (this._selectedStars < a && !this.isFeedbackState) {
            I18NStrings.setText(i.node, "More Comments", "Common_Evaluate_Button_ToTease");
          } else {
            I18NStrings.setText(i.node, "Submit", "Common_Evaluate_Button_Send");
          }
        }
      }
    }
  }
  setCloseBtnEnabled(t) {
    if (this.checkRootNodeLoaded() && this.closeBtn) {
      var e = this.closeBtn.getComponent(cc.Button);
      e && (e.interactable = t);
    }
  }
  initEvents() {
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
      RatingDialogTrait.getInstance().isSlideRatingEnabled() && this.createTouchNode();
    }
  }
  onStarClick(t) {
    if (!this._banClickStarBtn) {
      this._selectedStars = t;
      this.updateStarsDisplay(t);
      this.setSubmitBtnEnabled(true);
    }
  }
  updateStarsDisplay(t) {
    this.checkRootNodeLoaded() && this._starsAnimNodes && 0 !== this._starsAnimNodes.length && this._starsAnimNodes.forEach(function (e, o) {
      if (cc.isValid(e)) {
        var i = e.getComponent(sp.Skeleton);
        if (o < t) {
          if (255 == e.opacity && "star_out" !== i.animation) return;
          e.opacity = 255;
          GameUtils.playSpine(i, "star_in", false);
        } else {
          if (0 == e.opacity) return;
          if ("star_out" == i.animation) return;
          GameUtils.playSpine(i, "star_out", false, function () {
            e.opacity = 0;
          }, 1.5);
        }
      }
    });
  }
  playStarHintAnimation() {
    var t = this;
    if (this.checkRootNodeLoaded() && this._starsAnimNodes && 0 !== this._starsAnimNodes.length) {
      for (var e = function e(t) {
          var e = o._starsAnimNodes[t],
            i = t;
          cc.tween(e).delay(0.08 * i).call(function () {
            var t = e.getComponent(sp.Skeleton);
            GameUtils.playSpine(t, "star_in", false);
          }).start();
          var a = 0.08 * (10 - i);
          cc.tween(e).delay(a).call(function () {
            var t = e.getComponent(sp.Skeleton);
            GameUtils.playSpine(t, "star_out", false, function () {
              e.opacity = 0;
            });
          }).start();
        }, o = this, i = 0; i < this._starsAnimNodes.length; i++) e(i);
      cc.tween(this.node).delay(0.8).call(function () {
        t._banClickStarBtn = false;
        t.setCloseBtnEnabled(true);
      }).start();
    }
  }
  @mj.traitEvent("RatingDlg_getHighStar")
  getHighRatingStarIndex() {
    return 4;
  }
  onSubmitBtnClick() {
    if (0 !== this._selectedStars) {
      var t = this.getHighRatingStarIndex();
      if (this._selectedStars >= t) {
        this.handleHighRating();
      } else {
        if (this.getFeedbackInputText().length > 0 && cc.isValid(this.feedbackContainer) && this.feedbackContainer.active) {
          this.onFeedbackSendBtnClick();
        } else {
          this.handleLowRating();
        }
      }
    }
  }
  onFeedbackInputChange() {
    this.checkRootNodeLoaded() && this.feedbackContainer && (this.getFeedbackInputText().length > 0 ? this.setSubmitBtnEnabled(true) : this.setSubmitBtnEnabled(false));
  }
  handleHighRating() {
    DotFeedback.dot(this._selectedStars, "");
    RatingDialogTrait.getInstance().onUserRating(this._selectedStars);
    this.closeDialog();
  }
  handleLowRating() {
    this._banClickStarBtn = true;
    this.isFeedbackState = true;
    this.setSubmitBtnEnabled(false);
    this.showFeedbackInput();
  }
  showFeedbackInput() {
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
  }
  showStaticStarCount(t) {
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
            GameUtils.playSpine(i, "star_idle", false);
          } else {
            e.opacity = 0;
            e.active = false;
          }
        });
      }
    }
  }
  onFeedbackSendBtnClick() {
    if (this.feedbackContainer) {
      var t = this.feedbackContainer.getComponent(cc.EditBox).string.trim();
      if (0 !== t.length) {
        DotFeedback.dot(this._selectedStars, t);
        RatingDialogTrait.getInstance().onUserRating(this._selectedStars);
        this.sendFeedbackToServer(t);
        this.closeDialog();
      }
    }
  }
  getFeedbackInputText() {
    return cc.isValid(this.feedbackContainer) && cc.isValid(this.feedbackContainer.getComponent(cc.EditBox)) ? this.feedbackContainer.getComponent(cc.EditBox).string.trim() : "";
  }
  sendFeedbackToServer(t) {
    var e = JSON.stringify({
      content: t
    });
    mj.sdk.callOpenFeedback(e);
  }
  onCloseBtnClick() {
    RatingDialogTrait.getInstance().onUserClose();
    this.closeDialog();
  }
  playShowAnimation(t) {
    var e = this;
    if (this.checkRootNodeLoaded() && this.dialogContent) {
      this.node.active = false;
      this.dialogContent.scale = 0.8;
      setTimeout(function () {
        if (e.checkRootNodeLoaded()) {
          e.node.active = true;
          var t = createSingleColorScreenNode();
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
  }
  playCloseAnimation(t) {
    var e = this.dialogContent;
    if (e) {
      cc.tween(e).to(0.15, {
        scale: 0.8,
        opacity: 0
      }).call(function () {
        t();
      }).start();
    } else {
      t();
    }
  }
  closeDialog() {
    var t = this;
    this.playCloseAnimation(function () {
      t.delegate.close();
      RatingDialogTrait.getInstance().callNextCallback();
    });
  }
  onDestroy() {
    var e = this;
    super.onDestroy.call(this);
    DotFeedback.dotPopupClose();
    this.submitBtn && this.submitBtn.off(cc.Node.EventType.TOUCH_END, this.onSubmitBtnClick, this);
    this._starsAnimNodes.forEach(function (t) {
      t && t.targetOff(e);
    });
  }
  checkRootNodeLoaded() {
    return !!cc.isValid(this.node);
  }
  createTouchNode() {
    var t = new cc.Node();
    t.name = "touchNode";
    t.parent = this.starContainer;
    t.setPosition(cc.v3(0, 0, 0));
    t.width = 700;
    t.height = 150;
    t.on(cc.Node.EventType.TOUCH_START, this.onTouchNodeTouchStart.bind(this), this);
    t.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchNodeTouchMove.bind(this), this);
  }
  onTouchNodeTouchStart(t) {
    if (!this._banClickStarBtn) {
      var e = this.getStarIndexFromTouch(t);
      e > 0 && this.updateStarSelection(e);
    }
  }
  onTouchNodeTouchMove(t) {
    if (!this._banClickStarBtn) {
      var e = this.getStarIndexFromTouch(t);
      e > 0 && this._selectedStars !== e && this.updateStarSelection(e);
    }
  }
  updateStarSelection(t) {
    this._selectedStars = t;
    this.updateStarsDisplay(t);
    this.setSubmitBtnEnabled(true);
  }
  getStarIndexFromTouch(t) {
    if (!this._starsAnimNodes || 0 === this._starsAnimNodes.length) return 0;
    var e = t.touch.getLocation(),
      o = this.starContainer.getChildByName("starAnim");
    if (!cc.isValid(o)) return 0;
    var i = o.convertToNodeSpaceAR(e),
      a = this._starsAnimNodes[0],
      n = this._starsAnimNodes[this._starsAnimNodes.length - 1];
    if (!cc.isValid(a) || !cc.isValid(n)) return 0;
    var r = a.x,
      s = n.x - r,
      l = i.x - r;
    if (l < 0.1 * -s) return 0;
    if (l < 0) return 1;
    if (l > s + 0.1 * s) return 0;
    if (l > s) return this._starsAnimNodes.length;
    var c = s / (this._starsAnimNodes.length - 1),
      h = Math.round(l / c);
    return Math.max(1, Math.min(this._starsAnimNodes.length, h + 1));
  }
}