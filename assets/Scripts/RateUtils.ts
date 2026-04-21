export default class RateUtils {
  static calculateDenominator(e) {
    var t = Math.min(10, e);
    return 600 * e + 20 * t * t - 420 * t;
  }
  static calculateRate(t, o, n) {
    if (o <= 0) return 0;
    var i = RateUtils.calculateDenominator(o);
    if (i <= 0) return 0;
    var r = 100 * Math.sqrt(t / i);
    null != n && (r *= n);
    return Math.min(r, 99.99);
  }
  static getAdjustedRate(e, t, o) {
    return t ? e : o ? 0.7 * e : 0.9 * e;
  }
  static calculateRateIncrease(e, t) {
    return t <= 0 ? 0 : e / t - 1;
  }
}