
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd06fc4pFehEp7VynA5h0Jg6', 'LowPriorityLoader2Trait');
// subpackages/l_lowpriorityloader/Scripts/LowPriorityLoader2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowPriorityBundleLoader_1 = require("../../../Scripts/gamePlay/base/ui/LowPriorityBundleLoader");
var LowPriorityLoader2Trait = /** @class */ (function (_super) {
    __extends(LowPriorityLoader2Trait, _super);
    function LowPriorityLoader2Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hasDownLoadCount = 0;
        return _this;
    }
    LowPriorityLoader2Trait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LowPriorityLoader2Trait.prototype.isLowMemory = function () {
        return true;
    };
    LowPriorityLoader2Trait.prototype.hasDownLoadMaxCount = function () {
        var t = this.traitData.maxDownLoadCount || 10;
        return this._hasDownLoadCount >= t;
    };
    LowPriorityLoader2Trait.prototype.onLowBunLoader_start = function (t, r) {
        this._hasDownLoadCount = 0;
        LowPriorityBundleLoader_1.default.getInstance().resume();
        r();
    };
    LowPriorityLoader2Trait.prototype.addDownLoadCount = function () {
        this._hasDownLoadCount++;
    };
    LowPriorityLoader2Trait.prototype.onLowBunLoader_taskSuccess = function (t, r) {
        var o;
        if (this.isLowMemory()) {
            var e = null === (o = t.args) || void 0 === o ? void 0 : o[0];
            this.addDownLoadCount(e.isHasDownloaded);
            this.hasDownLoadMaxCount() && LowPriorityBundleLoader_1.default.getInstance().pause();
            r();
        }
        else
            r();
    };
    LowPriorityLoader2Trait.traitKey = "LowPriorityLoader2";
    __decorate([
        mj.traitEvent("LowPriLoader_addLoadCnt")
    ], LowPriorityLoader2Trait.prototype, "addDownLoadCount", null);
    LowPriorityLoader2Trait = __decorate([
        mj.trait,
        mj.class("LowPriorityLoader2Trait")
    ], LowPriorityLoader2Trait);
    return LowPriorityLoader2Trait;
}(Trait_1.default));
exports.default = LowPriorityLoader2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xvd3ByaW9yaXR5bG9hZGVyL1NjcmlwdHMvTG93UHJpb3JpdHlMb2FkZXIyVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxxR0FBZ0c7QUFHaEc7SUFBcUQsMkNBQUs7SUFBMUQ7UUFBQSxxRUErQkM7UUE5QkMsdUJBQWlCLEdBQUcsQ0FBQyxDQUFDOztJQThCeEIsQ0FBQztJQTVCQyx3Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsNkNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELHFEQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsc0RBQW9CLEdBQXBCLFVBQXFCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDM0IsaUNBQXVCLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDL0MsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBRUQsa0RBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELDREQUEwQixHQUExQixVQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksaUNBQXVCLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUUsQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUE1Qk0sZ0NBQVEsR0FBRyxvQkFBb0IsQ0FBQztJQWlCdkM7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO21FQUd4QztJQXJCa0IsdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQStCM0M7SUFBRCw4QkFBQztDQS9CRCxBQStCQyxDQS9Cb0QsZUFBSyxHQStCekQ7a0JBL0JvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IExvd1ByaW9yaXR5QnVuZGxlTG9hZGVyIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9Mb3dQcmlvcml0eUJ1bmRsZUxvYWRlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkxvd1ByaW9yaXR5TG9hZGVyMlRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb3dQcmlvcml0eUxvYWRlcjJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2hhc0Rvd25Mb2FkQ291bnQgPSAwO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxvd1ByaW9yaXR5TG9hZGVyMlwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgaXNMb3dNZW1vcnkoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaGFzRG93bkxvYWRNYXhDb3VudCgpIHtcbiAgICB2YXIgdCA9IHRoaXMudHJhaXREYXRhLm1heERvd25Mb2FkQ291bnQgfHwgMTA7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0Rvd25Mb2FkQ291bnQgPj0gdDtcbiAgfVxuICBvbkxvd0J1bkxvYWRlcl9zdGFydCh0LCByKSB7XG4gICAgdGhpcy5faGFzRG93bkxvYWRDb3VudCA9IDA7XG4gICAgTG93UHJpb3JpdHlCdW5kbGVMb2FkZXIuZ2V0SW5zdGFuY2UoKS5yZXN1bWUoKTtcbiAgICByKCk7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJMb3dQcmlMb2FkZXJfYWRkTG9hZENudFwiKVxuICBhZGREb3duTG9hZENvdW50KCkge1xuICAgIHRoaXMuX2hhc0Rvd25Mb2FkQ291bnQrKztcbiAgfVxuICBvbkxvd0J1bkxvYWRlcl90YXNrU3VjY2Vzcyh0LCByKSB7XG4gICAgdmFyIG87XG4gICAgaWYgKHRoaXMuaXNMb3dNZW1vcnkoKSkge1xuICAgICAgdmFyIGUgPSBudWxsID09PSAobyA9IHQuYXJncykgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogb1swXTtcbiAgICAgIHRoaXMuYWRkRG93bkxvYWRDb3VudChlLmlzSGFzRG93bmxvYWRlZCk7XG4gICAgICB0aGlzLmhhc0Rvd25Mb2FkTWF4Q291bnQoKSAmJiBMb3dQcmlvcml0eUJ1bmRsZUxvYWRlci5nZXRJbnN0YW5jZSgpLnBhdXNlKCk7XG4gICAgICByKCk7XG4gICAgfSBlbHNlIHIoKTtcbiAgfVxufSJdfQ==