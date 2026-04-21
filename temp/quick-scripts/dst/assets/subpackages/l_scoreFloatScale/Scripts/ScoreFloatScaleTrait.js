
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_scoreFloatScale/Scripts/ScoreFloatScaleTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8305TyRv5LW6XcsF4HIztV', 'ScoreFloatScaleTrait');
// subpackages/l_scoreFloatScale/Scripts/ScoreFloatScaleTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ScoreFloatScaleTrait = /** @class */ (function (_super) {
    __extends(ScoreFloatScaleTrait, _super);
    function ScoreFloatScaleTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = null;
        return _this;
    }
    ScoreFloatScaleTrait.prototype.onLoad = function () {
        var r, e, o, i;
        _super.prototype.onLoad.call(this);
        this._config = {
            inScale: null !== (e = null === (r = this._traitData.config) || void 0 === r ? void 0 : r.inScale) && void 0 !== e ? e : 1.3,
            outScale: null !== (i = null === (o = this._traitData.config) || void 0 === o ? void 0 : o.outScale) && void 0 !== i ? i : 1.2
        };
    };
    ScoreFloatScaleTrait.prototype.onScrFloatBhv_getScale = function (t, r) {
        var e = {
            inScale: this._config.inScale,
            outScale: this._config.outScale
        };
        r({
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            isBreak: true,
            returnVal: e
        });
    };
    ScoreFloatScaleTrait.traitKey = "ScoreFloatScale";
    ScoreFloatScaleTrait = __decorate([
        mj.trait,
        mj.class("ScoreFloatScaleTrait")
    ], ScoreFloatScaleTrait);
    return ScoreFloatScaleTrait;
}(Trait_1.default));
exports.default = ScoreFloatScaleTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3Njb3JlRmxvYXRTY2FsZS9TY3JpcHRzL1Njb3JlRmxvYXRTY2FsZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBR3hGO0lBQWtELHdDQUFLO0lBQXZEO1FBQUEscUVBc0JDO1FBckJDLGFBQU8sR0FBRyxJQUFJLENBQUM7O0lBcUJqQixDQUFDO0lBbkJDLHFDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQzVILFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1NBQy9ILENBQUM7SUFDSixDQUFDO0lBQ0QscURBQXNCLEdBQXRCLFVBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHO1lBQ04sT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztZQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO1NBQ2hDLENBQUM7UUFDRixDQUFDLENBQUM7WUFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxPQUFPLEVBQUUsSUFBSTtZQUNiLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQW5CTSw2QkFBUSxHQUFHLGlCQUFpQixDQUFDO0lBRmpCLG9CQUFvQjtRQUZ4QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7T0FDWixvQkFBb0IsQ0FzQnhDO0lBQUQsMkJBQUM7Q0F0QkQsQUFzQkMsQ0F0QmlELGVBQUssR0FzQnREO2tCQXRCb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiU2NvcmVGbG9hdFNjYWxlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlRmxvYXRTY2FsZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfY29uZmlnID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJTY29yZUZsb2F0U2NhbGVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciByLCBlLCBvLCBpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIGluU2NhbGU6IG51bGwgIT09IChlID0gbnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEuY29uZmlnKSB8fCB2b2lkIDAgPT09IHIgPyB2b2lkIDAgOiByLmluU2NhbGUpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiAxLjMsXG4gICAgICBvdXRTY2FsZTogbnVsbCAhPT0gKGkgPSBudWxsID09PSAobyA9IHRoaXMuX3RyYWl0RGF0YS5jb25maWcpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ub3V0U2NhbGUpICYmIHZvaWQgMCAhPT0gaSA/IGkgOiAxLjJcbiAgICB9O1xuICB9XG4gIG9uU2NyRmxvYXRCaHZfZ2V0U2NhbGUodCwgcikge1xuICAgIHZhciBlID0ge1xuICAgICAgaW5TY2FsZTogdGhpcy5fY29uZmlnLmluU2NhbGUsXG4gICAgICBvdXRTY2FsZTogdGhpcy5fY29uZmlnLm91dFNjYWxlXG4gICAgfTtcbiAgICByKHtcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5WYWw6IGVcbiAgICB9KTtcbiAgfVxufSJdfQ==