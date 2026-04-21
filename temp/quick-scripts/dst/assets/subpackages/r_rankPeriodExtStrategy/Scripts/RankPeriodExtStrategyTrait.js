
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_rankPeriodExtStrategy/Scripts/RankPeriodExtStrategyTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18eecOPSzxLgZus3c+UTA1A', 'RankPeriodExtStrategyTrait');
// subpackages/r_rankPeriodExtStrategy/Scripts/RankPeriodExtStrategyTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var l = function l(r) {
    return null != r && ("string" != typeof r || 0 != r.length);
};
var RankPeriodExtStrategyTrait = /** @class */ (function (_super) {
    __extends(RankPeriodExtStrategyTrait, _super);
    function RankPeriodExtStrategyTrait() {
        var _this = _super.call(this) || this;
        _this.allPeriodArray = [];
        _this.localData.curLoopPeriodArray = l(_this.localData.curLoopPeriodArray) ? _this.localData.curLoopPeriodArray : [];
        return _this;
    }
    RankPeriodExtStrategyTrait_1 = RankPeriodExtStrategyTrait;
    RankPeriodExtStrategyTrait.prototype.initAllPeriodArray = function (r) {
        var t = this;
        this.allPeriodArray.length > 0 || r.forEach(function (r) {
            t.allPeriodArray.push(r.Period);
        });
    };
    RankPeriodExtStrategyTrait.prototype.onRankModel_getIdxByExc = function (r, t) {
        var e = r.ins.boardConfig;
        this.initAllPeriodArray(e);
        var o = r.args[0], a = this.getIdxByExclude(o);
        t({
            isBreak: true,
            returnType: TraitCallbackReturnType.return,
            returnVal: a
        });
    };
    RankPeriodExtStrategyTrait.prototype.getIdxByExclude = function (r) {
        0 == this.localData.curLoopPeriodArray.length && (this.localData.curLoopPeriodArray = this.allPeriodArray.slice());
        for (var t = -1, e = 0; e < 100; e++) {
            var o = Math.floor(Math.random() * this.localData.curLoopPeriodArray.length), a = this.localData.curLoopPeriodArray[o];
            if (!r.includes(a)) {
                this.localData.curLoopPeriodArray.splice(o, 1);
                this.localData.curLoopPeriodArray = this.localData.curLoopPeriodArray;
                t = a;
                break;
            }
        }
        return t < 0 || !this.allPeriodArray.includes(t) ? 0 : this.allPeriodArray.indexOf(t);
    };
    RankPeriodExtStrategyTrait.prototype.onCardUtil_atlasPathBundle = function (r, t) {
        var o = r.args[0], a = mj.getClassByName("RankModel");
        if (a) {
            var i = a.getInstance().getCurBoardData();
            if (i && i.CollectThing == o) {
                if (i.Period <= 5)
                    t();
                else {
                    var n = "res/" + o;
                    t({
                        returnType: TraitCallbackReturnType.return,
                        isBreak: true,
                        returnVal: {
                            path: n,
                            bundleName: RankPeriodExtStrategyTrait_1.BUNDLE_NAME,
                            fromAtlas: false
                        }
                    });
                }
            }
            else
                t();
        }
        else
            t();
    };
    RankPeriodExtStrategyTrait.prototype.onRankModel_getSameActCD = function (r, t) {
        t({
            returnVal: this.getSameActCD(),
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    RankPeriodExtStrategyTrait.prototype.onRankModel_getLoopLen = function (r, t) {
        t({
            returnVal: this.getLoopLen(),
            isBreak: true,
            returnType: TraitCallbackReturnType.return
        });
    };
    RankPeriodExtStrategyTrait.prototype.getSameActCD = function () {
        var r, t;
        return null !== (t = null === (r = this._traitData) || void 0 === r ? void 0 : r.sameActTimesCD) && void 0 !== t ? t : 4;
    };
    RankPeriodExtStrategyTrait.prototype.getLoopLen = function () {
        var r, t;
        return null !== (t = null === (r = this._traitData) || void 0 === r ? void 0 : r.loopLen) && void 0 !== t ? t : 10;
    };
    var RankPeriodExtStrategyTrait_1;
    RankPeriodExtStrategyTrait.traitKey = "RankPeriodExtStrategy";
    RankPeriodExtStrategyTrait.BUNDLE_NAME = "r_rankPeriodExtStrategy";
    RankPeriodExtStrategyTrait = RankPeriodExtStrategyTrait_1 = __decorate([
        mj.trait,
        mj.class("RankPeriodExtStrategy")
    ], RankPeriodExtStrategyTrait);
    return RankPeriodExtStrategyTrait;
}(Trait_1.default));
exports.default = RankPeriodExtStrategyTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX3JhbmtQZXJpb2RFeHRTdHJhdGVneS9TY3JpcHRzL1JhbmtQZXJpb2RFeHRTdHJhdGVneVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNsQixPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFHRjtJQUF3RCw4Q0FBSztJQUkzRDtRQUFBLFlBQ0UsaUJBQU8sU0FFUjtRQU5ELG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBS2xCLEtBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztJQUNwSCxDQUFDO21DQVBrQiwwQkFBMEI7SUFRN0MsdURBQWtCLEdBQWxCLFVBQW1CLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3JELENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCw0REFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFD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OUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO09BQ2IsMEJBQTBCLENBa0Y5QztJQUFELGlDQUFDO0NBbEZELEFBa0ZDLENBbEZ1RCxlQUFLLEdBa0Y1RDtrQkFsRm9CLDBCQUEwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG52YXIgbCA9IGZ1bmN0aW9uIGwocikge1xuICByZXR1cm4gbnVsbCAhPSByICYmIChcInN0cmluZ1wiICE9IHR5cGVvZiByIHx8IDAgIT0gci5sZW5ndGgpO1xufTtcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiUmFua1BlcmlvZEV4dFN0cmF0ZWd5XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5rUGVyaW9kRXh0U3RyYXRlZ3lUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgYWxsUGVyaW9kQXJyYXkgPSBbXTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJSYW5rUGVyaW9kRXh0U3RyYXRlZ3lcIjtcbiAgc3RhdGljIEJVTkRMRV9OQU1FID0gXCJyX3JhbmtQZXJpb2RFeHRTdHJhdGVneVwiO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubG9jYWxEYXRhLmN1ckxvb3BQZXJpb2RBcnJheSA9IGwodGhpcy5sb2NhbERhdGEuY3VyTG9vcFBlcmlvZEFycmF5KSA/IHRoaXMubG9jYWxEYXRhLmN1ckxvb3BQZXJpb2RBcnJheSA6IFtdO1xuICB9XG4gIGluaXRBbGxQZXJpb2RBcnJheShyKSB7XG4gICAgdmFyIHQgPSB0aGlzO1xuICAgIHRoaXMuYWxsUGVyaW9kQXJyYXkubGVuZ3RoID4gMCB8fCByLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgIHQuYWxsUGVyaW9kQXJyYXkucHVzaChyLlBlcmlvZCk7XG4gICAgfSk7XG4gIH1cbiAgb25SYW5rTW9kZWxfZ2V0SWR4QnlFeGMociwgdCkge1xuICAgIHZhciBlID0gci5pbnMuYm9hcmRDb25maWc7XG4gICAgdGhpcy5pbml0QWxsUGVyaW9kQXJyYXkoZSk7XG4gICAgdmFyIG8gPSByLmFyZ3NbMF0sXG4gICAgICBhID0gdGhpcy5nZXRJZHhCeUV4Y2x1ZGUobyk7XG4gICAgdCh7XG4gICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgcmV0dXJuVmFsOiBhXG4gICAgfSk7XG4gIH1cbiAgZ2V0SWR4QnlFeGNsdWRlKHIpIHtcbiAgICAwID09IHRoaXMubG9jYWxEYXRhLmN1ckxvb3BQZXJpb2RBcnJheS5sZW5ndGggJiYgKHRoaXMubG9jYWxEYXRhLmN1ckxvb3BQZXJpb2RBcnJheSA9IHRoaXMuYWxsUGVyaW9kQXJyYXkuc2xpY2UoKSk7XG4gICAgZm9yICh2YXIgdCA9IC0xLCBlID0gMDsgZSA8IDEwMDsgZSsrKSB7XG4gICAgICB2YXIgbyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubG9jYWxEYXRhLmN1ckxvb3BQZXJpb2RBcnJheS5sZW5ndGgpLFxuICAgICAgICBhID0gdGhpcy5sb2NhbERhdGEuY3VyTG9vcFBlcmlvZEFycmF5W29dO1xuICAgICAgaWYgKCFyLmluY2x1ZGVzKGEpKSB7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmN1ckxvb3BQZXJpb2RBcnJheS5zcGxpY2UobywgMSk7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmN1ckxvb3BQZXJpb2RBcnJheSA9IHRoaXMubG9jYWxEYXRhLmN1ckxvb3BQZXJpb2RBcnJheTtcbiAgICAgICAgdCA9IGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdCA8IDAgfHwgIXRoaXMuYWxsUGVyaW9kQXJyYXkuaW5jbHVkZXModCkgPyAwIDogdGhpcy5hbGxQZXJpb2RBcnJheS5pbmRleE9mKHQpO1xuICB9XG4gIG9uQ2FyZFV0aWxfYXRsYXNQYXRoQnVuZGxlKHIsIHQpIHtcbiAgICB2YXIgbyA9IHIuYXJnc1swXSxcbiAgICAgIGEgPSBtai5nZXRDbGFzc0J5TmFtZShcIlJhbmtNb2RlbFwiKTtcbiAgICBpZiAoYSkge1xuICAgICAgdmFyIGkgPSBhLmdldEluc3RhbmNlKCkuZ2V0Q3VyQm9hcmREYXRhKCk7XG4gICAgICBpZiAoaSAmJiBpLkNvbGxlY3RUaGluZyA9PSBvKSB7XG4gICAgICAgIGlmIChpLlBlcmlvZCA8PSA1KSB0KCk7ZWxzZSB7XG4gICAgICAgICAgdmFyIG4gPSBcInJlcy9cIiArIG87XG4gICAgICAgICAgdCh7XG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgICAgIHBhdGg6IG4sXG4gICAgICAgICAgICAgIGJ1bmRsZU5hbWU6IFJhbmtQZXJpb2RFeHRTdHJhdGVneVRyYWl0LkJVTkRMRV9OQU1FLFxuICAgICAgICAgICAgICBmcm9tQXRsYXM6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvblJhbmtNb2RlbF9nZXRTYW1lQWN0Q0QociwgdCkge1xuICAgIHQoe1xuICAgICAgcmV0dXJuVmFsOiB0aGlzLmdldFNhbWVBY3RDRCgpLFxuICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgIH0pO1xuICB9XG4gIG9uUmFua01vZGVsX2dldExvb3BMZW4ociwgdCkge1xuICAgIHQoe1xuICAgICAgcmV0dXJuVmFsOiB0aGlzLmdldExvb3BMZW4oKSxcbiAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm5cbiAgICB9KTtcbiAgfVxuICBnZXRTYW1lQWN0Q0QoKSB7XG4gICAgdmFyIHIsIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gbnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuc2FtZUFjdFRpbWVzQ0QpICYmIHZvaWQgMCAhPT0gdCA/IHQgOiA0O1xuICB9XG4gIGdldExvb3BMZW4oKSB7XG4gICAgdmFyIHIsIHQ7XG4gICAgcmV0dXJuIG51bGwgIT09ICh0ID0gbnVsbCA9PT0gKHIgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIubG9vcExlbikgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDEwO1xuICB9XG59Il19