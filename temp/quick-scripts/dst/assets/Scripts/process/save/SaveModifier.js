
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/save/SaveModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7acd60NS1JDkLTHyWVv9Fw5', 'SaveModifier');
// Scripts/process/save/SaveModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var LevelGenRule_1 = require("../../core/simulator/config/LevelGenRule");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var SaveModifier = /** @class */ (function (_super) {
    __extends(SaveModifier, _super);
    function SaveModifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SaveModifier.prototype.saveLevelDataToLocalStorage = function () {
        var e = this.getAllCardPosData(), t = LevelGenRule_1.default.serializeTilesToInlineString(e);
        this._context.getGameData().saveLevelData(t);
        this._context.gameType === GameTypeEnums_1.MjGameType.Classic && this.saveTileBatchInfos();
    };
    SaveModifier.prototype.saveTileBatchInfos = function () {
        var e = this._context.getTileMapObject(), t = [];
        e.tileObjectMap().forEach(function (e) {
            if (e.isValid) {
                var o = e.pos;
                t.push({
                    key: o.x + "-" + o.y + "-" + o.z,
                    batchId: e.batchId
                });
            }
        });
        this._context.getGameData().saveTileBatchInfos(t);
    };
    SaveModifier.prototype.saveOriWithSpecialCards = function () {
        var e = this.getAllCardPosData(), t = LevelGenRule_1.default.serializeTilesToInlineString(e);
        this._context.getGameData().saveOriWithSpecialCards(t);
    };
    SaveModifier.prototype.getAllCardPosData = function () {
        var e = this._context.getTileMapObject(), t = [];
        e.tileObjectMap().forEach(function (e) {
            var o = e.pos;
            t.push({
                id: e.resId,
                pos: {
                    x: o.x,
                    y: o.y,
                    z: o.z
                },
                isAlive: e.isValid
            });
        });
        t.sort(function (e, t) {
            return e.pos.z !== t.pos.z ? e.pos.z - t.pos.z : e.pos.y !== t.pos.y ? e.pos.y - t.pos.y : e.pos.x - t.pos.x;
        });
        return t;
    };
    return SaveModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.SaveModifier = SaveModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3Mvc2F2ZS9TYXZlTW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQseUVBQW9FO0FBQ3BFLDZFQUF5RTtBQUN6RTtJQUFrQyxnQ0FBYztJQUFoRDs7SUErQ0EsQ0FBQztJQTdDQyxrREFBMkIsR0FBM0I7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFDOUIsQ0FBQyxHQUFHLHNCQUFZLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssMEJBQVUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDN0UsQ0FBQztJQUNELHlDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFDdEMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ25DLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtnQkFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUNkLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ0wsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87aUJBQ25CLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCw4Q0FBdUIsR0FBdkI7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFDOUIsQ0FBQyxHQUFHLHNCQUFZLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0Qsd0NBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN0QyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNkLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ0wsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLO2dCQUNYLEdBQUcsRUFBRTtvQkFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNOLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDUDtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87YUFDbkIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDbkIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0csQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDSCxtQkFBQztBQUFELENBL0NBLEFBK0NDLENBL0NpQywrQkFBYyxHQStDL0M7QUEvQ1ksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlQ29yZU9iamVjdCB9IGZyb20gJy4uLy4uL0Jhc2VDb3JlT2JqZWN0JztcbmltcG9ydCBMZXZlbEdlblJ1bGUgZnJvbSAnLi4vLi4vY29yZS9zaW11bGF0b3IvY29uZmlnL0xldmVsR2VuUnVsZSc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5leHBvcnQgY2xhc3MgU2F2ZU1vZGlmaWVyIGV4dGVuZHMgQmFzZUNvcmVPYmplY3Qge1xuXG4gIHNhdmVMZXZlbERhdGFUb0xvY2FsU3RvcmFnZSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0QWxsQ2FyZFBvc0RhdGEoKSxcbiAgICAgIHQgPSBMZXZlbEdlblJ1bGUuc2VyaWFsaXplVGlsZXNUb0lubGluZVN0cmluZyhlKTtcbiAgICB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuc2F2ZUxldmVsRGF0YSh0KTtcbiAgICB0aGlzLl9jb250ZXh0LmdhbWVUeXBlID09PSBNakdhbWVUeXBlLkNsYXNzaWMgJiYgdGhpcy5zYXZlVGlsZUJhdGNoSW5mb3MoKTtcbiAgfVxuICBzYXZlVGlsZUJhdGNoSW5mb3MoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIHQgPSBbXTtcbiAgICBlLnRpbGVPYmplY3RNYXAoKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5pc1ZhbGlkKSB7XG4gICAgICAgIHZhciBvID0gZS5wb3M7XG4gICAgICAgIHQucHVzaCh7XG4gICAgICAgICAga2V5OiBvLnggKyBcIi1cIiArIG8ueSArIFwiLVwiICsgby56LFxuICAgICAgICAgIGJhdGNoSWQ6IGUuYmF0Y2hJZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkuc2F2ZVRpbGVCYXRjaEluZm9zKHQpO1xuICB9XG4gIHNhdmVPcmlXaXRoU3BlY2lhbENhcmRzKCkge1xuICAgIHZhciBlID0gdGhpcy5nZXRBbGxDYXJkUG9zRGF0YSgpLFxuICAgICAgdCA9IExldmVsR2VuUnVsZS5zZXJpYWxpemVUaWxlc1RvSW5saW5lU3RyaW5nKGUpO1xuICAgIHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5zYXZlT3JpV2l0aFNwZWNpYWxDYXJkcyh0KTtcbiAgfVxuICBnZXRBbGxDYXJkUG9zRGF0YSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuX2NvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLFxuICAgICAgdCA9IFtdO1xuICAgIGUudGlsZU9iamVjdE1hcCgpLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvID0gZS5wb3M7XG4gICAgICB0LnB1c2goe1xuICAgICAgICBpZDogZS5yZXNJZCxcbiAgICAgICAgcG9zOiB7XG4gICAgICAgICAgeDogby54LFxuICAgICAgICAgIHk6IG8ueSxcbiAgICAgICAgICB6OiBvLnpcbiAgICAgICAgfSxcbiAgICAgICAgaXNBbGl2ZTogZS5pc1ZhbGlkXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0LnNvcnQoZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBlLnBvcy56ICE9PSB0LnBvcy56ID8gZS5wb3MueiAtIHQucG9zLnogOiBlLnBvcy55ICE9PSB0LnBvcy55ID8gZS5wb3MueSAtIHQucG9zLnkgOiBlLnBvcy54IC0gdC5wb3MueDtcbiAgICB9KTtcbiAgICByZXR1cm4gdDtcbiAgfVxufSJdfQ==