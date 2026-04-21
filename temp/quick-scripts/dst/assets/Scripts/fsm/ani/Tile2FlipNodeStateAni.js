
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/fsm/ani/Tile2FlipNodeStateAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZzbS9hbmkvVGlsZTJGbGlwTm9kZVN0YXRlQW5pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELDBFQUF5RTtBQUN6RTtJQUEyQyx5Q0FBcUI7SUFLOUQsK0JBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQW5CLFlBQ0Usa0JBQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxTQUdqQjtRQVJELGFBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsbUJBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFHaEIsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7O0lBQ3RCLENBQUM7SUFDRCwyQ0FBVyxHQUFYO1FBQ0UsT0FBTztZQUNMLElBQUksRUFBRSwyQ0FBMkM7WUFDakQsS0FBSyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztZQUNyQyxVQUFVLEVBQUUsU0FBUztTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUNELDRDQUFZLEdBQVo7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUU7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUFLO1lBQ2hKLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUNqRCxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxFQUNoRSxDQUFDLEdB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QUcsSUFBSSxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDN0MsQ0FBQztJQTlDRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7a0VBQ2xCO0lBRXRCO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQzs2RUFPMUM7SUFjRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7aUVBQ2xCO0lBeUJ2Qiw0QkFBQztDQXhKRCxBQXdKQyxDQXhKMEMsNkNBQXFCLEdBd0ovRDtBQXhKWSxzREFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4uLy4uL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCB7IFRpbGUyTm9kZVN0YXRlQW5pQmFzZSB9IGZyb20gJy4uLy4uL2Jhc2UvVGlsZTJOb2RlU3RhdGVBbmlCYXNlJztcbmV4cG9ydCBjbGFzcyBUaWxlMkZsaXBOb2RlU3RhdGVBbmkgZXh0ZW5kcyBUaWxlMk5vZGVTdGF0ZUFuaUJhc2Uge1xuICBfZWFzaW5nID0gXCJcIjtcbiAgX2lzTGVmdCA9IHRydWU7XG4gIF9iYXNlVGlsZU5vZGUgPSBudWxsO1xuICBfY29tcG9uZW50ID0gbnVsbDtcbiAgY29uc3RydWN0b3IodCwgbywgbikge1xuICAgIHN1cGVyKHQsIFwiZmxpcFwiKTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUgPSBvO1xuICAgIHRoaXMuX2NvbXBvbmVudCA9IG47XG4gIH1cbiAgZ2V0U3BpbmVDZmcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IFwic3BpbmUvdGlsZTJyb2xsY2FyZC9nYW1lcGxheV9mbGlwX3JlZ3VsYXJcIixcbiAgICAgIGFuaW1zOiBbXCJub3JtYWxfaW5fMVwiLCBcIm5vcm1hbF9pbl8yXCJdLFxuICAgICAgYnVuZGxlTmFtZTogXCJtYWluUmVzXCJcbiAgICB9O1xuICB9XG4gIHVwZGF0ZUlzTGVmdCgpIHtcbiAgICBpZiAodGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVPYmplY3QuaXNIYXNMZWZ0KCkpIHRoaXMuX2lzTGVmdCA9IGZhbHNlO2Vsc2UgaWYgKHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LmlzSGFzUmlnaHQoKSkgdGhpcy5faXNMZWZ0ID0gdHJ1ZTtlbHNlIHtcbiAgICAgIHZhciBlID0gdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVPYmplY3QuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdCA9IHRoaXMuX2Jhc2VUaWxlTm9kZS5sYXllck5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihlKSxcbiAgICAgICAgbyA9IGNjLmZpbmQoXCJDYW52YXNcIikuY29udmVydFRvTm9kZVNwYWNlQVIodCk7XG4gICAgICB0aGlzLl9pc0xlZnQgPSBvLnggPCAwO1xuICAgIH1cbiAgfVxuICBjcmVhdGVBbmltTm9kZShlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSBuZXcgY2MuTm9kZSgpO1xuICAgIG4ubmFtZSA9IFwiTm9ybWFsRmxpcE5vZGVFeHRyYVwiO1xuICAgIGZvciAodmFyIGkgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKG4sIGUsIHQpLCByID0gMDsgciA8IG8ubGVuZ3RoOyByKyspIGkucXVldWVBbmltYXRpb24ob1tyXSwgMSwgbnVsbCwgciA9PT0gby5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gbjtcbiAgfVxuICBvbkVudGVyU3RhcnQoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9ub2RlKSkge1xuICAgICAgdGhpcy5wbGF5RW50ZXJTdGFydEFuaShlKTtcbiAgICAgIHRoaXMuX2NvbXBvbmVudC5zZXRJc0JhY2soZmFsc2UpO1xuICAgICAgdGhpcy5wbGF5U3BpbmVBbmltKHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlTm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB0LmhhbmRsZUVudGVyQW5pbWF0aW9uQ29tcGxldGUoKTtcbiAgICAgICAgdC5vbkVudGVyRW5kKGUpO1xuICAgICAgfSwgZSk7XG4gICAgICB0aGlzLnBsYXlCZ1NwaW5lQW5pbSgpO1xuICAgIH0gZWxzZSB0aGlzLm9uRW50ZXJFbmQoZSk7XG4gIH1cbiAgcGxheVNwaW5lQW5pbShlLCB0KSB7XG4gICAgdmFyIG8sXG4gICAgICBuID0gdGhpcyxcbiAgICAgIGkgPSB0aGlzLmdldFNwaW5lQ2ZnKCksXG4gICAgICByID0gaS5wYXRoLFxuICAgICAgYSA9IGkuYW5pbXMsXG4gICAgICBsID0gaS5idW5kbGVOYW1lLFxuICAgICAgcyA9IGkuZXh0cmFBbmltSW5mbztcbiAgICBpZiAocikge1xuICAgICAgaWYgKHMgJiYgcy5wYXRoKSB7XG4gICAgICAgIHZhciBjID0gdGhpcy5jcmVhdGVBbmltTm9kZShzLnBhdGgsIHMuYnVuZGxlTmFtZSwgcy5hbmltcyk7XG4gICAgICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5jYXJkTm9kZS5hZGRDaGlsZChjKTtcbiAgICAgIH1cbiAgICAgIHZhciB1ID0gbnVsbDtcbiAgICAgIHUgPSB0aGlzLl9iYXNlVGlsZU5vZGUucGxheUFuaW1Ob2RlQW5pbWF0aW9uKHIsIGFbMF0sIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh1KSB7XG4gICAgICAgICAgdS5zZXRBbmltYXRpb24oYVsxXSwgMSwgdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgICAgICAgfVxuICAgICAgICBjYy5kaXJlY3Rvci5vbmNlKGNjLkRpcmVjdG9yLkVWRU5UX0JFRk9SRV9VUERBVEUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICBjYy5pc1ZhbGlkKG51bGwgPT09IChlID0gbi5fYmFzZVRpbGVOb2RlKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLnRpbGVOb2RlKSAmJiBuLl9iYXNlVGlsZU5vZGUudXBkYXRlSW1nQ2FyZCgpO1xuICAgICAgICB9LCBuKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9LCBudWxsLCBsKTtcbiAgICAgIG51bGwgPT09IChvID0gdS5nZXRTa2VsZXRvbigpKSB8fCB2b2lkIDAgPT09IG8gfHwgby5zZXRBbmltYXRpb25DYWNoZU1vZGUoc3AuU2tlbGV0b24uQW5pbWF0aW9uQ2FjaGVNb2RlLlJFQUxUSU1FKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIHBsYXlCZ1NwaW5lQW5pbSgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQgPSB0aGlzLFxuICAgICAgbyA9IHRoaXMuZ2V0U3BpbmVDZmcoKSxcbiAgICAgIG4gPSBvLnBhdGgsXG4gICAgICBpID0gby5hbmltcyxcbiAgICAgIHIgPSBvLmJ1bmRsZU5hbWU7XG4gICAgaWYgKG4pIHtcbiAgICAgIHZhciBsID0gdGhpcy5fYmFzZVRpbGVOb2RlLnNoYWRvd0NhcmROb2RlLmdldENoaWxkQnlOYW1lKFwiVGlsZTJGbGlwTm9kZUV4dHJhXCIpO1xuICAgICAgY2MuaXNWYWxpZChsKSAmJiBsLmRlc3Ryb3koKTtcbiAgICAgIHZhciBzID0gbmV3IGNjLk5vZGUoXCJUaWxlMkZsaXBOb2RlRXh0cmFcIik7XG4gICAgICB0aGlzLl9iYXNlVGlsZU5vZGUuc2hhZG93Q2FyZE5vZGUuYWRkQ2hpbGQocyk7XG4gICAgICB2YXIgYyA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUocywgbiwgcik7XG4gICAgICBudWxsID09PSAoZSA9IGMuZ2V0U2tlbGV0b24oKSkgfHwgdm9pZCAwID09PSBlIHx8IGUuc2V0QW5pbWF0aW9uQ2FjaGVNb2RlKHNwLlNrZWxldG9uLkFuaW1hdGlvbkNhY2hlTW9kZS5SRUFMVElNRSk7XG4gICAgICB2YXIgdSA9IHRoaXMuX2Jhc2VUaWxlTm9kZS5zaGFkb3dOb2RlO1xuICAgICAgMCA9PT0gdS5vcGFjaXR5ICYmICh1Lm9wYWNpdHkgPSAyNTUpO1xuICAgICAgZm9yICh2YXIgcCA9IHUub3BhY2l0eSwgZiA9IDA7IGYgPCBpLmxlbmd0aDsgZisrKSBpZiAoZiA9PSBpLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgYy5xdWV1ZUFuaW1hdGlvbihpW2ZdLCAxLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdC5fYmFzZVRpbGVOb2RlLnNoYWRvd05vZGUub3BhY2l0eSA9IHA7XG4gICAgICAgIH0sIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYy5xdWV1ZUFuaW1hdGlvbihpW2ZdLCAxKTtcbiAgICAgIH1cbiAgICAgIGMuYXR0YWNoTm9kZShcImhvb2tfbWFoam9uZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gY2MuaW5zdGFudGlhdGUodC5fYmFzZVRpbGVOb2RlLnNoYWRvd05vZGUpO1xuICAgICAgICBlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfSk7XG4gICAgICB1Lm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyRmxpcEFuaV9wbGF5RW50ZXJcIilcbiAgcGxheUVudGVyU3RhcnRBbmkoKSB7fVxuICBAbWoudHJhaXRFdmVudChcIlRpbGUyRmxpcEFuaV9BbmltQ29tcGxldGVcIilcbiAgaGFuZGxlRW50ZXJBbmltYXRpb25Db21wbGV0ZShlKSB7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnNoYWRvd05vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUuc3RvcEFuaW1Ob2RlQW5pbWF0aW9uKCk7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnVwZGF0ZUltZ0NhcmQoKTtcbiAgICB0aGlzLm9uRW50ZXJFbmQoZSk7XG4gIH1cbiAgb25FeGl0U3RhcnQoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9ub2RlKSkge1xuICAgICAgdGhpcy5wbGF5RXhpdFN0YXJ0QW5pKGUpO1xuICAgICAgdGhpcy5fY29tcG9uZW50LnNldElzQmFjayh0cnVlKTtcbiAgICAgIHRoaXMucGxheVNwaW5lQW5pbSh0aGlzLl9iYXNlVGlsZU5vZGUudGlsZU5vZGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC5oYW5kbGVFeGl0QW5pbWF0aW9uQ29tcGxldGUoKTtcbiAgICAgICAgdC5vbkV4aXRFbmQoZSk7XG4gICAgICB9LCBlKTtcbiAgICAgIHRoaXMucGxheUJnU3BpbmVBbmltKCk7XG4gICAgfSBlbHNlIHRoaXMub25FeGl0RW5kKGUpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZTJGbGlwQW5pX3BsYXlFeGl0XCIpXG4gIHBsYXlFeGl0U3RhcnRBbmkoKSB7fVxuICBoYW5kbGVFeGl0QW5pbWF0aW9uQ29tcGxldGUoZSkge1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5zaGFkb3dOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fY29tcG9uZW50LnNldElzQmFjayh0cnVlKTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUudXBkYXRlSW1nQ2FyZCgpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5zdG9wQW5pbU5vZGVBbmltYXRpb24oKTtcbiAgICB0aGlzLm9uRXhpdEVuZChlKTtcbiAgfVxuICBvbkVudGVyKHQpIHtcbiAgICBzdXBlci5vbkVudGVyLmNhbGwodGhpcywgdCk7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnNoYWRvd05vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLl9jb21wb25lbnQuc2V0SXNCYWNrKGZhbHNlKTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUuc3RvcEFuaW1Ob2RlQW5pbWF0aW9uKCk7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlLnVwZGF0ZUltZ0NhcmQoKTtcbiAgfVxuICBvbkV4aXQodCkge1xuICAgIHN1cGVyLm9uRXhpdC5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5zaGFkb3dOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fY29tcG9uZW50LnNldElzQmFjayh0cnVlKTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUudXBkYXRlSW1nQ2FyZCgpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5zdG9wQW5pbU5vZGVBbmltYXRpb24oKTtcbiAgfVxufSJdfQ==