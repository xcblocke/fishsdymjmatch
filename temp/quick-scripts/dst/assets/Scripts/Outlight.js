
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Outlight.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02873PruAdMwKClUvpYAroi', 'Outlight');
// Scripts/Outlight.ts

Object.defineProperty(exports, "__esModule", { value: true });
var ResManager_1 = require("./framework/manager/ResManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent, menu = _a.menu;
var Outlight = /** @class */ (function (_super) {
    __extends(Outlight, _super);
    function Outlight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._renderComponent = null;
        _this._loadComplete = false;
        _this._lightRadius = 10;
        _this._lightOpaque = 2;
        _this._lightColor = cc.Color.BLACK;
        _this._offset = cc.Vec2.ZERO;
        _this._lightAlphaThreshold = 1;
        _this.isBaked = false;
        _this._isLowEndLimited = false;
        _this._bakedRT = null;
        _this._bakeCamera = null;
        _this._rebaking = false;
        _this._bakeNode = null;
        _this._originalParent = null;
        return _this;
    }
    Outlight_1 = Outlight;
    Object.defineProperty(Outlight.prototype, "lightRadius", {
        get: function () {
            return this._lightRadius;
        },
        set: function (e) {
            this._lightRadius = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Outlight.prototype, "lightOpaque", {
        get: function () {
            return this._lightOpaque;
        },
        set: function (e) {
            this._lightOpaque = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Outlight.prototype, "color", {
        get: function () {
            return this._lightColor;
        },
        set: function (e) {
            this._lightColor = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Outlight.prototype, "offset", {
        get: function () {
            return this._offset;
        },
        set: function (e) {
            this._offset = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Outlight.prototype, "lightAlphaThreshold", {
        get: function () {
            return this._lightAlphaThreshold;
        },
        set: function (e) {
            this._lightAlphaThreshold = e;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Outlight.prototype.onLoad = function () {
        var e = this;
        this.isBaked = Outlight_1.isBakedDefault;
        this.getComponent(cc.Sprite) && (this._lightAlphaThreshold = 0.5);
        this.node.on(cc.Node.EventType.SIZE_CHANGED, function () {
            e.updateProperties();
        });
        this.isBaked && this.node.on(cc.Node.EventType.COLOR_CHANGED, function () {
            e.rebake();
        }, this);
        this.scheduleOnce(function () {
            e.LowEndDeviceLimit();
        }, 1);
    };
    Outlight.prototype.update = function () {
        if (this._bakeNode && !this._rebaking) {
            this._bakeNode.setScale(this.node.scaleX, this.node.scaleY);
            this._bakeNode.opacity = this.node.opacity;
            this._bakeNode.setAnchorPoint(this.node.anchorX, this.node.anchorY);
            this._bakeNode.angle = this.node.angle;
        }
    };
    Outlight.prototype.LowEndDeviceLimit = function () {
        if (!this.isBaked && Outlight_1.isLimitLowEndDevice && 1 / cc.director.getDeltaTime() < 40) {
            this._isLowEndLimited = true;
            this.enabled = false;
            this._renderComponent.setMaterial(0, cc.Material.getBuiltinMaterial("2d-sprite"));
        }
    };
    Outlight.prototype.rebake = function () {
        var e = this;
        if (this.isBaked && this.enabledInHierarchy && !this._isLowEndLimited)
            if (this._rebaking)
                this.scheduleOnce(function () {
                    e.rebake();
                }, 0);
            else {
                this._rebaking = true;
                this.scheduleOnce(function () {
                    e._doRebake();
                }, 0);
            }
    };
    Outlight.prototype._doRebake = function () {
        if (this.isBaked && this.enabledInHierarchy && this.node.isValid) {
            this._originalParent = this._originalParent || this.node.parent;
            var e = this.node.width, t = this.node.height;
            if (this._bakedRT && (this._bakedRT.width != e || this._bakedRT.height != t) || !this._bakedRT) {
                if (this._bakedRT) {
                    var o = this._bakedRT;
                    setTimeout(function () {
                        o.destroy();
                    }, 0.1);
                }
                this._bakedRT = new cc.RenderTexture();
                this._bakedRT.initWithSize(e, t);
            }
            var n = cc.Canvas.instance.node.getChildByName("bakedCamera");
            if (!n) {
                (n = new cc.Node("bakedCamera")).parent = cc.Canvas.instance.node;
                var i = n.addComponent(cc.Camera);
                i.clearFlags = cc.Camera.ClearFlags.COLOR | cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL;
                i.backgroundColor = new cc.Color(0, 0, 0, 0);
                i.cullingMask = 20;
                i.ortho = true;
                i.alignWithScreen = false;
            }
            this._bakeCamera = n.getComponent(cc.Camera);
            this._bakeCamera.targetTexture = this._bakedRT;
            this._bakeCamera.orthoSize = 0.5 * t;
            n.active = true;
            n.destroyAllChildren();
            var r = this.node.getPosition(), a = this.node.getAnchorPoint(), l = this.node.getScale(cc.v3()), s = this.node.opacity, c = this.node.angle, u = this._originalParent.getChildByName("bakedNode");
            if (!u) {
                (u = new cc.Node("bakedNode")).setSiblingIndex(this.node.getSiblingIndex());
                u.parent = this._originalParent;
                this._bakeNode = u;
            }
            u.setPosition(r);
            u.setAnchorPoint(a);
            u.setScale(l);
            u.angle = c;
            var p = u.getComponent(cc.Sprite), f = null;
            if (p)
                f = p.spriteFrame;
            else {
                p = u.addComponent(cc.Sprite);
                f = new cc.SpriteFrame();
                p.spriteFrame = f;
                f.setFlipY(true);
            }
            this.node.setPosition(0, 0);
            this.node.setAnchorPoint(0.5, 0.5);
            this.node.setScale(1, 1);
            this.node.opacity = 255;
            this.node.group = "dynamicRender";
            this.node.parent = n;
            var d = cc.gfx;
            this._renderComponent.getMaterial(0).setBlend(true, d.BLEND_FUNC_ADD, d.BLEND_ONE, d.BLEND_ONE_MINUS_SRC_ALPHA, d.BLEND_FUNC_ADD, d.BLEND_ONE, d.BLEND_ONE_MINUS_SRC_ALPHA, 4294967295, 0);
            this._bakeCamera.render();
            this.node.parent = this._originalParent;
            f.setTexture(this._bakedRT);
            p.trim = false;
            p.sizeMode = cc.Sprite.SizeMode.RAW;
            this.node.setPosition(r);
            this.node.setAnchorPoint(a);
            this.node.setScale(l);
            this.node.opacity = s;
            this.node.angle = c;
            this.node.group = "null";
            n.active = false;
            this._rebaking = false;
        }
        else
            this._rebaking = false;
    };
    Outlight.prototype.onEnable = function () {
        var e = this;
        if (!this._isLowEndLimited)
            if (this._renderComponent)
                this.updateProperties();
            else {
                this._renderComponent = this.getComponent(cc.RenderComponent);
                var t = function t(t) {
                    if (!e._isLowEndLimited) {
                        e._loadComplete = true;
                        var o = cc.MaterialVariant.create(t, e._renderComponent);
                        e._renderComponent.setMaterial(0, o);
                        e.updateProperties();
                    }
                };
                ResManager_1.resManager.loadRes("materials/Outlight", cc.Material, "resources").then(function (e) {
                    t(e);
                });
            }
    };
    Outlight.prototype.onDisable = function () {
        this._renderComponent && this._loadComplete && !this._isLowEndLimited && this._renderComponent.getMaterial(0).setProperty("lightAlphaThreshold", 0);
    };
    Outlight.prototype.onDestroy = function () {
        if (this._bakeNode && this._bakeNode.isValid) {
            this._bakeNode.destroy();
            this._bakeNode = null;
        }
        if (this._bakedRT) {
            this._bakedRT.destroy();
            this._bakedRT = null;
        }
    };
    Outlight.prototype.updateProperties = function () {
        if (this._renderComponent && this._loadComplete && !this._isLowEndLimited) {
            var e = new cc.Vec2(this.node.width, this.node.height);
            if (this._renderComponent.spriteFrame) {
                e.x = this._renderComponent.spriteFrame.getTexture().width;
                e.y = this._renderComponent.spriteFrame.getTexture().height;
            }
            e.x = 1 / e.x;
            e.y = 1 / e.y;
            var t = this._renderComponent.getMaterial(0);
            t.setProperty("resolutionUnit", e);
            t.setProperty("blurRadius", this.lightRadius);
            t.setProperty("sampleNum", Math.floor(this.lightRadius / 2));
            t.setProperty("lightColor", this.color);
            t.setProperty("offset", this.offset);
            t.setProperty("lightAlphaThreshold", this.lightAlphaThreshold);
            t.setProperty("lightOpaque", this.lightOpaque);
            this.isBaked && this.rebake();
        }
    };
    var Outlight_1;
    Outlight.isBakedDefault = false;
    Outlight.isLimitLowEndDevice = true;
    __decorate([
        property
    ], Outlight.prototype, "_lightRadius", void 0);
    __decorate([
        property
    ], Outlight.prototype, "_lightOpaque", void 0);
    __decorate([
        property
    ], Outlight.prototype, "_lightColor", void 0);
    __decorate([
        property
    ], Outlight.prototype, "_offset", void 0);
    __decorate([
        property
    ], Outlight.prototype, "_lightAlphaThreshold", void 0);
    __decorate([
        property({
            type: cc.Integer,
            range: [0, 20],
            slide: true,
            tooltip: "发光半径,半径越大越耗性能"
        })
    ], Outlight.prototype, "lightRadius", null);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 10],
            step: 0.1,
            slide: true,
            tooltip: "发光不透明度，不透明度越高，光越实,默认2"
        })
    ], Outlight.prototype, "lightOpaque", null);
    __decorate([
        property({
            type: cc.Color,
            tooltip: "发光颜色"
        })
    ], Outlight.prototype, "color", null);
    __decorate([
        property({
            type: cc.Vec2,
            tooltip: "偏移,可实现阴影"
        })
    ], Outlight.prototype, "offset", null);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 1],
            slide: true,
            tooltip: "效果阈值，判断什么情况下进行阴影计算,字体是默认1，半透精灵的话可以小一点"
        })
    ], Outlight.prototype, "lightAlphaThreshold", null);
    Outlight = Outlight_1 = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.RenderComponent),
        menu("i18n:MAIN_MENU.component.renderers/OutlightAndShadow")
    ], Outlight);
    return Outlight;
}(cc.Component));
exports.default = Outlight;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL091dGxpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBNEQ7QUFDdEQsSUFBQSxLQU1GLEVBQUUsQ0FBQyxVQUFVLEVBTGYsT0FBTyxhQUFBLEVBQ1AsUUFBUSxjQUFBLEVBQ1IsaUJBQWlCLHVCQUFBLEVBQ2pCLGdCQUFnQixzQkFBQSxFQUNoQixJQUFJLFVBQ1csQ0FBQztBQUtsQjtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBQQztRQXpQQyxzQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsbUJBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFFbEIsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFFakIsaUJBQVcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUU3QixhQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFdkIsMEJBQW9CLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLGFBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsc0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZUFBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHFCQUFlLEdBQUcsSUFBSSxDQUFDOztJQXVPekIsQ0FBQztpQkExUG9CLFFBQVE7SUE0QjNCLHNCQUFJLGlDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzthQUNELFVBQWdCLENBQUM7WUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQixDQUFDOzs7T0FKQTtJQVlELHNCQUFJLGlDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzthQUNELFVBQWdCLENBQUM7WUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMxQixDQUFDOzs7T0FKQTtJQVNELHNCQUFJLDJCQUFLO2FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUM7OztPQUpBO0lBU0Qsc0JBQUksNEJBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBVyxDQUFDO1lBQ1YsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQzs7O09BSkE7SUFXRCxzQkFBSSx5Q0FBbUI7YUFBdkI7WUFDRSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNuQyxDQUFDO2FBQ0QsVUFBd0IsQ0FBQztZQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzFCLENBQUM7OztPQUpBO0lBS0QseUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBUSxDQUFDLGNBQWMsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDM0MsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtZQUM1RCxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDYixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBQ0Qsb0NBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksVUFBUSxDQUFDLG1CQUFtQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN4RixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNuRjtJQUNILENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTO2dCQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQzNHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDYixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQUs7Z0JBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ2hCLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ1A7SUFDSCxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUNyQixDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDOUYsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUN0QixVQUFVLENBQUM7d0JBQ1QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNkLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQkFDVDtnQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDbEM7WUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3RHLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7YUFDM0I7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUM3QixDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDOUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUMvQixDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDbkIsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztnQkFDNUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQzthQUNwQjtZQUNELENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFDL0IsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNYLElBQUksQ0FBQztnQkFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztpQkFBSztnQkFDNUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QixDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztZQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLHlCQUF5QixFQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMseUJBQXlCLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzNMLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUN4QyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCOztZQUFNLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFDRCwyQkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFBRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7aUJBQUs7Z0JBQ2xGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDdkIsQ0FBQyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7d0JBQ3ZCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDekQsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO3FCQUN0QjtnQkFDSCxDQUFDLENBQUM7Z0JBQ0YsdUJBQVUsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO29CQUNqRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7YUFDSjtJQUNILENBQUM7SUFDRCw0QkFBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEosQ0FBQztJQUNELDRCQUFTLEdBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUNELG1DQUFnQixHQUFoQjtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekUsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFO2dCQUNyQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUMzRCxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDO2FBQzdEO1lBQ0QsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELENBQUMsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDOztJQXJPTSx1QkFBYyxHQUFHLEtBQUssQ0FBQztJQUN2Qiw0QkFBbUIsR0FBRyxJQUFJLENBQUM7SUFqQmxDO1FBREMsUUFBUTtrREFDUztJQUVsQjtRQURDLFFBQVE7a0RBQ1E7SUFFakI7UUFEQyxRQUFRO2lEQUNvQjtJQUU3QjtRQURDLFFBQVE7NkNBQ2M7SUFFdkI7UUFEQyxRQUFROzBEQUNnQjtJQWdCekI7UUFOQyxRQUFRLENBQUM7WUFDUixJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU87WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNkLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLGVBQWU7U0FDekIsQ0FBQzsrQ0FHRDtJQVlEO1FBUEMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1lBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNkLElBQUksRUFBRSxHQUFHO1lBQ1QsS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsdUJBQXVCO1NBQ2pDLENBQUM7K0NBR0Q7SUFTRDtRQUpDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSztZQUNkLE9BQU8sRUFBRSxNQUFNO1NBQ2hCLENBQUM7eUNBR0Q7SUFTRDtRQUpDLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtZQUNiLE9BQU8sRUFBRSxVQUFVO1NBQ3BCLENBQUM7MENBR0Q7SUFXRDtRQU5DLFFBQVEsQ0FBQztZQUNSLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSztZQUNkLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDYixLQUFLLEVBQUUsSUFBSTtZQUNYLE9BQU8sRUFBRSx1Q0FBdUM7U0FDakQsQ0FBQzt1REFHRDtJQS9Fa0IsUUFBUTtRQUo1QixPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7UUFDcEMsSUFBSSxDQUFDLHNEQUFzRCxDQUFDO09BQ3hDLFFBQVEsQ0EwUDVCO0lBQUQsZUFBQztDQTFQRCxBQTBQQyxDQTFQcUMsRUFBRSxDQUFDLFNBQVMsR0EwUGpEO2tCQTFQb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlc01hbmFnZXIgfSBmcm9tICcuL2ZyYW1ld29yay9tYW5hZ2VyL1Jlc01hbmFnZXInO1xuY29uc3Qge1xuICBjY2NsYXNzLFxuICBwcm9wZXJ0eSxcbiAgZXhlY3V0ZUluRWRpdE1vZGUsXG4gIHJlcXVpcmVDb21wb25lbnQsXG4gIG1lbnVcbn0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbkBleGVjdXRlSW5FZGl0TW9kZVxuQHJlcXVpcmVDb21wb25lbnQoY2MuUmVuZGVyQ29tcG9uZW50KVxuQG1lbnUoXCJpMThuOk1BSU5fTUVOVS5jb21wb25lbnQucmVuZGVyZXJzL091dGxpZ2h0QW5kU2hhZG93XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdXRsaWdodCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIF9yZW5kZXJDb21wb25lbnQgPSBudWxsO1xuICBfbG9hZENvbXBsZXRlID0gZmFsc2U7XG4gIEBwcm9wZXJ0eVxuICBfbGlnaHRSYWRpdXMgPSAxMDtcbiAgQHByb3BlcnR5XG4gIF9saWdodE9wYXF1ZSA9IDI7XG4gIEBwcm9wZXJ0eVxuICBfbGlnaHRDb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xuICBAcHJvcGVydHlcbiAgX29mZnNldCA9IGNjLlZlYzIuWkVSTztcbiAgQHByb3BlcnR5XG4gIF9saWdodEFscGhhVGhyZXNob2xkID0gMTtcbiAgaXNCYWtlZCA9IGZhbHNlO1xuICBfaXNMb3dFbmRMaW1pdGVkID0gZmFsc2U7XG4gIF9iYWtlZFJUID0gbnVsbDtcbiAgX2Jha2VDYW1lcmEgPSBudWxsO1xuICBfcmViYWtpbmcgPSBmYWxzZTtcbiAgX2Jha2VOb2RlID0gbnVsbDtcbiAgX29yaWdpbmFsUGFyZW50ID0gbnVsbDtcbiAgc3RhdGljIGlzQmFrZWREZWZhdWx0ID0gZmFsc2U7XG4gIHN0YXRpYyBpc0xpbWl0TG93RW5kRGV2aWNlID0gdHJ1ZTtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5JbnRlZ2VyLFxuICAgIHJhbmdlOiBbMCwgMjBdLFxuICAgIHNsaWRlOiB0cnVlLFxuICAgIHRvb2x0aXA6IFwi5Y+R5YWJ5Y2K5b6ELOWNiuW+hOi2iuWkp+i2iuiAl+aAp+iDvVwiXG4gIH0pXG4gIGdldCBsaWdodFJhZGl1cygpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlnaHRSYWRpdXM7XG4gIH1cbiAgc2V0IGxpZ2h0UmFkaXVzKGUpIHtcbiAgICB0aGlzLl9saWdodFJhZGl1cyA9IGU7XG4gICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKCk7XG4gIH1cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5GbG9hdCxcbiAgICByYW5nZTogWzAsIDEwXSxcbiAgICBzdGVwOiAwLjEsXG4gICAgc2xpZGU6IHRydWUsXG4gICAgdG9vbHRpcDogXCLlj5HlhYnkuI3pgI/mmI7luqbvvIzkuI3pgI/mmI7luqbotorpq5jvvIzlhYnotorlrp4s6buY6K6kMlwiXG4gIH0pXG4gIGdldCBsaWdodE9wYXF1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlnaHRPcGFxdWU7XG4gIH1cbiAgc2V0IGxpZ2h0T3BhcXVlKGUpIHtcbiAgICB0aGlzLl9saWdodE9wYXF1ZSA9IGU7XG4gICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKCk7XG4gIH1cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiBjYy5Db2xvcixcbiAgICB0b29sdGlwOiBcIuWPkeWFieminOiJslwiXG4gIH0pXG4gIGdldCBjb2xvcigpIHtcbiAgICByZXR1cm4gdGhpcy5fbGlnaHRDb2xvcjtcbiAgfVxuICBzZXQgY29sb3IoZSkge1xuICAgIHRoaXMuX2xpZ2h0Q29sb3IgPSBlO1xuICAgIHRoaXMudXBkYXRlUHJvcGVydGllcygpO1xuICB9XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogY2MuVmVjMixcbiAgICB0b29sdGlwOiBcIuWBj+enuyzlj6/lrp7njrDpmLTlvbFcIlxuICB9KVxuICBnZXQgb2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLl9vZmZzZXQ7XG4gIH1cbiAgc2V0IG9mZnNldChlKSB7XG4gICAgdGhpcy5fb2Zmc2V0ID0gZTtcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgfVxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6IGNjLkZsb2F0LFxuICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgc2xpZGU6IHRydWUsXG4gICAgdG9vbHRpcDogXCLmlYjmnpzpmIjlgLzvvIzliKTmlq3ku4DkuYjmg4XlhrXkuIvov5vooYzpmLTlvbHorqHnrpcs5a2X5L2T5piv6buY6K6kMe+8jOWNiumAj+eyvueBteeahOivneWPr+S7peWwj+S4gOeCuVwiXG4gIH0pXG4gIGdldCBsaWdodEFscGhhVGhyZXNob2xkKCkge1xuICAgIHJldHVybiB0aGlzLl9saWdodEFscGhhVGhyZXNob2xkO1xuICB9XG4gIHNldCBsaWdodEFscGhhVGhyZXNob2xkKGUpIHtcbiAgICB0aGlzLl9saWdodEFscGhhVGhyZXNob2xkID0gZTtcbiAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgdmFyIGUgPSB0aGlzO1xuICAgIHRoaXMuaXNCYWtlZCA9IE91dGxpZ2h0LmlzQmFrZWREZWZhdWx0O1xuICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkgJiYgKHRoaXMuX2xpZ2h0QWxwaGFUaHJlc2hvbGQgPSAwLjUpO1xuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGUudXBkYXRlUHJvcGVydGllcygpO1xuICAgIH0pO1xuICAgIHRoaXMuaXNCYWtlZCAmJiB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuQ09MT1JfQ0hBTkdFRCwgZnVuY3Rpb24gKCkge1xuICAgICAgZS5yZWJha2UoKTtcbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICBlLkxvd0VuZERldmljZUxpbWl0KCk7XG4gICAgfSwgMSk7XG4gIH1cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9iYWtlTm9kZSAmJiAhdGhpcy5fcmViYWtpbmcpIHtcbiAgICAgIHRoaXMuX2Jha2VOb2RlLnNldFNjYWxlKHRoaXMubm9kZS5zY2FsZVgsIHRoaXMubm9kZS5zY2FsZVkpO1xuICAgICAgdGhpcy5fYmFrZU5vZGUub3BhY2l0eSA9IHRoaXMubm9kZS5vcGFjaXR5O1xuICAgICAgdGhpcy5fYmFrZU5vZGUuc2V0QW5jaG9yUG9pbnQodGhpcy5ub2RlLmFuY2hvclgsIHRoaXMubm9kZS5hbmNob3JZKTtcbiAgICAgIHRoaXMuX2Jha2VOb2RlLmFuZ2xlID0gdGhpcy5ub2RlLmFuZ2xlO1xuICAgIH1cbiAgfVxuICBMb3dFbmREZXZpY2VMaW1pdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNCYWtlZCAmJiBPdXRsaWdodC5pc0xpbWl0TG93RW5kRGV2aWNlICYmIDEgLyBjYy5kaXJlY3Rvci5nZXREZWx0YVRpbWUoKSA8IDQwKSB7XG4gICAgICB0aGlzLl9pc0xvd0VuZExpbWl0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZW5kZXJDb21wb25lbnQuc2V0TWF0ZXJpYWwoMCwgY2MuTWF0ZXJpYWwuZ2V0QnVpbHRpbk1hdGVyaWFsKFwiMmQtc3ByaXRlXCIpKTtcbiAgICB9XG4gIH1cbiAgcmViYWtlKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAodGhpcy5pc0Jha2VkICYmIHRoaXMuZW5hYmxlZEluSGllcmFyY2h5ICYmICF0aGlzLl9pc0xvd0VuZExpbWl0ZWQpIGlmICh0aGlzLl9yZWJha2luZykgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgZS5yZWJha2UoKTtcbiAgICB9LCAwKTtlbHNlIHtcbiAgICAgIHRoaXMuX3JlYmFraW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZS5fZG9SZWJha2UoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuICBfZG9SZWJha2UoKSB7XG4gICAgaWYgKHRoaXMuaXNCYWtlZCAmJiB0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSAmJiB0aGlzLm5vZGUuaXNWYWxpZCkge1xuICAgICAgdGhpcy5fb3JpZ2luYWxQYXJlbnQgPSB0aGlzLl9vcmlnaW5hbFBhcmVudCB8fCB0aGlzLm5vZGUucGFyZW50O1xuICAgICAgdmFyIGUgPSB0aGlzLm5vZGUud2lkdGgsXG4gICAgICAgIHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xuICAgICAgaWYgKHRoaXMuX2Jha2VkUlQgJiYgKHRoaXMuX2Jha2VkUlQud2lkdGggIT0gZSB8fCB0aGlzLl9iYWtlZFJULmhlaWdodCAhPSB0KSB8fCAhdGhpcy5fYmFrZWRSVCkge1xuICAgICAgICBpZiAodGhpcy5fYmFrZWRSVCkge1xuICAgICAgICAgIHZhciBvID0gdGhpcy5fYmFrZWRSVDtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG8uZGVzdHJveSgpO1xuICAgICAgICAgIH0sIDAuMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYmFrZWRSVCA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XG4gICAgICAgIHRoaXMuX2Jha2VkUlQuaW5pdFdpdGhTaXplKGUsIHQpO1xuICAgICAgfVxuICAgICAgdmFyIG4gPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJha2VkQ2FtZXJhXCIpO1xuICAgICAgaWYgKCFuKSB7XG4gICAgICAgIChuID0gbmV3IGNjLk5vZGUoXCJiYWtlZENhbWVyYVwiKSkucGFyZW50ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGU7XG4gICAgICAgIHZhciBpID0gbi5hZGRDb21wb25lbnQoY2MuQ2FtZXJhKTtcbiAgICAgICAgaS5jbGVhckZsYWdzID0gY2MuQ2FtZXJhLkNsZWFyRmxhZ3MuQ09MT1IgfCBjYy5DYW1lcmEuQ2xlYXJGbGFncy5ERVBUSCB8IGNjLkNhbWVyYS5DbGVhckZsYWdzLlNURU5DSUw7XG4gICAgICAgIGkuYmFja2dyb3VuZENvbG9yID0gbmV3IGNjLkNvbG9yKDAsIDAsIDAsIDApO1xuICAgICAgICBpLmN1bGxpbmdNYXNrID0gMjA7XG4gICAgICAgIGkub3J0aG8gPSB0cnVlO1xuICAgICAgICBpLmFsaWduV2l0aFNjcmVlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5fYmFrZUNhbWVyYSA9IG4uZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSk7XG4gICAgICB0aGlzLl9iYWtlQ2FtZXJhLnRhcmdldFRleHR1cmUgPSB0aGlzLl9iYWtlZFJUO1xuICAgICAgdGhpcy5fYmFrZUNhbWVyYS5vcnRob1NpemUgPSAwLjUgKiB0O1xuICAgICAgbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgbi5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgIHZhciByID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKCksXG4gICAgICAgIGEgPSB0aGlzLm5vZGUuZ2V0QW5jaG9yUG9pbnQoKSxcbiAgICAgICAgbCA9IHRoaXMubm9kZS5nZXRTY2FsZShjYy52MygpKSxcbiAgICAgICAgcyA9IHRoaXMubm9kZS5vcGFjaXR5LFxuICAgICAgICBjID0gdGhpcy5ub2RlLmFuZ2xlLFxuICAgICAgICB1ID0gdGhpcy5fb3JpZ2luYWxQYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJiYWtlZE5vZGVcIik7XG4gICAgICBpZiAoIXUpIHtcbiAgICAgICAgKHUgPSBuZXcgY2MuTm9kZShcImJha2VkTm9kZVwiKSkuc2V0U2libGluZ0luZGV4KHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKSk7XG4gICAgICAgIHUucGFyZW50ID0gdGhpcy5fb3JpZ2luYWxQYXJlbnQ7XG4gICAgICAgIHRoaXMuX2Jha2VOb2RlID0gdTtcbiAgICAgIH1cbiAgICAgIHUuc2V0UG9zaXRpb24ocik7XG4gICAgICB1LnNldEFuY2hvclBvaW50KGEpO1xuICAgICAgdS5zZXRTY2FsZShsKTtcbiAgICAgIHUuYW5nbGUgPSBjO1xuICAgICAgdmFyIHAgPSB1LmdldENvbXBvbmVudChjYy5TcHJpdGUpLFxuICAgICAgICBmID0gbnVsbDtcbiAgICAgIGlmIChwKSBmID0gcC5zcHJpdGVGcmFtZTtlbHNlIHtcbiAgICAgICAgcCA9IHUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGYgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcbiAgICAgICAgcC5zcHJpdGVGcmFtZSA9IGY7XG4gICAgICAgIGYuc2V0RmxpcFkodHJ1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oMCwgMCk7XG4gICAgICB0aGlzLm5vZGUuc2V0QW5jaG9yUG9pbnQoMC41LCAwLjUpO1xuICAgICAgdGhpcy5ub2RlLnNldFNjYWxlKDEsIDEpO1xuICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICB0aGlzLm5vZGUuZ3JvdXAgPSBcImR5bmFtaWNSZW5kZXJcIjtcbiAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBuO1xuICAgICAgdmFyIGQgPSBjYy5nZng7XG4gICAgICB0aGlzLl9yZW5kZXJDb21wb25lbnQuZ2V0TWF0ZXJpYWwoMCkuc2V0QmxlbmQodHJ1ZSwgZC5CTEVORF9GVU5DX0FERCwgZC5CTEVORF9PTkUsIGQuQkxFTkRfT05FX01JTlVTX1NSQ19BTFBIQSwgZC5CTEVORF9GVU5DX0FERCwgZC5CTEVORF9PTkUsIGQuQkxFTkRfT05FX01JTlVTX1NSQ19BTFBIQSwgNDI5NDk2NzI5NSwgMCk7XG4gICAgICB0aGlzLl9iYWtlQ2FtZXJhLnJlbmRlcigpO1xuICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IHRoaXMuX29yaWdpbmFsUGFyZW50O1xuICAgICAgZi5zZXRUZXh0dXJlKHRoaXMuX2Jha2VkUlQpO1xuICAgICAgcC50cmltID0gZmFsc2U7XG4gICAgICBwLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlJBVztcbiAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihyKTtcbiAgICAgIHRoaXMubm9kZS5zZXRBbmNob3JQb2ludChhKTtcbiAgICAgIHRoaXMubm9kZS5zZXRTY2FsZShsKTtcbiAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gcztcbiAgICAgIHRoaXMubm9kZS5hbmdsZSA9IGM7XG4gICAgICB0aGlzLm5vZGUuZ3JvdXAgPSBcIm51bGxcIjtcbiAgICAgIG4uYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9yZWJha2luZyA9IGZhbHNlO1xuICAgIH0gZWxzZSB0aGlzLl9yZWJha2luZyA9IGZhbHNlO1xuICB9XG4gIG9uRW5hYmxlKCkge1xuICAgIHZhciBlID0gdGhpcztcbiAgICBpZiAoIXRoaXMuX2lzTG93RW5kTGltaXRlZCkgaWYgKHRoaXMuX3JlbmRlckNvbXBvbmVudCkgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKCk7ZWxzZSB7XG4gICAgICB0aGlzLl9yZW5kZXJDb21wb25lbnQgPSB0aGlzLmdldENvbXBvbmVudChjYy5SZW5kZXJDb21wb25lbnQpO1xuICAgICAgdmFyIHQgPSBmdW5jdGlvbiB0KHQpIHtcbiAgICAgICAgaWYgKCFlLl9pc0xvd0VuZExpbWl0ZWQpIHtcbiAgICAgICAgICBlLl9sb2FkQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgIHZhciBvID0gY2MuTWF0ZXJpYWxWYXJpYW50LmNyZWF0ZSh0LCBlLl9yZW5kZXJDb21wb25lbnQpO1xuICAgICAgICAgIGUuX3JlbmRlckNvbXBvbmVudC5zZXRNYXRlcmlhbCgwLCBvKTtcbiAgICAgICAgICBlLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJlc01hbmFnZXIubG9hZFJlcyhcIm1hdGVyaWFscy9PdXRsaWdodFwiLCBjYy5NYXRlcmlhbCwgXCJyZXNvdXJjZXNcIikudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICB0KGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIG9uRGlzYWJsZSgpIHtcbiAgICB0aGlzLl9yZW5kZXJDb21wb25lbnQgJiYgdGhpcy5fbG9hZENvbXBsZXRlICYmICF0aGlzLl9pc0xvd0VuZExpbWl0ZWQgJiYgdGhpcy5fcmVuZGVyQ29tcG9uZW50LmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KFwibGlnaHRBbHBoYVRocmVzaG9sZFwiLCAwKTtcbiAgfVxuICBvbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2Jha2VOb2RlICYmIHRoaXMuX2Jha2VOb2RlLmlzVmFsaWQpIHtcbiAgICAgIHRoaXMuX2Jha2VOb2RlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2Jha2VOb2RlID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2Jha2VkUlQpIHtcbiAgICAgIHRoaXMuX2Jha2VkUlQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5fYmFrZWRSVCA9IG51bGw7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVByb3BlcnRpZXMoKSB7XG4gICAgaWYgKHRoaXMuX3JlbmRlckNvbXBvbmVudCAmJiB0aGlzLl9sb2FkQ29tcGxldGUgJiYgIXRoaXMuX2lzTG93RW5kTGltaXRlZCkge1xuICAgICAgdmFyIGUgPSBuZXcgY2MuVmVjMih0aGlzLm5vZGUud2lkdGgsIHRoaXMubm9kZS5oZWlnaHQpO1xuICAgICAgaWYgKHRoaXMuX3JlbmRlckNvbXBvbmVudC5zcHJpdGVGcmFtZSkge1xuICAgICAgICBlLnggPSB0aGlzLl9yZW5kZXJDb21wb25lbnQuc3ByaXRlRnJhbWUuZ2V0VGV4dHVyZSgpLndpZHRoO1xuICAgICAgICBlLnkgPSB0aGlzLl9yZW5kZXJDb21wb25lbnQuc3ByaXRlRnJhbWUuZ2V0VGV4dHVyZSgpLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIGUueCA9IDEgLyBlLng7XG4gICAgICBlLnkgPSAxIC8gZS55O1xuICAgICAgdmFyIHQgPSB0aGlzLl9yZW5kZXJDb21wb25lbnQuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICB0LnNldFByb3BlcnR5KFwicmVzb2x1dGlvblVuaXRcIiwgZSk7XG4gICAgICB0LnNldFByb3BlcnR5KFwiYmx1clJhZGl1c1wiLCB0aGlzLmxpZ2h0UmFkaXVzKTtcbiAgICAgIHQuc2V0UHJvcGVydHkoXCJzYW1wbGVOdW1cIiwgTWF0aC5mbG9vcih0aGlzLmxpZ2h0UmFkaXVzIC8gMikpO1xuICAgICAgdC5zZXRQcm9wZXJ0eShcImxpZ2h0Q29sb3JcIiwgdGhpcy5jb2xvcik7XG4gICAgICB0LnNldFByb3BlcnR5KFwib2Zmc2V0XCIsIHRoaXMub2Zmc2V0KTtcbiAgICAgIHQuc2V0UHJvcGVydHkoXCJsaWdodEFscGhhVGhyZXNob2xkXCIsIHRoaXMubGlnaHRBbHBoYVRocmVzaG9sZCk7XG4gICAgICB0LnNldFByb3BlcnR5KFwibGlnaHRPcGFxdWVcIiwgdGhpcy5saWdodE9wYXF1ZSk7XG4gICAgICB0aGlzLmlzQmFrZWQgJiYgdGhpcy5yZWJha2UoKTtcbiAgICB9XG4gIH1cbn0iXX0=