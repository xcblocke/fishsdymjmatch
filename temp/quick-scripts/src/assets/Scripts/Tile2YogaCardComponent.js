"use strict";
cc._RF.push(module, '68df7lyet5NorcmGwuRkD+b', 'Tile2YogaCardComponent');
// Scripts/Tile2YogaCardComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2YogaCardComponent = void 0;
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var TravelGameModel_1 = require("./gamePlay/travel/model/TravelGameModel");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2YogaCardComponent = /** @class */ (function (_super) {
    __extends(Tile2YogaCardComponent, _super);
    function Tile2YogaCardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2YogaCardComponent.prototype.onUpdateImgCard = function () {
        var e = this._getYogaIcon(), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._host.imgCard, t, n, false, o);
        this._host.saveCardUniqueInfo(o, t, n);
        return true;
    };
    Tile2YogaCardComponent.prototype.onUpdateImgCardBg = function () {
        this._host.imgCardBg.active = false;
        this._host.imgCardBg.opacity = 0;
        return true;
    };
    Tile2YogaCardComponent.prototype.onUpdateShadowNode = function () {
        this._host.shadowNode.active = false;
        this._host.shadowNode.opacity = 0;
        return true;
    };
    Tile2YogaCardComponent.prototype.onUpdateLockBg = function () {
        var e = this._host.imgLockBg, t = null == e ? void 0 : e.getComponent(cc.Sprite);
        t && (t.enabled = false);
        if (e) {
            e.active = false;
            e.opacity = 0;
        }
        return true;
    };
    Tile2YogaCardComponent.prototype.onShowSelectEffect = function () {
        var e = this._host;
        if (e._imgSelected && e._imgSelected.active)
            return true;
        e.imgSelected.active = true;
        e.imgSelectedCardBg.active = true;
        e.effectSelected.active = true;
        e.imgSelected.opacity = 0;
        e.imgSelectedCardBg.opacity = 0;
        e.effectSelected.opacity = 0;
        return true;
    };
    Tile2YogaCardComponent.prototype._getYogaIcon = function () {
        var e, t;
        if ((null === (t = null === (e = this._host.context) || void 0 === e ? void 0 : e.gameCtr) || void 0 === t ? void 0 : t.gameType) === GameTypeEnums_1.MjGameType.Travel) {
            var o = TravelGameModel_1.default.getInstance().getCurJourney(), n = TravelGameModel_1.default.getInstance().getConfig(o);
            if (null == n ? void 0 : n.yoga)
                return {
                    path: "texture/journey/yoga/" + n.yoga,
                    bundleName: "mainRes",
                    fromAtlas: false
                };
        }
        return CardUtil_1.default.getAtlasPathAndBundleName(this._host.tileObject.resName, this._host);
    };
    return Tile2YogaCardComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2YogaCardComponent = Tile2YogaCardComponent;

cc._RF.pop();