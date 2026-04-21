
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_settingsDialog/Scripts/HideLockHighlightTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a60254rBeRHt7TTcD2W3PiX', 'HideLockHighlightTrait');
// subpackages/l_settingsDialog/Scripts/HideLockHighlightTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var HideLockHighlightTrait = /** @class */ (function (_super) {
    __extends(HideLockHighlightTrait, _super);
    function HideLockHighlightTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HideLockHighlightTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        UserModel_1.default.getInstance().setLockHighlightEnabled(false);
    };
    HideLockHighlightTrait.prototype.onUISetDlg_adjustPH = function (t, e) {
        var i = t.ins;
        if (cc.isValid(i)) {
            var o = i.getLockHighlightSwitchNode();
            cc.isValid(o) && (o.active = false);
        }
        e();
    };
    HideLockHighlightTrait.traitKey = "HideLockHighlight";
    HideLockHighlightTrait = __decorate([
        mj.trait,
        mj.class("HideLockHighlightTrait")
    ], HideLockHighlightTrait);
    return HideLockHighlightTrait;
}(Trait_1.default));
exports.default = HideLockHighlightTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3NldHRpbmdzRGlhbG9nL1NjcmlwdHMvSGlkZUxvY2tIaWdobGlnaHRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUdqRTtJQUFvRCwwQ0FBSztJQUF6RDs7SUFjQSxDQUFDO0lBWkMsdUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ0Qsb0RBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDZCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDdkMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7U0FDckM7UUFDRCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFaTSwrQkFBUSxHQUFHLG1CQUFtQixDQUFDO0lBRG5CLHNCQUFzQjtRQUYxQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUM7T0FDZCxzQkFBc0IsQ0FjMUM7SUFBRCw2QkFBQztDQWRELEFBY0MsQ0FkbUQsZUFBSyxHQWN4RDtrQkFkb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkhpZGVMb2NrSGlnaGxpZ2h0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpZGVMb2NrSGlnaGxpZ2h0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiSGlkZUxvY2tIaWdobGlnaHRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLnNldExvY2tIaWdobGlnaHRFbmFibGVkKGZhbHNlKTtcbiAgfVxuICBvblVJU2V0RGxnX2FkanVzdFBIKHQsIGUpIHtcbiAgICB2YXIgaSA9IHQuaW5zO1xuICAgIGlmIChjYy5pc1ZhbGlkKGkpKSB7XG4gICAgICB2YXIgbyA9IGkuZ2V0TG9ja0hpZ2hsaWdodFN3aXRjaE5vZGUoKTtcbiAgICAgIGNjLmlzVmFsaWQobykgJiYgKG8uYWN0aXZlID0gZmFsc2UpO1xuICAgIH1cbiAgICBlKCk7XG4gIH1cbn0iXX0=