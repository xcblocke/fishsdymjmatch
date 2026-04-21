
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_capability/Scripts/CapabilityTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '879d9oaZNZFw6njEv42f20a', 'CapabilityTrait');
// subpackages/l_capability/Scripts/CapabilityTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var DynamicCurve_1 = require("../../../Scripts/types/DynamicCurve");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var CapabilityTrait = /** @class */ (function (_super) {
    __extends(CapabilityTrait, _super);
    function CapabilityTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CapabilityTrait.prototype, "strategy", {
        get: function () {
            return this.traitData.strategy;
        },
        enumerable: false,
        configurable: true
    });
    CapabilityTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.checkChange();
    };
    CapabilityTrait.prototype.checkChange = function () {
        var t = this.localData.curStrategyStr, e = JSON.stringify(this.strategy);
        if (e !== t) {
            this.localData.curStrategyStr = e;
            DynamicCurve_1.default.instance.resetCapabilityCache();
        }
    };
    CapabilityTrait.prototype.onDCMgr_setCapSgy = function (t, e) {
        if (this.strategy) {
            t.args[0] = this.strategy;
            e({
                isBreak: true
            });
        }
        else
            e();
    };
    CapabilityTrait.traitKey = "Capability";
    CapabilityTrait = __decorate([
        mj.trait,
        mj.class("CapabilityTrait")
    ], CapabilityTrait);
    return CapabilityTrait;
}(Trait_1.default));
exports.default = CapabilityTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NhcGFiaWxpdHkvU2NyaXB0cy9DYXBhYmlsaXR5VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUErRDtBQUMvRCxnRUFBMkQ7QUFHM0Q7SUFBNkMsbUNBQUs7SUFBbEQ7O0lBeUJBLENBQUM7SUF2QkMsc0JBQUkscUNBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFDRCxnQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELHFDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFDbkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUNsQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUNELDJDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzFCLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQXZCTSx3QkFBUSxHQUFHLFlBQVksQ0FBQztJQURaLGVBQWU7UUFGbkMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO09BQ1AsZUFBZSxDQXlCbkM7SUFBRCxzQkFBQztDQXpCRCxBQXlCQyxDQXpCNEMsZUFBSyxHQXlCakQ7a0JBekJvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IER5bmFtaWNDdXJ2ZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL3R5cGVzL0R5bmFtaWNDdXJ2ZSc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDYXBhYmlsaXR5VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcGFiaWxpdHlUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDYXBhYmlsaXR5XCI7XG4gIGdldCBzdHJhdGVneSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFpdERhdGEuc3RyYXRlZ3k7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tDaGFuZ2UoKTtcbiAgfVxuICBjaGVja0NoYW5nZSgpIHtcbiAgICB2YXIgdCA9IHRoaXMubG9jYWxEYXRhLmN1clN0cmF0ZWd5U3RyLFxuICAgICAgZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RyYXRlZ3kpO1xuICAgIGlmIChlICE9PSB0KSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS5jdXJTdHJhdGVneVN0ciA9IGU7XG4gICAgICBEeW5hbWljQ3VydmUuaW5zdGFuY2UucmVzZXRDYXBhYmlsaXR5Q2FjaGUoKTtcbiAgICB9XG4gIH1cbiAgb25EQ01ncl9zZXRDYXBTZ3kodCwgZSkge1xuICAgIGlmICh0aGlzLnN0cmF0ZWd5KSB7XG4gICAgICB0LmFyZ3NbMF0gPSB0aGlzLnN0cmF0ZWd5O1xuICAgICAgZSh7XG4gICAgICAgIGlzQnJlYWs6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=