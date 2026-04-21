import ExtractTrait from '../../../Scripts/ExtractTrait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
@mj.trait
@mj.class("DimensionFilterTrait")
export default class DimensionFilterTrait extends ExtractTrait {
  static traitKey = "DimensionFilter";
  onLoad() {
    super.onLoad.call(this);
    this._config = {
      filterDimensions: this._traitData.filterDimensions || []
    };
  }
  onExtNormLv_processConfig(t, e) {
    var r, i;
    if (this.checkGameMode()) {
      var n = t.args[0];
      if (n) {
        if (this._config.filterDimensions && 0 !== this._config.filterDimensions.length) {
          var o = JSON.parse(JSON.stringify(n)),
            f = o.CapabilityDimensionName || [],
            l = o.DiffultyIntervals || [],
            c = [],
            u = [],
            p = Number.MAX_VALUE,
            y = Number.MIN_VALUE;
          try {
            for (var _ = __values(this._config.filterDimensions), h = _.next(); !h.done; h = _.next()) {
              var m = h.value,
                v = f.indexOf(m);
              if (-1 !== v) {
                c.push(m);
                var d = l[2 * v],
                  b = l[2 * v + 1];
                u.push(d, b);
                p = Math.min(p, d);
                y = Math.max(y, b);
              }
            }
          } catch (t) {
            r = {
              error: t
            };
          } finally {
            try {
              h && !h.done && (i = _.return) && i.call(_);
            } finally {
              if (r) throw r.error;
            }
          }
          if (0 !== c.length) {
            o.CapabilityDimensionName = c;
            o.DiffultyIntervals = u;
            o.MinDiffulty = p;
            o.MaxDiffulty = y;
            e({
              returnType: TraitCallbackReturnType.return,
              isBreak: true,
              returnVal: o
            });
          } else e();
        } else e();
      } else e();
    } else e();
  }
}