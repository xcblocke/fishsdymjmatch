import ExtractTool from './core/extractQuestion/ExtractTool';
import { MjGameType } from './core/simulator/constant/GameTypeEnums';
import ExtractChain from './core/extractTile2/ExtractChain';
import Tile2CapabilityExtractRegistry from './Tile2CapabilityExtractRegistry';
import Tile2DynamicStrategy from './Tile2DynamicStrategy';
import Tile2FixedStrategy from './Tile2FixedStrategy';
import Tile2HardStrategy from './Tile2HardStrategy';
import Tile2StaticStrategy from './Tile2StaticStrategy';
import Tile2StaticLevelTypeStrategy from './Tile2StaticLevelTypeStrategy';
import Tile2FixedRandomStrategy from './Tile2FixedRandomStrategy';
@mj.class("Tile2ExtractManager")
export default class Tile2ExtractManager {
  _isInit = false;
  _chain = new ExtractChain();
  static _instance = null;
  get chain() {
    return this._chain;
  }
  constructor() {
    this._chain.register(new Tile2FixedStrategy());
    this._chain.register(new Tile2FixedRandomStrategy());
    this._chain.register(new Tile2HardStrategy());
    this._chain.register(new Tile2DynamicStrategy());
    this._chain.register(new Tile2StaticLevelTypeStrategy());
    this._chain.register(new Tile2StaticStrategy());
  }
  static getInstance() {
    this._instance || (this._instance = new Tile2ExtractManager());
    return this._instance;
  }
  initData() {
    var e = this;
    if (this._isInit) return Promise.resolve();
    var t = function t() {
      return e._chain.initAll().then(function () {
        e._chain.resort();
        e._isInit = true;
      });
    };
    return Tile2CapabilityExtractRegistry.isEnabled() ? ExtractTool.getInstance().initData(MjGameType.Tile2Normal).then(function () {
      return t();
    }) : t();
  }
  @mj.traitEvent("T2ExtMgr_getCont")
  getContentData(e) {
    return this._chain.execute({
      gameData: e
    }).then(function (e) {
      return e;
    });
  }
}