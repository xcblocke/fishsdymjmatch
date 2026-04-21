
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/core/simulator/tracker/ClassicTracker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f5f03GFe6lPBYOmx9nwdBnh', 'ClassicTracker');
// Scripts/core/simulator/tracker/ClassicTracker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicTracker = void 0;
var GameTypeEnums_1 = require("../constant/GameTypeEnums");
var GameTracker_1 = require("../../../tracker/GameTracker");
var ClassicTracker = /** @class */ (function (_super) {
    __extends(ClassicTracker, _super);
    function ClassicTracker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Classic;
        return _this;
    }
    ClassicTracker = __decorate([
        mj.class("ClassicTracker")
    ], ClassicTracker);
    return ClassicTracker;
}(GameTracker_1.GameTracker));
exports.ClassicTracker = ClassicTracker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL3RyYWNrZXIvQ2xhc3NpY1RyYWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBdUQ7QUFDdkQsNERBQTJEO0FBRTNEO0lBQW9DLGtDQUFXO0lBQS9DO1FBQUEscUVBRUM7UUFEQyxlQUFTLEdBQUcsMEJBQVUsQ0FBQyxPQUFPLENBQUM7O0lBQ2pDLENBQUM7SUFGWSxjQUFjO1FBRDFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7T0FDZCxjQUFjLENBRTFCO0lBQUQscUJBQUM7Q0FGRCxBQUVDLENBRm1DLHlCQUFXLEdBRTlDO0FBRlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBHYW1lVHJhY2tlciB9IGZyb20gJy4uLy4uLy4uL3RyYWNrZXIvR2FtZVRyYWNrZXInO1xuQG1qLmNsYXNzKFwiQ2xhc3NpY1RyYWNrZXJcIilcbmV4cG9ydCBjbGFzcyBDbGFzc2ljVHJhY2tlciBleHRlbmRzIEdhbWVUcmFja2VyIHtcbiAgX2dhbWVUeXBlID0gTWpHYW1lVHlwZS5DbGFzc2ljO1xufSJdfQ==