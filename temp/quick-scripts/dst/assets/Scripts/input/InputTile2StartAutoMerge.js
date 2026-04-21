
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTile2StartAutoMerge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3a87VYcAxKG5j4V2+1EGqW', 'InputTile2StartAutoMerge');
// Scripts/input/InputTile2StartAutoMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var Tile2StartAutoMergeEffect_1 = require("../Tile2StartAutoMergeEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTile2StartAutoMerge = /** @class */ (function (_super) {
    __extends(InputTile2StartAutoMerge, _super);
    function InputTile2StartAutoMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2StartAutoMerge.prototype.excute = function (e) {
        this.gameContext.getTileMapObject().updateCanMatchTiles();
        this.gameContext.getTileMapObject().unselectAllTileIds();
        var t = new Tile2StartAutoMergeEffect_1.Tile2StartAutoMergeEffect({
            type: e.type
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    return InputTile2StartAutoMerge;
}(InputBase_1.InputBase));
exports.default = InputTile2StartAutoMerge;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VGlsZTJTdGFydEF1dG9NZXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXdEO0FBQ3hELDBFQUF5RTtBQUN6RSxvREFBbUQ7QUFDbkQ7SUFBc0QsNENBQVM7SUFBL0Q7O0lBU0EsQ0FBQztJQVJDLHlDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLEdBQUcsSUFBSSxxREFBeUIsQ0FBQztZQUNwQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUk7U0FDYixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCwrQkFBQztBQUFELENBVEEsQUFTQyxDQVRxRCxxQkFBUyxHQVM5RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBUaWxlMlN0YXJ0QXV0b01lcmdlRWZmZWN0IH0gZnJvbSAnLi4vVGlsZTJTdGFydEF1dG9NZXJnZUVmZmVjdCc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi9pbnB1dGJhc2UvSW5wdXRCYXNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VGlsZTJTdGFydEF1dG9NZXJnZSBleHRlbmRzIElucHV0QmFzZSB7XG4gIGV4Y3V0ZShlKSB7XG4gICAgdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkudXBkYXRlQ2FuTWF0Y2hUaWxlcygpO1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLnVuc2VsZWN0QWxsVGlsZUlkcygpO1xuICAgIHZhciB0ID0gbmV3IFRpbGUyU3RhcnRBdXRvTWVyZ2VFZmZlY3Qoe1xuICAgICAgdHlwZTogZS50eXBlXG4gICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG59Il19