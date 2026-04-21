
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_levelThresholdN/Scripts/LevelThresholdNTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa8d9yvkxNBQbuQD0qzXrML', 'LevelThresholdNTrait');
// subpackages/l_levelThresholdN/Scripts/LevelThresholdNTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var LevelThresholdNTrait = /** @class */ (function (_super) {
    __extends(LevelThresholdNTrait, _super);
    function LevelThresholdNTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._threshold = 74;
        _this._coefficient = 0.9;
        return _this;
    }
    LevelThresholdNTrait.prototype.onLoad = function () {
        var t, r;
        _super.prototype.onLoad.call(this);
        this._threshold = null !== (t = this._traitData.threshold) && void 0 !== t ? t : 74;
        this._coefficient = null !== (r = this._traitData.coefficient) && void 0 !== r ? r : 0.9;
    };
    LevelThresholdNTrait.prototype.onExtNormLv_getAdNengRU = function (e, t) {
        if (this.checkGameMode()) {
            if (null != e.args[0]) {
                var r = UserModel_1.default.getInstance(), o = r.getCurrentGameType(), i = r.getGameDataByGameType(o);
                if ((i ? i.getCurrentLevelId() : 0) <= this._threshold)
                    t();
                else {
                    var n = this._coefficient, a = e.args.length >= 2 ? e.args[1] : null;
                    if (a && Array.isArray(a)) {
                        a.push(n);
                        t();
                    }
                    else {
                        e.args[1] = [n];
                        t();
                    }
                }
            }
            else
                t();
        }
        else
            t();
    };
    LevelThresholdNTrait.traitKey = "LevelThresholdN";
    LevelThresholdNTrait = __decorate([
        mj.trait,
        mj.class("LevelThresholdNTrait")
    ], LevelThresholdNTrait);
    return LevelThresholdNTrait;
}(ExtractTrait_1.default));
exports.default = LevelThresholdNTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xldmVsVGhyZXNob2xkTi9TY3JpcHRzL0xldmVsVGhyZXNob2xkTlRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBeUQ7QUFDekQsc0VBQWlFO0FBR2pFO0lBQWtELHdDQUFZO0lBQTlEO1FBQUEscUVBOEJDO1FBN0JDLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGtCQUFZLEdBQUcsR0FBRyxDQUFDOztJQTRCckIsQ0FBQztJQTFCQyxxQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1QsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzNGLENBQUM7SUFDRCxzREFBdUIsR0FBdkIsVUFBd0IsQ0FBQyxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLEdBQUcsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsRUFDN0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxFQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVU7b0JBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQUs7b0JBQy9ELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQ3ZCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDNUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDVixDQUFDLEVBQUUsQ0FBQztxQkFDTDt5QkFBTTt3QkFDTCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2hCLENBQUMsRUFBRSxDQUFDO3FCQUNMO2lCQUNGO2FBQ0Y7O2dCQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBMUJNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFIakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQThCeEM7SUFBRCwyQkFBQztDQTlCRCxBQThCQyxDQTlCaUQsc0JBQVksR0E4QjdEO2tCQTlCb0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJMZXZlbFRocmVzaG9sZE5UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxUaHJlc2hvbGROVHJhaXQgZXh0ZW5kcyBFeHRyYWN0VHJhaXQge1xuICBfdGhyZXNob2xkID0gNzQ7XG4gIF9jb2VmZmljaWVudCA9IDAuOTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJMZXZlbFRocmVzaG9sZE5cIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciB0LCByO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3RocmVzaG9sZCA9IG51bGwgIT09ICh0ID0gdGhpcy5fdHJhaXREYXRhLnRocmVzaG9sZCkgJiYgdm9pZCAwICE9PSB0ID8gdCA6IDc0O1xuICAgIHRoaXMuX2NvZWZmaWNpZW50ID0gbnVsbCAhPT0gKHIgPSB0aGlzLl90cmFpdERhdGEuY29lZmZpY2llbnQpICYmIHZvaWQgMCAhPT0gciA/IHIgOiAwLjk7XG4gIH1cbiAgb25FeHROb3JtTHZfZ2V0QWROZW5nUlUoZSwgdCkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgaWYgKG51bGwgIT0gZS5hcmdzWzBdKSB7XG4gICAgICAgIHZhciByID0gVXNlck1vZGVsLmdldEluc3RhbmNlKCksXG4gICAgICAgICAgbyA9IHIuZ2V0Q3VycmVudEdhbWVUeXBlKCksXG4gICAgICAgICAgaSA9IHIuZ2V0R2FtZURhdGFCeUdhbWVUeXBlKG8pO1xuICAgICAgICBpZiAoKGkgPyBpLmdldEN1cnJlbnRMZXZlbElkKCkgOiAwKSA8PSB0aGlzLl90aHJlc2hvbGQpIHQoKTtlbHNlIHtcbiAgICAgICAgICB2YXIgbiA9IHRoaXMuX2NvZWZmaWNpZW50LFxuICAgICAgICAgICAgYSA9IGUuYXJncy5sZW5ndGggPj0gMiA/IGUuYXJnc1sxXSA6IG51bGw7XG4gICAgICAgICAgaWYgKGEgJiYgQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICAgICAgYS5wdXNoKG4pO1xuICAgICAgICAgICAgdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLmFyZ3NbMV0gPSBbbl07XG4gICAgICAgICAgICB0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgdCgpO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=