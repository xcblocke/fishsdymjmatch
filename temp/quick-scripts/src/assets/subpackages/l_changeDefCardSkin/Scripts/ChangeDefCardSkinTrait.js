"use strict";
cc._RF.push(module, 'd18d9lbu6BI8r9PLZ7bW9DJ', 'ChangeDefCardSkinTrait');
// subpackages/l_changeDefCardSkin/Scripts/ChangeDefCardSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var p = /^([btWAC][1-9]|Z_(dong|nan|xi|bei|bai|fa|zhong)|H_(mei|lan|zhu|ju)|J_(chun|xia|qiu|dong))$/;
var ChangeDefCardSkinTrait = /** @class */ (function (_super) {
    __extends(ChangeDefCardSkinTrait, _super);
    function ChangeDefCardSkinTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkin = null;
        return _this;
    }
    ChangeDefCardSkinTrait.prototype.skinBundle = function (t) {
        var r, e, n, i, a, o = null === (r = this._traitData) || void 0 === r ? void 0 : r.skin, s = null, l = (LoginModel_1.default.getInstance().country || "").toUpperCase(), p = "US" === l;
        if (Array.isArray(o)) {
            var f = p ? o[0] || "" : o[1] || "";
            "" == f && (f = null);
            s = f;
        }
        else
            s = o;
        var d = null === (e = this._traitData) || void 0 === e ? void 0 : e.types;
        if (d && d.length >= 2) {
            var y = t;
            y || (y = UserModel_1.default.getInstance().getCurrentGameType());
            var h = d[p ? 0 : 1];
            s = this.isMainType(y) ? h[0] : h[1];
        }
        if ((null === (n = this._traitData) || void 0 === n ? void 0 : n.countrys) && (null === (i = this._traitData) || void 0 === i ? void 0 : i.countrys.length) > 0) {
            for (var _ = null === (a = this._traitData) || void 0 === a ? void 0 : a.countrys, v = null, g = 0; g < _.length; g++)
                if (_[g][0].toUpperCase() === l) {
                    v = _[g][1];
                    break;
                }
            v && (s = v);
        }
        return s || null;
    };
    ChangeDefCardSkinTrait.prototype.isMainType = function (t) {
        return t == GameTypeEnums_1.MjGameType.Normal || t == GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    ChangeDefCardSkinTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        Promise.resolve().then(function () { });
    };
    ChangeDefCardSkinTrait.prototype.onMainGameCtrl_initRes = function (t, r) {
        var e = t.ins;
        this._currSkin = this.skinBundle(e.gameType);
        this._currSkin && e && "function" == typeof e.addPreloadRes && e.addPreloadRes("SpriteAtlas", this._currSkin + ":atlas/cardIcon");
        r();
    };
    ChangeDefCardSkinTrait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var e;
        if (this._currSkin) {
            var n = null === (e = t.args) || void 0 === e ? void 0 : e[0];
            if (n && p.test(n)) {
                r({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: {
                        path: "atlas/cardIcon/" + n,
                        bundleName: this._currSkin,
                        fromAtlas: true
                    }
                });
            }
            else {
                r();
            }
        }
        else
            r();
    };
    ChangeDefCardSkinTrait.traitKey = "ChangeDefCardSkin";
    ChangeDefCardSkinTrait = __decorate([
        mj.trait,
        mj.class("ChangeDefCardSkinTrait")
    ], ChangeDefCardSkinTrait);
    return ChangeDefCardSkinTrait;
}(Trait_1.default));
exports.default = ChangeDefCardSkinTrait;

cc._RF.pop();