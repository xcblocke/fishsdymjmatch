
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_noLockPreClear/Scripts/NoLockOnNewGameTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eda21Nt4OtEP7JQGnu7ibLw', 'NoLockOnNewGameTrait');
// subpackages/l_noLockPreClear/Scripts/NoLockOnNewGameTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var NoLockOnNewGameTrait = /** @class */ (function (_super) {
    __extends(NoLockOnNewGameTrait, _super);
    function NoLockOnNewGameTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoLockOnNewGameTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    NoLockOnNewGameTrait.prototype.onNoLockPreClr_isEnabled = function (t, r) {
        var e, o = null === (e = UserModel_1.default.getInstance()) || void 0 === e ? void 0 : e.getCurrentGameData();
        if (o) {
            if (0 !== o.getClearTileCount()) {
                r();
            }
            else {
                r({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: true
                });
            }
        }
        else {
            r();
        }
    };
    NoLockOnNewGameTrait.traitKey = "NoLockOnNewGame";
    NoLockOnNewGameTrait = __decorate([
        mj.trait,
        mj.class("NoLockOnNewGameTrait")
    ], NoLockOnNewGameTrait);
    return NoLockOnNewGameTrait;
}(Trait_1.default));
exports.default = NoLockOnNewGameTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX25vTG9ja1ByZUNsZWFyL1NjcmlwdHMvTm9Mb2NrT25OZXdHYW1lVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBR2pFO0lBQWtELHdDQUFLO0lBQXZEOztJQXNCQSxDQUFDO0lBcEJDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCx1REFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDL0YsSUFBSSxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtnQkFDL0IsQ0FBQyxFQUFFLENBQUM7YUFDTDtpQkFBTTtnQkFDTCxDQUFDLENBQUM7b0JBQ0EsT0FBTyxFQUFFLElBQUk7b0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07b0JBQzFDLFNBQVMsRUFBRSxJQUFJO2lCQUNoQixDQUFDLENBQUM7YUFDSjtTQUNGO2FBQU07WUFDTCxDQUFDLEVBQUUsQ0FBQztTQUNMO0lBQ0gsQ0FBQztJQXBCTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FzQnhDO0lBQUQsMkJBQUM7Q0F0QkQsQUFzQkMsQ0F0QmlELGVBQUssR0FzQnREO2tCQXRCb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk5vTG9ja09uTmV3R2FtZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb0xvY2tPbk5ld0dhbWVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJOb0xvY2tPbk5ld0dhbWVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uTm9Mb2NrUHJlQ2xyX2lzRW5hYmxlZCh0LCByKSB7XG4gICAgdmFyIGUsXG4gICAgICBvID0gbnVsbCA9PT0gKGUgPSBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5nZXRDdXJyZW50R2FtZURhdGEoKTtcbiAgICBpZiAobykge1xuICAgICAgaWYgKDAgIT09IG8uZ2V0Q2xlYXJUaWxlQ291bnQoKSkge1xuICAgICAgICByKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbn0iXX0=