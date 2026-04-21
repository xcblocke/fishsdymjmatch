
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/r_fullComboOptimize/Scripts/FullComboOptimizeTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e262XrN6JP6Z9apmb6wElT', 'FullComboOptimizeTrait');
// subpackages/r_fullComboOptimize/Scripts/FullComboOptimizeTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var TraitManager_1 = require("../../../Scripts/framework/trait/TraitManager");
var FullComboOptimizeTrait = /** @class */ (function (_super) {
    __extends(FullComboOptimizeTrait, _super);
    function FullComboOptimizeTrait() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullComboOptimizeTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    FullComboOptimizeTrait.prototype.onChgFullCombo_getAniCfg = function (t, r) {
        var e, o = null === (e = this._traitData) || void 0 === e ? void 0 : e.configs;
        if (o) {
            r({
                returnType: TraitManager_1.TraitCallbackReturnType.return,
                isBreak: true,
                returnVal: {
                    bundleName: o.comboBundleName || "r_fullCombo_2",
                    spinePath: o.comboSpinePath || "spine/gameplay_perfectCombo"
                }
            });
        }
        else {
            r();
        }
    };
    FullComboOptimizeTrait.traitKey = "FullComboOptimize";
    FullComboOptimizeTrait = __decorate([
        mj.trait,
        mj.class("FullComboOptimizeTrait")
    ], FullComboOptimizeTrait);
    return FullComboOptimizeTrait;
}(Trait_1.default));
exports.default = FullComboOptimizeTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9yX2Z1bGxDb21ib09wdGltaXplL1NjcmlwdHMvRnVsbENvbWJvT3B0aW1pemVUcmFpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhFQUF3RjtBQUd4RjtJQUFvRCwwQ0FBSztJQUF6RDs7SUFxQkEsQ0FBQztJQW5CQyx1Q0FBTSxHQUFOO1FBQ0UsaUJBQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QseURBQXdCLEdBQXhCLFVBQXlCLENBQUMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxFQUNILENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDMUUsSUFBSSxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUM7Z0JBQ0EsVUFBVSxFQUFFLHNDQUF1QixDQUFDLE1BQU07Z0JBQzFDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRTtvQkFDVCxVQUFVLEVBQUUsQ0FBQyxDQUFDLGVBQWUsSUFBSSxlQUFlO29CQUNoRCxTQUFTLEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSw2QkFBNkI7aUJBQzdEO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBbkJNLCtCQUFRLEdBQUcsbUJBQW1CLENBQUM7SUFEbkIsc0JBQXNCO1FBRjFDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztPQUNkLHNCQUFzQixDQXFCMUM7SUFBRCw2QkFBQztDQXJCRCxBQXFCQyxDQXJCbUQsZUFBSyxHQXFCeEQ7a0JBckJvQixzQkFBc0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhaXQgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvdHJhaXQvVHJhaXQnO1xuaW1wb3J0IHsgVHJhaXRDYWxsYmFja1JldHVyblR5cGUgfSBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdE1hbmFnZXInO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJGdWxsQ29tYm9PcHRpbWl6ZVRyYWl0XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdWxsQ29tYm9PcHRpbWl6ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkZ1bGxDb21ib09wdGltaXplXCI7XG4gIG9uTG9hZCgpIHtcbiAgICBzdXBlci5vbkxvYWQuY2FsbCh0aGlzKTtcbiAgfVxuICBvbkNoZ0Z1bGxDb21ib19nZXRBbmlDZmcodCwgcikge1xuICAgIHZhciBlLFxuICAgICAgbyA9IG51bGwgPT09IChlID0gdGhpcy5fdHJhaXREYXRhKSB8fCB2b2lkIDAgPT09IGUgPyB2b2lkIDAgOiBlLmNvbmZpZ3M7XG4gICAgaWYgKG8pIHtcbiAgICAgIHIoe1xuICAgICAgICByZXR1cm5UeXBlOiBUcmFpdENhbGxiYWNrUmV0dXJuVHlwZS5yZXR1cm4sXG4gICAgICAgIGlzQnJlYWs6IHRydWUsXG4gICAgICAgIHJldHVyblZhbDoge1xuICAgICAgICAgIGJ1bmRsZU5hbWU6IG8uY29tYm9CdW5kbGVOYW1lIHx8IFwicl9mdWxsQ29tYm9fMlwiLFxuICAgICAgICAgIHNwaW5lUGF0aDogby5jb21ib1NwaW5lUGF0aCB8fCBcInNwaW5lL2dhbWVwbGF5X3BlcmZlY3RDb21ib1wiXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByKCk7XG4gICAgfVxuICB9XG59Il19