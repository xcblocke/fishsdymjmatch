
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2DaxiaoCardComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a6e08/fMjlD7KUOqG+yFv9v', 'Tile2DaxiaoCardComponent');
// Scripts/Tile2DaxiaoCardComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DaxiaoCardComponent = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseTileNode_1 = require("./BaseTileNode");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2DaxiaoCardComponent = /** @class */ (function (_super) {
    __extends(Tile2DaxiaoCardComponent, _super);
    function Tile2DaxiaoCardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2DaxiaoCardComponent.prototype.onRefreshNode = function () {
        this._flagNode || (this._flagNode = this._createFlag());
        this._updateFlag();
    };
    Tile2DaxiaoCardComponent.prototype.onUnbind = function () {
        this._flagNode && cc.isValid(this._flagNode) && this._flagNode.destroy();
        this._flagNode = null;
    };
    Tile2DaxiaoCardComponent.prototype._createFlag = function () {
        var e = this._host.tileNode, t = e.getChildByName("DaxiaoCardFlagNode");
        if (t)
            return t;
        var o = new cc.Node("DaxiaoCardFlagNode");
        e.addChild(o);
        o.scale = 1 * this._host.info.tileObject.layoutScale;
        o.zIndex = BaseTileNode_1.TileNodeZIndexMap[BaseTileNode_1.ETileNodeNames.imgCard] + 1;
        return o;
    };
    Tile2DaxiaoCardComponent.prototype._updateFlag = function () {
        this._flagNode && BaseSpine_1.default.refreshWithNode(this._flagNode, "spine/daxiao/idle/gameplay_hintGreat", "mainRes").setAnimation("init", -1, null, false);
    };
    return Tile2DaxiaoCardComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2DaxiaoCardComponent = Tile2DaxiaoCardComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUyRGF4aWFvQ2FyZENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUNyRCwrQ0FBbUU7QUFDbkUseURBQXdEO0FBQ3hEO0lBQThDLDRDQUFpQjtJQUEvRDs7SUFzQkEsQ0FBQztJQXJCQyxnREFBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCwyQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFDRCw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQ3pCLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7UUFDckQsQ0FBQyxDQUFDLE1BQU0sR0FBRyxnQ0FBaUIsQ0FBQyw2QkFBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsSUFBSSxtQkFBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLHNDQUFzQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZKLENBQUM7SUFDSCwrQkFBQztBQUFELENBdEJBLEFBc0JDLENBdEI2QyxxQ0FBaUIsR0FzQjlEO0FBdEJZLDREQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgeyBUaWxlTm9kZVpJbmRleE1hcCwgRVRpbGVOb2RlTmFtZXMgfSBmcm9tICcuL0Jhc2VUaWxlTm9kZSc7XG5pbXBvcnQgeyBUaWxlTm9kZUNvbXBvbmVudCB9IGZyb20gJy4vVGlsZU5vZGVDb21wb25lbnQnO1xuZXhwb3J0IGNsYXNzIFRpbGUyRGF4aWFvQ2FyZENvbXBvbmVudCBleHRlbmRzIFRpbGVOb2RlQ29tcG9uZW50IHtcbiAgb25SZWZyZXNoTm9kZSgpIHtcbiAgICB0aGlzLl9mbGFnTm9kZSB8fCAodGhpcy5fZmxhZ05vZGUgPSB0aGlzLl9jcmVhdGVGbGFnKCkpO1xuICAgIHRoaXMuX3VwZGF0ZUZsYWcoKTtcbiAgfVxuICBvblVuYmluZCgpIHtcbiAgICB0aGlzLl9mbGFnTm9kZSAmJiBjYy5pc1ZhbGlkKHRoaXMuX2ZsYWdOb2RlKSAmJiB0aGlzLl9mbGFnTm9kZS5kZXN0cm95KCk7XG4gICAgdGhpcy5fZmxhZ05vZGUgPSBudWxsO1xuICB9XG4gIF9jcmVhdGVGbGFnKCkge1xuICAgIHZhciBlID0gdGhpcy5faG9zdC50aWxlTm9kZSxcbiAgICAgIHQgPSBlLmdldENoaWxkQnlOYW1lKFwiRGF4aWFvQ2FyZEZsYWdOb2RlXCIpO1xuICAgIGlmICh0KSByZXR1cm4gdDtcbiAgICB2YXIgbyA9IG5ldyBjYy5Ob2RlKFwiRGF4aWFvQ2FyZEZsYWdOb2RlXCIpO1xuICAgIGUuYWRkQ2hpbGQobyk7XG4gICAgby5zY2FsZSA9IDEgKiB0aGlzLl9ob3N0LmluZm8udGlsZU9iamVjdC5sYXlvdXRTY2FsZTtcbiAgICBvLnpJbmRleCA9IFRpbGVOb2RlWkluZGV4TWFwW0VUaWxlTm9kZU5hbWVzLmltZ0NhcmRdICsgMTtcbiAgICByZXR1cm4gbztcbiAgfVxuICBfdXBkYXRlRmxhZygpIHtcbiAgICB0aGlzLl9mbGFnTm9kZSAmJiBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2ZsYWdOb2RlLCBcInNwaW5lL2RheGlhby9pZGxlL2dhbWVwbGF5X2hpbnRHcmVhdFwiLCBcIm1haW5SZXNcIikuc2V0QW5pbWF0aW9uKFwiaW5pdFwiLCAtMSwgbnVsbCwgZmFsc2UpO1xuICB9XG59Il19