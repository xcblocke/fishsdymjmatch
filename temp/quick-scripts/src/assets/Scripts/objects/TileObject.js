"use strict";
cc._RF.push(module, '2756dpaIzVMMIF4D7Y8TZmN', 'TileObject');
// Scripts/objects/TileObject.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileObject = void 0;
var CardUtil_1 = require("../gamePlay/user/CardUtil");
var GameConstant_1 = require("../core/simulator/constant/GameConstant");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var TileObject = /** @class */ (function () {
    function TileObject(e, t, o, n) {
        if (n === void 0) { n = 0; }
        this._isValid = true;
        this._ownerGridIds = new Array(4);
        this._touchSizeOffsets = [0, 0, 0, 0];
        this._type = TileTypeEnum_1.ETileType.Normal;
        this._typeBits = 0;
        this._originalResId = 0;
        this._generating = false;
        this._positionOffset = cc.v3(0, 0, 0);
        this._isSelect = false;
        this._isHint = false;
        this._batchId = 0;
        this._duoxiaoCount = 0;
        this._isInSlotBar = false;
        this._indexInSlotBar = -1;
        this._isBack = true;
        this._gridPosX = null;
        this._gridPosY = null;
        this._layer = null;
        this._resId = null;
        this._id = null;
        this._tileMapObject = null;
        this._nGridPosIndex = null;
        this._gameContext = null;
        this._cardConfigMap = null;
        this._gridPosX = t.pos.x;
        this._gridPosY = t.pos.y;
        this._layer = t.pos.z;
        this._resId = t.id;
        this._originalResId = this._resId;
        this._id = e;
        this._batchId = n;
        this._tileMapObject = o;
        this._ownerGridIds = new Array(4);
        this._nGridPosIndex = t.pos.y * GameConstant_1.default.MaxTileCountX * 2 + t.pos.x;
        this.checkCardPosInvaild(t.pos.y, t.pos.x);
        this._ownerGridIds[0] = this._nGridPosIndex;
        this._ownerGridIds[1] = this._nGridPosIndex + 1;
        this._ownerGridIds[2] = this._nGridPosIndex + 2 * GameConstant_1.default.MaxTileCountX;
        this._ownerGridIds[3] = this._nGridPosIndex + 2 * GameConstant_1.default.MaxTileCountX + 1;
    }
    Object.defineProperty(TileObject.prototype, "generating", {
        get: function () {
            return this._generating;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "originalResId", {
        get: function () {
            return this._originalResId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "showType", {
        get: function () {
            switch (this.type) {
                case TileTypeEnum_1.ETileType.Normal:
                    return TileTypeEnum_1.ETileNodeShowType.Normal;
                case TileTypeEnum_1.ETileType.Bomb:
                    return TileTypeEnum_1.ETileNodeShowType.Bomb;
                case TileTypeEnum_1.ETileType.Yoga:
                    return TileTypeEnum_1.ETileNodeShowType.Yoga;
                case TileTypeEnum_1.ETileType.RankCard:
                    return TileTypeEnum_1.ETileNodeShowType.RankCard;
                case TileTypeEnum_1.ETileType.ColorCard:
                    return TileTypeEnum_1.ETileNodeShowType.ColorCard;
                case TileTypeEnum_1.ETileType.RollCard:
                    return TileTypeEnum_1.ETileNodeShowType.RollCard;
                case TileTypeEnum_1.ETileType.DaxiaoCard:
                    return TileTypeEnum_1.ETileNodeShowType.DaxiaoCard;
                case TileTypeEnum_1.ETileType.DuoxiaoCard:
                    return TileTypeEnum_1.ETileNodeShowType.DuoxiaoCard;
                default:
                    return TileTypeEnum_1.ETileNodeShowType.Normal;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "type", {
        get: function () {
            return this.resId === GameTypeEnums_1.ResId.emBombCardId ? TileTypeEnum_1.ETileType.Bomb : this.resId === GameTypeEnums_1.ResId.emYogaCardId ? TileTypeEnum_1.ETileType.Yoga : this.resId === GameTypeEnums_1.ResId.emRankId ? TileTypeEnum_1.ETileType.RankCard : this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "layer", {
        get: function () {
            return this._layer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "tileMapObject", {
        get: function () {
            return this._tileMapObject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "positionOffset", {
        get: function () {
            return this._positionOffset;
        },
        set: function (e) {
            this._positionOffset = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "cardLayoutConfig", {
        get: function () {
            return this._gameContext.getCardLayoutConfig();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "layoutScale", {
        get: function () {
            return this._gameContext.getLayoutScale();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "gridPosX", {
        get: function () {
            return this._gridPosX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "gridPosY", {
        get: function () {
            return this._gridPosY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "gridZIndex", {
        get: function () {
            var e = (this._gridPosX + 2 * this._gridPosY) * GameConstant_1.default.MaxTileCountX * 2 + this._gridPosX;
            return 100 * this._layer + e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "resId", {
        get: function () {
            return this._resId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "cardId", {
        get: function () {
            return CardUtil_1.default.getByKey(this._resId).cardId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "originalCardId", {
        get: function () {
            return CardUtil_1.default.getByKey(this._originalResId).cardId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "resName", {
        get: function () {
            var e = CardUtil_1.default.getByKey(this._resId);
            return e ? e.resName : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "ownerGridIds", {
        get: function () {
            return this._ownerGridIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "isValid", {
        get: function () {
            return this._isValid;
        },
        set: function (e) {
            this._isValid = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "isSelect", {
        get: function () {
            return this._isSelect;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "isHint", {
        get: function () {
            return this._isHint;
        },
        set: function (e) {
            this._isHint = e;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "batchId", {
        get: function () {
            return this._batchId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "pos", {
        get: function () {
            return new cc.Vec3(this._gridPosX, this._gridPosY, this._layer);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileObject.prototype, "typeBits", {
        get: function () {
            return this._typeBits;
        },
        enumerable: false,
        configurable: true
    });
    TileObject._typeToBit = function (e) {
        switch (e) {
            case TileTypeEnum_1.ETileType.Normal:
                return TileTypeEnum_1.ETileTypeBit.Normal;
            case TileTypeEnum_1.ETileType.RollCard:
                return TileTypeEnum_1.ETileTypeBit.RollCard;
            case TileTypeEnum_1.ETileType.Bomb:
                return TileTypeEnum_1.ETileTypeBit.Bomb;
            case TileTypeEnum_1.ETileType.Yoga:
                return TileTypeEnum_1.ETileTypeBit.Yoga;
            case TileTypeEnum_1.ETileType.ColorCard:
                return TileTypeEnum_1.ETileTypeBit.ColorCard;
            case TileTypeEnum_1.ETileType.RankCard:
                return TileTypeEnum_1.ETileTypeBit.RankCard;
            case TileTypeEnum_1.ETileType.DaxiaoCard:
                return TileTypeEnum_1.ETileTypeBit.DaxiaoCard;
            case TileTypeEnum_1.ETileType.DuoxiaoCard:
                return TileTypeEnum_1.ETileTypeBit.DuoxiaoCard;
            default:
                return TileTypeEnum_1.ETileTypeBit.Normal;
        }
    };
    TileObject._typeToComponentKey = function (e) {
        switch (e) {
            case TileTypeEnum_1.ETileType.RollCard:
                return TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard;
            case TileTypeEnum_1.ETileType.Bomb:
                return TileTypeEnum_1.ETileComponent.Tile2ComponentBomb;
            case TileTypeEnum_1.ETileType.ColorCard:
                return TileTypeEnum_1.ETileComponent.Tile2ComponentColor;
            case TileTypeEnum_1.ETileType.RankCard:
                return TileTypeEnum_1.ETileComponent.Tile2ComponentRank;
            case TileTypeEnum_1.ETileType.Yoga:
                return TileTypeEnum_1.ETileComponent.Tile2ComponentYoga;
            case TileTypeEnum_1.ETileType.DaxiaoCard:
                return TileTypeEnum_1.ETileComponent.Tile2ComponentDaxiao;
            case TileTypeEnum_1.ETileType.DuoxiaoCard:
                return TileTypeEnum_1.ETileComponent.Tile2ComponentDuoxiao;
            default:
                return null;
        }
    };
    TileObject.prototype.setLayer = function (e) {
        this._layer = e;
    };
    TileObject.prototype.init = function (e, t) {
        this._gameContext = e;
        this._cardConfigMap = t;
        this.onTile2SetResId();
    };
    TileObject.prototype.checkCardPosInvaild = function (e, t) {
        (t < 0 || t >= 2 * GameConstant_1.default.MaxTileCountX || e < 0 || e >= 2 * GameConstant_1.default.MaxTileCountY) && (this._isValid = false);
    };
    TileObject.prototype.gardIdToTbId = function () {
        return this._resId;
    };
    TileObject.prototype.getContentSize = function () {
        var e = this.cardLayoutConfig, t = this.layoutScale;
        return new cc.Size(e.cardSize[0] * t, e.cardSize[1] * t);
    };
    TileObject.prototype.getTouchSizeOffsets = function () {
        return this._touchSizeOffsets;
    };
    TileObject.prototype.setTouchSizeOffsets = function (e) {
        this._touchSizeOffsets = e;
    };
    TileObject.prototype.setOriginalResId = function (e) {
        this._originalResId = e;
    };
    TileObject.prototype.refreshOwnerGridIds = function (e, t, o) {
        this._gridPosX = e;
        this._gridPosY = t;
        this._layer = o;
        var n = this._gridPosY * GameConstant_1.default.MaxTileCountX * 2 + this._gridPosX;
        this._nGridPosIndex = n;
        this._ownerGridIds[0] = n;
        this._ownerGridIds[1] = n + 1;
        this._ownerGridIds[2] = n + 2 * GameConstant_1.default.MaxTileCountX;
        this._ownerGridIds[3] = n + 2 * GameConstant_1.default.MaxTileCountX + 1;
    };
    TileObject.prototype.getShadowContentSize = function () {
        var e = this.cardLayoutConfig, t = this.layoutScale;
        return 0 == this.layer ? new cc.Size(e.shadowSize[0] * t, e.shadowSize[1] * t) : new cc.Size(e.shadowSizeUp[0] * t, e.shadowSizeUp[1] * t);
    };
    TileObject.prototype.getBgContentSize = function () {
        var e = this.cardLayoutConfig, t = this.layoutScale;
        return new cc.Size(e.cardSize[0] * t, e.cardSize[1] * t);
    };
    TileObject.prototype.getSelectContentSize = function () {
        var e = this.cardLayoutConfig, t = this.layoutScale;
        return new cc.Size(e.selectImgSize[0] * t, e.selectImgSize[1] * t);
    };
    TileObject.prototype.getPosition = function (e) {
        if (e === void 0) { e = false; }
        var t = this.cardLayoutConfig, o = this.layoutScale, n = 0.5 * this.gridPosX * (t.cardSize[0] + t.cardSpace[0]) * o - this.layer * t.cardSizeRight * o, i = 0.5 * this.gridPosY * (t.cardSize[1] + t.cardSpace[1]) * o - this.layer * t.cardSizeBottom * o;
        if (e)
            return new cc.Vec3(n, -i, 0);
        var r = this.positionOffset;
        return new cc.Vec3(n + r.x, -i + r.y, 0);
    };
    TileObject.prototype.getShadowPosition = function () {
        return this.getPosition();
    };
    TileObject.prototype.getShadowCenterPosition = function () {
        var e = this.getPosition(), t = this.cardLayoutConfig, o = this.layoutScale, n = this.getShadowContentSize(), i = e.x + 0.5 * -t.cardSize[0] * o, r = e.y + 0.5 * t.cardSize[1] * o;
        i += 0.5 * n.width;
        r -= 0.5 * n.height;
        return new cc.Vec3(i, r, 0);
    };
    TileObject.prototype.getBgPosition = function () {
        var e = this.cardLayoutConfig, t = this.layoutScale, o = 0.5 * -e.cardSize[0] * t, n = 0.5 * e.cardSize[1] * t;
        return new cc.Vec3(o, n, 0);
    };
    TileObject.prototype.getCardContentSize = function () {
        var e = this.cardLayoutConfig, t = this.layoutScale;
        return new cc.Size(e.cardSize[0] * t, e.cardSize[1] * t);
    };
    TileObject.prototype.getCardPosition = function () {
        var e = this.cardLayoutConfig, t = this.layoutScale, o = 0.5 * -e.cardSize[0] * t, n = 0.5 * e.cardSize[1] * t;
        return new cc.Vec3(o, n, 0);
    };
    TileObject.prototype.getMaskPosition = function () {
        var e = this.cardLayoutConfig, t = this.layoutScale, o = 0.5 * -e.cardSize[0] * t, n = 0.5 * e.cardSize[1] * t;
        return new cc.Vec3(o, n, 0);
    };
    TileObject.prototype.getSelectEffectPosition = function () {
        return new cc.Vec3(0, 0, 0);
    };
    TileObject.prototype.getHintEffectPosition = function () {
        return new cc.Vec3(0, 0, 0);
    };
    TileObject.prototype.isHasLeft = function () {
        return this.gridIndex2PosX(this._ownerGridIds[0]) > 0 && (this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[0] - 1) || this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[2] - 1));
    };
    TileObject.prototype.isHasRight = function () {
        return this.gridIndex2PosX(this._ownerGridIds[1]) < 2 * GameConstant_1.default.MaxTileCountX - 1 && (this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[1] + 1) || this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[3] + 1));
    };
    TileObject.prototype.isHasUp = function () {
        var e = false, t = false;
        this.gridIndex2PosY(this._ownerGridIds[0] - 2 * GameConstant_1.default.MaxTileCountX) > 0 && (e = this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[0] - 2 * GameConstant_1.default.MaxTileCountX));
        this.gridIndex2PosY(this._ownerGridIds[1] - 2 * GameConstant_1.default.MaxTileCountX) > 0 && (t = this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[1] - 2 * GameConstant_1.default.MaxTileCountX));
        return e || t;
    };
    TileObject.prototype.isHasDown = function () {
        var e = false, t = false;
        this.gridIndex2PosY(this._ownerGridIds[2] + 2 * GameConstant_1.default.MaxTileCountX) < 2 * GameConstant_1.default.MaxTileCountY - 1 && (e = this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[2] + 2 * GameConstant_1.default.MaxTileCountX));
        this.gridIndex2PosY(this._ownerGridIds[3] + 2 * GameConstant_1.default.MaxTileCountX) < 2 * GameConstant_1.default.MaxTileCountY - 1 && (t = this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[3] + 2 * GameConstant_1.default.MaxTileCountX));
        return e || t;
    };
    TileObject.prototype.gridIndex2PosX = function (e) {
        return e % (2 * GameConstant_1.default.MaxTileCountX);
    };
    TileObject.prototype.gridIndex2PosY = function (e) {
        return Math.floor(e / (2 * GameConstant_1.default.MaxTileCountX));
    };
    TileObject.prototype.changeResId = function (e) {
        this._resId = e;
        this.onTile2SetResId();
    };
    TileObject.prototype.isCardLock = function () {
        return this.tileMapObject.isCardLock(this);
    };
    TileObject.prototype.updateTouchSizeOffsets = function (e) {
        e && 4 === e.length && (this._touchSizeOffsets = e);
    };
    TileObject.prototype.getSelectOffsetX = function () {
        var t = 0;
        if (this.isHasLeft()) {
            t = 1;
        }
        else {
            this.isHasRight() && (t = -1);
        }
        return TileObject.SELECT_OFFSET_X * t;
    };
    TileObject.prototype.getSelectScale = function () {
        var e = mj.getClassByName("SelectScaleTrait");
        return e && e.getInstance() && true === e.getInstance().eventEnabled ? e.getInstance().getSelectScale() : 1;
    };
    TileObject.prototype.getDuoxiaoCount = function () {
        return this.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) ? this._duoxiaoCount : 0;
    };
    TileObject.prototype.setDuoxiaoCount = function (e) {
        this._duoxiaoCount = e;
    };
    TileObject.prototype.toKey = function () {
        return this.gridPosX + "-" + this.gridPosY + "-" + this.layer + "-" + this.cardId + "-" + this.resId;
    };
    TileObject.prototype.saveKey = function () {
        return this.gridPosX + "-" + this.gridPosY + "-" + this.layer;
    };
    TileObject.prototype.addToSlotBar = function (e) {
        this._isInSlotBar = true;
        this._indexInSlotBar = e;
    };
    TileObject.prototype.changeSlotBarIndex = function (e) {
        null != e && e >= 0 && (this._indexInSlotBar = e);
    };
    TileObject.prototype.removeFromSlotBar = function () {
        this._isInSlotBar = false;
    };
    TileObject.prototype.getIndexInSlotBar = function () {
        return this._indexInSlotBar;
    };
    TileObject.prototype.getIsInSlotBar = function () {
        return this._isInSlotBar;
    };
    TileObject.prototype.getScaleInSlotBar = function () {
        var e = this.cardLayoutConfig, t = this.layoutScale, o = e.cardSize[0] + e.cardSpace[0];
        return this.getWidthInSlotBar() / (o * t);
    };
    TileObject.prototype.getWidthInSlotBar = function () {
        var e = this.cardLayoutConfig, t = e.cardSize[0] + e.cardSpace[0];
        return this._gameContext.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot4 ? 0.75 * t : 0.77 * t;
    };
    TileObject.prototype.setIsBack = function (e) {
        this._isBack = e;
    };
    TileObject.prototype.getIsBack = function () {
        return this._isBack;
    };
    TileObject.prototype.isHasRollCard = function () {
        return this.getComponets().includes(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard);
    };
    TileObject.prototype.addTypeBit = function (t) {
        var o = TileObject._typeToBit(t);
        0 !== o && (this._typeBits |= o);
    };
    TileObject.prototype.removeTypeBit = function (t) {
        this._typeBits &= ~TileObject._typeToBit(t);
    };
    TileObject.prototype.checkIsNormal = function () {
        var e;
        return (null === (e = this._gameContext) || void 0 === e ? void 0 : e.gameType) !== GameTypeEnums_1.MjGameType.Tile2Normal ? this.type === TileTypeEnum_1.ETileType.Normal : 0 === this._typeBits;
    };
    TileObject.prototype.checkHasType = function (t) {
        return this._gameContext.gameType !== GameTypeEnums_1.MjGameType.Tile2Normal ? this.type === t : 0 != (this._typeBits & TileObject._typeToBit(t));
    };
    TileObject.prototype.getComponets = function () {
        var e = [];
        this.checkHasType(TileTypeEnum_1.ETileType.RollCard) && e.push(TileTypeEnum_1.ETileComponent.Tile2ComponentRollCard);
        this.checkHasType(TileTypeEnum_1.ETileType.Bomb) && e.push(TileTypeEnum_1.ETileComponent.Tile2ComponentBomb);
        this.checkHasType(TileTypeEnum_1.ETileType.ColorCard) && e.push(TileTypeEnum_1.ETileComponent.Tile2ComponentColor);
        this.checkHasType(TileTypeEnum_1.ETileType.RankCard) && e.push(TileTypeEnum_1.ETileComponent.Tile2ComponentRank);
        this.checkHasType(TileTypeEnum_1.ETileType.Yoga) && e.push(TileTypeEnum_1.ETileComponent.Tile2ComponentYoga);
        this.checkHasType(TileTypeEnum_1.ETileType.DaxiaoCard) && e.push(TileTypeEnum_1.ETileComponent.Tile2ComponentDaxiao);
        this.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) && e.push(TileTypeEnum_1.ETileComponent.Tile2ComponentDuoxiao);
        return e;
    };
    TileObject.prototype.getTypeBits = function () {
        return this._typeBits;
    };
    TileObject.prototype.setTypeBits = function (e) {
        if (null != e) {
            this._typeBits = e;
            this._type = this.getTypeFromBits(e);
        }
    };
    TileObject.prototype.getTypeFromBits = function () {
        return this.checkHasType(TileTypeEnum_1.ETileType.Bomb) ? TileTypeEnum_1.ETileType.Bomb : this.checkHasType(TileTypeEnum_1.ETileType.ColorCard) ? TileTypeEnum_1.ETileType.ColorCard : this.checkHasType(TileTypeEnum_1.ETileType.RankCard) ? TileTypeEnum_1.ETileType.RankCard : this.checkHasType(TileTypeEnum_1.ETileType.Yoga) ? TileTypeEnum_1.ETileType.Yoga : this.checkHasType(TileTypeEnum_1.ETileType.DaxiaoCard) ? TileTypeEnum_1.ETileType.DaxiaoCard : this.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) ? TileTypeEnum_1.ETileType.DuoxiaoCard : this.checkHasType(TileTypeEnum_1.ETileType.RollCard) ? TileTypeEnum_1.ETileType.RollCard : TileTypeEnum_1.ETileType.Normal;
    };
    TileObject.prototype.getExtraInfo = function () {
        if (this.checkIsNormal())
            return null;
        var e = {
            typeBits: this.typeBits
        };
        this.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) && (e.duoxiaoCount = this.getDuoxiaoCount());
        return e;
    };
    TileObject.prototype.setExtraInfo = function (e) {
        if (null != e.typeBits && null != e.typeBits) {
            this.setTypeBits(e.typeBits);
            this.checkHasType(TileTypeEnum_1.ETileType.DuoxiaoCard) && this.setDuoxiaoCount(e.duoxiaoCount || 0);
        }
    };
    TileObject.prototype.onTile2SetResId = function () {
        if (this._gameContext.gameType === GameTypeEnums_1.MjGameType.Tile2Normal) {
            this.resId == GameTypeEnums_1.ResId.emBombCardId && this.addTypeBit(TileTypeEnum_1.ETileType.Bomb);
            this.resId == GameTypeEnums_1.ResId.emYogaCardId && this.addTypeBit(TileTypeEnum_1.ETileType.Yoga);
            this.resId == GameTypeEnums_1.ResId.emRankId && this.addTypeBit(TileTypeEnum_1.ETileType.RankCard);
        }
    };
    TileObject.SELECT_OFFSET_X = 30;
    return TileObject;
}());
exports.TileObject = TileObject;

cc._RF.pop();