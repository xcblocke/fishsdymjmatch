
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropShowNumTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e15cfmk1K5HjpPVxyYFnSAh', 'WatchAdGetPropShowNumTrait');
// subpackages/l_watchAdGetProp/Scripts/WatchAdGetPropShowNumTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var WatchAdGetPropView_1 = require("./WatchAdGetPropView");
var i;
(i = {})[WatchAdGetPropView_1.WatchAdGetPropType.shuffle] = {
    key: "Tiles_PropPurchase_Purchase_1",
    defaultText: "Watch an ad to get {0} Shuffle"
};
i[WatchAdGetPropView_1.WatchAdGetPropType.hitTips] = {
    key: "Tiles_PropPurchase_Purchase_2",
    defaultText: "Watch an ad to get {0} Hint"
};
i[WatchAdGetPropView_1.WatchAdGetPropType.revert] = {
    key: "Tiles_PropPurchase_Purchase_3",
    defaultText: "Watch an ad to get {0} Undo"
};
var p = i;
var WatchAdGetPropShowNumTrait = /** @class */ (function (_super) {
    __extends(WatchAdGetPropShowNumTrait, _super);
    function WatchAdGetPropShowNumTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._richTextMap = new Map();
        return _this;
    }
    WatchAdGetPropShowNumTrait.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
    };
    WatchAdGetPropShowNumTrait.prototype.onWatchAdVw_setContent = function (t, e) {
        var r;
        e();
        var o = t.ins, i = t.args[0], n = o.getDescNode();
        if (n && cc.isValid(n)) {
            var a = this._richTextMap.get(o);
            if (!a) {
                var c = n.getComponent(cc.Label), u = n.width, d = c.lineHeight, h = c.fontSize, f = c.font, y = c.useSystemFont;
                c && (c.enabled = false);
                a = null !== (r = n.getComponent(cc.RichText)) && void 0 !== r ? r : n.addComponent(cc.RichText);
                if (c) {
                    a.fontSize = h;
                    a.lineHeight = d + 12;
                    a.maxWidth = u;
                    a.font = f;
                    a.useSystemFont = y;
                    a.horizontalAlign = cc.macro.TextAlignment.CENTER;
                }
                this._richTextMap.set(o, a);
            }
            var _ = o.delegate, m = i === WatchAdGetPropView_1.WatchAdGetPropType.shuffle ? "shuffle" : i === WatchAdGetPropView_1.WatchAdGetPropType.hitTips ? "hitTips" : "revert", v = "<color=#36a550>" + _.getWatchAdItemNum(m) + "</color>", g = p[i], T = I18NStrings_1.default.get(g.key, g.defaultText);
            a.string = I18NStrings_1.default.stringFormat(T, v);
        }
    };
    WatchAdGetPropShowNumTrait.traitKey = "WatchAdGetPropShowNum";
    WatchAdGetPropShowNumTrait = __decorate([
        mj.trait,
        mj.class("WatchAdGetPropShowNumTrait")
    ], WatchAdGetPropShowNumTrait);
    return WatchAdGetPropShowNumTrait;
}(Trait_1.default));
exports.default = WatchAdGetPropShowNumTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX3dhdGNoQWRHZXRQcm9wL1NjcmlwdHMvV2F0Y2hBZEdldFByb3BTaG93TnVtVHJhaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFzRTtBQUN0RSxnRUFBMkQ7QUFDM0QsMkRBQTBEO0FBQzFELElBQUksQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsdUNBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUc7SUFDckMsR0FBRyxFQUFFLCtCQUErQjtJQUNwQyxXQUFXLEVBQUUsZ0NBQWdDO0NBQzlDLENBQUM7QUFDRixDQUFDLENBQUMsdUNBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUc7SUFDOUIsR0FBRyxFQUFFLCtCQUErQjtJQUNwQyxXQUFXLEVBQUUsNkJBQTZCO0NBQzNDLENBQUM7QUFDRixDQUFDLENBQUMsdUNBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUc7SUFDN0IsR0FBRyxFQUFFLCtCQUErQjtJQUNwQyxXQUFXLEVBQUUsNkJBQTZCO0NBQzNDLENBQUM7QUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFHVjtJQUF3RCw4Q0FBSztJQUE3RDtRQUFBLHFFQXlDQztRQXhDQyxrQkFBWSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7O0lBd0MzQixDQUFDO0lBdENDLDJDQUFNLEdBQU47UUFDRSxpQkFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwyREFBc0IsR0FBdEIsVUFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLENBQUM7UUFDTixDQUFDLEVBQUUsQ0FBQztRQUNKLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQ1gsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQzlCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUNYLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFDdEIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakcsSUFBSSxDQUFDLEVBQUU7b0JBQ0wsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7b0JBQ2YsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUN0QixDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztvQkFDZixDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztvQkFDWCxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztvQkFDcEIsQ0FBQyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7aUJBQ25EO2dCQUNELElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM3QjtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQ2hCLENBQUMsR0FBRyxDQUFDLEtBQUssdUNBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyx1Q0FBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUMxRyxDQUFDLEdBQUcsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsRUFDM0QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDUixDQUFDLEdBQUcscUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBdENNLG1DQUFRLEdBQUcsdUJBQXVCLENBQUM7SUFGdkIsMEJBQTBCO1FBRjlDLEVBQUUsQ0FBQyxLQUFLO1FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztPQUNsQiwwQkFBMEIsQ0F5QzlDO0lBQUQsaUNBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q3VELGVBQUssR0F5QzVEO2tCQXpDb0IsMEJBQTBCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEkxOE5TdHJpbmdzIGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL2RhdGEvSTE4TlN0cmluZ3MnO1xuaW1wb3J0IFRyYWl0IGZyb20gJy4uLy4uLy4uL1NjcmlwdHMvZnJhbWV3b3JrL3RyYWl0L1RyYWl0JztcbmltcG9ydCB7IFdhdGNoQWRHZXRQcm9wVHlwZSB9IGZyb20gJy4vV2F0Y2hBZEdldFByb3BWaWV3JztcbnZhciBpO1xuKGkgPSB7fSlbV2F0Y2hBZEdldFByb3BUeXBlLnNodWZmbGVdID0ge1xuICBrZXk6IFwiVGlsZXNfUHJvcFB1cmNoYXNlX1B1cmNoYXNlXzFcIixcbiAgZGVmYXVsdFRleHQ6IFwiV2F0Y2ggYW4gYWQgdG8gZ2V0IHswfSBTaHVmZmxlXCJcbn07XG5pW1dhdGNoQWRHZXRQcm9wVHlwZS5oaXRUaXBzXSA9IHtcbiAga2V5OiBcIlRpbGVzX1Byb3BQdXJjaGFzZV9QdXJjaGFzZV8yXCIsXG4gIGRlZmF1bHRUZXh0OiBcIldhdGNoIGFuIGFkIHRvIGdldCB7MH0gSGludFwiXG59O1xuaVtXYXRjaEFkR2V0UHJvcFR5cGUucmV2ZXJ0XSA9IHtcbiAga2V5OiBcIlRpbGVzX1Byb3BQdXJjaGFzZV9QdXJjaGFzZV8zXCIsXG4gIGRlZmF1bHRUZXh0OiBcIldhdGNoIGFuIGFkIHRvIGdldCB7MH0gVW5kb1wiXG59O1xudmFyIHAgPSBpO1xuQG1qLnRyYWl0XG5AbWouY2xhc3MoXCJXYXRjaEFkR2V0UHJvcFNob3dOdW1UcmFpdFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F0Y2hBZEdldFByb3BTaG93TnVtVHJhaXQgZXh0ZW5kcyBUcmFpdCB7XG4gIF9yaWNoVGV4dE1hcCA9IG5ldyBNYXAoKTtcbiAgc3RhdGljIHRyYWl0S2V5ID0gXCJXYXRjaEFkR2V0UHJvcFNob3dOdW1cIjtcbiAgb25Mb2FkKCkge1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICB9XG4gIG9uV2F0Y2hBZFZ3X3NldENvbnRlbnQodCwgZSkge1xuICAgIHZhciByO1xuICAgIGUoKTtcbiAgICB2YXIgbyA9IHQuaW5zLFxuICAgICAgaSA9IHQuYXJnc1swXSxcbiAgICAgIG4gPSBvLmdldERlc2NOb2RlKCk7XG4gICAgaWYgKG4gJiYgY2MuaXNWYWxpZChuKSkge1xuICAgICAgdmFyIGEgPSB0aGlzLl9yaWNoVGV4dE1hcC5nZXQobyk7XG4gICAgICBpZiAoIWEpIHtcbiAgICAgICAgdmFyIGMgPSBuLmdldENvbXBvbmVudChjYy5MYWJlbCksXG4gICAgICAgICAgdSA9IG4ud2lkdGgsXG4gICAgICAgICAgZCA9IGMubGluZUhlaWdodCxcbiAgICAgICAgICBoID0gYy5mb250U2l6ZSxcbiAgICAgICAgICBmID0gYy5mb250LFxuICAgICAgICAgIHkgPSBjLnVzZVN5c3RlbUZvbnQ7XG4gICAgICAgIGMgJiYgKGMuZW5hYmxlZCA9IGZhbHNlKTtcbiAgICAgICAgYSA9IG51bGwgIT09IChyID0gbi5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpKSAmJiB2b2lkIDAgIT09IHIgPyByIDogbi5hZGRDb21wb25lbnQoY2MuUmljaFRleHQpO1xuICAgICAgICBpZiAoYykge1xuICAgICAgICAgIGEuZm9udFNpemUgPSBoO1xuICAgICAgICAgIGEubGluZUhlaWdodCA9IGQgKyAxMjtcbiAgICAgICAgICBhLm1heFdpZHRoID0gdTtcbiAgICAgICAgICBhLmZvbnQgPSBmO1xuICAgICAgICAgIGEudXNlU3lzdGVtRm9udCA9IHk7XG4gICAgICAgICAgYS5ob3Jpem9udGFsQWxpZ24gPSBjYy5tYWNyby5UZXh0QWxpZ25tZW50LkNFTlRFUjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yaWNoVGV4dE1hcC5zZXQobywgYSk7XG4gICAgICB9XG4gICAgICB2YXIgXyA9IG8uZGVsZWdhdGUsXG4gICAgICAgIG0gPSBpID09PSBXYXRjaEFkR2V0UHJvcFR5cGUuc2h1ZmZsZSA/IFwic2h1ZmZsZVwiIDogaSA9PT0gV2F0Y2hBZEdldFByb3BUeXBlLmhpdFRpcHMgPyBcImhpdFRpcHNcIiA6IFwicmV2ZXJ0XCIsXG4gICAgICAgIHYgPSBcIjxjb2xvcj0jMzZhNTUwPlwiICsgXy5nZXRXYXRjaEFkSXRlbU51bShtKSArIFwiPC9jb2xvcj5cIixcbiAgICAgICAgZyA9IHBbaV0sXG4gICAgICAgIFQgPSBJMThOU3RyaW5ncy5nZXQoZy5rZXksIGcuZGVmYXVsdFRleHQpO1xuICAgICAgYS5zdHJpbmcgPSBJMThOU3RyaW5ncy5zdHJpbmdGb3JtYXQoVCwgdik7XG4gICAgfVxuICB9XG59Il19