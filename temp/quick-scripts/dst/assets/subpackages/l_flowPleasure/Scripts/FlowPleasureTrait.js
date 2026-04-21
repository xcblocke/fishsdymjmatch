
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_flowPleasure/Scripts/FlowPleasureTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0849bV5VHFG6IvW3yQ2p96w', 'FlowPleasureTrait');
// subpackages/l_flowPleasure/Scripts/FlowPleasureTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var FlowPleasureTrait = /** @class */ (function (_super) {
    __extends(FlowPleasureTrait, _super);
    function FlowPleasureTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pleasure = 0;
        return _this;
    }
    FlowPleasureTrait.prototype.onLoad = function () {
        var e, r, a, i, o, l, n, s;
        _super.prototype.onLoad.call(this);
        this._pleasurePerHit = null !== (e = this._traitData.pleasurePerHit) && void 0 !== e ? e : 2;
        this._pleasureThreshold = null !== (r = this._traitData.pleasureThreshold) && void 0 !== r ? r : 6;
        this._minHolderRemain = null !== (a = this._traitData.minHolderRemain) && void 0 !== a ? a : 2;
        this._minRounds = null !== (i = this._traitData.minRounds) && void 0 !== i ? i : 2;
        this._minStepRatio = null !== (o = this._traitData.minStepRatio) && void 0 !== o ? o : 0.5;
        this._introLevels = null !== (l = this._traitData.introLevels) && void 0 !== l ? l : 10;
        this._defaultStage = null !== (n = this._traitData.defaultStage) && void 0 !== n ? n : 2;
        this._upgradeStage = null !== (s = this._traitData.upgradeStage) && void 0 !== s ? s : 3;
        this.localData.fpStage || (this.localData.fpStage = this._defaultStage);
    };
    FlowPleasureTrait.prototype.onDotGmClk_dot = function (t, e) {
        var r, a, i, o, n, s, f;
        try {
            if (!UserModel_1.default.getInstance().isGuideFinished()) {
                e();
                return;
            }
            var c = t.args[0], p = t.args[1], h = t.args[2];
            if (!c || !h) {
                e();
                return;
            }
            var d = c.getGameData(), _ = d.getTotalTileCount(), v = d.getClearTileCount();
            if ((_ > 0 ? v / _ : 0) < this._minStepRatio) {
                e();
                return;
            }
            var g = d.slotBarIds || [], y = h.cardId, m = [];
            try {
                for (var S = __values(g), T = S.next(); !T.done; T = S.next()) {
                    var w = T.value, P = (null === (n = p.getTileObjectByPosId) || void 0 === n ? void 0 : n.call(p, w)) || (null === (f = null === (s = c.getTileMapObject()) || void 0 === s ? void 0 : s.getTileObjectByPosId) || void 0 === f ? void 0 : f.call(s, w));
                    P && P.cardId === y && m.push(w);
                }
            }
            catch (t) {
                r = {
                    error: t
                };
            }
            finally {
                try {
                    T && !T.done && (a = S.return) && a.call(S);
                }
                finally {
                    if (r)
                        throw r.error;
                }
            }
            if (m.length < 1) {
                e();
                return;
            }
            if (g.length + 1 - 2 !== this._minHolderRemain) {
                e();
                return;
            }
            var b = c.tile2SlotBarData;
            if (!b) {
                e();
                return;
            }
            var D = 0;
            try {
                for (var R = __values(m), O = R.next(); !O.done; O = R.next()) {
                    w = O.value;
                    var j = b.getTileStep(w), x = j > 0 ? j - 1 : 0;
                    x > D && (D = x);
                }
            }
            catch (t) {
                i = {
                    error: t
                };
            }
            finally {
                try {
                    O && !O.done && (o = R.return) && o.call(R);
                }
                finally {
                    if (i)
                        throw i.error;
                }
            }
            D >= this._minRounds && (this._pleasure += this._pleasurePerHit);
        }
        catch (t) { }
        e();
    };
    FlowPleasureTrait.prototype.onIptRestart_excute = function (t, e) {
        this._pleasure = 0;
        e();
    };
    FlowPleasureTrait.prototype.onFlwLv_getAbilStg = function (t, e) {
        var r = t.args[0] || 0;
        if (r > 0 && r <= this._introLevels)
            e();
        else {
            this._evaluatePleasure();
            var a = this.localData.fpStage || this._defaultStage;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: a - 1
            });
        }
    };
    FlowPleasureTrait.prototype._evaluatePleasure = function () {
        var t, e = this._pleasure;
        this.localData.fpStage || this._defaultStage;
        t = e >= this._pleasureThreshold ? this._defaultStage : this._upgradeStage;
        this.localData.fpStage = t;
        this.localData.fpStage = this.localData.fpStage;
        this._pleasure = 0;
    };
    FlowPleasureTrait.traitKey = "FlowPleasure";
    FlowPleasureTrait = __decorate([
        mj.trait,
        mj.class("FlowPleasureTrait")
    ], FlowPleasureTrait);
    return FlowPleasureTrait;
}(Trait_1.default));
exports.default = FlowPleasureTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2Zsb3dQbGVhc3VyZS9TY3JpcHRzL0Zsb3dQbGVhc3VyZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUdqRTtJQUErQyxxQ0FBSztJQUFwRDtRQUFBLHFFQXNIQztRQXJIQyxlQUFTLEdBQUcsQ0FBQyxDQUFDOztJQXFIaEIsQ0FBQztJQW5IQyxrQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFD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QkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQW5ITSwwQkFBUSxHQUFHLGNBQWMsQ0FBQztJQUZkLGlCQUFpQjtRQUZyQyxFQUFFLENBQUMsS0FBSztRQUNSLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7T0FDVCxpQkFBaUIsQ0FzSHJDO0lBQUQsd0JBQUM7Q0F0SEQsQUFzSEMsQ0F0SDhDLGVBQUssR0FzSG5EO2tCQXRIb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9nYW1lUGxheS91c2VyL1VzZXJNb2RlbCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIkZsb3dQbGVhc3VyZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbG93UGxlYXN1cmVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3BsZWFzdXJlID0gMDtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJGbG93UGxlYXN1cmVcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByLCBhLCBpLCBvLCBsLCBuLCBzO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3BsZWFzdXJlUGVySGl0ID0gbnVsbCAhPT0gKGUgPSB0aGlzLl90cmFpdERhdGEucGxlYXN1cmVQZXJIaXQpICYmIHZvaWQgMCAhPT0gZSA/IGUgOiAyO1xuICAgIHRoaXMuX3BsZWFzdXJlVGhyZXNob2xkID0gbnVsbCAhPT0gKHIgPSB0aGlzLl90cmFpdERhdGEucGxlYXN1cmVUaHJlc2hvbGQpICYmIHZvaWQgMCAhPT0gciA/IHIgOiA2O1xuICAgIHRoaXMuX21pbkhvbGRlclJlbWFpbiA9IG51bGwgIT09IChhID0gdGhpcy5fdHJhaXREYXRhLm1pbkhvbGRlclJlbWFpbikgJiYgdm9pZCAwICE9PSBhID8gYSA6IDI7XG4gICAgdGhpcy5fbWluUm91bmRzID0gbnVsbCAhPT0gKGkgPSB0aGlzLl90cmFpdERhdGEubWluUm91bmRzKSAmJiB2b2lkIDAgIT09IGkgPyBpIDogMjtcbiAgICB0aGlzLl9taW5TdGVwUmF0aW8gPSBudWxsICE9PSAobyA9IHRoaXMuX3RyYWl0RGF0YS5taW5TdGVwUmF0aW8pICYmIHZvaWQgMCAhPT0gbyA/IG8gOiAwLjU7XG4gICAgdGhpcy5faW50cm9MZXZlbHMgPSBudWxsICE9PSAobCA9IHRoaXMuX3RyYWl0RGF0YS5pbnRyb0xldmVscykgJiYgdm9pZCAwICE9PSBsID8gbCA6IDEwO1xuICAgIHRoaXMuX2RlZmF1bHRTdGFnZSA9IG51bGwgIT09IChuID0gdGhpcy5fdHJhaXREYXRhLmRlZmF1bHRTdGFnZSkgJiYgdm9pZCAwICE9PSBuID8gbiA6IDI7XG4gICAgdGhpcy5fdXBncmFkZVN0YWdlID0gbnVsbCAhPT0gKHMgPSB0aGlzLl90cmFpdERhdGEudXBncmFkZVN0YWdlKSAmJiB2b2lkIDAgIT09IHMgPyBzIDogMztcbiAgICB0aGlzLmxvY2FsRGF0YS5mcFN0YWdlIHx8ICh0aGlzLmxvY2FsRGF0YS5mcFN0YWdlID0gdGhpcy5fZGVmYXVsdFN0YWdlKTtcbiAgfVxuICBvbkRvdEdtQ2xrX2RvdCh0LCBlKSB7XG4gICAgdmFyIHIsIGEsIGksIG8sIG4sIHMsIGY7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNHdWlkZUZpbmlzaGVkKCkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgYyA9IHQuYXJnc1swXSxcbiAgICAgICAgcCA9IHQuYXJnc1sxXSxcbiAgICAgICAgaCA9IHQuYXJnc1syXTtcbiAgICAgIGlmICghYyB8fCAhaCkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBkID0gYy5nZXRHYW1lRGF0YSgpLFxuICAgICAgICBfID0gZC5nZXRUb3RhbFRpbGVDb3VudCgpLFxuICAgICAgICB2ID0gZC5nZXRDbGVhclRpbGVDb3VudCgpO1xuICAgICAgaWYgKChfID4gMCA/IHYgLyBfIDogMCkgPCB0aGlzLl9taW5TdGVwUmF0aW8pIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZyA9IGQuc2xvdEJhcklkcyB8fCBbXSxcbiAgICAgICAgeSA9IGguY2FyZElkLFxuICAgICAgICBtID0gW107XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBTID0gX192YWx1ZXMoZyksIFQgPSBTLm5leHQoKTsgIVQuZG9uZTsgVCA9IFMubmV4dCgpKSB7XG4gICAgICAgICAgdmFyIHcgPSBULnZhbHVlLFxuICAgICAgICAgICAgUCA9IChudWxsID09PSAobiA9IHAuZ2V0VGlsZU9iamVjdEJ5UG9zSWQpIHx8IHZvaWQgMCA9PT0gbiA/IHZvaWQgMCA6IG4uY2FsbChwLCB3KSkgfHwgKG51bGwgPT09IChmID0gbnVsbCA9PT0gKHMgPSBjLmdldFRpbGVNYXBPYmplY3QoKSkgfHwgdm9pZCAwID09PSBzID8gdm9pZCAwIDogcy5nZXRUaWxlT2JqZWN0QnlQb3NJZCkgfHwgdm9pZCAwID09PSBmID8gdm9pZCAwIDogZi5jYWxsKHMsIHcpKTtcbiAgICAgICAgICBQICYmIFAuY2FyZElkID09PSB5ICYmIG0ucHVzaCh3KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAodCkge1xuICAgICAgICByID0ge1xuICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgIH07XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIFQgJiYgIVQuZG9uZSAmJiAoYSA9IFMucmV0dXJuKSAmJiBhLmNhbGwoUyk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZy5sZW5ndGggKyAxIC0gMiAhPT0gdGhpcy5fbWluSG9sZGVyUmVtYWluKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGIgPSBjLnRpbGUyU2xvdEJhckRhdGE7XG4gICAgICBpZiAoIWIpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgRCA9IDA7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKHZhciBSID0gX192YWx1ZXMobSksIE8gPSBSLm5leHQoKTsgIU8uZG9uZTsgTyA9IFIubmV4dCgpKSB7XG4gICAgICAgICAgdyA9IE8udmFsdWU7XG4gICAgICAgICAgdmFyIGogPSBiLmdldFRpbGVTdGVwKHcpLFxuICAgICAgICAgICAgeCA9IGogPiAwID8gaiAtIDEgOiAwO1xuICAgICAgICAgIHggPiBEICYmIChEID0geCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgaSA9IHtcbiAgICAgICAgICBlcnJvcjogdFxuICAgICAgICB9O1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBPICYmICFPLmRvbmUgJiYgKG8gPSBSLnJldHVybikgJiYgby5jYWxsKFIpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmIChpKSB0aHJvdyBpLmVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBEID49IHRoaXMuX21pblJvdW5kcyAmJiAodGhpcy5fcGxlYXN1cmUgKz0gdGhpcy5fcGxlYXN1cmVQZXJIaXQpO1xuICAgIH0gY2F0Y2ggKHQpIHt9XG4gICAgZSgpO1xuICB9XG4gIG9uSXB0UmVzdGFydF9leGN1dGUodCwgZSkge1xuICAgIHRoaXMuX3BsZWFzdXJlID0gMDtcbiAgICBlKCk7XG4gIH1cbiAgb25GbHdMdl9nZXRBYmlsU3RnKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuYXJnc1swXSB8fCAwO1xuICAgIGlmIChyID4gMCAmJiByIDw9IHRoaXMuX2ludHJvTGV2ZWxzKSBlKCk7ZWxzZSB7XG4gICAgICB0aGlzLl9ldmFsdWF0ZVBsZWFzdXJlKCk7XG4gICAgICB2YXIgYSA9IHRoaXMubG9jYWxEYXRhLmZwU3RhZ2UgfHwgdGhpcy5fZGVmYXVsdFN0YWdlO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiBhIC0gMVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIF9ldmFsdWF0ZVBsZWFzdXJlKCkge1xuICAgIHZhciB0LFxuICAgICAgZSA9IHRoaXMuX3BsZWFzdXJlO1xuICAgIHRoaXMubG9jYWxEYXRhLmZwU3RhZ2UgfHwgdGhpcy5fZGVmYXVsdFN0YWdlO1xuICAgIHQgPSBlID49IHRoaXMuX3BsZWFzdXJlVGhyZXNob2xkID8gdGhpcy5fZGVmYXVsdFN0YWdlIDogdGhpcy5fdXBncmFkZVN0YWdlO1xuICAgIHRoaXMubG9jYWxEYXRhLmZwU3RhZ2UgPSB0O1xuICAgIHRoaXMubG9jYWxEYXRhLmZwU3RhZ2UgPSB0aGlzLmxvY2FsRGF0YS5mcFN0YWdlO1xuICAgIHRoaXMuX3BsZWFzdXJlID0gMDtcbiAgfVxufSJdfQ==