"use strict";
cc._RF.push(module, '46c06KC96BPG5PsI6JVGZC/', 'Tile2DotTrackerModifier');
// Scripts/process/tile2/Tile2DotTrackerModifier.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2DotTrackerModifier = void 0;
var BaseCoreObject_1 = require("../../BaseCoreObject");
var Tile2DotTracker_1 = require("../../dotTracker/Tile2DotTracker");
var Tile2DotTrackerModifier = /** @class */ (function (_super) {
    __extends(Tile2DotTrackerModifier, _super);
    function Tile2DotTrackerModifier(t) {
        return _super.call(this, t) || this;
    }
    Tile2DotTrackerModifier.prototype.recordErrorFlip = function (e) {
        var t;
        null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordErrorClick(this.context, e, Tile2DotTracker_1.EErrorClickType.Flip);
    };
    Tile2DotTrackerModifier.prototype.recordErrorDrag = function (e) {
        var t;
        null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordErrorClick(this.context, e, Tile2DotTracker_1.EErrorClickType.Drag);
    };
    Tile2DotTrackerModifier.prototype.recordErrorLock = function (e) {
        var t;
        null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordErrorClick(this.context, e, Tile2DotTracker_1.EErrorClickType.Lock);
    };
    Tile2DotTrackerModifier.prototype.recordUseShuffle = function (e) {
        var t;
        e || null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordShuffle(this.context);
    };
    Tile2DotTrackerModifier.prototype.recordUseRevert = function () {
        var e;
        null === (e = this.context.getTile2DotTracker()) || void 0 === e || e.recordRevert(this.context);
    };
    Tile2DotTrackerModifier.prototype.recordUseHint = function (e) {
        var t;
        null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordHint(this.context, e);
    };
    Tile2DotTrackerModifier.prototype.recordUseMagnet = function (e) {
        var t;
        null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordMagnet(this.context, e);
    };
    Tile2DotTrackerModifier.prototype.recordUseRevive = function () { };
    Tile2DotTrackerModifier.prototype.addSlotBar = function (e) {
        var t, o = this.context.getTileMapObject().getTileObject(e);
        if (o) {
            var n = this.context.getGameData().slotBarIds;
            o.getIsInSlotBar() || n.includes(o.saveKey()) || null === (t = this.context.getTile2DotTracker()) || void 0 === t || t.recordAddSlot(this.context, e);
        }
    };
    return Tile2DotTrackerModifier;
}(BaseCoreObject_1.BaseCoreObject));
exports.Tile2DotTrackerModifier = Tile2DotTrackerModifier;

cc._RF.pop();