import { ETileNodeShowType } from './simulator/constant/TileTypeEnum';
import { TileNodeObject } from './TileNodeObject';
export class BombCardTileNode extends TileNodeObject {
  _initType = ETileNodeShowType.Bomb;
  @mj.traitEvent("BombCardNode_crtImgCard")
  createImgCard(t) {
    return super.createImgCard.call(this, t);
  }
}