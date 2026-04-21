"use strict";
cc._RF.push(module, '03bf3UpmxJHr61EwgLLNoSD', 'InputShuffle');
// Scripts/input/InputShuffle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DGameUseItem_1 = require("../gamePlay/dot/DGameUseItem");
var DynamicCurve_1 = require("../types/DynamicCurve");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameEvent_1 = require("../simulator/constant/GameEvent");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var ShuffleEffect_1 = require("../ShuffleEffect");
var UpdateMatchNumEffect_1 = require("../UpdateMatchNumEffect");
var UpdateShufflePropEffect_1 = require("../UpdateShufflePropEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputShuffle = /** @class */ (function (_super) {
    __extends(InputShuffle, _super);
    function InputShuffle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputShuffle.prototype.excute = function (e) {
        var t = this.gameContext.getGameData().getShuffleNums(), o = false;
        e.from !== GameInputEnum_1.EShuffleFrom.ClassicRevive && e.from !== GameInputEnum_1.EShuffleFrom.Free || (o = true);
        if (!o) {
            if (!this.gameContext.getGameData().isShuffleEnough()) {
                mj.EventManager.emit("SHOWTIPS", "Insufficient number of props.", cc.v2(0, 0));
                return;
            }
            this.gameContext.getGameData().changeShuffleNums(-1);
            this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Shuffle, e.from);
            this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Shuffle, -1);
            DynamicCurve_1.default.instance.useShuffle(this.gameContext.gameType);
            DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Shuffle,
                afterNum: this.gameContext.getGameData().getShuffleNums(),
                from: e.from,
                beforeNum: t
            });
        }
        if (e.from === GameInputEnum_1.EShuffleFrom.ClassicRevive) {
            this.gameContext.classicReviveModifier.modifyReviveCount();
            this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Shuffle, e.from);
            DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
                itemId: GameTypeEnums_1.EItemId.Shuffle,
                afterNum: this.gameContext.getGameData().getShuffleNums(),
                from: e.from,
                beforeNum: t
            });
        }
        this.gameContext.touchData.clear();
        this.gameContext.getTileMapObject().unselectAllTileIds();
        var n = this.gameContext.getTileMapObject().getLevelData();
        this.gameController.gameContext.shuffleModifier.shuffle();
        this.gameController.tileMapObject.updateCanMatchTiles();
        this.gameContext.gameModifier.modifyShuffle();
        var i = this.gameContext.getGameData().getLevelData();
        this.gameContext.trackerModifier.triggerShuffle(i, n, e.from);
        var r = this.gameContext.tileTypesModifier.isUserFix();
        if (this.gameContext.gameType === GameTypeEnums_1.MjGameType.Classic) {
            this.gameContext.tileTypesModifier.saveToGameDataFix();
        }
        else {
            r && this.gameContext.tileTypesModifier.saveToGameData();
        }
        this.pushUpdateShufflePropEffect(this.gameContext.getGameData().getShuffleNums());
        this.pushShuffleEffect();
        this.pushUpdateMatchNumEffect();
    };
    InputShuffle.prototype.pushUpdateShufflePropEffect = function (e) {
        var t = new UpdateShufflePropEffect_1.UpdateShufflePropEffect({
            curNum: e
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputShuffle.prototype.pushShuffleEffect = function () {
        var e = this.getShuffleEffect();
        this.pushEffect(e);
        mj.EventManager.emit(GameEvent_1.EGameEvent.Effect_Shuffle, this);
    };
    InputShuffle.prototype.getShuffleEffect = function () {
        return new ShuffleEffect_1.ShuffleEffect({});
    };
    InputShuffle.prototype.pushUpdateMatchNumEffect = function () {
        var e = new UpdateMatchNumEffect_1.UpdateMatchNumEffect({
            canMatchCardPairNum: this.gameContext.getTileMapObject().getCanMatchCardPairNum()
        });
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Parallel);
    };
    __decorate([
        mj.traitEvent("IptShuffle_exec")
    ], InputShuffle.prototype, "excute", null);
    __decorate([
        mj.traitEvent("IptShuffle_pushEffect")
    ], InputShuffle.prototype, "pushShuffleEffect", null);
    __decorate([
        mj.traitEvent("IptShuffle_getEffect")
    ], InputShuffle.prototype, "getShuffleEffect", null);
    return InputShuffle;
}(InputBase_1.InputBase));
exports.default = InputShuffle;

cc._RF.pop();