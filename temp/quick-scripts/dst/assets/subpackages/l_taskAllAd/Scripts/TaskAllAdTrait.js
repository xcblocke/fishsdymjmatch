
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_taskAllAd/Scripts/TaskAllAdTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d660EOMNpIuKUV24Db4Mf6', 'TaskAllAdTrait');
// subpackages/l_taskAllAd/Scripts/TaskAllAdTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var TaskAllAdTrait = /** @class */ (function (_super) {
    __extends(TaskAllAdTrait, _super);
    function TaskAllAdTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TaskAllAdTrait.prototype, "getAdScale", {
        get: function () {
            var t, r;
            return null !== (r = null === (t = this.traitData) || void 0 === t ? void 0 : t.adScale) && void 0 !== r ? r : 2;
        },
        enumerable: false,
        configurable: true
    });
    TaskAllAdTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TaskAllAdTrait.prototype.onTaskRwdVw_getAdScale = function (t, r) {
        var e = this.getAdScale;
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: e
        });
    };
    TaskAllAdTrait.traitKey = "TaskAllAd";
    TaskAllAdTrait = __decorate([
        mj.trait,
        mj.class("TaskAllAdTrait")
    ], TaskAllAdTrait);
    return TaskAllAdTrait;
}(Trait_1.default));
exports.default = TaskAllAdTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Rhc2tBbGxBZC9TY3JpcHRzL1Rhc2tBbGxBZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQTRDLGtDQUFLO0lBQWpEOztJQWlCQSxDQUFDO0lBZkMsc0JBQUksc0NBQVU7YUFBZDtZQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULE9BQU8sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkgsQ0FBQzs7O09BQUE7SUFDRCwrQkFBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsK0NBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDeEIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFmTSx1QkFBUSxHQUFHLFdBQVcsQ0FBQztJQURYLGNBQWM7UUFGbEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO09BQ04sY0FBYyxDQWlCbEM7SUFBRCxxQkFBQztDQWpCRCxBQWlCQyxDQWpCMkMsZUFBSyxHQWlCaEQ7a0JBakJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVGFza0FsbEFkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tBbGxBZFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRhc2tBbGxBZFwiO1xuICBnZXQgZ2V0QWRTY2FsZSgpIHtcbiAgICB2YXIgdCwgcjtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHIgPSBudWxsID09PSAodCA9IHRoaXMudHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmFkU2NhbGUpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAyO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvblRhc2tSd2RWd19nZXRBZFNjYWxlKHQsIHIpIHtcbiAgICB2YXIgZSA9IHRoaXMuZ2V0QWRTY2FsZTtcbiAgICByKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IGVcbiAgICB9KTtcbiAgfVxufSJdfQ==