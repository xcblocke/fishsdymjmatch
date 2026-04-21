
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tilenodes/fsm/ani/FadeNodeStateAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22833QiFndN6ZGttVYu3RdX', 'FadeNodeStateAni');
// Scripts/tilenodes/fsm/ani/FadeNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../../../base/NodeStateAniBase");
var FadeNodeStateAni = /** @class */ (function (_super) {
    __extends(FadeNodeStateAni, _super);
    function FadeNodeStateAni(t, o) {
        var _this = _super.call(this, t, "fade") || this;
        _this._duration = 0.2;
        _this._easing = "";
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        return _this;
    }
    FadeNodeStateAni.prototype.onEnterStart = function (t) {
        var o = this;
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this._currentTween && this._currentTween.stop();
            this._currentTween = cc.tween(this._node).to(this._duration, {
                opacity: 255
            }).call(function () {
                o.onEnterEnd(t);
            }).start();
        }
        else
            this.onEnterEnd(t);
    };
    FadeNodeStateAni.prototype.onExitStart = function (t) {
        var o = this;
        _super.prototype.onExitStart.call(this, t);
        this._currentTween && this._currentTween.stop();
        this._currentTween = cc.tween(this._node).to(this._duration, {
            opacity: 0
        }).call(function () {
            o.onExitEnd(t);
        }).start();
    };
    FadeNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        cc.isValid(this._node) && (this.node.opacity = 255);
    };
    FadeNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.node.opacity = 0;
    };
    FadeNodeStateAni.prototype.applyImmediate = function () {
        if (cc.isValid(this._node) && this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
    };
    FadeNodeStateAni.prototype.reset = function () {
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.node.opacity = 255;
        if (this._onEnteredCallBack) {
            this._onEnteredCallBack();
            this._onEnteredCallBack = void 0;
        }
    };
    return FadeNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.FadeNodeStateAni = FadeNodeStateAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RpbGVub2Rlcy9mc20vYW5pL0ZhZGVOb2RlU3RhdGVBbmkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBa0U7QUFDbEU7SUFBc0Msb0NBQWdCO0lBSXBELDBCQUFZLENBQUMsRUFBRSxDQUFDO1FBQWhCLFlBQ0Usa0JBQU0sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxTQUVqQjtRQU5ELGVBQVMsR0FBRyxHQUFHLENBQUM7UUFDaEIsYUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBR25CLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDOztJQUN6QixDQUFDO0lBQ0QsdUNBQVksR0FBWixVQUFhLENBQUM7UUFDWixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixpQkFBTSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUMzRCxPQUFPLEVBQUUsR0FBRzthQUNiLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNaOztZQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELHNDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDM0QsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxrQ0FBTyxHQUFQLFVBQVEsQ0FBQztRQUNQLGlCQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNELGlDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0QseUNBQWMsR0FBZDtRQUNFLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBQ0QsZ0NBQUssR0FBTDtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0EzREEsQUEyREMsQ0EzRHFDLG1DQUFnQixHQTJEckQ7QUEzRFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZVN0YXRlQW5pQmFzZSB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvTm9kZVN0YXRlQW5pQmFzZSc7XG5leHBvcnQgY2xhc3MgRmFkZU5vZGVTdGF0ZUFuaSBleHRlbmRzIE5vZGVTdGF0ZUFuaUJhc2Uge1xuICBfZHVyYXRpb24gPSAwLjI7XG4gIF9lYXNpbmcgPSBcIlwiO1xuICBfYmFzZVRpbGVOb2RlID0gbnVsbDtcbiAgY29uc3RydWN0b3IodCwgbykge1xuICAgIHN1cGVyKHQsIFwiZmFkZVwiKTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUgPSBvO1xuICB9XG4gIG9uRW50ZXJTdGFydCh0KSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIHN1cGVyLm9uRW50ZXJTdGFydC5jYWxsKHRoaXMsIHQpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gJiYgdGhpcy5fY3VycmVudFR3ZWVuLnN0b3AoKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IGNjLnR3ZWVuKHRoaXMuX25vZGUpLnRvKHRoaXMuX2R1cmF0aW9uLCB7XG4gICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG8ub25FbnRlckVuZCh0KTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIHRoaXMub25FbnRlckVuZCh0KTtcbiAgfVxuICBvbkV4aXRTdGFydCh0KSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIHN1cGVyLm9uRXhpdFN0YXJ0LmNhbGwodGhpcywgdCk7XG4gICAgdGhpcy5fY3VycmVudFR3ZWVuICYmIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgdGhpcy5fY3VycmVudFR3ZWVuID0gY2MudHdlZW4odGhpcy5fbm9kZSkudG8odGhpcy5fZHVyYXRpb24sIHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgIG8ub25FeGl0RW5kKHQpO1xuICAgIH0pLnN0YXJ0KCk7XG4gIH1cbiAgb25FbnRlcih0KSB7XG4gICAgc3VwZXIub25FbnRlci5jYWxsKHRoaXMsIHQpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5fbm9kZSkgJiYgKHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1KTtcbiAgfVxuICBvbkV4aXQodCkge1xuICAgIHN1cGVyLm9uRXhpdC5jYWxsKHRoaXMsIHQpO1xuICAgIGlmICh0aGlzLl9jdXJyZW50VHdlZW4pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSB2b2lkIDA7XG4gICAgfVxuICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgfVxuICBhcHBseUltbWVkaWF0ZSgpIHtcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9ub2RlKSAmJiB0aGlzLl9jdXJyZW50VHdlZW4pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSB2b2lkIDA7XG4gICAgfVxuICB9XG4gIHJlc2V0KCkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50VHdlZW4pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSB2b2lkIDA7XG4gICAgfVxuICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgIGlmICh0aGlzLl9vbkVudGVyZWRDYWxsQmFjaykge1xuICAgICAgdGhpcy5fb25FbnRlcmVkQ2FsbEJhY2soKTtcbiAgICAgIHRoaXMuX29uRW50ZXJlZENhbGxCYWNrID0gdm9pZCAwO1xuICAgIH1cbiAgfVxufSJdfQ==