"use strict";
cc._RF.push(module, '0fb43TU1bRK6rYj+QxAcdcu', 'Tile2ScoreFloatItem');
// Scripts/items/Tile2ScoreFloatItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseUI_1 = require("../framework/ui/BaseUI");
var TweenEasing_1 = require("../base/TweenEasing");
var s = TweenEasing_1.makeCubicBezier(0.25, 1.5, 0.58, 1.15);
var c = TweenEasing_1.makeCubicBezier(0.3, 0.05, 0.78, 0.4);
var u = TweenEasing_1.makeCubicBezier(0.46, 0.18, 0.76, 0.6);
var Tile2ScoreFloatItem = /** @class */ (function (_super) {
    __extends(Tile2ScoreFloatItem, _super);
    function Tile2ScoreFloatItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._lbl = null;
        return _this;
    }
    Tile2ScoreFloatItem_1 = Tile2ScoreFloatItem;
    Tile2ScoreFloatItem.getPrefabNormal = function () {
        return "prefabs/effects/Tile2ClearScoreNormal";
    };
    Tile2ScoreFloatItem.getPrefabCombo = function () {
        return "prefabs/effects/Tile2ClearScoreCombo";
    };
    Tile2ScoreFloatItem.createNormal = function () {
        return this.createUI(this.getPrefabNormal()).then(function (e) {
            return e.getComponent(Tile2ScoreFloatItem_1);
        });
    };
    Tile2ScoreFloatItem.createCombo = function () {
        return this.createUI(this.getPrefabCombo()).then(function (e) {
            return e.getComponent(Tile2ScoreFloatItem_1);
        });
    };
    Tile2ScoreFloatItem.prototype.onLoad = function () {
        var t;
        _super.prototype.onLoad.call(this);
        this._lbl = null === (t = this.node.getChildByName("labelScore")) || void 0 === t ? void 0 : t.getComponent(cc.Label);
    };
    Tile2ScoreFloatItem.prototype.setScore = function (e) {
        this._lbl && (this._lbl.string = this.formatScore(e));
    };
    Tile2ScoreFloatItem.prototype.formatScore = function (e) {
        return "+" + e;
    };
    Tile2ScoreFloatItem.prototype.playFlyToHolderAnimation = function (e, t, o, n) {
        var i, r = this, a = 1 === (i = t) ? 0.067 : 2 === i ? 0.167 : 3 === i ? 0.267 : 4 === i ? 0.4 : 0.5, l = 1 === t, p = l ? 0.6 : 1, f = l ? 0.36 : 0.6;
        this.node.scale = 0;
        this.node.opacity = 255;
        cc.tween(this.node).to(0.2, {
            scale: p
        }, {
            easing: s
        }).delay(0.167).parallel(cc.tween(this.node).to(a, {
            position: e
        }, {
            easing: c
        }), cc.tween(this.node).to(a, {
            scale: f
        }, {
            easing: u
        })).call(function () {
            null == o || o();
            null == n || n();
            r.node.destroy();
        }).start();
    };
    var Tile2ScoreFloatItem_1;
    Tile2ScoreFloatItem = Tile2ScoreFloatItem_1 = __decorate([
        mj.class
    ], Tile2ScoreFloatItem);
    return Tile2ScoreFloatItem;
}(BaseUI_1.default));
exports.default = Tile2ScoreFloatItem;

cc._RF.pop();