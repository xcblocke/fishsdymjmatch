
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_lowLoadUnloaded/Scripts/LowLoadUnLoadedTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '86630/qjBZFEZfu/mhag8Vi', 'LowLoadUnLoadedTrait');
// subpackages/l_lowLoadUnloaded/Scripts/LowLoadUnLoadedTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var LowLoadUnLoadedTrait = /** @class */ (function (_super) {
    __extends(LowLoadUnLoadedTrait, _super);
    function LowLoadUnLoadedTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowLoadUnLoadedTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    LowLoadUnLoadedTrait.prototype.onLowPriLoader_addLoadCnt = function (t, r) {
        var e;
        if (1 != (null === (e = t.args) || void 0 === e ? void 0 : e[0])) {
            r();
        }
        else {
            r({
                isBreak: true,
                returnType: TraitCallbackReturnType.jump
            });
        }
    };
    LowLoadUnLoadedTrait.traitKey = "LowLoadUnLoaded";
    LowLoadUnLoadedTrait = __decorate([
        mj.trait,
        mj.class("LowLoadUnLoadedTrait")
    ], LowLoadUnLoadedTrait);
    return LowLoadUnLoadedTrait;
}(Trait_1.default));
exports.default = LowLoadUnLoadedTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xvd0xvYWRVbmxvYWRlZC9TY3JpcHRzL0xvd0xvYWRVbkxvYWRlZFRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFHM0Q7SUFBa0Qsd0NBQUs7SUFBdkQ7O0lBZ0JBLENBQUM7SUFkQyxxQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsd0RBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxDQUFDO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hFLENBQUMsRUFBRSxDQUFDO1NBQ0w7YUFBTTtZQUNMLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTthQUN6QyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFkTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRGpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FnQnhDO0lBQUQsMkJBQUM7Q0FoQkQsQUFnQkMsQ0FoQmlELGVBQUssR0FnQnREO2tCQWhCb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTG93TG9hZFVuTG9hZGVkVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvd0xvYWRVbkxvYWRlZFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxvd0xvYWRVbkxvYWRlZFwiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gIH1cbiAgb25Mb3dQcmlMb2FkZXJfYWRkTG9hZENudCh0LCByKSB7XG4gICAgdmFyIGU7XG4gICAgaWYgKDEgIT0gKG51bGwgPT09IChlID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlWzBdKSkge1xuICAgICAgcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59Il19