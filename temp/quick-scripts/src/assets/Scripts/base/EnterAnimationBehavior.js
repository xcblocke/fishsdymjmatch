"use strict";
cc._RF.push(module, 'c38c5JUWSpA8Zxq5X3LETxP', 'EnterAnimationBehavior');
// Scripts/base/EnterAnimationBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterAnimationBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var EnterAnimationManager_1 = require("../animation/manager/EnterAnimationManager");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var GameConstant_1 = require("../core/simulator/constant/GameConstant");
var AnimationManager_1 = require("../animation_old/manager/AnimationManager");
var EnterAnimationBehavior = /** @class */ (function (_super) {
    __extends(EnterAnimationBehavior, _super);
    function EnterAnimationBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isAborted = false;
        return _this;
    }
    EnterAnimationBehavior.prototype.start = function (e) {
        this._isAborted = false;
        this._cardLayoutConfig = e.data.cardLayoutConfig;
        this.startPlayEnterAnimation();
    };
    EnterAnimationBehavior.prototype.startPlayEnterAnimation = function () {
        this.playEnterAnimation_old();
    };
    EnterAnimationBehavior.prototype.playEnterAnimation = function () {
        var e = this;
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Birth);
        var t = EnterAnimationManager_1.EnterAnimationManager.getInstance(), o = {
            tileNodeMap: this.getFilteredTileNodeMap(),
            cardLayoutConfig: this._cardLayoutConfig,
            screenSize: cc.winSize
        };
        t.play({
            context: o,
            timerComponent: this.context.gameView.timerComponent,
            callbacks: {
                onStart: function () {
                    e._isAborted || e.context.gameView.setSwallowEventNodeActive(true);
                },
                onComplete: function () {
                    if (!e._isAborted) {
                        e.context.gameView.setSwallowEventNodeActive(false);
                        e.finish(GameInputEnum_1.EBehaviorEnum.Success);
                    }
                }
            }
        });
    };
    EnterAnimationBehavior.prototype.getFilteredTileNodeMap = function () {
        var e, t, o, n = this.context.getTileNodeMap(), i = new Map();
        try {
            for (var r = __values(n), s = r.next(); !s.done; s = r.next()) {
                var c = __read(s.value, 2), u = c[0], p = c[1];
                (null === (o = p.isInSlotBar) || void 0 === o ? void 0 : o.call(p)) || i.set(u, p);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                s && !s.done && (t = r.return) && t.call(r);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return i;
    };
    EnterAnimationBehavior.prototype.getHalfCardWidth = function () {
        return 0.5 * this._cardLayoutConfig.cardSize[0];
    };
    EnterAnimationBehavior.prototype.getMaxTileCountX = function () {
        return GameConstant_1.default.MaxTileCountX;
    };
    EnterAnimationBehavior.prototype.getMaxTileCountY = function () {
        return GameConstant_1.default.MaxTileCountY;
    };
    EnterAnimationBehavior.prototype.splitAllCardRects = function () {
        var e, t, o = [], n = this.context.getTileMapObject();
        if (!n || !n.mapLayers)
            return [];
        for (var i = 0; i < n.mapLayers().length; i++) {
            var r = new Map();
            o.push(r);
        }
        try {
            for (var s = __values(this.getFilteredTileNodeMap()), c = s.next(); !c.done; c = s.next()) {
                var u = __read(c.value, 2), p = (u[0], u[1]), f = p.info.tileObject, d = (i = f.layer, f.gridPosY), h = f.gridPosX;
                o[i] || (o[i] = new Map());
                (r = o[i]).has(d) || r.set(d, new Map());
                r.get(d).set(h, p.cardNode);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                c && !c.done && (t = s.return) && t.call(s);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return o;
    };
    EnterAnimationBehavior.prototype.getAllCardShadows = function () {
        var e, t, o = [];
        try {
            for (var n = __values(this.getFilteredTileNodeMap()), i = n.next(); !i.done; i = n.next()) {
                var r = __read(i.value, 2), s = (r[0], r[1]);
                o.push(s.shadowNode.getComponent(cc.Sprite));
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
        return o;
    };
    EnterAnimationBehavior.prototype.playEnterAnimation_old = function () {
        var e = this;
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Birth);
        var t = AnimationManager_1.AnimationManager.getInstance();
        t.randomizeAnimationConfig();
        t.playFadeInAnimation({
            timerComponent: this.context.gameView.timerComponent,
            rects: this.splitAllCardRects(),
            shadows: this.getAllCardShadows(),
            halfCardWidth: this.getHalfCardWidth(),
            halfMaxColNum: this.getMaxTileCountX(),
            halfMaxRowNum: this.getMaxTileCountY(),
            startCallback: function () {
                e._isAborted || e.context.gameView.setSwallowEventNodeActive(true);
            },
            beforeShadowCallback: function () { },
            endCallback: function () {
                if (!e._isAborted) {
                    e.context.gameView.setSwallowEventNodeActive(false);
                    e.finish(GameInputEnum_1.EBehaviorEnum.Success);
                }
            }
        });
    };
    EnterAnimationBehavior.prototype.onAbort = function () {
        var e;
        this._isAborted = true;
        AnimationManager_1.AnimationManager.getInstance().stopCurrentAnimation();
        EnterAnimationManager_1.EnterAnimationManager.getInstance().stop();
        null === (e = this.context.gameView) || void 0 === e || e.setSwallowEventNodeActive(false);
    };
    __decorate([
        mj.traitEvent("EnterAniBhv_startPlay")
    ], EnterAnimationBehavior.prototype, "startPlayEnterAnimation", null);
    __decorate([
        mj.traitEvent("EnterAniBhv_playOld")
    ], EnterAnimationBehavior.prototype, "playEnterAnimation_old", null);
    return EnterAnimationBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.EnterAnimationBehavior = EnterAnimationBehavior;

cc._RF.pop();