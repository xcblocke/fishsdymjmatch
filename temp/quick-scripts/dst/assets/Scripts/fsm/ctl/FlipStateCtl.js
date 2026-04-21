
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/fsm/ctl/FlipStateCtl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65befhKDndOSY8OlLCHFx4s', 'FlipStateCtl');
// Scripts/fsm/ctl/FlipStateCtl.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FlipStateCtl = void 0;
var FlipNodeStateAni_1 = require("../../ani/FlipNodeStateAni");
var FlipStateCtl = /** @class */ (function () {
    function FlipStateCtl(e, t) {
        this._stateMap = new Map();
        this._targetNode = null;
        this._targetNode = e;
        this._stateMap.set("flip", new FlipNodeStateAni_1.FlipNodeStateAni(e, t));
    }
    FlipStateCtl.prototype.playParallel = function (e, t, o, n, i) {
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
                null === (o = r._stateMap.get(t)) || void 0 === o || o.applyImmediate(e[0]);
            });
            a();
        }
        else {
            var l = 0;
            t.forEach(function (e, o) {
                var i, s;
                if (n) {
                    null === (i = r._stateMap.get(o)) || void 0 === i || i.playAni(e[0], function () {
                        ++l === t.size && a();
                    });
                }
                else {
                    null === (s = r._stateMap.get(o)) || void 0 === s || s.exitAni(e[0], function () {
                        ++l === t.size && a();
                    });
                }
            });
        }
    };
    FlipStateCtl.prototype.moveToParentKeepWorld = function (e, t) {
        if (t && e.parent !== t) {
            var o = e.convertToWorldSpaceAR(cc.v2(0, 0)), n = t.convertToNodeSpaceAR(o);
            e.parent = t;
            e.setPosition(n.x, n.y);
        }
    };
    FlipStateCtl.prototype.playEnterAni = function (e) {
        this.playParallel(null, new Map([["flip", []]]), e, true);
    };
    FlipStateCtl.prototype.playExitAni = function (e) {
        this.playParallel(null, new Map([["flip", []]]), e, false);
    };
    FlipStateCtl.prototype.forceExit = function (e) {
        var t = this;
        ["flip"].forEach(function (e) {
            var o;
            null === (o = t._stateMap.get(e)) || void 0 === o || o.forceExit();
        });
        null == e || e();
    };
    FlipStateCtl.prototype.forceEnter = function () {
        var e = this;
        ["flip"].forEach(function (t) {
            var o;
            null === (o = e._stateMap.get(t)) || void 0 === o || o.forceEnter();
        });
    };
    return FlipStateCtl;
}());
exports.FlipStateCtl = FlipStateCtl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZzbS9jdGwvRmxpcFN0YXRlQ3RsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQThEO0FBQzlEO0lBR0Usc0JBQVksQ0FBQyxFQUFFLENBQUM7UUFGaEIsY0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksbUNBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELG1DQUFZLEdBQVosVUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFRLEVBQUUsQ0FBUztRQUFuQixrQkFBQSxFQUFBLFFBQVE7UUFBRSxrQkFBQSxFQUFBLFNBQVM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7WUFDaEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsQ0FBQyxDQUFDLENBQUM7WUFDSCxDQUFDLEVBQUUsQ0FBQztTQUNMO2FBQU07WUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDVixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxJQUFJLENBQUMsRUFBRTtvQkFDTCxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ25FLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDbkUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDeEIsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNELDRDQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDMUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBQ0QsbUNBQVksR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELGtDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxnQ0FBUyxHQUFULFVBQVUsQ0FBQztRQUNULElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUMxQixJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckUsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDRCxpQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQzFCLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxtQkFBQztBQUFELENBaEVBLEFBZ0VDLElBQUE7QUFoRVksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGbGlwTm9kZVN0YXRlQW5pIH0gZnJvbSAnLi4vLi4vYW5pL0ZsaXBOb2RlU3RhdGVBbmknO1xuZXhwb3J0IGNsYXNzIEZsaXBTdGF0ZUN0bCB7XG4gIF9zdGF0ZU1hcCA9IG5ldyBNYXAoKTtcbiAgX3RhcmdldE5vZGUgPSBudWxsO1xuICBjb25zdHJ1Y3RvcihlLCB0KSB7XG4gICAgdGhpcy5fdGFyZ2V0Tm9kZSA9IGU7XG4gICAgdGhpcy5fc3RhdGVNYXAuc2V0KFwiZmxpcFwiLCBuZXcgRmxpcE5vZGVTdGF0ZUFuaShlLCB0KSk7XG4gIH1cbiAgcGxheVBhcmFsbGVsKGUsIHQsIG8sIG4gPSB0cnVlLCBpID0gZmFsc2UpIHtcbiAgICB2YXIgciA9IHRoaXM7XG4gICAgZSAmJiB0aGlzLl90YXJnZXROb2RlLnBhcmVudCAhPT0gZSAmJiB0aGlzLm1vdmVUb1BhcmVudEtlZXBXb3JsZCh0aGlzLl90YXJnZXROb2RlLCBlKTtcbiAgICB2YXIgYSA9IGZ1bmN0aW9uIGEoKSB7XG4gICAgICBudWxsID09IG8gfHwgbygpO1xuICAgIH07XG4gICAgaWYgKGkpIHtcbiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICB2YXIgbztcbiAgICAgICAgbnVsbCA9PT0gKG8gPSByLl9zdGF0ZU1hcC5nZXQodCkpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLmFwcGx5SW1tZWRpYXRlKGVbMF0pO1xuICAgICAgfSk7XG4gICAgICBhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsID0gMDtcbiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICB2YXIgaSwgcztcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICBudWxsID09PSAoaSA9IHIuX3N0YXRlTWFwLmdldChvKSkgfHwgdm9pZCAwID09PSBpIHx8IGkucGxheUFuaShlWzBdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICArK2wgPT09IHQuc2l6ZSAmJiBhKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVsbCA9PT0gKHMgPSByLl9zdGF0ZU1hcC5nZXQobykpIHx8IHZvaWQgMCA9PT0gcyB8fCBzLmV4aXRBbmkoZVswXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgKytsID09PSB0LnNpemUgJiYgYSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgbW92ZVRvUGFyZW50S2VlcFdvcmxkKGUsIHQpIHtcbiAgICBpZiAodCAmJiBlLnBhcmVudCAhPT0gdCkge1xuICAgICAgdmFyIG8gPSBlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSksXG4gICAgICAgIG4gPSB0LmNvbnZlcnRUb05vZGVTcGFjZUFSKG8pO1xuICAgICAgZS5wYXJlbnQgPSB0O1xuICAgICAgZS5zZXRQb3NpdGlvbihuLngsIG4ueSk7XG4gICAgfVxuICB9XG4gIHBsYXlFbnRlckFuaShlKSB7XG4gICAgdGhpcy5wbGF5UGFyYWxsZWwobnVsbCwgbmV3IE1hcChbW1wiZmxpcFwiLCBbXV1dKSwgZSwgdHJ1ZSk7XG4gIH1cbiAgcGxheUV4aXRBbmkoZSkge1xuICAgIHRoaXMucGxheVBhcmFsbGVsKG51bGwsIG5ldyBNYXAoW1tcImZsaXBcIiwgW11dXSksIGUsIGZhbHNlKTtcbiAgfVxuICBmb3JjZUV4aXQoZSkge1xuICAgIHZhciB0ID0gdGhpcztcbiAgICBbXCJmbGlwXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvO1xuICAgICAgbnVsbCA9PT0gKG8gPSB0Ll9zdGF0ZU1hcC5nZXQoZSkpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLmZvcmNlRXhpdCgpO1xuICAgIH0pO1xuICAgIG51bGwgPT0gZSB8fCBlKCk7XG4gIH1cbiAgZm9yY2VFbnRlcigpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgW1wiZmxpcFwiXS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICB2YXIgbztcbiAgICAgIG51bGwgPT09IChvID0gZS5fc3RhdGVNYXAuZ2V0KHQpKSB8fCB2b2lkIDAgPT09IG8gfHwgby5mb3JjZUVudGVyKCk7XG4gICAgfSk7XG4gIH1cbn0iXX0=