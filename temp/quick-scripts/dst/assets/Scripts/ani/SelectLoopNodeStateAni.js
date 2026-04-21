
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ani/SelectLoopNodeStateAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e547ek1xQtJFJWgPGG3ydTQ', 'SelectLoopNodeStateAni');
// Scripts/ani/SelectLoopNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectLoopNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../base/NodeStateAniBase");
var SelectLoopNodeStateAni = /** @class */ (function (_super) {
    __extends(SelectLoopNodeStateAni, _super);
    function SelectLoopNodeStateAni(t, o) {
        var _this = _super.call(this, t, "selectLoop") || this;
        _this._isLooping = false;
        _this._originalY = 0;
        _this._moveUpOffset = 8;
        _this._upDuration = 0.66;
        _this._downDuration = 0.66;
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        return _this;
    }
    SelectLoopNodeStateAni.prototype.configure = function (e) {
        if (e) {
            void 0 !== e.moveUpOffset && (this._moveUpOffset = e.moveUpOffset);
            void 0 !== e.upDuration && (this._upDuration = e.upDuration);
            void 0 !== e.downDuration && (this._downDuration = e.downDuration);
        }
    };
    SelectLoopNodeStateAni.prototype.onEnterStart = function (t) {
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this._currentTween && this._currentTween.stop();
            this._originalY = this._node.y;
            this._isLooping = true;
            t && "object" == typeof t && this.configure(t);
            this.playLoopAnimation();
            this.onEnterEnd(t);
        }
        else
            this.onEnterEnd(t);
    };
    SelectLoopNodeStateAni.prototype.playLoopAnimation = function () {
        var e = this;
        if (cc.isValid(this._node) && this._isLooping) {
            var t = this._originalY + this._moveUpOffset;
            this._currentTween = cc.tween(this._node).to(this._upDuration, {
                y: t
            }, {
                easing: "sineInOut"
            }).to(this._downDuration, {
                y: this._originalY
            }, {
                easing: "sineInOut"
            }).call(function () {
                e._isLooping && e.playLoopAnimation();
            }).start();
        }
    };
    SelectLoopNodeStateAni.prototype.onExitStart = function (t) {
        _super.prototype.onExitStart.call(this, t);
        this._isLooping = false;
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        if (cc.isValid(this._node)) {
            this._node.y = this._originalY;
            this.onExitEnd(t);
        }
        else
            this.onExitEnd(t);
    };
    SelectLoopNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        if (cc.isValid(this._node)) {
            this._originalY = this._node.y;
            this._isLooping = true;
            this.playLoopAnimation();
        }
    };
    SelectLoopNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        this._isLooping = false;
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = null;
        }
        cc.isValid(this._node) && (this._node.y = this._originalY);
    };
    SelectLoopNodeStateAni.prototype.applyImmediate = function () {
        if (cc.isValid(this._node)) {
            this._isLooping = false;
            if (this._currentTween) {
                this._currentTween.stop();
                this._currentTween = void 0;
            }
            this._node.y = this._originalY;
        }
    };
    SelectLoopNodeStateAni.prototype.isLooping = function () {
        return this._isLooping;
    };
    return SelectLoopNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.SelectLoopNodeStateAni = SelectLoopNodeStateAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2FuaS9TZWxlY3RMb29wTm9kZVN0YXRlQW5pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTREO0FBQzVEO0lBQTRDLDBDQUFnQjtJQU8xRCxnQ0FBWSxDQUFDLEVBQUUsQ0FBQztRQUFoQixZQUNFLGtCQUFNLENBQUMsRUFBRSxZQUFZLENBQUMsU0FFdkI7UUFURCxnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBR25CLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDOztJQUN6QixDQUFDO0lBQ0QsMENBQVMsR0FBVCxVQUFVLENBQUM7UUFDVCxJQUFJLENBQUMsRUFBRTtZQUNMLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQztJQUNELDZDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osaUJBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJ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YSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFDRCxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsK0NBQWMsR0FBZDtRQUNFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNoQztJQUNILENBQUM7SUFDRCwwQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDSCw2QkFBQztBQUFELENBeEZBLEFBd0ZDLENBeEYyQyxtQ0FBZ0IsR0F3RjNEO0FBeEZZLHdEQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vZGVTdGF0ZUFuaUJhc2UgfSBmcm9tICcuLi9iYXNlL05vZGVTdGF0ZUFuaUJhc2UnO1xuZXhwb3J0IGNsYXNzIFNlbGVjdExvb3BOb2RlU3RhdGVBbmkgZXh0ZW5kcyBOb2RlU3RhdGVBbmlCYXNlIHtcbiAgX2lzTG9vcGluZyA9IGZhbHNlO1xuICBfb3JpZ2luYWxZID0gMDtcbiAgX21vdmVVcE9mZnNldCA9IDg7XG4gIF91cER1cmF0aW9uID0gMC42NjtcbiAgX2Rvd25EdXJhdGlvbiA9IDAuNjY7XG4gIF9iYXNlVGlsZU5vZGUgPSBudWxsO1xuICBjb25zdHJ1Y3Rvcih0LCBvKSB7XG4gICAgc3VwZXIodCwgXCJzZWxlY3RMb29wXCIpO1xuICAgIHRoaXMuX2Jhc2VUaWxlTm9kZSA9IG87XG4gIH1cbiAgY29uZmlndXJlKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgdm9pZCAwICE9PSBlLm1vdmVVcE9mZnNldCAmJiAodGhpcy5fbW92ZVVwT2Zmc2V0ID0gZS5tb3ZlVXBPZmZzZXQpO1xuICAgICAgdm9pZCAwICE9PSBlLnVwRHVyYXRpb24gJiYgKHRoaXMuX3VwRHVyYXRpb24gPSBlLnVwRHVyYXRpb24pO1xuICAgICAgdm9pZCAwICE9PSBlLmRvd25EdXJhdGlvbiAmJiAodGhpcy5fZG93bkR1cmF0aW9uID0gZS5kb3duRHVyYXRpb24pO1xuICAgIH1cbiAgfVxuICBvbkVudGVyU3RhcnQodCkge1xuICAgIHN1cGVyLm9uRW50ZXJTdGFydC5jYWxsKHRoaXMsIHQpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gJiYgdGhpcy5fY3VycmVudFR3ZWVuLnN0b3AoKTtcbiAgICAgIHRoaXMuX29yaWdpbmFsWSA9IHRoaXMuX25vZGUueTtcbiAgICAgIHRoaXMuX2lzTG9vcGluZyA9IHRydWU7XG4gICAgICB0ICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIHQgJiYgdGhpcy5jb25maWd1cmUodCk7XG4gICAgICB0aGlzLnBsYXlMb29wQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLm9uRW50ZXJFbmQodCk7XG4gICAgfSBlbHNlIHRoaXMub25FbnRlckVuZCh0KTtcbiAgfVxuICBwbGF5TG9vcEFuaW1hdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbm9kZSkgJiYgdGhpcy5faXNMb29waW5nKSB7XG4gICAgICB2YXIgdCA9IHRoaXMuX29yaWdpbmFsWSArIHRoaXMuX21vdmVVcE9mZnNldDtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IGNjLnR3ZWVuKHRoaXMuX25vZGUpLnRvKHRoaXMuX3VwRHVyYXRpb24sIHtcbiAgICAgICAgeTogdFxuICAgICAgfSwge1xuICAgICAgICBlYXNpbmc6IFwic2luZUluT3V0XCJcbiAgICAgIH0pLnRvKHRoaXMuX2Rvd25EdXJhdGlvbiwge1xuICAgICAgICB5OiB0aGlzLl9vcmlnaW5hbFlcbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcInNpbmVJbk91dFwiXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZS5faXNMb29waW5nICYmIGUucGxheUxvb3BBbmltYXRpb24oKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICB9XG4gIG9uRXhpdFN0YXJ0KHQpIHtcbiAgICBzdXBlci5vbkV4aXRTdGFydC5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMuX2lzTG9vcGluZyA9IGZhbHNlO1xuICAgIGlmICh0aGlzLl9jdXJyZW50VHdlZW4pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSB2b2lkIDA7XG4gICAgfVxuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB0aGlzLl9ub2RlLnkgPSB0aGlzLl9vcmlnaW5hbFk7XG4gICAgICB0aGlzLm9uRXhpdEVuZCh0KTtcbiAgICB9IGVsc2UgdGhpcy5vbkV4aXRFbmQodCk7XG4gIH1cbiAgb25FbnRlcih0KSB7XG4gICAgc3VwZXIub25FbnRlci5jYWxsKHRoaXMsIHQpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB0aGlzLl9vcmlnaW5hbFkgPSB0aGlzLl9ub2RlLnk7XG4gICAgICB0aGlzLl9pc0xvb3BpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5wbGF5TG9vcEFuaW1hdGlvbigpO1xuICAgIH1cbiAgfVxuICBvbkV4aXQodCkge1xuICAgIHN1cGVyLm9uRXhpdC5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMuX2lzTG9vcGluZyA9IGZhbHNlO1xuICAgIGlmICh0aGlzLl9jdXJyZW50VHdlZW4pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSBudWxsO1xuICAgIH1cbiAgICBjYy5pc1ZhbGlkKHRoaXMuX25vZGUpICYmICh0aGlzLl9ub2RlLnkgPSB0aGlzLl9vcmlnaW5hbFkpO1xuICB9XG4gIGFwcGx5SW1tZWRpYXRlKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB0aGlzLl9pc0xvb3BpbmcgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLl9jdXJyZW50VHdlZW4pIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFR3ZWVuLnN0b3AoKTtcbiAgICAgICAgdGhpcy5fY3VycmVudFR3ZWVuID0gdm9pZCAwO1xuICAgICAgfVxuICAgICAgdGhpcy5fbm9kZS55ID0gdGhpcy5fb3JpZ2luYWxZO1xuICAgIH1cbiAgfVxuICBpc0xvb3BpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTG9vcGluZztcbiAgfVxufSJdfQ==