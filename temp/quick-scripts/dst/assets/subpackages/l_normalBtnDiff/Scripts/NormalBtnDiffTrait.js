
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_normalBtnDiff/Scripts/NormalBtnDiffTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3eceZFuR5LYIFwHrSrBKyD', 'NormalBtnDiffTrait');
// subpackages/l_normalBtnDiff/Scripts/NormalBtnDiffTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ExtractTool_1 = require("../../../Scripts/core/extractQuestion/ExtractTool");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var NormalBtnEnum_1 = require("./NormalBtnEnum");
var NormalBtnDiffUI_1 = require("./NormalBtnDiffUI");
var NormalBtnDiffTrait = /** @class */ (function (_super) {
    __extends(NormalBtnDiffTrait, _super);
    function NormalBtnDiffTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalBtnDiffTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.isLocalEmpty(this.localData.lastLevelDiff) && (this.localData.lastLevelDiff = NormalBtnEnum_1.ELevelDiff.Normal);
        this.registerEvent([{
                event: "GameMod_modifyWinTile2",
                type: 2
            }]);
    };
    NormalBtnDiffTrait.prototype.isLocalEmpty = function (t) {
        return null == t || "" === t;
    };
    NormalBtnDiffTrait.prototype.onHallCtl_initRes = function (t, e) {
        t.ins.addPreloadRes("Prefab", NormalBtnDiffUI_1.default.getUrl());
        e();
    };
    NormalBtnDiffTrait.prototype.onHallNmlBtn_updateUI = function (t, e) {
        var o = cc.find("NormalBtnDiff", t.ins.node);
        if (!cc.isValid(o)) {
            o = t.ins.createUISync(NormalBtnDiffUI_1.default);
            if (cc.isValid(o)) {
                t.ins.node.addChild(o);
                o.setPosition(0, 0);
                o.setSiblingIndex(1);
            }
        }
        if (cc.isValid(o)) {
            var r = o.getComponent(NormalBtnDiffUI_1.default), i = cc.find("BgWood", t.ins.node);
            cc.isValid(i) && (i.active = true);
            if (cc.isValid(r)) {
                var n = this.localData.lastLevelDiff;
                r.updateDiff(n) && n != NormalBtnEnum_1.ELevelDiff.Normal && (i.active = false);
            }
        }
        e();
    };
    NormalBtnDiffTrait.prototype.onGameMod_modifyWin = function (t, e) {
        this.recordDiff(t.ins);
        e();
    };
    NormalBtnDiffTrait.prototype.onGameMod_modifyWinTile2 = function (t, e) {
        this.recordDiff(t.ins);
        e();
    };
    NormalBtnDiffTrait.prototype.recordDiff = function (t) {
        var e = t.context.getGameData().getLevelId(), o = ExtractTool_1.default.getInstance().isExpertUI(e), r = ExtractTool_1.default.getInstance().isHardUI(e);
        this.localData.lastLevelDiff = o ? NormalBtnEnum_1.ELevelDiff.Expert : r ? NormalBtnEnum_1.ELevelDiff.Hard : NormalBtnEnum_1.ELevelDiff.Normal;
    };
    NormalBtnDiffTrait.traitKey = "NormalBtnDiff";
    NormalBtnDiffTrait = __decorate([
        mj.trait,
        mj.class("NormalBtnDiff")
    ], NormalBtnDiffTrait);
    return NormalBtnDiffTrait;
}(Trait_1.default));
exports.default = NormalBtnDiffTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX25vcm1hbEJ0bkRpZmYvU2NyaXB0cy9Ob3JtYWxCdG5EaWZmVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlGQUE0RTtBQUM1RSxnRUFBMkQ7QUFDM0QsaURBQTZDO0FBQzdDLHFEQUFnRDtBQUdoRDtJQUFnRCxzQ0FBSztJQUFyRDs7SUFvREEsQ0FBQztJQWxEQyxtQ0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRywwQkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLHdCQUF3QjtnQkFDL0IsSUFBSSxFQUFFLENBQUM7YUFDUixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCx5Q0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNaLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCw4Q0FBaUIsR0FBakIsVUFBa0IsQ0FBQyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLHlCQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxrREFBcUIsR0FBckIsVUFBc0IsQ0FBQyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBQyxDQUFDO1lBQ3hDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDakIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QjtTQUNGO1FBQ0QsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMseUJBQWUsQ0FBQyxFQUNyQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO2dCQUNyQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSwwQkFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDakU7U0FDRjtRQUNELENBQUMsRUFBRSxDQUFDO0lBQ04sQ0FBQztJQUNELGdEQUFtQixHQUFuQixVQUFvQixDQUFDLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCxxREFBd0IsR0FBeEIsVUFBeUIsQ0FBQyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFFLENBQUM7SUFDTixDQUFDO0lBQ0QsdUNBQVUsR0FBVixVQUFXLENBQUM7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUMxQyxDQUFDLEdBQUcscUJBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQzNDLENBQUMsR0FBRyxxQkFBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLDBCQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLDBCQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywwQkFBVSxDQUFDLE1BQU0sQ0FBQztJQUNqRyxDQUFDO0lBbERNLDJCQUFRLEdBQUcsZUFBZSxDQUFDO0lBRGYsa0JBQWtCO1FBRnRDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7T0FDTCxrQkFBa0IsQ0FvRHRDO0lBQUQseUJBQUM7Q0FwREQsQUFvREMsQ0FwRCtDLGVBQUssR0FvRHBEO2tCQXBEb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4dHJhY3RUb29sIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvY29yZS9leHRyYWN0UXVlc3Rpb24vRXh0cmFjdFRvb2wnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IEVMZXZlbERpZmYgfSBmcm9tICcuL05vcm1hbEJ0bkVudW0nO1xuaW1wb3J0IE5vcm1hbEJ0bkRpZmZVSSBmcm9tICcuL05vcm1hbEJ0bkRpZmZVSSc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk5vcm1hbEJ0bkRpZmZcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vcm1hbEJ0bkRpZmZUcmFpdCBleHRlbmRzIFRyYWl0IHtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJOb3JtYWxCdG5EaWZmXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmlzTG9jYWxFbXB0eSh0aGlzLmxvY2FsRGF0YS5sYXN0TGV2ZWxEaWZmKSAmJiAodGhpcy5sb2NhbERhdGEubGFzdExldmVsRGlmZiA9IEVMZXZlbERpZmYuTm9ybWFsKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoW3tcbiAgICAgIGV2ZW50OiBcIkdhbWVNb2RfbW9kaWZ5V2luVGlsZTJcIixcbiAgICAgIHR5cGU6IDJcbiAgICB9XSk7XG4gIH1cbiAgaXNMb2NhbEVtcHR5KHQpIHtcbiAgICByZXR1cm4gbnVsbCA9PSB0IHx8IFwiXCIgPT09IHQ7XG4gIH1cbiAgb25IYWxsQ3RsX2luaXRSZXModCwgZSkge1xuICAgIHQuaW5zLmFkZFByZWxvYWRSZXMoXCJQcmVmYWJcIiwgTm9ybWFsQnRuRGlmZlVJLmdldFVybCgpKTtcbiAgICBlKCk7XG4gIH1cbiAgb25IYWxsTm1sQnRuX3VwZGF0ZVVJKHQsIGUpIHtcbiAgICB2YXIgbyA9IGNjLmZpbmQoXCJOb3JtYWxCdG5EaWZmXCIsIHQuaW5zLm5vZGUpO1xuICAgIGlmICghY2MuaXNWYWxpZChvKSkge1xuICAgICAgbyA9IHQuaW5zLmNyZWF0ZVVJU3luYyhOb3JtYWxCdG5EaWZmVUkpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQobykpIHtcbiAgICAgICAgdC5pbnMubm9kZS5hZGRDaGlsZChvKTtcbiAgICAgICAgby5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgby5zZXRTaWJsaW5nSW5kZXgoMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjYy5pc1ZhbGlkKG8pKSB7XG4gICAgICB2YXIgciA9IG8uZ2V0Q29tcG9uZW50KE5vcm1hbEJ0bkRpZmZVSSksXG4gICAgICAgIGkgPSBjYy5maW5kKFwiQmdXb29kXCIsIHQuaW5zLm5vZGUpO1xuICAgICAgY2MuaXNWYWxpZChpKSAmJiAoaS5hY3RpdmUgPSB0cnVlKTtcbiAgICAgIGlmIChjYy5pc1ZhbGlkKHIpKSB7XG4gICAgICAgIHZhciBuID0gdGhpcy5sb2NhbERhdGEubGFzdExldmVsRGlmZjtcbiAgICAgICAgci51cGRhdGVEaWZmKG4pICYmIG4gIT0gRUxldmVsRGlmZi5Ob3JtYWwgJiYgKGkuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBlKCk7XG4gIH1cbiAgb25HYW1lTW9kX21vZGlmeVdpbih0LCBlKSB7XG4gICAgdGhpcy5yZWNvcmREaWZmKHQuaW5zKTtcbiAgICBlKCk7XG4gIH1cbiAgb25HYW1lTW9kX21vZGlmeVdpblRpbGUyKHQsIGUpIHtcbiAgICB0aGlzLnJlY29yZERpZmYodC5pbnMpO1xuICAgIGUoKTtcbiAgfVxuICByZWNvcmREaWZmKHQpIHtcbiAgICB2YXIgZSA9IHQuY29udGV4dC5nZXRHYW1lRGF0YSgpLmdldExldmVsSWQoKSxcbiAgICAgIG8gPSBFeHRyYWN0VG9vbC5nZXRJbnN0YW5jZSgpLmlzRXhwZXJ0VUkoZSksXG4gICAgICByID0gRXh0cmFjdFRvb2wuZ2V0SW5zdGFuY2UoKS5pc0hhcmRVSShlKTtcbiAgICB0aGlzLmxvY2FsRGF0YS5sYXN0TGV2ZWxEaWZmID0gbyA/IEVMZXZlbERpZmYuRXhwZXJ0IDogciA/IEVMZXZlbERpZmYuSGFyZCA6IEVMZXZlbERpZmYuTm9ybWFsO1xuICB9XG59Il19