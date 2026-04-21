
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2FixedLevel/Scripts/Tile2FixedLevelTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6bb5NjAQhJmaeOdDMXMnwC', 'Tile2FixedLevelTrait');
// subpackages/l_tile2FixedLevel/Scripts/Tile2FixedLevelTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2FixedLevelTrait = /** @class */ (function (_super) {
    __extends(Tile2FixedLevelTrait, _super);
    function Tile2FixedLevelTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._levels = [];
        return _this;
    }
    Tile2FixedLevelTrait.prototype.isSupportMode = function (e) {
        return e === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2FixedLevelTrait.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        this._priority = null !== (t = this._traitData.priority) && void 0 !== t ? t : 100;
        this._levels = this._traitData.levels || [];
        this.registerEvent([{
                event: "ExtractTool_isFixedLevel",
                priority: 0,
                type: TraitManager_1.TraitEventPositionType.befor
            }]);
    };
    Tile2FixedLevelTrait.prototype.onT2FixStr_priority = function (e, t) {
        if (this.checkGameMode()) {
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: this._priority
            });
        }
        else {
            t();
        }
    };
    Tile2FixedLevelTrait.prototype.onT2FixStr_isFixed = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0];
            if (this._levels[r - 1]) {
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    Tile2FixedLevelTrait.prototype.onT2FixStr_getFixed = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0], i = this._levels[r - 1];
            if (i) {
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: i
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    Tile2FixedLevelTrait.prototype.onExtractTool_isFixedLevel = function (e, t) {
        if (this.checkGameMode()) {
            var r = e.args[0];
            if (this._levels[r - 1]) {
                t({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: true
                });
            }
            else {
                t();
            }
        }
        else
            t();
    };
    Tile2FixedLevelTrait.traitKey = "Tile2FixedLevel";
    Tile2FixedLevelTrait = __decorate([
        mj.trait,
        mj.class("Tile2FixedLevelTrait")
    ], Tile2FixedLevelTrait);
    return Tile2FixedLevelTrait;
}(ExtractTrait_1.default));
exports.default = Tile2FixedLevelTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyRml4ZWRMZXZlbC9TY3JpcHRzL1RpbGUyRml4ZWRMZXZlbFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsd0ZBQW9GO0FBQ3BGLDhFQUFnSDtBQUdoSDtJQUFrRCx3Q0FBWTtJQUE5RDtRQUFBLHFFQXVFQztRQXRFQyxhQUFPLEdBQUcsRUFBRSxDQUFDOztJQXNFZixDQUFDO0lBcEVDLDRDQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsT0FBTyxDQUFDLEtBQUssMEJBQVUsQ0FBQyxXQUFXLENBQUM7SUFDdEMsQ0FBQztJQUNELHFDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ25GLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLDBCQUEwQjtnQkFDakMsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLHFDQUFzQixDQUFDLEtBQUs7YUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0Qsa0RBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQUNELGlEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3ZCLENBQUMsQ0FBQztvQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtvQkFDMUMsT0FBTyxFQUFFLElBQUk7b0JBQ2IsU0FBUyxFQUFFLElBQUk7aUJBQ2hCLENBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLENBQUMsRUFBRSxDQUFDO2FBQ0w7U0FDRjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxrREFBbUIsR0FBbkIsVUFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsQ0FBQyxDQUFDO29CQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO29CQUMxQyxPQUFPLEVBQUUsSUFBSTtvQkFDYixTQUFTLEVBQUUsQ0FBQztpQkFDYixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxDQUFDLEVBQUUsQ0FBQzthQUNMO1NBQ0Y7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QseURBQTBCLEdBQTFCLFVBQTJCLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDdkIsQ0FBQyxDQUFDO29CQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO29CQUMxQyxPQUFPLEVBQUUsSUFBSTtvQkFDYixTQUFTLEVBQUUsSUFBSTtpQkFDaEIsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsQ0FBQyxFQUFFLENBQUM7YUFDTDtTQUNGOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXBFTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRmpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0F1RXhDO0lBQUQsMkJBQUM7Q0F2RUQsQUF1RUMsQ0F2RWlELHNCQUFZLEdBdUU3RDtrQkF2RW9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHRyYWN0VHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9FeHRyYWN0VHJhaXQnO1xuaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBUcmFpdEV2ZW50UG9zaXRpb25UeXBlLCBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyRml4ZWRMZXZlbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMkZpeGVkTGV2ZWxUcmFpdCBleHRlbmRzIEV4dHJhY3RUcmFpdCB7XG4gIF9sZXZlbHMgPSBbXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUaWxlMkZpeGVkTGV2ZWxcIjtcbiAgaXNTdXBwb3J0TW9kZShlKSB7XG4gICAgcmV0dXJuIGUgPT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHZhciB0O1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gbnVsbCAhPT0gKHQgPSB0aGlzLl90cmFpdERhdGEucHJpb3JpdHkpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiAxMDA7XG4gICAgdGhpcy5fbGV2ZWxzID0gdGhpcy5fdHJhaXREYXRhLmxldmVscyB8fCBbXTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgIGV2ZW50OiBcIkV4dHJhY3RUb29sX2lzRml4ZWRMZXZlbFwiLFxuICAgICAgcHJpb3JpdHk6IDAsXG4gICAgICB0eXBlOiBUcmFpdEV2ZW50UG9zaXRpb25UeXBlLmJlZm9yXG4gICAgfV0pO1xuICB9XG4gIG9uVDJGaXhTdHJfcHJpb3JpdHkoZSwgdCkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0aGlzLl9wcmlvcml0eVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25UMkZpeFN0cl9pc0ZpeGVkKGUsIHQpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciByID0gZS5hcmdzWzBdO1xuICAgICAgaWYgKHRoaXMuX2xldmVsc1tyIC0gMV0pIHtcbiAgICAgICAgdCh7XG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB0KCk7XG4gIH1cbiAgb25UMkZpeFN0cl9nZXRGaXhlZChlLCB0KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgciA9IGUuYXJnc1swXSxcbiAgICAgICAgaSA9IHRoaXMuX2xldmVsc1tyIC0gMV07XG4gICAgICBpZiAoaSkge1xuICAgICAgICB0KHtcbiAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICByZXR1cm5WYWw6IGlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkV4dHJhY3RUb29sX2lzRml4ZWRMZXZlbChlLCB0KSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgciA9IGUuYXJnc1swXTtcbiAgICAgIGlmICh0aGlzLl9sZXZlbHNbciAtIDFdKSB7XG4gICAgICAgIHQoe1xuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblZhbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19