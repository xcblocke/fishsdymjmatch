import { SingletonFactory } from '../../framework/utils/SingletonFactory';
import AdModel from '../base/ad/AdModel';
import LoginModel from '../login/model/LoginModel';
import UserModel from '../user/UserModel';
import { EUserPropertyType } from './AnalyzeTypes';
import ScreenUtils from './ScreenUtils';
export default class UserPropteryManager {
  static getInstance() {
    return SingletonFactory.getInstance(this);
  }
  report(e, t) {
    var _o = {};
    _o[e] = t;
    mj.sdk.userDataUpload(_o);
  }
  sendScreenPhysicalSize() {}
  startupReport() {
    var e,
      t = LoginModel.getInstance(),
      o = {};
    o[EUserPropertyType.GameVersion] = t.appVersion;
    o[EUserPropertyType.ResVersion] = t.version;
    o[EUserPropertyType.Version] = t.version;
    o[EUserPropertyType.Language] = t.language;
    var n = t.userWayArr(),
      c = [];
    for (var u in n) u.length > 0 && n[u].length > 0 && c.push(u + ":" + n[u].join("|"));
    o[EUserPropertyType.CurrentWayNum] = t.curWayNum();
    o[EUserPropertyType.UserWayArr] = c;
    o[EUserPropertyType.gameNumAll] = UserModel.getInstance().getTotalGames();
    o[EUserPropertyType.exptPeriod] = t.exptPeriod();
    o[EUserPropertyType.physicsWidth] = ScreenUtils.getPhysicalWidthInInches();
    o[EUserPropertyType.physicsHeight] = ScreenUtils.getPhysicalHeightInInches();
    o[EUserPropertyType.UserAbtestResult] = null === (e = null == t ? void 0 : t.serverPlanData) || void 0 === e ? void 0 : e.hits;
    AdModel.getInstance().startupReport(o);
    mj.sdk.userDataUpload(o);
  }
}