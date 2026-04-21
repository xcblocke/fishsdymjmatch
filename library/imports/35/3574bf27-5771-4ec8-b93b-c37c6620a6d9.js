"use strict";
cc._RF.push(module, '3574b8nV3FOyLk7w3xmIKbZ', 'BaseSprite');
// Scripts/gamePlay/base/ui/BaseSprite.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SPRITE_LOAD_COMPLETE = void 0;
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var property = cc._decorator.property;
exports.SPRITE_LOAD_COMPLETE = "sprite-load-complete";
var BaseSprite = /** @class */ (function (_super) {
    __extends(BaseSprite, _super);
    function BaseSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isLoading = false;
        _this._loadingPath = "";
        _this._loadInitiated = false;
        _this._texturePath = "";
        _this._textureBundleName = void 0;
        _this._fromAtlas = false;
        return _this;
    }
    BaseSprite_1 = BaseSprite;
    BaseSprite.create = function (e, t, o) {
        if (o === void 0) { o = cc.Sprite.SizeMode.RAW; }
        var n = new cc.Node(), i = n.addComponent(this);
        n.addComponent(cc.Sprite).sizeMode = o;
        i.loadTexture(e, false, true, t);
        return i;
    };
    BaseSprite.createByAtlas = function (e, t, o, n) {
        if (n === void 0) { n = cc.Sprite.SizeMode.RAW; }
        var i = new cc.Node(), r = i.addComponent(this);
        i.addComponent(cc.Sprite).sizeMode = n;
        r.loadTexture(e + "/" + t, true, true, o);
        return r;
    };
    BaseSprite.refreshWithNode = function (e, t, o, i, r) {
        if (o === void 0) { o = false; }
        if (i === void 0) { i = true; }
        var a = e.getComponent(BaseSprite_1);
        if (a) {
            a.loadTexture(t, o, i, r);
            return a;
        }
        var l = e.getComponent(cc.Sprite);
        if (!l) {
            (l = e.addComponent(cc.Sprite)).sizeMode = cc.Sprite.SizeMode.CUSTOM;
            l.trim = false;
        }
        var s = e.addComponent(this);
        s.loadTexture(t, o, i, r);
        return s;
    };
    BaseSprite.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._texturePath && !this._loadInitiated && this.loadTexture(this._texturePath, this._fromAtlas, true, this._textureBundleName);
    };
    BaseSprite.prototype.setSpriteByUrl = function (e, t, o) {
        if (o === void 0) { o = cc.Sprite.SizeMode.RAW; }
        var n = this.node.getComponent(cc.Sprite);
        if (n) {
            n.sizeMode = o;
            this.loadTexture(e, false, true, t);
        }
    };
    BaseSprite.prototype.loadTexture = function (e, t, o, n) {
        if (t === void 0) { t = false; }
        if (o === void 0) { o = true; }
        if (e) {
            this._texturePath = e;
            this._textureBundleName = n;
            this._fromAtlas = t;
            this._loadInitiated = true;
            if (!this._isLoading || this._loadingPath !== e) {
                o || this.node.getComponent(cc.Sprite) && (this.node.getComponent(cc.Sprite).spriteFrame = null);
                if (t) {
                    this.loadAtlasTexture(e, n);
                }
                else {
                    this.loadSpriteTexture(e, n);
                }
            }
        }
    };
    BaseSprite.prototype.emitLoadComplete = function (e, t, n) {
        if (n === void 0) { n = false; }
        if (cc.isValid(this.node)) {
            var i = {
                spriteFrame: e,
                path: t,
                fromCache: n
            };
            this.node.emit(exports.SPRITE_LOAD_COMPLETE, i);
        }
    };
    BaseSprite.prototype.resetState = function (e) {
        if (this._loadingPath === e) {
            this._isLoading = false;
            this._loadingPath = "";
        }
    };
    BaseSprite.prototype.loadSpriteTexture = function (e, t) {
        var o = this, n = this.getRes(e, cc.SpriteFrame, t);
        if (n && this.node.getComponent(cc.Sprite)) {
            this.node.getComponent(cc.Sprite).spriteFrame = n;
            this.emitLoadComplete(n, e, true);
            this._isLoading = false;
            this._loadingPath = "";
        }
        else {
            this._isLoading = true;
            this._loadingPath = e;
            this.loadRes(e, cc.SpriteFrame, t).then(function (t) {
                if (cc.isValid(o.node)) {
                    if (o._loadingPath === e)
                        if (o.node.getComponent(cc.Sprite)) {
                            if (t) {
                                var n = o.node.getComponent(cc.Sprite);
                                if (n.spriteFrame !== t) {
                                    n.spriteFrame = t;
                                    0 === o.node.width && 0 === o.node.height && o.node.setContentSize(t.getRect().width, t.getRect().height);
                                }
                                o.emitLoadComplete(t, e, false);
                                o.resetState(e);
                            }
                            else
                                o.resetState(e);
                        }
                        else
                            o.resetState(e);
                }
                else
                    o.resetState(e);
            });
        }
    };
    BaseSprite.prototype.loadAtlasTexture = function (e, t) {
        var o = this, n = __read(this.splitAtlasPath(e), 2), i = n[0], r = n[1], l = this.getRes(i, cc.SpriteAtlas, t);
        if (l) {
            var s = l.getSpriteFrame(r);
            if (s && this.node.getComponent(cc.Sprite)) {
                this.node.getComponent(cc.Sprite).spriteFrame = s;
                this.emitLoadComplete(s, e, true);
            }
            this._isLoading = false;
            this._loadingPath = "";
        }
        else {
            this._isLoading = true;
            this._loadingPath = e;
            this.loadRes(i, cc.SpriteAtlas, t).then(function (t) {
                if (cc.isValid(o.node)) {
                    if (o._loadingPath === e)
                        if (t) {
                            var n = o.node.getComponent(cc.Sprite);
                            if (n) {
                                var i = t.getSpriteFrame(r);
                                if (i) {
                                    if (n.spriteFrame !== i) {
                                        n.spriteFrame = i;
                                        0 === o.node.width && 0 === o.node.height && o.node.setContentSize(i.getRect().width, i.getRect().height);
                                    }
                                    o.emitLoadComplete(i, e, false);
                                }
                                o.resetState(e);
                            }
                            else
                                o.resetState(e);
                        }
                        else
                            o.resetState(e);
                }
                else
                    o.resetState(e);
            });
        }
    };
    BaseSprite.prototype.splitAtlasPath = function (e) {
        var t = e.lastIndexOf("/");
        return -1 === t ? [e, ""] : [e.substring(0, t), e.substring(t + 1)];
    };
    var BaseSprite_1;
    __decorate([
        property
    ], BaseSprite.prototype, "_texturePath", void 0);
    __decorate([
        property
    ], BaseSprite.prototype, "_textureBundleName", void 0);
    __decorate([
        property
    ], BaseSprite.prototype, "_fromAtlas", void 0);
    BaseSprite = BaseSprite_1 = __decorate([
        mj.class
    ], BaseSprite);
    return BaseSprite;
}(BaseUI_1.default));
exports.default = BaseSprite;

cc._RF.pop();