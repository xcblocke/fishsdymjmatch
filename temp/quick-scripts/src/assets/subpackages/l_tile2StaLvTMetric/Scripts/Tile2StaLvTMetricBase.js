"use strict";
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