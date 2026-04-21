
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/SelectLockBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9dc03VZAOBBxoGuXOl0jkP9', 'SelectLockBehavior');
// Scripts/base/SelectLockBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectLockBehavior = void 0;
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var ShakeNodeStateAni_1 = require("../tilenodes/fsm/ani/ShakeNodeStateAni");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var SelectLockBehavior = /** @class */ (function (_super) {
    __extends(SelectLockBehavior, _super);
    function SelectLockBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectLockBehavior.prototype.start = function (e) {
        this.finish();
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Wrong);
        var t = this.context.getTileNodeMap(), o = [e.data.tileId], n = e.data.lockCorrelationCard;
        for (var i in n) {
            var l = n[i];
            o.push(l.id);
        }
        for (var s = 0; s < o.length; s++) {
            var c = o[s], u = t.get(c);
            if (u) {
                var p = new ShakeNodeStateAni_1.ShakeNodeStateAni(u.tileNode, u), f = new ShakeNodeStateAni_1.ShakeNodeStateAni(u.shadowNode, u);
                u.attachNodeStateAnis([p, f]);
                u.playAttachEnterAni(null, function () { });
            }
        }
    };
    return SelectLockBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.SelectLockBehavior = SelectLockBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvU2VsZWN0TG9ja0JlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQW9FO0FBQ3BFLDRFQUEyRTtBQUMzRSx5REFBd0Q7QUFDeEQ7SUFBd0Msc0NBQWlCO0lBQXpEOztJQXNCQSxDQUFDO0lBckJDLGtDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUNuQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNqQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2Q7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ1YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsRUFBRTtnQkFDTCxJQUFJLENBQUMsR0FBRyxJQUFJLHFDQUFpQixDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQzFDLENBQUMsR0FBRyxJQUFJLHFDQUFpQixDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLGNBQWEsQ0FBQyxDQUFDLENBQUM7YUFDNUM7U0FDRjtJQUNILENBQUM7SUFDSCx5QkFBQztBQUFELENBdEJBLEFBc0JDLENBdEJ1QyxxQ0FBaUIsR0FzQnhEO0FBdEJZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgeyBTaGFrZU5vZGVTdGF0ZUFuaSB9IGZyb20gJy4uL3RpbGVub2Rlcy9mc20vYW5pL1NoYWtlTm9kZVN0YXRlQW5pJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgU2VsZWN0TG9ja0JlaGF2aW9yIGV4dGVuZHMgR2FtZUJlaGF2aW9yc0Jhc2Uge1xuICBzdGFydChlKSB7XG4gICAgdGhpcy5maW5pc2goKTtcbiAgICBtai5hdWRpb01hbmFnZXIucGxheUVmZmVjdChFQXVkaW9JRC5Xcm9uZyk7XG4gICAgdmFyIHQgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYXAoKSxcbiAgICAgIG8gPSBbZS5kYXRhLnRpbGVJZF0sXG4gICAgICBuID0gZS5kYXRhLmxvY2tDb3JyZWxhdGlvbkNhcmQ7XG4gICAgZm9yICh2YXIgaSBpbiBuKSB7XG4gICAgICB2YXIgbCA9IG5baV07XG4gICAgICBvLnB1c2gobC5pZCk7XG4gICAgfVxuICAgIGZvciAodmFyIHMgPSAwOyBzIDwgby5sZW5ndGg7IHMrKykge1xuICAgICAgdmFyIGMgPSBvW3NdLFxuICAgICAgICB1ID0gdC5nZXQoYyk7XG4gICAgICBpZiAodSkge1xuICAgICAgICB2YXIgcCA9IG5ldyBTaGFrZU5vZGVTdGF0ZUFuaSh1LnRpbGVOb2RlLCB1KSxcbiAgICAgICAgICBmID0gbmV3IFNoYWtlTm9kZVN0YXRlQW5pKHUuc2hhZG93Tm9kZSwgdSk7XG4gICAgICAgIHUuYXR0YWNoTm9kZVN0YXRlQW5pcyhbcCwgZl0pO1xuICAgICAgICB1LnBsYXlBdHRhY2hFbnRlckFuaShudWxsLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19