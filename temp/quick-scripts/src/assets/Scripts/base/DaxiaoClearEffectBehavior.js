"use strict";
cc._RF.push(module, '5452bGWb3ZLYIgVsCxNzmWi', 'DaxiaoClearEffectBehavior');
// Scripts/base/DaxiaoClearEffectBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DaxiaoClearEffectBehavior = exports.EDaxiaoPlayAnimType = void 0;
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var DaxiaoAnimPlayer_1 = require("../anim/DaxiaoAnimPlayer");
exports.EDaxiaoPlayAnimType = {
    None: "",
    Base: "DaxiaoTheme1",
    CaiDai: "DaxiaoTheme2",
    Maxituan: "DaxiaoTheme4",
    Garden: "DaxiaoTheme5",
    Haiyang: "DaxiaoTheme6",
    Hudie: "DaxiaoTheme7",
    Guofeng: "DaxiaoTheme8",
    Shipin: "DaxiaoTheme9",
    Zheshan: "DaxiaoTheme10",
    Yinxiang: "DaxiaoTheme11"
};
var DaxiaoClearEffectBehavior = /** @class */ (function (_super) {
    __extends(DaxiaoClearEffectBehavior, _super);
    function DaxiaoClearEffectBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nodeInfos = [];
        _this._animType = null;
        return _this;
    }
    DaxiaoClearEffectBehavior.prototype.start = function () {
        this._nodeInfos = [];
        this.context.gameView.setSwallowEventNodeActive(true);
        this.initCards();
    };
    DaxiaoClearEffectBehavior.prototype.onAbort = function () {
        var t = this;
        this.context.gameView.setSwallowEventNodeActive(false);
        this._nodeInfos.forEach(function (e) {
            t.context.getTileNodeMap().has(e.tileId2) && t.context.removeTileNodeByTileId(e.tileId2);
            cc.isValid(e.cardNode1) && e.cardNode1.destroy();
            cc.isValid(e.cardNode2) && e.cardNode2.destroy();
        });
        this._nodeInfos = [];
        _super.prototype.onAbort.call(this);
    };
    DaxiaoClearEffectBehavior.prototype.initCards = function () {
        var e, t, o = this.effect.data.finalMatchInfos, n = this.context.gameView.nodeTopEffectRoot, i = [], r = 0;
        try {
            for (var l = __values(o), s = l.next(); !s.done; s = l.next()) {
                var u = s.value, p = this.context.getTileNodeMap().get(u.tileId1), f = this.context.getTileNodeMap().get(u.tileId2);
                if (p && f && cc.isValid(p.tileNode) && cc.isValid(f.tileNode)) {
                    r || (r = p.info.tileObject.cardLayoutConfig.cardSpace[1] * this.context.layoutScale);
                    p.resetToNormal();
                    f.resetToNormal();
                    var d = cc.instantiate(p.cardNode), h = cc.instantiate(f.cardNode);
                    d.position = this.toLocalPos(p.cardNode, n);
                    h.position = this.toLocalPos(f.cardNode, n);
                    d.parent = h.parent = n;
                    h.active = false;
                    i.push({
                        cardNode1: d,
                        cardNode2: h,
                        tileId1: u.tileId1,
                        tileId2: u.tileId2,
                        targetPos1: cc.v3(),
                        targetPos2: cc.v3(),
                        runIndex: 0
                    });
                }
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                s && !s.done && (t = l.return) && t.call(l);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this._nodeInfos = i;
        var y = DaxiaoAnimPlayer_1.DaxiaoAnimPlayer.getConfigs(i.length), m = this.context.randomGenerator.randomElement(y);
        this.playAnimation(m, i);
    };
    DaxiaoClearEffectBehavior.prototype.changeBg = function () { };
    DaxiaoClearEffectBehavior.prototype.setAnimType = function (e) {
        this._animType = e;
    };
    DaxiaoClearEffectBehavior.prototype.playAnimation = function (e, t) {
        var o = this, n = this.context.gameView.nodeTopEffectRoot;
        this.setAnimType(exports.EDaxiaoPlayAnimType.Base);
        this._animPlayer = new DaxiaoAnimPlayer_1.DaxiaoAnimPlayer({
            effectNode: n,
            layoutScale: this.context.layoutScale,
            onComplete: function () {
                return o.onAnimationComplete();
            },
            onShake: function () {
                return o.context.gameView.playShake();
            },
            loadRes: function (e, t, n) {
                return o.context.gameCtr.loadRes(e, t, n);
            },
            getTileNodePos: function (e) {
                var t = o.context.getTileNodeMap().get(e);
                return t ? o.toLocalPos(t.cardNode, n) : null;
            },
            removeTileNode: function (e) {
                o.context.removeTileNodeByTileId(e);
            },
            getTileObject: function (e) {
                var t = o.context.getTileNodeMap().get(e);
                return t ? t.info.tileObject : null;
            },
            getRandomIndexes: function (e) {
                return o.context.randomGenerator.shuffle(Array.from({
                    length: e
                }, function (e, t) {
                    return t;
                }));
            },
            getCardSpace: function () {
                return 0;
            }
        }, e);
        this._animPlayer.setupPositions(t, 0);
        t.forEach(function (e) {
            o._animPlayer.showClearTip(e.cardNode1);
            o._animPlayer.showClearTip(e.cardNode2);
            o.context.removeTileNodeByTileId(e.tileId1);
        });
        this._animPlayer.playFullAnimation(t);
    };
    DaxiaoClearEffectBehavior.prototype.toLocalPos = function (e, t) {
        var o = e.convertToWorldSpaceAR(cc.v2(0, 0)), n = t.convertToNodeSpaceAR(o);
        return cc.v3(n.x, n.y, 0);
    };
    DaxiaoClearEffectBehavior.prototype.onAnimationComplete = function (e) {
        if (e === void 0) { e = true; }
        e && this.changeBg(this._animType, this.context);
        this.context.gameView.setSwallowEventNodeActive(false);
        this.finish();
    };
    __decorate([
        mj.traitEvent("DaxiaoBhr_changeBg")
    ], DaxiaoClearEffectBehavior.prototype, "changeBg", null);
    __decorate([
        mj.traitEvent("DaxiaoBhr_playAni")
    ], DaxiaoClearEffectBehavior.prototype, "playAnimation", null);
    return DaxiaoClearEffectBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.DaxiaoClearEffectBehavior = DaxiaoClearEffectBehavior;

cc._RF.pop();