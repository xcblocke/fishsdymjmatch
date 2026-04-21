import { BaseCoreObject } from '../../BaseCoreObject';
import GameConstant from '../../core/simulator/constant/GameConstant';
export class LayoutSelector extends BaseCoreObject {
  static PADDING = 30;
  static MAX_SCALE = 2;
  constructor(t) {
    super(t);
  }
  @mj.traitEvent("LayoutSel_getMaxScale")
  getMaxScale() {
    return LayoutSelector.MAX_SCALE;
  }
  @mj.traitEvent("LayoutSel_getPadLeft")
  getPaddingLeft() {
    return LayoutSelector.PADDING;
  }
  @mj.traitEvent("LayoutSel_getPadRight")
  getPaddingRight() {
    return LayoutSelector.PADDING;
  }
  @mj.traitEvent("LayoutSel_getPadTop")
  getPaddingTop() {
    return LayoutSelector.PADDING;
  }
  @mj.traitEvent("LayoutSel_getPadBottom")
  getPaddingBottom() {
    return LayoutSelector.PADDING;
  }
  chooseLayout(e) {
    var t = this.context.getCardLayoutConfig(),
      o = this.context.getTileMapObject(),
      n = o.mapRow / 2 + 1,
      i = 0.5 * o.mapRow + 1,
      r = o.mapRow % 2 == 1,
      a = o.layerOffsetY,
      l = o.mapCol / 2 + 1,
      s = 0.5 * o.mapCol + 1,
      c = o.mapCol % 2 == 1,
      u = o.layerOffsetX,
      p = t.cardSize[0] * s + t.cardSpace[0] * (l > 0 ? l - 1 : 0) + t.cardSizeRight * u;
    c && (p += t.cardSpace[0]);
    var f = t.cardSize[1] * i + t.cardSpace[1] * (n > 0 ? n - 1 : 0) + t.cardSizeBottom * a;
    r && (f += t.cardSpace[1]);
    var d = (e.contentSize.width - this.getPaddingLeft() - this.getPaddingRight()) / p,
      h = (e.contentSize.height - this.getPaddingTop() - this.getPaddingBottom()) / f;
    return {
      config: t,
      scale: Math.min(d, h, this.getMaxScale())
    };
  }
  getPaddingForClassic() {
    return {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10
    };
  }
  chooseLayoutForClassic(e) {
    var t = this.context.getCardLayoutConfig(),
      o = this.getPaddingForClassic(),
      n = 2 * (e.maxCol || GameConstant.MaxTileCountX) - 2,
      i = 2 * (e.maxRow || GameConstant.MaxTileCountY) - 2,
      r = n / 2 + 1,
      a = 0.5 * n + 1,
      s = n % 2 == 1,
      c = i / 2 + 1,
      u = 0.5 * i + 1,
      p = i % 2 == 1,
      f = t.cardSize[0] * a + t.cardSpace[0] * (r > 0 ? r - 1 : 0) + 6 * t.cardSizeRight;
    s && (f += t.cardSpace[0]);
    var d = t.cardSize[1] * u + t.cardSpace[1] * (c > 0 ? c - 1 : 0) + 10 * t.cardSizeBottom;
    p && (d += t.cardSpace[1]);
    var h = (e.contentSize.width - o.paddingLeft - o.paddingRight) / f,
      y = (e.contentSize.height - o.paddingTop - o.paddingBottom) / d;
    return {
      config: t,
      scale: Math.min(h, y, this.getMaxScale())
    };
  }
}