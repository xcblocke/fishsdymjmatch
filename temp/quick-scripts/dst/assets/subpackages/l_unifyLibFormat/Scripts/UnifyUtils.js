
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_unifyLibFormat/Scripts/UnifyUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22f3asmg6ZPrZqwZstsw2jE', 'UnifyUtils');
// subpackages/l_unifyLibFormat/Scripts/UnifyUtils.ts

Object.defineProperty(exports, "__esModule", { value: true });
var JsonManager_1 = require("../../../Scripts/JsonManager");
var UnifyUtils = /** @class */ (function () {
    function UnifyUtils() {
    }
    UnifyUtils.parseLevelData = function (t) {
        var e, r, i = t.dimensions, a = t.header, o = t.rows, l = [];
        try {
            for (var c = __values(o), s = c.next(); !s.done; s = c.next()) {
                for (var u = s.value, f = {}, p = 0; p < u.length; p++)
                    if ("dimension" === a[p]) {
                        f.dimension = i[u[p]];
                    }
                    else {
                        f[a[p]] = u[p];
                    }
                l.push(f);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                s && !s.done && (r = c.return) && r.call(c);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return l;
    };
    UnifyUtils.mergeLibraryData = function (t) {
        var e, r, i, o = {
            header: [],
            rows: [],
            dimensions: [],
            config: {}
        }, l = false, c = false, s = false, u = 0;
        try {
            for (var f = __values(t), p = f.next(); !p.done; p = f.next()) {
                var y = p.value;
                if (y) {
                    if (l) {
                        if (y.header.join(",") !== o.header.join(",")) {
                            u++;
                            continue;
                        }
                    }
                    else {
                        o.header = y.header;
                        l = true;
                    }
                    if (!c) {
                        o.dimensions = y.dimensions;
                        c = true;
                    }
                    if (!s) {
                        o.config = y.config;
                        s = true;
                    }
                    (i = o.rows).push.apply(i, __spreadArrays(y.rows));
                }
                else
                    u++;
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                p && !p.done && (r = f.return) && r.call(f);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return l && c && s ? {
            allData: o,
            failCount: u
        } : {
            allData: null,
            failCount: u
        };
    };
    UnifyUtils.loadLibraries = function (t) {
        var e = this, r = t.length;
        return new Promise(function (n) {
            Promise.all(t.map(function (t) {
                return JsonManager_1.default.getInstance().loadJson(t.path, t.bundle, t.timeout);
            })).then(function (i) {
                for (var a = [], o = 0; o < i.length; o++)
                    i[o] || a.push(t[o].path + "-" + t[o].bundle);
                var l = e.mergeLibraryData(i), c = l.allData, s = l.failCount;
                n({
                    allData: c,
                    totalCount: r,
                    failCount: s
                });
            }).catch(function () {
                n({
                    allData: null,
                    totalCount: r,
                    failCount: r
                });
            });
        });
    };
    return UnifyUtils;
}());
exports.default = UnifyUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3VuaWZ5TGliRm9ybWF0L1NjcmlwdHMvVW5pZnlVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQXVEO0FBQ3ZEO0lBQUE7SUFnSEEsQ0FBQztJQS9HUSx5QkFBYyxHQUFyQixVQUFzQixDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFDaEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQ1osQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQ1YsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNULElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFBRSxJQUFJLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ2hGLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN2Qjt5QkFBTTt3QkFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNoQjtnQkFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ1g7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFH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Q0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxpQkFBQztBQUFELENBaEhBLEFBZ0hDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSnNvbk1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9Kc29uTWFuYWdlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbmlmeVV0aWxzIHtcbiAgc3RhdGljIHBhcnNlTGV2ZWxEYXRhKHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIHIsXG4gICAgICBpID0gdC5kaW1lbnNpb25zLFxuICAgICAgYSA9IHQuaGVhZGVyLFxuICAgICAgbyA9IHQucm93cyxcbiAgICAgIGwgPSBbXTtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgYyA9IF9fdmFsdWVzKG8pLCBzID0gYy5uZXh0KCk7ICFzLmRvbmU7IHMgPSBjLm5leHQoKSkge1xuICAgICAgICBmb3IgKHZhciB1ID0gcy52YWx1ZSwgZiA9IHt9LCBwID0gMDsgcCA8IHUubGVuZ3RoOyBwKyspIGlmIChcImRpbWVuc2lvblwiID09PSBhW3BdKSB7XG4gICAgICAgICAgZi5kaW1lbnNpb24gPSBpW3VbcF1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZbYVtwXV0gPSB1W3BdO1xuICAgICAgICB9XG4gICAgICAgIGwucHVzaChmKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcyAmJiAhcy5kb25lICYmIChyID0gYy5yZXR1cm4pICYmIHIuY2FsbChjKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbDtcbiAgfVxuICBzdGF0aWMgbWVyZ2VMaWJyYXJ5RGF0YSh0KSB7XG4gICAgdmFyIGUsXG4gICAgICByLFxuICAgICAgaSxcbiAgICAgIG8gPSB7XG4gICAgICAgIGhlYWRlcjogW10sXG4gICAgICAgIHJvd3M6IFtdLFxuICAgICAgICBkaW1lbnNpb25zOiBbXSxcbiAgICAgICAgY29uZmlnOiB7fVxuICAgICAgfSxcbiAgICAgIGwgPSBmYWxzZSxcbiAgICAgIGMgPSBmYWxzZSxcbiAgICAgIHMgPSBmYWxzZSxcbiAgICAgIHUgPSAwO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBmID0gX192YWx1ZXModCksIHAgPSBmLm5leHQoKTsgIXAuZG9uZTsgcCA9IGYubmV4dCgpKSB7XG4gICAgICAgIHZhciB5ID0gcC52YWx1ZTtcbiAgICAgICAgaWYgKHkpIHtcbiAgICAgICAgICBpZiAobCkge1xuICAgICAgICAgICAgaWYgKHkuaGVhZGVyLmpvaW4oXCIsXCIpICE9PSBvLmhlYWRlci5qb2luKFwiLFwiKSkge1xuICAgICAgICAgICAgICB1Kys7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvLmhlYWRlciA9IHkuaGVhZGVyO1xuICAgICAgICAgICAgbCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghYykge1xuICAgICAgICAgICAgby5kaW1lbnNpb25zID0geS5kaW1lbnNpb25zO1xuICAgICAgICAgICAgYyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghcykge1xuICAgICAgICAgICAgby5jb25maWcgPSB5LmNvbmZpZztcbiAgICAgICAgICAgIHMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAoaSA9IG8ucm93cykucHVzaC5hcHBseShpLCBbLi4ueS5yb3dzXSk7XG4gICAgICAgIH0gZWxzZSB1Kys7XG4gICAgICB9XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgZSA9IHtcbiAgICAgICAgZXJyb3I6IHRcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHAgJiYgIXAuZG9uZSAmJiAociA9IGYucmV0dXJuKSAmJiByLmNhbGwoZik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoZSkgdGhyb3cgZS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGwgJiYgYyAmJiBzID8ge1xuICAgICAgYWxsRGF0YTogbyxcbiAgICAgIGZhaWxDb3VudDogdVxuICAgIH0gOiB7XG4gICAgICBhbGxEYXRhOiBudWxsLFxuICAgICAgZmFpbENvdW50OiB1XG4gICAgfTtcbiAgfVxuICBzdGF0aWMgbG9hZExpYnJhcmllcyh0KSB7XG4gICAgdmFyIGUgPSB0aGlzLFxuICAgICAgciA9IHQubGVuZ3RoO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAobikge1xuICAgICAgUHJvbWlzZS5hbGwodC5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIEpzb25NYW5hZ2VyLmdldEluc3RhbmNlKCkubG9hZEpzb24odC5wYXRoLCB0LmJ1bmRsZSwgdC50aW1lb3V0KTtcbiAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGZvciAodmFyIGEgPSBbXSwgbyA9IDA7IG8gPCBpLmxlbmd0aDsgbysrKSBpW29dIHx8IGEucHVzaCh0W29dLnBhdGggKyBcIi1cIiArIHRbb10uYnVuZGxlKTtcbiAgICAgICAgdmFyIGwgPSBlLm1lcmdlTGlicmFyeURhdGEoaSksXG4gICAgICAgICAgYyA9IGwuYWxsRGF0YSxcbiAgICAgICAgICBzID0gbC5mYWlsQ291bnQ7XG4gICAgICAgIG4oe1xuICAgICAgICAgIGFsbERhdGE6IGMsXG4gICAgICAgICAgdG90YWxDb3VudDogcixcbiAgICAgICAgICBmYWlsQ291bnQ6IHNcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG4oe1xuICAgICAgICAgIGFsbERhdGE6IG51bGwsXG4gICAgICAgICAgdG90YWxDb3VudDogcixcbiAgICAgICAgICBmYWlsQ291bnQ6IHJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSJdfQ==