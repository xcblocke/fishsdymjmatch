
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ani/DropNodeStateAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e17ddT8GhHX61IBUV6ub1U', 'DropNodeStateAni');
// Scripts/ani/DropNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DropNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../base/NodeStateAniBase");
var DropNodeStateAni = /** @class */ (function (_super) {
    __extends(DropNodeStateAni, _super);
    function DropNodeStateAni(t, o) {
        var _this = _super.call(this, t, "drop") || this;
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        return _this;
    }
    DropNodeStateAni.prototype.onEnterStart = function (t) {
        var o = this;
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this._currentTween && this._currentTween.stop();
            var n = this._baseTileNode.tileObject.getPosition();
            this._currentTween = cc.tween(this._node).to(0.56, {
                position: n
            }, {
                easing: "backOut"
            }).call(function () {
                o.onEnterEnd(t);
                o._currentTween = void 0;
            }).start();
        }
        else
            this.onEnterEnd(t);
    };
    DropNodeStateAni.prototype.onExitStart = function (t) {
        _super.prototype.onExitStart.call(this, t);
        this._currentTween && this._currentTween.stop();
        this.onExitEnd(t);
    };
    DropNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        var o = this._baseTileNode.tileObject.getPosition();
        this._node.position = o;
    };
    DropNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        var o = this._baseTileNode.tileObject.getPosition();
        this._node.position = o;
    };
    DropNodeStateAni.prototype.applyImmediate = function () {
        if (cc.isValid(this._node) && this._currentTween) {
            if (this._currentTween) {
                this._currentTween.stop();
                this._currentTween = void 0;
            }
            var e = this._baseTileNode.tileObject.getPosition();
            this._node.position = e;
            this.onExitEnd();
            this._onEnteredCallBack = null;
        }
    };
    return DropNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.DropNodeStateAni = DropNodeStateAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2FuaS9Ecm9wTm9kZVN0YXRlQW5pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTREO0FBQzVEO0lBQXNDLG9DQUFnQjtJQUVwRCwwQkFBWSxDQUFDLEVBQUUsQ0FBQztRQUFoQixZQUNFLGtCQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsU0FFakI7UUFKRCxtQkFBYSxHQUFHLElBQUksQ0FBQztRQUduQixLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQzs7SUFDekIsQ0FBQztJQUNELHVDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsaUJBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO2dCQUNqRCxRQUFRLEVBQUUsQ0FBQzthQUNaLEVBQUU7Z0JBQ0QsTUFBTSxFQUFFLFNBQVM7YUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDTixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ1o7O1lBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsc0NBQVcsR0FBWCxVQUFZLENBQUM7UUFDWCxpQkFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0Qsa0NBQU8sR0FBUCxVQUFRLENBQUM7UUFDUCxpQkFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxpQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHlDQUFjLEdBQWQ7UUFDRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0F6REEsQUF5REMsQ0F6RHFDLG1DQUFnQixHQXlEckQ7QUF6RFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZVN0YXRlQW5pQmFzZSB9IGZyb20gJy4uL2Jhc2UvTm9kZVN0YXRlQW5pQmFzZSc7XG5leHBvcnQgY2xhc3MgRHJvcE5vZGVTdGF0ZUFuaSBleHRlbmRzIE5vZGVTdGF0ZUFuaUJhc2Uge1xuICBfYmFzZVRpbGVOb2RlID0gbnVsbDtcbiAgY29uc3RydWN0b3IodCwgbykge1xuICAgIHN1cGVyKHQsIFwiZHJvcFwiKTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUgPSBvO1xuICB9XG4gIG9uRW50ZXJTdGFydCh0KSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIHN1cGVyLm9uRW50ZXJTdGFydC5jYWxsKHRoaXMsIHQpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gJiYgdGhpcy5fY3VycmVudFR3ZWVuLnN0b3AoKTtcbiAgICAgIHZhciBuID0gdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVPYmplY3QuZ2V0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IGNjLnR3ZWVuKHRoaXMuX25vZGUpLnRvKDAuNTYsIHtcbiAgICAgICAgcG9zaXRpb246IG5cbiAgICAgIH0sIHtcbiAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG8ub25FbnRlckVuZCh0KTtcbiAgICAgICAgby5fY3VycmVudFR3ZWVuID0gdm9pZCAwO1xuICAgICAgfSkuc3RhcnQoKTtcbiAgICB9IGVsc2UgdGhpcy5vbkVudGVyRW5kKHQpO1xuICB9XG4gIG9uRXhpdFN0YXJ0KHQpIHtcbiAgICBzdXBlci5vbkV4aXRTdGFydC5jYWxsKHRoaXMsIHQpO1xuICAgIHRoaXMuX2N1cnJlbnRUd2VlbiAmJiB0aGlzLl9jdXJyZW50VHdlZW4uc3RvcCgpO1xuICAgIHRoaXMub25FeGl0RW5kKHQpO1xuICB9XG4gIG9uRW50ZXIodCkge1xuICAgIHN1cGVyLm9uRW50ZXIuY2FsbCh0aGlzLCB0KTtcbiAgICBpZiAodGhpcy5fY3VycmVudFR3ZWVuKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuID0gdm9pZCAwO1xuICAgIH1cbiAgICB2YXIgbyA9IHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LmdldFBvc2l0aW9uKCk7XG4gICAgdGhpcy5fbm9kZS5wb3NpdGlvbiA9IG87XG4gIH1cbiAgb25FeGl0KHQpIHtcbiAgICBzdXBlci5vbkV4aXQuY2FsbCh0aGlzLCB0KTtcbiAgICBpZiAodGhpcy5fY3VycmVudFR3ZWVuKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4uc3RvcCgpO1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuID0gdm9pZCAwO1xuICAgIH1cbiAgICB2YXIgbyA9IHRoaXMuX2Jhc2VUaWxlTm9kZS50aWxlT2JqZWN0LmdldFBvc2l0aW9uKCk7XG4gICAgdGhpcy5fbm9kZS5wb3NpdGlvbiA9IG87XG4gIH1cbiAgYXBwbHlJbW1lZGlhdGUoKSB7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fbm9kZSkgJiYgdGhpcy5fY3VycmVudFR3ZWVuKSB7XG4gICAgICBpZiAodGhpcy5fY3VycmVudFR3ZWVuKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IHZvaWQgMDtcbiAgICAgIH1cbiAgICAgIHZhciBlID0gdGhpcy5fYmFzZVRpbGVOb2RlLnRpbGVPYmplY3QuZ2V0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMuX25vZGUucG9zaXRpb24gPSBlO1xuICAgICAgdGhpcy5vbkV4aXRFbmQoKTtcbiAgICAgIHRoaXMuX29uRW50ZXJlZENhbGxCYWNrID0gbnVsbDtcbiAgICB9XG4gIH1cbn0iXX0=