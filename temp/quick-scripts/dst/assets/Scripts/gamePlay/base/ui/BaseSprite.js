
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/base/ui/BaseSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFrRDtBQUVoRCxJQUFBLFFBQVEsR0FDTixFQUFFLENBQUMsVUFBVSxTQURQLENBQ1E7QUFDUCxRQUFBLG9CQUFvQixHQUFHLHNCQUFzQixDQUFDO0FBRXpEO0lBQXdDLDhCQUFNO0lBQTlDO1FBQUEscUVBdUpDO1FBdEpDLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLG9CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXZCLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLHdCQUFrQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRTVCLGdCQUFVLEdBQUcsS0FBSyxDQUFDOztJQThJckIsQ0FBQzttQkF2Sm9CLFVBQVU7SUFVdEIsaUJBQU0sR0FBYixVQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBMEI7UUFBMUIsa0JBQUEsRUFBQSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUc7UUFDNUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQ25CLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTSx3QkFBYSxHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUEwQjtRQUExQixrQkFBQSxFQUFBLElBQUksRUFBRSxDQUFD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VUkgZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL3VpL0Jhc2VVSSc7XG5jb25zdCB7XG4gIHByb3BlcnR5XG59ID0gY2MuX2RlY29yYXRvcjtcbmV4cG9ydCB2YXIgU1BSSVRFX0xPQURfQ09NUExFVEUgPSBcInNwcml0ZS1sb2FkLWNvbXBsZXRlXCI7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VTcHJpdGUgZXh0ZW5kcyBCYXNlVUkge1xuICBfaXNMb2FkaW5nID0gZmFsc2U7XG4gIF9sb2FkaW5nUGF0aCA9IFwiXCI7XG4gIF9sb2FkSW5pdGlhdGVkID0gZmFsc2U7XG4gIEBwcm9wZXJ0eVxuICBfdGV4dHVyZVBhdGggPSBcIlwiO1xuICBAcHJvcGVydHlcbiAgX3RleHR1cmVCdW5kbGVOYW1lID0gdm9pZCAwO1xuICBAcHJvcGVydHlcbiAgX2Zyb21BdGxhcyA9IGZhbHNlO1xuICBzdGF0aWMgY3JlYXRlKGUsIHQsIG8gPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXKSB7XG4gICAgdmFyIG4gPSBuZXcgY2MuTm9kZSgpLFxuICAgICAgaSA9IG4uYWRkQ29tcG9uZW50KHRoaXMpO1xuICAgIG4uYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBvO1xuICAgIGkubG9hZFRleHR1cmUoZSwgZmFsc2UsIHRydWUsIHQpO1xuICAgIHJldHVybiBpO1xuICB9XG4gIHN0YXRpYyBjcmVhdGVCeUF0bGFzKGUsIHQsIG8sIG4gPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXKSB7XG4gICAgdmFyIGkgPSBuZXcgY2MuTm9kZSgpLFxuICAgICAgciA9IGkuYWRkQ29tcG9uZW50KHRoaXMpO1xuICAgIGkuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBuO1xuICAgIHIubG9hZFRleHR1cmUoZSArIFwiL1wiICsgdCwgdHJ1ZSwgdHJ1ZSwgbyk7XG4gICAgcmV0dXJuIHI7XG4gIH1cbiAgc3RhdGljIHJlZnJlc2hXaXRoTm9kZShlLCB0LCBvID0gZmFsc2UsIGkgPSB0cnVlLCByPykge1xuICAgIHZhciBhID0gZS5nZXRDb21wb25lbnQoQmFzZVNwcml0ZSk7XG4gICAgaWYgKGEpIHtcbiAgICAgIGEubG9hZFRleHR1cmUodCwgbywgaSwgcik7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgdmFyIGwgPSBlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIGlmICghbCkge1xuICAgICAgKGwgPSBlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gICAgICBsLnRyaW0gPSBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHMgPSBlLmFkZENvbXBvbmVudCh0aGlzKTtcbiAgICBzLmxvYWRUZXh0dXJlKHQsIG8sIGksIHIpO1xuICAgIHJldHVybiBzO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl90ZXh0dXJlUGF0aCAmJiAhdGhpcy5fbG9hZEluaXRpYXRlZCAmJiB0aGlzLmxvYWRUZXh0dXJlKHRoaXMuX3RleHR1cmVQYXRoLCB0aGlzLl9mcm9tQXRsYXMsIHRydWUsIHRoaXMuX3RleHR1cmVCdW5kbGVOYW1lKTtcbiAgfVxuICBzZXRTcHJpdGVCeVVybChlLCB0LCBvID0gY2MuU3ByaXRlLlNpemVNb2RlLlJBVykge1xuICAgIHZhciBuID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIGlmIChuKSB7XG4gICAgICBuLnNpemVNb2RlID0gbztcbiAgICAgIHRoaXMubG9hZFRleHR1cmUoZSwgZmFsc2UsIHRydWUsIHQpO1xuICAgIH1cbiAgfVxuICBsb2FkVGV4dHVyZShlLCB0ID0gZmFsc2UsIG8gPSB0cnVlLCBuPykge1xuICAgIGlmIChlKSB7XG4gICAgICB0aGlzLl90ZXh0dXJlUGF0aCA9IGU7XG4gICAgICB0aGlzLl90ZXh0dXJlQnVuZGxlTmFtZSA9IG47XG4gICAgICB0aGlzLl9mcm9tQXRsYXMgPSB0O1xuICAgICAgdGhpcy5fbG9hZEluaXRpYXRlZCA9IHRydWU7XG4gICAgICBpZiAoIXRoaXMuX2lzTG9hZGluZyB8fCB0aGlzLl9sb2FkaW5nUGF0aCAhPT0gZSkge1xuICAgICAgICBvIHx8IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSAmJiAodGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbnVsbCk7XG4gICAgICAgIGlmICh0KSB7XG4gICAgICAgICAgdGhpcy5sb2FkQXRsYXNUZXh0dXJlKGUsIG4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubG9hZFNwcml0ZVRleHR1cmUoZSwgbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZW1pdExvYWRDb21wbGV0ZShlLCB0LCBuID0gZmFsc2UpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLm5vZGUpKSB7XG4gICAgICB2YXIgaSA9IHtcbiAgICAgICAgc3ByaXRlRnJhbWU6IGUsXG4gICAgICAgIHBhdGg6IHQsXG4gICAgICAgIGZyb21DYWNoZTogblxuICAgICAgfTtcbiAgICAgIHRoaXMubm9kZS5lbWl0KFNQUklURV9MT0FEX0NPTVBMRVRFLCBpKTtcbiAgICB9XG4gIH1cbiAgcmVzZXRTdGF0ZShlKSB7XG4gICAgaWYgKHRoaXMuX2xvYWRpbmdQYXRoID09PSBlKSB7XG4gICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xvYWRpbmdQYXRoID0gXCJcIjtcbiAgICB9XG4gIH1cbiAgbG9hZFNwcml0ZVRleHR1cmUoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcyxcbiAgICAgIG4gPSB0aGlzLmdldFJlcyhlLCBjYy5TcHJpdGVGcmFtZSwgdCk7XG4gICAgaWYgKG4gJiYgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSB7XG4gICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuO1xuICAgICAgdGhpcy5lbWl0TG9hZENvbXBsZXRlKG4sIGUsIHRydWUpO1xuICAgICAgdGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9sb2FkaW5nUGF0aCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9sb2FkaW5nUGF0aCA9IGU7XG4gICAgICB0aGlzLmxvYWRSZXMoZSwgY2MuU3ByaXRlRnJhbWUsIHQpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoby5ub2RlKSkge1xuICAgICAgICAgIGlmIChvLl9sb2FkaW5nUGF0aCA9PT0gZSkgaWYgKG8ubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkge1xuICAgICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgICAgdmFyIG4gPSBvLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgIGlmIChuLnNwcml0ZUZyYW1lICE9PSB0KSB7XG4gICAgICAgICAgICAgICAgbi5zcHJpdGVGcmFtZSA9IHQ7XG4gICAgICAgICAgICAgICAgMCA9PT0gby5ub2RlLndpZHRoICYmIDAgPT09IG8ubm9kZS5oZWlnaHQgJiYgby5ub2RlLnNldENvbnRlbnRTaXplKHQuZ2V0UmVjdCgpLndpZHRoLCB0LmdldFJlY3QoKS5oZWlnaHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG8uZW1pdExvYWRDb21wbGV0ZSh0LCBlLCBmYWxzZSk7XG4gICAgICAgICAgICAgIG8ucmVzZXRTdGF0ZShlKTtcbiAgICAgICAgICAgIH0gZWxzZSBvLnJlc2V0U3RhdGUoZSk7XG4gICAgICAgICAgfSBlbHNlIG8ucmVzZXRTdGF0ZShlKTtcbiAgICAgICAgfSBlbHNlIG8ucmVzZXRTdGF0ZShlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBsb2FkQXRsYXNUZXh0dXJlKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXMsXG4gICAgICBuID0gX19yZWFkKHRoaXMuc3BsaXRBdGxhc1BhdGgoZSksIDIpLFxuICAgICAgaSA9IG5bMF0sXG4gICAgICByID0gblsxXSxcbiAgICAgIGwgPSB0aGlzLmdldFJlcyhpLCBjYy5TcHJpdGVBdGxhcywgdCk7XG4gICAgaWYgKGwpIHtcbiAgICAgIHZhciBzID0gbC5nZXRTcHJpdGVGcmFtZShyKTtcbiAgICAgIGlmIChzICYmIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzO1xuICAgICAgICB0aGlzLmVtaXRMb2FkQ29tcGxldGUocywgZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2xvYWRpbmdQYXRoID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2xvYWRpbmdQYXRoID0gZTtcbiAgICAgIHRoaXMubG9hZFJlcyhpLCBjYy5TcHJpdGVBdGxhcywgdCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICBpZiAoY2MuaXNWYWxpZChvLm5vZGUpKSB7XG4gICAgICAgICAgaWYgKG8uX2xvYWRpbmdQYXRoID09PSBlKSBpZiAodCkge1xuICAgICAgICAgICAgdmFyIG4gPSBvLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgICB2YXIgaSA9IHQuZ2V0U3ByaXRlRnJhbWUocik7XG4gICAgICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG4uc3ByaXRlRnJhbWUgIT09IGkpIHtcbiAgICAgICAgICAgICAgICAgIG4uc3ByaXRlRnJhbWUgPSBpO1xuICAgICAgICAgICAgICAgICAgMCA9PT0gby5ub2RlLndpZHRoICYmIDAgPT09IG8ubm9kZS5oZWlnaHQgJiYgby5ub2RlLnNldENvbnRlbnRTaXplKGkuZ2V0UmVjdCgpLndpZHRoLCBpLmdldFJlY3QoKS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvLmVtaXRMb2FkQ29tcGxldGUoaSwgZSwgZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG8ucmVzZXRTdGF0ZShlKTtcbiAgICAgICAgICAgIH0gZWxzZSBvLnJlc2V0U3RhdGUoZSk7XG4gICAgICAgICAgfSBlbHNlIG8ucmVzZXRTdGF0ZShlKTtcbiAgICAgICAgfSBlbHNlIG8ucmVzZXRTdGF0ZShlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzcGxpdEF0bGFzUGF0aChlKSB7XG4gICAgdmFyIHQgPSBlLmxhc3RJbmRleE9mKFwiL1wiKTtcbiAgICByZXR1cm4gLTEgPT09IHQgPyBbZSwgXCJcIl0gOiBbZS5zdWJzdHJpbmcoMCwgdCksIGUuc3Vic3RyaW5nKHQgKyAxKV07XG4gIH1cbn0iXX0=