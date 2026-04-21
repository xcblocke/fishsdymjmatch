"use strict";
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