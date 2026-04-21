
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_changeDefCardSkin/Scripts/ChangeDefCardSkinTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd18d9lbu6BI8r9PLZ7bW9DJ', 'ChangeDefCardSkinTrait');
// subpackages/l_changeDefCardSkin/Scripts/ChangeDefCardSkinTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var LoginModel_1 = require("../../../Scripts/gamePlay/login/model/LoginModel");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var p = /^([btWAC][1-9]|Z_(dong|nan|xi|bei|bai|fa|zhong)|H_(mei|lan|zhu|ju)|J_(chun|xia|qiu|dong))$/;
var ChangeDefCardSkinTrait = /** @class */ (function (_super) {
    __extends(ChangeDefCardSkinTrait, _super);
    function ChangeDefCardSkinTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._currSkin = null;
        return _this;
    }
    ChangeDefCardSkinTrait.prototype.skinBundle = function (t) {
        var r, e, n, i, a, o = null === (r = this._traitData) || void 0 === r ? void 0 : r.skin, s = null, l = (LoginModel_1.default.getInstance().country || "").toUpperCase(), p = "US" === l;
        if (Array.isArray(o)) {
            var f = p ? o[0] || "" : o[1] || "";
            "" == f && (f = null);
            s = f;
        }
        else
            s = o;
        var d = null === (e = this._traitData) || void 0 === e ? void 0 : e.types;
        if (d && d.length >= 2) {
            var y = t;
            y || (y = UserModel_1.default.getInstance().getCurrentGameType());
            var h = d[p ? 0 : 1];
            s = this.isMainType(y) ? h[0] : h[1];
        }
        if ((null === (n = this._traitData) || void 0 === n ? void 0 : n.countrys) && (null === (i = this._traitData) || void 0 === i ? void 0 : i.countrys.length) > 0) {
            for (var _ = null === (a = this._traitData) || void 0 === a ? void 0 : a.countrys, v = null, g = 0; g < _.length; g++)
                if (_[g][0].toUpperCase() === l) {
                    v = _[g][1];
                    break;
                }
            v && (s = v);
        }
        return s || null;
    };
    ChangeDefCardSkinTrait.prototype.isMainType = function (t) {
        return t == GameTypeEnums_1.MjGameType.Normal || t == GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    ChangeDefCardSkinTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        Promise.resolve().then(function () { });
    };
    ChangeDefCardSkinTrait.prototype.onMainGameCtrl_initRes = function (t, r) {
        var e = t.ins;
        this._currSkin = this.skinBundle(e.gameType);
        this._currSkin && e && "function" == typeof e.addPreloadRes && e.addPreloadRes("SpriteAtlas", this._currSkin + ":atlas/cardIcon");
        r();
    };
    ChangeDefCardSkinTrait.prototype.onCardUtil_atlasPathBundle = function (t, r) {
        var e;
        if (this._currSkin) {
            var n = null === (e = t.args) || void 0 === e ? void 0 : e[0];
            if (n && p.test(n)) {
                r({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: {
                        path: "atlas/cardIcon/" + n,
                        bundleName: this._currSkin,
                        fromAtlas: true
                    }
                });
            }
            else {
                r();
            }
        }
        else
            r();
    };
    ChangeDefCardSkinTrait.traitKey = "ChangeDefCardSkin";
    ChangeDefCardSkinTrait = __decorate([
        mj.trait,
        mj.class("ChangeDefCardSkinTrait")
    ], ChangeDefCardSkinTrait);
    return ChangeDefCardSkinTrait;
}(Trait_1.default));
exports.default = ChangeDefCardSkinTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2NoYW5nZURlZkNhcmRTa2luL1NjcmlwdHMvQ2hhbmdlRGVmQ2FyZFNraW5UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsK0VBQTBFO0FBQzFFLHNFQUFpRTtBQUNqRSxJQUFJLENBQUMsR0FBRyw0RkFBNEYsQ0FBQztBQUdyRztJQUFvRCwwQ0FBSztJQUF6RDtRQUFBLHFFQWtFQztRQWpFQyxlQUFTLEdBQUcsSUFBSSxDQUFDOztJQWlFbkIsQ0FBQztJQS9EQywyQ0FBVSxHQUFWLFVBQVcsQ0FBQztRQUNWLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUNwRSxDQUFDLEdBQUcsSUFBSSxFQUNSLENBQUMsR0FBRyxDQUFDLG9CQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUMxRCxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUNqQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNQOztZQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMvSixLQUFLLElBQUks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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBMb2dpbk1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvbG9naW4vbW9kZWwvTG9naW5Nb2RlbCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xudmFyIHAgPSAvXihbYnRXQUNdWzEtOV18Wl8oZG9uZ3xuYW58eGl8YmVpfGJhaXxmYXx6aG9uZyl8SF8obWVpfGxhbnx6aHV8anUpfEpfKGNodW58eGlhfHFpdXxkb25nKSkkLztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2hhbmdlRGVmQ2FyZFNraW5UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlRGVmQ2FyZFNraW5UcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX2N1cnJTa2luID0gbnVsbDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJDaGFuZ2VEZWZDYXJkU2tpblwiO1xuICBza2luQnVuZGxlKHQpIHtcbiAgICB2YXIgcixcbiAgICAgIGUsXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIGEsXG4gICAgICBvID0gbnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuc2tpbixcbiAgICAgIHMgPSBudWxsLFxuICAgICAgbCA9IChMb2dpbk1vZGVsLmdldEluc3RhbmNlKCkuY291bnRyeSB8fCBcIlwiKS50b1VwcGVyQ2FzZSgpLFxuICAgICAgcCA9IFwiVVNcIiA9PT0gbDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvKSkge1xuICAgICAgdmFyIGYgPSBwID8gb1swXSB8fCBcIlwiIDogb1sxXSB8fCBcIlwiO1xuICAgICAgXCJcIiA9PSBmICYmIChmID0gbnVsbCk7XG4gICAgICBzID0gZjtcbiAgICB9IGVsc2UgcyA9IG87XG4gICAgdmFyIGQgPSBudWxsID09PSAoZSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBlID8gdm9pZCAwIDogZS50eXBlcztcbiAgICBpZiAoZCAmJiBkLmxlbmd0aCA+PSAyKSB7XG4gICAgICB2YXIgeSA9IHQ7XG4gICAgICB5IHx8ICh5ID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCkuZ2V0Q3VycmVudEdhbWVUeXBlKCkpO1xuICAgICAgdmFyIGggPSBkW3AgPyAwIDogMV07XG4gICAgICBzID0gdGhpcy5pc01haW5UeXBlKHkpID8gaFswXSA6IGhbMV07XG4gICAgfVxuICAgIGlmICgobnVsbCA9PT0gKG4gPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uY291bnRyeXMpICYmIChudWxsID09PSAoaSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5jb3VudHJ5cy5sZW5ndGgpID4gMCkge1xuICAgICAgZm9yICh2YXIgXyA9IG51bGwgPT09IChhID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhLmNvdW50cnlzLCB2ID0gbnVsbCwgZyA9IDA7IGcgPCBfLmxlbmd0aDsgZysrKSBpZiAoX1tnXVswXS50b1VwcGVyQ2FzZSgpID09PSBsKSB7XG4gICAgICAgIHYgPSBfW2ddWzFdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHYgJiYgKHMgPSB2KTtcbiAgICB9XG4gICAgcmV0dXJuIHMgfHwgbnVsbDtcbiAgfVxuICBpc01haW5UeXBlKHQpIHtcbiAgICByZXR1cm4gdCA9PSBNakdhbWVUeXBlLk5vcm1hbCB8fCB0ID09IE1qR2FtZVR5cGUuVGlsZTJOb3JtYWw7XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xuICB9XG4gIG9uTWFpbkdhbWVDdHJsX2luaXRSZXModCwgcikge1xuICAgIHZhciBlID0gdC5pbnM7XG4gICAgdGhpcy5fY3VyclNraW4gPSB0aGlzLnNraW5CdW5kbGUoZS5nYW1lVHlwZSk7XG4gICAgdGhpcy5fY3VyclNraW4gJiYgZSAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUuYWRkUHJlbG9hZFJlcyAmJiBlLmFkZFByZWxvYWRSZXMoXCJTcHJpdGVBdGxhc1wiLCB0aGlzLl9jdXJyU2tpbiArIFwiOmF0bGFzL2NhcmRJY29uXCIpO1xuICAgIHIoKTtcbiAgfVxuICBvbkNhcmRVdGlsX2F0bGFzUGF0aEJ1bmRsZSh0LCByKSB7XG4gICAgdmFyIGU7XG4gICAgaWYgKHRoaXMuX2N1cnJTa2luKSB7XG4gICAgICB2YXIgbiA9IG51bGwgPT09IChlID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlWzBdO1xuICAgICAgaWYgKG4gJiYgcC50ZXN0KG4pKSB7XG4gICAgICAgIHIoe1xuICAgICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgICAgcGF0aDogXCJhdGxhcy9jYXJkSWNvbi9cIiArIG4sXG4gICAgICAgICAgICBidW5kbGVOYW1lOiB0aGlzLl9jdXJyU2tpbixcbiAgICAgICAgICAgIGZyb21BdGxhczogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHIoKTtcbiAgfVxufSJdfQ==