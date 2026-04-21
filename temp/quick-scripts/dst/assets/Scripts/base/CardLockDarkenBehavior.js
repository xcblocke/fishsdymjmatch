
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/CardLockDarkenBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd77adSWxzBGdJTYdBhNPNTS', 'CardLockDarkenBehavior');
// Scripts/base/CardLockDarkenBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.CardLockDarkenBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var CardLockDarkenBehavior = /** @class */ (function (_super) {
    __extends(CardLockDarkenBehavior, _super);
    function CardLockDarkenBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardLockDarkenBehavior.prototype.start = function (e) {
        var t = e.data.isAutoMerge || false, o = void 0 === e.data.isShowAni || e.data.isShowAni, n = this.context.getTileMapObject().getCurAllLockCards(), i = n.lockCardIds, a = n.unLockCardIds, l = this.context.getTileNodeMap();
        if (t) {
            this._isShowAni = false;
            this.updateLockIcons(i, l, false);
            this.updateLockIcons(a, l, false);
        }
        else {
            this._isShowAni = o;
            this.updateLockIcons(i, l, true);
            this.updateLockIcons(a, l, false);
        }
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    CardLockDarkenBehavior.prototype.updateLockIcons = function (e, t, o) {
        var n = this;
        e.forEach(function (e) {
            var i = t.get(e);
            if (i) {
                var r = i;
                if ("function" != typeof r.tile2SetLockDarken) {
                    var a = i.imgLockBg;
                    if (a && cc.isValid(a) && a.activeInHierarchy !== o)
                        if (!o && n._isShowAni)
                            n.hideLockIconWithFadeOut(a, null, e);
                        else {
                            o && (a.opacity = 255);
                            a.active = o;
                        }
                }
                else
                    r.tile2SetLockDarken(o, !o && n._isShowAni);
            }
        });
    };
    CardLockDarkenBehavior.prototype.hideLockIconWithFadeOut = function (e, t, o) {
        if (t === void 0) { t = 0; }
        if (o === void 0) { o = ""; }
        var n = this;
        cc.Tween.stopAllByTarget(e);
        cc.tween(e).delay(t).to(0.25, {
            opacity: 0
        }).call(function () {
            var t;
            cc.isValid(e) && (e.active = false);
            if (o) {
                var i = null === (t = n.context.getTileNodeManager()) || void 0 === t ? void 0 : t.getTileNodeByTileId(o);
                if (i && cc.isValid(i.imgLockBg) && 0 != i.tileObject.isCardLock()) {
                    e.active = true;
                    e.opacity = 255;
                }
            }
        }).start();
    };
    return CardLockDarkenBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.CardLockDarkenBehavior = CardLockDarkenBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvQ2FyZExvY2tEYXJrZW5CZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFvRTtBQUNwRSx5REFBd0Q7QUFDeEQ7SUFBNEMsMENBQWlCO0lBQTdEOztJQW9EQSxDQUFDO0lBbkRDLHNDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxFQUNqQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQ25ELENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFDeEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQ2pCLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUNuQixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsRUFBRTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELGdEQUFlLEdBQWYsVUFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNWLElBQUksVUFBVSxJQUFJLE9BQU8sQ0FBQyxDQUFDLGtCQUFrQixFQUFFO29CQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO29CQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsS0FBSyxDQUFDO3dCQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVU7NEJBQUUsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7NkJBQUs7NEJBQ3RILENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7NEJBQ3ZCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3lCQUNkO2lCQUNGOztvQkFBTSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNwRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHdEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBSyxFQUFFLENBQU07UUFBYixrQkFBQSxFQUFBLEtBQUs7UUFBRSxrQkFBQSxFQUFBLE1BQU07UUFDdEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtZQUM1QixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixJQUFJLENBQUMsQ0FBQztZQUNOLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxFQUFFO2dCQUNMLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFO29CQUNsRSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7aUJBQ2pCO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDSCw2QkFBQztBQUFELENBcERBLEFBb0RDLENBcEQyQyxxQ0FBaUIsR0FvRDVEO0FBcERZLHdEQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVCZWhhdmlvckVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIENhcmRMb2NrRGFya2VuQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCA9IGUuZGF0YS5pc0F1dG9NZXJnZSB8fCBmYWxzZSxcbiAgICAgIG8gPSB2b2lkIDAgPT09IGUuZGF0YS5pc1Nob3dBbmkgfHwgZS5kYXRhLmlzU2hvd0FuaSxcbiAgICAgIG4gPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpLmdldEN1ckFsbExvY2tDYXJkcygpLFxuICAgICAgaSA9IG4ubG9ja0NhcmRJZHMsXG4gICAgICBhID0gbi51bkxvY2tDYXJkSWRzLFxuICAgICAgbCA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpO1xuICAgIGlmICh0KSB7XG4gICAgICB0aGlzLl9pc1Nob3dBbmkgPSBmYWxzZTtcbiAgICAgIHRoaXMudXBkYXRlTG9ja0ljb25zKGksIGwsIGZhbHNlKTtcbiAgICAgIHRoaXMudXBkYXRlTG9ja0ljb25zKGEsIGwsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXNTaG93QW5pID0gbztcbiAgICAgIHRoaXMudXBkYXRlTG9ja0ljb25zKGksIGwsIHRydWUpO1xuICAgICAgdGhpcy51cGRhdGVMb2NrSWNvbnMoYSwgbCwgZmFsc2UpO1xuICAgIH1cbiAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICB9XG4gIHVwZGF0ZUxvY2tJY29ucyhlLCB0LCBvKSB7XG4gICAgdmFyIG4gPSB0aGlzO1xuICAgIGUuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGkgPSB0LmdldChlKTtcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIHZhciByID0gaTtcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2Ygci50aWxlMlNldExvY2tEYXJrZW4pIHtcbiAgICAgICAgICB2YXIgYSA9IGkuaW1nTG9ja0JnO1xuICAgICAgICAgIGlmIChhICYmIGNjLmlzVmFsaWQoYSkgJiYgYS5hY3RpdmVJbkhpZXJhcmNoeSAhPT0gbykgaWYgKCFvICYmIG4uX2lzU2hvd0FuaSkgbi5oaWRlTG9ja0ljb25XaXRoRmFkZU91dChhLCBudWxsLCBlKTtlbHNlIHtcbiAgICAgICAgICAgIG8gJiYgKGEub3BhY2l0eSA9IDI1NSk7XG4gICAgICAgICAgICBhLmFjdGl2ZSA9IG87XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Ugci50aWxlMlNldExvY2tEYXJrZW4obywgIW8gJiYgbi5faXNTaG93QW5pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBoaWRlTG9ja0ljb25XaXRoRmFkZU91dChlLCB0ID0gMCwgbyA9IFwiXCIpIHtcbiAgICB2YXIgbiA9IHRoaXM7XG4gICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGUpO1xuICAgIGNjLnR3ZWVuKGUpLmRlbGF5KHQpLnRvKDAuMjUsIHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0O1xuICAgICAgY2MuaXNWYWxpZChlKSAmJiAoZS5hY3RpdmUgPSBmYWxzZSk7XG4gICAgICBpZiAobykge1xuICAgICAgICB2YXIgaSA9IG51bGwgPT09ICh0ID0gbi5jb250ZXh0LmdldFRpbGVOb2RlTWFuYWdlcigpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmdldFRpbGVOb2RlQnlUaWxlSWQobyk7XG4gICAgICAgIGlmIChpICYmIGNjLmlzVmFsaWQoaS5pbWdMb2NrQmcpICYmIDAgIT0gaS50aWxlT2JqZWN0LmlzQ2FyZExvY2soKSkge1xuICAgICAgICAgIGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICBlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KS5zdGFydCgpO1xuICB9XG59Il19