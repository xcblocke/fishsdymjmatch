import Model from './framework/data/Model';
@mj.class("DeathAnalyzeModel")
export default class DeathAnalyzeModel extends Model {
  saveDeath(e, t, o) {
    this.localData[e] = [t, o.map(function (e) {
      return e.tiles;
    })];
  }
  getDeath(e, t) {
    try {
      var o = this.localData[e];
      return null != o && void 0 !== o && "" !== o && Array.isArray(o) ? 2 !== o.length ? null : o[0] !== t ? null : {
        levelOriginalData: o[0],
        badMahjongGroups: o[1].map(function (e) {
          e.forEach(function (e) {
            e.id = e.gridPosX + "-" + e.gridPosY + "-" + e.layer;
          });
          return {
            key: e.map(function (e) {
              return e.id;
            }).sort().join(","),
            colors: new Set(e.map(function (e) {
              return e.cardId;
            })),
            tileIds: new Set(e.map(function (e) {
              return e.id;
            })),
            tiles: e
          };
        })
      } : null;
    } catch (e) {
      return null;
    }
  }
}