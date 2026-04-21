
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_deathAnalyze/Scripts/DeathAnalyserTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13c784opMhPuZNR6IyRl9m0', 'DeathAnalyserTrait');
// subpackages/l_deathAnalyze/Scripts/DeathAnalyserTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DeathAnalyserMgr_1 = require("../../../Scripts/DeathAnalyserMgr");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var DeathAnalyserTrait = /** @class */ (function (_super) {
    __extends(DeathAnalyserTrait, _super);
    function DeathAnalyserTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeathAnalyserTrait.prototype.onIptSetLv_exec = function (t, e) {
        var r;
        e();
        this.startDeathAnalyser(null === (r = t.ins) || void 0 === r ? void 0 : r.gameContext);
    };
    DeathAnalyserTrait.prototype.onGameMod_modifyShuffle = function (t, e) {
        var r;
        e();
        this.startDeathAnalyser(null === (r = t.ins) || void 0 === r ? void 0 : r.context);
    };
    DeathAnalyserTrait.prototype.onDGameEnd_adjust = function (t, e) {
        e();
        DeathAnalyserMgr_1.default.instance.cancelAnalyze();
    };
    DeathAnalyserTrait.prototype.startDeathAnalyser = function (t) {
        t && DeathAnalyserMgr_1.default.instance.startDeathAnalyser(t);
    };
    DeathAnalyserTrait.traitKey = "DeathAnalyser";
    DeathAnalyserTrait = __decorate([
        mj.trait,
        mj.class("DeathAnalyserTrait")
    ], DeathAnalyserTrait);
    return DeathAnalyserTrait;
}(Trait_1.default));
exports.default = DeathAnalyserTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RlYXRoQW5hbHl6ZS9TY3JpcHRzL0RlYXRoQW5hbHlzZXJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBQ2pFLGdFQUEyRDtBQUczRDtJQUFnRCxzQ0FBSztJQUFyRDs7SUFtQkEsQ0FBQztJQWpCQyw0Q0FBZSxHQUFmLFVBQWdCLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxDQUFDO1FBQ04sQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUNELG9EQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsQ0FBQztRQUNOLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFDRCw4Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLENBQUM7UUFDSiwwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUNELCtDQUFrQixHQUFsQixVQUFtQixDQUFDO1FBQ2xCLENBQUMsSUFBSSwwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQWpCTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQURmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0FtQnRDO0lBQUQseUJBQUM7Q0FuQkQsQUFtQkMsQ0FuQitDLGVBQUssR0FtQnBEO2tCQW5Cb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERlYXRoQW5hbHlzZXJNZ3IgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9EZWF0aEFuYWx5c2VyTWdyJztcbmltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkRlYXRoQW5hbHlzZXJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVhdGhBbmFseXNlclRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkRlYXRoQW5hbHlzZXJcIjtcbiAgb25JcHRTZXRMdl9leGVjKHQsIGUpIHtcbiAgICB2YXIgcjtcbiAgICBlKCk7XG4gICAgdGhpcy5zdGFydERlYXRoQW5hbHlzZXIobnVsbCA9PT0gKHIgPSB0LmlucykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5nYW1lQ29udGV4dCk7XG4gIH1cbiAgb25HYW1lTW9kX21vZGlmeVNodWZmbGUodCwgZSkge1xuICAgIHZhciByO1xuICAgIGUoKTtcbiAgICB0aGlzLnN0YXJ0RGVhdGhBbmFseXNlcihudWxsID09PSAociA9IHQuaW5zKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmNvbnRleHQpO1xuICB9XG4gIG9uREdhbWVFbmRfYWRqdXN0KHQsIGUpIHtcbiAgICBlKCk7XG4gICAgRGVhdGhBbmFseXNlck1nci5pbnN0YW5jZS5jYW5jZWxBbmFseXplKCk7XG4gIH1cbiAgc3RhcnREZWF0aEFuYWx5c2VyKHQpIHtcbiAgICB0ICYmIERlYXRoQW5hbHlzZXJNZ3IuaW5zdGFuY2Uuc3RhcnREZWF0aEFuYWx5c2VyKHQpO1xuICB9XG59Il19