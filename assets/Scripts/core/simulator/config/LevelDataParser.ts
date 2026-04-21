import LevelGenRule from './LevelGenRule';
export class LevelDataParser {
  static Translate(e) {
    if (e >= "0" && e <= "9") return parseInt(e, 10);
    var t = e.charCodeAt(0);
    if (e >= "A" && e <= "Z") return t - 55;
    if ("a" === e) return t - 61;
    throw new Error("Invalid cardId: " + e);
  }
  static Untranslate(e) {
    if (e >= 0 && e <= 9) return e.toString();
    if (e >= 10 && e <= 35) return String.fromCharCode(e + 55);
    if (36 === e) return "a";
    throw new Error("Invalid id to untranslate: " + e);
  }
  static convertStringToCardTileDatasNew(e) {
    return LevelGenRule.genLevel(e).LevelData;
  }
  static convertCardTileDatasToString(e) {
    return LevelGenRule.serializeTilesToInlineString(e);
  }
}