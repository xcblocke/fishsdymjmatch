
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_guideNew/Scripts/GuideNewTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '949e2oekKBLJb4N6o6s6Vu1', 'GuideNewTrait');
// subpackages/l_guideNew/Scripts/GuideNewTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.EGuideDisplayType = void 0;
var GameUtils_1 = require("../../../Scripts/core/simulator/util/GameUtils");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var UserModel_1 = require("../../../Scripts/gamePlay/user/UserModel");
var BaseSprite_1 = require("../../../Scripts/gamePlay/base/ui/BaseSprite");
var CardUtil_1 = require("../../../Scripts/gamePlay/user/CardUtil");
var EGuideDisplayType;
(function (EGuideDisplayType) {
    EGuideDisplayType[EGuideDisplayType["None"] = 0] = "None";
    EGuideDisplayType[EGuideDisplayType["Click"] = 1] = "Click";
    EGuideDisplayType[EGuideDisplayType["Drag"] = 2] = "Drag";
    EGuideDisplayType[EGuideDisplayType["DoubleClick"] = 3] = "DoubleClick";
})(EGuideDisplayType = exports.EGuideDisplayType || (exports.EGuideDisplayType = {}));
var GuideNewTrait = /** @class */ (function (_super) {
    __extends(GuideNewTrait, _super);
    function GuideNewTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._guideUI = null;
        _this._guideStep = -1;
        _this._displayType = [EGuideDisplayType.Click, EGuideDisplayType.Drag, EGuideDisplayType.DoubleClick];
        return _this;
    }
    GuideNewTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this._displayType = this.traitData.displayType;
    };
    GuideNewTrait.prototype.isGuideActive = function () {
        var e = mj.getClassByName("GuideTrait");
        return !(!e || !e.getInstance() || true !== e.getInstance().eventEnabled || UserModel_1.default.getInstance().isGuideFinished());
    };
    GuideNewTrait.prototype.getGuideStep = function () {
        return this.isGuideActive() ? mj.getClassByName("GuideTrait").getInstance().guideStep : -1;
    };
    GuideNewTrait.prototype.showGuide = function (e, t, i) {
        if (i === EGuideDisplayType.Drag) {
            this.showDragGuide(e, t);
        }
        else {
            if (i === EGuideDisplayType.DoubleClick) {
                this.showDoubleClickGuide(e, t);
            }
            else {
                i === EGuideDisplayType.None && cc.isValid(this._guideUI) && (this._guideUI.getNodeHand().active = false);
            }
        }
    };
    GuideNewTrait.prototype.createDragGuideNode = function () {
        var e = new cc.Node();
        this._dragGuideNode = e;
        var t = new cc.Node();
        this._guideUI.getNodeHand().addChild(e, -1);
        e.addComponent(cc.Sprite);
        t.parent = e;
        t.addComponent(cc.Sprite);
        this._dragGuideFlowerNode = t;
    };
    GuideNewTrait.prototype.refreshDragSprite = function (e) {
        var t = CardUtil_1.default.getAtlasPathAndBundleName("gameplay_img_mj_up"), i = t.path, a = t.bundleName, o = t.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._dragGuideNode, i, o, false, a);
        this._dragGuideNode.setContentSize(e.info.tileObject.getBgContentSize());
        var n = CardUtil_1.default.getAtlasPathAndBundleName(e.info.tileObject.resName), r = n.path, d = n.bundleName, s = n.fromAtlas;
        BaseSprite_1.default.refreshWithNode(this._dragGuideFlowerNode, r, s, false, d);
        this._dragGuideFlowerNode.scale = e.animNode.scale;
    };
    GuideNewTrait.prototype.showDragGuide = function (e, t) {
        var i = this;
        if (cc.isValid(this._guideUI)) {
            var a = this._guideUI.getNodeHand();
            if (cc.isValid(a)) {
                this._dragGuideNode || this.createDragGuideNode();
                this._dragGuideNode.active = true;
                this.refreshDragSprite(e);
                this._dragGuideNode.opacity = 0;
                this._dragGuideNode.scale = 1.2;
                var o = e.layerNode.convertToWorldSpaceAR(e.info.tileObject.getPosition()), n = this._guideUI.node.parent.convertToNodeSpaceAR(o), r = t.layerNode.convertToWorldSpaceAR(t.info.tileObject.getPosition()), s = this._guideUI.node.parent.convertToNodeSpaceAR(r);
                cc.Tween.stopAllByTarget(a);
                var c = function c() {
                    if (cc.isValid(i._guideUI)) {
                        a.opacity = 255;
                        i._dragGuideNode.opacity = 0;
                        GameUtils_1.default.playSpine(i._guideUI._handSpine, "in_drag", false, function () {
                            GameUtils_1.default.playSpine(i._guideUI._handSpine, "init_drag", true);
                            cc.tween(a).delay(0.1).call(function () {
                                cc.isValid(i._guideUI) && (i._dragGuideNode.opacity = 153);
                            }).to(0.5, {
                                position: s
                            }).call(function () {
                                cc.isValid(i._guideUI) && (a.opacity = 0);
                            }).delay(0.33).call(function () {
                                cc.isValid(i._guideUI) && a.setPosition(n);
                                c();
                            }).start();
                        });
                        if (cc.isValid(i._guideUI)) {
                            cc.Tween.stopAllByTarget(a);
                            a.setPosition(n);
                        }
                    }
                };
                c();
            }
        }
    };
    GuideNewTrait.prototype.showDoubleClickGuide = function (e, t) {
        var i = this;
        if (cc.isValid(this._guideUI)) {
            var a = this._guideUI.getNodeHand();
            if (cc.isValid(a)) {
                cc.Tween.stopAllByTarget(a);
                a.scaleX = -1;
                var o = e.layerNode.convertToWorldSpaceAR(e.info.tileObject.getPosition()), n = (this._guideUI.node.parent.convertToNodeSpaceAR(o), t.layerNode.convertToWorldSpaceAR(t.info.tileObject.getPosition())), r = this._guideUI.node.parent.convertToNodeSpaceAR(n);
                if (!this._nodeHandRight) {
                    var s = new cc.Node();
                    s.parent = a.parent;
                    s.setPosition(cc.v2(-a.position.x, a.position.y));
                    s.name = "nodeHand2";
                    this._nodeHandRight = s;
                }
                this._nodeHandRight.active = true;
                this._guideUI.loadRes("prefabs/guide/guidehand", cc.Prefab, "mainRes").then(function (e) {
                    if (cc.isValid(i._guideUI)) {
                        i._nodeHandRight.removeAllChildren();
                        var t = cc.instantiate(e);
                        t.parent = i._nodeHandRight;
                        var a = t.getComponent(sp.Skeleton);
                        GameUtils_1.default.playSpine(a, "in", false, function () {
                            GameUtils_1.default.playSpine(a, "init", true);
                        });
                        GameUtils_1.default.playSpine(i._guideUI._handSpine, "in", false, function () {
                            GameUtils_1.default.playSpine(i._guideUI._handSpine, "init", true);
                        });
                    }
                });
                cc.Tween.stopAllByTarget(this._nodeHandRight);
                this._nodeHandRight.opacity = 255;
                cc.tween(this._nodeHandRight).to(0.23, {
                    position: r
                }).call(function () {
                    cc.isValid(i._guideUI) && i._nodeHandRight.setPosition(r);
                }).start();
            }
        }
    };
    GuideNewTrait.prototype.onGuideBhv_start = function (e, t) {
        if (this.isGuideActive()) {
            this._guideContext = e.ins.context;
            this._guideStep = this.getGuideStep();
            t();
        }
        else
            t();
    };
    GuideNewTrait.prototype.onGuide_getSelectTileId = function (e, t) {
        if (this.isGuideActive()) {
            this._gameController = e.args[0];
            t();
        }
        else
            t();
    };
    GuideNewTrait.prototype.onGtc_isOpenTouchMove = function (e, t) {
        if (this.isGuideActive()) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: true
            });
        }
        else {
            t();
        }
    };
    GuideNewTrait.prototype.onIptBTchEnd_checkIsSame = function (e, t) {
        if (this.isGuideActive()) {
            t({
                isBreak: true,
                returnType: TraitManager_1.TraitCallbackReturnType.jump,
                returnVal: false
            });
        }
        else {
            t();
        }
    };
    GuideNewTrait.prototype.onGuideUI_playHandSpi = function (e, t) {
        var i, a;
        if (this.isGuideActive()) {
            var o = mj.getClassByName("GuideTrait"), n = e.ins;
            this._guideUI = n;
            if (o && o.getInstance()) {
                var d = o.getInstance().guideStep, s = this._displayType[d];
                if (s === EGuideDisplayType.Click) {
                    t();
                    return;
                }
                var l = this._gameController.tileMapObject.getCanMatchTilesHint();
                if (0 == l.length) {
                    this._gameController.tileMapObject.updateCanMatchTiles();
                    l = this._gameController.tileMapObject.getCanMatchTilesHint();
                }
                if (!l.length) {
                    t();
                    return;
                }
                var u = l[0], p = null === (i = u[0]) || void 0 === i ? void 0 : i.id, g = null === (a = u[1]) || void 0 === a ? void 0 : a.id;
                if (p && g) {
                    this._gameController.tileMapObject.getTileObject(p), this._gameController.tileMapObject.getTileObject(g);
                    var h = this._guideContext.getTileNodeMap().get(p), f = this._guideContext.getTileNodeMap().get(g);
                    this.showGuide(h, f, s);
                    t({
                        returnType: TraitManager_1.TraitCallbackReturnType.return,
                        isBreak: true
                    });
                    return;
                }
            }
            t();
        }
        else
            t();
    };
    GuideNewTrait.prototype.onIptBase_pushClrEff = function (e, t) {
        if (this.isGuideActive()) {
            if (cc.isValid(this._guideUI)) {
                var i = this._guideUI.getNodeHand();
                if (cc.isValid(i)) {
                    this._nodeHandRight && (this._nodeHandRight.active = false);
                    this._dragGuideNode && (this._dragGuideNode.active = false);
                    i.scaleX = 1;
                    i.scaleY = 1;
                    t();
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    GuideNewTrait.prototype.onInputGuide_pushEfData = function (e, t) {
        if (this.isGuideActive() && cc.isValid(this._guideUI)) {
            var i = this._guideUI.getNodeHand();
            if (cc.isValid(i)) {
                var a = this._displayType[this.getGuideStep()];
                if (a !== EGuideDisplayType.None && a !== EGuideDisplayType.Click) {
                    var o = e.args[0], n = e.args[1];
                    if (o.isSelect || n.isSelect) {
                        i.scale = 0;
                        a === EGuideDisplayType.DoubleClick && this._nodeHandRight && (this._nodeHandRight.scale = 0);
                        t({
                            returnType: TraitManager_1.TraitCallbackReturnType.return,
                            isBreak: true
                        });
                    }
                    else {
                        if (a === EGuideDisplayType.Drag) {
                            var d = this._guideContext.getTileNodeMap().get(o.id), s = this._guideContext.getTileNodeMap().get(n.id);
                            this.showDragGuide(d, s);
                            i.scale = 1;
                        }
                        else if (a === EGuideDisplayType.DoubleClick) {
                            this._nodeHandRight && (this._nodeHandRight.scale = 1);
                            i.scale = 1;
                            i.scaleX = -1;
                            i.opacity = 255;
                        }
                        t();
                    }
                }
                else
                    t();
            }
            else
                t();
        }
        else
            t();
    };
    GuideNewTrait.traitKey = "GuideNew";
    GuideNewTrait = __decorate([
        mj.trait,
        mj.class("GuideNewTrait")
    ], GuideNewTrait);
    return GuideNewTrait;
}(Trait_1.default));
exports.default = GuideNewTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2d1aWRlTmV3L1NjcmlwdHMvR3VpZGVOZXdUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUF1RTtBQUN2RSxnRUFBMkQ7QUFDM0QsOEVBQXdGO0FBQ3hGLHNFQUFpRTtBQUNqRSwyRUFBc0U7QUFDdEUsb0VBQStEO0FBQy9ELElBQVksaUJBS1g7QUFMRCxXQUFZLGlCQUFpQjtJQUMzQix5REFBUSxDQUFBO0lBQ1IsMkRBQVMsQ0FBQTtJQUNULHlEQUFRLENBQUE7SUFDUix1RUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFMVyxpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQUs1QjtBQUdEO0lBQTJDLGlDQUFLO0lBQWhEO1FBQUEscUVBaVFDO1FBaFFDLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZ0JBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixrQkFBWSxHQUFHLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUE4UGxHLENBQUM7SUE1UEMsOEJBQU0sR0FBTjtRQUNFLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztJQUNqRCxDQUFDO0lBQ0QscUNBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLElBQUksbUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxlQUFlLEVBQUUs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QUUsQ0FBQyxFQUNuRCxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDekIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7eUJBQ2I7NkJBQU0sSUFBSSxDQUFDLEtBQUssaUJBQWlCLENBQUMsV0FBVyxFQUFFOzRCQUM5QyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZELENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOzRCQUNaLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ2QsQ0FBQyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7eUJBQ2pCO3dCQUNELENBQUMsRUFBRSxDQUFDO3FCQUNMO2lCQUNGOztvQkFBTSxDQUFDLEVBQUUsQ0FBQzthQUNaOztnQkFBTSxDQUFDLEVBQUUsQ0FBQztTQUNaOztZQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQTVQTSxzQkFBUSxHQUFHLFVBQVUsQ0FBQztJQUpWLGFBQWE7UUFGakMsRUFBRSxDQUFDLEtBQUs7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQztPQUNMLGFBQWEsQ0FpUWpDO0lBQUQsb0JBQUM7Q0FqUUQsQUFpUUMsQ0FqUTBDLGVBQUssR0FpUS9DO2tCQWpRb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVXRpbHMgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9jb3JlL3NpbXVsYXRvci91dGlsL0dhbWVVdGlscyc7XG5pbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuaW1wb3J0IFVzZXJNb2RlbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvVXNlck1vZGVsJztcbmltcG9ydCBCYXNlU3ByaXRlIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZ2FtZVBsYXkvYmFzZS91aS9CYXNlU3ByaXRlJztcbmltcG9ydCBDYXJkVXRpbCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2dhbWVQbGF5L3VzZXIvQ2FyZFV0aWwnO1xuZXhwb3J0IGVudW0gRUd1aWRlRGlzcGxheVR5cGUge1xuICBOb25lID0gMCxcbiAgQ2xpY2sgPSAxLFxuICBEcmFnID0gMixcbiAgRG91YmxlQ2xpY2sgPSAzLFxufVxuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJHdWlkZU5ld1RyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHdWlkZU5ld1RyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfZ3VpZGVVSSA9IG51bGw7XG4gIF9ndWlkZVN0ZXAgPSAtMTtcbiAgX2Rpc3BsYXlUeXBlID0gW0VHdWlkZURpc3BsYXlUeXBlLkNsaWNrLCBFR3VpZGVEaXNwbGF5VHlwZS5EcmFnLCBFR3VpZGVEaXNwbGF5VHlwZS5Eb3VibGVDbGlja107XG4gIHN0YXRpYyB0cmFpdEtleSA9IFwiR3VpZGVOZXdcIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX2Rpc3BsYXlUeXBlID0gdGhpcy50cmFpdERhdGEuZGlzcGxheVR5cGU7XG4gIH1cbiAgaXNHdWlkZUFjdGl2ZSgpIHtcbiAgICB2YXIgZSA9IG1qLmdldENsYXNzQnlOYW1lKFwiR3VpZGVUcmFpdFwiKTtcbiAgICByZXR1cm4gISghZSB8fCAhZS5nZXRJbnN0YW5jZSgpIHx8IHRydWUgIT09IGUuZ2V0SW5zdGFuY2UoKS5ldmVudEVuYWJsZWQgfHwgVXNlck1vZGVsLmdldEluc3RhbmNlKCkuaXNHdWlkZUZpbmlzaGVkKCkpO1xuICB9XG4gIGdldEd1aWRlU3RlcCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0d1aWRlQWN0aXZlKCkgPyBtai5nZXRDbGFzc0J5TmFtZShcIkd1aWRlVHJhaXRcIikuZ2V0SW5zdGFuY2UoKS5ndWlkZVN0ZXAgOiAtMTtcbiAgfVxuICBzaG93R3VpZGUoZSwgdCwgaSkge1xuICAgIGlmIChpID09PSBFR3VpZGVEaXNwbGF5VHlwZS5EcmFnKSB7XG4gICAgICB0aGlzLnNob3dEcmFnR3VpZGUoZSwgdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpID09PSBFR3VpZGVEaXNwbGF5VHlwZS5Eb3VibGVDbGljaykge1xuICAgICAgICB0aGlzLnNob3dEb3VibGVDbGlja0d1aWRlKGUsIHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSA9PT0gRUd1aWRlRGlzcGxheVR5cGUuTm9uZSAmJiBjYy5pc1ZhbGlkKHRoaXMuX2d1aWRlVUkpICYmICh0aGlzLl9ndWlkZVVJLmdldE5vZGVIYW5kKCkuYWN0aXZlID0gZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjcmVhdGVEcmFnR3VpZGVOb2RlKCkge1xuICAgIHZhciBlID0gbmV3IGNjLk5vZGUoKTtcbiAgICB0aGlzLl9kcmFnR3VpZGVOb2RlID0gZTtcbiAgICB2YXIgdCA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgdGhpcy5fZ3VpZGVVSS5nZXROb2RlSGFuZCgpLmFkZENoaWxkKGUsIC0xKTtcbiAgICBlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIHQucGFyZW50ID0gZTtcbiAgICB0LmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIHRoaXMuX2RyYWdHdWlkZUZsb3dlck5vZGUgPSB0O1xuICB9XG4gIHJlZnJlc2hEcmFnU3ByaXRlKGUpIHtcbiAgICB2YXIgdCA9IENhcmRVdGlsLmdldEF0bGFzUGF0aEFuZEJ1bmRsZU5hbWUoXCJnYW1lcGxheV9pbWdfbWpfdXBcIiksXG4gICAgICBpID0gdC5wYXRoLFxuICAgICAgYSA9IHQuYnVuZGxlTmFtZSxcbiAgICAgIG8gPSB0LmZyb21BdGxhcztcbiAgICBCYXNlU3ByaXRlLnJlZnJlc2hXaXRoTm9kZSh0aGlzLl9kcmFnR3VpZGVOb2RlLCBpLCBvLCBmYWxzZSwgYSk7XG4gICAgdGhpcy5fZHJhZ0d1aWRlTm9kZS5zZXRDb250ZW50U2l6ZShlLmluZm8udGlsZU9iamVjdC5nZXRCZ0NvbnRlbnRTaXplKCkpO1xuICAgIHZhciBuID0gQ2FyZFV0aWwuZ2V0QXRsYXNQYXRoQW5kQnVuZGxlTmFtZShlLmluZm8udGlsZU9iamVjdC5yZXNOYW1lKSxcbiAgICAgIHIgPSBuLnBhdGgsXG4gICAgICBkID0gbi5idW5kbGVOYW1lLFxuICAgICAgcyA9IG4uZnJvbUF0bGFzO1xuICAgIEJhc2VTcHJpdGUucmVmcmVzaFdpdGhOb2RlKHRoaXMuX2RyYWdHdWlkZUZsb3dlck5vZGUsIHIsIHMsIGZhbHNlLCBkKTtcbiAgICB0aGlzLl9kcmFnR3VpZGVGbG93ZXJOb2RlLnNjYWxlID0gZS5hbmltTm9kZS5zY2FsZTtcbiAgfVxuICBzaG93RHJhZ0d1aWRlKGUsIHQpIHtcbiAgICB2YXIgaSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fZ3VpZGVVSSkpIHtcbiAgICAgIHZhciBhID0gdGhpcy5fZ3VpZGVVSS5nZXROb2RlSGFuZCgpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQoYSkpIHtcbiAgICAgICAgdGhpcy5fZHJhZ0d1aWRlTm9kZSB8fCB0aGlzLmNyZWF0ZURyYWdHdWlkZU5vZGUoKTtcbiAgICAgICAgdGhpcy5fZHJhZ0d1aWRlTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZnJlc2hEcmFnU3ByaXRlKGUpO1xuICAgICAgICB0aGlzLl9kcmFnR3VpZGVOb2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLl9kcmFnR3VpZGVOb2RlLnNjYWxlID0gMS4yO1xuICAgICAgICB2YXIgbyA9IGUubGF5ZXJOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihlLmluZm8udGlsZU9iamVjdC5nZXRQb3NpdGlvbigpKSxcbiAgICAgICAgICBuID0gdGhpcy5fZ3VpZGVVSS5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihvKSxcbiAgICAgICAgICByID0gdC5sYXllck5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHQuaW5mby50aWxlT2JqZWN0LmdldFBvc2l0aW9uKCkpLFxuICAgICAgICAgIHMgPSB0aGlzLl9ndWlkZVVJLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHIpO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoYSk7XG4gICAgICAgIHZhciBjID0gZnVuY3Rpb24gYygpIHtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZChpLl9ndWlkZVVJKSkge1xuICAgICAgICAgICAgYS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgaS5fZHJhZ0d1aWRlTm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUoaS5fZ3VpZGVVSS5faGFuZFNwaW5lLCBcImluX2RyYWdcIiwgZmFsc2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShpLl9ndWlkZVVJLl9oYW5kU3BpbmUsIFwiaW5pdF9kcmFnXCIsIHRydWUpO1xuICAgICAgICAgICAgICBjYy50d2VlbihhKS5kZWxheSgwLjEpLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNjLmlzVmFsaWQoaS5fZ3VpZGVVSSkgJiYgKGkuX2RyYWdHdWlkZU5vZGUub3BhY2l0eSA9IDE1Myk7XG4gICAgICAgICAgICAgIH0pLnRvKDAuNSwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzXG4gICAgICAgICAgICAgIH0pLmNhbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNjLmlzVmFsaWQoaS5fZ3VpZGVVSSkgJiYgKGEub3BhY2l0eSA9IDApO1xuICAgICAgICAgICAgICB9KS5kZWxheSgwLjMzKS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYy5pc1ZhbGlkKGkuX2d1aWRlVUkpICYmIGEuc2V0UG9zaXRpb24obik7XG4gICAgICAgICAgICAgICAgYygpO1xuICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2MuaXNWYWxpZChpLl9ndWlkZVVJKSkge1xuICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoYSk7XG4gICAgICAgICAgICAgIGEuc2V0UG9zaXRpb24obik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHNob3dEb3VibGVDbGlja0d1aWRlKGUsIHQpIHtcbiAgICB2YXIgaSA9IHRoaXM7XG4gICAgaWYgKGNjLmlzVmFsaWQodGhpcy5fZ3VpZGVVSSkpIHtcbiAgICAgIHZhciBhID0gdGhpcy5fZ3VpZGVVSS5nZXROb2RlSGFuZCgpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQoYSkpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGEpO1xuICAgICAgICBhLnNjYWxlWCA9IC0xO1xuICAgICAgICB2YXIgbyA9IGUubGF5ZXJOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihlLmluZm8udGlsZU9iamVjdC5nZXRQb3NpdGlvbigpKSxcbiAgICAgICAgICBuID0gKHRoaXMuX2d1aWRlVUkubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobyksIHQubGF5ZXJOb2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0LmluZm8udGlsZU9iamVjdC5nZXRQb3NpdGlvbigpKSksXG4gICAgICAgICAgciA9IHRoaXMuX2d1aWRlVUkubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobik7XG4gICAgICAgIGlmICghdGhpcy5fbm9kZUhhbmRSaWdodCkge1xuICAgICAgICAgIHZhciBzID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgICBzLnBhcmVudCA9IGEucGFyZW50O1xuICAgICAgICAgIHMuc2V0UG9zaXRpb24oY2MudjIoLWEucG9zaXRpb24ueCwgYS5wb3NpdGlvbi55KSk7XG4gICAgICAgICAgcy5uYW1lID0gXCJub2RlSGFuZDJcIjtcbiAgICAgICAgICB0aGlzLl9ub2RlSGFuZFJpZ2h0ID0gcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9ub2RlSGFuZFJpZ2h0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2d1aWRlVUkubG9hZFJlcyhcInByZWZhYnMvZ3VpZGUvZ3VpZGVoYW5kXCIsIGNjLlByZWZhYiwgXCJtYWluUmVzXCIpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZChpLl9ndWlkZVVJKSkge1xuICAgICAgICAgICAgaS5fbm9kZUhhbmRSaWdodC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgdmFyIHQgPSBjYy5pbnN0YW50aWF0ZShlKTtcbiAgICAgICAgICAgIHQucGFyZW50ID0gaS5fbm9kZUhhbmRSaWdodDtcbiAgICAgICAgICAgIHZhciBhID0gdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgR2FtZVV0aWxzLnBsYXlTcGluZShhLCBcImluXCIsIGZhbHNlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIEdhbWVVdGlscy5wbGF5U3BpbmUoYSwgXCJpbml0XCIsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGkuX2d1aWRlVUkuX2hhbmRTcGluZSwgXCJpblwiLCBmYWxzZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBHYW1lVXRpbHMucGxheVNwaW5lKGkuX2d1aWRlVUkuX2hhbmRTcGluZSwgXCJpbml0XCIsIHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuX25vZGVIYW5kUmlnaHQpO1xuICAgICAgICB0aGlzLl9ub2RlSGFuZFJpZ2h0Lm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuX25vZGVIYW5kUmlnaHQpLnRvKDAuMjMsIHtcbiAgICAgICAgICBwb3NpdGlvbjogclxuICAgICAgICB9KS5jYWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYy5pc1ZhbGlkKGkuX2d1aWRlVUkpICYmIGkuX25vZGVIYW5kUmlnaHQuc2V0UG9zaXRpb24ocik7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uR3VpZGVCaHZfc3RhcnQoZSwgdCkge1xuICAgIGlmICh0aGlzLmlzR3VpZGVBY3RpdmUoKSkge1xuICAgICAgdGhpcy5fZ3VpZGVDb250ZXh0ID0gZS5pbnMuY29udGV4dDtcbiAgICAgIHRoaXMuX2d1aWRlU3RlcCA9IHRoaXMuZ2V0R3VpZGVTdGVwKCk7XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbkd1aWRlX2dldFNlbGVjdFRpbGVJZChlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNHdWlkZUFjdGl2ZSgpKSB7XG4gICAgICB0aGlzLl9nYW1lQ29udHJvbGxlciA9IGUuYXJnc1swXTtcbiAgICAgIHQoKTtcbiAgICB9IGVsc2UgdCgpO1xuICB9XG4gIG9uR3RjX2lzT3BlblRvdWNoTW92ZShlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNHdWlkZUFjdGl2ZSgpKSB7XG4gICAgICB0KHtcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUuanVtcCxcbiAgICAgICAgcmV0dXJuVmFsOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdCgpO1xuICAgIH1cbiAgfVxuICBvbklwdEJUY2hFbmRfY2hlY2tJc1NhbWUoZSwgdCkge1xuICAgIGlmICh0aGlzLmlzR3VpZGVBY3RpdmUoKSkge1xuICAgICAgdCh7XG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLmp1bXAsXG4gICAgICAgIHJldHVyblZhbDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0KCk7XG4gICAgfVxuICB9XG4gIG9uR3VpZGVVSV9wbGF5SGFuZFNwaShlLCB0KSB7XG4gICAgdmFyIGksIGE7XG4gICAgaWYgKHRoaXMuaXNHdWlkZUFjdGl2ZSgpKSB7XG4gICAgICB2YXIgbyA9IG1qLmdldENsYXNzQnlOYW1lKFwiR3VpZGVUcmFpdFwiKSxcbiAgICAgICAgbiA9IGUuaW5zO1xuICAgICAgdGhpcy5fZ3VpZGVVSSA9IG47XG4gICAgICBpZiAobyAmJiBvLmdldEluc3RhbmNlKCkpIHtcbiAgICAgICAgdmFyIGQgPSBvLmdldEluc3RhbmNlKCkuZ3VpZGVTdGVwLFxuICAgICAgICAgIHMgPSB0aGlzLl9kaXNwbGF5VHlwZVtkXTtcbiAgICAgICAgaWYgKHMgPT09IEVHdWlkZURpc3BsYXlUeXBlLkNsaWNrKSB7XG4gICAgICAgICAgdCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbCA9IHRoaXMuX2dhbWVDb250cm9sbGVyLnRpbGVNYXBPYmplY3QuZ2V0Q2FuTWF0Y2hUaWxlc0hpbnQoKTtcbiAgICAgICAgaWYgKDAgPT0gbC5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9nYW1lQ29udHJvbGxlci50aWxlTWFwT2JqZWN0LnVwZGF0ZUNhbk1hdGNoVGlsZXMoKTtcbiAgICAgICAgICBsID0gdGhpcy5fZ2FtZUNvbnRyb2xsZXIudGlsZU1hcE9iamVjdC5nZXRDYW5NYXRjaFRpbGVzSGludCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbC5sZW5ndGgpIHtcbiAgICAgICAgICB0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1ID0gbFswXSxcbiAgICAgICAgICBwID0gbnVsbCA9PT0gKGkgPSB1WzBdKSB8fCB2b2lkIDAgPT09IGkgPyB2b2lkIDAgOiBpLmlkLFxuICAgICAgICAgIGcgPSBudWxsID09PSAoYSA9IHVbMV0pIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEuaWQ7XG4gICAgICAgIGlmIChwICYmIGcpIHtcbiAgICAgICAgICB0aGlzLl9nYW1lQ29udHJvbGxlci50aWxlTWFwT2JqZWN0LmdldFRpbGVPYmplY3QocCksIHRoaXMuX2dhbWVDb250cm9sbGVyLnRpbGVNYXBPYmplY3QuZ2V0VGlsZU9iamVjdChnKTtcbiAgICAgICAgICB2YXIgaCA9IHRoaXMuX2d1aWRlQ29udGV4dC5nZXRUaWxlTm9kZU1hcCgpLmdldChwKSxcbiAgICAgICAgICAgIGYgPSB0aGlzLl9ndWlkZUNvbnRleHQuZ2V0VGlsZU5vZGVNYXAoKS5nZXQoZyk7XG4gICAgICAgICAgdGhpcy5zaG93R3VpZGUoaCwgZiwgcyk7XG4gICAgICAgICAgdCh7XG4gICAgICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbklwdEJhc2VfcHVzaENsckVmZihlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNHdWlkZUFjdGl2ZSgpKSB7XG4gICAgICBpZiAoY2MuaXNWYWxpZCh0aGlzLl9ndWlkZVVJKSkge1xuICAgICAgICB2YXIgaSA9IHRoaXMuX2d1aWRlVUkuZ2V0Tm9kZUhhbmQoKTtcbiAgICAgICAgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgICAgICB0aGlzLl9ub2RlSGFuZFJpZ2h0ICYmICh0aGlzLl9ub2RlSGFuZFJpZ2h0LmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgICAgICB0aGlzLl9kcmFnR3VpZGVOb2RlICYmICh0aGlzLl9kcmFnR3VpZGVOb2RlLmFjdGl2ZSA9IGZhbHNlKTtcbiAgICAgICAgICBpLnNjYWxlWCA9IDE7XG4gICAgICAgICAgaS5zY2FsZVkgPSAxO1xuICAgICAgICAgIHQoKTtcbiAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxuICBvbklucHV0R3VpZGVfcHVzaEVmRGF0YShlLCB0KSB7XG4gICAgaWYgKHRoaXMuaXNHdWlkZUFjdGl2ZSgpICYmIGNjLmlzVmFsaWQodGhpcy5fZ3VpZGVVSSkpIHtcbiAgICAgIHZhciBpID0gdGhpcy5fZ3VpZGVVSS5nZXROb2RlSGFuZCgpO1xuICAgICAgaWYgKGNjLmlzVmFsaWQoaSkpIHtcbiAgICAgICAgdmFyIGEgPSB0aGlzLl9kaXNwbGF5VHlwZVt0aGlzLmdldEd1aWRlU3RlcCgpXTtcbiAgICAgICAgaWYgKGEgIT09IEVHdWlkZURpc3BsYXlUeXBlLk5vbmUgJiYgYSAhPT0gRUd1aWRlRGlzcGxheVR5cGUuQ2xpY2spIHtcbiAgICAgICAgICB2YXIgbyA9IGUuYXJnc1swXSxcbiAgICAgICAgICAgIG4gPSBlLmFyZ3NbMV07XG4gICAgICAgICAgaWYgKG8uaXNTZWxlY3QgfHwgbi5pc1NlbGVjdCkge1xuICAgICAgICAgICAgaS5zY2FsZSA9IDA7XG4gICAgICAgICAgICBhID09PSBFR3VpZGVEaXNwbGF5VHlwZS5Eb3VibGVDbGljayAmJiB0aGlzLl9ub2RlSGFuZFJpZ2h0ICYmICh0aGlzLl9ub2RlSGFuZFJpZ2h0LnNjYWxlID0gMCk7XG4gICAgICAgICAgICB0KHtcbiAgICAgICAgICAgICAgcmV0dXJuVHlwZTogVHJhaXRDYWxsYmFja1JldHVyblR5cGUucmV0dXJuLFxuICAgICAgICAgICAgICBpc0JyZWFrOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGEgPT09IEVHdWlkZURpc3BsYXlUeXBlLkRyYWcpIHtcbiAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLl9ndWlkZUNvbnRleHQuZ2V0VGlsZU5vZGVNYXAoKS5nZXQoby5pZCksXG4gICAgICAgICAgICAgICAgcyA9IHRoaXMuX2d1aWRlQ29udGV4dC5nZXRUaWxlTm9kZU1hcCgpLmdldChuLmlkKTtcbiAgICAgICAgICAgICAgdGhpcy5zaG93RHJhZ0d1aWRlKGQsIHMpO1xuICAgICAgICAgICAgICBpLnNjYWxlID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYSA9PT0gRUd1aWRlRGlzcGxheVR5cGUuRG91YmxlQ2xpY2spIHtcbiAgICAgICAgICAgICAgdGhpcy5fbm9kZUhhbmRSaWdodCAmJiAodGhpcy5fbm9kZUhhbmRSaWdodC5zY2FsZSA9IDEpO1xuICAgICAgICAgICAgICBpLnNjYWxlID0gMTtcbiAgICAgICAgICAgICAgaS5zY2FsZVggPSAtMTtcbiAgICAgICAgICAgICAgaS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHQoKTtcbiAgICAgIH0gZWxzZSB0KCk7XG4gICAgfSBlbHNlIHQoKTtcbiAgfVxufSJdfQ==