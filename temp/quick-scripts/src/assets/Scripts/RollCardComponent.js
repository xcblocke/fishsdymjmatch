"use strict";
cc._RF.push(module, '38acd6o7GRNnpV7PGaGGB9q', 'RollCardComponent');
// Scripts/RollCardComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RollCardComponent = void 0;
var Tile2FlipNodeStateAni_1 = require("./fsm/ani/Tile2FlipNodeStateAni");
var TileNodeComponent_1 = require("./TileNodeComponent");
var RollCardComponent = /** @class */ (function (_super) {
    __extends(RollCardComponent, _super);
    function RollCardComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isBack = false;
        _this.keepOpen = function () {
            return false;
        };
        return _this;
    }
    Object.defineProperty(RollCardComponent.prototype, "isBack", {
        get: function () {
            return this._isBack;
        },
        enumerable: false,
        configurable: true
    });
    RollCardComponent.prototype.setIsBack = function (e) {
        this._isBack = e;
    };
    RollCardComponent.prototype.onInitAnim = function () {
        this._flipAni || (this._flipAni = new Tile2FlipNodeStateAni_1.Tile2FlipNodeStateAni(this._host.tileNode, this._host, this));
    };
    RollCardComponent.prototype.onRefreshNode = function () {
        var e, t;
        this._isBack = this._host.tileObject.getIsBack();
        if (this.keepOpen() || 0 == this._isBack) {
            null === (e = this._flipAni) || void 0 === e || e.forceEnter();
        }
        else {
            null === (t = this._flipAni) || void 0 === t || t.forceExit();
        }
    };
    RollCardComponent.prototype.getResNameOverride = function () {
        return this._isBack ? "gameplay_img_mj_dn" : null;
    };
    RollCardComponent.prototype.onShowPropHint = function () { };
    RollCardComponent.prototype.onHidePropHint = function () { };
    RollCardComponent.prototype.onPlaySelectAnimation = function () {
        var e;
        null === (e = this._flipAni) || void 0 === e || e.playAni();
    };
    RollCardComponent.prototype.onCancelSelectedAnimation = function () {
        var e, t = this._host.effectPropHint;
        this.keepOpen() || t && t.active || null === (e = this._flipAni) || void 0 === e || e.exitAni();
    };
    RollCardComponent.prototype.onClearCancelSelected = function () {
        var e, t;
        if (this._isBack) {
            null === (t = this._flipAni) || void 0 === t || t.playAni();
        }
        else {
            null === (e = this._flipAni) || void 0 === e || e.forceEnter();
        }
    };
    RollCardComponent.prototype.onStopAllAnimation = function () {
        var e;
        this.keepOpen() || null === (e = this._flipAni) || void 0 === e || e.forceExit();
    };
    RollCardComponent.prototype.onClear = function () {
        var e;
        this._isBack = false;
        null === (e = this._flipAni) || void 0 === e || e.forceEnter();
    };
    RollCardComponent.prototype.playReveal = function (e, t) {
        var o, n;
        if (e) {
            null === (o = this._flipAni) || void 0 === o || o.exitAniForce(void 0, t);
        }
        else {
            null === (n = this._flipAni) || void 0 === n || n.playAniForce(void 0, t);
        }
    };
    RollCardComponent.prototype.showFrontImmediately = function () {
        var e;
        this._isBack = false;
        null === (e = this._flipAni) || void 0 === e || e.forceEnter();
    };
    RollCardComponent.prototype.showBackImmediately = function () {
        var e;
        this._isBack = true;
        null === (e = this._flipAni) || void 0 === e || e.forceExit();
    };
    RollCardComponent.prototype.playRoll = function (e, t) {
        var o, n;
        if (e) {
            null === (o = this._flipAni) || void 0 === o || o.exitAni(void 0, t);
        }
        else {
            null === (n = this._flipAni) || void 0 === n || n.playAni(void 0, t);
        }
    };
    RollCardComponent.prototype.playFly = function () { };
    __decorate([
        mj.traitEvent("RollCrdComp_refreshNode")
    ], RollCardComponent.prototype, "onRefreshNode", null);
    __decorate([
        mj.traitEvent("RollCrdComp_playFly")
    ], RollCardComponent.prototype, "playFly", null);
    return RollCardComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.RollCardComponent = RollCardComponent;

cc._RF.pop();