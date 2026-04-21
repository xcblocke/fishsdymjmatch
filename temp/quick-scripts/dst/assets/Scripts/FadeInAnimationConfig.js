
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/FadeInAnimationConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1eea6z8/tpKxIrKxKa2rz3d', 'FadeInAnimationConfig');
// Scripts/FadeInAnimationConfig.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeInAnimationConfig = void 0;
var AnimationConfig_1 = require("./AnimationConfig");
var AnimationEnums_1 = require("./enums/AnimationEnums");
var FadeInAnimationConfig = /** @class */ (function (_super) {
    __extends(FadeInAnimationConfig, _super);
    function FadeInAnimationConfig(t) {
        if (t === void 0) { t = AnimationEnums_1.EAnimationConfigName.INTERLACE; }
        return _super.call(this, t) || this;
    }
    FadeInAnimationConfig.prototype.initializeConfig = function (e) {
        this.resetConfig();
        switch (e) {
            case AnimationEnums_1.EAnimationConfigName.ZIPPER:
                this.setupZipperConfig();
                break;
            case AnimationEnums_1.EAnimationConfigName.DOOR_CLOSE:
                this.setupDoorCloseConfig();
                break;
            case AnimationEnums_1.EAnimationConfigName.INTERLACE:
            default:
                this.setupInterlaceConfig();
        }
    };
    FadeInAnimationConfig.prototype.setupZipperConfig = function () {
        this.layerDurations.push(0, 0.05, 0.01, 0.005, 0);
        this.pushValues(this.lineDurations, 2, 0);
        this.pushValues(this.lineDurations, 2, 0.01);
        this.pushValues(this.lineDurations, 2, 0.02);
        this.pushValues(this.lineDurations, 2, 0.03);
        this.pushValues(this.lineDurations, 2, 0.04);
        this.pushValues(this.lineDurations, 2, 0.05);
        this.pushValues(this.lineDurations, 2, 0.06);
        this.pushValues(this.lineDurations, 2, 0.07);
        this.pushValues(this.lineDurations, 2, 0.08);
        this.pushValues(this.itemDurations, 14, 0);
        this.pushValues(this.linePositionDeviations, 18, -1);
        this.leftOutScreenPosition = cc.v2(-150, 0);
        this.leftOutScreenTime = 0.45;
        this.rightOutScreenPosition = cc.v2(150, 0);
        this.rightOutScreenTime = 0.45;
        this.shadowFadeOutTime = 0;
        this.shadowFadeInTime = 0.2;
    };
    FadeInAnimationConfig.prototype.setupDoorCloseConfig = function () {
        this.layerDurations.push(0, 0.04, 0.07, 0.1, 0);
        this.pushValues(this.lineDurations, 18, 0);
        this.pushValues(this.itemDurations, 14, 0);
        this.pushValues(this.linePositionDeviations, 18, 0);
        this.leftOutScreenPosition = cc.v2(-250, 0);
        this.leftOutScreenTime = 0.45;
        this.rightOutScreenPosition = cc.v2(250, 0);
        this.rightOutScreenTime = 0.45;
        this.shadowFadeOutTime = 0;
        this.shadowFadeInTime = 0.2;
    };
    FadeInAnimationConfig.prototype.setupInterlaceConfig = function () {
        this.layerDurations.push(0, 0.04, 0.02, 0.01, 0);
        this.pushValues(this.lineDurations, 2, 0.05);
        this.pushValues(this.lineDurations, 2, 0.03);
        this.pushValues(this.lineDurations, 4, 0.02);
        this.pushValues(this.lineDurations, 6, 0.01);
        this.pushValues(this.lineDurations, 4, 0);
        this.pushValues(this.itemDurations, 14, 0);
        this.pushValues(this.linePositionDeviations, 2, 6);
        this.pushValues(this.linePositionDeviations, 2, -6);
        this.pushValues(this.linePositionDeviations, 2, 6);
        this.pushValues(this.linePositionDeviations, 2, -6);
        this.pushValues(this.linePositionDeviations, 2, 6);
        this.pushValues(this.linePositionDeviations, 2, -6);
        this.pushValues(this.linePositionDeviations, 2, 6);
        this.pushValues(this.linePositionDeviations, 2, -6);
        this.pushValues(this.linePositionDeviations, 2, 6);
        this.leftOutScreenPosition = cc.v2(-50, 0);
        this.leftOutScreenTime = 0.44;
        this.rightOutScreenPosition = cc.v2(50, 0);
        this.rightOutScreenTime = 0.44;
        this.shadowFadeOutTime = 0;
        this.shadowFadeInTime = 0.2;
    };
    FadeInAnimationConfig.prototype.randomizeConfig = function () {
        Math.floor(Math.random() * FadeInAnimationConfig.CONFIG_NAMES.length);
        var e = FadeInAnimationConfig.CONFIG_NAMES[2];
        this.initializeConfig(e);
    };
    FadeInAnimationConfig.prototype.setConfig = function (e) {
        this.initializeConfig(e);
    };
    FadeInAnimationConfig.CONFIG_NAMES = [AnimationEnums_1.EAnimationConfigName.ZIPPER, AnimationEnums_1.EAnimationConfigName.DOOR_CLOSE, AnimationEnums_1.EAnimationConfigName.INTERLACE];
    return FadeInAnimationConfig;
}(AnimationConfig_1.AnimationConfig));
exports.FadeInAnimationConfig = FadeInAnimationConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0ZhZGVJbkFuaW1hdGlvbkNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRDtBQUNwRCx5REFBOEQ7QUFDOUQ7SUFBMkMseUNBQWU7SUFFeEQsK0JBQVksQ0FBa0M7UUFBbEMsa0JBQUEsRUFBQSxJQUFJLHFDQUFvQixDQUFDLFNBQVM7ZUFDNUMsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELGdEQUFnQixHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixRQUFRLENBQUMsRUFBRTtZQUNULEtBQUsscUNBQW9CLENBQUMsTUFBTTtnQkFDOUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQ3pCLE1BQU07WUFDUixLQUFLLHFDQUFvQixDQUFDLFVBQVU7Z0JBQ2xDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUM1QixNQUFNO1lBQ1IsS0FBSyxxQ0FBb0IsQ0FBQyxTQUFTLENBQUM7WUFDcEM7Z0JBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBQ0QsaURBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMs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LENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUM5QixDQUFDO0lBQ0QsK0NBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCx5Q0FBUyxHQUFULFVBQVUsQ0FBQztRQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBakZNLGtDQUFZLEdBQUcsQ0FBQyxxQ0FBb0IsQ0FBQyxNQUFNLEVBQUUscUNBQW9CLENBQUMsVUFBVSxFQUFFLHFDQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBa0Z2SCw0QkFBQztDQW5GRCxBQW1GQyxDQW5GMEMsaUNBQWUsR0FtRnpEO0FBbkZZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbkNvbmZpZyB9IGZyb20gJy4vQW5pbWF0aW9uQ29uZmlnJztcbmltcG9ydCB7IEVBbmltYXRpb25Db25maWdOYW1lIH0gZnJvbSAnLi9lbnVtcy9BbmltYXRpb25FbnVtcyc7XG5leHBvcnQgY2xhc3MgRmFkZUluQW5pbWF0aW9uQ29uZmlnIGV4dGVuZHMgQW5pbWF0aW9uQ29uZmlnIHtcbiAgc3RhdGljIENPTkZJR19OQU1FUyA9IFtFQW5pbWF0aW9uQ29uZmlnTmFtZS5aSVBQRVIsIEVBbmltYXRpb25Db25maWdOYW1lLkRPT1JfQ0xPU0UsIEVBbmltYXRpb25Db25maWdOYW1lLklOVEVSTEFDRV07XG4gIGNvbnN0cnVjdG9yKHQgPSBFQW5pbWF0aW9uQ29uZmlnTmFtZS5JTlRFUkxBQ0UpIHtcbiAgICBzdXBlcih0KTtcbiAgfVxuICBpbml0aWFsaXplQ29uZmlnKGUpIHtcbiAgICB0aGlzLnJlc2V0Q29uZmlnKCk7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIEVBbmltYXRpb25Db25maWdOYW1lLlpJUFBFUjpcbiAgICAgICAgdGhpcy5zZXR1cFppcHBlckNvbmZpZygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUFuaW1hdGlvbkNvbmZpZ05hbWUuRE9PUl9DTE9TRTpcbiAgICAgICAgdGhpcy5zZXR1cERvb3JDbG9zZUNvbmZpZygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRUFuaW1hdGlvbkNvbmZpZ05hbWUuSU5URVJMQUNFOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zZXR1cEludGVybGFjZUNvbmZpZygpO1xuICAgIH1cbiAgfVxuICBzZXR1cFppcHBlckNvbmZpZygpIHtcbiAgICB0aGlzLmxheWVyRHVyYXRpb25zLnB1c2goMCwgMC4wNSwgMC4wMSwgMC4wMDUsIDApO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLmxpbmVEdXJhdGlvbnMsIDIsIDApO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLmxpbmVEdXJhdGlvbnMsIDIsIDAuMDEpO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLmxpbmVEdXJhdGlvbnMsIDIsIDAuMDIpO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLmxpbmVEdXJhdGlvbnMsIDIsIDAuMDMpO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLmxpbmVEdXJhdGlvbnMsIDIsIDAuMDQpO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLmxpbmVEdXJhdGlvbnMsIDIsIDAuMDUpO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLmxpbmVEdXJhdGlvbnMsIDIsIDAuMDYpO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLmxpbmVEdXJhdGlvbnMsIDIsIDAuMDcpO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLmxpbmVEdXJhdGlvbnMsIDIsIDAuMDgpO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLml0ZW1EdXJhdGlvbnMsIDE0LCAwKTtcbiAgICB0aGlzLnB1c2hWYWx1ZXModGhpcy5saW5lUG9zaXRpb25EZXZpYXRpb25zLCAxOCwgLTEpO1xuICAgIHRoaXMubGVmdE91dFNjcmVlblBvc2l0aW9uID0gY2MudjIoLTE1MCwgMCk7XG4gICAgdGhpcy5sZWZ0T3V0U2NyZWVuVGltZSA9IDAuNDU7XG4gICAgdGhpcy5yaWdodE91dFNjcmVlblBvc2l0aW9uID0gY2MudjIoMTUwLCAwKTtcbiAgICB0aGlzLnJpZ2h0T3V0U2NyZWVuVGltZSA9IDAuNDU7XG4gICAgdGhpcy5zaGFkb3dGYWRlT3V0VGltZSA9IDA7XG4gICAgdGhpcy5zaGFkb3dGYWRlSW5UaW1lID0gMC4yO1xuICB9XG4gIHNldHVwRG9vckNsb3NlQ29uZmlnKCkge1xuICAgIHRoaXMubGF5ZXJEdXJhdGlvbnMucHVzaCgwLCAwLjA0LCAwLjA3LCAwLjEsIDApO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLmxpbmVEdXJhdGlvbnMsIDE4LCAwKTtcbiAgICB0aGlzLnB1c2hWYWx1ZXModGhpcy5pdGVtRHVyYXRpb25zLCAxNCwgMCk7XG4gICAgdGhpcy5wdXNoVmFsdWVzKHRoaXMubGluZVBvc2l0aW9uRGV2aWF0aW9ucywgMTgsIDApO1xuICAgIHRoaXMubGVmdE91dFNjcmVlblBvc2l0aW9uID0gY2MudjIoLTI1MCwgMCk7XG4gICAgdGhpcy5sZWZ0T3V0U2NyZWVuVGltZSA9IDAuNDU7XG4gICAgdGhpcy5yaWdodE91dFNjcmVlblBvc2l0aW9uID0gY2MudjIoMjUwLCAwKTtcbiAgICB0aGlzLnJpZ2h0T3V0U2NyZWVuVGltZSA9IDAuNDU7XG4gICAgdGhpcy5zaGFkb3dGYWRlT3V0VGltZSA9IDA7XG4gICAgdGhpcy5zaGFkb3dGYWRlSW5UaW1lID0gMC4yO1xuICB9XG4gIHNldHVwSW50ZXJsYWNlQ29uZmlnKCkge1xuICAgIHRoaXMubGF5ZXJEdXJhdGlvbnMucHVzaCgwLCAwLjA0LCAwLjAyLCAwLjAxLCAwKTtcbiAgICB0aGlzLnB1c2hWYWx1ZXModGhpcy5saW5lRHVyYXRpb25zLCAyLCAwLjA1KTtcbiAgICB0aGlzLnB1c2hWYWx1ZXModGhpcy5saW5lRHVyYXRpb25zLCAyLCAwLjAzKTtcbiAgICB0aGlzLnB1c2hWYWx1ZXModGhpcy5saW5lRHVyYXRpb25zLCA0LCAwLjAyKTtcbiAgICB0aGlzLnB1c2hWYWx1ZXModGhpcy5saW5lRHVyYXRpb25zLCA2LCAwLjAxKTtcbiAgICB0aGlzLnB1c2hWYWx1ZXModGhpcy5saW5lRHVyYXRpb25zLCA0LCAwKTtcbiAgICB0aGlzLnB1c2hWYWx1ZXModGhpcy5pdGVtRHVyYXRpb25zLCAxNCwgMCk7XG4gICAgdGhpcy5wdXNoVmFsdWVzKHRoaXMubGluZVBvc2l0aW9uRGV2aWF0aW9ucywgMiwgNik7XG4gICAgdGhpcy5wdXNoVmFsdWVzKHRoaXMubGluZVBvc2l0aW9uRGV2aWF0aW9ucywgMiwgLTYpO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLmxpbmVQb3NpdGlvbkRldmlhdGlvbnMsIDIsIDYpO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLmxpbmVQb3NpdGlvbkRldmlhdGlvbnMsIDIsIC02KTtcbiAgICB0aGlzLnB1c2hWYWx1ZXModGhpcy5saW5lUG9zaXRpb25EZXZpYXRpb25zLCAyLCA2KTtcbiAgICB0aGlzLnB1c2hWYWx1ZXModGhpcy5saW5lUG9zaXRpb25EZXZpYXRpb25zLCAyLCAtNik7XG4gICAgdGhpcy5wdXNoVmFsdWVzKHRoaXMubGluZVBvc2l0aW9uRGV2aWF0aW9ucywgMiwgNik7XG4gICAgdGhpcy5wdXNoVmFsdWVzKHRoaXMubGluZVBvc2l0aW9uRGV2aWF0aW9ucywgMiwgLTYpO1xuICAgIHRoaXMucHVzaFZhbHVlcyh0aGlzLmxpbmVQb3NpdGlvbkRldmlhdGlvbnMsIDIsIDYpO1xuICAgIHRoaXMubGVmdE91dFNjcmVlblBvc2l0aW9uID0gY2MudjIoLTUwLCAwKTtcbiAgICB0aGlzLmxlZnRPdXRTY3JlZW5UaW1lID0gMC40NDtcbiAgICB0aGlzLnJpZ2h0T3V0U2NyZWVuUG9zaXRpb24gPSBjYy52Mig1MCwgMCk7XG4gICAgdGhpcy5yaWdodE91dFNjcmVlblRpbWUgPSAwLjQ0O1xuICAgIHRoaXMuc2hhZG93RmFkZU91dFRpbWUgPSAwO1xuICAgIHRoaXMuc2hhZG93RmFkZUluVGltZSA9IDAuMjtcbiAgfVxuICByYW5kb21pemVDb25maWcoKSB7XG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRmFkZUluQW5pbWF0aW9uQ29uZmlnLkNPTkZJR19OQU1FUy5sZW5ndGgpO1xuICAgIHZhciBlID0gRmFkZUluQW5pbWF0aW9uQ29uZmlnLkNPTkZJR19OQU1FU1syXTtcbiAgICB0aGlzLmluaXRpYWxpemVDb25maWcoZSk7XG4gIH1cbiAgc2V0Q29uZmlnKGUpIHtcbiAgICB0aGlzLmluaXRpYWxpemVDb25maWcoZSk7XG4gIH1cbn0iXX0=