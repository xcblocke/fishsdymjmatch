
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/subpackages/l_loadingQuote/Scripts/LoadingQuoteTrait.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f846xg80dOTbz1K20VDGts', 'LoadingQuoteTrait');
// subpackages/l_loadingQuote/Scripts/LoadingQuoteTrait.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Trait_1 = require("../../../Scripts/framework/trait/Trait");
var I18NStrings_1 = require("../../../Scripts/framework/data/I18NStrings");
var QuoteItem_1 = require("./QuoteItem");
var LoadingQuoteTrait = /** @class */ (function (_super) {
    __extends(LoadingQuoteTrait, _super);
    function LoadingQuoteTrait() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._quoteNode = null;
        _this._useTarot = false;
        _this._useDailyFirstMotto = false;
        _this._isFirstColdStartOfDay = false;
        return _this;
    }
    LoadingQuoteTrait_1 = LoadingQuoteTrait;
    LoadingQuoteTrait.prototype.onLoad = function () {
        var o, a, i, e;
        _super.prototype.onLoad.call(this);
        this._useTarot = null !== (a = null === (o = this._traitData) || void 0 === o ? void 0 : o.useTarot) && void 0 !== a && a;
        this._useDailyFirstMotto = null !== (e = null === (i = this._traitData) || void 0 === i ? void 0 : i.useDailyFirstMotto) && void 0 !== e && e;
        if (this._useDailyFirstMotto) {
            var r = this.getTodayDate();
            if (this.localData.lastQuoteDate !== r) {
                this._isFirstColdStartOfDay = true;
                this.localData.lastQuoteDate = r;
                this.localData.lastQuoteDate = this.localData.lastQuoteDate;
            }
            else
                this._isFirstColdStartOfDay = false;
        }
    };
    LoadingQuoteTrait.prototype.getTodayDate = function () {
        var t = new Date();
        return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
    };
    LoadingQuoteTrait.prototype.onLoadingView_updProAni = function (t, o) {
        try {
            var a = t.ins;
            if (!a || !cc.isValid(a.node)) {
                o();
                return;
            }
            this.showQuote(a);
        }
        catch (t) { }
        o();
    };
    LoadingQuoteTrait.prototype.showQuote = function (t) {
        var o = this;
        if (this._quoteNode && cc.isValid(this._quoteNode))
            this._quoteNode.active = true;
        else {
            var a = t.node;
            if (a) {
                var i = this.getRandomQuote();
                QuoteItem_1.default.createUI().then(function (t) {
                    if (cc.isValid(t))
                        if (cc.isValid(a)) {
                            var e = cc.find("logo", a);
                            e.addChild(t);
                            o._quoteNode = t;
                            var r = e.height / 2 + 162;
                            t.setPosition(0, -r);
                            var n = t.getComponent(QuoteItem_1.default);
                            n && n.setText(i);
                        }
                        else
                            t.destroy();
                }).catch(function () { });
            }
        }
    };
    LoadingQuoteTrait.prototype.getRandomQuote = function () {
        var t, o = (t = this._useTarot ? LoadingQuoteTrait_1.TAROT_QUOTE_KEYS : this._useDailyFirstMotto && this._isFirstColdStartOfDay ? LoadingQuoteTrait_1.FIRST_COLD_START_QUOTE_KEYS : LoadingQuoteTrait_1.QUOTE_KEYS)[Math.floor(Math.random() * t.length)];
        return I18NStrings_1.default.get(o, o);
    };
    var LoadingQuoteTrait_1;
    LoadingQuoteTrait.traitKey = "LoadingQuote";
    LoadingQuoteTrait.QUOTE_KEYS = ["Loading_Motto_1", "Loading_Motto_2", "Loading_Motto_3", "Loading_Motto_4", "Loading_Motto_5", "Loading_Motto_6", "Loading_Motto_7", "Loading_Motto_8", "Loading_Motto_9", "Loading_Motto_10", "Loading_Motto_11", "Loading_Motto_12", "Loading_Motto_13", "Loading_Motto_14", "Loading_Motto_15", "Loading_Motto_16", "Loading_Motto_17", "Loading_Motto_18", "Loading_Motto_19", "Loading_Motto_20", "Loading_Motto_21", "Loading_Motto_22", "Loading_Motto_23", "Loading_Motto_24", "Loading_Motto_25", "Loading_Motto_26", "Loading_Motto_27", "Loading_Motto_28", "Loading_Motto_29", "Loading_Motto_30", "Loading_Motto_31", "Loading_Motto_32", "Loading_Motto_33", "Loading_Motto_34", "Loading_Motto_35", "Loading_Motto_36", "Loading_Motto_37", "Loading_Motto_38", "Loading_Motto_39", "Loading_Motto_40"];
    LoadingQuoteTrait.FIRST_COLD_START_QUOTE_KEYS = ["Loading_Motto_38", "Loading_Motto_39", "Loading_Motto_40"];
    LoadingQuoteTrait.TAROT_QUOTE_KEYS = ["Loading_Tarot_01", "Loading_Tarot_02", "Loading_Tarot_03", "Loading_Tarot_04", "Loading_Tarot_05", "Loading_Tarot_06", "Loading_Tarot_07", "Loading_Tarot_08", "Loading_Tarot_09", "Loading_Tarot_10", "Loading_Tarot_11", "Loading_Tarot_12", "Loading_Tarot_13", "Loading_Tarot_14", "Loading_Tarot_15", "Loading_Tarot_16", "Loading_Tarot_17", "Loading_Tarot_18", "Loading_Tarot_19", "Loading_Tarot_20", "Loading_Tarot_21", "Loading_Tarot_22", "Loading_Tarot_23", "Loading_Tarot_24", "Loading_Tarot_25", "Loading_Tarot_26", "Loading_Tarot_27", "Loading_Tarot_28", "Loading_Tarot_29", "Loading_Tarot_30", "Loading_Tarot_31", "Loading_Tarot_32", "Loading_Tarot_33", "Loading_Tarot_34", "Loading_Tarot_35", "Loading_Tarot_36", "Loading_Tarot_37", "Loading_Tarot_38", "Loading_Tarot_39", "Loading_Tarot_40", "Loading_Tarot_41", "Loading_Tarot_42", "Loading_Tarot_43", "Loading_Tarot_44", "Loading_Tarot_45", "Loading_Tarot_46", "Loading_Tarot_47", "Loading_Tarot_48", "Loading_Tarot_49", "Loading_Tarot_50", "Loading_Tarot_51", "Loading_Tarot_52"];
    LoadingQuoteTrait = LoadingQuoteTrait_1 = __decorate([
        mj.trait,
        mj.class("LoadingQuoteTrait")
    ], LoadingQuoteTrait);
    return LoadingQuoteTrait;
}(Trait_1.default));
exports.default = LoadingQuoteTrait;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zdWJwYWNrYWdlcy9sX2xvYWRpbmdRdW90ZS9TY3JpcHRzL0xvYWRpbmdRdW90ZVRyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsMkVBQXNFO0FBQ3RFLHlDQUFvQztBQUdwQztJQUErQyxxQ0FBSztJQUFwRDtRQUFBLHFFQStEQztRQTlEQyxnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLHlCQUFtQixHQUFHLEtBQUssQ0FBQztRQUM1Qiw0QkFBc0IsR0FBRyxLQUFLLENBQUM7O0lBMkRqQyxDQUFDOzBCQS9Eb0IsaUJBQWlCO0lBU3BDLGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNmLGlCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztR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LEdBK0RuRDtrQkEvRG9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFpdCBmcm9tICcuLi8uLi8uLi9TY3JpcHRzL2ZyYW1ld29yay90cmFpdC9UcmFpdCc7XG5pbXBvcnQgSTE4TlN0cmluZ3MgZnJvbSAnLi4vLi4vLi4vU2NyaXB0cy9mcmFtZXdvcmsvZGF0YS9JMThOU3RyaW5ncyc7XG5pbXBvcnQgUXVvdGVJdGVtIGZyb20gJy4vUXVvdGVJdGVtJztcbkBtai50cmFpdFxuQG1qLmNsYXNzKFwiTG9hZGluZ1F1b3RlVHJhaXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdRdW90ZVRyYWl0IGV4dGVuZHMgVHJhaXQge1xuICBfcXVvdGVOb2RlID0gbnVsbDtcbiAgX3VzZVRhcm90ID0gZmFsc2U7XG4gIF91c2VEYWlseUZpcnN0TW90dG8gPSBmYWxzZTtcbiAgX2lzRmlyc3RDb2xkU3RhcnRPZkRheSA9IGZhbHNlO1xuICBzdGF0aWMgdHJhaXRLZXkgPSBcIkxvYWRpbmdRdW90ZVwiO1xuICBzdGF0aWMgUVVPVEVfS0VZUyA9IFtcIkxvYWRpbmdfTW90dG9fMVwiLCBcIkxvYWRpbmdfTW90dG9fMlwiLCBcIkxvYWRpbmdfTW90dG9fM1wiLCBcIkxvYWRpbmdfTW90dG9fNFwiLCBcIkxvYWRpbmdfTW90dG9fNVwiLCBcIkxvYWRpbmdfTW90dG9fNlwiLCBcIkxvYWRpbmdfTW90dG9fN1wiLCBcIkxvYWRpbmdfTW90dG9fOFwiLCBcIkxvYWRpbmdfTW90dG9fOVwiLCBcIkxvYWRpbmdfTW90dG9fMTBcIiwgXCJMb2FkaW5nX01vdHRvXzExXCIsIFwiTG9hZGluZ19Nb3R0b18xMlwiLCBcIkxvYWRpbmdfTW90dG9fMTNcIiwgXCJMb2FkaW5nX01vdHRvXzE0XCIsIFwiTG9hZGluZ19Nb3R0b18xNVwiLCBcIkxvYWRpbmdfTW90dG9fMTZcIiwgXCJMb2FkaW5nX01vdHRvXzE3XCIsIFwiTG9hZGluZ19Nb3R0b18xOFwiLCBcIkxvYWRpbmdfTW90dG9fMTlcIiwgXCJMb2FkaW5nX01vdHRvXzIwXCIsIFwiTG9hZGluZ19Nb3R0b18yMVwiLCBcIkxvYWRpbmdfTW90dG9fMjJcIiwgXCJMb2FkaW5nX01vdHRvXzIzXCIsIFwiTG9hZGluZ19Nb3R0b18yNFwiLCBcIkxvYWRpbmdfTW90dG9fMjVcIiwgXCJMb2FkaW5nX01vdHRvXzI2XCIsIFwiTG9hZGluZ19Nb3R0b18yN1wiLCBcIkxvYWRpbmdfTW90dG9fMjhcIiwgXCJMb2FkaW5nX01vdHRvXzI5XCIsIFwiTG9hZGluZ19Nb3R0b18zMFwiLCBcIkxvYWRpbmdfTW90dG9fMzFcIiwgXCJMb2FkaW5nX01vdHRvXzMyXCIsIFwiTG9hZGluZ19Nb3R0b18zM1wiLCBcIkxvYWRpbmdfTW90dG9fMzRcIiwgXCJMb2FkaW5nX01vdHRvXzM1XCIsIFwiTG9hZGluZ19Nb3R0b18zNlwiLCBcIkxvYWRpbmdfTW90dG9fMzdcIiwgXCJMb2FkaW5nX01vdHRvXzM4XCIsIFwiTG9hZGluZ19Nb3R0b18zOVwiLCBcIkxvYWRpbmdfTW90dG9fNDBcIl07XG4gIHN0YXRpYyBGSVJTVF9DT0xEX1NUQVJUX1FVT1RFX0tFWVMgPSBbXCJMb2FkaW5nX01vdHRvXzM4XCIsIFwiTG9hZGluZ19Nb3R0b18zOVwiLCBcIkxvYWRpbmdfTW90dG9fNDBcIl07XG4gIHN0YXRpYyBUQVJPVF9RVU9URV9LRVlTID0gW1wiTG9hZGluZ19UYXJvdF8wMVwiLCBcIkxvYWRpbmdfVGFyb3RfMDJcIiwgXCJMb2FkaW5nX1Rhcm90XzAzXCIsIFwiTG9hZGluZ19UYXJvdF8wNFwiLCBcIkxvYWRpbmdfVGFyb3RfMDVcIiwgXCJMb2FkaW5nX1Rhcm90XzA2XCIsIFwiTG9hZGluZ19UYXJvdF8wN1wiLCBcIkxvYWRpbmdfVGFyb3RfMDhcIiwgXCJMb2FkaW5nX1Rhcm90XzA5XCIsIFwiTG9hZGluZ19UYXJvdF8xMFwiLCBcIkxvYWRpbmdfVGFyb3RfMTFcIiwgXCJMb2FkaW5nX1Rhcm90XzEyXCIsIFwiTG9hZGluZ19UYXJvdF8xM1wiLCBcIkxvYWRpbmdfVGFyb3RfMTRcIiwgXCJMb2FkaW5nX1Rhcm90XzE1XCIsIFwiTG9hZGluZ19UYXJvdF8xNlwiLCBcIkxvYWRpbmdfVGFyb3RfMTdcIiwgXCJMb2FkaW5nX1Rhcm90XzE4XCIsIFwiTG9hZGluZ19UYXJvdF8xOVwiLCBcIkxvYWRpbmdfVGFyb3RfMjBcIiwgXCJMb2FkaW5nX1Rhcm90XzIxXCIsIFwiTG9hZGluZ19UYXJvdF8yMlwiLCBcIkxvYWRpbmdfVGFyb3RfMjNcIiwgXCJMb2FkaW5nX1Rhcm90XzI0XCIsIFwiTG9hZGluZ19UYXJvdF8yNVwiLCBcIkxvYWRpbmdfVGFyb3RfMjZcIiwgXCJMb2FkaW5nX1Rhcm90XzI3XCIsIFwiTG9hZGluZ19UYXJvdF8yOFwiLCBcIkxvYWRpbmdfVGFyb3RfMjlcIiwgXCJMb2FkaW5nX1Rhcm90XzMwXCIsIFwiTG9hZGluZ19UYXJvdF8zMVwiLCBcIkxvYWRpbmdfVGFyb3RfMzJcIiwgXCJMb2FkaW5nX1Rhcm90XzMzXCIsIFwiTG9hZGluZ19UYXJvdF8zNFwiLCBcIkxvYWRpbmdfVGFyb3RfMzVcIiwgXCJMb2FkaW5nX1Rhcm90XzM2XCIsIFwiTG9hZGluZ19UYXJvdF8zN1wiLCBcIkxvYWRpbmdfVGFyb3RfMzhcIiwgXCJMb2FkaW5nX1Rhcm90XzM5XCIsIFwiTG9hZGluZ19UYXJvdF80MFwiLCBcIkxvYWRpbmdfVGFyb3RfNDFcIiwgXCJMb2FkaW5nX1Rhcm90XzQyXCIsIFwiTG9hZGluZ19UYXJvdF80M1wiLCBcIkxvYWRpbmdfVGFyb3RfNDRcIiwgXCJMb2FkaW5nX1Rhcm90XzQ1XCIsIFwiTG9hZGluZ19UYXJvdF80NlwiLCBcIkxvYWRpbmdfVGFyb3RfNDdcIiwgXCJMb2FkaW5nX1Rhcm90XzQ4XCIsIFwiTG9hZGluZ19UYXJvdF80OVwiLCBcIkxvYWRpbmdfVGFyb3RfNTBcIiwgXCJMb2FkaW5nX1Rhcm90XzUxXCIsIFwiTG9hZGluZ19UYXJvdF81MlwiXTtcbiAgb25Mb2FkKCkge1xuICAgIHZhciBvLCBhLCBpLCBlO1xuICAgIHN1cGVyLm9uTG9hZC5jYWxsKHRoaXMpO1xuICAgIHRoaXMuX3VzZVRhcm90ID0gbnVsbCAhPT0gKGEgPSBudWxsID09PSAobyA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBvID8gdm9pZCAwIDogby51c2VUYXJvdCkgJiYgdm9pZCAwICE9PSBhICYmIGE7XG4gICAgdGhpcy5fdXNlRGFpbHlGaXJzdE1vdHRvID0gbnVsbCAhPT0gKGUgPSBudWxsID09PSAoaSA9IHRoaXMuX3RyYWl0RGF0YSkgfHwgdm9pZCAwID09PSBpID8gdm9pZCAwIDogaS51c2VEYWlseUZpcnN0TW90dG8pICYmIHZvaWQgMCAhPT0gZSAmJiBlO1xuICAgIGlmICh0aGlzLl91c2VEYWlseUZpcnN0TW90dG8pIHtcbiAgICAgIHZhciByID0gdGhpcy5nZXRUb2RheURhdGUoKTtcbiAgICAgIGlmICh0aGlzLmxvY2FsRGF0YS5sYXN0UXVvdGVEYXRlICE9PSByKSB7XG4gICAgICAgIHRoaXMuX2lzRmlyc3RDb2xkU3RhcnRPZkRheSA9IHRydWU7XG4gICAgICAgIHRoaXMubG9jYWxEYXRhLmxhc3RRdW90ZURhdGUgPSByO1xuICAgICAgICB0aGlzLmxvY2FsRGF0YS5sYXN0UXVvdGVEYXRlID0gdGhpcy5sb2NhbERhdGEubGFzdFF1b3RlRGF0ZTtcbiAgICAgIH0gZWxzZSB0aGlzLl9pc0ZpcnN0Q29sZFN0YXJ0T2ZEYXkgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZ2V0VG9kYXlEYXRlKCkge1xuICAgIHZhciB0ID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gdC5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBTdHJpbmcodC5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpICsgXCItXCIgKyBTdHJpbmcodC5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfVxuICBvbkxvYWRpbmdWaWV3X3VwZFByb0FuaSh0LCBvKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhID0gdC5pbnM7XG4gICAgICBpZiAoIWEgfHwgIWNjLmlzVmFsaWQoYS5ub2RlKSkge1xuICAgICAgICBvKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvd1F1b3RlKGEpO1xuICAgIH0gY2F0Y2ggKHQpIHt9XG4gICAgbygpO1xuICB9XG4gIHNob3dRdW90ZSh0KSB7XG4gICAgdmFyIG8gPSB0aGlzO1xuICAgIGlmICh0aGlzLl9xdW90ZU5vZGUgJiYgY2MuaXNWYWxpZCh0aGlzLl9xdW90ZU5vZGUpKSB0aGlzLl9xdW90ZU5vZGUuYWN0aXZlID0gdHJ1ZTtlbHNlIHtcbiAgICAgIHZhciBhID0gdC5ub2RlO1xuICAgICAgaWYgKGEpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLmdldFJhbmRvbVF1b3RlKCk7XG4gICAgICAgIFF1b3RlSXRlbS5jcmVhdGVVSSgpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpZiAoY2MuaXNWYWxpZCh0KSkgaWYgKGNjLmlzVmFsaWQoYSkpIHtcbiAgICAgICAgICAgIHZhciBlID0gY2MuZmluZChcImxvZ29cIiwgYSk7XG4gICAgICAgICAgICBlLmFkZENoaWxkKHQpO1xuICAgICAgICAgICAgby5fcXVvdGVOb2RlID0gdDtcbiAgICAgICAgICAgIHZhciByID0gZS5oZWlnaHQgLyAyICsgMTYyO1xuICAgICAgICAgICAgdC5zZXRQb3NpdGlvbigwLCAtcik7XG4gICAgICAgICAgICB2YXIgbiA9IHQuZ2V0Q29tcG9uZW50KFF1b3RlSXRlbSk7XG4gICAgICAgICAgICBuICYmIG4uc2V0VGV4dChpKTtcbiAgICAgICAgICB9IGVsc2UgdC5kZXN0cm95KCk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZ2V0UmFuZG9tUXVvdGUoKSB7XG4gICAgdmFyIHQsXG4gICAgICBvID0gKHQgPSB0aGlzLl91c2VUYXJvdCA/IExvYWRpbmdRdW90ZVRyYWl0LlRBUk9UX1FVT1RFX0tFWVMgOiB0aGlzLl91c2VEYWlseUZpcnN0TW90dG8gJiYgdGhpcy5faXNGaXJzdENvbGRTdGFydE9mRGF5ID8gTG9hZGluZ1F1b3RlVHJhaXQuRklSU1RfQ09MRF9TVEFSVF9RVU9URV9LRVlTIDogTG9hZGluZ1F1b3RlVHJhaXQuUVVPVEVfS0VZUylbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdC5sZW5ndGgpXTtcbiAgICByZXR1cm4gSTE4TlN0cmluZ3MuZ2V0KG8sIG8pO1xuICB9XG59Il19