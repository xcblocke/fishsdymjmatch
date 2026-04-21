import I18NComponent from '../../component/I18NComponent';
import { ConfigType } from '../../gamePlay/base/data/ConfigType';
import LoginModel from '../../gamePlay/login/model/LoginModel';
import { formatLanguageCodeToString } from '../utils/CommonUtils';
import { DataReader } from './DataReader';
export default class I18NStrings {
  static stringsCfg = [];
  static defaultLanguage = "en-US";
  static get(e, t = e) {
    if (!e) return t || "";
    var o = LoginModel.getInstance().language,
      n = formatLanguageCodeToString(o);
    -1 == ConfigType.tableList.indexOf("i18n_config_" + n) && (n = "EN_US");
    var s = DataReader.getByKey(ConfigType.i18n_config, e, n);
    return s ? s.Value : t || e;
  }
  static getCN(e, t = e) {
    if (!e) return t || "";
    var o = DataReader.getByKey(ConfigType.i18n_config, e, "ZH_CN");
    return o ? o.Value : t || e;
  }
  static setText(e, t, o = "", i = []) {
    if (!cc.isValid(e)) return false;
    var r = e.getComponent(I18NComponent);
    if (r) {
      r.setTranslateId(o, t, i);
      return true;
    }
    var a = e.getComponent(cc.Label),
      l = e.getComponent(cc.RichText);
    if (a) {
      a.string = t;
      return true;
    }
    if (l) {
      l.string = t;
      return true;
    }
    return false;
  }
  static stringFormat(e) {
    for (var t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
    return e.replace(/{(\d+)}/g, function (e, o) {
      var n = parseInt(o);
      return "undefined" != typeof t[n] ? t[n] : e;
    });
  }
}