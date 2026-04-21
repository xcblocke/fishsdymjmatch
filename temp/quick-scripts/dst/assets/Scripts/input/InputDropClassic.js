
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/input/InputDropClassic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '760d6DLHDVAuYOwrQmGCDAa', 'InputDropClassic');
// Scripts/input/InputDropClassic.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorsEnum_1 = require("../constant/BehaviorsEnum");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var AddLevelDropAniEffect_1 = require("../AddLevelDropAniEffect");
var AddLevelDropEffect_1 = require("../AddLevelDropEffect");
var AddLevelEnterAniEffect_1 = require("../AddLevelEnterAniEffect");
var BlockInputRefEffect_1 = require("../BlockInputRefEffect");
var ClassicBeforeFailEffect_1 = require("../ClassicBeforeFailEffect");
var ClassicFailEffect_1 = require("../ClassicFailEffect");
var ClassicReviveEffect_1 = require("../ClassicReviveEffect");
var EmptyEffect_1 = require("../EmptyEffect");
var InputBase_1 = require("../inputbase/InputBase");
var InputDropClassic = /** @class */ (function (_super) {
    __extends(InputDropClassic, _super);
    function InputDropClassic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputDropClassic.prototype.excute = function () {
        var e, t, o = this.gameContext.getGameData().getCurrentBatchId(), n = this.gameContext.classicLevelModifier.tryExcuteDrop() || [], i = [];
        try {
            for (var a = __values(this.gameContext.getTileMapObject().tileObjectMap().values()), l = a.next(); !l.done; l = a.next()) {
                var s = l.value;
                s.batchId == o && i.push(s);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                l && !l.done && (t = a.return) && t.call(a);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        this.resetAllTileGenerated();
        this.pushAddLevelDropEffect(n);
        this.pushAddLevelEnterAniEffect(i);
        this.pushAddLevelDropAniEffect(n);
        this.tryExcuteFail();
    };
    InputDropClassic.prototype.pushAddLevelEnterAniEffect = function (e) {
        var t = new EmptyEffect_1.EmptyEffect({
            inputType: GameInputEnum_1.EGameInputEnum.AddLevelClassic
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
        var o = new AddLevelEnterAniEffect_1.AddLevelEnterAniEffect({
            tileObjects: e
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputDropClassic.prototype.tryExcuteFail = function () {
        if (this.gameContext.getTileMapObject().checkIsDead([]))
            if (this.gameContext.classicReviveChecker.canRevive())
                this.pushReviveEffect();
            else {
                this.gameContext.gameModifier.modifyClassicEnd();
                this.pushClassicBeforeFailEffect();
                this.pushFailEffect();
            }
    };
    InputDropClassic.prototype.pushReviveEffect = function () {
        this.gameContext.getGameData();
        var e = new ClassicReviveEffect_1.ClassicReviveEffect({});
        return this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputDropClassic.prototype.pushClassicBeforeFailEffect = function () {
        var e = new ClassicBeforeFailEffect_1.ClassicBeforeFailEffect({});
        this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputDropClassic.prototype.pushFailEffect = function () {
        var e = new ClassicFailEffect_1.ClassicFailEffect({});
        return this.pushEffect(e, BehaviorsEnum_1.EInsertType.Root);
    };
    InputDropClassic.prototype.pushBlockInputRefEffect = function (e, t) {
        var o = new BlockInputRefEffect_1.BlockInputRefEffect({
            block: e,
            from: t
        });
        this.pushEffect(o, BehaviorsEnum_1.EInsertType.Root);
    };
    InputDropClassic.prototype.pushAddLevelDropEffect = function (e) {
        var t = new AddLevelDropEffect_1.AddLevelDropEffect({
            fallingTiles: e
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Root);
    };
    InputDropClassic.prototype.pushAddLevelDropAniEffect = function (e) {
        var t = new AddLevelDropAniEffect_1.AddLevelDropAniEffect({
            fallingTiles: e,
            isOpenGenerateState: this.gameContext.getOpenGenerateState()
        });
        this.pushEffect(t, BehaviorsEnum_1.EInsertType.Parallel);
    };
    InputDropClassic.prototype.resetAllTileGenerated = function () {
        var e, t, o = this.gameContext.getTileMapObject();
        try {
            for (var n = __values(o.tileObjectMap()), i = n.next(); !i.done; i = n.next()) {
                var l = __read(i.value, 2), s = (l[0], l[1]);
                s.generating && o.setTileGenerated(s, false);
            }
        }
        catch (t) {
            e = {
                error: t
            };
        }
        finally {
            try {
                i && !i.done && (t = n.return) && t.call(n);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
    };
    return InputDropClassic;
}(InputBase_1.InputBase));
exports.default = InputDropClassic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2lucHV0L0lucHV0RHJvcENsYXNzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF3RDtBQUN4RCxxRUFBcUU7QUFDckUsa0VBQWlFO0FBQ2pFLDREQUEyRDtBQUMzRCxvRUFBbUU7QUFDbkUsOERBQTZEO0FBQzdELHNFQUFxRTtBQUNyRSwwREFBeUQ7QUFDekQsOERBQTZEO0FBQzdELDhDQUE2QztBQUM3QyxvREFBbUQ7QUFDbkQ7SUFBOEMsb0NBQVM7SUFBdkQ7O0lBcUdBLENBQUM7SUFwR0MsaUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxFQUN0RCxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQy9ELENBQUMsR0FBRyxFQUFFLENBQUM7UUFDVCxJQUFJO1lBQ0YsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDeEgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QjtTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixDQUFDLEdBQUc7Z0JBQ0YsS0FBSyxFQUFFLENBQUM7YUFDVCxDQUFDO1NBQ0g7Z0JBQVM7WUFD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QUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtJQUNILENBQUM7SUFDSCx1QkFBQztBQUFELENBckdBLEFBcUdDLENBckc2QyxxQkFBUyxHQXFHdEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFSW5zZXJ0VHlwZSB9IGZyb20gJy4uL2NvbnN0YW50L0JlaGF2aW9yc0VudW0nO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuLi9zaW11bGF0b3IvY29uc3RhbnQvR2FtZUlucHV0RW51bSc7XG5pbXBvcnQgeyBBZGRMZXZlbERyb3BBbmlFZmZlY3QgfSBmcm9tICcuLi9BZGRMZXZlbERyb3BBbmlFZmZlY3QnO1xuaW1wb3J0IHsgQWRkTGV2ZWxEcm9wRWZmZWN0IH0gZnJvbSAnLi4vQWRkTGV2ZWxEcm9wRWZmZWN0JztcbmltcG9ydCB7IEFkZExldmVsRW50ZXJBbmlFZmZlY3QgfSBmcm9tICcuLi9BZGRMZXZlbEVudGVyQW5pRWZmZWN0JztcbmltcG9ydCB7IEJsb2NrSW5wdXRSZWZFZmZlY3QgfSBmcm9tICcuLi9CbG9ja0lucHV0UmVmRWZmZWN0JztcbmltcG9ydCB7IENsYXNzaWNCZWZvcmVGYWlsRWZmZWN0IH0gZnJvbSAnLi4vQ2xhc3NpY0JlZm9yZUZhaWxFZmZlY3QnO1xuaW1wb3J0IHsgQ2xhc3NpY0ZhaWxFZmZlY3QgfSBmcm9tICcuLi9DbGFzc2ljRmFpbEVmZmVjdCc7XG5pbXBvcnQgeyBDbGFzc2ljUmV2aXZlRWZmZWN0IH0gZnJvbSAnLi4vQ2xhc3NpY1Jldml2ZUVmZmVjdCc7XG5pbXBvcnQgeyBFbXB0eUVmZmVjdCB9IGZyb20gJy4uL0VtcHR5RWZmZWN0JztcbmltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4uL2lucHV0YmFzZS9JbnB1dEJhc2UnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXREcm9wQ2xhc3NpYyBleHRlbmRzIElucHV0QmFzZSB7XG4gIGV4Y3V0ZSgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvID0gdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLmdldEN1cnJlbnRCYXRjaElkKCksXG4gICAgICBuID0gdGhpcy5nYW1lQ29udGV4dC5jbGFzc2ljTGV2ZWxNb2RpZmllci50cnlFeGN1dGVEcm9wKCkgfHwgW10sXG4gICAgICBpID0gW107XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIGEgPSBfX3ZhbHVlcyh0aGlzLmdhbWVDb250ZXh0LmdldFRpbGVNYXBPYmplY3QoKS50aWxlT2JqZWN0TWFwKCkudmFsdWVzKCkpLCBsID0gYS5uZXh0KCk7ICFsLmRvbmU7IGwgPSBhLm5leHQoKSkge1xuICAgICAgICB2YXIgcyA9IGwudmFsdWU7XG4gICAgICAgIHMuYmF0Y2hJZCA9PSBvICYmIGkucHVzaChzKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBlID0ge1xuICAgICAgICBlcnJvcjogdFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbCAmJiAhbC5kb25lICYmICh0ID0gYS5yZXR1cm4pICYmIHQuY2FsbChhKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlc2V0QWxsVGlsZUdlbmVyYXRlZCgpO1xuICAgIHRoaXMucHVzaEFkZExldmVsRHJvcEVmZmVjdChuKTtcbiAgICB0aGlzLnB1c2hBZGRMZXZlbEVudGVyQW5pRWZmZWN0KGkpO1xuICAgIHRoaXMucHVzaEFkZExldmVsRHJvcEFuaUVmZmVjdChuKTtcbiAgICB0aGlzLnRyeUV4Y3V0ZUZhaWwoKTtcbiAgfVxuICBwdXNoQWRkTGV2ZWxFbnRlckFuaUVmZmVjdChlKSB7XG4gICAgdmFyIHQgPSBuZXcgRW1wdHlFZmZlY3Qoe1xuICAgICAgaW5wdXRUeXBlOiBFR2FtZUlucHV0RW51bS5BZGRMZXZlbENsYXNzaWNcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuUm9vdCk7XG4gICAgdmFyIG8gPSBuZXcgQWRkTGV2ZWxFbnRlckFuaUVmZmVjdCh7XG4gICAgICB0aWxlT2JqZWN0czogZVxuICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5QYXJhbGxlbCk7XG4gIH1cbiAgdHJ5RXhjdXRlRmFpbCgpIHtcbiAgICBpZiAodGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCkuY2hlY2tJc0RlYWQoW10pKSBpZiAodGhpcy5nYW1lQ29udGV4dC5jbGFzc2ljUmV2aXZlQ2hlY2tlci5jYW5SZXZpdmUoKSkgdGhpcy5wdXNoUmV2aXZlRWZmZWN0KCk7ZWxzZSB7XG4gICAgICB0aGlzLmdhbWVDb250ZXh0LmdhbWVNb2RpZmllci5tb2RpZnlDbGFzc2ljRW5kKCk7XG4gICAgICB0aGlzLnB1c2hDbGFzc2ljQmVmb3JlRmFpbEVmZmVjdCgpO1xuICAgICAgdGhpcy5wdXNoRmFpbEVmZmVjdCgpO1xuICAgIH1cbiAgfVxuICBwdXNoUmV2aXZlRWZmZWN0KCkge1xuICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKTtcbiAgICB2YXIgZSA9IG5ldyBDbGFzc2ljUmV2aXZlRWZmZWN0KHt9KTtcbiAgICByZXR1cm4gdGhpcy5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHB1c2hDbGFzc2ljQmVmb3JlRmFpbEVmZmVjdCgpIHtcbiAgICB2YXIgZSA9IG5ldyBDbGFzc2ljQmVmb3JlRmFpbEVmZmVjdCh7fSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHB1c2hGYWlsRWZmZWN0KCkge1xuICAgIHZhciBlID0gbmV3IENsYXNzaWNGYWlsRWZmZWN0KHt9KTtcbiAgICByZXR1cm4gdGhpcy5wdXNoRWZmZWN0KGUsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHB1c2hCbG9ja0lucHV0UmVmRWZmZWN0KGUsIHQpIHtcbiAgICB2YXIgbyA9IG5ldyBCbG9ja0lucHV0UmVmRWZmZWN0KHtcbiAgICAgIGJsb2NrOiBlLFxuICAgICAgZnJvbTogdFxuICAgIH0pO1xuICAgIHRoaXMucHVzaEVmZmVjdChvLCBFSW5zZXJ0VHlwZS5Sb290KTtcbiAgfVxuICBwdXNoQWRkTGV2ZWxEcm9wRWZmZWN0KGUpIHtcbiAgICB2YXIgdCA9IG5ldyBBZGRMZXZlbERyb3BFZmZlY3Qoe1xuICAgICAgZmFsbGluZ1RpbGVzOiBlXG4gICAgfSk7XG4gICAgdGhpcy5wdXNoRWZmZWN0KHQsIEVJbnNlcnRUeXBlLlJvb3QpO1xuICB9XG4gIHB1c2hBZGRMZXZlbERyb3BBbmlFZmZlY3QoZSkge1xuICAgIHZhciB0ID0gbmV3IEFkZExldmVsRHJvcEFuaUVmZmVjdCh7XG4gICAgICBmYWxsaW5nVGlsZXM6IGUsXG4gICAgICBpc09wZW5HZW5lcmF0ZVN0YXRlOiB0aGlzLmdhbWVDb250ZXh0LmdldE9wZW5HZW5lcmF0ZVN0YXRlKClcbiAgICB9KTtcbiAgICB0aGlzLnB1c2hFZmZlY3QodCwgRUluc2VydFR5cGUuUGFyYWxsZWwpO1xuICB9XG4gIHJlc2V0QWxsVGlsZUdlbmVyYXRlZCgpIHtcbiAgICB2YXIgZSxcbiAgICAgIHQsXG4gICAgICBvID0gdGhpcy5nYW1lQ29udGV4dC5nZXRUaWxlTWFwT2JqZWN0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIG4gPSBfX3ZhbHVlcyhvLnRpbGVPYmplY3RNYXAoKSksIGkgPSBuLm5leHQoKTsgIWkuZG9uZTsgaSA9IG4ubmV4dCgpKSB7XG4gICAgICAgIHZhciBsID0gX19yZWFkKGkudmFsdWUsIDIpLFxuICAgICAgICAgIHMgPSAobFswXSwgbFsxXSk7XG4gICAgICAgIHMuZ2VuZXJhdGluZyAmJiBvLnNldFRpbGVHZW5lcmF0ZWQocywgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGUgPSB7XG4gICAgICAgIGVycm9yOiB0XG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpICYmICFpLmRvbmUgJiYgKHQgPSBuLnJldHVybikgJiYgdC5jYWxsKG4pO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19