
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/TileNodeComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4f2aZPsKJADYOIrInKyWLg', 'TileNodeComponent');
// Scripts/TileNodeComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.TileNodeComponent = void 0;
var TileNodeComponent = /** @class */ (function () {
    function TileNodeComponent() {
        this._host = null;
    }
    TileNodeComponent.register = function (e, t) {
        this._registry.set(e, t);
    };
    TileNodeComponent.create = function (e) {
        var t, o;
        return null !== (o = null === (t = this._registry.get(e)) || void 0 === t ? void 0 : t()) && void 0 !== o ? o : null;
    };
    TileNodeComponent.prototype.bind = function (e) {
        this._host = e;
        this.onBind();
    };
    TileNodeComponent.prototype.unbind = function () {
        this.onUnbind();
        this._host = null;
    };
    TileNodeComponent.prototype.onBind = function () { };
    TileNodeComponent.prototype.onUnbind = function () { };
    TileNodeComponent.prototype.onInitAnim = function () { };
    TileNodeComponent.prototype.onRefreshNode = function () { };
    TileNodeComponent.prototype.getResNameOverride = function () {
        return null;
    };
    TileNodeComponent.prototype.onShowPropHint = function () { };
    TileNodeComponent.prototype.onHidePropHint = function () { };
    TileNodeComponent.prototype.onPlaySelectAnimation = function () { };
    TileNodeComponent.prototype.onCancelSelectedAnimation = function () { };
    TileNodeComponent.prototype.onClearCancelSelected = function () { };
    TileNodeComponent.prototype.onStopAllAnimation = function () { };
    TileNodeComponent.prototype.onClear = function () { };
    TileNodeComponent.prototype.onDestroy = function () { };
    TileNodeComponent.prototype.onUpdateImgCard = function () {
        return false;
    };
    TileNodeComponent.prototype.onUpdateImgCardBg = function () {
        return false;
    };
    TileNodeComponent.prototype.onUpdateShadowNode = function () {
        return false;
    };
    TileNodeComponent.prototype.onUpdateLockBg = function () {
        return false;
    };
    TileNodeComponent.prototype.onUpdateEffectSelected = function () {
        return false;
    };
    TileNodeComponent.prototype.onShowSelectEffect = function () {
        return false;
    };
    TileNodeComponent.prototype.onHideSelectEffect = function () { };
    TileNodeComponent.prototype.onRealShowSelectEffect = function () {
        return false;
    };
    TileNodeComponent._registry = new Map();
    return TileNodeComponent;
}());
exports.TileNodeComponent = TileNodeComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGVOb2RlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUNFLFVBQUssR0FBRyxJQUFJLENBQUM7SUFzRGYsQ0FBQztJQXBEUSwwQkFBUSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ00sd0JBQU0sR0FBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkgsQ0FBQztJQUNELGdDQUFJLEdBQUosVUFBSyxDQUFDO1FBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUNELGtDQUFNLEdBQU4sY0FBVSxDQUFDO0lBQ1gsb0NBQVEsR0FBUixjQUFZLENBQUM7SUFDYixzQ0FBVSxHQUFWLGNBQWMsQ0FBQztJQUNmLHlDQUFhLEdBQWIsY0FBaUIsQ0FBQztJQUNsQiw4Q0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCwwQ0FBYyxHQUFkLGNBQWtCLENBQUM7SUFDbkIsMENBQWMsR0FBZCxjQUFrQixDQUFDO0lBQ25CLGlEQUFxQixHQUFyQixjQUF5QixDQUFDO0lBQzFCLHFEQUF5QixHQUF6QixjQUE2QixDQUFDO0lBQzlCLGlEQUFxQixHQUFyQixjQUF5QixDQUFDO0lBQzFCLDhDQUFrQixHQUFsQixjQUFzQixDQUFDO0lBQ3ZCLG1DQUFPLEdBQVAsY0FBVyxDQUFDO0lBQ1oscUNBQVMsR0FBVCxjQUFhLENBQUM7SUFDZCwyQ0FBZSxHQUFmO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsNkNBQWlCLEdBQWpCO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsOENBQWtCLEdBQWxCO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsMENBQWMsR0FBZDtRQUNFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELGtEQUFzQixHQUF0QjtRQUNFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELDhDQUFrQixHQUFsQjtRQUNFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELDhDQUFrQixHQUFsQixjQUFzQixDQUFDO0lBQ3ZCLGtEQUFzQixHQUF0QjtRQUNFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQXBETSwyQkFBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFxRC9CLHdCQUFDO0NBdkRELEFBdURDLElBQUE7QUF2RFksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRpbGVOb2RlQ29tcG9uZW50IHtcbiAgX2hvc3QgPSBudWxsO1xuICBzdGF0aWMgX3JlZ2lzdHJ5ID0gbmV3IE1hcCgpO1xuICBzdGF0aWMgcmVnaXN0ZXIoZSwgdCkge1xuICAgIHRoaXMuX3JlZ2lzdHJ5LnNldChlLCB0KTtcbiAgfVxuICBzdGF0aWMgY3JlYXRlKGUpIHtcbiAgICB2YXIgdCwgbztcbiAgICByZXR1cm4gbnVsbCAhPT0gKG8gPSBudWxsID09PSAodCA9IHRoaXMuX3JlZ2lzdHJ5LmdldChlKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdCgpKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogbnVsbDtcbiAgfVxuICBiaW5kKGUpIHtcbiAgICB0aGlzLl9ob3N0ID0gZTtcbiAgICB0aGlzLm9uQmluZCgpO1xuICB9XG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLm9uVW5iaW5kKCk7XG4gICAgdGhpcy5faG9zdCA9IG51bGw7XG4gIH1cbiAgb25CaW5kKCkge31cbiAgb25VbmJpbmQoKSB7fVxuICBvbkluaXRBbmltKCkge31cbiAgb25SZWZyZXNoTm9kZSgpIHt9XG4gIGdldFJlc05hbWVPdmVycmlkZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBvblNob3dQcm9wSGludCgpIHt9XG4gIG9uSGlkZVByb3BIaW50KCkge31cbiAgb25QbGF5U2VsZWN0QW5pbWF0aW9uKCkge31cbiAgb25DYW5jZWxTZWxlY3RlZEFuaW1hdGlvbigpIHt9XG4gIG9uQ2xlYXJDYW5jZWxTZWxlY3RlZCgpIHt9XG4gIG9uU3RvcEFsbEFuaW1hdGlvbigpIHt9XG4gIG9uQ2xlYXIoKSB7fVxuICBvbkRlc3Ryb3koKSB7fVxuICBvblVwZGF0ZUltZ0NhcmQoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIG9uVXBkYXRlSW1nQ2FyZEJnKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBvblVwZGF0ZVNoYWRvd05vZGUoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIG9uVXBkYXRlTG9ja0JnKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBvblVwZGF0ZUVmZmVjdFNlbGVjdGVkKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBvblNob3dTZWxlY3RFZmZlY3QoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIG9uSGlkZVNlbGVjdEVmZmVjdCgpIHt9XG4gIG9uUmVhbFNob3dTZWxlY3RFZmZlY3QoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59Il19