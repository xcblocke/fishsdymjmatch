
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_initEffectVol/Scripts/InitEffectVolTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b98fftpBWpLdIY6GnYBsoJb', 'InitEffectVolTrait');
// subpackages/l_initEffectVol/Scripts/InitEffectVolTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var InitEffectVolTrait = /** @class */ (function (_super) {
    __extends(InitEffectVolTrait, _super);
    function InitEffectVolTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._volume = 1;
        return _this;
    }
    InitEffectVolTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._volume = null !== (e = this.traitData.volume) && void 0 !== e ? e : 1;
    };
    InitEffectVolTrait.prototype.onLoginM_showLoad = function (t, e) {
        e();
        cc.audioEngine.setEffectsVolume(this._volume);
    };
    InitEffectVolTrait.traitKey = "InitEffectVol";
    InitEffectVolTrait = __decorate([
        mj.trait,
        mj.class("InitEffectVolTrait")
    ], InitEffectVolTrait);
    return InitEffectVolTrait;
}(Trait_1.default));
exports.default = InitEffectVolTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2luaXRFZmZlY3RWb2wvU2NyaXB0cy9Jbml0RWZmZWN0Vm9sVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUczRDtJQUFnRCxzQ0FBSztJQUFyRDtRQUFBLHFFQVlDO1FBWEMsYUFBTyxHQUFHLENBQUMsQ0FBQzs7SUFXZCxDQUFDO0lBVEMsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUNELDhDQUFpQixHQUFqQixVQUFrQixDQUFDLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQUUsQ0FBQztRQUNKLEVBQUUsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFUTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQUZmLGtCQUFrQjtRQUZ0QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7T0FDVixrQkFBa0IsQ0FZdEM7SUFBRCx5QkFBQztDQVpELEFBWUMsQ0FaK0MsZUFBSyxHQVlwRDtrQkFab0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiSW5pdEVmZmVjdFZvbFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbml0RWZmZWN0Vm9sVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF92b2x1bWUgPSAxO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkluaXRFZmZlY3RWb2xcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3ZvbHVtZSA9IG51bGwgIT09IChlID0gdGhpcy50cmFpdERhdGEudm9sdW1lKSAmJiB2b2lkIDAgIT09IGUgPyBlIDogMTtcbiAgfVxuICBvbkxvZ2luTV9zaG93TG9hZCh0LCBlKSB7XG4gICAgZSgpO1xuICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodGhpcy5fdm9sdW1lKTtcbiAgfVxufSJdfQ==