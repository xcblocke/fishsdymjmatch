
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/framework/manager/LogManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a863cCnvB1ES6lrp/cvN3dn', 'LogManager');
// Scripts/framework/manager/LogManager.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.logManager = void 0;
var n;
(function (n) {
    n[n["Net"] = 1] = "Net";
    n[n["Model"] = 2] = "Model";
    n[n["Business"] = 4] = "Business";
    n[n["View"] = 8] = "View";
    n[n["Config"] = 16] = "Config";
    n[n["Normal"] = 32] = "Normal";
})(n || (n = {}));
var i = /** @class */ (function () {
    function i() {
    }
    i.prototype.table = function (e) {
        console.table(e);
    };
    i.prototype.customColor = function (e, t, o) {
        this.logCall(e, "color:" + t + ";", n.Normal, o);
    };
    i.prototype.log = function (e, t) {
        this.logCall(e, "color:#000000;", n.Normal, t);
    };
    i.prototype.logNet = function (e, t) {
        this.logCall(e, "color:#ee7700;", n.Net, t);
    };
    i.prototype.logModel = function (e, t) {
        this.logCall(e, "color:Violet;", n.Model, t);
    };
    i.prototype.logBusiness = function (e, t) {
        this.logCall(e, "color:#3a5fcd;", n.Business, t);
    };
    i.prototype.logView = function (e, t) {
        this.logCall(e, "color:green;", n.View, t);
    };
    i.prototype.logConfig = function (e, t) {
        this.logCall(e, "color:gray;", n.Config, t);
    };
    i.prototype.logError = function (e, t) {
        this.logCall(e, "color:red;", n.Normal, t);
    };
    i.prototype.logCall = function () {
        this.getTimestamp(), this.getStackTrace(4);
    };
    i.prototype.getTimestamp = function () {
        var e = new Date();
        return "[" + e.getHours().toString().padStart(2, "0") + ":" + e.getMinutes().toString().padStart(2, "0") + ":" + e.getSeconds().toString().padStart(2, "0") + ":" + e.getMilliseconds().toString().padStart(3, "0") + "]";
    };
    i.prototype.getStackTrace = function (e) {
        var t, o = (null === (t = new Error().stack) || void 0 === t ? void 0 : t.split("\n")) || [], n = [];
        o.forEach(function (e) {
            var o = e.substring(7).split(" ");
            var _t = {};
            _t[o[0]] = o[1];
            if (o.length < 2) {
                n.push(o[0]);
            }
            else {
                n.push(_t);
            }
        });
        if (n[e] && "object" == typeof n[e]) {
            var i = n[e];
            return "[" + Object.keys(i)[0] + "]";
        }
        return "";
    };
    return i;
}());
exports.logManager = new i();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2ZyYW1ld29yay9tYW5hZ2VyL0xvZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFLLENBT0o7QUFQRCxXQUFLLENBQUM7SUFDSix1QkFBTyxDQUFBO0lBQ1AsMkJBQVMsQ0FBQTtJQUNULGlDQUFZLENBQUE7SUFDWix5QkFBUSxDQUFBO0lBQ1IsOEJBQVcsQ0FBQTtJQUNYLDhCQUFXLENBQUE7QUFDYixDQUFDLEVBUEksQ0FBQyxLQUFELENBQUMsUUFPTDtBQUNEO0lBQUE7SUF1REEsQ0FBQztJQXREQyxpQkFBSyxHQUFMLFVBQU0sQ0FBQztRQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUNELHVCQUFXLEdBQVgsVUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsZUFBRyxHQUFILFVBQUksQ0FBQyxFQUFFLENBQUM7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDRCxrQkFBTSxHQUFOLFVBQU8sQ0FBQyxFQUFFLENBQUM7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCxvQkFBUSxHQUFSLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMs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LENBQUMsQ0FBQztZQUNiLE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0gsUUFBQztBQUFELENBdkRBLEFBdURDLElBQUE7QUFDVSxRQUFBLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZW51bSBuIHtcbiAgTmV0ID0gMSxcbiAgTW9kZWwgPSAyLFxuICBCdXNpbmVzcyA9IDQsXG4gIFZpZXcgPSA4LFxuICBDb25maWcgPSAxNixcbiAgTm9ybWFsID0gMzIsXG59XG5jbGFzcyBpIHtcbiAgdGFibGUoZSkge1xuICAgIGNvbnNvbGUudGFibGUoZSk7XG4gIH1cbiAgY3VzdG9tQ29sb3IoZSwgdCwgbykge1xuICAgIHRoaXMubG9nQ2FsbChlLCBcImNvbG9yOlwiICsgdCArIFwiO1wiLCBuLk5vcm1hbCwgbyk7XG4gIH1cbiAgbG9nKGUsIHQpIHtcbiAgICB0aGlzLmxvZ0NhbGwoZSwgXCJjb2xvcjojMDAwMDAwO1wiLCBuLk5vcm1hbCwgdCk7XG4gIH1cbiAgbG9nTmV0KGUsIHQpIHtcbiAgICB0aGlzLmxvZ0NhbGwoZSwgXCJjb2xvcjojZWU3NzAwO1wiLCBuLk5ldCwgdCk7XG4gIH1cbiAgbG9nTW9kZWwoZSwgdCkge1xuICAgIHRoaXMubG9nQ2FsbChlLCBcImNvbG9yOlZpb2xldDtcIiwgbi5Nb2RlbCwgdCk7XG4gIH1cbiAgbG9nQnVzaW5lc3MoZSwgdCkge1xuICAgIHRoaXMubG9nQ2FsbChlLCBcImNvbG9yOiMzYTVmY2Q7XCIsIG4uQnVzaW5lc3MsIHQpO1xuICB9XG4gIGxvZ1ZpZXcoZSwgdCkge1xuICAgIHRoaXMubG9nQ2FsbChlLCBcImNvbG9yOmdyZWVuO1wiLCBuLlZpZXcsIHQpO1xuICB9XG4gIGxvZ0NvbmZpZyhlLCB0KSB7XG4gICAgdGhpcy5sb2dDYWxsKGUsIFwiY29sb3I6Z3JheTtcIiwgbi5Db25maWcsIHQpO1xuICB9XG4gIGxvZ0Vycm9yKGUsIHQpIHtcbiAgICB0aGlzLmxvZ0NhbGwoZSwgXCJjb2xvcjpyZWQ7XCIsIG4uTm9ybWFsLCB0KTtcbiAgfVxuICBsb2dDYWxsKCkge1xuICAgIHRoaXMuZ2V0VGltZXN0YW1wKCksIHRoaXMuZ2V0U3RhY2tUcmFjZSg0KTtcbiAgfVxuICBnZXRUaW1lc3RhbXAoKSB7XG4gICAgdmFyIGUgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBcIltcIiArIGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKSArIFwiOlwiICsgZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIikgKyBcIjpcIiArIGUuZ2V0U2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpICsgXCI6XCIgKyBlLmdldE1pbGxpc2Vjb25kcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgXCIwXCIpICsgXCJdXCI7XG4gIH1cbiAgZ2V0U3RhY2tUcmFjZShlKSB7XG4gICAgdmFyIHQsXG4gICAgICBvID0gKG51bGwgPT09ICh0ID0gbmV3IEVycm9yKCkuc3RhY2spIHx8IHZvaWQgMCA9PT0gdCA/IHZvaWQgMCA6IHQuc3BsaXQoXCJcXG5cIikpIHx8IFtdLFxuICAgICAgbiA9IFtdO1xuICAgIG8uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG8gPSBlLnN1YnN0cmluZyg3KS5zcGxpdChcIiBcIik7XG4gICAgICB2YXIgX3QgPSB7fTtcbiAgICAgIF90W29bMF1dID0gb1sxXTtcbiAgICAgIGlmIChvLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgbi5wdXNoKG9bMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbi5wdXNoKF90KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAobltlXSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBuW2VdKSB7XG4gICAgICB2YXIgaSA9IG5bZV07XG4gICAgICByZXR1cm4gXCJbXCIgKyBPYmplY3Qua2V5cyhpKVswXSArIFwiXVwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxufVxuZXhwb3J0IHZhciBsb2dNYW5hZ2VyID0gbmV3IGkoKTsiXX0=