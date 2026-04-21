"use strict";
cc._RF.push(module, '9d17eZKZ7JA2rpdkgTjtKyC', 'BoxBarItem');
// subpackages/l_boxReward/Scripts/BoxBarItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EBoxBarPos = exports.EBoxBarItemState = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var EBoxBarItemState;
(function (EBoxBarItemState) {
    EBoxBarItemState[EBoxBarItemState["Node"] = 0] = "Node";
    EBoxBarItemState[EBoxBarItemState["Normal"] = 1] = "Normal";
    EBoxBarItemState[EBoxBarItemState["HighLight"] = 2] = "HighLight";
    EBoxBarItemState[EBoxBarItemState["Completed"] = 3] = "Completed";
})(EBoxBarItemState = exports.EBoxBarItemState || (exports.EBoxBarItemState = {}));
var EBoxBarPos;
(function (EBoxBarPos) {
    EBoxBarPos[EBoxBarPos["First"] = 0] = "First";
    EBoxBarPos[EBoxBarPos["Middle"] = 1] = "Middle";
    EBoxBarPos[EBoxBarPos["Last"] = 2] = "Last";
})(EBoxBarPos = exports.EBoxBarPos || (exports.EBoxBarPos = {}));
var BoxBarItem = /** @class */ (function (_super) {
    __extends(BoxBarItem, _super);
    function BoxBarItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeIndex = -1;
        _this._barBg = null;
        _this._bar = null;
        _this._highLight = null;
        _this._barNode = null;
        _this.pathIndex = EBoxBarPos.Middle;
        return _this;
    }
    Object.defineProperty(BoxBarItem.prototype, "barBg", {
        get: function () {
            if (this._barBg)
                return this._barBg;
            this._barBg = cc.find("n" + this.pathIndex + "/bg", this.node);
            return this._barBg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoxBarItem.prototype, "bar", {
        get: function () {
            if (this._bar)
                return this._bar;
            this._bar = cc.find("n" + this.pathIndex + "/bar", this.node);
            return this._bar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoxBarItem.prototype, "highLight", {
        get: function () {
            if (this._highLight)
                return this._highLight;
            this._highLight = cc.find("n" + this.pathIndex + "/light", this.node);
            return this._highLight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoxBarItem.prototype, "barNode", {
        get: function () {
            if (this._barNode)
                return this._barNode;
            this._barNode = cc.find("n" + this.pathIndex, this.node);
            return this._barNode;
        },
        enumerable: false,
        configurable: true
    });
    BoxBarItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.setState(EBoxBarItemState.Normal);
    };
    BoxBarItem.prototype.setPathIndex = function (t) {
        this.pathIndex = t;
    };
    BoxBarItem.prototype.setState = function (t) {
        if (cc.isValid(this.barNode) && cc.isValid(this.bar) && cc.isValid(this.highLight) && cc.isValid(this.barBg)) {
            cc.Tween.stopAllByTarget(this.bar);
            cc.Tween.stopAllByTarget(this.highLight);
            switch (t) {
                case EBoxBarItemState.Normal:
                    this.barNode.active = true;
                    this.barBg.active = true;
                    this.bar.active = false;
                    this.highLight.active = false;
                    break;
                case EBoxBarItemState.HighLight:
                    this.playHighLight();
                    break;
                case EBoxBarItemState.Completed:
                    this.barNode.active = true;
                    this.bar.active = true;
                    this.highLight.active = false;
            }
        }
    };
    BoxBarItem.prototype.playHighLight = function () {
        var t = this;
        if (cc.isValid(this.bar) && cc.isValid(this.highLight)) {
            this.barNode.active = true;
            this.bar.active = true;
            this.highLight.active = true;
            this.bar.setScale(0.2, 1);
            this.highLight.setScale(0.2, 1);
            this.highLight.opacity = 0;
            var e = cc.tween().to(0.17, {
                scaleX: 1.05
            }, {
                easing: cc.easing.quadOut
            }).to(0.13, {
                scaleX: 1
            }, {
                easing: cc.easing.quadIn
            }), i = cc.tween().to(0.13, {
                opacity: 255
            }, {
                easing: cc.easing.quadOut
            }).to(0.57, {
                opacity: 0
            }, {
                easing: cc.easing.sineOut
            }).call(function () {
                t.setState(EBoxBarItemState.Completed);
            });
            e.clone(this.bar).start();
            cc.tween(this.highLight).parallel(e.clone(), i.clone()).start();
        }
    };
    BoxBarItem.prefabUrl = "prefabs/boxReward/BoxBarItem";
    BoxBarItem = __decorate([
        mj.class
    ], BoxBarItem);
    return BoxBarItem;
}(BaseUI_1.default));
exports.default = BoxBarItem;

cc._RF.pop();