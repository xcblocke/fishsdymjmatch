
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/Tile2CheerBehavior.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a230XZ86dDDqFNw7ftxb4E', 'Tile2CheerBehavior');
// Scripts/base/Tile2CheerBehavior.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile2CheerBehavior = void 0;
var GameInputEnum_1 = require("../simulator/constant/GameInputEnum");
var GameTypeEnums_1 = require("../core/simulator/constant/GameTypeEnums");
var EffectLayerEnum_1 = require("../constant/EffectLayerEnum");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var GameBehaviorsBase_1 = require("./GameBehaviorsBase");
var Tile2CheerBehavior = /** @class */ (function (_super) {
    __extends(Tile2CheerBehavior, _super);
    function Tile2CheerBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mainlineAniCfg = {
            0: "in_good",
            1: "in_great",
            2: "in_excellent",
            3: "in_amazing",
            4: "in_unbelievable"
        };
        _this._soundCfg = [GameTypeEnums_1.EAudioID.GoodMan, GameTypeEnums_1.EAudioID.GreatMan, GameTypeEnums_1.EAudioID.ExcellentMan, GameTypeEnums_1.EAudioID.AmazingMan, GameTypeEnums_1.EAudioID.UnbelievableMan];
        return _this;
    }
    Tile2CheerBehavior.prototype.start = function (e) {
        var t, o = e.data.index;
        try {
            var n = null === (t = this.context.gameView) || void 0 === t ? void 0 : t.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top);
            if (!n || !cc.isValid(n)) {
                this.finish(GameInputEnum_1.EBehaviorEnum.Success);
                return;
            }
            var i = this.getCheerPosition(), r = n.convertToWorldSpaceAR(cc.v2(i.x, i.y)), l = this.getSafePosition(r, o), c = n.convertToNodeSpaceAR(l), u = cc.v3(c.x, c.y), p = this.onAnimComplete.bind(this);
            this.createCheerNode(n, u, o, p);
            this.playSound(o);
        }
        catch (e) {
            this.finish(GameInputEnum_1.EBehaviorEnum.Success);
        }
    };
    Tile2CheerBehavior.prototype.createCheerNode = function (e, t, o, n) {
        var i = this, r = new cc.Node("CheerContainer");
        r.parent = e;
        r.position = t;
        var a = new cc.Node("spinEffect");
        a.parent = r;
        a.scale = this.getScale();
        var l = this.getSpineUrl(o), s = BaseSpine_1.default.refreshWithNode(a, l, this.getBundleName());
        s.setOnReadyCallback(function () {
            var e = i.getAnimName(o);
            s.setAnimation(e, 1, function () {
                n(r);
            });
        });
        return r;
    };
    Tile2CheerBehavior.prototype.onAnimComplete = function (e) {
        cc.isValid(e) && e.destroy();
        this.finish(GameInputEnum_1.EBehaviorEnum.Success);
    };
    Tile2CheerBehavior.prototype.getCheerPosition = function () {
        return this.context.getTile2SlotType() === GameTypeEnums_1.ETile2SlotType.Slot3 ? this.getClearPosition() : this.getSlotBarBottomPosition();
    };
    Tile2CheerBehavior.prototype.getClearPosition = function () {
        var e = this.context.getLastCollisionWorldPos();
        if (!e)
            return this.getSlotBarBottomPosition();
        var t = this.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top).convertToNodeSpaceAR(e);
        return cc.v3(t.x, t.y);
    };
    Tile2CheerBehavior.prototype.getSlotBarBottomPosition = function () {
        var e = this.context.gameView.getSlotBarNode(), t = this.context.gameView.getEffectLayer(EffectLayerEnum_1.EffectLayer.Top), o = e.parent.convertToWorldSpaceAR(cc.v2(e.x, e.y - e.height * e.anchorY + this.getOffsetY())), n = t.convertToNodeSpaceAR(o);
        return cc.v3(n.x, n.y);
    };
    Tile2CheerBehavior.prototype.getOffsetY = function () {
        return -200;
    };
    Tile2CheerBehavior.prototype.getSpineUrl = function () {
        return "spine/tile2Cheer/gameplay_word";
    };
    Tile2CheerBehavior.prototype.getBundleName = function () {
        return "mainRes";
    };
    Tile2CheerBehavior.prototype.getAnimName = function (e) {
        return this._mainlineAniCfg[e] || "in_good";
    };
    Tile2CheerBehavior.prototype.getScale = function () {
        return 1;
    };
    Tile2CheerBehavior.prototype.playSound = function (e) {
        var t = this.getSoundId(e);
        null != t && mj.audioManager && mj.audioManager.playEffect(t);
    };
    Tile2CheerBehavior.prototype.getSoundId = function (e) {
        return this._soundCfg[e];
    };
    Tile2CheerBehavior.prototype.getSafePosition = function (e, t) {
        return this.clampToScreenWorld(e, t);
    };
    Tile2CheerBehavior.prototype.clampToScreenWorld = function (e, t) {
        var o = cc.view.getVisibleSize(), n = o.width, i = o.height, r = this.getWordsSize(t), a = r.width, l = r.height, s = e.x - 0.5 * a, c = e.x + 0.5 * a, u = e.y - 0.5 * l, p = e.y + 0.5 * l, f = 0, d = 0;
        if (s < 0) {
            f = -s;
        }
        else {
            c > n && (f = n - c);
        }
        if (u < 0) {
            d = -u;
        }
        else {
            p > i && (d = i - p);
        }
        if (0 !== f || 0 !== d) {
            return cc.v2(e.x + f, e.y + d);
        }
        return e;
    };
    Tile2CheerBehavior.prototype.getWordsSize = function (e) {
        var t = [{
                width: 300,
                height: 150
            }, {
                width: 320,
                height: 150
            }, {
                width: 450,
                height: 150
            }, {
                width: 450,
                height: 150
            }, {
                width: 580,
                height: 150
            }];
        return e < 0 || e >= t.length ? {
            width: 350,
            height: 150
        } : t[e];
    };
    __decorate([
        mj.traitEvent("T2CheerBhv_createNode")
    ], Tile2CheerBehavior.prototype, "createCheerNode", null);
    __decorate([
        mj.traitEvent("T2CheerBhv_getOfsY")
    ], Tile2CheerBehavior.prototype, "getOffsetY", null);
    __decorate([
        mj.traitEvent("T2CheerBhv_getAniNm")
    ], Tile2CheerBehavior.prototype, "getAnimName", null);
    return Tile2CheerBehavior;
}(GameBehaviorsBase_1.GameBehaviorsBase));
exports.Tile2CheerBehavior = Tile2CheerBehavior;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVGlsZTJDaGVlckJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQW9FO0FBQ3BFLDBFQUFvRjtBQUNwRiwrREFBMEQ7QUFDMUQsMkRBQXNEO0FBQ3RELHlEQUF3RDtBQUN4RDtJQUF3QyxzQ0FBaUI7SUFBekQ7UUFBQSxxRUFrSkM7UUFqSkMscUJBQWUsR0FBRztZQUNoQixDQUFDLEVBQUUsU0FBUztZQUNaLENBQUMsRUFBRSxVQUFVO1lBQ2IsQ0FBQyxFQUFFLGNBQWM7WUFDakIsQ0FBQyxFQUFFLFlBQVk7WUFDZixDQUFDLEVBQUUsaUJBQWlCO1NBQ3JCLENBQUM7UUFDRixlQUFTLEdBQUcsQ0FBQyx3QkFBUSxDQUFDLE9BQU8sRUFBRSx3QkFBUSxDQUFDLFFBQVEsRUFBRSx3QkFBUSxDQUFDLFlBQVksRUFBRSx3QkFBUSxDQUFDLFVBQVUsRUFBRSx3QkFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDOztJQTBJMUgsQ0FBQztJQXpJQyxrQ0FBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQixJQUFJO1lBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyw2QkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLDZCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLE9BQU87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QUUsR0FBRztTQUNaLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFsSEQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDOzZEQWtCdEM7SUFzQkQ7UUFEQyxFQUFFLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO3dEQUduQztJQVFEO1FBREMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQzt5REFHcEM7SUFnRUgseUJBQUM7Q0FsSkQsQUFrSkMsQ0FsSnVDLHFDQUFpQixHQWtKeEQ7QUFsSlksZ0RBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRUJlaGF2aW9yRW51bSB9IGZyb20gJy4uL3NpbXVsYXRvci9jb25zdGFudC9HYW1lSW5wdXRFbnVtJztcbmltcG9ydCB7IEVBdWRpb0lELCBFVGlsZTJTbG90VHlwZSB9IGZyb20gJy4uL2NvcmUvc2ltdWxhdG9yL2NvbnN0YW50L0dhbWVUeXBlRW51bXMnO1xuaW1wb3J0IHsgRWZmZWN0TGF5ZXIgfSBmcm9tICcuLi9jb25zdGFudC9FZmZlY3RMYXllckVudW0nO1xuaW1wb3J0IEJhc2VTcGluZSBmcm9tICcuLi9nYW1lUGxheS9iYXNlL3VpL0Jhc2VTcGluZSc7XG5pbXBvcnQgeyBHYW1lQmVoYXZpb3JzQmFzZSB9IGZyb20gJy4vR2FtZUJlaGF2aW9yc0Jhc2UnO1xuZXhwb3J0IGNsYXNzIFRpbGUyQ2hlZXJCZWhhdmlvciBleHRlbmRzIEdhbWVCZWhhdmlvcnNCYXNlIHtcbiAgX21haW5saW5lQW5pQ2ZnID0ge1xuICAgIDA6IFwiaW5fZ29vZFwiLFxuICAgIDE6IFwiaW5fZ3JlYXRcIixcbiAgICAyOiBcImluX2V4Y2VsbGVudFwiLFxuICAgIDM6IFwiaW5fYW1hemluZ1wiLFxuICAgIDQ6IFwiaW5fdW5iZWxpZXZhYmxlXCJcbiAgfTtcbiAgX3NvdW5kQ2ZnID0gW0VBdWRpb0lELkdvb2RNYW4sIEVBdWRpb0lELkdyZWF0TWFuLCBFQXVkaW9JRC5FeGNlbGxlbnRNYW4sIEVBdWRpb0lELkFtYXppbmdNYW4sIEVBdWRpb0lELlVuYmVsaWV2YWJsZU1hbl07XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgdCxcbiAgICAgIG8gPSBlLmRhdGEuaW5kZXg7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBuID0gbnVsbCA9PT0gKHQgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcpIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuZ2V0RWZmZWN0TGF5ZXIoRWZmZWN0TGF5ZXIuVG9wKTtcbiAgICAgIGlmICghbiB8fCAhY2MuaXNWYWxpZChuKSkge1xuICAgICAgICB0aGlzLmZpbmlzaChFQmVoYXZpb3JFbnVtLlN1Y2Nlc3MpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgaSA9IHRoaXMuZ2V0Q2hlZXJQb3NpdGlvbigpLFxuICAgICAgICByID0gbi5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoaS54LCBpLnkpKSxcbiAgICAgICAgbCA9IHRoaXMuZ2V0U2FmZVBvc2l0aW9uKHIsIG8pLFxuICAgICAgICBjID0gbi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsKSxcbiAgICAgICAgdSA9IGNjLnYzKGMueCwgYy55KSxcbiAgICAgICAgcCA9IHRoaXMub25BbmltQ29tcGxldGUuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuY3JlYXRlQ2hlZXJOb2RlKG4sIHUsIG8sIHApO1xuICAgICAgdGhpcy5wbGF5U291bmQobyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5maW5pc2goRUJlaGF2aW9yRW51bS5TdWNjZXNzKTtcbiAgICB9XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMkNoZWVyQmh2X2NyZWF0ZU5vZGVcIilcbiAgY3JlYXRlQ2hlZXJOb2RlKGUsIHQsIG8sIG4pIHtcbiAgICB2YXIgaSA9IHRoaXMsXG4gICAgICByID0gbmV3IGNjLk5vZGUoXCJDaGVlckNvbnRhaW5lclwiKTtcbiAgICByLnBhcmVudCA9IGU7XG4gICAgci5wb3NpdGlvbiA9IHQ7XG4gICAgdmFyIGEgPSBuZXcgY2MuTm9kZShcInNwaW5FZmZlY3RcIik7XG4gICAgYS5wYXJlbnQgPSByO1xuICAgIGEuc2NhbGUgPSB0aGlzLmdldFNjYWxlKCk7XG4gICAgdmFyIGwgPSB0aGlzLmdldFNwaW5lVXJsKG8pLFxuICAgICAgcyA9IEJhc2VTcGluZS5yZWZyZXNoV2l0aE5vZGUoYSwgbCwgdGhpcy5nZXRCdW5kbGVOYW1lKCkpO1xuICAgIHMuc2V0T25SZWFkeUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBlID0gaS5nZXRBbmltTmFtZShvKTtcbiAgICAgIHMuc2V0QW5pbWF0aW9uKGUsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbihyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiByO1xuICB9XG4gIG9uQW5pbUNvbXBsZXRlKGUpIHtcbiAgICBjYy5pc1ZhbGlkKGUpICYmIGUuZGVzdHJveSgpO1xuICAgIHRoaXMuZmluaXNoKEVCZWhhdmlvckVudW0uU3VjY2Vzcyk7XG4gIH1cbiAgZ2V0Q2hlZXJQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0LmdldFRpbGUyU2xvdFR5cGUoKSA9PT0gRVRpbGUyU2xvdFR5cGUuU2xvdDMgPyB0aGlzLmdldENsZWFyUG9zaXRpb24oKSA6IHRoaXMuZ2V0U2xvdEJhckJvdHRvbVBvc2l0aW9uKCk7XG4gIH1cbiAgZ2V0Q2xlYXJQb3NpdGlvbigpIHtcbiAgICB2YXIgZSA9IHRoaXMuY29udGV4dC5nZXRMYXN0Q29sbGlzaW9uV29ybGRQb3MoKTtcbiAgICBpZiAoIWUpIHJldHVybiB0aGlzLmdldFNsb3RCYXJCb3R0b21Qb3NpdGlvbigpO1xuICAgIHZhciB0ID0gdGhpcy5jb250ZXh0LmdhbWVWaWV3LmdldEVmZmVjdExheWVyKEVmZmVjdExheWVyLlRvcCkuY29udmVydFRvTm9kZVNwYWNlQVIoZSk7XG4gICAgcmV0dXJuIGNjLnYzKHQueCwgdC55KTtcbiAgfVxuICBnZXRTbG90QmFyQm90dG9tUG9zaXRpb24oKSB7XG4gICAgdmFyIGUgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuZ2V0U2xvdEJhck5vZGUoKSxcbiAgICAgIHQgPSB0aGlzLmNvbnRleHQuZ2FtZVZpZXcuZ2V0RWZmZWN0TGF5ZXIoRWZmZWN0TGF5ZXIuVG9wKSxcbiAgICAgIG8gPSBlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoZS54LCBlLnkgLSBlLmhlaWdodCAqIGUuYW5jaG9yWSArIHRoaXMuZ2V0T2Zmc2V0WSgpKSksXG4gICAgICBuID0gdC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvKTtcbiAgICByZXR1cm4gY2MudjMobi54LCBuLnkpO1xuICB9XG4gIEBtai50cmFpdEV2ZW50KFwiVDJDaGVlckJodl9nZXRPZnNZXCIpXG4gIGdldE9mZnNldFkoKSB7XG4gICAgcmV0dXJuIC0yMDA7XG4gIH1cbiAgZ2V0U3BpbmVVcmwoKSB7XG4gICAgcmV0dXJuIFwic3BpbmUvdGlsZTJDaGVlci9nYW1lcGxheV93b3JkXCI7XG4gIH1cbiAgZ2V0QnVuZGxlTmFtZSgpIHtcbiAgICByZXR1cm4gXCJtYWluUmVzXCI7XG4gIH1cbiAgQG1qLnRyYWl0RXZlbnQoXCJUMkNoZWVyQmh2X2dldEFuaU5tXCIpXG4gIGdldEFuaW1OYW1lKGUpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFpbmxpbmVBbmlDZmdbZV0gfHwgXCJpbl9nb29kXCI7XG4gIH1cbiAgZ2V0U2NhbGUoKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcGxheVNvdW5kKGUpIHtcbiAgICB2YXIgdCA9IHRoaXMuZ2V0U291bmRJZChlKTtcbiAgICBudWxsICE9IHQgJiYgbWouYXVkaW9NYW5hZ2VyICYmIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KHQpO1xuICB9XG4gIGdldFNvdW5kSWQoZSkge1xuICAgIHJldHVybiB0aGlzLl9zb3VuZENmZ1tlXTtcbiAgfVxuICBnZXRTYWZlUG9zaXRpb24oZSwgdCkge1xuICAgIHJldHVybiB0aGlzLmNsYW1wVG9TY3JlZW5Xb3JsZChlLCB0KTtcbiAgfVxuICBjbGFtcFRvU2NyZWVuV29ybGQoZSwgdCkge1xuICAgIHZhciBvID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLFxuICAgICAgbiA9IG8ud2lkdGgsXG4gICAgICBpID0gby5oZWlnaHQsXG4gICAgICByID0gdGhpcy5nZXRXb3Jkc1NpemUodCksXG4gICAgICBhID0gci53aWR0aCxcbiAgICAgIGwgPSByLmhlaWdodCxcbiAgICAgIHMgPSBlLnggLSAwLjUgKiBhLFxuICAgICAgYyA9IGUueCArIDAuNSAqIGEsXG4gICAgICB1ID0gZS55IC0gMC41ICogbCxcbiAgICAgIHAgPSBlLnkgKyAwLjUgKiBsLFxuICAgICAgZiA9IDAsXG4gICAgICBkID0gMDtcbiAgICBpZiAocyA8IDApIHtcbiAgICAgIGYgPSAtcztcbiAgICB9IGVsc2Uge1xuICAgICAgYyA+IG4gJiYgKGYgPSBuIC0gYyk7XG4gICAgfVxuICAgIGlmICh1IDwgMCkge1xuICAgICAgZCA9IC11O1xuICAgIH0gZWxzZSB7XG4gICAgICBwID4gaSAmJiAoZCA9IGkgLSBwKTtcbiAgICB9XG4gICAgaWYgKDAgIT09IGYgfHwgMCAhPT0gZCkge1xuICAgICAgcmV0dXJuIGNjLnYyKGUueCArIGYsIGUueSArIGQpO1xuICAgIH1cbiAgICByZXR1cm4gZTtcbiAgfVxuICBnZXRXb3Jkc1NpemUoZSkge1xuICAgIHZhciB0ID0gW3tcbiAgICAgIHdpZHRoOiAzMDAsXG4gICAgICBoZWlnaHQ6IDE1MFxuICAgIH0sIHtcbiAgICAgIHdpZHRoOiAzMjAsXG4gICAgICBoZWlnaHQ6IDE1MFxuICAgIH0sIHtcbiAgICAgIHdpZHRoOiA0NTAsXG4gICAgICBoZWlnaHQ6IDE1MFxuICAgIH0sIHtcbiAgICAgIHdpZHRoOiA0NTAsXG4gICAgICBoZWlnaHQ6IDE1MFxuICAgIH0sIHtcbiAgICAgIHdpZHRoOiA1ODAsXG4gICAgICBoZWlnaHQ6IDE1MFxuICAgIH1dO1xuICAgIHJldHVybiBlIDwgMCB8fCBlID49IHQubGVuZ3RoID8ge1xuICAgICAgd2lkdGg6IDM1MCxcbiAgICAgIGhlaWdodDogMTUwXG4gICAgfSA6IHRbZV07XG4gIH1cbn0iXX0=