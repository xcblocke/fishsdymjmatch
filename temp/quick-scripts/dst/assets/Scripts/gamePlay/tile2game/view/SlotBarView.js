
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/tile2game/view/SlotBarView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L3RpbGUyZ2FtZS92aWV3L1Nsb3RCYXJWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRkFBZ0Y7QUFDaEYsc0ZBQWlGO0FBQ2pGLHVEQUFrRDtBQUVsRDtJQUF5QywrQkFBTTtJQUEvQztRQUFBLHFFQTJIQztRQTFIQyxnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixtQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixzQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIsMkJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLGVBQVMsR0FBRyw4QkFBYyxDQUFDLEtBQUssQ0FBQzs7SUFzSG5DLENBQUM7SUFySEMsc0JBQUksNkNBQW9CO2FBQXhCO1lBQ0UsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFDRCw0QkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDRCxpQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCwwQkFBSSxHQUFKLFVBQUssQ0FBQztRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLDhCQUFjLENBQUMsS0FBSyxFQUFFO1lBQzlCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDeEMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksOEJBQW9CLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekU7SUFDSCxDQUFDO0lBQ0Qsa0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6RSxDQUFDO0lBQ0Qsa0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsaUNBQVcsR0FBWCxVQUFZLENBQUMsRUFBRSxDQUFDO1FBQ2QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLDhCQUFjLENBQUMsS0FBSyxFQUFFO1lBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsRUFDdEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQ3RCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNULENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDNUIsT0FBTyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsc0NBQWdCLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxpQ0FBVyxHQUFYLFVBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFTO1FBQVQsa0JBQUEsRUFBQSxTQUFTO1FBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNkLElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNqRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRTtvQkFDL0MsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ1osQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDVCxNQUFNO2lCQUNQO2FBQ0Y7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1lBQzlCLEtBQUssRUFBRSxDQUFDO1lBQ1IsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsRUFBRTtZQUNMLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ0wsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6RjtJQUNILENBQUM7SUFDRCxrQ0FBWSxHQUFaLFVBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBUztRQUFULGtCQUFBLEVBQUEsU0FBUztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELG1DQUFhLEdBQWIsVUFBYyxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxFQUFFLENBQUM7UUFDVCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDakYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxpQ0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQztvQkFBRSxPQUFPLElBQUksQ0FBQztTQUN6STtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQTFIa0IsV0FBVztRQUQvQixFQUFFLENBQUMsS0FBSztPQUNZLFdBQVcsQ0EySC9CO0lBQUQsa0JBQUM7Q0EzSEQsQUEySEMsQ0EzSHdDLGdCQUFNLEdBMkg5QztrQkEzSG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVGlsZTJTbG90VHlwZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFNsb3RCYXJFZmZlY3RNYW5hZ2VyIGZyb20gJy4uLy4uLy4uL2NvcmUvdmlldy9pdGVtcy9TbG90QmFyRWZmZWN0TWFuYWdlcic7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL2ZyYW1ld29yay91aS9CYXNlVUknO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90QmFyVmlldyBleHRlbmRzIEJhc2VVSSB7XG4gIF9ub2RlTGF5ZXIgPSBudWxsO1xuICBfc2xvdEJhckNvdW50ID0gNDtcbiAgX3Nsb3RCYXJOb2RlTGlzdCA9IFtdO1xuICBfc2xvdEJhckVmZmVjdE1hbmFnZXIgPSBudWxsO1xuICBfc2xvdFR5cGUgPSBFVGlsZTJTbG90VHlwZS5TbG90MztcbiAgZ2V0IHNsb3RCYXJFZmZlY3RNYW5hZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLl9zbG90QmFyRWZmZWN0TWFuYWdlcjtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fbm9kZUxheWVyID0gY2MuZmluZChcIm5vZGVMYXllci9jb250ZW50XCIsIHRoaXMubm9kZSk7XG4gIH1cbiAgZ2V0U2xvdFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nsb3RUeXBlO1xuICB9XG4gIGluaXQoZSkge1xuICAgIHRoaXMuX3Nsb3RUeXBlID0gZTtcbiAgICBpZiAoZSA9PT0gRVRpbGUyU2xvdFR5cGUuU2xvdDQpIHtcbiAgICAgIHZhciB0ID0gY2MuZmluZChcIm5vZGVCZ0VmZmVjdFwiLCB0aGlzLm5vZGUpLFxuICAgICAgICBvID0gY2MuZmluZChcIm5vZGVUb3BcIiwgdGhpcy5ub2RlKTtcbiAgICAgIHQgJiYgbyAmJiAodGhpcy5fc2xvdEJhckVmZmVjdE1hbmFnZXIgPSBuZXcgU2xvdEJhckVmZmVjdE1hbmFnZXIodCwgbykpO1xuICAgIH1cbiAgfVxuICByZXNldFNsb3RCYXIoKSB7XG4gICAgdmFyIGU7XG4gICAgdGhpcy5fc2xvdEJhck5vZGVMaXN0ID0gW107XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9zbG90QmFyRWZmZWN0TWFuYWdlcikgfHwgdm9pZCAwID09PSBlIHx8IGUucmVzZXQoKTtcbiAgfVxuICBnZXROb2RlTGF5ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGVMYXllcjtcbiAgfVxuICBnZXRQb3NpdGlvbihlLCB0KSB7XG4gICAgaWYgKHRoaXMuX3Nsb3RUeXBlID09PSBFVGlsZTJTbG90VHlwZS5TbG90NCkge1xuICAgICAgdmFyIG8gPSBlLnRpbGVPYmplY3QuZ2V0V2lkdGhJblNsb3RCYXIoKSxcbiAgICAgICAgbiA9IHRoaXMuX3Nsb3RCYXJDb3VudCxcbiAgICAgICAgaSA9IHQgKiBvLFxuICAgICAgICByID0gTWF0aC5hYnMobyAqIG4gKiAwLjUpO1xuICAgICAgcmV0dXJuIG5ldyBjYy5WZWMzKGkgLSByICsgbyAvIDIsIDAsIDApO1xuICAgIH1cbiAgICBvID0gMTEzLjUsIG4gPSB0aGlzLl9zbG90QmFyQ291bnQgLSAxO1xuICAgIHJldHVybiBuZXcgY2MuVmVjMyh0ICogbyAtIG8gKiAobiAtIDEpLCAwLCAwKTtcbiAgfVxuICBnZXRXb3JsZFBvc2l0aW9uKGUsIHQpIHtcbiAgICB2YXIgbyA9IHRoaXMuZ2V0UG9zaXRpb24oZSwgdCk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZUxheWVyKCkuY29udmVydFRvV29ybGRTcGFjZUFSKG8pO1xuICB9XG4gIGFkZFRpbGVOb2RlKGUsIHQsIG8gPSBmYWxzZSkge1xuICAgIHZhciBuLCBpO1xuICAgIHZhciByID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGwgPSBfX3ZhbHVlcyh0aGlzLl9zbG90QmFyTm9kZUxpc3QpLCBzID0gbC5uZXh0KCk7ICFzLmRvbmU7IHMgPSBsLm5leHQoKSkge1xuICAgICAgICB2YXIgYyA9IHMudmFsdWU7XG4gICAgICAgIGlmIChjLnRpbGVOb2RlLnRpbGVPYmplY3QuaWQgPT0gZS50aWxlT2JqZWN0LmlkKSB7XG4gICAgICAgICAgYy5pbmRleCA9IHQ7XG4gICAgICAgICAgciA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmIChpID0gbC5yZXR1cm4pICYmIGkuY2FsbChsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByIHx8IHRoaXMuX3Nsb3RCYXJOb2RlTGlzdC5wdXNoKHtcbiAgICAgIGluZGV4OiB0LFxuICAgICAgdGlsZU5vZGU6IGVcbiAgICB9KTtcbiAgICB2YXIgdSA9IHRoaXMuZ2V0UG9zaXRpb24oZSwgdCk7XG4gICAgaWYgKG8pIHtcbiAgICAgIGUudXBkYXRlWkluZGV4SW5TbG90QmFyKHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlLmFkZFRvU2xvdEJhcih0aGlzLl9ub2RlTGF5ZXIsIHQsIHUsIGUudGlsZU9iamVjdC5nZXRTY2FsZUluU2xvdEJhcigpLCB0aGlzLl9zbG90VHlwZSk7XG4gICAgfVxuICB9XG4gIG1vdmVUaWxlTm9kZShlLCB0LCBvLCBuID0gZmFsc2UpIHtcbiAgICB0aGlzLmFkZFRpbGVOb2RlKGUsIG8sIG4pO1xuICB9XG4gIHJlbW92ZVNsb3RCYXIoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4gPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgaSA9IF9fdmFsdWVzKHRoaXMuX3Nsb3RCYXJOb2RlTGlzdCksIHIgPSBpLm5leHQoKTsgIXIuZG9uZTsgciA9IGkubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gci52YWx1ZTtcbiAgICAgICAgZS5pbmNsdWRlcyhsLnRpbGVOb2RlLnRpbGVPYmplY3QuaWQpIHx8IG4ucHVzaChsKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgciAmJiAhci5kb25lICYmIChvID0gaS5yZXR1cm4pICYmIG8uY2FsbChpKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zbG90QmFyTm9kZUxpc3QgPSBuO1xuICB9XG4gIGhhc1RpbGVOb2RlKGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgbiA9IF9fdmFsdWVzKHRoaXMuX3Nsb3RCYXJOb2RlTGlzdCksIGkgPSBuLm5leHQoKTsgIWkuZG9uZTsgaSA9IG4ubmV4dCgpKSBpZiAoaS52YWx1ZS50aWxlTm9kZS50aWxlT2JqZWN0LmlkID09IGUpIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHQgPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpICYmICFpLmRvbmUgJiYgKG8gPSBuLnJldHVybikgJiYgby5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKHQpIHRocm93IHQuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSJdfQ==