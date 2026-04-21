import { ECoordSelectionType, ECharSelectionType } from './CharacterGenerator';
import { EDifficultyType } from './IClassicExtractTypes';
var a = new Map([[EDifficultyType.Simple, {
  coordSelectionType: ECoordSelectionType.SymmetricShuffle,
  charSelectionType: ECharSelectionType.Random
}], [EDifficultyType.Medium, {
  coordSelectionType: ECoordSelectionType.LongDistance,
  charSelectionType: ECharSelectionType.PredCoord
}], [EDifficultyType.Difficult, {
  coordSelectionType: ECoordSelectionType.AntiIntuitive,
  charSelectionType: ECharSelectionType.PredTrigger
}], [EDifficultyType.Reward, {
  coordSelectionType: ECoordSelectionType.Symmetric,
  charSelectionType: ECharSelectionType.Random
}]]);
@mj.class("DyeingConfig")
export class DyeingConfig {
  static getInstance() {
    DyeingConfig._instance || (DyeingConfig._instance = new DyeingConfig());
    return DyeingConfig._instance;
  }
  getDyeingConfig(e) {
    return a.get(e) || a.get(EDifficultyType.Medium);
  }
}