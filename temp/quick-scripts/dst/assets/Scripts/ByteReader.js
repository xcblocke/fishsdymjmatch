
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/ByteReader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf6d5QWCSVNo7X5nnaW6G5Y', 'ByteReader');
// Scripts/ByteReader.ts

(function () {
    function e(e) {
        this.buffer = e;
        this.offset = 0;
        this.decoder = new TextDecoder();
        this.view = new DataView(e.buffer, e.byteOffset, e.byteLength);
    }
    e.prototype.readBytes = function (e) {
        var t = this.buffer.subarray(this.offset, this.offset + e);
        this.offset += e;
        return t;
    };
    e.prototype.readU8 = function () {
        var e = this.view.getUint8(this.offset);
        this.offset += 1;
        return e;
    };
    e.prototype.readU16LE = function () {
        var e = this.view.getUint16(this.offset, true);
        this.offset += 2;
        return e;
    };
    e.prototype.readU32LE = function () {
        var e = this.view.getUint32(this.offset, true);
        this.offset += 4;
        return e;
    };
    e.prototype.readI32LE = function () {
        var e = this.view.getInt32(this.offset, true);
        this.offset += 4;
        return e;
    };
    e.prototype.readF32LE = function () {
        var e = this.view.getFloat32(this.offset, true);
        this.offset += 4;
        return e;
    };
    e.prototype.readF64LE = function () {
        var e = this.view.getFloat64(this.offset, true);
        this.offset += 8;
        return e;
    };
    e.prototype.readBool = function () {
        return 1 === this.readU8();
    };
    e.prototype.readString = function () {
        var e = this.readU32LE(), t = this.readBytes(e);
        return this.decoder.decode(t);
    };
    e.prototype.readStringVar = function () {
        var e = this.readVarUint(), t = this.readBytes(e);
        return this.decoder.decode(t);
    };
    e.prototype.readDate = function () {
        return new Date(this.readF64LE());
    };
    e.prototype.readVarUint = function () {
        for (var e = 0, t = 0;;) {
            var o = this.readU8();
            t |= (127 & o) << e;
            if (0 == (128 & o))
                break;
            e += 7;
        }
        return t >>> 0;
    };
    e.prototype.readVarInt = function () {
        var e = this.readVarUint();
        return e >>> 1 ^ -(1 & e);
    };
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHRzL0J5dGVSZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBQztJQUNDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFDRCxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0lBQ0YsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUc7UUFDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0lBQ0YsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUc7UUFDdEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJ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Q3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZShlKSB7XG4gICAgdGhpcy5idWZmZXIgPSBlO1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICB0aGlzLmRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICB0aGlzLnZpZXcgPSBuZXcgRGF0YVZpZXcoZS5idWZmZXIsIGUuYnl0ZU9mZnNldCwgZS5ieXRlTGVuZ3RoKTtcbiAgfVxuICBlLnByb3RvdHlwZS5yZWFkQnl0ZXMgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0ID0gdGhpcy5idWZmZXIuc3ViYXJyYXkodGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICsgZSk7XG4gICAgdGhpcy5vZmZzZXQgKz0gZTtcbiAgICByZXR1cm4gdDtcbiAgfTtcbiAgZS5wcm90b3R5cGUucmVhZFU4ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlID0gdGhpcy52aWV3LmdldFVpbnQ4KHRoaXMub2Zmc2V0KTtcbiAgICB0aGlzLm9mZnNldCArPSAxO1xuICAgIHJldHVybiBlO1xuICB9O1xuICBlLnByb3RvdHlwZS5yZWFkVTE2TEUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGUgPSB0aGlzLnZpZXcuZ2V0VWludDE2KHRoaXMub2Zmc2V0LCB0cnVlKTtcbiAgICB0aGlzLm9mZnNldCArPSAyO1xuICAgIHJldHVybiBlO1xuICB9O1xuICBlLnByb3RvdHlwZS5yZWFkVTMyTEUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGUgPSB0aGlzLnZpZXcuZ2V0VWludDMyKHRoaXMub2Zmc2V0LCB0cnVlKTtcbiAgICB0aGlzLm9mZnNldCArPSA0O1xuICAgIHJldHVybiBlO1xuICB9O1xuICBlLnByb3RvdHlwZS5yZWFkSTMyTEUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGUgPSB0aGlzLnZpZXcuZ2V0SW50MzIodGhpcy5vZmZzZXQsIHRydWUpO1xuICAgIHRoaXMub2Zmc2V0ICs9IDQ7XG4gICAgcmV0dXJuIGU7XG4gIH07XG4gIGUucHJvdG90eXBlLnJlYWRGMzJMRSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZSA9IHRoaXMudmlldy5nZXRGbG9hdDMyKHRoaXMub2Zmc2V0LCB0cnVlKTtcbiAgICB0aGlzLm9mZnNldCArPSA0O1xuICAgIHJldHVybiBlO1xuICB9O1xuICBlLnByb3RvdHlwZS5yZWFkRjY0TEUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGUgPSB0aGlzLnZpZXcuZ2V0RmxvYXQ2NCh0aGlzLm9mZnNldCwgdHJ1ZSk7XG4gICAgdGhpcy5vZmZzZXQgKz0gODtcbiAgICByZXR1cm4gZTtcbiAgfTtcbiAgZS5wcm90b3R5cGUucmVhZEJvb2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIDEgPT09IHRoaXMucmVhZFU4KCk7XG4gIH07XG4gIGUucHJvdG90eXBlLnJlYWRTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGUgPSB0aGlzLnJlYWRVMzJMRSgpLFxuICAgICAgdCA9IHRoaXMucmVhZEJ5dGVzKGUpO1xuICAgIHJldHVybiB0aGlzLmRlY29kZXIuZGVjb2RlKHQpO1xuICB9O1xuICBlLnByb3RvdHlwZS5yZWFkU3RyaW5nVmFyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBlID0gdGhpcy5yZWFkVmFyVWludCgpLFxuICAgICAgdCA9IHRoaXMucmVhZEJ5dGVzKGUpO1xuICAgIHJldHVybiB0aGlzLmRlY29kZXIuZGVjb2RlKHQpO1xuICB9O1xuICBlLnByb3RvdHlwZS5yZWFkRGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5yZWFkRjY0TEUoKSk7XG4gIH07XG4gIGUucHJvdG90eXBlLnJlYWRWYXJVaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGUgPSAwLCB0ID0gMDs7KSB7XG4gICAgICB2YXIgbyA9IHRoaXMucmVhZFU4KCk7XG4gICAgICB0IHw9ICgxMjcgJiBvKSA8PCBlO1xuICAgICAgaWYgKDAgPT0gKDEyOCAmIG8pKSBicmVhaztcbiAgICAgIGUgKz0gNztcbiAgICB9XG4gICAgcmV0dXJuIHQgPj4+IDA7XG4gIH07XG4gIGUucHJvdG90eXBlLnJlYWRWYXJJbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGUgPSB0aGlzLnJlYWRWYXJVaW50KCk7XG4gICAgcmV0dXJuIGUgPj4+IDEgXiAtKDEgJiBlKTtcbiAgfTtcbn0pKCk7Il19