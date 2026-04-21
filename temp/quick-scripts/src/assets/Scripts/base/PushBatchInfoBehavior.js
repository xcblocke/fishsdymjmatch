"use strict";
cc._RF.push(module, '15ca208ZuFCPYBE3gkAppm/', 'PushBatchInfoBehavior');
// Scripts/base/PushBatchInfoBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.PushBatchInfoBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameInteraction_1 = require("../GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var ClassicExtractTool_1 = require("../ClassicExtractTool");
var UserModel_1 = require("../gamePlay/user/UserModel");
var PushBatchInfoBehavior = /** @class */ (function (_super) {
    __extends(PushBatchInfoBehavior, _super);
    function PushBatchInfoBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isOpenGenerateState = false;
        return _this;
    }
    PushBatchInfoBehavior.prototype.onAbort = function () {
        this._isOpenGenerateState || this.context.gameView.setSwallowEventNodeActive(false);
        _super.prototype.onAbort.call(this);
    };
    PushBatchInfoBehavior.prototype.start = function (e) {
        this._isOpenGenerateState = e.data.isOpenGenerateState;
        this.loadAndPushLevel(e);
    };
    PushBatchInfoBehavior.prototype.loadAndPushLevel = function () {
        var e = this;
        this._isOpenGenerateState || this.context.gameView.setSwallowEventNodeActive(true);
        var t = UserModel_1.default.getInstance().getGameDataByGameType(GameTypeEnums_1.MjGameType.Classic);
        ClassicExtractTool_1.ClassicExtractTool.getInstance().extractSwimlane(t).then(function (t) {
            e._isOpenGenerateState || e.context.gameView.setSwallowEventNodeActive(false);
            GameInteraction_1.GameInteraction.input({
                inputType: GameInputEnum_1.EGameInputEnum.AddLevelClassic,
                levelData: {
                    levelStr: t.levelStr,
                    originalLevelStr: t.levelStr,
                    levelDifficulty: t.difficultyType,
                    isNewGame: false,
                    gameType: GameTypeEnums_1.MjGameType.Classic,
                    levelId: parseInt(t.index) || 0,
                    difficultyType: t.difficultyType,
                    levelName: t.libName
                }
            });
            e.finish();
        });
    };
    return PushBatchInfoBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.PushBatchInfoBehavior = PushBatchInfoBehavior;

cc._RF.pop();