
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_survivalNoFC/Scripts/Tile2SurvivalNoFCTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c1ceju/odK8Zcq3CWB5uvD', 'Tile2SurvivalNoFCTrait');
// subpackages/l_survivalNoFC/Scripts/Tile2SurvivalNoFCTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../Scripts/core/simulator/constant/GameTypeEnums");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var SurvivalNoFCAdjustTrait_1 = require("./SurvivalNoFCAdjustTrait");
var Tile2SurvivalNoFCTrait = /** @class */ (function (_super) {
    __extends(Tile2SurvivalNoFCTrait, _super);
    function Tile2SurvivalNoFCTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile2SurvivalNoFCTrait.prototype.onLoad = function () {
        var e = this;
        _super.prototype.onLoad.call(this);
        Promise.resolve().then(function () {
            e.registerEvent([{
                    event: "AllClearTt_isSurAc"
                }]);
        });
    };
    Tile2SurvivalNoFCTrait.prototype.onAllClearTt_isSurAc = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var r;
            r = !(!this._config || 0 === this._config.length) && this.canActive();
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.jump,
                returnVal: r
            });
        }
        else
            e();
    };
    Tile2SurvivalNoFCTrait.prototype.onSurvNoFCTrait_canActive = function (t, e) {
        if (UserModel_1.default.getInstance().getCurrentGameType() === GameTypeEnums_1.MjGameType.Tile2Normal) {
            var r;
            r = !(!this._config || 0 === this._config.length) && this.canActive();
            e({
                isBreak: true,
                returnType: TraitCallbackReturnType.jump,
                returnVal: r
            });
        }
        else
            e();
    };
    Tile2SurvivalNoFCTrait.traitKey = "Tile2SurvivalNoFC";
    Tile2SurvivalNoFCTrait = __decorate([
        mj.trait,
        mj.class("Tile2SurvivalNoFCTrait")
    ], Tile2SurvivalNoFCTrait);
    return Tile2SurvivalNoFCTrait;
}(SurvivalNoFCAdjustTrait_1.default));
exports.default = Tile2SurvivalNoFCTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3N1cnZpdmFsTm9GQy9TY3JpcHRzL1RpbGUyU3Vydml2YWxOb0ZDVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdGQUFvRjtBQUNwRixzRUFBaUU7QUFDakUscUVBQWdFO0FBR2hFO0lBQW9ELDBDQUF1QjtJQUEzRTs7SUFpQ0EsQ0FBQztJQS9CQyx1Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDZixLQUFLLEVBQUUsb0JBQW9CO2lCQUM1QixDQUFDLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHFEQUFvQixHQUFwQixVQUFxQixDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLG1CQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsS0FBSywwQkFBVSxDQUFDLFdBQVcsRUFBRTtZQUMzRSxJQUFJLENBQUMsQ0FBQztZQUNOLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN0RSxDQUFDLENBQUM7Z0JBQ0EsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsVUFBVSxFQUFFLHVCQUF1QixDQUFDLElBQUk7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDO2FBQ2IsQ0FBQyxDQUFDO1NBQ0o7O1lBQU0sQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0lBQ0QsMERBQXlCLEdBQXpCLFVBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzVCLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLDBCQUFVLENBQUMsV0FBVyxFQUFFO1lBQzNFLElBQUksQ0FBQyxDQUFDO1lBQ04sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3RFLENBQUMsQ0FBQztnQkFDQSxPQUFPLEVBQUUsSUFBSTtnQkFDYixVQUFVLEVBQUUsdUJBQXVCLENBQUMsSUFBSTtnQkFDeEMsU0FBUyxFQUFFLENBQUM7YUFDYixDQUFDLENBQUM7U0FDSjs7WUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7SUEvQk0sK0JBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQURuQixzQkFBc0I7UUFGMUMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDO09BQ2Qsc0JBQXNCLENBaUMxQztJQUFELDZCQUFDO0NBakNELEFBaUNDLENBakNtRCxpQ0FBdUIsR0FpQzFFO2tCQWpDb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpHYW1lVHlwZSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IFN1cnZpdmFsTm9GQ0FkanVzdFRyYWl0IGZyb20gJy4vU3Vydml2YWxOb0ZDQWRqdXN0VHJhaXQnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJUaWxlMlN1cnZpdmFsTm9GQ1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlMlN1cnZpdmFsTm9GQ1RyYWl0IGV4dGVuZHMgU3Vydml2YWxOb0ZDQWRqdXN0VHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlRpbGUyU3Vydml2YWxOb0ZDXCI7XG4gIG9uTG9hZCgpIHtcbiAgICB2YXIgZSA9IHRoaXM7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBlLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgICAgZXZlbnQ6IFwiQWxsQ2xlYXJUdF9pc1N1ckFjXCJcbiAgICAgIH1dKTtcbiAgICB9KTtcbiAgfVxuICBvbkFsbENsZWFyVHRfaXNTdXJBYyh0LCBlKSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsKSB7XG4gICAgICB2YXIgcjtcbiAgICAgIHIgPSAhKCF0aGlzLl9jb25maWcgfHwgMCA9PT0gdGhpcy5fY29uZmlnLmxlbmd0aCkgJiYgdGhpcy5jYW5BY3RpdmUoKTtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbiAgb25TdXJ2Tm9GQ1RyYWl0X2NhbkFjdGl2ZSh0LCBlKSB7XG4gICAgaWYgKFVzZXJNb2RlbC5nZXRJbnN0YW5jZSgpLmdldEN1cnJlbnRHYW1lVHlwZSgpID09PSBNakdhbWVUeXBlLlRpbGUyTm9ybWFsKSB7XG4gICAgICB2YXIgcjtcbiAgICAgIHIgPSAhKCF0aGlzLl9jb25maWcgfHwgMCA9PT0gdGhpcy5fY29uZmlnLmxlbmd0aCkgJiYgdGhpcy5jYW5BY3RpdmUoKTtcbiAgICAgIGUoe1xuICAgICAgICBpc0JyZWFrOiB0cnVlLFxuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5qdW1wLFxuICAgICAgICByZXR1cm5WYWw6IHJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBlKCk7XG4gIH1cbn0iXX0=