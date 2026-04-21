"use strict";
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