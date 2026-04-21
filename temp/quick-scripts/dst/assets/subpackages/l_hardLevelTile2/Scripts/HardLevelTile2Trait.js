
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_hardLevelTile2/Scripts/HardLevelTile2Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0826f+yNr5HNo4Ha2wsUURm', 'HardLevelTile2Trait');
// subpackages/l_hardLevelTile2/Scripts/HardLevelTile2Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var HardLevelTile2Trait = /** @class */ (function (_super) {
    __extends(HardLevelTile2Trait, _super);
    function HardLevelTile2Trait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HardLevelTile2Trait_1 = HardLevelTile2Trait;
    HardLevelTile2Trait.prototype.onLoad = function () {
        var t, r, a, i;
        _super.prototype.onLoad.call(this);
        var l = null !== (r = null === (t = this._traitData) || void 0 === t ? void 0 : t.firstHardLevel) && void 0 !== r ? r : 10;
        this._config = {
            firstHardLevel: l,
            cooldown: null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.cooldown) && void 0 !== i ? i : 4
        };
    };
    HardLevelTile2Trait.prototype.onExtractTool_isHardUI = function (e, t) {
        if (this.isTile2Mode()) {
            this.handleLabel(e, t, true);
        }
        else {
            t();
        }
    };
    HardLevelTile2Trait.prototype.onExtractTool_isExpertUI = function (e, t) {
        if (this.isTile2Mode()) {
            this.handleLabel(e, t, false);
        }
        else {
            t();
        }
    };
    HardLevelTile2Trait.prototype.onExtractTool_isHardUseFix = function (e, t) {
        if (this.isTile2Mode()) {
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: false
            });
        }
        else {
            t();
        }
    };
    HardLevelTile2Trait.prototype.isTile2Mode = function () {
        return UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    HardLevelTile2Trait.prototype.handleLabel = function (e, t, r) {
        var a = e.args[0];
        this.ensureCacheStructure();
        var i = this.getLevelCache(a);
        if (i && void 0 !== i.hardResult && void 0 !== i.expertResult) {
            var l = r ? i.hardResult : i.expertResult;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: l
            });
        }
        else {
            var o = UserModel_1.default.getInstance().getCurrentGameData().getDieResult(), c = this.calcShow(a, o, true), u = this.calcShow(a, o, false);
            this.setLevelCache(a, c, u);
            if (c) {
                this.localData.lastHardLevelID = a;
                this.localData.lastShowType = 1;
            }
            else if (u) {
                this.localData.lastHardLevelID = a;
                this.localData.lastShowType = 2;
            }
            var p = r ? c : u;
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: p
            });
        }
    };
    HardLevelTile2Trait.prototype.getLastHardLevelID = function () {
        return this.toNumber(this.localData.lastHardLevelID);
    };
    HardLevelTile2Trait.prototype.calcShow = function (e, t, r) {
        if (e < this._config.firstHardLevel)
            return false;
        if (e === this._config.firstHardLevel)
            return r;
        var a = this.getLastHardLevelID();
        if (1 !== t)
            return false;
        if (e > a && a > 0 && e - a <= this._config.cooldown)
            return false;
        if (e === a) {
            var i = this.toNumber(this.localData.lastShowType);
            if (1 === i)
                return r;
            if (2 === i)
                return !r;
        }
        var l = this.toNumber(this.localData.lastShowType);
        return !(0 !== l && 2 !== l || !r) || 1 === l && !r;
    };
    HardLevelTile2Trait.prototype.ensureCacheStructure = function () {
        this.localData.levelCacheMap || (this.localData.levelCacheMap = {});
        this.localData.levelCacheOrder && Array.isArray(this.localData.levelCacheOrder) || (this.localData.levelCacheOrder = []);
    };
    HardLevelTile2Trait.prototype.getLevelCache = function (e) {
        var t, r = String(e);
        return null !== (t = this.localData.levelCacheMap[r]) && void 0 !== t ? t : null;
    };
    HardLevelTile2Trait.prototype.setLevelCache = function (e, t, a) {
        var i = String(e), l = this.localData.levelCacheOrder, o = l.indexOf(e);
        -1 !== o && l.splice(o, 1);
        for (; l.length >= HardLevelTile2Trait_1.MAX_CACHE_SIZE;) {
            var n = l.shift();
            void 0 !== n && delete this.localData.levelCacheMap[String(n)];
        }
        this.localData.levelCacheMap[i] = {
            levelID: e,
            hardResult: t,
            expertResult: a
        };
        l.push(e);
        this.localData.levelCacheMap = this.localData.levelCacheMap;
        this.localData.levelCacheOrder = this.localData.levelCacheOrder;
    };
    HardLevelTile2Trait.prototype.toNumber = function (e, t) {
        if (t === void 0) { t = 0; }
        if ("number" == typeof e && !isNaN(e))
            return e;
        if ("string" == typeof e && "" !== e) {
            var r = Number(e);
            return isNaN(r) ? t : r;
        }
        return t;
    };
    var HardLevelTile2Trait_1;
    HardLevelTile2Trait.traitKey = "HardLevelTile2";
    HardLevelTile2Trait.MAX_CACHE_SIZE = 10;
    __decorate([
        mj.traitEvent("HardLvT2_getLastId")
    ], HardLevelTile2Trait.prototype, "getLastHardLevelID", null);
    HardLevelTile2Trait = HardLevelTile2Trait_1 = __decorate([
        mj.trait,
        mj.class("HardLevelTile2Trait")
    ], HardLevelTile2Trait);
    return HardLevelTile2Trait;
}(Trait_1.default));
exports.default = HardLevelTile2Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2hhcmRMZXZlbFRpbGUyL1NjcmlwdHMvSGFyZExldmVsVGlsZTJUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4RixzRUFBaUU7QUFDakUsd0ZBQW9GO0FBR3BGO0lBQWlELHVDQUFLO0lBQXREOztJQTRIQSxDQUFDOzRCQTVIb0IsbUJBQW1CO0lBR3RDLG9DQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDM0gsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEgsQ0FBQztJQUNKLENBQUM7SUFD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bUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQTRIdkM7SUFBRCwwQkFBQztDQTVIRCxBQTRIQyxDQTVIZ0QsZUFBSyxHQTRIckQ7a0JBNUhvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJIYXJkTGV2ZWxUaWxlMlRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXJkTGV2ZWxUaWxlMlRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkhhcmRMZXZlbFRpbGUyXCI7XG4gIHN0YXRpYyBNQVhfQ0FDSEVfU0laRSA9IDEwO1xuICBvbkxvYWQoKSB7XG4gICAgdmFyIHQsIHIsIGEsIGk7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdmFyIGwgPSBudWxsICE9PSAociA9IG51bGwgPT09ICh0ID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IHQgPyB2b2lkIDAgOiB0LmZpcnN0SGFyZExldmVsKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMTA7XG4gICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgZmlyc3RIYXJkTGV2ZWw6IGwsXG4gICAgICBjb29sZG93bjogbnVsbCAhPT0gKGkgPSBudWxsID09PSAoYSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBhID8gdm9pZCAwIDogYS5jb29sZG93bikgJiYgdm9pZCAwICE9PSBpID8gaSA6IDRcbiAgICB9O1xuICB9XG4gIG9uRXh0cmFjdFRvb2xfaXNIYXJkVUkoZSwgdCkge1xuICAgIGlmICh0aGlzLmlzVGlsZTJNb2RlKCkpIHtcbiAgICAgIHRoaXMuaGFuZGxlTGFiZWwoZSwgdCwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgb25FeHRyYWN0VG9vbF9pc0V4cGVydFVJKGUsIHQpIHtcbiAgICBpZiAodGhpcy5pc1RpbGUyTW9kZSgpKSB7XG4gICAgICB0aGlzLmhhbmRsZUxhYmVsKGUsIHQsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbkV4dHJhY3RUb29sX2lzSGFyZFVzZUZpeChlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNUaWxlMk1vZGUoKSkge1xuICAgICAgdCh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHQoKTtcbiAgICB9XG4gIH1cbiAgaXNUaWxlMk1vZGUoKSB7XG4gICAgcmV0dXJuIFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsO1xuICB9XG4gIGhhbmRsZUxhYmVsKGUsIHQsIHIpIHtcbiAgICB2YXIgYSA9IGUuYXJnc1swXTtcbiAgICB0aGlzLmVuc3VyZUNhY2hlU3RydWN0dXJlKCk7XG4gICAgdmFyIGkgPSB0aGlzLmdldExldmVsQ2FjaGUoYSk7XG4gICAgaWYgKGkgJiYgdm9pZCAwICE9PSBpLmhhcmRSZXN1bHQgJiYgdm9pZCAwICE9PSBpLmV4cGVydFJlc3VsdCkge1xuICAgICAgdmFyIGwgPSByID8gaS5oYXJkUmVzdWx0IDogaS5leHBlcnRSZXN1bHQ7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IGxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbyA9IFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lRGF0YSgpLmdldERpZVJlc3VsdCgpLFxuICAgICAgICBjID0gdGhpcy5jYWxjU2hvdyhhLCBvLCB0cnVlKSxcbiAgICAgICAgdSA9IHRoaXMuY2FsY1Nob3coYSwgbywgZmFsc2UpO1xuICAgICAgdGhpcy5zZXRMZXZlbENhY2hlKGEsIGMsIHUpO1xuICAgICAgaWYgKGMpIHtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdEhhcmRMZXZlbElEID0gYTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEubGFzdFNob3dUeXBlID0gMTtcbiAgICAgIH0gZWxzZSBpZiAodSkge1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0SGFyZExldmVsSUQgPSBhO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0U2hvd1R5cGUgPSAyO1xuICAgICAgfVxuICAgICAgdmFyIHAgPSByID8gYyA6IHU7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5WYWw6IHBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkhhcmRMdlQyX2dldExhc3RJZFwiKVxuICBnZXRMYXN0SGFyZExldmVsSUQoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9OdW1iZXIodGhpcy5sb2NhbERhdGEubGFzdEhhcmRMZXZlbElEKTtcbiAgfVxuICBjYWxjU2hvdyhlLCB0LCByKSB7XG4gICAgaWYgKGUgPCB0aGlzLl9jb25maWcuZmlyc3RIYXJkTGV2ZWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZSA9PT0gdGhpcy5fY29uZmlnLmZpcnN0SGFyZExldmVsKSByZXR1cm4gcjtcbiAgICB2YXIgYSA9IHRoaXMuZ2V0TGFzdEhhcmRMZXZlbElEKCk7XG4gICAgaWYgKDEgIT09IHQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZSA+IGEgJiYgYSA+IDAgJiYgZSAtIGEgPD0gdGhpcy5fY29uZmlnLmNvb2xkb3duKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGUgPT09IGEpIHtcbiAgICAgIHZhciBpID0gdGhpcy50b051bWJlcih0aGlzLmxvY2FsRGF0YS5sYXN0U2hvd1R5cGUpO1xuICAgICAgaWYgKDEgPT09IGkpIHJldHVybiByO1xuICAgICAgaWYgKDIgPT09IGkpIHJldHVybiAhcjtcbiAgICB9XG4gICAgdmFyIGwgPSB0aGlzLnRvTnVtYmVyKHRoaXMubG9jYWxEYXRhLmxhc3RTaG93VHlwZSk7XG4gICAgcmV0dXJuICEoMCAhPT0gbCAmJiAyICE9PSBsIHx8ICFyKSB8fCAxID09PSBsICYmICFyO1xuICB9XG4gIGVuc3VyZUNhY2hlU3RydWN0dXJlKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLmxldmVsQ2FjaGVNYXAgfHwgKHRoaXMubG9jYWxEYXRhLmxldmVsQ2FjaGVNYXAgPSB7fSk7XG4gICAgdGhpcy5sb2NhbERhdGEubGV2ZWxDYWNoZU9yZGVyICYmIEFycmF5LmlzQXJyYXkodGhpcy5sb2NhbERhdGEubGV2ZWxDYWNoZU9yZGVyKSB8fCAodGhpcy5sb2NhbERhdGEubGV2ZWxDYWNoZU9yZGVyID0gW10pO1xuICB9XG4gIGdldExldmVsQ2FjaGUoZSkge1xuICAgIHZhciB0LFxuICAgICAgciA9IFN0cmluZyhlKTtcbiAgICByZXR1cm4gbnVsbCAhPT0gKHQgPSB0aGlzLmxvY2FsRGF0YS5sZXZlbENhY2hlTWFwW3JdKSAmJiB2b2lkIDAgIT09IHQgPyB0IDogbnVsbDtcbiAgfVxuICBzZXRMZXZlbENhY2hlKGUsIHQsIGEpIHtcbiAgICB2YXIgaSA9IFN0cmluZyhlKSxcbiAgICAgIGwgPSB0aGlzLmxvY2FsRGF0YS5sZXZlbENhY2hlT3JkZXIsXG4gICAgICBvID0gbC5pbmRleE9mKGUpO1xuICAgIC0xICE9PSBvICYmIGwuc3BsaWNlKG8sIDEpO1xuICAgIGZvciAoOyBsLmxlbmd0aCA+PSBIYXJkTGV2ZWxUaWxlMlRyYWl0Lk1BWF9DQUNIRV9TSVpFOykge1xuICAgICAgdmFyIG4gPSBsLnNoaWZ0KCk7XG4gICAgICB2b2lkIDAgIT09IG4gJiYgZGVsZXRlIHRoaXMubG9jYWxEYXRhLmxldmVsQ2FjaGVNYXBbU3RyaW5nKG4pXTtcbiAgICB9XG4gICAgdGhpcy5sb2NhbERhdGEubGV2ZWxDYWNoZU1hcFtpXSA9IHtcbiAgICAgIGxldmVsSUQ6IGUsXG4gICAgICBoYXJkUmVzdWx0OiB0LFxuICAgICAgZXhwZXJ0UmVzdWx0OiBhXG4gICAgfTtcbiAgICBsLnB1c2goZSk7XG4gICAgdGhpcy5sb2NhbERhdGEubGV2ZWxDYWNoZU1hcCA9IHRoaXMubG9jYWxEYXRhLmxldmVsQ2FjaGVNYXA7XG4gICAgdGhpcy5sb2NhbERhdGEubGV2ZWxDYWNoZU9yZGVyID0gdGhpcy5sb2NhbERhdGEubGV2ZWxDYWNoZU9yZGVyO1xuICB9XG4gIHRvTnVtYmVyKGUsIHQgPSAwKSB7XG4gICAgaWYgKFwibnVtYmVyXCIgPT0gdHlwZW9mIGUgJiYgIWlzTmFOKGUpKSByZXR1cm4gZTtcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiBcIlwiICE9PSBlKSB7XG4gICAgICB2YXIgciA9IE51bWJlcihlKTtcbiAgICAgIHJldHVybiBpc05hTihyKSA/IHQgOiByO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbiAgfVxufSJdfQ==