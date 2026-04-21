
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankSkipEffect/Scripts/RankBonusSkipEffectTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f94cI9eFBNEosr1ac73l9l', 'RankBonusSkipEffectTrait');
// subpackages/l_rankSkipEffect/Scripts/RankBonusSkipEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var RankBonusSkipEffectTrait = /** @class */ (function (_super) {
    __extends(RankBonusSkipEffectTrait, _super);
    function RankBonusSkipEffectTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RankBonusSkipEffectTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RankBonusSkipEffectTrait.prototype.onRankBonusVw_onEnterAniEnd = function (t, e) {
        var r, n, o;
        null === (r = t.ins) || void 0 === r || r.changeTouchState(true, true);
        null === (o = null === (n = t.ins) || void 0 === n ? void 0 : n.changeMaskOrder) || void 0 === o || o.call(n);
        e();
    };
    RankBonusSkipEffectTrait.traitKey = "RankBonusSkipEffect";
    RankBonusSkipEffectTrait = __decorate([
        mj.trait,
        mj.class("RankBonusSkipEffectTrait")
    ], RankBonusSkipEffectTrait);
    return RankBonusSkipEffectTrait;
}(Trait_1.default));
exports.default = RankBonusSkipEffectTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtTa2lwRWZmZWN0L1NjcmlwdHMvUmFua0JvbnVzU2tpcEVmZmVjdFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBc0QsNENBQUs7SUFBM0Q7O0lBV0EsQ0FBQztJQVRDLHlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCw4REFBMkIsR0FBM0IsVUFBNEIsQ0FBQyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNaLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkUsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlHLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQVRNLGlDQUFRLEdBQUcscUJBQXFCLENBQUM7SUFEckIsd0JBQXdCO1FBRjVDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztPQUNoQix3QkFBd0IsQ0FXNUM7SUFBRCwrQkFBQztDQVhELEFBV0MsQ0FYcUQsZUFBSyxHQVcxRDtrQkFYb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmFua0JvbnVzU2tpcEVmZmVjdFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rQm9udXNTa2lwRWZmZWN0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiUmFua0JvbnVzU2tpcEVmZmVjdFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25SYW5rQm9udXNWd19vbkVudGVyQW5pRW5kKHQsIGUpIHtcbiAgICB2YXIgciwgbiwgbztcbiAgICBudWxsID09PSAociA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IHIgfHwgci5jaGFuZ2VUb3VjaFN0YXRlKHRydWUsIHRydWUpO1xuICAgIG51bGwgPT09IChvID0gbnVsbCA9PT0gKG4gPSB0LmlucykgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogbi5jaGFuZ2VNYXNrT3JkZXIpIHx8IHZvaWQgMCA9PT0gbyB8fCBvLmNhbGwobik7XG4gICAgZSgpO1xuICB9XG59Il19