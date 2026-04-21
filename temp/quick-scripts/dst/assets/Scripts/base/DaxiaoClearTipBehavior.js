
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/DaxiaoClearTipBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b702ZXa3pH9L7hwOwj46dg', 'DaxiaoClearTipBehavior');
// Scripts/base/DaxiaoClearTipBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.DaxiaoClearTipBehavior = void 0;
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var BaseTileNode_1 = require("../BaseTileNode");
var DaxiaoAnimPlayer_1 = require("../anim/DaxiaoAnimPlayer");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var DaxiaoClearTipBehavior = /** @class */ (function (_super) {
    __extends(DaxiaoClearTipBehavior, _super);
    function DaxiaoClearTipBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DaxiaoClearTipBehavior.prototype.start = function (e) {
        e.data.tileIds;
        var t = e.data.finalMatchInfos, o = DaxiaoAnimPlayer_1.DaxiaoAnimPlayer.configBase.resources.flowLight;
        this.showTip(t, o.path, o.bundle);
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    DaxiaoClearTipBehavior.prototype.showTip = function (e, t, o) {
        var n, i;
        try {
            for (var r = __values(e), l = r.next(); !l.done; l = r.next()) {
                var s = l.value;
                if (s.isFix) {
                    var c = this.context.getTileNodeMap().get(s.tileId1), u = this.context.getTileNodeMap().get(s.tileId2);
                    this.showDaxiaoClearTip(c, t, o);
                    this.showDaxiaoClearTip(u, t, o);
                }
                else {
                    c = this.context.getTileNodeMap().get(s.tileId1);
                    this.showDaxiaoClearTip(c, t, o);
                }
            }
        }
        catch (e) {
            n = {
                error: e
            };
        }
        finally {
            try {
                l && !l.done && (i = r.return) && i.call(r);
            }
            finally {
                if (n)
                    throw n.error;
            }
        }
    };
    DaxiaoClearTipBehavior.prototype.showDaxiaoClearTip = function (e, t, o) {
        if (e && cc.isValid(e.tileNode)) {
            var n = e.tileNode;
            if (!n.getChildByName("DaxiaoCardTipNode")) {
                var i = new cc.Node();
                i.name = "DaxiaoCardTipNode";
                n.addChild(i);
                i.zIndex = BaseTileNode_1.TileNodeZIndexMap[BaseTileNode_1.ETileNodeNames.imgCard] + 1;
                i.scale = 1 * e.info.tileObject.layoutScale;
                BaseSpine_1.default.refreshWithNode(i, t, o).setAnimation("init", -1, null, false);
            }
        }
    };
    __decorate([
        mj.traitEvent("DaxiaoTipBhr_showTip")
    ], DaxiaoClearTipBehavior.prototype, "showTip", null);
    return DaxiaoClearTipBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.DaxiaoClearTipBehavior = DaxiaoClearTipBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvRGF4aWFvQ2xlYXJUaXBCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCxxRUFBb0U7QUFDcEUsZ0RBQW9FO0FBQ3BFLDZEQUE0RDtBQUM1RCx5REFBd0Q7QUFDeEQ7SUFBNEMsMENBQWlCO0lBQTdEOztJQWlEQSxDQUFDO0lBaERDLHNDQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFDNUIsQ0FBQyxHQUFHLG1DQUFnQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsd0NBQU8sR0FBUCxVQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNULElBQUk7WUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNoQixJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUU7b0JBQ1gsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUNsRCxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNuRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNMLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNsQzthQUNGO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLENBQUMsR0FBRztnQkFDRixLQUFLLEVBQUUsQ0FBQzthQUNULENBQUM7U0FDSDtnQkFBUztZQUNSLElBQUk7Z0JBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztvQkFBUztnQkFDUixJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsbURBQWtCLEdBQWxCLFVBQW1CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ25CLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixDQUFDLENBQUMsSUFBSSxHQUFHLG1CQUFtQixDQUFDO2dCQUM3QixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUMsQ0FBQyxNQUFNLEdBQUcsZ0NBQWlCLENBQUMsNkJBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztnQkFDNUMsbUJBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMxRTtTQUNGO0lBQ0gsQ0FBQztJQXZDRDtRQURDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7eURBMkJyQztJQWNILDZCQUFDO0NBakRELEFBaURDLENBakQyQyxxQ0FBaUIsR0FpRDVEO0FBakRZLHdEQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IFRpbGVOb2RlWkluZGV4TWFwLCBFVGlsZU5vZGVOYW1lcyB9IGZyb20gJy4uL0Jhc2VUaWxlTm9kZSc7XG5pbXBvcnQgeyBEYXhpYW9BbmltUGxheWVyIH0gZnJvbSAnLi4vYW5pbS9EYXhpYW9BbmltUGxheWVyJztcbmltcG9ydCB7IEdhbWVCZWhhdmlvcnNCYXNlIH0gZnJvbSAnLi9HYW1lQmVoYXZpb3JzQmFzZSc7XG5leHBvcnQgY2xhc3MgRGF4aWFvQ2xlYXJUaXBCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgc3RhcnQoZSkge1xuICAgIGUuZGF0YS50aWxlSWRzO1xuICAgIHZhciB0ID0gZS5kYXRhLmZpbmFsTWF0Y2hJbmZvcyxcbiAgICAgIG8gPSBEYXhpYW9BbmltUGxheWVyLmNvbmZpZ0Jhc2UucmVzb3VyY2VzLmZsb3dMaWdodDtcbiAgICB0aGlzLnNob3dUaXAodCwgby5wYXRoLCBvLmJ1bmRsZSk7XG4gICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgfVxuICBAbWoudHJhaXRFdmVudChcIkRheGlhb1RpcEJocl9zaG93VGlwXCIpXG4gIHNob3dUaXAoZSwgdCwgbykge1xuICAgIHZhciBuLCBpO1xuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciByID0gX192YWx1ZXMoZSksIGwgPSByLm5leHQoKTsgIWwuZG9uZTsgbCA9IHIubmV4dCgpKSB7XG4gICAgICAgIHZhciBzID0gbC52YWx1ZTtcbiAgICAgICAgaWYgKHMuaXNGaXgpIHtcbiAgICAgICAgICB2YXIgYyA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpLmdldChzLnRpbGVJZDEpLFxuICAgICAgICAgICAgdSA9IHRoaXMuY29udGV4dC5nZXRUaWxlTm9kZU1hcCgpLmdldChzLnRpbGVJZDIpO1xuICAgICAgICAgIHRoaXMuc2hvd0RheGlhb0NsZWFyVGlwKGMsIHQsIG8pO1xuICAgICAgICAgIHRoaXMuc2hvd0RheGlhb0NsZWFyVGlwKHUsIHQsIG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGMgPSB0aGlzLmNvbnRleHQuZ2V0VGlsZU5vZGVNYXAoKS5nZXQocy50aWxlSWQxKTtcbiAgICAgICAgICB0aGlzLnNob3dEYXhpYW9DbGVhclRpcChjLCB0LCBvKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG4gPSB7XG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBsICYmICFsLmRvbmUgJiYgKGkgPSByLnJldHVybikgJiYgaS5jYWxsKHIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG4pIHRocm93IG4uZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNob3dEYXhpYW9DbGVhclRpcChlLCB0LCBvKSB7XG4gICAgaWYgKGUgJiYgY2MuaXNWYWxpZChlLnRpbGVOb2RlKSkge1xuICAgICAgdmFyIG4gPSBlLnRpbGVOb2RlO1xuICAgICAgaWYgKCFuLmdldENoaWxkQnlOYW1lKFwiRGF4aWFvQ2FyZFRpcE5vZGVcIikpIHtcbiAgICAgICAgdmFyIGkgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICBpLm5hbWUgPSBcIkRheGlhb0NhcmRUaXBOb2RlXCI7XG4gICAgICAgIG4uYWRkQ2hpbGQoaSk7XG4gICAgICAgIGkuekluZGV4ID0gVGlsZU5vZGVaSW5kZXhNYXBbRVRpbGVOb2RlTmFtZXMuaW1nQ2FyZF0gKyAxO1xuICAgICAgICBpLnNjYWxlID0gMSAqIGUuaW5mby50aWxlT2JqZWN0LmxheW91dFNjYWxlO1xuICAgICAgICBCYXNlU3BpbmUucmVmcmVzaFdpdGhOb2RlKGksIHQsIG8pLnNldEFuaW1hdGlvbihcImluaXRcIiwgLTEsIG51bGwsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=