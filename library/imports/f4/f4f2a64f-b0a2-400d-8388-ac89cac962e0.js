"use strict";
cc._RF.push(module, 'f4f2aZPsKJADYOIrInKyWLg', 'TileNodeComponent');
// Scripts/TileNodeComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileNodeComponent = void 0;
var TileNodeComponent = /** @class */ (function () {
    function TileNodeComponent() {
        this._host = null;
    }
    TileNodeComponent.register = function (e, t) {
        this._registry.set(e, t);
    };
    TileNodeComponent.create = function (e) {
        var t, o;
        return null !== (o = null === (t = this._registry.get(e)) || void 0 === t ? void 0 : t()) && void 0 !== o ? o : null;
    };
    TileNodeComponent.prototype.bind = function (e) {
        this._host = e;
        this.onBind();
    };
    TileNodeComponent.prototype.unbind = function () {
        this.onUnbind();
        this._host = null;
    };
    TileNodeComponent.prototype.onBind = function () { };
    TileNodeComponent.prototype.onUnbind = function () { };
    TileNodeComponent.prototype.onInitAnim = function () { };
    TileNodeComponent.prototype.onRefreshNode = function () { };
    TileNodeComponent.prototype.getResNameOverride = function () {
        return null;
    };
    TileNodeComponent.prototype.onShowPropHint = function () { };
    TileNodeComponent.prototype.onHidePropHint = function () { };
    TileNodeComponent.prototype.onPlaySelectAnimation = function () { };
    TileNodeComponent.prototype.onCancelSelectedAnimation = function () { };
    TileNodeComponent.prototype.onClearCancelSelected = function () { };
    TileNodeComponent.prototype.onStopAllAnimation = function () { };
    TileNodeComponent.prototype.onClear = function () { };
    TileNodeComponent.prototype.onDestroy = function () { };
    TileNodeComponent.prototype.onUpdateImgCard = function () {
        return false;
    };
    TileNodeComponent.prototype.onUpdateImgCardBg = function () {
        return false;
    };
    TileNodeComponent.prototype.onUpdateShadowNode = function () {
        return false;
    };
    TileNodeComponent.prototype.onUpdateLockBg = function () {
        return false;
    };
    TileNodeComponent.prototype.onUpdateEffectSelected = function () {
        return false;
    };
    TileNodeComponent.prototype.onShowSelectEffect = function () {
        return false;
    };
    TileNodeComponent.prototype.onHideSelectEffect = function () { };
    TileNodeComponent.prototype.onRealShowSelectEffect = function () {
        return false;
    };
    TileNodeComponent._registry = new Map();
    return TileNodeComponent;
}());
exports.TileNodeComponent = TileNodeComponent;

cc._RF.pop();