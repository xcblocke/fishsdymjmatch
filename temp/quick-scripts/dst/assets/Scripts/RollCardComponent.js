
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/RollCardComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38acd6o7GRNnpV7PGaGGB9q', 'RollCardComponent');
// Scripts/RollCardComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.RollCardComponent = void 0;
var Tile2FlipNodeStateAni_1 = require("./fsm/ani/Tile2FlipNodeStateAni");
var TileNodeComponent_1 = require("./TileNodeComponent");
var RollCardComponent = /** @class */ (function (_super) {
    __extends(RollCardComponent, _super);
    function RollCardComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isBack = false;
        _this.keepOpen = function () {
            return false;
        };
        return _this;
    }
    Object.defineProperty(RollCardComponent.prototype, "isBack", {
        get: function () {
            return this._isBack;
        },
        enumerable: false,
        configurable: true
    });
    RollCardComponent.prototype.setIsBack = function (e) {
        this._isBack = e;
    };
    RollCardComponent.prototype.onInitAnim = function () {
        this._flipAni || (this._flipAni = new Tile2FlipNodeStateAni_1.Tile2FlipNodeStateAni(this._host.tileNode, this._host, this));
    };
    RollCardComponent.prototype.onRefreshNode = function () {
        var e, t;
        this._isBack = this._host.tileObject.getIsBack();
        if (this.keepOpen() || 0 == this._isBack) {
            null === (e = this._flipAni) || void 0 === e || e.forceEnter();
        }
        else {
            null === (t = this._flipAni) || void 0 === t || t.forceExit();
        }
    };
    RollCardComponent.prototype.getResNameOverride = function () {
        return this._isBack ? "gameplay_img_mj_dn" : null;
    };
    RollCardComponent.prototype.onShowPropHint = function () { };
    RollCardComponent.prototype.onHidePropHint = function () { };
    RollCardComponent.prototype.onPlaySelectAnimation = function () {
        var e;
        null === (e = this._flipAni) || void 0 === e || e.playAni();
    };
    RollCardComponent.prototype.onCancelSelectedAnimation = function () {
        var e, t = this._host.effectPropHint;
        this.keepOpen() || t && t.active || null === (e = this._flipAni) || void 0 === e || e.exitAni();
    };
    RollCardComponent.prototype.onClearCancelSelected = function () {
        var e, t;
        if (this._isBack) {
            null === (t = this._flipAni) || void 0 === t || t.playAni();
        }
        else {
            null === (e = this._flipAni) || void 0 === e || e.forceEnter();
        }
    };
    RollCardComponent.prototype.onStopAllAnimation = function () {
        var e;
        this.keepOpen() || null === (e = this._flipAni) || void 0 === e || e.forceExit();
    };
    RollCardComponent.prototype.onClear = function () {
        var e;
        this._isBack = false;
        null === (e = this._flipAni) || void 0 === e || e.forceEnter();
    };
    RollCardComponent.prototype.playReveal = function (e, t) {
        var o, n;
        if (e) {
            null === (o = this._flipAni) || void 0 === o || o.exitAniForce(void 0, t);
        }
        else {
            null === (n = this._flipAni) || void 0 === n || n.playAniForce(void 0, t);
        }
    };
    RollCardComponent.prototype.showFrontImmediately = function () {
        var e;
        this._isBack = false;
        null === (e = this._flipAni) || void 0 === e || e.forceEnter();
    };
    RollCardComponent.prototype.showBackImmediately = function () {
        var e;
        this._isBack = true;
        null === (e = this._flipAni) || void 0 === e || e.forceExit();
    };
    RollCardComponent.prototype.playRoll = function (e, t) {
        var o, n;
        if (e) {
            null === (o = this._flipAni) || void 0 === o || o.exitAni(void 0, t);
        }
        else {
            null === (n = this._flipAni) || void 0 === n || n.playAni(void 0, t);
        }
    };
    RollCardComponent.prototype.playFly = function () { };
    __decorate([
        mj.traitEvent("RollCrdComp_refreshNode")
    ], RollCardComponent.prototype, "onRefreshNode", null);
    __decorate([
        mj.traitEvent("RollCrdComp_playFly")
    ], RollCardComponent.prototype, "playFly", null);
    return RollCardComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.RollCardComponent = RollCardComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1JvbGxDYXJkQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXdFO0FBQ3hFLHlEQUF3RDtBQUN4RDtJQUF1QyxxQ0FBaUI7SUFBeEQ7UUFBQSxxRUFtRkM7UUFsRkMsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFRLEdBQUc7WUFDVCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQzs7SUErRUosQ0FBQztJQTlFQyxzQkFBSSxxQ0FBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0QscUNBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0Qsc0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksNkNBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCx5Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN4QyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDaEU7YUFBTTtZQUNMLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMs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b2RlU3RhdGVBbmkgfSBmcm9tICcuL2ZzbS9hbmkvVGlsZTJGbGlwTm9kZVN0YXRlQW5pJztcbmltcG9ydCB7IFRpbGVOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9UaWxlTm9kZUNvbXBvbmVudCc7XG5leHBvcnQgY2xhc3MgUm9sbENhcmRDb21wb25lbnQgZXh0ZW5kcyBUaWxlTm9kZUNvbXBvbmVudCB7XG4gIF9pc0JhY2sgPSBmYWxzZTtcbiAga2VlcE9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBnZXQgaXNCYWNrKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0JhY2s7XG4gIH1cbiAgc2V0SXNCYWNrKGUpIHtcbiAgICB0aGlzLl9pc0JhY2sgPSBlO1xuICB9XG4gIG9uSW5pdEFuaW0oKSB7XG4gICAgdGhpcy5fZmxpcEFuaSB8fCAodGhpcy5fZmxpcEFuaSA9IG5ldyBUaWxlMkZsaXBOb2RlU3RhdGVBbmkodGhpcy5faG9zdC50aWxlTm9kZSwgdGhpcy5faG9zdCwgdGhpcykpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiUm9sbENyZENvbXBfcmVmcmVzaE5vZGVcIilcbiAgb25SZWZyZXNoTm9kZSgpIHtcbiAgICB2YXIgZSwgdDtcbiAgICB0aGlzLl9pc0JhY2sgPSB0aGlzLl9ob3N0LnRpbGVPYmplY3QuZ2V0SXNCYWNrKCk7XG4gICAgaWYgKHRoaXMua2VlcE9wZW4oKSB8fCAwID09IHRoaXMuX2lzQmFjaykge1xuICAgICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9mbGlwQW5pKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5mb3JjZUVudGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG51bGwgPT09ICh0ID0gdGhpcy5fZmxpcEFuaSkgfHwgdm9pZCAwID09PSB0IHx8IHQuZm9yY2VFeGl0KCk7XG4gICAgfVxuICB9XG4gIGdldFJlc05hbWVPdmVycmlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNCYWNrID8gXCJnYW1lcGxheV9pbWdfbWpfZG5cIiA6IG51bGw7XG4gIH1cbiAgb25TaG93UHJvcEhpbnQoKSB7fVxuICBvbkhpZGVQcm9wSGludCgpIHt9XG4gIG9uUGxheVNlbGVjdEFuaW1hdGlvbigpIHtcbiAgICB2YXIgZTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuX2ZsaXBBbmkpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnBsYXlBbmkoKTtcbiAgfVxuICBvbkNhbmNlbFNlbGVjdGVkQW5pbWF0aW9uKCkge1xuICAgIHZhciBlLFxuICAgICAgdCA9IHRoaXMuX2hvc3QuZWZmZWN0UHJvcEhpbnQ7XG4gICAgdGhpcy5rZWVwT3BlbigpIHx8IHQgJiYgdC5hY3RpdmUgfHwgbnVsbCA9PT0gKGUgPSB0aGlzLl9mbGlwQW5pKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5leGl0QW5pKCk7XG4gIH1cbiAgb25DbGVhckNhbmNlbFNlbGVjdGVkKCkge1xuICAgIHZhciBlLCB0O1xuICAgIGlmICh0aGlzLl9pc0JhY2spIHtcbiAgICAgIG51bGwgPT09ICh0ID0gdGhpcy5fZmxpcEFuaSkgfHwgdm9pZCAwID09PSB0IHx8IHQucGxheUFuaSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBudWxsID09PSAoZSA9IHRoaXMuX2ZsaXBBbmkpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmZvcmNlRW50ZXIoKTtcbiAgICB9XG4gIH1cbiAgb25TdG9wQWxsQW5pbWF0aW9uKCkge1xuICAgIHZhciBlO1xuICAgIHRoaXMua2VlcE9wZW4oKSB8fCBudWxsID09PSAoZSA9IHRoaXMuX2ZsaXBBbmkpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmZvcmNlRXhpdCgpO1xuICB9XG4gIG9uQ2xlYXIoKSB7XG4gICAgdmFyIGU7XG4gICAgdGhpcy5faXNCYWNrID0gZmFsc2U7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9mbGlwQW5pKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5mb3JjZUVudGVyKCk7XG4gIH1cbiAgcGxheVJldmVhbChlLCB0KSB7XG4gICAgdmFyIG8sIG47XG4gICAgaWYgKGUpIHtcbiAgICAgIG51bGwgPT09IChvID0gdGhpcy5fZmxpcEFuaSkgfHwgdm9pZCAwID09PSBvIHx8IG8uZXhpdEFuaUZvcmNlKHZvaWQgMCwgdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG51bGwgPT09IChuID0gdGhpcy5fZmxpcEFuaSkgfHwgdm9pZCAwID09PSBuIHx8IG4ucGxheUFuaUZvcmNlKHZvaWQgMCwgdCk7XG4gICAgfVxuICB9XG4gIHNob3dGcm9udEltbWVkaWF0ZWx5KCkge1xuICAgIHZhciBlO1xuICAgIHRoaXMuX2lzQmFjayA9IGZhbHNlO1xuICAgIG51bGwgPT09IChlID0gdGhpcy5fZmxpcEFuaSkgfHwgdm9pZCAwID09PSBlIHx8IGUuZm9yY2VFbnRlcigpO1xuICB9XG4gIHNob3dCYWNrSW1tZWRpYXRlbHkoKSB7XG4gICAgdmFyIGU7XG4gICAgdGhpcy5faXNCYWNrID0gdHJ1ZTtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuX2ZsaXBBbmkpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmZvcmNlRXhpdCgpO1xuICB9XG4gIHBsYXlSb2xsKGUsIHQpIHtcbiAgICB2YXIgbywgbjtcbiAgICBpZiAoZSkge1xuICAgICAgbnVsbCA9PT0gKG8gPSB0aGlzLl9mbGlwQW5pKSB8fCB2b2lkIDAgPT09IG8gfHwgby5leGl0QW5pKHZvaWQgMCwgdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG51bGwgPT09IChuID0gdGhpcy5fZmxpcEFuaSkgfHwgdm9pZCAwID09PSBuIHx8IG4ucGxheUFuaSh2b2lkIDAsIHQpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIlJvbGxDcmRDb21wX3BsYXlGbHlcIilcbiAgcGxheUZseSgpIHt9XG59Il19