
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputTravelEnd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3ffeVtVVZFAYClac34SLRk', 'InputTravelEnd');
// Scripts/input/InputTravelEnd.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var TravelEndEffect_1 = require("../TravelEndEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputTravelEnd = /** @class */ (function (_super) {
    __extends(InputTravelEnd, _super);
    function InputTravelEnd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTravelEnd.prototype.excute = function () {
        var e, t, o, n, i = null !== (n = null === (o = null === (t = null === (e = this.gameContext) || void 0 === e ? void 0 : e.getTileMapObject()) || void 0 === t ? void 0 : t.collectSystem) || void 0 === o ? void 0 : o.getAllCollectDetails()) && void 0 !== n ? n : [], l = new TravelEndEffect_1.TravelEndEffect({
            curLv: this.gameContext.getGameData().getLevelId(),
            collects: i
        });
        this.pushEffect(l, BehaviorsEnum_1.EInsertType.Root);
    };
    return InputTravelEnd;
}(InputBase_1.InputBase));
exports.default = InputTravelEnd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0VHJhdmVsRW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBd0Q7QUFDeEQsc0RBQXFEO0FBQ3JELG9EQUFtRDtBQUNuRDtJQUE0QyxrQ0FBUztJQUFyRDs7SUFhQSxDQUFDO0lBWkMsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDeFAsQ0FBQyxHQUFHLElBQUksaUNBQWUsQ0FBQztZQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDbEQsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFDLENBQUM7UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSwyQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxxQkFBQztBQUFELENBYkEsQUFhQyxDQWIyQyxxQkFBUyxHQWFwRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVJbnNlcnRUeXBlIH0gZnJvbSAnLi4vY29uc3RhbnQvQmVoYXZpb3JzRW51bSc7XG5pbXBvcnQgeyBUcmF2ZWxFbmRFZmZlY3QgfSBmcm9tICcuLi9UcmF2ZWxFbmRFZmZlY3QnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFRyYXZlbEVuZCBleHRlbmRzIElucHV0QmFzZSB7XG4gIGV4Y3V0ZSgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvLFxuICAgICAgbixcbiAgICAgIGkgPSBudWxsICE9PSAobiA9IG51bGwgPT09IChvID0gbnVsbCA9PT0gKHQgPSBudWxsID09PSAoZSA9IHRoaXMuZ2FtZUNvbnRleHQpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuZ2V0VGlsZU1hcE9iamVjdCgpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNvbGxlY3RTeXN0ZW0pIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8uZ2V0QWxsQ29sbGVjdERldGFpbHMoKSkgJiYgdm9pZCAwICE9PSBuID8gbiA6IFtdLFxuICAgICAgbCA9IG5ldyBUcmF2ZWxFbmRFZmZlY3Qoe1xuICAgICAgICBjdXJMdjogdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldExldmVsSWQoKSxcbiAgICAgICAgY29sbGVjdHM6IGlcbiAgICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdChsLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgfVxufSJdfQ==