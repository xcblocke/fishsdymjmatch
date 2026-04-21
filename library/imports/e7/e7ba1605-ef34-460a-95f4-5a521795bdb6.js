"use strict";
cc._RF.push(module, 'e7ba1YF7zRGCpX0WlIXlb22', 'InputAddLevelClassic');
// Scripts/input/InputAddLevelClassic.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("../inputbase/InputBase");
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var AddLevelEnterAniEffect_1 = require("../AddLevelEnterAniEffect");
var InitNextLevelEffect_1 = require("../InitNextLevelEffect");
var UpdateMatchNumEffect_1 = require("../UpdateMatchNumEffect");
var ClassicDyeingModifier_1 = require("../ClassicDyeingModifier");
var IClassicExtractTypes_1 = require("../IClassicExtractTypes");
var ChangeBatchEffect_1 = require("../ChangeBatchEffect");
var BlockInputRefEffect_1 = require("../BlockInputRefEffect");
var ClassicFailEffect_1 = require("../ClassicFailEffect");
var DGameRefreshTiles_1 = require("../gamePlay/dot/DGameRefreshTiles");
var DotUtil_1 = require("../gamePlay/dot/DotUtil");
var LevelGenRule_1 = require("../core/simulator/config/LevelGenRule");
var ClassicReviveEffect_1 = require("../ClassicReviveEffect");
var AddLevelFinishEffect_1 = require("../AddLevelFinishEffect");
var AddLevelDropAniEffect_1 = require("../AddLevelDropAniEffect");
var EmptyEffect_1 = require("../EmptyEffect");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var ClassicBeforeFailEffect_1 = require("../ClassicBeforeFailEffect");
this && this.__read;
this && this.__values;
var InputAddLevelClassic = /** @class */ (function (_super) {
    __extends(InputAddLevelClassic, _super);
    function InputAddLevelClassic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputAddLevelClassic.prototype.excute = function (e) {
        var t, o;
        if (e.levelData.levelStr) {
            var n = this.gameContext.getTileMapObject().aliveTileCount(), i = this.gameContext.getTileMapObject().getCanMatchCardPairNum(), r = this.gameContext.getTileMapObject().getCurBoardDimension(), a = DotUtil_1.DotUtil.getLevelDataAsCardId(this.gameContext.getTileMapObject()), l = this.gameContext.getGameData(), s = l.generateNewBatchId();
            this.gameContext.classicLevelModifier.pushLevelStr(s, e.levelData.levelStr);
            this.applayNextBatchInfo(e);
            var c = null !== (t = e.levelData.difficultyType) && void 0 !== t ? t : IClassicExtractTypes_1.EDifficultyType.Medium, f = ClassicDyeingModifier_1.ClassicDyeingModifier.getInstance().getDyeingStrategy(c), d = f.coordType, h = f.charType, v = this.gameContext.getTileMapObject().aliveTileCount(), g = this.gameContext.getTileMapObject().getCanMatchCardPairNum(), _ = this.gameContext.getTileMapObject().getCurBoardDimension(), T = DotUtil_1.DotUtil.getLevelDataAsCardId(this.gameContext.getTileMapObject());
            l.addTotalTileCount(v - n);
            DGameRefreshTiles_1.DotGameRefreshTiles.dot(this.gameContext, {
                sourceCsv: (null === (o = e.levelData) || void 0 === o ? void 0 : o.levelName) || "",
                preOpPairs: i,
                endOpPairs: g,
                algoCoord: d,
                algoCardId: h,
                preTileNum: n,
                endTileNum: v,
                preBoardXyz: r,
                boardXyz: _,
                preBoardStructure: a,
                endBoardStructure: T
            });
        }
    };
    InputAddLevelClassic.prototype.applayNextBatchInfo = function (e) {
        Date.now();
        var t, o = this.gameContext.getGameData(), n = o.getNextBatchId(), i = this.gameContext.classicLevelChecker.getBatchInfoByBatchId(n);
        i && i.levelStr || (i = {
            batchId: n,
            levelStr: o.getLevelStrByBatchId(n)
        });
        o.setOriginalLevelDataWithCardId(i.levelStr);
        var r = LevelGenRule_1.default.convertLevelStrCardIdToResId(i.levelStr), a = (Date.now(), this.gameContext.classicLevelModifier.instanceNextBatchData(i.batchId, r)), l = (Date.now(), Date.now(), null !== (t = e.levelData.difficultyType) && void 0 !== t ? t : IClassicExtractTypes_1.EDifficultyType.Medium);
        if (a.tileObjects && a.tileObjects.length > 0) {
            var s = a.tileObjects;
            ClassicDyeingModifier_1.ClassicDyeingModifier.getInstance().applyDyeing(this.gameContext, s, l);
        }
        Date.now();
        var c = this.gameContext.getTileMapObject();
        c.fixClassicSingleCard(true);
        Date.now();
        this.gameContext.tileTypesModifier.modifyTileTypes(o.getTileTypes() || "");
        if (!this.gameContext.getOpenGenerateState()) {
            this.gameContext.touchData.clear();
            this.gameContext.getTileMapObject().unselectAllTileIds();
        }
        c.updateCanMatchTiles();
        Date.now(), Date.now();
        a.openGenerateState || this.pushBlockInputRefEffect(true, "InputAddLevelClassic");
        this.pushInitNextLevelEffect(a);
        this.pushChangeBatchEffect(a);
        this.pushUpdateMatchNumEffect();
        if (!a.openGenerateState) {
            this.pushAddLevelEnterAniEffect(a);
            this.pushAddLevelDropAniEffect(a.failingTiles);
        }
        this.pushAddLevelFinishEffect(a);
        a.openGenerateState || this.pushBlockInputRefEffect(false, "InputAddLevelClassic");
        this.gameContext.getOpenGenerateState() || this.tryExcuteFail();
    };
    InputAddLevelClassic.prototype.pushAddLevelDropAniEffect = function (e) {
        var t = new AddLevelDropAniEffect_1.AddLevelDropAniEffect({
            fallingTiles: e,
            isOpenGenerateState: this.gameContext.getOpenGenerateState()
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputAddLevelClassic.prototype.tryExcuteFail = function () {
        if (this.gameContext.getTileMapObject().checkIsDead([]))
            if (this.gameContext.classicReviveChecker.canRevive())
                this.pushReviveEffect();
            else {
                this.gameContext.gameModifier.modifyClassicEnd();
                this.pushClassicBeforeFailEffect();
                this.pushFailEffect();
            }
    };
    InputAddLevelClassic.prototype.pushReviveEffect = function () {
        this.gameContext.getGameData();
        var e = new ClassicReviveEffect_1.ClassicReviveEffect({});
        return this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushClassicBeforeFailEffect = function () {
        var e = new ClassicBeforeFailEffect_1.ClassicBeforeFailEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushFailEffect = function () {
        var e = new ClassicFailEffect_1.ClassicFailEffect({});
        return this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushBlockInputRefEffect = function (e, t) {
        var o = new BlockInputRefEffect_1.BlockInputRefEffect({
            block: e,
            from: t
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushChangeBatchEffect = function (e) {
        var t = this.gameContext.getTileMapObject(), o = new ChangeBatchEffect_1.ChangeBatchEffect({
            tileMapObject: t,
            addGameLayerInfo: e
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushInitNextLevelEffect = function (e) {
        var t = this.gameContext.getTileMapObject(), o = new InitNextLevelEffect_1.InitNextLevelEffect({
            tileMapObject: t,
            addGameLayerInfo: e
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushAddLevelEnterAniEffect = function (e) {
        var t = new EmptyEffect_1.EmptyEffect({
            inputType: GameInputEnum_1.EGameInputEnum.AddLevelClassic
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
        var o = new AddLevelEnterAniEffect_1.AddLevelEnterAniEffect({
            tileObjects: e.tileObjects
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputAddLevelClassic.prototype.pushUpdateMatchNumEffect = function () {
        var e = this.gameContext.getTileMapObject(), t = new UpdateMatchNumEffect_1.UpdateMatchNumEffect({
            canMatchCardPairNum: e.getCanMatchCardPairNum()
        });
        return this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.pushAddLevelFinishEffect = function (e) {
        var t = this.gameContext.getTileMapObject(), o = new AddLevelFinishEffect_1.AddLevelFinishEffect({
            tileMapObject: t,
            addGameLayerInfo: e,
            isOpenGenerateState: this.gameContext.getOpenGenerateState()
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
    };
    InputAddLevelClassic.prototype.applyTempClassicNextSpecialTiles = function () { };
    return InputAddLevelClassic;
}(InputBase_1.InputBase));
exports.default = InputAddLevelClassic;

cc._RF.pop();