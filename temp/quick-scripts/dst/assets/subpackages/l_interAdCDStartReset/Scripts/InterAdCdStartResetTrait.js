
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_interAdCDStartReset/Scripts/InterAdCdStartResetTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a06adGshxFWZ9yYX4mN0Qt', 'InterAdCdStartResetTrait');
// subpackages/l_interAdCDStartReset/Scripts/InterAdCdStartResetTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var InterAdCdStartResetTrait = /** @class */ (function (_super) {
    __extends(InterAdCdStartResetTrait, _super);
    function InterAdCdStartResetTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InterAdCdStartResetTrait.prototype.onInterAdCD_initPlayTime = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() !== GameTypeEnums_1.MjGameType.Classic) {
            t.args[0] = 0;
            e();
        }
        else
            e();
    };
    InterAdCdStartResetTrait.traitKey = "InterAdCDStartReset";
    InterAdCdStartResetTrait = __decorate([
        mj.trait,
        mj.class("InterAdCdStartResetTrait")
    ], InterAdCdStartResetTrait);
    return InterAdCdStartResetTrait;
}(Trait_1.default));
exports.default = InterAdCdStartResetTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2ludGVyQWRDRFN0YXJ0UmVzZXQvU2NyaXB0cy9JbnRlckFkQ2RTdGFydFJlc2V0VHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxzRUFBaUU7QUFDakUsd0ZBQW9GO0FBR3BGO0lBQXNELDRDQUFLO0lBQTNEOztJQVFBLENBQUM7SUFOQywyREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxtQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLEtBQUssMEJBQVUsQ0FBQyxPQUFPLEVBQUU7WUFDdkUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDLEVBQUUsQ0FBQztTQUNMOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQU5NLGlDQUFRLEdBQUcscUJBQXFCLENBQUM7SUFEckIsd0JBQXdCO1FBRjVDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztPQUNoQix3QkFBd0IsQ0FRNUM7SUFBRCwrQkFBQztDQVJELEFBUUMsQ0FScUQsZUFBSyxHQVExRDtrQkFSb0Isd0JBQXdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5pbXBvcnQgeyBNakdhbWVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSW50ZXJBZENkU3RhcnRSZXNldFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlckFkQ2RTdGFydFJlc2V0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSW50ZXJBZENEU3RhcnRSZXNldFwiO1xuICBvbkludGVyQWRDRF9pbml0UGxheVRpbWUodCwgZSkge1xuICAgIGlmIChVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJyZW50R2FtZVR5cGUoKSAhPT0gTWpHYW1lVHlwZS5DbGFzc2ljKSB7XG4gICAgICB0LmFyZ3NbMF0gPSAwO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=