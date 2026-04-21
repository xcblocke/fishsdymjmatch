"use strict";
cc._RF.push(module, '275eb+nfspLNZdphqAOrkKy', 'ClassicView');
// Scripts/view/ClassicView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var MainGameView_1 = require("../game/view/MainGameView");
var ClassicView = /** @class */ (function (_super) {
    __extends(ClassicView, _super);
    function ClassicView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._logName = "ClassicView";
        _this._gameType = GameTypeEnums_1.MjGameType.Classic;
        return _this;
    }
    ClassicView.prefabUrl = "prefabs/game/MainGameClassic";
    ClassicView = __decorate([
        mj.class
    ], ClassicView);
    return ClassicView;
}(MainGameView_1.default));
exports.default = ClassicView;

cc._RF.pop();