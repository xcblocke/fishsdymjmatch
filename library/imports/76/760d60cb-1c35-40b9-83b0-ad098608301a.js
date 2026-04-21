"use strict";
cc._RF.push(module, '760d6DLHDVAuYOwrQmGCDAa', 'InputDropClassic');
// Scripts/input/InputDropClassic.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var AddLevelDropAniEffect_1 = require("../AddLevelDropAniEffect");
var AddLevelDropEffect_1 = require("../AddLevelDropEffect");
var AddLevelEnterAniEffect_1 = require("../AddLevelEnterAniEffect");
var BlockInputRefEffect_1 = require("../BlockInputRefEffect");
var ClassicBeforeFailEffect_1 = require("../ClassicBeforeFailEffect");
var ClassicFailEffect_1 = require("../ClassicFailEffect");
var ClassicReviveEffect_1 = require("../ClassicReviveEffect");
var EmptyEffect_1 = require("../EmptyEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputDropClassic = /** @class */ (function (_super) {
    __extends(InputDropClassic, _super);
    function InputDropClassic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputDropClassic.prototype.excute = function () {
        var e, t, o = this.gameContext.getGameData().getCurrentBatchId(), n = this.gameContext.classicLevelModifier.tryExcuteDrop() || [], i = [];
        try {
            for (var a = __values(this.gameContext.getTileMapObject().tileObjectMap().values()), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                s.batchId == o && i.push(s);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                l && !l.done && (t = a.return) && t.call(a);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this.resetAllTileGenerated();
        this.pushAddLevelDropEffect(n);
        this.pushAddLevelEnterAniEffect(i);
        this.pushAddLevelDropAniEffect(n);
        this.tryExcuteFail();
    };
    InputDropClassic.prototype.pushAddLevelEnterAniEffect = function (e) {
        var t = new EmptyEffect_1.EmptyEffect({
            inputType: GameInputEnum_1.EGameInputEnum.AddLevelClassic
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
        var o = new AddLevelEnterAniEffect_1.AddLevelEnterAniEffect({
            tileObjects: e
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputDropClassic.prototype.tryExcuteFail = function () {
        if (this.gameContext.getTileMapObject().checkIsDead([]))
            if (this.gameContext.classicReviveChecker.canRevive())
                this.pushReviveEffect();
            else {
                this.gameContext.gameModifier.modifyClassicEnd();
                this.pushClassicBeforeFailEffect();
                this.pushFailEffect();
            }
    };
    InputDropClassic.prototype.pushReviveEffect = function () {
        this.gameContext.getGameData();
        var e = new ClassicReviveEffect_1.ClassicReviveEffect({});
        return this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputDropClassic.prototype.pushClassicBeforeFailEffect = function () {
        var e = new ClassicBeforeFailEffect_1.ClassicBeforeFailEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputDropClassic.prototype.pushFailEffect = function () {
        var e = new ClassicFailEffect_1.ClassicFailEffect({});
        return this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputDropClassic.prototype.pushBlockInputRefEffect = function (e, t) {
        var o = new BlockInputRefEffect_1.BlockInputRefEffect({
            block: e,
            from: t
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
    };
    InputDropClassic.prototype.pushAddLevelDropEffect = function (e) {
        var t = new AddLevelDropEffect_1.AddLevelDropEffect({
            fallingTiles: e
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    InputDropClassic.prototype.pushAddLevelDropAniEffect = function (e) {
        var t = new AddLevelDropAniEffect_1.AddLevelDropAniEffect({
            fallingTiles: e,
            isOpenGenerateState: this.gameContext.getOpenGenerateState()
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputDropClassic.prototype.resetAllTileGenerated = function () {
        var e, t, o = this.gameContext.getTileMapObject();
        try {
            for (var n = __values(o.tileObjectMap()), i = n.next(); !i.done; i = n.next()) {
                var l = __read(i.value, 2), s = (l[0], l[1]);
                s.generating && o.setTileGenerated(s, false);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    return InputDropClassic;
}(InputBase_1.InputBase));
exports.default = InputDropClassic;

cc._RF.pop();