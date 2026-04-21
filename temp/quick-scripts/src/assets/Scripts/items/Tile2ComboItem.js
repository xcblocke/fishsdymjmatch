"use strict";
cc._RF.push(module, '55783jgQ6xBapzcPYeyVXNV', 'Tile2ComboItem');
// Scripts/items/Tile2ComboItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var BaseUI_1 = require("../framework/ui/BaseUI");
var Tile2ComboItem = /** @class */ (function (_super) {
    __extends(Tile2ComboItem, _super);
    function Tile2ComboItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._spinCombo = null;
        _this._spinDown = null;
        _this._spinUp = null;
        _this._lblCombo = null;
        return _this;
    }
    Tile2ComboItem_1 = Tile2ComboItem;
    Tile2ComboItem.getPrefabPath = function () {
        return "prefabs/effects/Tile2EffectCombo";
    };
    Tile2ComboItem.create = function () {
        return this.createUI(this.getPrefabPath()).then(function (e) {
            return e.getComponent(Tile2ComboItem_1);
        });
    };
    Tile2ComboItem.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        this._lblCombo = null === (t = cc.find("rightNode/lblCombo", this.node)) || void 0 === t ? void 0 : t.getComponent(cc.Label);
        this.initSpines();
    };
    Tile2ComboItem.prototype.initSpines = function () {
        var e = this.getSpinePath(), t = cc.find("spinCombo", this.node), o = cc.find("rightNode/spinDown", this.node), n = cc.find("rightNode/spinUp", this.node);
        t && (this._spinCombo = BaseSpine_1.default.refreshWithNode(t, e));
        o && (this._spinDown = BaseSpine_1.default.refreshWithNode(o, e));
        n && (this._spinUp = BaseSpine_1.default.refreshWithNode(n, e));
    };
    Tile2ComboItem.prototype.getSpinePath = function () {
        return "spine/combo/gameplay_combo_num";
    };
    Tile2ComboItem.prototype.setComboNum = function (e) {
        if (this._lblCombo) {
            this._lblCombo.string = this.formatComboString(e);
            this._lblCombo._forceUpdateRenderData();
        }
    };
    Tile2ComboItem.prototype.formatComboString = function (e) {
        return e.toString();
    };
    Tile2ComboItem.prototype.getLabelWidth = function () {
        return this._lblCombo ? this._lblCombo.node.width : 0;
    };
    Tile2ComboItem.prototype.adjustSpinePositions = function () {
        if (this._lblCombo) {
            var e = this._lblCombo.node.width;
            this._spinDown && (this._spinDown.node.position = cc.v3(e / 2, this._spinDown.node.y));
            this._spinUp && (this._spinUp.node.position = cc.v3(e / 2, this._spinUp.node.y));
        }
    };
    Tile2ComboItem.prototype.getAnimationConfig = function () {
        return {
            rawWidth: 137,
            lblScaleStart: 3,
            scaleDown: 0.7,
            scaleDownTime: 0.17,
            scaleUp: 1,
            scaleUpTime: 0.1,
            delay: 0.37,
            scaleEnd: 0.9,
            fadeTime: 0.17
        };
    };
    Tile2ComboItem.prototype.playComboAnimation = function (e) {
        this._spinCombo && this._spinCombo.setAnimation("in_combo", 1);
        this._spinDown && this._spinDown.setAnimation("in_down", 1);
        this._spinUp && this._spinUp.setAnimation("in_up", 1);
        if (this._lblCombo) {
            var t = this.getAnimationConfig(), o = this._lblCombo.node;
            cc.Tween.stopAllByTarget(o);
            o.scale = t.lblScaleStart;
            o.opacity = 255;
            cc.tween(o).to(t.scaleDownTime, {
                scale: t.scaleDown
            }).to(t.scaleUpTime, {
                scale: t.scaleUp
            }).delay(t.delay).to(t.fadeTime, {
                scale: t.scaleEnd,
                opacity: 0
            }).call(function () {
                null == e || e();
            }).start();
        }
        else
            null == e || e();
    };
    Tile2ComboItem.prototype.stopAllAnimations = function () {
        var e, t;
        cc.Tween.stopAllByTarget(this.node);
        this.stopAllTweensRecursively(this.node);
        var o = this.node.getComponentsInChildren(sp.Skeleton);
        try {
            for (var n = __values(o), i = n.next(); !i.done; i = n.next()) {
                var r = i.value;
                (null == r ? void 0 : r.node) && r.clearTracks();
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    Tile2ComboItem.prototype.stopAllTweensRecursively = function (e) {
        var t, o;
        try {
            for (var n = __values(e.children), i = n.next(); !i.done; i = n.next()) {
                var r = i.value;
                cc.Tween.stopAllByTarget(r);
                this.stopAllTweensRecursively(r);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                i && !i.done && (o = n.return) && o.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
    };
    var Tile2ComboItem_1;
    Tile2ComboItem = Tile2ComboItem_1 = __decorate([
        mj.class
    ], Tile2ComboItem);
    return Tile2ComboItem;
}(BaseUI_1.default));
exports.default = Tile2ComboItem;

cc._RF.pop();