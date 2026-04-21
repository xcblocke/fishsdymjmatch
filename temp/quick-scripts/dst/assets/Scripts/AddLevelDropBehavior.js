
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/AddLevelDropBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cd13bGTDtGJqDJT/9JVg/f', 'AddLevelDropBehavior');
// Scripts/AddLevelDropBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLevelDropBehavior = void 0;
var UserModel_1 = require("./gamePlay/user/UserModel");
var GameInputEnum_1 = require("./simulator/constant/GameInputEnum");
var GameInteraction_1 = require("./GameInteraction/GameInteraction");
var GameBehaviorsBase_1 = require("./base/GameBehaviorsBase");
var AddLevelDropBehavior = /** @class */ (function (_super) {
    __extends(AddLevelDropBehavior, _super);
    function AddLevelDropBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddLevelDropBehavior.prototype.start = function (e) {
        var t, o, n, i, a, l, s = e.data.fallingTiles, c = this.context.getTileNodeManager(), u = [];
        try {
            for (var p = __values(s), f = p.next(); !f.done; f = p.next()) {
                var d = f.value, h = d.tile;
                c.handleFallingTileNode(h, d.newLayer, d.indexInLayer);
                u.push(d.newLayer);
            }
        }
        catch (e) {
            t = {
                error: e
            };
        }
        finally {
            try {
                f && !f.done && (o = p.return) && o.call(p);
            }
            finally {
                if (t)
                    throw t.error;
            }
        }
        try {
            for (var y = __values(u), m = y.next(); !m.done; m = y.next()) {
                var v = m.value;
                c.updateLayerSiblingIndexes(v);
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                m && !m.done && (i = y.return) && i.call(y);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
        try {
            for (var g = __values(u), _ = g.next(); !_.done; _ = g.next()) {
                v = _.value;
                c.updateLayerShadowSize(v);
            }
        }
        catch (e) {
            a = {
                error: e
            };
        }
        finally {
            try {
                _ && !_.done && (l = g.return) && l.call(g);
            }
            finally {
                if (a)
                    throw a.error;
            }
        }
        c.destoryEmptyLayerNodes();
        this.refreshCardLockDarken();
        this.finish();
    };
    AddLevelDropBehavior.prototype.refreshCardLockDarken = function () {
        UserModel_1.default.getInstance().isLockHighlightEnabled() && GameInteraction_1.GameInteraction.input({
            inputType: GameInputEnum_1.EGameInputEnum.RefreshCardLockDarken,
            isShowAni: false
        });
    };
    return AddLevelDropBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.AddLevelDropBehavior = AddLevelDropBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0FkZExldmVsRHJvcEJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWtEO0FBQ2xELG9FQUFvRTtBQUNwRSxxRUFBb0U7QUFDcEUsOERBQTZEO0FBQzdEO0lBQTBDLHdDQUFpQjtJQUEzRDs7SUF1RUEsQ0FBQztJQXRFQyxvQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxFQUNILENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUN2QixDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUNyQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1QsSUFBSTtZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEI7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEM7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDWixDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUI7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxHQUFHO2dCQUNGLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztTQUNIO2dCQUFTO1lBQ1IsSUFBSTtnQkFDRixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdDO29CQUFTO2dCQUNSLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEI7U0FDRjtRQUNELENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQ0Qsb0RBQXFCLEdBQXJCO1FBQ0UsbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLGlDQUFlLENBQUMsS0FBSyxDQUFDO1lBQ3hFLFNBQVMsRUFBRSw4QkFBYyxDQUFDLHFCQUFxQjtZQUMvQyxTQUFTLEVBQUUsS0FBSztTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQXZFQSxBQXVFQyxDQXZFeUMscUNBQWlCLEdBdUUxRDtBQXZFWSxvREFBb0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlck1vZGVsIGZyb20gJy4vZ2FtZVBsYXkvdXNlci9Vc2VyTW9kZWwnO1xuaW1wb3J0IHsgRUdhbWVJbnB1dEVudW0gfSBmcm9tICcuL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEdhbWVJbnRlcmFjdGlvbiB9IGZyb20gJy4vR2FtZUludGVyYWN0aW9uL0dhbWVJbnRlcmFjdGlvbic7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vYmFzZS9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgQWRkTGV2ZWxEcm9wQmVoYXZpb3IgZXh0ZW5kcyBHYW1lQmVoYXZpb3JzQmFzZSB7XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8sXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIGEsXG4gICAgICBsLFxuICAgICAgcyA9IGUuZGF0YS5mYWxsaW5nVGlsZXMsXG4gICAgICBjID0gdGhpcy5jb250ZXh0LmdldFRpbGVOb2RlTWFuYWdlcigpLFxuICAgICAgdSA9IFtdO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBwID0gX192YWx1ZXMocyksIGYgPSBwLm5leHQoKTsgIWYuZG9uZTsgZiA9IHAubmV4dCgpKSB7XG4gICAgICAgIHZhciBkID0gZi52YWx1ZSxcbiAgICAgICAgICBoID0gZC50aWxlO1xuICAgICAgICBjLmhhbmRsZUZhbGxpbmdUaWxlTm9kZShoLCBkLm5ld0xheWVyLCBkLmluZGV4SW5MYXllcik7XG4gICAgICAgIHUucHVzaChkLm5ld0xheWVyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0ID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZiAmJiAhZi5kb25lICYmIChvID0gcC5yZXR1cm4pICYmIG8uY2FsbChwKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmICh0KSB0aHJvdyB0LmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgeSA9IF9fdmFsdWVzKHUpLCBtID0geS5uZXh0KCk7ICFtLmRvbmU7IG0gPSB5Lm5leHQoKSkge1xuICAgICAgICB2YXIgdiA9IG0udmFsdWU7XG4gICAgICAgIGMudXBkYXRlTGF5ZXJTaWJsaW5nSW5kZXhlcyh2KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuID0ge1xuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbSAmJiAhbS5kb25lICYmIChpID0geS5yZXR1cm4pICYmIGkuY2FsbCh5KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChuKSB0aHJvdyBuLmVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgZyA9IF9fdmFsdWVzKHUpLCBfID0gZy5uZXh0KCk7ICFfLmRvbmU7IF8gPSBnLm5leHQoKSkge1xuICAgICAgICB2ID0gXy52YWx1ZTtcbiAgICAgICAgYy51cGRhdGVMYXllclNoYWRvd1NpemUodik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYSA9IHtcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIF8gJiYgIV8uZG9uZSAmJiAobCA9IGcucmV0dXJuKSAmJiBsLmNhbGwoZyk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoYSkgdGhyb3cgYS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gICAgYy5kZXN0b3J5RW1wdHlMYXllck5vZGVzKCk7XG4gICAgdGhpcy5yZWZyZXNoQ2FyZExvY2tEYXJrZW4oKTtcbiAgICB0aGlzLmZpbmlzaCgpO1xuICB9XG4gIHJlZnJlc2hDYXJkTG9ja0RhcmtlbigpIHtcbiAgICBVc2VyTW9kZWwuZ2V0SW5zdGFuY2UoKS5pc0xvY2tIaWdobGlnaHRFbmFibGVkKCkgJiYgR2FtZUludGVyYWN0aW9uLmlucHV0KHtcbiAgICAgIGlucHV0VHlwZTogRUdhbWVJbnB1dEVudW0uUmVmcmVzaENhcmRMb2NrRGFya2VuLFxuICAgICAgaXNTaG93QW5pOiBmYWxzZVxuICAgIH0pO1xuICB9XG59Il19