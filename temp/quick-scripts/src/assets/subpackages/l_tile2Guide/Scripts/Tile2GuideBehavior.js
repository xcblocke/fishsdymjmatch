"use strict";
cc._RF.push(module, 'c7d34iEl9lNZ6x6F66HJuFi', 'Tile2GuideBehavior');
// subpackages/l_tile2Guide/Scripts/Tile2GuideBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2GuideBehavior = void 0;
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("../../../Scripts/base/GameBehaviorsBase");
var Tile2GuideUI_1 = require("./Tile2GuideUI");
var Tile2GuideBehavior = /** @class */ (function (_super) {
    __extends(Tile2GuideBehavior, _super);
    function Tile2GuideBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2GuideBehavior.prototype.start = function (e) {
        var t = e.data, i = t.status, o = t.boardTileId, a = t.slotbarTileId, r = t.text, l = t.guideStep, s = t.isShowHand, d = t.isShowSkip, c = t.isGrayGuide, u = t.isShowBottom, p = t.isShowSet, h = t.textPos, f = this.context.gameView, v = f.nodeTopView, _ = f.nodeBottomView, T = f.guideRootNode;
        switch (i) {
            case "init":
                void 0 !== u && _ && cc.isValid(_.node) && (_.node.active = !!u);
                void 0 !== p && v && v.btnSettings && cc.isValid(v.btnSettings) && (v.btnSettings.active = !!p);
                break;
            case "active":
                c && this._showDim(o, a);
                this._showGuideUI(T, o, r, null != l ? l : 0, !!s, !!d, h);
                break;
            case "hide":
                this._hideDim();
                this._hideGuideHand(T);
                break;
            case "finished":
                _ && (_.node.active = true);
                v && v.btnSettings && (v.btnSettings.active = true);
                this._destroyGuideUI(T);
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2GuideBehavior.prototype._showDim = function (e, t) {
        var i = this.context.getTileNodeMap(), o = new Set();
        e && o.add(e);
        t && o.add(t);
        t || i.forEach(function (e, t) {
            var i, a;
            (null === (a = null === (i = null == e ? void 0 : e.tileObject) || void 0 === i ? void 0 : i.getIsInSlotBar) || void 0 === a ? void 0 : a.call(i)) && o.add(t);
        });
        i.forEach(function (e, t) {
            if (!o.has(t)) {
                var i = null == e ? void 0 : e.imgLockBg;
                if (i && cc.isValid(i) && !i.active) {
                    i.opacity = 255;
                    i.active = true;
                }
            }
        });
    };
    Tile2GuideBehavior.prototype._hideDim = function () {
        var e = this.context.getTileNodeMap();
        e.forEach(function (e) {
            var t;
            null === (t = null == e ? void 0 : e.tileObject) || void 0 === t || t.isHint;
        });
        e.forEach(function (e) {
            var t = null == e ? void 0 : e.imgLockBg;
            t && cc.isValid(t) && t.active && (t.active = false);
        });
    };
    Tile2GuideBehavior.prototype._getBoardTileWorldPos = function (e) {
        var t, i, o = this.context.getTileNodeByTileId(e), a = null == o ? void 0 : o.tileObject;
        if (!(null == a ? void 0 : a.isValid))
            return null;
        if (o.tileNode && cc.isValid(o.tileNode)) {
            var r = o.tileNode.convertToWorldSpaceAR(cc.v2(0, 0));
            return cc.v3(r.x, r.y, 0);
        }
        var n = null === (i = null === (t = this.context.getTileNodeManager()) || void 0 === t ? void 0 : t.getFirstLayer) || void 0 === i ? void 0 : i.call(t);
        if (n && cc.isValid(n)) {
            r = n.convertToWorldSpaceAR(a.getPosition());
            return cc.v3(r.x, r.y, 0);
        }
        return null;
    };
    Tile2GuideBehavior.prototype._showGuideUI = function (e, t, i, o, a, r, n) {
        var l, d = this;
        if (e && cc.isValid(e)) {
            var c = this._getBoardTileWorldPos(t);
            if (e.getChildByName("tile2GuideNode")) {
                var u = e.tile2GuideUI;
                if (u) {
                    var p = null !== (l = this._getBoardTileWorldPos(t)) && void 0 !== l ? l : c;
                    this._applyStepToUI(u, t, p, i, o, a, r, n);
                }
            }
            else
                Tile2GuideUI_1.default.createUI().then(function (l) {
                    var u;
                    if (cc.isValid(e)) {
                        l.parent = e;
                        l.name = "tile2GuideNode";
                        var p = l.getComponent(Tile2GuideUI_1.default);
                        e.tile2GuideUI = p;
                        if (p) {
                            var h = null !== (u = d._getBoardTileWorldPos(t)) && void 0 !== u ? u : c;
                            d._applyStepToUI(p, t, h, i, o, a, r, n);
                        }
                    }
                });
        }
    };
    Tile2GuideBehavior.prototype._applyStepToUI = function (e, t, i, o, a, r, n, l) {
        e.setText(o, a);
        e.setShowSkip(n);
        l && e.setTipPos(l);
        if (i) {
            e.setGuidePosition(t, i, r);
        }
        else {
            e.setShowHand(r);
        }
    };
    Tile2GuideBehavior.prototype._hideGuideHand = function (e) {
        if (e && cc.isValid(e)) {
            var t = e.tile2GuideUI;
            if (t && cc.isValid(t.node)) {
                t.setShowHand(false);
                t.playTextAnim({
                    type: "hide"
                });
            }
        }
    };
    Tile2GuideBehavior.prototype._destroyGuideUI = function (e) {
        if (e && cc.isValid(e)) {
            var t = e.getChildByName("tile2GuideNode");
            t && cc.isValid(t) && t.destroy();
            e.tile2GuideUI = null;
        }
    };
    __decorate([
        mj.traitEvent("Tile2GuideBhv_start")
    ], Tile2GuideBehavior.prototype, "start", null);
    return Tile2GuideBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2GuideBehavior = Tile2GuideBehavior;

cc._RF.pop();