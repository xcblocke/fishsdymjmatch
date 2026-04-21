
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/login/model/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L2xvZ2luL21vZGVsL0dhbWVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRkFBNkU7QUFDN0UsMEVBQXFFO0FBQ3JFLDBDQUFpRjtBQUNqRiwyQ0FBc0M7QUFDdEMsb0VBQStFO0FBQy9FLHVFQUFrRTtBQUNsRSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUVqQjtJQUF5QywrQkFBWTtJQUFyRDs7SUF1SEEsQ0FBQztvQkF2SG9CLFdBQVc7SUFFOUIsNEJBQU0sR0FBTjtRQUNFLElBQUksYUFBVyxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCOztZQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0Qsd0NBQWtCLEdBQWxCO1FBQ0UseUJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELDBCQUFJLEdBQUo7UUFDRSxPQUFPLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDckMsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQztnQkFBWCxpQkEwQnhCO2dCQXpCQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUU7b0JBQ2YsS0FBSyxDQUFDO3dCQUNKLG9CQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzt3QkFDNUMsYUFBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQzFCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dCQUMzQixPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMs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c291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvQ29udHJvbGxlck1hbmFnZXInO1xuaW1wb3J0IE1lbW9yeU1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvTWVtb3J5TWFuYWdlcic7XG5pbXBvcnQgeyBFVlRfTVNHX0tFWV9FVkVOVF9TSE9XLCBFVlRfTVNHX0tFWV9FVkVOVF9ISURFIH0gZnJvbSAnLi4vLi4vLi4vQ29uZmlnJztcbmltcG9ydCBMb2dpbk1vZGVsIGZyb20gJy4vTG9naW5Nb2RlbCc7XG5pbXBvcnQgUmVzTWFuYWdlciwgeyByZXNNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vZnJhbWV3b3JrL21hbmFnZXIvUmVzTWFuYWdlcic7XG5pbXBvcnQgVGltZVN0YXRNYW5hZ2VyIGZyb20gJy4uLy4uL2Jhc2UvVGltZVN0YXQvVGltZVN0YXRNYW5hZ2VyJztcbmNjLnN5cy5pc0Jyb3dzZXI7XG5AbWouY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgc3RhdGljIGlzSW5pdCA9IGZhbHNlO1xuICBvbkxvYWQoKSB7XG4gICAgaWYgKEdhbWVNYW5hZ2VyLmlzSW5pdCkge1xuICAgICAgdGhpcy5vcGVuR2xvYmFsVmlldygpO1xuICAgICAgdGhpcy5lbnRlck1haW5HYW1lKCk7XG4gICAgfSBlbHNlIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMuaW5pdFRpbWVTdGF0U3lzdGVtKCk7XG4gIH1cbiAgaW5pdFRpbWVTdGF0U3lzdGVtKCkge1xuICAgIFRpbWVTdGF0TWFuYWdlci5nZXRJbnN0YW5jZSgpLmluaXQodGhpcyk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmxhYmVsKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLnN0YXJ0U2FtcGxpbmdGUFMoKTtcbiAgICAgICAgICAgIEdhbWVNYW5hZ2VyLmlzSW5pdCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQ3VzdG9tRXZlbnQoKTtcbiAgICAgICAgICAgIHJldHVybiBjYy5zeXMuaXNCcm93c2VyLCBbMywgMl07XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgZS5zZW50KCk7XG4gICAgICAgICAgICByZXR1cm4gWzMsIDRdO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBbNCwgcmVzTWFuYWdlci5sb2FkQnVuZGxlKFJlc01hbmFnZXIuYmFzZUJ1bmRsZU5hbWUpXTtcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBlLnNlbnQoKTtcbiAgICAgICAgICAgIGUubGFiZWwgPSA0O1xuICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKFwibWFpblJlc1wiLCAoZXJyOiBFcnJvciwgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgIGJ1bmRsZS5sb2FkRGlyKFwiY29uZmlnL2RhdGFcIiwgY2MuSnNvbkFzc2V0LCAoZXJyb3IsIGFzc2V0czogY2MuSnNvbkFzc2V0W10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKoOi9vemFjee9ruWujOaIkFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5HbG9iYWxWaWV3KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICB0cnlsb2FkQ2FjaGVQbGFuRGF0YSgpIHtcbiAgICBMb2dpbk1vZGVsLmdldEluc3RhbmNlKCkuaXNVcGRhdGVSZXN0YXJ0KCkgfHwgTG9naW5Nb2RlbC5nZXRJbnN0YW5jZSgpLmxvYWRDYWNoZVBsYW5EYXRhKCk7XG4gIH1cbiAgZW50ZXJNYWluR2FtZSgpIHtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiTWFpbkdhbWVDb250cm9sbGVyXCIsIHtcbiAgICAgIGlzUmVwbGFjZTogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiR2FtZU1ncl9sb2dpblwiKVxuICBsb2dpbigpIHtcbiAgICBDb250cm9sbGVyTWFuYWdlci5nZXRJbnN0YW5jZSgpLnB1c2hWaWV3QnlDb250cm9sbGVyKFwiTG9naW5Db250cm9sbGVyXCIpO1xuICB9XG4gIG9wZW5HbG9iYWxWaWV3KCkge1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJUaXBzQ29udHJvbGxlclwiLCB7XG4gICAgICBub0Jsb2NrOiB0cnVlLFxuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgICBiZ1N0eWxlOiBudWxsLFxuICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZVxuICAgIH0pO1xuICAgIENvbnRyb2xsZXJNYW5hZ2VyLmdldEluc3RhbmNlKCkucHVzaFZpZXdCeUNvbnRyb2xsZXIoXCJUaWxlMlRpcHNDb250cm9sbGVyXCIsIHtcbiAgICAgIG5vQmxvY2s6IHRydWUsXG4gICAgICBpc0dsb2JhbDogdHJ1ZSxcbiAgICAgIGJnU3R5bGU6IG51bGwsXG4gICAgICBpc1Nob3dBY3Rpb246IGZhbHNlXG4gICAgfSk7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5wdXNoVmlld0J5Q29udHJvbGxlcihcIlRvcFRvdWNoQ29udHJvbGxlclwiLCB7XG4gICAgICBub0Jsb2NrOiB0cnVlLFxuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgICBiZ1N0eWxlOiBudWxsLFxuICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIHJlZ2lzdGVyQ3VzdG9tRXZlbnQoKSB7XG4gICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCBmdW5jdGlvbiAoZSkge1xuICAgICAgY2MubWFjcm8uS0VZLmJhY2ssIGUua2V5Q29kZTtcbiAgICB9LCB0aGlzKTtcbiAgICB2YXIgZSA9IE1lbW9yeU1hbmFnZXIuZ2V0SW5zdGFuY2UoKSxcbiAgICAgIHQgPSBEYXRlLm5vdygpLFxuICAgICAgbyA9IG51bGwsXG4gICAgICBuID0gZnVuY3Rpb24gbigpIHtcbiAgICAgICAgdmFyIGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNjLnN5cy5pc01vYmlsZSkge1xuICAgICAgICAgIHZhciBuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICBvID0gbiAtIHQgPCAzMDAwICYmIG8gfHwgbWouc2RrLmdldERldmljZUluZm8oKTtcbiAgICAgICAgICB0ID0gbjtcbiAgICAgICAgICB2YXIgaSA9IG51bGwgPT0gbyA/IHZvaWQgMCA6IG8ucmVtYWluX21lbW9yeSxcbiAgICAgICAgICAgIHIgPSBpID8gTnVtYmVyKGkpIDogMTAwMDA7XG4gICAgICAgICAgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgIGUgPSByIDw9IDEwMDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUyAmJiAoZSA9IHIgPD0gNTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9O1xuICAgIGUuaXNMb3dNZW1vcnkgPSBuO1xuICAgIGNjLmdhbWUub24oXCJnYW1lX29uX2xvd19tZW1vcnlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZS5kaWRSZWNlaXZlTWVtb3J5V2FybmluZyhuKCkpO1xuICAgIH0sIHRoaXMpO1xuICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCBmdW5jdGlvbiAoKSB7XG4gICAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFVlRfTVNHX0tFWV9FVkVOVF9TSE9XKTtcbiAgICAgIFRpbWVTdGF0TWFuYWdlci5nZXRJbnN0YW5jZSgpLnJlc2V0U3RhcnRQb2ludCgpO1xuICAgIH0sIHRoaXMpO1xuICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCBmdW5jdGlvbiAoKSB7XG4gICAgICBtai5FdmVudE1hbmFnZXIuZW1pdChFVlRfTVNHX0tFWV9FVkVOVF9ISURFKTtcbiAgICAgIFRpbWVTdGF0TWFuYWdlci5nZXRJbnN0YW5jZSgpLnN5bmNUaW1lU3RhdHMoKTtcbiAgICAgIGUuZGlkUmVjZWl2ZU1lbW9yeVdhcm5pbmcodHJ1ZSk7XG4gICAgfSwgdGhpcyk7XG4gIH1cbiAgb25EZXN0cm95KCkge1xuICAgIHN1cGVyLm9uRGVzdHJveSAmJiBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICBUaW1lU3RhdE1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5kZXN0cm95KCk7XG4gICAgQ29udHJvbGxlck1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5kZXN0cm95KCk7XG4gICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XG4gICAgY2Muc3lzdGVtRXZlbnQudGFyZ2V0T2ZmKHRoaXMpO1xuICB9XG59Il19