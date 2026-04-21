
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_changeWhiteBgm/Scripts/ChangeWhiteBgmTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56b37uLDyVBJIZpPYI8hmA7', 'ChangeWhiteBgmTrait');
// subpackages/r_changeWhiteBgm/Scripts/ChangeWhiteBgmTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var ChangeWhiteBgmTrait = /** @class */ (function (_super) {
    __extends(ChangeWhiteBgmTrait, _super);
    function ChangeWhiteBgmTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._audioId = 0;
        return _this;
    }
    ChangeWhiteBgmTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._audioId = this.traitData.audioId || 88;
    };
    ChangeWhiteBgmTrait.prototype.onAudioMgr_playBGM = function (t, e) {
        if (t.args && 0 !== t.args.length) {
            if (t.args[0] === GameTypeEnums_1.EAudioID.Bgm) {
                t.args[0] = this._audioId;
                e();
            }
            else
                e();
        }
        else
            e();
    };
    ChangeWhiteBgmTrait.traitKey = "ChangeWhiteBgm";
    ChangeWhiteBgmTrait = __decorate([
        mj.trait,
        mj.class("ChangeWhiteBgmTrait")
    ], ChangeWhiteBgmTrait);
    return ChangeWhiteBgmTrait;
}(Trait_1.default));
exports.default = ChangeWhiteBgmTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2NoYW5nZVdoaXRlQmdtL1NjcmlwdHMvQ2hhbmdlV2hpdGVCZ21UcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELHdGQUFrRjtBQUdsRjtJQUFpRCx1Q0FBSztJQUF0RDtRQUFBLHFFQWVDO1FBZEMsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUFjZixDQUFDO0lBWkMsb0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUNELGdEQUFrQixHQUFsQixVQUFtQixDQUFDLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyx3QkFBUSxDQUFDLEdBQUcsRUFBRTtnQkFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUMxQixDQUFDLEVBQUUsQ0FBQzthQUNMOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQVpNLDRCQUFRLEdBQUcsZ0JBQWdCLENBQUM7SUFGaEIsbUJBQW1CO1FBRnZDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztPQUNYLG1CQUFtQixDQWV2QztJQUFELDBCQUFDO0NBZkQsQUFlQyxDQWZnRCxlQUFLLEdBZXJEO2tCQWZvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRUF1ZGlvSUQgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJDaGFuZ2VXaGl0ZUJnbVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VXaGl0ZUJnbVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfYXVkaW9JZCA9IDA7XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiQ2hhbmdlV2hpdGVCZ21cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2F1ZGlvSWQgPSB0aGlzLnRyYWl0RGF0YS5hdWRpb0lkIHx8IDg4O1xuICB9XG4gIG9uQXVkaW9NZ3JfcGxheUJHTSh0LCBlKSB7XG4gICAgaWYgKHQuYXJncyAmJiAwICE9PSB0LmFyZ3MubGVuZ3RoKSB7XG4gICAgICBpZiAodC5hcmdzWzBdID09PSBFQXVkaW9JRC5CZ20pIHtcbiAgICAgICAgdC5hcmdzWzBdID0gdGhpcy5fYXVkaW9JZDtcbiAgICAgICAgZSgpO1xuICAgICAgfSBlbHNlIGUoKTtcbiAgICB9IGVsc2UgZSgpO1xuICB9XG59Il19