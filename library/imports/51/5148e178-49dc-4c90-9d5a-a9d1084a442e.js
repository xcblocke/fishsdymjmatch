"use strict";
cc._RF.push(module, '5148eF4SdxMkJ1aqdEISkQu', 'BrightSaturaContrastUniform');
// Scripts/BrightSaturaContrastUniform.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResManager_1 = require("./framework/manager/ResManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent;
var BrightSaturaContrastUniform = /** @class */ (function (_super) {
    __extends(BrightSaturaContrastUniform, _super);
    function BrightSaturaContrastUniform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._renderComponent = null;
        _this._loadComplete = false;
        _this._brightness = 1;
        _this._saturation = 1;
        _this._constrast = 1;
        return _this;
    }
    Object.defineProperty(BrightSaturaContrastUniform.prototype, "brightness", {
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
    Object.defineProperty(BrightSaturaContrastUniform.prototype, "saturation", {
        get: function () {
            return this._saturation;
        },
        set: function (e) {
            this._saturation = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrightSaturaContrastUniform.prototype, "constrast", {
        get: function () {
            return this._constrast;
        },
        set: function (e) {
            this._constrast = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    BrightSaturaContrastUniform.prototype.onEnable = function () {
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
            ResManager_1.resManager.loadRes("materials/BrightSaturaContrastUniform", cc.Material, "resources").then(function (e) {
                t(e);
            });
        }
        this.updateProperties();
    };
    BrightSaturaContrastUniform.prototype.updateProperties = function () {
        if (this._renderComponent && this._loadComplete) {
            this._renderComponent.getMaterial(0).setProperty("brightness", this._brightness);
            this._renderComponent.getMaterial(0).setProperty("saturation", this._saturation);
            this._renderComponent.getMaterial(0).setProperty("constrast", this._constrast);
        }
    };
    __decorate([
        property
    ], BrightSaturaContrastUniform.prototype, "_brightness", void 0);
    __decorate([
        property
    ], BrightSaturaContrastUniform.prototype, "_saturation", void 0);
    __decorate([
        property
    ], BrightSaturaContrastUniform.prototype, "_constrast", void 0);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 5],
            slide: true
        })
    ], BrightSaturaContrastUniform.prototype, "brightness", null);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 5],
            slide: true
        })
    ], BrightSaturaContrastUniform.prototype, "saturation", null);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 5],
            slide: true
        })
    ], BrightSaturaContrastUniform.prototype, "constrast", null);
    BrightSaturaContrastUniform = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.RenderComponent)
    ], BrightSaturaContrastUniform);
    return BrightSaturaContrastUniform;
}(cc.Component));
exports.default = BrightSaturaContrastUniform;

cc._RF.pop();