
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/InputTile2MagnetMerge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7af75Te7FPwaG2ShosQYzh', 'InputTile2MagnetMerge');
// Scripts/InputTile2MagnetMerge.ts

Object.defineProperty(exports, "__esModule", { value: true });
var InputBase_1 = require("./inputbase/InputBase");
var GameTypeEnums_1 = require("./core/simulator/constant/GameTypeEnums");
var DGameUseItem_1 = require("./gamePlay/dot/DGameUseItem");
var DGameGetItem_1 = require("./gamePlay/dot/DGameGetItem");
var ClearHelper_1 = require("./ClearHelper");
var InputTile2MagnetMerge = /** @class */ (function (_super) {
    __extends(InputTile2MagnetMerge, _super);
    function InputTile2MagnetMerge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTile2MagnetMerge.prototype.excute = function (e) {
        var t, o;
        if (null === (t = this.gameContext.tile2ResultChecker) || void 0 === t || !t.checkIsDead()) {
            var n = e.magnetPair || 1, i = null === (o = this.gameContext.tile2MagnetChecker) || void 0 === o ? void 0 : o.findMagnetTiles(n);
            if (i && 0 !== i.length) {
                var r = i.slice();
                this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Magnet, 1);
                DGameGetItem_1.DotGameGetItem.dot(this.gameContext, {
                    itemId: GameTypeEnums_1.EItemId.Magnet,
                    afterNum: 1,
                    number: 1,
                    reasonId: GameTypeEnums_1.EGetItemReasonId.AdReward,
                    reasonInfo: "磁铁激励"
                });
                this.gameContext.getGameData().recordToolUse(GameTypeEnums_1.EItemId.Magnet);
                this.gameContext.getGameData().toolChange(GameTypeEnums_1.EItemId.Magnet, -1);
                this.gameContext.tile2DotTrackerModifier.recordUseMagnet(i);
                DGameUseItem_1.DotGameUseItem.dot(this.gameContext, {
                    itemId: GameTypeEnums_1.EItemId.Magnet,
                    afterNum: 0,
                    beforeNum: 1
                });
                ClearHelper_1.default.runClear(this.gameContext, e, this, {
                    tileIds: i,
                    outTiles: r,
                    magnetPair: n
                });
            }
        }
    };
    return InputTile2MagnetMerge;
}(InputBase_1.InputBase));
exports.default = InputTile2MagnetMerge;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0lucHV0VGlsZTJNYWduZXRNZXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELHlFQUFvRjtBQUNwRiw0REFBNkQ7QUFDN0QsNERBQTZEO0FBQzdELDZDQUF3QztBQUN4QztJQUFtRCx5Q0FBUztJQUE1RDs7SUFnQ0EsQ0FBQztJQS9CQyxzQ0FBTSxHQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDMUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQ3ZCLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELDZCQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ25DLE1BQU0sRUFBRSx1QkFBTyxDQUFDLE1BQU07b0JBQ3RCLFFBQVEsRUFBRSxDQUFDO29CQUNYLE1BQU0sRUFBRSxDQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0IsQ0FBQyxRQUFRO29CQUNuQyxVQUFVLEVBQUUsTUFBTTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDLHVCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCw2QkFBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNuQyxNQUFNLEVBQUUsdUJBQU8sQ0FBQyxNQUFNO29CQUN0QixRQUFRLEVBQUUsQ0FBQztvQkFDWCxTQUFTLEVBQUUsQ0FBQztpQkFDYixDQUFDLENBQUM7Z0JBQ0gscUJBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFO29CQUM5QyxPQUFPLEVBQUUsQ0FBQztvQkFDVixRQUFRLEVBQUUsQ0FBQztvQkFDWCxVQUFVLEVBQUUsQ0FBQztpQkFDZCxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsQ0FoQ2tELHFCQUFTLEdBZ0MzRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0QmFzZSB9IGZyb20gJy4vaW5wdXRiYXNlL0lucHV0QmFzZSc7XG5pbXBvcnQgeyBFSXRlbUlkLCBFR2V0SXRlbVJlYXNvbklkIH0gZnJvbSAnLi9jb3JlL3NpbXVsYXRvci9jb25zdGFudC9HYW1lVHlwZUVudW1zJztcbmltcG9ydCB7IERvdEdhbWVVc2VJdGVtIH0gZnJvbSAnLi9nYW1lUGxheS9kb3QvREdhbWVVc2VJdGVtJztcbmltcG9ydCB7IERvdEdhbWVHZXRJdGVtIH0gZnJvbSAnLi9nYW1lUGxheS9kb3QvREdhbWVHZXRJdGVtJztcbmltcG9ydCBDbGVhckhlbHBlciBmcm9tICcuL0NsZWFySGVscGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0VGlsZTJNYWduZXRNZXJnZSBleHRlbmRzIElucHV0QmFzZSB7XG4gIGV4Y3V0ZShlKSB7XG4gICAgdmFyIHQsIG87XG4gICAgaWYgKG51bGwgPT09ICh0ID0gdGhpcy5nYW1lQ29udGV4dC50aWxlMlJlc3VsdENoZWNrZXIpIHx8IHZvaWQgMCA9PT0gdCB8fCAhdC5jaGVja0lzRGVhZCgpKSB7XG4gICAgICB2YXIgbiA9IGUubWFnbmV0UGFpciB8fCAxLFxuICAgICAgICBpID0gbnVsbCA9PT0gKG8gPSB0aGlzLmdhbWVDb250ZXh0LnRpbGUyTWFnbmV0Q2hlY2tlcikgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby5maW5kTWFnbmV0VGlsZXMobik7XG4gICAgICBpZiAoaSAmJiAwICE9PSBpLmxlbmd0aCkge1xuICAgICAgICB2YXIgciA9IGkuc2xpY2UoKTtcbiAgICAgICAgdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLnRvb2xDaGFuZ2UoRUl0ZW1JZC5NYWduZXQsIDEpO1xuICAgICAgICBEb3RHYW1lR2V0SXRlbS5kb3QodGhpcy5nYW1lQ29udGV4dCwge1xuICAgICAgICAgIGl0ZW1JZDogRUl0ZW1JZC5NYWduZXQsXG4gICAgICAgICAgYWZ0ZXJOdW06IDEsXG4gICAgICAgICAgbnVtYmVyOiAxLFxuICAgICAgICAgIHJlYXNvbklkOiBFR2V0SXRlbVJlYXNvbklkLkFkUmV3YXJkLFxuICAgICAgICAgIHJlYXNvbkluZm86IFwi56OB6ZOB5r+A5YqxXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZ2FtZUNvbnRleHQuZ2V0R2FtZURhdGEoKS5yZWNvcmRUb29sVXNlKEVJdGVtSWQuTWFnbmV0KTtcbiAgICAgICAgdGhpcy5nYW1lQ29udGV4dC5nZXRHYW1lRGF0YSgpLnRvb2xDaGFuZ2UoRUl0ZW1JZC5NYWduZXQsIC0xKTtcbiAgICAgICAgdGhpcy5nYW1lQ29udGV4dC50aWxlMkRvdFRyYWNrZXJNb2RpZmllci5yZWNvcmRVc2VNYWduZXQoaSk7XG4gICAgICAgIERvdEdhbWVVc2VJdGVtLmRvdCh0aGlzLmdhbWVDb250ZXh0LCB7XG4gICAgICAgICAgaXRlbUlkOiBFSXRlbUlkLk1hZ25ldCxcbiAgICAgICAgICBhZnRlck51bTogMCxcbiAgICAgICAgICBiZWZvcmVOdW06IDFcbiAgICAgICAgfSk7XG4gICAgICAgIENsZWFySGVscGVyLnJ1bkNsZWFyKHRoaXMuZ2FtZUNvbnRleHQsIGUsIHRoaXMsIHtcbiAgICAgICAgICB0aWxlSWRzOiBpLFxuICAgICAgICAgIG91dFRpbGVzOiByLFxuICAgICAgICAgIG1hZ25ldFBhaXI6IG5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19