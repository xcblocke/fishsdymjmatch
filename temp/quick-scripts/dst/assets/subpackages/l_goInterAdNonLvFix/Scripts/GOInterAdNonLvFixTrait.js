
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_goInterAdNonLvFix/Scripts/GOInterAdNonLvFixTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1ed6hnFrpJwadDn9oUoWPW', 'GOInterAdNonLvFixTrait');
// subpackages/l_goInterAdNonLvFix/Scripts/GOInterAdNonLvFixTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GOInterAdNonLvFixTrait = /** @class */ (function (_super) {
    __extends(GOInterAdNonLvFixTrait, _super);
    function GOInterAdNonLvFixTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GOInterAdNonLvFixTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    GOInterAdNonLvFixTrait.prototype.onGOInterAd_isBlocked = function (t, r) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Normal) {
            r();
        }
        else {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: false
            });
        }
    };
    GOInterAdNonLvFixTrait.traitKey = "GOInterAdNonLvFix";
    GOInterAdNonLvFixTrait = __decorate([
        mj.trait,
        mj.class("GOInterAdNonLvFixTrait")
    ], GOInterAdNonLvFixTrait);
    return GOInterAdNonLvFixTrait;
}(Trait_1.default));
exports.default = GOInterAdNonLvFixTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2dvSW50ZXJBZE5vbkx2Rml4L1NjcmlwdHMvR09JbnRlckFkTm9uTHZGaXhUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBR2pFO0lBQW9ELDBDQUFLO0lBQXpEOztJQWVBLENBQUM7SUFiQyx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsc0RBQXFCLEdBQXJCLFVBQXNCLENBQUMsRUFBRSxDQUFDO1FBQ3hCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsTUFBTSxFQUFFO1lBQ3RFLENBQUMsRUFBRSxDQUFDO1NBQ0w7YUFBTTtZQUNMLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBYk0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQURuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBZTFDO0lBQUQsNkJBQUM7Q0FmRCxBQWVDLENBZm1ELGVBQUssR0FleEQ7a0JBZm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkdPSW50ZXJBZE5vbkx2Rml4VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdPSW50ZXJBZE5vbkx2Rml4VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiR09JbnRlckFkTm9uTHZGaXhcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uR09JbnRlckFkX2lzQmxvY2tlZCh0LCByKSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLk5vcm1hbCkge1xuICAgICAgcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0iXX0=