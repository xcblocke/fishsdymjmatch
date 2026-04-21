"use strict";
cc._RF.push(module, '1f98cjHavBCq4IG51pmWd9D', 'RollCardTileNode');
// Scripts/RollCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RollCardTileNode = void 0;
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var FlipStateCtl_1 = require("./fsm/ctl/FlipStateCtl");
var TileNodeObject_1 = require("./TileNodeObject");
var RollCardTileNode = /** @class */ (function (_super) {
    __extends(RollCardTileNode, _super);
    function RollCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.RollCard;
        _this._isBack = false;
        return _this;
    }
    Object.defineProperty(RollCardTileNode.prototype, "isBack", {
        get: function () {
            return this._isBack;
        },
        enumerable: false,
        configurable: true
    });
    RollCardTileNode.prototype.keepOpen = function () {
        return false;
    };
    RollCardTileNode.prototype.setIsBack = function (e) {
        this._isBack = e;
    };
    RollCardTileNode.prototype.refreshNode = function (t) {
        var o, n;
        _super.prototype.refreshNode.call(this, t);
        if (this.keepOpen()) {
            null === (o = this._tileFlipStateCtl) || void 0 === o || o.forceEnter();
        }
        else {
            null === (n = this._tileFlipStateCtl) || void 0 === n || n.forceExit();
        }
    };
    RollCardTileNode.prototype.updateImgCard = function () {
        var e = CardUtil_1.default.getAtlasPathAndBundleName(this._isBack ? "gameplay_img_mj_dn" : this.tileObject.resName, this), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.imgCard, t, n, false, o);
        var i = CardUtil_1.default.getAtlasPathAndBundleName(this.tileObject.resName, this);
        this.saveCardUniqueInfo(i.bundleName, i.path, i.fromAtlas);
    };
    RollCardTileNode.prototype.showPropHint = function () {
        var t;
        _super.prototype.showPropHint.call(this);
        this._isBack && (null === (t = this._tileFlipStateCtl) || void 0 === t || t.playEnterAni());
    };
    RollCardTileNode.prototype.hidePropHint = function () {
        var t;
        _super.prototype.hidePropHint.call(this);
        this._isBack || this.keepOpen() || null === (t = this._tileFlipStateCtl) || void 0 === t || t.playExitAni();
    };
    RollCardTileNode.prototype.updateAnimMgr = function () {
        _super.prototype.updateAnimMgr.call(this);
        this._tileFlipStateCtl || (this._tileFlipStateCtl = new FlipStateCtl_1.FlipStateCtl(this.tileNode, this));
    };
    RollCardTileNode.prototype.playSelectAnimation = function (t) {
        var o;
        _super.prototype.playSelectAnimation.call(this, t);
        null === (o = this._tileFlipStateCtl) || void 0 === o || o.playEnterAni();
    };
    RollCardTileNode.prototype.cancelSelectedAnimation = function (t) {
        var o;
        _super.prototype.cancelSelectedAnimation.call(this, t);
        this.keepOpen() || this._effectPropHint && this._effectPropHint.active || null === (o = this._tileFlipStateCtl) || void 0 === o || o.playExitAni();
    };
    RollCardTileNode.prototype.clearCancelSelected = function () {
        _super.prototype.clearCancelSelected.call(this);
        this.onClearCancelSelected();
    };
    RollCardTileNode.prototype.onClearCancelSelected = function () {
        var e, t;
        if (this.isBack) {
            null === (t = this._tileFlipStateCtl) || void 0 === t || t.playEnterAni();
        }
        else {
            null === (e = this._tileFlipStateCtl) || void 0 === e || e.forceEnter();
        }
    };
    RollCardTileNode.prototype.stopAllAnimation = function () {
        var t;
        _super.prototype.stopAllAnimation.call(this);
        this.keepOpen() || null === (t = this._tileFlipStateCtl) || void 0 === t || t.forceExit();
    };
    __decorate([
        mj.traitEvent("RollCTNode_keepOpen")
    ], RollCardTileNode.prototype, "keepOpen", null);
    __decorate([
        mj.traitEvent("RollCTNode_clearCelSel")
    ], RollCardTileNode.prototype, "onClearCancelSelected", null);
    return RollCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.RollCardTileNode = RollCardTileNode;

cc._RF.pop();