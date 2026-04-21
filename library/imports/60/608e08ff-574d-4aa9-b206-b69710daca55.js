"use strict";
cc._RF.push(module, '608e0j/V01KqbIGtpcQ2spV', 'DimensionFilterTrait');
// subpackages/l_dimensionFilter/Scripts/DimensionFilterTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var DimensionFilterTrait = /** @class */ (function (_super) {
    __extends(DimensionFilterTrait, _super);
    function DimensionFilterTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DimensionFilterTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._config = {
            filterDimensions: this._traitData.filterDimensions || []
        };
    };
    DimensionFilterTrait.prototype.onExtNormLv_processConfig = function (t, e) {
        var r, i;
        if (this.checkGameMode()) {
            var n = t.args[0];
            if (n) {
                if (this._config.filterDimensions && 0 !== this._config.filterDimensions.length) {
                    var o = JSON.parse(JSON.stringify(n)), f = o.CapabilityDimensionName || [], l = o.DiffultyIntervals || [], c = [], u = [], p = Number.MAX_VALUE, y = Number.MIN_VALUE;
                    try {
                        for (var _ = __values(this._config.filterDimensions), h = _.next(); !h.done; h = _.next()) {
                            var m = h.value, v = f.indexOf(m);
                            if (-1 !== v) {
                                c.push(m);
                                var d = l[2 * v], b = l[2 * v + 1];
                                u.push(d, b);
                                p = Math.min(p, d);
                                y = Math.max(y, b);
                            }
                        }
                    }
                    catch (t) {
                        r = {
                            error: t
                        };
                    }
                    finally {
                        try {
                            h && !h.done && (i = _.return) && i.call(_);
                        }
                        finally {
                            if (r)
                                throw r.error;
                        }
                    }
                    if (0 !== c.length) {
                        o.CapabilityDimensionName = c;
                        o.DiffultyIntervals = u;
                        o.MinDiffulty = p;
                        o.MaxDiffulty = y;
                        e({
                            returnType: TraitManager_1.TraitCallbackReturnType.return,
                            isBreak: true,
                            returnVal: o
                        });
                    }
                    else
                        e();
                }
                else
                    e();
            }
            else
                e();
        }
        else
            e();
    };
    DimensionFilterTrait.traitKey = "DimensionFilter";
    DimensionFilterTrait = __decorate([
        mj.trait,
        mj.class("DimensionFilterTrait")
    ], DimensionFilterTrait);
    return DimensionFilterTrait;
}(ExtractTrait_1.default));
exports.default = DimensionFilterTrait;

cc._RF.pop();