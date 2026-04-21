
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2TouchCancel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80261F8L3dLP5EjASZyHeNU', 'InputTile2TouchCancel');
// Scripts/input/InputTile2TouchCancel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var Tile2ResetMoveEffect_1 = require("../Tile2ResetMoveEffect");
var InputTile2BaseTouchCancel_1 = require("../inputbase/InputTile2BaseTouchCancel");
var InputTile2TouchCancel = /** @class */ (function (_super) {
    __extends(InputTile2TouchCancel, _super);
    function InputTile2TouchCancel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2TouchCancel.prototype.excute = function (t) {
        _super.prototype.excute.call(this, t);
    };
    InputTile2TouchCancel.prototype.runResetMove = function () {
        _super.prototype.runResetMove.call(this);
        var t = this.gameContext.tile2TouchData.tileId;
        if (this.gameContext.getTileMapObject().getTileObject(t)) {
            var o = new Tile2ResetMoveEffect_1.Tile2ResetMoveEffect({
                tileId: t
            });
            this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
        }
    };
    return InputTile2TouchCancel;
}(InputTile2BaseTouchCancel_1.default));
exports.default = InputTile2TouchCancel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJUb3VjaENhbmNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXdEO0FBQ3hELGdFQUErRDtBQUMvRCxvRkFBK0U7QUFDL0U7SUFBbUQseUNBQXlCO0lBQTVFOztJQWNBLENBQUM7SUFiQyxzQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCw0Q0FBWSxHQUFaO1FBQ0UsaUJBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDL0MsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQyxHQUFHLElBQUksMkNBQW9CLENBQUM7Z0JBQy9CLE1BQU0sRUFBRSxDQUFDO2FBQ1YsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFDSCw0QkFBQztBQUFELENBZEEsQUFjQyxDQWRrRCxtQ0FBeUIsR0FjM0UiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgVGlsZTJSZXNldE1vdmVFZmZlY3QgfSBmcm9tICcuLi9UaWxlMlJlc2V0TW92ZUVmZmVjdCc7XG5pbXBvcnQgSW5wdXRUaWxlMkJhc2VUb3VjaENhbmNlbCBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRUaWxlMkJhc2VUb3VjaENhbmNlbCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFRpbGUyVG91Y2hDYW5jZWwgZXh0ZW5kcyBJbnB1dFRpbGUyQmFzZVRvdWNoQ2FuY2VsIHtcbiAgZXhjdXRlKHQpIHtcbiAgICBzdXBlci5leGN1dGUuY2FsbCh0aGlzLCB0KTtcbiAgfVxuICBydW5SZXNldE1vdmUoKSB7XG4gICAgc3VwZXIucnVuUmVzZXRNb3ZlLmNhbGwodGhpcyk7XG4gICAgdmFyIHQgPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyVG91Y2hEYXRhLnRpbGVJZDtcbiAgICBpZiAodGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuZ2V0VGlsZU9iamVjdCh0KSkge1xuICAgICAgdmFyIG8gPSBuZXcgVGlsZTJSZXNldE1vdmVFZmZlY3Qoe1xuICAgICAgICB0aWxlSWQ6IHRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wdXNoRWZmZWN0KG8sIEVJbnNlcnRUeXBlLlJvb3QpO1xuICAgIH1cbiAgfVxufSJdfQ==