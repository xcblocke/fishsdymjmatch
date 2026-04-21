"use strict";
cc._RF.push(module, 'f6d6fMzhZhGnYaVzI/XiEks', 'ChangeLoopCardSkinTrait');
// subpackages/l_changeLoopCardSkin/Scripts/ChangeLoopCardSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var u = /^([btWAC][1-9]|Z_(dong|nan|xi|bei|bai|fa|zhong)|H_(mei|lan|zhu|ju)|J_(chun|xia|qiu|dong))$/;
var c = [45, 95, 145, 195];
var p = ["l_lanCardEN2", "l_lanCardFLOWER1", "l_lanCardEN", "l_lanCardBLOCKMJ"];
var ChangeLoopCardSkinTrait = /** @class */ (function (_super) {
    __extends(ChangeLoopCardSkinTrait, _super);
    function ChangeLoopCardSkinTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cfg = {};
        return _this;
    }
    ChangeLoopCardSkinTrait_1 = ChangeLoopCardSkinTrait;
    ChangeLoopCardSkinTrait.prototype.onLoad = function () {
        var e = this;
        _super.prototype.onLoad.call(this);
        this._cfg = this._traitData || {};
        Promise.resolve().then(function () {
            e.registerEvent([{
                    event: "CardUtil_skinBundle"
                }]);
        });
    };
    ChangeLoopCardSkinTrait.prototype.onCardUtil_skinBundle = function (t, e) {
        var r, n = null === (r = t.args) || void 0 === r ? void 0 : r[0];
        if (n && u.test(n)) {
            var a = this._getLevelId(), i = this._bundleForMainLevel(a) || "mainRes";
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: i
            });
        }
        else
            e();
    };
    ChangeLoopCardSkinTrait.prototype.onMainGameCtrl_initRes = function (t, e) {
        var n;
        try {
            var a = this._getLevelId(), i = null !== (n = this._cfg.levelCaps) && void 0 !== n ? n : c, o = (this._levelInCycle(a, i), this._bundleForMainLevel(a));
            o && t.ins && "function" == typeof t.ins.addPreloadRes && t.ins.addPreloadRes("SpriteAtlas", o + ":atlas/cardIcon");
        }
        catch (t) {
            console.error("[" + ChangeLoopCardSkinTrait_1.traitKey + "] initRes " + (null == t ? void 0 : t.message));
        }
        e();
    };
    ChangeLoopCardSkinTrait.prototype.onCardUtil_atlasPathBundle = function (t, e) {
        var n;
        try {
            var a = null === (n = t.args) || void 0 === n ? void 0 : n[0];
            if (!a || !u.test(a)) {
                e();
                return;
            }
            var i = this._getLevelId(), o = this._bundleForMainLevel(i);
            if (!o) {
                e();
                return;
            }
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: {
                    path: "atlas/cardIcon/" + a,
                    bundleName: o,
                    fromAtlas: true
                }
            });
        }
        catch (t) {
            console.error("[" + ChangeLoopCardSkinTrait_1.traitKey + "] atlasPathBundle " + (null == t ? void 0 : t.message));
            e();
        }
    };
    ChangeLoopCardSkinTrait.prototype._bundleForMainLevel = function (t) {
        var e, r, n = null !== (e = this._cfg.skinBundles) && void 0 !== e ? e : p;
        if (!n.length)
            return null;
        for (var a = null !== (r = this._cfg.levelCaps) && void 0 !== r ? r : c, i = this._levelInCycle(t, a), o = n.length - 1, l = Math.min(a.length, o), s = 0; s < a.length; s++)
            if (i <= a[s]) {
                l = Math.min(s, o);
                break;
            }
        return n[l];
    };
    ChangeLoopCardSkinTrait.prototype._levelInCycle = function (t, e) {
        var r = e.length > 0 ? e[e.length - 1] : 195;
        return r <= 0 ? Math.max(1, t) : (((t <= 0 ? 1 : t) - 1) % r + r) % r + 1;
    };
    ChangeLoopCardSkinTrait.prototype._getLevelId = function () {
        var t = UserModel_1.default.getInstance().getMainGameData(), e = 1;
        t && (e = t.getLevelId());
        return e;
    };
    var ChangeLoopCardSkinTrait_1;
    ChangeLoopCardSkinTrait.traitKey = "ChangeLoopCardSkin";
    ChangeLoopCardSkinTrait = ChangeLoopCardSkinTrait_1 = __decorate([
        mj.trait,
        mj.class("ChangeLoopCardSkinTrait")
    ], ChangeLoopCardSkinTrait);
    return ChangeLoopCardSkinTrait;
}(Trait_1.default));
exports.default = ChangeLoopCardSkinTrait;

cc._RF.pop();