
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/clear/ClearModifier.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb3dcGSlRBKqaWJVH2cw2zn', 'ClearModifier');
// Scripts/process/clear/ClearModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var CollectInterfact_1 = require("../../constant/CollectInterfact");
var GameInputEnum_1 = require("../../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var ClearModifier = /** @class */ (function (_super) {
    __extends(ClearModifier, _super);
    function ClearModifier(t) {
        return _super.call(this, t) || this;
    }
    ClearModifier.prototype.fixMergeType = function (e, t) {
        if (t === void 0) { t = GameTypeEnums_1.EMergeType.Normal; }
        t === GameTypeEnums_1.EMergeType.Normal && (e.inputType === GameInputEnum_1.EGameInputEnum.AutoMerge ? t = GameTypeEnums_1.EMergeType.FullCombo : e.inputType === GameInputEnum_1.EGameInputEnum.DuoxiaoAutoMerge && (t = GameTypeEnums_1.EMergeType.Duoxiao));
        return t;
    };
    ClearModifier.prototype.modifyClear = function (e, t) {
        if (t === void 0) { t = GameTypeEnums_1.EMergeType.Normal; }
        var o = (t = this.fixMergeType(e, t)) !== GameTypeEnums_1.EMergeType.Normal;
        this._context.trackerModifier.triggerClear(e, t, o);
        var n = this._context.getTileMapObject().clear(o);
        this._context.getGameData().addAutoCollectTilesNum(t === GameTypeEnums_1.EMergeType.FullCombo ? n.length : 0);
        this._context.getGameData().addStepCount(1);
        this.modifyManualMatchCount(e);
        this._context.saveModifier.saveLevelDataToLocalStorage();
        return n;
    };
    ClearModifier.prototype.modifyTileTypesClear = function () {
        var e = {}, t = this.collectYogaCardIds();
        e.yogaCardIds = t;
        this._context.saveModifier.saveLevelDataToLocalStorage();
        return e;
    };
    ClearModifier.prototype.collectYogaCardIds = function () {
        var e = this._context.getTileMapObject(), t = [];
        e.tileObjectMap().forEach(function (o, n) {
            if (o.isValid && o.resId === GameTypeEnums_1.ResId.emYogaCardId && !e.isCardLock(o)) {
                t.push(n);
                e.clearTile(n, CollectInterfact_1.ECollectFrom.FromYoga);
            }
        });
        return t;
    };
    ClearModifier.prototype.modifyManualMatchCount = function (e) {
        if ([GameInputEnum_1.EGameInputEnum.TouchStart, GameInputEnum_1.EGameInputEnum.TouchEnd].includes(e.inputType)) {
            this._context.getGameData().updateNonAutoStepCount();
            this._context.getGameData().updateClearTimeInterval();
        }
    };
    ClearModifier.prototype.modifyAutoCollectTilesNum = function (e, t) {
        e.inputType === GameInputEnum_1.EGameInputEnum.Tile2AutoMerge && this._context.getGameData().addAutoCollectTilesNum(t);
    };
    return ClearModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.ClearModifier = ClearModifier;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvY2xlYXIvQ2xlYXJNb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFzRDtBQUN0RCxvRUFBK0Q7QUFDL0Qsd0VBQXdFO0FBQ3hFLDZFQUFnRjtBQUNoRjtJQUFtQyxpQ0FBYztJQUMvQyx1QkFBWSxDQUFDO2VBQ1gsa0JBQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELG9DQUFZLEdBQVosVUFBYSxDQUFDLEVBQUUsQ0FBcUI7UUFBckIsa0JBQUEsRUFBQSxJQUFJLDBCQUFVLENBQUMsTUFBTTtRQUNuQyxDQUFDLEtBQUssMEJBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLDhCQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsMEJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssOEJBQWMsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLENBQUMsR0FBRywwQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0ssT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsbUNBQVcsR0FBWCxVQUFZLENBQUMsRUFBRSxDQUFxQjtRQUFyQixrQkFBQSxFQUFBLElBQUksMEJBQVUsQ0FBQyxNQUFNO1FBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssMEJBQVUsQ0FBQyxNQUFNLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUMsS0FBSywwQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDJCQUEyQixFQUFFLENBQUM7UUFDekQsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsNENBQW9CLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUNSLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNELDBDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsRUFDdEMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxxQkFBSyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsK0JBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBQ0QsOENBQXNCLEdBQXRCLFVBQXVCLENBQUM7UUFDdEIsSUFBSSxDQUFDLDhCQUFjLENBQUMsVUFBVSxFQUFFLDhCQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztJQUNELGlEQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsU0FBUyxLQUFLLDhCQUFjLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekcsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsQ0E3Q2tDLCtCQUFjLEdBNkNoRDtBQTdDWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuaW1wb3J0IHsgRUNvbGxlY3RGcm9tIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQvQ29sbGVjdEludGVyZmFjdCc7XG5pbXBvcnQgeyBFR2FtZUlucHV0RW51bSB9IGZyb20gJy4uLy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEVNZXJnZVR5cGUsIFJlc0lkIH0gZnJvbSAnLi4vLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5leHBvcnQgY2xhc3MgQ2xlYXJNb2RpZmllciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIGZpeE1lcmdlVHlwZShlLCB0ID0gRU1lcmdlVHlwZS5Ob3JtYWwpIHtcbiAgICB0ID09PSBFTWVyZ2VUeXBlLk5vcm1hbCAmJiAoZS5pbnB1dFR5cGUgPT09IEVHYW1lSW5wdXRFbnVtLkF1dG9NZXJnZSA/IHQgPSBFTWVyZ2VUeXBlLkZ1bGxDb21ibyA6IGUuaW5wdXRUeXBlID09PSBFR2FtZUlucHV0RW51bS5EdW94aWFvQXV0b01lcmdlICYmICh0ID0gRU1lcmdlVHlwZS5EdW94aWFvKSk7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgbW9kaWZ5Q2xlYXIoZSwgdCA9IEVNZXJnZVR5cGUuTm9ybWFsKSB7XG4gICAgdmFyIG8gPSAodCA9IHRoaXMuZml4TWVyZ2VUeXBlKGUsIHQpKSAhPT0gRU1lcmdlVHlwZS5Ob3JtYWw7XG4gICAgdGhpcy5fY29udGV4dC50cmFja2VyTW9kaWZpZXIudHJpZ2dlckNsZWFyKGUsIHQsIG8pO1xuICAgIHZhciBuID0gdGhpcy5fY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuY2xlYXIobyk7XG4gICAgdGhpcy5fY29udGV4dC5nZXRHYW1lRGF0YSgpLmFkZEF1dG9Db2xsZWN0VGlsZXNOdW0odCA9PT0gRU1lcmdlVHlwZS5GdWxsQ29tYm8gPyBuLmxlbmd0aCA6IDApO1xuICAgIHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5hZGRTdGVwQ291bnQoMSk7XG4gICAgdGhpcy5tb2RpZnlNYW51YWxNYXRjaENvdW50KGUpO1xuICAgIHRoaXMuX2NvbnRleHQuc2F2ZU1vZGlmaWVyLnNhdmVMZXZlbERhdGFUb0xvY2FsU3RvcmFnZSgpO1xuICAgIHJldHVybiBuO1xuICB9XG4gIG1vZGlmeVRpbGVUeXBlc0NsZWFyKCkge1xuICAgIHZhciBlID0ge30sXG4gICAgICB0ID0gdGhpcy5jb2xsZWN0WW9nYUNhcmRJZHMoKTtcbiAgICBlLnlvZ2FDYXJkSWRzID0gdDtcbiAgICB0aGlzLl9jb250ZXh0LnNhdmVNb2RpZmllci5zYXZlTGV2ZWxEYXRhVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBjb2xsZWN0WW9nYUNhcmRJZHMoKSB7XG4gICAgdmFyIGUgPSB0aGlzLl9jb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKSxcbiAgICAgIHQgPSBbXTtcbiAgICBlLnRpbGVPYmplY3RNYXAoKS5mb3JFYWNoKGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgICBpZiAoby5pc1ZhbGlkICYmIG8ucmVzSWQgPT09IFJlc0lkLmVtWW9nYUNhcmRJZCAmJiAhZS5pc0NhcmRMb2NrKG8pKSB7XG4gICAgICAgIHQucHVzaChuKTtcbiAgICAgICAgZS5jbGVhclRpbGUobiwgRUNvbGxlY3RGcm9tLkZyb21Zb2dhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdDtcbiAgfVxuICBtb2RpZnlNYW51YWxNYXRjaENvdW50KGUpIHtcbiAgICBpZiAoW0VHYW1lSW5wdXRFbnVtLlRvdWNoU3RhcnQsIEVHYW1lSW5wdXRFbnVtLlRvdWNoRW5kXS5pbmNsdWRlcyhlLmlucHV0VHlwZSkpIHtcbiAgICAgIHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS51cGRhdGVOb25BdXRvU3RlcENvdW50KCk7XG4gICAgICB0aGlzLl9jb250ZXh0LmdldEdhbWVEYXRhKCkudXBkYXRlQ2xlYXJUaW1lSW50ZXJ2YWwoKTtcbiAgICB9XG4gIH1cbiAgbW9kaWZ5QXV0b0NvbGxlY3RUaWxlc051bShlLCB0KSB7XG4gICAgZS5pbnB1dFR5cGUgPT09IEVHYW1lSW5wdXRFbnVtLlRpbGUyQXV0b01lcmdlICYmIHRoaXMuX2NvbnRleHQuZ2V0R2FtZURhdGEoKS5hZGRBdXRvQ29sbGVjdFRpbGVzTnVtKHQpO1xuICB9XG59Il19