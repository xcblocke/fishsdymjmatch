
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/items/CollectTargetItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6991IbXzZBJ5z3XqtAwrg1', 'CollectTargetItem');
// Scripts/items/CollectTargetItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TileTypeEnum_1 = require("../simulator/constant/TileTypeEnum");
var BaseUI_1 = require("../framework/ui/BaseUI");
var BaseSprite_1 = require("../gamePlay/base/ui/BaseSprite");
var BaseSpine_1 = require("../gamePlay/base/ui/BaseSpine");
var TravelGameModel_1 = require("../gamePlay/travel/model/TravelGameModel");
var CardUtil_1 = require("../gamePlay/user/CardUtil");
var CollectTargetItem = /** @class */ (function (_super) {
    __extends(CollectTargetItem, _super);
    function CollectTargetItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.card = null;
        _this.cardIcon = null;
        _this.cardDown = null;
        _this.cardUp = null;
        _this.finishNode = null;
        _this.collectLabel = null;
        _this.EffectTopNode = null;
        _this.EffectDownNode = null;
        _this.data = null;
        _this.isLoaded = false;
        _this._customScale = null;
        _this._baseCardScale = 0.56;
        return _this;
    }
    CollectTargetItem.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.isLoaded = true;
        this.updateUI();
    };
    CollectTargetItem.prototype.updateUI = function () {
        if (this.data && this.isLoaded) {
            var e = this.data;
            this.setupCardDisplay(e.type, e.resId);
            this.setupCardScale(e.type);
            null !== this._customScale && this.card && cc.isValid(this.card) && (this.card.scale *= this._customScale);
            this.updateCountLabel();
            this.updateFinishState();
        }
    };
    CollectTargetItem.prototype.initUI = function (e) {
        if (e) {
            this.data = e;
            this.updateUI();
        }
    };
    CollectTargetItem.prototype.refreshUI = function () {
        if (this.data) {
            this.updateCountLabel();
            this.updateFinishState();
        }
    };
    CollectTargetItem.prototype.setupCardDisplay = function (e, t) {
        switch (e) {
            case TileTypeEnum_1.ETileType.ColorCard:
                this.showNormalCard(e, t);
                break;
            case TileTypeEnum_1.ETileType.Yoga:
                this.showSpecialCard(e, t);
                break;
            case TileTypeEnum_1.ETileType.RollCard:
                this.showFlipCard();
                break;
            default:
                this.showNormalCard(e, t);
        }
    };
    CollectTargetItem.prototype.showNormalCard = function () {
        this.cardUp.active = true;
        this.cardDown.active = false;
        this.cardIcon.node.active = true;
        var e = CardUtil_1.default.getAtlasPathAndBundleName(this.data.resName), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.cardIcon.node, t, n, false, o);
        var i = CardUtil_1.default.getAtlasPathAndBundleName("journey_special_mj_green"), r = i.path, a = i.bundleName, l = i.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.cardUp, r, l, false, a);
    };
    CollectTargetItem.prototype.showSpecialCard = function (e, t) {
        this.cardUp.active = false;
        this.cardDown.active = false;
        this.cardIcon.node.active = true;
        this.collectLabel.node.x += 0.7 * this.cardIcon.node.width * this.card.scale;
        this.finishNode.x += 0.7 * this.cardIcon.node.width * this.card.scale;
        var o = this.getSpecialIconPath(e, t), n = o.path, i = o.bundleName, r = o.fromAtlas;
        n && BaseSprite_1.default.refreshWithNode(this.cardIcon.node, n, r, false, i);
    };
    CollectTargetItem.prototype.showFlipCard = function () {
        this.cardUp.active = false;
        this.cardDown.active = true;
        this.cardIcon.node.active = false;
        var e = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_dn"), t = e.path, o = e.bundleName, n = e.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this.cardDown, t, n, false, o);
    };
    CollectTargetItem.prototype.getSpecialIconPath = function (e) {
        if (e === TileTypeEnum_1.ETileType.Yoga) {
            var t = TravelGameModel_1.default.getInstance().getCurJourney(), o = TravelGameModel_1.default.getInstance().getConfig(t);
            if (o && o.yoga) {
                var n = __read(this.getYogaIconPath(o.yoga), 2), i = n[0];
                return {
                    path: n[1],
                    bundleName: i,
                    fromAtlas: false
                };
            }
        }
        if (this.data && this.data.resName) {
            var r = CardUtil_1.default.getAtlasPathAndBundleName(this.data.resName);
            return {
                path: r.path,
                bundleName: r.bundleName,
                fromAtlas: r.fromAtlas
            };
        }
    };
    CollectTargetItem.prototype.getYogaIconPath = function (e) {
        var t = e.split(":");
        return 2 === t.length ? [t[0], "texture/" + t[1]] : ["mainRes", "texture/journey/yoga/" + e];
    };
    CollectTargetItem.prototype.setupCardScale = function (e) {
        var t = 0.56;
        switch (e) {
            case TileTypeEnum_1.ETileType.ColorCard:
            case TileTypeEnum_1.ETileType.RollCard:
                t = 0.56;
                break;
            case TileTypeEnum_1.ETileType.Yoga:
                t = 0.78;
        }
        this._baseCardScale = t;
        this.card.scale = t;
    };
    CollectTargetItem.prototype.updateCountLabel = function () {
        if (this.collectLabel && this.data) {
            var e = this.data.count;
            this.collectLabel.string = "" + e;
        }
    };
    CollectTargetItem.prototype.updateFinishState = function () {
        if (this.finishNode && this.data) {
            var e = this.data.count <= 0;
            this.finishNode.active = e;
            this.collectLabel.node.active = !e;
        }
    };
    CollectTargetItem.prototype.getData = function () {
        return this.data;
    };
    CollectTargetItem.prototype.updateData = function (e) {
        if (this.data) {
            this.data.count = e.count;
            this.data.allCount = e.allCount;
        }
    };
    CollectTargetItem.prototype.playCollectAnimation = function (e) {
        var t = this;
        if (this.card && this.collectLabel) {
            cc.Tween.stopAllByTarget(this.card);
            cc.Tween.stopAllByTarget(this.collectLabel.node);
            var o = this.getBaseCardScale();
            this.card.scale = o;
            this.collectLabel.node.scale = 1;
            this.playSpineEffect();
            cc.tween(this.card).to(0.07, {
                scale: 1.2 * o
            }).to(0.1, {
                scale: o
            }).start();
            cc.tween(this.collectLabel.node).to(0.07, {
                scale: 2
            }).call(function () {
                t.updateCountLabel();
            }).to(0.1, {
                scale: 1
            }).call(function () {
                t.updateFinishState();
                e && e();
            }).start();
        }
        else
            e && e();
    };
    CollectTargetItem.prototype.getBaseCardScale = function () {
        return this._baseCardScale;
    };
    CollectTargetItem.prototype.playSpineEffect = function () {
        if (this.EffectTopNode) {
            var e = BaseSpine_1.default.create("spine/collect/gameplay_light_goal", "in", 1, function () { }, true);
            if (e && e.node) {
                this.EffectTopNode.addChild(e.node);
                e.node.scale = this.card.scale;
            }
        }
    };
    CollectTargetItem.prototype.onDestroy = function () {
        this.data = null;
        _super.prototype.onDestroy.call(this);
    };
    CollectTargetItem.prefabUrl = "prefabs/journey/CollectItem";
    CollectTargetItem.bundleName = "mainRes";
    __decorate([
        mj.node("Card")
    ], CollectTargetItem.prototype, "card", void 0);
    __decorate([
        mj.component("Card/Icon", cc.Sprite)
    ], CollectTargetItem.prototype, "cardIcon", void 0);
    __decorate([
        mj.node("Card/Down")
    ], CollectTargetItem.prototype, "cardDown", void 0);
    __decorate([
        mj.node("Card/Up")
    ], CollectTargetItem.prototype, "cardUp", void 0);
    __decorate([
        mj.node("Finish")
    ], CollectTargetItem.prototype, "finishNode", void 0);
    __decorate([
        mj.component("Label", cc.Label)
    ], CollectTargetItem.prototype, "collectLabel", void 0);
    __decorate([
        mj.node("EffectTop")
    ], CollectTargetItem.prototype, "EffectTopNode", void 0);
    __decorate([
        mj.node("EffectDown")
    ], CollectTargetItem.prototype, "EffectDownNode", void 0);
    CollectTargetItem = __decorate([
        mj.class
    ], CollectTargetItem);
    return CollectTargetItem;
}(BaseUI_1.default));
exports.default = CollectTargetItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2l0ZW1zL0NvbGxlY3RUYXJnZXRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBK0Q7QUFDL0QsaURBQTRDO0FBQzVDLDZEQUF3RDtBQUN4RCwyREFBc0Q7QUFDdEQsNEVBQXVFO0FBQ3ZFLHNEQUFpRDtBQUVqRDtJQUErQyxxQ0FBTTtJQUFyRDtRQUFBLHFFQThNQztRQTVNQyxVQUFJLEdBQVcsSUFBSSxDQUFDO1FBRXBCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsbUJBQWEsR0FBZ0IsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUNwQyxVQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixvQkFBYyxHQUFHLElBQUksQ0FBQzs7SUEwTHhCLENBQUM7SUF2TEMsa0NBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FB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RyxTQUFTLENBQUM7SUFwQjlCO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7bURBQ0k7SUFFcEI7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNSO0lBRTdCO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7dURBQ1E7SUFFN0I7UUFEQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztxREFDTTtJQUV6QjtRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO3lEQUNVO0lBRTVCO1FBREMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzsyREFDSDtJQUU3QjtRQURDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOzREQUNhO0lBRWxDO1FBREMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7NkRBQ2M7SUFoQmpCLGlCQUFpQjtRQURyQyxFQUFFLENBQUMsS0FBSztPQUNZLGlCQUFpQixDQThNckM7SUFBRCx3QkFBQztDQTlNRCxBQThNQyxDQTlNOEMsZ0JBQU0sR0E4TXBEO2tCQTlNb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRVRpbGVUeXBlIH0gZnJvbSAnLi4vc2ltdWxhdG9yL2NvbnN0YW50L1RpbGVUeXBlRW51bSc7XG5pbXBvcnQgQmFzZVVJIGZyb20gJy4uL2ZyYW1ld29yay91aS9CYXNlVUknO1xuaW1wb3J0IEJhc2VTcHJpdGUgZnJvbSAnLi4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCBCYXNlU3BpbmUgZnJvbSAnLi4vZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3BpbmUnO1xuaW1wb3J0IFRyYXZlbEdhbWVNb2RlbCBmcm9tICcuLi9nYW1lUGxheS90cmF2ZWwvbW9kZWwvVHJhdmVsR2FtZU1vZGVsJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi9nYW1lUGxheS91c2VyL0NhcmRVdGlsJztcbkBtai5jbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGVjdFRhcmdldEl0ZW0gZXh0ZW5kcyBCYXNlVUkge1xuICBAbWoubm9kZShcIkNhcmRcIilcbiAgY2FyZDogXCJDYXJkXCIgPSBudWxsO1xuICBAbWouY29tcG9uZW50KFwiQ2FyZC9JY29uXCIsIGNjLlNwcml0ZSlcbiAgY2FyZEljb246IFwiQ2FyZC9JY29uXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkNhcmQvRG93blwiKVxuICBjYXJkRG93bjogXCJDYXJkL0Rvd25cIiA9IG51bGw7XG4gIEBtai5ub2RlKFwiQ2FyZC9VcFwiKVxuICBjYXJkVXA6IFwiQ2FyZC9VcFwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJGaW5pc2hcIilcbiAgZmluaXNoTm9kZTogXCJGaW5pc2hcIiA9IG51bGw7XG4gIEBtai5jb21wb25lbnQoXCJMYWJlbFwiLCBjYy5MYWJlbClcbiAgY29sbGVjdExhYmVsOiBcIkxhYmVsXCIgPSBudWxsO1xuICBAbWoubm9kZShcIkVmZmVjdFRvcFwiKVxuICBFZmZlY3RUb3BOb2RlOiBcIkVmZmVjdFRvcFwiID0gbnVsbDtcbiAgQG1qLm5vZGUoXCJFZmZlY3REb3duXCIpXG4gIEVmZmVjdERvd25Ob2RlOiBcIkVmZmVjdERvd25cIiA9IG51bGw7XG4gIGRhdGEgPSBudWxsO1xuICBpc0xvYWRlZCA9IGZhbHNlO1xuICBfY3VzdG9tU2NhbGUgPSBudWxsO1xuICBfYmFzZUNhcmRTY2FsZSA9IDAuNTY7XG4gIHN0YXRpYyBwcmVmYWJVcmwgPSBcInByZWZhYnMvam91cm5leS9Db2xsZWN0SXRlbVwiO1xuICBzdGF0aWMgYnVuZGxlTmFtZSA9IFwibWFpblJlc1wiO1xuICBvbkxvYWQoKSB7XG4gICAgc3VwZXIub25Mb2FkLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVVSSgpO1xuICB9XG4gIHVwZGF0ZVVJKCkge1xuICAgIGlmICh0aGlzLmRhdGEgJiYgdGhpcy5pc0xvYWRlZCkge1xuICAgICAgdmFyIGUgPSB0aGlzLmRhdGE7XG4gICAgICB0aGlzLnNldHVwQ2FyZERpc3BsYXkoZS50eXBlLCBlLnJlc0lkKTtcbiAgICAgIHRoaXMuc2V0dXBDYXJkU2NhbGUoZS50eXBlKTtcbiAgICAgIG51bGwgIT09IHRoaXMuX2N1c3RvbVNjYWxlICYmIHRoaXMuY2FyZCAmJiBjYy5pc1ZhbGlkKHRoaXMuY2FyZCkgJiYgKHRoaXMuY2FyZC5zY2FsZSAqPSB0aGlzLl9jdXN0b21TY2FsZSk7XG4gICAgICB0aGlzLnVwZGF0ZUNvdW50TGFiZWwoKTtcbiAgICAgIHRoaXMudXBkYXRlRmluaXNoU3RhdGUoKTtcbiAgICB9XG4gIH1cbiAgaW5pdFVJKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgdGhpcy5kYXRhID0gZTtcbiAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICB9XG4gIH1cbiAgcmVmcmVzaFVJKCkge1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHRoaXMudXBkYXRlQ291bnRMYWJlbCgpO1xuICAgICAgdGhpcy51cGRhdGVGaW5pc2hTdGF0ZSgpO1xuICAgIH1cbiAgfVxuICBzZXR1cENhcmREaXNwbGF5KGUsIHQpIHtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLkNvbG9yQ2FyZDpcbiAgICAgICAgdGhpcy5zaG93Tm9ybWFsQ2FyZChlLCB0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVUaWxlVHlwZS5Zb2dhOlxuICAgICAgICB0aGlzLnNob3dTcGVjaWFsQ2FyZChlLCB0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVUaWxlVHlwZS5Sb2xsQ2FyZDpcbiAgICAgICAgdGhpcy5zaG93RmxpcENhcmQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnNob3dOb3JtYWxDYXJkKGUsIHQpO1xuICAgIH1cbiAgfVxuICBzaG93Tm9ybWFsQ2FyZCgpIHtcbiAgICB0aGlzLmNhcmRVcC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuY2FyZERvd24uYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5jYXJkSWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgdmFyIGUgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKHRoaXMuZGF0YS5yZXNOYW1lKSxcbiAgICAgIHQgPSBlLnBhdGgsXG4gICAgICBvID0gZS5idW5kbGVOYW1lLFxuICAgICAgbiA9IGUuZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuY2FyZEljb24ubm9kZSwgdCwgbiwgZmFsc2UsIG8pO1xuICAgIHZhciBpID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShcImpvdXJuZXlfc3BlY2lhbF9tal9ncmVlblwiKSxcbiAgICAgIHIgPSBpLnBhdGgsXG4gICAgICBhID0gaS5idW5kbGVOYW1lLFxuICAgICAgbCA9IGkuZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuY2FyZFVwLCByLCBsLCBmYWxzZSwgYSk7XG4gIH1cbiAgc2hvd1NwZWNpYWxDYXJkKGUsIHQpIHtcbiAgICB0aGlzLmNhcmRVcC5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNhcmREb3duLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuY2FyZEljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuY29sbGVjdExhYmVsLm5vZGUueCArPSAwLjcgKiB0aGlzLmNhcmRJY29uLm5vZGUud2lkdGggKiB0aGlzLmNhcmQuc2NhbGU7XG4gICAgdGhpcy5maW5pc2hOb2RlLnggKz0gMC43ICogdGhpcy5jYXJkSWNvbi5ub2RlLndpZHRoICogdGhpcy5jYXJkLnNjYWxlO1xuICAgIHZhciBvID0gdGhpcy5nZXRTcGVjaWFsSWNvblBhdGgoZSwgdCksXG4gICAgICBuID0gby5wYXRoLFxuICAgICAgaSA9IG8uYnVuZGxlTmFtZSxcbiAgICAgIHIgPSBvLmZyb21BdGxhcztcbiAgICBuICYmIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuY2FyZEljb24ubm9kZSwgbiwgciwgZmFsc2UsIGkpO1xuICB9XG4gIHNob3dGbGlwQ2FyZCgpIHtcbiAgICB0aGlzLmNhcmRVcC5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNhcmREb3duLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5jYXJkSWNvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHZhciBlID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShcImdhbWVwbGF5X2ltZ19tal9kblwiKSxcbiAgICAgIHQgPSBlLnBhdGgsXG4gICAgICBvID0gZS5idW5kbGVOYW1lLFxuICAgICAgbiA9IGUuZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuY2FyZERvd24sIHQsIG4sIGZhbHNlLCBvKTtcbiAgfVxuICBnZXRTcGVjaWFsSWNvblBhdGgoZSkge1xuICAgIGlmIChlID09PSBFVGlsZVR5cGUuWW9nYSkge1xuICAgICAgdmFyIHQgPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDdXJKb3VybmV5KCksXG4gICAgICAgIG8gPSBUcmF2ZWxHYW1lTW9kZWwuZ2V0SW5zdGFuY2UoKS5nZXRDb25maWcodCk7XG4gICAgICBpZiAobyAmJiBvLnlvZ2EpIHtcbiAgICAgICAgdmFyIG4gPSBfX3JlYWQodGhpcy5nZXRZb2dhSWNvblBhdGgoby55b2dhKSwgMiksXG4gICAgICAgICAgaSA9IG5bMF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF0aDogblsxXSxcbiAgICAgICAgICBidW5kbGVOYW1lOiBpLFxuICAgICAgICAgIGZyb21BdGxhczogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEucmVzTmFtZSkge1xuICAgICAgdmFyIHIgPSBDYXJkVXRpbC5nZXRBdGxhc1BhdGhBbmRCdW5kbGVOYW1lKHRoaXMuZGF0YS5yZXNOYW1lKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGg6IHIucGF0aCxcbiAgICAgICAgYnVuZGxlTmFtZTogci5idW5kbGVOYW1lLFxuICAgICAgICBmcm9tQXRsYXM6IHIuZnJvbUF0bGFzXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBnZXRZb2dhSWNvblBhdGgoZSkge1xuICAgIHZhciB0ID0gZS5zcGxpdChcIjpcIik7XG4gICAgcmV0dXJuIDIgPT09IHQubGVuZ3RoID8gW3RbMF0sIFwidGV4dHVyZS9cIiArIHRbMV1dIDogW1wibWFpblJlc1wiLCBcInRleHR1cmUvam91cm5leS95b2dhL1wiICsgZV07XG4gIH1cbiAgc2V0dXBDYXJkU2NhbGUoZSkge1xuICAgIHZhciB0ID0gMC41NjtcbiAgICBzd2l0Y2ggKGUpIHtcbiAgICAgIGNhc2UgRVRpbGVUeXBlLkNvbG9yQ2FyZDpcbiAgICAgIGNhc2UgRVRpbGVUeXBlLlJvbGxDYXJkOlxuICAgICAgICB0ID0gMC41NjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVUaWxlVHlwZS5Zb2dhOlxuICAgICAgICB0ID0gMC43ODtcbiAgICB9XG4gICAgdGhpcy5fYmFzZUNhcmRTY2FsZSA9IHQ7XG4gICAgdGhpcy5jYXJkLnNjYWxlID0gdDtcbiAgfVxuICB1cGRhdGVDb3VudExhYmVsKCkge1xuICAgIGlmICh0aGlzLmNvbGxlY3RMYWJlbCAmJiB0aGlzLmRhdGEpIHtcbiAgICAgIHZhciBlID0gdGhpcy5kYXRhLmNvdW50O1xuICAgICAgdGhpcy5jb2xsZWN0TGFiZWwuc3RyaW5nID0gXCJcIiArIGU7XG4gICAgfVxuICB9XG4gIHVwZGF0ZUZpbmlzaFN0YXRlKCkge1xuICAgIGlmICh0aGlzLmZpbmlzaE5vZGUgJiYgdGhpcy5kYXRhKSB7XG4gICAgICB2YXIgZSA9IHRoaXMuZGF0YS5jb3VudCA8PSAwO1xuICAgICAgdGhpcy5maW5pc2hOb2RlLmFjdGl2ZSA9IGU7XG4gICAgICB0aGlzLmNvbGxlY3RMYWJlbC5ub2RlLmFjdGl2ZSA9ICFlO1xuICAgIH1cbiAgfVxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbiAgdXBkYXRlRGF0YShlKSB7XG4gICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgdGhpcy5kYXRhLmNvdW50ID0gZS5jb3VudDtcbiAgICAgIHRoaXMuZGF0YS5hbGxDb3VudCA9IGUuYWxsQ291bnQ7XG4gICAgfVxuICB9XG4gIHBsYXlDb2xsZWN0QW5pbWF0aW9uKGUpIHtcbiAgICB2YXIgdCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuY2FyZCAmJiB0aGlzLmNvbGxlY3RMYWJlbCkge1xuICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuY2FyZCk7XG4gICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5jb2xsZWN0TGFiZWwubm9kZSk7XG4gICAgICB2YXIgbyA9IHRoaXMuZ2V0QmFzZUNhcmRTY2FsZSgpO1xuICAgICAgdGhpcy5jYXJkLnNjYWxlID0gbztcbiAgICAgIHRoaXMuY29sbGVjdExhYmVsLm5vZGUuc2NhbGUgPSAxO1xuICAgICAgdGhpcy5wbGF5U3BpbmVFZmZlY3QoKTtcbiAgICAgIGNjLnR3ZWVuKHRoaXMuY2FyZCkudG8oMC4wNywge1xuICAgICAgICBzY2FsZTogMS4yICogb1xuICAgICAgfSkudG8oMC4xLCB7XG4gICAgICAgIHNjYWxlOiBvXG4gICAgICB9KS5zdGFydCgpO1xuICAgICAgY2MudHdlZW4odGhpcy5jb2xsZWN0TGFiZWwubm9kZSkudG8oMC4wNywge1xuICAgICAgICBzY2FsZTogMlxuICAgICAgfSkuY2FsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQudXBkYXRlQ291bnRMYWJlbCgpO1xuICAgICAgfSkudG8oMC4xLCB7XG4gICAgICAgIHNjYWxlOiAxXG4gICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdC51cGRhdGVGaW5pc2hTdGF0ZSgpO1xuICAgICAgICBlICYmIGUoKTtcbiAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfSBlbHNlIGUgJiYgZSgpO1xuICB9XG4gIGdldEJhc2VDYXJkU2NhbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Jhc2VDYXJkU2NhbGU7XG4gIH1cbiAgcGxheVNwaW5lRWZmZWN0KCkge1xuICAgIGlmICh0aGlzLkVmZmVjdFRvcE5vZGUpIHtcbiAgICAgIHZhciBlID0gQmFzZVNwaW5lLmNyZWF0ZShcInNwaW5lL2NvbGxlY3QvZ2FtZXBsYXlfbGlnaHRfZ29hbFwiLCBcImluXCIsIDEsIGZ1bmN0aW9uICgpIHt9LCB0cnVlKTtcbiAgICAgIGlmIChlICYmIGUubm9kZSkge1xuICAgICAgICB0aGlzLkVmZmVjdFRvcE5vZGUuYWRkQ2hpbGQoZS5ub2RlKTtcbiAgICAgICAgZS5ub2RlLnNjYWxlID0gdGhpcy5jYXJkLnNjYWxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICBzdXBlci5vbkRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfVxufSJdfQ==