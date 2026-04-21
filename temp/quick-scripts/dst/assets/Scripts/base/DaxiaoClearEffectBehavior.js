
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/DaxiaoClearEffectBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5452bGWb3ZLYIgVsCxNzmWi', 'DaxiaoClearEffectBehavior');
// Scripts/base/DaxiaoClearEffectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DaxiaoClearEffectBehavior = exports.EDaxiaoPlayAnimType = void 0;
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var DaxiaoAnimPlayer_1 = require("../anim/DaxiaoAnimPlayer");
exports.EDaxiaoPlayAnimType = {
    None: "",
    Base: "DaxiaoTheme1",
    CaiDai: "DaxiaoTheme2",
    Maxituan: "DaxiaoTheme4",
    Garden: "DaxiaoTheme5",
    Haiyang: "DaxiaoTheme6",
    Hudie: "DaxiaoTheme7",
    Guofeng: "DaxiaoTheme8",
    Shipin: "DaxiaoTheme9",
    Zheshan: "DaxiaoTheme10",
    Yinxiang: "DaxiaoTheme11"
};
var DaxiaoClearEffectBehavior = /** @class */ (function (_super) {
    __extends(DaxiaoClearEffectBehavior, _super);
    function DaxiaoClearEffectBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nodeInfos = [];
        _this._animType = null;
        return _this;
    }
    DaxiaoClearEffectBehavior.prototype.start = function () {
        this._nodeInfos = [];
        this.context.gameView.setSwallowEventNodeActive(true);
        this.initCards();
    };
    DaxiaoClearEffectBehavior.prototype.onAbort = function () {
        var t = this;
        this.context.gameView.setSwallowEventNodeActive(false);
        this._nodeInfos.forEach(function (e) {
            t.context.getTileNodeMap().has(e.tileId2) && t.context.removeTileNodeByTileId(e.tileId2);
            cc.isValid(e.cardNode1) && e.cardNode1.destroy();
            cc.isValid(e.cardNode2) && e.cardNode2.destroy();
        });
        this._nodeInfos = [];
        _super.prototype.onAbort.call(this);
    };
    DaxiaoClearEffectBehavior.prototype.initCards = function () {
        var e, t, o = this.effect.data.finalMatchInfos, n = this.context.gameView.nodeTopEffectRoot, i = [], r = 0;
        try {
            for (var l = __values(o), s = l.next(); !s.done; s = l.next()) {
                var u = s.value, p = this.context.getTileNodeMap().get(u.tileId1), f = this.context.getTileNodeMap().get(u.tileId2);
                if (p && f && cc.isValid(p.tileNode) && cc.isValid(f.tileNode)) {
                    r || (r = p.info.tileObject.cardLayoutConfig.cardSpace[1] * this.context.layoutScale);
                    p.resetToNormal();
                    f.resetToNormal();
                    var d = cc.instantiate(p.cardNode), h = cc.instantiate(f.cardNode);
                    d.position = this.toLocalPos(p.cardNode, n);
                    h.position = this.toLocalPos(f.cardNode, n);
                    d.parent = h.parent = n;
                    h.active = false;
                    i.push({
                        cardNode1: d,
                        cardNode2: h,
                        tileId1: u.tileId1,
                        tileId2: u.tileId2,
                        targetPos1: cc.v3(),
                        targetPos2: cc.v3(),
                        runIndex: 0
                    });
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                s && !s.done && (t = l.return) && t.call(l);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this._nodeInfos = i;
        var y = DaxiaoAnimPlayer_1.DaxiaoAnimPlayer.getConfigs(i.length), m = this.context.randomGenerator.randomElement(y);
        this.playAnimation(m, i);
    };
    DaxiaoClearEffectBehavior.prototype.changeBg = function () { };
    DaxiaoClearEffectBehavior.prototype.setAnimType = function (e) {
        this._animType = e;
    };
    DaxiaoClearEffectBehavior.prototype.playAnimation = function (e, t) {
        var o = this, n = this.context.gameView.nodeTopEffectRoot;
        this.setAnimType(exports.EDaxiaoPlayAnimType.Base);
        this._animPlayer = new DaxiaoAnimPlayer_1.DaxiaoAnimPlayer({
            effectNode: n,
            layoutScale: this.context.layoutScale,
            onComplete: function () {
                return o.onAnimationComplete();
            },
            onShake: function () {
                return o.context.gameView.playShake();
            },
            loadRes: function (e, t, n) {
                return o.context.gameCtr.loadRes(e, t, n);
            },
            getTileNodePos: function (e) {
                var t = o.context.getTileNodeMap().get(e);
                return t ? o.toLocalPos(t.cardNode, n) : null;
            },
            removeTileNode: function (e) {
                o.context.removeTileNodeByTileId(e);
            },
            getTileObject: function (e) {
                var t = o.context.getTileNodeMap().get(e);
                return t ? t.info.tileObject : null;
            },
            getRandomIndexes: function (e) {
                return o.context.randomGenerator.shuffle(Array.from({
                    length: e
                }, function (e, t) {
                    return t;
                }));
            },
            getCardSpace: function () {
                return 0;
            }
        }, e);
        this._animPlayer.setupPositions(t, 0);
        t.forEach(function (e) {
            o._animPlayer.showClearTip(e.cardNode1);
            o._animPlayer.showClearTip(e.cardNode2);
            o.context.removeTileNodeByTileId(e.tileId1);
        });
        this._animPlayer.playFullAnimation(t);
    };
    DaxiaoClearEffectBehavior.prototype.toLocalPos = function (e, t) {
        var o = e.convertToWorldSpaceAR(cc.v2(0, 0)), n = t.convertToNodeSpaceAR(o);
        return cc.v3(n.x, n.y, 0);
    };
    DaxiaoClearEffectBehavior.prototype.onAnimationComplete = function (e) {
        if (e === void 0) { e = true; }
        e && this.changeBg(this._animType, this.context);
        this.context.gameView.setSwallowEventNodeActive(false);
        this.finish();
    };
    __decorate([
        mj.traitEvent("DaxiaoBhr_changeBg")
    ], DaxiaoClearEffectBehavior.prototype, "changeBg", null);
    __decorate([
        mj.traitEvent("DaxiaoBhr_playAni")
    ], DaxiaoClearEffectBehavior.prototype, "playAnimation", null);
    return DaxiaoClearEffectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.DaxiaoClearEffectBehavior = DaxiaoClearEffectBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvRGF4aWFvQ2xlYXJFZmZlY3RCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUF3RDtBQUN4RCw2REFBNEQ7QUFDakQsUUFBQSxtQkFBbUIsR0FBRztJQUMvQixJQUFJLEVBQUUsRUFBRTtJQUNSLElBQUksRUFBRSxjQUFjO0lBQ3BCLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCLEtBQUssRUFBRSxjQUFjO0lBQ3JCLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCLE1BQU0sRUFBRSxjQUFjO0lBQ3RCLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLFFBQVEsRUFBRSxlQUFlO0NBQzFCLENBQUM7QUFDRjtJQUErQyw2Q0FBaUI7SUFBaEU7UUFBQSxxRUFrSUM7UUFqSUMsZ0JBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZUFBUyxHQUFHLElBQUksQ0FBQzs7SUFnSW5CLENBQUM7SUEvSEMseUNBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QsMkNBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNqQyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxD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MUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUE1REQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDOzZEQUN2QjtJQUtiO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztrRUE4Q2xDO0lBV0gsZ0NBQUM7Q0FsSUQsQUFrSUMsQ0FsSThDLHFDQUFpQixHQWtJL0Q7QUFsSVksOERBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUJlaGF2aW9yc0Jhc2UgfSBmcm9tICcuL0dhbWVCZWhhdmlvcnNCYXNlJztcbmltcG9ydCB7IERheGlhb0FuaW1QbGF5ZXIgfSBmcm9tICcuLi9hbmltL0RheGlhb0FuaW1QbGF5ZXInO1xuZXhwb3J0IHZhciBFRGF4aWFvUGxheUFuaW1UeXBlID0ge1xuICBOb25lOiBcIlwiLFxuICBCYXNlOiBcIkRheGlhb1RoZW1lMVwiLFxuICBDYWlEYWk6IFwiRGF4aWFvVGhlbWUyXCIsXG4gIE1heGl0dWFuOiBcIkRheGlhb1RoZW1lNFwiLFxuICBHYXJkZW46IFwiRGF4aWFvVGhlbWU1XCIsXG4gIEhhaXlhbmc6IFwiRGF4aWFvVGhlbWU2XCIsXG4gIEh1ZGllOiBcIkRheGlhb1RoZW1lN1wiLFxuICBHdW9mZW5nOiBcIkRheGlhb1RoZW1lOFwiLFxuICBTaGlwaW46IFwiRGF4aWFvVGhlbWU5XCIsXG4gIFpoZXNoYW46IFwiRGF4aWFvVGhlbWUxMFwiLFxuICBZaW54aWFuZzogXCJEYXhpYW9UaGVtZTExXCJcbn07XG5leHBvcnQgY2xhc3MgRGF4aWFvQ2xlYXJFZmZlY3RCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgX25vZGVJbmZvcyA9IFtdO1xuICBfYW5pbVR5cGUgPSBudWxsO1xuICBzdGFydCgpIHtcbiAgICB0aGlzLl9ub2RlSW5mb3MgPSBbXTtcbiAgICB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuc2V0U3dhbGxvd0V2ZW50Tm9kZUFjdGl2ZSh0cnVlKTtcbiAgICB0aGlzLmluaXRDYXJkcygpO1xuICB9XG4gIG9uQWJvcnQoKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLl9ub2RlSW5mb3MuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdC5jb250ZXh0LmdldFRpbGVOb2RlTWFwKCkuaGFzKGUudGlsZUlkMikgJiYgdC5jb250ZXh0LnJlbW92ZVRpbGVOb2RlQnlUaWxlSWQoZS50aWxlSWQyKTtcbiAgICAgIGNjLmlzVmFsaWQoZS5jYXJkTm9kZTEpICYmIGUuY2FyZE5vZGUxLmRlc3Ryb3koKTtcbiAgICAgIGNjLmlzVmFsaWQoZS5jYXJkTm9kZTIpICYmIGUuY2FyZE5vZGUyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgICB0aGlzLl9ub2RlSW5mb3MgPSBbXTtcbiAgICBzdXBlci5vbkFib3J0LmNhbGwodGhpcyk7XG4gIH1cbiAgaW5pdENhcmRzKCkge1xuICAgIHZhciBlLFxuICAgICAgdCxcbiAgICAgIG8gPSB0aGlzLmVmZmVjdC5kYXRhLmZpbmFsTWF0Y2hJbmZvcyxcbiAgICAgIG4gPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcubm9kZVRvcEVmZmVjdFJvb3QsXG4gICAgICBpID0gW10sXG4gICAgICByID0gMDtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbCA9IF9fdmFsdWVzKG8pLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkge1xuICAgICAgICB2YXIgdSA9IHMudmFsdWUsXG4gICAgICAgICAgcCA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpLmdldCh1LnRpbGVJZDEpLFxuICAgICAgICAgIGYgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYXAoKS5nZXQodS50aWxlSWQyKTtcbiAgICAgICAgaWYgKHAgJiYgZiAmJiBjYy5pc1ZhbGlkKHAudGlsZU5vZGUpICYmIGNjLmlzVmFsaWQoZi50aWxlTm9kZSkpIHtcbiAgICAgICAgICByIHx8IChyID0gcC5pbmZvLnRpbGVPYmplY3QuY2FyZExheW91dENvbmZpZy5jYXJkU3BhY2VbMV0gKiB0aGlzLmNvbnRleHQubGF5b3V0U2NhbGUpO1xuICAgICAgICAgIHAucmVzZXRUb05vcm1hbCgpO1xuICAgICAgICAgIGYucmVzZXRUb05vcm1hbCgpO1xuICAgICAgICAgIHZhciBkID0gY2MuaW5zdGFudGlhdGUocC5jYXJkTm9kZSksXG4gICAgICAgICAgICBoID0gY2MuaW5zdGFudGlhdGUoZi5jYXJkTm9kZSk7XG4gICAgICAgICAgZC5wb3NpdGlvbiA9IHRoaXMudG9Mb2NhbFBvcyhwLmNhcmROb2RlLCBuKTtcbiAgICAgICAgICBoLnBvc2l0aW9uID0gdGhpcy50b0xvY2FsUG9zKGYuY2FyZE5vZGUsIG4pO1xuICAgICAgICAgIGQucGFyZW50ID0gaC5wYXJlbnQgPSBuO1xuICAgICAgICAgIGguYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgaS5wdXNoKHtcbiAgICAgICAgICAgIGNhcmROb2RlMTogZCxcbiAgICAgICAgICAgIGNhcmROb2RlMjogaCxcbiAgICAgICAgICAgIHRpbGVJZDE6IHUudGlsZUlkMSxcbiAgICAgICAgICAgIHRpbGVJZDI6IHUudGlsZUlkMixcbiAgICAgICAgICAgIHRhcmdldFBvczE6IGNjLnYzKCksXG4gICAgICAgICAgICB0YXJnZXRQb3MyOiBjYy52MygpLFxuICAgICAgICAgICAgcnVuSW5kZXg6IDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBzICYmICFzLmRvbmUgJiYgKHQgPSBsLnJldHVybikgJiYgdC5jYWxsKGwpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX25vZGVJbmZvcyA9IGk7XG4gICAgdmFyIHkgPSBEYXhpYW9BbmltUGxheWVyLmdldENvbmZpZ3MoaS5sZW5ndGgpLFxuICAgICAgbSA9IHRoaXMuY29udGV4dC5yYW5kb21HZW5lcmF0b3IucmFuZG9tRWxlbWVudCh5KTtcbiAgICB0aGlzLnBsYXlBbmltYXRpb24obSwgaSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJEYXhpYW9CaHJfY2hhbmdlQmdcIilcbiAgY2hhbmdlQmcoKSB7fVxuICBzZXRBbmltVHlwZShlKSB7XG4gICAgdGhpcy5fYW5pbVR5cGUgPSBlO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiRGF4aWFvQmhyX3BsYXlBbmlcIilcbiAgcGxheUFuaW1hdGlvbihlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzLFxuICAgICAgbiA9IHRoaXMuY29udGV4dC5nYW1lVmlldy5ub2RlVG9wRWZmZWN0Um9vdDtcbiAgICB0aGlzLnNldEFuaW1UeXBlKEVEYXhpYW9QbGF5QW5pbVR5cGUuQmFzZSk7XG4gICAgdGhpcy5fYW5pbVBsYXllciA9IG5ldyBEYXhpYW9BbmltUGxheWVyKHtcbiAgICAgIGVmZmVjdE5vZGU6IG4sXG4gICAgICBsYXlvdXRTY2FsZTogdGhpcy5jb250ZXh0LmxheW91dFNjYWxlLFxuICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gby5vbkFuaW1hdGlvbkNvbXBsZXRlKCk7XG4gICAgICB9LFxuICAgICAgb25TaGFrZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gby5jb250ZXh0LmdhbWVWaWV3LnBsYXlTaGFrZSgpO1xuICAgICAgfSxcbiAgICAgIGxvYWRSZXM6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICAgIHJldHVybiBvLmNvbnRleHQuZ2FtZUN0ci5sb2FkUmVzKGUsIHQsIG4pO1xuICAgICAgfSxcbiAgICAgIGdldFRpbGVOb2RlUG9zOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IG8uY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpLmdldChlKTtcbiAgICAgICAgcmV0dXJuIHQgPyBvLnRvTG9jYWxQb3ModC5jYXJkTm9kZSwgbikgOiBudWxsO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZVRpbGVOb2RlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBvLmNvbnRleHQucmVtb3ZlVGlsZU5vZGVCeVRpbGVJZChlKTtcbiAgICAgIH0sXG4gICAgICBnZXRUaWxlT2JqZWN0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdCA9IG8uY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpLmdldChlKTtcbiAgICAgICAgcmV0dXJuIHQgPyB0LmluZm8udGlsZU9iamVjdCA6IG51bGw7XG4gICAgICB9LFxuICAgICAgZ2V0UmFuZG9tSW5kZXhlczogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIG8uY29udGV4dC5yYW5kb21HZW5lcmF0b3Iuc2h1ZmZsZShBcnJheS5mcm9tKHtcbiAgICAgICAgICBsZW5ndGg6IGVcbiAgICAgICAgfSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfSkpO1xuICAgICAgfSxcbiAgICAgIGdldENhcmRTcGFjZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9LCBlKTtcbiAgICB0aGlzLl9hbmltUGxheWVyLnNldHVwUG9zaXRpb25zKHQsIDApO1xuICAgIHQuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgby5fYW5pbVBsYXllci5zaG93Q2xlYXJUaXAoZS5jYXJkTm9kZTEpO1xuICAgICAgby5fYW5pbVBsYXllci5zaG93Q2xlYXJUaXAoZS5jYXJkTm9kZTIpO1xuICAgICAgby5jb250ZXh0LnJlbW92ZVRpbGVOb2RlQnlUaWxlSWQoZS50aWxlSWQxKTtcbiAgICB9KTtcbiAgICB0aGlzLl9hbmltUGxheWVyLnBsYXlGdWxsQW5pbWF0aW9uKHQpO1xuICB9XG4gIHRvTG9jYWxQb3MoZSwgdCkge1xuICAgIHZhciBvID0gZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpLFxuICAgICAgbiA9IHQuY29udmVydFRvTm9kZVNwYWNlQVIobyk7XG4gICAgcmV0dXJuIGNjLnYzKG4ueCwgbi55LCAwKTtcbiAgfVxuICBvbkFuaW1hdGlvbkNvbXBsZXRlKGUgPSB0cnVlKSB7XG4gICAgZSAmJiB0aGlzLmNoYW5nZUJnKHRoaXMuX2FuaW1UeXBlLCB0aGlzLmNvbnRleHQpO1xuICAgIHRoaXMuY29udGV4dC5nYW1lVmlldy5zZXRTd2FsbG93RXZlbnROb2RlQWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLmZpbmlzaCgpO1xuICB9XG59Il19