
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_travelLockVibrate/Scripts/TravelLockVibrateTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '824c8lX1F9M/qPL8kKt0HLZ', 'TravelLockVibrateTrait');
// subpackages/l_travelLockVibrate/Scripts/TravelLockVibrateTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var VibrateManager_1 = require("../../../Scripts/gamePlay/base/vibrate/VibrateManager");
var TravelLockVibrateTrait = /** @class */ (function (_super) {
    __extends(TravelLockVibrateTrait, _super);
    function TravelLockVibrateTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TravelLockVibrateTrait.prototype.onElemLv_addLevelBtn = function (t, e) {
        var r, i = this._traitData.level || VibrateManager_1.EVibrateStrength.DoubleWeak, o = t.ins, a = null === (r = t.args[2]) || void 0 === r ? void 0 : r.vibrateLevel;
        t.args[2] = Object.assign(Object.assign({}, t.args[2]), {
            vibrateLevel: function () {
                var t, e, r = null === (t = null == o ? void 0 : o.getLevelState) || void 0 === t ? void 0 : t.call(o), n = null === (e = null == o ? void 0 : o.isBadgeLevel) || void 0 === e ? void 0 : e.call(o);
                return 0 !== r || n ? "function" == typeof a ? a() : a : i;
            }
        });
        e();
    };
    TravelLockVibrateTrait.traitKey = "TravelLockVibrate";
    TravelLockVibrateTrait = __decorate([
        mj.trait,
        mj.class("TravelLockVibrateTrait")
    ], TravelLockVibrateTrait);
    return TravelLockVibrateTrait;
}(Trait_1.default));
exports.default = TravelLockVibrateTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RyYXZlbExvY2tWaWJyYXRlL1NjcmlwdHMvVHJhdmVsTG9ja1ZpYnJhdGVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHdGQUF5RjtBQUd6RjtJQUFvRCwwQ0FBSztJQUF6RDs7SUFrQkEsQ0FBQztJQWhCQyxxREFBb0IsR0FBcEIsVUFBcUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLGlDQUFnQixDQUFDLFVBQVUsRUFDeEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUN6RSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RELFlBQVksRUFBRTtnQkFDWixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQzVGLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBaEJNLCtCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFEbkIsc0JBQXNCO1FBRjFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQWtCMUM7SUFBRCw2QkFBQztDQWxCRCxBQWtCQyxDQWxCbUQsZUFBSyxHQWtCeEQ7a0JBbEJvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRVZpYnJhdGVTdHJlbmd0aCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS92aWJyYXRlL1ZpYnJhdGVNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVHJhdmVsTG9ja1ZpYnJhdGVUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhdmVsTG9ja1ZpYnJhdGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJUcmF2ZWxMb2NrVmlicmF0ZVwiO1xuICBvbkVsZW1Mdl9hZGRMZXZlbEJ0bih0LCBlKSB7XG4gICAgdmFyIHIsXG4gICAgICBpID0gdGhpcy5fdHJhaXREYXRhLmxldmVsIHx8IEVWaWJyYXRlU3RyZW5ndGguRG91YmxlV2VhayxcbiAgICAgIG8gPSB0LmlucyxcbiAgICAgIGEgPSBudWxsID09PSAociA9IHQuYXJnc1syXSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci52aWJyYXRlTGV2ZWw7XG4gICAgdC5hcmdzWzJdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0LmFyZ3NbMl0pLCB7XG4gICAgICB2aWJyYXRlTGV2ZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHQsXG4gICAgICAgICAgZSxcbiAgICAgICAgICByID0gbnVsbCA9PT0gKHQgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLmdldExldmVsU3RhdGUpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuY2FsbChvKSxcbiAgICAgICAgICBuID0gbnVsbCA9PT0gKGUgPSBudWxsID09IG8gPyB2b2lkIDAgOiBvLmlzQmFkZ2VMZXZlbCkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5jYWxsKG8pO1xuICAgICAgICByZXR1cm4gMCAhPT0gciB8fCBuID8gXCJmdW5jdGlvblwiID09IHR5cGVvZiBhID8gYSgpIDogYSA6IGk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZSgpO1xuICB9XG59Il19