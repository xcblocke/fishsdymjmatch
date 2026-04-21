import Trait from '../../../Scripts/framework/trait/Trait';
import { TraitCallbackReturnType } from '../../../Scripts/framework/trait/TraitManager';
import { ConfigType } from '../../../Scripts/gamePlay/base/data/ConfigType';
import CardUtil from '../../../Scripts/gamePlay/user/CardUtil';
@mj.trait
@mj.class("CardConfigSwitchTrait")
export default class CardConfigSwitchTrait extends Trait {
  _configName = ConfigType.card_config.name;
  static traitKey = "CardConfigSwitch";
  static SPECIAL_RES_IDS = [34, 35, 36, 37, 38, 39, 40, 41, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54];
  static TARGET_RES_IDS = [27, 28, 29, 30, 31, 32, 33, 55, 56, 57, 58, 59, 60, 61, 62];
  onLoad() {
    super.onLoad.call(this);
    this._configName = this._traitData.configName || ConfigType.card_config.name;
  }
  onLoginM_enterGame(t, e) {
    CardUtil.setConfigName(this._configName);
    e();
  }
  onFlwCdSeries_isOldFlw(t, e) {
    if (this._configName === ConfigType.card_config2.name) {
      t.args[1].isFlower = false;
      e({
        isBreak: true,
        returnType: TraitCallbackReturnType.return
      });
    } else e();
  }
  onIptSetLv_reGenFaces(t, e) {
    var n, i, o, c, l;
    if (this._configName === ConfigType.card_config2.name) {
      var u = t.args[0];
      if (null === (l = null == u ? void 0 : u.levelData) || void 0 === l ? void 0 : l.isNewGame) {
        var p = t.ins,
          d = null == p ? void 0 : p.tileMapObject;
        if (d) {
          var y = new Set(CardConfigSwitchTrait.SPECIAL_RES_IDS),
            _ = CardConfigSwitchTrait.TARGET_RES_IDS,
            h = d.tileObjectMap(),
            g = new Map();
          try {
            for (var v = __values(CardConfigSwitchTrait.SPECIAL_RES_IDS), m = v.next(); !m.done; m = v.next()) {
              var w = m.value;
              g.set(w, _[Math.floor(Math.random() * _.length)]);
            }
          } catch (t) {
            n = {
              error: t
            };
          } finally {
            try {
              m && !m.done && (i = v.return) && i.call(v);
            } finally {
              if (n) throw n.error;
            }
          }
          try {
            for (var S = __values(h.entries()), C = S.next(); !C.done; C = S.next()) {
              var T = __read(C.value, 2),
                b = T[0],
                R = T[1];
              R && R.isValid && y.has(R.resId) && d.changeTileResId(b, g.get(R.resId));
            }
          } catch (t) {
            o = {
              error: t
            };
          } finally {
            try {
              C && !C.done && (c = S.return) && c.call(S);
            } finally {
              if (o) throw o.error;
            }
          }
          e();
        } else e();
      } else e();
    } else e();
  }
}