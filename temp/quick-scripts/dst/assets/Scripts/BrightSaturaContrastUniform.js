
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BrightSaturaContrastUniform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0JyaWdodFNhdHVyYUNvbnRyYXN0VW5pZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTREO0FBQ3RELElBQUEsS0FLRixFQUFFLENBQUMsVUFBVSxFQUpmLE9BQU8sYUFBQSxFQUNQLFFBQVEsY0FBQSxFQUNSLGlCQUFpQix1QkFBQSxFQUNqQixnQkFBZ0Isc0JBQ0QsQ0FBQztBQUlsQjtJQUF5RCwrQ0FBWTtJQUFyRTtRQUFBLHFFQXFFQztRQXBFQyxzQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsbUJBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFFaEIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFFaEIsZ0JBQVUsR0FBRyxDQUFDLENBQUM7O0lBNkRqQixDQUFDO0lBdkRDLHNCQUFJLG1EQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQWUsQ0FBQztZQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUM7OztPQUpBO0lBVUQsc0JBQUksbURBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBZSxDQUFDO1lBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQzs7O09BSkE7SUFVRCxzQkFBSSxrREFBUzthQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7YUFDRCxVQUFjLENBQUM7WUFDYixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQixDQUFDOzs7T0FKQTtJQUtELDhDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDekQsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQztZQUNGLHVCQUFVLENBQUMsT0FBTyxDQUFDLHVDQUF1QyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDcEcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxzREFBZ0IsR0FBaEI7UUFDRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2hGO0lBQ0gsQ0FBQztJQWhFRDtRQURDLFFBQVE7b0VBQ087SUFFaEI7UUFEQyxRQUFRO29FQUNPO0lBRWhCO1FBREMsUUFBUTttRUFDTTtJQU1mO1FBTEMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1lBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNiLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQztpRUFHRDtJQVVEO1FBTEMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1lBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNiLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQztpRUFHRDtJQVVEO1FBTEMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1lBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNiLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQztnRUFHRDtJQXhDa0IsMkJBQTJCO1FBSC9DLE9BQU87UUFDUCxpQkFBaUI7UUFDakIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQztPQUNoQiwyQkFBMkIsQ0FxRS9DO0lBQUQsa0NBQUM7Q0FyRUQsQUFxRUMsQ0FyRXdELEVBQUUsQ0FBQyxTQUFTLEdBcUVwRTtrQkFyRW9CLDJCQUEyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc01hbmFnZXIgfSBmcm9tICcuL2ZyYW1ld29yay9tYW5hZ2VyL1Jlc01hbmFnZXInO1xuY29uc3Qge1xuICBjY2NsYXNzLFxuICBwcm9wZXJ0eSxcbiAgZXhlY3V0ZUluRWRpdE1vZGUsXG4gIHJlcXVpcmVDb21wb25lbnRcbn0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuQHJlcXVpcmVDb21wb25lbnQoY2MuUmVuZGVyQ29tcG9uZW50KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJpZ2h0U2F0dXJhQ29udHJhc3RVbmlmb3JtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgX3JlbmRlckNvbXBvbmVudCA9IG51bGw7XG4gIF9sb2FkQ29tcGxldGUgPSBmYWxzZTtcbiAgQHByb3BlcnR5XG4gIF9icmlnaHRuZXNzID0gMTtcbiAgQHByb3BlcnR5XG4gIF9zYXR1cmF0aW9uID0gMTtcbiAgQHByb3BlcnR5XG4gIF9jb25zdHJhc3QgPSAxO1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLkZsb2F0LFxuICAgIHJhbmdlOiBbMCwgNV0sXG4gICAgc2xpZGU6IHRydWVcbiAgfSlcbiAgZ2V0IGJyaWdodG5lc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JyaWdodG5lc3M7XG4gIH1cbiAgc2V0IGJyaWdodG5lc3MoZSkge1xuICAgIHRoaXMuX2JyaWdodG5lc3MgPSBlO1xuICAgIHRoaXMudXBkYXRlUHJvcGVydGllcygpO1xuICB9XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuRmxvYXQsXG4gICAgcmFuZ2U6IFswLCA1XSxcbiAgICBzbGlkZTogdHJ1ZVxuICB9KVxuICBnZXQgc2F0dXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2F0dXJhdGlvbjtcbiAgfVxuICBzZXQgc2F0dXJhdGlvbihlKSB7XG4gICAgdGhpcy5fc2F0dXJhdGlvbiA9IGU7XG4gICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKCk7XG4gIH1cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5GbG9hdCxcbiAgICByYW5nZTogWzAsIDVdLFxuICAgIHNsaWRlOiB0cnVlXG4gIH0pXG4gIGdldCBjb25zdHJhc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnN0cmFzdDtcbiAgfVxuICBzZXQgY29uc3RyYXN0KGUpIHtcbiAgICB0aGlzLl9jb25zdHJhc3QgPSBlO1xuICAgIHRoaXMudXBkYXRlUHJvcGVydGllcygpO1xuICB9XG4gIG9uRW5hYmxlKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAoIXRoaXMuX3JlbmRlckNvbXBvbmVudCkge1xuICAgICAgdGhpcy5fcmVuZGVyQ29tcG9uZW50ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmVuZGVyQ29tcG9uZW50KTtcbiAgICAgIHZhciB0ID0gZnVuY3Rpb24gdCh0KSB7XG4gICAgICAgIHQuYWRkUmVmKCk7XG4gICAgICAgIGUuX2xvYWRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIHZhciBvID0gY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZSh0LCBlLl9yZW5kZXJDb21wb25lbnQpO1xuICAgICAgICBlLl9yZW5kZXJDb21wb25lbnQuc2V0TWF0ZXJpYWwoMCwgbyk7XG4gICAgICAgIGUudXBkYXRlUHJvcGVydGllcygpO1xuICAgICAgfTtcbiAgICAgIHJlc01hbmFnZXIubG9hZFJlcyhcIm1hdGVyaWFscy9CcmlnaHRTYXR1cmFDb250cmFzdFVuaWZvcm1cIiwgY2MuTWF0ZXJpYWwsIFwicmVzb3VyY2VzXCIpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdChlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgfVxuICB1cGRhdGVQcm9wZXJ0aWVzKCkge1xuICAgIGlmICh0aGlzLl9yZW5kZXJDb21wb25lbnQgJiYgdGhpcy5fbG9hZENvbXBsZXRlKSB7XG4gICAgICB0aGlzLl9yZW5kZXJDb21wb25lbnQuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoXCJicmlnaHRuZXNzXCIsIHRoaXMuX2JyaWdodG5lc3MpO1xuICAgICAgdGhpcy5fcmVuZGVyQ29tcG9uZW50LmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwic2F0dXJhdGlvblwiLCB0aGlzLl9zYXR1cmF0aW9uKTtcbiAgICAgIHRoaXMuX3JlbmRlckNvbXBvbmVudC5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eShcImNvbnN0cmFzdFwiLCB0aGlzLl9jb25zdHJhc3QpO1xuICAgIH1cbiAgfVxufSJdfQ==