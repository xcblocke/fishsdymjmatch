"use strict";
cc._RF.push(module, 'b9337Wqo2JFj6t2OHlhPM0O', 'Tile2MagnetBehavior');
// Scripts/base/Tile2MagnetBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2MagnetBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2MagnetItem_1 = require("../items/Tile2MagnetItem");
var Tile2MagnetBehavior = /** @class */ (function (_super) {
    __extends(Tile2MagnetBehavior, _super);
    function Tile2MagnetBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2MagnetBehavior.prototype.start = function (e) {
        var t = e.data.magnetCount || 1;
        try {
            var o = this.context.gameView;
            this.showItem(o, t);
        }
        catch (e) { }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2MagnetBehavior.prototype.showItem = function (e, t) {
        var o = this;
        if (e && cc.isValid(e.nodeTopEffectRoot)) {
            var n = e.nodeTopEffectRoot.getChildByName("magnetNode");
            if (n && cc.isValid(n)) {
                n.active || this.playEnterAnimation(n, t);
            }
            else {
                this.createMagnetNode(e, t, function (e) {
                    o.playEnterAnimation(e, t);
                });
            }
        }
    };
    Tile2MagnetBehavior.prototype.getNodeCfg = function () {
        return null;
    };
    Tile2MagnetBehavior.prototype.createMagnetNode = function (e, t, o) {
        var n = this.getNodeCfg();
        n && Tile2MagnetItem_1.default.createUI(n.url, n.bundleName).then(function (t) {
            if (!cc.isValid(t))
                return null;
            if (!e || !cc.isValid(e.nodeTopEffectRoot)) {
                t.destroy();
                return null;
            }
            e.nodeTopEffectRoot.addChild(t);
            t.active = false;
            null == o || o(t);
        }).catch(function () { });
    };
    Tile2MagnetBehavior.prototype.playEnterAnimation = function (e, t) {
        var o = this.context.gameView, n = null == o ? void 0 : o.getSlotBarNode(), i = null == o ? void 0 : o.nodeTopEffectRoot;
        if (e && cc.isValid(e) && n && cc.isValid(n) && i && cc.isValid(i)) {
            var r = this.getOffset(), a = n.convertToWorldSpaceAR(r), l = i.convertToNodeSpaceAR(a);
            e.active = true;
            var c = e.getComponent(Tile2MagnetItem_1.default);
            if (c && c.playEnterAnimation) {
                var u = {
                    enterDuration: this.getEnterTime(),
                    countdownDuration: this.getDownTime(),
                    exitDuration: this.getExitTime(),
                    targetPos: l,
                    magnetCount: t
                };
                c.playEnterAnimation(u);
            }
        }
    };
    Tile2MagnetBehavior.prototype.getOffset = function () {
        return cc.v2(-455, -120);
    };
    Tile2MagnetBehavior.prototype.getEnterTime = function () {
        return 0.5;
    };
    Tile2MagnetBehavior.prototype.getDownTime = function () {
        return 5;
    };
    Tile2MagnetBehavior.prototype.getExitTime = function () {
        return 0.3;
    };
    __decorate([
        mj.traitEvent("Tile2MagnetBhv_showItem")
    ], Tile2MagnetBehavior.prototype, "showItem", null);
    __decorate([
        mj.traitEvent("Tile2MagnetBhv_nodeCfg")
    ], Tile2MagnetBehavior.prototype, "getNodeCfg", null);
    __decorate([
        mj.traitEvent("Tile2MagnetBhv_offset")
    ], Tile2MagnetBehavior.prototype, "getOffset", null);
    __decorate([
        mj.traitEvent("Tile2MagnetBhv_enterTime")
    ], Tile2MagnetBehavior.prototype, "getEnterTime", null);
    __decorate([
        mj.traitEvent("Tile2MagnetBhv_downTime")
    ], Tile2MagnetBehavior.prototype, "getDownTime", null);
    __decorate([
        mj.traitEvent("Tile2MagnetBhv_exitTime")
    ], Tile2MagnetBehavior.prototype, "getExitTime", null);
    return Tile2MagnetBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2MagnetBehavior = Tile2MagnetBehavior;

cc._RF.pop();