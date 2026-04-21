
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/base/TweenEasing.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3093qgkWNKjaigHe7SVJYm', 'TweenEasing');
// Scripts/base/TweenEasing.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.easeCard5 = exports.easeCard4 = exports.easeCard3 = exports.easeCard2 = exports.easeCard = exports.makeCubicBezier = void 0;
function n(e, t, o, n) {
    var i = 1 - 3 * o + 3 * e, r = 3 * o - 6 * e, a = 3 * e, l = 1 - 3 * n + 3 * t, s = 3 * n - 6 * t, c = 3 * t, u = function u(e) {
        return ((l * e + s) * e + c) * e;
    }, p = function p(e) {
        return (3 * i * e + 2 * r) * e + a;
    };
    return function (e) {
        if (e <= 0)
            return 0;
        if (e >= 1)
            return 1;
        for (var t, o = e, n = 0; n < 8; n++) {
            var l = ((i * (t = o) + r) * t + a) * t - e;
            if (Math.abs(l) < 0.000001)
                break;
            var s = p(o);
            if (Math.abs(s) < 0.000001)
                break;
            o -= l / s;
        }
        return u(o);
    };
}
exports.makeCubicBezier = n;
exports.easeCard = n(0.45, 0, 0.9, 0.55);
exports.easeCard2 = n(0.25, 0.5, 0.75, 1);
exports.easeCard3 = n(0.2, 0, 0.8, 1);
exports.easeCard4 = n(0.17, 0.52, 0.58, 0.99);
exports.easeCard5 = n(0.42, 0, 0.58, 1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL2Jhc2UvVHdlZW5FYXNpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQ3ZCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQ2pCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNULENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNyQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFDVCxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDLEVBQ0QsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDZCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDO0lBQ0osT0FBTyxVQUFVLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyQixLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVE7Z0JBQUUsTUFBTTtZQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUTtnQkFBRSxNQUFNO1lBQ2xDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1o7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNkLENBQUMsQ0FBQztBQUNKLENBQUM7QUFDVSxRQUFBLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDcEIsUUFBQSxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pDLFFBQUEsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsQyxRQUFBLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUIsUUFBQSxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3RDLFFBQUEsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIG4oZSwgdCwgbywgbikge1xuICB2YXIgaSA9IDEgLSAzICogbyArIDMgKiBlLFxuICAgIHIgPSAzICogbyAtIDYgKiBlLFxuICAgIGEgPSAzICogZSxcbiAgICBsID0gMSAtIDMgKiBuICsgMyAqIHQsXG4gICAgcyA9IDMgKiBuIC0gNiAqIHQsXG4gICAgYyA9IDMgKiB0LFxuICAgIHUgPSBmdW5jdGlvbiB1KGUpIHtcbiAgICAgIHJldHVybiAoKGwgKiBlICsgcykgKiBlICsgYykgKiBlO1xuICAgIH0sXG4gICAgcCA9IGZ1bmN0aW9uIHAoZSkge1xuICAgICAgcmV0dXJuICgzICogaSAqIGUgKyAyICogcikgKiBlICsgYTtcbiAgICB9O1xuICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSA8PSAwKSByZXR1cm4gMDtcbiAgICBpZiAoZSA+PSAxKSByZXR1cm4gMTtcbiAgICBmb3IgKHZhciB0LCBvID0gZSwgbiA9IDA7IG4gPCA4OyBuKyspIHtcbiAgICAgIHZhciBsID0gKChpICogKHQgPSBvKSArIHIpICogdCArIGEpICogdCAtIGU7XG4gICAgICBpZiAoTWF0aC5hYnMobCkgPCAwLjAwMDAwMSkgYnJlYWs7XG4gICAgICB2YXIgcyA9IHAobyk7XG4gICAgICBpZiAoTWF0aC5hYnMocykgPCAwLjAwMDAwMSkgYnJlYWs7XG4gICAgICBvIC09IGwgLyBzO1xuICAgIH1cbiAgICByZXR1cm4gdShvKTtcbiAgfTtcbn1cbmV4cG9ydCB2YXIgbWFrZUN1YmljQmV6aWVyID0gbjtcbmV4cG9ydCB2YXIgZWFzZUNhcmQgPSBuKDAuNDUsIDAsIDAuOSwgMC41NSk7XG5leHBvcnQgdmFyIGVhc2VDYXJkMiA9IG4oMC4yNSwgMC41LCAwLjc1LCAxKTtcbmV4cG9ydCB2YXIgZWFzZUNhcmQzID0gbigwLjIsIDAsIDAuOCwgMSk7XG5leHBvcnQgdmFyIGVhc2VDYXJkNCA9IG4oMC4xNywgMC41MiwgMC41OCwgMC45OSk7XG5leHBvcnQgdmFyIGVhc2VDYXJkNSA9IG4oMC40MiwgMCwgMC41OCwgMSk7Il19