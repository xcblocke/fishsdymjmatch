
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_materialCard/Scripts/MaterialCard102Trait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac912dCAQtB0ZFftAcHNCJ3', 'MaterialCard102Trait');
// subpackages/l_materialCard/Scripts/MaterialCard102Trait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var ClassicMaterialCardBaseTrait_1 = require("./ClassicMaterialCardBaseTrait");
var MaterialCard102Trait = /** @class */ (function (_super) {
    __extends(MaterialCard102Trait, _super);
    function MaterialCard102Trait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._interval = 1;
        _this._resetOnNewGame = false;
        return _this;
    }
    MaterialCard102Trait_1 = MaterialCard102Trait;
    MaterialCard102Trait.prototype.onLoad = function () {
        var e, r, a, i;
        _super.prototype.onLoad.call(this);
        if (!this.localData.waveGroupMaterials) {
            this.localData.waveGroupMaterials = {};
            this.localData.waveGroupMaterials = this.localData.waveGroupMaterials;
        }
        this._interval = null !== (r = null === (e = this._traitData) || void 0 === e ? void 0 : e.interval) && void 0 !== r ? r : 1;
        this._resetOnNewGame = null !== (i = null === (a = this._traitData) || void 0 === a ? void 0 : a.resetOnNewGame) && void 0 !== i && i;
        if (void 0 === this.localData.waveGroupMaterials[0]) {
            this.localData.waveGroupMaterials[0] = this.getCurMaterialCard();
            this.localData.waveGroupMaterials = this.localData.waveGroupMaterials;
        }
    };
    MaterialCard102Trait.prototype._resetWaveGroupMaterials = function () {
        this.localData.waveGroupMaterials = {};
        this.localData.waveGroupMaterials = this.localData.waveGroupMaterials;
        this._resetOnNewGame && this.setCurMaterialCard(0);
        this.localData.waveGroupMaterials[0] = this.getCurMaterialCard();
        this.localData.waveGroupMaterials = this.localData.waveGroupMaterials;
    };
    MaterialCard102Trait.prototype.onGsListener_onNewGame = function (t, e) {
        try {
            if (!this.isClassicMode()) {
                e();
                return;
            }
            this._resetWaveGroupMaterials("新游戏开始");
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard102Trait_1.traitKey + "] 新游戏初始化失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard102Trait.prototype.onGsListener_onReplayGame = function (t, e) {
        try {
            if (!this.isClassicMode()) {
                e();
                return;
            }
            this._resetWaveGroupMaterials("重玩游戏");
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard102Trait_1.traitKey + "] 重玩游戏初始化失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard102Trait.prototype.onChgBatchAnimBhv_start = function (t, e) {
        var a, i, o;
        try {
            if (!this.isClassicMode()) {
                e();
                return;
            }
            var l = null === (a = t.args) || void 0 === a ? void 0 : a[0], n = null !== (o = null === (i = null == l ? void 0 : l.data) || void 0 === i ? void 0 : i.batchId) && void 0 !== o ? o : 0;
            if (0 === n) {
                e();
                return;
            }
            if (n % this._interval == 0) {
                var s = Math.floor(n / this._interval);
                this.switchToNextMaterialCard();
                var c = this.getCurMaterialCard();
                this.localData.waveGroupMaterials[s] = c;
                this.localData.waveGroupMaterials = this.localData.waveGroupMaterials;
            }
            e();
        }
        catch (t) {
            console.error("[" + MaterialCard102Trait_1.traitKey + "] 波次切换处理失败: " + (null == t ? void 0 : t.message));
            e();
        }
    };
    MaterialCard102Trait.prototype.onCardUtil_atlasPathBundle = function (e, a) {
        var i, o, n;
        try {
            if (!this.isClassicMode()) {
                a();
                return;
            }
            var s = null === (i = e.args) || void 0 === i ? void 0 : i[0], c = null === (o = e.args) || void 0 === o ? void 0 : o[1];
            if ("gameplay_img_mj_dn" !== s && "gameplay_img_mj_up" !== s && "gameplay_select_mj" !== s) {
                a();
                return;
            }
            if (!c || !c.tileObject) {
                _super.prototype.onCardUtil_atlasPathBundle.call(this, e, a);
                return;
            }
            var d = null !== (n = c.tileObject.batchId) && void 0 !== n ? n : 0, u = 0;
            if (0 === d)
                u = this.getCurMaterialCard();
            else {
                var p = Math.floor(d / this._interval);
                u = this.localData.waveGroupMaterials[p];
            }
            if (void 0 === u) {
                u = this.getCurMaterialCard();
                p = Math.floor(d / this._interval);
                this.localData.waveGroupMaterials[p] = u;
                this.localData.waveGroupMaterials = this.localData.waveGroupMaterials;
            }
            if (0 === u) {
                a({
                    isBreak: true
                });
                return;
            }
            var h = this.getBundleNameById(u);
            if (!h) {
                a();
                return;
            }
            var f = "texture/" + s;
            a({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: {
                    path: f,
                    bundleName: h,
                    fromAtlas: false
                }
            });
        }
        catch (t) {
            console.error("[" + MaterialCard102Trait_1.traitKey + "] 劫持牌背图片失败: " + (null == t ? void 0 : t.message));
            a();
        }
    };
    var MaterialCard102Trait_1;
    MaterialCard102Trait.traitKey = "MaterialCard102";
    MaterialCard102Trait = MaterialCard102Trait_1 = __decorate([
        mj.trait,
        mj.class("MaterialCard102Trait")
    ], MaterialCard102Trait);
    return MaterialCard102Trait;
}(ClassicMaterialCardBaseTrait_1.default));
exports.default = MaterialCard102Trait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX21hdGVyaWFsQ2FyZC9TY3JpcHRzL01hdGVyaWFsQ2FyZDEwMlRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBd0Y7QUFDeEYsK0VBQTBFO0FBRzFFO0lBQWtELHdDQUE0QjtJQUE5RTtRQUFBLHFFQW9JQztRQW5JQyxlQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QscUJBQWUsR0FBRyxLQUFLLENBQUM7O0lBa0kxQixDQUFDOzZCQXBJb0Isb0JBQW9CO0lBSXZDLHFDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDO1NBQ3ZFO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3SCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUs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QVUsRUFBRSxzQ0FBdUIsQ0FBQyxNQUFNO2dCQUMxQyxPQUFPLEVBQUUsSUFBSTtnQkFDYixTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLENBQUM7b0JBQ1AsVUFBVSxFQUFFLENBQUM7b0JBQ2IsU0FBUyxFQUFFLEtBQUs7aUJBQ2pCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLHNCQUFvQixDQUFDLFFBQVEsR0FBRyxjQUFjLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdkcsQ0FBQyxFQUFFLENBQUM7U0FDTDtJQUNILENBQUM7O0lBaElNLDZCQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFIakIsb0JBQW9CO1FBRnhDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztPQUNaLG9CQUFvQixDQW9JeEM7SUFBRCwyQkFBQztDQXBJRCxBQW9JQyxDQXBJaUQsc0NBQTRCLEdBb0k3RTtrQkFwSW9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlIH0gZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXRNYW5hZ2VyJztcbmltcG9ydCBDbGFzc2ljTWF0ZXJpYWxDYXJkQmFzZVRyYWl0IGZyb20gJy4vQ2xhc3NpY01hdGVyaWFsQ2FyZEJhc2VUcmFpdCc7XG5AbWoudHJhaXRcbkBtai5jbGFzcyhcIk1hdGVyaWFsQ2FyZDEwMlRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRlcmlhbENhcmQxMDJUcmFpdCBleHRlbmRzIENsYXNzaWNNYXRlcmlhbENhcmRCYXNlVHJhaXQge1xuICBfaW50ZXJ2YWwgPSAxO1xuICBfcmVzZXRPbk5ld0dhbWUgPSBmYWxzZTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJNYXRlcmlhbENhcmQxMDJcIjtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBlLCByLCBhLCBpO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIGlmICghdGhpcy5sb2NhbERhdGEud2F2ZUdyb3VwTWF0ZXJpYWxzKSB7XG4gICAgICB0aGlzLmxvY2FsRGF0YS53YXZlR3JvdXBNYXRlcmlhbHMgPSB7fTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLndhdmVHcm91cE1hdGVyaWFscyA9IHRoaXMubG9jYWxEYXRhLndhdmVHcm91cE1hdGVyaWFscztcbiAgICB9XG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsICE9PSAociA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmludGVydmFsKSAmJiB2b2lkIDAgIT09IHIgPyByIDogMTtcbiAgICB0aGlzLl9yZXNldE9uTmV3R2FtZSA9IG51bGwgIT09IChpID0gbnVsbCA9PT0gKGEgPSB0aGlzLl90cmFpdERhdGEpIHx8IHZvaWQgMCA9PT0gYSA/IHZvaWQgMCA6IGEucmVzZXRPbk5ld0dhbWUpICYmIHZvaWQgMCAhPT0gaSAmJiBpO1xuICAgIGlmICh2b2lkIDAgPT09IHRoaXMubG9jYWxEYXRhLndhdmVHcm91cE1hdGVyaWFsc1swXSkge1xuICAgICAgdGhpcy5sb2NhbERhdGEud2F2ZUdyb3VwTWF0ZXJpYWxzWzBdID0gdGhpcy5nZXRDdXJNYXRlcmlhbENhcmQoKTtcbiAgICAgIHRoaXMubG9jYWxEYXRhLndhdmVHcm91cE1hdGVyaWFscyA9IHRoaXMubG9jYWxEYXRhLndhdmVHcm91cE1hdGVyaWFscztcbiAgICB9XG4gIH1cbiAgX3Jlc2V0V2F2ZUdyb3VwTWF0ZXJpYWxzKCkge1xuICAgIHRoaXMubG9jYWxEYXRhLndhdmVHcm91cE1hdGVyaWFscyA9IHt9O1xuICAgIHRoaXMubG9jYWxEYXRhLndhdmVHcm91cE1hdGVyaWFscyA9IHRoaXMubG9jYWxEYXRhLndhdmVHcm91cE1hdGVyaWFscztcbiAgICB0aGlzLl9yZXNldE9uTmV3R2FtZSAmJiB0aGlzLnNldEN1ck1hdGVyaWFsQ2FyZCgwKTtcbiAgICB0aGlzLmxvY2FsRGF0YS53YXZlR3JvdXBNYXRlcmlhbHNbMF0gPSB0aGlzLmdldEN1ck1hdGVyaWFsQ2FyZCgpO1xuICAgIHRoaXMubG9jYWxEYXRhLndhdmVHcm91cE1hdGVyaWFscyA9IHRoaXMubG9jYWxEYXRhLndhdmVHcm91cE1hdGVyaWFscztcbiAgfVxuICBvbkdzTGlzdGVuZXJfb25OZXdHYW1lKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLmlzQ2xhc3NpY01vZGUoKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Jlc2V0V2F2ZUdyb3VwTWF0ZXJpYWxzKFwi5paw5ri45oiP5byA5aeLXCIpO1xuICAgICAgZSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBNYXRlcmlhbENhcmQxMDJUcmFpdC50cmFpdEtleSArIFwiXSDmlrDmuLjmiI/liJ3lp4vljJblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkdzTGlzdGVuZXJfb25SZXBsYXlHYW1lKHQsIGUpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLmlzQ2xhc3NpY01vZGUoKSkge1xuICAgICAgICBlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Jlc2V0V2F2ZUdyb3VwTWF0ZXJpYWxzKFwi6YeN546p5ri45oiPXCIpO1xuICAgICAgZSgpO1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJbXCIgKyBNYXRlcmlhbENhcmQxMDJUcmFpdC50cmFpdEtleSArIFwiXSDph43njqnmuLjmiI/liJ3lp4vljJblpLHotKU6IFwiICsgKG51bGwgPT0gdCA/IHZvaWQgMCA6IHQubWVzc2FnZSkpO1xuICAgICAgZSgpO1xuICAgIH1cbiAgfVxuICBvbkNoZ0JhdGNoQW5pbUJodl9zdGFydCh0LCBlKSB7XG4gICAgdmFyIGEsIGksIG87XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGhpcy5pc0NsYXNzaWNNb2RlKCkpIHtcbiAgICAgICAgZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgbCA9IG51bGwgPT09IChhID0gdC5hcmdzKSB8fCB2b2lkIDAgPT09IGEgPyB2b2lkIDAgOiBhWzBdLFxuICAgICAgICBuID0gbnVsbCAhPT0gKG8gPSBudWxsID09PSAoaSA9IG51bGwgPT0gbCA/IHZvaWQgMCA6IGwuZGF0YSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS5iYXRjaElkKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogMDtcbiAgICAgIGlmICgwID09PSBuKSB7XG4gICAgICAgIGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKG4gJSB0aGlzLl9pbnRlcnZhbCA9PSAwKSB7XG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcihuIC8gdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLnN3aXRjaFRvTmV4dE1hdGVyaWFsQ2FyZCgpO1xuICAgICAgICB2YXIgYyA9IHRoaXMuZ2V0Q3VyTWF0ZXJpYWxDYXJkKCk7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLndhdmVHcm91cE1hdGVyaWFsc1tzXSA9IGM7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLndhdmVHcm91cE1hdGVyaWFscyA9IHRoaXMubG9jYWxEYXRhLndhdmVHcm91cE1hdGVyaWFscztcbiAgICAgIH1cbiAgICAgIGUoKTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiW1wiICsgTWF0ZXJpYWxDYXJkMTAyVHJhaXQudHJhaXRLZXkgKyBcIl0g5rOi5qyh5YiH5o2i5aSE55CG5aSx6LSlOiBcIiArIChudWxsID09IHQgPyB2b2lkIDAgOiB0Lm1lc3NhZ2UpKTtcbiAgICAgIGUoKTtcbiAgICB9XG4gIH1cbiAgb25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUoZSwgYSkge1xuICAgIHZhciBpLCBvLCBuO1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuaXNDbGFzc2ljTW9kZSgpKSB7XG4gICAgICAgIGEoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHMgPSBudWxsID09PSAoaSA9IGUuYXJncykgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaVswXSxcbiAgICAgICAgYyA9IG51bGwgPT09IChvID0gZS5hcmdzKSB8fCB2b2lkIDAgPT09IG8gPyB2b2lkIDAgOiBvWzFdO1xuICAgICAgaWYgKFwiZ2FtZXBsYXlfaW1nX21qX2RuXCIgIT09IHMgJiYgXCJnYW1lcGxheV9pbWdfbWpfdXBcIiAhPT0gcyAmJiBcImdhbWVwbGF5X3NlbGVjdF9talwiICE9PSBzKSB7XG4gICAgICAgIGEoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCFjIHx8ICFjLnRpbGVPYmplY3QpIHtcbiAgICAgICAgc3VwZXIub25DYXJkVXRpbF9hdGxhc1BhdGhCdW5kbGUuY2FsbCh0aGlzLCBlLCBhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGQgPSBudWxsICE9PSAobiA9IGMudGlsZU9iamVjdC5iYXRjaElkKSAmJiB2b2lkIDAgIT09IG4gPyBuIDogMCxcbiAgICAgICAgdSA9IDA7XG4gICAgICBpZiAoMCA9PT0gZCkgdSA9IHRoaXMuZ2V0Q3VyTWF0ZXJpYWxDYXJkKCk7ZWxzZSB7XG4gICAgICAgIHZhciBwID0gTWF0aC5mbG9vcihkIC8gdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICB1ID0gdGhpcy5sb2NhbERhdGEud2F2ZUdyb3VwTWF0ZXJpYWxzW3BdO1xuICAgICAgfVxuICAgICAgaWYgKHZvaWQgMCA9PT0gdSkge1xuICAgICAgICB1ID0gdGhpcy5nZXRDdXJNYXRlcmlhbENhcmQoKTtcbiAgICAgICAgcCA9IE1hdGguZmxvb3IoZCAvIHRoaXMuX2ludGVydmFsKTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEud2F2ZUdyb3VwTWF0ZXJpYWxzW3BdID0gdTtcbiAgICAgICAgdGhpcy5sb2NhbERhdGEud2F2ZUdyb3VwTWF0ZXJpYWxzID0gdGhpcy5sb2NhbERhdGEud2F2ZUdyb3VwTWF0ZXJpYWxzO1xuICAgICAgfVxuICAgICAgaWYgKDAgPT09IHUpIHtcbiAgICAgICAgYSh7XG4gICAgICAgICAgaXNCcmVhazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGggPSB0aGlzLmdldEJ1bmRsZU5hbWVCeUlkKHUpO1xuICAgICAgaWYgKCFoKSB7XG4gICAgICAgIGEoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGYgPSBcInRleHR1cmUvXCIgKyBzO1xuICAgICAgYSh7XG4gICAgICAgIHJldHVyblR5cGU6IFRyYWl0Q2FsbGJhY2tSZXR1cm5UeXBlLnJldHVybixcbiAgICAgICAgaXNCcmVhazogdHJ1ZSxcbiAgICAgICAgcmV0dXJuVmFsOiB7XG4gICAgICAgICAgcGF0aDogZixcbiAgICAgICAgICBidW5kbGVOYW1lOiBoLFxuICAgICAgICAgIGZyb21BdGxhczogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIltcIiArIE1hdGVyaWFsQ2FyZDEwMlRyYWl0LnRyYWl0S2V5ICsgXCJdIOWKq+aMgeeJjOiDjOWbvueJh+Wksei0pTogXCIgKyAobnVsbCA9PSB0ID8gdm9pZCAwIDogdC5tZXNzYWdlKSk7XG4gICAgICBhKCk7XG4gICAgfVxuICB9XG59Il19