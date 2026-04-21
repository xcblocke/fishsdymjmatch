export class DeadSelectUtils {
  static getAllMatchTiles(t) {
    for (var e = [], r = 0; r < t.length; r++) for (var n = r + 1; n < t.length; n++) e.push([t[r], t[n]]);
    return e;
  }
}