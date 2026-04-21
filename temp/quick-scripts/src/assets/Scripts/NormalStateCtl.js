"use strict";
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