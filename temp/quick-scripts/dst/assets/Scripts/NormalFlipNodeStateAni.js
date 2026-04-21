
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/NormalFlipNodeStateAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL05vcm1hbEZsaXBOb2RlU3RhdGVBbmkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBcUQ7QUFDckQscURBQWdEO0FBQ2hELDREQUEyRDtBQUMzRDtJQUE0QywwQ0FBZ0I7SUFRMUQsZ0NBQVksQ0FBQyxFQUFFLENBQUM7UUFBaEIsWUFDRSxrQkFBTSxDQUFDLEVBQUUsWUFBWSxDQUFDLFNBR3ZCO1FBWEQsYUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixhQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBTW5CLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7SUFDbkIsQ0FBQztJQVBELHNCQUFJLDBDQUFNO2FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFPRCw0Q0FBVyxHQUFYO1FBQ0UsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUk7WUFDWCxVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUU7Z0JBQ2IsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsVUFBVSxFQUFFLElBQUk7YUFDakI7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNELDZDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsaUJBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsYUFB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cGluZSBmcm9tICcuL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuaW1wb3J0IHsgTm9kZVN0YXRlQW5pQmFzZSB9IGZyb20gJy4vYmFzZS9Ob2RlU3RhdGVBbmlCYXNlJztcbmV4cG9ydCBjbGFzcyBOb3JtYWxGbGlwTm9kZVN0YXRlQW5pIGV4dGVuZHMgTm9kZVN0YXRlQW5pQmFzZSB7XG4gIF9lYXNpbmcgPSBcIlwiO1xuICBfaXNMZWZ0ID0gdHJ1ZTtcbiAgX2hhc1J1biA9IGZhbHNlO1xuICBfYmFzZVRpbGVOb2RlID0gbnVsbDtcbiAgZ2V0IGhhc1J1bigpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzUnVuO1xuICB9XG4gIGNvbnN0cnVjdG9yKHQsIG8pIHtcbiAgICBzdXBlcih0LCBcIm5vcm1hbEZsaXBcIik7XG4gICAgdGhpcy5fYmFzZVRpbGVOb2RlID0gbztcbiAgICB0aGlzLmZvcmNlRXhpdCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTm9yRmxpcFN0YXRlQW5pX3NwaW5lQ2ZnXCIpXG4gIGdldFNwaW5lQ2ZnKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoOiBudWxsLFxuICAgICAgYW5pbXM6IG51bGwsXG4gICAgICBidW5kbGVOYW1lOiBudWxsLFxuICAgICAgZXh0cmFBbmltSW5mbzoge1xuICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICBhbmltczogbnVsbCxcbiAgICAgICAgYnVuZGxlTmFtZTogbnVsbFxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgb25FbnRlclN0YXJ0KHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgc3VwZXIub25FbnRlclN0YXJ0LmNhbGwodGhpcywgdCk7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbm9kZSkpIHtcbiAgICAgIHRoaXMuX2hhc1J1biA9IHRydWU7XG4gICAgICB0aGlzLnBsYXlTcGluZUFuaW0odGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVOb2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG8uX2Jhc2VUaWxlTm9kZS51cGRhdGVJbWdDYXJkKCk7XG4gICAgICAgIG8uX2Jhc2VUaWxlTm9kZS5zdG9wQW5pbU5vZGVBbmltYXRpb24oKTtcbiAgICAgICAgby5vbkVudGVyRW5kKHQpO1xuICAgICAgfSwgdCk7XG4gICAgICB0aGlzLnBsYXlCZ1NwaW5lQW5pbSgpO1xuICAgIH0gZWxzZSB0aGlzLm9uRW50ZXJFbmQodCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJOb3JGbGlwU3RhdGVBbmlfb25FbmRcIilcbiAgb25FbnRlckVuZCh0KSB7XG4gICAgc3VwZXIub25FbnRlckVuZC5jYWxsKHRoaXMsIHQpO1xuICB9XG4gIGNyZWF0ZUFuaW1Ob2RlKGUsIHQsIG8pIHtcbiAgICB2YXIgbiA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgbi5uYW1lID0gXCJOb3JtYWxGbGlwTm9kZUV4dHJhXCI7XG4gICAgZm9yICh2YXIgaSA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUobiwgZSwgdCksIHIgPSAwOyByIDwgby5sZW5ndGg7IHIrKykgaS5xdWV1ZUFuaW1hdGlvbihvW3JdLCAxLCBudWxsLCByID09PSBvLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBuO1xuICB9XG4gIHBsYXlCZ1NwaW5lQW5pbSgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQgPSB0aGlzLFxuICAgICAgbyA9IHRoaXMuZ2V0U3BpbmVDZmcoKSxcbiAgICAgIG4gPSBvLnBhdGgsXG4gICAgICBpID0gby5hbmltcyxcbiAgICAgIHIgPSBvLmJ1bmRsZU5hbWU7XG4gICAgaWYgKG4pIHtcbiAgICAgIHZhciBsID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5zaGFkb3dDYXJkTm9kZS5hZGRDaGlsZChsKTtcbiAgICAgIHZhciBzID0gdGhpcy5fYmFzZVRpbGVOb2RlLnNoYWRvd05vZGUub3BhY2l0eSxcbiAgICAgICAgYyA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUobCwgbiwgcik7XG4gICAgICBudWxsID09PSAoZSA9IGMuZ2V0U2tlbGV0b24oKSkgfHwgdm9pZCAwID09PSBlIHx8IGUuc2V0QW5pbWF0aW9uQ2FjaGVNb2RlKHNwLlNrZWxldG9uLkFuaW1hdGlvbkNhY2hlTW9kZS5SRUFMVElNRSk7XG4gICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IGkubGVuZ3RoOyB1KyspIGlmICh1ID09IGkubGVuZ3RoIC0gMSkge1xuICAgICAgICBjLnF1ZXVlQW5pbWF0aW9uKGlbdV0sIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0Ll9iYXNlVGlsZU5vZGUuc2hhZG93Tm9kZS5vcGFjaXR5ID0gcztcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjLnF1ZXVlQW5pbWF0aW9uKGlbdV0sIDEpO1xuICAgICAgfVxuICAgICAgYy5hdHRhY2hOb2RlKFwiaG9va19tYWhqb25nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSBjYy5pbnN0YW50aWF0ZSh0Ll9iYXNlVGlsZU5vZGUuc2hhZG93Tm9kZSk7XG4gICAgICAgIGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2Jhc2VUaWxlTm9kZS5zaGFkb3dOb2RlLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgfVxuICBwbGF5U3BpbmVBbmltKGUsIHQpIHtcbiAgICB2YXIgbyxcbiAgICAgIG4gPSB0aGlzLFxuICAgICAgaSA9IHRoaXMuZ2V0U3BpbmVDZmcoKSxcbiAgICAgIHIgPSBpLnBhdGgsXG4gICAgICBhID0gaS5hbmltcyxcbiAgICAgIGwgPSBpLmJ1bmRsZU5hbWUsXG4gICAgICBzID0gaS5leHRyYUFuaW1JbmZvO1xuICAgIGlmIChyKSB7XG4gICAgICBpZiAocyAmJiBzLnBhdGgpIHtcbiAgICAgICAgdmFyIGMgPSB0aGlzLmNyZWF0ZUFuaW1Ob2RlKHMucGF0aCwgcy5idW5kbGVOYW1lLCBzLmFuaW1zKTtcbiAgICAgICAgdGhpcy5fYmFzZVRpbGVOb2RlLmNhcmROb2RlLmFkZENoaWxkKGMpO1xuICAgICAgfVxuICAgICAgdmFyIHUgPSBudWxsO1xuICAgICAgbnVsbCA9PT0gKG8gPSAodSA9IHRoaXMuX2Jhc2VUaWxlTm9kZS5wbGF5QW5pbU5vZGVBbmltYXRpb24ociwgYVswXSwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHUpIHtcbiAgICAgICAgICB1LnNldEFuaW1hdGlvbihhWzFdLCAxLCB0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudWxsID09IHQgfHwgdCgpO1xuICAgICAgICB9XG4gICAgICAgIG4uX2Jhc2VUaWxlTm9kZS51cGRhdGVJbWdDYXJkKCk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfSwgbnVsbCwgbCkpLmdldFNrZWxldG9uKCkpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLnNldEFuaW1hdGlvbkNhY2hlTW9kZShzcC5Ta2VsZXRvbi5BbmltYXRpb25DYWNoZU1vZGUuUkVBTFRJTUUpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25FeGl0U3RhcnQodCkge1xuICAgIHN1cGVyLm9uRXhpdFN0YXJ0LmNhbGwodGhpcywgdCk7XG4gICAgdmFyIG8gPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFwiZ2FtZXBsYXlfaW1nX21qX2RuXCIsIHRoaXMuX2Jhc2VUaWxlTm9kZSksXG4gICAgICBuID0gby5wYXRoLFxuICAgICAgaSA9IG8uYnVuZGxlTmFtZSxcbiAgICAgIHIgPSBvLmZyb21BdGxhcztcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUudXBkYXRlSW1nQ2FyZEJ5SW1nKG4sIGksIHIpO1xuICB9XG4gIG9uRW50ZXIodCkge1xuICAgIHN1cGVyLm9uRW50ZXIuY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUudXBkYXRlSW1nQ2FyZCgpO1xuICB9XG4gIGlzTG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzZVRpbGVOb2RlLmluZm8udGlsZU9iamVjdC5pc0NhcmRMb2NrKCkgPiAwO1xuICB9XG4gIG9uRXhpdCh0KSB7XG4gICAgc3VwZXIub25FeGl0LmNhbGwodGhpcywgdCk7XG4gICAgdmFyIG8gPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKFwiZ2FtZXBsYXlfaW1nX21qX2RuXCIsIHRoaXMuX2Jhc2VUaWxlTm9kZSksXG4gICAgICBuID0gby5wYXRoLFxuICAgICAgaSA9IG8uYnVuZGxlTmFtZSxcbiAgICAgIHIgPSBvLmZyb21BdGxhcztcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUudXBkYXRlSW1nQ2FyZEJ5SW1nKG4sIGksIHIpO1xuICB9XG4gIGFwcGx5SW1tZWRpYXRlKCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5fbm9kZSk7XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgaWYgKHRoaXMuX29uRW50ZXJlZENhbGxCYWNrKSB7XG4gICAgICB0aGlzLl9vbkVudGVyZWRDYWxsQmFjaygpO1xuICAgICAgdGhpcy5fb25FbnRlcmVkQ2FsbEJhY2sgPSB2b2lkIDA7XG4gICAgfVxuICB9XG4gIHRyeVBsYXlBbmkoKSB7XG4gICAgdGhpcy5oYXNSdW4gfHwgdGhpcy5wbGF5QW5pKCk7XG4gIH1cbn0iXX0=