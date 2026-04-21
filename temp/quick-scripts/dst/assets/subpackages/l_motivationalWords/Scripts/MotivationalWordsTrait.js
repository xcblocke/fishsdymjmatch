
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_motivationalWords/Scripts/MotivationalWordsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa546zm0WlH9LbMWWrxci6/', 'MotivationalWordsTrait');
// subpackages/l_motivationalWords/Scripts/MotivationalWordsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var MotivationalWordsTrait = /** @class */ (function (_super) {
    __extends(MotivationalWordsTrait, _super);
    function MotivationalWordsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotivationalWordsTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = {
            trigMult: this._traitData.trigMult || 3
        };
    };
    MotivationalWordsTrait.prototype.onMotivWdsChk_trigMult = function (t, r) {
        r({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: this._config.trigMult
        });
    };
    MotivationalWordsTrait.traitKey = "MotivationalWords";
    MotivationalWordsTrait = __decorate([
        mj.trait,
        mj.class("MotivationalWordsTrait")
    ], MotivationalWordsTrait);
    return MotivationalWordsTrait;
}(Trait_1.default));
exports.default = MotivationalWordsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21vdGl2YXRpb25hbFdvcmRzL1NjcmlwdHMvTW90aXZhdGlvbmFsV29yZHNUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFvRCwwQ0FBSztJQUF6RDs7SUFlQSxDQUFDO0lBYkMsdUNBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsSUFBSSxDQUFDO1NBQ3hDLENBQUM7SUFDSixDQUFDO0lBQ0QsdURBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztZQUNBLE9BQU8sRUFBRSxJQUFJO1lBQ2IsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07WUFDMUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtTQUNqQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBYk0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQURuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBZTFDO0lBQUQsNkJBQUM7Q0FmRCxBQWVDLENBZm1ELGVBQUssR0FleEQ7a0JBZm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1vdGl2YXRpb25hbFdvcmRzVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdGl2YXRpb25hbFdvcmRzVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiTW90aXZhdGlvbmFsV29yZHNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIHRyaWdNdWx0OiB0aGlzLl90cmFpdERhdGEudHJpZ011bHQgfHwgM1xuICAgIH07XG4gIH1cbiAgb25Nb3Rpdldkc0Noa190cmlnTXVsdCh0LCByKSB7XG4gICAgcih7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiB0aGlzLl9jb25maWcudHJpZ011bHRcbiAgICB9KTtcbiAgfVxufSJdfQ==