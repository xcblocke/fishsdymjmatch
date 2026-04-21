import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import UserModel from '../../../Scripts/gamePlay/user/UserModel';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
var h = {
  1: 2,
  2: 2,
  3: 5,
  4: 6,
  5: 3,
  6: 5,
  7: 3,
  8: 6,
  9: 6,
  10: 6,
  11: 3,
  12: 5,
  13: 4,
  14: 4,
  15: 3,
  16: 2,
  17: 5,
  18: 5,
  19: 2,
  20: 5,
  21: 6,
  22: 4,
  23: 3,
  24: 1,
  25: 1,
  27: 3,
  28: 3,
  29: 3,
  30: 5,
  31: 5,
  32: 5,
  33: 5,
  34: 3,
  35: 1,
  36: 2,
  37: 6,
  38: 3,
  39: 4,
  40: 4,
  41: 4,
  42: 3,
  43: 3,
  44: 5,
  45: 3,
  46: 3,
  47: 3,
  48: 6,
  49: 3,
  50: 2,
  51: 4,
  52: 3,
  53: 4,
  54: 1,
  55: 3,
  56: 3,
  57: 6,
  58: 5,
  59: 2,
  60: 3,
  61: 4,
  62: 5,
  63: 2,
  64: 4,
  65: 1,
  66: 3,
  67: 3,
  68: 6,
  69: 5,
  70: 4,
  71: 4,
  72: 2,
  73: 3,
  74: 3,
  75: 3,
  76: 5,
  77: 5,
  78: 3,
  79: 3,
  80: 3,
  81: 5
};
@mj.trait
@mj.class("HardLevelThemeSwitchTrait")
export default class HardLevelThemeSwitchTrait extends Trait {
  static traitKey = "HardLevelThemeSwitch";
  onLoad() {
    super.onLoad.call(this);
    this.localData.Normal || (this.localData.Normal = {
      themeSequence: [],
      lastThemeId: null,
      lastLevelId: null
    });
    this.localData.Normal.themeSequence && 0 !== this.localData.Normal.themeSequence.length || this.resetSequence();
  }
  initSequence() {
    return Object.keys(h).map(Number).sort(function (e, t) {
      return e - t;
    });
  }
  resetSequence() {
    this.localData.Normal.themeSequence = this.initSequence();
    this.localData.Normal = this.localData.Normal;
  }
  isNormalMode() {
    return UserModel.getInstance().getCurrentGameType() === MjGameType.Normal;
  }
  randomPick(e) {
    return e[Math.floor(Math.random() * e.length)];
  }
  drawTheme(e) {
    0 === this.localData.Normal.themeSequence.length && this.resetSequence();
    var t = e.getFlowerSeries(),
      r = new Map();
    t.forEach(function (e) {
      r.set(e.id, e);
    });
    var a = this.localData.Normal.themeSequence.filter(function (t) {
      var a = r.get(t);
      return !!a && (!!a.isLocal || !!e.isBundleReady && e.isBundleReady(a.bundle));
    });
    if (0 === a.length) return -1;
    var o = this.localData.Normal.lastLevelId,
      n = this.localData.Normal.lastThemeId;
    if (null !== o && null !== n) {
      var i = ExtractTool.getInstance().isHardLevel(o),
        l = h[n],
        c = a.filter(function (e) {
          var t = h[e];
          return i ? t !== l : t === l;
        });
      c.length > 0 && (a = c);
    }
    var s = this.randomPick(a),
      f = this.localData.Normal.themeSequence.indexOf(s);
    f > -1 && this.localData.Normal.themeSequence.splice(f, 1);
    this.localData.Normal.themeSequence = this.localData.Normal.themeSequence;
    this.localData.Normal.lastThemeId = s;
    this.localData.Normal = this.localData.Normal;
    return s;
  }
  onFlowerCS_drawFlower(e, t) {
    if (this.isNormalMode()) {
      var r = UserModel.getInstance().getGameDataByGameType(MjGameType.Normal),
        a = (null == r ? void 0 : r.getCurrentLevelId()) || 0;
      this.localData.Normal.lastLevelId = a;
      this.localData.Normal = this.localData.Normal;
      var o = e.ins,
        n = o.getCurrentModeData();
      if (n && n.currentSeries) {
        var i = n.currentSeries,
          u = this.drawTheme(o);
        if (-1 !== u) {
          if (u !== i.id) {
            var h = o.getFlowerSeries().find(function (e) {
              return e.id === u;
            });
            if (h) {
              o.saveModeData({
                currentSeries: h
              });
              o.setLastSeriesId(u);
              t({
                returnType: TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: h
              });
            } else t();
          } else t();
        } else t();
      } else t();
    } else t();
  }
}