"use strict";
cc._RF.push(module, 'c6991IbXzZBJ5z3XqtAwrg1', 'CollectTargetItem');
// Scripts/items/CollectTargetItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var BaseUI_1 = require("../framework/ui/BaseUI");
var BaseSprite_1 = require("../gamePlay/base/ui/BaseSprite");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var TravelGameModel_1 = require("../gamePlay/travel/model/TravelGameModel");
var CardUtil_1 = require("../gamePlay/user/CardUtil");
var CollectTargetItem = /** @class */ (function (_super) {
    __extends(CollectTargetItem, _super);
    function CollectTargetItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.card = null;
        _this.cardIcon = null;
        _this.cardDown = null;
        _this.cardUp = null;
        _this.finishNode = null;
        _this.collectLabel = null;
        _this.EffectTopNode = null;
        _this.EffectDownNode = null;
        _this.data = null;
        _this.isLoaded = false;
        _this._customScale = null;
        _this._baseCardScale = 0.56;
        return _this;
    }
    CollectTargetItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.isLoaded = true;
        this.updateUI();
    };
    CollectTargetItem.prototype.updateUI = function () {
        if (this.data && this.isLoaded) {
            var e = this.data;
            this.setupCardDisplay(e.type, e.resId);
            this.setupCardScale(e.type);
            null !== this._customScale && this.card && cc.isValid(this.card) && (this.card.scale *= this._customScale);
            this.updateCountLabel();
            this.updateFinishState();
        }
    };
    CollectTargetItem.prototype.initUI = function (e) {
        if (e) {
            this.data = e;
            this.updateUI();
        }
    };
    CollectTargetItem.prototype.refreshUI = function () {
        if (this.data) {
            this.updateCountLabel();
            this.updateFinishState();
        }
    };
    CollectTargetItem.prototype.setupCardDisplay = function (e, t) {
        switch (e) {
            case TileTypeEnum_1.ETileType.ColorCard:
                this.showNormalCard(e, t);
                break;
            case TileTypeEnum_1.ETileType.Yoga:
                this.showSpecialCard(e, t);
                break;
            case TileTypeEnum_1.ETileType.RollCard:
                this.showFlipCard();
                break;
            default:
                this.showNormalCard(e, t);
        }
    };
    CollectTargetItem.prototype.showNormalCard = function () {
        this.cardUp.active = true;
        this.cardDown.active = false;
        this.cardIcon.node.active = true;
        var e = CardUtil_1.default.getAtlasPathAndBundleName(this.data.resName), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.cardIcon.node, t, n, false, o);
        var i = CardUtil_1.default.getAtlasPathAndBundleName("journey_special_mj_green"), r = i.path, a = i.bundleName, l = i.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.cardUp, r, l, false, a);
    };
    CollectTargetItem.prototype.showSpecialCard = function (e, t) {
        this.cardUp.active = false;
        this.cardDown.active = false;
        this.cardIcon.node.active = true;
        this.collectLabel.node.x += 0.7 * this.cardIcon.node.width * this.card.scale;
        this.finishNode.x += 0.7 * this.cardIcon.node.width * this.card.scale;
        var o = this.getSpecialIconPath(e, t), n = o.path, i = o.bundleName, r = o.fromAtlas;
        n && BaseSprite_1.default.refreshWithNode(this.cardIcon.node, n, r, false, i);
    };
    CollectTargetItem.prototype.showFlipCard = function () {
        this.cardUp.active = false;
        this.cardDown.active = true;
        this.cardIcon.node.active = false;
        var e = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_dn"), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.cardDown, t, n, false, o);
    };
    CollectTargetItem.prototype.getSpecialIconPath = function (e) {
        if (e === TileTypeEnum_1.ETileType.Yoga) {
            var t = TravelGameModel_1.default.getInstance().getCurJourney(), o = TravelGameModel_1.default.getInstance().getConfig(t);
            if (o && o.yoga) {
                var n = __read(this.getYogaIconPath(o.yoga), 2), i = n[0];
                return {
                    path: n[1],
                    bundleName: i,
                    fromAtlas: false
                };
            }
        }
        if (this.data && this.data.resName) {
            var r = CardUtil_1.default.getAtlasPathAndBundleName(this.data.resName);
            return {
                path: r.path,
                bundleName: r.bundleName,
                fromAtlas: r.fromAtlas
            };
        }
    };
    CollectTargetItem.prototype.getYogaIconPath = function (e) {
        var t = e.split(":");
        return 2 === t.length ? [t[0], "texture/" + t[1]] : ["mainRes", "texture/journey/yoga/" + e];
    };
    CollectTargetItem.prototype.setupCardScale = function (e) {
        var t = 0.56;
        switch (e) {
            case TileTypeEnum_1.ETileType.ColorCard:
            case TileTypeEnum_1.ETileType.RollCard:
                t = 0.56;
                break;
            case TileTypeEnum_1.ETileType.Yoga:
                t = 0.78;
        }
        this._baseCardScale = t;
        this.card.scale = t;
    };
    CollectTargetItem.prototype.updateCountLabel = function () {
        if (this.collectLabel && this.data) {
            var e = this.data.count;
            this.collectLabel.string = "" + e;
        }
    };
    CollectTargetItem.prototype.updateFinishState = function () {
        if (this.finishNode && this.data) {
            var e = this.data.count <= 0;
            this.finishNode.active = e;
            this.collectLabel.node.active = !e;
        }
    };
    CollectTargetItem.prototype.getData = function () {
        return this.data;
    };
    CollectTargetItem.prototype.updateData = function (e) {
        if (this.data) {
            this.data.count = e.count;
            this.data.allCount = e.allCount;
        }
    };
    CollectTargetItem.prototype.playCollectAnimation = function (e) {
        var t = this;
        if (this.card && this.collectLabel) {
            cc.Tween.stopAllByTarget(this.card);
            cc.Tween.stopAllByTarget(this.collectLabel.node);
            var o = this.getBaseCardScale();
            this.card.scale = o;
            this.collectLabel.node.scale = 1;
            this.playSpineEffect();
            cc.tween(this.card).to(0.07, {
                scale: 1.2 * o
            }).to(0.1, {
                scale: o
            }).start();
            cc.tween(this.collectLabel.node).to(0.07, {
                scale: 2
            }).call(function () {
                t.updateCountLabel();
            }).to(0.1, {
                scale: 1
            }).call(function () {
                t.updateFinishState();
                e && e();
            }).start();
        }
        else
            e && e();
    };
    CollectTargetItem.prototype.getBaseCardScale = function () {
        return this._baseCardScale;
    };
    CollectTargetItem.prototype.playSpineEffect = function () {
        if (this.EffectTopNode) {
            var e = BaseSpine_1.default.create("spine/collect/gameplay_light_goal", "in", 1, function () { }, true);
            if (e && e.node) {
                this.EffectTopNode.addChild(e.node);
                e.node.scale = this.card.scale;
            }
        }
    };
    CollectTargetItem.prototype.onDestroy = function () {
        this.data = null;
        _super.prototype.onDestroy.call(this);
    };
    CollectTargetItem.prefabUrl = "prefabs/journey/CollectItem";
    CollectTargetItem.bundleName = "mainRes";
    __decorate([
        mj.node("Card")
    ], CollectTargetItem.prototype, "card", void 0);
    __decorate([
        mj.component("Card/Icon", cc.Sprite)
    ], CollectTargetItem.prototype, "cardIcon", void 0);
    __decorate([
        mj.node("Card/Down")
    ], CollectTargetItem.prototype, "cardDown", void 0);
    __decorate([
        mj.node("Card/Up")
    ], CollectTargetItem.prototype, "cardUp", void 0);
    __decorate([
        mj.node("Finish")
    ], CollectTargetItem.prototype, "finishNode", void 0);
    __decorate([
        mj.component("Label", cc.Label)
    ], CollectTargetItem.prototype, "collectLabel", void 0);
    __decorate([
        mj.node("EffectTop")
    ], CollectTargetItem.prototype, "EffectTopNode", void 0);
    __decorate([
        mj.node("EffectDown")
    ], CollectTargetItem.prototype, "EffectDownNode", void 0);
    CollectTargetItem = __decorate([
        mj.class
    ], CollectTargetItem);
    return CollectTargetItem;
}(BaseUI_1.default));
exports.default = CollectTargetItem;

cc._RF.pop();