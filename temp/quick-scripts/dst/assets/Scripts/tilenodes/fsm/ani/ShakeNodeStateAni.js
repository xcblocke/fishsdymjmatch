
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/tilenodes/fsm/ani/ShakeNodeStateAni.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2250dUwDq1AMZOjQvU3PA4l', 'ShakeNodeStateAni');
// Scripts/tilenodes/fsm/ani/ShakeNodeStateAni.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShakeNodeStateAni = void 0;
var NodeStateAniBase_1 = require("../../../base/NodeStateAniBase");
var ShakeNodeStateAni = /** @class */ (function (_super) {
    __extends(ShakeNodeStateAni, _super);
    function ShakeNodeStateAni(t, o) {
        var _this = _super.call(this, t, "shake") || this;
        _this._duration = 0.05;
        _this._easing = "";
        _this._baseTileNode = null;
        _this._baseTileNode = o;
        return _this;
    }
    ShakeNodeStateAni.prototype.onEnterStart = function (t) {
        var o = this;
        _super.prototype.onEnterStart.call(this, t);
        if (cc.isValid(this._node)) {
            this._currentTween && this._currentTween.stop();
            var n = this.node.position.clone();
            this._currentTween = cc.tween(this._node).to(this._duration, {
                position: cc.v3(n.x + 5, n.y, n.z)
            }).to(this._duration, {
                position: cc.v3(n.x - 5, n.y, n.z)
            }).to(this._duration, {
                position: cc.v3(n.x + 5, n.y, n.z)
            }).to(this._duration, {
                position: cc.v3(n.x - 5, n.y, n.z)
            }).to(this._duration, {
                position: cc.v3(n.x, n.y, n.z)
            }).call(function () {
                o.onEnterEnd(t);
            }).start();
        }
        else
            this.onEnterEnd(t);
    };
    ShakeNodeStateAni.prototype.onExitStart = function (t) {
        _super.prototype.onExitStart.call(this, t);
        this._currentTween && this._currentTween.stop();
        this.node.position = cc.v3(0, 0, 0);
    };
    ShakeNodeStateAni.prototype.onEnter = function (t) {
        _super.prototype.onEnter.call(this, t);
        cc.isValid(this._node) && (this.node.position = cc.v3(0, 0, 0));
    };
    ShakeNodeStateAni.prototype.onExit = function (t) {
        _super.prototype.onExit.call(this, t);
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.node.position = cc.v3(0, 0, 0);
    };
    ShakeNodeStateAni.prototype.applyImmediate = function () {
        if (cc.isValid(this._node) && this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
    };
    ShakeNodeStateAni.prototype.reset = function () {
        if (this._currentTween) {
            this._currentTween.stop();
            this._currentTween = void 0;
        }
        this.node.position = cc.v3(0, 0, 0);
        if (this._onEnteredCallBack) {
            this._onEnteredCallBack();
            this._onEnteredCallBack = void 0;
        }
    };
    return ShakeNodeStateAni;
}(NodeStateAniBase_1.NodeStateAniBase));
exports.ShakeNodeStateAni = ShakeNodeStateAni;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL3RpbGVub2Rlcy9mc20vYW5pL1NoYWtlTm9kZVN0YXRlQW5pLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQWtFO0FBQ2xFO0lBQXVDLHFDQUFnQjtJQUlyRCwyQkFBWSxDQUFDLEVBQUUsQ0FBQztRQUFoQixZQUNFLGtCQUFNLENBQUMsRUFBRSxPQUFPLENBQUMsU0FFbEI7UUFORCxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUduQixLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQzs7SUFDekIsQ0FBQztJQUNELHdDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ1osSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsaUJBQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDM0QsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25DLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFD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S0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0EvREEsQUErREMsQ0EvRHNDLG1DQUFnQixHQStEdEQ7QUEvRFksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZVN0YXRlQW5pQmFzZSB9IGZyb20gJy4uLy4uLy4uL2Jhc2UvTm9kZVN0YXRlQW5pQmFzZSc7XG5leHBvcnQgY2xhc3MgU2hha2VOb2RlU3RhdGVBbmkgZXh0ZW5kcyBOb2RlU3RhdGVBbmlCYXNlIHtcbiAgX2R1cmF0aW9uID0gMC4wNTtcbiAgX2Vhc2luZyA9IFwiXCI7XG4gIF9iYXNlVGlsZU5vZGUgPSBudWxsO1xuICBjb25zdHJ1Y3Rvcih0LCBvKSB7XG4gICAgc3VwZXIodCwgXCJzaGFrZVwiKTtcbiAgICB0aGlzLl9iYXNlVGlsZU5vZGUgPSBvO1xuICB9XG4gIG9uRW50ZXJTdGFydCh0KSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIHN1cGVyLm9uRW50ZXJTdGFydC5jYWxsKHRoaXMsIHQpO1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gJiYgdGhpcy5fY3VycmVudFR3ZWVuLnN0b3AoKTtcbiAgICAgIHZhciBuID0gdGhpcy5ub2RlLnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSBjYy50d2Vlbih0aGlzLl9ub2RlKS50byh0aGlzLl9kdXJhdGlvbiwge1xuICAgICAgICBwb3NpdGlvbjogY2MudjMobi54ICsgNSwgbi55LCBuLnopXG4gICAgICB9KS50byh0aGlzLl9kdXJhdGlvbiwge1xuICAgICAgICBwb3NpdGlvbjogY2MudjMobi54IC0gNSwgbi55LCBuLnopXG4gICAgICB9KS50byh0aGlzLl9kdXJhdGlvbiwge1xuICAgICAgICBwb3NpdGlvbjogY2MudjMobi54ICsgNSwgbi55LCBuLnopXG4gICAgICB9KS50byh0aGlzLl9kdXJhdGlvbiwge1xuICAgICAgICBwb3NpdGlvbjogY2MudjMobi54IC0gNSwgbi55LCBuLnopXG4gICAgICB9KS50byh0aGlzLl9kdXJhdGlvbiwge1xuICAgICAgICBwb3NpdGlvbjogY2MudjMobi54LCBuLnksIG4ueilcbiAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBvLm9uRW50ZXJFbmQodCk7XG4gICAgICB9KS5zdGFydCgpO1xuICAgIH0gZWxzZSB0aGlzLm9uRW50ZXJFbmQodCk7XG4gIH1cbiAgb25FeGl0U3RhcnQodCkge1xuICAgIHN1cGVyLm9uRXhpdFN0YXJ0LmNhbGwodGhpcywgdCk7XG4gICAgdGhpcy5fY3VycmVudFR3ZWVuICYmIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gIH1cbiAgb25FbnRlcih0KSB7XG4gICAgc3VwZXIub25FbnRlci5jYWxsKHRoaXMsIHQpO1xuICAgIGNjLmlzVmFsaWQodGhpcy5fbm9kZSkgJiYgKHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApKTtcbiAgfVxuICBvbkV4aXQodCkge1xuICAgIHN1cGVyLm9uRXhpdC5jYWxsKHRoaXMsIHQpO1xuICAgIGlmICh0aGlzLl9jdXJyZW50VHdlZW4pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2Vlbi5zdG9wKCk7XG4gICAgICB0aGlzLl9jdXJyZW50VHdlZW4gPSB2b2lkIDA7XG4gICAgfVxuICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICB9XG4gIGFwcGx5SW1tZWRpYXRlKCkge1xuICAgIGlmIChjYy5pc1ZhbGlkKHRoaXMuX25vZGUpICYmIHRoaXMuX2N1cnJlbnRUd2Vlbikge1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuLnN0b3AoKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IHZvaWQgMDtcbiAgICB9XG4gIH1cbiAgcmVzZXQoKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUd2Vlbikge1xuICAgICAgdGhpcy5fY3VycmVudFR3ZWVuLnN0b3AoKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRUd2VlbiA9IHZvaWQgMDtcbiAgICB9XG4gICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgaWYgKHRoaXMuX29uRW50ZXJlZENhbGxCYWNrKSB7XG4gICAgICB0aGlzLl9vbkVudGVyZWRDYWxsQmFjaygpO1xuICAgICAgdGhpcy5fb25FbnRlcmVkQ2FsbEJhY2sgPSB2b2lkIDA7XG4gICAgfVxuICB9XG59Il19