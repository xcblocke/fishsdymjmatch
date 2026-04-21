
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_valentineClickEffect/Scripts/ValentineClickEffectTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '038163/y/tNrLcLe4uJA7GC', 'ValentineClickEffectTrait');
// subpackages/r_valentineClickEffect/Scripts/ValentineClickEffectTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = require("../../../Scripts/Config");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var BaseSpine_1 = require("../../../Scripts/gamePlay/base/ui/BaseSpine");
var ValentineClickEffectTrait = /** @class */ (function (_super) {
    __extends(ValentineClickEffectTrait, _super);
    function ValentineClickEffectTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isValentineOpen = true;
        return _this;
    }
    ValentineClickEffectTrait_1 = ValentineClickEffectTrait;
    Object.defineProperty(ValentineClickEffectTrait.prototype, "isValentineOpen", {
        get: function () {
            return this._isValentineOpen;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValentineClickEffectTrait.prototype, "clickEffBundle", {
        get: function () {
            return null != this._traitData.clickEffBundle ? this._traitData.clickEffBundle : "" + ValentineClickEffectTrait_1.BUNDLE_NAME;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValentineClickEffectTrait.prototype, "clickEffPath", {
        get: function () {
            return null != this._traitData.clickEffPath ? this._traitData.clickEffPath : "spine/gameplay_touch";
        },
        enumerable: false,
        configurable: true
    });
    ValentineClickEffectTrait.prototype.getMessageListeners = function () {
        var _t = {};
        _t[Config_1.EVT_MSG_KEY_EVENT_TOP_TOUCH_START] = this.onTopTouchStart.bind(this);
        return _t;
    };
    ValentineClickEffectTrait.prototype.onTopTouchStart = function (t) {
        if (this.isClickEffectActive()) {
            var e = cc.Canvas.instance.node, n = BaseSpine_1.default.create(this.clickEffPath, "in", 1, null, true, this.clickEffBundle);
            n.node.zIndex = 999;
            n.node.parent = e;
            var i = t.getLocation(), r = e.convertToNodeSpaceAR(cc.v3(i.x, i.y, 0));
            n.node.position = r;
        }
    };
    ValentineClickEffectTrait.prototype.isClickEffectActive = function () {
        if (null != this._traitData.clickEffect)
            return this._traitData.clickEffect;
        var t = mj.getClassByName("ValentineModel");
        return null != t && t.getInstance().isEffectActive();
    };
    var ValentineClickEffectTrait_1;
    ValentineClickEffectTrait.traitKey = "ValentineClickEffect";
    ValentineClickEffectTrait.BUNDLE_NAME = "r_valentineClickEffect";
    ValentineClickEffectTrait = ValentineClickEffectTrait_1 = __decorate([
        mj.trait,
        mj.class("ValentineClickEffectTrait")
    ], ValentineClickEffectTrait);
    return ValentineClickEffectTrait;
}(Trait_1.default));
exports.default = ValentineClickEffectTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3ZhbGVudGluZUNsaWNrRWZmZWN0L1NjcmlwdHMvVmFsZW50aW5lQ2xpY2tFZmZlY3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTRFO0FBQzVFLGdFQUEyRDtBQUMzRCx5RUFBb0U7QUFHcEU7SUFBdUQsNkNBQUs7SUFBNUQ7UUFBQSxxRUFrQ0M7UUFqQ0Msc0JBQWdCLEdBQUcsSUFBSSxDQUFDOztJQWlDMUIsQ0FBQztrQ0FsQ29CLHlCQUF5QjtJQUk1QyxzQkFBSSxzREFBZTthQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUkscURBQWM7YUFBbEI7WUFDRSxPQUFPLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRywyQkFBeUIsQ0FBQyxXQUFXLENBQUM7UUFDOUgsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxtREFBWTthQUFoQjtZQUNFLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUM7UUFDdEcsQ0FBQzs7O09BQUE7SUFDRCx1REFBbUIsR0FBbkI7UUFDRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDWixFQUFFLENBQUMsMENBQWlDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxtREFBZSxHQUFmLFVBQWdCLENBQUM7UUFDZixJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFDN0IsQ0FBQyxHQUFHLG1CQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFDckIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7SUFDRCx1REFBbUIsR0FBbkI7UUFDRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7WUFBRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQzVFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZELENBQUM7O0lBL0JNLGtDQUFRLEdBQUcsc0JBQXNCLENBQUM7SUFDbEMscUNBQVcsR0FBRyx3QkFBd0IsQ0FBQztJQUgzQix5QkFBeUI7UUFGN0MsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO09BQ2pCLHlCQUF5QixDQWtDN0M7SUFBRCxnQ0FBQztDQWxDRCxBQWtDQyxDQWxDc0QsZUFBSyxHQWtDM0Q7a0JBbENvQix5QkFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFVlRfTVNHX0tFWV9FVkVOVF9UT1BfVE9VQ0hfU1RBUlQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0NvbmZpZyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2Jhc2UvdWkvQmFzZVNwaW5lJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVmFsZW50aW5lQ2xpY2tFZmZlY3RUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsZW50aW5lQ2xpY2tFZmZlY3RUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2lzVmFsZW50aW5lT3BlbiA9IHRydWU7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiVmFsZW50aW5lQ2xpY2tFZmZlY3RcIjtcbiAgc3RhdGljIEJVTkRMRV9OQU1FID0gXCJyX3ZhbGVudGluZUNsaWNrRWZmZWN0XCI7XG4gIGdldCBpc1ZhbGVudGluZU9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsZW50aW5lT3BlbjtcbiAgfVxuICBnZXQgY2xpY2tFZmZCdW5kbGUoKSB7XG4gICAgcmV0dXJuIG51bGwgIT0gdGhpcy5fdHJhaXREYXRhLmNsaWNrRWZmQnVuZGxlID8gdGhpcy5fdHJhaXREYXRhLmNsaWNrRWZmQnVuZGxlIDogXCJcIiArIFZhbGVudGluZUNsaWNrRWZmZWN0VHJhaXQuQlVORExFX05BTUU7XG4gIH1cbiAgZ2V0IGNsaWNrRWZmUGF0aCgpIHtcbiAgICByZXR1cm4gbnVsbCAhPSB0aGlzLl90cmFpdERhdGEuY2xpY2tFZmZQYXRoID8gdGhpcy5fdHJhaXREYXRhLmNsaWNrRWZmUGF0aCA6IFwic3BpbmUvZ2FtZXBsYXlfdG91Y2hcIjtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBfdCA9IHt9O1xuICAgIF90W0VWVF9NU0dfS0VZX0VWRU5UX1RPUF9UT1VDSF9TVEFSVF0gPSB0aGlzLm9uVG9wVG91Y2hTdGFydC5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfdDtcbiAgfVxuICBvblRvcFRvdWNoU3RhcnQodCkge1xuICAgIGlmICh0aGlzLmlzQ2xpY2tFZmZlY3RBY3RpdmUoKSkge1xuICAgICAgdmFyIGUgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZSxcbiAgICAgICAgbiA9IEJhc2VTcGluZS5jcmVhdGUodGhpcy5jbGlja0VmZlBhdGgsIFwiaW5cIiwgMSwgbnVsbCwgdHJ1ZSwgdGhpcy5jbGlja0VmZkJ1bmRsZSk7XG4gICAgICBuLm5vZGUuekluZGV4ID0gOTk5O1xuICAgICAgbi5ub2RlLnBhcmVudCA9IGU7XG4gICAgICB2YXIgaSA9IHQuZ2V0TG9jYXRpb24oKSxcbiAgICAgICAgciA9IGUuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjMoaS54LCBpLnksIDApKTtcbiAgICAgIG4ubm9kZS5wb3NpdGlvbiA9IHI7XG4gICAgfVxuICB9XG4gIGlzQ2xpY2tFZmZlY3RBY3RpdmUoKSB7XG4gICAgaWYgKG51bGwgIT0gdGhpcy5fdHJhaXREYXRhLmNsaWNrRWZmZWN0KSByZXR1cm4gdGhpcy5fdHJhaXREYXRhLmNsaWNrRWZmZWN0O1xuICAgIHZhciB0ID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJWYWxlbnRpbmVNb2RlbFwiKTtcbiAgICByZXR1cm4gbnVsbCAhPSB0ICYmIHQuZ2V0SW5zdGFuY2UoKS5pc0VmZmVjdEFjdGl2ZSgpO1xuICB9XG59Il19