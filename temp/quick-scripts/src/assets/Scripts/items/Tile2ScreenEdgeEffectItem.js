"use strict";
cc._RF.push(module, 'b3422Y+CWVMR7BkikxuzR2h', 'Tile2ScreenEdgeEffectItem');
// Scripts/items/Tile2ScreenEdgeEffectItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var BaseUI_1 = require("../framework/ui/BaseUI");
var Tile2ScreenEdgeEffectItem = /** @class */ (function (_super) {
    __extends(Tile2ScreenEdgeEffectItem, _super);
    function Tile2ScreenEdgeEffectItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._spinLeft = null;
        _this._spinRight = null;
        return _this;
    }
    Tile2ScreenEdgeEffectItem_1 = Tile2ScreenEdgeEffectItem;
    Tile2ScreenEdgeEffectItem.getPrefabPath = function () {
        return "prefabs/effects/Tile2EffectScreenEdge";
    };
    Tile2ScreenEdgeEffectItem.create = function () {
        return this.createUI(this.getPrefabPath()).then(function (e) {
            return e.getComponent(Tile2ScreenEdgeEffectItem_1);
        });
    };
    Tile2ScreenEdgeEffectItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initSpines();
    };
    Tile2ScreenEdgeEffectItem.prototype.initSpines = function () {
        var e = this.getSpinePath(), t = cc.find("leftNode/spin", this.node), o = cc.find("rightNode/spin", this.node);
        t && (this._spinLeft = BaseSpine_1.default.refreshWithNode(t, e));
        o && (this._spinRight = BaseSpine_1.default.refreshWithNode(o, e));
    };
    Tile2ScreenEdgeEffectItem.prototype.getSpinePath = function () {
        return "spine/tile2Combo/gameplay_combo_side";
    };
    Tile2ScreenEdgeEffectItem.prototype.playAnimation = function (e) {
        var t = this.getAnimationName(), o = false, n = function n() {
            if (!o) {
                o = true;
                null == e || e();
            }
        };
        this._spinLeft && this._spinLeft.setAnimation(t, 1, n);
        this._spinRight && this._spinRight.setAnimation(t, 1, n);
        this._spinLeft || this._spinRight || null == e || e();
    };
    Tile2ScreenEdgeEffectItem.prototype.getAnimationName = function () {
        return "in";
    };
    var Tile2ScreenEdgeEffectItem_1;
    __decorate([
        mj.traitEvent("T2ScreenEEffIt_getSpPh")
    ], Tile2ScreenEdgeEffectItem.prototype, "getSpinePath", null);
    Tile2ScreenEdgeEffectItem = Tile2ScreenEdgeEffectItem_1 = __decorate([
        mj.class
    ], Tile2ScreenEdgeEffectItem);
    return Tile2ScreenEdgeEffectItem;
}(BaseUI_1.default));
exports.default = Tile2ScreenEdgeEffectItem;

cc._RF.pop();