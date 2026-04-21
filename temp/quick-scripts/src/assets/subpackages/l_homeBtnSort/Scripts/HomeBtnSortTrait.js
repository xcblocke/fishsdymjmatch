"use strict";
cc._RF.push(module, 'f71a2j1vSVNG57OqyJqyVUJ', 'HomeBtnSortTrait');
// subpackages/l_homeBtnSort/Scripts/HomeBtnSortTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var Constant_1 = require("./Constant");
var HomeBtnSortTrait = /** @class */ (function (_super) {
    __extends(HomeBtnSortTrait, _super);
    function HomeBtnSortTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allBtnCfgList = [];
        _this.allBtnRunList = [];
        _this._hallType2RunInfolMap = new Map();
        return _this;
    }
    Object.defineProperty(HomeBtnSortTrait.prototype, "rightMargin", {
        get: function () {
            return null != this._traitData.rightMargin ? this._traitData.rightMargin : Constant_1.RIGHT_MARGIN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomeBtnSortTrait.prototype, "leftMargin", {
        get: function () {
            return null != this._traitData.leftMargin ? this._traitData.leftMargin : Constant_1.LEFT_MARGIN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomeBtnSortTrait.prototype, "positionYSpace", {
        get: function () {
            return null != this._traitData.positionYSpace ? this._traitData.positionYSpace : Constant_1.POSITION_Y_SPACE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HomeBtnSortTrait.prototype, "minPositionY", {
        get: function () {
            return null != this._traitData.minPositionY ? this._traitData.minPositionY : Constant_1.MIN_POSITION_Y;
        },
        enumerable: false,
        configurable: true
    });
    HomeBtnSortTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t.MsgEnableHomeBtn = this.onEnableHomeBtn.bind(this);
        return _t;
    };
    HomeBtnSortTrait.prototype.onEnableHomeBtn = function (t) {
        if (t && t.type && t.node && (Constant_1.HallBtnType.Travel != t.type || this.isClassicExist())) {
            this.collectButton(t.type, t.node);
            this.updateAllBtnPosition();
        }
    };
    HomeBtnSortTrait.prototype.getConfigByType = function (t) {
        var i, o = {
            type: t,
            fixedPosition: -1,
            priority: -1,
            position: -1
        }, n = null === (i = this._traitData.config) || void 0 === i ? void 0 : i.buttonList;
        if (!n)
            return o;
        var e = n.find(function (i) {
            return i.type === t;
        });
        return e ? GameUtils_1.default.deepClone(e) : o;
    };
    HomeBtnSortTrait.prototype.checkValid = function () {
        for (var t = this.allBtnRunList.length - 1; t >= 0; t--) {
            var i = this.allBtnRunList[t];
            if (!i || !cc.isValid(i.node)) {
                this.allBtnRunList.splice(t, 1);
                this.allBtnCfgList.splice(t, 1);
            }
        }
    };
    HomeBtnSortTrait.prototype.collectButton = function (t, i) {
        this.checkValid();
        var o = this.getRunInfoByType(t);
        if (o)
            o.node = i;
        else {
            this.allBtnCfgList.push(this.getConfigByType(t));
            this.allBtnRunList.push({
                type: t,
                node: i,
                position: 0
            });
        }
        this.performSort();
    };
    HomeBtnSortTrait.prototype.updateAllBtnPosition = function () {
        var t = this;
        this._hallType2RunInfolMap.forEach(function (i) {
            t.updateBtnPosition(i);
        });
    };
    HomeBtnSortTrait.prototype.updateBtnPosition = function (t) {
        this.setBtnHorizontal(t);
        this.setBtnVertical(t);
    };
    HomeBtnSortTrait.prototype.setBtnHorizontal = function (t) {
        var i = 0 == t.position % 2, o = t.node, n = o.getComponent(cc.Widget);
        n || (n = o.addComponent(cc.Widget));
        n.isAlignRight = i;
        n.isAlignLeft = !i;
        if (i) {
            n.right = this.rightMargin;
        }
        else {
            n.left = this.leftMargin;
        }
        n.updateAlignment();
    };
    HomeBtnSortTrait.prototype.setBtnVertical = function (t) {
        var i = t.node, o = i.getComponent(cc.Widget);
        o || (o = i.addComponent(cc.Widget));
        o.isAlignTop = false;
        o.isAlignBottom = false;
        var n = this.minPositionY, e = this.positionYSpace, r = n + (Math.floor((t.position + 1) / 2) - 1) * e, a = i.position;
        i.setPosition(a.x, r);
        o.updateAlignment();
    };
    HomeBtnSortTrait.prototype.getRunInfoByType = function (t) {
        for (var i = 0; i < this.allBtnRunList.length; i++) {
            var o = this.allBtnRunList[i];
            if (o.type === t)
                return o;
        }
        return null;
    };
    HomeBtnSortTrait.prototype.performSort = function () {
        this._hallType2RunInfolMap.clear();
        this.localData.hallPosition2TypeRecord = {};
        this.allBtnCfgList.sort(function (t, i) {
            return i.priority - t.priority;
        });
        for (var t = 0; t < this.allBtnCfgList.length; t++) {
            var i = this.allBtnCfgList[t], o = this.getRunInfoByType(i.type);
            if (i.fixedPosition > 0 && i.fixedPosition <= 8 && !this._hallType2RunInfolMap.has(i.type) && o && o.node.active) {
                this._hallType2RunInfolMap.set(i.type, {
                    type: i.type,
                    node: o.node,
                    position: i.fixedPosition
                });
                this.localData.hallPosition2TypeRecord[i.fixedPosition] = i.type;
            }
        }
        var n = this.getUnpairedPositions(), e = 0;
        for (t = 0; t < this.allBtnCfgList.length; t++) {
            var r = this.allBtnCfgList[t].type;
            if ((o = this.getRunInfoByType(r)) && o.node.active && !this._hallType2RunInfolMap.has(r) && e < n.length) {
                var a = n[e];
                this._hallType2RunInfolMap.set(r, {
                    type: r,
                    node: o.node,
                    position: a
                });
                this.localData.hallPosition2TypeRecord[a] = r;
                e++;
            }
        }
        var s = this.getRemainEmptyPositions();
        for (t = 0; t < this.allBtnCfgList.length; t++) {
            i = this.allBtnCfgList[t];
            if ((o = this.getRunInfoByType(i.type)) && o.node.active && !this._hallType2RunInfolMap.has(i.type) && s.length > 0) {
                a = -1;
                for (var l = 0; l < s.length; l++)
                    if (i.position == s[l]) {
                        a = s.splice(l, 1)[0];
                        break;
                    }
                a <= 0 && (a = s.splice(0, 1)[0]);
                this._hallType2RunInfolMap.set(i.type, {
                    type: i.type,
                    node: o.node,
                    position: a
                });
                this.localData.hallPosition2TypeRecord[a] = i.type;
            }
        }
        this.localData.hallPosition2TypeRecord = this.localData.hallPosition2TypeRecord;
    };
    HomeBtnSortTrait.prototype.getUnpairedPositions = function () {
        var t, i, o = [];
        try {
            for (var n = __values(Constant_1.POSITION_PAIRS), e = n.next(); !e.done; e = n.next()) {
                var r = e.value, l = __read(r, 2), p = l[0], u = l[1], f = this.localData.hallPosition2TypeRecord[p], h = this.localData.hallPosition2TypeRecord[u];
                if (f && !h) {
                    o.push(u);
                }
                else {
                    !f && h && o.push(p);
                }
            }
        }
        catch (i) {
            t = {
                error: i
            };
        }
        finally {
            try {
                e && !e.done && (i = n.return) && i.call(n);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        return o;
    };
    HomeBtnSortTrait.prototype.getRemainEmptyPositions = function () {
        for (var t = [], i = 0; i < Constant_1.POSITION_LIST.length; i++) {
            var o = Constant_1.POSITION_LIST[i];
            this.localData.hallPosition2TypeRecord[o] || t.push(o);
        }
        return t;
    };
    HomeBtnSortTrait.prototype.isClassicExist = function () {
        var t, i, o;
        return null === (o = null === (i = null === (t = mj.getClassByName("ClassicTrait")) || void 0 === t ? void 0 : t.getInstance) || void 0 === i ? void 0 : i.call(t)) || void 0 === o ? void 0 : o.eventEnabled;
    };
    HomeBtnSortTrait.traitKey = "HomeBtnSort";
    HomeBtnSortTrait = __decorate([
        mj.trait,
        mj.class("HomeBtnSortTrait")
    ], HomeBtnSortTrait);
    return HomeBtnSortTrait;
}(Trait_1.default));
exports.default = HomeBtnSortTrait;

cc._RF.pop();