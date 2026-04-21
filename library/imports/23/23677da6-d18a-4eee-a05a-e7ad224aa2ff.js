"use strict";
cc._RF.push(module, '236772m0YpO7qBa560iSqL/', 'GameManager');
// Scripts/gamePlay/login/model/GameManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager_1 = require("../../../framework/manager/ControllerManager");
var MemoryManager_1 = require("../../../framework/manager/MemoryManager");
var Config_1 = require("../../../Config");
var LoginModel_1 = require("./LoginModel");
var ResManager_1 = require("../../../framework/manager/ResManager");
var TimeStatManager_1 = require("../../base/TimeStat/TimeStatManager");
cc.sys.isBrowser;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameManager_1 = GameManager;
    GameManager.prototype.onLoad = function () {
        if (GameManager_1.isInit) {
            this.openGlobalView();
            this.enterMainGame();
        }
        else
            this.init();
        this.initTimeStatSystem();
    };
    GameManager.prototype.initTimeStatSystem = function () {
        TimeStatManager_1.default.getInstance().init(this);
    };
    GameManager.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                var _this = this;
                switch (e.label) {
                    case 0:
                        LoginModel_1.default.getInstance().startSamplingFPS();
                        GameManager_1.isInit = true;
                        this.registerCustomEvent();
                        return cc.sys.isBrowser, [3, 2];
                    case 1:
                        e.sent();
                        return [3, 4];
                    case 2:
                        return [4, ResManager_1.resManager.loadBundle(ResManager_1.default.baseBundleName)];
                    case 3:
                        e.sent();
                        e.label = 4;
                    case 4:
                        cc.assetManager.loadBundle("mainRes", function (err, bundle) {
                            bundle.loadDir("config/data", cc.JsonAsset, function (error, assets) {
                                console.log("加载配置完成");
                                _this.openGlobalView();
                                _this.login();
                            });
                        });
                        return [2];
                }
            });
        });
    };
    GameManager.prototype.tryloadCachePlanData = function () {
        LoginModel_1.default.getInstance().isUpdateRestart() || LoginModel_1.default.getInstance().loadCachePlanData();
    };
    GameManager.prototype.enterMainGame = function () {
        ControllerManager_1.default.getInstance().pushViewByController("MainGameController", {
            isReplace: true
        });
    };
    GameManager.prototype.login = function () {
        ControllerManager_1.default.getInstance().pushViewByController("LoginController");
    };
    GameManager.prototype.openGlobalView = function () {
        ControllerManager_1.default.getInstance().pushViewByController("TipsController", {
            noBlock: true,
            isGlobal: true,
            bgStyle: null,
            isShowAction: false
        });
        ControllerManager_1.default.getInstance().pushViewByController("Tile2TipsController", {
            noBlock: true,
            isGlobal: true,
            bgStyle: null,
            isShowAction: false
        });
        ControllerManager_1.default.getInstance().pushViewByController("TopTouchController", {
            noBlock: true,
            isGlobal: true,
            bgStyle: null,
            isShowAction: false
        });
    };
    GameManager.prototype.registerCustomEvent = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (e) {
            cc.macro.KEY.back, e.keyCode;
        }, this);
        var e = MemoryManager_1.default.getInstance(), t = Date.now(), o = null, n = function n() {
            var e = false;
            if (cc.sys.isMobile) {
                var n = Date.now();
                o = n - t < 3000 && o || mj.sdk.getDeviceInfo();
                t = n;
                var i = null == o ? void 0 : o.remain_memory, r = i ? Number(i) : 10000;
                if (cc.sys.os === cc.sys.OS_ANDROID) {
                    e = r <= 1000;
                }
                else {
                    cc.sys.os === cc.sys.OS_IOS && (e = r <= 500);
                }
            }
            return e;
        };
        e.isLowMemory = n;
        cc.game.on("game_on_low_memory", function () {
            e.didReceiveMemoryWarning(n());
        }, this);
        cc.game.on(cc.game.EVENT_SHOW, function () {
            mj.EventManager.emit(Config_1.EVT_MSG_KEY_EVENT_SHOW);
            TimeStatManager_1.default.getInstance().resetStartPoint();
        }, this);
        cc.game.on(cc.game.EVENT_HIDE, function () {
            mj.EventManager.emit(Config_1.EVT_MSG_KEY_EVENT_HIDE);
            TimeStatManager_1.default.getInstance().syncTimeStats();
            e.didReceiveMemoryWarning(true);
        }, this);
    };
    GameManager.prototype.onDestroy = function () {
        _super.prototype.onDestroy && _super.prototype.onDestroy.call(this);
        TimeStatManager_1.default.getInstance().destroy();
        ControllerManager_1.default.getInstance().destroy();
        cc.game.targetOff(this);
        cc.systemEvent.targetOff(this);
    };
    var GameManager_1;
    GameManager.isInit = false;
    __decorate([
        mj.traitEvent("GameMgr_login")
    ], GameManager.prototype, "login", null);
    GameManager = GameManager_1 = __decorate([
        mj.class
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();