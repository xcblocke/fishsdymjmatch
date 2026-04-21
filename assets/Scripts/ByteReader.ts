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
    var e = this.readU32LE(),
      t = this.readBytes(e);
    return this.decoder.decode(t);
  };
  e.prototype.readStringVar = function () {
    var e = this.readVarUint(),
      t = this.readBytes(e);
    return this.decoder.decode(t);
  };
  e.prototype.readDate = function () {
    return new Date(this.readF64LE());
  };
  e.prototype.readVarUint = function () {
    for (var e = 0, t = 0;;) {
      var o = this.readU8();
      t |= (127 & o) << e;
      if (0 == (128 & o)) break;
      e += 7;
    }
    return t >>> 0;
  };
  e.prototype.readVarInt = function () {
    var e = this.readVarUint();
    return e >>> 1 ^ -(1 & e);
  };
})();