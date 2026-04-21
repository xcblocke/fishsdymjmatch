
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2FixedStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '25569ynpz5JRoLSlIP/rVkx', 'Tile2FixedStrategy');
// Scripts/Tile2FixedStrategy.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Tile2BaseStrategy_1 = require("./Tile2BaseStrategy");
var Tile2FixedStrategy = /** @class */ (function (_super) {
    __extends(Tile2FixedStrategy, _super);
    function Tile2FixedStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Tile2Fixed";
        _this.priority = 100;
        return _this;
    }
    Tile2FixedStrategy.prototype.getPriority = function () {
        return 100;
    };
    Tile2FixedStrategy.prototype.isFixedLevel = function () {
        return false;
    };
    Tile2FixedStrategy.prototype.getFixedLevelStr = function () {
        return null;
    };
    Tile2FixedStrategy.prototype.init = function () {
        this.priority = this.getPriority();
        return Promise.resolve();
    };
    Tile2FixedStrategy.prototype.canHandle = function (e) {
        var t = e.gameData.getLevelId();
        return !!t && this.isFixedLevel(t);
    };
    Tile2FixedStrategy.prototype.extract = function (e) {
        var t = e.gameData.getLevelId(), o = this.getFixedLevelStr(t);
        return o ? Promise.resolve({
            content: o,
            index: "fixed"
        }) : Promise.resolve(null);
    };
    __decorate([
        mj.traitEvent("T2FixStr_priority")
    ], Tile2FixedStrategy.prototype, "getPriority", null);
    __decorate([
        mj.traitEvent("T2FixStr_isFixed")
    ], Tile2FixedStrategy.prototype, "isFixedLevel", null);
    __decorate([
        mj.traitEvent("T2FixStr_getFixed")
    ], Tile2FixedStrategy.prototype, "getFixedLevelStr", null);
    Tile2FixedStrategy = __decorate([
        mj.class("Tile2FixedStrategy")
    ], Tile2FixedStrategy);
    return Tile2FixedStrategy;
}(Tile2BaseStrategy_1.default));
exports.default = Tile2FixedStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyRml4ZWRTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBRXBEO0lBQWdELHNDQUFpQjtJQUFqRTtRQUFBLHFFQStCQztRQTlCQyxVQUFJLEdBQUcsWUFBWSxDQUFDO1FBQ3BCLGNBQVEsR0FBRyxHQUFHLENBQUM7O0lBNkJqQixDQUFDO0lBM0JDLHdDQUFXLEdBQVg7UUFDRSxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCx5Q0FBWSxHQUFaO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsNkNBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsaUNBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxzQ0FBUyxHQUFULFVBQVUsQ0FBQztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELG9DQUFPLEdBQVAsVUFBUSxDQUFDO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsRUFDN0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUN6QixPQUFPLEVBQUUsQ0FBQztZQUNWLEtBQUssRUFBRSxPQUFPO1NBQ2YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUExQkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO3lEQUdsQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQzswREFHakM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7OERBR2xDO0lBZGtCLGtCQUFrQjtRQUR0QyxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDO09BQ1Ysa0JBQWtCLENBK0J0QztJQUFELHlCQUFDO0NBL0JELEFBK0JDLENBL0IrQywyQkFBaUIsR0ErQmhFO2tCQS9Cb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbGUyQmFzZVN0cmF0ZWd5IGZyb20gJy4vVGlsZTJCYXNlU3RyYXRlZ3knO1xuQG1qLmNsYXNzKFwiVGlsZTJGaXhlZFN0cmF0ZWd5XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkZpeGVkU3RyYXRlZ3kgZXh0ZW5kcyBUaWxlMkJhc2VTdHJhdGVneSB7XG4gIG5hbWUgPSBcIlRpbGUyRml4ZWRcIjtcbiAgcHJpb3JpdHkgPSAxMDA7XG4gIEBtai50cmFpdEV2ZW50KFwiVDJGaXhTdHJfcHJpb3JpdHlcIilcbiAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIDEwMDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyRml4U3RyX2lzRml4ZWRcIilcbiAgaXNGaXhlZExldmVsKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyRml4U3RyX2dldEZpeGVkXCIpXG4gIGdldEZpeGVkTGV2ZWxTdHIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gdGhpcy5nZXRQcmlvcml0eSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuICBjYW5IYW5kbGUoZSkge1xuICAgIHZhciB0ID0gZS5nYW1lRGF0YS5nZXRMZXZlbElkKCk7XG4gICAgcmV0dXJuICEhdCAmJiB0aGlzLmlzRml4ZWRMZXZlbCh0KTtcbiAgfVxuICBleHRyYWN0KGUpIHtcbiAgICB2YXIgdCA9IGUuZ2FtZURhdGEuZ2V0TGV2ZWxJZCgpLFxuICAgICAgbyA9IHRoaXMuZ2V0Rml4ZWRMZXZlbFN0cih0KTtcbiAgICByZXR1cm4gbyA/IFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBjb250ZW50OiBvLFxuICAgICAgaW5kZXg6IFwiZml4ZWRcIlxuICAgIH0pIDogUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICB9XG59Il19