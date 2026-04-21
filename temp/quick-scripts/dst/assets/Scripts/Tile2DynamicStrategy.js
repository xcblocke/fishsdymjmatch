
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2DynamicStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66c8aiBFJpDgYg7/eSzNri/', 'Tile2DynamicStrategy');
// Scripts/Tile2DynamicStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractNormalLevels_1 = require("./core/extractQuestion/ExtractNormalLevels");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var Tile2CapabilityExtractRegistry_1 = require("./Tile2CapabilityExtractRegistry");
var Tile2BaseStrategy_1 = require("./Tile2BaseStrategy");
var Tile2DynamicStrategy = /** @class */ (function (_super) {
    __extends(Tile2DynamicStrategy, _super);
    function Tile2DynamicStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Tile2Dynamic";
        _this.priority = 40;
        return _this;
    }
    Tile2DynamicStrategy.prototype.getPriority = function () {
        return 40;
    };
    Tile2DynamicStrategy.prototype.isDynamicEnabledTrait = function () {
        return Tile2CapabilityExtractRegistry_1.default.isEnabled();
    };
    Tile2DynamicStrategy.prototype.isDynamicEnabled = function (e) {
        return this.isDynamicEnabledTrait(e);
    };
    Tile2DynamicStrategy.prototype.init = function () {
        this.priority = this.getPriority();
        return Promise.resolve();
    };
    Tile2DynamicStrategy.prototype.canHandle = function (e) {
        return this.isDynamicEnabled(e);
    };
    Tile2DynamicStrategy.prototype.extract = function (e) {
        try {
            var t = e.gameData, o = {
                levelID: t.getLevelId(),
                levelIndex: t.getLevelGenIndex(),
                dieResult: t.getDieResult(),
                gameType: GameTypeEnums_1.MjGameType.Tile2Normal
            };
            o.reallyLevelID = Math.max(1, o.levelIndex);
            return ExtractNormalLevels_1.default.getInstance().getContent(o).then(function (e) {
                var t = __read(e, 5), o = t[0], n = (t[1], t[2]), i = t[3], r = t[4];
                return o ? {
                    content: o,
                    index: String(n),
                    libName: i || r,
                    isCapabilityExtract: true
                } : null;
            }).catch(function () {
                return null;
            });
        }
        catch (e) {
            return Promise.resolve(null);
        }
    };
    __decorate([
        mj.traitEvent("T2DynStr_priority")
    ], Tile2DynamicStrategy.prototype, "getPriority", null);
    __decorate([
        mj.traitEvent("T2DynStr_isDyn")
    ], Tile2DynamicStrategy.prototype, "isDynamicEnabledTrait", null);
    __decorate([
        mj.traitEvent("T2DynStr_extract")
    ], Tile2DynamicStrategy.prototype, "extract", null);
    Tile2DynamicStrategy = __decorate([
        mj.class("Tile2DynamicStrategy")
    ], Tile2DynamicStrategy);
    return Tile2DynamicStrategy;
}(Tile2BaseStrategy_1.default));
exports.default = Tile2DynamicStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyRHluYW1pY1N0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRkFBNkU7QUFDN0UseUVBQXFFO0FBQ3JFLG1GQUE4RTtBQUM5RSx5REFBb0Q7QUFFcEQ7SUFBa0Qsd0NBQWlCO0lBQW5FO1FBQUEscUVBbURDO1FBbERDLFVBQUksR0FBRyxjQUFjLENBQUM7UUFDdEIsY0FBUSxHQUFHLEVBQUUsQ0FBQzs7SUFpRGhCLENBQUM7SUEvQ0MsMENBQVcsR0FBWDtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELG9EQUFxQixHQUFyQjtRQUNFLE9BQU8sd0NBQThCLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUNELCtDQUFnQixHQUFoQixVQUFpQixDQUFDO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxtQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELHdDQUFTLEdBQVQsVUFBVSxDQUFDO1FBQ1QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHNDQUFPLEdBQVAsVUFBUSxDQUFDO1FBQ1AsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQ2hCLENBQUMsR0FBRztnQkFDRixPQUFPLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRTtnQkFDdkIsVUFBVSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDaEMsU0FBUyxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUU7Z0JBQzNCLFFBQVEsRUFBRSwwQkFBVSxDQUFDLFdBQVc7YUFDakMsQ0FBQztZQUNKLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sNkJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ2xCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNULE9BQU8sRUFBRSxDQUFDO29CQUNWLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ2YsbUJBQW1CLEVBQUUsSUFBSTtpQkFDMUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNQLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQTlDRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7MkRBR2xDO0lBRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO3FFQUcvQjtJQVlEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQzt1REE2QmpDO0lBbERrQixvQkFBb0I7UUFEeEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQW1EeEM7SUFBRCwyQkFBQztDQW5ERCxBQW1EQyxDQW5EaUQsMkJBQWlCLEdBbURsRTtrQkFuRG9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0Tm9ybWFsTGV2ZWxzIGZyb20gJy4vY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdE5vcm1hbExldmVscyc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCBUaWxlMkNhcGFiaWxpdHlFeHRyYWN0UmVnaXN0cnkgZnJvbSAnLi9UaWxlMkNhcGFiaWxpdHlFeHRyYWN0UmVnaXN0cnknO1xuaW1wb3J0IFRpbGUyQmFzZVN0cmF0ZWd5IGZyb20gJy4vVGlsZTJCYXNlU3RyYXRlZ3knO1xuQG1qLmNsYXNzKFwiVGlsZTJEeW5hbWljU3RyYXRlZ3lcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyRHluYW1pY1N0cmF0ZWd5IGV4dGVuZHMgVGlsZTJCYXNlU3RyYXRlZ3kge1xuICBuYW1lID0gXCJUaWxlMkR5bmFtaWNcIjtcbiAgcHJpb3JpdHkgPSA0MDtcbiAgQG1qLnRyYWl0RXZlbnQoXCJUMkR5blN0cl9wcmlvcml0eVwiKVxuICBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gNDA7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMkR5blN0cl9pc0R5blwiKVxuICBpc0R5bmFtaWNFbmFibGVkVHJhaXQoKSB7XG4gICAgcmV0dXJuIFRpbGUyQ2FwYWJpbGl0eUV4dHJhY3RSZWdpc3RyeS5pc0VuYWJsZWQoKTtcbiAgfVxuICBpc0R5bmFtaWNFbmFibGVkKGUpIHtcbiAgICByZXR1cm4gdGhpcy5pc0R5bmFtaWNFbmFibGVkVHJhaXQoZSk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdGhpcy5nZXRQcmlvcml0eSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBjYW5IYW5kbGUoZSkge1xuICAgIHJldHVybiB0aGlzLmlzRHluYW1pY0VuYWJsZWQoZSk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMkR5blN0cl9leHRyYWN0XCIpXG4gIGV4dHJhY3QoZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgdCA9IGUuZ2FtZURhdGEsXG4gICAgICAgIG8gPSB7XG4gICAgICAgICAgbGV2ZWxJRDogdC5nZXRMZXZlbElkKCksXG4gICAgICAgICAgbGV2ZWxJbmRleDogdC5nZXRMZXZlbEdlbkluZGV4KCksXG4gICAgICAgICAgZGllUmVzdWx0OiB0LmdldERpZVJlc3VsdCgpLFxuICAgICAgICAgIGdhbWVUeXBlOiBNakdhbWVUeXBlLlRpbGUyTm9ybWFsXG4gICAgICAgIH07XG4gICAgICBvLnJlYWxseUxldmVsSUQgPSBNYXRoLm1heCgxLCBvLmxldmVsSW5kZXgpO1xuICAgICAgcmV0dXJuIEV4dHJhY3ROb3JtYWxMZXZlbHMuZ2V0SW5zdGFuY2UoKS5nZXRDb250ZW50KG8pLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHQgPSBfX3JlYWQoZSwgNSksXG4gICAgICAgICAgbyA9IHRbMF0sXG4gICAgICAgICAgbiA9ICh0WzFdLCB0WzJdKSxcbiAgICAgICAgICBpID0gdFszXSxcbiAgICAgICAgICByID0gdFs0XTtcbiAgICAgICAgcmV0dXJuIG8gPyB7XG4gICAgICAgICAgY29udGVudDogbyxcbiAgICAgICAgICBpbmRleDogU3RyaW5nKG4pLFxuICAgICAgICAgIGxpYk5hbWU6IGkgfHwgcixcbiAgICAgICAgICBpc0NhcGFiaWxpdHlFeHRyYWN0OiB0cnVlXG4gICAgICAgIH0gOiBudWxsO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgfVxuICB9XG59Il19