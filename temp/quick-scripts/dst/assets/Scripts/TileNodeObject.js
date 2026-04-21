
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileNodeObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43bffvbduhM25TFO/oSOwTB', 'TileNodeObject');
// Scripts/TileNodeObject.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileNodeObject = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var GameEvent_1 = require("./simulator/constant/GameEvent");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var BaseTileNode_1 = require("./BaseTileNode");
var TileNodeObject = /** @class */ (function (_super) {
    __extends(TileNodeObject, _super);
    function TileNodeObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.Normal;
        return _this;
    }
    TileNodeObject.prototype.getSelectedScale = function () {
        return this.info.tileObject.getSelectScale() || 1;
    };
    TileNodeObject.prototype.playSelectAnimation = function (e) {
        this._shadowCardStateCtl.playEnterAni(this.dragRootNode);
        this._cardStateCtl.playEnterAni(this.dragRootNode, function () {
            null == e || e();
        });
    };
    TileNodeObject.prototype.selectedFinish = function () {
        mj.EventManager.emit(GameEvent_1.EGameEvent.TileNode_SelectedFinish, this);
    };
    TileNodeObject.prototype.selected = function () {
        var e = this, t = function t() {
            e.selectedFinish();
        };
        if (this.isSelect())
            t();
        else {
            mj.EventManager.emit(GameEvent_1.EGameEvent.TileNode_BeginSelected, this);
            this.context.gameType == GameTypeEnums_1.MjGameType.Classic && this.cancelDropToPosition();
            this.showSelectEffect();
            this.playSelectAnimation(t);
        }
    };
    TileNodeObject.prototype.cancelSelectedAnimation = function (e) {
        var t = this;
        this._cardStateCtl.playExitAni(this.layerNode, function () {
            t.resetSiblingIndex();
            null == e || e();
        });
        this._shadowCardStateCtl.playExitAni(this.shadowLayerNode);
    };
    TileNodeObject.prototype.cancelSelected = function () {
        var e = this, t = function t() {
            e.resetPosition();
            e.cancelSelectedFinish();
        };
        if (this.isSelect()) {
            mj.EventManager.emit(GameEvent_1.EGameEvent.TileNode_BeginUnSelected, this);
            this.hideSelectEffect();
            this.cancelSelectedAnimation(function () {
                t();
            });
        }
        else
            t();
    };
    TileNodeObject.prototype.clearCancelSelected = function () {
        this.hidePropHint();
        this.hideSelectEffect();
        this._shadowCardStateCtl.forceEnter(this.dragRootNode);
        this._cardStateCtl.forceEnter(this.dragRootNode);
    };
    TileNodeObject.prototype.resetToNormal = function () {
        this.hidePropHint();
        this.hideSelectEffect();
        this.imgLockBg.active = false;
    };
    TileNodeObject.prototype.resetPosition = function () { };
    TileNodeObject.prototype.touchEndForMove = function () {
        this._shadowCardStateCtl.forceEnter(this.dragRootNode);
        this._cardStateCtl.forceEnter(this.dragRootNode);
        this.resetSiblingIndex();
    };
    TileNodeObject.prototype.cancelTouch = function () {
        if (this.isSelect()) {
            this._shadowCardStateCtl.forceEnter(this.dragRootNode);
            this._cardStateCtl.forceEnter(this.dragRootNode);
            this.resetSiblingIndex();
        }
        else {
            this._cardStateCtl.forceExit(this.layerNode);
            this._shadowCardStateCtl.forceExit(this.shadowLayerNode);
            this.resetSiblingIndex();
        }
    };
    TileNodeObject.prototype.setPositionWithDelta = function (e, t) {
        if (e === void 0) { e = true; }
        this._shadowCardStateCtl.forceExitMove(this.dragRootNode, new cc.Vec3(t.x, t.y, 0));
        this._cardStateCtl.forceExitMove(this.dragRootNode, new cc.Vec3(t.x, t.y, 0));
    };
    TileNodeObject.prototype.attachNodeStateAnis = function (e) {
        var t, o;
        try {
            for (var n = __values(e), i = n.next(); !i.done; i = n.next())
                i.value.reset();
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                i && !i.done && (o = n.return) && o.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        this._nodeStateAnis = e;
    };
    TileNodeObject.prototype.stopAllAnimation = function () {
        this._cardStateCtl.forceExit(this.layerNode);
        this._shadowCardStateCtl.forceExit(this.shadowLayerNode);
    };
    TileNodeObject.prototype.playAttachEnterAni = function (e, t) {
        for (var o = this, n = function n(n) {
            i._nodeStateAnis[n].playAni(e, function () {
                n === o._nodeStateAnis.length - 1 && (null == t || t());
            });
        }, i = this, r = 0; r < this._nodeStateAnis.length; r++)
            n(r);
    };
    TileNodeObject.prototype.playHintAnimation = function (e, t) {
        var o, n;
        null === (o = this._cardStateCtl) || void 0 === o || o.playHintEnterAni(e, t);
        null === (n = this._shadowCardStateCtl) || void 0 === n || n.playHintEnterAni(e);
    };
    TileNodeObject.prototype.exitHintAnimation = function () {
        var e, t;
        null === (e = this._cardStateCtl) || void 0 === e || e.playHintExitAni();
        null === (t = this._shadowCardStateCtl) || void 0 === t || t.playHintExitAni();
    };
    TileNodeObject.prototype.pauseHintShake = function () {
        var e, t;
        null === (e = this._cardStateCtl) || void 0 === e || e.pauseHint();
        null === (t = this._shadowCardStateCtl) || void 0 === t || t.pauseHint();
    };
    TileNodeObject.prototype.resumeHintShake = function () {
        var e, t;
        null === (e = this._cardStateCtl) || void 0 === e || e.resumeHint();
        null === (t = this._shadowCardStateCtl) || void 0 === t || t.resumeHint();
    };
    TileNodeObject.prototype.playSelectLoopAnimation = function (e) {
        var t, o;
        null === (t = this._tileNodeStateCtl) || void 0 === t || t.playSelectLoopEnterAni(e);
        null === (o = this._shadowNodeStateCtl) || void 0 === o || o.playSelectLoopEnterAni(e);
    };
    TileNodeObject.prototype.stopSelectLoopAnimation = function () {
        var e, t;
        null === (e = this._tileNodeStateCtl) || void 0 === e || e.playSelectLoopExitAni();
        null === (t = this._shadowNodeStateCtl) || void 0 === t || t.playSelectLoopExitAni();
    };
    TileNodeObject.prototype.isSelectLoopPlaying = function () {
        var e;
        return (null === (e = this._tileNodeStateCtl) || void 0 === e ? void 0 : e.isSelectLoopPlaying()) || false;
    };
    TileNodeObject.prototype.playAttachExitAni = function (e, t) {
        for (var o = this, n = function n(n) {
            i._nodeStateAnis[n].exitAni(e, function () {
                n === o._nodeStateAnis.length - 1 && (null == t || t());
            });
        }, i = this, r = 0; r < this._nodeStateAnis.length; r++)
            n(r);
    };
    TileNodeObject.prototype.forceEnterAttachEnterAni = function (e, t) {
        for (var o = 0; o < this._nodeStateAnis.length; o++)
            this._nodeStateAnis[o].forceEnter(e);
        null == t || t();
    };
    TileNodeObject.prototype.forceExitAttachExitAni = function (e, t) {
        for (var o = 0; o < this._nodeStateAnis.length; o++)
            this._nodeStateAnis[o].forceExit(e);
        null == t || t();
    };
    TileNodeObject.prototype.forceEnterPlayAttachEnterAni = function (e, t) {
        for (var o = 0; o < this._nodeStateAnis.length; o++)
            this._nodeStateAnis[o].playAniForce(e, t);
    };
    TileNodeObject.prototype.forceExitPlayAttachExitAni = function (e, t) {
        for (var o = 0; o < this._nodeStateAnis.length; o++)
            this._nodeStateAnis[o].exitAniForce(e, t);
    };
    TileNodeObject.prototype.playAnimNodeAnimation = function (e, t, o, n, i, r, a) {
        if (o === void 0) { o = true; }
        this.stopAnimNodeAnimation();
        var s = this.updateTempAnimNode(), c = BaseSpine_1.default.refreshWithNode(s, e, a);
        i && c.attachNode("hook_mahjong", i);
        if (r) {
            c.stopAtFirstFrameOf(t);
        }
        else {
            c.setAnimation(t, o ? -1 : 1, n);
        }
        return c;
    };
    TileNodeObject.prototype.stopAnimNodeAnimation = function () {
        this.tileNode.parent = this.animNode;
        this.tileNode.setPosition(0, 0, 0);
        this.tileNode.setScale(1 / this.info.tileObject.layoutScale);
        this.tileNode.angle = 0;
        this.destroyTempAnimNode();
    };
    TileNodeObject.prototype.dropToPosition = function (e) {
        this._cardStateCtl.playDropAni(this.layerNode, e);
        this._shadowCardStateCtl.playDropAni(this.shadowLayerNode, function () { });
    };
    TileNodeObject.prototype.cancelDropToPosition = function (e) {
        this._cardStateCtl.cancelDropAni(this.layerNode, e);
        this._shadowCardStateCtl.cancelDropAni(this.shadowLayerNode, function () { });
    };
    __decorate([
        mj.traitEvent("TileNodeObj_getScale")
    ], TileNodeObject.prototype, "getSelectedScale", null);
    __decorate([
        mj.traitEvent("TileNodeObj_BeginSelected")
    ], TileNodeObject.prototype, "selected", null);
    __decorate([
        mj.traitEvent("TileNodeObj_UnSelected")
    ], TileNodeObject.prototype, "cancelSelected", null);
    __decorate([
        mj.traitEvent("TileNodeObj_reToNormal")
    ], TileNodeObject.prototype, "resetToNormal", null);
    __decorate([
        mj.traitEvent("TileNodeObj_touchEnd")
    ], TileNodeObject.prototype, "touchEndForMove", null);
    __decorate([
        mj.traitEvent("TileNodeObj_setPosition")
    ], TileNodeObject.prototype, "setPositionWithDelta", null);
    __decorate([
        mj.traitEvent("TileNodeObj_playAnim")
    ], TileNodeObject.prototype, "playAnimNodeAnimation", null);
    return TileNodeObject;
}(BaseTileNode_1.BaseTileNode));
exports.TileNodeObject = TileNodeObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGVOb2RlT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBQ3JELDREQUE0RDtBQUM1RCx5RUFBcUU7QUFDckUsa0VBQXNFO0FBQ3RFLCtDQUE4QztBQUM5QztJQUFvQyxrQ0FBWTtJQUFoRDtRQUFBLHFFQXFNQztRQXBNQyxlQUFTLEdBQUcsZ0NBQWlCLENBQUMsTUFBTSxDQUFDOztJQW9NdkMsQ0FBQztJQWxNQyx5Q0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsNENBQW1CLEdBQW5CLFVBQW9CLENBQUM7UUFDbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHVDQUFjLEdBQWQ7UUFDRSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxzQkFBVSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUNWLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDWixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDO1FBQ0osSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQUUsQ0FBQyxFQUFFLENBQUM7YUFBSztZQUM1QixFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxzQkFBVSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FB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YUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDOzhEQUl4QztJQXFGRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7K0RBWXJDO0lBZ0JILHFCQUFDO0NBck1ELEFBcU1DLENBck1tQywyQkFBWSxHQXFNL0M7QUFyTVksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNwaW5lIGZyb20gJy4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRUdhbWVFdmVudCB9IGZyb20gJy4vc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVFdmVudCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IEVUaWxlTm9kZVNob3dUeXBlIH0gZnJvbSAnLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IEJhc2VUaWxlTm9kZSB9IGZyb20gJy4vQmFzZVRpbGVOb2RlJztcbmV4cG9ydCBjbGFzcyBUaWxlTm9kZU9iamVjdCBleHRlbmRzIEJhc2VUaWxlTm9kZSB7XG4gIF9pbml0VHlwZSA9IEVUaWxlTm9kZVNob3dUeXBlLk5vcm1hbDtcbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlTm9kZU9ial9nZXRTY2FsZVwiKVxuICBnZXRTZWxlY3RlZFNjYWxlKCkge1xuICAgIHJldHVybiB0aGlzLmluZm8udGlsZU9iamVjdC5nZXRTZWxlY3RTY2FsZSgpIHx8IDE7XG4gIH1cbiAgcGxheVNlbGVjdEFuaW1hdGlvbihlKSB7XG4gICAgdGhpcy5fc2hhZG93Q2FyZFN0YXRlQ3RsLnBsYXlFbnRlckFuaSh0aGlzLmRyYWdSb290Tm9kZSk7XG4gICAgdGhpcy5fY2FyZFN0YXRlQ3RsLnBsYXlFbnRlckFuaSh0aGlzLmRyYWdSb290Tm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgbnVsbCA9PSBlIHx8IGUoKTtcbiAgICB9KTtcbiAgfVxuICBzZWxlY3RlZEZpbmlzaCgpIHtcbiAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFR2FtZUV2ZW50LlRpbGVOb2RlX1NlbGVjdGVkRmluaXNoLCB0aGlzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGVOb2RlT2JqX0JlZ2luU2VsZWN0ZWRcIilcbiAgc2VsZWN0ZWQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgdCA9IGZ1bmN0aW9uIHQoKSB7XG4gICAgICAgIGUuc2VsZWN0ZWRGaW5pc2goKTtcbiAgICAgIH07XG4gICAgaWYgKHRoaXMuaXNTZWxlY3QoKSkgdCgpO2Vsc2Uge1xuICAgICAgbWouRXZlbnRNYW5hZ2VyLmVtaXQoRUdhbWVFdmVudC5UaWxlTm9kZV9CZWdpblNlbGVjdGVkLCB0aGlzKTtcbiAgICAgIHRoaXMuY29udGV4dC5nYW1lVHlwZSA9PSBNakdhbWVUeXBlLkNsYXNzaWMgJiYgdGhpcy5jYW5jZWxEcm9wVG9Qb3NpdGlvbigpO1xuICAgICAgdGhpcy5zaG93U2VsZWN0RWZmZWN0KCk7XG4gICAgICB0aGlzLnBsYXlTZWxlY3RBbmltYXRpb24odCk7XG4gICAgfVxuICB9XG4gIGNhbmNlbFNlbGVjdGVkQW5pbWF0aW9uKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgdGhpcy5fY2FyZFN0YXRlQ3RsLnBsYXlFeGl0QW5pKHRoaXMubGF5ZXJOb2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0LnJlc2V0U2libGluZ0luZGV4KCk7XG4gICAgICBudWxsID09IGUgfHwgZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuX3NoYWRvd0NhcmRTdGF0ZUN0bC5wbGF5RXhpdEFuaSh0aGlzLnNoYWRvd0xheWVyTm9kZSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlTm9kZU9ial9VblNlbGVjdGVkXCIpXG4gIGNhbmNlbFNlbGVjdGVkKCkge1xuICAgIHZhciBlID0gdGhpcyxcbiAgICAgIHQgPSBmdW5jdGlvbiB0KCkge1xuICAgICAgICBlLnJlc2V0UG9zaXRpb24oKTtcbiAgICAgICAgZS5jYW5jZWxTZWxlY3RlZEZpbmlzaCgpO1xuICAgICAgfTtcbiAgICBpZiAodGhpcy5pc1NlbGVjdCgpKSB7XG4gICAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFR2FtZUV2ZW50LlRpbGVOb2RlX0JlZ2luVW5TZWxlY3RlZCwgdGhpcyk7XG4gICAgICB0aGlzLmhpZGVTZWxlY3RFZmZlY3QoKTtcbiAgICAgIHRoaXMuY2FuY2VsU2VsZWN0ZWRBbmltYXRpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICB0KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIGNsZWFyQ2FuY2VsU2VsZWN0ZWQoKSB7XG4gICAgdGhpcy5oaWRlUHJvcEhpbnQoKTtcbiAgICB0aGlzLmhpZGVTZWxlY3RFZmZlY3QoKTtcbiAgICB0aGlzLl9zaGFkb3dDYXJkU3RhdGVDdGwuZm9yY2VFbnRlcih0aGlzLmRyYWdSb290Tm9kZSk7XG4gICAgdGhpcy5fY2FyZFN0YXRlQ3RsLmZvcmNlRW50ZXIodGhpcy5kcmFnUm9vdE5vZGUpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZU5vZGVPYmpfcmVUb05vcm1hbFwiKVxuICByZXNldFRvTm9ybWFsKCkge1xuICAgIHRoaXMuaGlkZVByb3BIaW50KCk7XG4gICAgdGhpcy5oaWRlU2VsZWN0RWZmZWN0KCk7XG4gICAgdGhpcy5pbWdMb2NrQmcuYWN0aXZlID0gZmFsc2U7XG4gIH1cbiAgcmVzZXRQb3NpdGlvbigpIHt9XG4gIEBtai50cmFpdEV2ZW50KFwiVGlsZU5vZGVPYmpfdG91Y2hFbmRcIilcbiAgdG91Y2hFbmRGb3JNb3ZlKCkge1xuICAgIHRoaXMuX3NoYWRvd0NhcmRTdGF0ZUN0bC5mb3JjZUVudGVyKHRoaXMuZHJhZ1Jvb3ROb2RlKTtcbiAgICB0aGlzLl9jYXJkU3RhdGVDdGwuZm9yY2VFbnRlcih0aGlzLmRyYWdSb290Tm9kZSk7XG4gICAgdGhpcy5yZXNldFNpYmxpbmdJbmRleCgpO1xuICB9XG4gIGNhbmNlbFRvdWNoKCkge1xuICAgIGlmICh0aGlzLmlzU2VsZWN0KCkpIHtcbiAgICAgIHRoaXMuX3NoYWRvd0NhcmRTdGF0ZUN0bC5mb3JjZUVudGVyKHRoaXMuZHJhZ1Jvb3ROb2RlKTtcbiAgICAgIHRoaXMuX2NhcmRTdGF0ZUN0bC5mb3JjZUVudGVyKHRoaXMuZHJhZ1Jvb3ROb2RlKTtcbiAgICAgIHRoaXMucmVzZXRTaWJsaW5nSW5kZXgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2FyZFN0YXRlQ3RsLmZvcmNlRXhpdCh0aGlzLmxheWVyTm9kZSk7XG4gICAgICB0aGlzLl9zaGFkb3dDYXJkU3RhdGVDdGwuZm9yY2VFeGl0KHRoaXMuc2hhZG93TGF5ZXJOb2RlKTtcbiAgICAgIHRoaXMucmVzZXRTaWJsaW5nSW5kZXgoKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUaWxlTm9kZU9ial9zZXRQb3NpdGlvblwiKVxuICBzZXRQb3NpdGlvbldpdGhEZWx0YShlID0gdHJ1ZSwgdD8pIHtcbiAgICB0aGlzLl9zaGFkb3dDYXJkU3RhdGVDdGwuZm9yY2VFeGl0TW92ZSh0aGlzLmRyYWdSb290Tm9kZSwgbmV3IGNjLlZlYzModC54LCB0LnksIDApKTtcbiAgICB0aGlzLl9jYXJkU3RhdGVDdGwuZm9yY2VFeGl0TW92ZSh0aGlzLmRyYWdSb290Tm9kZSwgbmV3IGNjLlZlYzModC54LCB0LnksIDApKTtcbiAgfVxuICBhdHRhY2hOb2RlU3RhdGVBbmlzKGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKGUpLCBpID0gbi5uZXh0KCk7ICFpLmRvbmU7IGkgPSBuLm5leHQoKSkgaS52YWx1ZS5yZXNldCgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpICYmICFpLmRvbmUgJiYgKG8gPSBuLnJldHVybikgJiYgby5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX25vZGVTdGF0ZUFuaXMgPSBlO1xuICB9XG4gIHN0b3BBbGxBbmltYXRpb24oKSB7XG4gICAgdGhpcy5fY2FyZFN0YXRlQ3RsLmZvcmNlRXhpdCh0aGlzLmxheWVyTm9kZSk7XG4gICAgdGhpcy5fc2hhZG93Q2FyZFN0YXRlQ3RsLmZvcmNlRXhpdCh0aGlzLnNoYWRvd0xheWVyTm9kZSk7XG4gIH1cbiAgcGxheUF0dGFjaEVudGVyQW5pKGUsIHQpIHtcbiAgICBmb3IgKHZhciBvID0gdGhpcywgbiA9IGZ1bmN0aW9uIG4obikge1xuICAgICAgICBpLl9ub2RlU3RhdGVBbmlzW25dLnBsYXlBbmkoZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG4gPT09IG8uX25vZGVTdGF0ZUFuaXMubGVuZ3RoIC0gMSAmJiAobnVsbCA9PSB0IHx8IHQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgaSA9IHRoaXMsIHIgPSAwOyByIDwgdGhpcy5fbm9kZVN0YXRlQW5pcy5sZW5ndGg7IHIrKykgbihyKTtcbiAgfVxuICBwbGF5SGludEFuaW1hdGlvbihlLCB0KSB7XG4gICAgdmFyIG8sIG47XG4gICAgbnVsbCA9PT0gKG8gPSB0aGlzLl9jYXJkU3RhdGVDdGwpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLnBsYXlIaW50RW50ZXJBbmkoZSwgdCk7XG4gICAgbnVsbCA9PT0gKG4gPSB0aGlzLl9zaGFkb3dDYXJkU3RhdGVDdGwpIHx8IHZvaWQgMCA9PT0gbiB8fCBuLnBsYXlIaW50RW50ZXJBbmkoZSk7XG4gIH1cbiAgZXhpdEhpbnRBbmltYXRpb24oKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9jYXJkU3RhdGVDdGwpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnBsYXlIaW50RXhpdEFuaSgpO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5fc2hhZG93Q2FyZFN0YXRlQ3RsKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5wbGF5SGludEV4aXRBbmkoKTtcbiAgfVxuICBwYXVzZUhpbnRTaGFrZSgpIHtcbiAgICB2YXIgZSwgdDtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuX2NhcmRTdGF0ZUN0bCkgfHwgdm9pZCAwID09PSBlIHx8IGUucGF1c2VIaW50KCk7XG4gICAgbnVsbCA9PT0gKHQgPSB0aGlzLl9zaGFkb3dDYXJkU3RhdGVDdGwpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnBhdXNlSGludCgpO1xuICB9XG4gIHJlc3VtZUhpbnRTaGFrZSgpIHtcbiAgICB2YXIgZSwgdDtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuX2NhcmRTdGF0ZUN0bCkgfHwgdm9pZCAwID09PSBlIHx8IGUucmVzdW1lSGludCgpO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5fc2hhZG93Q2FyZFN0YXRlQ3RsKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5yZXN1bWVIaW50KCk7XG4gIH1cbiAgcGxheVNlbGVjdExvb3BBbmltYXRpb24oZSkge1xuICAgIHZhciB0LCBvO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5fdGlsZU5vZGVTdGF0ZUN0bCkgfHwgdm9pZCAwID09PSB0IHx8IHQucGxheVNlbGVjdExvb3BFbnRlckFuaShlKTtcbiAgICBudWxsID09PSAobyA9IHRoaXMuX3NoYWRvd05vZGVTdGF0ZUN0bCkgfHwgdm9pZCAwID09PSBvIHx8IG8ucGxheVNlbGVjdExvb3BFbnRlckFuaShlKTtcbiAgfVxuICBzdG9wU2VsZWN0TG9vcEFuaW1hdGlvbigpIHtcbiAgICB2YXIgZSwgdDtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuX3RpbGVOb2RlU3RhdGVDdGwpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnBsYXlTZWxlY3RMb29wRXhpdEFuaSgpO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5fc2hhZG93Tm9kZVN0YXRlQ3RsKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5wbGF5U2VsZWN0TG9vcEV4aXRBbmkoKTtcbiAgfVxuICBpc1NlbGVjdExvb3BQbGF5aW5nKCkge1xuICAgIHZhciBlO1xuICAgIHJldHVybiAobnVsbCA9PT0gKGUgPSB0aGlzLl90aWxlTm9kZVN0YXRlQ3RsKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmlzU2VsZWN0TG9vcFBsYXlpbmcoKSkgfHwgZmFsc2U7XG4gIH1cbiAgcGxheUF0dGFjaEV4aXRBbmkoZSwgdCkge1xuICAgIGZvciAodmFyIG8gPSB0aGlzLCBuID0gZnVuY3Rpb24gbihuKSB7XG4gICAgICAgIGkuX25vZGVTdGF0ZUFuaXNbbl0uZXhpdEFuaShlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbiA9PT0gby5fbm9kZVN0YXRlQW5pcy5sZW5ndGggLSAxICYmIChudWxsID09IHQgfHwgdCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBpID0gdGhpcywgciA9IDA7IHIgPCB0aGlzLl9ub2RlU3RhdGVBbmlzLmxlbmd0aDsgcisrKSBuKHIpO1xuICB9XG4gIGZvcmNlRW50ZXJBdHRhY2hFbnRlckFuaShlLCB0KSB7XG4gICAgZm9yICh2YXIgbyA9IDA7IG8gPCB0aGlzLl9ub2RlU3RhdGVBbmlzLmxlbmd0aDsgbysrKSB0aGlzLl9ub2RlU3RhdGVBbmlzW29dLmZvcmNlRW50ZXIoZSk7XG4gICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgfVxuICBmb3JjZUV4aXRBdHRhY2hFeGl0QW5pKGUsIHQpIHtcbiAgICBmb3IgKHZhciBvID0gMDsgbyA8IHRoaXMuX25vZGVTdGF0ZUFuaXMubGVuZ3RoOyBvKyspIHRoaXMuX25vZGVTdGF0ZUFuaXNbb10uZm9yY2VFeGl0KGUpO1xuICAgIG51bGwgPT0gdCB8fCB0KCk7XG4gIH1cbiAgZm9yY2VFbnRlclBsYXlBdHRhY2hFbnRlckFuaShlLCB0KSB7XG4gICAgZm9yICh2YXIgbyA9IDA7IG8gPCB0aGlzLl9ub2RlU3RhdGVBbmlzLmxlbmd0aDsgbysrKSB0aGlzLl9ub2RlU3RhdGVBbmlzW29dLnBsYXlBbmlGb3JjZShlLCB0KTtcbiAgfVxuICBmb3JjZUV4aXRQbGF5QXR0YWNoRXhpdEFuaShlLCB0KSB7XG4gICAgZm9yICh2YXIgbyA9IDA7IG8gPCB0aGlzLl9ub2RlU3RhdGVBbmlzLmxlbmd0aDsgbysrKSB0aGlzLl9ub2RlU3RhdGVBbmlzW29dLmV4aXRBbmlGb3JjZShlLCB0KTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlRpbGVOb2RlT2JqX3BsYXlBbmltXCIpXG4gIHBsYXlBbmltTm9kZUFuaW1hdGlvbihlLCB0LCBvID0gdHJ1ZSwgbj8sIGk/LCByPywgYT8pIHtcbiAgICB0aGlzLnN0b3BBbmltTm9kZUFuaW1hdGlvbigpO1xuICAgIHZhciBzID0gdGhpcy51cGRhdGVUZW1wQW5pbU5vZGUoKSxcbiAgICAgIGMgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHMsIGUsIGEpO1xuICAgIGkgJiYgYy5hdHRhY2hOb2RlKFwiaG9va19tYWhqb25nXCIsIGkpO1xuICAgIGlmIChyKSB7XG4gICAgICBjLnN0b3BBdEZpcnN0RnJhbWVPZih0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYy5zZXRBbmltYXRpb24odCwgbyA/IC0xIDogMSwgbik7XG4gICAgfVxuICAgIHJldHVybiBjO1xuICB9XG4gIHN0b3BBbmltTm9kZUFuaW1hdGlvbigpIHtcbiAgICB0aGlzLnRpbGVOb2RlLnBhcmVudCA9IHRoaXMuYW5pbU5vZGU7XG4gICAgdGhpcy50aWxlTm9kZS5zZXRQb3NpdGlvbigwLCAwLCAwKTtcbiAgICB0aGlzLnRpbGVOb2RlLnNldFNjYWxlKDEgLyB0aGlzLmluZm8udGlsZU9iamVjdC5sYXlvdXRTY2FsZSk7XG4gICAgdGhpcy50aWxlTm9kZS5hbmdsZSA9IDA7XG4gICAgdGhpcy5kZXN0cm95VGVtcEFuaW1Ob2RlKCk7XG4gIH1cbiAgZHJvcFRvUG9zaXRpb24oZSkge1xuICAgIHRoaXMuX2NhcmRTdGF0ZUN0bC5wbGF5RHJvcEFuaSh0aGlzLmxheWVyTm9kZSwgZSk7XG4gICAgdGhpcy5fc2hhZG93Q2FyZFN0YXRlQ3RsLnBsYXlEcm9wQW5pKHRoaXMuc2hhZG93TGF5ZXJOb2RlLCBmdW5jdGlvbiAoKSB7fSk7XG4gIH1cbiAgY2FuY2VsRHJvcFRvUG9zaXRpb24oZSkge1xuICAgIHRoaXMuX2NhcmRTdGF0ZUN0bC5jYW5jZWxEcm9wQW5pKHRoaXMubGF5ZXJOb2RlLCBlKTtcbiAgICB0aGlzLl9zaGFkb3dDYXJkU3RhdGVDdGwuY2FuY2VsRHJvcEFuaSh0aGlzLnNoYWRvd0xheWVyTm9kZSwgZnVuY3Rpb24gKCkge30pO1xuICB9XG59Il19