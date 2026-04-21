"use strict";
cc._RF.push(module, '5b763semghFHo+cyrdd0fNx', 'FluxayEffect');
// Scripts/FluxayEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResManager_1 = require("./framework/manager/ResManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent;
var f = cc.Enum({
    type1: 0,
    type2: 1
});
var FluxayEffect = /** @class */ (function (_super) {
    __extends(FluxayEffect, _super);
    function FluxayEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fluxayColor = cc.Color.WHITE;
        _this._type = f.type2;
        _this._brightness = 25;
        _this._waveNum = 6;
        _this._lightAlphaThreshold = 0;
        _this._speed = 0.5;
        _this._renderComponent = null;
        _this._loadComplete = false;
        return _this;
    }
    Object.defineProperty(FluxayEffect.prototype, "fluxayColor", {
        get: function () {
            return this._fluxayColor;
        },
        set: function (e) {
            this._fluxayColor = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FluxayEffect.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (e) {
            this._type = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FluxayEffect.prototype, "brightness", {
        get: function () {
            return this._brightness;
        },
        set: function (e) {
            this._brightness = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FluxayEffect.prototype, "waveNum", {
        get: function () {
            return this._waveNum;
        },
        set: function (e) {
            this._waveNum = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FluxayEffect.prototype, "lightAlphaThreshold", {
        get: function () {
            return this._lightAlphaThreshold;
        },
        set: function (e) {
            this._lightAlphaThreshold = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FluxayEffect.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (e) {
            this._speed = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    FluxayEffect.prototype.onLoad = function () {
        var e = this;
        if (!this._renderComponent) {
            this._renderComponent = this.getComponent(cc.RenderComponent);
            var t = function t(t) {
                t.addRef();
                e._loadComplete = true;
                var o = cc.MaterialVariant.create(t, e._renderComponent);
                e._renderComponent.setMaterial(0, o);
                e.updateProperties();
            };
            ResManager_1.resManager.loadRes("materials/FluxayEffect", cc.Material, "resources").then(function (e) {
                t(e);
            });
        }
    };
    FluxayEffect.prototype.updateProperties = function () {
        if (this._renderComponent && this._loadComplete) {
            this._renderComponent.getMaterial(0).setProperty("fluxayColor", this._fluxayColor);
            this._renderComponent.getMaterial(0).setProperty("lightAlphaThreshold", this._lightAlphaThreshold);
            this._renderComponent.getMaterial(0).setProperty("args", new cc.Vec4(this._type, this._brightness, this._waveNum, this._speed));
        }
    };
    FluxayEffect.prototype.start = function () { };
    __decorate([
        property
    ], FluxayEffect.prototype, "_fluxayColor", void 0);
    __decorate([
        property
    ], FluxayEffect.prototype, "_type", void 0);
    __decorate([
        property
    ], FluxayEffect.prototype, "_brightness", void 0);
    __decorate([
        property
    ], FluxayEffect.prototype, "_waveNum", void 0);
    __decorate([
        property
    ], FluxayEffect.prototype, "_lightAlphaThreshold", void 0);
    __decorate([
        property
    ], FluxayEffect.prototype, "_speed", void 0);
    __decorate([
        property({
            type: cc.Color
        })
    ], FluxayEffect.prototype, "fluxayColor", null);
    __decorate([
        property({
            type: f,
            tooltip: "type1为扫光,type2为波光"
        })
    ], FluxayEffect.prototype, "type", null);
    __decorate([
        property({
            type: cc.Integer,
            range: [0, 100],
            slide: true,
            tooltip: "反光强度"
        })
    ], FluxayEffect.prototype, "brightness", null);
    __decorate([
        property({
            type: cc.Integer,
            range: [0, 30],
            slide: true,
            tooltip: "水波密度"
        })
    ], FluxayEffect.prototype, "waveNum", null);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 1],
            slide: true,
            tooltip: "透明阈值，判断什么情况下进行效果计算"
        })
    ], FluxayEffect.prototype, "lightAlphaThreshold", null);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 1],
            slide: true,
            tooltip: "波光变化速度，默认0.5"
        })
    ], FluxayEffect.prototype, "speed", null);
    FluxayEffect = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.RenderComponent)
    ], FluxayEffect);
    return FluxayEffect;
}(cc.Component));
exports.default = FluxayEffect;

cc._RF.pop();