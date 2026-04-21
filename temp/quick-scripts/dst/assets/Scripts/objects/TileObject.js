
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/objects/TileObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL29iamVjdHMvVGlsZU9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFpRDtBQUNqRCx3RUFBbUU7QUFDbkUsMEVBQTZGO0FBQzdGLG1FQUFnSDtBQUNoSDtJQWdJRSxvQkFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFLO1FBQUwsa0JBQUEsRUFBQSxLQUFLO1FBL0gxQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0Isc0JBQWlCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxVQUFLLEdBQUcsd0JBQVMsQ0FBQyxNQUFNLENBQUM7UUFDekIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2Isa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsb0JBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNyQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsUUFBRyxHQUFHLElBQUksQ0FBQztRQUNYLG1CQUFjLEdBQUcsSUFBSSxDQUFD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QUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzTyxDQUFDO0lBQ0QsNEJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxHQUFHLEtBQUssRUFDWCxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxzQkFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLHNCQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUMzTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLHNCQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsc0JBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBQ0QsOEJBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxHQUFHLEtBQUssRUFDWCxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENB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QUMsUUFBUSxLQUFLLDBCQUFVLENBQUMsV0FBVyxFQUFFO1lBQ3pELElBQUksQ0FBQyxLQUFLLElBQUkscUJBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxLQUFLLElBQUkscUJBQUssQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxLQUFLLElBQUkscUJBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQztJQXphTSwwQkFBZSxHQUFHLEVBQUUsQ0FBQztJQTBhOUIsaUJBQUM7Q0FuY0QsQUFtY0MsSUFBQTtBQW5jWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCBHYW1lQ29uc3RhbnQgZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUNvbnN0YW50JztcbmltcG9ydCB7IFJlc0lkLCBFVGlsZTJTbG90VHlwZSwgTWpHYW1lVHlwZSB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRVRpbGVUeXBlLCBFVGlsZU5vZGVTaG93VHlwZSwgRVRpbGVDb21wb25lbnQsIEVUaWxlVHlwZUJpdCB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9UaWxlVHlwZUVudW0nO1xuZXhwb3J0IGNsYXNzIFRpbGVPYmplY3Qge1xuICBfaXNWYWxpZCA9IHRydWU7XG4gIF9vd25lckdyaWRJZHMgPSBuZXcgQXJyYXkoNCk7XG4gIF90b3VjaFNpemVPZmZzZXRzID0gWzAsIDAsIDAsIDBdO1xuICBfdHlwZSA9IEVUaWxlVHlwZS5Ob3JtYWw7XG4gIF90eXBlQml0cyA9IDA7XG4gIF9vcmlnaW5hbFJlc0lkID0gMDtcbiAgX2dlbmVyYXRpbmcgPSBmYWxzZTtcbiAgX3Bvc2l0aW9uT2Zmc2V0ID0gY2MudjMoMCwgMCwgMCk7XG4gIF9pc1NlbGVjdCA9IGZhbHNlO1xuICBfaXNIaW50ID0gZmFsc2U7XG4gIF9iYXRjaElkID0gMDtcbiAgX2R1b3hpYW9Db3VudCA9IDA7XG4gIF9pc0luU2xvdEJhciA9IGZhbHNlO1xuICBfaW5kZXhJblNsb3RCYXIgPSAtMTtcbiAgX2lzQmFjayA9IHRydWU7XG4gIF9ncmlkUG9zWCA9IG51bGw7XG4gIF9ncmlkUG9zWSA9IG51bGw7XG4gIF9sYXllciA9IG51bGw7XG4gIF9yZXNJZCA9IG51bGw7XG4gIF9pZCA9IG51bGw7XG4gIF90aWxlTWFwT2JqZWN0ID0gbnVsbDtcbiAgX25HcmlkUG9zSW5kZXggPSBudWxsO1xuICBfZ2FtZUNvbnRleHQgPSBudWxsO1xuICBfY2FyZENvbmZpZ01hcCA9IG51bGw7XG4gIHN0YXRpYyBTRUxFQ1RfT0ZGU0VUX1ggPSAzMDtcbiAgZ2V0IGdlbmVyYXRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlbmVyYXRpbmc7XG4gIH1cbiAgZ2V0IG9yaWdpbmFsUmVzSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29yaWdpbmFsUmVzSWQ7XG4gIH1cbiAgZ2V0IHNob3dUeXBlKCkge1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlIEVUaWxlVHlwZS5Ob3JtYWw6XG4gICAgICAgIHJldHVybiBFVGlsZU5vZGVTaG93VHlwZS5Ob3JtYWw7XG4gICAgICBjYXNlIEVUaWxlVHlwZS5Cb21iOlxuICAgICAgICByZXR1cm4gRVRpbGVOb2RlU2hvd1R5cGUuQm9tYjtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLllvZ2E6XG4gICAgICAgIHJldHVybiBFVGlsZU5vZGVTaG93VHlwZS5Zb2dhO1xuICAgICAgY2FzZSBFVGlsZVR5cGUuUmFua0NhcmQ6XG4gICAgICAgIHJldHVybiBFVGlsZU5vZGVTaG93VHlwZS5SYW5rQ2FyZDtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLkNvbG9yQ2FyZDpcbiAgICAgICAgcmV0dXJuIEVUaWxlTm9kZVNob3dUeXBlLkNvbG9yQ2FyZDtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLlJvbGxDYXJkOlxuICAgICAgICByZXR1cm4gRVRpbGVOb2RlU2hvd1R5cGUuUm9sbENhcmQ7XG4gICAgICBjYXNlIEVUaWxlVHlwZS5EYXhpYW9DYXJkOlxuICAgICAgICByZXR1cm4gRVRpbGVOb2RlU2hvd1R5cGUuRGF4aWFvQ2FyZDtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLkR1b3hpYW9DYXJkOlxuICAgICAgICByZXR1cm4gRVRpbGVOb2RlU2hvd1R5cGUuRHVveGlhb0NhcmQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gRVRpbGVOb2RlU2hvd1R5cGUuTm9ybWFsO1xuICAgIH1cbiAgfVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNJZCA9PT0gUmVzSWQuZW1Cb21iQ2FyZElkID8gRVRpbGVUeXBlLkJvbWIgOiB0aGlzLnJlc0lkID09PSBSZXNJZC5lbVlvZ2FDYXJkSWQgPyBFVGlsZVR5cGUuWW9nYSA6IHRoaXMucmVzSWQgPT09IFJlc0lkLmVtUmFua0lkID8gRVRpbGVUeXBlLlJhbmtDYXJkIDogdGhpcy5fdHlwZTtcbiAgfVxuICBnZXQgbGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xheWVyO1xuICB9XG4gIGdldCB0aWxlTWFwT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl90aWxlTWFwT2JqZWN0O1xuICB9XG4gIGdldCBwb3NpdGlvbk9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcG9zaXRpb25PZmZzZXQ7XG4gIH1cbiAgc2V0IHBvc2l0aW9uT2Zmc2V0KGUpIHtcbiAgICB0aGlzLl9wb3NpdGlvbk9mZnNldCA9IGU7XG4gIH1cbiAgZ2V0IGNhcmRMYXlvdXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LmdldENhcmRMYXlvdXRDb25maWcoKTtcbiAgfVxuICBnZXQgbGF5b3V0U2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LmdldExheW91dFNjYWxlKCk7XG4gIH1cbiAgZ2V0IGdyaWRQb3NYKCkge1xuICAgIHJldHVybiB0aGlzLl9ncmlkUG9zWDtcbiAgfVxuICBnZXQgZ3JpZFBvc1koKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dyaWRQb3NZO1xuICB9XG4gIGdldCBncmlkWkluZGV4KCkge1xuICAgIHZhciBlID0gKHRoaXMuX2dyaWRQb3NYICsgMiAqIHRoaXMuX2dyaWRQb3NZKSAqIEdhbWVDb25zdGFudC5NYXhUaWxlQ291bnRYICogMiArIHRoaXMuX2dyaWRQb3NYO1xuICAgIHJldHVybiAxMDAgKiB0aGlzLl9sYXllciArIGU7XG4gIH1cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuICBnZXQgcmVzSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc0lkO1xuICB9XG4gIGdldCBjYXJkSWQoKSB7XG4gICAgcmV0dXJuIENhcmRVdGlsLmdldEJ5S2V5KHRoaXMuX3Jlc0lkKS5jYXJkSWQ7XG4gIH1cbiAgZ2V0IG9yaWdpbmFsQ2FyZElkKCkge1xuICAgIHJldHVybiBDYXJkVXRpbC5nZXRCeUtleSh0aGlzLl9vcmlnaW5hbFJlc0lkKS5jYXJkSWQ7XG4gIH1cbiAgZ2V0IHJlc05hbWUoKSB7XG4gICAgdmFyIGUgPSBDYXJkVXRpbC5nZXRCeUtleSh0aGlzLl9yZXNJZCk7XG4gICAgcmV0dXJuIGUgPyBlLnJlc05hbWUgOiBudWxsO1xuICB9XG4gIGdldCBvd25lckdyaWRJZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX293bmVyR3JpZElkcztcbiAgfVxuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNWYWxpZDtcbiAgfVxuICBzZXQgaXNWYWxpZChlKSB7XG4gICAgdGhpcy5faXNWYWxpZCA9IGU7XG4gIH1cbiAgZ2V0IGlzU2VsZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdDtcbiAgfVxuICBnZXQgaXNIaW50KCkge1xuICAgIHJldHVybiB0aGlzLl9pc0hpbnQ7XG4gIH1cbiAgc2V0IGlzSGludChlKSB7XG4gICAgdGhpcy5faXNIaW50ID0gZTtcbiAgfVxuICBnZXQgYmF0Y2hJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmF0Y2hJZDtcbiAgfVxuICBnZXQgcG9zKCkge1xuICAgIHJldHVybiBuZXcgY2MuVmVjMyh0aGlzLl9ncmlkUG9zWCwgdGhpcy5fZ3JpZFBvc1ksIHRoaXMuX2xheWVyKTtcbiAgfVxuICBnZXQgdHlwZUJpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGVCaXRzO1xuICB9XG4gIGNvbnN0cnVjdG9yKGUsIHQsIG8sIG4gPSAwKSB7XG4gICAgdGhpcy5fZ3JpZFBvc1ggPSB0LnBvcy54O1xuICAgIHRoaXMuX2dyaWRQb3NZID0gdC5wb3MueTtcbiAgICB0aGlzLl9sYXllciA9IHQucG9zLno7XG4gICAgdGhpcy5fcmVzSWQgPSB0LmlkO1xuICAgIHRoaXMuX29yaWdpbmFsUmVzSWQgPSB0aGlzLl9yZXNJZDtcbiAgICB0aGlzLl9pZCA9IGU7XG4gICAgdGhpcy5fYmF0Y2hJZCA9IG47XG4gICAgdGhpcy5fdGlsZU1hcE9iamVjdCA9IG87XG4gICAgdGhpcy5fb3duZXJHcmlkSWRzID0gbmV3IEFycmF5KDQpO1xuICAgIHRoaXMuX25HcmlkUG9zSW5kZXggPSB0LnBvcy55ICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFggKiAyICsgdC5wb3MueDtcbiAgICB0aGlzLmNoZWNrQ2FyZFBvc0ludmFpbGQodC5wb3MueSwgdC5wb3MueCk7XG4gICAgdGhpcy5fb3duZXJHcmlkSWRzWzBdID0gdGhpcy5fbkdyaWRQb3NJbmRleDtcbiAgICB0aGlzLl9vd25lckdyaWRJZHNbMV0gPSB0aGlzLl9uR3JpZFBvc0luZGV4ICsgMTtcbiAgICB0aGlzLl9vd25lckdyaWRJZHNbMl0gPSB0aGlzLl9uR3JpZFBvc0luZGV4ICsgMiAqIEdhbWVDb25zdGFudC5NYXhUaWxlQ291bnRYO1xuICAgIHRoaXMuX293bmVyR3JpZElkc1szXSA9IHRoaXMuX25HcmlkUG9zSW5kZXggKyAyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFggKyAxO1xuICB9XG4gIHN0YXRpYyBfdHlwZVRvQml0KGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLk5vcm1hbDpcbiAgICAgICAgcmV0dXJuIEVUaWxlVHlwZUJpdC5Ob3JtYWw7XG4gICAgICBjYXNlIEVUaWxlVHlwZS5Sb2xsQ2FyZDpcbiAgICAgICAgcmV0dXJuIEVUaWxlVHlwZUJpdC5Sb2xsQ2FyZDtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLkJvbWI6XG4gICAgICAgIHJldHVybiBFVGlsZVR5cGVCaXQuQm9tYjtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLllvZ2E6XG4gICAgICAgIHJldHVybiBFVGlsZVR5cGVCaXQuWW9nYTtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLkNvbG9yQ2FyZDpcbiAgICAgICAgcmV0dXJuIEVUaWxlVHlwZUJpdC5Db2xvckNhcmQ7XG4gICAgICBjYXNlIEVUaWxlVHlwZS5SYW5rQ2FyZDpcbiAgICAgICAgcmV0dXJuIEVUaWxlVHlwZUJpdC5SYW5rQ2FyZDtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLkRheGlhb0NhcmQ6XG4gICAgICAgIHJldHVybiBFVGlsZVR5cGVCaXQuRGF4aWFvQ2FyZDtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLkR1b3hpYW9DYXJkOlxuICAgICAgICByZXR1cm4gRVRpbGVUeXBlQml0LkR1b3hpYW9DYXJkO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIEVUaWxlVHlwZUJpdC5Ob3JtYWw7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBfdHlwZVRvQ29tcG9uZW50S2V5KGUpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLlJvbGxDYXJkOlxuICAgICAgICByZXR1cm4gRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRSb2xsQ2FyZDtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLkJvbWI6XG4gICAgICAgIHJldHVybiBFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudEJvbWI7XG4gICAgICBjYXNlIEVUaWxlVHlwZS5Db2xvckNhcmQ6XG4gICAgICAgIHJldHVybiBFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudENvbG9yO1xuICAgICAgY2FzZSBFVGlsZVR5cGUuUmFua0NhcmQ6XG4gICAgICAgIHJldHVybiBFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudFJhbms7XG4gICAgICBjYXNlIEVUaWxlVHlwZS5Zb2dhOlxuICAgICAgICByZXR1cm4gRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRZb2dhO1xuICAgICAgY2FzZSBFVGlsZVR5cGUuRGF4aWFvQ2FyZDpcbiAgICAgICAgcmV0dXJuIEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50RGF4aWFvO1xuICAgICAgY2FzZSBFVGlsZVR5cGUuRHVveGlhb0NhcmQ6XG4gICAgICAgIHJldHVybiBFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudER1b3hpYW87XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgc2V0TGF5ZXIoZSkge1xuICAgIHRoaXMuX2xheWVyID0gZTtcbiAgfVxuICBpbml0KGUsIHQpIHtcbiAgICB0aGlzLl9nYW1lQ29udGV4dCA9IGU7XG4gICAgdGhpcy5fY2FyZENvbmZpZ01hcCA9IHQ7XG4gICAgdGhpcy5vblRpbGUyU2V0UmVzSWQoKTtcbiAgfVxuICBjaGVja0NhcmRQb3NJbnZhaWxkKGUsIHQpIHtcbiAgICAodCA8IDAgfHwgdCA+PSAyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFggfHwgZSA8IDAgfHwgZSA+PSAyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFkpICYmICh0aGlzLl9pc1ZhbGlkID0gZmFsc2UpO1xuICB9XG4gIGdhcmRJZFRvVGJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzSWQ7XG4gIH1cbiAgZ2V0Q29udGVudFNpemUoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmNhcmRMYXlvdXRDb25maWcsXG4gICAgICB0ID0gdGhpcy5sYXlvdXRTY2FsZTtcbiAgICByZXR1cm4gbmV3IGNjLlNpemUoZS5jYXJkU2l6ZVswXSAqIHQsIGUuY2FyZFNpemVbMV0gKiB0KTtcbiAgfVxuICBnZXRUb3VjaFNpemVPZmZzZXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90b3VjaFNpemVPZmZzZXRzO1xuICB9XG4gIHNldFRvdWNoU2l6ZU9mZnNldHMoZSkge1xuICAgIHRoaXMuX3RvdWNoU2l6ZU9mZnNldHMgPSBlO1xuICB9XG4gIHNldE9yaWdpbmFsUmVzSWQoZSkge1xuICAgIHRoaXMuX29yaWdpbmFsUmVzSWQgPSBlO1xuICB9XG4gIHJlZnJlc2hPd25lckdyaWRJZHMoZSwgdCwgbykge1xuICAgIHRoaXMuX2dyaWRQb3NYID0gZTtcbiAgICB0aGlzLl9ncmlkUG9zWSA9IHQ7XG4gICAgdGhpcy5fbGF5ZXIgPSBvO1xuICAgIHZhciBuID0gdGhpcy5fZ3JpZFBvc1kgKiBHYW1lQ29uc3RhbnQuTWF4VGlsZUNvdW50WCAqIDIgKyB0aGlzLl9ncmlkUG9zWDtcbiAgICB0aGlzLl9uR3JpZFBvc0luZGV4ID0gbjtcbiAgICB0aGlzLl9vd25lckdyaWRJZHNbMF0gPSBuO1xuICAgIHRoaXMuX293bmVyR3JpZElkc1sxXSA9IG4gKyAxO1xuICAgIHRoaXMuX293bmVyR3JpZElkc1syXSA9IG4gKyAyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFg7XG4gICAgdGhpcy5fb3duZXJHcmlkSWRzWzNdID0gbiArIDIgKiBHYW1lQ29uc3RhbnQuTWF4VGlsZUNvdW50WCArIDE7XG4gIH1cbiAgZ2V0U2hhZG93Q29udGVudFNpemUoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmNhcmRMYXlvdXRDb25maWcsXG4gICAgICB0ID0gdGhpcy5sYXlvdXRTY2FsZTtcbiAgICByZXR1cm4gMCA9PSB0aGlzLmxheWVyID8gbmV3IGNjLlNpemUoZS5zaGFkb3dTaXplWzBdICogdCwgZS5zaGFkb3dTaXplWzFdICogdCkgOiBuZXcgY2MuU2l6ZShlLnNoYWRvd1NpemVVcFswXSAqIHQsIGUuc2hhZG93U2l6ZVVwWzFdICogdCk7XG4gIH1cbiAgZ2V0QmdDb250ZW50U2l6ZSgpIHtcbiAgICB2YXIgZSA9IHRoaXMuY2FyZExheW91dENvbmZpZyxcbiAgICAgIHQgPSB0aGlzLmxheW91dFNjYWxlO1xuICAgIHJldHVybiBuZXcgY2MuU2l6ZShlLmNhcmRTaXplWzBdICogdCwgZS5jYXJkU2l6ZVsxXSAqIHQpO1xuICB9XG4gIGdldFNlbGVjdENvbnRlbnRTaXplKCkge1xuICAgIHZhciBlID0gdGhpcy5jYXJkTGF5b3V0Q29uZmlnLFxuICAgICAgdCA9IHRoaXMubGF5b3V0U2NhbGU7XG4gICAgcmV0dXJuIG5ldyBjYy5TaXplKGUuc2VsZWN0SW1nU2l6ZVswXSAqIHQsIGUuc2VsZWN0SW1nU2l6ZVsxXSAqIHQpO1xuICB9XG4gIGdldFBvc2l0aW9uKGUgPSBmYWxzZSkge1xuICAgIHZhciB0ID0gdGhpcy5jYXJkTGF5b3V0Q29uZmlnLFxuICAgICAgbyA9IHRoaXMubGF5b3V0U2NhbGUsXG4gICAgICBuID0gMC41ICogdGhpcy5ncmlkUG9zWCAqICh0LmNhcmRTaXplWzBdICsgdC5jYXJkU3BhY2VbMF0pICogbyAtIHRoaXMubGF5ZXIgKiB0LmNhcmRTaXplUmlnaHQgKiBvLFxuICAgICAgaSA9IDAuNSAqIHRoaXMuZ3JpZFBvc1kgKiAodC5jYXJkU2l6ZVsxXSArIHQuY2FyZFNwYWNlWzFdKSAqIG8gLSB0aGlzLmxheWVyICogdC5jYXJkU2l6ZUJvdHRvbSAqIG87XG4gICAgaWYgKGUpIHJldHVybiBuZXcgY2MuVmVjMyhuLCAtaSwgMCk7XG4gICAgdmFyIHIgPSB0aGlzLnBvc2l0aW9uT2Zmc2V0O1xuICAgIHJldHVybiBuZXcgY2MuVmVjMyhuICsgci54LCAtaSArIHIueSwgMCk7XG4gIH1cbiAgZ2V0U2hhZG93UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oKTtcbiAgfVxuICBnZXRTaGFkb3dDZW50ZXJQb3NpdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0UG9zaXRpb24oKSxcbiAgICAgIHQgPSB0aGlzLmNhcmRMYXlvdXRDb25maWcsXG4gICAgICBvID0gdGhpcy5sYXlvdXRTY2FsZSxcbiAgICAgIG4gPSB0aGlzLmdldFNoYWRvd0NvbnRlbnRTaXplKCksXG4gICAgICBpID0gZS54ICsgMC41ICogLXQuY2FyZFNpemVbMF0gKiBvLFxuICAgICAgciA9IGUueSArIDAuNSAqIHQuY2FyZFNpemVbMV0gKiBvO1xuICAgIGkgKz0gMC41ICogbi53aWR0aDtcbiAgICByIC09IDAuNSAqIG4uaGVpZ2h0O1xuICAgIHJldHVybiBuZXcgY2MuVmVjMyhpLCByLCAwKTtcbiAgfVxuICBnZXRCZ1Bvc2l0aW9uKCkge1xuICAgIHZhciBlID0gdGhpcy5jYXJkTGF5b3V0Q29uZmlnLFxuICAgICAgdCA9IHRoaXMubGF5b3V0U2NhbGUsXG4gICAgICBvID0gMC41ICogLWUuY2FyZFNpemVbMF0gKiB0LFxuICAgICAgbiA9IDAuNSAqIGUuY2FyZFNpemVbMV0gKiB0O1xuICAgIHJldHVybiBuZXcgY2MuVmVjMyhvLCBuLCAwKTtcbiAgfVxuICBnZXRDYXJkQ29udGVudFNpemUoKSB7XG4gICAgdmFyIGUgPSB0aGlzLmNhcmRMYXlvdXRDb25maWcsXG4gICAgICB0ID0gdGhpcy5sYXlvdXRTY2FsZTtcbiAgICByZXR1cm4gbmV3IGNjLlNpemUoZS5jYXJkU2l6ZVswXSAqIHQsIGUuY2FyZFNpemVbMV0gKiB0KTtcbiAgfVxuICBnZXRDYXJkUG9zaXRpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzLmNhcmRMYXlvdXRDb25maWcsXG4gICAgICB0ID0gdGhpcy5sYXlvdXRTY2FsZSxcbiAgICAgIG8gPSAwLjUgKiAtZS5jYXJkU2l6ZVswXSAqIHQsXG4gICAgICBuID0gMC41ICogZS5jYXJkU2l6ZVsxXSAqIHQ7XG4gICAgcmV0dXJuIG5ldyBjYy5WZWMzKG8sIG4sIDApO1xuICB9XG4gIGdldE1hc2tQb3NpdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMuY2FyZExheW91dENvbmZpZyxcbiAgICAgIHQgPSB0aGlzLmxheW91dFNjYWxlLFxuICAgICAgbyA9IDAuNSAqIC1lLmNhcmRTaXplWzBdICogdCxcbiAgICAgIG4gPSAwLjUgKiBlLmNhcmRTaXplWzFdICogdDtcbiAgICByZXR1cm4gbmV3IGNjLlZlYzMobywgbiwgMCk7XG4gIH1cbiAgZ2V0U2VsZWN0RWZmZWN0UG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBjYy5WZWMzKDAsIDAsIDApO1xuICB9XG4gIGdldEhpbnRFZmZlY3RQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IGNjLlZlYzMoMCwgMCwgMCk7XG4gIH1cbiAgaXNIYXNMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmdyaWRJbmRleDJQb3NYKHRoaXMuX293bmVyR3JpZElkc1swXSkgPiAwICYmICh0aGlzLnRpbGVNYXBPYmplY3QuaXNIYXNDYXJkKHRoaXMuX2xheWVyLCB0aGlzLl9vd25lckdyaWRJZHNbMF0gLSAxKSB8fCB0aGlzLnRpbGVNYXBPYmplY3QuaXNIYXNDYXJkKHRoaXMuX2xheWVyLCB0aGlzLl9vd25lckdyaWRJZHNbMl0gLSAxKSk7XG4gIH1cbiAgaXNIYXNSaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5ncmlkSW5kZXgyUG9zWCh0aGlzLl9vd25lckdyaWRJZHNbMV0pIDwgMiAqIEdhbWVDb25zdGFudC5NYXhUaWxlQ291bnRYIC0gMSAmJiAodGhpcy50aWxlTWFwT2JqZWN0LmlzSGFzQ2FyZCh0aGlzLl9sYXllciwgdGhpcy5fb3duZXJHcmlkSWRzWzFdICsgMSkgfHwgdGhpcy50aWxlTWFwT2JqZWN0LmlzSGFzQ2FyZCh0aGlzLl9sYXllciwgdGhpcy5fb3duZXJHcmlkSWRzWzNdICsgMSkpO1xuICB9XG4gIGlzSGFzVXAoKSB7XG4gICAgdmFyIGUgPSBmYWxzZSxcbiAgICAgIHQgPSBmYWxzZTtcbiAgICB0aGlzLmdyaWRJbmRleDJQb3NZKHRoaXMuX293bmVyR3JpZElkc1swXSAtIDIgKiBHYW1lQ29uc3RhbnQuTWF4VGlsZUNvdW50WCkgPiAwICYmIChlID0gdGhpcy50aWxlTWFwT2JqZWN0LmlzSGFzQ2FyZCh0aGlzLl9sYXllciwgdGhpcy5fb3duZXJHcmlkSWRzWzBdIC0gMiAqIEdhbWVDb25zdGFudC5NYXhUaWxlQ291bnRYKSk7XG4gICAgdGhpcy5ncmlkSW5kZXgyUG9zWSh0aGlzLl9vd25lckdyaWRJZHNbMV0gLSAyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFgpID4gMCAmJiAodCA9IHRoaXMudGlsZU1hcE9iamVjdC5pc0hhc0NhcmQodGhpcy5fbGF5ZXIsIHRoaXMuX293bmVyR3JpZElkc1sxXSAtIDIgKiBHYW1lQ29uc3RhbnQuTWF4VGlsZUNvdW50WCkpO1xuICAgIHJldHVybiBlIHx8IHQ7XG4gIH1cbiAgaXNIYXNEb3duKCkge1xuICAgIHZhciBlID0gZmFsc2UsXG4gICAgICB0ID0gZmFsc2U7XG4gICAgdGhpcy5ncmlkSW5kZXgyUG9zWSh0aGlzLl9vd25lckdyaWRJZHNbMl0gKyAyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFgpIDwgMiAqIEdhbWVDb25zdGFudC5NYXhUaWxlQ291bnRZIC0gMSAmJiAoZSA9IHRoaXMudGlsZU1hcE9iamVjdC5pc0hhc0NhcmQodGhpcy5fbGF5ZXIsIHRoaXMuX293bmVyR3JpZElkc1syXSArIDIgKiBHYW1lQ29uc3RhbnQuTWF4VGlsZUNvdW50WCkpO1xuICAgIHRoaXMuZ3JpZEluZGV4MlBvc1kodGhpcy5fb3duZXJHcmlkSWRzWzNdICsgMiAqIEdhbWVDb25zdGFudC5NYXhUaWxlQ291bnRYKSA8IDIgKiBHYW1lQ29uc3RhbnQuTWF4VGlsZUNvdW50WSAtIDEgJiYgKHQgPSB0aGlzLnRpbGVNYXBPYmplY3QuaXNIYXNDYXJkKHRoaXMuX2xheWVyLCB0aGlzLl9vd25lckdyaWRJZHNbM10gKyAyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFgpKTtcbiAgICByZXR1cm4gZSB8fCB0O1xuICB9XG4gIGdyaWRJbmRleDJQb3NYKGUpIHtcbiAgICByZXR1cm4gZSAlICgyICogR2FtZUNvbnN0YW50Lk1heFRpbGVDb3VudFgpO1xuICB9XG4gIGdyaWRJbmRleDJQb3NZKGUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihlIC8gKDIgKiBHYW1lQ29uc3RhbnQuTWF4VGlsZUNvdW50WCkpO1xuICB9XG4gIGNoYW5nZVJlc0lkKGUpIHtcbiAgICB0aGlzLl9yZXNJZCA9IGU7XG4gICAgdGhpcy5vblRpbGUyU2V0UmVzSWQoKTtcbiAgfVxuICBpc0NhcmRMb2NrKCkge1xuICAgIHJldHVybiB0aGlzLnRpbGVNYXBPYmplY3QuaXNDYXJkTG9jayh0aGlzKTtcbiAgfVxuICB1cGRhdGVUb3VjaFNpemVPZmZzZXRzKGUpIHtcbiAgICBlICYmIDQgPT09IGUubGVuZ3RoICYmICh0aGlzLl90b3VjaFNpemVPZmZzZXRzID0gZSk7XG4gIH1cbiAgZ2V0U2VsZWN0T2Zmc2V0WCgpIHtcbiAgICB2YXIgdCA9IDA7XG4gICAgaWYgKHRoaXMuaXNIYXNMZWZ0KCkpIHtcbiAgICAgIHQgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzSGFzUmlnaHQoKSAmJiAodCA9IC0xKTtcbiAgICB9XG4gICAgcmV0dXJuIFRpbGVPYmplY3QuU0VMRUNUX09GRlNFVF9YICogdDtcbiAgfVxuICBnZXRTZWxlY3RTY2FsZSgpIHtcbiAgICB2YXIgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiU2VsZWN0U2NhbGVUcmFpdFwiKTtcbiAgICByZXR1cm4gZSAmJiBlLmdldEluc3RhbmNlKCkgJiYgdHJ1ZSA9PT0gZS5nZXRJbnN0YW5jZSgpLmV2ZW50RW5hYmxlZCA/IGUuZ2V0SW5zdGFuY2UoKS5nZXRTZWxlY3RTY2FsZSgpIDogMTtcbiAgfVxuICBnZXREdW94aWFvQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5EdW94aWFvQ2FyZCkgPyB0aGlzLl9kdW94aWFvQ291bnQgOiAwO1xuICB9XG4gIHNldER1b3hpYW9Db3VudChlKSB7XG4gICAgdGhpcy5fZHVveGlhb0NvdW50ID0gZTtcbiAgfVxuICB0b0tleSgpIHtcbiAgICByZXR1cm4gdGhpcy5ncmlkUG9zWCArIFwiLVwiICsgdGhpcy5ncmlkUG9zWSArIFwiLVwiICsgdGhpcy5sYXllciArIFwiLVwiICsgdGhpcy5jYXJkSWQgKyBcIi1cIiArIHRoaXMucmVzSWQ7XG4gIH1cbiAgc2F2ZUtleSgpIHtcbiAgICByZXR1cm4gdGhpcy5ncmlkUG9zWCArIFwiLVwiICsgdGhpcy5ncmlkUG9zWSArIFwiLVwiICsgdGhpcy5sYXllcjtcbiAgfVxuICBhZGRUb1Nsb3RCYXIoZSkge1xuICAgIHRoaXMuX2lzSW5TbG90QmFyID0gdHJ1ZTtcbiAgICB0aGlzLl9pbmRleEluU2xvdEJhciA9IGU7XG4gIH1cbiAgY2hhbmdlU2xvdEJhckluZGV4KGUpIHtcbiAgICBudWxsICE9IGUgJiYgZSA+PSAwICYmICh0aGlzLl9pbmRleEluU2xvdEJhciA9IGUpO1xuICB9XG4gIHJlbW92ZUZyb21TbG90QmFyKCkge1xuICAgIHRoaXMuX2lzSW5TbG90QmFyID0gZmFsc2U7XG4gIH1cbiAgZ2V0SW5kZXhJblNsb3RCYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGV4SW5TbG90QmFyO1xuICB9XG4gIGdldElzSW5TbG90QmFyKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0luU2xvdEJhcjtcbiAgfVxuICBnZXRTY2FsZUluU2xvdEJhcigpIHtcbiAgICB2YXIgZSA9IHRoaXMuY2FyZExheW91dENvbmZpZyxcbiAgICAgIHQgPSB0aGlzLmxheW91dFNjYWxlLFxuICAgICAgbyA9IGUuY2FyZFNpemVbMF0gKyBlLmNhcmRTcGFjZVswXTtcbiAgICByZXR1cm4gdGhpcy5nZXRXaWR0aEluU2xvdEJhcigpIC8gKG8gKiB0KTtcbiAgfVxuICBnZXRXaWR0aEluU2xvdEJhcigpIHtcbiAgICB2YXIgZSA9IHRoaXMuY2FyZExheW91dENvbmZpZyxcbiAgICAgIHQgPSBlLmNhcmRTaXplWzBdICsgZS5jYXJkU3BhY2VbMF07XG4gICAgcmV0dXJuIHRoaXMuX2dhbWVDb250ZXh0LmdldFRpbGUyU2xvdFR5cGUoKSA9PT0gRVRpbGUyU2xvdFR5cGUuU2xvdDQgPyAwLjc1ICogdCA6IDAuNzcgKiB0O1xuICB9XG4gIHNldElzQmFjayhlKSB7XG4gICAgdGhpcy5faXNCYWNrID0gZTtcbiAgfVxuICBnZXRJc0JhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQmFjaztcbiAgfVxuICBpc0hhc1JvbGxDYXJkKCkge1xuICAgIHJldHVybiB0aGlzLmdldENvbXBvbmV0cygpLmluY2x1ZGVzKEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50Um9sbENhcmQpO1xuICB9XG4gIGFkZFR5cGVCaXQodCkge1xuICAgIHZhciBvID0gVGlsZU9iamVjdC5fdHlwZVRvQml0KHQpO1xuICAgIDAgIT09IG8gJiYgKHRoaXMuX3R5cGVCaXRzIHw9IG8pO1xuICB9XG4gIHJlbW92ZVR5cGVCaXQodCkge1xuICAgIHRoaXMuX3R5cGVCaXRzICY9IH5UaWxlT2JqZWN0Ll90eXBlVG9CaXQodCk7XG4gIH1cbiAgY2hlY2tJc05vcm1hbCgpIHtcbiAgICB2YXIgZTtcbiAgICByZXR1cm4gKG51bGwgPT09IChlID0gdGhpcy5fZ2FtZUNvbnRleHQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2FtZVR5cGUpICE9PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsID8gdGhpcy50eXBlID09PSBFVGlsZVR5cGUuTm9ybWFsIDogMCA9PT0gdGhpcy5fdHlwZUJpdHM7XG4gIH1cbiAgY2hlY2tIYXNUeXBlKHQpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FtZUNvbnRleHQuZ2FtZVR5cGUgIT09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWwgPyB0aGlzLnR5cGUgPT09IHQgOiAwICE9ICh0aGlzLl90eXBlQml0cyAmIFRpbGVPYmplY3QuX3R5cGVUb0JpdCh0KSk7XG4gIH1cbiAgZ2V0Q29tcG9uZXRzKCkge1xuICAgIHZhciBlID0gW107XG4gICAgdGhpcy5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLlJvbGxDYXJkKSAmJiBlLnB1c2goRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRSb2xsQ2FyZCk7XG4gICAgdGhpcy5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkJvbWIpICYmIGUucHVzaChFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudEJvbWIpO1xuICAgIHRoaXMuY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5Db2xvckNhcmQpICYmIGUucHVzaChFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudENvbG9yKTtcbiAgICB0aGlzLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuUmFua0NhcmQpICYmIGUucHVzaChFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudFJhbmspO1xuICAgIHRoaXMuY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5Zb2dhKSAmJiBlLnB1c2goRVRpbGVDb21wb25lbnQuVGlsZTJDb21wb25lbnRZb2dhKTtcbiAgICB0aGlzLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuRGF4aWFvQ2FyZCkgJiYgZS5wdXNoKEVUaWxlQ29tcG9uZW50LlRpbGUyQ29tcG9uZW50RGF4aWFvKTtcbiAgICB0aGlzLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuRHVveGlhb0NhcmQpICYmIGUucHVzaChFVGlsZUNvbXBvbmVudC5UaWxlMkNvbXBvbmVudER1b3hpYW8pO1xuICAgIHJldHVybiBlO1xuICB9XG4gIGdldFR5cGVCaXRzKCkge1xuICAgIHJldHVybiB0aGlzLl90eXBlQml0cztcbiAgfVxuICBzZXRUeXBlQml0cyhlKSB7XG4gICAgaWYgKG51bGwgIT0gZSkge1xuICAgICAgdGhpcy5fdHlwZUJpdHMgPSBlO1xuICAgICAgdGhpcy5fdHlwZSA9IHRoaXMuZ2V0VHlwZUZyb21CaXRzKGUpO1xuICAgIH1cbiAgfVxuICBnZXRUeXBlRnJvbUJpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5Cb21iKSA/IEVUaWxlVHlwZS5Cb21iIDogdGhpcy5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkNvbG9yQ2FyZCkgPyBFVGlsZVR5cGUuQ29sb3JDYXJkIDogdGhpcy5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLlJhbmtDYXJkKSA/IEVUaWxlVHlwZS5SYW5rQ2FyZCA6IHRoaXMuY2hlY2tIYXNUeXBlKEVUaWxlVHlwZS5Zb2dhKSA/IEVUaWxlVHlwZS5Zb2dhIDogdGhpcy5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkRheGlhb0NhcmQpID8gRVRpbGVUeXBlLkRheGlhb0NhcmQgOiB0aGlzLmNoZWNrSGFzVHlwZShFVGlsZVR5cGUuRHVveGlhb0NhcmQpID8gRVRpbGVUeXBlLkR1b3hpYW9DYXJkIDogdGhpcy5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLlJvbGxDYXJkKSA/IEVUaWxlVHlwZS5Sb2xsQ2FyZCA6IEVUaWxlVHlwZS5Ob3JtYWw7XG4gIH1cbiAgZ2V0RXh0cmFJbmZvKCkge1xuICAgIGlmICh0aGlzLmNoZWNrSXNOb3JtYWwoKSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGUgPSB7XG4gICAgICB0eXBlQml0czogdGhpcy50eXBlQml0c1xuICAgIH07XG4gICAgdGhpcy5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkR1b3hpYW9DYXJkKSAmJiAoZS5kdW94aWFvQ291bnQgPSB0aGlzLmdldER1b3hpYW9Db3VudCgpKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuICBzZXRFeHRyYUluZm8oZSkge1xuICAgIGlmIChudWxsICE9IGUudHlwZUJpdHMgJiYgbnVsbCAhPSBlLnR5cGVCaXRzKSB7XG4gICAgICB0aGlzLnNldFR5cGVCaXRzKGUudHlwZUJpdHMpO1xuICAgICAgdGhpcy5jaGVja0hhc1R5cGUoRVRpbGVUeXBlLkR1b3hpYW9DYXJkKSAmJiB0aGlzLnNldER1b3hpYW9Db3VudChlLmR1b3hpYW9Db3VudCB8fCAwKTtcbiAgICB9XG4gIH1cbiAgb25UaWxlMlNldFJlc0lkKCkge1xuICAgIGlmICh0aGlzLl9nYW1lQ29udGV4dC5nYW1lVHlwZSA9PT0gTWpHYW1lVHlwZS5UaWxlMk5vcm1hbCkge1xuICAgICAgdGhpcy5yZXNJZCA9PSBSZXNJZC5lbUJvbWJDYXJkSWQgJiYgdGhpcy5hZGRUeXBlQml0KEVUaWxlVHlwZS5Cb21iKTtcbiAgICAgIHRoaXMucmVzSWQgPT0gUmVzSWQuZW1Zb2dhQ2FyZElkICYmIHRoaXMuYWRkVHlwZUJpdChFVGlsZVR5cGUuWW9nYSk7XG4gICAgICB0aGlzLnJlc0lkID09IFJlc0lkLmVtUmFua0lkICYmIHRoaXMuYWRkVHlwZUJpdChFVGlsZVR5cGUuUmFua0NhcmQpO1xuICAgIH1cbiAgfVxufSJdfQ==