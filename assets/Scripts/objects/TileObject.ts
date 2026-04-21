import CardUtil from '../gamePlay/user/CardUtil';
import GameConstant from '../core/simulator/constant/GameConstant';
import { ResId, ETile2SlotType, MjGameType } from '../core/simulator/constant/GameTypeEnums';
import { ETileType, ETileNodeShowType, ETileComponent, ETileTypeBit } from '../simulator/constant/TileTypeEnum';
export class TileObject {
  _isValid = true;
  _ownerGridIds = new Array(4);
  _touchSizeOffsets = [0, 0, 0, 0];
  _type = ETileType.Normal;
  _typeBits = 0;
  _originalResId = 0;
  _generating = false;
  _positionOffset = cc.v3(0, 0, 0);
  _isSelect = false;
  _isHint = false;
  _batchId = 0;
  _duoxiaoCount = 0;
  _isInSlotBar = false;
  _indexInSlotBar = -1;
  _isBack = true;
  _gridPosX = null;
  _gridPosY = null;
  _layer = null;
  _resId = null;
  _id = null;
  _tileMapObject = null;
  _nGridPosIndex = null;
  _gameContext = null;
  _cardConfigMap = null;
  static SELECT_OFFSET_X = 30;
  get generating() {
    return this._generating;
  }
  get originalResId() {
    return this._originalResId;
  }
  get showType() {
    switch (this.type) {
      case ETileType.Normal:
        return ETileNodeShowType.Normal;
      case ETileType.Bomb:
        return ETileNodeShowType.Bomb;
      case ETileType.Yoga:
        return ETileNodeShowType.Yoga;
      case ETileType.RankCard:
        return ETileNodeShowType.RankCard;
      case ETileType.ColorCard:
        return ETileNodeShowType.ColorCard;
      case ETileType.RollCard:
        return ETileNodeShowType.RollCard;
      case ETileType.DaxiaoCard:
        return ETileNodeShowType.DaxiaoCard;
      case ETileType.DuoxiaoCard:
        return ETileNodeShowType.DuoxiaoCard;
      default:
        return ETileNodeShowType.Normal;
    }
  }
  get type() {
    return this.resId === ResId.emBombCardId ? ETileType.Bomb : this.resId === ResId.emYogaCardId ? ETileType.Yoga : this.resId === ResId.emRankId ? ETileType.RankCard : this._type;
  }
  get layer() {
    return this._layer;
  }
  get tileMapObject() {
    return this._tileMapObject;
  }
  get positionOffset() {
    return this._positionOffset;
  }
  set positionOffset(e) {
    this._positionOffset = e;
  }
  get cardLayoutConfig() {
    return this._gameContext.getCardLayoutConfig();
  }
  get layoutScale() {
    return this._gameContext.getLayoutScale();
  }
  get gridPosX() {
    return this._gridPosX;
  }
  get gridPosY() {
    return this._gridPosY;
  }
  get gridZIndex() {
    var e = (this._gridPosX + 2 * this._gridPosY) * GameConstant.MaxTileCountX * 2 + this._gridPosX;
    return 100 * this._layer + e;
  }
  get id() {
    return this._id;
  }
  get resId() {
    return this._resId;
  }
  get cardId() {
    return CardUtil.getByKey(this._resId).cardId;
  }
  get originalCardId() {
    return CardUtil.getByKey(this._originalResId).cardId;
  }
  get resName() {
    var e = CardUtil.getByKey(this._resId);
    return e ? e.resName : null;
  }
  get ownerGridIds() {
    return this._ownerGridIds;
  }
  get isValid() {
    return this._isValid;
  }
  set isValid(e) {
    this._isValid = e;
  }
  get isSelect() {
    return this._isSelect;
  }
  get isHint() {
    return this._isHint;
  }
  set isHint(e) {
    this._isHint = e;
  }
  get batchId() {
    return this._batchId;
  }
  get pos() {
    return new cc.Vec3(this._gridPosX, this._gridPosY, this._layer);
  }
  get typeBits() {
    return this._typeBits;
  }
  constructor(e, t, o, n = 0) {
    this._gridPosX = t.pos.x;
    this._gridPosY = t.pos.y;
    this._layer = t.pos.z;
    this._resId = t.id;
    this._originalResId = this._resId;
    this._id = e;
    this._batchId = n;
    this._tileMapObject = o;
    this._ownerGridIds = new Array(4);
    this._nGridPosIndex = t.pos.y * GameConstant.MaxTileCountX * 2 + t.pos.x;
    this.checkCardPosInvaild(t.pos.y, t.pos.x);
    this._ownerGridIds[0] = this._nGridPosIndex;
    this._ownerGridIds[1] = this._nGridPosIndex + 1;
    this._ownerGridIds[2] = this._nGridPosIndex + 2 * GameConstant.MaxTileCountX;
    this._ownerGridIds[3] = this._nGridPosIndex + 2 * GameConstant.MaxTileCountX + 1;
  }
  static _typeToBit(e) {
    switch (e) {
      case ETileType.Normal:
        return ETileTypeBit.Normal;
      case ETileType.RollCard:
        return ETileTypeBit.RollCard;
      case ETileType.Bomb:
        return ETileTypeBit.Bomb;
      case ETileType.Yoga:
        return ETileTypeBit.Yoga;
      case ETileType.ColorCard:
        return ETileTypeBit.ColorCard;
      case ETileType.RankCard:
        return ETileTypeBit.RankCard;
      case ETileType.DaxiaoCard:
        return ETileTypeBit.DaxiaoCard;
      case ETileType.DuoxiaoCard:
        return ETileTypeBit.DuoxiaoCard;
      default:
        return ETileTypeBit.Normal;
    }
  }
  static _typeToComponentKey(e) {
    switch (e) {
      case ETileType.RollCard:
        return ETileComponent.Tile2ComponentRollCard;
      case ETileType.Bomb:
        return ETileComponent.Tile2ComponentBomb;
      case ETileType.ColorCard:
        return ETileComponent.Tile2ComponentColor;
      case ETileType.RankCard:
        return ETileComponent.Tile2ComponentRank;
      case ETileType.Yoga:
        return ETileComponent.Tile2ComponentYoga;
      case ETileType.DaxiaoCard:
        return ETileComponent.Tile2ComponentDaxiao;
      case ETileType.DuoxiaoCard:
        return ETileComponent.Tile2ComponentDuoxiao;
      default:
        return null;
    }
  }
  setLayer(e) {
    this._layer = e;
  }
  init(e, t) {
    this._gameContext = e;
    this._cardConfigMap = t;
    this.onTile2SetResId();
  }
  checkCardPosInvaild(e, t) {
    (t < 0 || t >= 2 * GameConstant.MaxTileCountX || e < 0 || e >= 2 * GameConstant.MaxTileCountY) && (this._isValid = false);
  }
  gardIdToTbId() {
    return this._resId;
  }
  getContentSize() {
    var e = this.cardLayoutConfig,
      t = this.layoutScale;
    return new cc.Size(e.cardSize[0] * t, e.cardSize[1] * t);
  }
  getTouchSizeOffsets() {
    return this._touchSizeOffsets;
  }
  setTouchSizeOffsets(e) {
    this._touchSizeOffsets = e;
  }
  setOriginalResId(e) {
    this._originalResId = e;
  }
  refreshOwnerGridIds(e, t, o) {
    this._gridPosX = e;
    this._gridPosY = t;
    this._layer = o;
    var n = this._gridPosY * GameConstant.MaxTileCountX * 2 + this._gridPosX;
    this._nGridPosIndex = n;
    this._ownerGridIds[0] = n;
    this._ownerGridIds[1] = n + 1;
    this._ownerGridIds[2] = n + 2 * GameConstant.MaxTileCountX;
    this._ownerGridIds[3] = n + 2 * GameConstant.MaxTileCountX + 1;
  }
  getShadowContentSize() {
    var e = this.cardLayoutConfig,
      t = this.layoutScale;
    return 0 == this.layer ? new cc.Size(e.shadowSize[0] * t, e.shadowSize[1] * t) : new cc.Size(e.shadowSizeUp[0] * t, e.shadowSizeUp[1] * t);
  }
  getBgContentSize() {
    var e = this.cardLayoutConfig,
      t = this.layoutScale;
    return new cc.Size(e.cardSize[0] * t, e.cardSize[1] * t);
  }
  getSelectContentSize() {
    var e = this.cardLayoutConfig,
      t = this.layoutScale;
    return new cc.Size(e.selectImgSize[0] * t, e.selectImgSize[1] * t);
  }
  getPosition(e = false) {
    var t = this.cardLayoutConfig,
      o = this.layoutScale,
      n = 0.5 * this.gridPosX * (t.cardSize[0] + t.cardSpace[0]) * o - this.layer * t.cardSizeRight * o,
      i = 0.5 * this.gridPosY * (t.cardSize[1] + t.cardSpace[1]) * o - this.layer * t.cardSizeBottom * o;
    if (e) return new cc.Vec3(n, -i, 0);
    var r = this.positionOffset;
    return new cc.Vec3(n + r.x, -i + r.y, 0);
  }
  getShadowPosition() {
    return this.getPosition();
  }
  getShadowCenterPosition() {
    var e = this.getPosition(),
      t = this.cardLayoutConfig,
      o = this.layoutScale,
      n = this.getShadowContentSize(),
      i = e.x + 0.5 * -t.cardSize[0] * o,
      r = e.y + 0.5 * t.cardSize[1] * o;
    i += 0.5 * n.width;
    r -= 0.5 * n.height;
    return new cc.Vec3(i, r, 0);
  }
  getBgPosition() {
    var e = this.cardLayoutConfig,
      t = this.layoutScale,
      o = 0.5 * -e.cardSize[0] * t,
      n = 0.5 * e.cardSize[1] * t;
    return new cc.Vec3(o, n, 0);
  }
  getCardContentSize() {
    var e = this.cardLayoutConfig,
      t = this.layoutScale;
    return new cc.Size(e.cardSize[0] * t, e.cardSize[1] * t);
  }
  getCardPosition() {
    var e = this.cardLayoutConfig,
      t = this.layoutScale,
      o = 0.5 * -e.cardSize[0] * t,
      n = 0.5 * e.cardSize[1] * t;
    return new cc.Vec3(o, n, 0);
  }
  getMaskPosition() {
    var e = this.cardLayoutConfig,
      t = this.layoutScale,
      o = 0.5 * -e.cardSize[0] * t,
      n = 0.5 * e.cardSize[1] * t;
    return new cc.Vec3(o, n, 0);
  }
  getSelectEffectPosition() {
    return new cc.Vec3(0, 0, 0);
  }
  getHintEffectPosition() {
    return new cc.Vec3(0, 0, 0);
  }
  isHasLeft() {
    return this.gridIndex2PosX(this._ownerGridIds[0]) > 0 && (this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[0] - 1) || this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[2] - 1));
  }
  isHasRight() {
    return this.gridIndex2PosX(this._ownerGridIds[1]) < 2 * GameConstant.MaxTileCountX - 1 && (this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[1] + 1) || this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[3] + 1));
  }
  isHasUp() {
    var e = false,
      t = false;
    this.gridIndex2PosY(this._ownerGridIds[0] - 2 * GameConstant.MaxTileCountX) > 0 && (e = this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[0] - 2 * GameConstant.MaxTileCountX));
    this.gridIndex2PosY(this._ownerGridIds[1] - 2 * GameConstant.MaxTileCountX) > 0 && (t = this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[1] - 2 * GameConstant.MaxTileCountX));
    return e || t;
  }
  isHasDown() {
    var e = false,
      t = false;
    this.gridIndex2PosY(this._ownerGridIds[2] + 2 * GameConstant.MaxTileCountX) < 2 * GameConstant.MaxTileCountY - 1 && (e = this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[2] + 2 * GameConstant.MaxTileCountX));
    this.gridIndex2PosY(this._ownerGridIds[3] + 2 * GameConstant.MaxTileCountX) < 2 * GameConstant.MaxTileCountY - 1 && (t = this.tileMapObject.isHasCard(this._layer, this._ownerGridIds[3] + 2 * GameConstant.MaxTileCountX));
    return e || t;
  }
  gridIndex2PosX(e) {
    return e % (2 * GameConstant.MaxTileCountX);
  }
  gridIndex2PosY(e) {
    return Math.floor(e / (2 * GameConstant.MaxTileCountX));
  }
  changeResId(e) {
    this._resId = e;
    this.onTile2SetResId();
  }
  isCardLock() {
    return this.tileMapObject.isCardLock(this);
  }
  updateTouchSizeOffsets(e) {
    e && 4 === e.length && (this._touchSizeOffsets = e);
  }
  getSelectOffsetX() {
    var t = 0;
    if (this.isHasLeft()) {
      t = 1;
    } else {
      this.isHasRight() && (t = -1);
    }
    return TileObject.SELECT_OFFSET_X * t;
  }
  getSelectScale() {
    var e = mj.getClassByName("SelectScaleTrait");
    return e && e.getInstance() && true === e.getInstance().eventEnabled ? e.getInstance().getSelectScale() : 1;
  }
  getDuoxiaoCount() {
    return this.checkHasType(ETileType.DuoxiaoCard) ? this._duoxiaoCount : 0;
  }
  setDuoxiaoCount(e) {
    this._duoxiaoCount = e;
  }
  toKey() {
    return this.gridPosX + "-" + this.gridPosY + "-" + this.layer + "-" + this.cardId + "-" + this.resId;
  }
  saveKey() {
    return this.gridPosX + "-" + this.gridPosY + "-" + this.layer;
  }
  addToSlotBar(e) {
    this._isInSlotBar = true;
    this._indexInSlotBar = e;
  }
  changeSlotBarIndex(e) {
    null != e && e >= 0 && (this._indexInSlotBar = e);
  }
  removeFromSlotBar() {
    this._isInSlotBar = false;
  }
  getIndexInSlotBar() {
    return this._indexInSlotBar;
  }
  getIsInSlotBar() {
    return this._isInSlotBar;
  }
  getScaleInSlotBar() {
    var e = this.cardLayoutConfig,
      t = this.layoutScale,
      o = e.cardSize[0] + e.cardSpace[0];
    return this.getWidthInSlotBar() / (o * t);
  }
  getWidthInSlotBar() {
    var e = this.cardLayoutConfig,
      t = e.cardSize[0] + e.cardSpace[0];
    return this._gameContext.getTile2SlotType() === ETile2SlotType.Slot4 ? 0.75 * t : 0.77 * t;
  }
  setIsBack(e) {
    this._isBack = e;
  }
  getIsBack() {
    return this._isBack;
  }
  isHasRollCard() {
    return this.getComponets().includes(ETileComponent.Tile2ComponentRollCard);
  }
  addTypeBit(t) {
    var o = TileObject._typeToBit(t);
    0 !== o && (this._typeBits |= o);
  }
  removeTypeBit(t) {
    this._typeBits &= ~TileObject._typeToBit(t);
  }
  checkIsNormal() {
    var e;
    return (null === (e = this._gameContext) || void 0 === e ? void 0 : e.gameType) !== MjGameType.Tile2Normal ? this.type === ETileType.Normal : 0 === this._typeBits;
  }
  checkHasType(t) {
    return this._gameContext.gameType !== MjGameType.Tile2Normal ? this.type === t : 0 != (this._typeBits & TileObject._typeToBit(t));
  }
  getComponets() {
    var e = [];
    this.checkHasType(ETileType.RollCard) && e.push(ETileComponent.Tile2ComponentRollCard);
    this.checkHasType(ETileType.Bomb) && e.push(ETileComponent.Tile2ComponentBomb);
    this.checkHasType(ETileType.ColorCard) && e.push(ETileComponent.Tile2ComponentColor);
    this.checkHasType(ETileType.RankCard) && e.push(ETileComponent.Tile2ComponentRank);
    this.checkHasType(ETileType.Yoga) && e.push(ETileComponent.Tile2ComponentYoga);
    this.checkHasType(ETileType.DaxiaoCard) && e.push(ETileComponent.Tile2ComponentDaxiao);
    this.checkHasType(ETileType.DuoxiaoCard) && e.push(ETileComponent.Tile2ComponentDuoxiao);
    return e;
  }
  getTypeBits() {
    return this._typeBits;
  }
  setTypeBits(e) {
    if (null != e) {
      this._typeBits = e;
      this._type = this.getTypeFromBits(e);
    }
  }
  getTypeFromBits() {
    return this.checkHasType(ETileType.Bomb) ? ETileType.Bomb : this.checkHasType(ETileType.ColorCard) ? ETileType.ColorCard : this.checkHasType(ETileType.RankCard) ? ETileType.RankCard : this.checkHasType(ETileType.Yoga) ? ETileType.Yoga : this.checkHasType(ETileType.DaxiaoCard) ? ETileType.DaxiaoCard : this.checkHasType(ETileType.DuoxiaoCard) ? ETileType.DuoxiaoCard : this.checkHasType(ETileType.RollCard) ? ETileType.RollCard : ETileType.Normal;
  }
  getExtraInfo() {
    if (this.checkIsNormal()) return null;
    var e = {
      typeBits: this.typeBits
    };
    this.checkHasType(ETileType.DuoxiaoCard) && (e.duoxiaoCount = this.getDuoxiaoCount());
    return e;
  }
  setExtraInfo(e) {
    if (null != e.typeBits && null != e.typeBits) {
      this.setTypeBits(e.typeBits);
      this.checkHasType(ETileType.DuoxiaoCard) && this.setDuoxiaoCount(e.duoxiaoCount || 0);
    }
  }
  onTile2SetResId() {
    if (this._gameContext.gameType === MjGameType.Tile2Normal) {
      this.resId == ResId.emBombCardId && this.addTypeBit(ETileType.Bomb);
      this.resId == ResId.emYogaCardId && this.addTypeBit(ETileType.Yoga);
      this.resId == ResId.emRankId && this.addTypeBit(ETileType.RankCard);
    }
  }
}