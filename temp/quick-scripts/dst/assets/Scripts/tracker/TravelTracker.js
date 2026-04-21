
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tracker/TravelTracker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3bde0PnseNKc7DfJEoOmBx/', 'TravelTracker');
// Scripts/tracker/TravelTracker.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TravelTracker = void 0;
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameTracker_1 = require("./GameTracker");
var TravelTracker = /** @class */ (function (_super) {
    __extends(TravelTracker, _super);
    function TravelTracker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameType = GameTypeEnums_1.MjGameType.Travel;
        return _this;
    }
    TravelTracker = __decorate([
        mj.class("TravelTracker")
    ], TravelTracker);
    return TravelTracker;
}(GameTracker_1.GameTracker));
exports.TravelTracker = TravelTracker;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RyYWNrZXIvVHJhdmVsVHJhY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUFzRTtBQUN0RSw2Q0FBNEM7QUFFNUM7SUFBbUMsaUNBQVc7SUFBOUM7UUFBQSxxRUFFQztRQURDLGVBQVMsR0FBRywwQkFBVSxDQUFDLE1BQU0sQ0FBQzs7SUFDaEMsQ0FBQztJQUZZLGFBQWE7UUFEekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7T0FDYixhQUFhLENBRXpCO0lBQUQsb0JBQUM7Q0FGRCxBQUVDLENBRmtDLHlCQUFXLEdBRTdDO0FBRlksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBHYW1lVHJhY2tlciB9IGZyb20gJy4vR2FtZVRyYWNrZXInO1xuQG1qLmNsYXNzKFwiVHJhdmVsVHJhY2tlclwiKVxuZXhwb3J0IGNsYXNzIFRyYXZlbFRyYWNrZXIgZXh0ZW5kcyBHYW1lVHJhY2tlciB7XG4gIF9nYW1lVHlwZSA9IE1qR2FtZVR5cGUuVHJhdmVsO1xufSJdfQ==