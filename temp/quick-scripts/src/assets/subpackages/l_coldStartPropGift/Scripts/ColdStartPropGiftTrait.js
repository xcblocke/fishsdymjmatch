"use strict";
cc._RF.push(module, '1ca50P0+9pJMouFEpd730qW', 'ColdStartPropGiftTrait');
// subpackages/l_coldStartPropGift/Scripts/ColdStartPropGiftTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var DGameGetItem_1 = require("../../../Scripts/gamePlay/dot/DGameGetItem");
var IUserData_1 = require("../../../Scripts/user/IUserData");
var ColdStartPropGiftTrait = /** @class */ (function (_super) {
    __extends(ColdStartPropGiftTrait, _super);
    function ColdStartPropGiftTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isColdStart = true;
        return _this;
    }
    ColdStartPropGiftTrait_1 = ColdStartPropGiftTrait;
    ColdStartPropGiftTrait.prototype.onLoad = function () {
        var e, r, o, i, a, n;
        _super.prototype.onLoad.call(this);
        this._config = {
            propId: null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.propId) && void 0 !== r ? r : IUserData_1.EItemType.Hint,
            num: null !== (i = null === (o = this._traitData) || void 0 === o ? void 0 : o.num) && void 0 !== i ? i : 1,
            maxNum: null !== (n = null === (a = this._traitData) || void 0 === a ? void 0 : a.maxNum) && void 0 !== n ? n : 10
        };
        this.localData || (this.localData = {
            num: 0
        });
    };
    ColdStartPropGiftTrait.prototype.onIptSetLv_setData = function (t, e) {
        if (this.isColdStart()) {
            this._isColdStart = false;
            if (this.isNormalMode()) {
                if (this.canGift()) {
                    this.giveProp();
                    e();
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    ColdStartPropGiftTrait.prototype.isColdStart = function () {
        return this._isColdStart;
    };
    ColdStartPropGiftTrait.prototype.isNormalMode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal;
    };
    ColdStartPropGiftTrait.prototype.canGift = function () {
        return this.localData.num < this._config.maxNum;
    };
    ColdStartPropGiftTrait.prototype.giveProp = function () {
        try {
            var t = UserModel_1.default.getInstance().getCurrentGameData(), e = this._config.propId, o = this._config.num, i = void 0, a = void 0, s = void 0;
            if (e === IUserData_1.EItemType.Shuffle) {
                t.changeShuffleNums(o);
                a = t.getShuffleNums();
                i = GameTypeEnums_1.EItemId.Shuffle;
                s = "洗牌道具";
            }
            else {
                if (e !== IUserData_1.EItemType.Hint)
                    return;
                t.changeHitTipsNums(o);
                a = t.getHitTipsNums();
                i = GameTypeEnums_1.EItemId.Hint;
                s = "提示道具";
            }
            DGameGetItem_1.DotGameGetItem.dotGetItem(t, {
                itemId: i,
                number: o,
                afterNum: a,
                reasonId: GameTypeEnums_1.EGetItemReasonId.SystemGift,
                reasonInfo: "冷启动进入主线赠送" + s
            });
            this.localData.num++;
        }
        catch (t) {
            console.error("[" + ColdStartPropGiftTrait_1.traitKey + "] 赠送道具异常: " + t.message);
        }
    };
    var ColdStartPropGiftTrait_1;
    ColdStartPropGiftTrait.traitKey = "ColdStartPropGift";
    ColdStartPropGiftTrait = ColdStartPropGiftTrait_1 = __decorate([
        mj.trait,
        mj.class("ColdStartPropGiftTrait")
    ], ColdStartPropGiftTrait);
    return ColdStartPropGiftTrait;
}(Trait_1.default));
exports.default = ColdStartPropGiftTrait;

cc._RF.pop();