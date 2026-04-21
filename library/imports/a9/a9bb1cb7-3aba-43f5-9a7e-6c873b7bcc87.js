"use strict";
cc._RF.push(module, 'a9bb1y3OrpD9Zp+bIc7e8yH', 'Tile2FlipNodeStateAni');
// Scripts/fsm/ani/Tile2FlipNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2FlipNodeStateAni = void 0;
var BaseSpine_1 = require("../../gamePlay/base/ui/BaseSpine");
var Tile2NodeStateAniBase_1 = require("../../base/Tile2NodeStateAniBase");
var Tile2FlipNodeStateAni = /** @class */ (function (_super) {
    __extends(Tile2FlipNodeStateAni, _super);
    function Tile2FlipNodeStateAni(t, o, n) {
        var _this = _super.call(this, t, "flip") || this;
        _this._easing = "";
        _this._isLeft = true;
        _this._baseTileNode = null;
        _this._component = null;
        _this._baseTileNode = o;
        _this._component = n;
        return _this;
    }
    Tile2FlipNodeStateAni.prototype.getSpineCfg = function () {
        return {
            path: "spine/tile2rollcard/gameplay_flip_regular",
            anims: ["normal_in_1", "normal_in_2"],
            bundleName: "mainRes"
        };
    };
    Tile2FlipNodeStateAni.prototype.updateIsLeft = function () {
        if (this._baseTileNode.tileObject.isHasLeft())
            this._isLeft = false;
        else if (this._baseTileNode.tileObject.isHasRight())
            this._isLeft = true;
        else {
            var e = this._baseTileNode.tileObject.getPosition(), t = this._baseTileNode.layerNode.parent.convertToWorldSpaceAR(e), o = cc.find("Canvas").convertToNodeSpaceAR(t);
            this._isLeft = o.x < 0;
        }
    };
    Tile2FlipNodeStateAni.prototype.createAnimNode = function (e, t, o) {
        var n = new cc.Node();
        n.name = "NormalFlipNodeExtra";
        for (var i = BaseSpine_1.default.refreshWithNode(n, e, t), r = 0; r < o.length; r++)
            i.queueAnimation(o[r], 1, null, r === o.length - 1);
        return n;
    };
    Tile2FlipNodeStateAni.prototype.onEnterStart = function (e) {
        var t = this;
        if (cc.isValid(this._node)) {
            this.playEnterStartAni(e);
            this._component.setIsBack(false);
            this.playSpineAnim(this._baseTileNode.tileNode, function () {
                t.handleEnterAnimationComplete();
                t.onEnterEnd(e);
            }, e);
            this.playBgSpineAnim();
        }
        else
            this.onEnterEnd(e);
    };
    Tile2FlipNodeStateAni.prototype.playSpineAnim = function (e, t) {
        var o, n = this, i = this.getSpineCfg(), r = i.path, a = i.anims, l = i.bundleName, s = i.extraAnimInfo;
        if (r) {
            if (s && s.path) {
                var c = this.createAnimNode(s.path, s.bundleName, s.anims);
                this._baseTileNode.cardNode.addChild(c);
            }
            var u = null;
            u = this._baseTileNode.playAnimNodeAnimation(r, a[0], false, function () {
                if (u) {
                    u.setAnimation(a[1], 1, t);
                }
                else {
                    null == t || t();
                }
                cc.director.once(cc.Director.EVENT_BEFORE_UPDATE, function () {
                    var e;
                    cc.isValid(null === (e = n._baseTileNode) || void 0 === e ? void 0 : e.tileNode) && n._baseTileNode.updateImgCard();
                }, n);
            }, function () {
                return e;
            }, null, l);
            null === (o = u.getSkeleton()) || void 0 === o || o.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
        }
        else
            t();
    };
    Tile2FlipNodeStateAni.prototype.playBgSpineAnim = function () {
        var e, t = this, o = this.getSpineCfg(), n = o.path, i = o.anims, r = o.bundleName;
        if (n) {
            var l = this._baseTileNode.shadowCardNode.getChildByName("Tile2FlipNodeExtra");
            cc.isValid(l) && l.destroy();
            var s = new cc.Node("Tile2FlipNodeExtra");
            this._baseTileNode.shadowCardNode.addChild(s);
            var c = BaseSpine_1.default.refreshWithNode(s, n, r);
            null === (e = c.getSkeleton()) || void 0 === e || e.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.REALTIME);
            var u = this._baseTileNode.shadowNode;
            0 === u.opacity && (u.opacity = 255);
            for (var p = u.opacity, f = 0; f < i.length; f++)
                if (f == i.length - 1) {
                    c.queueAnimation(i[f], 1, function () {
                        t._baseTileNode.shadowNode.opacity = p;
                    }, true);
                }
                else {
                    c.queueAnimation(i[f], 1);
                }
            c.attachNode("hook_mahjong", function () {
                var e = cc.instantiate(t._baseTileNode.shadowNode);
                e.opacity = 255;
                return e;
            });
            u.opacity = 0;
        }
    };
    Tile2FlipNodeStateAni.prototype.playEnterStartAni = function () { };
    Tile2FlipNodeStateAni.prototype.handleEnterAnimationComplete = function (e) {
        this._baseTileNode.tileNode.active = true;
        this._baseTileNode.shadowNode.active = true;
        this._baseTileNode.stopAnimNodeAnimation();
        this._baseTileNode.updateImgCard();
        this.onEnterEnd(e);
    };
    Tile2FlipNodeStateAni.prototype.onExitStart = function (e) {
        var t = this;
        if (cc.isValid(this._node)) {
            this.playExitStartAni(e);
            this._component.setIsBack(true);
            this.playSpineAnim(this._baseTileNode.tileNode, function () {
                t.handleExitAnimationComplete();
                t.onExitEnd(e);
            }, e);
            this.playBgSpineAnim();
        }
        else
            this.onExitEnd(e);
    };
    Tile2FlipNodeStateAni.prototype.playExitStartAni = function () { };
    Tile2FlipNodeStateAni.prototype.handleExitAnimationComplete = function (e) {
        this._baseTileNode.tileNode.active = true;
        this._baseTileNode.shadowNode.active = true;
        this._component.setIsBack(true);
        this._baseTileNode.updateImgCard();
        this._baseTileNode.stopAnimNodeAnimation();
        this.onExitEnd(e);
    };
    Tile2FlipNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        this._baseTileNode.tileNode.active = true;
        this._baseTileNode.shadowNode.active = true;
        this._component.setIsBack(false);
        this._baseTileNode.stopAnimNodeAnimation();
        this._baseTileNode.updateImgCard();
    };
    Tile2FlipNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        this._baseTileNode.tileNode.active = true;
        this._baseTileNode.shadowNode.active = true;
        this._component.setIsBack(true);
        this._baseTileNode.updateImgCard();
        this._baseTileNode.stopAnimNodeAnimation();
    };
    __decorate([
        mj.traitEvent("Tile2FlipAni_playEnter")
    ], Tile2FlipNodeStateAni.prototype, "playEnterStartAni", null);
    __decorate([
        mj.traitEvent("Tile2FlipAni_AnimComplete")
    ], Tile2FlipNodeStateAni.prototype, "handleEnterAnimationComplete", null);
    __decorate([
        mj.traitEvent("Tile2FlipAni_playExit")
    ], Tile2FlipNodeStateAni.prototype, "playExitStartAni", null);
    return Tile2FlipNodeStateAni;
}(Tile2NodeStateAniBase_1.Tile2NodeStateAniBase));
exports.Tile2FlipNodeStateAni = Tile2FlipNodeStateAni;

cc._RF.pop();