
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/process/allClear/AllClearChecker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b2edFRzn1IsZpuZ+6MVH+h', 'AllClearChecker');
// Scripts/process/allClear/AllClearChecker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AllClearChecker = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var AllClearChecker = /** @class */ (function (_super) {
    __extends(AllClearChecker, _super);
    function AllClearChecker(t) {
        return _super.call(this, t) || this;
    }
    AllClearChecker.prototype.getMinTiles = function () {
        return 4;
    };
    AllClearChecker.prototype.getMaxTiles = function () {
        return 10;
    };
    AllClearChecker.prototype.getTriggerRate = function () {
        return 0.5;
    };
    AllClearChecker.prototype.getTotalTileCount = function () {
        return this.context.getTileMapObject().getCurTilesCnt();
    };
    AllClearChecker.prototype.canTrigger = function () {
        if (this.context.getGameData().getHasBrokenCombo())
            return false;
        var e = this.getTotalTileCount(), t = this.getMinTiles(), o = this.getMaxTiles();
        if (e < t || e > o)
            return false;
        var n = this.getTriggerRate();
        return Math.random() < n;
    };
    AllClearChecker.prototype.checkInAllClear = function () {
        var e, t = this.context.getGameData();
        if (null === (e = null == t ? void 0 : t.getHasTriggeredAllClear) || void 0 === e ? void 0 : e.call(t))
            return {
                allClear: false,
                effectId: 0,
                ids: []
            };
        var o = this.checkAllClear();
        o.effectId;
        if (!o.isShow)
            return {
                allClear: o.isShow,
                effectId: o.effectId,
                ids: []
            };
        var n = this.context.getTileMapObject().aliveTiles().map(function (e) {
            return e.id;
        });
        return {
            allClear: o.isShow,
            effectId: o.effectId,
            ids: n
        };
    };
    AllClearChecker.prototype.checkAllClear = function () {
        return {
            isShow: false,
            effectId: 0
        };
    };
    __decorate([
        mj.traitEvent("AllClrChk_minTiles")
    ], AllClearChecker.prototype, "getMinTiles", null);
    __decorate([
        mj.traitEvent("AllClrChk_maxTiles")
    ], AllClearChecker.prototype, "getMaxTiles", null);
    __decorate([
        mj.traitEvent("AllClrChk_triRate")
    ], AllClearChecker.prototype, "getTriggerRate", null);
    __decorate([
        mj.traitEvent("AllClrChk_canTrig")
    ], AllClearChecker.prototype, "canTrigger", null);
    __decorate([
        mj.traitEvent("AllClrChk_allClr")
    ], AllClearChecker.prototype, "checkAllClear", null);
    return AllClearChecker;
}(BaseCoreObject_1.BaseCoreObject));
exports.AllClearChecker = AllClearChecker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3Byb2Nlc3MvYWxsQ2xlYXIvQWxsQ2xlYXJDaGVja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3REO0lBQXFDLG1DQUFjO0lBQ2pELHlCQUFZLENBQUM7ZUFDWCxrQkFBTSxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNFLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBQ0UsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0QsMkNBQWlCLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsaUJBQWlCLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNqRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFDOUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFDdEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCx5Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQUUsT0FBTztnQkFDN0csUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLEVBQUU7YUFDUixDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU07WUFBRSxPQUFPO2dCQUNwQixRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU07Z0JBQ2xCLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtnQkFDcEIsR0FBRyxFQUFFLEVBQUU7YUFDUixDQUFDO1FBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7WUFDbEUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPO1lBQ0wsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNO1lBQ2xCLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtZQUNwQixHQUFHLEVBQUUsQ0FBQztTQUNQLENBQUM7SUFDSixDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUNFLE9BQU87WUFDTCxNQUFNLEVBQUUsS0FBSztZQUNiLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztJQUNKLENBQUM7SUF0REQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO3NEQUduQztJQUVEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztzREFHbkM7SUFFRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUM7eURBR2xDO0lBS0Q7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDO3FEQVNsQztJQTBCRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7d0RBTWpDO0lBQ0gsc0JBQUM7Q0E1REQsQUE0REMsQ0E1RG9DLCtCQUFjLEdBNERsRDtBQTVEWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VDb3JlT2JqZWN0IH0gZnJvbSAnLi4vLi4vQmFzZUNvcmVPYmplY3QnO1xuZXhwb3J0IGNsYXNzIEFsbENsZWFyQ2hlY2tlciBleHRlbmRzIEJhc2VDb3JlT2JqZWN0IHtcbiAgY29uc3RydWN0b3IodCkge1xuICAgIHN1cGVyKHQpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQWxsQ2xyQ2hrX21pblRpbGVzXCIpXG4gIGdldE1pblRpbGVzKCkge1xuICAgIHJldHVybiA0O1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiQWxsQ2xyQ2hrX21heFRpbGVzXCIpXG4gIGdldE1heFRpbGVzKCkge1xuICAgIHJldHVybiAxMDtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkFsbENsckNoa190cmlSYXRlXCIpXG4gIGdldFRyaWdnZXJSYXRlKCkge1xuICAgIHJldHVybiAwLjU7XG4gIH1cbiAgZ2V0VG90YWxUaWxlQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0Q3VyVGlsZXNDbnQoKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkFsbENsckNoa19jYW5UcmlnXCIpXG4gIGNhblRyaWdnZXIoKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dC5nZXRHYW1lRGF0YSgpLmdldEhhc0Jyb2tlbkNvbWJvKCkpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0VG90YWxUaWxlQ291bnQoKSxcbiAgICAgIHQgPSB0aGlzLmdldE1pblRpbGVzKCksXG4gICAgICBvID0gdGhpcy5nZXRNYXhUaWxlcygpO1xuICAgIGlmIChlIDwgdCB8fCBlID4gbykgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBuID0gdGhpcy5nZXRUcmlnZ2VyUmF0ZSgpO1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgbjtcbiAgfVxuICBjaGVja0luQWxsQ2xlYXIoKSB7XG4gICAgdmFyIGUsXG4gICAgICB0ID0gdGhpcy5jb250ZXh0LmdldEdhbWVEYXRhKCk7XG4gICAgaWYgKG51bGwgPT09IChlID0gbnVsbCA9PSB0ID8gdm9pZCAwIDogdC5nZXRIYXNUcmlnZ2VyZWRBbGxDbGVhcikgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jYWxsKHQpKSByZXR1cm4ge1xuICAgICAgYWxsQ2xlYXI6IGZhbHNlLFxuICAgICAgZWZmZWN0SWQ6IDAsXG4gICAgICBpZHM6IFtdXG4gICAgfTtcbiAgICB2YXIgbyA9IHRoaXMuY2hlY2tBbGxDbGVhcigpO1xuICAgIG8uZWZmZWN0SWQ7XG4gICAgaWYgKCFvLmlzU2hvdykgcmV0dXJuIHtcbiAgICAgIGFsbENsZWFyOiBvLmlzU2hvdyxcbiAgICAgIGVmZmVjdElkOiBvLmVmZmVjdElkLFxuICAgICAgaWRzOiBbXVxuICAgIH07XG4gICAgdmFyIG4gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmFsaXZlVGlsZXMoKS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLmlkO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBhbGxDbGVhcjogby5pc1Nob3csXG4gICAgICBlZmZlY3RJZDogby5lZmZlY3RJZCxcbiAgICAgIGlkczogblxuICAgIH07XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJBbGxDbHJDaGtfYWxsQ2xyXCIpXG4gIGNoZWNrQWxsQ2xlYXIoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzU2hvdzogZmFsc2UsXG4gICAgICBlZmZlY3RJZDogMFxuICAgIH07XG4gIH1cbn0iXX0=