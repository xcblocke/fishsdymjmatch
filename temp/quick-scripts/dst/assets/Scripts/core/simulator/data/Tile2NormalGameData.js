
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/data/Tile2NormalGameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '494f0ioKFhJC6Jgbr6w0+FY', 'Tile2NormalGameData');
// Scripts/core/simulator/data/Tile2NormalGameData.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var Tile2GameData_1 = require("./Tile2GameData");
var Tile2NormalGameData = /** @class */ (function (_super) {
    __extends(Tile2NormalGameData, _super);
    function Tile2NormalGameData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Tile2Normal;
        return _this;
    }
    Tile2NormalGameData = __decorate([
        mj.class("Tile2NormalGameData")
    ], Tile2NormalGameData);
    return Tile2NormalGameData;
}(Tile2GameData_1.default));
exports.default = Tile2NormalGameData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2RhdGEvVGlsZTJOb3JtYWxHYW1lRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXVEO0FBQ3ZELGlEQUE0QztBQUU1QztJQUFpRCx1Q0FBYTtJQUE5RDtRQUFBLHFFQUVDO1FBREMsZUFBUyxHQUFHLDBCQUFVLENBQUMsV0FBVyxDQUFDOztJQUNyQyxDQUFDO0lBRm9CLG1CQUFtQjtRQUR2QyxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDO09BQ1gsbUJBQW1CLENBRXZDO0lBQUQsMEJBQUM7Q0FGRCxBQUVDLENBRmdELHVCQUFhLEdBRTdEO2tCQUZvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVGlsZTJHYW1lRGF0YSBmcm9tICcuL1RpbGUyR2FtZURhdGEnO1xuQG1qLmNsYXNzKFwiVGlsZTJOb3JtYWxHYW1lRGF0YVwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZTJOb3JtYWxHYW1lRGF0YSBleHRlbmRzIFRpbGUyR2FtZURhdGEge1xuICBfZ2FtZVR5cGUgPSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsO1xufSJdfQ==