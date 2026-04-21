import ExtractTool from '../../../Scripts/core/extractQuestion/ExtractTool';
import { LevelUtil } from '../../../Scripts/core/simulator/config/LevelUtil';
import { MjGameType } from '../../../Scripts/core/simulator/constant/GameTypeEnums';
import { EBlockStatus } from '../../../Scripts/tracker/TrackerInterface';
import TrackerUtils from '../../../Scripts/tracker/TrackerUtils';
import Trait from '../../../Scripts/framework/trait/Trait';
@mj.trait
@mj.class("DotChange251217Trait")
export default class DotChange251217Trait extends Trait {
  static traitKey = "DotChange251217";
  isSupportMode(t) {
    return [MjGameType.Normal, MjGameType.Travel, MjGameType.DailyChallenge, MjGameType.Classic].includes(t);
  }
  onDGameStart_addComplex(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  onDGameStart_adjust(t, e) {
    var r = t.ins,
      a = __read(t.args, 2),
      o = a[0],
      i = a[1];
    this.dotGameStartAdd(r, o, i);
    e();
  }
  dotGameStartAdd(t, e, r) {
    if (this.isSupportMode(r.gameType)) {
      e.initial_board_structure = r.getGameData().getOriginalLevelDataWithCardId();
      var a = ExtractTool.getInstance().getExtractInfo(r.getGameData().gameType);
      a && a.ok && (e.predict_rate = a.rateSuccess);
    }
  }
  onDGameEnd_adjust(t, e) {
    var r = t.ins,
      a = __read(t.args, 3),
      o = a[0],
      i = a[1],
      c = a[2];
    this.dotGameEndAdd(r, o, i, c);
    e();
  }
  dotGameEndAdd(t, e, r, a) {
    if (this.isSupportMode(r.gameType)) {
      a.win || (e.end_reason = "setting" === a.from ? 1 : 0);
      var o = r.getGameData().getOriginalLevelData(),
        i = r.getGameData().getOriWithSpecialCards();
      e.initial_board_id = r.getGameData().getLevelIndex();
      e.initial_board_string = i || o;
      e.initial_board_structure = r.getGameData().getOriginalLevelDataWithCardId();
      var n = ExtractTool.getInstance().getExtractInfo(r.getGameData().gameType);
      n && n.ok && (e.predict_rate = n.rateSuccess);
    }
  }
  onTrackerUtils_addComplex(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
  onTrackerUtils_blockStatus(t, e) {
    var r = this.getBlockStatusPositionList(t.args[0]);
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: r
    });
  }
  getBlockStatusPositionList(t) {
    var e,
      r,
      a = t.tileObjectMap(),
      o = [];
    try {
      for (var i = __values(a), s = i.next(); !s.done; s = i.next()) {
        var u = __read(s.value, 2),
          l = (u[0], u[1]);
        if (l.isValid && 0 === l.isCardLock()) {
          var d = __read(TrackerUtils.object2position(l), 3),
            y = d[0],
            g = d[1],
            m = d[2];
          o.push({
            suit: l.cardId,
            status: EBlockStatus.Movable,
            pos: TrackerUtils.position2id([y, g, m])
          });
        }
      }
    } catch (t) {
      e = {
        error: t
      };
    } finally {
      try {
        s && !s.done && (r = i.return) && r.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return o;
  }
  onTrackerUtils_pairCoord(t, e) {
    var r = __read(t.args, 3),
      a = r[0],
      o = r[1],
      i = r[2],
      c = this.getPairCoordinate(a, o, i);
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true,
      returnVal: c
    });
  }
  getPairCoordinate(t, e, r) {
    var a = t.getTileObject(e),
      o = t.getTileObject(r),
      i = __read(TrackerUtils.object2position(a), 3),
      c = i[0],
      s = i[1],
      l = i[2],
      p = __read(TrackerUtils.object2position(o), 3);
    return [c, s, l, p[0], p[1], p[2]].map(function (t) {
      return LevelUtil.translatePosToChar(t);
    }).join("");
  }
  onDGameLog_dot(t, e) {
    e({
      returnType: TraitCallbackReturnType.return,
      isBreak: true
    });
  }
}