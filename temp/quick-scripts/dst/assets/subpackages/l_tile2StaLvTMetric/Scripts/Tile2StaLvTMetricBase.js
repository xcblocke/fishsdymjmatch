
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2StaLvTMetric/Scripts/Tile2StaLvTMetricBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b2daFNzepKeL2MWtxakDsU', 'Tile2StaLvTMetricBase');
// subpackages/l_tile2StaLvTMetric/Scripts/Tile2StaLvTMetricBase.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
function l(t) {
    if (!t || !Array.isArray(t) || t.length < 2)
        return [1, 1];
    var e = Number(t[0]), r = Number(t[1]);
    return Number.isNaN(e) || Number.isNaN(r) ? [1, 1] : e <= r ? [e, r] : [r, e];
}
function c(t, e, r) {
    var a, i, o = null, l = Infinity;
    try {
        for (var c = __values(t), s = c.next(); !s.done; s = c.next()) {
            var u = s.value, f = u[e];
            if (null != f) {
                var p = Number(f);
                if (!Number.isNaN(p)) {
                    var h = Math.abs(p - r);
                    if (h < l) {
                        l = h;
                        o = u;
                    }
                }
            }
        }
    }
    catch (t) {
        a = {
            error: t
        };
    }
    finally {
        try {
            s && !s.done && (i = c.return) && i.call(c);
        }
        finally {
            if (a)
                throw a.error;
        }
    }
    return o;
}
var Tile2StaLvTMetricBase = /** @class */ (function (_super) {
    __extends(Tile2StaLvTMetricBase, _super);
    function Tile2StaLvTMetricBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._levelTypes = [];
        _this._metricName = "";
        _this._initialMetricValue = 0;
        _this._levelCount = 1;
        _this._targetMetricValue = 0;
        _this._random = [1, 1];
        return _this;
    }
    Tile2StaLvTMetricBase.prototype.getDDAOffset = function () {
        return 0;
    };
    Tile2StaLvTMetricBase.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._levelTypes = (e = this._traitData.levelTypes) && Array.isArray(e) ? e.map(function (t) {
            return Number(t);
        }).filter(function (t) {
            return t > 0;
        }) : [];
        var e;
        this._metricName = this._traitData.metricName || "";
        this._initialMetricValue = Number(this._traitData.initialMetricValue) || 0;
        this._levelCount = Math.max(1, Number(this._traitData.levelCount) || 1);
        this._targetMetricValue = Number(this._traitData.targetMetricValue) || 0;
        this._random = l(this._traitData.random);
    };
    Tile2StaLvTMetricBase.prototype.onT2StaLvT_filterPool = function (t, e) {
        var r = t.beforReturnVal, a = t.args && t.args.length > 1 ? Number(t.args[1]) : 0, i = t.args && t.args.length > 3 ? Number(t.args[3]) : 0;
        if (r && 0 !== r.length && a && i) {
            if (0 === this._levelTypes.length || this._levelTypes.indexOf(a) < 0)
                e();
            else if (this._metricName) {
                var o, n, l = Math.min(1, i / this._levelCount), s = (this._initialMetricValue + l * (this._targetMetricValue - this._initialMetricValue)) * (o = this._random[0], n = this._random[1], o + Math.random() * (n - o)) + this.getDDAOffset(a, i, this._initialMetricValue, this._targetMetricValue, this._levelCount), u = c(r, this._metricName, s);
                if (u) {
                    e({
                        returnVal: [u]
                    });
                }
                else {
                    e();
                }
            }
            else
                e();
        }
        else
            e();
    };
    __decorate([
        mj.traitEvent("T2Metric_ddaOffset")
    ], Tile2StaLvTMetricBase.prototype, "getDDAOffset", null);
    Tile2StaLvTMetricBase = __decorate([
        mj.class("Tile2StaLvTMetricBase")
    ], Tile2StaLvTMetricBase);
    return Tile2StaLvTMetricBase;
}(Trait_1.default));
exports.default = Tile2StaLvTMetricBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyU3RhTHZUTWV0cmljL1NjcmlwdHMvVGlsZTJTdGFMdlRNZXRyaWNCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNWLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNsQixDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLENBQUM7QUFDRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDaEIsSUFBSSxDQUFDLEVBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFJLEVBQ1IsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUNmLElBQUk7UUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFD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QUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQ2xRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxFQUFFO29CQUNMLENBQUMsQ0FBQzt3QkFDQSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ2YsQ0FBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLENBQUMsRUFBRSxDQUFDO2lCQUNMO2FBQ0Y7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBckNEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQzs2REFHbkM7SUFWa0IscUJBQXFCO1FBRHpDLEVBQUUsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUM7T0FDYixxQkFBcUIsQ0E4Q3pDO0lBQUQsNEJBQUM7Q0E5Q0QsQUE4Q0MsQ0E5Q2tELGVBQUssR0E4Q3ZEO2tCQTlDb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmZ1bmN0aW9uIGwodCkge1xuICBpZiAoIXQgfHwgIUFycmF5LmlzQXJyYXkodCkgfHwgdC5sZW5ndGggPCAyKSByZXR1cm4gWzEsIDFdO1xuICB2YXIgZSA9IE51bWJlcih0WzBdKSxcbiAgICByID0gTnVtYmVyKHRbMV0pO1xuICByZXR1cm4gTnVtYmVyLmlzTmFOKGUpIHx8IE51bWJlci5pc05hTihyKSA/IFsxLCAxXSA6IGUgPD0gciA/IFtlLCByXSA6IFtyLCBlXTtcbn1cbmZ1bmN0aW9uIGModCwgZSwgcikge1xuICB2YXIgYSxcbiAgICBpLFxuICAgIG8gPSBudWxsLFxuICAgIGwgPSBJbmZpbml0eTtcbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBjID0gX192YWx1ZXModCksIHMgPSBjLm5leHQoKTsgIXMuZG9uZTsgcyA9IGMubmV4dCgpKSB7XG4gICAgICB2YXIgdSA9IHMudmFsdWUsXG4gICAgICAgIGYgPSB1W2VdO1xuICAgICAgaWYgKG51bGwgIT0gZikge1xuICAgICAgICB2YXIgcCA9IE51bWJlcihmKTtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4ocCkpIHtcbiAgICAgICAgICB2YXIgaCA9IE1hdGguYWJzKHAgLSByKTtcbiAgICAgICAgICBpZiAoaCA8IGwpIHtcbiAgICAgICAgICAgIGwgPSBoO1xuICAgICAgICAgICAgbyA9IHU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoICh0KSB7XG4gICAgYSA9IHtcbiAgICAgIGVycm9yOiB0XG4gICAgfTtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgcyAmJiAhcy5kb25lICYmIChpID0gYy5yZXR1cm4pICYmIGkuY2FsbChjKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKGEpIHRocm93IGEuZXJyb3I7XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufVxuQG1qLmNsYXNzKFwiVGlsZTJTdGFMdlRNZXRyaWNCYXNlXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMlN0YUx2VE1ldHJpY0Jhc2UgZXh0ZW5kcyBUcmFpdCB7XG4gIF9sZXZlbFR5cGVzID0gW107XG4gIF9tZXRyaWNOYW1lID0gXCJcIjtcbiAgX2luaXRpYWxNZXRyaWNWYWx1ZSA9IDA7XG4gIF9sZXZlbENvdW50ID0gMTtcbiAgX3RhcmdldE1ldHJpY1ZhbHVlID0gMDtcbiAgX3JhbmRvbSA9IFsxLCAxXTtcbiAgQG1qLnRyYWl0RXZlbnQoXCJUMk1ldHJpY19kZGFPZmZzZXRcIilcbiAgZ2V0RERBT2Zmc2V0KCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLl9sZXZlbFR5cGVzID0gKGUgPSB0aGlzLl90cmFpdERhdGEubGV2ZWxUeXBlcykgJiYgQXJyYXkuaXNBcnJheShlKSA/IGUubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHQpO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQgPiAwO1xuICAgIH0pIDogW107XG4gICAgdmFyIGU7XG4gICAgdGhpcy5fbWV0cmljTmFtZSA9IHRoaXMuX3RyYWl0RGF0YS5tZXRyaWNOYW1lIHx8IFwiXCI7XG4gICAgdGhpcy5faW5pdGlhbE1ldHJpY1ZhbHVlID0gTnVtYmVyKHRoaXMuX3RyYWl0RGF0YS5pbml0aWFsTWV0cmljVmFsdWUpIHx8IDA7XG4gICAgdGhpcy5fbGV2ZWxDb3VudCA9IE1hdGgubWF4KDEsIE51bWJlcih0aGlzLl90cmFpdERhdGEubGV2ZWxDb3VudCkgfHwgMSk7XG4gICAgdGhpcy5fdGFyZ2V0TWV0cmljVmFsdWUgPSBOdW1iZXIodGhpcy5fdHJhaXREYXRhLnRhcmdldE1ldHJpY1ZhbHVlKSB8fCAwO1xuICAgIHRoaXMuX3JhbmRvbSA9IGwodGhpcy5fdHJhaXREYXRhLnJhbmRvbSk7XG4gIH1cbiAgb25UMlN0YUx2VF9maWx0ZXJQb29sKHQsIGUpIHtcbiAgICB2YXIgciA9IHQuYmVmb3JSZXR1cm5WYWwsXG4gICAgICBhID0gdC5hcmdzICYmIHQuYXJncy5sZW5ndGggPiAxID8gTnVtYmVyKHQuYXJnc1sxXSkgOiAwLFxuICAgICAgaSA9IHQuYXJncyAmJiB0LmFyZ3MubGVuZ3RoID4gMyA/IE51bWJlcih0LmFyZ3NbM10pIDogMDtcbiAgICBpZiAociAmJiAwICE9PSByLmxlbmd0aCAmJiBhICYmIGkpIHtcbiAgICAgIGlmICgwID09PSB0aGlzLl9sZXZlbFR5cGVzLmxlbmd0aCB8fCB0aGlzLl9sZXZlbFR5cGVzLmluZGV4T2YoYSkgPCAwKSBlKCk7ZWxzZSBpZiAodGhpcy5fbWV0cmljTmFtZSkge1xuICAgICAgICB2YXIgbyxcbiAgICAgICAgICBuLFxuICAgICAgICAgIGwgPSBNYXRoLm1pbigxLCBpIC8gdGhpcy5fbGV2ZWxDb3VudCksXG4gICAgICAgICAgcyA9ICh0aGlzLl9pbml0aWFsTWV0cmljVmFsdWUgKyBsICogKHRoaXMuX3RhcmdldE1ldHJpY1ZhbHVlIC0gdGhpcy5faW5pdGlhbE1ldHJpY1ZhbHVlKSkgKiAobyA9IHRoaXMuX3JhbmRvbVswXSwgbiA9IHRoaXMuX3JhbmRvbVsxXSwgbyArIE1hdGgucmFuZG9tKCkgKiAobiAtIG8pKSArIHRoaXMuZ2V0RERBT2Zmc2V0KGEsIGksIHRoaXMuX2luaXRpYWxNZXRyaWNWYWx1ZSwgdGhpcy5fdGFyZ2V0TWV0cmljVmFsdWUsIHRoaXMuX2xldmVsQ291bnQpLFxuICAgICAgICAgIHUgPSBjKHIsIHRoaXMuX21ldHJpY05hbWUsIHMpO1xuICAgICAgICBpZiAodSkge1xuICAgICAgICAgIGUoe1xuICAgICAgICAgICAgcmV0dXJuVmFsOiBbdV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBlKCk7XG4gICAgfSBlbHNlIGUoKTtcbiAgfVxufSJdfQ==