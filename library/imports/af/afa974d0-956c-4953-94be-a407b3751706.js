"use strict";
cc._RF.push(module, 'afa97TQlWxJU5S+pAezdRcG', 'ClassicExtractTool');
// Scripts/ClassicExtractTool.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassicExtractTool = void 0;
var IClassicExtractTypes_1 = require("./IClassicExtractTypes");
var ClassicLevelRepository_1 = require("./core/extractClassic/ClassicLevelRepository");
var SwimlaneStrategy_1 = require("./SwimlaneStrategy");
var ClassicExtractTool = /** @class */ (function () {
    function ClassicExtractTool() {
    }
    ClassicExtractTool_1 = ClassicExtractTool;
    ClassicExtractTool.getInstance = function () {
        ClassicExtractTool_1._instance || (ClassicExtractTool_1._instance = new ClassicExtractTool_1());
        return ClassicExtractTool_1._instance;
    };
    ClassicExtractTool.prototype.init = function () {
        return ClassicLevelRepository_1.ClassicLevelRepository.getInstance().init();
    };
    ClassicExtractTool.prototype.extractInitial = function () {
        var e = this;
        return this.init().then(function () {
            var t = ClassicLevelRepository_1.ClassicLevelRepository.getInstance(), o = t.getRandomInitialLevel();
            o || (o = t.getAllInitialLevels()[0]);
            var n = e._buildResult(o, IClassicExtractTypes_1.EDifficultyType.Simple);
            n.libName = t.getLibName(t.getInitialPath());
            return n;
        });
    };
    ClassicExtractTool.prototype.extractSwimlane = function (e) {
        var t = e.getScore(), o = e.getMaxScore(), n = e.getNextBatchId(), i = e.getSwimlaneTimeSeconds(), r = e.getSwimlaneRotationCount(), l = SwimlaneStrategy_1.SwimlaneStrategy.getInstance().selectDifficultyType(t, o, i, n, r), s = l.difficultyType;
        l.rotationUsed && e.incrementSwimlaneRotationCount();
        return this.extractByDifficulty(s);
    };
    ClassicExtractTool.prototype.extractByDifficulty = function (e) {
        var t = this;
        return this.init().then(function () {
            var o = ClassicLevelRepository_1.ClassicLevelRepository.getInstance(), n = t._getLevelByDifficulty(e), i = t._buildResult(n, e);
            i.libName = o.getLibName(o.getLoopPath());
            return i;
        });
    };
    ClassicExtractTool.prototype._getLevelByDifficulty = function (e) {
        var t = ClassicLevelRepository_1.ClassicLevelRepository.getInstance(), o = IClassicExtractTypes_1.DIFFICULTY_LAYER_MAP[e], n = t.getRandomLoopLevelByLayers(o);
        n || (n = t.getAllLoopLevels()[0]);
        return n;
    };
    ClassicExtractTool.prototype._buildResult = function (e, t) {
        return {
            levelStr: e.Content,
            index: e.Index,
            difficultyType: t,
            layer: e.Layer
        };
    };
    var ClassicExtractTool_1;
    ClassicExtractTool = ClassicExtractTool_1 = __decorate([
        mj.class("ClassicExtractTool")
    ], ClassicExtractTool);
    return ClassicExtractTool;
}());
exports.ClassicExtractTool = ClassicExtractTool;

cc._RF.pop();