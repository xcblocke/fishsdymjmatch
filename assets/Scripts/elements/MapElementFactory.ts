import E01GiftBox from '../E01GiftBox';
import E01House from '../E01House';
import E01Normal from '../E01Normal';
import E01Snowman from '../E01Snowman';
import E01TopFinish from '../E01TopFinish';
import E02Bg1 from '../E02Bg1';
import E02Bg2 from '../E02Bg2';
import E02Bg3 from '../E02Bg3';
import E02Building1 from '../E02Building1';
import E02Building2 from '../E02Building2';
import E02Building3 from '../E02Building3';
import E02GiftBox1 from '../E02GiftBox1';
import E02GiftBox2 from '../E02GiftBox2';
import E02GiftBox3 from '../E02GiftBox3';
import E02LevelBox from '../E02LevelBox';
import E02Normal from '../E02Normal';
import E02TopFinish from '../E02TopFinish';
import E03GiftBox from '../E03GiftBox';
import E03Scarf from '../E03Scarf';
import E03Tree from '../E03Tree';
import E04GiftBox from '../E04GiftBox';
import E04Panda1 from '../E04Panda1';
import E04Panda2 from '../E04Panda2';
import E05Balloon from '../E05Balloon';
import E05GiftBox from '../E05GiftBox';
import E05Jeep from '../E05Jeep';
import E07Ball from '../E07Ball';
import E07Dog from '../E07Dog';
import E07GiftBox from '../E07GiftBox';
import E07Normal from './E07Normal';
import { MapElementId } from '../TravelMapInterface';
export class MapElementFactory {
  static _mapElementMap = new Map();
  static _hasInit = false;
  static getMapElement(e) {
    return this._mapElementMap.get(e);
  }
  static registerMapElement(e, t) {
    this._mapElementMap.set(e, t);
  }
  static clear() {
    this._mapElementMap.clear();
    this._hasInit = false;
  }
  static init() {
    if (!this._hasInit) {
      this._hasInit = true;
      this.registerMapElement(MapElementId.E01GiftBox1, E01GiftBox);
      this.registerMapElement(MapElementId.E01GiftBox2, E01GiftBox);
      this.registerMapElement(MapElementId.E01GiftBox3, E01GiftBox);
      this.registerMapElement(MapElementId.E01Snowman, E01Snowman);
      this.registerMapElement(MapElementId.E01House, E01House);
      this.registerMapElement(MapElementId.E01Normal, E01Normal);
      this.registerMapElement(MapElementId.E01TopFinish, E01TopFinish);
      this.registerMapElement(MapElementId.E01LevelGiftBox1, E01Normal);
      this.registerMapElement(MapElementId.E01LevelGiftBox2, E01Normal);
      this.registerMapElement(MapElementId.E01LevelGiftBox3, E01Normal);
      this.registerMapElement(MapElementId.E01LevelGiftBox4, E01Normal);
      this.registerMapElement(MapElementId.E02Normal, E02Normal);
      this.registerMapElement(MapElementId.E02Bg1, E02Bg1);
      this.registerMapElement(MapElementId.E02Bg2, E02Bg2);
      this.registerMapElement(MapElementId.E02Bg3, E02Bg3);
      this.registerMapElement(MapElementId.E02Building1, E02Building1);
      this.registerMapElement(MapElementId.E02Building2, E02Building2);
      this.registerMapElement(MapElementId.E02Building3, E02Building3);
      this.registerMapElement(MapElementId.E02GiftBox1, E02GiftBox1);
      this.registerMapElement(MapElementId.E02GiftBox2, E02GiftBox2);
      this.registerMapElement(MapElementId.E02GiftBox3, E02GiftBox3);
      this.registerMapElement(MapElementId.E02LevelGiftBox1, E02LevelBox);
      this.registerMapElement(MapElementId.E02LevelGiftBox2, E02LevelBox);
      this.registerMapElement(MapElementId.E02LevelGiftBox3, E02LevelBox);
      this.registerMapElement(MapElementId.E02LevelGiftBox4, E02LevelBox);
      this.registerMapElement(MapElementId.E02TopFinish, E02TopFinish);
      this.registerMapElement(MapElementId.E03GiftBox1, E03GiftBox);
      this.registerMapElement(MapElementId.E03GiftBox2, E03GiftBox);
      this.registerMapElement(MapElementId.E03GiftBox3, E03GiftBox);
      this.registerMapElement(MapElementId.E03Scarf, E03Scarf);
      this.registerMapElement(MapElementId.E03Tree, E03Tree);
      this.registerMapElement(MapElementId.E04GiftBox1, E04GiftBox);
      this.registerMapElement(MapElementId.E04GiftBox2, E04GiftBox);
      this.registerMapElement(MapElementId.E04GiftBox3, E04GiftBox);
      this.registerMapElement(MapElementId.E04Panda1, E04Panda1);
      this.registerMapElement(MapElementId.E04Panda2, E04Panda2);
      this.registerMapElement(MapElementId.E05GiftBox1, E05GiftBox);
      this.registerMapElement(MapElementId.E05GiftBox2, E05GiftBox);
      this.registerMapElement(MapElementId.E05GiftBox3, E05GiftBox);
      this.registerMapElement(MapElementId.E05Jeep, E05Jeep);
      this.registerMapElement(MapElementId.E05Balloon, E05Balloon);
      this.registerMapElement(MapElementId.E07Normal, E07Normal);
      this.registerMapElement(MapElementId.E07GiftBox1, E07GiftBox);
      this.registerMapElement(MapElementId.E07GiftBox2, E07GiftBox);
      this.registerMapElement(MapElementId.E07GiftBox3, E07GiftBox);
      this.registerMapElement(MapElementId.E07Dog, E07Dog);
      this.registerMapElement(MapElementId.E07Ball, E07Ball);
      this.registerMapElement(MapElementId.E07LevelGiftBox1, E07Normal);
      this.registerMapElement(MapElementId.E07LevelGiftBox2, E07Normal);
      this.registerMapElement(MapElementId.E07LevelGiftBox3, E07Normal);
      this.registerMapElement(MapElementId.E07LevelGiftBox4, E07Normal);
    }
  }
  static createCell(e) {
    var t = this.getMapElement(e);
    return t ? t.createCell(e.toString(), false) : null;
  }
  static getSize(e) {
    var t = this.getMapElement(e);
    return t ? t.size : new cc.Size(0, 0);
  }
}