"use strict";
cc._RF.push(module, 'e5ee3NTbWhJroVvSDtXkS5K', 'TaskBannerView');
// subpackages/l_task/Scripts/view/TaskBannerView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NStrings_1 = require("../../../../Scripts/framework/data/I18NStrings");
var UIView_1 = require("../../../../Scripts/framework/ui/UIView");
var BaseSprite_1 = require("../../../../Scripts/gamePlay/base/ui/BaseSprite");
var TaskData_1 = require("../TaskData");
var TaskModel_1 = require("../model/TaskModel");
var GameUtils_1 = require("../../../../Scripts/core/simulator/util/GameUtils");
var GameTypeEnums_1 = require("../../../../Scripts/core/simulator/constant/GameTypeEnums");
var CardUtil_1 = require("../../../../Scripts/gamePlay/user/CardUtil");
var TaskBannerView = /** @class */ (function (_super) {
    __extends(TaskBannerView, _super);
    function TaskBannerView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.DEFAULT_SHOW_DURATION = 0.5;
        _this.DEFAULT_AUTO_HIDE_DELAY = 2000;
        _this.PROGRESS_ANIM_DURATION = 0.5;
        _this.DEFAULT_HIDE_DURATION = 0.3;
        _this.BANNER_SLIDE_OFFSET = 800;
        _this.contentNode = null;
        _this.iconSprite = null;
        _this.iconSpriteBg = null;
        _this.nodeTitleIcon = null;
        _this.nodeTitleNormal = null;
        _this.descLabelWithIcon = null;
        _this.descLabelNormal = null;
        _this.progressLabel = null;
        _this.progressBar = null;
        _this.spineDone = null;
        _this._data = null;
        _this._isAnimating = false;
        _this._animTween = null;
        _this._autoHideTimer = 0;
        _this._progressTween = null;
        _this._flowId = 0;
        _this._autoHideFlowId = 0;
        _this.oriContentY = 0;
        return _this;
    }
    TaskBannerView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initUI();
        this.resetContent();
    };
    TaskBannerView.prototype.initUI = function () {
        var t, e, a, o, i, r, n;
        this.contentNode = this.node.getChildByName("content");
        this.contentNode.getComponent(cc.Widget).updateAlignment();
        this.oriContentY = this.contentNode.y;
        this.iconSprite = null === (t = cc.find("content/node_title_icon/node_mj/mj", this.node)) || void 0 === t ? void 0 : t.getComponent(cc.Sprite);
        this.iconSpriteBg = null === (e = cc.find("content/node_title_icon/node_mj/mj_bg", this.node)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite);
        this.nodeTitleIcon = cc.find("content/node_title_icon", this.node);
        this.nodeTitleNormal = cc.find("content/node_title", this.node);
        this.descLabelWithIcon = null === (a = cc.find("content/node_title_icon/lb_title", this.node)) || void 0 === a ? void 0 : a.getComponent(cc.Label);
        this.descLabelNormal = null === (o = cc.find("content/node_title/lb_title", this.node)) || void 0 === o ? void 0 : o.getComponent(cc.Label);
        this.progressLabel = null === (i = cc.find("content/lb_progress", this.node)) || void 0 === i ? void 0 : i.getComponent(cc.Label);
        this.progressBar = null === (r = cc.find("content/progressBar", this.node)) || void 0 === r ? void 0 : r.getComponent(cc.ProgressBar);
        this.spineDone = null === (n = cc.find("content/spine_done", this.node)) || void 0 === n ? void 0 : n.getComponent(sp.Skeleton);
        this.spineDone && (this.spineDone.node.active = false);
    };
    TaskBannerView.prototype.resetContent = function () {
        this.contentNode.y = this.oriContentY + this.BANNER_SLIDE_OFFSET;
        this.contentNode.opacity = 0;
    };
    TaskBannerView.prototype.show = function (t, e, a) {
        if (t) {
            this._data = t;
            this.clearAutoHideTimer();
            this.updateUI();
            var o = null != e ? e : this.DEFAULT_SHOW_DURATION, i = null != a ? a : this.DEFAULT_AUTO_HIDE_DELAY;
            this.cancelFlow();
            var r = this._flowId;
            this.playShowAnimations(o, i, r);
        }
    };
    TaskBannerView.prototype.playShowAnimations = function (t, e, a) {
        var o = this;
        this.playSlideDownAnimation(t).then(function () {
            if (a === o._flowId)
                return o.playProgressAnimation(o.PROGRESS_ANIM_DURATION);
        }).then(function () {
            var t;
            if (a === o._flowId) {
                (null === (t = o._data) || void 0 === t ? void 0 : t.isCompleted) && o._data.currentProgress >= o._data.targetProgress && o.playSpineDoneAnimation();
                e > 0 && o.scheduleAutoHide(e, a);
            }
        }).catch(function () {
            o.delegate && o.delegate.close();
        });
    };
    TaskBannerView.prototype.hide = function () {
        this.clearAutoHideTimer();
        this.cancelFlow();
        var t = this._flowId;
        this.playHideAnimation(this.DEFAULT_HIDE_DURATION, t);
    };
    TaskBannerView.prototype.playHideAnimation = function (t, e) {
        var a = this;
        this.playSlideUpAnimation(t).then(function () {
            e === a._flowId && a.delegate && a.delegate.close();
        }).catch(function () {
            a.delegate && a.delegate.close();
        });
    };
    TaskBannerView.prototype.updateUI = function () {
        var t;
        if (this._data) {
            this.updateTitleNode();
            this.updateTaskDescription();
            var e = null !== (t = this._data.oldProgress) && void 0 !== t ? t : 0;
            this.progressLabel && (this.progressLabel.string = e + "/" + this._data.targetProgress);
            if (this.progressBar && this._data.targetProgress > 0) {
                var a = Math.min(e / this._data.targetProgress, 1);
                this.progressBar.progress = a;
            }
            this.spineDone && (this.spineDone.node.active = false);
            this.loadTaskIcon();
        }
    };
    TaskBannerView.prototype.updateTitleNode = function () {
        var t = this._data.taskType === TaskData_1.ETaskType.ClearMahjong;
        this.nodeTitleIcon && (this.nodeTitleIcon.active = t);
        this.nodeTitleNormal && (this.nodeTitleNormal.active = !t);
    };
    TaskBannerView.prototype.updateTaskDescription = function () {
        var t = this._data.taskDesc || "未知任务";
        if (this._data.taskType === TaskData_1.ETaskType.ClearMahjong) {
            this.descLabelWithIcon && I18NStrings_1.default.setText(this.descLabelWithIcon.node, "", t, [this._data.targetProgress]);
        }
        else {
            this.descLabelNormal && I18NStrings_1.default.setText(this.descLabelNormal.node, "", t, [this._data.targetProgress]);
        }
    };
    TaskBannerView.prototype.playSpineDoneAnimation = function () {
        var t = this;
        if (this.spineDone && cc.isValid(this.spineDone.node)) {
            this.spineDone.node.active = true;
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.TaskComplete);
            GameUtils_1.default.playSpine(this.spineDone, "in", false, function () {
                t.spineDone && cc.isValid(t.spineDone.node) && GameUtils_1.default.playSpine(t.spineDone, "init", true);
            });
        }
    };
    TaskBannerView.prototype.loadTaskIcon = function () {
        if (this.iconSprite && this.iconSpriteBg && this._data && this._data.taskType === TaskData_1.ETaskType.ClearMahjong && void 0 !== this._data.targetCardId) {
            var t = TaskModel_1.TaskModel.getInstance().getCardResNameByCardId(this._data.targetCardId);
            if (t) {
                var e = CardUtil_1.default.getAtlasPathAndBundleName(t), a = e.path, o = e.bundleName, i = e.fromAtlas;
                BaseSprite_1.default.refreshWithNode(this.iconSprite.node, a, i, false, o);
                var r = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_up"), n = r.path, s = r.bundleName, u = r.fromAtlas;
                BaseSprite_1.default.refreshWithNode(this.iconSpriteBg.node, n, u, false, s);
            }
        }
    };
    TaskBannerView.prototype.playSlideDownAnimation = function (t) {
        var e = this;
        return new Promise(function (a) {
            if (e._animTween) {
                e._animTween.stop();
                e._animTween = null;
            }
            e._isAnimating = true;
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.TaskBanner);
            e.resetContent();
            e._animTween = cc.tween(e.contentNode).to(t, {
                y: e.oriContentY,
                opacity: 255
            }, {
                easing: "sineInOut"
            }).call(function () {
                e._isAnimating = false;
                e._animTween = null;
                a();
            }).start();
        });
    };
    TaskBannerView.prototype.playSlideUpAnimation = function (t) {
        var e = this;
        return new Promise(function (a) {
            if (e._animTween) {
                e._animTween.stop();
                e._animTween = null;
            }
            e._isAnimating = true;
            var o = e.oriContentY + e.BANNER_SLIDE_OFFSET;
            e._animTween = cc.tween(e.contentNode).to(t, {
                y: o,
                opacity: 0
            }, {
                easing: "sineInOut"
            }).call(function () {
                e._isAnimating = false;
                e._animTween = null;
                a();
            }).start();
        });
    };
    TaskBannerView.prototype.playProgressAnimation = function (t) {
        var e = this;
        return new Promise(function (a) {
            var o;
            if (!e.progressBar || !e._data || e._data.targetProgress <= 0)
                a();
            else {
                var i = null !== (o = e._data.oldProgress) && void 0 !== o ? o : 0, r = e._data.currentProgress, n = e._data.targetProgress, s = Math.min(i / n, 1), l = Math.min(r / n, 1);
                if (s !== l) {
                    mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.WinCharge);
                    var c = {
                        value: s
                    };
                    if (e._progressTween) {
                        e._progressTween.stop();
                        e._progressTween = null;
                    }
                    e._progressTween = cc.tween(c).to(t, {
                        value: l
                    }, {
                        easing: "sineInOut",
                        progress: function (t, a, o, s) {
                            var l = t + (a - t) * s;
                            e.progressBar && cc.isValid(e.progressBar.node) && (e.progressBar.progress = l);
                            if (e.progressLabel && cc.isValid(e.progressLabel.node)) {
                                var c = Math.floor(i + (r - i) * s);
                                e.progressLabel.string = c + "/" + n;
                            }
                            return l;
                        }
                    }).call(function () {
                        e.progressBar && cc.isValid(e.progressBar.node) && (e.progressBar.progress = l);
                        e.progressLabel && cc.isValid(e.progressLabel.node) && (e.progressLabel.string = r + "/" + n);
                        e._progressTween = null;
                        a();
                    }).start();
                }
                else
                    a();
            }
        });
    };
    TaskBannerView.prototype.stopAnimation = function () {
        if (this._animTween) {
            this._animTween.stop();
            this._animTween = null;
        }
        if (this._progressTween) {
            this._progressTween.stop();
            this._progressTween = null;
        }
        this._isAnimating = false;
    };
    TaskBannerView.prototype.cancelFlow = function () {
        this._flowId++;
        this.stopAnimation();
        this.clearAutoHideTimer();
    };
    TaskBannerView.prototype.scheduleAutoHide = function (t, e) {
        var a = this;
        this.clearAutoHideTimer();
        this._autoHideFlowId = e;
        this._autoHideTimer = setTimeout(function () {
            if (e === a._flowId && e === a._autoHideFlowId) {
                a._autoHideTimer = 0;
                a.hide();
            }
        }, t);
    };
    TaskBannerView.prototype.clearAutoHideTimer = function () {
        if (this._autoHideTimer > 0) {
            clearTimeout(this._autoHideTimer);
            this._autoHideTimer = 0;
        }
        this._autoHideFlowId = 0;
    };
    TaskBannerView.prototype.onDestroy = function () {
        this.stopAnimation();
        this.clearAutoHideTimer();
        _super.prototype.onDestroy.call(this);
    };
    TaskBannerView.prefabUrl = "prefabs/task/TaskBanner";
    TaskBannerView = __decorate([
        mj.class
    ], TaskBannerView);
    return TaskBannerView;
}(UIView_1.default));
exports.default = TaskBannerView;

cc._RF.pop();