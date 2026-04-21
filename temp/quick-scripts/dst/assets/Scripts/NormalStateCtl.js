
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/NormalStateCtl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69d8aJZeIRE3oluH3XvrW3D', 'NormalStateCtl');
// Scripts/NormalStateCtl.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalStateCtl = void 0;
var DropNodeStateAni_1 = require("./ani/DropNodeStateAni");
var HintNodeStateAni_1 = require("./fsm/ani/HintNodeStateAni");
var LockMaskNodeStateAni_1 = require("./tilenodes/fsm/ani/LockMaskNodeStateAni");
var MoveNodeStateAni_1 = require("./ani/MoveNodeStateAni");
var ScaleNodeStateAni_1 = require("./ani/ScaleNodeStateAni");
var SelectLoopNodeStateAni_1 = require("./ani/SelectLoopNodeStateAni");
var NormalStateCtl = /** @class */ (function () {
    function NormalStateCtl(e, t) {
        this._stateMap = new Map();
        this._targetNode = null;
        this._baseTileNode = null;
        this._targetNode = e;
        this._baseTileNode = t;
    }
    NormalStateCtl.prototype.getState = function (e) {
        if (!this._stateMap.has(e))
            switch (e) {
                case "move":
                    this._stateMap.set("move", new MoveNodeStateAni_1.MoveNodeStateAni(this._targetNode, this._baseTileNode));
                    break;
                case "scale":
                    this._stateMap.set("scale", new ScaleNodeStateAni_1.ScaleNodeStateAni(this._targetNode, this._baseTileNode));
                    break;
                case "hint":
                    this._stateMap.set("hint", new HintNodeStateAni_1.HintNodeStateAni(this._targetNode, this._baseTileNode));
                    break;
                case "selectLoop":
                    this._stateMap.set("selectLoop", new SelectLoopNodeStateAni_1.SelectLoopNodeStateAni(this._targetNode, this._baseTileNode));
                    break;
                case "lockMask":
                    this._stateMap.set("lockMask", new LockMaskNodeStateAni_1.LockMaskNodeStateAni(this._targetNode, this._baseTileNode));
                    break;
                case "drop":
                    this._stateMap.set("drop", new DropNodeStateAni_1.DropNodeStateAni(this._targetNode, this._baseTileNode));
            }
        return this._stateMap.get(e);
    };
    NormalStateCtl.prototype.playParallel = function (e, t, o, n, i) {
        if (n === void 0) { n = true; }
        if (i === void 0) { i = false; }
        var r = this;
        e && this._targetNode.parent !== e && this.moveToParentKeepWorld(this._targetNode, e);
        var a = function a() {
            null == o || o();
        };
        if (i) {
            t.forEach(function (e, t) {
                var o;
                null === (o = r.getState(t)) || void 0 === o || o.applyImmediate(e[0]);
            });
            a();
        }
        else {
            var l = 0;
            t.forEach(function (e, o) {
                var i, s;
                if (n) {
                    null === (i = r.getState(o)) || void 0 === i || i.playAni(e[0], function () {
                        ++l === t.size && a();
                    });
                }
                else {
                    null === (s = r.getState(o)) || void 0 === s || s.exitAni(e[0], function () {
                        ++l === t.size && a();
                    });
                }
            });
        }
    };
    NormalStateCtl.prototype.moveToParentKeepWorld = function (e, t) {
        if (t && e.parent !== t) {
            var o = e.convertToWorldSpaceAR(cc.v2(0, 0)), n = t.convertToNodeSpaceAR(o);
            e.parent = t;
            e.setPosition(n.x, n.y);
        }
    };
    NormalStateCtl.prototype.getMoveAndScaleStates = function () {
        return new Map([["move", []], ["scale", []]]);
    };
    NormalStateCtl.prototype.playEnterAni = function (e, t) {
        this.playParallel(e, this.getMoveAndScaleStates(), t, true);
    };
    NormalStateCtl.prototype.playExitAni = function (e, t) {
        this.playParallel(e, this.getMoveAndScaleStates(), t, false);
    };
    NormalStateCtl.prototype.forceExit = function (e, t) {
        var o = this;
        e && this._targetNode.parent !== e && this.moveToParentKeepWorld(this._targetNode, e);
        ["move", "scale"].forEach(function (e) {
            var t;
            null === (t = o.getState(e)) || void 0 === t || t.forceExit();
        });
        null == t || t();
    };
    NormalStateCtl.prototype.forceExitMove = function (e, t) {
        var o;
        this.playEnterAni(e);
        null === (o = this.getState("move")) || void 0 === o || o.applyImmediate(t);
    };
    NormalStateCtl.prototype.forceEnter = function (e, t) {
        var o = this;
        e && this._targetNode.parent !== e && this.moveToParentKeepWorld(this._targetNode, e);
        ["move", "scale"].forEach(function (e) {
            var t;
            null === (t = o.getState(e)) || void 0 === t || t.forceEnter();
        });
        null == t || t();
    };
    NormalStateCtl.prototype.playHintEnterAni = function (e, t) {
        this.playParallel(null, new Map([["hint", [e]]]), t, true);
    };
    NormalStateCtl.prototype.playHintExitAni = function (e) {
        this.playParallel(null, new Map([["hint", []]]), e, false);
    };
    NormalStateCtl.prototype.pauseHint = function () {
        var e = this.getState("hint");
        null == e || e.pauseShake();
    };
    NormalStateCtl.prototype.resumeHint = function () {
        var e = this.getState("hint");
        null == e || e.resumeShake();
    };
    NormalStateCtl.prototype.playSelectLoopEnterAni = function (e, t) {
        this.playParallel(null, new Map([["selectLoop", [e]]]), t, true);
    };
    NormalStateCtl.prototype.playSelectLoopExitAni = function (e) {
        this.playParallel(null, new Map([["selectLoop", []]]), e, false);
    };
    NormalStateCtl.prototype.isSelectLoopPlaying = function () {
        var e = this.getState("selectLoop");
        return (null == e ? void 0 : e.isLooping()) || false;
    };
    NormalStateCtl.prototype.playLockMaskEnterAni = function (e) {
        this.playParallel(null, new Map([["lockMask", []]]), e, true);
    };
    NormalStateCtl.prototype.playLockMaskExitAni = function (e) {
        this.playParallel(null, new Map([["lockMask", []]]), e, false);
    };
    NormalStateCtl.prototype.playDropAni = function (e, t) {
        this.playParallel(e, new Map([["drop", [{
                        isDrop: true
                    }]]]), t, true);
    };
    NormalStateCtl.prototype.cancelDropAni = function (e) {
        this.playParallel(e, new Map([["drop", [{
                        isDrop: true
                    }]]]), null, true, true);
    };
    __decorate([
        mj.traitEvent("NormStCtl_getMvSt")
    ], NormalStateCtl.prototype, "getMoveAndScaleStates", null);
    return NormalStateCtl;
}());
exports.NormalStateCtl = NormalStateCtl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL05vcm1hbFN0YXRlQ3RsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELCtEQUE4RDtBQUM5RCxpRkFBZ0Y7QUFDaEYsMkRBQTBEO0FBQzFELDZEQUE0RDtBQUM1RCx1RUFBc0U7QUFDdEU7SUFJRSx3QkFBWSxDQUFDLEVBQUUsQ0FBQztRQUhoQixjQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN0QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUVuQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsaUNBQVEsR0FBUixVQUFTLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQUUsUUFBUSxDQUFDLEVBQUU7Z0JBQ3JDLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxtQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUN2RixNQUFNO2dCQUNSLEtBQUssT0FBTztvQkFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxxQ0FBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUN6RixNQUFNO2dCQUNSLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxtQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUN2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SUFBSTtxQkFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBdkVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQzsrREFHbEM7SUFzRUgscUJBQUM7Q0EzSUQsQUEySUMsSUFBQTtBQTNJWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyb3BOb2RlU3RhdGVBbmkgfSBmcm9tICcuL2FuaS9Ecm9wTm9kZVN0YXRlQW5pJztcbmltcG9ydCB7IEhpbnROb2RlU3RhdGVBbmkgfSBmcm9tICcuL2ZzbS9hbmkvSGludE5vZGVTdGF0ZUFuaSc7XG5pbXBvcnQgeyBMb2NrTWFza05vZGVTdGF0ZUFuaSB9IGZyb20gJy4vdGlsZW5vZGVzL2ZzbS9hbmkvTG9ja01hc2tOb2RlU3RhdGVBbmknO1xuaW1wb3J0IHsgTW92ZU5vZGVTdGF0ZUFuaSB9IGZyb20gJy4vYW5pL01vdmVOb2RlU3RhdGVBbmknO1xuaW1wb3J0IHsgU2NhbGVOb2RlU3RhdGVBbmkgfSBmcm9tICcuL2FuaS9TY2FsZU5vZGVTdGF0ZUFuaSc7XG5pbXBvcnQgeyBTZWxlY3RMb29wTm9kZVN0YXRlQW5pIH0gZnJvbSAnLi9hbmkvU2VsZWN0TG9vcE5vZGVTdGF0ZUFuaSc7XG5leHBvcnQgY2xhc3MgTm9ybWFsU3RhdGVDdGwge1xuICBfc3RhdGVNYXAgPSBuZXcgTWFwKCk7XG4gIF90YXJnZXROb2RlID0gbnVsbDtcbiAgX2Jhc2VUaWxlTm9kZSA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKGUsIHQpIHtcbiAgICB0aGlzLl90YXJnZXROb2RlID0gZTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUgPSB0O1xuICB9XG4gIGdldFN0YXRlKGUpIHtcbiAgICBpZiAoIXRoaXMuX3N0YXRlTWFwLmhhcyhlKSkgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwibW92ZVwiOlxuICAgICAgICB0aGlzLl9zdGF0ZU1hcC5zZXQoXCJtb3ZlXCIsIG5ldyBNb3ZlTm9kZVN0YXRlQW5pKHRoaXMuX3RhcmdldE5vZGUsIHRoaXMuX2Jhc2VUaWxlTm9kZSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzY2FsZVwiOlxuICAgICAgICB0aGlzLl9zdGF0ZU1hcC5zZXQoXCJzY2FsZVwiLCBuZXcgU2NhbGVOb2RlU3RhdGVBbmkodGhpcy5fdGFyZ2V0Tm9kZSwgdGhpcy5fYmFzZVRpbGVOb2RlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImhpbnRcIjpcbiAgICAgICAgdGhpcy5fc3RhdGVNYXAuc2V0KFwiaGludFwiLCBuZXcgSGludE5vZGVTdGF0ZUFuaSh0aGlzLl90YXJnZXROb2RlLCB0aGlzLl9iYXNlVGlsZU5vZGUpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2VsZWN0TG9vcFwiOlxuICAgICAgICB0aGlzLl9zdGF0ZU1hcC5zZXQoXCJzZWxlY3RMb29wXCIsIG5ldyBTZWxlY3RMb29wTm9kZVN0YXRlQW5pKHRoaXMuX3RhcmdldE5vZGUsIHRoaXMuX2Jhc2VUaWxlTm9kZSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsb2NrTWFza1wiOlxuICAgICAgICB0aGlzLl9zdGF0ZU1hcC5zZXQoXCJsb2NrTWFza1wiLCBuZXcgTG9ja01hc2tOb2RlU3RhdGVBbmkodGhpcy5fdGFyZ2V0Tm9kZSwgdGhpcy5fYmFzZVRpbGVOb2RlKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRyb3BcIjpcbiAgICAgICAgdGhpcy5fc3RhdGVNYXAuc2V0KFwiZHJvcFwiLCBuZXcgRHJvcE5vZGVTdGF0ZUFuaSh0aGlzLl90YXJnZXROb2RlLCB0aGlzLl9iYXNlVGlsZU5vZGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N0YXRlTWFwLmdldChlKTtcbiAgfVxuICBwbGF5UGFyYWxsZWwoZSwgdCwgbywgbiA9IHRydWUsIGkgPSBmYWxzZSkge1xuICAgIHZhciByID0gdGhpcztcbiAgICBlICYmIHRoaXMuX3RhcmdldE5vZGUucGFyZW50ICE9PSBlICYmIHRoaXMubW92ZVRvUGFyZW50S2VlcFdvcmxkKHRoaXMuX3RhcmdldE5vZGUsIGUpO1xuICAgIHZhciBhID0gZnVuY3Rpb24gYSgpIHtcbiAgICAgIG51bGwgPT0gbyB8fCBvKCk7XG4gICAgfTtcbiAgICBpZiAoaSkge1xuICAgICAgdC5mb3JFYWNoKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgIHZhciBvO1xuICAgICAgICBudWxsID09PSAobyA9IHIuZ2V0U3RhdGUodCkpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLmFwcGx5SW1tZWRpYXRlKGVbMF0pO1xuICAgICAgfSk7XG4gICAgICBhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsID0gMDtcbiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICB2YXIgaSwgcztcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICBudWxsID09PSAoaSA9IHIuZ2V0U3RhdGUobykpIHx8IHZvaWQgMCA9PT0gaSB8fCBpLnBsYXlBbmkoZVswXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgKytsID09PSB0LnNpemUgJiYgYSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bGwgPT09IChzID0gci5nZXRTdGF0ZShvKSkgfHwgdm9pZCAwID09PSBzIHx8IHMuZXhpdEFuaShlWzBdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICArK2wgPT09IHQuc2l6ZSAmJiBhKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBtb3ZlVG9QYXJlbnRLZWVwV29ybGQoZSwgdCkge1xuICAgIGlmICh0ICYmIGUucGFyZW50ICE9PSB0KSB7XG4gICAgICB2YXIgbyA9IGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKSxcbiAgICAgICAgbiA9IHQuY29udmVydFRvTm9kZVNwYWNlQVIobyk7XG4gICAgICBlLnBhcmVudCA9IHQ7XG4gICAgICBlLnNldFBvc2l0aW9uKG4ueCwgbi55KTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJOb3JtU3RDdGxfZ2V0TXZTdFwiKVxuICBnZXRNb3ZlQW5kU2NhbGVTdGF0ZXMoKSB7XG4gICAgcmV0dXJuIG5ldyBNYXAoW1tcIm1vdmVcIiwgW11dLCBbXCJzY2FsZVwiLCBbXV1dKTtcbiAgfVxuICBwbGF5RW50ZXJBbmkoZSwgdCkge1xuICAgIHRoaXMucGxheVBhcmFsbGVsKGUsIHRoaXMuZ2V0TW92ZUFuZFNjYWxlU3RhdGVzKCksIHQsIHRydWUpO1xuICB9XG4gIHBsYXlFeGl0QW5pKGUsIHQpIHtcbiAgICB0aGlzLnBsYXlQYXJhbGxlbChlLCB0aGlzLmdldE1vdmVBbmRTY2FsZVN0YXRlcygpLCB0LCBmYWxzZSk7XG4gIH1cbiAgZm9yY2VFeGl0KGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXM7XG4gICAgZSAmJiB0aGlzLl90YXJnZXROb2RlLnBhcmVudCAhPT0gZSAmJiB0aGlzLm1vdmVUb1BhcmVudEtlZXBXb3JsZCh0aGlzLl90YXJnZXROb2RlLCBlKTtcbiAgICBbXCJtb3ZlXCIsIFwic2NhbGVcIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQ7XG4gICAgICBudWxsID09PSAodCA9IG8uZ2V0U3RhdGUoZSkpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmZvcmNlRXhpdCgpO1xuICAgIH0pO1xuICAgIG51bGwgPT0gdCB8fCB0KCk7XG4gIH1cbiAgZm9yY2VFeGl0TW92ZShlLCB0KSB7XG4gICAgdmFyIG87XG4gICAgdGhpcy5wbGF5RW50ZXJBbmkoZSk7XG4gICAgbnVsbCA9PT0gKG8gPSB0aGlzLmdldFN0YXRlKFwibW92ZVwiKSkgfHwgdm9pZCAwID09PSBvIHx8IG8uYXBwbHlJbW1lZGlhdGUodCk7XG4gIH1cbiAgZm9yY2VFbnRlcihlLCB0KSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIGUgJiYgdGhpcy5fdGFyZ2V0Tm9kZS5wYXJlbnQgIT09IGUgJiYgdGhpcy5tb3ZlVG9QYXJlbnRLZWVwV29ybGQodGhpcy5fdGFyZ2V0Tm9kZSwgZSk7XG4gICAgW1wibW92ZVwiLCBcInNjYWxlXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0O1xuICAgICAgbnVsbCA9PT0gKHQgPSBvLmdldFN0YXRlKGUpKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5mb3JjZUVudGVyKCk7XG4gICAgfSk7XG4gICAgbnVsbCA9PSB0IHx8IHQoKTtcbiAgfVxuICBwbGF5SGludEVudGVyQW5pKGUsIHQpIHtcbiAgICB0aGlzLnBsYXlQYXJhbGxlbChudWxsLCBuZXcgTWFwKFtbXCJoaW50XCIsIFtlXV1dKSwgdCwgdHJ1ZSk7XG4gIH1cbiAgcGxheUhpbnRFeGl0QW5pKGUpIHtcbiAgICB0aGlzLnBsYXlQYXJhbGxlbChudWxsLCBuZXcgTWFwKFtbXCJoaW50XCIsIFtdXV0pLCBlLCBmYWxzZSk7XG4gIH1cbiAgcGF1c2VIaW50KCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRTdGF0ZShcImhpbnRcIik7XG4gICAgbnVsbCA9PSBlIHx8IGUucGF1c2VTaGFrZSgpO1xuICB9XG4gIHJlc3VtZUhpbnQoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldFN0YXRlKFwiaGludFwiKTtcbiAgICBudWxsID09IGUgfHwgZS5yZXN1bWVTaGFrZSgpO1xuICB9XG4gIHBsYXlTZWxlY3RMb29wRW50ZXJBbmkoZSwgdCkge1xuICAgIHRoaXMucGxheVBhcmFsbGVsKG51bGwsIG5ldyBNYXAoW1tcInNlbGVjdExvb3BcIiwgW2VdXV0pLCB0LCB0cnVlKTtcbiAgfVxuICBwbGF5U2VsZWN0TG9vcEV4aXRBbmkoZSkge1xuICAgIHRoaXMucGxheVBhcmFsbGVsKG51bGwsIG5ldyBNYXAoW1tcInNlbGVjdExvb3BcIiwgW11dXSksIGUsIGZhbHNlKTtcbiAgfVxuICBpc1NlbGVjdExvb3BQbGF5aW5nKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRTdGF0ZShcInNlbGVjdExvb3BcIik7XG4gICAgcmV0dXJuIChudWxsID09IGUgPyB2b2lkIDAgOiBlLmlzTG9vcGluZygpKSB8fCBmYWxzZTtcbiAgfVxuICBwbGF5TG9ja01hc2tFbnRlckFuaShlKSB7XG4gICAgdGhpcy5wbGF5UGFyYWxsZWwobnVsbCwgbmV3IE1hcChbW1wibG9ja01hc2tcIiwgW11dXSksIGUsIHRydWUpO1xuICB9XG4gIHBsYXlMb2NrTWFza0V4aXRBbmkoZSkge1xuICAgIHRoaXMucGxheVBhcmFsbGVsKG51bGwsIG5ldyBNYXAoW1tcImxvY2tNYXNrXCIsIFtdXV0pLCBlLCBmYWxzZSk7XG4gIH1cbiAgcGxheURyb3BBbmkoZSwgdCkge1xuICAgIHRoaXMucGxheVBhcmFsbGVsKGUsIG5ldyBNYXAoW1tcImRyb3BcIiwgW3tcbiAgICAgIGlzRHJvcDogdHJ1ZVxuICAgIH1dXV0pLCB0LCB0cnVlKTtcbiAgfVxuICBjYW5jZWxEcm9wQW5pKGUpIHtcbiAgICB0aGlzLnBsYXlQYXJhbGxlbChlLCBuZXcgTWFwKFtbXCJkcm9wXCIsIFt7XG4gICAgICBpc0Ryb3A6IHRydWVcbiAgICB9XV1dKSwgbnVsbCwgdHJ1ZSwgdHJ1ZSk7XG4gIH1cbn0iXX0=