
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_dimensionFilter/Scripts/DimensionFilterTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2RpbWVuc2lvbkZpbHRlci9TY3JpcHRzL0RpbWVuc2lvbkZpbHRlclRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsOEVBQXdGO0FBR3hGO0lBQWtELHdDQUFZO0lBQTlEOztJQTREQSxDQUFDO0lBMURDLHFDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDYixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixJQUFJLEVBQUU7U0FDekQsQ0FBQztJQUNKLENBQUM7SUFDRCx3REFBeUIsR0FBekIsVUFBMEIsQ0FBQyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO29CQUMvRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDbkMsQ0FBQyxHQUFHLENBQUMsQ0FBQyx1QkFBdUIsSUFBSSxFQUFFLEVBQ25DLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLElBQUksRUFBRSxFQUM3QixDQUFDLEdBQUcsRUFBRSxFQUNOLENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQ3BCLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO29CQUN2QixJQUFJO3dCQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFOzRCQUN6RixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNuQixJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQ0FDWixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dDQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FDYixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQ25CLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs2QkFDcEI7eUJBQ0Y7cUJBQ0Y7b0JBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQ1YsQ0FBQyxHQUFHOzRCQUNGLEtBQUssRUFBRSxDQUFDO3lCQUNULENBQUM7cUJBQ0g7NEJBQVM7d0JBQ1IsSUFBSTs0QkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUM3QztnQ0FBUzs0QkFDUixJQUFJLENBQUM7Z0NBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO3lCQUN0QjtxQkFDRjtvQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFO3dCQUNsQixDQUFDLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO3dCQUM5QixDQUFDLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQzt3QkFDbEIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7d0JBQ2xCLENBQUMsQ0FBQzs0QkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTs0QkFDMUMsT0FBTyxFQUFFLElBQUk7NEJBQ2IsU0FBUyxFQUFFLENBQUM7eUJBQ2IsQ0FBQyxDQUFDO3FCQUNKOzt3QkFBTSxDQUFDLEVBQUUsQ0FBQztpQkFDWjs7b0JBQU0sQ0FBQyxFQUFFLENBQUM7YUFDWjs7Z0JBQU0sQ0FBQyxFQUFFLENBQUM7U0FDWjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUExRE0sNkJBQVEsR0FBRyxpQkFBaUIsQ0FBQztJQURqQixvQkFBb0I7UUFGeEMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO09BQ1osb0JBQW9CLENBNER4QztJQUFELDJCQUFDO0NBNURELEFBNERDLENBNURpRCxzQkFBWSxHQTREN0Q7a0JBNURvQixvQkFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXh0cmFjdFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvRXh0cmFjdFRyYWl0JztcbmltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiRGltZW5zaW9uRmlsdGVyVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpbWVuc2lvbkZpbHRlclRyYWl0IGV4dGVuZHMgRXh0cmFjdFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJEaW1lbnNpb25GaWx0ZXJcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgIGZpbHRlckRpbWVuc2lvbnM6IHRoaXMuX3RyYWl0RGF0YS5maWx0ZXJEaW1lbnNpb25zIHx8IFtdXG4gICAgfTtcbiAgfVxuICBvbkV4dE5vcm1Mdl9wcm9jZXNzQ29uZmlnKHQsIGUpIHtcbiAgICB2YXIgciwgaTtcbiAgICBpZiAodGhpcy5jaGVja0dhbWVNb2RlKCkpIHtcbiAgICAgIHZhciBuID0gdC5hcmdzWzBdO1xuICAgICAgaWYgKG4pIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5maWx0ZXJEaW1lbnNpb25zICYmIDAgIT09IHRoaXMuX2NvbmZpZy5maWx0ZXJEaW1lbnNpb25zLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBvID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuKSksXG4gICAgICAgICAgICBmID0gby5DYXBhYmlsaXR5RGltZW5zaW9uTmFtZSB8fCBbXSxcbiAgICAgICAgICAgIGwgPSBvLkRpZmZ1bHR5SW50ZXJ2YWxzIHx8IFtdLFxuICAgICAgICAgICAgYyA9IFtdLFxuICAgICAgICAgICAgdSA9IFtdLFxuICAgICAgICAgICAgcCA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICB5ID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgXyA9IF9fdmFsdWVzKHRoaXMuX2NvbmZpZy5maWx0ZXJEaW1lbnNpb25zKSwgaCA9IF8ubmV4dCgpOyAhaC5kb25lOyBoID0gXy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgdmFyIG0gPSBoLnZhbHVlLFxuICAgICAgICAgICAgICAgIHYgPSBmLmluZGV4T2YobSk7XG4gICAgICAgICAgICAgIGlmICgtMSAhPT0gdikge1xuICAgICAgICAgICAgICAgIGMucHVzaChtKTtcbiAgICAgICAgICAgICAgICB2YXIgZCA9IGxbMiAqIHZdLFxuICAgICAgICAgICAgICAgICAgYiA9IGxbMiAqIHYgKyAxXTtcbiAgICAgICAgICAgICAgICB1LnB1c2goZCwgYik7XG4gICAgICAgICAgICAgICAgcCA9IE1hdGgubWluKHAsIGQpO1xuICAgICAgICAgICAgICAgIHkgPSBNYXRoLm1heCh5LCBiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgICAgICAgIHIgPSB7XG4gICAgICAgICAgICAgIGVycm9yOiB0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBoICYmICFoLmRvbmUgJiYgKGkgPSBfLnJldHVybikgJiYgaS5jYWxsKF8pO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgaWYgKHIpIHRocm93IHIuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgwICE9PSBjLmxlbmd0aCkge1xuICAgICAgICAgICAgby5DYXBhYmlsaXR5RGltZW5zaW9uTmFtZSA9IGM7XG4gICAgICAgICAgICBvLkRpZmZ1bHR5SW50ZXJ2YWxzID0gdTtcbiAgICAgICAgICAgIG8uTWluRGlmZnVsdHkgPSBwO1xuICAgICAgICAgICAgby5NYXhEaWZmdWx0eSA9IHk7XG4gICAgICAgICAgICBlKHtcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgICAgICByZXR1cm5WYWw6IG9cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBlKCk7XG4gICAgICAgIH0gZWxzZSBlKCk7XG4gICAgICB9IGVsc2UgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=