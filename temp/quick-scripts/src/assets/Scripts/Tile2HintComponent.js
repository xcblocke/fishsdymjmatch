"use strict";
cc._RF.push(module, 'e6aff0PZUlMTJTOinP3pE0t', 'Tile2HintComponent');
// Scripts/Tile2HintComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2HintComponent = void 0;
var HintNodeStateAni_1 = require("./fsm/ani/HintNodeStateAni");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2HintComponent = /** @class */ (function (_super) {
    __extends(Tile2HintComponent, _super);
    function Tile2HintComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2HintComponent.prototype.onInitAnim = function () {
        this._hintAni = new HintNodeStateAni_1.HintNodeStateAni(this._host.tileNode, this._host);
        this._shadowHintAni = new HintNodeStateAni_1.HintNodeStateAni(this._host.shadowNode, this._host);
    };
    Tile2HintComponent.prototype.onShowPropHint = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.playAni();
        null === (t = this._shadowHintAni) || void 0 === t || t.playAni();
    };
    Tile2HintComponent.prototype.onHidePropHint = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.exitAni();
        null === (t = this._shadowHintAni) || void 0 === t || t.exitAni();
    };
    Tile2HintComponent.prototype.onPlaySelectAnimation = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.pauseShake();
        null === (t = this._shadowHintAni) || void 0 === t || t.pauseShake();
    };
    Tile2HintComponent.prototype.onCancelSelectedAnimation = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.resumeShake();
        null === (t = this._shadowHintAni) || void 0 === t || t.resumeShake();
    };
    Tile2HintComponent.prototype.onStopAllAnimation = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.forceExit();
        null === (t = this._shadowHintAni) || void 0 === t || t.forceExit();
    };
    Tile2HintComponent.prototype.playHintAnimation = function (e, t) {
        var o, n;
        null === (o = this._hintAni) || void 0 === o || o.playAni(e, t);
        null === (n = this._shadowHintAni) || void 0 === n || n.playAni(e);
    };
    Tile2HintComponent.prototype.exitHintAnimation = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.exitAni();
        null === (t = this._shadowHintAni) || void 0 === t || t.exitAni();
    };
    Tile2HintComponent.prototype.pauseHintShake = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.pauseShake();
        null === (t = this._shadowHintAni) || void 0 === t || t.pauseShake();
    };
    Tile2HintComponent.prototype.resumeHintShake = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.resumeShake();
        null === (t = this._shadowHintAni) || void 0 === t || t.resumeShake();
    };
    return Tile2HintComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2HintComponent = Tile2HintComponent;

cc._RF.pop();