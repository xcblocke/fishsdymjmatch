
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_coldStartBgm/Scripts/ColdStartBgmTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbb19JdxJ5Dm4qXuTq5Hijt', 'ColdStartBgmTrait');
// subpackages/r_coldStartBgm/Scripts/ColdStartBgmTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ColdStartBgmTrait = /** @class */ (function (_super) {
    __extends(ColdStartBgmTrait, _super);
    function ColdStartBgmTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isColdStart = true;
        return _this;
    }
    Object.defineProperty(ColdStartBgmTrait.prototype, "fadeInDuration", {
        get: function () {
            return null != this._traitData.fadeInDuration ? this._traitData.fadeInDuration : 1;
        },
        enumerable: false,
        configurable: true
    });
    ColdStartBgmTrait.prototype.onAudioMgr_playBGM = function (t, r) {
        r();
        if (this._isColdStart) {
            this._isColdStart = false;
            mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.EnterHall);
            mj.audioManager.fadeBGMIn(this.fadeInDuration);
        }
    };
    ColdStartBgmTrait.traitKey = "ColdStartBgm";
    ColdStartBgmTrait = __decorate([
        mj.trait,
        mj.class("ColdStartBgmTrait")
    ], ColdStartBgmTrait);
    return ColdStartBgmTrait;
}(Trait_1.default));
exports.default = ColdStartBgmTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NvbGRTdGFydEJnbS9TY3JpcHRzL0NvbGRTdGFydEJnbVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0Qsd0ZBQWtGO0FBR2xGO0lBQStDLHFDQUFLO0lBQXBEO1FBQUEscUVBY0M7UUFiQyxrQkFBWSxHQUFHLElBQUksQ0FBQzs7SUFhdEIsQ0FBQztJQVhDLHNCQUFJLDZDQUFjO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsQ0FBQzs7O09BQUE7SUFDRCw4Q0FBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFFLENBQUM7UUFDSixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvQyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBWE0sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUFGZCxpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBY3JDO0lBQUQsd0JBQUM7Q0FkRCxBQWNDLENBZDhDLGVBQUssR0FjbkQ7a0JBZG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBFQXVkaW9JRCB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkNvbGRTdGFydEJnbVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xkU3RhcnRCZ21UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2lzQ29sZFN0YXJ0ID0gdHJ1ZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDb2xkU3RhcnRCZ21cIjtcbiAgZ2V0IGZhZGVJbkR1cmF0aW9uKCkge1xuICAgIHJldHVybiBudWxsICE9IHRoaXMuX3RyYWl0RGF0YS5mYWRlSW5EdXJhdGlvbiA/IHRoaXMuX3RyYWl0RGF0YS5mYWRlSW5EdXJhdGlvbiA6IDE7XG4gIH1cbiAgb25BdWRpb01ncl9wbGF5QkdNKHQsIHIpIHtcbiAgICByKCk7XG4gICAgaWYgKHRoaXMuX2lzQ29sZFN0YXJ0KSB7XG4gICAgICB0aGlzLl9pc0NvbGRTdGFydCA9IGZhbHNlO1xuICAgICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuRW50ZXJIYWxsKTtcbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5mYWRlQkdNSW4odGhpcy5mYWRlSW5EdXJhdGlvbik7XG4gICAgfVxuICB9XG59Il19