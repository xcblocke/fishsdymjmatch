"use strict";
cc._RF.push(module, '221e5lTjalOT7k+lZRs2kai', 'FlowerCardLetterTrait');
// subpackages/l_flowerCardLetter/Scripts/FlowerCardLetterTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var FlowerCardLetterTrait = /** @class */ (function (_super) {
    __extends(FlowerCardLetterTrait, _super);
    function FlowerCardLetterTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._targetLevelId = 2;
        _this._bundleName = "l_flowerCardLetter";
        _this._atlasPrefix = "atlas/flowerCardIcon";
        _this._spinePath = "spine/gameplay_special_elimination";
        _this._cachedActive = false;
        _this._currSkData = null;
        _this._isLoadingSpine = false;
        return _this;
    }
    FlowerCardLetterTrait_1 = FlowerCardLetterTrait;
    FlowerCardLetterTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var t = this._traitData || {};
        "number" == typeof t.levelId && (this._targetLevelId = t.levelId);
    };
    FlowerCardLetterTrait.prototype.refreshActiveCache = function () {
        var e, t, r, i;
        if ((null === (t = null === (e = UserModel_1.default.getInstance()) || void 0 === e ? void 0 : e.getCurrentGameType) || void 0 === t ? void 0 : t.call(e)) !== GameTypeEnums_1.MjGameType.Normal) {
            this._cachedActive = false;
            return false;
        }
        var a = null === (i = null === (r = UserModel_1.default.getInstance()) || void 0 === r ? void 0 : r.getCurrentGameData) || void 0 === i ? void 0 : i.call(r), n = (a && "function" == typeof a.getCurrentLevelId ? a.getCurrentLevelId() : 0) || (a && "function" == typeof a.getLevelId ? a.getLevelId() : 0);
        this._cachedActive = n === this._targetLevelId;
        return this._cachedActive;
    };
    FlowerCardLetterTrait.prototype.onInitViewBhv_crtTls = function (e, t) {
        var r, i, a = this;
        if (this.refreshActiveCache()) {
            var n = null === (i = null === (r = e.ins) || void 0 === r ? void 0 : r.context) || void 0 === i ? void 0 : i.gameCtr;
            if (n && "function" == typeof n.loadRes) {
                this._isLoadingSpine = true;
                this._currSkData = null;
                n.loadRes(this._spinePath, sp.SkeletonData, this._bundleName).then(function (e) {
                    var t = Array.isArray(e) ? e[0] : e;
                    a._currSkData = t || null;
                }).catch(function () {
                    a._currSkData = null;
                }).finally(function () {
                    a._isLoadingSpine = false;
                });
                t();
            }
            else
                t();
        }
        else {
            this._currSkData = null;
            this._isLoadingSpine = false;
            t();
        }
    };
    FlowerCardLetterTrait.prototype.onCardUtil_atlasPathBundle = function (e, t) {
        var i;
        if (this.refreshActiveCache()) {
            var a = null === (i = e.args) || void 0 === i ? void 0 : i[0];
            if (a) {
                var n = a.replace(/\.png$/i, "");
                if (FlowerCardLetterTrait_1.FLOWER_CARD_NAMES.has(n)) {
                    t({
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        returnVal: {
                            path: this._atlasPrefix + "/" + n,
                            bundleName: this._bundleName,
                            fromAtlas: true
                        }
                    });
                }
                else {
                    t();
                }
            }
            else
                t();
        }
        else
            t();
    };
    FlowerCardLetterTrait.prototype.onClearEffBhv_isSpCard = function (e, t) {
        var r, i;
        if (this.refreshActiveCache()) {
            var a = null === (r = e.args) || void 0 === r ? void 0 : r[0], n = null === (i = e.args) || void 0 === i ? void 0 : i[1], o = this.isFlowerCollision(e.ins, a, n);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: o
            });
        }
        else
            t();
    };
    FlowerCardLetterTrait.prototype.onClearEffBhv_changeSpSkd = function (e, t) {
        var r;
        if (this.refreshActiveCache()) {
            var i = null === (r = e.args) || void 0 === r ? void 0 : r[0], a = this._currSkData;
            a && cc.isValid(a) && i && i.skeletonData !== a && (i.skeletonData = a);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            t();
    };
    FlowerCardLetterTrait.prototype.isFlowerCollision = function (e, t, r) {
        var i, a = null == e ? void 0 : e.context, n = null === (i = null == a ? void 0 : a.getTileMapObject) || void 0 === i ? void 0 : i.call(a);
        if (!n)
            return false;
        var o = t ? n.getTileObject(t) : null, l = r ? n.getTileObject(r) : null;
        return this.isFlowerCardId(null == o ? void 0 : o.cardId) || this.isFlowerCardId(null == l ? void 0 : l.cardId);
    };
    FlowerCardLetterTrait.prototype.isFlowerCardId = function (e) {
        return !!e && (e >= 28 && e <= 34 || e >= GameTypeEnums_1.MjCardId.emFlowCardIdMei && e <= GameTypeEnums_1.MjCardId.emSeasonCardIdDong);
    };
    var FlowerCardLetterTrait_1;
    FlowerCardLetterTrait.traitKey = "FlowerCardLetter";
    FlowerCardLetterTrait.FLOWER_CARD_NAMES = new Set(["Z_dong", "Z_nan", "Z_xi", "Z_bei", "Z_bai", "Z_fa", "Z_zhong", "H_mei", "H_lan", "H_zhu", "H_ju", "J_chun", "J_xia", "J_qiu", "J_dong"]);
    FlowerCardLetterTrait = FlowerCardLetterTrait_1 = __decorate([
        mj.trait,
        mj.class("FlowerCardLetterTrait")
    ], FlowerCardLetterTrait);
    return FlowerCardLetterTrait;
}(Trait_1.default));
exports.default = FlowerCardLetterTrait;

cc._RF.pop();