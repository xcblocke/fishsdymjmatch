
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_changeWordsSoundDouble/Scripts/ChangeWordsSoundTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8fddKB7ZtPkpdpvbo6+MCl', 'ChangeWordsSoundTrait');
// subpackages/r_changeWordsSoundDouble/Scripts/ChangeWordsSoundTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var i;
(function (i) {
    i[i["Good"] = 76] = "Good";
    i[i["Great"] = 77] = "Great";
    i[i["Excellent"] = 78] = "Excellent";
    i[i["Amazing"] = 79] = "Amazing";
    i[i["Unbelievable"] = 80] = "Unbelievable";
    i[i["Good2"] = 81] = "Good2";
    i[i["Great2"] = 82] = "Great2";
    i[i["Excellent2"] = 83] = "Excellent2";
    i[i["Amazing2"] = 84] = "Amazing2";
    i[i["Unbelievable2"] = 85] = "Unbelievable2";
})(i || (i = {}));
var ChangeWordsSoundTrait = /** @class */ (function (_super) {
    __extends(ChangeWordsSoundTrait, _super);
    function ChangeWordsSoundTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangeWordsSoundTrait_1 = ChangeWordsSoundTrait;
    ChangeWordsSoundTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    ChangeWordsSoundTrait.prototype.onMotivWordsBhv_playSound = function (e, t) {
        this.handleAudioReplacement(e, t);
    };
    ChangeWordsSoundTrait.prototype.onTravelMWords_playAudio = function (e, t) {
        this.handleAudioReplacement(e, t);
    };
    ChangeWordsSoundTrait.prototype.handleAudioReplacement = function (e, t) {
        var n = e.args[0], o = UserModel_1.default.getInstance(), a = o.getCurrentGameType(), i = o.getManGameTypes(), l = (i && i.includes(a) ? ChangeWordsSoundTrait_1.maleSoundIdArr : ChangeWordsSoundTrait_1.femaleSoundIdArr)[n];
        if (l && mj.audioManager) {
            mj.audioManager.playEffect(l, false);
            t({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true
            });
        }
        else
            t();
    };
    var ChangeWordsSoundTrait_1;
    ChangeWordsSoundTrait.traitKey = "ChangeWordsSound";
    ChangeWordsSoundTrait.femaleSoundIdArr = [i.Good, i.Great, i.Excellent, i.Amazing, i.Unbelievable];
    ChangeWordsSoundTrait.maleSoundIdArr = [i.Good2, i.Great2, i.Excellent2, i.Amazing2, i.Unbelievable2];
    ChangeWordsSoundTrait = ChangeWordsSoundTrait_1 = __decorate([
        mj.trait,
        mj.class("ChangeWordsSoundTrait")
    ], ChangeWordsSoundTrait);
    return ChangeWordsSoundTrait;
}(Trait_1.default));
exports.default = ChangeWordsSoundTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZVdvcmRzU291bmREb3VibGUvU2NyaXB0cy9DaGFuZ2VXb3Jkc1NvdW5kVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCw4RUFBd0Y7QUFDeEYsc0VBQWlFO0FBQ2pFLElBQUssQ0FXSjtBQVhELFdBQUssQ0FBQztJQUNKLDBCQUFTLENBQUE7SUFDVCw0QkFBVSxDQUFBO0lBQ1Ysb0NBQWMsQ0FBQTtJQUNkLGdDQUFZLENBQUE7SUFDWiwwQ0FBaUIsQ0FBQTtJQUNqQiw0QkFBVSxDQUFBO0lBQ1YsOEJBQVcsQ0FBQTtJQUNYLHNDQUFlLENBQUE7SUFDZixrQ0FBYSxDQUFBO0lBQ2IsNENBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQVhJLENBQUMsS0FBRCxDQUFDLFFBV0w7QUFHRDtJQUFtRCx5Q0FBSztJQUF4RDs7SUEyQkEsQ0FBQzs4QkEzQm9CLHFCQUFxQjtJQUl4QyxzQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QseURBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELHdEQUF3QixHQUF4QixVQUF5QixDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxzREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsRUFDM0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxFQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxFQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXFCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyx1QkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLEVBQUU7WUFDeEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7O0lBekJNLDhCQUFRLEdBQUcsa0JBQWtCLENBQUM7SUFDOUIsc0NBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3RSxvQ0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7SUFIcEUscUJBQXFCO1FBRnpDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztPQUNiLHFCQUFxQixDQTJCekM7SUFBRCw0QkFBQztDQTNCRCxBQTJCQyxDQTNCa0QsZUFBSyxHQTJCdkQ7a0JBM0JvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmVudW0gaSB7XG4gIEdvb2QgPSA3NixcbiAgR3JlYXQgPSA3NyxcbiAgRXhjZWxsZW50ID0gNzgsXG4gIEFtYXppbmcgPSA3OSxcbiAgVW5iZWxpZXZhYmxlID0gODAsXG4gIEdvb2QyID0gODEsXG4gIEdyZWF0MiA9IDgyLFxuICBFeGNlbGxlbnQyID0gODMsXG4gIEFtYXppbmcyID0gODQsXG4gIFVuYmVsaWV2YWJsZTIgPSA4NSxcbn1cbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiQ2hhbmdlV29yZHNTb3VuZFRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VXb3Jkc1NvdW5kVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlV29yZHNTb3VuZFwiO1xuICBzdGF0aWMgZmVtYWxlU291bmRJZEFyciA9IFtpLkdvb2QsIGkuR3JlYXQsIGkuRXhjZWxsZW50LCBpLkFtYXppbmcsIGkuVW5iZWxpZXZhYmxlXTtcbiAgc3RhdGljIG1hbGVTb3VuZElkQXJyID0gW2kuR29vZDIsIGkuR3JlYXQyLCBpLkV4Y2VsbGVudDIsIGkuQW1hemluZzIsIGkuVW5iZWxpZXZhYmxlMl07XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbk1vdGl2V29yZHNCaHZfcGxheVNvdW5kKGUsIHQpIHtcbiAgICB0aGlzLmhhbmRsZUF1ZGlvUmVwbGFjZW1lbnQoZSwgdCk7XG4gIH1cbiAgb25UcmF2ZWxNV29yZHNfcGxheUF1ZGlvKGUsIHQpIHtcbiAgICB0aGlzLmhhbmRsZUF1ZGlvUmVwbGFjZW1lbnQoZSwgdCk7XG4gIH1cbiAgaGFuZGxlQXVkaW9SZXBsYWNlbWVudChlLCB0KSB7XG4gICAgdmFyIG4gPSBlLmFyZ3NbMF0sXG4gICAgICBvID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICBhID0gby5nZXRDdXJyZW50R2FtZVR5cGUoKSxcbiAgICAgIGkgPSBvLmdldE1hbkdhbWVUeXBlcygpLFxuICAgICAgbCA9IChpICYmIGkuaW5jbHVkZXMoYSkgPyBDaGFuZ2VXb3Jkc1NvdW5kVHJhaXQubWFsZVNvdW5kSWRBcnIgOiBDaGFuZ2VXb3Jkc1NvdW5kVHJhaXQuZmVtYWxlU291bmRJZEFycilbbl07XG4gICAgaWYgKGwgJiYgbWouYXVkaW9NYW5hZ2VyKSB7XG4gICAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChsLCBmYWxzZSk7XG4gICAgICB0KHtcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG59Il19