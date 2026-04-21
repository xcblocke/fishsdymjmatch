"use strict";
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