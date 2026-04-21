
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_duPatch/Scripts/DuPatchTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf0ecU5mglGYoJlK6K3uJjC', 'DuPatchTrait');
// subpackages/l_duPatch/Scripts/DuPatchTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DuPatchTrait = /** @class */ (function (_super) {
    __extends(DuPatchTrait, _super);
    function DuPatchTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DuPatchTrait.prototype.onExtNormLv_getInitDu = function (t, r) {
        if (this.checkGameMode()) {
            var e = this.getInitialDu();
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else
            r();
    };
    DuPatchTrait.prototype.getInitialDu = function () {
        var t, r;
        return null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.initialDu) && void 0 !== r ? r : 400;
    };
    DuPatchTrait.traitKey = "DuPatch";
    DuPatchTrait = __decorate([
        mj.trait,
        mj.class("DuPatchTrait")
    ], DuPatchTrait);
    return DuPatchTrait;
}(ExtractTrait_1.default));
exports.default = DuPatchTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2R1UGF0Y2gvU2NyaXB0cy9EdVBhdGNoVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhEQUF5RDtBQUN6RCw4RUFBd0Y7QUFHeEY7SUFBMEMsZ0NBQVk7SUFBdEQ7O0lBZ0JBLENBQUM7SUFkQyw0Q0FBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDRCxtQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN4SCxDQUFDO0lBZE0scUJBQVEsR0FBRyxTQUFTLENBQUM7SUFEVCxZQUFZO1FBRmhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7T0FDSixZQUFZLENBZ0JoQztJQUFELG1CQUFDO0NBaEJELEFBZ0JDLENBaEJ5QyxzQkFBWSxHQWdCckQ7a0JBaEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkR1UGF0Y2hUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVQYXRjaFRyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEdVBhdGNoXCI7XG4gIG9uRXh0Tm9ybUx2X2dldEluaXREdSh0LCByKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lTW9kZSgpKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuZ2V0SW5pdGlhbER1KCk7XG4gICAgICByKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IGVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSByKCk7XG4gIH1cbiAgZ2V0SW5pdGlhbER1KCkge1xuICAgIHZhciB0LCByO1xuICAgIHJldHVybiBudWxsICE9PSAociA9IG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmluaXRpYWxEdSkgJiYgdm9pZCAwICE9PSByID8gciA6IDQwMDtcbiAgfVxufSJdfQ==