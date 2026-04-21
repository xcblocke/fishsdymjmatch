
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guide/Scripts/InputGuide.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00bc9OfKwxLqos6CBMmQ9jL', 'InputGuide');
// subpackages/l_guide/Scripts/InputGuide.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../../../Scripts/constant/BehaviorsEnum");
var InputBase_1 = require("../../../Scripts/inputbase/InputBase");
var GuideEffect_1 = require("./GuideEffect");
var InputGuide = /** @class */ (function (_super) {
    __extends(InputGuide, _super);
    function InputGuide() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputGuide.prototype.excute = function (t) {
        var e, i, n = this.gameController.tileMapObject.getCanMatchTilesHint();
        if (0 == n.length) {
            this.gameController.tileMapObject.updateCanMatchTiles();
            n = this.gameController.tileMapObject.getCanMatchTilesHint();
        }
        if (n.length) {
            var o = n[0], a = null === (e = o[0]) || void 0 === e ? void 0 : e.id, s = null === (i = o[1]) || void 0 === i ? void 0 : i.id;
            if (a && s) {
                var p = this.gameController.tileMapObject.getTileObject(a), u = this.gameController.tileMapObject.getTileObject(s);
                this.pushEffectData(p, u, a, s, t);
            }
        }
        else {
            var l = new GuideEffect_1.GuideEffect({
                tileId: null,
                showHand: t.showHand
            });
            this.pushEffect(l, BehaviorsEnum_1.EInsertType.Root);
        }
    };
    InputGuide.prototype.pushEffectData = function (t, e, i, n, o) {
        var a = t.isSelect ? n : i, s = new GuideEffect_1.GuideEffect({
            tileId: a,
            showHand: o.showHand,
            finishGuide: o.finishGuide
        });
        this.pushEffect(s, BehaviorsEnum_1.EInsertType.Root);
    };
    __decorate([
        mj.traitEvent("InputGuide_pushEfData")
    ], InputGuide.prototype, "pushEffectData", null);
    return InputGuide;
}(InputBase_1.InputBase));
exports.default = InputGuide;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlL1NjcmlwdHMvSW5wdXRHdWlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQXNFO0FBQ3RFLGtFQUFpRTtBQUNqRSw2Q0FBNEM7QUFDNUM7SUFBd0MsOEJBQVM7SUFBakQ7O0lBb0NBLENBQUM7SUFuQ0MsMkJBQU0sR0FBTixVQUFPLENBQUM7UUFDTixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ3hELENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzlEO1FBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNWLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDdkQsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDVixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQ3hELENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLElBQUkseUJBQVcsQ0FBQztnQkFDdEIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO2FBQ3JCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLDJCQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQsbUNBQWMsR0FBZCxVQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4QixDQUFDLEdBQUcsSUFBSSx5QkFBVyxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO1lBQ3BCLFdBQVcsRUFBRSxDQUFDLENBQUMsV0FBVztTQUMzQixDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFSRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7b0RBU3RDO0lBQ0gsaUJBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ3VDLHFCQUFTLEdBb0NoRDtrQkFwQ29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBJbnB1dEJhc2UgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuaW1wb3J0IHsgR3VpZGVFZmZlY3QgfSBmcm9tICcuL0d1aWRlRWZmZWN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0R3VpZGUgZXh0ZW5kcyBJbnB1dEJhc2Uge1xuICBleGN1dGUodCkge1xuICAgIHZhciBlLFxuICAgICAgaSxcbiAgICAgIG4gPSB0aGlzLmdhbWVDb250cm9sbGVyLnRpbGVNYXBPYmplY3QuZ2V0Q2FuTWF0Y2hUaWxlc0hpbnQoKTtcbiAgICBpZiAoMCA9PSBuLmxlbmd0aCkge1xuICAgICAgdGhpcy5nYW1lQ29udHJvbGxlci50aWxlTWFwT2JqZWN0LnVwZGF0ZUNhbk1hdGNoVGlsZXMoKTtcbiAgICAgIG4gPSB0aGlzLmdhbWVDb250cm9sbGVyLnRpbGVNYXBPYmplY3QuZ2V0Q2FuTWF0Y2hUaWxlc0hpbnQoKTtcbiAgICB9XG4gICAgaWYgKG4ubGVuZ3RoKSB7XG4gICAgICB2YXIgbyA9IG5bMF0sXG4gICAgICAgIGEgPSBudWxsID09PSAoZSA9IG9bMF0pIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuaWQsXG4gICAgICAgIHMgPSBudWxsID09PSAoaSA9IG9bMV0pIHx8IHZvaWQgMCA9PT0gaSA/IHZvaWQgMCA6IGkuaWQ7XG4gICAgICBpZiAoYSAmJiBzKSB7XG4gICAgICAgIHZhciBwID0gdGhpcy5nYW1lQ29udHJvbGxlci50aWxlTWFwT2JqZWN0LmdldFRpbGVPYmplY3QoYSksXG4gICAgICAgICAgdSA9IHRoaXMuZ2FtZUNvbnRyb2xsZXIudGlsZU1hcE9iamVjdC5nZXRUaWxlT2JqZWN0KHMpO1xuICAgICAgICB0aGlzLnB1c2hFZmZlY3REYXRhKHAsIHUsIGEsIHMsIHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbCA9IG5ldyBHdWlkZUVmZmVjdCh7XG4gICAgICAgIHRpbGVJZDogbnVsbCxcbiAgICAgICAgc2hvd0hhbmQ6IHQuc2hvd0hhbmRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wdXNoRWZmZWN0KGwsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIklucHV0R3VpZGVfcHVzaEVmRGF0YVwiKVxuICBwdXNoRWZmZWN0RGF0YSh0LCBlLCBpLCBuLCBvKSB7XG4gICAgdmFyIGEgPSB0LmlzU2VsZWN0ID8gbiA6IGksXG4gICAgICBzID0gbmV3IEd1aWRlRWZmZWN0KHtcbiAgICAgICAgdGlsZUlkOiBhLFxuICAgICAgICBzaG93SGFuZDogby5zaG93SGFuZCxcbiAgICAgICAgZmluaXNoR3VpZGU6IG8uZmluaXNoR3VpZGVcbiAgICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdChzLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgfVxufSJdfQ==