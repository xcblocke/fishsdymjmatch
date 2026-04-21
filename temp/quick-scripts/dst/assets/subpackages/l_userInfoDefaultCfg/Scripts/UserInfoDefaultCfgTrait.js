
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_userInfoDefaultCfg/Scripts/UserInfoDefaultCfgTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b897e6p+lL/4KqveLvIxV+', 'UserInfoDefaultCfgTrait');
// subpackages/l_userInfoDefaultCfg/Scripts/UserInfoDefaultCfgTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var UserInfoDefaultCfgTrait = /** @class */ (function (_super) {
    __extends(UserInfoDefaultCfgTrait, _super);
    function UserInfoDefaultCfgTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserInfoDefaultCfgTrait.prototype.onLoad = function () {
        var e, r;
        _super.prototype.onLoad.call(this);
        this._config = {
            defaultAvatarId: null === (e = this._traitData) || void 0 === e ? void 0 : e.defaultAvatarId,
            defaultFrameId: null === (r = this._traitData) || void 0 === r ? void 0 : r.defaultFrameId
        };
    };
    UserInfoDefaultCfgTrait.prototype.onInfoMgr_setDefAvatar = function (t, e) {
        if (void 0 !== this._config.defaultAvatarId) {
            var r = UserModel_1.default.getInstance().getAvatarId();
            r && 0 !== r || UserModel_1.default.getInstance().setAvatarId(this._config.defaultAvatarId);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    UserInfoDefaultCfgTrait.prototype.onInfoMgr_setDefFrame = function (t, e) {
        if (void 0 !== this._config.defaultFrameId) {
            var r = UserModel_1.default.getInstance().getFrameId();
            r && 0 !== r || UserModel_1.default.getInstance().setFrameId(this._config.defaultFrameId);
            e({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return
            });
        }
        else
            e();
    };
    UserInfoDefaultCfgTrait.traitKey = "UserInfoDefaultCfg";
    UserInfoDefaultCfgTrait = __decorate([
        mj.trait,
        mj.class("UserInfoDefaultCfgTrait")
    ], UserInfoDefaultCfgTrait);
    return UserInfoDefaultCfgTrait;
}(Trait_1.default));
exports.default = UserInfoDefaultCfgTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3VzZXJJbmZvRGVmYXVsdENmZy9TY3JpcHRzL1VzZXJJbmZvRGVmYXVsdENmZ1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUdqRTtJQUFxRCwyQ0FBSztJQUExRDs7SUE4QkEsQ0FBQztJQTVCQyx3Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsZUFBZSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWU7WUFDNUYsY0FBYyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWM7U0FDM0YsQ0FBQztJQUNKLENBQUM7SUFDRCx3REFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRTtZQUMzQyxJQUFJLENBQUMsR0FBRyxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzlDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEYsQ0FBQyxDQUFDO2dCQUNBLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2FBQzNDLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELHVEQUFxQixHQUFyQixVQUFzQixDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFO1lBQzFDLElBQUksQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDN0MsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNoRixDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07YUFDM0MsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBNUJNLGdDQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFEcEIsdUJBQXVCO1FBRjNDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQztPQUNmLHVCQUF1QixDQThCM0M7SUFBRCw4QkFBQztDQTlCRCxBQThCQyxDQTlCb0QsZUFBSyxHQThCekQ7a0JBOUJvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiVXNlckluZm9EZWZhdWx0Q2ZnVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvRGVmYXVsdENmZ1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlVzZXJJbmZvRGVmYXVsdENmZ1wiO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUsIHI7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgZGVmYXVsdEF2YXRhcklkOiBudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS5kZWZhdWx0QXZhdGFySWQsXG4gICAgICBkZWZhdWx0RnJhbWVJZDogbnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuZGVmYXVsdEZyYW1lSWRcbiAgICB9O1xuICB9XG4gIG9uSW5mb01ncl9zZXREZWZBdmF0YXIodCwgZSkge1xuICAgIGlmICh2b2lkIDAgIT09IHRoaXMuX2NvbmZpZy5kZWZhdWx0QXZhdGFySWQpIHtcbiAgICAgIHZhciByID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0QXZhdGFySWQoKTtcbiAgICAgIHIgJiYgMCAhPT0gciB8fCBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5zZXRBdmF0YXJJZCh0aGlzLl9jb25maWcuZGVmYXVsdEF2YXRhcklkKTtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25JbmZvTWdyX3NldERlZkZyYW1lKHQsIGUpIHtcbiAgICBpZiAodm9pZCAwICE9PSB0aGlzLl9jb25maWcuZGVmYXVsdEZyYW1lSWQpIHtcbiAgICAgIHZhciByID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0RnJhbWVJZCgpO1xuICAgICAgciAmJiAwICE9PSByIHx8IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLnNldEZyYW1lSWQodGhpcy5fY29uZmlnLmRlZmF1bHRGcmFtZUlkKTtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=