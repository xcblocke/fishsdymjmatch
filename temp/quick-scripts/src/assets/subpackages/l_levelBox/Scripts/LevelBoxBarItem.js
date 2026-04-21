"use strict";
cc._RF.push(module, '5bb73WOThpFzYrJFRToUXpn', 'LevelBoxBarItem');
// subpackages/l_levelBox/Scripts/LevelBoxBarItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ELevelBoxBarPos = exports.ELevelBoxBarState = void 0;
var BaseUI_1 = require("../../../Scripts/framework/ui/BaseUI");
var ELevelBoxBarState;
(function (ELevelBoxBarState) {
    ELevelBoxBarState[ELevelBoxBarState["Node"] = 0] = "Node";
    ELevelBoxBarState[ELevelBoxBarState["Normal"] = 1] = "Normal";
    ELevelBoxBarState[ELevelBoxBarState["HighLight"] = 2] = "HighLight";
    ELevelBoxBarState[ELevelBoxBarState["Completed"] = 3] = "Completed";
})(ELevelBoxBarState = exports.ELevelBoxBarState || (exports.ELevelBoxBarState = {}));
var ELevelBoxBarPos;
(function (ELevelBoxBarPos) {
    ELevelBoxBarPos[ELevelBoxBarPos["First"] = 0] = "First";
    ELevelBoxBarPos[ELevelBoxBarPos["Middle"] = 1] = "Middle";
    ELevelBoxBarPos[ELevelBoxBarPos["Last"] = 2] = "Last";
})(ELevelBoxBarPos = exports.ELevelBoxBarPos || (exports.ELevelBoxBarPos = {}));
var LevelBoxBarItem = /** @class */ (function (_super) {
    __extends(LevelBoxBarItem, _super);
    function LevelBoxBarItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._barBg = null;
        _this._bar = null;
        _this._highLight = null;
        _this._barNode = null;
        _this.pathIndex = ELevelBoxBarPos.Middle;
        return _this;
    }
    Object.defineProperty(LevelBoxBarItem.prototype, "barBg", {
        get: function () {
            if (this._barBg)
                return this._barBg;
            this._barBg = cc.find("n" + this.pathIndex + "/bg", this.node);
            return this._barBg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelBoxBarItem.prototype, "bar", {
        get: function () {
            if (this._bar)
                return this._bar;
            this._bar = cc.find("n" + this.pathIndex + "/bar", this.node);
            return this._bar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelBoxBarItem.prototype, "highLight", {
        get: function () {
            if (this._highLight)
                return this._highLight;
            this._highLight = cc.find("n" + this.pathIndex + "/light", this.node);
            return this._highLight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelBoxBarItem.prototype, "barNode", {
        get: function () {
            if (this._barNode)
                return this._barNode;
            this._barNode = cc.find("n" + this.pathIndex, this.node);
            return this._barNode;
        },
        enumerable: false,
        configurable: true
    });
    LevelBoxBarItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.setState(ELevelBoxBarState.Normal);
    };
    LevelBoxBarItem.prototype.setPathIndex = function (t) {
        this.pathIndex = t;
    };
    LevelBoxBarItem.prototype.setItemSize = function (t) {
        this.node.width = t;
        for (var e = 0; e < 3; e++) {
            var i = cc.find("n" + e, this.node);
            if (cc.isValid(i)) {
                i.width = t;
                i.getChildByName("bg").width = t;
                i.getChildByName("bar").width = t - 4;
                i.getChildByName("light").width = t - 4;
            }
        }
    };
    LevelBoxBarItem.prototype.setState = function (t) {
        if (cc.isValid(this.barNode) && cc.isValid(this.bar) && cc.isValid(this.highLight) && cc.isValid(this.barBg)) {
            cc.Tween.stopAllByTarget(this.bar);
            cc.Tween.stopAllByTarget(this.highLight);
            switch (t) {
                case ELevelBoxBarState.Normal:
                    this.barNode.active = true;
                    this.barBg.active = true;
                    this.bar.active = false;
                    this.highLight.active = false;
                    break;
                case ELevelBoxBarState.HighLight:
                    this.playHighLight();
                    break;
                case ELevelBoxBarState.Completed:
                    this.barNode.active = true;
                    this.bar.active = true;
                    this.highLight.active = false;
            }
        }
    };
    LevelBoxBarItem.prototype.playHighLight = function () {
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
                t.setState(ELevelBoxBarState.Completed);
            });
            e.clone(this.bar).start();
            cc.tween(this.highLight).parallel(e.clone(), i.clone()).start();
        }
    };
    LevelBoxBarItem.prefabUrl = "prefabs/levelBox/BarItem";
    LevelBoxBarItem = __decorate([
        mj.class
    ], LevelBoxBarItem);
    return LevelBoxBarItem;
}(BaseUI_1.default));
exports.default = LevelBoxBarItem;

cc._RF.pop();