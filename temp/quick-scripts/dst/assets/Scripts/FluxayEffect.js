
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FluxayEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZsdXhheUVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTREO0FBQ3RELElBQUEsS0FLRixFQUFFLENBQUMsVUFBVSxFQUpmLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FBQSxFQUNSLGlCQUFpQix1QkFBQSxFQUNqQixnQkFBZ0Isc0JBQ0QsQ0FBQztBQUNsQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2QsS0FBSyxFQUFFLENBQUM7SUFDUixLQUFLLEVBQUUsQ0FBQztDQUNULENBQUMsQ0FBQztBQUlIO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBZ0hDO1FBOUdDLGtCQUFZLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFFOUIsV0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFaEIsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUViLDBCQUFvQixHQUFHLENBQUMsQ0FBQztRQUV6QixZQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2Isc0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLG1CQUFhLEdBQUcsS0FBSyxDQUFDOztJQWtHeEIsQ0FBQztJQTlGQyxzQkFBSSxxQ0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7YUFDRCxVQUFnQixDQUFDO1lBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQzs7O09BSkE7SUFTRCxzQkFBSSw4QkFBSTthQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFDRCxVQUFTLENBQUM7WUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxnQkFBZ0Is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WTtRQUhoQyxPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7T0FDaEIsWUFBWSxDQWdIaEM7SUFBRCxtQkFBQztDQWhIRCxBQWdIQyxDQWhIeUMsRUFBRSxDQUFDLFNBQVMsR0FnSHJEO2tCQWhIb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc01hbmFnZXIgfSBmcm9tICcuL2ZyYW1ld29yay9tYW5hZ2VyL1Jlc01hbmFnZXInO1xuY29uc3Qge1xuICBjY2NsYXNzLFxuICBwcm9wZXJ0eSxcbiAgZXhlY3V0ZUluRWRpdE1vZGUsXG4gIHJlcXVpcmVDb21wb25lbnRcbn0gPSBjYy5fZGVjb3JhdG9yO1xudmFyIGYgPSBjYy5FbnVtKHtcbiAgdHlwZTE6IDAsXG4gIHR5cGUyOiAxXG59KTtcbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkByZXF1aXJlQ29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsdXhheUVmZmVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eVxuICBfZmx1eGF5Q29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgQHByb3BlcnR5XG4gIF90eXBlID0gZi50eXBlMjtcbiAgQHByb3BlcnR5XG4gIF9icmlnaHRuZXNzID0gMjU7XG4gIEBwcm9wZXJ0eVxuICBfd2F2ZU51bSA9IDY7XG4gIEBwcm9wZXJ0eVxuICBfbGlnaHRBbHBoYVRocmVzaG9sZCA9IDA7XG4gIEBwcm9wZXJ0eVxuICBfc3BlZWQgPSAwLjU7XG4gIF9yZW5kZXJDb21wb25lbnQgPSBudWxsO1xuICBfbG9hZENvbXBsZXRlID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuQ29sb3JcbiAgfSlcbiAgZ2V0IGZsdXhheUNvbG9yKCkge1xuICAgIHJldHVybiB0aGlzLl9mbHV4YXlDb2xvcjtcbiAgfVxuICBzZXQgZmx1eGF5Q29sb3IoZSkge1xuICAgIHRoaXMuX2ZsdXhheUNvbG9yID0gZTtcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgfVxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IGYsXG4gICAgdG9vbHRpcDogXCJ0eXBlMeS4uuaJq+WFiSx0eXBlMuS4uuazouWFiVwiXG4gIH0pXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG4gIHNldCB0eXBlKGUpIHtcbiAgICB0aGlzLl90eXBlID0gZTtcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgfVxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLkludGVnZXIsXG4gICAgcmFuZ2U6IFswLCAxMDBdLFxuICAgIHNsaWRlOiB0cnVlLFxuICAgIHRvb2x0aXA6IFwi5Y+N5YWJ5by65bqmXCJcbiAgfSlcbiAgZ2V0IGJyaWdodG5lc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JyaWdodG5lc3M7XG4gIH1cbiAgc2V0IGJyaWdodG5lc3MoZSkge1xuICAgIHRoaXMuX2JyaWdodG5lc3MgPSBlO1xuICAgIHRoaXMudXBkYXRlUHJvcGVydGllcygpO1xuICB9XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuSW50ZWdlcixcbiAgICByYW5nZTogWzAsIDMwXSxcbiAgICBzbGlkZTogdHJ1ZSxcbiAgICB0b29sdGlwOiBcIuawtOazouWvhuW6plwiXG4gIH0pXG4gIGdldCB3YXZlTnVtKCkge1xuICAgIHJldHVybiB0aGlzLl93YXZlTnVtO1xuICB9XG4gIHNldCB3YXZlTnVtKGUpIHtcbiAgICB0aGlzLl93YXZlTnVtID0gZTtcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgfVxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLkZsb2F0LFxuICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgc2xpZGU6IHRydWUsXG4gICAgdG9vbHRpcDogXCLpgI/mmI7pmIjlgLzvvIzliKTmlq3ku4DkuYjmg4XlhrXkuIvov5vooYzmlYjmnpzorqHnrpdcIlxuICB9KVxuICBnZXQgbGlnaHRBbHBoYVRocmVzaG9sZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlnaHRBbHBoYVRocmVzaG9sZDtcbiAgfVxuICBzZXQgbGlnaHRBbHBoYVRocmVzaG9sZChlKSB7XG4gICAgdGhpcy5fbGlnaHRBbHBoYVRocmVzaG9sZCA9IGU7XG4gICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKCk7XG4gIH1cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5GbG9hdCxcbiAgICByYW5nZTogWzAsIDFdLFxuICAgIHNsaWRlOiB0cnVlLFxuICAgIHRvb2x0aXA6IFwi5rOi5YWJ5Y+Y5YyW6YCf5bqm77yM6buY6K6kMC41XCJcbiAgfSlcbiAgZ2V0IHNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zcGVlZDtcbiAgfVxuICBzZXQgc3BlZWQoZSkge1xuICAgIHRoaXMuX3NwZWVkID0gZTtcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIGlmICghdGhpcy5fcmVuZGVyQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLl9yZW5kZXJDb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChjYy5SZW5kZXJDb21wb25lbnQpO1xuICAgICAgdmFyIHQgPSBmdW5jdGlvbiB0KHQpIHtcbiAgICAgICAgdC5hZGRSZWYoKTtcbiAgICAgICAgZS5fbG9hZENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgdmFyIG8gPSBjYy5NYXRlcmlhbFZhcmlhbnQuY3JlYXRlKHQsIGUuX3JlbmRlckNvbXBvbmVudCk7XG4gICAgICAgIGUuX3JlbmRlckNvbXBvbmVudC5zZXRNYXRlcmlhbCgwLCBvKTtcbiAgICAgICAgZS51cGRhdGVQcm9wZXJ0aWVzKCk7XG4gICAgICB9O1xuICAgICAgcmVzTWFuYWdlci5sb2FkUmVzKFwibWF0ZXJpYWxzL0ZsdXhheUVmZmVjdFwiLCBjYy5NYXRlcmlhbCwgXCJyZXNvdXJjZXNcIikudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICB0KGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVByb3BlcnRpZXMoKSB7XG4gICAgaWYgKHRoaXMuX3JlbmRlckNvbXBvbmVudCAmJiB0aGlzLl9sb2FkQ29tcGxldGUpIHtcbiAgICAgIHRoaXMuX3JlbmRlckNvbXBvbmVudC5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eShcImZsdXhheUNvbG9yXCIsIHRoaXMuX2ZsdXhheUNvbG9yKTtcbiAgICAgIHRoaXMuX3JlbmRlckNvbXBvbmVudC5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eShcImxpZ2h0QWxwaGFUaHJlc2hvbGRcIiwgdGhpcy5fbGlnaHRBbHBoYVRocmVzaG9sZCk7XG4gICAgICB0aGlzLl9yZW5kZXJDb21wb25lbnQuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoXCJhcmdzXCIsIG5ldyBjYy5WZWM0KHRoaXMuX3R5cGUsIHRoaXMuX2JyaWdodG5lc3MsIHRoaXMuX3dhdmVOdW0sIHRoaXMuX3NwZWVkKSk7XG4gICAgfVxuICB9XG4gIHN0YXJ0KCkge31cbn0iXX0=