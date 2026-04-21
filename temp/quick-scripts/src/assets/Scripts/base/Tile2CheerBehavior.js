"use strict";
cc._RF.push(module, '7a230XZ86dDDqFNw7ftxb4E', 'Tile2CheerBehavior');
// Scripts/base/Tile2CheerBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2CheerBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var EffectLayerEnum_1 = require("../constant/EffectLayerEnum");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2CheerBehavior = /** @class */ (function (_super) {
    __extends(Tile2CheerBehavior, _super);
    function Tile2CheerBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mainlineAniCfg = {
            0: "in_good",
            1: "in_great",
            2: "in_excellent",
            3: "in_amazing",
            4: "in_unbelievable"
        };
        _this._soundCfg = [GameTypeEnums_1.EAudioID.GoodMan, GameTypeEnums_1.EAudioID.GreatMan, GameTypeEnums_1.EAudioID.ExcellentMan, GameTypeEnums_1.EAudioID.AmazingMan, GameTypeEnums_1.EAudioID.UnbelievableMan];
        return _this;
    }
    Tile2CheerBehavior.prototype.start = function (e) {
        var t, o = e.data.index;
        try {
            var n = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
            if (!n || !cc.isValid(n)) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            var i = this.getCheerPosition(), r = n.convertToWorldSpaceAR(cc.v2(i.x, i.y)), l = this.getSafePosition(r, o), c = n.convertToNodeSpaceAR(l), u = cc.v3(c.x, c.y), p = this.onAnimComplete.bind(this);
            this.createCheerNode(n, u, o, p);
            this.playSound(o);
        }
        catch (e) {
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
    };
    Tile2CheerBehavior.prototype.createCheerNode = function (e, t, o, n) {
        var i = this, r = new cc.Node("CheerContainer");
        r.parent = e;
        r.position = t;
        var a = new cc.Node("spinEffect");
        a.parent = r;
        a.scale = this.getScale();
        var l = this.getSpineUrl(o), s = BaseSpine_1.default.refreshWithNode(a, l, this.getBundleName());
        s.setOnReadyCallback(function () {
            var e = i.getAnimName(o);
            s.setAnimation(e, 1, function () {
                n(r);
            });
        });
        return r;
    };
    Tile2CheerBehavior.prototype.onAnimComplete = function (e) {
        cc.isValid(e) && e.destroy();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2CheerBehavior.prototype.getCheerPosition = function () {
        return this.context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot3 ? this.getClearPosition() : this.getSlotBarBottomPosition();
    };
    Tile2CheerBehavior.prototype.getClearPosition = function () {
        var e = this.context.getLastCollisionWorldPos();
        if (!e)
            return this.getSlotBarBottomPosition();
        var t = this.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top).convertToNodeSpaceAR(e);
        return cc.v3(t.x, t.y);
    };
    Tile2CheerBehavior.prototype.getSlotBarBottomPosition = function () {
        var e = this.context.gameView.getSlotBarNode(), t = this.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top), o = e.parent.convertToWorldSpaceAR(cc.v2(e.x, e.y - e.height * e.anchorY + this.getOffsetY())), n = t.convertToNodeSpaceAR(o);
        return cc.v3(n.x, n.y);
    };
    Tile2CheerBehavior.prototype.getOffsetY = function () {
        return -200;
    };
    Tile2CheerBehavior.prototype.getSpineUrl = function () {
        return "spine/tile2Cheer/gameplay_word";
    };
    Tile2CheerBehavior.prototype.getBundleName = function () {
        return "mainRes";
    };
    Tile2CheerBehavior.prototype.getAnimName = function (e) {
        return this._mainlineAniCfg[e] || "in_good";
    };
    Tile2CheerBehavior.prototype.getScale = function () {
        return 1;
    };
    Tile2CheerBehavior.prototype.playSound = function (e) {
        var t = this.getSoundId(e);
        null != t && mj.audioManager && mj.audioManager.playEffect(t);
    };
    Tile2CheerBehavior.prototype.getSoundId = function (e) {
        return this._soundCfg[e];
    };
    Tile2CheerBehavior.prototype.getSafePosition = function (e, t) {
        return this.clampToScreenWorld(e, t);
    };
    Tile2CheerBehavior.prototype.clampToScreenWorld = function (e, t) {
        var o = cc.view.getVisibleSize(), n = o.width, i = o.height, r = this.getWordsSize(t), a = r.width, l = r.height, s = e.x - 0.5 * a, c = e.x + 0.5 * a, u = e.y - 0.5 * l, p = e.y + 0.5 * l, f = 0, d = 0;
        if (s < 0) {
            f = -s;
        }
        else {
            c > n && (f = n - c);
        }
        if (u < 0) {
            d = -u;
        }
        else {
            p > i && (d = i - p);
        }
        if (0 !== f || 0 !== d) {
            return cc.v2(e.x + f, e.y + d);
        }
        return e;
    };
    Tile2CheerBehavior.prototype.getWordsSize = function (e) {
        var t = [{
                width: 300,
                height: 150
            }, {
                width: 320,
                height: 150
            }, {
                width: 450,
                height: 150
            }, {
                width: 450,
                height: 150
            }, {
                width: 580,
                height: 150
            }];
        return e < 0 || e >= t.length ? {
            width: 350,
            height: 150
        } : t[e];
    };
    __decorate([
        mj.traitEvent("T2CheerBhv_createNode")
    ], Tile2CheerBehavior.prototype, "createCheerNode", null);
    __decorate([
        mj.traitEvent("T2CheerBhv_getOfsY")
    ], Tile2CheerBehavior.prototype, "getOffsetY", null);
    __decorate([
        mj.traitEvent("T2CheerBhv_getAniNm")
    ], Tile2CheerBehavior.prototype, "getAnimName", null);
    return Tile2CheerBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2CheerBehavior = Tile2CheerBehavior;

cc._RF.pop();