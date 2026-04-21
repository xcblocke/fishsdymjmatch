import { BaseCoreObject } from '../../BaseCoreObject';
import { MjGameType } from '../../core/simulator/constant/GameTypeEnums';
import UserModel from '../../gamePlay/user/UserModel';
export class FullComboChecker extends BaseCoreObject {
  constructor(t) {
    super(t);
  }
  @mj.traitEvent("FullComboChk_getLim")
  getFullLimit() {
    return [10, 16];
  }
  @mj.traitEvent("FullComboChk_rate")
  getFullRate() {
    return [1, 0.5];
  }
  @mj.traitEvent("FullComboChk_getDCLim")
  getDailyChallengeFullLimit() {
    return [10, 16];
  }
  @mj.traitEvent("FullComboChk_getDCRate")
  getDailyChallengeFullRate() {
    return [1, 0.5];
  }
  @mj.traitEvent("FullComboChk_canFullCb")
  canFullCombo() {
    var e = this.context.getGameData();
    if (!UserModel.getInstance().isGuideFinished()) return false;
    var t = this.context.getTileMapObject().getCurTilesCnt();
    if (!e.getHasBrokenCombo()) {
      var o = void 0,
        n = void 0;
      if (this.context.gameType === MjGameType.DailyChallenge) {
        o = this.getDailyChallengeFullLimit();
        n = this.getDailyChallengeFullRate();
      } else {
        o = this.getFullLimit();
        n = this.getFullRate();
      }
      var i = Math.random();
      if (t === o[0]) return i < n[0];
      if (t === o[1]) return i < n[1];
    }
    return false;
  }
  getAllCardPair() {
    var e = this.context.getTileMapObject().getAllCardTiles();
    if (e.length < 2) return [];
    this.sortCardsByPriority(e);
    var t = this.getCardPair(e);
    this.sortPairs(t);
    return t;
  }
  getCardPair(e) {
    for (var t = [], o = this.context.getTileMapObject(), n = [...e]; n.length > 0;) {
      var i = n[0];
      n.splice(0, 1);
      for (var r = -1, a = -1, s = 0; s < n.length; s++) {
        var c = n[s];
        if (o.compare(i, c)) {
          var u = this.calculatePairScore(i, c);
          if (-1 === r || u > a) {
            r = s;
            a = u;
          }
        }
      }
      if (-1 !== r) {
        var p = [i, c = n[r]];
        t.push(p);
        n.splice(r, 1);
      }
    }
    return t;
  }
  calculatePairScore(e, t) {
    var o = this.context.getTileMapObject(),
      n = o.isCardLock(e),
      i = o.isCardLock(t),
      r = 0;
    0 === n && 0 === i && (r += 1000);
    r += (e.layer + t.layer) / 2 * 100;
    return (r += 10 * Math.min(e.layer, t.layer)) - (n + i);
  }
  sortPairs(e) {
    var t = this.context.getTileMapObject();
    e.sort(function (e, o) {
      var n = e[0],
        i = e[1],
        r = o[0],
        a = o[1],
        l = t.isCardLock(n),
        s = t.isCardLock(i),
        c = t.isCardLock(r),
        u = t.isCardLock(a),
        p = 0 === l && 0 === s;
      if (p !== (0 === c && 0 === u)) return p ? -1 : 1;
      var f = (n.layer + i.layer) / 2,
        d = (r.layer + a.layer) / 2;
      if (f !== d) return d - f;
      var h = Math.min(n.layer, i.layer),
        y = Math.min(r.layer, a.layer);
      if (h !== y) return y - h;
      var m = l + s,
        v = c + u;
      return m !== v ? m - v : Math.random() < 0.5 ? -1 : 1;
    });
  }
  sortCardsByPriority(e) {
    var t = this.context.getTileMapObject();
    e.sort(function (e, o) {
      var n = t.isCardLock(e),
        i = t.isCardLock(o),
        r = 0 === n;
      return r !== (0 === i) ? r ? -1 : 1 : e.layer !== o.layer ? o.layer - e.layer : n !== i ? n - i : Math.random() < 0.5 ? -1 : 1;
    });
  }
}