
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_rankTIle2Mode/Scripts/RankTile2ModeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72989XqxPBM7rTI4e8R0u9R', 'RankTile2ModeTrait');
// subpackages/l_rankTIle2Mode/Scripts/RankTile2ModeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TileTypeEnum_1 = require("../../../Scripts/simulator/constant/TileTypeEnum");
var GameInputEnum_1 = require("../../../Scripts/simulator/constant/GameInputEnum");
var Tile2NormalGameData_1 = require("../../../Scripts/core/simulator/data/Tile2NormalGameData");
var RankTile2ModeTrait = /** @class */ (function (_super) {
    __extends(RankTile2ModeTrait, _super);
    function RankTile2ModeTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tile2BeforeWinBehavior = null;
        return _this;
    }
    RankTile2ModeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    RankTile2ModeTrait.prototype.getMessageListeners = function () {
        return {
            RankBoxVw_destroy: this.onMsgRankBoxVwDestory.bind(this),
            RankBonusVw_destroy: this.onMsgRankBonusVwDestory.bind(this)
        };
    };
    RankTile2ModeTrait.prototype.onMsgRankBoxVwDestory = function () {
        cc.isValid(this._tile2BeforeWinBehavior) && this._tile2BeforeWinBehavior.finish();
        this._tile2BeforeWinBehavior = null;
    };
    RankTile2ModeTrait.prototype.onMsgRankBonusVwDestory = function () {
        cc.isValid(this._tile2BeforeWinBehavior) && this._tile2BeforeWinBehavior.finish();
        this._tile2BeforeWinBehavior = null;
    };
    RankTile2ModeTrait.prototype.onTile2BfWinBhv_doOthLgc = function (e, t) {
        this._tile2BeforeWinBehavior = e.ins;
        var n = mj.getClassByName("RankModel");
        if (n) {
            if (1 != n.getInstance().getNowState())
                t();
            else {
                n.getInstance().levelPassed();
                if (Tile2NormalGameData_1.default.getInstance().getRankCardCount() > 0) {
                    n.getInstance().addGameCount();
                    this.pushController("RankBonusController", {
                        isReuse: true,
                        isShowAction: false,
                        instance: e.ins
                    });
                    t({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return
                    });
                }
                else {
                    n.getInstance().resetWinStreakCount();
                    t();
                }
            }
        }
        else
            t();
    };
    RankTile2ModeTrait.prototype.onTile2WinVw_destroy = function (e, t) {
        var n = mj.getClassByName("RankTrait");
        if (n) {
            n.getInstance().judgeHasRankReward(true);
            t();
        }
        else
            t();
    };
    RankTile2ModeTrait.prototype.onIptT2Shuffle_exec = function (e, t) {
        var n = e.args[0], r = mj.getClassByName("RankModel");
        if (r) {
            var i = r.getInstance();
            i.hasOpeningActivity() && n.from === GameInputEnum_1.EShuffleFrom.Free && i.levelFailed();
            t();
        }
        else
            t();
    };
    RankTile2ModeTrait.prototype.onTile2FailVw_replay = function (e, t) {
        var n = mj.getClassByName("RankModel");
        if (n) {
            var r = n.getInstance();
            r.hasOpeningActivity() && r.levelFailed();
            t();
        }
        else
            t();
    };
    RankTile2ModeTrait.prototype.onT2ClearEffBhv_playAni = function (e, t) {
        var n, r, i = mj.getClassByName("RankTrait"), o = mj.getClassByName("RankModel");
        if (i && o) {
            if (o.getInstance().hasOpeningActivity()) {
                var a = null === (n = e.args) || void 0 === n ? void 0 : n[1];
                if (null === (r = null == a ? void 0 : a.data) || void 0 === r ? void 0 : r.isRankCard) {
                    i.getInstance().checkSpecialCard(null, e.ins.context);
                    e.ins.finish();
                    t({
                        isBreak: true,
                        returnType: TraitCallbackReturnType.return
                    });
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    RankTile2ModeTrait.prototype.onT2GameCtrl_getTileTypes = function (e, t) {
        var n = mj.getClassByName("RankModel"), r = mj.getClassByName("RankTrait");
        if (n && r) {
            r.getInstance().judgeFirstOpenRank();
            n.getInstance().hasOpeningActivity() && (e.beforReturnVal = e.beforReturnVal + "," + TileTypeEnum_1.ETileType.RankCard);
            t({
                returnVal: e.beforReturnVal
            });
        }
        else
            t();
    };
    RankTile2ModeTrait.traitKey = "RankTile2Mode";
    RankTile2ModeTrait.nextTimeOut = -1;
    RankTile2ModeTrait = __decorate([
        mj.trait,
        mj.class("RankTile2ModeTrait")
    ], RankTile2ModeTrait);
    return RankTile2ModeTrait;
}(Trait_1.default));
exports.default = RankTile2ModeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3JhbmtUSWxlMk1vZGUvU2NyaXB0cy9SYW5rVGlsZTJNb2RlVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCxpRkFBNkU7QUFDN0UsbUZBQWlGO0FBQ2pGLGdHQUEyRjtBQUczRjtJQUFnRCxzQ0FBSztJQUFyRDtRQUFBLHFFQW1HQztRQWxHQyw2QkFBdUIsR0FBRyxJQUFJLENBQUM7O0lBa0dqQyxDQUFDO0lBL0ZDLG1DQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxnREFBbUIsR0FBbkI7UUFDRSxPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDeEQsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDN0QsQ0FBQztJQUNKLENBQUM7SUFDRCxrREFBcUIsR0FBckI7UUFDRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFDRCxvREFBdUIsR0FBdkI7UUFDRSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFDRCxxREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7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QUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLGNBQWMsR0FBRyxHQUFHLEdBQUcsd0JBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RyxDQUFDLENBQUM7Z0JBQ0EsU0FBUyxFQUFFLENBQUMsQ0FBQyxjQUFjO2FBQzVCLENBQUMsQ0FBQztTQUNKOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQWhHTSwyQkFBUSxHQUFHLGVBQWUsQ0FBQztJQUMzQiw4QkFBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBSEwsa0JBQWtCO1FBRnRDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztPQUNWLGtCQUFrQixDQW1HdEM7SUFBRCx5QkFBQztDQW5HRCxBQW1HQyxDQW5HK0MsZUFBSyxHQW1HcEQ7a0JBbkdvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9zaW11bGF0b3IvY29uc3RhbnQvVGlsZVR5cGVFbnVtJztcbmltcG9ydCB7IEVTaHVmZmxlRnJvbSB9IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVJbnB1dEVudW0nO1xuaW1wb3J0IFRpbGUyTm9ybWFsR2FtZURhdGEgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci9kYXRhL1RpbGUyTm9ybWFsR2FtZURhdGEnO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJSYW5rVGlsZTJNb2RlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmtUaWxlMk1vZGVUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgX3RpbGUyQmVmb3JlV2luQmVoYXZpb3IgPSBudWxsO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIlJhbmtUaWxlMk1vZGVcIjtcbiAgc3RhdGljIG5leHRUaW1lT3V0ID0gLTE7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBnZXRNZXNzYWdlTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBSYW5rQm94VndfZGVzdHJveTogdGhpcy5vbk1zZ1JhbmtCb3hWd0Rlc3RvcnkuYmluZCh0aGlzKSxcbiAgICAgIFJhbmtCb251c1Z3X2Rlc3Ryb3k6IHRoaXMub25Nc2dSYW5rQm9udXNWd0Rlc3RvcnkuYmluZCh0aGlzKVxuICAgIH07XG4gIH1cbiAgb25Nc2dSYW5rQm94VndEZXN0b3J5KCkge1xuICAgIGNjLmlzVmFsaWQodGhpcy5fdGlsZTJCZWZvcmVXaW5CZWhhdmlvcikgJiYgdGhpcy5fdGlsZTJCZWZvcmVXaW5CZWhhdmlvci5maW5pc2goKTtcbiAgICB0aGlzLl90aWxlMkJlZm9yZVdpbkJlaGF2aW9yID0gbnVsbDtcbiAgfVxuICBvbk1zZ1JhbmtCb251c1Z3RGVzdG9yeSgpIHtcbiAgICBjYy5pc1ZhbGlkKHRoaXMuX3RpbGUyQmVmb3JlV2luQmVoYXZpb3IpICYmIHRoaXMuX3RpbGUyQmVmb3JlV2luQmVoYXZpb3IuZmluaXNoKCk7XG4gICAgdGhpcy5fdGlsZTJCZWZvcmVXaW5CZWhhdmlvciA9IG51bGw7XG4gIH1cbiAgb25UaWxlMkJmV2luQmh2X2RvT3RoTGdjKGUsIHQpIHtcbiAgICB0aGlzLl90aWxlMkJlZm9yZVdpbkJlaGF2aW9yID0gZS5pbnM7XG4gICAgdmFyIG4gPSBtai5nZXRDbGFzc0J5TmFtZShcIlJhbmtNb2RlbFwiKTtcbiAgICBpZiAobikge1xuICAgICAgaWYgKDEgIT0gbi5nZXRJbnN0YW5jZSgpLmdldE5vd1N0YXRlKCkpIHQoKTtlbHNlIHtcbiAgICAgICAgbi5nZXRJbnN0YW5jZSgpLmxldmVsUGFzc2VkKCk7XG4gICAgICAgIGlmIChUaWxlMk5vcm1hbEdhbWVEYXRhLmdldEluc3RhbmNlKCkuZ2V0UmFua0NhcmRDb3VudCgpID4gMCkge1xuICAgICAgICAgIG4uZ2V0SW5zdGFuY2UoKS5hZGRHYW1lQ291bnQoKTtcbiAgICAgICAgICB0aGlzLnB1c2hDb250cm9sbGVyKFwiUmFua0JvbnVzQ29udHJvbGxlclwiLCB7XG4gICAgICAgICAgICBpc1JldXNlOiB0cnVlLFxuICAgICAgICAgICAgaXNTaG93QWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBlLmluc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHQoe1xuICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG4uZ2V0SW5zdGFuY2UoKS5yZXNldFdpblN0cmVha0NvdW50KCk7XG4gICAgICAgICAgdCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvblRpbGUyV2luVndfZGVzdHJveShlLCB0KSB7XG4gICAgdmFyIG4gPSBtai5nZXRDbGFzc0J5TmFtZShcIlJhbmtUcmFpdFwiKTtcbiAgICBpZiAobikge1xuICAgICAgbi5nZXRJbnN0YW5jZSgpLmp1ZGdlSGFzUmFua1Jld2FyZCh0cnVlKTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uSXB0VDJTaHVmZmxlX2V4ZWMoZSwgdCkge1xuICAgIHZhciBuID0gZS5hcmdzWzBdLFxuICAgICAgciA9IG1qLmdldENsYXNzQnlOYW1lKFwiUmFua01vZGVsXCIpO1xuICAgIGlmIChyKSB7XG4gICAgICB2YXIgaSA9IHIuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGkuaGFzT3BlbmluZ0FjdGl2aXR5KCkgJiYgbi5mcm9tID09PSBFU2h1ZmZsZUZyb20uRnJlZSAmJiBpLmxldmVsRmFpbGVkKCk7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvblRpbGUyRmFpbFZ3X3JlcGxheShlLCB0KSB7XG4gICAgdmFyIG4gPSBtai5nZXRDbGFzc0J5TmFtZShcIlJhbmtNb2RlbFwiKTtcbiAgICBpZiAobikge1xuICAgICAgdmFyIHIgPSBuLmdldEluc3RhbmNlKCk7XG4gICAgICByLmhhc09wZW5pbmdBY3Rpdml0eSgpICYmIHIubGV2ZWxGYWlsZWQoKTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uVDJDbGVhckVmZkJodl9wbGF5QW5pKGUsIHQpIHtcbiAgICB2YXIgbixcbiAgICAgIHIsXG4gICAgICBpID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJSYW5rVHJhaXRcIiksXG4gICAgICBvID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJSYW5rTW9kZWxcIik7XG4gICAgaWYgKGkgJiYgbykge1xuICAgICAgaWYgKG8uZ2V0SW5zdGFuY2UoKS5oYXNPcGVuaW5nQWN0aXZpdHkoKSkge1xuICAgICAgICB2YXIgYSA9IG51bGwgPT09IChuID0gZS5hcmdzKSB8fCB2b2lkIDAgPT09IG4gPyB2b2lkIDAgOiBuWzFdO1xuICAgICAgICBpZiAobnVsbCA9PT0gKHIgPSBudWxsID09IGEgPyB2b2lkIDAgOiBhLmRhdGEpIHx8IHZvaWQgMCA9PT0gciA/IHZvaWQgMCA6IHIuaXNSYW5rQ2FyZCkge1xuICAgICAgICAgIGkuZ2V0SW5zdGFuY2UoKS5jaGVja1NwZWNpYWxDYXJkKG51bGwsIGUuaW5zLmNvbnRleHQpO1xuICAgICAgICAgIGUuaW5zLmZpbmlzaCgpO1xuICAgICAgICAgIHQoe1xuICAgICAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVyblxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgdCgpO1xuICAgICAgfSBlbHNlIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uVDJHYW1lQ3RybF9nZXRUaWxlVHlwZXMoZSwgdCkge1xuICAgIHZhciBuID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJSYW5rTW9kZWxcIiksXG4gICAgICByID0gbWouZ2V0Q2xhc3NCeU5hbWUoXCJSYW5rVHJhaXRcIik7XG4gICAgaWYgKG4gJiYgcikge1xuICAgICAgci5nZXRJbnN0YW5jZSgpLmp1ZGdlRmlyc3RPcGVuUmFuaygpO1xuICAgICAgbi5nZXRJbnN0YW5jZSgpLmhhc09wZW5pbmdBY3Rpdml0eSgpICYmIChlLmJlZm9yUmV0dXJuVmFsID0gZS5iZWZvclJldHVyblZhbCArIFwiLFwiICsgRVRpbGVUeXBlLlJhbmtDYXJkKTtcbiAgICAgIHQoe1xuICAgICAgICByZXR1cm5WYWw6IGUuYmVmb3JSZXR1cm5WYWxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB0KCk7XG4gIH1cbn0iXX0=