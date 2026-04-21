"use strict";
cc._RF.push(module, 'a1f3dzrcRFE27kUbcKkKzOq', 'YogaCardTileNode');
// Scripts/YogaCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.YogaCardTileNode = void 0;
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var TravelGameModel_1 = require("./gamePlay/travel/model/TravelGameModel");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var TileNodeObject_1 = require("./TileNodeObject");
var YogaCardTileNode = /** @class */ (function (_super) {
    __extends(YogaCardTileNode, _super);
    function YogaCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.Yoga;
        return _this;
    }
    YogaCardTileNode.prototype.updateImgCard = function () {
        var e = this.getYogaIcon(), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.imgCard, t, n, false, o);
        this.saveCardUniqueInfo(o, t, n);
    };
    YogaCardTileNode.prototype.getYogaIcon = function () {
        if (this.context.gameCtr.gameType === GameTypeEnums_1.MjGameType.Travel) {
            var e = TravelGameModel_1.default.getInstance().getCurJourney(), t = TravelGameModel_1.default.getInstance().getConfig(e);
            if (t && t.yoga) {
                var o = __read(this.getYogaIconPath(t.yoga), 2), n = o[0];
                return {
                    path: o[1],
                    bundleName: n,
                    fromAtlas: false
                };
            }
        }
        return CardUtil_1.default.getAtlasPathAndBundleName(this.tileObject.resName, this);
    };
    YogaCardTileNode.prototype.getYogaIconPath = function (e) {
        var t = e.split(":");
        return 2 === t.length ? [t[0], "texture/" + t[1]] : ["mainRes", "texture/journey/yoga/" + e];
    };
    YogaCardTileNode.prototype.showSelectEffect = function () {
        if (!this._imgSelected || !this._imgSelected.active) {
            this.imgSelected.active = true;
            this.imgSelectedCardBg.active = true;
            this.effectSelected.active = true;
            this.imgSelected.opacity = 0;
            this.imgSelectedCardBg.opacity = 0;
            this.effectSelected.opacity = 0;
        }
    };
    YogaCardTileNode.prototype.updateImgCardBg = function () {
        this.imgCardBg.active = false;
        this.imgCardBg.opacity = 0;
    };
    YogaCardTileNode.prototype.updateShadowNode = function () {
        this.shadowNode.active = false;
        this.shadowNode.opacity = 0;
    };
    YogaCardTileNode.prototype.updateLockBg = function () {
        this.imgLockBg.getComponent(cc.Sprite) && (this.imgLockBg.getComponent(cc.Sprite).enabled = false);
        this.imgLockBg.active = false;
        this.imgLockBg.opacity = 0;
    };
    return YogaCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.YogaCardTileNode = YogaCardTileNode;

cc._RF.pop();