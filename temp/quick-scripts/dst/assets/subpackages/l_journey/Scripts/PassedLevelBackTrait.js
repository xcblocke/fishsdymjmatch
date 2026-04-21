
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_journey/Scripts/PassedLevelBackTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '932be7Q38xCIYaSFSqZms4Z', 'PassedLevelBackTrait');
// subpackages/l_journey/Scripts/PassedLevelBackTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var JumpManager_1 = require("../../../Scripts/base/jump/JumpManager");
var PassedLevelBackTrait = /** @class */ (function (_super) {
    __extends(PassedLevelBackTrait, _super);
    function PassedLevelBackTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PassedLevelBackTrait.prototype, "delayTime", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this.traitData) || void 0 === t ? void 0 : t.delayTime) && void 0 !== e ? e : 2;
        },
        enumerable: false,
        configurable: true
    });
    PassedLevelBackTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    PassedLevelBackTrait.prototype.onTLMapVw_collectBadge = function (t, e) {
        t.ins.isCollecting && t.ins.curLevelId > t.ins.levelConfig.levelCount && this.delayCloseMapView(t.ins);
        e();
    };
    PassedLevelBackTrait.prototype.onTLMapVw_viewShow = function (t, e) {
        t.ins.isCollecting || t.ins.curLevelId > t.ins.levelConfig.levelCount && this.delayCloseMapView(t.ins);
        e();
    };
    PassedLevelBackTrait.prototype.delayCloseMapView = function (t) {
        cc.isValid(t) && t.scheduleOnce(function () {
            JumpManager_1.default.getInstance().jumpToHall();
        }, this.delayTime);
    };
    PassedLevelBackTrait.traitKey = "PassedLevelBack";
    PassedLevelBackTrait = __decorate([
        mj.trait,
        mj.class("PassedLevelBackTrait")
    ], PassedLevelBackTrait);
    return PassedLevelBackTrait;
}(Trait_1.default));
exports.default = PassedLevelBackTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2pvdXJuZXkvU2NyaXB0cy9QYXNzZWRMZXZlbEJhY2tUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUFrRCx3Q0FBSztJQUF2RDs7SUFzQkEsQ0FBQztJQXBCQyxzQkFBSSwyQ0FBUzthQUFiO1lBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNySCxDQUFDOzs7T0FBQTtJQUNELHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxxREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkcsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsaURBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZHLENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELGdEQUFpQixHQUFqQixVQUFrQixDQUFDO1FBQ2pCLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUM5QixxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQXBCTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FzQnhDO0lBQUQsMkJBQUM7Q0F0QkQsQUFzQkMsQ0F0QmlELGVBQUssR0FzQnREO2tCQXRCb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBKdW1wTWFuYWdlciBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2Jhc2UvanVtcC9KdW1wTWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlBhc3NlZExldmVsQmFja1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzZWRMZXZlbEJhY2tUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJQYXNzZWRMZXZlbEJhY2tcIjtcbiAgZ2V0IGRlbGF5VGltZSgpIHtcbiAgICB2YXIgdCwgZTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKGUgPSBudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmRlbGF5VGltZSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDI7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uVExNYXBWd19jb2xsZWN0QmFkZ2UodCwgZSkge1xuICAgIHQuaW5zLmlzQ29sbGVjdGluZyAmJiB0Lmlucy5jdXJMZXZlbElkID4gdC5pbnMubGV2ZWxDb25maWcubGV2ZWxDb3VudCAmJiB0aGlzLmRlbGF5Q2xvc2VNYXBWaWV3KHQuaW5zKTtcbiAgICBlKCk7XG4gIH1cbiAgb25UTE1hcFZ3X3ZpZXdTaG93KHQsIGUpIHtcbiAgICB0Lmlucy5pc0NvbGxlY3RpbmcgfHwgdC5pbnMuY3VyTGV2ZWxJZCA+IHQuaW5zLmxldmVsQ29uZmlnLmxldmVsQ291bnQgJiYgdGhpcy5kZWxheUNsb3NlTWFwVmlldyh0Lmlucyk7XG4gICAgZSgpO1xuICB9XG4gIGRlbGF5Q2xvc2VNYXBWaWV3KHQpIHtcbiAgICBjYy5pc1ZhbGlkKHQpICYmIHQuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIEp1bXBNYW5hZ2VyLmdldEluc3RhbmNlKCkuanVtcFRvSGFsbCgpO1xuICAgIH0sIHRoaXMuZGVsYXlUaW1lKTtcbiAgfVxufSJdfQ==