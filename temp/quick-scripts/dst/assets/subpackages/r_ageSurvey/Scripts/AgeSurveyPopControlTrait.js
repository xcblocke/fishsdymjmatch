
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_ageSurvey/Scripts/AgeSurveyPopControlTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ab2aBvjYFORoV0qSE4dN4f', 'AgeSurveyPopControlTrait');
// subpackages/r_ageSurvey/Scripts/AgeSurveyPopControlTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var AgeSurveyPopControlTrait = /** @class */ (function (_super) {
    __extends(AgeSurveyPopControlTrait, _super);
    function AgeSurveyPopControlTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._showConfig = [];
        return _this;
    }
    AgeSurveyPopControlTrait.prototype.onLoad = function () {
        var e;
        _super.prototype.onLoad.call(this);
        this._showConfig = (null === (e = this._traitData) || void 0 === e ? void 0 : e.showConfig) || [true, false];
    };
    AgeSurveyPopControlTrait.prototype.onAgeSrvMgr_canShowSurvey = function (t, e) {
        var r, o, i = null !== (o = null === (r = t.args) || void 0 === r ? void 0 : r[0]) && void 0 !== o ? o : 0;
        if (this._showConfig && 0 !== this._showConfig.length) {
            var n = Math.min(i, this._showConfig.length - 1), a = this._showConfig[n];
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: a
            });
        }
        else
            e();
    };
    AgeSurveyPopControlTrait.traitKey = "AgeSurveyPopControl";
    AgeSurveyPopControlTrait = __decorate([
        mj.trait,
        mj.class("AgeSurveyPopControlTrait")
    ], AgeSurveyPopControlTrait);
    return AgeSurveyPopControlTrait;
}(Trait_1.default));
exports.default = AgeSurveyPopControlTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2FnZVN1cnZleS9TY3JpcHRzL0FnZVN1cnZleVBvcENvbnRyb2xUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFzRCw0Q0FBSztJQUEzRDtRQUFBLHFFQXNCQztRQXJCQyxpQkFBVyxHQUFHLEVBQUUsQ0FBQzs7SUFxQm5CLENBQUM7SUFuQkMseUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxDQUFDO1FBQ04saUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0csQ0FBQztJQUNELDREQUF5QixHQUF6QixVQUEwQixDQUFDLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsRUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkcsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUNyRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFDOUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDO2dCQUNBLFVBQVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUUsQ0FBQzthQUNiLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQW5CTSxpQ0FBUSxHQUFHLHFCQUFxQixDQUFDO0lBRnJCLHdCQUF3QjtRQUY1QyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUM7T0FDaEIsd0JBQXdCLENBc0I1QztJQUFELCtCQUFDO0NBdEJELEFBc0JDLENBdEJxRCxlQUFLLEdBc0IxRDtrQkF0Qm9CLHdCQUF3QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkFnZVN1cnZleVBvcENvbnRyb2xUcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWdlU3VydmV5UG9wQ29udHJvbFRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfc2hvd0NvbmZpZyA9IFtdO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkFnZVN1cnZleVBvcENvbnRyb2xcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3Nob3dDb25maWcgPSAobnVsbCA9PT0gKGUgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gZSA/IHZvaWQgMCA6IGUuc2hvd0NvbmZpZykgfHwgW3RydWUsIGZhbHNlXTtcbiAgfVxuICBvbkFnZVNydk1ncl9jYW5TaG93U3VydmV5KHQsIGUpIHtcbiAgICB2YXIgcixcbiAgICAgIG8sXG4gICAgICBpID0gbnVsbCAhPT0gKG8gPSBudWxsID09PSAociA9IHQuYXJncykgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogclswXSkgJiYgdm9pZCAwICE9PSBvID8gbyA6IDA7XG4gICAgaWYgKHRoaXMuX3Nob3dDb25maWcgJiYgMCAhPT0gdGhpcy5fc2hvd0NvbmZpZy5sZW5ndGgpIHtcbiAgICAgIHZhciBuID0gTWF0aC5taW4oaSwgdGhpcy5fc2hvd0NvbmZpZy5sZW5ndGggLSAxKSxcbiAgICAgICAgYSA9IHRoaXMuX3Nob3dDb25maWdbbl07XG4gICAgICBlKHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IGFcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=