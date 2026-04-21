"use strict";
cc._RF.push(module, 'e4aa1cmD6lJ0r7sjC13ZJ0X', 'RankCardTileNode');
// Scripts/RankCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RankCardTileNode = void 0;
var BaseSpine_1 = require("./gamePlay/base/ui/BaseSpine");
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var UserModel_1 = require("./gamePlay/user/UserModel");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var TileNodeObject_1 = require("./TileNodeObject");
var RankCardTileNode = /** @class */ (function (_super) {
    __extends(RankCardTileNode, _super);
    function RankCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.RankCard;
        return _this;
    }
    RankCardTileNode.prototype.updateImgCard = function () {
        var e = UserModel_1.default.getInstance().getRankCardResName(), t = CardUtil_1.default.getAtlasPathAndBundleName(e, this), o = t.path, n = t.bundleName, i = t.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.imgCard, o, i, false, n);
        this.saveCardUniqueInfo(n, o, i);
    };
    RankCardTileNode.prototype.updateImgCardBg = function () {
        var e = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_special_mj_2", this), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.imgCardBg, t, n, false, o);
    };
    RankCardTileNode.prototype.updateEffectSelected = function () {
        this._effectSelectedProxy = BaseSpine_1.default.refreshWithNode(this.effectSelected, "spine/rankcard/select/gameplay_selected_special");
    };
    RankCardTileNode.prototype.realShowSelectEffect = function () {
        _super.prototype.realShowSelectEffect.call(this);
        this.imgSelectedCardBg.active = false;
    };
    __decorate([
        mj.traitEvent("RankCardNode_updImgCard")
    ], RankCardTileNode.prototype, "updateImgCard", null);
    return RankCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.RankCardTileNode = RankCardTileNode;

cc._RF.pop();