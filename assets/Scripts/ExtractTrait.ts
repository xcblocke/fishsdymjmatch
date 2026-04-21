import Trait from './framework/trait/Trait';
import UserModel from './gamePlay/user/UserModel';
@mj.class("ExtractTrait")
export default class ExtractTrait extends Trait {
  isSupportMode(e) {
    var t = this._traitData.gameType || ["Normal", "Travel", "DailyChallenge", "Tile2Normal"];
    return (t = Array.isArray(t) ? t : [t]).includes(e);
  }
  checkGameMode() {
    var e = this._traitData.travelActivitys || ["Yoga", "Flip", "Color"],
      t = UserModel.getInstance(),
      o = t.getCurrentGameType(),
      n = t.getGameDataByGameType(o);
    if (!this.isSupportMode(o)) return false;
    var i = n && n.getJourneyType ? n.getJourneyType() : null;
    if ("Travel" === o && e && Array.isArray(e) && e.length > 0) {
      if (null == i) {
        "l_cbadYo" == this._traitData.bundle && console.error("【关卡抽取】checkGameMode, gameType=Travel, gameData=" + !!n + ", journeyType=" + i);
        return false;
      }
      var r = this.journeyTypeToString(i);
      if (!r || !e.includes(r)) return false;
    }
    return true;
  }
  journeyTypeToString(e) {
    switch (e) {
      case 1:
        return "Yoga";
      case 2:
        return "Flip";
      case 3:
        return "Color";
      default:
        return "";
    }
  }
}