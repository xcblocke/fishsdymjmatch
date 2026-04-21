
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tileTypes/Scripts/TileTypesTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27f569ZfshBLIIkt0Jzkh3B', 'TileTypesTrait');
// subpackages/l_tileTypes/Scripts/TileTypesTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TileTypesTrait = /** @class */ (function (_super) {
    __extends(TileTypesTrait, _super);
    function TileTypesTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileTypesTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.registerTile2Event();
    };
    TileTypesTrait.prototype.registerTile2Event = function () {
        this.registerEvent([{
                event: "T2GameCtrl_getTileTypes",
                type: 2
            }]);
    };
    TileTypesTrait.prototype.onMainGameCtrl_getTile = function (t, e) {
        t.args[0].getLevelId() >= this._traitData.level && (t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.RollCard);
        e({
            returnVal: t.beforReturnVal
        });
    };
    TileTypesTrait.prototype.onT2GameCtrl_getTileTypes = function (t, e) {
        t.args[0].getLevelId() >= this._traitData.level && (t.beforReturnVal = t.beforReturnVal + "," + TileTypeEnum_1.ETileType.RollCard);
        e({
            returnVal: t.beforReturnVal
        });
    };
    TileTypesTrait.traitKey = "TileTypes";
    TileTypesTrait = __decorate([
        mj.trait,
        mj.class("TileTypesTrait")
    ], TileTypesTrait);
    return TileTypesTrait;
}(Trait_1.default));
exports.default = TileTypesTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGVUeXBlcy9TY3JpcHRzL1RpbGVUeXBlc1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRkFBNkU7QUFDN0UsZ0VBQTJEO0FBRzNEO0lBQTRDLGtDQUFLO0lBQWpEOztJQXdCQSxDQUFDO0lBdEJDLCtCQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRCwyQ0FBa0IsR0FBbEI7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSx5QkFBeUI7Z0JBQ2hDLElBQUksRUFBRSxDQUFDO2FBQ1IsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0QsK0NBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxjQUFjLEdBQUcsR0FBRyxHQUFHLHdCQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEgsQ0FBQyxDQUFDO1lBQ0EsU0FBUyxFQUFFLENBQUMsQ0FBQyxjQUFjO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxrREFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLGNBQWMsR0FBRyxHQUFHLEdBQUcsd0JBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwSCxDQUFDLENBQUM7WUFDQSxTQUFTLEVBQUUsQ0FBQyxDQUFDLGNBQWM7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXRCTSx1QkFBUSxHQUFHLFdBQVcsQ0FBQztJQURYLGNBQWM7UUFGbEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQXdCbEM7SUFBRCxxQkFBQztDQXhCRCxBQXdCQyxDQXhCMkMsZUFBSyxHQXdCaEQ7a0JBeEJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGVUeXBlc1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlVHlwZXNUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlVHlwZXNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMucmVnaXN0ZXJUaWxlMkV2ZW50KCk7XG4gIH1cbiAgcmVnaXN0ZXJUaWxlMkV2ZW50KCkge1xuICAgIHRoaXMucmVnaXN0ZXJFdmVudChbe1xuICAgICAgZXZlbnQ6IFwiVDJHYW1lQ3RybF9nZXRUaWxlVHlwZXNcIixcbiAgICAgIHR5cGU6IDJcbiAgICB9XSk7XG4gIH1cbiAgb25NYWluR2FtZUN0cmxfZ2V0VGlsZSh0LCBlKSB7XG4gICAgdC5hcmdzWzBdLmdldExldmVsSWQoKSA+PSB0aGlzLl90cmFpdERhdGEubGV2ZWwgJiYgKHQuYmVmb3JSZXR1cm5WYWwgPSB0LmJlZm9yUmV0dXJuVmFsICsgXCIsXCIgKyBFVGlsZVR5cGUuUm9sbENhcmQpO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVmFsOiB0LmJlZm9yUmV0dXJuVmFsXG4gICAgfSk7XG4gIH1cbiAgb25UMkdhbWVDdHJsX2dldFRpbGVUeXBlcyh0LCBlKSB7XG4gICAgdC5hcmdzWzBdLmdldExldmVsSWQoKSA+PSB0aGlzLl90cmFpdERhdGEubGV2ZWwgJiYgKHQuYmVmb3JSZXR1cm5WYWwgPSB0LmJlZm9yUmV0dXJuVmFsICsgXCIsXCIgKyBFVGlsZVR5cGUuUm9sbENhcmQpO1xuICAgIGUoe1xuICAgICAgcmV0dXJuVmFsOiB0LmJlZm9yUmV0dXJuVmFsXG4gICAgfSk7XG4gIH1cbn0iXX0=