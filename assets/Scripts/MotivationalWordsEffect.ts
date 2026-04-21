import { EAudioID } from './core/simulator/constant/GameTypeEnums';
import { BehaviorsMapping } from './mapping/BehaviorsMapping';
import BaseEffect from './BaseEffect';
export class MotivationalWordsEffect extends BaseEffect {
  _name = BehaviorsMapping.MotivationalWords;
  _data = null;
  static soundNameArr = [EAudioID.Good, EAudioID.Great, EAudioID.Excellent, EAudioID.Amazing, EAudioID.Unbelievable];
  static aniCfg = {
    0: "in_good",
    1: "in_great",
    2: "in_excellent",
    3: "in_amazing",
    4: "in_unbelievable"
  };
  get data() {
    return this._data;
  }
  constructor(t) {
    super(t);
    this._data = t;
  }
}