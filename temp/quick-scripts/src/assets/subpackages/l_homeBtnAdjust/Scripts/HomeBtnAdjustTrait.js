"use strict";
cc._RF.push(module, 'df4b9aef55BbYUn422vfJ3+', 'HomeBtnAdjustTrait');
// subpackages/l_homeBtnAdjust/Scripts/HomeBtnAdjustTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var HomeBtnAdjustTrait = /** @class */ (function (_super) {
    __extends(HomeBtnAdjustTrait, _super);
    function HomeBtnAdjustTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._scale = 1.2;
        _this._positions = [20, 20, 0, 20, -20];
        _this._widgetValues = [210, 53];
        return _this;
    }
    Object.defineProperty(HomeBtnAdjustTrait.prototype, "scale", {
        get: function () {
            return null != this._traitData.scale ? this._traitData.scale : this._scale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomeBtnAdjustTrait.prototype, "positions", {
        get: function () {
            return null != this._traitData.positions ? this._traitData.positions : this._positions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomeBtnAdjustTrait.prototype, "widgetValues", {
        get: function () {
            return null != this._traitData.widgetValues ? this._traitData.widgetValues : this._widgetValues;
        },
        enumerable: false,
        configurable: true
    });
    HomeBtnAdjustTrait.prototype.onRankBtn_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[2] && (o.node.y += this.positions[2]);
        null != this.widgetValues[4] && (o.node.getComponent(cc.Widget).right = this.widgetValues[4]);
    };
    HomeBtnAdjustTrait.prototype.onHDailyBtn_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[0] && (o.node.y += this.positions[0]);
        null != this.widgetValues[2] && (o.node.getComponent(cc.Widget).left = this.widgetValues[2]);
    };
    HomeBtnAdjustTrait.prototype.onTaskTt_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[1] && (o.node.y += this.positions[1]);
        null != this.widgetValues[3] && (o.node.getComponent(cc.Widget).right = this.widgetValues[3]);
    };
    HomeBtnAdjustTrait.prototype.onHallNmlBtn_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[3] && (o.node.y += this.positions[3]);
    };
    HomeBtnAdjustTrait.prototype.onTravelBtn_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[4] && (o.node.y += this.positions[4]);
    };
    HomeBtnAdjustTrait.prototype.onHallSetBtn_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[5] && (o.node.y += this.positions[5]);
        null != this.widgetValues[1] && (o.node.getComponent(cc.Widget).right = this.widgetValues[1]);
    };
    HomeBtnAdjustTrait.prototype.onHallBadgeBtn_onLoad = function (t, e) {
        e();
        var o = t.ins;
        o.node.scale = this.scale;
        null != this.positions[6] && (o.node.y += this.positions[6]);
        null != this.widgetValues[0] && (o.node.getComponent(cc.Widget).right = this.widgetValues[0]);
    };
    HomeBtnAdjustTrait.traitKey = "HomeBtnAdjust";
    HomeBtnAdjustTrait = __decorate([
        mj.trait,
        mj.class("HomeBtnAdjustTrait")
    ], HomeBtnAdjustTrait);
    return HomeBtnAdjustTrait;
}(Trait_1.default));
exports.default = HomeBtnAdjustTrait;

cc._RF.pop();