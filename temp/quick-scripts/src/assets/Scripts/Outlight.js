"use strict";
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