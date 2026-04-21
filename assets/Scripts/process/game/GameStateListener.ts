export default class GameStateListener {
  @mj.traitEvent("GsListener_onNewGame")
  static onNewGame() {}
  @mj.traitEvent("GsListener_onReplayGame")
  static onReplayGame() {}
  @mj.traitEvent("GsListener_onSurvivalGame")
  static onSurvivalGame() {}
  @mj.traitEvent("GsListener_onGameEnd")
  static onGameEnd() {}
}