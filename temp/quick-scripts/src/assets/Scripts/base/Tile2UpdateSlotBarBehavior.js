"use strict";
cc._RF.push(module, '69deaomkJRH/qCmURjc73EH', 'Tile2UpdateSlotBarBehavior');
// Scripts/base/Tile2UpdateSlotBarBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2UpdateSlotBarBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2Interface_1 = require("../simulator/constant/Tile2Interface");
var Tile2UpdateSlotBarBehavior = /** @class */ (function (_super) {
    __extends(Tile2UpdateSlotBarBehavior, _super);
    function Tile2UpdateSlotBarBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2UpdateSlotBarBehavior.prototype.start = function (e) {
        var t, o, n = this, i = e.data.changeInfo;
        this.context.gameView;
        if (i) {
            var r = i.oldIndex < 0, c = [];
            if (this.context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot3) {
                this.newFunction(i, r, c);
            }
            else {
                this.oldFunction(i, r, c);
            }
            var u = 0, p = function p() {
                ++u >= c.length && n.finish(GameInputEnum_1.EBehaviorEnum.Success);
            };
            try {
                for (var f = __values(c), d = f.next(); !d.done; d = f.next())
                    (0, d.value)(p);
            }
            catch (e) {
                t = {
                    error: e
                };
            }
            finally {
                try {
                    d && !d.done && (o = f.return) && o.call(f);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
            0 === c.length && this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
        else
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2UpdateSlotBarBehavior.prototype.calcCenterPosInParent = function (e, t, o) {
        var n = e.convertToWorldSpaceAR(cc.v2(0, 0)), i = t.convertToWorldSpaceAR(cc.v2(0, 0)), r = cc.v2((n.x + i.x) / 2, (n.y + i.y) / 2);
        return o.convertToNodeSpaceAR(r);
    };
    Tile2UpdateSlotBarBehavior.prototype.newFunction = function (e, t, o) {
        var n = this, i = this.context.getTileNodeMap(), r = this.context.gameView, a = (null == r || r.slotBarView, e.tileId), l = e.index, s = e.oldIndex, c = e.clearInfo, p = i.get(a);
        if (c) {
            if (!p)
                return;
            if (c.clearType == Tile2Interface_1.ETile2ClearType.InSlotBar) {
                if (c.isAddToSlotBar) {
                    o.push(function (t) {
                        return n.doClearFromBoardToSlotBar(e, p, t);
                    });
                }
                else {
                    o.push(function (t) {
                        return n.doClearWaitOnSlotBar(e, p, t);
                    });
                }
            }
            else {
                var f = i.get(c.clearTildId);
                if (c.isAddToSlotBar) {
                    var d = this.calcCenterPosInParent(p.cardNode, f.cardNode, p.cardNode.parent), h = p.cardNode.convertToWorldSpaceAR(cc.v2(0, 0)).x > 0;
                    o.push(function (e) {
                        return n.doClearFromBoardToPos(p, d, h, e);
                    });
                }
                else {
                    var y = this.calcCenterPosInParent(p.cardNode, f.cardNode, r.nodeDragCardRoot);
                    o.push(function (t) {
                        return n.doClearFromSlotBarToPos(e, p, y, t);
                    });
                }
            }
        }
        else if (l < 0)
            o.push(function (t) {
                return n.doRemoveTile(e, p, t);
            });
        else if (p)
            if (s < 0) {
                p.hideSelectEffect();
                e.isDead || o.push(function (t) {
                    return n.doNoClearAddToSlotBar(e, p, t);
                });
            }
            else
                o.push(function (t) {
                    return n.doMoveInSlot(e, p, t);
                });
    };
    Tile2UpdateSlotBarBehavior.prototype.doNoClearAddToSlotBar = function (e, t, o) {
        var n, i = null === (n = this.context.gameView) || void 0 === n ? void 0 : n.slotBarView, r = e.oldIndex, a = e.index;
        i.moveTileNode(t, r, a, true);
        this.playTouchAudio();
        t.tile2NoClearAddToSlotBar(null, function () {
            o();
        });
    };
    Tile2UpdateSlotBarBehavior.prototype.oldFunction = function (e, t, o) {
        var n = this, i = this.context.getTileNodeMap(), r = this.context.gameView, a = (null == r || r.slotBarView, e.index), l = e.oldIndex, s = e.tileId, c = i.get(s);
        if (a < 0) {
            o.push(function (t) {
                return n.doRemoveTile(e, c, t);
            });
        }
        else {
            c && (l < 0 ? o.push(function (t) {
                return n.doAddToSlotBar(e, c, t);
            }) : o.push(function (t) {
                return n.doMoveInSlot(e, c, t);
            }));
        }
    };
    Tile2UpdateSlotBarBehavior.prototype.doClearFromSlotBarToPos = function (e, t, o, n) {
        t.tile2ClearFromSlotBarToPos({
            targetLocalPos: o
        }, function () {
            n();
        });
    };
    Tile2UpdateSlotBarBehavior.prototype.doClearFromBoardToPos = function (e, t, o, n) {
        e.tile2ClearFromBoardToPos({
            targetLocalPos: t,
            isRight: o
        }, function () {
            n();
        });
    };
    Tile2UpdateSlotBarBehavior.prototype.doClearFromBoardToSlotBar = function (e, t, o) {
        var n, i;
        t.tile2ClearFromBoardToSlotBar({
            clearPosIndex: null !== (i = null === (n = e.clearInfo) || void 0 === n ? void 0 : n.clearPosIndex) && void 0 !== i ? i : -1
        }, function () {
            o();
        });
    };
    Tile2UpdateSlotBarBehavior.prototype.doClearWaitOnSlotBar = function (e, t, o) {
        var n, i = null === (n = this.context.gameView) || void 0 === n ? void 0 : n.slotBarView, r = e.oldIndex, a = e.clearInfo.clearPosIndex;
        i.moveTileNode(t, r, a, true);
        t.tile2ClearWaitOnSlotBar(null, function () {
            o();
        });
    };
    Tile2UpdateSlotBarBehavior.prototype.playTouchAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Tile2Touch);
    };
    Tile2UpdateSlotBarBehavior.prototype.doRemoveTile = function (e, t, o) {
        var n, i = e.tileId;
        (null === (n = this.context.gameView) || void 0 === n ? void 0 : n.slotBarView).removeSlotBar([i]);
        o();
    };
    Tile2UpdateSlotBarBehavior.prototype.doAddToSlotBar = function (e, t, o) {
        var n, i = e.oldIndex, r = e.index;
        (null === (n = this.context.gameView) || void 0 === n ? void 0 : n.slotBarView).moveTileNode(t, i, r, true);
        this.playTouchAudio();
        t.tile2AddToSlotBar4(null, function () {
            o();
        });
    };
    Tile2UpdateSlotBarBehavior.prototype.doMoveInSlot = function (e, t, o) {
        var n, i = e.oldIndex, r = e.index;
        (null === (n = this.context.gameView) || void 0 === n ? void 0 : n.slotBarView).moveTileNode(t, i, r, true);
        var a = {
            index: r
        };
        t.tile2MoveInSlot(a, function () {
            o();
        });
    };
    __decorate([
        mj.traitEvent("T2UpSlotBarBhv_start")
    ], Tile2UpdateSlotBarBehavior.prototype, "start", null);
    __decorate([
        mj.traitEvent("T2UpSlotBarBhv_playTchAud")
    ], Tile2UpdateSlotBarBehavior.prototype, "playTouchAudio", null);
    return Tile2UpdateSlotBarBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2UpdateSlotBarBehavior = Tile2UpdateSlotBarBehavior;

cc._RF.pop();