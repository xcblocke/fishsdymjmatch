export default class ScreenUtils {
  static getPhysicalWidthInInches() {
    return this.getPhysicalSize().width;
  }
  static getPhysicalHeightInInches() {
    return this.getPhysicalSize().height;
  }
  static getPhysicalDiagonalInInches() {
    return this.getPhysicalSize().diagonal;
  }
  static getPhysicalSize() {
    var e = cc.view.getFrameSize(),
      t = e.width,
      o = e.height,
      n = this.getDPI(),
      i = t / n,
      r = o / n,
      a = Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2));
    return {
      width: parseFloat(i.toFixed(2)),
      height: parseFloat(r.toFixed(2)),
      diagonal: parseFloat(a.toFixed(2)),
      dpi: n
    };
  }
  static getDPI() {
    return 96;
  }
}