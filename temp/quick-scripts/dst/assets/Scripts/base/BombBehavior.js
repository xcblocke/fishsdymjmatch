
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/BombBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd619qvgbJKioeTMLkC4vH5', 'BombBehavior');
// Scripts/base/BombBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.BombBehavior = void 0;
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var FadeNodeStateAni_1 = require("../tilenodes/fsm/ani/FadeNodeStateAni");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var BombBehavior = /** @class */ (function (_super) {
    __extends(BombBehavior, _super);
    function BombBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BombBehavior.prototype.start = function (e) {
        if (e.data.bombIds && 2 === e.data.bombIds.length) {
            var t = this.context.gameView.nodeTopEffectRoot, o = e.data.pos1, n = e.data.pos2, i = this.context.getTileNodeManager().getFirstLayer(), r = i.convertToWorldSpaceAR(o), a = i.convertToWorldSpaceAR(n), s = t.convertToNodeSpaceAR(r), c = t.convertToNodeSpaceAR(a), u = s.add(c).mul(0.5), p = e.data.bombIds[0], f = e.data.bombIds[1], d = this.context.getTileNodeByTileId(p), h = this.context.getTileNodeByTileId(f), y = null == d ? void 0 : d.cardNode, m = null == h ? void 0 : h.cardNode;
            if (d && h && y && m) {
                var v = y.parent.convertToWorldSpaceAR(y.position), g = m.parent.convertToWorldSpaceAR(m.position), _ = t.convertToNodeSpaceAR(v), T = t.convertToNodeSpaceAR(g);
                this.playBomb(t, u, _, T, d, h);
            }
            else
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    BombBehavior.prototype.getSpineAndBundleName = function () {
        return {
            name: "spine/bomb/gameplay_props",
            bundleName: "mainRes"
        };
    };
    BombBehavior.prototype.playBomb = function (e, t, o, n, i, r) {
        var l = this, s = this.getSpineAndBundleName(), c = s.name, u = s.bundleName, p = BaseSpine_1.default.create(c, "in_hammer", 1, function () {
            var e = p.getComponent(sp.Skeleton);
            e && e.destroy();
        }, false, u), f = BaseSpine_1.default.create(c, "in_hammer", 1, function () {
            var e = p.getComponent(sp.Skeleton);
            e && e.destroy();
        }, false, u);
        p.node.parent = e;
        p.node.position = t;
        f.node.parent = e;
        f.node.position = t;
        p.node.name = "bombNode1";
        f.node.name = "bombNode2";
        this.playMove(p, o, i, function () {
            mj.triggerInternalEvent("BombBhv_finish", l, [o, n]) || l.finish();
        });
        this.playMove(f, n, r, function () { });
    };
    BombBehavior.prototype.getDelayTime = function () {
        return 0.2;
    };
    BombBehavior.prototype.getMoveTime = function () {
        return 0.2;
    };
    BombBehavior.prototype.playMove = function (e, t, o, n) {
        var i = this;
        cc.tween(e.node).to(this.getMoveTime(), {
            position: t
        }).delay(this.getDelayTime()).call(function () {
            var e = new FadeNodeStateAni_1.FadeNodeStateAni(o.cardNode, o);
            o.attachNodeStateAnis([e]);
            o.forceExitPlayAttachExitAni(null, function () {
                i.context.removeTileNodeByTileId(o.tileObject.id);
            });
            i.context.gameView.playShake();
            var r = i.context.gameView.nodeTopEffectRoot, l = i.getSpineAndBundleName(), s = l.name, u = l.bundleName, p = BaseSpine_1.default.create(s, "in_broken", 1, null, true, u);
            p.node.parent = r;
            p.node.position = t;
            i.playAudio();
            null == n || n();
        }).delay(2).call(function () {
            cc.isValid(e.node) && e.node.destroy();
        }).start();
    };
    BombBehavior.prototype.playAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Hammer);
    };
    __decorate([
        mj.traitEvent("BombBhv_spineBundleName")
    ], BombBehavior.prototype, "getSpineAndBundleName", null);
    __decorate([
        mj.traitEvent("BombBhv_playBomb")
    ], BombBehavior.prototype, "playBomb", null);
    __decorate([
        mj.traitEvent("BombBhv_moveTime")
    ], BombBehavior.prototype, "getMoveTime", null);
    __decorate([
        mj.traitEvent("BombBhv_playAudio")
    ], BombBehavior.prototype, "playAudio", null);
    return BombBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.BombBehavior = BombBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvQm9tYkJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXNEO0FBQ3RELHFFQUFvRTtBQUNwRSwwRUFBb0U7QUFDcEUsMEVBQXlFO0FBQ3pFLHlEQUF3RDtBQUN4RDtJQUFrQyxnQ0FBaUI7SUFBbkQ7O0lBOEZBLENBQUM7SUE3RkMsNEJBQUssR0FBTCxVQUFNLENBQUM7UUFDTCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDakQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQzdDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFDZixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ2YsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFDckQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFDOUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFDOUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFDN0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFDN0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQ3JCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFD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QUFDLG1CQUFtQixDQUFDO2lEQUdsQztJQUNILG1CQUFDO0NBOUZELEFBOEZDLENBOUZpQyxxQ0FBaUIsR0E4RmxEO0FBOUZZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgeyBFQmVoYXZpb3JFbnVtIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEZhZGVOb2RlU3RhdGVBbmkgfSBmcm9tICcuLi90aWxlbm9kZXMvZnNtL2FuaS9GYWRlTm9kZVN0YXRlQW5pJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgQm9tYkJlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgaWYgKGUuZGF0YS5ib21iSWRzICYmIDIgPT09IGUuZGF0YS5ib21iSWRzLmxlbmd0aCkge1xuICAgICAgdmFyIHQgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcubm9kZVRvcEVmZmVjdFJvb3QsXG4gICAgICAgIG8gPSBlLmRhdGEucG9zMSxcbiAgICAgICAgbiA9IGUuZGF0YS5wb3MyLFxuICAgICAgICBpID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFuYWdlcigpLmdldEZpcnN0TGF5ZXIoKSxcbiAgICAgICAgciA9IGkuY29udmVydFRvV29ybGRTcGFjZUFSKG8pLFxuICAgICAgICBhID0gaS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobiksXG4gICAgICAgIHMgPSB0LmNvbnZlcnRUb05vZGVTcGFjZUFSKHIpLFxuICAgICAgICBjID0gdC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihhKSxcbiAgICAgICAgdSA9IHMuYWRkKGMpLm11bCgwLjUpLFxuICAgICAgICBwID0gZS5kYXRhLmJvbWJJZHNbMF0sXG4gICAgICAgIGYgPSBlLmRhdGEuYm9tYklkc1sxXSxcbiAgICAgICAgZCA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZUJ5VGlsZUlkKHApLFxuICAgICAgICBoID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlQnlUaWxlSWQoZiksXG4gICAgICAgIHkgPSBudWxsID09IGQgPyB2b2lkIDAgOiBkLmNhcmROb2RlLFxuICAgICAgICBtID0gbnVsbCA9PSBoID8gdm9pZCAwIDogaC5jYXJkTm9kZTtcbiAgICAgIGlmIChkICYmIGggJiYgeSAmJiBtKSB7XG4gICAgICAgIHZhciB2ID0geS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHkucG9zaXRpb24pLFxuICAgICAgICAgIGcgPSBtLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobS5wb3NpdGlvbiksXG4gICAgICAgICAgXyA9IHQuY29udmVydFRvTm9kZVNwYWNlQVIodiksXG4gICAgICAgICAgVCA9IHQuY29udmVydFRvTm9kZVNwYWNlQVIoZyk7XG4gICAgICAgIHRoaXMucGxheUJvbWIodCwgdSwgXywgVCwgZCwgaCk7XG4gICAgICB9IGVsc2UgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB9IGVsc2UgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkJvbWJCaHZfc3BpbmVCdW5kbGVOYW1lXCIpXG4gIGdldFNwaW5lQW5kQnVuZGxlTmFtZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogXCJzcGluZS9ib21iL2dhbWVwbGF5X3Byb3BzXCIsXG4gICAgICBidW5kbGVOYW1lOiBcIm1haW5SZXNcIlxuICAgIH07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJCb21iQmh2X3BsYXlCb21iXCIpXG4gIHBsYXlCb21iKGUsIHQsIG8sIG4sIGksIHIpIHtcbiAgICB2YXIgbCA9IHRoaXMsXG4gICAgICBzID0gdGhpcy5nZXRTcGluZUFuZEJ1bmRsZU5hbWUoKSxcbiAgICAgIGMgPSBzLm5hbWUsXG4gICAgICB1ID0gcy5idW5kbGVOYW1lLFxuICAgICAgcCA9IEJhc2VTcGluZS5jcmVhdGUoYywgXCJpbl9oYW1tZXJcIiwgMSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHAuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgZSAmJiBlLmRlc3Ryb3koKTtcbiAgICAgIH0sIGZhbHNlLCB1KSxcbiAgICAgIGYgPSBCYXNlU3BpbmUuY3JlYXRlKGMsIFwiaW5faGFtbWVyXCIsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGUgPSBwLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgIGUgJiYgZS5kZXN0cm95KCk7XG4gICAgICB9LCBmYWxzZSwgdSk7XG4gICAgcC5ub2RlLnBhcmVudCA9IGU7XG4gICAgcC5ub2RlLnBvc2l0aW9uID0gdDtcbiAgICBmLm5vZGUucGFyZW50ID0gZTtcbiAgICBmLm5vZGUucG9zaXRpb24gPSB0O1xuICAgIHAubm9kZS5uYW1lID0gXCJib21iTm9kZTFcIjtcbiAgICBmLm5vZGUubmFtZSA9IFwiYm9tYk5vZGUyXCI7XG4gICAgdGhpcy5wbGF5TW92ZShwLCBvLCBpLCBmdW5jdGlvbiAoKSB7XG4gICAgICBtai50cmlnZ2VySW50ZXJuYWxFdmVudChcIkJvbWJCaHZfZmluaXNoXCIsIGwsIFtvLCBuXSkgfHwgbC5maW5pc2goKTtcbiAgICB9KTtcbiAgICB0aGlzLnBsYXlNb3ZlKGYsIG4sIHIsIGZ1bmN0aW9uICgpIHt9KTtcbiAgfVxuICBnZXREZWxheVRpbWUoKSB7XG4gICAgcmV0dXJuIDAuMjtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkJvbWJCaHZfbW92ZVRpbWVcIilcbiAgZ2V0TW92ZVRpbWUoKSB7XG4gICAgcmV0dXJuIDAuMjtcbiAgfVxuICBwbGF5TW92ZShlLCB0LCBvLCBuKSB7XG4gICAgdmFyIGkgPSB0aGlzO1xuICAgIGNjLnR3ZWVuKGUubm9kZSkudG8odGhpcy5nZXRNb3ZlVGltZSgpLCB7XG4gICAgICBwb3NpdGlvbjogdFxuICAgIH0pLmRlbGF5KHRoaXMuZ2V0RGVsYXlUaW1lKCkpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUgPSBuZXcgRmFkZU5vZGVTdGF0ZUFuaShvLmNhcmROb2RlLCBvKTtcbiAgICAgIG8uYXR0YWNoTm9kZVN0YXRlQW5pcyhbZV0pO1xuICAgICAgby5mb3JjZUV4aXRQbGF5QXR0YWNoRXhpdEFuaShudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGkuY29udGV4dC5yZW1vdmVUaWxlTm9kZUJ5VGlsZUlkKG8udGlsZU9iamVjdC5pZCk7XG4gICAgICB9KTtcbiAgICAgIGkuY29udGV4dC5nYW1lVmlldy5wbGF5U2hha2UoKTtcbiAgICAgIHZhciByID0gaS5jb250ZXh0LmdhbWVWaWV3Lm5vZGVUb3BFZmZlY3RSb290LFxuICAgICAgICBsID0gaS5nZXRTcGluZUFuZEJ1bmRsZU5hbWUoKSxcbiAgICAgICAgcyA9IGwubmFtZSxcbiAgICAgICAgdSA9IGwuYnVuZGxlTmFtZSxcbiAgICAgICAgcCA9IEJhc2VTcGluZS5jcmVhdGUocywgXCJpbl9icm9rZW5cIiwgMSwgbnVsbCwgdHJ1ZSwgdSk7XG4gICAgICBwLm5vZGUucGFyZW50ID0gcjtcbiAgICAgIHAubm9kZS5wb3NpdGlvbiA9IHQ7XG4gICAgICBpLnBsYXlBdWRpbygpO1xuICAgICAgbnVsbCA9PSBuIHx8IG4oKTtcbiAgICB9KS5kZWxheSgyKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNjLmlzVmFsaWQoZS5ub2RlKSAmJiBlLm5vZGUuZGVzdHJveSgpO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJCb21iQmh2X3BsYXlBdWRpb1wiKVxuICBwbGF5QXVkaW8oKSB7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuSGFtbWVyKTtcbiAgfVxufSJdfQ==