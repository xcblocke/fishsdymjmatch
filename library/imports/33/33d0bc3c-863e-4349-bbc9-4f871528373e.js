"use strict";
cc._RF.push(module, '33d0bw8hj5DSbvJT4cVKDc+', 'AvatarItem');
// subpackages/r_avatarCollection/Scripts/AvatarItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var Utils_1 = require("./Utils");
var AvatarItem = /** @class */ (function (_super) {
    __extends(AvatarItem, _super);
    function AvatarItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._yellowBg = null;
        _this._whiteBg = null;
        _this._rootNode = null;
        _this._progressNode = null;
        _this._progressLabel = null;
        _this._progressBar = null;
        _this._cardSpr = null;
        _this.animTween = null;
        return _this;
    }
    AvatarItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var e = this.node.getChildByName("bg");
        this._yellowBg = e.getChildByName("yellow");
        this._whiteBg = e.getChildByName("white");
        this._progressNode = e.getChildByName("progress");
        this._progressBar = this._progressNode.getComponent(cc.ProgressBar);
        this._progressLabel = this._progressNode.getChildByName("value").getComponent(cc.Label);
        this._cardSpr = e.getChildByName("cardHead").getComponent(cc.Sprite);
        this._rootNode = e;
        this.init();
    };
    AvatarItem.prototype.init = function () { };
    AvatarItem.prototype.updateUI = function (t) {
        var e = Utils_1.Key2Info(t.key);
        BaseSprite_1.default.refreshWithNode(this._cardSpr.node, e.path, e.fromAtlas, false, e.bundleName);
        this._progressLabel.string = t.curCount + "/" + t.maxCount;
        this._progressBar.progress = t.curCount / t.maxCount;
        this._progressNode.opacity = t.curCount == t.maxCount ? 0 : 255;
    };
    AvatarItem.prototype.playFinishAnim = function (t) {
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
            e.playProgressFadeout();
            e.stopAnim();
        }).start();
    };
    AvatarItem.prototype.stopAnim = function () {
        if (this.animTween) {
            this.animTween.stop();
            this.animTween = null;
        }
    };
    AvatarItem.prototype.playProgressFadeout = function () {
        cc.tween(this._progressNode).to(0.1, {
            opacity: 0
        }).start();
    };
    AvatarItem.prototype.playEffect = function () {
        var t = BaseSpine_1.default.create("spine/rank_progbar", "in_02", 1, null, true, Utils_1.getBundleName());
        t.node.parent = this._rootNode;
        t.node.position = cc.v3(0, 0, 0);
    };
    AvatarItem.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        this.stopAnim();
    };
    AvatarItem.prefabUrl = "prefabs/AvatarItem";
    AvatarItem.bundleName = Utils_1.getBundleName();
    AvatarItem = __decorate([
        mj.class
    ], AvatarItem);
    return AvatarItem;
}(BaseUI_1.default));
exports.default = AvatarItem;

cc._RF.pop();