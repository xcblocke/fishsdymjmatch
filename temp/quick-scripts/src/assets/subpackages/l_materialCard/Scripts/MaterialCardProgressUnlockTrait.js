"use strict";
cc._RF.push(module, 'a5a55G4hJxNx5/thM5GJhjp', 'MaterialCardProgressUnlockTrait');
// subpackages/l_materialCard/Scripts/MaterialCardProgressUnlockTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var MaterialCardBaseTrait_1 = require("./MaterialCardBaseTrait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var MaterialCardProgressUnlockTrait = /** @class */ (function (_super) {
    __extends(MaterialCardProgressUnlockTrait, _super);
    function MaterialCardProgressUnlockTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._startLevel = 30;
        _this._initialUnlock = 2;
        _this._unlockInterval = 10;
        return _this;
    }
    MaterialCardProgressUnlockTrait_1 = MaterialCardProgressUnlockTrait;
    MaterialCardProgressUnlockTrait.prototype.onLoad = function () {
        var e, r, a, i, o, l;
        _super.prototype.onLoad.call(this);
        this._initData();
        this._startLevel = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.startLevel) && void 0 !== r ? r : 30;
        this._initialUnlock = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.initialUnlock) && void 0 !== i ? i : 2;
        this._unlockInterval = null !== (l = null === (o = this._traitData) || void 0 === o ? void 0 : o.unlockInterval) && void 0 !== l ? l : 10;
    };
    MaterialCardProgressUnlockTrait.prototype._initData = function () {
        this.isLocalEmpty(this.localData.sequenceIndex) && (this.localData.sequenceIndex = 0);
    };
    MaterialCardProgressUnlockTrait.prototype.setCurMaterialCard = function (t) {
        var e = UserModel_1.default.getInstance();
        e.normalData.setCardMaterialID(t);
        e.travelData.setCardMaterialID(t);
        e.dailyChallengeData.setCardMaterialID(t);
    };
    MaterialCardProgressUnlockTrait.prototype._getMaterialUnlockOrder = function () {
        return MaterialCardBaseTrait_1.default.MATERIAL_CARD_LIST.filter(function (t) {
            return 0 !== t.id;
        }).map(function (t) {
            return t.id;
        });
    };
    MaterialCardProgressUnlockTrait.prototype._getUnlockedCount = function (t) {
        if (t < this._startLevel)
            return 0;
        var e = Math.floor((t - this._startLevel) / this._unlockInterval), r = this._initialUnlock + e, a = this._getMaterialUnlockOrder().length;
        return Math.min(r, a);
    };
    MaterialCardProgressUnlockTrait.prototype._getUnlockedAvailableMaterials = function (t) {
        var e = this._getMaterialUnlockOrder(), r = this._getUnlockedCount(t);
        if (0 === r)
            return [];
        var a = e.slice(0, r), i = new Set(this.getAvailableMaterials());
        return a.filter(function (t) {
            return i.has(t);
        });
    };
    MaterialCardProgressUnlockTrait.prototype._switchSequential = function (t) {
        var e, r = this._getUnlockedAvailableMaterials(t);
        if (0 !== r.length) {
            var a = null !== (e = this.localData.sequenceIndex) && void 0 !== e ? e : 0, i = r[a % r.length];
            this.getCurMaterialCard();
            this.setCurMaterialCard(i);
            this.localData.sequenceIndex = a + 1;
        }
    };
    MaterialCardProgressUnlockTrait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (this.isClassicMode()) {
                e();
                return;
            }
            var a = this.getCurrentLevel();
            if (a < this._startLevel) {
                e();
                return;
            }
            this._getUnlockedCount(a);
            this._switchSequential(a);
            e();
        }
        catch (t) {
            console.error("[" + MaterialCardProgressUnlockTrait_1.traitKey + "] 处理新游戏事件失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    var MaterialCardProgressUnlockTrait_1;
    MaterialCardProgressUnlockTrait.traitKey = "MaterialCardProgressUnlock";
    MaterialCardProgressUnlockTrait = MaterialCardProgressUnlockTrait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCardProgressUnlockTrait")
    ], MaterialCardProgressUnlockTrait);
    return MaterialCardProgressUnlockTrait;
}(MaterialCardBaseTrait_1.default));
exports.default = MaterialCardProgressUnlockTrait;

cc._RF.pop();