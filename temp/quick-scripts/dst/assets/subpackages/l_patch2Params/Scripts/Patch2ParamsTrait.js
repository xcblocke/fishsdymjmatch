
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_patch2Params/Scripts/Patch2ParamsTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8869eqi2i9K87cpKmS8qy7E', 'Patch2ParamsTrait');
// subpackages/l_patch2Params/Scripts/Patch2ParamsTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Patch2ParamsTrait = /** @class */ (function (_super) {
    __extends(Patch2ParamsTrait, _super);
    function Patch2ParamsTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Patch2ParamsTrait.prototype.onLoad = function () {
        var r, e, o, a;
        _super.prototype.onLoad.call(this);
        this._config = {
            patch0201: null !== (e = null === (r = this._traitData) || void 0 === r ? void 0 : r.patch0201) && void 0 !== e ? e : 0.5,
            patch0202: null !== (a = null === (o = this._traitData) || void 0 === o ? void 0 : o.patch0202) && void 0 !== a ? a : 5
        };
    };
    Patch2ParamsTrait.prototype.onExtNormLv_getPatch0201 = function (t, r) {
        if (this.checkGameMode()) {
            var e = this._config.patch0201;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else
            r();
    };
    Patch2ParamsTrait.prototype.onExtNormLv_getPatch0202 = function (t, r) {
        if (this.checkGameMode()) {
            var e = this._config.patch0202;
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: e
            });
        }
        else
            r();
    };
    Patch2ParamsTrait.traitKey = "Patch2Params";
    Patch2ParamsTrait = __decorate([
        mj.trait,
        mj.class("Patch2ParamsTrait")
    ], Patch2ParamsTrait);
    return Patch2ParamsTrait;
}(ExtractTrait_1.default));
exports.default = Patch2ParamsTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3BhdGNoMlBhcmFtcy9TY3JpcHRzL1BhdGNoMlBhcmFtc1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsOEVBQXdGO0FBR3hGO0lBQStDLHFDQUFZO0lBQTNEOztJQThCQSxDQUFDO0lBNUJDLGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFNBQVMsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDekgsU0FBUyxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4SCxDQUFDO0lBQ0osQ0FBQztJQUNELG9EQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUMvQixDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0Qsb0RBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQy9CLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUE1Qk0sMEJBQVEsR0FBRyxjQUFjLENBQUM7SUFEZCxpQkFBaUI7UUFGckMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO09BQ1QsaUJBQWlCLENBOEJyQztJQUFELHdCQUFDO0NBOUJELEFBOEJDLENBOUI4QyxzQkFBWSxHQThCMUQ7a0JBOUJvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUGF0Y2gyUGFyYW1zVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGNoMlBhcmFtc1RyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJQYXRjaDJQYXJhbXNcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciByLCBlLCBvLCBhO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIHBhdGNoMDIwMTogbnVsbCAhPT0gKGUgPSBudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5wYXRjaDAyMDEpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiAwLjUsXG4gICAgICBwYXRjaDAyMDI6IG51bGwgIT09IChhID0gbnVsbCA9PT0gKG8gPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ucGF0Y2gwMjAyKSAmJiB2b2lkIDAgIT09IGEgPyBhIDogNVxuICAgIH07XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0UGF0Y2gwMjAxKHQsIHIpIHtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciBlID0gdGhpcy5fY29uZmlnLnBhdGNoMDIwMTtcbiAgICAgIHIoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDogZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHIoKTtcbiAgfVxuICBvbkV4dE5vcm1Mdl9nZXRQYXRjaDAyMDIodCwgcikge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIGUgPSB0aGlzLl9jb25maWcucGF0Y2gwMjAyO1xuICAgICAgcih7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgcigpO1xuICB9XG59Il19