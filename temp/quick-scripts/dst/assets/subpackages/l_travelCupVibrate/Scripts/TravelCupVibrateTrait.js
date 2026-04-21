
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelCupVibrate/Scripts/TravelCupVibrateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b88aNVHDxJ1JjWJK/Yx9KF', 'TravelCupVibrateTrait');
// subpackages/l_travelCupVibrate/Scripts/TravelCupVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var TravelCupVibrateTrait = /** @class */ (function (_super) {
    __extends(TravelCupVibrateTrait, _super);
    function TravelCupVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelCupVibrateTrait.prototype.onElemLv_addLevelBtn = function (t, r) {
        var e, i = this._traitData.level || VibrateManager_1.EVibrateStrength.LockCup, n = t.ins, a = null === (e = t.args[2]) || void 0 === e ? void 0 : e.vibrateLevel;
        t.args[2] = Object.assign(Object.assign({}, t.args[2]), {
            vibrateLevel: function () {
                var t;
                return (null === (t = null == n ? void 0 : n.isBadgeLevel) || void 0 === t ? void 0 : t.call(n)) ? i : "function" == typeof a ? a() : a;
            }
        });
        r();
    };
    TravelCupVibrateTrait.traitKey = "TravelCupVibrate";
    TravelCupVibrateTrait = __decorate([
        mj.trait,
        mj.class("TravelCupVibrateTrait")
    ], TravelCupVibrateTrait);
    return TravelCupVibrateTrait;
}(Trait_1.default));
exports.default = TravelCupVibrateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbEN1cFZpYnJhdGUvU2NyaXB0cy9UcmF2ZWxDdXBWaWJyYXRlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx3RkFBeUY7QUFHekY7SUFBbUQseUNBQUs7SUFBeEQ7O0lBZUEsQ0FBQztJQWJDLG9EQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksaUNBQWdCLENBQUMsT0FBTyxFQUNyRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDVCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEQsWUFBWSxFQUFFO2dCQUNaLElBQUksQ0FBQyxDQUFDO2dCQUNOLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFJLENBQUM7U0FDRixDQUFDLENBQUM7UUFDSCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFiTSw4QkFBUSxHQUFHLGtCQUFrQixDQUFDO0lBRGxCLHFCQUFxQjtRQUZ6QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0FlekM7SUFBRCw0QkFBQztDQWZELEFBZUMsQ0Fma0QsZUFBSyxHQWV2RDtrQkFmb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IEVWaWJyYXRlU3RyZW5ndGggfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdmlicmF0ZS9WaWJyYXRlTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRyYXZlbEN1cFZpYnJhdGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhdmVsQ3VwVmlicmF0ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRyYXZlbEN1cFZpYnJhdGVcIjtcbiAgb25FbGVtTHZfYWRkTGV2ZWxCdG4odCwgcikge1xuICAgIHZhciBlLFxuICAgICAgaSA9IHRoaXMuX3RyYWl0RGF0YS5sZXZlbCB8fCBFVmlicmF0ZVN0cmVuZ3RoLkxvY2tDdXAsXG4gICAgICBuID0gdC5pbnMsXG4gICAgICBhID0gbnVsbCA9PT0gKGUgPSB0LmFyZ3NbMl0pIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUudmlicmF0ZUxldmVsO1xuICAgIHQuYXJnc1syXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdC5hcmdzWzJdKSwge1xuICAgICAgdmlicmF0ZUxldmVsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICByZXR1cm4gKG51bGwgPT09ICh0ID0gbnVsbCA9PSBuID8gdm9pZCAwIDogbi5pc0JhZGdlTGV2ZWwpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuY2FsbChuKSkgPyBpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBhID8gYSgpIDogYTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByKCk7XG4gIH1cbn0iXX0=