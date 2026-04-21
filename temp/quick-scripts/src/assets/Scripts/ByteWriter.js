"use strict";
cc._RF.push(module, '89436d89EVKGY8/9hri6GmX', 'ByteWriter');
// Scripts/ByteWriter.ts

(function () {
    function e(e) {
        if (e === void 0) { e = 1024; }
        this.offset = 0;
        this.encoder = new TextEncoder();
        this.buf = new Uint8Array(e);
        this.view = new DataView(this.buf.buffer);
    }
    e.prototype.ensureCapacity = function (e) {
        var t = this.offset + e;
        if (!(t <= this.buf.length)) {
            for (var o = this.buf.length; o < t;)
                o *= 2;
            var n = new Uint8Array(o);
            n.set(this.buf);
            this.buf = n;
            this.view = new DataView(this.buf.buffer);
        }
    };
    e.prototype.writeBytes = function (e) {
        this.ensureCapacity(e.length);
        this.buf.set(e, this.offset);
        this.offset += e.length;
    };
    e.prototype.writeU8 = function (e) {
        this.ensureCapacity(1);
        this.view.setUint8(this.offset, e);
        this.offset += 1;
    };
    e.prototype.writeU16LE = function (e) {
        this.ensureCapacity(2);
        this.view.setUint16(this.offset, e, true);
        this.offset += 2;
    };
    e.prototype.writeU32LE = function (e) {
        this.ensureCapacity(4);
        this.view.setUint32(this.offset, e, true);
        this.offset += 4;
    };
    e.prototype.writeI32LE = function (e) {
        this.ensureCapacity(4);
        this.view.setInt32(this.offset, e, true);
        this.offset += 4;
    };
    e.prototype.writeF32LE = function (e) {
        this.ensureCapacity(4);
        this.view.setFloat32(this.offset, e, true);
        this.offset += 4;
    };
    e.prototype.writeF64LE = function (e) {
        this.ensureCapacity(8);
        this.view.setFloat64(this.offset, e, true);
        this.offset += 8;
    };
    e.prototype.writeBool = function (e) {
        this.writeU8(e ? 1 : 0);
    };
    e.prototype.writeString = function (e) {
        var t = this.encoder.encode(e);
        this.writeU32LE(t.length);
        this.writeBytes(t);
    };
    e.prototype.writeStringVar = function (e) {
        var t = this.encoder.encode(e);
        this.writeVarUint(t.length);
        this.writeBytes(t);
    };
    e.prototype.writeDate = function (e) {
        this.writeF64LE(e.getTime());
    };
    e.prototype.writeVarUint = function (e) {
        for (var t = Math.floor(e); t >= 128;) {
            this.writeU8(127 & t | 128);
            t >>>= 7;
        }
        this.writeU8(127 & t);
    };
    e.prototype.writeVarInt = function (e) {
        var t = e << 1 ^ e >> 31;
        this.writeVarUint(t >>> 0);
    };
    e.prototype.concat = function () {
        return this.buf.slice(0, this.offset);
    };
})();

cc._RF.pop();