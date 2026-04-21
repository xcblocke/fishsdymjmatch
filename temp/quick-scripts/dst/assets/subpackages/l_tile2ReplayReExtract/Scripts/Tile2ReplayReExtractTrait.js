
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_tile2ReplayReExtract/Scripts/Tile2ReplayReExtractTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af5d1yxQslHDYJRI3YREPu4', 'Tile2ReplayReExtractTrait');
// subpackages/l_tile2ReplayReExtract/Scripts/Tile2ReplayReExtractTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ExtractTrait_1 = require("../../../Scripts/ExtractTrait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var Tile2ReplayReExtractTrait = /** @class */ (function (_super) {
    __extends(Tile2ReplayReExtractTrait, _super);
    function Tile2ReplayReExtractTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2ReplayReExtractTrait_1 = Tile2ReplayReExtractTrait;
    Tile2ReplayReExtractTrait.prototype.isSupportMode = function (t) {
        return t === GameTypeEnums_1.MjGameType.Tile2Normal;
    };
    Tile2ReplayReExtractTrait.prototype.onIptRestart_excute = function (t, e) {
        var i = t.args[0];
        if (this.checkGameMode()) {
            var o = !!i && 0 === i.dieResult && "fail" === i.callFrom;
            Tile2ReplayReExtractTrait_1._isFailReplay = o;
            e();
        }
        else
            e();
    };
    Tile2ReplayReExtractTrait.prototype.onT2GameCtrl_reExtOnRst = function (t, e) {
        if (this.checkGameMode() && Tile2ReplayReExtractTrait_1._isFailReplay) {
            Tile2ReplayReExtractTrait_1._isFailReplay = false;
            e({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: true
            });
        }
        else
            e();
    };
    var Tile2ReplayReExtractTrait_1;
    Tile2ReplayReExtractTrait.traitKey = "Tile2ReplayReExtract";
    Tile2ReplayReExtractTrait._isFailReplay = false;
    Tile2ReplayReExtractTrait = Tile2ReplayReExtractTrait_1 = __decorate([
        mj.trait,
        mj.class("Tile2ReplayReExtractTrait")
    ], Tile2ReplayReExtractTrait);
    return Tile2ReplayReExtractTrait;
}(ExtractTrait_1.default));
exports.default = Tile2ReplayReExtractTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3RpbGUyUmVwbGF5UmVFeHRyYWN0L1NjcmlwdHMvVGlsZTJSZXBsYXlSZUV4dHJhY3RUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0ZBQW9GO0FBQ3BGLDhEQUF5RDtBQUN6RCw4RUFBd0Y7QUFHeEY7SUFBdUQsNkNBQVk7SUFBbkU7O0lBd0JBLENBQUM7a0NBeEJvQix5QkFBeUI7SUFHNUMsaURBQWEsR0FBYixVQUFjLENBQUM7UUFDYixPQUFPLENBQUMsS0FBSywwQkFBVSxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsdURBQW1CLEdBQW5CLFVBQW9CLENBQUMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsSUFBSSxNQUFNLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMxRCwyQkFBeUIsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsMkRBQXVCLEdBQXZCLFVBQXdCLENBQUMsRUFBRSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLDJCQUF5QixDQUFDLGFBQWEsRUFBRTtZQUNuRSwyQkFBeUIsQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQ2hELENBQUMsQ0FBQztnQkFDQSxVQUFVLEVBQUUsc0NBQXVCLENBQUMsTUFBTTtnQkFDMUMsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDOztJQXRCTSxrQ0FBUSxHQUFHLHNCQUFzQixDQUFDO0lBQ2xDLHVDQUFhLEdBQUcsS0FBSyxDQUFDO0lBRlYseUJBQXlCO1FBRjdDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztPQUNqQix5QkFBeUIsQ0F3QjdDO0lBQUQsZ0NBQUM7Q0F4QkQsQUF3QkMsQ0F4QnNELHNCQUFZLEdBd0JsRTtrQkF4Qm9CLHlCQUF5QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1qR2FtZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IEV4dHJhY3RUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL0V4dHJhY3RUcmFpdCc7XG5pbXBvcnQgeyBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0TWFuYWdlcic7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIlRpbGUyUmVwbGF5UmVFeHRyYWN0VHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGUyUmVwbGF5UmVFeHRyYWN0VHJhaXQgZXh0ZW5kcyBFeHRyYWN0VHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyUmVwbGF5UmVFeHRyYWN0XCI7XG4gIHN0YXRpYyBfaXNGYWlsUmVwbGF5ID0gZmFsc2U7XG4gIGlzU3VwcG9ydE1vZGUodCkge1xuICAgIHJldHVybiB0ID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsO1xuICB9XG4gIG9uSXB0UmVzdGFydF9leGN1dGUodCwgZSkge1xuICAgIHZhciBpID0gdC5hcmdzWzBdO1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSkge1xuICAgICAgdmFyIG8gPSAhIWkgJiYgMCA9PT0gaS5kaWVSZXN1bHQgJiYgXCJmYWlsXCIgPT09IGkuY2FsbEZyb207XG4gICAgICBUaWxlMlJlcGxheVJlRXh0cmFjdFRyYWl0Ll9pc0ZhaWxSZXBsYXkgPSBvO1xuICAgICAgZSgpO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25UMkdhbWVDdHJsX3JlRXh0T25Sc3QodCwgZSkge1xuICAgIGlmICh0aGlzLmNoZWNrR2FtZU1vZGUoKSAmJiBUaWxlMlJlcGxheVJlRXh0cmFjdFRyYWl0Ll9pc0ZhaWxSZXBsYXkpIHtcbiAgICAgIFRpbGUyUmVwbGF5UmVFeHRyYWN0VHJhaXQuX2lzRmFpbFJlcGxheSA9IGZhbHNlO1xuICAgICAgZSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19