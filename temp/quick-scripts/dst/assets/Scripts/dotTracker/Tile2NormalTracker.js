
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/dotTracker/Tile2NormalTracker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e107dBkq5Bo7l9sw8TtsyM', 'Tile2NormalTracker');
// Scripts/dotTracker/Tile2NormalTracker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2NormalTracker = void 0;
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var Tile2DotTracker_1 = require("./Tile2DotTracker");
var Tile2NormalTracker = /** @class */ (function (_super) {
    __extends(Tile2NormalTracker, _super);
    function Tile2NormalTracker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Tile2Normal;
        return _this;
    }
    return Tile2NormalTracker;
}(Tile2DotTracker_1.Tile2DotTracker));
exports.Tile2NormalTracker = Tile2NormalTracker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2RvdFRyYWNrZXIvVGlsZTJOb3JtYWxUcmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXNFO0FBQ3RFLHFEQUFvRDtBQUNwRDtJQUF3QyxzQ0FBZTtJQUF2RDtRQUFBLHFFQUVDO1FBREMsZUFBUyxHQUFHLDBCQUFVLENBQUMsV0FBVyxDQUFDOztJQUNyQyxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGdUMsaUNBQWUsR0FFdEQ7QUFGWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBUaWxlMkRvdFRyYWNrZXIgfSBmcm9tICcuL1RpbGUyRG90VHJhY2tlcic7XG5leHBvcnQgY2xhc3MgVGlsZTJOb3JtYWxUcmFja2VyIGV4dGVuZHMgVGlsZTJEb3RUcmFja2VyIHtcbiAgX2dhbWVUeXBlID0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbDtcbn0iXX0=