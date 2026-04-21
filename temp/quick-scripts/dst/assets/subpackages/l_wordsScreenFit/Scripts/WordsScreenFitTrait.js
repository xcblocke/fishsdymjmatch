
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_wordsScreenFit/Scripts/WordsScreenFitTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f0c532rFpJ/bmfr5S2/HXo', 'WordsScreenFitTrait');
// subpackages/l_wordsScreenFit/Scripts/WordsScreenFitTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var EffectLayerEnum_1 = require("../../../Scripts/constant/EffectLayerEnum");
var WordsScreenFitTrait = /** @class */ (function (_super) {
    __extends(WordsScreenFitTrait, _super);
    function WordsScreenFitTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WordsScreenFitTrait_1 = WordsScreenFitTrait;
    WordsScreenFitTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WordsScreenFitTrait.prototype.isLv4Enabled = function () {
        var t, r = mj.getClassByName("MotivationalWordsLv4Trait");
        return true === (null === (t = null == r ? void 0 : r.getInstance()) || void 0 === t ? void 0 : t.eventEnabled);
    };
    WordsScreenFitTrait.prototype.onMotivWordsBhv_getSize = function (t, r) {
        try {
            var o = t.args[0];
            if (this.isLv4Enabled()) {
                var i = [{
                        width: 300,
                        height: 200
                    }, {
                        width: 320,
                        height: 200
                    }, {
                        width: 550,
                        height: 200
                    }, {
                        width: 700,
                        height: 200
                    }, {
                        width: 860,
                        height: 200
                    }][o] || {
                    width: 450,
                    height: 200
                };
                r({
                    isBreak: true,
                    returnType: TraitManager_1.TraitCallbackReturnType.return,
                    returnVal: i
                });
                return;
            }
            r();
        }
        catch (t) {
            console.error("[" + WordsScreenFitTrait_1.traitKey + "] 获取尺寸失败: " + t.message);
            r();
        }
    };
    WordsScreenFitTrait.prototype.onMotivWordsBhv_getParent = function (t, r) {
        try {
            var o = t.ins.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
            if (!o || !cc.isValid(o)) {
                r();
                return;
            }
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: o
            });
        }
        catch (t) {
            console.error("[" + WordsScreenFitTrait_1.traitKey + "] 获取父节点失败: " + t.message);
            r();
        }
    };
    WordsScreenFitTrait.prototype.onMotivWordsBhv_safePos = function (t, r) {
        try {
            var o = t.ins, i = t.args[0], n = t.args[1], a = t.args[2], s = o.clampToScreenWorld(i, n, a);
            r({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                returnVal: s
            });
        }
        catch (t) {
            console.error("[" + WordsScreenFitTrait_1.traitKey + "] 屏幕适配失败: " + t.message);
            r();
        }
    };
    var WordsScreenFitTrait_1;
    WordsScreenFitTrait.traitKey = "WordsScreenFit";
    WordsScreenFitTrait = WordsScreenFitTrait_1 = __decorate([
        mj.trait,
        mj.class("WordsScreenFitTrait")
    ], WordsScreenFitTrait);
    return WordsScreenFitTrait;
}(Trait_1.default));
exports.default = WordsScreenFitTrait;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dvcmRzU2NyZWVuRml0L1NjcmlwdHMvV29yZHNTY3JlZW5GaXRUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUN4Riw2RUFBd0U7QUFHeEU7SUFBaUQsdUNBQUs7SUFBdEQ7O0lBZ0ZBLENBQUM7NEJBaEZvQixtQkFBbUI7SUFFdEMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDBDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsRUFDSCxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEgsQ0FBQztJQUNELHFEQUF1QixHQUF2QixVQUF3QixDQUFDLEVBQUUsQ0FBQztRQUMxQixJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDUCxLQUFLLEVBQUUsR0FBRzt3QkFDVixNQUFNLEVBQUUsR0FBRztxQkFDWixFQUFFO3dCQUNELEtBQUssRUFBRSxHQUFHO3dCQUNWLE1BQU0sRUFBRSxHQUFHO3FCQUNaLEVBQUU7d0JBQ0QsS0FBSyxFQUFF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bXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IHsgRWZmZWN0TGF5ZXIgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvbnN0YW50L0VmZmVjdExheWVyRW51bSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIldvcmRzU2NyZWVuRml0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmRzU2NyZWVuRml0VHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiV29yZHNTY3JlZW5GaXRcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIGlzTHY0RW5hYmxlZCgpIHtcbiAgICB2YXIgdCxcbiAgICAgIHIgPSBtai5nZXRDbGFzc0J5TmFtZShcIk1vdGl2YXRpb25hbFdvcmRzTHY0VHJhaXRcIik7XG4gICAgcmV0dXJuIHRydWUgPT09IChudWxsID09PSAodCA9IG51bGwgPT0gciA/IHZvaWQgMCA6IHIuZ2V0SW5zdGFuY2UoKSkgfHwgdm9pZCAwID09PSB0ID8gdm9pZCAwIDogdC5ldmVudEVuYWJsZWQpO1xuICB9XG4gIG9uTW90aXZXb3Jkc0Jodl9nZXRTaXplKHQsIHIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIG8gPSB0LmFyZ3NbMF07XG4gICAgICBpZiAodGhpcy5pc0x2NEVuYWJsZWQoKSkge1xuICAgICAgICB2YXIgaSA9IFt7XG4gICAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgICBoZWlnaHQ6IDIwMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgd2lkdGg6IDMyMCxcbiAgICAgICAgICBoZWlnaHQ6IDIwMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgd2lkdGg6IDU1MCxcbiAgICAgICAgICBoZWlnaHQ6IDIwMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgd2lkdGg6IDcwMCxcbiAgICAgICAgICBoZWlnaHQ6IDIwMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgd2lkdGg6IDg2MCxcbiAgICAgICAgICBoZWlnaHQ6IDIwMFxuICAgICAgICB9XVtvXSB8fCB7XG4gICAgICAgICAgd2lkdGg6IDQ1MCxcbiAgICAgICAgICBoZWlnaHQ6IDIwMFxuICAgICAgICB9O1xuICAgICAgICByKHtcbiAgICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgICByZXR1cm5WYWw6IGlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHIoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgV29yZHNTY3JlZW5GaXRUcmFpdC50cmFpdEtleSArIFwiXSDojrflj5blsLrlr7jlpLHotKU6IFwiICsgdC5tZXNzYWdlKTtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbiAgb25Nb3RpdldvcmRzQmh2X2dldFBhcmVudCh0LCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBvID0gdC5pbnMuY29udGV4dC5nYW1lVmlldy5nZXRFZmZlY3RMYXllcihFZmZlY3RMYXllci5Ub3ApO1xuICAgICAgaWYgKCFvIHx8ICFjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICAgIHIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcih7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgcmV0dXJuVmFsOiBvXG4gICAgICB9KTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgV29yZHNTY3JlZW5GaXRUcmFpdC50cmFpdEtleSArIFwiXSDojrflj5bniLboioLngrnlpLHotKU6IFwiICsgdC5tZXNzYWdlKTtcbiAgICAgIHIoKTtcbiAgICB9XG4gIH1cbiAgb25Nb3RpdldvcmRzQmh2X3NhZmVQb3ModCwgcikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbyA9IHQuaW5zLFxuICAgICAgICBpID0gdC5hcmdzWzBdLFxuICAgICAgICBuID0gdC5hcmdzWzFdLFxuICAgICAgICBhID0gdC5hcmdzWzJdLFxuICAgICAgICBzID0gby5jbGFtcFRvU2NyZWVuV29ybGQoaSwgbiwgYSk7XG4gICAgICByKHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICByZXR1cm5WYWw6IHNcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBXb3Jkc1NjcmVlbkZpdFRyYWl0LnRyYWl0S2V5ICsgXCJdIOWxj+W5lemAgumFjeWksei0pTogXCIgKyB0Lm1lc3NhZ2UpO1xuICAgICAgcigpO1xuICAgIH1cbiAgfVxufSJdfQ==