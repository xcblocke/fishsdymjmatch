
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/LoginController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c1418dPM9BMIISDj326T7Y', 'LoginController');
// Scripts/LoginController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ViewController_1 = require("./framework/controller/ViewController");
var LoginView_1 = require("./view/LoginView");
var LoginModel_1 = require("./gamePlay/login/model/LoginModel");
var EasyHttp_1 = require("./framework/network/EasyHttp");
var Config_1 = require("./Config");
var p = window["MBHHotUpdate"].LoginController;
var LoginController = /** @class */ (function (_super) {
    __extends(LoginController, _super);
    function LoginController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewClass = LoginView_1.default;
        _this.viewMode = ViewController_1.viewMode.SCENE;
        _this._model = null;
        return _this;
    }
    LoginController.prototype.getMessageListeners = function () {
        return {};
    };
    LoginController.prototype.viewDidLoad = function () {
        _super.prototype.viewDidLoad.call(this);
        this._model = LoginModel_1.default.getInstance();
        var t = this.getRes("config/base_plan");
        this._model.initBasePlanData(t.json);
        this.login();
    };
    LoginController.prototype.initDependRes = function () {
        this.preloadResMap.JsonAsset = "config/base_plan";
    };
    LoginController.prototype.login = function () {
        var e = this;
        if (p.instance().isValid()) {
            this.initLogin(function (t, o) {
                if (o) {
                    e._model.initLoginInfo(null);
                }
                else {
                    e._model.initLoginInfo(t);
                }
            });
            this._model.baseVersion = G_Cfg.baseVersion;
        }
        else {
            if (this._model.getRestartTag()) {
                this._model.setRestartTag(false);
                this._model.initLoginInfo(null);
                return;
            }
            this.getServerPlanDataManual(function (t) {
                return e._model.initLoginInfo(t);
            });
        }
    };
    LoginController.prototype.getGMPlanID = function () {
        return cc.sys.localStorage.getItem("__gmPlan__");
    };
    LoginController.prototype.getServerPlanDataManual = function (e) {
        e(null);
        // cc.assetManager.loadBundle("mainRes", (err: Error, bundle: cc.AssetManager.Bundle) => {
        //     bundle.loadDir("config/data", cc.JsonAsset, (error, assets: cc.JsonAsset[]) => {
        //         console.log("加载配置完成");
        //
        //     });
        // });
    };
    LoginController.prototype.initLogin = function (e) {
        var t = this, o = p.instance(), n = this._model.deviceInfo;
        o.showTips = function (e) {
            var o = e.content, n = e.sureCallback, i = e.cancelCallback;
            e.autoClose;
            t.pushController("AlertController", {
                content: o,
                cancelCallback: i,
                sureCallback: n,
                autoClose: true
            });
        };
        o.localStorage = {
            getItem: function (e) {
                return t._model.localData[e];
            },
            setItem: function (e, o) {
                return t._model.localData[e] = o;
            }
        };
        o.tracePoint = function (e) {
            if ("s_tech_request_init_success" === e.name) {
                var t = function t(e, t) {
                    return 0 === e || 0 === t ? -1 : t - e;
                }, o = t(e.request_start, e.readyState_1), n = t(e.readyState_1, e.readyState_2), i = t(e.readyState_2, e.readyState_3), r = t(e.readyState_3, e.readyState_4);
                e = {
                    name: "s_tech_request_init_success",
                    resp_code: e.resp_code,
                    trace_id: e.trace_id,
                    resp_data: e.resp_data,
                    err_message: e.err_message,
                    stage_time_0to1: o,
                    stage_time_1to2: n,
                    stage_time_2to3: i,
                    stage_time_3to4: r,
                    total_time: e.total_time,
                    http_code: e.http_code,
                    uri: e.url,
                    request_end: e.request_end,
                    request_start: e.request_start
                };
            }
            var a = e.name = e.name || "update_flow";
            delete e.name;
            mj.sdk.report(a, e);
        };
        var i = {
            uuid: n.distinct_id,
            device_id: n.deviceid,
            app_version: n.app_version,
            remain_diskspace: n.remain_diskspace
        };
        o.init(i, function () {
        });
        this._model.version = o.version;
        G_Cfg.version = o.version;
        cc.sys.localStorage.setItem("__version__", o.version);
        if (this._model.getRestartTag()) {
            this._model.setRestartTag(false);
            e && e(null, true);
        }
        else {
            var r = this.getPlanFetchParams();
            o.login(r, function (n) {
                t._model.version = o.version;
                G_Cfg.version = o.version;
                cc.sys.localStorage.setItem("__version__", o.version);
                e && e(n);
            });
        }
    };
    LoginController.prototype.getSignedHeaders = function (e) {
        var t = LoginModel_1.default.getInstance().deviceInfo, o = Date.now().toString(), n = EasyHttp_1.generateTraceId(), i = t.distinct_id || "temp", r = t.deviceid || "temp", a = Config_1.PLATFORM_CONFIG[cc.sys.os], l = a.bundleID, p = l + i + r + l + o + n + e + a.signSecret;
        return {
            "Content-Type": "application/json",
            "X-Trace-ID": n,
            "X-App-ID": l,
            "X-User-ID": i,
            "X-Device-ID": r,
            "X-Project-ID": a.projectId,
            "X-Bundle-ID": l,
            "X-Timestamp": o,
            "X-Sign": CryptoJS.SHA1(p).toString(CryptoJS.enc.Hex)
        };
    };
    LoginController.prototype.getPlanFetchParams = function () {
        var e = this, t = this._model.deviceInfo, o = null;
        if (cc.sys.isNative) {
            delete (o = p.instance().getExtInfo()).deviceId;
        }
        else {
            o = {};
        }
        this._model.isUpdateRestart() && !this._model.localData.cacheServerData && (this._model.localData.__loginDataDefault__ = "");
        var n = {
            abtest: {
                attributes: {
                    sdk_version: t.app_version,
                    country: t.country,
                    install_time: t.install_time,
                    game_version: G_Cfg.baseVersion,
                    first_start: !this._model.localData.cacheServerData
                }
            },
            multilink: o
        }, i = this.getGMPlanID();
        if (i) {
            var r = i.split(",").map(function (e) {
                return e.trim();
            });
            n.gmParams = {
                solution_id_list: r
            };
        }
        var a = JSON.stringify(n);
        n.headerFun = function () {
            return e.getSignedHeaders(a);
        };
        return n;
    };
    LoginController = __decorate([
        mj.class("LoginController")
    ], LoginController);
    return LoginController;
}(ViewController_1.default));
exports.default = LoginController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0xvZ2luQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQStFO0FBQy9FLDhDQUF5QztBQUN6QyxnRUFBMkQ7QUFDM0QseURBQTZEO0FBQzdELG1DQUF5QztBQUV6QyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsZUFBZSxDQUFDO0FBRy9DO0lBQTZDLG1DQUFjO0lBQTNEO1FBQUEscUVBb01DO1FBbk1HLGVBQVMsR0FBRyxtQkFBUyxDQUFDO1FBQ3RCLGNBQVEsR0FBRyx5QkFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixZQUFNLEdBQUcsSUFBSSxDQUFDOztJQWlNbEIsQ0FBQztJQS9MRyw2Q0FBbUIsR0FBbkI7UUFDSSxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksaUJBQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO0lBQ3RELENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFD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QW9NbkM7SUFBRCxzQkFBQztDQXBNRCxBQW9NQyxDQXBNNEMsd0JBQWMsR0FvTTFEO2tCQXBNb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3Q29udHJvbGxlciwge3ZpZXdNb2RlfSBmcm9tIFwiLi9mcmFtZXdvcmsvY29udHJvbGxlci9WaWV3Q29udHJvbGxlclwiO1xuaW1wb3J0IExvZ2luVmlldyBmcm9tIFwiLi92aWV3L0xvZ2luVmlld1wiO1xuaW1wb3J0IExvZ2luTW9kZWwgZnJvbSBcIi4vZ2FtZVBsYXkvbG9naW4vbW9kZWwvTG9naW5Nb2RlbFwiO1xuaW1wb3J0IHtnZW5lcmF0ZVRyYWNlSWR9IGZyb20gXCIuL2ZyYW1ld29yay9uZXR3b3JrL0Vhc3lIdHRwXCI7XG5pbXBvcnQge1BMQVRGT1JNX0NPTkZJR30gZnJvbSBcIi4vQ29uZmlnXCI7XG5cbnZhciBwID0gd2luZG93W1wiTUJISG90VXBkYXRlXCJdLkxvZ2luQ29udHJvbGxlcjtcblxuQG1qLmNsYXNzKFwiTG9naW5Db250cm9sbGVyXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkNvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG4gICAgdmlld0NsYXNzID0gTG9naW5WaWV3O1xuICAgIHZpZXdNb2RlID0gdmlld01vZGUuU0NFTkU7XG4gICAgX21vZGVsID0gbnVsbDtcblxuICAgIGdldE1lc3NhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICB2aWV3RGlkTG9hZCgpIHtcbiAgICAgICAgc3VwZXIudmlld0RpZExvYWQuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5fbW9kZWwgPSBMb2dpbk1vZGVsLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHZhciB0ID0gdGhpcy5nZXRSZXMoXCJjb25maWcvYmFzZV9wbGFuXCIpO1xuICAgICAgICB0aGlzLl9tb2RlbC5pbml0QmFzZVBsYW5EYXRhKHQuanNvbik7XG4gICAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9XG5cbiAgICBpbml0RGVwZW5kUmVzKCkge1xuICAgICAgICB0aGlzLnByZWxvYWRSZXNNYXAuSnNvbkFzc2V0ID0gXCJjb25maWcvYmFzZV9wbGFuXCI7XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgaWYgKHAuaW5zdGFuY2UoKS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdExvZ2luKGZ1bmN0aW9uICh0LCBvKSB7XG4gICAgICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgZS5fbW9kZWwuaW5pdExvZ2luSW5mbyhudWxsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlLl9tb2RlbC5pbml0TG9naW5JbmZvKHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWwuYmFzZVZlcnNpb24gPSBHX0NmZy5iYXNlVmVyc2lvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb2RlbC5nZXRSZXN0YXJ0VGFnKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbC5zZXRSZXN0YXJ0VGFnKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb2RlbC5pbml0TG9naW5JbmZvKG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2V0U2VydmVyUGxhbkRhdGFNYW51YWwoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS5fbW9kZWwuaW5pdExvZ2luSW5mbyh0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0R01QbGFuSUQoKSB7XG4gICAgICAgIHJldHVybiBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfX2dtUGxhbl9fXCIpO1xuICAgIH1cblxuICAgIGdldFNlcnZlclBsYW5EYXRhTWFudWFsKGUpIHtcbiAgICAgICAgZShudWxsKTtcbiAgICAgICAgLy8gY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoXCJtYWluUmVzXCIsIChlcnI6IEVycm9yLCBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpID0+IHtcbiAgICAgICAgLy8gICAgIGJ1bmRsZS5sb2FkRGlyKFwiY29uZmlnL2RhdGFcIiwgY2MuSnNvbkFzc2V0LCAoZXJyb3IsIGFzc2V0czogY2MuSnNvbkFzc2V0W10pID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIuWKoOi9vemFjee9ruWujOaIkFwiKTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBpbml0TG9naW4oZSkge1xuICAgICAgICB2YXIgdCA9IHRoaXMsXG4gICAgICAgICAgICBvID0gcC5pbnN0YW5jZSgpLFxuICAgICAgICAgICAgbiA9IHRoaXMuX21vZGVsLmRldmljZUluZm87XG4gICAgICAgIG8uc2hvd1RpcHMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG8gPSBlLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgbiA9IGUuc3VyZUNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIGkgPSBlLmNhbmNlbENhbGxiYWNrO1xuICAgICAgICAgICAgZS5hdXRvQ2xvc2U7XG4gICAgICAgICAgICB0LnB1c2hDb250cm9sbGVyKFwiQWxlcnRDb250cm9sbGVyXCIsIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBvLFxuICAgICAgICAgICAgICAgIGNhbmNlbENhbGxiYWNrOiBpLFxuICAgICAgICAgICAgICAgIHN1cmVDYWxsYmFjazogbixcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBvLmxvY2FsU3RvcmFnZSA9IHtcbiAgICAgICAgICAgIGdldEl0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQuX21vZGVsLmxvY2FsRGF0YVtlXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRJdGVtOiBmdW5jdGlvbiAoZSwgbykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0Ll9tb2RlbC5sb2NhbERhdGFbZV0gPSBvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBvLnRyYWNlUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKFwic190ZWNoX3JlcXVlc3RfaW5pdF9zdWNjZXNzXCIgPT09IGUubmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gZnVuY3Rpb24gdChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMCA9PT0gZSB8fCAwID09PSB0ID8gLTEgOiB0IC0gZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbyA9IHQoZS5yZXF1ZXN0X3N0YXJ0LCBlLnJlYWR5U3RhdGVfMSksXG4gICAgICAgICAgICAgICAgICAgIG4gPSB0KGUucmVhZHlTdGF0ZV8xLCBlLnJlYWR5U3RhdGVfMiksXG4gICAgICAgICAgICAgICAgICAgIGkgPSB0KGUucmVhZHlTdGF0ZV8yLCBlLnJlYWR5U3RhdGVfMyksXG4gICAgICAgICAgICAgICAgICAgIHIgPSB0KGUucmVhZHlTdGF0ZV8zLCBlLnJlYWR5U3RhdGVfNCk7XG4gICAgICAgICAgICAgICAgZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzX3RlY2hfcmVxdWVzdF9pbml0X3N1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgcmVzcF9jb2RlOiBlLnJlc3BfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgdHJhY2VfaWQ6IGUudHJhY2VfaWQsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BfZGF0YTogZS5yZXNwX2RhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVycl9tZXNzYWdlOiBlLmVycl9tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGFnZV90aW1lXzB0bzE6IG8sXG4gICAgICAgICAgICAgICAgICAgIHN0YWdlX3RpbWVfMXRvMjogbixcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2VfdGltZV8ydG8zOiBpLFxuICAgICAgICAgICAgICAgICAgICBzdGFnZV90aW1lXzN0bzQ6IHIsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsX3RpbWU6IGUudG90YWxfdGltZSxcbiAgICAgICAgICAgICAgICAgICAgaHR0cF9jb2RlOiBlLmh0dHBfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgdXJpOiBlLnVybCxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdF9lbmQ6IGUucmVxdWVzdF9lbmQsXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Rfc3RhcnQ6IGUucmVxdWVzdF9zdGFydFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYSA9IGUubmFtZSA9IGUubmFtZSB8fCBcInVwZGF0ZV9mbG93XCI7XG4gICAgICAgICAgICBkZWxldGUgZS5uYW1lO1xuICAgICAgICAgICAgbWouc2RrLnJlcG9ydChhLCBlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGkgPSB7XG4gICAgICAgICAgICB1dWlkOiBuLmRpc3RpbmN0X2lkLFxuICAgICAgICAgICAgZGV2aWNlX2lkOiBuLmRldmljZWlkLFxuICAgICAgICAgICAgYXBwX3ZlcnNpb246IG4uYXBwX3ZlcnNpb24sXG4gICAgICAgICAgICByZW1haW5fZGlza3NwYWNlOiBuLnJlbWFpbl9kaXNrc3BhY2VcbiAgICAgICAgfTtcbiAgICAgICAgby5pbml0KGksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX21vZGVsLnZlcnNpb24gPSBvLnZlcnNpb247XG4gICAgICAgIEdfQ2ZnLnZlcnNpb24gPSBvLnZlcnNpb247XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl9fdmVyc2lvbl9fXCIsIG8udmVyc2lvbik7XG4gICAgICAgIGlmICh0aGlzLl9tb2RlbC5nZXRSZXN0YXJ0VGFnKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsLnNldFJlc3RhcnRUYWcoZmFsc2UpO1xuICAgICAgICAgICAgZSAmJiBlKG51bGwsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHIgPSB0aGlzLmdldFBsYW5GZXRjaFBhcmFtcygpO1xuICAgICAgICAgICAgby5sb2dpbihyLCBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIHQuX21vZGVsLnZlcnNpb24gPSBvLnZlcnNpb247XG4gICAgICAgICAgICAgICAgR19DZmcudmVyc2lvbiA9IG8udmVyc2lvbjtcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfX3ZlcnNpb25fX1wiLCBvLnZlcnNpb24pO1xuICAgICAgICAgICAgICAgIGUgJiYgZShuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2lnbmVkSGVhZGVycyhlKSB7XG4gICAgICAgIHZhciB0ID0gTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLmRldmljZUluZm8sXG4gICAgICAgICAgICBvID0gRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgICAgICAgICAgbiA9IGdlbmVyYXRlVHJhY2VJZCgpLFxuICAgICAgICAgICAgaSA9IHQuZGlzdGluY3RfaWQgfHwgXCJ0ZW1wXCIsXG4gICAgICAgICAgICByID0gdC5kZXZpY2VpZCB8fCBcInRlbXBcIixcbiAgICAgICAgICAgIGEgPSBQTEFURk9STV9DT05GSUdbY2Muc3lzLm9zXSxcbiAgICAgICAgICAgIGwgPSBhLmJ1bmRsZUlELFxuICAgICAgICAgICAgcCA9IGwgKyBpICsgciArIGwgKyBvICsgbiArIGUgKyBhLnNpZ25TZWNyZXQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIFwiWC1UcmFjZS1JRFwiOiBuLFxuICAgICAgICAgICAgXCJYLUFwcC1JRFwiOiBsLFxuICAgICAgICAgICAgXCJYLVVzZXItSURcIjogaSxcbiAgICAgICAgICAgIFwiWC1EZXZpY2UtSURcIjogcixcbiAgICAgICAgICAgIFwiWC1Qcm9qZWN0LUlEXCI6IGEucHJvamVjdElkLFxuICAgICAgICAgICAgXCJYLUJ1bmRsZS1JRFwiOiBsLFxuICAgICAgICAgICAgXCJYLVRpbWVzdGFtcFwiOiBvLFxuICAgICAgICAgICAgXCJYLVNpZ25cIjogQ3J5cHRvSlMuU0hBMShwKS50b1N0cmluZyhDcnlwdG9KUy5lbmMuSGV4KVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldFBsYW5GZXRjaFBhcmFtcygpIHtcbiAgICAgICAgdmFyIGUgPSB0aGlzLFxuICAgICAgICAgICAgdCA9IHRoaXMuX21vZGVsLmRldmljZUluZm8sXG4gICAgICAgICAgICBvID0gbnVsbDtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgZGVsZXRlIChvID0gcC5pbnN0YW5jZSgpLmdldEV4dEluZm8oKSkuZGV2aWNlSWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbW9kZWwuaXNVcGRhdGVSZXN0YXJ0KCkgJiYgIXRoaXMuX21vZGVsLmxvY2FsRGF0YS5jYWNoZVNlcnZlckRhdGEgJiYgKHRoaXMuX21vZGVsLmxvY2FsRGF0YS5fX2xvZ2luRGF0YURlZmF1bHRfXyA9IFwiXCIpO1xuICAgICAgICB2YXIgbiA9IHtcbiAgICAgICAgICAgICAgICBhYnRlc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2RrX3ZlcnNpb246IHQuYXBwX3ZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiB0LmNvdW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWxsX3RpbWU6IHQuaW5zdGFsbF90aW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZV92ZXJzaW9uOiBHX0NmZy5iYXNlVmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X3N0YXJ0OiAhdGhpcy5fbW9kZWwubG9jYWxEYXRhLmNhY2hlU2VydmVyRGF0YVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtdWx0aWxpbms6IG9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpID0gdGhpcy5nZXRHTVBsYW5JRCgpO1xuICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgdmFyIHIgPSBpLnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZS50cmltKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG4uZ21QYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgc29sdXRpb25faWRfbGlzdDogclxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYSA9IEpTT04uc3RyaW5naWZ5KG4pO1xuICAgICAgICBuLmhlYWRlckZ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmdldFNpZ25lZEhlYWRlcnMoYSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuO1xuICAgIH1cbn0iXX0=