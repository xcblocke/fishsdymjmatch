import ControllerManager from '../../../framework/manager/ControllerManager';
import MemoryManager from '../../../framework/manager/MemoryManager';
import { EVT_MSG_KEY_EVENT_SHOW, EVT_MSG_KEY_EVENT_HIDE } from '../../../Config';
import LoginModel from './LoginModel';
import ResManager, { resManager } from '../../../framework/manager/ResManager';
import TimeStatManager from '../../base/TimeStat/TimeStatManager';
cc.sys.isBrowser;
@mj.class
export default class GameManager extends cc.Component {
  static isInit = false;
  onLoad() {
    if (GameManager.isInit) {
      this.openGlobalView();
      this.enterMainGame();
    } else this.init();
    this.initTimeStatSystem();
  }
  initTimeStatSystem() {
    TimeStatManager.getInstance().init(this);
  }
  init() {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (e) {
        switch (e.label) {
          case 0:
            LoginModel.getInstance().startSamplingFPS();
            GameManager.isInit = true;
            this.registerCustomEvent();
            return cc.sys.isBrowser, [3, 2];
          case 1:
            e.sent();
            return [3, 4];
          case 2:
            return [4, resManager.loadBundle(ResManager.baseBundleName)];
          case 3:
            e.sent();
            e.label = 4;
          case 4:
            cc.assetManager.loadBundle("mainRes", (err: Error, bundle: cc.AssetManager.Bundle) => {
              bundle.loadDir("config/data", cc.JsonAsset, (error, assets: cc.JsonAsset[]) => {
                console.log("加载配置完成");
                this.openGlobalView();
                this.login();
              });
            });

            return [2];
        }
      });
    });
  }
  tryloadCachePlanData() {
    LoginModel.getInstance().isUpdateRestart() || LoginModel.getInstance().loadCachePlanData();
  }
  enterMainGame() {
    ControllerManager.getInstance().pushViewByController("MainGameController", {
      isReplace: true
    });
  }
  @mj.traitEvent("GameMgr_login")
  login() {
    ControllerManager.getInstance().pushViewByController("LoginController");
  }
  openGlobalView() {
    ControllerManager.getInstance().pushViewByController("TipsController", {
      noBlock: true,
      isGlobal: true,
      bgStyle: null,
      isShowAction: false
    });
    ControllerManager.getInstance().pushViewByController("Tile2TipsController", {
      noBlock: true,
      isGlobal: true,
      bgStyle: null,
      isShowAction: false
    });
    ControllerManager.getInstance().pushViewByController("TopTouchController", {
      noBlock: true,
      isGlobal: true,
      bgStyle: null,
      isShowAction: false
    });
  }
  registerCustomEvent() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (e) {
      cc.macro.KEY.back, e.keyCode;
    }, this);
    var e = MemoryManager.getInstance(),
      t = Date.now(),
      o = null,
      n = function n() {
        var e = false;
        if (cc.sys.isMobile) {
          var n = Date.now();
          o = n - t < 3000 && o || mj.sdk.getDeviceInfo();
          t = n;
          var i = null == o ? void 0 : o.remain_memory,
            r = i ? Number(i) : 10000;
          if (cc.sys.os === cc.sys.OS_ANDROID) {
            e = r <= 1000;
          } else {
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
      mj.EventManager.emit(EVT_MSG_KEY_EVENT_SHOW);
      TimeStatManager.getInstance().resetStartPoint();
    }, this);
    cc.game.on(cc.game.EVENT_HIDE, function () {
      mj.EventManager.emit(EVT_MSG_KEY_EVENT_HIDE);
      TimeStatManager.getInstance().syncTimeStats();
      e.didReceiveMemoryWarning(true);
    }, this);
  }
  onDestroy() {
    super.onDestroy && super.onDestroy.call(this);
    TimeStatManager.getInstance().destroy();
    ControllerManager.getInstance().destroy();
    cc.game.targetOff(this);
    cc.systemEvent.targetOff(this);
  }
}