"use strict";
cc._RF.push(module, '1f29d6L64pMIoQoepN5cWi8', 'SlotBarView');
// Scripts/gamePlay/tile2game/view/SlotBarView.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../core/simulator/constant/GameTypeEnums");
var SlotBarEffectManager_1 = require("../../../core/view/items/SlotBarEffectManager");
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var SlotBarView = /** @class */ (function (_super) {
    __extends(SlotBarView, _super);
    function SlotBarView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nodeLayer = null;
        _this._slotBarCount = 4;
        _this._slotBarNodeList = [];
        _this._slotBarEffectManager = null;
        _this._slotType = GameTypeEnums_1.ETile2SlotType.Slot3;
        return _this;
    }
    Object.defineProperty(SlotBarView.prototype, "slotBarEffectManager", {
        get: function () {
            return this._slotBarEffectManager;
        },
        enumerable: false,
        configurable: true
    });
    SlotBarView.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._nodeLayer = cc.find("nodeLayer/content", this.node);
    };
    SlotBarView.prototype.getSlotType = function () {
        return this._slotType;
    };
    SlotBarView.prototype.init = function (e) {
        this._slotType = e;
        if (e === GameTypeEnums_1.ETile2SlotType.Slot4) {
            var t = cc.find("nodeBgEffect", this.node), o = cc.find("nodeTop", this.node);
            t && o && (this._slotBarEffectManager = new SlotBarEffectManager_1.default(t, o));
        }
    };
    SlotBarView.prototype.resetSlotBar = function () {
        var e;
        this._slotBarNodeList = [];
        null === (e = this._slotBarEffectManager) || void 0 === e || e.reset();
    };
    SlotBarView.prototype.getNodeLayer = function () {
        return this._nodeLayer;
    };
    SlotBarView.prototype.getPosition = function (e, t) {
        if (this._slotType === GameTypeEnums_1.ETile2SlotType.Slot4) {
            var o = e.tileObject.getWidthInSlotBar(), n = this._slotBarCount, i = t * o, r = Math.abs(o * n * 0.5);
            return new cc.Vec3(i - r + o / 2, 0, 0);
        }
        o = 113.5, n = this._slotBarCount - 1;
        return new cc.Vec3(t * o - o * (n - 1), 0, 0);
    };
    SlotBarView.prototype.getWorldPosition = function (e, t) {
        var o = this.getPosition(e, t);
        return this.getNodeLayer().convertToWorldSpaceAR(o);
    };
    SlotBarView.prototype.addTileNode = function (e, t, o) {
        if (o === void 0) { o = false; }
        var n, i;
        var r = false;
        try {
            for (var l = __values(this._slotBarNodeList), s = l.next(); !s.done; s = l.next()) {
                var c = s.value;
                if (c.tileNode.tileObject.id == e.tileObject.id) {
                    c.index = t;
                    r = true;
                    break;
                }
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                s && !s.done && (i = l.return) && i.call(l);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        r || this._slotBarNodeList.push({
            index: t,
            tileNode: e
        });
        var u = this.getPosition(e, t);
        if (o) {
            e.updateZIndexInSlotBar(t);
        }
        else {
            e.addToSlotBar(this._nodeLayer, t, u, e.tileObject.getScaleInSlotBar(), this._slotType);
        }
    };
    SlotBarView.prototype.moveTileNode = function (e, t, o, n) {
        if (n === void 0) { n = false; }
        this.addTileNode(e, o, n);
    };
    SlotBarView.prototype.removeSlotBar = function (e) {
        var t, o, n = [];
        try {
            for (var i = __values(this._slotBarNodeList), r = i.next(); !r.done; r = i.next()) {
                var l = r.value;
                e.includes(l.tileNode.tileObject.id) || n.push(l);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                r && !r.done && (o = i.return) && o.call(i);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        this._slotBarNodeList = n;
    };
    SlotBarView.prototype.hasTileNode = function (e) {
        var t, o;
        try {
            for (var n = __values(this._slotBarNodeList), i = n.next(); !i.done; i = n.next())
                if (i.value.tileNode.tileObject.id == e)
                    return true;
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
        return false;
    };
    SlotBarView = __decorate([
        mj.class
    ], SlotBarView);
    return SlotBarView;
}(BaseUI_1.default));
exports.default = SlotBarView;

cc._RF.pop();