
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2FixRandom/Scripts/Tile2FixedRandomTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8eb0c9IdP5GK67qzKlhbZww', 'Tile2FixedRandomTrait');
// subpackages/l_tile2FixRandom/Scripts/Tile2FixedRandomTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2FixedRandomTrait = /** @class */ (function (_super) {
    __extends(Tile2FixedRandomTrait, _super);
    function Tile2FixedRandomTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._minLevel = 2;
        _this._maxLevel = 10;
        _this._loadedLevelKeys = null;
        return _this;
    }
    Tile2FixedRandomTrait.prototype.isSupportMode = function (t) {
        return t === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2FixedRandomTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._minLevel = this._traitData.strategyMinLevel || 2;
        this._maxLevel = this._traitData.strategyMaxLevel || 10;
        this.registerEvent([{
                event: "ExtractTool_isFixedLevel",
                priority: 0,
                type: TraitManager_1.TraitEventPositionType.befor
            }]);
    };
    Tile2FixedRandomTrait.prototype.onT2FxRnd_priority = function (t, e) {
        var r;
        if (this.checkGameMode()) {
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: null !== (r = this._traitData.priority) && void 0 !== r ? r : 90
            });
        }
        else {
            e();
        }
    };
    Tile2FixedRandomTrait.prototype.onT2FxRnd_config = function (t, e) {
        if (this.checkGameMode()) {
            var r = this._traitData.strategy;
            if (r) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        strategy: r,
                        minLevel: this._minLevel,
                        maxLevel: this._maxLevel,
                        path: this._traitData.strategyPath || "tile2LevelData/fixLevelStrategy/" + r + "/",
                        bundle: this._traitData.strategyBundle
                    }
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    Tile2FixedRandomTrait.prototype.onT2FxRnd_onLoaded = function (t, e) {
        if (this.checkGameMode()) {
            var r = t.args[0];
            this._loadedLevelKeys = new Set(r);
            e();
        }
        else
            e();
    };
    Tile2FixedRandomTrait.prototype.onExtractTool_isFixedLevel = function (t, e) {
        var r;
        if (this.checkGameMode()) {
            var i = t.args[0].toString().padStart(2, "0");
            if (null !== (r = this._loadedLevelKeys) && void 0 !== r && r.has(i)) {
                e({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
            }
            else {
                e();
            }
        }
        else
            e();
    };
    Tile2FixedRandomTrait.traitKey = "Tile2FixedRandom";
    Tile2FixedRandomTrait = __decorate([
        mj.trait,
        mj.class("Tile2FixedRandomTrait")
    ], Tile2FixedRandomTrait);
    return Tile2FixedRandomTrait;
}(ExtractTrait_1.default));
exports.default = Tile2FixedRandomTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyRml4UmFuZG9tL1NjcmlwdHMvVGlsZTJGaXhlZFJhbmRvbVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsd0ZBQW9GO0FBQ3BGLDhFQUFnSDtBQUdoSDtJQUFtRCx5Q0FBWTtJQUEvRDtRQUFBLHFFQXdFQztRQXZFQyxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsZUFBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLHNCQUFnQixHQUFHLElBQUksQ0FBQzs7SUFxRTFCLENBQUM7SUFuRUMsNkNBQWEsR0FBYixVQUFjLENBQUM7UUFDYixPQUFPLENBQUMsS0FBSywwQkFBVSxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsc0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLDBCQUEwQjtnQkFDakMsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLHFDQUFzQixDQUFDLEtBQUs7YUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0Qsa0RBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDNUUsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBQ0QsZ0RBQWdCLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxFQUFFO2dCQUNMLENBQUMsQ0FBQztvQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtvQkFDMUMsT0FBTyxFQUFFLElBQUk7b0JBQ2IsU0FBUyxFQUFFO3dCQUNULFFBQVEsRUFBRSxDQUFDO3dCQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUzt3QkFDeEIsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTO3dCQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksa0NBQWtDLEdBQUcsQ0FBQyxHQUFHLEdBQUc7d0JBQ2xGLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWM7cUJBQ3ZDO2lCQUNGLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLENBQUMsRUFBRSxDQUFDO2FBQ0w7U0FDRjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxrREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCwwREFBMEIsR0FBMUIsVUFBMkIsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLENBQUM7UUFDTixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BFLENBQUMsQ0FBQztvQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtvQkFDMUMsT0FBTyxFQUFFLElBQUk7b0JBQ2IsU0FBUyxFQUFFLElBQUk7aUJBQ2hCLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLENBQUMsRUFBRSxDQUFDO2FBQ0w7U0FDRjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFuRU0sOEJBQVEsR0FBRyxrQkFBa0IsQ0FBQztJQUpsQixxQkFBcUI7UUFGekMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IscUJBQXFCLENBd0V6QztJQUFELDRCQUFDO0NBeEVELEFBd0VDLENBeEVrRCxzQkFBWSxHQXdFOUQ7a0JBeEVvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgVHJhaXRFdmVudFBvc2l0aW9uVHlwZSwgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUaWxlMkZpeGVkUmFuZG9tVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyRml4ZWRSYW5kb21UcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIF9taW5MZXZlbCA9IDI7XG4gIF9tYXhMZXZlbCA9IDEwO1xuICBfbG9hZGVkTGV2ZWxLZXlzID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMkZpeGVkUmFuZG9tXCI7XG4gIGlzU3VwcG9ydE1vZGUodCkge1xuICAgIHJldHVybiB0ID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9taW5MZXZlbCA9IHRoaXMuX3RyYWl0RGF0YS5zdHJhdGVneU1pbkxldmVsIHx8IDI7XG4gICAgdGhpcy5fbWF4TGV2ZWwgPSB0aGlzLl90cmFpdERhdGEuc3RyYXRlZ3lNYXhMZXZlbCB8fCAxMDtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgIGV2ZW50OiBcIkV4dHJhY3RUb29sX2lzRml4ZWRMZXZlbFwiLFxuICAgICAgcHJpb3JpdHk6IDAsXG4gICAgICB0eXBlOiBUcmFpdEV2ZW50UG9zaXRpb25UeXBlLmJlZm9yXG4gICAgfV0pO1xuICB9XG4gIG9uVDJGeFJuZF9wcmlvcml0eSh0LCBlKSB7XG4gICAgdmFyIHI7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IG51bGwgIT09IChyID0gdGhpcy5fdHJhaXREYXRhLnByaW9yaXR5KSAmJiB2b2lkIDAgIT09IHIgPyByIDogOTBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlKCk7XG4gICAgfVxuICB9XG4gIG9uVDJGeFJuZF9jb25maWcodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSB0aGlzLl90cmFpdERhdGEuc3RyYXRlZ3k7XG4gICAgICBpZiAocikge1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IHtcbiAgICAgICAgICAgIHN0cmF0ZWd5OiByLFxuICAgICAgICAgICAgbWluTGV2ZWw6IHRoaXMuX21pbkxldmVsLFxuICAgICAgICAgICAgbWF4TGV2ZWw6IHRoaXMuX21heExldmVsLFxuICAgICAgICAgICAgcGF0aDogdGhpcy5fdHJhaXREYXRhLnN0cmF0ZWd5UGF0aCB8fCBcInRpbGUyTGV2ZWxEYXRhL2ZpeExldmVsU3RyYXRlZ3kvXCIgKyByICsgXCIvXCIsXG4gICAgICAgICAgICBidW5kbGU6IHRoaXMuX3RyYWl0RGF0YS5zdHJhdGVneUJ1bmRsZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBvblQyRnhSbmRfb25Mb2FkZWQodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIHIgPSB0LmFyZ3NbMF07XG4gICAgICB0aGlzLl9sb2FkZWRMZXZlbEtleXMgPSBuZXcgU2V0KHIpO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25FeHRyYWN0VG9vbF9pc0ZpeGVkTGV2ZWwodCwgZSkge1xuICAgIHZhciByO1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIGkgPSB0LmFyZ3NbMF0udG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICBpZiAobnVsbCAhPT0gKHIgPSB0aGlzLl9sb2FkZWRMZXZlbEtleXMpICYmIHZvaWQgMCAhPT0gciAmJiByLmhhcyhpKSkge1xuICAgICAgICBlKHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==