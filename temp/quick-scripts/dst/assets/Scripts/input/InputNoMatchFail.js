
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputNoMatchFail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e898mY9vtNwoHiM76OWxGG', 'InputNoMatchFail');
// Scripts/input/InputNoMatchFail.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var FailEffect_1 = require("../FailEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputNoMatchFail = /** @class */ (function (_super) {
    __extends(InputNoMatchFail, _super);
    function InputNoMatchFail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputNoMatchFail.prototype.getPreShuffleData = function () {
        return null;
    };
    InputNoMatchFail.prototype.excute = function (e) {
        var t, o, n, i = (null == e ? void 0 : e.tileIds) || [];
        if (null !== (n = null === (o = null === (t = this.gameContext.getTileMapObject()) || void 0 === t ? void 0 : t.checkIsDead) || void 0 === o ? void 0 : o.call(t, i)) && void 0 !== n && n) {
            var r = this.gameContext.getGameData(), s = new FailEffect_1.FailEffect({
                shuffleNum: r.getShuffleNums(),
                preShuffleData: this.getPreShuffleData()
            });
            this.pushEffect(s, BehaviorsEnum_1.EInsertType.Root);
        }
    };
    __decorate([
        mj.traitEvent("IptNoMatch_getPreShf")
    ], InputNoMatchFail.prototype, "getPreShuffleData", null);
    return InputNoMatchFail;
}(InputBase_1.InputBase));
exports.default = InputNoMatchFail;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0Tm9NYXRjaEZhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF3RDtBQUN4RCw0Q0FBMkM7QUFDM0Msb0RBQW1EO0FBQ25EO0lBQThDLG9DQUFTO0lBQXZEOztJQW1CQSxDQUFDO0lBakJDLDRDQUFpQixHQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELGlDQUFNLEdBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUwsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFDcEMsQ0FBQyxHQUFHLElBQUksdUJBQVUsQ0FBQztnQkFDakIsVUFBVSxFQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUU7Z0JBQzlCLGNBQWMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7YUFDekMsQ0FBQyxDQUFDO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsMkJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFoQkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDOzZEQUdyQztJQWVILHVCQUFDO0NBbkJELEFBbUJDLENBbkI2QyxxQkFBUyxHQW1CdEQ7a0JBbkJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRmFpbEVmZmVjdCB9IGZyb20gJy4uL0ZhaWxFZmZlY3QnO1xuaW1wb3J0IHsgSW5wdXRCYXNlIH0gZnJvbSAnLi4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dE5vTWF0Y2hGYWlsIGV4dGVuZHMgSW5wdXRCYXNlIHtcbiAgQG1qLnRyYWl0RXZlbnQoXCJJcHROb01hdGNoX2dldFByZVNoZlwiKVxuICBnZXRQcmVTaHVmZmxlRGF0YSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBleGN1dGUoZSkge1xuICAgIHZhciB0LFxuICAgICAgbyxcbiAgICAgIG4sXG4gICAgICBpID0gKG51bGwgPT0gZSA/IHZvaWQgMCA6IGUudGlsZUlkcykgfHwgW107XG4gICAgaWYgKG51bGwgIT09IChuID0gbnVsbCA9PT0gKG8gPSBudWxsID09PSAodCA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0VGlsZU1hcE9iamVjdCgpKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmNoZWNrSXNEZWFkKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvLmNhbGwodCwgaSkpICYmIHZvaWQgMCAhPT0gbiAmJiBuKSB7XG4gICAgICB2YXIgciA9IHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKSxcbiAgICAgICAgcyA9IG5ldyBGYWlsRWZmZWN0KHtcbiAgICAgICAgICBzaHVmZmxlTnVtOiByLmdldFNodWZmbGVOdW1zKCksXG4gICAgICAgICAgcHJlU2h1ZmZsZURhdGE6IHRoaXMuZ2V0UHJlU2h1ZmZsZURhdGEoKVxuICAgICAgICB9KTtcbiAgICAgIHRoaXMucHVzaEVmZmVjdChzLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgICB9XG4gIH1cbn0iXX0=