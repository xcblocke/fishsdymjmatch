
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_change3dAvatar/Scripts/Change3dAvatarTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88415cMdo5OWbo1iRvaRnCm', 'Change3dAvatarTrait');
// subpackages/r_change3dAvatar/Scripts/Change3dAvatarTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Change3dAvatarTrait = /** @class */ (function (_super) {
    __extends(Change3dAvatarTrait, _super);
    function Change3dAvatarTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Change3dAvatarTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    Change3dAvatarTrait.prototype.onUICellItem_getDftIconBdNm = function (t, r) {
        r();
    };
    Change3dAvatarTrait.prototype.onInfoMgr_getDftIconBdNm = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: "r_change3dAvatar"
        });
    };
    Change3dAvatarTrait.traitKey = "Change3dAvatar";
    Change3dAvatarTrait = __decorate([
        mj.trait,
        mj.class("Change3dAvatarTrait")
    ], Change3dAvatarTrait);
    return Change3dAvatarTrait;
}(Trait_1.default));
exports.default = Change3dAvatarTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZTNkQXZhdGFyL1NjcmlwdHMvQ2hhbmdlM2RBdmF0YXJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFpRCx1Q0FBSztJQUF0RDs7SUFlQSxDQUFDO0lBYkMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHlEQUEyQixHQUEzQixVQUE0QixDQUFDLEVBQUUsQ0FBQztRQUM5QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxzREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsa0JBQWtCO1NBQzlCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFiTSw0QkFBUSxHQUFHLGdCQUFnQixDQUFDO0lBRGhCLG1CQUFtQjtRQUZ2QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7T0FDWCxtQkFBbUIsQ0FldkM7SUFBRCwwQkFBQztDQWZELEFBZUMsQ0FmZ0QsZUFBSyxHQWVyRDtrQkFmb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2hhbmdlM2RBdmF0YXJUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlM2RBdmF0YXJUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDaGFuZ2UzZEF2YXRhclwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25VSUNlbGxJdGVtX2dldERmdEljb25CZE5tKHQsIHIpIHtcbiAgICByKCk7XG4gIH1cbiAgb25JbmZvTWdyX2dldERmdEljb25CZE5tKHQsIHIpIHtcbiAgICByKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IFwicl9jaGFuZ2UzZEF2YXRhclwiXG4gICAgfSk7XG4gIH1cbn0iXX0=