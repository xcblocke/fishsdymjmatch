
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_changeBaseCardByLan/Scripts/ChangeDefaultSkinTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29de6BAA01Eb7l7cQHWGupS', 'ChangeDefaultSkinTrait');
// subpackages/r_changeBaseCardByLan/Scripts/ChangeDefaultSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var ChangeDefaultSkinTrait = /** @class */ (function (_super) {
    __extends(ChangeDefaultSkinTrait, _super);
    function ChangeDefaultSkinTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeDefaultSkinTrait.prototype.onChCardByLanTt_getDSk = function (t, e) {
        var a, r, n, i, o, c, u, p, d = "EN";
        if (1 === (null === (a = this._traitData) || void 0 === a ? void 0 : a.langType))
            d = (null === (n = null === (r = this._traitData) || void 0 === r ? void 0 : r.langCode) || void 0 === n ? void 0 : n[0]) || "EN";
        else if (2 === (null === (i = this._traitData) || void 0 === i ? void 0 : i.langType)) {
            d = "US" === (LoginModel_1.default.getInstance().country || "").toUpperCase() ? (null === (c = null === (o = this._traitData) || void 0 === o ? void 0 : o.langCode) || void 0 === c ? void 0 : c[0]) || "EN" : (null === (p = null === (u = this._traitData) || void 0 === u ? void 0 : u.langCode) || void 0 === p ? void 0 : p[1]) || "EN";
        }
        d || (d = "EN");
        d = "l_lanCard" + d;
        e({
            isBreak: true,
            returnType: TraitManager_1.TraitCallbackReturnType.return,
            returnVal: d
        });
    };
    ChangeDefaultSkinTrait.traitKey = "ChangeDefaultSkin";
    ChangeDefaultSkinTrait = __decorate([
        mj.trait,
        mj.class("ChangeDefaultSkinTrait")
    ], ChangeDefaultSkinTrait);
    return ChangeDefaultSkinTrait;
}(Trait_1.default));
exports.default = ChangeDefaultSkinTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZUJhc2VDYXJkQnlMYW4vU2NyaXB0cy9DaGFuZ2VEZWZhdWx0U2tpblRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLCtFQUEwRTtBQUcxRTtJQUFvRCwwQ0FBSztJQUF6RDs7SUF1QkEsQ0FBQztJQXJCQyx1REFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLENBQUM7UUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUFFLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7YUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pTLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxvQkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7U0FDclU7UUFDRCxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQyxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDO1lBQ0EsT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtZQUMxQyxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFyQk0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQURuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBdUIxQztJQUFELDZCQUFDO0NBdkJELEFBdUJDLENBdkJtRCxlQUFLLEdBdUJ4RDtrQkF2Qm9CLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5pbXBvcnQgTG9naW5Nb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L2xvZ2luL21vZGVsL0xvZ2luTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDaGFuZ2VEZWZhdWx0U2tpblRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VEZWZhdWx0U2tpblRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkNoYW5nZURlZmF1bHRTa2luXCI7XG4gIG9uQ2hDYXJkQnlMYW5UdF9nZXREU2sodCwgZSkge1xuICAgIHZhciBhLFxuICAgICAgcixcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgbyxcbiAgICAgIGMsXG4gICAgICB1LFxuICAgICAgcCxcbiAgICAgIGQgPSBcIkVOXCI7XG4gICAgaWYgKDEgPT09IChudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5sYW5nVHlwZSkpIGQgPSAobnVsbCA9PT0gKG4gPSBudWxsID09PSAociA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSByID8gdm9pZCAwIDogci5sYW5nQ29kZSkgfHwgdm9pZCAwID09PSBuID8gdm9pZCAwIDogblswXSkgfHwgXCJFTlwiO2Vsc2UgaWYgKDIgPT09IChudWxsID09PSAoaSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5sYW5nVHlwZSkpIHtcbiAgICAgIGQgPSBcIlVTXCIgPT09IChMb2dpbk1vZGVsLmdldEluc3RhbmNlKCkuY291bnRyeSB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpID8gKG51bGwgPT09IChjID0gbnVsbCA9PT0gKG8gPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbyA/IHZvaWQgMCA6IG8ubGFuZ0NvZGUpIHx8IHZvaWQgMCA9PT0gYyA/IHZvaWQgMCA6IGNbMF0pIHx8IFwiRU5cIiA6IChudWxsID09PSAocCA9IG51bGwgPT09ICh1ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHUgPyB2b2lkIDAgOiB1LmxhbmdDb2RlKSB8fCB2b2lkIDAgPT09IHAgPyB2b2lkIDAgOiBwWzFdKSB8fCBcIkVOXCI7XG4gICAgfVxuICAgIGQgfHwgKGQgPSBcIkVOXCIpO1xuICAgIGQgPSBcImxfbGFuQ2FyZFwiICsgZDtcbiAgICBlKHtcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICByZXR1cm5WYWw6IGRcbiAgICB9KTtcbiAgfVxufSJdfQ==