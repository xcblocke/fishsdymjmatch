
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/gamePlay/travel/view/TravelCollectTip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e540kOvHtCMqxph0MbmE//', 'TravelCollectTip');
// Scripts/gamePlay/travel/view/TravelCollectTip.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameTypeEnums_1 = require("../../../core/simulator/constant/GameTypeEnums");
var Adapter_1 = require("../../../component/Adapter");
var BaseUI_1 = require("../../../framework/ui/BaseUI");
var TravelCollectTip = /** @class */ (function (_super) {
    __extends(TravelCollectTip, _super);
    function TravelCollectTip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contentNode = null;
        _this.maskNode = null;
        _this._isPlayFlyAudio = false;
        return _this;
    }
    TravelCollectTip.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    TravelCollectTip.prototype.playShowAnim = function (e, t, o) {
        var n = this;
        if (cc.isValid(this.contentNode)) {
            Adapter_1.default.ignoreSafeRect(this.maskNode);
            this._isPlayFlyAudio = false;
            this.playPopAudio();
            this.contentNode.scale = 0.01;
            this.contentNode.opacity = 0;
            cc.Tween.stopAllByTarget(this.contentNode);
            var i = cc.tween().to(0.26, {
                scale: 1
            }, {
                easing: cc.easing.backOut
            }), r = cc.tween().to(0.16, {
                opacity: 255
            }, {
                easing: cc.easing.circOut
            }), a = cc.tween().to(0.17, {
                scale: 0
            }, {
                easing: cc.easing.elasticInOut
            }), s = cc.tween().to(0.17, {
                opacity: 0
            }, {
                easing: cc.easing.circOut
            }), c = this;
            cc.tween(this.contentNode).parallel(i, r).delay(0.57).parallel(a, s).call(function () {
                null == o || o();
            }).delay(0.5).call(function () {
                c.node.destroy();
            }).start();
            this.maskNode.opacity = 0;
            cc.Tween.stopAllByTarget(this.maskNode);
            cc.tween(this.maskNode).to(0.16, {
                opacity: 153
            }).delay(0.67).to(0.17, {
                opacity: 0
            }).start();
            for (var u = cc.tween().to(0.14, {
                scale: 1.3
            }, {
                easing: cc.easing.circOut
            }).to(0.2, {
                scale: 1
            }, {
                easing: cc.easing.cubicIn
            }), p = function p(o) {
                var i = e[o];
                if (!cc.isValid(i) || !cc.isValid(i.parent))
                    return "continue";
                var r = t[o], a = f.contentNode.convertToWorldSpaceAR(cc.Vec3.ZERO), l = i.parent.convertToNodeSpaceAR(a), s = i._designPos, c = cc.v3(s.x, l.y - 50, 0);
                i.active = true;
                i.position = c;
                i.scale = 0;
                i.opacity = 0;
                cc.Tween.stopAllByTarget(i);
                var p = cc.tween().to(0.34, {
                    position: s
                });
                cc.tween(i).to(0.26, {
                    scale: 1.16,
                    opacity: 255
                }, {
                    easing: cc.easing.backOut
                }).delay(0.4).delay(0.03 * o).call(function () {
                    n.playFlyAudio(r);
                }).parallel(u.clone(), p).start();
            }, f = this, d = 0; d < e.length; d++)
                p(d);
        }
        else
            null == o || o();
    };
    TravelCollectTip.prototype.playPopAudio = function () {
        mj.audioManager.playEffect(GameTypeEnums_1.EAudioID.Blank);
    };
    TravelCollectTip.prototype.playFlyAudio = function (e) {
        if (!this._isPlayFlyAudio) {
            this._isPlayFlyAudio = true;
            var t = 0;
            switch (e) {
                case "Yoga":
                case "Normal":
                case "ColorCard":
                case "RollCard":
                default:
                    t = GameTypeEnums_1.EAudioID.Targetfly3;
            }
            mj.audioManager.playEffect(t);
        }
        var o = 0;
        switch (e) {
            case "RollCard":
                o = GameTypeEnums_1.EAudioID.Targetfly2;
                break;
            case "Yoga":
                o = GameTypeEnums_1.EAudioID.CollectionShow;
                break;
            case "ColorCard":
                o = GameTypeEnums_1.EAudioID.Targetfly1;
                break;
            case "Normal":
            case "RankCard":
            default:
                o = GameTypeEnums_1.EAudioID.Targetfly1;
        }
        mj.audioManager.playEffect(o);
    };
    TravelCollectTip.prefabUrl = "prefabs/journey/JourneyCollectTip";
    __decorate([
        mj.node("Content")
    ], TravelCollectTip.prototype, "contentNode", void 0);
    __decorate([
        mj.node("Mask")
    ], TravelCollectTip.prototype, "maskNode", void 0);
    TravelCollectTip = __decorate([
        mj.class
    ], TravelCollectTip);
    return TravelCollectTip;
}(BaseUI_1.default));
exports.default = TravelCollectTip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2dhbWVQbGF5L3RyYXZlbC92aWV3L1RyYXZlbENvbGxlY3RUaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdGQUEwRTtBQUMxRSxzREFBaUQ7QUFDakQsdURBQWtEO0FBRWxEO0lBQThDLG9DQUFNO0lBQXBEO1FBQUEscUVBMEhDO1FBeEhDLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIscUJBQWUsR0FBRyxLQUFLLENBQUM7O0lBcUgxQixDQUFDO0lBbkhDLGlDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCx1Q0FBWSxHQUFaLFVBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDaEMsaUJBQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtnQkFDeEIsS0FBSyxFQUFFLENBQUM7YUFDVCxFQUFFO2dCQUNELE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFD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QURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO3lEQUNXO0lBRTlCO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7c0RBQ1E7SUFKTCxnQkFBZ0I7UUFEcEMsRUFBRSxDQUFDLEtBQUs7T0FDWSxnQkFBZ0IsQ0EwSHBDO0lBQUQsdUJBQUM7Q0ExSEQsQUEwSEMsQ0ExSDZDLGdCQUFNLEdBMEhuRDtrQkExSG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVBdWRpb0lEIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zaW11bGF0b3IvY29uc3RhbnQvR2FtZVR5cGVFbnVtcyc7XG5pbXBvcnQgQWRhcHRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvQWRhcHRlcic7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uLy4uLy4uL2ZyYW1ld29yay91aS9CYXNlVUknO1xuQG1qLmNsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmF2ZWxDb2xsZWN0VGlwIGV4dGVuZHMgQmFzZVVJIHtcbiAgQG1qLm5vZGUoXCJDb250ZW50XCIpXG4gIGNvbnRlbnROb2RlOiBcIkNvbnRlbnRcIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiTWFza1wiKVxuICBtYXNrTm9kZTogXCJNYXNrXCIgPSBudWxsO1xuICBfaXNQbGF5Rmx5QXVkaW8gPSBmYWxzZTtcbiAgc3RhdGljIHByZWZhYlVybCA9IFwicHJlZmFicy9qb3VybmV5L0pvdXJuZXlDb2xsZWN0VGlwXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBwbGF5U2hvd0FuaW0oZSwgdCwgbykge1xuICAgIHZhciBuID0gdGhpcztcbiAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLmNvbnRlbnROb2RlKSkge1xuICAgICAgQWRhcHRlci5pZ25vcmVTYWZlUmVjdCh0aGlzLm1hc2tOb2RlKTtcbiAgICAgIHRoaXMuX2lzUGxheUZseUF1ZGlvID0gZmFsc2U7XG4gICAgICB0aGlzLnBsYXlQb3BBdWRpbygpO1xuICAgICAgdGhpcy5jb250ZW50Tm9kZS5zY2FsZSA9IDAuMDE7XG4gICAgICB0aGlzLmNvbnRlbnROb2RlLm9wYWNpdHkgPSAwO1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuY29udGVudE5vZGUpO1xuICAgICAgdmFyIGkgPSBjYy50d2VlbigpLnRvKDAuMjYsIHtcbiAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuYmFja091dFxuICAgICAgICB9KSxcbiAgICAgICAgciA9IGNjLnR3ZWVuKCkudG8oMC4xNiwge1xuICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZWFzaW5nOiBjYy5lYXNpbmcuY2lyY091dFxuICAgICAgICB9KSxcbiAgICAgICAgYSA9IGNjLnR3ZWVuKCkudG8oMC4xNywge1xuICAgICAgICAgIHNjYWxlOiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5lbGFzdGljSW5PdXRcbiAgICAgICAgfSksXG4gICAgICAgIHMgPSBjYy50d2VlbigpLnRvKDAuMTcsIHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5jaXJjT3V0XG4gICAgICAgIH0pLFxuICAgICAgICBjID0gdGhpcztcbiAgICAgIGNjLnR3ZWVuKHRoaXMuY29udGVudE5vZGUpLnBhcmFsbGVsKGksIHIpLmRlbGF5KDAuNTcpLnBhcmFsbGVsKGEsIHMpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBudWxsID09IG8gfHwgbygpO1xuICAgICAgfSkuZGVsYXkoMC41KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB0aGlzLm1hc2tOb2RlLm9wYWNpdHkgPSAwO1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubWFza05vZGUpO1xuICAgICAgY2MudHdlZW4odGhpcy5tYXNrTm9kZSkudG8oMC4xNiwge1xuICAgICAgICBvcGFjaXR5OiAxNTNcbiAgICAgIH0pLmRlbGF5KDAuNjcpLnRvKDAuMTcsIHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSkuc3RhcnQoKTtcbiAgICAgIGZvciAodmFyIHUgPSBjYy50d2VlbigpLnRvKDAuMTQsIHtcbiAgICAgICAgICBzY2FsZTogMS4zXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5jaXJjT3V0XG4gICAgICAgIH0pLnRvKDAuMiwge1xuICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBlYXNpbmc6IGNjLmVhc2luZy5jdWJpY0luXG4gICAgICAgIH0pLCBwID0gZnVuY3Rpb24gcChvKSB7XG4gICAgICAgICAgdmFyIGkgPSBlW29dO1xuICAgICAgICAgIGlmICghY2MuaXNWYWxpZChpKSB8fCAhY2MuaXNWYWxpZChpLnBhcmVudCkpIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgdmFyIHIgPSB0W29dLFxuICAgICAgICAgICAgYSA9IGYuY29udGVudE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLlZlYzMuWkVSTyksXG4gICAgICAgICAgICBsID0gaS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoYSksXG4gICAgICAgICAgICBzID0gaS5fZGVzaWduUG9zLFxuICAgICAgICAgICAgYyA9IGNjLnYzKHMueCwgbC55IC0gNTAsIDApO1xuICAgICAgICAgIGkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICBpLnBvc2l0aW9uID0gYztcbiAgICAgICAgICBpLnNjYWxlID0gMDtcbiAgICAgICAgICBpLm9wYWNpdHkgPSAwO1xuICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChpKTtcbiAgICAgICAgICB2YXIgcCA9IGNjLnR3ZWVuKCkudG8oMC4zNCwge1xuICAgICAgICAgICAgcG9zaXRpb246IHNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjYy50d2VlbihpKS50bygwLjI2LCB7XG4gICAgICAgICAgICBzY2FsZTogMS4xNixcbiAgICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGVhc2luZzogY2MuZWFzaW5nLmJhY2tPdXRcbiAgICAgICAgICB9KS5kZWxheSgwLjQpLmRlbGF5KDAuMDMgKiBvKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG4ucGxheUZseUF1ZGlvKHIpO1xuICAgICAgICAgIH0pLnBhcmFsbGVsKHUuY2xvbmUoKSwgcCkuc3RhcnQoKTtcbiAgICAgICAgfSwgZiA9IHRoaXMsIGQgPSAwOyBkIDwgZS5sZW5ndGg7IGQrKykgcChkKTtcbiAgICB9IGVsc2UgbnVsbCA9PSBvIHx8IG8oKTtcbiAgfVxuICBwbGF5UG9wQXVkaW8oKSB7XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3QoRUF1ZGlvSUQuQmxhbmspO1xuICB9XG4gIHBsYXlGbHlBdWRpbyhlKSB7XG4gICAgaWYgKCF0aGlzLl9pc1BsYXlGbHlBdWRpbykge1xuICAgICAgdGhpcy5faXNQbGF5Rmx5QXVkaW8gPSB0cnVlO1xuICAgICAgdmFyIHQgPSAwO1xuICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgIGNhc2UgXCJZb2dhXCI6XG4gICAgICAgIGNhc2UgXCJOb3JtYWxcIjpcbiAgICAgICAgY2FzZSBcIkNvbG9yQ2FyZFwiOlxuICAgICAgICBjYXNlIFwiUm9sbENhcmRcIjpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0ID0gRUF1ZGlvSUQuVGFyZ2V0Zmx5MztcbiAgICAgIH1cbiAgICAgIG1qLmF1ZGlvTWFuYWdlci5wbGF5RWZmZWN0KHQpO1xuICAgIH1cbiAgICB2YXIgbyA9IDA7XG4gICAgc3dpdGNoIChlKSB7XG4gICAgICBjYXNlIFwiUm9sbENhcmRcIjpcbiAgICAgICAgbyA9IEVBdWRpb0lELlRhcmdldGZseTI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIllvZ2FcIjpcbiAgICAgICAgbyA9IEVBdWRpb0lELkNvbGxlY3Rpb25TaG93O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJDb2xvckNhcmRcIjpcbiAgICAgICAgbyA9IEVBdWRpb0lELlRhcmdldGZseTE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIk5vcm1hbFwiOlxuICAgICAgY2FzZSBcIlJhbmtDYXJkXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBvID0gRUF1ZGlvSUQuVGFyZ2V0Zmx5MTtcbiAgICB9XG4gICAgbWouYXVkaW9NYW5hZ2VyLnBsYXlFZmZlY3Qobyk7XG4gIH1cbn0iXX0=