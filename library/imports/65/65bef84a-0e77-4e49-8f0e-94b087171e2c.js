"use strict";
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