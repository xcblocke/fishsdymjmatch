"use strict";
cc._RF.push(module, '0e0561qsP1DobSAjSyMKOq1', 'ClearLayerWordsTrait');
// subpackages/r_clearLayerWords/Scripts/ClearLayerWordsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var BehaviorsMapping_1 = require("../../../Scripts/mapping/BehaviorsMapping");
var BehaviorFactory_1 = require("../../../Scripts/BehaviorFactory");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ClearLayerBehavior_1 = require("./ClearLayerBehavior");
var ClearLayerEffect_1 = require("./ClearLayerEffect");
var NormalGameData_1 = require("../../../Scripts/core/simulator/data/NormalGameData");
var ClearLayerWordsTrait = /** @class */ (function (_super) {
    __extends(ClearLayerWordsTrait, _super);
    function ClearLayerWordsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ClearLayerWordsTrait.prototype, "limitTop", {
        get: function () {
            var e, r;
            return null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.limitTop) && void 0 !== r ? r : 10;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClearLayerWordsTrait.prototype, "limitBottom", {
        get: function () {
            var e, r;
            return null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.limitBottom) && void 0 !== r ? r : 16;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClearLayerWordsTrait.prototype, "isBottomOrigin", {
        get: function () {
            var e, r;
            return null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.bottomOrigin) && void 0 !== r && r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClearLayerWordsTrait.prototype, "limitLevel", {
        get: function () {
            var e, r;
            return null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.limitLevel) && void 0 !== r ? r : 1;
        },
        enumerable: false,
        configurable: true
    });
    ClearLayerWordsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        BehaviorFactory_1.BehaviorFactory.registerBehavior(BehaviorsMapping_1.BehaviorsMapping.ClearLayer, ClearLayerBehavior_1.default);
    };
    ClearLayerWordsTrait.prototype.onClrNormHlp_tryShwMotWrd = function (e, r) {
        if (this.canShowClearLayerWords(e.ins)) {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.jump
            });
        }
        else {
            r();
        }
    };
    ClearLayerWordsTrait.prototype.canShowClearLayerWords = function (e) {
        var r, t;
        if (!e || !e._baseInput || !e._baseInput._behaviorBuilder)
            return false;
        if (NormalGameData_1.default.getInstance().getLevelId() <= this.limitLevel)
            return false;
        var o = [BehaviorsMapping_1.BehaviorsMapping.ClearLayer, BehaviorsMapping_1.BehaviorsMapping.Fail, BehaviorsMapping_1.BehaviorsMapping.End];
        try {
            for (var i = __values(o), a = i.next(); !a.done; a = i.next()) {
                var s = a.value;
                if (e._baseInput._behaviorBuilder.findNodeByName(s))
                    return false;
            }
        }
        catch (e) {
            r = {
                error: e
            };
        }
        finally {
            try {
                a && !a.done && (t = i.return) && t.call(i);
            }
            finally {
                if (r)
                    throw r.error;
            }
        }
        var l = e._options;
        if (l.isShowFullCombo || l.isShowRewardCombo)
            return false;
        var u = l.tileIds[0], p = l.tileIds[1], f = e._gameContext.getTileMapObject(), y = f.getTileObject(u), h = f.getTileObject(p);
        if (!y || !h)
            return false;
        var d = f.aliveTiles().reduce(function (e, r) {
            return Math.max(e, r.layer);
        }, 0), m = y.layer, _ = h.layer, b = Math.max(m, _);
        if (d >= b)
            return false;
        var g = b - 1;
        if (g < 0)
            return false;
        var C = e._gameContext.getGameData().getLayerTileCount();
        if (b >= C.length)
            return false;
        if (C[b] <= this.limitTop)
            return false;
        var B = f.mapLayers()[g];
        if (!B)
            return false;
        if (this.isBottomOrigin) {
            if (C[g] <= this.limitBottom)
                return false;
        }
        else {
            if (B.allCards.filter(function (e) {
                return e.isValid;
            }).length <= this.limitBottom)
                return false;
        }
        return true;
    };
    ClearLayerWordsTrait.prototype.onClrNormHlp_pushClrFinish = function (e, r) {
        var t = e.ins;
        this.tryExecuteClearLayerWords(t);
        r();
    };
    ClearLayerWordsTrait.prototype.tryExecuteClearLayerWords = function (e) {
        if (this.canShowClearLayerWords(e)) {
            var r = new ClearLayerEffect_1.ClearLayerEffect({});
            e._baseInput.pushEffect(r, BehaviorsEnum_1.EInsertType.Root);
        }
    };
    ClearLayerWordsTrait.prototype.onClrDailyHlp_pushClrFinish = function (e, r) {
        var t = e.ins;
        this.tryExecuteClearLayerWords(t);
        r();
    };
    ClearLayerWordsTrait.traitKey = "ClearLayerWords";
    ClearLayerWordsTrait = __decorate([
        mj.trait,
        mj.class("ClearLayerWordsTrait")
    ], ClearLayerWordsTrait);
    return ClearLayerWordsTrait;
}(Trait_1.default));
exports.default = ClearLayerWordsTrait;

cc._RF.pop();