
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/items/Tile2ScreenEdgeEffectItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3422Y+CWVMR7BkikxuzR2h', 'Tile2ScreenEdgeEffectItem');
// Scripts/items/Tile2ScreenEdgeEffectItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var BaseUI_1 = require("../framework/ui/BaseUI");
var Tile2ScreenEdgeEffectItem = /** @class */ (function (_super) {
    __extends(Tile2ScreenEdgeEffectItem, _super);
    function Tile2ScreenEdgeEffectItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._spinLeft = null;
        _this._spinRight = null;
        return _this;
    }
    Tile2ScreenEdgeEffectItem_1 = Tile2ScreenEdgeEffectItem;
    Tile2ScreenEdgeEffectItem.getPrefabPath = function () {
        return "prefabs/effects/Tile2EffectScreenEdge";
    };
    Tile2ScreenEdgeEffectItem.create = function () {
        return this.createUI(this.getPrefabPath()).then(function (e) {
            return e.getComponent(Tile2ScreenEdgeEffectItem_1);
        });
    };
    Tile2ScreenEdgeEffectItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initSpines();
    };
    Tile2ScreenEdgeEffectItem.prototype.initSpines = function () {
        var e = this.getSpinePath(), t = cc.find("leftNode/spin", this.node), o = cc.find("rightNode/spin", this.node);
        t && (this._spinLeft = BaseSpine_1.default.refreshWithNode(t, e));
        o && (this._spinRight = BaseSpine_1.default.refreshWithNode(o, e));
    };
    Tile2ScreenEdgeEffectItem.prototype.getSpinePath = function () {
        return "spine/tile2Combo/gameplay_combo_side";
    };
    Tile2ScreenEdgeEffectItem.prototype.playAnimation = function (e) {
        var t = this.getAnimationName(), o = false, n = function n() {
            if (!o) {
                o = true;
                null == e || e();
            }
        };
        this._spinLeft && this._spinLeft.setAnimation(t, 1, n);
        this._spinRight && this._spinRight.setAnimation(t, 1, n);
        this._spinLeft || this._spinRight || null == e || e();
    };
    Tile2ScreenEdgeEffectItem.prototype.getAnimationName = function () {
        return "in";
    };
    var Tile2ScreenEdgeEffectItem_1;
    __decorate([
        mj.traitEvent("T2ScreenEEffIt_getSpPh")
    ], Tile2ScreenEdgeEffectItem.prototype, "getSpinePath", null);
    Tile2ScreenEdgeEffectItem = Tile2ScreenEdgeEffectItem_1 = __decorate([
        mj.class
    ], Tile2ScreenEdgeEffectItem);
    return Tile2ScreenEdgeEffectItem;
}(BaseUI_1.default));
exports.default = Tile2ScreenEdgeEffectItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2l0ZW1zL1RpbGUyU2NyZWVuRWRnZUVmZmVjdEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCxpREFBNEM7QUFFNUM7SUFBdUQsNkNBQU07SUFBN0Q7UUFBQSxxRUEwQ0M7UUF6Q0MsZUFBUyxHQUFHLElBQUksQ0FBQztRQUNqQixnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUF3Q3BCLENBQUM7a0NBMUNvQix5QkFBeUI7SUFHckMsdUNBQWEsR0FBcEI7UUFDRSxPQUFPLHVDQUF1QyxDQUFDO0lBQ2pELENBQUM7SUFDTSxnQ0FBTSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDekQsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLDJCQUF5QixDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsMENBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRCw4Q0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUN6QixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUN2QyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxnREFBWSxHQUFaO1FBQ0UsT0FBTyxzQ0FBc0MsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsaURBQWEsR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFDN0IsQ0FBQyxHQUFHLEtBQUssRUFDVCxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ1osSUFBSSxDQUFDLENBQUMsRUFBRTtnQkFDTixDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNULElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDbEI7UUFDSCxDQUFDLENBQUM7UUFDSixJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFDRCxvREFBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O0lBbEJEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztpRUFHdkM7SUF6QmtCLHlCQUF5QjtRQUQ3QyxFQUFFLENBQUMsS0FBSztPQUNZLHlCQUF5QixDQTBDN0M7SUFBRCxnQ0FBQztDQTFDRCxBQTBDQyxDQTFDc0QsZ0JBQU0sR0EwQzVEO2tCQTFDb0IseUJBQXlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uL2ZyYW1ld29yay91aS9CYXNlVUknO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMlNjcmVlbkVkZ2VFZmZlY3RJdGVtIGV4dGVuZHMgQmFzZVVJIHtcbiAgX3NwaW5MZWZ0ID0gbnVsbDtcbiAgX3NwaW5SaWdodCA9IG51bGw7XG4gIHN0YXRpYyBnZXRQcmVmYWJQYXRoKCkge1xuICAgIHJldHVybiBcInByZWZhYnMvZWZmZWN0cy9UaWxlMkVmZmVjdFNjcmVlbkVkZ2VcIjtcbiAgfVxuICBzdGF0aWMgY3JlYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVVJKHRoaXMuZ2V0UHJlZmFiUGF0aCgpKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5nZXRDb21wb25lbnQoVGlsZTJTY3JlZW5FZGdlRWZmZWN0SXRlbSk7XG4gICAgfSk7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaW5pdFNwaW5lcygpO1xuICB9XG4gIGluaXRTcGluZXMoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmdldFNwaW5lUGF0aCgpLFxuICAgICAgdCA9IGNjLmZpbmQoXCJsZWZ0Tm9kZS9zcGluXCIsIHRoaXMubm9kZSksXG4gICAgICBvID0gY2MuZmluZChcInJpZ2h0Tm9kZS9zcGluXCIsIHRoaXMubm9kZSk7XG4gICAgdCAmJiAodGhpcy5fc3BpbkxlZnQgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHQsIGUpKTtcbiAgICBvICYmICh0aGlzLl9zcGluUmlnaHQgPSBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKG8sIGUpKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlQyU2NyZWVuRUVmZkl0X2dldFNwUGhcIilcbiAgZ2V0U3BpbmVQYXRoKCkge1xuICAgIHJldHVybiBcInNwaW5lL3RpbGUyQ29tYm8vZ2FtZXBsYXlfY29tYm9fc2lkZVwiO1xuICB9XG4gIHBsYXlBbmltYXRpb24oZSkge1xuICAgIHZhciB0ID0gdGhpcy5nZXRBbmltYXRpb25OYW1lKCksXG4gICAgICBvID0gZmFsc2UsXG4gICAgICBuID0gZnVuY3Rpb24gbigpIHtcbiAgICAgICAgaWYgKCFvKSB7XG4gICAgICAgICAgbyA9IHRydWU7XG4gICAgICAgICAgbnVsbCA9PSBlIHx8IGUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB0aGlzLl9zcGluTGVmdCAmJiB0aGlzLl9zcGluTGVmdC5zZXRBbmltYXRpb24odCwgMSwgbik7XG4gICAgdGhpcy5fc3BpblJpZ2h0ICYmIHRoaXMuX3NwaW5SaWdodC5zZXRBbmltYXRpb24odCwgMSwgbik7XG4gICAgdGhpcy5fc3BpbkxlZnQgfHwgdGhpcy5fc3BpblJpZ2h0IHx8IG51bGwgPT0gZSB8fCBlKCk7XG4gIH1cbiAgZ2V0QW5pbWF0aW9uTmFtZSgpIHtcbiAgICByZXR1cm4gXCJpblwiO1xuICB9XG59Il19