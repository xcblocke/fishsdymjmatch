
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/MotivationalWordsBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f849foK6BAToRcehk3gXz+', 'MotivationalWordsBehavior');
// Scripts/base/MotivationalWordsBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var MotivationalWordsEffect_1 = require("../MotivationalWordsEffect");
var GameUtils_1 = require("../core/simulator/util/GameUtils");
var enumRes_1 = require("../constant/enumRes");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var MotivationalWordsBehavior = /** @class */ (function (_super) {
    __extends(MotivationalWordsBehavior, _super);
    function MotivationalWordsBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotivationalWordsBehavior.prototype.start = function (e) {
        var t, o = this, n = e.data, i = (n.comboNum, n.index), r = (n.tileId1, n.tileId2, this.context.getLastCollisionWorldPos() || cc.v3(0, 0, 0)), l = cc.v2(r.x, r.y), c = this.getAnimationName(i), u = this.createEffectNode(l, i);
        if (u) {
            var p = null === (t = cc.find("spin", u)) || void 0 === t ? void 0 : t.getComponent(sp.Skeleton);
            if (p) {
                this.playSound(i);
                GameUtils_1.default.playSpine(p, c, false, function () {
                    o.context.gameView.gameObjectPool.push(o.nodeName(), u);
                    o.finish(GameInputEnum_1.EBehaviorEnum.Success);
                });
            }
            else
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    MotivationalWordsBehavior.prototype.getAnimationName = function (e) {
        return MotivationalWordsEffect_1.MotivationalWordsEffect.aniCfg[e];
    };
    MotivationalWordsBehavior.prototype.nodeName = function () {
        return enumRes_1.PoolName.MotivationalWords;
    };
    MotivationalWordsBehavior.prototype.getParentLayer = function () {
        return this.context.gameView.nodeTopEffectRoot;
    };
    MotivationalWordsBehavior.prototype.createEffectNode = function (e, t) {
        var o = this.getParentLayer(), n = this.context.gameView.gameObjectPool.get(this.nodeName());
        if (!n || !cc.isValid(o))
            return null;
        n.active = true;
        n.parent = o;
        var i = cc.v2(e.x, e.y), r = this.getSafePosition(n, i, t), a = o.convertToNodeSpaceAR(r);
        n.position = cc.v3(a.x, a.y + 80, 0);
        return n;
    };
    MotivationalWordsBehavior.prototype.getSafePosition = function (e, t) {
        return t;
    };
    MotivationalWordsBehavior.prototype.clampToScreenWorld = function (e, t, o) {
        var n = cc.view.getVisibleSize(), i = n.width, r = n.height, a = this.getWordsSize(o), l = a.width, s = a.height, c = e.anchorX, u = e.anchorY, p = t.x - l * c, f = t.x + l * (1 - c), d = t.y - s * u, h = t.y + s * (1 - u), y = 0, m = 0;
        if (p < 0) {
            y = 0 - p;
        }
        else {
            f > i && (y = i - f);
        }
        if (d < 0) {
            m = 0 - d;
        }
        else {
            h > r && (m = r - h);
        }
        if (0 !== y || 0 !== m) {
            return cc.v2(t.x + y, t.y + m);
        }
        return t;
    };
    MotivationalWordsBehavior.prototype.getWordsSize = function (e) {
        var t = [{
                width: 300,
                height: 150
            }, {
                width: 320,
                height: 150
            }, {
                width: 450,
                height: 150
            }, {
                width: 450,
                height: 150
            }, {
                width: 580,
                height: 150
            }];
        return e < 0 || e >= t.length ? {
            width: 350,
            height: 150
        } : t[e];
    };
    MotivationalWordsBehavior.prototype.playSound = function (e) {
        var t = MotivationalWordsEffect_1.MotivationalWordsEffect.soundNameArr[e];
        t && mj.audioManager && mj.audioManager.playEffect(t);
    };
    MotivationalWordsBehavior.prototype.drawDebugBounds = function (e, t) {
        var o = e.getChildByName("__DEBUG_BOUNDS__");
        o && o.destroy();
        var n = this.getWordsSize(t), i = n.width, r = n.height, a = new cc.Node("__DEBUG_BOUNDS__");
        a.parent = e;
        a.anchorX = e.anchorX;
        a.anchorY = e.anchorY;
        a.position = cc.v3(0, 0, 0);
        a.opacity = 100;
        var l = a.addComponent(cc.Graphics), s = -i * e.anchorX, c = -r * e.anchorY;
        l.lineWidth = 3;
        l.strokeColor = cc.Color.GREEN;
        l.rect(s, c, i, r);
        l.stroke();
        l.fillColor = new cc.Color(0, 255, 0, 30);
        l.rect(s, c, i, r);
        l.fill();
        var u = new cc.Node("DebugLabel");
        u.parent = a;
        u.position = cc.v3(0, r / 2 + 20, 0);
        var p = u.addComponent(cc.Label);
        p.string = ["Good", "Great", "Excellent", "Amazing", "Unbelievable"][t] + ": " + i + "x" + r;
        p.fontSize = 20;
        p.lineHeight = 24;
        p.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        var f = u.addComponent(cc.LabelOutline);
        f.color = cc.Color.BLACK;
        f.width = 2;
    };
    __decorate([
        mj.traitEvent("MotivWordsBhv_start")
    ], MotivationalWordsBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("MotivWordsBhv_getAni")
    ], MotivationalWordsBehavior.prototype, "getAnimationName", null);
    __decorate([
        mj.traitEvent("MotivWordsBhv_nodeName")
    ], MotivationalWordsBehavior.prototype, "nodeName", null);
    __decorate([
        mj.traitEvent("MotivWordsBhv_getParent")
    ], MotivationalWordsBehavior.prototype, "getParentLayer", null);
    __decorate([
        mj.traitEvent("MotivWordsBhv_safePos")
    ], MotivationalWordsBehavior.prototype, "getSafePosition", null);
    __decorate([
        mj.traitEvent("MotivWordsBhv_getSize")
    ], MotivationalWordsBehavior.prototype, "getWordsSize", null);
    __decorate([
        mj.traitEvent("MotivWordsBhv_playSound")
    ], MotivationalWordsBehavior.prototype, "playSound", null);
    return MotivationalWordsBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.default = MotivationalWordsBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvTW90aXZhdGlvbmFsV29yZHNCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLHNFQUFxRTtBQUNyRSw4REFBeUQ7QUFDekQsK0NBQStDO0FBQy9DLHlEQUF3RDtBQUN4RDtJQUF1RCw2Q0FBaUI7SUFBeEU7O0lBOElBLENBQUM7SUE1SUMseUNBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUN6QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNyRixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDbkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFDNUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxD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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBNb3RpdmF0aW9uYWxXb3Jkc0VmZmVjdCB9IGZyb20gJy4uL01vdGl2YXRpb25hbFdvcmRzRWZmZWN0JztcbmltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvdXRpbC9HYW1lVXRpbHMnO1xuaW1wb3J0IHsgUG9vbE5hbWUgfSBmcm9tICcuLi9jb25zdGFudC9lbnVtUmVzJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3RpdmF0aW9uYWxXb3Jkc0JlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBAbWoudHJhaXRFdmVudChcIk1vdGl2V29yZHNCaHZfc3RhcnRcIilcbiAgc3RhcnQoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyA9IHRoaXMsXG4gICAgICBuID0gZS5kYXRhLFxuICAgICAgaSA9IChuLmNvbWJvTnVtLCBuLmluZGV4KSxcbiAgICAgIHIgPSAobi50aWxlSWQxLCBuLnRpbGVJZDIsIHRoaXMuY29udGV4dC5nZXRMYXN0Q29sbGlzaW9uV29ybGRQb3MoKSB8fCBjYy52MygwLCAwLCAwKSksXG4gICAgICBsID0gY2MudjIoci54LCByLnkpLFxuICAgICAgYyA9IHRoaXMuZ2V0QW5pbWF0aW9uTmFtZShpKSxcbiAgICAgIHUgPSB0aGlzLmNyZWF0ZUVmZmVjdE5vZGUobCwgaSk7XG4gICAgaWYgKHUpIHtcbiAgICAgIHZhciBwID0gbnVsbCA9PT0gKHQgPSBjYy5maW5kKFwic3BpblwiLCB1KSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgaWYgKHApIHtcbiAgICAgICAgdGhpcy5wbGF5U291bmQoaSk7XG4gICAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUocCwgYywgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvLmNvbnRleHQuZ2FtZVZpZXcuZ2FtZU9iamVjdFBvb2wucHVzaChvLm5vZGVOYW1lKCksIHUpO1xuICAgICAgICAgIG8uZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gICAgfSBlbHNlIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNb3RpdldvcmRzQmh2X2dldEFuaVwiKVxuICBnZXRBbmltYXRpb25OYW1lKGUpIHtcbiAgICByZXR1cm4gTW90aXZhdGlvbmFsV29yZHNFZmZlY3QuYW5pQ2ZnW2VdO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiTW90aXZXb3Jkc0Jodl9ub2RlTmFtZVwiKVxuICBub2RlTmFtZSgpIHtcbiAgICByZXR1cm4gUG9vbE5hbWUuTW90aXZhdGlvbmFsV29yZHM7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNb3RpdldvcmRzQmh2X2dldFBhcmVudFwiKVxuICBnZXRQYXJlbnRMYXllcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LmdhbWVWaWV3Lm5vZGVUb3BFZmZlY3RSb290O1xuICB9XG4gIGNyZWF0ZUVmZmVjdE5vZGUoZSwgdCkge1xuICAgIHZhciBvID0gdGhpcy5nZXRQYXJlbnRMYXllcigpLFxuICAgICAgbiA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5nYW1lT2JqZWN0UG9vbC5nZXQodGhpcy5ub2RlTmFtZSgpKTtcbiAgICBpZiAoIW4gfHwgIWNjLmlzVmFsaWQobykpIHJldHVybiBudWxsO1xuICAgIG4uYWN0aXZlID0gdHJ1ZTtcbiAgICBuLnBhcmVudCA9IG87XG4gICAgdmFyIGkgPSBjYy52MihlLngsIGUueSksXG4gICAgICByID0gdGhpcy5nZXRTYWZlUG9zaXRpb24obiwgaSwgdCksXG4gICAgICBhID0gby5jb252ZXJ0VG9Ob2RlU3BhY2VBUihyKTtcbiAgICBuLnBvc2l0aW9uID0gY2MudjMoYS54LCBhLnkgKyA4MCwgMCk7XG4gICAgcmV0dXJuIG47XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNb3RpdldvcmRzQmh2X3NhZmVQb3NcIilcbiAgZ2V0U2FmZVBvc2l0aW9uKGUsIHQpIHtcbiAgICByZXR1cm4gdDtcbiAgfVxuICBjbGFtcFRvU2NyZWVuV29ybGQoZSwgdCwgbykge1xuICAgIHZhciBuID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLFxuICAgICAgaSA9IG4ud2lkdGgsXG4gICAgICByID0gbi5oZWlnaHQsXG4gICAgICBhID0gdGhpcy5nZXRXb3Jkc1NpemUobyksXG4gICAgICBsID0gYS53aWR0aCxcbiAgICAgIHMgPSBhLmhlaWdodCxcbiAgICAgIGMgPSBlLmFuY2hvclgsXG4gICAgICB1ID0gZS5hbmNob3JZLFxuICAgICAgcCA9IHQueCAtIGwgKiBjLFxuICAgICAgZiA9IHQueCArIGwgKiAoMSAtIGMpLFxuICAgICAgZCA9IHQueSAtIHMgKiB1LFxuICAgICAgaCA9IHQueSArIHMgKiAoMSAtIHUpLFxuICAgICAgeSA9IDAsXG4gICAgICBtID0gMDtcbiAgICBpZiAocCA8IDApIHtcbiAgICAgIHkgPSAwIC0gcDtcbiAgICB9IGVsc2Uge1xuICAgICAgZiA+IGkgJiYgKHkgPSBpIC0gZik7XG4gICAgfVxuICAgIGlmIChkIDwgMCkge1xuICAgICAgbSA9IDAgLSBkO1xuICAgIH0gZWxzZSB7XG4gICAgICBoID4gciAmJiAobSA9IHIgLSBoKTtcbiAgICB9XG4gICAgaWYgKDAgIT09IHkgfHwgMCAhPT0gbSkge1xuICAgICAgcmV0dXJuIGNjLnYyKHQueCArIHksIHQueSArIG0pO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIk1vdGl2V29yZHNCaHZfZ2V0U2l6ZVwiKVxuICBnZXRXb3Jkc1NpemUoZSkge1xuICAgIHZhciB0ID0gW3tcbiAgICAgIHdpZHRoOiAzMDAsXG4gICAgICBoZWlnaHQ6IDE1MFxuICAgIH0sIHtcbiAgICAgIHdpZHRoOiAzMjAsXG4gICAgICBoZWlnaHQ6IDE1MFxuICAgIH0sIHtcbiAgICAgIHdpZHRoOiA0NTAsXG4gICAgICBoZWlnaHQ6IDE1MFxuICAgIH0sIHtcbiAgICAgIHdpZHRoOiA0NTAsXG4gICAgICBoZWlnaHQ6IDE1MFxuICAgIH0sIHtcbiAgICAgIHdpZHRoOiA1ODAsXG4gICAgICBoZWlnaHQ6IDE1MFxuICAgIH1dO1xuICAgIHJldHVybiBlIDwgMCB8fCBlID49IHQubGVuZ3RoID8ge1xuICAgICAgd2lkdGg6IDM1MCxcbiAgICAgIGhlaWdodDogMTUwXG4gICAgfSA6IHRbZV07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJNb3RpdldvcmRzQmh2X3BsYXlTb3VuZFwiKVxuICBwbGF5U291bmQoZSkge1xuICAgIHZhciB0ID0gTW90aXZhdGlvbmFsV29yZHNFZmZlY3Quc291bmROYW1lQXJyW2VdO1xuICAgIHQgJiYgbWouYXVkaW9NYW5hZ2VyICYmIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KHQpO1xuICB9XG4gIGRyYXdEZWJ1Z0JvdW5kcyhlLCB0KSB7XG4gICAgdmFyIG8gPSBlLmdldENoaWxkQnlOYW1lKFwiX19ERUJVR19CT1VORFNfX1wiKTtcbiAgICBvICYmIG8uZGVzdHJveSgpO1xuICAgIHZhciBuID0gdGhpcy5nZXRXb3Jkc1NpemUodCksXG4gICAgICBpID0gbi53aWR0aCxcbiAgICAgIHIgPSBuLmhlaWdodCxcbiAgICAgIGEgPSBuZXcgY2MuTm9kZShcIl9fREVCVUdfQk9VTkRTX19cIik7XG4gICAgYS5wYXJlbnQgPSBlO1xuICAgIGEuYW5jaG9yWCA9IGUuYW5jaG9yWDtcbiAgICBhLmFuY2hvclkgPSBlLmFuY2hvclk7XG4gICAgYS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgIGEub3BhY2l0eSA9IDEwMDtcbiAgICB2YXIgbCA9IGEuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKSxcbiAgICAgIHMgPSAtaSAqIGUuYW5jaG9yWCxcbiAgICAgIGMgPSAtciAqIGUuYW5jaG9yWTtcbiAgICBsLmxpbmVXaWR0aCA9IDM7XG4gICAgbC5zdHJva2VDb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xuICAgIGwucmVjdChzLCBjLCBpLCByKTtcbiAgICBsLnN0cm9rZSgpO1xuICAgIGwuZmlsbENvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDI1NSwgMCwgMzApO1xuICAgIGwucmVjdChzLCBjLCBpLCByKTtcbiAgICBsLmZpbGwoKTtcbiAgICB2YXIgdSA9IG5ldyBjYy5Ob2RlKFwiRGVidWdMYWJlbFwiKTtcbiAgICB1LnBhcmVudCA9IGE7XG4gICAgdS5wb3NpdGlvbiA9IGNjLnYzKDAsIHIgLyAyICsgMjAsIDApO1xuICAgIHZhciBwID0gdS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHAuc3RyaW5nID0gW1wiR29vZFwiLCBcIkdyZWF0XCIsIFwiRXhjZWxsZW50XCIsIFwiQW1hemluZ1wiLCBcIlVuYmVsaWV2YWJsZVwiXVt0XSArIFwiOiBcIiArIGkgKyBcInhcIiArIHI7XG4gICAgcC5mb250U2l6ZSA9IDIwO1xuICAgIHAubGluZUhlaWdodCA9IDI0O1xuICAgIHAuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUjtcbiAgICB2YXIgZiA9IHUuYWRkQ29tcG9uZW50KGNjLkxhYmVsT3V0bGluZSk7XG4gICAgZi5jb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xuICAgIGYud2lkdGggPSAyO1xuICB9XG59Il19