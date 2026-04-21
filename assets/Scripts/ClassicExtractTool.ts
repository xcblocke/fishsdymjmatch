import { EDifficultyType, DIFFICULTY_LAYER_MAP } from './IClassicExtractTypes';
import { ClassicLevelRepository } from './core/extractClassic/ClassicLevelRepository';
import { SwimlaneStrategy } from './SwimlaneStrategy';
@mj.class("ClassicExtractTool")
export class ClassicExtractTool {
  static getInstance() {
    ClassicExtractTool._instance || (ClassicExtractTool._instance = new ClassicExtractTool());
    return ClassicExtractTool._instance;
  }
  init() {
    return ClassicLevelRepository.getInstance().init();
  }
  extractInitial() {
    var e = this;
    return this.init().then(function () {
      var t = ClassicLevelRepository.getInstance(),
        o = t.getRandomInitialLevel();
      o || (o = t.getAllInitialLevels()[0]);
      var n = e._buildResult(o, EDifficultyType.Simple);
      n.libName = t.getLibName(t.getInitialPath());
      return n;
    });
  }
  extractSwimlane(e) {
    var t = e.getScore(),
      o = e.getMaxScore(),
      n = e.getNextBatchId(),
      i = e.getSwimlaneTimeSeconds(),
      r = e.getSwimlaneRotationCount(),
      l = SwimlaneStrategy.getInstance().selectDifficultyType(t, o, i, n, r),
      s = l.difficultyType;
    l.rotationUsed && e.incrementSwimlaneRotationCount();
    return this.extractByDifficulty(s);
  }
  extractByDifficulty(e) {
    var t = this;
    return this.init().then(function () {
      var o = ClassicLevelRepository.getInstance(),
        n = t._getLevelByDifficulty(e),
        i = t._buildResult(n, e);
      i.libName = o.getLibName(o.getLoopPath());
      return i;
    });
  }
  _getLevelByDifficulty(e) {
    var t = ClassicLevelRepository.getInstance(),
      o = DIFFICULTY_LAYER_MAP[e],
      n = t.getRandomLoopLevelByLayers(o);
    n || (n = t.getAllLoopLevels()[0]);
    return n;
  }
  _buildResult(e, t) {
    return {
      levelStr: e.Content,
      index: e.Index,
      difficultyType: t,
      layer: e.Layer
    };
  }
}