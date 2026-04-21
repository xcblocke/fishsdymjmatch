import ViewController, {viewMode} from "./framework/controller/ViewController";
import LoginView from "./view/LoginView";
import LoginModel from "./gamePlay/login/model/LoginModel";
import {generateTraceId} from "./framework/network/EasyHttp";
import {PLATFORM_CONFIG} from "./Config";

var p = window["MBHHotUpdate"].LoginController;

@mj.class("LoginController")
export default class LoginController extends ViewController {
    viewClass = LoginView;
    viewMode = viewMode.SCENE;
    _model = null;

    getMessageListeners() {
        return {};
    }

    viewDidLoad() {
        super.viewDidLoad.call(this);
        this._model = LoginModel.getInstance();
        var t = this.getRes("config/base_plan");
        this._model.initBasePlanData(t.json);
        this.login();
    }

    initDependRes() {
        this.preloadResMap.JsonAsset = "config/base_plan";
    }

    login() {
        var e = this;
        if (p.instance().isValid()) {
            this.initLogin(function (t, o) {
                if (o) {
                    e._model.initLoginInfo(null);
                } else {
                    e._model.initLoginInfo(t);
                }
            });
            this._model.baseVersion = G_Cfg.baseVersion;
        } else {
            if (this._model.getRestartTag()) {
                this._model.setRestartTag(false);
                this._model.initLoginInfo(null);
                return;
            }
            this.getServerPlanDataManual(function (t) {
                return e._model.initLoginInfo(t);
            });
        }
    }

    getGMPlanID() {
        return cc.sys.localStorage.getItem("__gmPlan__");
    }

    getServerPlanDataManual(e) {
        e(null);
        // cc.assetManager.loadBundle("mainRes", (err: Error, bundle: cc.AssetManager.Bundle) => {
        //     bundle.loadDir("config/data", cc.JsonAsset, (error, assets: cc.JsonAsset[]) => {
        //         console.log("加载配置完成");
        //
        //     });
        // });
    }

    initLogin(e) {
        var t = this,
            o = p.instance(),
            n = this._model.deviceInfo;
        o.showTips = function (e) {
            var o = e.content,
                n = e.sureCallback,
                i = e.cancelCallback;
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
                    },
                    o = t(e.request_start, e.readyState_1),
                    n = t(e.readyState_1, e.readyState_2),
                    i = t(e.readyState_2, e.readyState_3),
                    r = t(e.readyState_3, e.readyState_4);
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
        } else {
            var r = this.getPlanFetchParams();
            o.login(r, function (n) {
                t._model.version = o.version;
                G_Cfg.version = o.version;
                cc.sys.localStorage.setItem("__version__", o.version);
                e && e(n);
            });
        }
    }

    getSignedHeaders(e) {
        var t = LoginModel.getInstance().deviceInfo,
            o = Date.now().toString(),
            n = generateTraceId(),
            i = t.distinct_id || "temp",
            r = t.deviceid || "temp",
            a = PLATFORM_CONFIG[cc.sys.os],
            l = a.bundleID,
            p = l + i + r + l + o + n + e + a.signSecret;
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
    }

    getPlanFetchParams() {
        var e = this,
            t = this._model.deviceInfo,
            o = null;
        if (cc.sys.isNative) {
            delete (o = p.instance().getExtInfo()).deviceId;
        } else {
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
            },
            i = this.getGMPlanID();
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
    }
}