"use strict";
cc._RF.push(module, '5b50cCViCVPEbQzHsu0pps8', 'TouchTipsUnComboTrait');
// subpackages/l_coverTip/Scripts/TouchTipsUnComboTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var ClickShowLockEffect_1 = require("../../../Scripts/ClickShowLockEffect");
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var ClickCoverLockTipEffect_1 = require("./ClickCoverLockTipEffect");
var TouchTipsUnComboTrait = /** @class */ (function (_super) {
    __extends(TouchTipsUnComboTrait, _super);
    function TouchTipsUnComboTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchTipsUnComboTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TouchTipsUnComboTrait.prototype.onIptBTchEnd_runTLock = function (t, e) {
        var o, r, i, c, n, a, s = t.args[0], p = t.args[1], l = null === (i = null === (r = null === (o = t.ins) || void 0 === o ? void 0 : o.gameContext) || void 0 === r ? void 0 : r.tileSelector) || void 0 === i ? void 0 : i.getLockTileId(null == s ? void 0 : s.pos, p);
        if (l) {
            var u = null === (n = null === (c = t.ins) || void 0 === c ? void 0 : c.gameController) || void 0 === n ? void 0 : n.tileMapObject.getTileObject(l);
            if (!u) {
                e();
                return;
            }
            if (null === (a = t.ins) || void 0 === a ? void 0 : a.gameController.tileMapObject.isHasCover(u)) {
                this.pushHasCoverEffects(t, l);
            }
            else {
                this.pushClickShowLockEffect(t, l);
            }
        }
        e();
    };
    TouchTipsUnComboTrait.prototype.pushClickShowLockEffect = function (t, e) {
        var o, r = new ClickShowLockEffect_1.ClickShowLockEffect({
            tileId: e
        });
        null === (o = t.ins) || void 0 === o || o.pushEffect(r, BehaviorsEnum_1.EInsertType.Parallel);
    };
    TouchTipsUnComboTrait.prototype.pushHasCoverEffects = function (t, e) {
        var o, r = new ClickCoverLockTipEffect_1.ClickCoverLockTipEffect({
            tileId: e,
            coverLockTipTrait: null
        });
        null === (o = t.ins) || void 0 === o || o.pushEffect(r, BehaviorsEnum_1.EInsertType.Parallel);
    };
    TouchTipsUnComboTrait.traitKey = "TouchTipsUnCombo";
    TouchTipsUnComboTrait = __decorate([
        mj.trait,
        mj.class("TouchTipsUnComboTrait")
    ], TouchTipsUnComboTrait);
    return TouchTipsUnComboTrait;
}(Trait_1.default));
exports.default = TouchTipsUnComboTrait;

cc._RF.pop();