"use strict";
cc._RF.push(module, 'b229azGe65OXKeTqYrwJBjI', 'TrackerModifier');
// Scripts/process/tracker/TrackerModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackerModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var GameInputEnum_1 = require("../../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../../core/simulator/constant/GameTypeEnums");
var TrackerInterface_1 = require("../../tracker/TrackerInterface");
var TrackerModifier = /** @class */ (function (_super) {
    __extends(TrackerModifier, _super);
    function TrackerModifier(t) {
        return _super.call(this, t) || this;
    }
    TrackerModifier.prototype.triggerInvalid = function (e) {
        this.context.isVideo || this.context.getGameTracker() && this.context.getGameTracker().pushStep(this.context, {
            cmd: TrackerInterface_1.EGameStepCmd.Invalid,
            tileId: e
        });
    };
    TrackerModifier.prototype.triggerClear = function (e, t, o) {
        var n;
        if (!this.context.isVideo && this.context.getGameTracker()) {
            var i = TrackerInterface_1.EClearType.Single, r = false;
            if (e.inputType === GameInputEnum_1.EGameInputEnum.TouchStart)
                (null === (n = e) || void 0 === n ? void 0 : n.multiTouch) && (i = TrackerInterface_1.EClearType.Multi);
            else if (e.inputType === GameInputEnum_1.EGameInputEnum.TouchEnd)
                i = TrackerInterface_1.EClearType.Drag;
            else if (e.inputType === GameInputEnum_1.EGameInputEnum.AutoMerge) {
                r = true;
                i = TrackerInterface_1.EClearType.AutoMerge;
            }
            switch (t) {
                case GameTypeEnums_1.EMergeType.Daxiao:
                    i = TrackerInterface_1.EClearType.Daxiao;
                    break;
                case GameTypeEnums_1.EMergeType.Duoxiao:
                    i = TrackerInterface_1.EClearType.Duoxiao;
                    break;
                case GameTypeEnums_1.EMergeType.Bomb:
                    i = r ? TrackerInterface_1.EClearType.AutoMergeBomb : TrackerInterface_1.EClearType.Bomb;
            }
            var c = this.context.getTileMapObject().getMatchTileIds();
            if (2 === c.length) {
                var u = this.context.getTileMapObject().getTileObject(c[0]), p = this.context.getTileMapObject().getTileObject(c[1]);
                if (u && p) {
                    var f = o ? TrackerInterface_1.EGameStepCmd.AutoMerge : TrackerInterface_1.EGameStepCmd.KillPair;
                    this.context.getGameTracker().pushStep(this.context, {
                        cmd: f,
                        tileId1: c[0],
                        tileId2: c[1],
                        typeId: u.cardId,
                        clear: i
                    });
                }
            }
        }
    };
    TrackerModifier.prototype.triggerShuffle = function (e, t, o) {
        if (!this.context.isVideo && this.context.getGameTracker()) {
            var n = o === GameInputEnum_1.EShuffleFrom.Revive || o === GameInputEnum_1.EShuffleFrom.ClassicRevive ? TrackerInterface_1.EGameStepCmd.ReviveShuffle : TrackerInterface_1.EGameStepCmd.Shuffle;
            this.context.getGameTracker().pushStep(this.context, {
                cmd: n,
                boardAfter: e,
                boardBefore: t
            });
        }
    };
    TrackerModifier.prototype.triggerUndo = function (e, t) {
        if (!this.context.isVideo && this.context.getGameTracker()) {
            var o = this.context.getTileMapObject().getTileObject(e);
            o && this.context.getGameTracker().pushStep(this.context, {
                cmd: TrackerInterface_1.EGameStepCmd.Hint,
                tileId1: e,
                tileId2: t,
                typeId: o.cardId
            });
        }
    };
    TrackerModifier.prototype.triggerHint = function (e, t) {
        if (!this.context.isVideo && this.context.getGameTracker()) {
            var o = this.context.getTileMapObject().getTileObject(e);
            o && this.context.getGameTracker().pushStep(this.context, {
                cmd: TrackerInterface_1.EGameStepCmd.Hint,
                tileId1: e,
                tileId2: t,
                typeId: o.cardId
            });
        }
    };
    return TrackerModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.TrackerModifier = TrackerModifier;

cc._RF.pop();