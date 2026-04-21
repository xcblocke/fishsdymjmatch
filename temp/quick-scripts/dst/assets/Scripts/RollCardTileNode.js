
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/RollCardTileNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f98cjHavBCq4IG51pmWd9D', 'RollCardTileNode');
// Scripts/RollCardTileNode.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RollCardTileNode = void 0;
var BaseSprite_1 = require("./gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("./gamePlay/user/CardUtil");
var TileTypeEnum_1 = require("./simulator/constant/TileTypeEnum");
var FlipStateCtl_1 = require("./fsm/ctl/FlipStateCtl");
var TileNodeObject_1 = require("./TileNodeObject");
var RollCardTileNode = /** @class */ (function (_super) {
    __extends(RollCardTileNode, _super);
    function RollCardTileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._initType = TileTypeEnum_1.ETileNodeShowType.RollCard;
        _this._isBack = false;
        return _this;
    }
    Object.defineProperty(RollCardTileNode.prototype, "isBack", {
        get: function () {
            return this._isBack;
        },
        enumerable: false,
        configurable: true
    });
    RollCardTileNode.prototype.keepOpen = function () {
        return false;
    };
    RollCardTileNode.prototype.setIsBack = function (e) {
        this._isBack = e;
    };
    RollCardTileNode.prototype.refreshNode = function (t) {
        var o, n;
        _super.prototype.refreshNode.call(this, t);
        if (this.keepOpen()) {
            null === (o = this._tileFlipStateCtl) || void 0 === o || o.forceEnter();
        }
        else {
            null === (n = this._tileFlipStateCtl) || void 0 === n || n.forceExit();
        }
    };
    RollCardTileNode.prototype.updateImgCard = function () {
        var e = CardUtil_1.default.getAtlasPathAndBundleName(this._isBack ? "gameplay_img_mj_dn" : this.tileObject.resName, this), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.imgCard, t, n, false, o);
        var i = CardUtil_1.default.getAtlasPathAndBundleName(this.tileObject.resName, this);
        this.saveCardUniqueInfo(i.bundleName, i.path, i.fromAtlas);
    };
    RollCardTileNode.prototype.showPropHint = function () {
        var t;
        _super.prototype.showPropHint.call(this);
        this._isBack && (null === (t = this._tileFlipStateCtl) || void 0 === t || t.playEnterAni());
    };
    RollCardTileNode.prototype.hidePropHint = function () {
        var t;
        _super.prototype.hidePropHint.call(this);
        this._isBack || this.keepOpen() || null === (t = this._tileFlipStateCtl) || void 0 === t || t.playExitAni();
    };
    RollCardTileNode.prototype.updateAnimMgr = function () {
        _super.prototype.updateAnimMgr.call(this);
        this._tileFlipStateCtl || (this._tileFlipStateCtl = new FlipStateCtl_1.FlipStateCtl(this.tileNode, this));
    };
    RollCardTileNode.prototype.playSelectAnimation = function (t) {
        var o;
        _super.prototype.playSelectAnimation.call(this, t);
        null === (o = this._tileFlipStateCtl) || void 0 === o || o.playEnterAni();
    };
    RollCardTileNode.prototype.cancelSelectedAnimation = function (t) {
        var o;
        _super.prototype.cancelSelectedAnimation.call(this, t);
        this.keepOpen() || this._effectPropHint && this._effectPropHint.active || null === (o = this._tileFlipStateCtl) || void 0 === o || o.playExitAni();
    };
    RollCardTileNode.prototype.clearCancelSelected = function () {
        _super.prototype.clearCancelSelected.call(this);
        this.onClearCancelSelected();
    };
    RollCardTileNode.prototype.onClearCancelSelected = function () {
        var e, t;
        if (this.isBack) {
            null === (t = this._tileFlipStateCtl) || void 0 === t || t.playEnterAni();
        }
        else {
            null === (e = this._tileFlipStateCtl) || void 0 === e || e.forceEnter();
        }
    };
    RollCardTileNode.prototype.stopAllAnimation = function () {
        var t;
        _super.prototype.stopAllAnimation.call(this);
        this.keepOpen() || null === (t = this._tileFlipStateCtl) || void 0 === t || t.forceExit();
    };
    __decorate([
        mj.traitEvent("RollCTNode_keepOpen")
    ], RollCardTileNode.prototype, "keepOpen", null);
    __decorate([
        mj.traitEvent("RollCTNode_clearCelSel")
    ], RollCardTileNode.prototype, "onClearCancelSelected", null);
    return RollCardTileNode;
}(TileNodeObject_1.TileNodeObject));
exports.RollCardTileNode = RollCardTileNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1JvbGxDYXJkVGlsZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQscURBQWdEO0FBQ2hELGtFQUFzRTtBQUN0RSx1REFBc0Q7QUFDdEQsbURBQWtEO0FBQ2xEO0lBQXNDLG9DQUFjO0lBQXBEO1FBQUEscUVBeUVDO1FBeEVDLGVBQVMsR0FBRyxnQ0FBaUIsQ0FBQyxRQUFRLENBQUM7UUFDdkMsYUFBTyxHQUFHLEtBQUssQ0FBQzs7SUF1RWxCLENBQUM7SUF0RUMsc0JBQUksb0NBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELG1DQUFRLEdBQVI7UUFDRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxvQ0FBUyxHQUFULFVBQVUsQ0FBQztRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDRCxzQ0FBVyxHQUFYLFVBQVksQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULGlCQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ25CLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3pFO2FBQU07WUFDTCxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN4RTtJQUNILENBQUM7SUFDRCx3Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsa0JBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQzdHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUNWLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsQixvQkFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxHQUFHLGtCQUFRLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNELHVDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUNELHVDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUcsQ0FBQztJQUNELHdDQUFhLEdBQWI7UUFDRSxpQkFBTSxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLDJCQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDRCw4Q0FBbUIsR0FBbkIsVUFBb0IsQ0FBQztRQUNuQixJQUFJLENBQUMsQ0FBQztRQUNOLGlCQUFNLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUUsQ0FBQztJQUNELGtEQUF1QixHQUF2QixVQUF3QixDQUFDO1FBQ3ZCLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNySixDQUFDO0lBQ0QsOENBQW1CLEdBQW5CO1FBQ0UsaUJBQU0sbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFRCxnREFBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMzRTthQUFNO1lBQ0wsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDekU7SUFDSCxDQUFDO0lBQ0QsMkNBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLENBQUM7UUFDTixpQkFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVGLENBQUM7SUFqRUQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO29EQUdwQztJQW1ERDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7aUVBUXZDO0lBTUgsdUJBQUM7Q0F6RUQsQUF5RUMsQ0F6RXFDLCtCQUFjLEdBeUVuRDtBQXpFWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZVNwcml0ZSBmcm9tICcuL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwcml0ZSc7XG5pbXBvcnQgQ2FyZFV0aWwgZnJvbSAnLi9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbmltcG9ydCB7IEVUaWxlTm9kZVNob3dUeXBlIH0gZnJvbSAnLi9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IEZsaXBTdGF0ZUN0bCB9IGZyb20gJy4vZnNtL2N0bC9GbGlwU3RhdGVDdGwnO1xuaW1wb3J0IHsgVGlsZU5vZGVPYmplY3QgfSBmcm9tICcuL1RpbGVOb2RlT2JqZWN0JztcbmV4cG9ydCBjbGFzcyBSb2xsQ2FyZFRpbGVOb2RlIGV4dGVuZHMgVGlsZU5vZGVPYmplY3Qge1xuICBfaW5pdFR5cGUgPSBFVGlsZU5vZGVTaG93VHlwZS5Sb2xsQ2FyZDtcbiAgX2lzQmFjayA9IGZhbHNlO1xuICBnZXQgaXNCYWNrKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0JhY2s7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJSb2xsQ1ROb2RlX2tlZXBPcGVuXCIpXG4gIGtlZXBPcGVuKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzZXRJc0JhY2soZSkge1xuICAgIHRoaXMuX2lzQmFjayA9IGU7XG4gIH1cbiAgcmVmcmVzaE5vZGUodCkge1xuICAgIHZhciBvLCBuO1xuICAgIHN1cGVyLnJlZnJlc2hOb2RlLmNhbGwodGhpcywgdCk7XG4gICAgaWYgKHRoaXMua2VlcE9wZW4oKSkge1xuICAgICAgbnVsbCA9PT0gKG8gPSB0aGlzLl90aWxlRmxpcFN0YXRlQ3RsKSB8fCB2b2lkIDAgPT09IG8gfHwgby5mb3JjZUVudGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG51bGwgPT09IChuID0gdGhpcy5fdGlsZUZsaXBTdGF0ZUN0bCkgfHwgdm9pZCAwID09PSBuIHx8IG4uZm9yY2VFeGl0KCk7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUltZ0NhcmQoKSB7XG4gICAgdmFyIGUgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKHRoaXMuX2lzQmFjayA/IFwiZ2FtZXBsYXlfaW1nX21qX2RuXCIgOiB0aGlzLnRpbGVPYmplY3QucmVzTmFtZSwgdGhpcyksXG4gICAgICB0ID0gZS5wYXRoLFxuICAgICAgbyA9IGUuYnVuZGxlTmFtZSxcbiAgICAgIG4gPSBlLmZyb21BdGxhcztcbiAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLmltZ0NhcmQsIHQsIG4sIGZhbHNlLCBvKTtcbiAgICB2YXIgaSA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUodGhpcy50aWxlT2JqZWN0LnJlc05hbWUsIHRoaXMpO1xuICAgIHRoaXMuc2F2ZUNhcmRVbmlxdWVJbmZvKGkuYnVuZGxlTmFtZSwgaS5wYXRoLCBpLmZyb21BdGxhcyk7XG4gIH1cbiAgc2hvd1Byb3BIaW50KCkge1xuICAgIHZhciB0O1xuICAgIHN1cGVyLnNob3dQcm9wSGludC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2lzQmFjayAmJiAobnVsbCA9PT0gKHQgPSB0aGlzLl90aWxlRmxpcFN0YXRlQ3RsKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5wbGF5RW50ZXJBbmkoKSk7XG4gIH1cbiAgaGlkZVByb3BIaW50KCkge1xuICAgIHZhciB0O1xuICAgIHN1cGVyLmhpZGVQcm9wSGludC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2lzQmFjayB8fCB0aGlzLmtlZXBPcGVuKCkgfHwgbnVsbCA9PT0gKHQgPSB0aGlzLl90aWxlRmxpcFN0YXRlQ3RsKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5wbGF5RXhpdEFuaSgpO1xuICB9XG4gIHVwZGF0ZUFuaW1NZ3IoKSB7XG4gICAgc3VwZXIudXBkYXRlQW5pbU1nci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3RpbGVGbGlwU3RhdGVDdGwgfHwgKHRoaXMuX3RpbGVGbGlwU3RhdGVDdGwgPSBuZXcgRmxpcFN0YXRlQ3RsKHRoaXMudGlsZU5vZGUsIHRoaXMpKTtcbiAgfVxuICBwbGF5U2VsZWN0QW5pbWF0aW9uKHQpIHtcbiAgICB2YXIgbztcbiAgICBzdXBlci5wbGF5U2VsZWN0QW5pbWF0aW9uLmNhbGwodGhpcywgdCk7XG4gICAgbnVsbCA9PT0gKG8gPSB0aGlzLl90aWxlRmxpcFN0YXRlQ3RsKSB8fCB2b2lkIDAgPT09IG8gfHwgby5wbGF5RW50ZXJBbmkoKTtcbiAgfVxuICBjYW5jZWxTZWxlY3RlZEFuaW1hdGlvbih0KSB7XG4gICAgdmFyIG87XG4gICAgc3VwZXIuY2FuY2VsU2VsZWN0ZWRBbmltYXRpb24uY2FsbCh0aGlzLCB0KTtcbiAgICB0aGlzLmtlZXBPcGVuKCkgfHwgdGhpcy5fZWZmZWN0UHJvcEhpbnQgJiYgdGhpcy5fZWZmZWN0UHJvcEhpbnQuYWN0aXZlIHx8IG51bGwgPT09IChvID0gdGhpcy5fdGlsZUZsaXBTdGF0ZUN0bCkgfHwgdm9pZCAwID09PSBvIHx8IG8ucGxheUV4aXRBbmkoKTtcbiAgfVxuICBjbGVhckNhbmNlbFNlbGVjdGVkKCkge1xuICAgIHN1cGVyLmNsZWFyQ2FuY2VsU2VsZWN0ZWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xlYXJDYW5jZWxTZWxlY3RlZCgpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUm9sbENUTm9kZV9jbGVhckNlbFNlbFwiKVxuICBvbkNsZWFyQ2FuY2VsU2VsZWN0ZWQoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgaWYgKHRoaXMuaXNCYWNrKSB7XG4gICAgICBudWxsID09PSAodCA9IHRoaXMuX3RpbGVGbGlwU3RhdGVDdGwpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnBsYXlFbnRlckFuaSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBudWxsID09PSAoZSA9IHRoaXMuX3RpbGVGbGlwU3RhdGVDdGwpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmZvcmNlRW50ZXIoKTtcbiAgICB9XG4gIH1cbiAgc3RvcEFsbEFuaW1hdGlvbigpIHtcbiAgICB2YXIgdDtcbiAgICBzdXBlci5zdG9wQWxsQW5pbWF0aW9uLmNhbGwodGhpcyk7XG4gICAgdGhpcy5rZWVwT3BlbigpIHx8IG51bGwgPT09ICh0ID0gdGhpcy5fdGlsZUZsaXBTdGF0ZUN0bCkgfHwgdm9pZCAwID09PSB0IHx8IHQuZm9yY2VFeGl0KCk7XG4gIH1cbn0iXX0=