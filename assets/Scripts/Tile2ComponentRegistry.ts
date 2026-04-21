import { ETileComponent } from './simulator/constant/TileTypeEnum';
import { RollCardComponent } from './RollCardComponent';
import { Tile2BombCardComponent } from './Tile2BombCardComponent';
import { Tile2ColorCardComponent } from './Tile2ColorCardComponent';
import { Tile2DaxiaoCardComponent } from './Tile2DaxiaoCardComponent';
import { Tile2DuoxiaoCardComponent } from './Tile2DuoxiaoCardComponent';
import { Tile2DarkenComponent } from './Tile2DarkenComponent';
import { Tile2HintComponent } from './Tile2HintComponent';
import { Tile2RankCardComponent } from './Tile2RankCardComponent';
import { Tile2SlotBarAniComponent } from './Tile2SlotBarAniComponent';
import { Tile2YogaCardComponent } from './Tile2YogaCardComponent';
import { TileNodeComponent } from './TileNodeComponent';
export class Tile2ComponentRegistry {
  static _registered = false;
  static registerAll() {
    if (!Tile2ComponentRegistry._registered) {
      Tile2ComponentRegistry._registered = true;
      TileNodeComponent.register(ETileComponent.Tile2ComponentRollCard, function () {
        return new RollCardComponent();
      });
      TileNodeComponent.register(ETileComponent.Tile2ComponentSlotBarAni, function () {
        return new Tile2SlotBarAniComponent();
      });
      TileNodeComponent.register(ETileComponent.Tile2ComponentHint, function () {
        return new Tile2HintComponent();
      });
      TileNodeComponent.register(ETileComponent.Tile2ComponentLockDarken, function () {
        return new Tile2DarkenComponent();
      });
      TileNodeComponent.register(ETileComponent.Tile2ComponentBomb, function () {
        return new Tile2BombCardComponent();
      });
      TileNodeComponent.register(ETileComponent.Tile2ComponentColor, function () {
        return new Tile2ColorCardComponent();
      });
      TileNodeComponent.register(ETileComponent.Tile2ComponentRank, function () {
        return new Tile2RankCardComponent();
      });
      TileNodeComponent.register(ETileComponent.Tile2ComponentYoga, function () {
        return new Tile2YogaCardComponent();
      });
      TileNodeComponent.register(ETileComponent.Tile2ComponentDaxiao, function () {
        return new Tile2DaxiaoCardComponent();
      });
      TileNodeComponent.register(ETileComponent.Tile2ComponentDuoxiao, function () {
        return new Tile2DuoxiaoCardComponent();
      });
    }
  }
}