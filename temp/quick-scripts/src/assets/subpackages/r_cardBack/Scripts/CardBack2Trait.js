"use strict";
cc._RF.push(module, '60914Gemd1DJIH//1cEsp6I', 'CardBack2Trait');
// subpackages/r_cardBack/Scripts/CardBack2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var CardBack2Trait = /** @class */ (function (_super) {
    __extends(CardBack2Trait, _super);
    function CardBack2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._curCardBackInd = -1;
        _this._curCardBack = "default";
        _this._switchType = CardBack2Trait_1.TYPE_SEQUENTIAL;
        return _this;
    }
    CardBack2Trait_1 = CardBack2Trait;
    CardBack2Trait.prototype.onLoad = function () {
        var r;
        _super.prototype.onLoad.call(this);
        this._switchType = (null === (r = this._traitData) || void 0 === r ? void 0 : r.t) || CardBack2Trait_1.TYPE_SEQUENTIAL;
        this._switchType, CardBack2Trait_1.TYPE_RANDOM;
    };
    CardBack2Trait.prototype.getCurCardBack = function () {
        return this.localData.cardBack || "default";
    };
    CardBack2Trait.prototype.setCurCardBack = function (t) {
        this.localData.cardBack = t;
        UserModel_1.default.getInstance().setCardBackColor(t);
    };
    CardBack2Trait.prototype.switchToNextCardBack = function () {
        var t = this.getCurCardBack();
        if (t && CardBack2Trait_1.CARD_BACKS.includes(t)) {
            this._curCardBackInd = CardBack2Trait_1.CARD_BACKS.indexOf(t);
        }
        else {
            this._curCardBackInd = -1;
        }
        if (this._switchType === CardBack2Trait_1.TYPE_RANDOM) {
            this._curCardBackInd = Math.floor(Math.random() * CardBack2Trait_1.CARD_BACKS.length);
        }
        else {
            this._curCardBackInd = (this._curCardBackInd + 1) % CardBack2Trait_1.CARD_BACKS.length;
        }
        (this._curCardBackInd < 0 || this._curCardBackInd >= CardBack2Trait_1.CARD_BACKS.length) && (this._curCardBackInd = 0);
        this._curCardBack = CardBack2Trait_1.CARD_BACKS[this._curCardBackInd];
        this.setCurCardBack(this._curCardBack);
    };
    CardBack2Trait.prototype.onGsListener_onNewGame = function (t, r) {
        try {
            this.switchToNextCardBack();
            this._switchType, CardBack2Trait_1.TYPE_RANDOM;
            r();
        }
        catch (t) {
            console.error("[" + CardBack2Trait_1.traitKey + "] 切换卡背失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBack2Trait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var e;
        try {
            var i = null === (e = t.args) || void 0 === e ? void 0 : e[0];
            if ("gameplay_img_mj_dn" === i || "gameplay_img_mj_up" === i) {
                var c = this.getCurCardBack();
                if ("default" === c) {
                    r();
                    return;
                }
                var n = "texture/" + c + "/" + i;
                r({
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    isBreak: true,
                    returnVal: {
                        path: n,
                        bundleName: CardBack2Trait_1.BUNDLE_NAME,
                        fromAtlas: false
                    }
                });
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardBack2Trait_1.traitKey + "] 劫持牌背图片失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    CardBack2Trait.prototype.onTileNodeObj_playAnim = function (t, r) {
        var e;
        try {
            if ("spine/rollcard/gameplay_flip" === (null === (e = t.args) || void 0 === e ? void 0 : e[0])) {
                var i = this.getCurCardBack();
                if ("default" === i) {
                    r();
                    return;
                }
                var c = "spine/" + i + "/gameplay_flip";
                t.args[0] = c;
                t.args[6] = CardBack2Trait_1.BUNDLE_NAME;
                r();
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + CardBack2Trait_1.traitKey + "] 劫持翻转光效失败: " + (null == t ? void 0 : t.message));
            r();
        }
    };
    var CardBack2Trait_1;
    CardBack2Trait.traitKey = "CardBack2";
    CardBack2Trait.BUNDLE_NAME = "r_cardBack";
    CardBack2Trait.TYPE_SEQUENTIAL = 1;
    CardBack2Trait.TYPE_RANDOM = 2;
    CardBack2Trait.CARD_BACKS = ["default", "blue", "cyan", "pink", "purple", "red"];
    CardBack2Trait = CardBack2Trait_1 = __decorate([
        mj.trait,
        mj.class("CardBack2Trait")
    ], CardBack2Trait);
    return CardBack2Trait;
}(Trait_1.default));
exports.default = CardBack2Trait;

cc._RF.pop();