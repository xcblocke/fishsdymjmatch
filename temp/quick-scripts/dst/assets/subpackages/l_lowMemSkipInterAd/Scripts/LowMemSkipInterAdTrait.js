
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_lowMemSkipInterAd/Scripts/LowMemSkipInterAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a125stah1HQa0jMQMz+4PZ', 'LowMemSkipInterAdTrait');
// subpackages/l_lowMemSkipInterAd/Scripts/LowMemSkipInterAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var LowMemSkipInterAdTrait = /** @class */ (function (_super) {
    __extends(LowMemSkipInterAdTrait, _super);
    function LowMemSkipInterAdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LowMemSkipInterAdTrait.prototype, "ramLimit", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.memory) && void 0 !== e ? e : 4096;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LowMemSkipInterAdTrait.prototype, "probability", {
        get: function () {
            var t, e;
            return null !== (e = null === (t = this._traitData) || void 0 === t ? void 0 : t.probability) && void 0 !== e ? e : 5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LowMemSkipInterAdTrait.prototype, "curDeviceRam", {
        get: function () {
            var t;
            return null === (t = LoginModel_1.default.getInstance().deviceInfo) || void 0 === t ? void 0 : t.all_memory;
        },
        enumerable: false,
        configurable: true
    });
    LowMemSkipInterAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LowMemSkipInterAdTrait.prototype.onAdMgr_chkInterAd = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            var r = this.curDeviceRam;
            if (void 0 !== r && r <= this.ramLimit) {
                if (100 * Math.random() < this.probability) {
                    e({
                        returnVal: false,
                        isBreak: true,
                        returnType: TraitManager_1.TraitCallbackReturnType.return
                    });
                    return;
                }
            }
            e();
        }
        else
            e();
    };
    LowMemSkipInterAdTrait.traitKey = "LowMemSkipInterAd";
    LowMemSkipInterAdTrait = __decorate([
        mj.trait,
        mj.class("LowMemSkipInterAdTrait")
    ], LowMemSkipInterAdTrait);
    return LowMemSkipInterAdTrait;
}(Trait_1.default));
exports.default = LowMemSkipInterAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xvd01lbVNraXBJbnRlckFkL1NjcmlwdHMvTG93TWVtU2tpcEludGVyQWRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsK0VBQTBFO0FBQzFFLHNFQUFpRTtBQUdqRTtJQUFvRCwwQ0FBSztJQUF6RDs7SUFpQ0EsQ0FBQztJQS9CQyxzQkFBSSw0Q0FBUTthQUFaO1lBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN0SCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLCtDQUFXO2FBQWY7WUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hILENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksZ0RBQVk7YUFBaEI7WUFDRSxJQUFJLENBQUMsQ0FBQztZQUNOLE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLG9CQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNwRyxDQUFDOzs7T0FBQTtJQUNELHVDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxtREFBa0IsR0FBbEIsVUFBbUIsQ0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUMxQixJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQzFDLENBQUMsQ0FBQzt3QkFDQSxTQUFTLEVBQUUsS0FBSzt3QkFDaEIsT0FBTyxFQUFFLElBQUk7d0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07cUJBQzNDLENBQUMsQ0FBQztvQkFDSCxPQUFPO2lCQUNSO2FBQ0Y7WUFDRCxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQS9CTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FpQzFDO0lBQUQsNkJBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ21ELGVBQUssR0FpQ3hEO2tCQWpDb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IExvZ2luTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS9sb2dpbi9tb2RlbC9Mb2dpbk1vZGVsJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkxvd01lbVNraXBJbnRlckFkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvd01lbVNraXBJbnRlckFkVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTG93TWVtU2tpcEludGVyQWRcIjtcbiAgZ2V0IHJhbUxpbWl0KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0Lm1lbW9yeSkgJiYgdm9pZCAwICE9PSBlID8gZSA6IDQwOTY7XG4gIH1cbiAgZ2V0IHByb2JhYmlsaXR5KCkge1xuICAgIHZhciB0LCBlO1xuICAgIHJldHVybiBudWxsICE9PSAoZSA9IG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LnByb2JhYmlsaXR5KSAmJiB2b2lkIDAgIT09IGUgPyBlIDogNTtcbiAgfVxuICBnZXQgY3VyRGV2aWNlUmFtKCkge1xuICAgIHZhciB0O1xuICAgIHJldHVybiBudWxsID09PSAodCA9IExvZ2luTW9kZWwuZ2V0SW5zdGFuY2UoKS5kZXZpY2VJbmZvKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmFsbF9tZW1vcnk7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uQWRNZ3JfY2hrSW50ZXJBZCh0LCBlKSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpICE9PSBNakdhbWVUeXBlLkNsYXNzaWMpIHtcbiAgICAgIHZhciByID0gdGhpcy5jdXJEZXZpY2VSYW07XG4gICAgICBpZiAodm9pZCAwICE9PSByICYmIHIgPD0gdGhpcy5yYW1MaW1pdCkge1xuICAgICAgICBpZiAoMTAwICogTWF0aC5yYW5kb20oKSA8IHRoaXMucHJvYmFiaWxpdHkpIHtcbiAgICAgICAgICBlKHtcbiAgICAgICAgICAgIHJldHVyblZhbDogZmFsc2UsXG4gICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==