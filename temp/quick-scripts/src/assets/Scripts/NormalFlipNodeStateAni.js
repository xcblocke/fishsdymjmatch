"use strict";
cc._RF.push(module, '22910FkK2lKOJNCqE+DXJLY', 'NormalFlipNodeStateAni');
// Scripts/NormalFlipNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalFlipNodeStateAni = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var NodeStateAniBase_1 = require("./base/NodeStateAniBase");
var NormalFlipNodeStateAni = /** @class */ (function (_super) {
    __extends(NormalFlipNodeStateAni, _super);
    function NormalFlipNodeStateAni(t, o) {
        var _this = _super.call(this, t, "normalFlip") || this;
        _this._easing = "";
        _this._isLeft = true;
        _this._hasRun = false;
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        _this.forceExit();
        return _this;
    }
    Object.defineProperty(NormalFlipNodeStateAni.prototype, "hasRun", {
        get: function () {
            return this._hasRun;
        },
        enumerable: false,
        configurable: true
    });
    NormalFlipNodeStateAni.prototype.getSpineCfg = function () {
        return {
            path: null,
            anims: null,
            bundleName: null,
            extraAnimInfo: {
                path: null,
                anims: null,
                bundleName: null
            }
        };
    };
    NormalFlipNodeStateAni.prototype.onEnterStart = function (t) {
        var o = this;
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this._hasRun = true;
            this.playSpineAnim(this._baseTileNode.tileNode, function () {
                o._baseTileNode.updateImgCard();
                o._baseTileNode.stopAnimNodeAnimation();
                o.onEnterEnd(t);
            }, t);
            this.playBgSpineAnim();
        }
        else
            this.onEnterEnd(t);
    };
    NormalFlipNodeStateAni.prototype.onEnterEnd = function (t) {
        _super.prototype.onEnterEnd.call(this, t);
    };
    NormalFlipNodeStateAni.prototype.createAnimNode = function (e, t, o) {
        var n = new cc.Node();
        n.name = "NormalFlipNodeExtra";
        for (var i = BaseSpine_1.default.refreshWithNode(n, e, t), r = 0; r < o.length; r++)
            i.queueAnimation(o[r], 1, null, r === o.length - 1);
        return n;
    };
    NormalFlipNodeStateAni.prototype.playBgSpineAnim = function () {
        var e, t = this, o = this.getSpineCfg(), n = o.path, i = o.anims, r = o.bundleName;
        if (n) {
            var l = new cc.Node();
            this._baseTileNode.shadowCardNode.addChild(l);
            var s = this._baseTileNode.shadowNode.opacity, c = BaseSpine_1.default.refreshWithNode(l, n, r);
            null === (e = c.getSkeleton()) || void 0 === e || e.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
            for (var u = 0; u < i.length; u++)
                if (u == i.length - 1) {
                    c.queueAnimation(i[u], 1, function () {
                        t._baseTileNode.shadowNode.opacity = s;
                    }, true);
                }
                else {
                    c.queueAnimation(i[u], 1);
                }
            c.attachNode("hook_mahjong", function () {
                var e = cc.instantiate(t._baseTileNode.shadowNode);
                e.opacity = 255;
                return e;
            });
            this._baseTileNode.shadowNode.opacity = 0;
        }
    };
    NormalFlipNodeStateAni.prototype.playSpineAnim = function (e, t) {
        var o, n = this, i = this.getSpineCfg(), r = i.path, a = i.anims, l = i.bundleName, s = i.extraAnimInfo;
        if (r) {
            if (s && s.path) {
                var c = this.createAnimNode(s.path, s.bundleName, s.anims);
                this._baseTileNode.cardNode.addChild(c);
            }
            var u = null;
            null === (o = (u = this._baseTileNode.playAnimNodeAnimation(r, a[0], false, function () {
                if (u) {
                    u.setAnimation(a[1], 1, t);
                }
                else {
                    null == t || t();
                }
                n._baseTileNode.updateImgCard();
            }, function () {
                return e;
            }, null, l)).getSkeleton()) || void 0 === o || o.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        }
        else
            t();
    };
    NormalFlipNodeStateAni.prototype.onExitStart = function (t) {
        _super.prototype.onExitStart.call(this, t);
        var o = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_dn", this._baseTileNode), n = o.path, i = o.bundleName, r = o.fromAtlas;
        this._baseTileNode.updateImgCardByImg(n, i, r);
    };
    NormalFlipNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        this._baseTileNode.updateImgCard();
    };
    NormalFlipNodeStateAni.prototype.isLock = function () {
        return this._baseTileNode.info.tileObject.isCardLock() > 0;
    };
    NormalFlipNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        var o = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_dn", this._baseTileNode), n = o.path, i = o.bundleName, r = o.fromAtlas;
        this._baseTileNode.updateImgCardByImg(n, i, r);
    };
    NormalFlipNodeStateAni.prototype.applyImmediate = function () {
        cc.isValid(this._node);
    };
    NormalFlipNodeStateAni.prototype.reset = function () {
        if (this._onEnteredCallBack) {
            this._onEnteredCallBack();
            this._onEnteredCallBack = void 0;
        }
    };
    NormalFlipNodeStateAni.prototype.tryPlayAni = function () {
        this.hasRun || this.playAni();
    };
    __decorate([
        mj.traitEvent("NorFlipStateAni_spineCfg")
    ], NormalFlipNodeStateAni.prototype, "getSpineCfg", null);
    __decorate([
        mj.traitEvent("NorFlipStateAni_onEnd")
    ], NormalFlipNodeStateAni.prototype, "onEnterEnd", null);
    return NormalFlipNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.NormalFlipNodeStateAni = NormalFlipNodeStateAni;

cc._RF.pop();