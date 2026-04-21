
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_failToolTip/Scripts/FailToolTipTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb9d5sIIJtLxLsD0Ru9EWJU', 'FailToolTipTrait');
// subpackages/l_failToolTip/Scripts/FailToolTipTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FailToolTipTrait = /** @class */ (function (_super) {
    __extends(FailToolTipTrait, _super);
    function FailToolTipTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FailToolTipTrait.prototype, "randomRange", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.randomRange) && void 0 !== e ? e : [10, 49];
        },
        enumerable: false,
        configurable: true
    });
    FailToolTipTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FailToolTipTrait.prototype.onFailVw_show = function (t, e) {
        var r = t.ins;
        if (cc.isValid(r) && cc.isValid(r.node)) {
            var o = cc.find("content_node/desc", r.node);
            if (cc.isValid(o)) {
                o.getComponent(cc.Label).lineHeight = 60;
                o.width = 720;
                var i = I18NStrings_1.default.get("keyXiPai_Tips_01", "{0}% of people used shuffle to pass this level"), n = [this.getPercent()], a = I18NStrings_1.default.stringFormat(i, n);
                I18NStrings_1.default.setText(o, a, "keyXiPai_Tips_01", n);
                e();
            }
            else
                e();
        }
        else
            e();
    };
    FailToolTipTrait.prototype.getPercent = function () {
        var t = __read(this.randomRange, 2), e = t[0], r = t[1], o = GameUtils_1.default.randomFloat(e, r), i = UserModel_1.default.getInstance().getCurrentGameData(), n = i.getTotalTileCount();
        return (o + 50 * i.getClearTileCount() / n).toFixed(1);
    };
    FailToolTipTrait.traitKey = "FailToolTip";
    FailToolTipTrait = __decorate([
        mj.trait,
        mj.class("FailToolTipTrait")
    ], FailToolTipTrait);
    return FailToolTipTrait;
}(Trait_1.default));
exports.default = FailToolTipTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ZhaWxUb29sVGlwL1NjcmlwdHMvRmFpbFRvb2xUaXBUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQXVFO0FBQ3ZFLDJFQUFzRTtBQUN0RSxnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBR2pFO0lBQThDLG9DQUFLO0lBQW5EOztJQWlDQSxDQUFDO0lBL0JDLHNCQUFJLHlDQUFXO2FBQWY7WUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUgsQ0FBQzs7O09BQUE7SUFDRCxpQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsd0NBQWEsR0FBYixVQUFjLENBQUMsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO2dCQUN6QyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDZCxJQUFJLENBQUMsR0FBRyxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxnREFBZ0QsQ0FBQyxFQUMzRixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFDdkIsQ0FBQyxHQUFHLHFCQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckMscUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakQsQ0FBQyxFQUFFLENBQUM7YUFDTDs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxxQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQ2pDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMvQixDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxFQUNoRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUEvQk0seUJBQVEsR0FBRyxhQUFhLENBQUM7SUFEYixnQkFBZ0I7UUFGcEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO09BQ1IsZ0JBQWdCLENBaUNwQztJQUFELHVCQUFDO0NBakNELEFBaUNDLENBakM2QyxlQUFLLEdBaUNsRDtrQkFqQ29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRmFpbFRvb2xUaXBUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFpbFRvb2xUaXBUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGYWlsVG9vbFRpcFwiO1xuICBnZXQgcmFuZG9tUmFuZ2UoKSB7XG4gICAgdmFyIHQsIGU7XG4gICAgcmV0dXJuIG51bGwgIT09IChlID0gbnVsbCA9PT0gKHQgPSB0aGlzLnRyYWl0RGF0YSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5yYW5kb21SYW5nZSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IFsxMCwgNDldO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkZhaWxWd19zaG93KHQsIGUpIHtcbiAgICB2YXIgciA9IHQuaW5zO1xuICAgIGlmIChjYy5pc1ZhbGlkKHIpICYmIGNjLmlzVmFsaWQoci5ub2RlKSkge1xuICAgICAgdmFyIG8gPSBjYy5maW5kKFwiY29udGVudF9ub2RlL2Rlc2NcIiwgci5ub2RlKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgIG8uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5saW5lSGVpZ2h0ID0gNjA7XG4gICAgICAgIG8ud2lkdGggPSA3MjA7XG4gICAgICAgIHZhciBpID0gSTE4TlN0cmluZ3MuZ2V0KFwia2V5WGlQYWlfVGlwc18wMVwiLCBcInswfSUgb2YgcGVvcGxlIHVzZWQgc2h1ZmZsZSB0byBwYXNzIHRoaXMgbGV2ZWxcIiksXG4gICAgICAgICAgbiA9IFt0aGlzLmdldFBlcmNlbnQoKV0sXG4gICAgICAgICAgYSA9IEkxOE5TdHJpbmdzLnN0cmluZ0Zvcm1hdChpLCBuKTtcbiAgICAgICAgSTE4TlN0cmluZ3Muc2V0VGV4dChvLCBhLCBcImtleVhpUGFpX1RpcHNfMDFcIiwgbik7XG4gICAgICAgIGUoKTtcbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxuICBnZXRQZXJjZW50KCkge1xuICAgIHZhciB0ID0gX19yZWFkKHRoaXMucmFuZG9tUmFuZ2UsIDIpLFxuICAgICAgZSA9IHRbMF0sXG4gICAgICByID0gdFsxXSxcbiAgICAgIG8gPSBHYW1lVXRpbHMucmFuZG9tRmxvYXQoZSwgciksXG4gICAgICBpID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVEYXRhKCksXG4gICAgICBuID0gaS5nZXRUb3RhbFRpbGVDb3VudCgpO1xuICAgIHJldHVybiAobyArIDUwICogaS5nZXRDbGVhclRpbGVDb3VudCgpIC8gbikudG9GaXhlZCgxKTtcbiAgfVxufSJdfQ==