
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/config/AnimationTimingConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ee49tf2KxAi6AVasK7SivF', 'AnimationTimingConfig');
// Scripts/config/AnimationTimingConfig.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationTimingConfig = void 0;
var AnimationEnums_1 = require("../enums/AnimationEnums");
var AnimationTimingConfig = /** @class */ (function () {
    function AnimationTimingConfig() {
        this.fadeInType = AnimationEnums_1.EFadeInAnimationType.FOUR_PARTS;
        this.outScreenLayerDurations = [];
        this.outScreenLineDurations = [];
        this.leftTopOutScreenPosition = cc.v2(-400, 0);
        this.leftTopOutScreenTime = 0.334;
        this.rightTopOutScreenPosition = cc.v2(400, 0);
        this.rightTopOutScreenTime = 0.334;
        this.rightBottomOutScreenPosition = cc.v2(400, 0);
        this.rightBottomOutScreenTime = 0.334;
        this.leftBottomOutScreenPosition = cc.v2(-400, 0);
        this.leftBottomOutScreenTime = 0.3;
        this.leftOutScreenPosition = cc.v2(50, 0);
        this.leftOutScreenTime = 0.5;
        this.rightOutScreenPosition = cc.v2(500, 0);
        this.rightOutScreenTime = 0.5;
        this.shadowFadeOutTime = 0;
        this.shadowFadeInTime = 0.1;
        this.initializeDefaultValues();
    }
    AnimationTimingConfig.prototype.initializeDefaultValues = function () {
        this.outScreenLayerDurations.push(0, 0.133, 0.05, 0.02);
        this.outScreenLineDurations.push(0);
        for (var e = 0; e <= 13; e++)
            this.outScreenLineDurations.push(0.06);
    };
    AnimationTimingConfig.prototype.getPositionAndTime = function (e) {
        switch (e) {
            case AnimationEnums_1.EScreenFadeType.LEFT_TOP:
                return {
                    position: this.leftTopOutScreenPosition,
                    time: this.leftTopOutScreenTime
                };
            case AnimationEnums_1.EScreenFadeType.RIGHT_TOP:
                return {
                    position: this.rightTopOutScreenPosition,
                    time: this.rightTopOutScreenTime
                };
            case AnimationEnums_1.EScreenFadeType.RIGHT_BOTTOM:
                return {
                    position: this.rightBottomOutScreenPosition,
                    time: this.rightBottomOutScreenTime
                };
            case AnimationEnums_1.EScreenFadeType.LEFT_BOTTOM:
                return {
                    position: this.leftBottomOutScreenPosition,
                    time: this.leftBottomOutScreenTime
                };
            case AnimationEnums_1.EScreenFadeType.LEFT:
                return {
                    position: this.leftOutScreenPosition,
                    time: this.leftOutScreenTime
                };
            case AnimationEnums_1.EScreenFadeType.RIGHT:
                return {
                    position: this.rightOutScreenPosition,
                    time: this.rightOutScreenTime
                };
            default:
                return {
                    position: this.leftOutScreenPosition,
                    time: this.leftOutScreenTime
                };
        }
    };
    return AnimationTimingConfig;
}());
exports.AnimationTimingConfig = AnimationTimingConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvbmZpZy9BbmltYXRpb25UaW1pbmdDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwREFBZ0Y7QUFDaEY7SUFrQkU7UUFqQkEsZUFBVSxHQUFHLHFDQUFvQixDQUFDLFVBQVUsQ0FBQztRQUM3Qyw0QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDN0IsMkJBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLDZCQUF3QixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLDhCQUF5QixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLDBCQUFxQixHQUFHLEtBQUssQ0FBQztRQUM5QixpQ0FBNEIsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3Qyw2QkFBd0IsR0FBRyxLQUFLLENBQUM7UUFDakMsZ0NBQTJCLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3Qyw0QkFBdUIsR0FBRyxHQUFHLENBQUM7UUFDOUIsMEJBQXFCLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDckMsc0JBQWlCLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLDJCQUFzQixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLHVCQUFrQixHQUFHLEdBQUcsQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsR0FBRyxDQUFDO1FBRXJCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDRCx1REFBdUIsR0FBdkI7UUFDRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRCxrREFBa0IsR0FBbEIsVUFBbUIsQ0FBQztRQUNsQixRQUFRLENBQUMsRUFBRTtZQUNULEtBQUssZ0NBQWUsQ0FBQyxRQUFRO2dCQUMzQixPQUFPO29CQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsd0JBQXdCO29CQUN2QyxJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtpQkFDaEMsQ0FBQztZQUNKLEtBQUssZ0NBQWUsQ0FBQyxTQUFTO2dCQUM1QixPQUFPO29CQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMseUJBQXlCO29CQUN4QyxJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtpQkFDakMsQ0FBQztZQUNKLEtBQUssZ0NBQWUsQ0FBQyxZQUFZO2dCQUMvQixPQUFPO29CQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsNEJBQTRCO29CQUMzQyxJQUFJLEVBQUUsSUFBSSxDQUFDLHdCQUF3QjtpQkFDcEMsQ0FBQztZQUNKLEtBQUssZ0NBQWUsQ0FBQyxXQUFXO2dCQUM5QixPQUFPO29CQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsMkJBQTJCO29CQUMxQyxJQUFJLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtpQkFDbkMsQ0FBQztZQUNKLEtBQUssZ0NBQWUsQ0FBQyxJQUFJO2dCQUN2QixPQUFPO29CQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMscUJBQXFCO29CQUNwQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtpQkFDN0IsQ0FBQztZQUNKLEtBQUssZ0NBQWUsQ0FBQyxLQUFLO2dCQUN4QixPQUFPO29CQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsc0JBQXNCO29CQUNyQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtpQkFDOUIsQ0FBQztZQUNKO2dCQUNFLE9BQU87b0JBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxxQkFBcUI7b0JBQ3BDLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCO2lCQUM3QixDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQWpFQSxBQWlFQyxJQUFBO0FBakVZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVGYWRlSW5BbmltYXRpb25UeXBlLCBFU2NyZWVuRmFkZVR5cGUgfSBmcm9tICcuLi9lbnVtcy9BbmltYXRpb25FbnVtcyc7XG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uVGltaW5nQ29uZmlnIHtcbiAgZmFkZUluVHlwZSA9IEVGYWRlSW5BbmltYXRpb25UeXBlLkZPVVJfUEFSVFM7XG4gIG91dFNjcmVlbkxheWVyRHVyYXRpb25zID0gW107XG4gIG91dFNjcmVlbkxpbmVEdXJhdGlvbnMgPSBbXTtcbiAgbGVmdFRvcE91dFNjcmVlblBvc2l0aW9uID0gY2MudjIoLTQwMCwgMCk7XG4gIGxlZnRUb3BPdXRTY3JlZW5UaW1lID0gMC4zMzQ7XG4gIHJpZ2h0VG9wT3V0U2NyZWVuUG9zaXRpb24gPSBjYy52Mig0MDAsIDApO1xuICByaWdodFRvcE91dFNjcmVlblRpbWUgPSAwLjMzNDtcbiAgcmlnaHRCb3R0b21PdXRTY3JlZW5Qb3NpdGlvbiA9IGNjLnYyKDQwMCwgMCk7XG4gIHJpZ2h0Qm90dG9tT3V0U2NyZWVuVGltZSA9IDAuMzM0O1xuICBsZWZ0Qm90dG9tT3V0U2NyZWVuUG9zaXRpb24gPSBjYy52MigtNDAwLCAwKTtcbiAgbGVmdEJvdHRvbU91dFNjcmVlblRpbWUgPSAwLjM7XG4gIGxlZnRPdXRTY3JlZW5Qb3NpdGlvbiA9IGNjLnYyKDUwLCAwKTtcbiAgbGVmdE91dFNjcmVlblRpbWUgPSAwLjU7XG4gIHJpZ2h0T3V0U2NyZWVuUG9zaXRpb24gPSBjYy52Mig1MDAsIDApO1xuICByaWdodE91dFNjcmVlblRpbWUgPSAwLjU7XG4gIHNoYWRvd0ZhZGVPdXRUaW1lID0gMDtcbiAgc2hhZG93RmFkZUluVGltZSA9IDAuMTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplRGVmYXVsdFZhbHVlcygpO1xuICB9XG4gIGluaXRpYWxpemVEZWZhdWx0VmFsdWVzKCkge1xuICAgIHRoaXMub3V0U2NyZWVuTGF5ZXJEdXJhdGlvbnMucHVzaCgwLCAwLjEzMywgMC4wNSwgMC4wMik7XG4gICAgdGhpcy5vdXRTY3JlZW5MaW5lRHVyYXRpb25zLnB1c2goMCk7XG4gICAgZm9yICh2YXIgZSA9IDA7IGUgPD0gMTM7IGUrKykgdGhpcy5vdXRTY3JlZW5MaW5lRHVyYXRpb25zLnB1c2goMC4wNik7XG4gIH1cbiAgZ2V0UG9zaXRpb25BbmRUaW1lKGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgRVNjcmVlbkZhZGVUeXBlLkxFRlRfVE9QOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmxlZnRUb3BPdXRTY3JlZW5Qb3NpdGlvbixcbiAgICAgICAgICB0aW1lOiB0aGlzLmxlZnRUb3BPdXRTY3JlZW5UaW1lXG4gICAgICAgIH07XG4gICAgICBjYXNlIEVTY3JlZW5GYWRlVHlwZS5SSUdIVF9UT1A6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcG9zaXRpb246IHRoaXMucmlnaHRUb3BPdXRTY3JlZW5Qb3NpdGlvbixcbiAgICAgICAgICB0aW1lOiB0aGlzLnJpZ2h0VG9wT3V0U2NyZWVuVGltZVxuICAgICAgICB9O1xuICAgICAgY2FzZSBFU2NyZWVuRmFkZVR5cGUuUklHSFRfQk9UVE9NOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLnJpZ2h0Qm90dG9tT3V0U2NyZWVuUG9zaXRpb24sXG4gICAgICAgICAgdGltZTogdGhpcy5yaWdodEJvdHRvbU91dFNjcmVlblRpbWVcbiAgICAgICAgfTtcbiAgICAgIGNhc2UgRVNjcmVlbkZhZGVUeXBlLkxFRlRfQk9UVE9NOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmxlZnRCb3R0b21PdXRTY3JlZW5Qb3NpdGlvbixcbiAgICAgICAgICB0aW1lOiB0aGlzLmxlZnRCb3R0b21PdXRTY3JlZW5UaW1lXG4gICAgICAgIH07XG4gICAgICBjYXNlIEVTY3JlZW5GYWRlVHlwZS5MRUZUOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmxlZnRPdXRTY3JlZW5Qb3NpdGlvbixcbiAgICAgICAgICB0aW1lOiB0aGlzLmxlZnRPdXRTY3JlZW5UaW1lXG4gICAgICAgIH07XG4gICAgICBjYXNlIEVTY3JlZW5GYWRlVHlwZS5SSUdIVDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwb3NpdGlvbjogdGhpcy5yaWdodE91dFNjcmVlblBvc2l0aW9uLFxuICAgICAgICAgIHRpbWU6IHRoaXMucmlnaHRPdXRTY3JlZW5UaW1lXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmxlZnRPdXRTY3JlZW5Qb3NpdGlvbixcbiAgICAgICAgICB0aW1lOiB0aGlzLmxlZnRPdXRTY3JlZW5UaW1lXG4gICAgICAgIH07XG4gICAgfVxuICB9XG59Il19