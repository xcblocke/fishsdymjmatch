
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Tile2HintComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6aff0PZUlMTJTOinP3pE0t', 'Tile2HintComponent');
// Scripts/Tile2HintComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2HintComponent = void 0;
var HintNodeStateAni_1 = require("./fsm/ani/HintNodeStateAni");
var TileNodeComponent_1 = require("./TileNodeComponent");
var Tile2HintComponent = /** @class */ (function (_super) {
    __extends(Tile2HintComponent, _super);
    function Tile2HintComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2HintComponent.prototype.onInitAnim = function () {
        this._hintAni = new HintNodeStateAni_1.HintNodeStateAni(this._host.tileNode, this._host);
        this._shadowHintAni = new HintNodeStateAni_1.HintNodeStateAni(this._host.shadowNode, this._host);
    };
    Tile2HintComponent.prototype.onShowPropHint = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.playAni();
        null === (t = this._shadowHintAni) || void 0 === t || t.playAni();
    };
    Tile2HintComponent.prototype.onHidePropHint = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.exitAni();
        null === (t = this._shadowHintAni) || void 0 === t || t.exitAni();
    };
    Tile2HintComponent.prototype.onPlaySelectAnimation = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.pauseShake();
        null === (t = this._shadowHintAni) || void 0 === t || t.pauseShake();
    };
    Tile2HintComponent.prototype.onCancelSelectedAnimation = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.resumeShake();
        null === (t = this._shadowHintAni) || void 0 === t || t.resumeShake();
    };
    Tile2HintComponent.prototype.onStopAllAnimation = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.forceExit();
        null === (t = this._shadowHintAni) || void 0 === t || t.forceExit();
    };
    Tile2HintComponent.prototype.playHintAnimation = function (e, t) {
        var o, n;
        null === (o = this._hintAni) || void 0 === o || o.playAni(e, t);
        null === (n = this._shadowHintAni) || void 0 === n || n.playAni(e);
    };
    Tile2HintComponent.prototype.exitHintAnimation = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.exitAni();
        null === (t = this._shadowHintAni) || void 0 === t || t.exitAni();
    };
    Tile2HintComponent.prototype.pauseHintShake = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.pauseShake();
        null === (t = this._shadowHintAni) || void 0 === t || t.pauseShake();
    };
    Tile2HintComponent.prototype.resumeHintShake = function () {
        var e, t;
        null === (e = this._hintAni) || void 0 === e || e.resumeShake();
        null === (t = this._shadowHintAni) || void 0 === t || t.resumeShake();
    };
    return Tile2HintComponent;
}(TileNodeComponent_1.TileNodeComponent));
exports.Tile2HintComponent = Tile2HintComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL1RpbGUySGludENvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE4RDtBQUM5RCx5REFBd0Q7QUFDeEQ7SUFBd0Msc0NBQWlCO0lBQXpEOztJQWtEQSxDQUFDO0lBakRDLHVDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUNBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxtQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUNELDJDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDVCxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUQsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BFLENBQUM7SUFDRCwyQ0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVELElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxP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LENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4RSxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQWxEQSxBQWtEQyxDQWxEdUMscUNBQWlCLEdBa0R4RDtBQWxEWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIaW50Tm9kZVN0YXRlQW5pIH0gZnJvbSAnLi9mc20vYW5pL0hpbnROb2RlU3RhdGVBbmknO1xuaW1wb3J0IHsgVGlsZU5vZGVDb21wb25lbnQgfSBmcm9tICcuL1RpbGVOb2RlQ29tcG9uZW50JztcbmV4cG9ydCBjbGFzcyBUaWxlMkhpbnRDb21wb25lbnQgZXh0ZW5kcyBUaWxlTm9kZUNvbXBvbmVudCB7XG4gIG9uSW5pdEFuaW0oKSB7XG4gICAgdGhpcy5faGludEFuaSA9IG5ldyBIaW50Tm9kZVN0YXRlQW5pKHRoaXMuX2hvc3QudGlsZU5vZGUsIHRoaXMuX2hvc3QpO1xuICAgIHRoaXMuX3NoYWRvd0hpbnRBbmkgPSBuZXcgSGludE5vZGVTdGF0ZUFuaSh0aGlzLl9ob3N0LnNoYWRvd05vZGUsIHRoaXMuX2hvc3QpO1xuICB9XG4gIG9uU2hvd1Byb3BIaW50KCkge1xuICAgIHZhciBlLCB0O1xuICAgIG51bGwgPT09IChlID0gdGhpcy5faGludEFuaSkgfHwgdm9pZCAwID09PSBlIHx8IGUucGxheUFuaSgpO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5fc2hhZG93SGludEFuaSkgfHwgdm9pZCAwID09PSB0IHx8IHQucGxheUFuaSgpO1xuICB9XG4gIG9uSGlkZVByb3BIaW50KCkge1xuICAgIHZhciBlLCB0O1xuICAgIG51bGwgPT09IChlID0gdGhpcy5faGludEFuaSkgfHwgdm9pZCAwID09PSBlIHx8IGUuZXhpdEFuaSgpO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5fc2hhZG93SGludEFuaSkgfHwgdm9pZCAwID09PSB0IHx8IHQuZXhpdEFuaSgpO1xuICB9XG4gIG9uUGxheVNlbGVjdEFuaW1hdGlvbigpIHtcbiAgICB2YXIgZSwgdDtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuX2hpbnRBbmkpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnBhdXNlU2hha2UoKTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuX3NoYWRvd0hpbnRBbmkpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnBhdXNlU2hha2UoKTtcbiAgfVxuICBvbkNhbmNlbFNlbGVjdGVkQW5pbWF0aW9uKCkge1xuICAgIHZhciBlLCB0O1xuICAgIG51bGwgPT09IChlID0gdGhpcy5faGludEFuaSkgfHwgdm9pZCAwID09PSBlIHx8IGUucmVzdW1lU2hha2UoKTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuX3NoYWRvd0hpbnRBbmkpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnJlc3VtZVNoYWtlKCk7XG4gIH1cbiAgb25TdG9wQWxsQW5pbWF0aW9uKCkge1xuICAgIHZhciBlLCB0O1xuICAgIG51bGwgPT09IChlID0gdGhpcy5faGludEFuaSkgfHwgdm9pZCAwID09PSBlIHx8IGUuZm9yY2VFeGl0KCk7XG4gICAgbnVsbCA9PT0gKHQgPSB0aGlzLl9zaGFkb3dIaW50QW5pKSB8fCB2b2lkIDAgPT09IHQgfHwgdC5mb3JjZUV4aXQoKTtcbiAgfVxuICBwbGF5SGludEFuaW1hdGlvbihlLCB0KSB7XG4gICAgdmFyIG8sIG47XG4gICAgbnVsbCA9PT0gKG8gPSB0aGlzLl9oaW50QW5pKSB8fCB2b2lkIDAgPT09IG8gfHwgby5wbGF5QW5pKGUsIHQpO1xuICAgIG51bGwgPT09IChuID0gdGhpcy5fc2hhZG93SGludEFuaSkgfHwgdm9pZCAwID09PSBuIHx8IG4ucGxheUFuaShlKTtcbiAgfVxuICBleGl0SGludEFuaW1hdGlvbigpIHtcbiAgICB2YXIgZSwgdDtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuX2hpbnRBbmkpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLmV4aXRBbmkoKTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuX3NoYWRvd0hpbnRBbmkpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LmV4aXRBbmkoKTtcbiAgfVxuICBwYXVzZUhpbnRTaGFrZSgpIHtcbiAgICB2YXIgZSwgdDtcbiAgICBudWxsID09PSAoZSA9IHRoaXMuX2hpbnRBbmkpIHx8IHZvaWQgMCA9PT0gZSB8fCBlLnBhdXNlU2hha2UoKTtcbiAgICBudWxsID09PSAodCA9IHRoaXMuX3NoYWRvd0hpbnRBbmkpIHx8IHZvaWQgMCA9PT0gdCB8fCB0LnBhdXNlU2hha2UoKTtcbiAgfVxuICByZXN1bWVIaW50U2hha2UoKSB7XG4gICAgdmFyIGUsIHQ7XG4gICAgbnVsbCA9PT0gKGUgPSB0aGlzLl9oaW50QW5pKSB8fCB2b2lkIDAgPT09IGUgfHwgZS5yZXN1bWVTaGFrZSgpO1xuICAgIG51bGwgPT09ICh0ID0gdGhpcy5fc2hhZG93SGludEFuaSkgfHwgdm9pZCAwID09PSB0IHx8IHQucmVzdW1lU2hha2UoKTtcbiAgfVxufSJdfQ==