edfsBarRequire=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"@msgpack/msgpack":[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MessagePack=t():e.MessagePack=t()}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s},i=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(n(arguments[t]));return e},o="undefined"!=typeof TextEncoder&&"undefined"!=typeof TextDecoder;function s(e){for(var t=e.length,r=0,n=0;n<t;){var i=e.charCodeAt(n++);if(0!=(4294967168&i))if(0==(4294965248&i))r+=2;else{if(i>=55296&&i<=56319&&n<t){var o=e.charCodeAt(n);56320==(64512&o)&&(++n,i=((1023&i)<<10)+(1023&o)+65536)}r+=0==(4294901760&i)?3:4}else r++}return r}var a=o?new TextEncoder:void 0;var h=a&&a.encodeInto?function(e,t,r){a.encodeInto(e,t.subarray(r))}:function(e,t,r){t.set(a.encode(e),r)},u=65536;function c(e,t,r){for(var n=t,o=n+r,s=[],a="";n<o;){var h=e[n++];if(0==(128&h))s.push(h);else if(192==(224&h)){var c=63&e[n++];s.push((31&h)<<6|c)}else if(224==(240&h)){c=63&e[n++];var f=63&e[n++];s.push((31&h)<<12|c<<6|f)}else if(240==(248&h)){var l=(7&h)<<18|(c=63&e[n++])<<12|(f=63&e[n++])<<6|63&e[n++];l>65535&&(l-=65536,s.push(l>>>10&1023|55296),l=56320|1023&l),s.push(l)}else s.push(h);s.length-4>=u&&(a+=String.fromCharCode.apply(String,i(s)),s.length=0)}return s.length>0&&(a+=String.fromCharCode.apply(String,i(s))),a}var f=o?new TextDecoder:null;var l=function(e,t){this.type=e,this.data=t};function p(e,t,r){var n=Math.floor(r/4294967296),i=r;e.setUint32(t,n),e.setUint32(t+4,i)}function d(e,t){return 4294967296*e.getInt32(t)+e.getUint32(t+4)}var y=4294967295,w=17179869183;function v(e){var t=e.sec,r=e.nsec;if(t>=0&&r>=0&&t<=w){if(0===r&&t<=y){var n=new Uint8Array(4);return(s=new DataView(n.buffer)).setUint32(0,t),n}var i=t/4294967296,o=4294967295&t;n=new Uint8Array(8);return(s=new DataView(n.buffer)).setUint32(0,r<<2|3&i),s.setUint32(4,o),n}var s;n=new Uint8Array(12);return(s=new DataView(n.buffer)).setUint32(0,r),p(s,4,t),n}function g(e){var t=e.getTime(),r=Math.floor(t/1e3),n=1e6*(t-1e3*r),i=Math.floor(n/1e9);return{sec:r+i,nsec:n-1e9*i}}function b(e){return e instanceof Date?v(g(e)):null}function m(e){var t=new DataView(e.buffer,e.byteOffset,e.byteLength);switch(e.byteLength){case 4:return{sec:t.getUint32(0),nsec:0};case 8:var r=t.getUint32(0);return{sec:4294967296*(3&r)+t.getUint32(4),nsec:r>>>2};case 12:return{sec:d(t,4),nsec:t.getUint32(0)};default:throw new Error("Unrecognized data size for timestamp: "+e.length)}}function U(e){var t=m(e);return new Date(1e3*t.sec+t.nsec/1e6)}var x={type:-1,encode:b,decode:U},S=function(){function e(){this.builtInEncoders=[],this.builtInDecoders=[],this.encoders=[],this.decoders=[],this.register(x)}return e.prototype.register=function(e){var t=e.type,r=e.encode,n=e.decode;if(t>=0)this.encoders[t]=r,this.decoders[t]=n;else{var i=1+t;this.builtInEncoders[i]=r,this.builtInDecoders[i]=n}},e.prototype.tryToEncode=function(e){for(var t=0;t<this.builtInEncoders.length;t++){if(null!=(r=this.builtInEncoders[t]))if(null!=(n=r(e)))return new l(-1-t,n)}for(t=0;t<this.encoders.length;t++){var r,n;if(null!=(r=this.encoders[t]))if(null!=(n=r(e)))return new l(t,n)}return e instanceof l?e:null},e.prototype.decode=function(e,t){var r=t<0?this.builtInDecoders[-1-t]:this.decoders[t];return r?r(e,t):new l(t,e)},e.defaultCodec=new e,e}();function E(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e instanceof ArrayBuffer?new Uint8Array(e):Uint8Array.from(e)}var B=null,A=!!B;function L(e,t,r){var n=e.length,i=2*n,o=B.malloc(i);!function(e,t,r,n){for(var i=new DataView(B.memory.buffer,e,t),o=0;o<n;o++)i.setUint16(2*o,r.charCodeAt(o))}(o,i,e,n);var s=B.malloc(5+4*n);try{var a=B.utf8EncodeUint16Array(s,o,n);return t.set(new Uint8Array(B.memory.buffer,s,a),r),a}finally{B.free(o),B.free(s)}}var I=65536;function T(e,t,r){var n,i,o,s=B.malloc(r),a=B.malloc(2*r);try{n=s,i=e.subarray(t,t+r),o=r,new Uint8Array(B.memory.buffer,n,o).set(i);var h=B.utf8DecodeToUint16Array(a,s,r);return function(e){if(e.length<=I)return String.fromCharCode.apply(String,e);for(var t="",r=0;r<e.length;r++){var n=e.subarray(r*I,(r+1)*I);t+=String.fromCharCode.apply(String,n)}return t}(new Uint16Array(B.memory.buffer,a,h))}finally{B.free(s),B.free(a)}}var k=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}},M=100,z=2048,C=function(){function e(e,t,r,n,i){void 0===e&&(e=S.defaultCodec),void 0===t&&(t=M),void 0===r&&(r=z),void 0===n&&(n=!1),void 0===i&&(i=!1),this.extensionCodec=e,this.maxDepth=t,this.initialBufferSize=r,this.sortKeys=n,this.forceFloat32=i,this.pos=0,this.view=new DataView(new ArrayBuffer(this.initialBufferSize)),this.bytes=new Uint8Array(this.view.buffer)}return e.prototype.encode=function(e,t){if(t>this.maxDepth)throw new Error("Too deep objects in depth "+t);null==e?this.encodeNil():"boolean"==typeof e?this.encodeBoolean(e):"number"==typeof e?this.encodeNumber(e):"string"==typeof e?this.encodeString(e):this.encodeObject(e,t)},e.prototype.getUint8Array=function(){return this.bytes.subarray(0,this.pos)},e.prototype.ensureBufferSizeToWrite=function(e){var t=this.pos+e;this.view.byteLength<t&&this.resizeBuffer(2*t)},e.prototype.resizeBuffer=function(e){var t=new ArrayBuffer(e),r=new Uint8Array(t),n=new DataView(t);r.set(this.bytes),this.view=n,this.bytes=r},e.prototype.encodeNil=function(){this.writeU8(192)},e.prototype.encodeBoolean=function(e){!1===e?this.writeU8(194):this.writeU8(195)},e.prototype.encodeNumber=function(e){Number.isSafeInteger(e)?e>=0?e<128?this.writeU8(e):e<256?(this.writeU8(204),this.writeU8(e)):e<65536?(this.writeU8(205),this.writeU16(e)):e<4294967296?(this.writeU8(206),this.writeU32(e)):(this.writeU8(207),this.writeU64(e)):e>=-32?this.writeU8(224|e+32):e>=-128?(this.writeU8(208),this.writeI8(e)):e>=-32768?(this.writeU8(209),this.writeI16(e)):e>=-2147483648?(this.writeU8(210),this.writeI32(e)):(this.writeU8(211),this.writeI64(e)):this.forceFloat32?(this.writeU8(202),this.writeF32(e)):(this.writeU8(203),this.writeF64(e))},e.prototype.writeStringHeader=function(e){if(e<32)this.writeU8(160+e);else if(e<256)this.writeU8(217),this.writeU8(e);else if(e<65536)this.writeU8(218),this.writeU16(e);else{if(!(e<4294967296))throw new Error("Too long string: "+e+" bytes in UTF-8");this.writeU8(219),this.writeU32(e)}},e.prototype.encodeString=function(e){var t=e.length;if(o&&t>200){var r=s(e);this.ensureBufferSizeToWrite(5+r),this.writeStringHeader(r),h(e,this.bytes,this.pos),this.pos+=r}else{if(A&&t>1024){var n=5+4*t;this.ensureBufferSizeToWrite(n);var i=L(e,this.bytes,this.pos);return void(this.pos+=i)}r=s(e);this.ensureBufferSizeToWrite(5+r),this.writeStringHeader(r),function(e,t,r){for(var n=e.length,i=r,o=0;o<n;){var s=e.charCodeAt(o++);if(0!=(4294967168&s)){if(0==(4294965248&s))t[i++]=s>>6&31|192;else{if(s>=55296&&s<=56319&&o<n){var a=e.charCodeAt(o);56320==(64512&a)&&(++o,s=((1023&s)<<10)+(1023&a)+65536)}0==(4294901760&s)?(t[i++]=s>>12&15|224,t[i++]=s>>6&63|128):(t[i++]=s>>18&7|240,t[i++]=s>>12&63|128,t[i++]=s>>6&63|128)}t[i++]=63&s|128}else t[i++]=s}}(e,this.bytes,this.pos),this.pos+=r}},e.prototype.encodeObject=function(e,t){var r=this.extensionCodec.tryToEncode(e);if(null!=r)this.encodeExtension(r);else if(Array.isArray(e))this.encodeArray(e,t);else if(ArrayBuffer.isView(e))this.encodeBinary(e);else{if("object"!=typeof e)throw new Error("Unrecognized object: "+Object.prototype.toString.apply(e));this.encodeMap(e,t)}},e.prototype.encodeBinary=function(e){var t=e.byteLength;if(t<256)this.writeU8(196),this.writeU8(t);else if(t<65536)this.writeU8(197),this.writeU16(t);else{if(!(t<4294967296))throw new Error("Too large binary: "+t);this.writeU8(198),this.writeU32(t)}var r=E(e);this.writeU8a(r)},e.prototype.encodeArray=function(e,t){var r,n,i=e.length;if(i<16)this.writeU8(144+i);else if(i<65536)this.writeU8(220),this.writeU16(i);else{if(!(i<4294967296))throw new Error("Too large array: "+i);this.writeU8(221),this.writeU32(i)}try{for(var o=k(e),s=o.next();!s.done;s=o.next()){var a=s.value;this.encode(a,t+1)}}catch(e){r={error:e}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}},e.prototype.encodeMap=function(e,t){var r=Object.keys(e);this.sortKeys&&r.sort();var n=r.length;if(n<16)this.writeU8(128+n);else if(n<65536)this.writeU8(222),this.writeU16(n);else{if(!(n<4294967296))throw new Error("Too large map object: "+n);this.writeU8(223),this.writeU32(n)}for(var i=0;i<n;i++){var o=r[i];this.encodeString(o),this.encode(e[o],t+1)}},e.prototype.encodeExtension=function(e){var t=e.data.length;if(1===t)this.writeU8(212);else if(2===t)this.writeU8(213);else if(4===t)this.writeU8(214);else if(8===t)this.writeU8(215);else if(16===t)this.writeU8(216);else if(t<256)this.writeU8(199),this.writeU8(t);else if(t<65536)this.writeU8(200),this.writeU16(t);else{if(!(t<4294967296))throw new Error("Too large extension object: "+t);this.writeU8(201),this.writeU32(t)}this.writeI8(e.type),this.writeU8a(e.data)},e.prototype.writeU8=function(e){this.ensureBufferSizeToWrite(1),this.view.setUint8(this.pos,e),this.pos++},e.prototype.writeU8a=function(e){var t=e.length;this.ensureBufferSizeToWrite(t),this.bytes.set(e,this.pos),this.pos+=t},e.prototype.writeI8=function(e){this.ensureBufferSizeToWrite(1),this.view.setInt8(this.pos,e),this.pos++},e.prototype.writeU16=function(e){this.ensureBufferSizeToWrite(2),this.view.setUint16(this.pos,e),this.pos+=2},e.prototype.writeI16=function(e){this.ensureBufferSizeToWrite(2),this.view.setInt16(this.pos,e),this.pos+=2},e.prototype.writeU32=function(e){this.ensureBufferSizeToWrite(4),this.view.setUint32(this.pos,e),this.pos+=4},e.prototype.writeI32=function(e){this.ensureBufferSizeToWrite(4),this.view.setInt32(this.pos,e),this.pos+=4},e.prototype.writeF32=function(e){this.ensureBufferSizeToWrite(4),this.view.setFloat32(this.pos,e),this.pos+=4},e.prototype.writeF64=function(e){this.ensureBufferSizeToWrite(8),this.view.setFloat64(this.pos,e),this.pos+=8},e.prototype.writeU64=function(e){this.ensureBufferSizeToWrite(8),function(e,t,r){var n=r/4294967296,i=r;e.setUint32(t,n),e.setUint32(t+4,i)}(this.view,this.pos,e),this.pos+=8},e.prototype.writeI64=function(e){this.ensureBufferSizeToWrite(8),p(this.view,this.pos,e),this.pos+=8},e}(),D={};function P(e,t){void 0===t&&(t=D);var r=new C(t.extensionCodec,t.maxDepth,t.initialBufferSize,t.sortKeys,t.forceFloat32);return r.encode(e,1),r.getUint8Array()}function j(e){return(e<0?"-":"")+"0x"+Math.abs(e).toString(16).padStart(2,"0")}var F=16,W=16,O=function(){function e(e,t){void 0===e&&(e=F),void 0===t&&(t=W),this.maxKeyLength=e,this.maxLengthPerKey=t,this.caches=[];for(var r=0;r<this.maxKeyLength;r++)this.caches.push([])}return e.prototype.canBeCached=function(e){return e>0&&e<=this.maxKeyLength},e.prototype.get=function(e,t,r){var n=this.caches[r-1],i=n.length;e:for(var o=0;o<i;o++){for(var s=n[o],a=s.bytes,h=0;h<r;h++)if(a[h]!==e[t+h])continue e;return s.value}return null},e.prototype.store=function(e,t){var r=this.caches[e.length-1],n={bytes:e,value:t};r.length>=this.maxLengthPerKey?r[Math.random()*r.length|0]=n:r.push(n)},e.prototype.decode=function(e,t,r){var n=this.get(e,t,r);if(n)return n;var i=c(e,t,r),o=Uint8Array.prototype.slice.call(e,t,t+r);return this.store(o,i),i},e}(),_=function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function s(e){try{h(n.next(e))}catch(e){o(e)}}function a(e){try{h(n.throw(e))}catch(e){o(e)}}function h(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(s,a)}h((n=n.apply(e,t||[])).next())})},K=function(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},V=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,i){(function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)})(n,i,(t=e[r](t)).done,t.value)})}}},N=function(e){return this instanceof N?(this.v=e,this):new N(e)},R=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(e,t||[]),o=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(e){i[e]&&(n[e]=function(t){return new Promise(function(r,n){o.push([e,t,r,n])>1||a(e,t)})})}function a(e,t){try{(r=i[e](t)).value instanceof N?Promise.resolve(r.value.v).then(h,u):c(o[0][2],r)}catch(e){c(o[0][3],e)}var r}function h(e){a("next",e)}function u(e){a("throw",e)}function c(e,t){e(t),o.shift(),o.length&&a(o[0][0],o[0][1])}},H=-1,G=new DataView(new ArrayBuffer(0)),X=new Uint8Array(G.buffer),q=function(){try{G.getInt8(0)}catch(e){return e.constructor}throw new Error("never reached")}(),J=new q("Insufficient data"),Q=4294967295,Y=new O,Z=function(){function e(e,t,r,n,i,o){void 0===e&&(e=S.defaultCodec),void 0===t&&(t=Q),void 0===r&&(r=Q),void 0===n&&(n=Q),void 0===i&&(i=Q),void 0===o&&(o=Q),this.extensionCodec=e,this.maxStrLength=t,this.maxBinLength=r,this.maxArrayLength=n,this.maxMapLength=i,this.maxExtLength=o,this.totalPos=0,this.pos=0,this.view=G,this.bytes=X,this.headByte=H,this.stack=[],this.cachedKeyDecoder=Y}return e.prototype.setBuffer=function(e){this.bytes=E(e),this.view=function(e){if(e instanceof ArrayBuffer)return new DataView(e);var t=E(e);return new DataView(t.buffer,t.byteOffset,t.byteLength)}(this.bytes),this.pos=0},e.prototype.appendBuffer=function(e){if(this.headByte!==H||this.hasRemaining()){var t=this.bytes.subarray(this.pos),r=E(e),n=new Uint8Array(t.length+r.length);n.set(t),n.set(r,t.length),this.setBuffer(n)}else this.setBuffer(e)},e.prototype.hasRemaining=function(e){return void 0===e&&(e=1),this.view.byteLength-this.pos>=e},e.prototype.createNoExtraBytesError=function(e){var t=this.view,r=this.pos;return new RangeError("Extra "+(t.byteLength-r)+" byte(s) found at buffer["+e+"]")},e.prototype.decodeSingleSync=function(){var e=this.decodeSync();if(this.hasRemaining())throw this.createNoExtraBytesError(this.pos);return e},e.prototype.decodeSingleAsync=function(e){var t,r,n,i;return _(this,void 0,void 0,function(){var o,s,a,h,u,c,f,l;return K(this,function(p){switch(p.label){case 0:o=!1,p.label=1;case 1:p.trys.push([1,6,7,12]),t=V(e),p.label=2;case 2:return[4,t.next()];case 3:if((r=p.sent()).done)return[3,5];if(a=r.value,o)throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(a);try{s=this.decodeSync(),o=!0}catch(e){if(!(e instanceof q))throw e}this.totalPos+=this.pos,p.label=4;case 4:return[3,2];case 5:return[3,12];case 6:return h=p.sent(),n={error:h},[3,12];case 7:return p.trys.push([7,,10,11]),r&&!r.done&&(i=t.return)?[4,i.call(t)]:[3,9];case 8:p.sent(),p.label=9;case 9:return[3,11];case 10:if(n)throw n.error;return[7];case 11:return[7];case 12:if(o){if(this.hasRemaining())throw this.createNoExtraBytesError(this.totalPos);return[2,s]}throw c=(u=this).headByte,f=u.pos,l=u.totalPos,new RangeError("Insufficient data in parcing "+j(c)+" at "+l+" ("+f+" in the current buffer)")}})})},e.prototype.decodeArrayStream=function(e){return this.decodeMultiAsync(e,!0)},e.prototype.decodeStream=function(e){return this.decodeMultiAsync(e,!1)},e.prototype.decodeMultiAsync=function(e,t){return R(this,arguments,function(){var r,n,i,o,s,a,h,u,c;return K(this,function(f){switch(f.label){case 0:r=t,n=-1,f.label=1;case 1:f.trys.push([1,13,14,19]),i=V(e),f.label=2;case 2:return[4,N(i.next())];case 3:if((o=f.sent()).done)return[3,12];if(s=o.value,t&&0===n)throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(s),r&&(n=this.readArraySize(),r=!1,this.complete()),f.label=4;case 4:f.trys.push([4,9,,10]),f.label=5;case 5:return[4,N(this.decodeSync())];case 6:return[4,f.sent()];case 7:return f.sent(),0==--n?[3,8]:[3,5];case 8:return[3,10];case 9:if(!((a=f.sent())instanceof q))throw a;return[3,10];case 10:this.totalPos+=this.pos,f.label=11;case 11:return[3,2];case 12:return[3,19];case 13:return h=f.sent(),u={error:h},[3,19];case 14:return f.trys.push([14,,17,18]),o&&!o.done&&(c=i.return)?[4,N(c.call(i))]:[3,16];case 15:f.sent(),f.label=16;case 16:return[3,18];case 17:if(u)throw u.error;return[7];case 18:return[7];case 19:return[2]}})})},e.prototype.decodeSync=function(){e:for(;;){var e=this.readHeadByte(),t=void 0;if(e>=224)t=e-256;else if(e<192)if(e<128)t=e;else if(e<144){if(0!==(n=e-128)){this.pushMapState(n),this.complete();continue e}t={}}else if(e<160){if(0!==(n=e-144)){this.pushArrayState(n),this.complete();continue e}t=[]}else{var r=e-160;t=this.decodeUtf8String(r,0)}else if(192===e)t=null;else if(194===e)t=!1;else if(195===e)t=!0;else if(202===e)t=this.readF32();else if(203===e)t=this.readF64();else if(204===e)t=this.readU8();else if(205===e)t=this.readU16();else if(206===e)t=this.readU32();else if(207===e)t=this.readU64();else if(208===e)t=this.readI8();else if(209===e)t=this.readI16();else if(210===e)t=this.readI32();else if(211===e)t=this.readI64();else if(217===e){r=this.lookU8();t=this.decodeUtf8String(r,1)}else if(218===e){r=this.lookU16();t=this.decodeUtf8String(r,2)}else if(219===e){r=this.lookU32();t=this.decodeUtf8String(r,4)}else if(220===e){if(0!==(n=this.readU16())){this.pushArrayState(n),this.complete();continue e}t=[]}else if(221===e){if(0!==(n=this.readU32())){this.pushArrayState(n),this.complete();continue e}t=[]}else if(222===e){if(0!==(n=this.readU16())){this.pushMapState(n),this.complete();continue e}t={}}else if(223===e){if(0!==(n=this.readU32())){this.pushMapState(n),this.complete();continue e}t={}}else if(196===e){var n=this.lookU8();t=this.decodeBinary(n,1)}else if(197===e){n=this.lookU16();t=this.decodeBinary(n,2)}else if(198===e){n=this.lookU32();t=this.decodeBinary(n,4)}else if(212===e)t=this.decodeExtension(1,0);else if(213===e)t=this.decodeExtension(2,0);else if(214===e)t=this.decodeExtension(4,0);else if(215===e)t=this.decodeExtension(8,0);else if(216===e)t=this.decodeExtension(16,0);else if(199===e){n=this.lookU8();t=this.decodeExtension(n,1)}else if(200===e){n=this.lookU16();t=this.decodeExtension(n,2)}else{if(201!==e)throw new Error("Unrecognized type byte: "+j(e));n=this.lookU32();t=this.decodeExtension(n,4)}this.complete();for(var i=this.stack;i.length>0;){var o=i[i.length-1];if(0===o.type){if(o.array[o.position]=t,o.position++,o.position!==o.size)continue e;i.pop(),t=o.array}else{if(1===o.type){if("string"!=typeof t)throw new Error("The type of key must be string but "+typeof t);o.key=t,o.type=2;continue e}if(2===o.type){if(o.map[o.key]=t,o.readCount++,o.readCount!==o.size){o.key=null,o.type=1;continue e}i.pop(),t=o.map}}}return t}},e.prototype.readHeadByte=function(){return this.headByte===H&&(this.headByte=this.readU8()),this.headByte},e.prototype.complete=function(){this.headByte=H},e.prototype.readArraySize=function(){var e=this.readHeadByte();switch(e){case 220:return this.readU16();case 221:return this.readU32();default:if(e<160)return e-144;throw new Error("Unrecognized array type byte: "+j(e))}},e.prototype.pushMapState=function(e){if(e>this.maxMapLength)throw new Error("Max length exceeded: map length ("+e+") > maxMapLengthLength ("+this.maxMapLength+")");this.stack.push({type:1,size:e,key:null,readCount:0,map:{}})},e.prototype.pushArrayState=function(e){if(e>this.maxArrayLength)throw new Error("Max length exceeded: array length ("+e+") > maxArrayLength ("+this.maxArrayLength+")");this.stack.push({type:0,size:e,array:new Array(e),position:0})},e.prototype.decodeUtf8String=function(e,t){if(e>this.maxStrLength)throw new Error("Max length exceeded: UTF-8 byte length ("+e+") > maxStrLength ("+this.maxStrLength+")");if(this.bytes.byteLength<this.pos+t+e)throw J;var r,n=this.pos+t;return r=this.stateIsMapKey()&&this.cachedKeyDecoder.canBeCached(e)?this.cachedKeyDecoder.decode(this.bytes,n,e):o&&e>200?function(e,t,r){var n=e.subarray(t,t+r);return f.decode(n)}(this.bytes,n,e):A&&e>1024?T(this.bytes,n,e):c(this.bytes,n,e),this.pos+=t+e,r},e.prototype.stateIsMapKey=function(){return this.stack.length>0&&1===this.stack[this.stack.length-1].type},e.prototype.decodeBinary=function(e,t){if(e>this.maxBinLength)throw new Error("Max length exceeded: bin length ("+e+") > maxBinLength ("+this.maxBinLength+")");if(!this.hasRemaining(e+t))throw J;var r=this.pos+t,n=this.bytes.subarray(r,r+e);return this.pos+=t+e,n},e.prototype.decodeExtension=function(e,t){if(e>this.maxExtLength)throw new Error("Max length exceeded: ext length ("+e+") > maxExtLength ("+this.maxExtLength+")");var r=this.view.getInt8(this.pos+t),n=this.decodeBinary(e,t+1);return this.extensionCodec.decode(n,r)},e.prototype.lookU8=function(){return this.view.getUint8(this.pos)},e.prototype.lookU16=function(){return this.view.getUint16(this.pos)},e.prototype.lookU32=function(){return this.view.getUint32(this.pos)},e.prototype.readU8=function(){var e=this.view.getUint8(this.pos);return this.pos++,e},e.prototype.readI8=function(){var e=this.view.getInt8(this.pos);return this.pos++,e},e.prototype.readU16=function(){var e=this.view.getUint16(this.pos);return this.pos+=2,e},e.prototype.readI16=function(){var e=this.view.getInt16(this.pos);return this.pos+=2,e},e.prototype.readU32=function(){var e=this.view.getUint32(this.pos);return this.pos+=4,e},e.prototype.readI32=function(){var e=this.view.getInt32(this.pos);return this.pos+=4,e},e.prototype.readU64=function(){var e,t,r=(e=this.view,t=this.pos,4294967296*e.getUint32(t)+e.getUint32(t+4));return this.pos+=8,r},e.prototype.readI64=function(){var e=d(this.view,this.pos);return this.pos+=8,e},e.prototype.readF32=function(){var e=this.view.getFloat32(this.pos);return this.pos+=4,e},e.prototype.readF64=function(){var e=this.view.getFloat64(this.pos);return this.pos+=8,e},e}(),$={};function ee(e,t){void 0===t&&(t=$);var r=new Z(t.extensionCodec,t.maxStrLength,t.maxBinLength,t.maxArrayLength,t.maxMapLength,t.maxExtLength);return r.setBuffer(e),r.decodeSingleSync()}var te=function(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},re=function(e){return this instanceof re?(this.v=e,this):new re(e)},ne=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(e,t||[]),o=[];return n={},s("next"),s("throw"),s("return"),n[Symbol.asyncIterator]=function(){return this},n;function s(e){i[e]&&(n[e]=function(t){return new Promise(function(r,n){o.push([e,t,r,n])>1||a(e,t)})})}function a(e,t){try{(r=i[e](t)).value instanceof re?Promise.resolve(r.value.v).then(h,u):c(o[0][2],r)}catch(e){c(o[0][3],e)}var r}function h(e){a("next",e)}function u(e){a("throw",e)}function c(e,t){e(t),o.shift(),o.length&&a(o[0][0],o[0][1])}};function ie(e){return null!=e[Symbol.asyncIterator]?e:function(e){return ne(this,arguments,function(){var t,r,n,i;return te(this,function(o){switch(o.label){case 0:t=e.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,re(t.read())];case 3:return r=o.sent(),n=r.done,i=r.value,n?[4,re(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,re(i)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}(e)}var oe=function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function s(e){try{h(n.next(e))}catch(e){o(e)}}function a(e){try{h(n.throw(e))}catch(e){o(e)}}function h(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(s,a)}h((n=n.apply(e,t||[])).next())})},se=function(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};function ae(e,t){return void 0===t&&(t=$),oe(this,void 0,void 0,function(){var r;return se(this,function(n){return r=ie(e),[2,new Z(t.extensionCodec,t.maxStrLength,t.maxBinLength,t.maxArrayLength,t.maxMapLength,t.maxExtLength).decodeSingleAsync(r)]})})}function he(e,t){void 0===t&&(t=$);var r=ie(e);return new Z(t.extensionCodec,t.maxStrLength,t.maxBinLength,t.maxArrayLength,t.maxMapLength,t.maxExtLength).decodeArrayStream(r)}function ue(e,t){void 0===t&&(t=$);var r=ie(e);return new Z(t.extensionCodec,t.maxStrLength,t.maxBinLength,t.maxArrayLength,t.maxMapLength,t.maxExtLength).decodeStream(r)}r.d(t,"encode",function(){return P}),r.d(t,"decode",function(){return ee}),r.d(t,"decodeAsync",function(){return ae}),r.d(t,"decodeArrayStream",function(){return he}),r.d(t,"decodeStream",function(){return ue}),r.d(t,"Decoder",function(){return Z}),r.d(t,"Encoder",function(){return C}),r.d(t,"ExtensionCodec",function(){return S}),r.d(t,"ExtData",function(){return l}),r.d(t,"EXT_TIMESTAMP",function(){return-1}),r.d(t,"encodeDateToTimeSpec",function(){return g}),r.d(t,"encodeTimeSpecToTimestamp",function(){return v}),r.d(t,"decodeTimestampToTimeSpec",function(){return m}),r.d(t,"encodeTimestampExtension",function(){return b}),r.d(t,"decodeTimestampExtension",function(){return U}),r.d(t,"__WASM_AVAILABLE",function(){return A})}])});

},{}],"D:\\work\\privatesky\\builds\\tmp\\edfsBar_intermediar.js":[function(require,module,exports){
(function (global){
global.edfsBarLoadModules = function(){ 

	if(typeof $$.__runtimeModules["bar"] === "undefined"){
		$$.__runtimeModules["bar"] = require("bar");
	}

	if(typeof $$.__runtimeModules["psk-http-client"] === "undefined"){
		$$.__runtimeModules["psk-http-client"] = require("psk-http-client");
	}

	if(typeof $$.__runtimeModules["edfs"] === "undefined"){
		$$.__runtimeModules["edfs"] = require("edfs");
	}

	if(typeof $$.__runtimeModules["edfs-middleware"] === "undefined"){
		$$.__runtimeModules["edfs-middleware"] = require("edfs-middleware");
	}

	if(typeof $$.__runtimeModules["edfs-brick-storage"] === "undefined"){
		$$.__runtimeModules["edfs-brick-storage"] = require("edfs-brick-storage");
	}

	if(typeof $$.__runtimeModules["bar-fs-adapter"] === "undefined"){
		$$.__runtimeModules["bar-fs-adapter"] = require("bar-fs-adapter");
	}

	if(typeof $$.__runtimeModules["adler32"] === "undefined"){
		$$.__runtimeModules["adler32"] = require("adler32");
	}

	if(typeof $$.__runtimeModules["pskdomain"] === "undefined"){
		$$.__runtimeModules["pskdomain"] = require("pskdomain");
	}

	if(typeof $$.__runtimeModules["overwrite-require"] === "undefined"){
		$$.__runtimeModules["overwrite-require"] = require("overwrite-require");
	}

	if(typeof $$.__runtimeModules["swarmutils"] === "undefined"){
		$$.__runtimeModules["swarmutils"] = require("swarmutils");
	}

	if(typeof $$.__runtimeModules["@msgpack/msgpack"] === "undefined"){
		$$.__runtimeModules["@msgpack/msgpack"] = require("@msgpack/msgpack");
	}

	if(typeof $$.__runtimeModules["pskcrypto"] === "undefined"){
		$$.__runtimeModules["pskcrypto"] = require("pskcrypto");
	}

	if(typeof $$.__runtimeModules["dossier"] === "undefined"){
		$$.__runtimeModules["dossier"] = require("dossier");
	}
}
if (false) {
	edfsBarLoadModules();
}; 
global.edfsBarRequire = require;
if (typeof $$ !== "undefined") {            
    $$.requireBundle("edfsBar");
    };
    
    
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"@msgpack/msgpack":"@msgpack/msgpack","adler32":"adler32","bar":"bar","bar-fs-adapter":"bar-fs-adapter","dossier":"dossier","edfs":"edfs","edfs-brick-storage":"edfs-brick-storage","edfs-middleware":"edfs-middleware","overwrite-require":"overwrite-require","psk-http-client":"psk-http-client","pskcrypto":"pskcrypto","pskdomain":"pskdomain","swarmutils":"swarmutils"}],"D:\\work\\privatesky\\modules\\adler32\\lib\\Hash.js":[function(require,module,exports){
(function (Buffer){
"use strict";

var util = require('util');
var Transform = require('stream').Transform;
var crypto = require('crypto');
var algorithm = require('./algorithm');

// Provides a node.js Hash style interface for _sum32: http://nodejs.org/api/crypto.html#crypto_class_hash
var Hash = module.exports = function Hash(options)
{
	if (!(this instanceof Hash))
		return new Hash(options);

	Transform.call(this, options);

	this._sum = 1;
};

util.inherits(Hash, Transform);

Hash.prototype.update = function(data, encoding)
{
	if (this._done)
		throw new TypeError('HashUpdate fail');

	encoding = encoding || crypto.DEFAULT_ENCODING;

	if (!(data instanceof Buffer)) {
		data = new Buffer(''+data, encoding === 'buffer' ? 'binary' : encoding);
	}

	this._sum = algorithm.sum(data, this._sum);

	return this;
};

Hash.prototype.digest = function(encoding)
{
	if (this._done)
		throw new Error('Not initialized');
	
	this._done = true;

	var buf = new Buffer(4);
	buf.writeUInt32BE(this._sum, 0);

	encoding = encoding || crypto.DEFAULT_ENCODING;

	if (encoding === 'buffer')
		return buf;
	else
		return buf.toString(encoding);
};

Hash.prototype._transform = function(chunk, encoding, callback)
{
	this.update(chunk, encoding);
	callback();
};

Hash.prototype._flush = function(callback)
{
	var encoding = this._readableState.encoding || 'buffer';
	this.push(this.digest(encoding), encoding);
	callback();
};
}).call(this,require("buffer").Buffer)

},{"./algorithm":"D:\\work\\privatesky\\modules\\adler32\\lib\\algorithm.js","buffer":false,"crypto":false,"stream":false,"util":false}],"D:\\work\\privatesky\\modules\\adler32\\lib\\algorithm.js":[function(require,module,exports){
"use strict";

/**
 * Largest prime smaller than 2^16 (65536)
 */
var BASE = 65521;

/**
 * Largest value n such that 255n(n+1)/2 + (n+1)(BASE-1) <= 2^32-1
 *
 * NMAX is just how often modulo needs to be taken of the two checksum word halves to prevent overflowing a 32 bit
 * integer. This is an optimization. We "could" take the modulo after each byte, and it must be taken before each
 * digest.
 */
var NMAX = 5552;

exports.sum = function(buf, sum)
{
	if (sum == null)
		sum = 1;

	var a = sum & 0xFFFF,
		b = (sum >>> 16) & 0xFFFF,
		i = 0,
		max = buf.length,
		n, value;

	while (i < max)
	{
		n = Math.min(NMAX, max - i);

		do
		{
			a += buf[i++]<<0;
			b += a;
		}
		while (--n);

		a %= BASE;
		b %= BASE;
	}

	return ((b << 16) | a) >>> 0;
};

exports.roll = function(sum, length, oldByte, newByte)
{
	var a = sum & 0xFFFF,
		b = (sum >>> 16) & 0xFFFF;

	if (newByte != null)
	{
		a = (a - oldByte + newByte + BASE) % BASE;
		b = (b - ((length * oldByte) % BASE) + a - 1 + BASE) % BASE;
	}
	else
	{
		a = (a - oldByte + BASE) % BASE;
		b = (b - ((length * oldByte) % BASE) - 1 + BASE) % BASE;
	}

	return ((b << 16) | a) >>> 0;
};
},{}],"D:\\work\\privatesky\\modules\\adler32\\lib\\register.js":[function(require,module,exports){
"use strict";

module.exports = function()
{
	var crypto = require('crypto');
	var Hash = require('./Hash');

	// Silently abort if the adler32 algorithm is already supported by the
	// crypto module.
	if (crypto.getHashes().indexOf('adler32') != -1)
		return;

	crypto.getHashes = function()
	{
		return this().concat(['adler32']);
	}
	.bind(crypto.getHashes.bind(crypto));

	crypto.createHash = function(algorithm)
	{
		if (algorithm === 'adler32')
			return new Hash();
		else
			return this(algorithm);
	}
	.bind(crypto.createHash.bind(this));
};
},{"./Hash":"D:\\work\\privatesky\\modules\\adler32\\lib\\Hash.js","crypto":false}],"D:\\work\\privatesky\\modules\\bar-fs-adapter\\lib\\FsAdapter.js":[function(require,module,exports){
(function (Buffer){
const fsModule = "fs";
const fs = require(fsModule);
const pathModule = "path";
const path = require(pathModule);
const PathAsyncIterator = require('./PathAsyncIterator');

function FsAdapter() {

    let pathAsyncIterator;

    this.getFileSize = function (filePath, callback) {
        fs.stat(filePath, (err, stats) => {
            if (err) {
                return callback(err);
            }

            callback(undefined, stats.size);
        });
    };

    this.readBlockFromFile = function (filePath, blockStart, blockEnd, callback) {
        const readStream = fs.createReadStream(filePath, {
            start: blockStart,
            end: blockEnd
        });

        let data = Buffer.alloc(0);

        readStream.on("data", (chunk) => {
            data = Buffer.concat([data, chunk]);
        });

        readStream.on("error", (err) => {
            callback(err);
        });

        readStream.on("end", () => {
            callback(undefined, data);
        });
    };

    this.getFilesIterator = function(inputPath) {
        return new PathAsyncIterator(inputPath);
    };

    this.getNextFile = function (inputPath, restart, callback) {
        if(typeof restart === "function") {
            callback = restart;
            restart = false;
        }

        if(restart === true) {
            pathAsyncIterator = new PathAsyncIterator(inputPath);
        }

        pathAsyncIterator = pathAsyncIterator || new PathAsyncIterator(inputPath);
        pathAsyncIterator.next(callback);
    };

    this.appendBlockToFile = function (filePath, data, callback) {
        const pth = constructPath(filePath);
        if (pth !== '') {
            fs.mkdir(pth, {recursive: true}, (err) => {
                if (err && err.code !== "EEXIST") {
                    return callback(err);
                }

                fs.appendFile(filePath, data, callback);
            });
        } else {
            fs.appendFile(filePath, data, callback);
        }
    };

    this.writeBlockToFile = function (filePath, data, position, length, callback) {
        const folderPath = path.dirname(filePath);
        fs.access(folderPath, (err) => {
            if (err) {
                fs.mkdir(folderPath, {recursive: true}, (err) => {
                    if (err) {
                        return callback(err);
                    }

                    __writeBlock();
                });
            } else {
                __writeBlock();
            }
        });

        function __writeBlock() {
            const writeStream = fs.createWriteStream(filePath, {flags: "a+", start: position});

            writeStream.on("error", (err) => {
                return callback(err);
            });

            writeStream.write(data, callback);
        }
    };

    function constructPath(filePath) {
        let slices = filePath.split(path.sep);
        slices.pop();
        return slices.join(path.sep);
    }

}

module.exports = FsAdapter;
}).call(this,require("buffer").Buffer)

},{"./PathAsyncIterator":"D:\\work\\privatesky\\modules\\bar-fs-adapter\\lib\\PathAsyncIterator.js","buffer":false}],"D:\\work\\privatesky\\modules\\bar-fs-adapter\\lib\\PathAsyncIterator.js":[function(require,module,exports){
const fsModule = "fs";
const fs = require(fsModule);
const pathModule = "path";
const path = require(pathModule);
const TaskCounter = require("swarmutils").TaskCounter;


function PathAsyncIterator(inputPath) {
    let removablePathLen;
    const fileList = [];
    const folderList = [];
    let isFirstCall = true;
    let pathIsFolder;

    this.next = function (callback) {
        if (isFirstCall === true) {
            isDir(inputPath, (err, status) => {
                if (err) {
                    return callback(err);
                }

                isFirstCall = false;
                pathIsFolder = status;
                if (status === true) {
                    if(!inputPath.endsWith('/')) {
                        inputPath += '/';
                    }

                    removablePathLen = inputPath.length;
                    folderList.push(inputPath);
                    getNextFileFromFolder(callback);
                } else {
                    const fileName = path.basename(inputPath);
                    const fileParentFolder = path.dirname(inputPath);
                    callback(undefined, fileName, fileParentFolder);
                }
            });
        } else if (pathIsFolder) {
            getNextFileFromFolder(callback);
        } else {
            callback();
        }
    };

    function walkFolder(folderPath, callback) {
        const taskCounter = new TaskCounter((errors, results) => {
            if (fileList.length > 0) {
                const fileName = fileList.shift();
                return callback(undefined, fileName, inputPath);
            }

            if (folderList.length > 0) {
                const folderName = folderList.shift();
                return walkFolder(folderName, callback);
            }

            return callback();
        });

        fs.readdir(folderPath, (err, files) => {
            if (err) {
                return callback(err);
            }

            if (files.length === 0 && folderList.length === 0) {
                return callback();
            }

            if (files.length === 0) {
                walkFolder(folderList.shift(), callback);
            }
            taskCounter.increment(files.length);

            files.forEach(file => {
                let filePath = path.join(folderPath, file);
                isDir(filePath, (err, status) => {
                    if (err) {
                        return callback(err);
                    }

                    if (status) {
                        folderList.push(filePath);
                    } else {
                        fileList.push(filePath.substring(removablePathLen));
                    }

                    taskCounter.decrement();
                });
            });
        });
    }

    function isDir(filePath, callback) {
        fs.stat(filePath, (err, stats) => {
            if (err) {
                return callback(err);
            }

            return callback(undefined, stats.isDirectory());
        });
    }

    function getNextFileFromFolder(callback) {
        if (fileList.length === 0 && folderList.length === 0) {
            return callback();
        }

        if (fileList.length > 0) {
            const fileName = fileList.shift();
            return callback(undefined, fileName, inputPath);
        }


        walkFolder(folderList.shift(), (err, file) => {
            if (err) {
                return callback(err);
            }

            callback(undefined, file, inputPath);
        });
    }
}

module.exports = PathAsyncIterator;
},{"swarmutils":"swarmutils"}],"D:\\work\\privatesky\\modules\\bar\\lib\\Archive.js":[function(require,module,exports){
(function (Buffer){
const Brick = require('./Brick');
const pathModule = "path";
const path = require(pathModule);
const isStream = require("../utils/isStream");
const TaskCounter = require("swarmutils").TaskCounter;
const crypto = require('pskcrypto');
const adler32 = require('adler32');

function Archive(archiveConfigurator) {

    const archiveFsAdapter = archiveConfigurator.getFsAdapter();
    const storageProvider = archiveConfigurator.getStorageProvider();
    let cachedSEED;
    let barMap;
    let cachedMapDigest;

    this.getMapDigest = () => {
        if (cachedMapDigest) {
            return cachedMapDigest;
        }

        cachedMapDigest = archiveConfigurator.getMapDigest();
        return cachedMapDigest;
    };

    this.setSeed = (seed) => {
        cachedSEED = seed;
        archiveConfigurator.setSeed(Buffer.from(seed));
    };

    this.getSeed = () => {
        if (cachedSEED) {
            return cachedSEED;
        }

        cachedSEED = archiveConfigurator.getSeed().toString();
        return cachedSEED;
    };

    this.getFileHash = (fileBarPath, callback) => {
        loadBarMapThenExecute(() => {
            callback(undefined, __computeFileHash(fileBarPath).toString("hex"));
        }, callback)
    };

    this.getFolderHash = (folderBarPath, callback) => {
        loadBarMapThenExecute(() => {
            const fileList = barMap.getFileList(folderBarPath);
            let xor;
            for (let i = 0; i < fileList.length - 1; i++) {
                xor = crypto.xorBuffers(__computeFileHash(fileList[i]), __computeFileHash(fileList[i + 1]));
            }

            callback(undefined, crypto.pskHash(xor, "hex"));
        }, callback);
    };

    this.update = (fsPath, callback) => {
        let blocksPositions = {};
        let checksSumMap = barMap.getDictionaryObject();
        let fileNameHashes = __setFromHashList();
        let fileState = {};
        loadBarMapThenExecute(__update, callback);

        /**
         * in this function, i do a directory traversal and process every file that i find, looking for blocks that already exists in our archive
         * @private
         */

        function __setFromHashList() {
            let folderHashList = {};
            barMap.getFileList().forEach((file) => {
                folderHashList[file.slice(file.indexOf('/'))] = new Set(barMap.getHashList(file));
            });
            return folderHashList;
        }

        function __readDirectoryRecursively(folderPath, sign, callback) {
            archiveFsAdapter.getNextFile(folderPath, sign, __readFileChk);

            function __readFileChk(err, file) {
                if (err) {
                    return callback(err);
                }

                if (typeof file === 'undefined') {
                    return callback(undefined, blocksPositions, fileNameHashes);
                }

                const goodPath = path.posix.normalize(path.join(path.dirname(folderPath), file).split(path.sep).join(path.posix.sep));
                archiveFsAdapter.getFileSize(goodPath, (err, size) => {
                    if (err) {
                        return callback(err);
                    }
                    __readBlock(goodPath, goodPath.slice(goodPath.indexOf('/')), size, 0, archiveConfigurator.getBufferSize(), undefined, undefined, barMap.isInHeader(goodPath), (err) => {
                        if (err) {
                            return callback(err);
                        }
                        __readDirectoryRecursively(folderPath, false, callback);
                    });
                });

            }

            function __readBlock(file, cutFile, fileSize, index, blockSize, currentBlockCheckSum, firstByte, alreadyInBarMap, callback) {
                if (index >= fileSize) {
                    if (blocksPositions[file] === undefined) {
                        blocksPositions[file] = [];
                    }
                    blocksPositions[file].push({start: fileSize, end: fileSize});
                    return callback();
                }
                archiveFsAdapter.readBlockFromFile(file, index, index + blockSize - 1, (err, data) => {
                    if (err) {
                        return callback(err);
                    }
                    if (currentBlockCheckSum === undefined) {
                        currentBlockCheckSum = adler32.sum(data);
                    } else {
                        currentBlockCheckSum = adler32.roll(currentBlockCheckSum, blockSize, firstByte, data[blockSize - 1]);
                    }
                    let matchFound = false;
                    if (checksSumMap[currentBlockCheckSum] !== undefined) {
                        let hardDigest = crypto.pskHash(data).toString('hex');
                        for (let k = 0; k < checksSumMap[currentBlockCheckSum].length; k++) {
                            if (checksSumMap[currentBlockCheckSum][k] === hardDigest) {
                                if (blocksPositions[file] === undefined) {
                                    blocksPositions[file] = [];
                                }
                                blocksPositions[file].push({start: index, end: index + blockSize});
                                // if(alreadyInBarMap === false){
                                //     let tempBrick = new Brick();
                                //     tempBrick.setTransformedData(data);
                                // }
                                fileState[file] = alreadyInBarMap;
                                if (typeof fileNameHashes[cutFile] !== 'undefined') {
                                    fileNameHashes[cutFile].delete(hardDigest);
                                }
                                matchFound = true;
                                break;
                            }
                        }
                    }
                    if (matchFound === false) {
                        __readBlock(file, cutFile, fileSize, index + 1, blockSize, currentBlockCheckSum, data[0], alreadyInBarMap, callback);
                    } else {
                        __readBlock(file, cutFile, fileSize, index + blockSize, blockSize, undefined, undefined, alreadyInBarMap, callback);
                    }
                });
            }

        }

        function iterateThroughOffsets(fileName, goodPath, precedence, iteratorIndex, filePositions, callback) {
            if (iteratorIndex >= filePositions.length) {
                return callback();
            }
            let positionObj = filePositions[iteratorIndex];
            if (positionObj === undefined) {
                return callback();
            }
            if (positionObj.start > precedence) {
                archiveFsAdapter.readBlockFromFile(goodPath, precedence, positionObj.end - 1, (err, blockData) => {
                    if (err) {
                        return callback(err);
                    }
                    let bufferSize = archiveConfigurator.getBufferSize();
                    for (let index = 0; index < blockData.length; index += bufferSize) {
                        let brick = new Brick();
                        brick.setTransformedData(blockData.slice(index, index + bufferSize));
                        barMap.add(fileName, brick);
                        storageProvider.putBrick(brick, (err) => {
                            if (err) {
                                return callback(err);
                            }
                            if (index + bufferSize >= blockData.length) {
                                iterateThroughOffsets(fileName, goodPath, positionObj.end, iteratorIndex + 1, filePositions, callback);
                            }
                        });
                    }
                });
            } else {
                if (fileState[goodPath] === false) {
                    archiveFsAdapter.readBlockFromFile(goodPath, positionObj.start, positionObj.end - 1, (err, blockData) => {
                        if (err) {
                            return callback(err);
                        }
                        let brick = new Brick();
                        brick.setTransformedData(blockData);
                        barMap.add(fileName, brick);
                        iterateThroughOffsets(fileName, goodPath, positionObj.end, iteratorIndex + 1, filePositions, callback);
                    });
                } else {
                    iterateThroughOffsets(fileName, goodPath, positionObj.end, iteratorIndex + 1, filePositions, callback);
                }
            }
        }

        function __addBricks(positions, callback) {
            let precedence;
            const taskCounter = new TaskCounter((errs, results) => {
                return callback();
            });
            taskCounter.increment(Object.keys(positions).length);
            Object.keys(positions).forEach((fileName) => {
                precedence = 0;
                let goodPath = path.posix.normalize(fileName.split(path.sep).join(path.posix.sep));

                iterateThroughOffsets(fileName, goodPath, precedence, 0, positions[fileName], (err) => {
                    if (err) {
                        return callback(err);
                    }
                    taskCounter.decrement(undefined, fileName);
                });
            });
        }

        function __deleteBricks(deletions) {
            //de adaugat, barMap.removeBrick(filePath,brickHash);
            Object.keys(deletions).forEach((fileName) => {
                deletions[fileName].forEach((brickHash) => {
                    barMap.removeBrick(fileName, brickHash);
                });
            });
        }

        function __update() {
            __readDirectoryRecursively(fsPath, true, (err, positions, deletions) => {
                if (err) {
                    return callback(err);
                }
                __addBricks(positions, (err) => {
                    if (err) {
                        return callback(err);
                    }
                    __deleteBricks(deletions);
                    storageProvider.putBarMap(barMap, callback);
                });
            });
        }
    };

    this.writeFile = (fileBarPath, data, callback) => {
        loadBarMapThenExecute(__addData, callback);

        function __addData() {
            const brick = new Brick(archiveConfigurator);
            if (typeof data === "string") {
                data = Buffer.from(data);
            }

            if (!Buffer.isBuffer(data)) {
                return callback(Error(`Type of data is ${typeof data}. Expected Buffer.`));
            }

            brick.setRawData(data);
            barMap.emptyList(fileBarPath);
            barMap.add(fileBarPath, brick);
            storageProvider.putBrick(brick, (err) => {
                if (err) {
                    return callback(err);
                }

                storageProvider.putBarMap(barMap, (err, digest) => {
                    if (err) {
                        return callback(err);
                    }

                    callback(undefined, digest);
                });
            });
        }
    };

    this.readFile = (barPath, callback) => {
        loadBarMapThenExecute(__readFile, callback);

        function __readFile() {
            let fileData = Buffer.alloc(0);
            let brickIds;
            try {
                brickIds = barMap.getHashList(barPath);
            } catch (err) {
                return callback(err);
            }

            getFileRecursively(0, callback);

            function getFileRecursively(brickIndex, callback) {
                const brickId = brickIds[brickIndex];
                storageProvider.getBrick(brickId, (err, brick) => {
                    if (err) {
                        return callback(err);
                    }

                    brick.setConfig(archiveConfigurator);
                    brick.setTransformParameters(barMap.getTransformParameters(brickId));
                    fileData = Buffer.concat([fileData, brick.getRawData()]);
                    ++brickIndex;

                    if (brickIndex < brickIds.length) {
                        getFileRecursively(brickIndex, callback);
                    } else {
                        callback(undefined, fileData);
                    }
                });
            }
        }
    };

    this.addFile = (fsFilePath, barPath, callback) => {
        if (typeof barPath === "function") {
            callback = barPath;
            barPath = fsFilePath;
        }
        loadBarMapThenExecute(__addFile, callback);

        function __addFile() {
            createBricks(fsFilePath, barPath, archiveConfigurator.getBufferSize(), (err) => {
                if (err) {
                    return callback(err);
                }

                barMap.setConfig(archiveConfigurator);
                if (archiveConfigurator.getMapEncryptionKey()) {
                    barMap.setEncryptionKey(archiveConfigurator.getMapEncryptionKey());
                }

                storageProvider.putBarMap(barMap, callback);
            });
        }
    };

    /* TODO: do not create multiple BARMaps... */
    this.addFiles = (arrWithFilePaths, barPath, callback) => {
        let arr = arrWithFilePaths.slice();
        let self = this;
        function recAdd(){
            if(arr.length){
                let filePath = arr.pop();

                let fileName = path.basename(filePath) ;
                self.addFile(filePath, barPath + "/" + fileName, function(err, res){
                    if(err){
                     callback(err);
                    } else{
                        recAdd();
                    }
                });
            } else {
                callback(null, true);
            }
        }
        recAdd();
    };

    this.extractFile = (fsFilePath, barPath, callback) => {
        if (typeof barPath === "function") {
            callback = barPath;
            barPath = fsFilePath;
        }


        loadBarMapThenExecute(__extractFile, callback);

        function __extractFile() {
            const brickIds = barMap.getHashList(barPath);
            getFileRecursively(0, callback);

            function getFileRecursively(brickIndex, callback) {
                const brickId = brickIds[brickIndex];
                storageProvider.getBrick(brickId, (err, brick) => {
                    if (err) {
                        return callback(err);
                    }

                    brick.setConfig(archiveConfigurator);
                    brick.setTransformParameters(barMap.getTransformParameters(brickId));
                    archiveFsAdapter.appendBlockToFile(fsFilePath, brick.getRawData(), (err) => {
                        if (err) {
                            return callback(err);
                        }

                        ++brickIndex;
                        if (brickIndex < brickIds.length) {
                            getFileRecursively(brickIndex, callback);
                        } else {
                            callback();
                        }
                    });
                });
            }
        }
    };

    this.appendToFile = (filePath, data, callback) => {

        loadBarMapThenExecute(__appendToFile, callback);

        function __appendToFile() {
            filePath = path.normalize(filePath);

            if (typeof data === "string") {
                data = Buffer.from(data);
            }
            if (Buffer.isBuffer(data)) {
                const dataBrick = new Brick(data);
                storageProvider.putBrick(dataBrick, (err) => {
                    if (err) {
                        return callback(err);
                    }

                    barMap.add(filePath, dataBrick);
                    putBarMap(callback);
                });
                return;
            }

            if (isStream.isReadable(data)) {
                data.on('error', (err) => {
                    return callback(err);
                }).on('data', (chunk) => {
                    const dataBrick = new Brick(chunk);
                    barMap.add(filePath, dataBrick);
                    storageProvider.putBrick(dataBrick, (err) => {
                        if (err) {
                            return callback(err);
                        }
                    });
                }).on("end", () => {
                    putBarMap(callback);
                });
                return;
            }
            callback(new Error("Invalid type of parameter data"));
        }
    };


    this.replaceFile = (fileName, stream, callback) => {
        if (typeof stream !== 'object') {
            return callback(new Error('Wrong stream!'));
        }

        loadBarMapThenExecute(__replaceFile, callback);

        function __replaceFile() {
            fileName = path.normalize(fileName);
            stream.on('error', () => {
                return callback(new Error("File does not exist!"));
            }).on('open', () => {
                storageProvider.deleteFile(fileName, (err) => {
                    if (err) {
                        return callback(err);
                    }

                    barMap.emptyList(fileName);
                });
            }).on('data', (chunk) => {
                let tempBrick = new Brick(chunk);
                barMap.add(fileName, tempBrick);
                storageProvider.putBrick(tempBrick, (err) => {
                    if (err) {
                        return callback(err);
                    }
                    putBarMap(callback);
                });
            });
        }
    };

    this.deleteFile = (filePath, callback) => {
        loadBarMapThenExecute(() => {
            storageProvider.deleteFile(filePath, callback);
        }, callback);
    };

    this.addFolder = (fsFolderPath, barPath, callback) => {
        if (typeof barPath === "function") {
            callback = barPath;
            barPath = fsFolderPath;
        }
        const filesIterator = archiveFsAdapter.getFilesIterator(fsFolderPath);

        loadBarMapThenExecute(__addFolder, callback);

        function __addFolder() {

            filesIterator.next(readFileCb);

            function readFileCb(err, file, rootFsPath) {
                if (err) {
                    return callback(err);
                }

                if (typeof file !== "undefined") {
                    createBricks(path.join(rootFsPath, file), barPath + "/" + file, archiveConfigurator.getBufferSize(), (err) => {
                        if (err) {
                            return callback(err);
                        }

                        filesIterator.next(readFileCb);
                    });
                } else {
                    storageProvider.putBarMap(barMap, (err, mapDigest) => {
                        if (err) {
                            return callback(err);
                        }

                        archiveConfigurator.setMapDigest(mapDigest);
                        callback(undefined, mapDigest);
                    });
                }
            }
        }
    };


    this.extractFolder = (fsFolderPath, barPath, callback) => {
        if (typeof fsFolderPath === "function") {
            callback = fsFolderPath;
            fsFolderPath = undefined;
        }
        if (typeof barPath === "function") {
            callback = barPath;
            barPath = undefined;
        }

        loadBarMapThenExecute(() => {
            const filePaths = barMap.getFileList(barPath);
            const taskCounter = new TaskCounter(() => {
                callback();
            });
            taskCounter.increment(filePaths.length);
            filePaths.forEach(filePath => {
                let actualPath;
                if (fsFolderPath) {
                    if (fsFolderPath.includes(filePath)) {
                        actualPath = fsFolderPath;
                    } else {
                        actualPath = path.join(fsFolderPath, filePath);
                    }
                } else {
                    actualPath = filePath;
                }

                this.extractFile(actualPath, filePath, (err) => {
                    if (err) {
                        return callback(err);
                    }

                    taskCounter.decrement();
                });
            });
        }, callback);
    };

    this.store = (callback) => {
        storageProvider.putBarMap(barMap, callback);
    };

    this.listFiles = (folderBarPath, callback) => {
        loadBarMapThenExecute(() => {
            callback(undefined, barMap.getFileList(folderBarPath));
        }, callback);
    };

    this.clone = (targetStorage, preserveKeys = true, callback) => {
        targetStorage.getBarMap((err, targetBarMap) => {
            if (err) {
                return callback(err);
            }

            loadBarMapThenExecute(__cloneBricks, callback);

            function __cloneBricks() {
                const fileList = barMap.getFileList();

                __getFilesRecursively(fileList, 0, (err) => {
                    if (err) {
                        return callback(err);
                    }

                    cachedSEED = archiveConfigurator.getSeed();
                    archiveConfigurator.generateSeed();
                    targetBarMap.setEncryptionKey(archiveConfigurator.getMapEncryptionKey());
                    targetBarMap.setConfig(archiveConfigurator);
                    targetStorage.putBarMap(targetBarMap, err => callback(err, archiveConfigurator.getSeed()));
                });
            }

            function __getFilesRecursively(fileList, fileIndex, callback) {
                const filePath = fileList[fileIndex];
                __getBricksRecursively(filePath, barMap.getHashList(filePath), 0, (err) => {
                    if (err) {
                        return callback(err);
                    }
                    ++fileIndex;
                    if (fileIndex === fileList.length) {
                        return callback();
                    }

                    __getFilesRecursively(fileList, fileIndex, callback);
                });
            }

            function __getBricksRecursively(filePath, brickList, brickIndex, callback) {
                storageProvider.getBrick(brickList[brickIndex], (err, brick) => {
                    if (err) {
                        return callback(err);
                    }

                    if (barMap.getTransformParameters(brickList[brickIndex])) {
                        brick.setTransformParameters(barMap.getTransformParameters(brickList[brickIndex]));
                    }
                    __addBrickToTarget(brick, callback);
                });

                function __addBrickToTarget(brick, callback) {
                    brick.setConfig(archiveConfigurator);
                    if (!preserveKeys) {
                        brick.createNewTransform();
                    }

                    ++brickIndex;
                    targetBarMap.add(filePath, brick);
                    targetStorage.putBrick(brick, (err) => {
                        if (err) {
                            return callback(err);
                        }

                        if (brickIndex === brickList.length) {
                            return callback();
                        }

                        __getBricksRecursively(filePath, brickList, brickIndex, callback);
                    });
                }
            }
        });
    };

    //------------------------------------------- internal methods -----------------------------------------------------

    function __computeFileHash(fileBarPath) {
        const hashList = barMap.getHashList(fileBarPath);
        const PskHash = crypto.PskHash;
        const pskHash = new PskHash();
        hashList.forEach(hash => {
            pskHash.update(hash);
        });

        return pskHash.digest();
    }

    function putBarMap(callback) {
        if (typeof archiveConfigurator.getMapDigest() !== "undefined") {
            storageProvider.deleteFile(archiveConfigurator.getMapDigest(), (err) => {
                if (err) {
                    return callback(err);
                }

                __putBarMap(callback);
            });
            return;
        }
        __putBarMap(callback);
    }

    function __putBarMap(callback) {
        storageProvider.putBarMap(barMap, (err, newMapDigest) => {
            if (err) {
                return callback(err);
            }

            archiveConfigurator.setMapDigest(newMapDigest);
            callback(undefined, archiveConfigurator.getMapDigest());
        });
    }

    function createBricks(fsFilePath, barPath, blockSize, callback) {

        archiveFsAdapter.getFileSize(fsFilePath, (err, fileSize) => {
            if (err) {
                return callback(err);
            }

            let noBlocks = Math.floor(fileSize / blockSize);
            if (fileSize % blockSize > 0) {
                ++noBlocks;
            }

            //todo: check if emptyList is called ok in this place.
            // the scenario: adding a new file at an existing barPath should overwrite the initial content found there.

            barMap.emptyList(barPath);
            __createBricksRecursively(0, callback);

            function __createBricksRecursively(blockIndex, callback) {
                archiveFsAdapter.readBlockFromFile(fsFilePath, blockIndex * blockSize, (blockIndex + 1) * blockSize - 1, (err, blockData) => {
                    if (err) {
                        return callback(err);
                    }

                    const brick = new Brick(archiveConfigurator);

                    brick.setRawData(blockData);
                    barMap.add(barPath, brick);

                    storageProvider.putBrick(brick, (err) => {
                        if (err) {
                            return callback(err);
                        }

                        ++blockIndex;
                        if (blockIndex < noBlocks) {
                            __createBricksRecursively(blockIndex, callback);
                        } else {
                            callback();
                        }
                    });
                });
            }
        });
    }

    function loadBarMapThenExecute(functionToBeExecuted, callback) {
        storageProvider.getBarMap(archiveConfigurator.getMapDigest(), (err, map) => {
            if (err) {
                return callback(err);
            }

            if (archiveConfigurator.getMapEncryptionKey()) {
                map.setEncryptionKey(archiveConfigurator.getMapEncryptionKey());
            }

            if (!map.getConfig()) {
                map.setConfig(archiveConfigurator);
            }

            map.load();
            barMap = map;
            storageProvider.setBarMap(barMap);
            functionToBeExecuted();
        });
    }
}

module.exports = Archive;

}).call(this,require("buffer").Buffer)

},{"../utils/isStream":"D:\\work\\privatesky\\modules\\bar\\utils\\isStream.js","./Brick":"D:\\work\\privatesky\\modules\\bar\\lib\\Brick.js","adler32":"adler32","buffer":false,"pskcrypto":"pskcrypto","swarmutils":"swarmutils"}],"D:\\work\\privatesky\\modules\\bar\\lib\\ArchiveConfigurator.js":[function(require,module,exports){
const storageProviders = {};
const fsAdapters = {};
const Seed = require("./Seed");

function ArchiveConfigurator() {
    const config = {};

    let self = this;
    this.setBufferSize = (bufferSize) => {
        if (bufferSize < 65535) {
            throw Error(`Brick size should be equal to or greater than 65535. The provided brick size is ${bufferSize}`);
        }
        config.bufferSize = bufferSize;
    };

    this.getBufferSize = () => {
        return config.bufferSize;
    };

    this.setStorageProvider = (storageProviderName, ...args) => {
        if (!storageProviders[storageProviderName]) {
            throw new Error(storageProviderName + " is not registered! Did you forget to register it?");
        }
        config.storageProvider = storageProviders[storageProviderName](...args);
    };

    this.getStorageProvider = () => {
        return config.storageProvider;
    };

    this.setFsAdapter = (fsAdapterName, ...args) => {
        config.fsAdapter = fsAdapters[fsAdapterName](...args);
    };

    this.getFsAdapter = () => {
        return config.fsAdapter;
    };

    this.setMapDigest = (mapDigest) => {
        config.mapDigest = mapDigest;
    };

    this.getMapDigest = () => {
        return config.mapDigest;
    };

    this.setEncryptionAlgorithm = (algorithm) => {
        if (!config.encryption) {
            config.encryption = {};
        }

        config.encryption.algorithm = algorithm;
    };

    this.getEncryptionAlgorithm = () => {
        if (!config.encryption) {
            return;
        }
        return config.encryption.algorithm;
    };

    this.setEncryptionOptions = (options) => {
        if (!config.encryption) {
            config.encryption = {};
        }

        config.encryption.encOptions = options;
    };

    this.getEncryptionOptions = () => {
        if (!config.encryption) {
            return;
        }
        return config.encryption.encOptions;
    };

    this.setCompressionAlgorithm = (algorithm) => {
        if (!config.compression) {
            config.compression = {};
        }

        config.compression.algorithm = algorithm;
    };

    this.getCompressionAlgorithm = () => {
        if (!config.compression) {
            return;
        }

        return config.compression.algorithm;

    };

    this.setCompressionOptions = (options) => {
        if (!config.compression) {
            config.compression = {};
        }

        config.compression.options = options;
    };

    this.getCompressionOptions = () => {
        if (!config.compression) {
            return;
        }
        return config.compression.options;
    };

    this.setAuthTagLength = (authTagLength = 16) => {
        const encOptions = this.getEncryptionOptions();
        if (!encOptions) {
            config.encryption.encOptions = {};
        }

        config.encryption.encOptions.authTagLength = authTagLength;
    };

    this.getAuthTagLength = () => {
        if (!config.encryption || !config.encryption.encOptions) {
            return;
        }

        return config.encryption.encOptions.authTagLength;
    };

    this.setSeedEndpoint = (endpoint) => {
        config.seedEndpoint = endpoint;
    };

    this.setSeedId = (id) => {
        config.seed.setId(id);
        this.setMapDigest(id);
    };

    this.getSeedId = () => {
        loadSeed();
        if (config.seed) {
            return config.seed.getId();
        }
    };

    this.setBrickTransportStrategyName = (brickTransportStrategyName) => {
        config.brickTransportStrategyName = brickTransportStrategyName;
    };

    this.setSeed = (compactSeed) => {
        config.seed = new Seed(compactSeed);
        const endpoint = config.seed.getEndpoint();
        if (endpoint) {
            if (!config.brickTransportStrategyName) {
                throw Error("The name of a brick transport strategy was not specified.");
            }

            this.setStorageProvider("EDFSBrickStorage", config.brickTransportStrategyName);
        }
        this.setMapDigest(config.seed.getId());
    };

    this.getSeed = () => {
        loadSeed();
        if (config.seed) {
            return config.seed.getCompactForm();
        }
    };

    this.getMapEncryptionKey = () => {
        loadSeed();
        if (!config.seed) {
            return;
        }

        if (!config.encryption) {
            return;
        }

        return config.seed.getEncryptionKey(config.encryption.algorithm);
    };

    this.generateSeed = () => {
        if (!config.seedEndpoint && config.seed) {
            config.seedEndpoint = config.seed.getEndpoint();
        }
        config.seed = new Seed(undefined, undefined, config.seedEndpoint, !!config.encryption);
        if (config.seed.getId()) {
            self.setMapDigest(config.seed.getId());
        }
    };

    //--------------------------
    function loadSeed() {
        if (!config.seed) {
            config.seed = new Seed(undefined, undefined, config.seedEndpoint, !!config.encryption);
            if (config.seed.getId()) {
                self.setMapDigest(config.seed.getId());
            }
        }
    }
}

ArchiveConfigurator.prototype.registerStorageProvider = (storageProviderName, factory) => {
    storageProviders[storageProviderName] = factory;
};

ArchiveConfigurator.prototype.registerFsAdapter = (fsAdapterName, factory) => {
    fsAdapters[fsAdapterName] = factory;
};

module.exports = ArchiveConfigurator;
},{"./Seed":"D:\\work\\privatesky\\modules\\bar\\lib\\Seed.js"}],"D:\\work\\privatesky\\modules\\bar\\lib\\Brick.js":[function(require,module,exports){
const crypto = require('pskcrypto');
const BrickTransformFactory = require("./transforms/BrickTransformFactory");
const transformFactory = new BrickTransformFactory();
const adler32 = require('adler32');

function Brick(config) {
    let rawData;
    let transformedData;
    let hash;
    let transformParameters;
    let transform = transformFactory.createBrickTransform(config);

    this.setConfig = (newConfig)=> {
        config = newConfig;
        if (transform) {
            transform.setConfig(newConfig);
        }else{
            transform = transformFactory.createBrickTransform(config);
        }
    };

    this.createNewTransform = ()=> {
        transform = transformFactory.createBrickTransform(config);
        transformParameters = undefined;
        transformData();
    };

    this.getHash = ()=> {
        if (!hash) {
            hash = crypto.pskHash(this.getTransformedData()).toString("hex");
        }

        return hash;
    };

    this.getId = () => {
        const seedId = config.getSeedId();
        if (seedId) {
            return seedId;
        }
        return config.getMapDigest();
    };

    this.setId = (id) => {
        config.setSeedId(id);
    };

    this.getSeed = () => {
        return config.getSeed().toString();
    };
    this.getAdler32 = ()=> {
        return adler32.sum(this.getTransformedData());
    };

    this.setRawData = function (data) {
        rawData = data;
        if (!transform) {
            transformedData = rawData;
        }
    };

    this.getRawData = ()=> {
        if (rawData) {
            return rawData;
        }

        if (transformedData) {
            if (!transform) {
                return transformedData;
            }

            rawData = transform.applyInverseTransform(transformedData, transformParameters);
            if (rawData) {
                return rawData;
            }

            return transformedData;
        }

        throw new Error("The brick does not contain any data.");
    };

    this.setTransformedData = (data)=> {
        transformedData = data;
    };

    this.getTransformedData = ()=> {
        if (!transformedData) {
            transformData();
        }

        if (transformedData) {
            return transformedData;
        }

        if (rawData) {
            return rawData;
        }

        throw new Error("The brick does not contain any data.");
    };

    this.getTransformParameters = ()=> {
        if (!transformedData) {
            transformData();
        }
        return transformParameters;
    };

    this.setTransformParameters =  (newTransformParams) =>{
        if (!newTransformParams) {
            return;
        }

        if (!transformParameters) {
            transformParameters = newTransformParams;
            return;
        }

        Object.keys(newTransformParams).forEach(key => {
            transformParameters[key] = newTransformParams[key];
        });
    };

    this.getRawSize = ()=> {
        return rawData.length;
    };

    this.getTransformedSize = ()=> {
        if (!transformedData) {
            return rawData.length;
        }

        return transformedData.length;
    };

//----------------------------------------------- internal methods -----------------------------------------------------
    function transformData() {
        if (!transform) {
            throw new Error("transform undefined");
        }

        if (rawData) {
            transformedData = transform.applyDirectTransform(rawData, transformParameters);
            if (!transformedData) {
                transformedData = rawData;
            }
        }

        transformParameters = transform.getTransformParameters();
    }

}

module.exports = Brick;

},{"./transforms/BrickTransformFactory":"D:\\work\\privatesky\\modules\\bar\\lib\\transforms\\BrickTransformFactory.js","adler32":"adler32","pskcrypto":"pskcrypto"}],"D:\\work\\privatesky\\modules\\bar\\lib\\FileBarMap.js":[function(require,module,exports){
(function (Buffer){
const Brick = require("./Brick");
const util = require("../utils/utilities");
const pathModule = "path";
const path = require(pathModule);

function FileBarMap(header) {
    header = header || {};

    let brickOffset = util.getBarMapOffsetSize();
    let archiveConfig;
    let encryptionKey;

    this.add = (filePath, brick) => {
        filePath = filePath.split(path.sep).join(path.posix.sep);
        this.load();
        if (typeof header[filePath] === "undefined") {
            header[filePath] = [];
        }

        const brickObj = {
            checkSum: brick.getAdler32(),
            offset: brickOffset,
            hash: brick.getHash()
        };

        const encKey = brick.getTransformParameters() ? brick.getTransformParameters().key : undefined;
        if (encKey) {
            brickObj.key = encKey;
        }

        header[filePath].push(brickObj);
        brickOffset += brick.getTransformedSize();
    };

    this.getHashList = (filePath) => {
        this.load();
        return header[filePath].map(brickObj => brickObj.offset);
    };

    this.getFileList = (folderBarPath) => {
        this.load();
        if (!folderBarPath) {
            return Object.keys(header);
        }
        return Object.keys(header).filter(fileName => fileName.includes(folderBarPath));
    };

    this.getDictionaryObject = () => {
        let objectDict = {};
        Object.keys(header).forEach((fileName) => {
            let brickObjects = header[fileName];
            for (let j = 0; j < brickObjects.length; j++) {
                if (typeof objectDict[brickObjects[j]['checkSum']] === 'undefined') {
                    objectDict[brickObjects[j]['checkSum']] = [];
                }
                objectDict[brickObjects[j]['checkSum']].push(brickObjects[j]['hash']);
            }
        });
        return objectDict;
    };

    this.getTransformParameters = (brickId) => {
        if (!brickId) {
            return encryptionKey ? {key: encryptionKey} : {};
        }

        this.load();
        let bricks = [];
        const files = this.getFileList();

        files.forEach(filePath => {
            bricks = bricks.concat(header[filePath]);
        });

        const brickObj = bricks.find(brick => {
            return brick.offset === brickId;
        });

        const addTransformData = {};
        if (brickObj.key) {
            addTransformData.key = Buffer.from(brickObj.key);
        }

        return addTransformData;
    };

    this.toBrick = () => {
        this.load();
        const brick = new Brick(archiveConfig);
        brick.setTransformParameters({key: encryptionKey});
        brick.setRawData(Buffer.from(JSON.stringify(header)));
        return brick;
    };

    this.load = () => {
        if (header instanceof Brick) {
            header.setConfig(archiveConfig);
            if (encryptionKey) {
                header.setTransformParameters({key: encryptionKey});
            }
            header = JSON.parse(header.getRawData().toString());
        }
    };

    this.setConfig = (config) => {
        archiveConfig = config;
    };

    this.getConfig = () => {
        return archiveConfig;
    };

    this.setEncryptionKey = (encKey) => {
        encryptionKey = encKey;
    };

    this.removeFile = (filePath) => {
        this.load();
        delete header[filePath];
    };
}

module.exports = FileBarMap;
}).call(this,require("buffer").Buffer)

},{"../utils/utilities":"D:\\work\\privatesky\\modules\\bar\\utils\\utilities.js","./Brick":"D:\\work\\privatesky\\modules\\bar\\lib\\Brick.js","buffer":false}],"D:\\work\\privatesky\\modules\\bar\\lib\\FileBrickStorage.js":[function(require,module,exports){
(function (Buffer){
const BarMap = require("./FileBarMap");
const util = require("../utils/utilities");
const fs = require("fs");
const Brick = require("./Brick");
const AsyncDispatcher = require("../utils/AsyncDispatcher");

function FileBrickStorage(filePath) {

    let isFirstBrick = true;
    let map;
    let mapOffset;

    this.setBarMap = (barMap) => {
        map = barMap;
    };

    this.putBrick = (brick, callback) => {
        if (isFirstBrick) {
            isFirstBrick = false;
            const writeStream = fs.createWriteStream(filePath, {start: util.getBarMapOffsetSize()});
            writeStream.on("error", (err) => {
                return callback(err);
            });

            writeStream.write(brick.getTransformedData(), callback);
        } else {
            fs.appendFile(filePath, brick.getTransformedData(), callback);
        }
    };

    this.getBrick = (brickId, callback) => {
        this.getBarMap((err, barMap) => {
            if (err) {
                return callback(err);
            }
            let brickOffsets = [];
            const fileList = barMap.getFileList();
            fileList.forEach(file => {
                brickOffsets = brickOffsets.concat(barMap.getHashList(file));
            });

            const brickIndex = brickOffsets.findIndex(el => {
                return el === brickId;
            });

            let nextBrickId = brickOffsets[brickIndex + 1];
            if (!nextBrickId) {
                nextBrickId = Number(mapOffset);
            }

            readBrick(brickId, nextBrickId, callback);
        });

    };

    this.deleteFile = (fileName, callback) => {
        this.getBarMap((err, barMap) => {
            if (err) {
                return callback(err);
            }

            barMap.removeFile(fileName);
            this.putBarMap(barMap, callback);
        });
    };


    this.putBarMap = (barMap, callback) => {
        map = barMap;
        readBarMapOffset((err, offset) => {
            if(offset) {
                offset = Number(offset);
                fs.truncate(filePath, offset, (err) => {
                    if (err) {
                        return callback(err);
                    }

                    __writeBarMap(offset);
                });
            }else{
                fs.stat(filePath, (err, stats) => {
                    if (err) {
                        return callback(err);
                    }

                    const barMapOffset = stats.size;

                    const bufferBarMapOffset = Buffer.alloc(util.getBarMapOffsetSize());
                    bufferBarMapOffset.writeBigUInt64LE(BigInt(barMapOffset));
                    mapOffset = barMapOffset;
                    const offsetWriteStream = fs.createWriteStream(filePath, {flags: "r+", start: 0});

                    offsetWriteStream.on("error", (err) => {
                        return callback(err);
                    });

                    offsetWriteStream.write(bufferBarMapOffset, (err) => {
                        if (err) {
                            return callback(err);
                        }

                        __writeBarMap(barMapOffset);
                    });
                });
            }
        });

        function __writeBarMap(offset) {
            const mapWriteStream = fs.createWriteStream(filePath, {flags: "r+", start: offset});
            mapWriteStream.on("error", (err) => {
                return callback(err);
            });

            const mapBrick = barMap.toBrick();
            mapBrick.setTransformParameters(barMap.getTransformParameters());
            mapWriteStream.write(mapBrick.getTransformedData(), callback);
        }

    };

    this.getBarMap = (mapDigest, callback) => {
        if (typeof mapDigest === "function") {
            callback = mapDigest;
        }

        if (map) {
            return callback(undefined, map);
        }

        readBarMap((err, barMap) => {
            if (err) {
                return callback(err);
            }

            map = barMap;
            callback(undefined, barMap);
        });
    };

    //------------------------------------------ Internal functions ---------------------------------------------------

    function readBarMapOffset(callback) {
        const readStream = fs.createReadStream(filePath, {start: 0, end: util.getBarMapOffsetSize() - 1});

        const buffer = Buffer.alloc(util.getBarMapOffsetSize());
        let offsetBuffer = 0;

        readStream.on("data", (chunk) => {
            chunk.copy(buffer, offsetBuffer);
            offsetBuffer += chunk.length;
        });

        readStream.on("end", () => {
            callback(undefined, buffer.readBigUInt64LE());
        });

        readStream.on("error", (err) => {
            return callback(err);
        });
    }

    function readBarMap(callback) {
        readBarMapOffset((err, barMapOffset) => {
            if (err) {
                if (err.code === "ENOENT") {
                    return callback(undefined, new BarMap());
                }

                return callback(err)
            }

            mapOffset = barMapOffset;
            const readStream = fs.createReadStream(filePath, {start: Number(barMapOffset)});
            let barMapData = Buffer.alloc(0);

            readStream.on("data", (chunk) => {
                barMapData = Buffer.concat([barMapData, chunk]);
            });

            readStream.on("error", (err) => {
                return callback(err);
            });

            readStream.on("end", () => {
                const mapBrick = new Brick();
                mapBrick.setTransformedData(barMapData);
                callback(undefined, new BarMap(mapBrick));
            });
        });
    }

    function readBrick(brickOffsetStart, brickOffsetEnd, callback) {
        const readStream = fs.createReadStream(filePath, {start: brickOffsetStart, end: brickOffsetEnd - 1});
        let brickData = Buffer.alloc(0);

        readStream.on("data", (chunk) => {
            brickData = Buffer.concat([brickData, chunk]);
        });

        readStream.on("error", (err) => {
            return callback(err);
        });

        readStream.on("end", () => {
            const brick = new Brick();
            brick.setTransformedData(brickData);
            callback(undefined, brick);
        });
    }
}

module.exports = {
    createFileBrickStorage(filePath) {
        return new FileBrickStorage(filePath);
    }
};
}).call(this,require("buffer").Buffer)

},{"../utils/AsyncDispatcher":"D:\\work\\privatesky\\modules\\bar\\utils\\AsyncDispatcher.js","../utils/utilities":"D:\\work\\privatesky\\modules\\bar\\utils\\utilities.js","./Brick":"D:\\work\\privatesky\\modules\\bar\\lib\\Brick.js","./FileBarMap":"D:\\work\\privatesky\\modules\\bar\\lib\\FileBarMap.js","buffer":false,"fs":false}],"D:\\work\\privatesky\\modules\\bar\\lib\\FolderBarMap.js":[function(require,module,exports){
(function (Buffer){
const Brick = require("./Brick");
const pathModule = "path";
const path = require(pathModule);

function FolderBarMap(header) {
    header = header || {};

    let archiveConfig;
    let encryptionKey;

    this.add = (filePath, brick) => {
        filePath = filePath.split(path.sep).join("/");
        this.load();
        if (typeof header[filePath] === "undefined") {
            header[filePath] = [];
        }

        const brickObj = {
            checkSum: brick.getAdler32(),
            hash: brick.getHash()
        };

        const encKey = brick.getTransformParameters() ? brick.getTransformParameters().key : undefined;
        if (encKey) {
            brickObj.key = encKey;
        }
        header[filePath].push(brickObj);
    };

    this.isInHeader = (filePath) => {
        return header[filePath] !== undefined;
    };

    this.removeBrick = (filePath, brickHash) => {
        let indexToRemove = header[filePath].findIndex(brickObj => brickObj.hash === brickHash);
        header[filePath].splice(indexToRemove, 1);
    };

    this.getDictionaryObject = () => {
        let objectDict = {};
        Object.keys(header).forEach((fileName) => {
            let brickObjects = header[fileName];
            for (let j = 0; j < brickObjects.length; j++) {
                if (typeof objectDict[brickObjects[j]['checkSum']] === 'undefined') {
                    objectDict[brickObjects[j]['checkSum']] = [];
                }
                objectDict[brickObjects[j]['checkSum']].push(brickObjects[j]['hash']);
            }
        });
        return objectDict;
    };

    this.getHashList = (filePath) => {
        this.load();
        return header[filePath].map(brickObj => brickObj.hash);
    };

    this.getCheckSumList = (filePath) => {
        this.load();
        return header[filePath].map(brickObj => brickObj.checkSum);
    };

    this.emptyList = (filePath) => {
        header[filePath] = [];
    };


    this.toBrick = () => {
        this.load();
        const brick = new Brick(archiveConfig);
        if (encryptionKey) {
            brick.setTransformParameters({key: encryptionKey});
        }
        brick.setRawData(Buffer.from(JSON.stringify(header)));
        return brick;
    };


    this.getFileList = (folderBarPath) => {
        this.load();
        if (!folderBarPath) {
            return Object.keys(header);
        }
        return Object.keys(header).filter(fileName => fileName.includes(folderBarPath));
    };

    this.getTransformParameters = (brickId) => {
        this.load();
        if (!brickId) {
            return encryptionKey ? {key: encryptionKey} : undefined;
        }
        let bricks = [];
        const files = this.getFileList();
        files.forEach(file => {
            bricks = bricks.concat(header[file]);
        });

        const brickObj = bricks.find(brick => {
            return brick.hash === brickId;
        });

        const addTransformData = {};
        if (brickObj.key) {
            addTransformData.key = Buffer.from(brickObj.key);
        }

        return addTransformData;
    };

    this.load = () => {
        if (header instanceof Brick) {
            header.setConfig(archiveConfig);
            header.setTransformParameters({key: encryptionKey});
            header = JSON.parse(header.getRawData().toString());
        }else{
            if (Buffer.isBuffer(header)) {
                header = header.toString();
            }

            if (typeof header === "string") {
                header = JSON.parse(header);
            }
        }
    };

    this.setConfig = (config) => {
        archiveConfig = config;
    };

    this.getConfig = () => {
        return archiveConfig;
    };

    this.setEncryptionKey = (encKey) => {
        encryptionKey = encKey;
    };

    this.removeFile = (filePath) => {
        this.load();
        delete header[filePath];
    };
}

module.exports = FolderBarMap;
}).call(this,require("buffer").Buffer)

},{"./Brick":"D:\\work\\privatesky\\modules\\bar\\lib\\Brick.js","buffer":false}],"D:\\work\\privatesky\\modules\\bar\\lib\\FolderBrickStorage.js":[function(require,module,exports){
const fs = require("fs");
const path = require("path");
const BarMap = require("./FolderBarMap");
const Brick = require("./Brick");

function FolderBrickStorage(location) {
    let map;

    this.setBarMap = (barMap) => {
        map = barMap;
    };

    this.putBrick = (brick, callback) => {
        const writeStream = fs.createWriteStream(path.join(location, brick.getHash()));
        writeStream.write(brick.getTransformedData(), (...args) => {
            writeStream.end();
            callback(...args);
        });
    };

    this.getBrick = (brickHash, callback) => {
        fs.readFile(path.join(location, brickHash), (err, brickData) => {
            if (err) {
                return callback(err);
            }

            const brick = new Brick();
            brick.setTransformedData(brickData);
            callback(err, brick);
        });
    };

    this.deleteFile = (filePath, callback) => {
        this.getBarMap((err, barMap) => {
            if (err) {
                return callback(err);
            }

            fs.unlink(path.join(location, barMap.toBrick().getHash()), (err) => {
                if (err) {
                    return callback(err);
                }

                barMap.removeFile(filePath);
                this.putBarMap(barMap, callback);
            });
        });
    };

    this.putBarMap = (barMap, callback) => {
        map = barMap;
        const barMapBrick = barMap.toBrick();
        barMapBrick.setTransformParameters(barMap.getTransformParameters());
       
        let brickId = barMapBrick.getId();
        if (!brickId) {
            brickId = barMapBrick.getHash();
        }

        barMapBrick.setId(brickId);
        const writeStream = fs.createWriteStream(path.join(location, brickId));
        writeStream.write(barMapBrick.getTransformedData(), (err) => {
            writeStream.end();
            callback(err, barMapBrick.getSeed());
        });
    };

    this.getBarMap = (mapDigest, callback) => {
        if (typeof mapDigest === "function") {
            callback = mapDigest;
            mapDigest = undefined;
        }

        if (map) {
            return callback(undefined, map);
        }

        if (typeof mapDigest === "undefined") {
            return callback(undefined, new BarMap());
        }

        this.getBrick(mapDigest, (err, mapBrick) => {
            if (err) {
                return callback(err);
            }

            const barMap = new BarMap(mapBrick);
            map = barMap;
            callback(undefined, barMap);
        });
    }
}

module.exports = {
    createFolderBrickStorage(location) {
        return new FolderBrickStorage(location);
    }
};
},{"./Brick":"D:\\work\\privatesky\\modules\\bar\\lib\\Brick.js","./FolderBarMap":"D:\\work\\privatesky\\modules\\bar\\lib\\FolderBarMap.js","fs":false,"path":false}],"D:\\work\\privatesky\\modules\\bar\\lib\\Seed.js":[function(require,module,exports){
(function (Buffer){
const crypto = require("pskcrypto");

function Seed(compactSeed, id, endpoint, usedForEncryption  = true, randomLength = 32) {
    let seed;

    init();

    this.getCompactForm = () => {
        if (!seed) {
            throw Error("Cannot return seed");
        }

        return generateCompactForm(seed);
    };

    this.getLocation = () => {
        if (!seed) {
            throw Error("Cannot retrieve location");
        }

        return seed.endpoint + "/" + seed.id.toString("hex");
    };

    this.getEndpoint = () => {
        if (!seed) {
            throw Error("Cannot retrieve endpoint");
        }

        return seed.endpoint.toString();
    };

    this.getId = () => {
        if (!seed.id) {
            return;
        }
        return seed.id.toString("hex");
    };

    this.setId = (localId) => {
        seed.id = localId;
    };

    this.getEncryptionKey = (algorithm) => {
        if (seed.tag === 'r') {
            return;
        }

        return crypto.deriveKey(algorithm, generateCompactForm(seed));
    };

    //--------------------------------------- internal methods --------------------------------------------
    function init() {
        if (!compactSeed) {
            seed = create();
        } else {
            seed = load(compactSeed);
        }
    }

    function create() {
        const localSeed = {};
        localSeed.id = id;
        if (!id && usedForEncryption) {
            //Bugfix: randomBytes in browser returns an Uint8Array object that has a wrong constructor and prototype
            //that is why we create a new instance of Buffer/Uint8Array based on the result of randomBytes
            localSeed.id = Buffer.from(crypto.randomBytes(randomLength));
            //TODO: why don't we use ID Generator from swarmutils?
        }

        if (endpoint) {
            localSeed.endpoint = endpoint;
        }else{
            throw Error("The SEED could not be created because an endpoint was not provided.")
        }

        if (usedForEncryption === true) {
            localSeed.flag = 'e';
        }else{
            localSeed.flag = 'r';
        }

        return localSeed;
    }

    function generateCompactForm(expandedSeed) {
        if (typeof expandedSeed === "string") {
            return expandedSeed;
        }

        if(!expandedSeed.id){
            throw Error("The seed does not contain an id");
        }
        let compactSeed = expandedSeed.id.toString('base64');
        if (expandedSeed.endpoint) {
            compactSeed += '|' + Buffer.from(JSON.stringify(expandedSeed.endpoint)).toString('base64');
        }

        compactSeed += expandedSeed.flag;
        return Buffer.from(encodeURIComponent(compactSeed));
    }

    function load(compactFormSeed) {
        if (typeof compactFormSeed === "undefined") {
            throw new Error(`Expected type string or Buffer. Received undefined`);
        }

        if (typeof compactFormSeed !== "string") {
            if (typeof compactFormSeed === "object" && !Buffer.isBuffer(compactFormSeed)) {
                compactFormSeed = Buffer.from(compactFormSeed);
            }

            compactFormSeed = compactFormSeed.toString();
        }

        const decodedCompactSeed = decodeURIComponent(compactFormSeed);
        const localSeed = {};
        const splitCompactSeed = decodedCompactSeed.split('|');

        localSeed.flag = splitCompactSeed[1][splitCompactSeed[1].length - 1];
        splitCompactSeed[1] = splitCompactSeed[1].slice(0, -1);
        localSeed.id = Buffer.from(splitCompactSeed[0], 'base64');

        if (splitCompactSeed[1] && splitCompactSeed[1].length > 0) {
            localSeed.endpoint = JSON.parse(Buffer.from(splitCompactSeed[1], 'base64').toString());
        } else {
            console.warn('Cannot find endpoint in compact seed')
        }

        return localSeed;
    }
}

module.exports = Seed;
}).call(this,require("buffer").Buffer)

},{"buffer":false,"pskcrypto":"pskcrypto"}],"D:\\work\\privatesky\\modules\\bar\\lib\\transforms\\BrickTransform.js":[function(require,module,exports){
(function (Buffer){
function BrickTransform(transformGenerator) {
    let directTransform;
    let inverseTransform;

    this.getTransformParameters = () => {
        return directTransform ? directTransform.transformParameters : undefined;
    };

    this.applyDirectTransform = (data, transformParameters) => {
        if (!directTransform) {
            directTransform = transformGenerator.createDirectTransform(transformParameters);
        }

        if (!directTransform) {
            return undefined;
        }

        let transformedData = directTransform.transform(data);

        if(directTransform.transformParameters){
            if (directTransform.transformParameters.iv) {
                transformedData = Buffer.concat([transformedData, directTransform.transformParameters.iv]);
            }

            if (directTransform.transformParameters.aad) {
                transformedData = Buffer.concat([transformedData, directTransform.transformParameters.aad]);
            }

            if (directTransform.transformParameters.tag) {
                transformedData = Buffer.concat([transformedData, directTransform.transformParameters.tag]);
            }
        }

        return transformedData;
    };

    this.applyInverseTransform = (data, transformParameters) => {
        const inverseTransformParams = transformGenerator.getInverseTransformParameters(data);
        if(inverseTransformParams.params) {
            Object.keys(inverseTransformParams.params).forEach(param => transformParameters[param] = inverseTransformParams.params[param]);
        }

        if (!inverseTransform) {
            inverseTransform = transformGenerator.createInverseTransform(transformParameters);
        }

        return inverseTransform ? inverseTransform.transform(inverseTransformParams.data) : undefined;
    };
}

module.exports = BrickTransform;


}).call(this,require("buffer").Buffer)

},{"buffer":false}],"D:\\work\\privatesky\\modules\\bar\\lib\\transforms\\BrickTransformFactory.js":[function(require,module,exports){
const CompressionGenerator = require("./CompressionGenerator");
const EncryptionGenerator= require("./EncryptionGenerator");
const CompressionEncryptionGenerator = require("./CompressionEncryptionGenerator");
const BrickTransform = require("./BrickTransform");

function BrickTransformFactory() {
    this.createBrickTransform = function (config) {
        if (!config) {
            return;
        }

        const encryption = config.getEncryptionAlgorithm();
        const compression = config.getCompressionAlgorithm();

        let generator;
        if (!encryption && !compression) {
            return;
        }

        if (compression) {
            if (encryption) {
                generator = new CompressionEncryptionGenerator(config);
            } else {
                generator = new CompressionGenerator(config);
            }
        }else{
            generator = new EncryptionGenerator(config);
        }

        return new BrickTransform(generator);
    }
}

module.exports = BrickTransformFactory;


},{"./BrickTransform":"D:\\work\\privatesky\\modules\\bar\\lib\\transforms\\BrickTransform.js","./CompressionEncryptionGenerator":"D:\\work\\privatesky\\modules\\bar\\lib\\transforms\\CompressionEncryptionGenerator.js","./CompressionGenerator":"D:\\work\\privatesky\\modules\\bar\\lib\\transforms\\CompressionGenerator.js","./EncryptionGenerator":"D:\\work\\privatesky\\modules\\bar\\lib\\transforms\\EncryptionGenerator.js"}],"D:\\work\\privatesky\\modules\\bar\\lib\\transforms\\CompressionEncryptionGenerator.js":[function(require,module,exports){
const CompressionGenerator = require("./CompressionGenerator");
const EncryptionGenerator = require("./EncryptionGenerator");

function CompressionEncryptionGenerator(config) {
    let compressionGenerator = new CompressionGenerator(config);
    let encryptionGenerator = new EncryptionGenerator(config);

    this.getInverseTransformParameters = (transformedData) => {
        return encryptionGenerator.getInverseTransformParameters(transformedData);
    };

    this.createDirectTransform = (transformParameters) => {
        const compression = compressionGenerator.createDirectTransform();
        const encryption = encryptionGenerator.createDirectTransform(transformParameters);
        const compressionEncryption = {};
        Object.keys(encryption).forEach(key => {
            compressionEncryption[key] = encryption[key]
        });

        compressionEncryption.transform = (data) => {
            return encryption.transform(compression.transform(data));
        };

        return compressionEncryption;
    };

    this.createInverseTransform = (transformParameters) => {
        const decompression = compressionGenerator.createInverseTransform();
        const decryption = encryptionGenerator.createInverseTransform(transformParameters);
        const compressionEncryption = {};
        Object.keys(decompression).forEach(key => {
            compressionEncryption[key] = decompression[key]
        });
        compressionEncryption.transform = (data) => {
            return decompression.transform(decryption.transform(data));
        };

        return compressionEncryption;
    };
}

module.exports = CompressionEncryptionGenerator;
},{"./CompressionGenerator":"D:\\work\\privatesky\\modules\\bar\\lib\\transforms\\CompressionGenerator.js","./EncryptionGenerator":"D:\\work\\privatesky\\modules\\bar\\lib\\transforms\\EncryptionGenerator.js"}],"D:\\work\\privatesky\\modules\\bar\\lib\\transforms\\CompressionGenerator.js":[function(require,module,exports){
const zlib = require("zlib");

function CompressionGenerator(config) {

    this.getInverseTransformParameters = (transformedData) => {
        return {data: transformedData};
    };

    this.createDirectTransform = () => {
        return getCompression(true);
    };

    this.createInverseTransform = () => {
        return getCompression(false);
    };

    function getCompression(isCompression) {
        const algorithm = config.getCompressionAlgorithm();
        switch (algorithm) {
            case "gzip":
                return __createCompress(zlib.gzipSync, zlib.gunzipSync, isCompression);
            case "br":
                return __createCompress(zlib.brotliCompressSync, zlib.brotliDecompressSync, isCompression);
            case "deflate":
                return __createCompress(zlib.deflateSync, zlib.inflateSync, isCompression);
            case "deflateRaw":
                return __createCompress(zlib.deflateRawSync, zlib.inflateRawSync, isCompression);
            default:
                return;
        }
    }

    function __createCompress(compress, decompress, isCompression) {
        const options = config.getCompressionOptions();
        if (!isCompression) {
            return {
                transform(data) {
                    return decompress(data, options);
                }
            }
        }

        return {
            transform(data) {
                return compress(data, options);
            }
        }
    }
}

module.exports = CompressionGenerator;


},{"zlib":false}],"D:\\work\\privatesky\\modules\\bar\\lib\\transforms\\EncryptionGenerator.js":[function(require,module,exports){
const crypto = require("pskcrypto");

function EncryptionGenerator(config) {
    let key;
    const pskEncryption = crypto.createPskEncryption(config.getEncryptionAlgorithm());
    this.setConfig = (newConfig) => {
        config = newConfig;
    };

    this.getInverseTransformParameters = (transformedData) => {
        let decryptionParameters = pskEncryption.getDecryptionParameters(transformedData);
        const data = decryptionParameters.data;
        delete decryptionParameters.data;
        return {
            data: data,
            params:decryptionParameters
        };
    };

    this.createDirectTransform = (transformParameters) => {
        return getEncryption(transformParameters);
    };

    this.createInverseTransform = (transformParameters) => {
        return getDecryption(transformParameters);
    };

    //--------------------------------------- internal methods ------------------------------------------------------
    function getEncryption(transformParameters) {
        const algorithm = config.getEncryptionAlgorithm();
        if (!algorithm) {
            return;
        }

        const encOptions = config.getEncryptionOptions();
        if(transformParameters && transformParameters.key){
            key = transformParameters.key;
        }else{
            key = pskEncryption.generateEncryptionKey(algorithm);
        }


        const ret = {
            transform(data) {
                const encData = pskEncryption.encrypt(data, key, encOptions);
                ret.transformParameters = pskEncryption.getEncryptionParameters();
                return encData;
            }
        };

        return ret;
    }


    function getDecryption(transformConfig) {
        const algorithm = config.getEncryptionAlgorithm();
        if (!algorithm) {
            return;
        }
        const encOptions = config.getEncryptionOptions();
        let authTagLength = 0;
        if (!config.getEncryptionOptions() || !config.getAuthTagLength()) {
            authTagLength = 16;
        } else {
            authTagLength = config.getAuthTagLength();
        }

        return {
            transform(data) {
                return pskEncryption.decrypt(data, transformConfig.key, authTagLength, encOptions);
            }
        }
    }

}

module.exports = EncryptionGenerator;
},{"pskcrypto":"pskcrypto"}],"D:\\work\\privatesky\\modules\\bar\\utils\\AsyncDispatcher.js":[function(require,module,exports){

function AsyncDispatcher(finalCallback) {
	let results = [];
	let errors = [];

	let started = 0;

	function markOneAsFinished(err, res) {
		if(err) {
			errors.push(err);
		}

		if(arguments.length > 2) {
			arguments[0] = undefined;
			res = arguments;
		}

		if(typeof res !== "undefined") {
			results.push(res);
		}

		if(--started <= 0) {
            return callCallback();
		}
	}

	function dispatchEmpty(amount = 1) {
		started += amount;
	}

	function callCallback() {
	    if(errors && errors.length === 0) {
	        errors = undefined;
        }

	    if(results && results.length === 0) {
	        results = undefined;
        }

        finalCallback(errors, results);
    }

	return {
		dispatchEmpty,
		markOneAsFinished
	};
}

module.exports = AsyncDispatcher;
},{}],"D:\\work\\privatesky\\modules\\bar\\utils\\isStream.js":[function(require,module,exports){
function isStream(stream){
    return stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';
}

function isWritable(stream) {
    return isStream(stream) &&
        stream.writable !== false &&
        typeof stream._write === 'function' &&
        typeof stream._writableState === 'object';

}

function isReadable(stream) {
    return isStream(stream) &&
        stream.readable !== false &&
        typeof stream._read === 'function' &&
        typeof stream._readableState === 'object';
}

function isDuplex(stream){
    return isWritable(stream) &&
        isReadable(stream);
}

module.exports = {
    isStream,
    isReadable,
    isWritable,
    isDuplex
};

},{}],"D:\\work\\privatesky\\modules\\bar\\utils\\utilities.js":[function(require,module,exports){
const fs = require('fs');
const OFFSET_SIZE = 8;

function getBarMapOffsetSize() {
    return OFFSET_SIZE;
}

function ensureFileDoesNotExist(filePath, callback) {
    fs.access(filePath, (err) => {
        if (!err) {
            fs.unlink(filePath, callback);
        } else {
            return callback();
        }
    });
}

module.exports = {getBarMapOffsetSize, ensureFileDoesNotExist};
},{"fs":false}],"D:\\work\\privatesky\\modules\\edfs-brick-storage\\EDFSBrickQueue.js":[function(require,module,exports){
const MAX_QUE_SUPPORTED = 100;
const NETWORK_TIMEOUT = 1000;
require("psk-http-client");
function EDFSBrickQueue(action, queueLimit) {

    if (!Number.isInteger(queueLimit) || queueLimit > MAX_QUE_SUPPORTED) {
        throw new Error("Que limit should be a number greater than 0 and lower than " + MAX_QUE_SUPPORTED);
    }

    let bricksQueue = [];
    let rateLimit = queueLimit;
    let inExecution = 0;

    function executeQueue() {

        if (bricksQueue.length === 0) {
            return;
        }

        if (rateLimit === 0) {
            rateLimit++;
            return setTimeout(executeQueue, NETWORK_TIMEOUT);
        }

        rateLimit--;
        let item = bricksQueue.pop();
        let {callback, ...requestData} = item;
        let args = Object.values(requestData);
        inExecution++;
        action(...args, (err, data, headers) => {
            inExecution--;
                if (err) {
                    if (err.statusCode === 429) {
                        console.log("Too many requests!");
                        bricksQueue.push(item);
                        setTimeout(executeQueue, NETWORK_TIMEOUT);
                    } else {
                        return callback(err);
                    }
                } else {
                    if (typeof headers !== "undefined" && headers.hasOwnProperty("x-ratelimit-remaining")) {
                        let remainingQuota = Number.parseInt(headers['x-ratelimit-remaining']);

                        if (!isNaN(remainingQuota)) {

                            rateLimit = remainingQuota;
                            if(rateLimit > 0){
                                let freeSlots = rateLimit-inExecution;
                                while(freeSlots>0){
                                    executeQueue();
                                    freeSlots--;
                                }
                            }
                            else{
                                executeQueue();
                            }

                        }

                    }

                    if (callback) {
                        callback(null, data, headers);
                    }
                }
            }
        );
    }

    this.addBrickRequest = function (url, ...args) {

        let queueData = {
            url: url
        };
        switch (args.length) {
            case 1:
                if (typeof args[0] === "object") {
                    queueData['brickData'] = args[0];
                } else {
                    if (typeof args[0] === "function") {
                        queueData['callback'] = args[0];
                    } else {
                        throw new Error("Invalid arguments")
                    }
                }
                break;
            case 2:
                if (typeof args[0] !== "object") {
                    throw new Error("Invalid brick data.")
                }
                if (typeof args[1] !== "function") {
                    throw new Error("Invalid callback function.")
                }
                queueData['brickData'] = args[0];
                queueData['callback'] = args[1];
                break;
            default:
                throw new Error("Too many arguments.");
        }

        bricksQueue.push(queueData);
        if (rateLimit > 0) {
            executeQueue();
        }
    };

    this.getQueueSize = function () {
        return bricksQueue.length;
    };

    this.getQueueFreeSlots = function () {
        return rateLimit;
    };
}

module.exports = {
    EDFSPutBrickQueue: function (limit) {
        return new EDFSBrickQueue($$.remote.doHttpPost, limit);
    },

    EDFSGetBrickQueue: function (limit) {
        return new EDFSBrickQueue($$.remote.doHttpGet, limit);
    }
};

},{"psk-http-client":"psk-http-client"}],"D:\\work\\privatesky\\modules\\edfs-brick-storage\\EDFSBrickStorage.js":[function(require,module,exports){
let PutBrickQueue = require("./EDFSBrickQueue").EDFSPutBrickQueue;
let GetBrickQueue = require("./EDFSBrickQueue").EDFSGetBrickQueue;
let bricksQueue = [];

function EDFSBrickStorage(brickTransportStrategyName) {

    const bar = require("bar");
    const brickTransportStrategy = $$.brickTransportStrategiesRegistry.get(brickTransportStrategyName);
    let map;

    this.setBarMap = function (barMap) {
        map = barMap;
    };

    this.putBrick = function (brick, callback) {
        brickTransportStrategy.send(brick.getHash(), brick.getTransformedData(), callback);
        // $$.remote.doHttpPost(url + "/EDFS/" + brick.getHash(), brick.getTransformedData(), callback);
        // putBrick(brick.getHash(), brick, true, callback);
    };

    function putBrick(brickId, brick, isSerial, callback) {
        if (typeof isSerial === "function") {
            callback = isSerial;
            isSerial = undefined;
        }
        let callbackSent = false;

        let handler = function (err, data, headers) {
            if (!isConnectionError(err)) {
                if (callbackSent) {
                    if (err) {
                        callback(err);
                    }
                } else {
                    callback(err, data, headers)
                }
            }
        };
        let url = getStorageUrlAddress();

        putBrickQueue.addBrickRequest(url + "/EDFS/" + brickId,
            brick.getTransformedData(),
            handler);

        if (isSerial && putBrickQueue.getQueueFreeSlots() > 0) {
            callbackSent = true;
            callback();
        }
    }


    this.getBrick = function (brickHash, callback) {

        brickTransportStrategy.get(brickHash, (err, brickData) => {
            if (err) {
                return callback(err);
            }

            const brick = bar.createBrick();
            brick.setTransformedData(brickData);
            callback(undefined, brick);
        });
    };

    this.deleteBrick = function (brickHash, callback) {
        throw new Error("Not implemented");
    };

    this.putBarMap = function (barMap, callback) {
        map = barMap;
        const barMapBrick = barMap.toBrick();
        barMapBrick.setTransformParameters(barMap.getTransformParameters());

        let brickId = barMapBrick.getId();
        if (!brickId) {
            brickId = barMapBrick.getHash();
            barMapBrick.setId(brickId);
        }

        brickTransportStrategy.getHashForAlias(brickId, (err, hashesList) => {
            if (err) {
                return callback(err);
            }

            if (hashesList.length === 0) {
                __sendBarMapBrick();
            } else {
                const barMapHash = hashesList[hashesList.length - 1];
                if (barMapHash !== barMapBrick.getHash()) {
                    __sendBarMapBrick();
                } else {
                    callback();
                }
            }

            function __sendBarMapBrick() {
                brickTransportStrategy.attachHashToAlias(brickId, barMapBrick.getHash(), (err) => {
                    if (err) {
                        return callback(err);
                    }

                    brickTransportStrategy.send(barMapBrick.getHash(), barMapBrick.getTransformedData(), callback);
                });
            }
        });
    };

    this.getBarMap = function (mapDigest, callback) {
        if (typeof mapDigest === "function") {
            callback = mapDigest;
            mapDigest = undefined;
        }

        if (map) {
            return callback(undefined, map);
        }

        if (typeof mapDigest === "undefined") {
            return callback(undefined, bar.createBarMap());
        }

        brickTransportStrategy.getHashForAlias(mapDigest, (err, hashesList) => {
            if (err) {
                return callback(err);
            }

            let barMapId;
            if (hashesList.length === 0) {
                barMapId = mapDigest;
            } else {
                barMapId = hashesList[hashesList.length - 1];
            }
            brickTransportStrategy.get(barMapId, (err, barMapData) => {
                if (err) {
                    return callback(err);
                }

                const mapBrick = bar.createBrick();
                mapBrick.setTransformedData(barMapData);
                map = bar.createBarMap(mapBrick);
                callback(undefined, map);
            });
        });
    };

    //------------------------------------------ internal methods ---------------------------------------------------

    function isConnectionError(err) {
        if (err && err.code === "ECONNREFUSED") {
            console.error("EDFS Server is unavailable! Try again later!");
            return true;
        }
        return false;
    }

    function handleBricksOrder() {
        let brickRequest = bricksQueue[0];
        if (brickRequest && brickRequest.data) {
            let data = brickRequest.data;
            if (!isConnectionError(data.err)) {
                const brick = bar.createBrick();
                brick.setTransformedData(data.brickData);
                brickRequest.callback(data.err, brick);
                bricksQueue.shift();
                handleBricksOrder();
            }

        }
    }
}

module.exports = EDFSBrickStorage;


},{"./EDFSBrickQueue":"D:\\work\\privatesky\\modules\\edfs-brick-storage\\EDFSBrickQueue.js","bar":"bar"}],"D:\\work\\privatesky\\modules\\edfs-middleware\\flows\\BricksManager.js":[function(require,module,exports){
const pathModule = "path";
const path = require(pathModule);
const fsModule = "fs";
const fs = require(fsModule);
const osModule = "os";
const endOfLine = require(osModule).EOL;
const crypto = require("pskcrypto");
const folderNameSize = process.env.FOLDER_NAME_SIZE || 5;
const FILE_SEPARATOR = '-';
let brickStorageFolder;

$$.flow.describe("BricksManager", {
    init: function (rootFolder, callback) {

        if (!rootFolder) {
            callback(new Error("No root folder specified!"));
            return;
        }
        rootFolder = path.resolve(rootFolder);
        this.__ensureFolderStructure(rootFolder, (err, pth) => {
            brickStorageFolder = rootFolder;
            callback(err, rootFolder);
        });
    },
    write: function (fileName, readFileStream, callback) {
        if (!this.__verifyFileName(fileName, callback)) {
            return;
        }

        if (!readFileStream || !readFileStream.pipe || typeof readFileStream.pipe !== "function") {
            callback(new Error("Something wrong happened"));
            return;
        }

        const folderName = path.join(brickStorageFolder, fileName.substr(0, folderNameSize));

        this.__ensureFolderStructure(folderName, (err) => {
            if (err) {
                return callback(err);
            }

            this.__writeFile(readFileStream, folderName, fileName, callback);
        });

    },
    read: function (fileName, writeFileStream, callback) {
        if (!this.__verifyFileName(fileName, callback)) {
            return;
        }

        const folderPath = path.join(brickStorageFolder, fileName.substr(0, folderNameSize));
        const filePath = path.join(folderPath, fileName);

        this.__verifyFileExistence(filePath, (err, result) => {
            if (!err) {
                this.__readFile(writeFileStream, filePath, callback);
            } else {
                callback(new Error(`File ${filePath} was not found.`));
            }
        });
    },
    addAlias: function (fileHash, readStream, callback) {
        if (!this.__verifyFileName(fileHash, callback)) {
            return;
        }

        this.__streamToString(readStream, (err, alias) => {
            if (err) {
                return callback(err);
            }
            if (!alias) {
                return callback(new Error("No alias was provided"));
            }

            const filePath = path.join(brickStorageFolder, alias);
            this.__verifyFileExistence(filePath, (err) => {
                if (err) {
                    fs.writeFile(filePath, fileHash + endOfLine, callback);
                } else {
                    fs.appendFile(filePath, fileHash + endOfLine, callback);
                }
            });

        });
    },
    readVersions: function (alias, callback) {
        const filePath = path.join(brickStorageFolder, alias);
        fs.readFile(filePath, (err, fileHashes) => {
            if (err) {
                if (err.code === "ENOENT") {
                    return callback(undefined, []);
                }
                return callback(err);
            }
            callback(undefined, fileHashes.toString().trimEnd().split(endOfLine));
        });
    },
    __verifyFileName: function (fileName, callback) {
        if (!fileName || typeof fileName !== "string") {
            return callback(new Error("No fileId specified."));
        }

        if (fileName.length < folderNameSize) {
            return callback(new Error("FileId too small. " + fileName));
        }

        return true;
    },
    __ensureFolderStructure: function (folder, callback) {
        fs.mkdir(folder, {recursive: true}, callback);
    },
    __writeFile: function (readStream, folderPath, fileName, callback) {
        const PskHash = crypto.PskHash;
        const hash = new PskHash();
        const filePath = path.join(folderPath, fileName);
        fs.access(filePath, (err) => {
            if (err) {
                readStream.on('data', (data) => {
                    hash.update(data);
                });

                const writeStream = fs.createWriteStream(filePath, {mode: 0o444});

                writeStream.on("finish", () => {
                    callback(undefined, hash.digest("hex"));
                });

                writeStream.on("error", (err) => {
                    writeStream.close();
                    callback(err);
                });

                readStream.pipe(writeStream);
            } else {
                callback();

            }
        });
    },
    __readFile: function (writeFileStream, filePath, callback) {
        const readStream = fs.createReadStream(filePath);

        writeFileStream.on("finish", callback);
        writeFileStream.on("error", callback);

        readStream.pipe(writeFileStream);
    },
    __verifyFileExistence: function (filePath, callback) {
        fs.access(filePath, callback);
    },
    __streamToString: function (readStream, callback) {
        let str = '';
        readStream.on("data", (chunk) => {
            str += chunk;
        });

        readStream.on("end", () => {
            callback(undefined, str);
        });

        readStream.on("error", callback);
    }
});

},{"pskcrypto":"pskcrypto"}],"D:\\work\\privatesky\\modules\\edfs-middleware\\lib\\EDFSClient.js":[function(require,module,exports){
require("psk-http-client");

function EDFSClient(url) {
    this.attachAlias = (fileName, alias, callback) => {
        $$.remote.doHttpPost(url + "/EDFS/attachHashToAlias/" + fileName, alias, callback);
    };

    this.writeToAlias = (alias, data, callback) => {
        $$.remote.doHttpPost(url + "/EDFS/alias/" + alias, data, callback);
    };

    this.readFromAlias = (alias, callback) => {
        $$.remote.doHttpGet(url + "/EDFS/alias/" + alias, callback);
    };

    this.writeFile = (fileName, data, callback) => {
        $$.remote.doHttpPost(url + "/EDFS/" + fileName, data, callback);
    };

    this.readFile = (fileName, callback) => {
        $$.remote.doHttpGet(url + "/EDFS/" + fileName, callback);
    };
}

module.exports = EDFSClient;
},{"psk-http-client":"psk-http-client"}],"D:\\work\\privatesky\\modules\\edfs-middleware\\lib\\EDFSMiddleware.js":[function(require,module,exports){
require("../flows/BricksManager");

function EDFSMiddleware(server) {

    server.use('/*',function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Content-Length, X-Content-Length');
        next();

    });

    server.post('/:fileId', (req, res) => {
        $$.flow.start("BricksManager").write(req.params.fileId, req, (err, result) => {
            res.statusCode = 201;
            if (err) {
                res.statusCode = 500;

                if (err.code === 'EACCES') {
                    res.statusCode = 409;
                }
            }
            res.end();
        });
    });

    server.get('/:fileId', (req, res) => {
        res.setHeader("content-type", "application/octet-stream");
        $$.flow.start("BricksManager").read(req.params.fileId, res, (err, result) => {
            res.statusCode = 200;
            if (err) {
                console.log(err);
                res.statusCode = 404;
            }
            res.end();
        });
    });

    server.post('/attachHashToAlias/:fileId', (req, res) => {
        $$.flow.start("BricksManager").addAlias(req.params.fileId, req, (err, result) => {
            res.statusCode = 201;
            if (err) {
                res.statusCode = 500;

                if (err.code === 'EACCES') {
                    res.statusCode = 409;
                }
            }
            res.end();
        });
    });

    server.get('/getVersions/:alias', (req, res) => {
        $$.flow.start("BricksManager").readVersions(req.params.alias, (err, fileHashes) => {
            res.statusCode = 200;
            if(err) {
                console.error(err);
                res.statusCode = 404;
            }
            res.setHeader("content-type", "application/json");
            res.end(JSON.stringify(fileHashes));
        });
    });
}

module.exports = EDFSMiddleware;

},{"../flows/BricksManager":"D:\\work\\privatesky\\modules\\edfs-middleware\\flows\\BricksManager.js"}],"D:\\work\\privatesky\\modules\\edfs\\brickTransportStrategies\\FetchBrickTransportStrategy.js":[function(require,module,exports){
(function (Buffer){

function FetchBrickTransportStrategy(initialConfig) {
    const url = initialConfig;
    this.send = (name, data, callback) => {

        fetch(url + "/EDFS/", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/octet-stream'
            },
            body: data
        }).then(function(response) {
            if(response.status>=400){
                return callback(new Error(`An error occurred ${response.statusText}`))
            }
            return response.json();
        }).then(function(data) {
            callback(null, data)
        }).catch(error=>{
            callback(error);
        });

    };

    this.get = (name, callback) => {
        fetch(url + "/EDFS/"+name,{
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/octet-stream'
            },
        }).then(response=>{
            if(response.status>=400){
                return callback(new Error(`An error occurred ${response.statusText}`))
            }
            return response.arrayBuffer();
        }).then(arrayBuffer=>{
                let buffer = new Buffer(arrayBuffer.byteLength);
                let view = new Uint8Array(arrayBuffer);
                for (let i = 0; i < buffer.length; ++i) {
                    buffer[i] = view[i];
                }

            callback(null, buffer);
        }).catch(error=>{
            callback(error);
        });
    };

    this.getHashForAlias = (alias, callback) => {
        fetch(url + "/EDFS/getVersions/" + alias, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/octet-stream'
            },
        }).then(response => {
            if(response.status>=400){
                return callback(new Error(`An error occurred ${response.statusText}`))
            }
            return response.json().then(data => {
                callback(null, data);
            }).catch(error => {
                callback(error);
            })
        });
    };

    this.getLocator = () => {
        return url;
    };
}
//TODO:why we use this?
FetchBrickTransportStrategy.prototype.FETCH_BRICK_TRANSPORT_STRATEGY = "FETCH_BRICK_TRANSPORT_STRATEGY";


module.exports = FetchBrickTransportStrategy;

}).call(this,require("buffer").Buffer)

},{"buffer":false}],"D:\\work\\privatesky\\modules\\edfs\\brickTransportStrategies\\HTTPBrickTransportStrategy.js":[function(require,module,exports){

function HTTPBrickTransportStrategy(initialConfig) {
    require("psk-http-client");
    const url = initialConfig;

    this.send = (name, data, callback) => {
        $$.remote.doHttpPost(url + "/EDFS/" + name, data, callback);
    };

    this.get = (name, callback) => {
        $$.remote.doHttpGet(url + "/EDFS/" + name, callback);
    };

    this.getHashForAlias = (alias, callback) => {
        $$.remote.doHttpGet(url + "/EDFS/getVersions/" + alias, (err, hashesList) => {
            if(err) {
                return callback(err)
            }

            callback(undefined, JSON.parse(hashesList.toString()))
        });
    };

    this.attachHashToAlias = (alias, name, callback) => {
        $$.remote.doHttpPost(url + "/EDFS/attachHashToAlias/" + name, alias, callback);
    };

    this.getLocator = () => {
        return url;
    };
}

module.exports = HTTPBrickTransportStrategy;
},{"psk-http-client":"psk-http-client"}],"D:\\work\\privatesky\\modules\\edfs\\brickTransportStrategies\\brickTransportStrategiesRegistry.js":[function(require,module,exports){
function BrickTransportStrategiesRegistry() {
    const strategies = {};

    this.add = (transportStrategyName, strategy) => {
        if (typeof strategies[transportStrategyName] === "undefined") {
            strategies[transportStrategyName] = strategy;
        }else{
            throw Error(`A strategy with the name "${transportStrategyName}" already registered.`)
        }
    };

    this.remove = (transportStrategyName) => {
        strategies[transportStrategyName] = undefined;
    };

    this.get = (transportStrategyName) => {
        return strategies[transportStrategyName];
    };

    this.has = (transportStrategyName) => {
        return strategies.hasOwnProperty(transportStrategyName);
    }
}

if (!$$.brickTransportStrategiesRegistry) {
    $$.brickTransportStrategiesRegistry = new BrickTransportStrategiesRegistry();
}
},{}],"D:\\work\\privatesky\\modules\\edfs\\lib\\EDFS.js":[function(require,module,exports){
function EDFS(brickTransportStrategyName) {
    const RawCSB = require("./RawCSB");
    const barModule = require("bar");
    const fsAdapter = require("bar-fs-adapter");
    const constants = require('../moduleConstants');

    this.createCSB = (callback) => {
        const rawCSB = new RawCSB(brickTransportStrategyName);
        rawCSB.start(err => {
            if (err) {
                return callback(err);
            }

            // callback(undefined, rawCSB);

            // START: DELETE THIS WHEN FIXED
            rawCSB.startTransactionAs('anon', 'TooShortBlockChainWorkaroundDeleteThis', 'add')
                .onCommit((err) => {
                    callback(err, rawCSB)
                });
            // END: DELETE THIS WHEN FIXED
        });
    };

    this.createBar = () => {
        return barModule.createArchive(createArchiveConfig());
    };

    this.bootCSB = (seed, callback) => {
        const rawCSB = new RawCSB(brickTransportStrategyName, seed);
        rawCSB.start(err => callback(err, rawCSB));
    };

    this.loadBar = (seed) => {
        return barModule.createArchive(createArchiveConfig(seed));
    };

    this.clone = (seed, callback) => {
        const edfsBrickStorage = require("edfs-brick-storage").create(brickTransportStrategyName);
        const bar = this.loadBar(seed);
        bar.clone(edfsBrickStorage, true, callback);
    };

    this.createWallet = (templateSeed, pin, overwrite = false, callback) => {
        this.clone(templateSeed, (err, seed) => {
            if (err) {
                return callback(err);
            }

            if (typeof pin !== "undefined") {
                require("../seedCage").putSeed(seed, pin, overwrite, (err) => {
                    if (err) {
                        return callback(err);
                    }
                    callback(undefined, seed.toString());
                });
            } else {
                callback(undefined, seed.toString());
            }
        });
    };

    this.loadWallet = function(walletSeed, pin, overwrite, callback){
        if(typeof overwrite === "function"){
            callback = overwrite;
            overwrite = pin;
            pin = walletSeed;
            walletSeed = undefined;
        }
        if(typeof  walletSeed === "undefined"){
            require("../seedCage").getSeed(pin, (err, seed)=>{
                if(err){
                    return callback(err);
                }
                try {
                    let wallet = this.loadBar(seed);
                    return callback(undefined, wallet);
                }catch(err){
                    return callback(err);
                }
            });
        }else{
            let wallet;
            try{
                wallet = this.loadBar(walletSeed);
                if(typeof pin !== "undefined" && pin !== null){
                    require("../seedCage").putSeed(walletSeed, pin, overwrite,(err)=>{
                        if(err){
                            return callback(err);
                        }
                        callback(undefined, wallet);
                    });
                }else{
                    return callback(undefined, wallet);
                }
            }catch(err){
                return callback(err);
            }
        }
    };

    this.createBarWithConstitution = function (folderConstitution, callback) {
        const bar = this.createBar();
        bar.addFolder(folderConstitution, constants.CSB.CONSTITUTION_FOLDER, (err, mapDigest) => {
            if (err) {
                return callback(err);
            }

            callback(undefined, bar);
        });
    };

    function createArchiveConfig(seed) {
        const ArchiveConfigurator = barModule.ArchiveConfigurator;
        const brickTransportStrategy = $$.brickTransportStrategiesRegistry.get(brickTransportStrategyName);
        ArchiveConfigurator.prototype.registerFsAdapter("FsAdapter", fsAdapter.createFsAdapter);
        ArchiveConfigurator.prototype.registerStorageProvider("EDFSBrickStorage", require("edfs-brick-storage").create);
        const archiveConfigurator = new ArchiveConfigurator();
        archiveConfigurator.setFsAdapter("FsAdapter");
        archiveConfigurator.setStorageProvider("EDFSBrickStorage", brickTransportStrategyName);
        archiveConfigurator.setBufferSize(65535);
        archiveConfigurator.setEncryptionAlgorithm("aes-256-gcm");

        if (seed) {
            archiveConfigurator.setBrickTransportStrategyName(brickTransportStrategyName);
            archiveConfigurator.setSeed(seed);
        } else {
            archiveConfigurator.setSeedEndpoint(brickTransportStrategy.getLocator());
        }

        return archiveConfigurator;
    }
}

module.exports = EDFS;
},{"../moduleConstants":"D:\\work\\privatesky\\modules\\edfs\\moduleConstants.js","../seedCage":"D:\\work\\privatesky\\modules\\edfs\\seedCage\\index.js","./RawCSB":"D:\\work\\privatesky\\modules\\edfs\\lib\\RawCSB.js","bar":"bar","bar-fs-adapter":"bar-fs-adapter","edfs-brick-storage":"edfs-brick-storage"}],"D:\\work\\privatesky\\modules\\edfs\\lib\\RawCSB.js":[function(require,module,exports){

/*

Sinica: to be renamed CSBHandler. RootCSB should be deleted
*/


function RawCSB(brickTransportStrategyName, seed) {
    const barModule = require("bar");
    const blockchainModule = require("blockchain");

    const brickTransportStrategy = $$.brickTransportStrategiesRegistry.get(brickTransportStrategyName);
    let bar = createBar();
    let blockchain = createBlockchain(bar);

    this.getSeed = () => {
        return bar.getSeed();
    };

    this.start = (callback) => {
        blockchain.start(callback);
    };

    this.addFolder = (fsFolderPath, barPath, callback) => {
        bar.addFolder(fsFolderPath, barPath, (err, barMapDigest) => {
            if (err) {
                return callback(err);
            }

            bar.getFolderHash(barPath, (err, folderHash) => {
                if (err) {
                    return callback(err);
                }

                const transaction = blockchain.startTransactionAs($$.securityContext.getCurrentAgentIdentity(), "StandardCSBTransactions", "addFileAnchor", barPath, folderHash);
                transaction.onCommit(err => callback(err, barMapDigest));
            });
        });
    };

    this.addFile = (fsFilePath, barPath, callback) => {
        bar.addFile(fsFilePath, barPath, (err, barMapDigest) => {
            if (err) {
                return callback(err);
            }

            bar.getFileHash(barPath, (err, fileHash) => {
                if (err) {
                    return callback(err);
                }

                const transaction = blockchain.startTransactionAs($$.securityContext.getCurrentAgentIdentity(), "StandardCSBTransactions", "addFileAnchor", barPath, fileHash);
                transaction.onCommit(err => callback(err, barMapDigest));
            });
        });
    };

    this.readFile = bar.readFile;

    this.extractFolder = bar.extractFolder;

    this.extractFile = bar.extractFile;

    this.writeFile = (barPath, data, callback) => {
        bar.writeFile(barPath, data, (err, barMapDigest) => {
            if (err) {
                return callback(err);
            }

            bar.getFileHash(barPath, (err, fileDigest) => {
                if (err) {
                    return callback(err);
                }

                const transaction = blockchain.startTransactionAs($$.securityContext.getCurrentAgentIdentity(), "StandardCSBTransactions", "addFileAnchor", barPath, fileDigest);
                transaction.onCommit(err => callback(err, barMapDigest));
            });
        });
    };

    this.listFiles = bar.listFiles;

    this.startTransactionAs = (agentId, transactionType, ...args) => {
        return blockchain.startTransactionAs(agentId, transactionType, ...args);
    };

    this.lookup = (assetType, aid) => {
        return blockchain.lookup(assetType, aid);
    };

    this.commit = (transaction) => {
        blockchain.commit(transaction);
    };

    this.loadAssets = (...args) => {
        return blockchain.loadAssets(...args);
    };

    //------------------------------------------------- internal functions ---------------------------------------------
    function createBlockchain(bar) {
        const worldStateCache = blockchainModule.createWorldStateCache("bar", bar);
        const historyStorage = blockchainModule.createHistoryStorage("bar", bar);
        const consensusAlgorithm = blockchainModule.createConsensusAlgorithm("direct");
        const signatureProvider = blockchainModule.createSignatureProvider("permissive");
        return blockchainModule.createBlockchain(worldStateCache, historyStorage, consensusAlgorithm, signatureProvider, true);
    }

    function createBar() {
        const createEDFSBrickStorage = require("edfs-brick-storage").create;
        const createFsAdapter = require("bar-fs-adapter").createFsAdapter;

        const ArchiveConfigurator = barModule.ArchiveConfigurator;
        ArchiveConfigurator.prototype.registerStorageProvider("EDFSBrickStorage", createEDFSBrickStorage);
        ArchiveConfigurator.prototype.registerFsAdapter("FsAdapter", createFsAdapter);

        const archiveConfigurator = new ArchiveConfigurator();
        archiveConfigurator.setFsAdapter("FsAdapter");
        archiveConfigurator.setStorageProvider("EDFSBrickStorage", brickTransportStrategyName);
        archiveConfigurator.setEncryptionAlgorithm("aes-256-gcm");
        archiveConfigurator.setBufferSize(65535);
        if (!seed) {
            archiveConfigurator.setSeedEndpoint(brickTransportStrategy.getLocator());
        }else {
            archiveConfigurator.setBrickTransportStrategyName(brickTransportStrategyName);
            archiveConfigurator.setSeed(seed);
        }

        return barModule.createArchive(archiveConfigurator);
    }
}

module.exports = RawCSB;
},{"bar":"bar","bar-fs-adapter":"bar-fs-adapter","blockchain":false,"edfs-brick-storage":"edfs-brick-storage"}],"D:\\work\\privatesky\\modules\\edfs\\moduleConstants.js":[function(require,module,exports){
const HTTPBrickTransportStrategy = require("./brickTransportStrategies/HTTPBrickTransportStrategy");
HTTPBrickTransportStrategy.prototype.HTTP_BRICK_TRANSPORT_STRATEGY = "HTTP_BRICK_TRANSPORT_STRATEGY";

module.exports = {
    CSB: {
        CONSTITUTION_FOLDER: 'constitution',
        BLOCKCHAIN_FOLDER: 'blockchain',
        APP_FOLDER: 'app',
        DOMAIN_IDENTITY_FILE: 'domain_identity'
    }
};

},{"./brickTransportStrategies/HTTPBrickTransportStrategy":"D:\\work\\privatesky\\modules\\edfs\\brickTransportStrategies\\HTTPBrickTransportStrategy.js"}],"D:\\work\\privatesky\\modules\\edfs\\seedCage\\BrowserSeedCage.js":[function(require,module,exports){
(function (Buffer){
const pskcrypto = "pskcrypto";
const crypto = require(pskcrypto);
const storageLocation = "seedCage";
const algorithm = "aes-256-cfb";

/**
 * local storage can't handle properly binary data
 *  https://stackoverflow.com/questions/52419694/how-to-store-uint8array-in-the-browser-with-localstorage-using-javascript
 * @param pin
 * @param callback
 * @returns {*}
 */
function getSeed(pin, callback) {
    let encryptedSeed;
    let seed;
    try {
        encryptedSeed = localStorage.getItem(storageLocation);
        if (encryptedSeed === null || typeof encryptedSeed !== "string" || encryptedSeed.length === 0) {
            return callback(new Error("SeedCage is empty or data was altered"));
        }

        const retrievedEncryptedArr = JSON.parse(encryptedSeed);
        encryptedSeed = new Uint8Array(retrievedEncryptedArr);
        const pskEncryption = crypto.createPskEncryption(algorithm);
        const encKey = crypto.deriveKey(algorithm, pin);
        seed = pskEncryption.decrypt(encryptedSeed, encKey).toString();
    } catch (e) {
        return callback(e);
    }
    callback(undefined, seed);
}

function putSeed(seed, pin, overwrite = false, callback) {
    let encSeed;

    if (typeof overwrite === "function") {
        callback(Error("TODO: api signature updated!"));
    }
    try {
        if (typeof seed === "string") {
            seed = Buffer.from(seed);
        }
        if (typeof seed === "object" && !Buffer.isBuffer(seed)) {
            seed = Buffer.from(seed);
        }

        const pskEncryption = crypto.createPskEncryption(algorithm);
        const encKey = crypto.deriveKey(algorithm, pin);
        encSeed = pskEncryption.encrypt(seed, encKey);
        const encParameters = pskEncryption.getEncryptionParameters();
        encSeed = Buffer.concat([encSeed, encParameters.iv]);
        if (encParameters.aad) {
            encSeed = Buffer.concat([encSeed, encParameters.aad]);
        }

        if (encParameters.tag) {
            encSeed = Buffer.concat([encSeed, encParameters.tag]);
        }

        const encryptedArray =  Array.from(encSeed);
        const encryptedSeed = JSON.stringify(encryptedArray);

        localStorage.setItem(storageLocation, encryptedSeed);
    } catch (e) {
        return callback(e);
    }
    callback(undefined);
}

function check(callback) {
    let item;
    try {
        item = localStorage.getItem(storageLocation);
    } catch (e) {
        return callback(e);
    }
    if (item) {
        return callback();
    }
    callback(new Error("SeedCage does not exists"));
}

module.exports = {
    check,
    putSeed,
    getSeed
};

}).call(this,require("buffer").Buffer)

},{"buffer":false}],"D:\\work\\privatesky\\modules\\edfs\\seedCage\\NodeSeedCage.js":[function(require,module,exports){
(function (Buffer){
const pth = "path";
const path = require(pth);
const os = "os";
const fileSystem = "fs";
const fs = require(fileSystem);
const pskcrypto = "pskcrypto";
const crypto = require(pskcrypto);


const storageLocation = process.env.SEED_CAGE_LOCATION || require(os).homedir();
const storageFileName = ".seedCage";
const seedCagePath = path.join(storageLocation, storageFileName);
const algorithm = "aes-256-cfb";

function getSeed(pin, callback) {
    fs.readFile(seedCagePath, (err, encryptedSeed) => {
        if (err) {
            return callback(err);
        }

        let seed;
        try {
            const pskEncryption = crypto.createPskEncryption(algorithm);
            const encKey = crypto.deriveKey(algorithm, pin);
            seed = pskEncryption.decrypt(encryptedSeed, encKey).toString();
        } catch (e) {
            return callback(e);
        }

        callback(undefined, seed);
    });
}

function putSeed(seed, pin, overwrite = false, callback) {
    fs.mkdir(storageLocation, {recursive: true}, (err) => {
        if (err) {
            return callback(err);
        }

        fs.stat(seedCagePath, (err, stats) => {
            if (!err && stats.size > 0) {
                if (overwrite) {
                    __encryptSeed();
                } else {
                    return callback(Error("Attempted to overwrite existing SEED."));
                }
            } else {
                __encryptSeed();
            }

            function __encryptSeed() {
                let encSeed;
                try {
                    if (typeof seed === "string") {
                        seed = Buffer.from(seed);
                    }

                    if (typeof seed === "object" && !Buffer.isBuffer(seed)) {
                        seed = Buffer.from(seed);
                    }


                    const pskEncryption = crypto.createPskEncryption(algorithm);
                    const encKey = crypto.deriveKey(algorithm, pin);
                    encSeed = pskEncryption.encrypt(seed, encKey);
                    const encParameters = pskEncryption.getEncryptionParameters();
                    encSeed = Buffer.concat([encSeed, encParameters.iv]);
                    if (encParameters.aad) {
                        encSeed = Buffer.concat([encSeed, encParameters.aad]);
                    }

                    if (encParameters.tag) {
                        encSeed = Buffer.concat([encSeed, encParameters.tag]);
                    }
                } catch (e) {
                    return callback(e);
                }

                console.log("To be removed later", seed.toString());
                fs.writeFile(seedCagePath, encSeed, callback);
            }
        });
    });
}

function check(callback) {
    fs.access(seedCagePath, callback);
}

module.exports = {
    check,
    putSeed,
    getSeed
};

}).call(this,require("buffer").Buffer)

},{"buffer":false}],"D:\\work\\privatesky\\modules\\edfs\\seedCage\\index.js":[function(require,module,exports){
const or = require("overwrite-require");
switch ($$.environmentType) {
    case or.constants.THREAD_ENVIRONMENT_TYPE:
    case or.constants.NODEJS_ENVIRONMENT_TYPE:
        module.exports = require("./NodeSeedCage");
        break;
    case or.constants.BROWSER_ENVIRONMENT_TYPE:
        module.exports = require("./BrowserSeedCage");
        break;
    case or.constants.SERVICE_WORKER_ENVIRONMENT_TYPE:
    case or.constants.ISOLATE_ENVIRONMENT_TYPE:
    default:
        throw new Error("No implementation of SeedCage for this env type.");
}
},{"./BrowserSeedCage":"D:\\work\\privatesky\\modules\\edfs\\seedCage\\BrowserSeedCage.js","./NodeSeedCage":"D:\\work\\privatesky\\modules\\edfs\\seedCage\\NodeSeedCage.js","overwrite-require":"overwrite-require"}],"D:\\work\\privatesky\\modules\\overwrite-require\\moduleConstants.js":[function(require,module,exports){
module.exports = {
  BROWSER_ENVIRONMENT_TYPE: 'browser',
  SERVICE_WORKER_ENVIRONMENT_TYPE: 'service-worker',
  ISOLATE_ENVIRONMENT_TYPE: 'isolate',
  THREAD_ENVIRONMENT_TYPE: 'thread',
  NODEJS_ENVIRONMENT_TYPE: 'nodejs'
};

},{}],"D:\\work\\privatesky\\modules\\overwrite-require\\standardGlobalSymbols.js":[function(require,module,exports){
(function (global){
let logger = console;

if (!global.process || process.env.NO_LOGS !== 'true') {
    try {
        const PSKLoggerModule = require('psklogger');
        const PSKLogger = PSKLoggerModule.PSKLogger;

        logger = PSKLogger.getLogger();

        console.log('Logger init successful', process.pid);
    } catch (e) {
        if(e.message.indexOf("psklogger")!==-1){
            console.log('Logger not available, using console');
            logger = console;
        }else{
            console.log(e);
        }
    }
} else {
    console.log('Environment flag NO_LOGS is set, logging to console');
}

$$.registerGlobalSymbol = function (newSymbol, value) {
    if (typeof $$[newSymbol] == "undefined") {
        Object.defineProperty($$, newSymbol, {
            value: value,
            writable: false
        });
    } else {
        logger.error("Refusing to overwrite $$." + newSymbol);
    }
};

console.warn = (...args)=>{
    console.log(...args);
};

/**
 * @method
 * @name $$#autoThrow
 * @param {Error} err
 * @throws {Error}
 */

$$.registerGlobalSymbol("autoThrow", function (err) {
    if (!err) {
        throw err;
    }
});

/**
 * @method
 * @name $$#propagateError
 * @param {Error} err
 * @param {function} callback
 */
$$.registerGlobalSymbol("propagateError", function (err, callback) {
    if (err) {
        callback(err);
        throw err; //stop execution
    }
});

/**
 * @method
 * @name $$#logError
 * @param {Error} err
 */
$$.registerGlobalSymbol("logError", function (err) {
    if (err) {
        console.log(err);
        $$.err(err);
    }
});

/**
 * @method
 * @name $$#fixMe
 * @param {...*} args
 */
console.log("Fix the fixMe to not display on console but put in logs");
$$.registerGlobalSymbol("fixMe", function (...args) {
    //$$.log(...args);
});

/**
 * @method - Throws an error
 * @name $$#exception
 * @param {string} message
 * @param {*} type
 */
$$.registerGlobalSymbol("exception", function (message, type) {
    throw new Error(message);
});

/**
 * @method - Throws an error
 * @name $$#throw
 * @param {string} message
 * @param {*} type
 */
$$.registerGlobalSymbol("throw", function (message, type) {
    throw new Error(message);
});


/**
 * @method - Warns that method is not implemented
 * @name $$#incomplete
 * @param {...*} args
 */
/* signal a  planned feature but not implemented yet (during development) but
also it could remain in production and should be flagged asap*/
$$.incomplete = function (...args) {
    args.unshift("Incomplete feature touched:");
    logger.warn(...args);
};

/**
 * @method - Warns that method is not implemented
 * @name $$#notImplemented
 * @param {...*} args
 */
$$.notImplemented = $$.incomplete;


/**
 * @method Throws if value is false
 * @name $$#assert
 * @param {boolean} value - Value to assert against
 * @param {string} explainWhy - Reason why assert failed (why value is false)
 */
/* used during development and when trying to discover elusive errors*/
$$.registerGlobalSymbol("assert", function (value, explainWhy) {
    if (!value) {
        throw new Error("Assert false " + explainWhy);
    }
});

/**
 * @method
 * @name $$#flags
 * @param {string} flagName
 * @param {*} value
 */
/* enable/disabale flags that control psk behaviour*/
$$.registerGlobalSymbol("flags", function (flagName, value) {
    $$.incomplete("flags handling not implemented");
});

/**
 * @method - Warns that a method is obsolete
 * @name $$#obsolete
 * @param {...*} args
 */
$$.registerGlobalSymbol("obsolete", function (...args) {
    args.unshift("Obsolete feature:");
    logger.log(...args);
    console.log(...args);
});

/**
 * @method - Uses the logger to log a message of level "log"
 * @name $$#log
 * @param {...*} args
 */
$$.registerGlobalSymbol("log", function (...args) {
    args.unshift("Log:");
    logger.log(...args);
});

/**
 * @method - Uses the logger to log a message of level "info"
 * @name $$#info
 * @param {...*} args
 */
$$.registerGlobalSymbol("info", function (...args) {
    args.unshift("Info:");
    logger.log(...args);
    console.log(...args);
});

/**
 * @method - Uses the logger to log a message of level "error"
 * @name $$#err
 * @param {...*} args
 */
$$.registerGlobalSymbol("err", function (...args) {
    args.unshift("Error:");
    logger.error(...args);
    console.error(...args);
});

/**
 * @method - Uses the logger to log a message of level "error"
 * @name $$#err
 * @param {...*} args
 */
$$.registerGlobalSymbol("error", function (...args) {
    args.unshift("Error:");
    logger.error(...args);
    console.error(...args);
});

/**
 * @method - Uses the logger to log a message of level "warning"
 * @name $$#warn
 * @param {...*} args
 */
$$.registerGlobalSymbol("warn", function (...args) {
    args.unshift("Warn:");
    logger.warn(...args);
    console.log(...args);
});

/**
 * @method - Uses the logger to log a message of level "syntexError"
 * @name $$#syntexError
 * @param {...*} args
 */
$$.registerGlobalSymbol("syntaxError", function (...args) {
    args.unshift("Syntax error:");
    logger.error(...args);
    try{
        throw new Error("Syntax error or misspelled symbol!");
    }catch(err){
        console.error(...args);
        console.error(err.stack);
    }

});

/**
 * @method - Logs an invalid member name for a swarm
 * @name $$#invalidMemberName
 * @param {string} name
 * @param {Object} swarm
 */
$$.invalidMemberName = function (name, swarm) {
    let swarmName = "unknown";
    if (swarm && swarm.meta) {
        swarmName = swarm.meta.swarmTypeName;
    }
    const text = "Invalid member name " + name + "in swarm " + swarmName;
    console.error(text);
    logger.err(text);
};

/**
 * @method - Logs an invalid swarm name
 * @name $$#invalidSwarmName
 * @param {string} name
 * @param {Object} swarm
 */
$$.registerGlobalSymbol("invalidSwarmName", function (swarmName) {
    const text = "Invalid swarm name " + swarmName;
    console.error(text);
    logger.err(text);
});

/**
 * @method - Logs unknown exceptions
 * @name $$#unknownException
 * @param {...*} args
 */
$$.registerGlobalSymbol("unknownException", function (...args) {
    args.unshift("unknownException:");
    logger.err(...args);
    console.error(...args);
});

/**
 * @method - PrivateSky event, used by monitoring and statistics
 * @name $$#event
 * @param {string} event
 * @param {...*} args
 */
$$.registerGlobalSymbol("event", function (event, ...args) {
    if (logger.hasOwnProperty('event')) {
        logger.event(event, ...args);
    } else {
        if(event === "status.domains.boot"){
            console.log("Failing to console...", event, ...args);
        }
    }
});

/**
 * @method -
 * @name $$#redirectLog
 * @param {string} event
 * @param {...*} args
 */
$$.registerGlobalSymbol("redirectLog", function (logType, logObject) {
    if(logger.hasOwnProperty('redirect')) {
        logger.redirect(logType, logObject);
    }
});

/**
 * @method - log throttling event // it is just an event?
 * @name $$#throttlingEvent
 * @param {...*} args
 */
$$.registerGlobalSymbol("throttlingEvent", function (...args) {
    logger.log(...args);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"psklogger":false}],"D:\\work\\privatesky\\modules\\psk-http-client\\lib\\psk-abstract-client.js":[function(require,module,exports){
/**********************  utility class **********************************/
function RequestManager(pollingTimeOut) {
    if (!pollingTimeOut) {
        pollingTimeOut = 1000; //1 second by default
    }

    const self = this;

    function Request(endPoint, initialSwarm, delayedStart) {
        let onReturnCallbacks = [];
        let onErrorCallbacks = [];
        let onCallbacks = [];
        const requestId = initialSwarm ? initialSwarm.meta.requestId : "weneedarequestid";
        initialSwarm = null;

        this.getRequestId = function () {
            return requestId;
        };

        this.on = function (phaseName, callback) {
            if (typeof phaseName != "string" && typeof callback != "function") {
                throw new Error("The first parameter should be a string and the second parameter should be a function");
            }

            onCallbacks.push({
                callback: callback,
                phase: phaseName
            });

            if (typeof delayedStart === "undefined") {
                self.poll(endPoint, this);
            }

            return this;
        };

        this.onReturn = function (callback) {
            onReturnCallbacks.push(callback);
            if (typeof delayedStart === "undefined") {
                self.poll(endPoint, this);
            }
            return this;
        };

        this.onError = function (callback) {
            if (onErrorCallbacks.indexOf(callback) !== -1) {
                onErrorCallbacks.push(callback);
            } else {
                console.log("Error callback already registered!");
            }
        };

        this.start = function () {
            if (typeof delayedStart !== "undefined") {
                self.poll(endPoint, this);
            }
        };

        this.dispatch = function (err, result) {
            if (result instanceof ArrayBuffer) {
                result = SwarmPacker.unpack(result);
            }

            result = typeof result === "string" ? JSON.parse(result) : result;

            result = OwM.prototype.convert(result);
            const resultReqId = result.getMeta("requestId");
            const phaseName = result.getMeta("phaseName");
            let onReturn = false;

            if (resultReqId === requestId) {
                onReturnCallbacks.forEach(function (c) {
                    c(null, result);
                    onReturn = true;
                });
                if (onReturn) {
                    onReturnCallbacks = [];
                    onErrorCallbacks = [];
                }

                onCallbacks.forEach(function (i) {
                    //console.log("XXXXXXXX:", phaseName , i);
                    if (phaseName === i.phase || i.phase === '*') {
                        i.callback(err, result);
                    }
                });
            }

            if (onReturnCallbacks.length === 0 && onCallbacks.length === 0) {
                self.unpoll(endPoint, this);
            }
        };

        this.dispatchError = function (err) {
            for (let i = 0; i < onErrorCallbacks.length; i++) {
                const errCb = onErrorCallbacks[i];
                errCb(err);
            }
        };

        this.off = function () {
            self.unpoll(endPoint, this);
        };
    }

    this.createRequest = function (remoteEndPoint, swarm, delayedStart) {
        return new Request(remoteEndPoint, swarm, delayedStart);
    };

    /* *************************** polling zone ****************************/

    const pollSet = {};

    const activeConnections = {};

    this.poll = function (remoteEndPoint, request) {
        let requests = pollSet[remoteEndPoint];
        if (!requests) {
            requests = {};
            pollSet[remoteEndPoint] = requests;
        }
        requests[request.getRequestId()] = request;
        pollingHandler();
    };

    this.unpoll = function (remoteEndPoint, request) {
        const requests = pollSet[remoteEndPoint];
        if (requests) {
            delete requests[request.getRequestId()];
            if (Object.keys(requests).length === 0) {
                delete pollSet[remoteEndPoint];
            }
        } else {
            console.log("Unpolling wrong request:", remoteEndPoint, request);
        }
    };

    function createPollThread(remoteEndPoint) {
        function reArm() {
            $$.remote.doHttpGet(remoteEndPoint, function (err, res) {
                let requests = pollSet[remoteEndPoint];
                if (err) {
                    for (const req_id in requests) {
                        if (!requests.hasOwnProperty(req_id)) {
                            return;
                        }

                        let err_handler = requests[req_id].dispatchError;
                        if (err_handler) {
                            err_handler(err);
                        }
                    }
                    activeConnections[remoteEndPoint] = false;
                } else {

                    for (const k in requests) {
                        if (!requests.hasOwnProperty(k)) {
                            return;
                        }

                        requests[k].dispatch(null, res);
                    }

                    if (Object.keys(requests).length !== 0) {
                        reArm();
                    } else {
                        delete activeConnections[remoteEndPoint];
                        console.log("Ending polling for ", remoteEndPoint);
                    }
                }
            });
        }

        reArm();
    }

    function pollingHandler() {
        let setTimer = false;
        for (const remoteEndPoint in pollSet) {
            if (!pollSet.hasOwnProperty(remoteEndPoint)) {
                return;
            }

            if (!activeConnections[remoteEndPoint]) {
                createPollThread(remoteEndPoint);
                activeConnections[remoteEndPoint] = true;
            }
            setTimer = true;
        }
        if (setTimer) {
            setTimeout(pollingHandler, pollingTimeOut);
        }
    }

    setTimeout(pollingHandler, pollingTimeOut);
}

function urlEndWithSlash(url) {
    if (url[url.length - 1] !== "/") {
        url += "/";
    }
    return url;
}

/********************** main APIs on working with virtualMQ channels **********************************/
function HttpChannelClient(remoteEndPoint, channelName, options) {

    let clientType;
    const opts = {
        autoCreate: true,
        publicSignature: "no_signature_provided"
    };

    Object.keys(options).forEach((optName) => {
        opts[optName] = options[optName];
    });

    let channelCreated = false;
    function readyToBeUsed(){
        let res = false;

        if(clientType === HttpChannelClient.prototype.PRODUCER_CLIENT_TYPE){
            res = true;
        }
        if(clientType === HttpChannelClient.prototype.CONSUMER_CLIENT_TYPE){
            if(!options.autoCreate){
                res = true;
            }else{
                res = channelCreated;
            }
        }

        return res;
    }

    function encryptChannelName(channelName) {
        return $$.remote.base64Encode(channelName);
    }

    function CatchAll(swarmName, phaseName, callback) { //same interface as Request
        const requestId = requestsCounter++;
        this.getRequestId = function () {
            return "swarmName" + "phaseName" + requestId;
        };

        this.dispatch = function (err, result) {
            /*result = OwM.prototype.convert(result);
            const currentPhaseName = result.getMeta("phaseName");
            const currentSwarmName = result.getMeta("swarmTypeName");
            if ((currentSwarmName === swarmName || swarmName === '*') && (currentPhaseName === phaseName || phaseName === '*')) {
                return callback(err, result);
            }*/
            return callback(err, result);
        };
    }

    this.setSenderMode = function () {
        if (typeof clientType !== "undefined") {
            throw new Error(`HttpChannelClient is set as ${clientType}`);
        }
        clientType = HttpChannelClient.prototype.PRODUCER_CLIENT_TYPE;

        this.sendSwarm = function (swarmSerialization) {
            $$.remote.doHttpPost(getRemoteToSendMessage(remoteEndPoint, channelName), swarmSerialization, (err, res)=>{
                if(err){
                    console.log("Sending swarm failed", err);
                }else{
                    console.log("Swarm sent");
                }
            });
        };
    };

    this.setReceiverMode = function () {
        if (typeof clientType !== "undefined") {
            throw new Error(`HttpChannelClient is set as ${clientType}`);
        }
        clientType = HttpChannelClient.prototype.CONSUMER_CLIENT_TYPE;

        function createChannel(callback){
            if (!readyToBeUsed()) {
                $$.remote.doHttpPut(getRemoteToCreateChannel(), opts.publicSignature, (err) => {
                    if (err) {
                        if (err.statusCode !== 409) {
                            return callback(err);
                        }
                    }
                    channelCreated = true;
                    if(opts.enableForward){
                        console.log("Enabling forward");
                        $$.remote.doHttpPost(getUrlToEnableForward(), opts.publicSignature, (err, res)=>{
                            if(err){
                                console.log("Request to enable forward to zeromq failed", err);
                            }
                        });
                    }
                    return callback();
                });
            }
        }

        this.getReceiveAddress = function(){
            return getRemoteToSendMessage();
        };

        this.on = function (swarmId, swarmName, phaseName, callback) {
            const c = new CatchAll(swarmName, phaseName, callback);
            allCatchAlls.push({
                s: swarmName,
                p: phaseName,
                c: c
            });

           /* if (!readyToBeUsed()) {
                createChannel((err)=>{
                    $$.remote.requestManager.poll(getRemoteToReceiveMessage(), c);
                });
            } else {*/
                $$.remote.requestManager.poll(getRemoteToReceiveMessage(), c);
            /*}*/
        };

        this.off = function (swarmName, phaseName) {
            allCatchAlls.forEach(function (ca) {
                if ((ca.s === swarmName || swarmName === '*') && (phaseName === ca.p || phaseName === '*')) {
                    $$.remote.requestManager.unpoll(getRemoteToReceiveMessage(remoteEndPoint, domainInfo.domain), ca.c);
                }
            });
        };

        createChannel((err) => {
            if(err){
                console.log(err);
            }
        });

        createRequestManager();
    };

    const allCatchAlls = [];
    let requestsCounter = 0;

    this.uploadCSB = function (cryptoUid, binaryData, callback) {
        $$.remote.doHttpPost(baseOfRemoteEndPoint + "/CSB/" + cryptoUid, binaryData, callback);
    };

    this.downloadCSB = function (cryptoUid, callback) {
        $$.remote.doHttpGet(baseOfRemoteEndPoint + "/CSB/" + cryptoUid, callback);
    };

    function getRemoteToReceiveMessage() {
        return [urlEndWithSlash(remoteEndPoint), urlEndWithSlash(HttpChannelClient.prototype.RECEIVE_API_NAME), urlEndWithSlash(encryptChannelName(channelName))].join("");
    }

    function getRemoteToSendMessage() {
        return [urlEndWithSlash(remoteEndPoint), urlEndWithSlash(HttpChannelClient.prototype.SEND_API_NAME), urlEndWithSlash(encryptChannelName(channelName))].join("");
    }

    function getRemoteToCreateChannel() {
        return [urlEndWithSlash(remoteEndPoint), urlEndWithSlash(HttpChannelClient.prototype.CREATE_CHANNEL_API_NAME), urlEndWithSlash(encryptChannelName(channelName))].join("");
    }

    function getUrlToEnableForward() {
        return [urlEndWithSlash(remoteEndPoint), urlEndWithSlash(HttpChannelClient.prototype.FORWARD_CHANNEL_API_NAME), urlEndWithSlash(encryptChannelName(channelName))].join("");
    }
}

/********************** constants **********************************/
HttpChannelClient.prototype.RECEIVE_API_NAME = "receive-message";
HttpChannelClient.prototype.SEND_API_NAME = "send-message";
HttpChannelClient.prototype.CREATE_CHANNEL_API_NAME = "create-channel";
HttpChannelClient.prototype.FORWARD_CHANNEL_API_NAME = "forward-zeromq";
HttpChannelClient.prototype.PRODUCER_CLIENT_TYPE = "producer";
HttpChannelClient.prototype.CONSUMER_CLIENT_TYPE = "consumer";

/********************** initialisation stuff **********************************/
if (typeof $$ === "undefined") {
    $$ = {};
}

if (typeof $$.remote === "undefined") {
    $$.remote = {};

    function createRequestManager(timeOut) {
        const newRequestManager = new RequestManager(timeOut);
        Object.defineProperty($$.remote, "requestManager", {value: newRequestManager});
    }

    function registerHttpChannelClient(alias, remoteEndPoint, channelName, options) {
        $$.remote[alias] = new HttpChannelClient(remoteEndPoint, channelName, options);
    }

    Object.defineProperty($$.remote, "createRequestManager", {value: createRequestManager});
    Object.defineProperty($$.remote, "registerHttpChannelClient", {value: registerHttpChannelClient});

    $$.remote.doHttpPost = function (url, data, callback) {
        throw new Error("Overwrite this!");
    };

    $$.remote.doHttpPut = function (url, data, callback) {
        throw new Error("Overwrite this!");
    };

    $$.remote.doHttpGet = function doHttpGet(url, callback) {
        throw new Error("Overwrite this!");
    };

    $$.remote.base64Encode = function base64Encode(stringToEncode) {
        throw new Error("Overwrite this!");
    };

    $$.remote.base64Decode = function base64Decode(encodedString) {
        throw new Error("Overwrite this!");
    };
}
},{}],"D:\\work\\privatesky\\modules\\psk-http-client\\lib\\psk-browser-client.js":[function(require,module,exports){
(function (Buffer){
function generateMethodForRequestWithData(httpMethod) {
    return function (url, data, callback) {
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                const data = xhr.response;
                callback(null, data);
            } else {
                if(xhr.status>=400){
                    const error = new Error("An error occured. StatusCode: " + xhr.status);
                    callback({error: error, statusCode: xhr.status});
                } else {
                    console.log(`Status code ${xhr.status} received, response is ignored.`);
                }
            }
        };

        xhr.onerror = function (e) {
            callback(new Error("A network error occurred"));
        };

        xhr.open(httpMethod, url, true);
        //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        if(data && data.pipe && typeof data.pipe === "function"){
            const buffers = [];
            data.on("data", function(data) {
                buffers.push(data);
            });
            data.on("end", function() {
                const actualContents = Buffer.concat(buffers);
                xhr.send(actualContents);
            });
        }
        else {
            if(ArrayBuffer.isView(data) || data instanceof ArrayBuffer) {
                xhr.setRequestHeader('Content-Type', 'application/octet-stream');

                /**
                 * Content-Length is an unsafe header and we cannot set it.
                 * When browser is making a request that is intercepted by a service worker,
                 * the Content-Length header is not set implicitly.
                 */
                xhr.setRequestHeader('X-Content-Length', data.byteLength);
            }
            xhr.send(data);
        }
    };
}


$$.remote.doHttpPost = generateMethodForRequestWithData('POST');

$$.remote.doHttpPut = generateMethodForRequestWithData('PUT');


$$.remote.doHttpGet = function doHttpGet(url, callback) {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        //check if headers were received and if any action should be performed before receiving data
        if (xhr.readyState === 2) {
            var contentType = xhr.getResponseHeader("Content-Type");
            if (contentType === "application/octet-stream") {
                xhr.responseType = 'arraybuffer';
            }
        }
    };

    xhr.onload = function () {

        if (xhr.readyState === 4 && xhr.status == "200") {
            var contentType = xhr.getResponseHeader("Content-Type");

            if (contentType === "application/octet-stream") {
                let responseBuffer = this.response;

                let buffer = new Buffer(responseBuffer.byteLength);
                let view = new Uint8Array(responseBuffer);
                for (let i = 0; i < buffer.length; ++i) {
                    buffer[i] = view[i];
                }
                callback(null, buffer);
            }
            else{
                callback(null, xhr.response);
            }

        } else {
            const error = new Error("An error occurred. StatusCode: " + xhr.status);

            callback({error: error, statusCode: xhr.status});
        }
    };
    xhr.onerror = function (e) {
        callback(new Error("A network error occurred"));
    };

    xhr.open("GET", url);
    xhr.send();
};


function CryptoProvider(){

    this.generateSafeUid = function(){
        let uid = "";
        var array = new Uint32Array(10);
        window.crypto.getRandomValues(array);


        for (var i = 0; i < array.length; i++) {
            uid += array[i].toString(16);
        }

        return uid;
    }

    this.signSwarm = function(swarm, agent){
        swarm.meta.signature = agent;
    }
}



$$.remote.cryptoProvider = new CryptoProvider();

$$.remote.base64Encode = function base64Encode(stringToEncode){
    return window.btoa(stringToEncode);
};

$$.remote.base64Decode = function base64Decode(encodedString){
    return window.atob(encodedString);
};

}).call(this,require("buffer").Buffer)

},{"buffer":false}],"D:\\work\\privatesky\\modules\\psk-http-client\\lib\\psk-node-client.js":[function(require,module,exports){
(function (Buffer){
require("./psk-abstract-client");

const http = require("http");
const https = require("https");
const URL = require("url");
const userAgent = 'PSK NodeAgent/0.0.1';
const signatureHeaderName = process.env.vmq_signature_header_name || "x-signature";


console.log("PSK node client loading");

function getNetworkForOptions(options) {
	if(options.protocol === 'http:') {
		return http;
	} else if(options.protocol === 'https:') {
		return https;
	} else {
		throw new Error(`Can't handle protocol ${options.protocol}`);
	}

}

function generateMethodForRequestWithData(httpMethod) {
	return function (url, data, callback) {
		const innerUrl = URL.parse(url);

		const options = {
			hostname: innerUrl.hostname,
			path: innerUrl.pathname,
			port: parseInt(innerUrl.port),
			headers: {
				'User-Agent': userAgent,
				[signatureHeaderName]: 'replaceThisPlaceholderSignature'
			},
			method: httpMethod
		};

		const network = getNetworkForOptions(innerUrl);

		if (ArrayBuffer.isView(data) || Buffer.isBuffer(data) || data instanceof ArrayBuffer) {
			if (!Buffer.isBuffer(data)) {
				data = Buffer.from(data);
			}

			options.headers['Content-Type'] = 'application/octet-stream';
			options.headers['Content-Length'] = data.length;
		}

		const req = network.request(options, (res) => {
			const {statusCode} = res;

			let error;
			if (statusCode >= 400) {
				error = new Error('Request Failed.\n' +
					`Status Code: ${statusCode}\n` +
					`URL: ${options.hostname}:${options.port}${options.path}`);
			}

			if (error) {
				callback({error: error, statusCode: statusCode});
				// free up memory
				res.resume();
				return;
			}

			let rawData = '';
			res.on('data', (chunk) => {
				rawData += chunk;
			});
			res.on('end', () => {
				try {
					callback(null, rawData, res.headers);
				} catch (err) {
					return callback(err);
				}finally {
					//trying to prevent getting ECONNRESET error after getting our response
					req.abort();
				}
			});
		}).on("error", (error) => {
			console.log(`[POST] ${url}`, error);
			callback(error);
		});

		if (data && data.pipe && typeof data.pipe === "function") {
			data.pipe(req);
			return;
		}

		if (typeof data !== 'string' && !Buffer.isBuffer(data) && !ArrayBuffer.isView(data)) {
			data = JSON.stringify(data);
		}

		req.write(data);
		req.end();
	};
}

$$.remote.doHttpPost = generateMethodForRequestWithData('POST');

$$.remote.doHttpPut = generateMethodForRequestWithData('PUT');

$$.remote.doHttpGet = function doHttpGet(url, callback){
    const innerUrl = URL.parse(url);

	const options = {
		hostname: innerUrl.hostname,
		path: innerUrl.pathname + (innerUrl.search || ''),
		port: parseInt(innerUrl.port),
		headers: {
			'User-Agent': userAgent,
            [signatureHeaderName]: 'someSignature'
		},
		method: 'GET'
	};

	const network = getNetworkForOptions(innerUrl);
	const req = network.request(options, (res) => {
		const { statusCode } = res;

		let error;
		if (statusCode !== 200) {
			error = new Error('Request Failed.\n' +
				`Status Code: ${statusCode}`);
			error.code = statusCode;
		}

		if (error) {
			callback({error:error, statusCode:statusCode});
			// free up memory
			res.resume();
			return
		}

		let rawData;
		const contentType = res.headers['content-type'];

		if(contentType === "application/octet-stream"){
			rawData = [];
		}else{
			rawData = '';
		}

		res.on('data', (chunk) => {
			if(Array.isArray(rawData)){
				rawData.push(...chunk);
			}else{
				rawData += chunk;
			}
		});
		res.on('end', () => {
			try {
				if(Array.isArray(rawData)){
					rawData = Buffer.from(rawData);
				}
				callback(null, rawData, res.headers);
			} catch (err) {
				console.log("Client error:", err);
			}finally {
				//trying to prevent getting ECONNRESET error after getting our response
				req.abort();
			}
		});
	});

	req.on("error", (error) => {
		if(error && error.code !== 'ECONNRESET'){
        	console.log(`[GET] ${url}`, error);
		}

		callback(error);
	});

	req.end();
};

$$.remote.base64Encode = function base64Encode(stringToEncode){
    return Buffer.from(stringToEncode).toString('base64');
};

$$.remote.base64Decode = function base64Decode(encodedString){
    return Buffer.from(encodedString, 'base64').toString('ascii');
};

}).call(this,require("buffer").Buffer)

},{"./psk-abstract-client":"D:\\work\\privatesky\\modules\\psk-http-client\\lib\\psk-abstract-client.js","buffer":false,"http":false,"https":false,"url":false}],"D:\\work\\privatesky\\modules\\pskcrypto\\lib\\PskCrypto.js":[function(require,module,exports){
(function (Buffer){
function PskCrypto() {
    const crypto = require('crypto');
    const utils = require("./utils/cryptoUtils");
    const PskEncryption = require("./PskEncryption");
    const or = require('overwrite-require');

    this.createPskEncryption = (algorithm) => {
        return new PskEncryption(algorithm);
    };

    this.sign = function (privateKey, digest) {
        if (typeof digest === "string") {
            digest = Buffer.from(digest, "hex");
        }

        return crypto.createSign("sha256").update(digest).sign(privateKey);
    };

    this.verify = function (publicKey, signature, digest) {
        if (typeof digest === "string") {
            digest = Buffer.from(digest, "hex");
        }

        if (typeof signature === "string") {
            signature = Buffer.from(signature, "hex");
        }
        return crypto.createVerify("sha256").update(digest).verify(publicKey, signature);
    };

    this.generateKeyPair = (callback) => {
        crypto.generateKeyPair('rsa', {
            modulusLength: 4096,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            }
        }, callback);
    };

    this.privateEncrypt = (privateKey, data) => {
        if (typeof data === "string") {
            data = Buffer.from(data);
        }

        return crypto.privateEncrypt(privateKey, data);
    };

    this.privateDecrypt = (privateKey, encryptedData) => {
        if (typeof encryptedData === "string") {
            encryptedData = Buffer.from(encryptedData);
        }

        return crypto.privateDecrypt(privateKey, encryptedData);
    };

    this.publicEncrypt = (publicKey, data) => {
        if (typeof data === "string") {
            data = Buffer.from(data);
        }

        return crypto.publicEncrypt(publicKey, data);
    };

    this.publicDecrypt = (publicKey, encryptedData) => {
        if (typeof encryptedData === "string") {
            encryptedData = Buffer.from(encryptedData);
        }

        return crypto.publicDecrypt(publicKey, encryptedData);
    };

    this.pskHash = function (data, encoding) {
        if (Buffer.isBuffer(data)) {
            return utils.createPskHash(data, encoding);
        }
        if (data instanceof Object) {
            return utils.createPskHash(JSON.stringify(data), encoding);
        }
        return utils.createPskHash(data, encoding);
    };

    this.pskHashStream = function (readStream, callback) {
        const pskHash = new utils.PskHash();

        readStream.on('data', (chunk) => {
            pskHash.update(chunk);
        });


        readStream.on('end', () => {
            callback(null, pskHash.digest());
        })
    };

    this.generateSafeUid = function (password, additionalData) {
        password = password || Buffer.alloc(0);
        if (!additionalData) {
            additionalData = Buffer.alloc(0);
        }

        if (!Buffer.isBuffer(additionalData)) {
            additionalData = Buffer.from(additionalData);
        }

        return utils.encode(this.pskHash(Buffer.concat([password, additionalData])));
    };

    this.deriveKey = function deriveKey(algorithm, password) {
        const keylen = utils.getKeyLength(algorithm);
        const salt = utils.generateSalt(password, 32);
        return crypto.pbkdf2Sync(password, salt, 1000, keylen, 'sha256');
    };


    this.randomBytes = (len) => {
        if ($$.environmentType === or.constants.BROWSER_ENVIRONMENT_TYPE) {
            let randomArray = new Uint8Array(len);

            return window.crypto.getRandomValues(randomArray);
        } else {
            return crypto.randomBytes(len);
        }
    };

    this.xorBuffers = (...args) => {
        if (args.length < 2) {
            throw Error(`The function should receive at least two arguments. Received ${args.length}`);
        }

        if (args.length === 2) {
            __xorTwoBuffers(args[0], args[1]);
            return args[1];
        }

        for (let i = 0; i < args.length - 1; i++) {
            __xorTwoBuffers(args[i], args[i + 1]);
        }

        function __xorTwoBuffers(a, b) {
            if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                throw Error("The argument type should be Buffer.");
            }

            const length = Math.min(a.length, b.length);
            for (let i = 0; i < length; i++) {
                b[i] ^= a[i];
            }

            return b;
        }

        return args[args.length - 1];
    };

    this.PskHash = utils.PskHash;
}

module.exports = new PskCrypto();



}).call(this,require("buffer").Buffer)

},{"./PskEncryption":"D:\\work\\privatesky\\modules\\pskcrypto\\lib\\PskEncryption.js","./utils/cryptoUtils":"D:\\work\\privatesky\\modules\\pskcrypto\\lib\\utils\\cryptoUtils.js","buffer":false,"crypto":false,"overwrite-require":"overwrite-require"}],"D:\\work\\privatesky\\modules\\pskcrypto\\lib\\PskEncryption.js":[function(require,module,exports){
(function (Buffer){
const crypto = require("crypto");
const utils = require("./utils/cryptoUtils");

function PskEncryption(algorithm) {
    if (!algorithm) {
        throw Error("No encryption algorithm was provided");
    }

    let iv;
    let aad;
    let tag;
    let data;
    let key;

    let keylen = utils.getKeyLength(algorithm);
    let encryptionIsAuthenticated = utils.encryptionIsAuthenticated(algorithm);

    this.encrypt = (plainData, encryptionKey, options) => {
        iv = iv || crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(algorithm, encryptionKey, iv, options);
        if (encryptionIsAuthenticated) {
            aad = crypto.randomBytes(encryptionKey.length);
            cipher.setAAD(aad);
        }

        const encData = Buffer.concat([cipher.update(plainData), cipher.final()]);
        if (encryptionIsAuthenticated) {
            tag = cipher.getAuthTag();
        }

        key = encryptionKey;
        return encData;
    };

    this.decrypt = (encryptedData, decryptionKey, authTagLength = 0, options) => {
        if (!iv) {
            this.getDecryptionParameters(encryptedData, authTagLength);
        }
        const decipher = crypto.createDecipheriv(algorithm, decryptionKey, iv, options);
        if (encryptionIsAuthenticated) {
            decipher.setAAD(aad);
            decipher.setAuthTag(tag);
        }

        return Buffer.concat([decipher.update(data), decipher.final()]);
    };

    this.getEncryptionParameters = () => {
        if (!iv) {
            return;
        }

        return {iv, aad, key, tag};
    };

    this.getDecryptionParameters = (encryptedData, authTagLength = 0) => {
        let aadLen = 0;
        if (encryptionIsAuthenticated) {
            authTagLength = 16;
            aadLen = keylen;
        }

        const tagOffset = encryptedData.length - authTagLength;
        tag = encryptedData.slice(tagOffset, encryptedData.length);

        const aadOffset = tagOffset - aadLen;
        aad = encryptedData.slice(aadOffset, tagOffset);

        iv = encryptedData.slice(aadOffset - 16, aadOffset);
        data = encryptedData.slice(0, aadOffset - 16);

        return {iv, aad, tag, data};
    };

    this.generateEncryptionKey = () => {
        keylen = utils.getKeyLength(algorithm);
        return crypto.randomBytes(keylen);
    };
}

module.exports = PskEncryption;
}).call(this,require("buffer").Buffer)

},{"./utils/cryptoUtils":"D:\\work\\privatesky\\modules\\pskcrypto\\lib\\utils\\cryptoUtils.js","buffer":false,"crypto":false}],"D:\\work\\privatesky\\modules\\pskcrypto\\lib\\utils\\DuplexStream.js":[function(require,module,exports){
const stream = require('stream');
const util = require('util');

const Duplex = stream.Duplex;

function DuplexStream(options) {
	if (!(this instanceof DuplexStream)) {
		return new DuplexStream(options);
	}
	Duplex.call(this, options);
}
util.inherits(DuplexStream, Duplex);

DuplexStream.prototype._write = function (chunk, enc, cb) {
	this.push(chunk);
	cb();
};


DuplexStream.prototype._read = function (n) {

};

module.exports = DuplexStream;
},{"stream":false,"util":false}],"D:\\work\\privatesky\\modules\\pskcrypto\\lib\\utils\\cryptoUtils.js":[function(require,module,exports){
(function (Buffer){
const crypto = require('crypto');

const keySizes = [128, 192, 256];
const authenticationModes = ["ocb", "ccm", "gcm"];

function encode(buffer) {
	return buffer.toString('base64')
		.replace(/\+/g, '')
		.replace(/\//g, '')
		.replace(/=+$/, '');
}

function createPskHash(data, encoding) {
	const pskHash = new PskHash();
	pskHash.update(data);
	return pskHash.digest(encoding);
}

function PskHash() {
	const sha512 = crypto.createHash('sha512');
	const sha256 = crypto.createHash('sha256');

	function update(data) {
		sha512.update(data);
	}

	function digest(encoding) {
		sha256.update(sha512.digest());
		return sha256.digest(encoding);
	}

	return {
		update,
		digest
	}
}


function generateSalt(inputData, saltLen) {
	const hash = crypto.createHash('sha512');
	hash.update(inputData);
	const digest = Buffer.from(hash.digest('hex'), 'binary');

	return digest.slice(0, saltLen);
}

function encryptionIsAuthenticated(algorithm) {
	for (const mode of authenticationModes) {
		if (algorithm.includes(mode)) {
			return true;
		}
	}

	return false;
}

function getKeyLength(algorithm) {
	for (const len of keySizes) {
		if (algorithm.includes(len.toString())) {
			return len / 8;
		}
	}

	throw new Error("Invalid encryption algorithm.");
}

module.exports = {
	createPskHash,
	encode,
	generateSalt,
	PskHash,
	getKeyLength,
	encryptionIsAuthenticated
};


}).call(this,require("buffer").Buffer)

},{"buffer":false,"crypto":false}],"D:\\work\\privatesky\\modules\\pskcrypto\\lib\\utils\\isStream.js":[function(require,module,exports){
const stream = require('stream');


function isStream (obj) {
	return obj instanceof stream.Stream || obj instanceof stream.Duplex;
}


function isReadable (obj) {
	return isStream(obj) && typeof obj._read === 'function' && typeof obj._readableState === 'object'
}


function isWritable (obj) {
	return isStream(obj) && typeof obj._write === 'function' && typeof obj._writableState === 'object'
}


function isDuplex (obj) {
	return isReadable(obj) && isWritable(obj)
}


module.exports            = isStream;
module.exports.isReadable = isReadable;
module.exports.isWritable = isWritable;
module.exports.isDuplex   = isDuplex;
},{"stream":false}],"D:\\work\\privatesky\\modules\\pskcrypto\\signsensusDS\\ssutil.js":[function(require,module,exports){
/*
 SignSens helper functions
 */
const crypto = require('crypto');

exports.wipeOutsidePayload = function wipeOutsidePayload(hashStringHexa, pos, size){
    var result;
    var sz = hashStringHexa.length;

    var end = (pos + size) % sz;

    if(pos < end){
        result = '0'.repeat(pos) +  hashStringHexa.substring(pos, end) + '0'.repeat(sz - end);
    }
    else {
        result = hashStringHexa.substring(0, end) + '0'.repeat(pos - end) + hashStringHexa.substring(pos, sz);
    }
    return result;
}



exports.extractPayload = function extractPayload(hashStringHexa, pos, size){
    var result;

    var sz = hashStringHexa.length;
    var end = (pos + size) % sz;

    if( pos < end){
        result = hashStringHexa.substring(pos, pos + size);
    } else{

        if(0 != end){
            result = hashStringHexa.substring(0, end)
        }  else {
            result = "";
        }
        result += hashStringHexa.substring(pos, sz);
    }
    return result;
}



exports.fillPayload = function fillPayload(payload, pos, size){
    var sz = 64;
    var result = "";

    var end = (pos + size) % sz;

    if( pos < end){
        result = '0'.repeat(pos) + payload + '0'.repeat(sz - end);
    } else{
        result = payload.substring(0,end);
        result += '0'.repeat(pos - end);
        result += payload.substring(end);
    }
    return result;
}



exports.generatePosHashXTimes = function generatePosHashXTimes(buffer, pos, size, count){ //generate positional hash
    var result  = buffer.toString("hex");

    /*if(pos != -1 )
        result[pos] = 0; */

    for(var i = 0; i < count; i++){
        var hash = crypto.createHash('sha256');
        result = exports.wipeOutsidePayload(result, pos, size);
        hash.update(result);
        result = hash.digest('hex');
    }
    return exports.wipeOutsidePayload(result, pos, size);
}

exports.hashStringArray = function (counter, arr, payloadSize){

    const hash = crypto.createHash('sha256');
    var result = counter.toString(16);

    for(var i = 0 ; i < 64; i++){
        result += exports.extractPayload(arr[i],i, payloadSize);
    }

    hash.update(result);
    var result = hash.digest('hex');
    return result;
}






function dumpMember(obj){
    var type = Array.isArray(obj) ? "array" : typeof obj;
    if(obj === null){
        return "null";
    }
    if(obj === undefined){
        return "undefined";
    }

    switch(type){
        case "number":
        case "string":return obj.toString(); break;
        case "object": return exports.dumpObjectForHashing(obj); break;
        case "boolean": return  obj? "true": "false"; break;
        case "array":
            var result = "";
            for(var i=0; i < obj.length; i++){
                result += exports.dumpObjectForHashing(obj[i]);
            }
            return result;
            break;
        default:
            throw new Error("Type " +  type + " cannot be cryptographically digested");
    }

}


exports.dumpObjectForHashing = function(obj){
    var result = "";

    if(obj === null){
        return "null";
    }
    if(obj === undefined){
        return "undefined";
    }

    var basicTypes = {
        "array"     : true,
        "number"    : true,
        "boolean"   : true,
        "string"    : true,
        "object"    : false
    }

    var type = Array.isArray(obj) ? "array" : typeof obj;
    if( basicTypes[type]){
        return dumpMember(obj);
    }

    var keys = Object.keys(obj);
    keys.sort();


    for(var i=0; i < keys.length; i++){
        result += dumpMember(keys[i]);
        result += dumpMember(obj[keys[i]]);
    }

    return result;
}


exports.hashValues  = function (values){
    const hash = crypto.createHash('sha256');
    var result = exports.dumpObjectForHashing(values);
    hash.update(result);
    return hash.digest('hex');
};

exports.getJSONFromSignature = function getJSONFromSignature(signature, size){
    var result = {
        proof:[]
    };
    var a = signature.split(":");
    result.agent        = a[0];
    result.counter      =  parseInt(a[1], "hex");
    result.nextPublic   =  a[2];

    var proof = a[3]


    if(proof.length/size != 64) {
        throw new Error("Invalid signature " + proof);
    }

    for(var i = 0; i < 64; i++){
        result.proof.push(exports.fillPayload(proof.substring(i * size,(i+1) * size ), i, size))
    }

    return result;
}

exports.createSignature = function (agent,counter, nextPublic, arr, size){
    var result = "";

    for(var i = 0; i < arr.length; i++){
        result += exports.extractPayload(arr[i], i , size);
    }

    return agent + ":" + counter + ":" + nextPublic + ":" + result;
}
},{"crypto":false}],"D:\\work\\privatesky\\modules\\swarmutils\\lib\\Combos.js":[function(require,module,exports){
function product(args) {
    if(!args.length){
        return [ [] ];
    }
    var prod = product(args.slice(1)), r = [];
    args[0].forEach(function(x) {
        prod.forEach(function(p) {
            r.push([ x ].concat(p));
        });
    });
    return r;
}

function objectProduct(obj) {
    var keys = Object.keys(obj),
        values = keys.map(function(x) { return obj[x]; });

    return product(values).map(function(p) {
        var e = {};
        keys.forEach(function(k, n) { e[k] = p[n]; });
        return e;
    });
}

module.exports = objectProduct;
},{}],"D:\\work\\privatesky\\modules\\swarmutils\\lib\\OwM.js":[function(require,module,exports){
var meta = "meta";

function OwM(serialized){

    if(serialized){
        return OwM.prototype.convert(serialized);
    }

    Object.defineProperty(this, meta, {
        writable: false,
        enumerable: true,
        value: {}
    });

    Object.defineProperty(this, "setMeta", {
        writable: false,
        enumerable: false,
        configurable:false,
        value: function(prop, value){
            if(typeof prop == "object" && typeof value == "undefined"){
                for(var p in prop){
                    this[meta][p] = prop[p];
                }
                return prop;
            }
            this[meta][prop] = value;
            return value;
        }
    });

    Object.defineProperty(this, "getMeta", {
        writable: false,
        value: function(prop){
            return this[meta][prop];
        }
    });
}

function testOwMSerialization(obj){
    let res = false;

    if(obj){
        res = typeof obj[meta] != "undefined" && !(obj instanceof OwM);
    }

    return res;
}

OwM.prototype.convert = function(serialized){
    const owm = new OwM();

    for(var metaProp in serialized.meta){
        if(!testOwMSerialization(serialized[metaProp])) {
            owm.setMeta(metaProp, serialized.meta[metaProp]);
        }else{
            owm.setMeta(metaProp, OwM.prototype.convert(serialized.meta[metaProp]));
        }
    }

    for(var simpleProp in serialized){
        if(simpleProp === meta) {
            continue;
        }

        if(!testOwMSerialization(serialized[simpleProp])){
            owm[simpleProp] = serialized[simpleProp];
        }else{
            owm[simpleProp] = OwM.prototype.convert(serialized[simpleProp]);
        }
    }

    return owm;
};

OwM.prototype.getMetaFrom = function(obj, name){
    var res;
    if(!name){
        res = obj[meta];
    }else{
        res = obj[meta][name];
    }
    return res;
};

OwM.prototype.setMetaFor = function(obj, name, value){
    obj[meta][name] = value;
    return obj[meta][name];
};

module.exports = OwM;
},{}],"D:\\work\\privatesky\\modules\\swarmutils\\lib\\Queue.js":[function(require,module,exports){
function QueueElement(content) {
	this.content = content;
	this.next = null;
}

function Queue() {
	this.head = null;
	this.tail = null;
	this.length = 0;
	this.push = function (value) {
		const newElement = new QueueElement(value);
		if (!this.head) {
			this.head = newElement;
			this.tail = newElement;
		} else {
			this.tail.next = newElement;
			this.tail = newElement;
		}
		this.length++;
	};

	this.pop = function () {
		if (!this.head) {
			return null;
		}
		const headCopy = this.head;
		this.head = this.head.next;
		this.length--;

		//fix???????
		if(this.length === 0){
            this.tail = null;
		}

		return headCopy.content;
	};

	this.front = function () {
		return this.head ? this.head.content : undefined;
	};

	this.isEmpty = function () {
		return this.head === null;
	};

	this[Symbol.iterator] = function* () {
		let head = this.head;
		while(head !== null) {
			yield head.content;
			head = head.next;
		}
	}.bind(this);
}

Queue.prototype.toString = function () {
	let stringifiedQueue = '';
	let iterator = this.head;
	while (iterator) {
		stringifiedQueue += `${JSON.stringify(iterator.content)} `;
		iterator = iterator.next;
	}
	return stringifiedQueue;
};

Queue.prototype.inspect = Queue.prototype.toString;

module.exports = Queue;
},{}],"D:\\work\\privatesky\\modules\\swarmutils\\lib\\SwarmPacker.js":[function(require,module,exports){
const HEADER_SIZE_RESEARVED = 4;

const msgpack = require('@msgpack/msgpack');

function SwarmPacker(){
}

function copyStringtoArrayBuffer(str, buffer){
    if(typeof str !== "string"){
        throw new Error("Wrong param type received");
    }
    for(var i = 0; i < str.length; i++) {
        buffer[i] = str.charCodeAt(i);
    }
    return buffer;
}

function copyFromBuffer(target, source){
    for(let i=0; i<source.length; i++){
        target[i] = source[i];
    }
    return target;
}

let serializers = {};

SwarmPacker.registerSerializer = function(name, implementation){
    if(serializers[name]){
        throw new Error("Serializer name already exists");
    }
    serializers[name] = implementation;
};

function getSerializer(name){
    return serializers[name];
}

SwarmPacker.getSerializer = getSerializer;

Object.defineProperty(SwarmPacker.prototype, "JSON", {value: "json"});
Object.defineProperty(SwarmPacker.prototype, "MSGPACK", {value: "msgpack"});

SwarmPacker.registerSerializer(SwarmPacker.prototype.JSON, {
    serialize: JSON.stringify,
    deserialize: (serialization)=>{
        if(typeof serialization !== "string"){
            serialization = String.fromCharCode.apply(null, serialization);
        }
        return JSON.parse(serialization);
    },
    getType: ()=>{
        return SwarmPacker.prototype.JSON;
    }
});

SwarmPacker.registerSerializer(SwarmPacker.prototype.MSGPACK, {
    serialize: msgpack.encode,
    deserialize: msgpack.decode,
    getType: ()=>{
        return SwarmPacker.prototype.MSGPACK;
    }
});

SwarmPacker.pack = function(swarm, serializer){

    let jsonSerializer = getSerializer(SwarmPacker.prototype.JSON);
    if(typeof serializer === "undefined"){
        serializer = jsonSerializer;
    }

    let swarmSerialization = serializer.serialize(swarm);

    let header = {
        command: swarm.getMeta("command"),
        swarmId : swarm.getMeta("swarmId"),
        swarmTypeName: swarm.getMeta("swarmTypeName"),
        swarmTarget: swarm.getMeta("target"),
        serializationType: serializer.getType()
    };

    header = serializer.serialize(header);

    if(header.length >= Math.pow(2, 32)){
        throw new Error("Swarm serialization too big.");
    }

    //arraybuffer construction
    let size = HEADER_SIZE_RESEARVED + header.length + swarmSerialization.length;
    let pack = new ArrayBuffer(size);

    let sizeHeaderView = new DataView(pack, 0);
    sizeHeaderView.setUint32(0, header.length);

    let headerView = new Uint8Array(pack, HEADER_SIZE_RESEARVED);
    copyStringtoArrayBuffer(header, headerView);

    let serializationView = new Uint8Array(pack, HEADER_SIZE_RESEARVED+header.length);
    if(typeof swarmSerialization === "string"){
        copyStringtoArrayBuffer(swarmSerialization, serializationView);
    }else{
        copyFromBuffer(serializationView, swarmSerialization);
    }

    return pack;
};

SwarmPacker.unpack = function(pack){
    let jsonSerialiser = SwarmPacker.getSerializer(SwarmPacker.prototype.JSON);
    let headerSerialization = getHeaderSerializationFromPack(pack);
    let header = jsonSerialiser.deserialize(headerSerialization);

    let serializer = SwarmPacker.getSerializer(header.serializationType);
    let messageView = new Uint8Array(pack, HEADER_SIZE_RESEARVED+headerSerialization.length);

    let swarm = serializer.deserialize(messageView);
    return swarm;
};

function getHeaderSerializationFromPack(pack){
    let headerSize = new DataView(pack).getUint32(0);

    let headerView = new Uint8Array(pack, HEADER_SIZE_RESEARVED, headerSize);
    return headerView;
}

SwarmPacker.getHeader = function(pack){
    let jsonSerialiser = SwarmPacker.getSerializer(SwarmPacker.prototype.JSON);
    let header = jsonSerialiser.deserialize(getHeaderSerializationFromPack(pack));

    return header;
};
module.exports = SwarmPacker;
},{"@msgpack/msgpack":"@msgpack/msgpack"}],"D:\\work\\privatesky\\modules\\swarmutils\\lib\\TaskCounter.js":[function(require,module,exports){

function TaskCounter(finalCallback) {
	let results = [];
	let errors = [];

	let started = 0;

	function decrement(err, res) {
		if(err) {
			errors.push(err);
		}

		if(arguments.length > 2) {
			arguments[0] = undefined;
			res = arguments;
		}

		if(typeof res !== "undefined") {
			results.push(res);
		}

		if(--started <= 0) {
            return callCallback();
		}
	}

	function increment(amount = 1) {
		started += amount;
	}

	function callCallback() {
	    if(errors && errors.length === 0) {
	        errors = undefined;
        }

	    if(results && results.length === 0) {
	        results = undefined;
        }

        finalCallback(errors, results);
    }

	return {
		increment,
		decrement
	};
}

module.exports = TaskCounter;
},{}],"D:\\work\\privatesky\\modules\\swarmutils\\lib\\beesHealer.js":[function(require,module,exports){
const OwM = require("./OwM");

/*
    Prepare the state of a swarm to be serialised
*/

exports.asJSON = function(valueObj, phaseName, args, callback){

        let valueObject = valueObj.valueOf();
        let res = new OwM();
        res.publicVars          = valueObject.publicVars;
        res.privateVars         = valueObject.privateVars;

        res.setMeta("COMMAND_ARGS",        OwM.prototype.getMetaFrom(valueObject, "COMMAND_ARGS"));
        res.setMeta("SecurityParadigm",        OwM.prototype.getMetaFrom(valueObject, "SecurityParadigm"));
        res.setMeta("swarmTypeName", OwM.prototype.getMetaFrom(valueObject, "swarmTypeName"));
        res.setMeta("swarmId",       OwM.prototype.getMetaFrom(valueObject, "swarmId"));
        res.setMeta("target",        OwM.prototype.getMetaFrom(valueObject, "target"));
        res.setMeta("homeSecurityContext",        OwM.prototype.getMetaFrom(valueObject, "homeSecurityContext"));
        res.setMeta("requestId",        OwM.prototype.getMetaFrom(valueObject, "requestId"));


        if(!phaseName){
            res.setMeta("command", "stored");
        } else {
            res.setMeta("phaseName", phaseName);
            res.setMeta("phaseId", $$.uidGenerator.safe_uuid());
            res.setMeta("args", args);
            res.setMeta("command", OwM.prototype.getMetaFrom(valueObject, "command") || "executeSwarmPhase");
        }

        res.setMeta("waitStack", valueObject.meta.waitStack); //TODO: think if is not better to be deep cloned and not referenced!!!

        if(callback){
            return callback(null, res);
        }
        //console.log("asJSON:", res, valueObject);
        return res;
};

exports.jsonToNative = function(serialisedValues, result){

    for(let v in serialisedValues.publicVars){
        result.publicVars[v] = serialisedValues.publicVars[v];

    };
    for(let l in serialisedValues.privateVars){
        result.privateVars[l] = serialisedValues.privateVars[l];
    };

    for(let i in OwM.prototype.getMetaFrom(serialisedValues)){
        OwM.prototype.setMetaFor(result, i, OwM.prototype.getMetaFrom(serialisedValues, i));
    };

};
},{"./OwM":"D:\\work\\privatesky\\modules\\swarmutils\\lib\\OwM.js"}],"D:\\work\\privatesky\\modules\\swarmutils\\lib\\pingpongFork.js":[function(require,module,exports){
const PING = "PING";
const PONG = "PONG";

module.exports.fork = function pingPongFork(modulePath, args, options){
    const child_process = require("child_process");
    const defaultStdio = ["inherit", "inherit", "inherit", "ipc"];

    if(!options){
        options = {stdio: defaultStdio};
    }else{
        if(typeof options.stdio === "undefined"){
            options.stdio = defaultStdio;
        }

        let stdio = options.stdio;
        if(stdio.length<3){
            for(let i=stdio.length; i<4; i++){
                stdio.push("inherit");
            }
            stdio.push("ipc");
        }
    }

    let child = child_process.fork(modulePath, args, options);

    child.on("message", (message)=>{
        if(message === PING){
            child.send(PONG);
        }
    });

    return child;
};

module.exports.enableLifeLine = function(timeout){

    if(typeof process.send === "undefined"){
        console.log("\"process.send\" not found. LifeLine mechanism disabled!");
        return;
    }

    let lastConfirmationTime;
    const interval = timeout || 2000;

    // this is needed because new Date().getTime() has reduced precision to mitigate timer based attacks
    // for more information see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
    const roundingError = 101;

    function sendPing(){
        try {
            process.send(PING);
        } catch (e) {
            console.log('Parent is not available, shutting down');
            exit(1)
        }
    }

    process.on("message", function (message){
        if(message === PONG){
            lastConfirmationTime = new Date().getTime();
        }
    });

    function exit(code){
        setTimeout(()=>{
            process.exit(code);
        }, 0);
    }

    const exceptionEvents = ["SIGINT", "SIGUSR1", "SIGUSR2", "uncaughtException", "SIGTERM", "SIGHUP"];
    let killingSignal = false;
    for(let i=0; i<exceptionEvents.length; i++){
        process.on(exceptionEvents[i], (event, code)=>{
            killingSignal = true;
            clearInterval(timeoutInterval);
            console.log(`Caught event type [${exceptionEvents[i]}]. Shutting down...`, code, event);
            exit(code);
        });
    }

    const timeoutInterval = setInterval(function(){
        const currentTime = new Date().getTime();

        if(typeof lastConfirmationTime === "undefined" || currentTime - lastConfirmationTime < interval + roundingError && !killingSignal){
            sendPing();
        }else{
            console.log("Parent process did not answer. Shutting down...", process.argv, killingSignal);
            exit(1);
        }
    }, interval);
};
},{"child_process":false}],"D:\\work\\privatesky\\modules\\swarmutils\\lib\\pskconsole.js":[function(require,module,exports){
var commands = {};
var commands_help = {};

//global function addCommand
addCommand = function addCommand(verb, adverbe, funct, helpLine){
    var cmdId;
    if(!helpLine){
        helpLine = " ";
    } else {
        helpLine = " " + helpLine;
    }
    if(adverbe){
        cmdId = verb + " " +  adverbe;
        helpLine = verb + " " +  adverbe + helpLine;
    } else {
        cmdId = verb;
        helpLine = verb + helpLine;
    }
    commands[cmdId] = funct;
        commands_help[cmdId] = helpLine;
};

function doHelp(){
    console.log("List of commands:");
    for(var l in commands_help){
        console.log("\t", commands_help[l]);
    }
}

addCommand("-h", null, doHelp, "\t\t\t\t\t\t |just print the help");
addCommand("/?", null, doHelp, "\t\t\t\t\t\t |just print the help");
addCommand("help", null, doHelp, "\t\t\t\t\t\t |just print the help");


function runCommand(){
  var argv = Object.assign([], process.argv);
  var cmdId = null;
  var cmd = null;
  argv.shift();
  argv.shift();

  if(argv.length >=1){
      cmdId = argv[0];
      cmd = commands[cmdId];
      argv.shift();
  }


  if(!cmd && argv.length >=1){
      cmdId = cmdId + " " + argv[0];
      cmd = commands[cmdId];
      argv.shift();
  }

  if(!cmd){
    if(cmdId){
        console.log("Unknown command: ", cmdId);
    }
    cmd = doHelp;
  }

  cmd.apply(null,argv);

}

module.exports = {
    runCommand
};


},{}],"D:\\work\\privatesky\\modules\\swarmutils\\lib\\safe-uuid.js":[function(require,module,exports){

function encode(buffer) {
    return buffer.toString('base64')
        .replace(/\+/g, '')
        .replace(/\//g, '')
        .replace(/=+$/, '');
};

function stampWithTime(buf, salt, msalt){
    if(!salt){
        salt = 1;
    }
    if(!msalt){
        msalt = 1;
    }
    var date = new Date;
    var ct = Math.floor(date.getTime() / salt);
    var counter = 0;
    while(ct > 0 ){
        //console.log("Counter", counter, ct);
        buf[counter*msalt] = Math.floor(ct % 256);
        ct = Math.floor(ct / 256);
        counter++;
    }
}

/*
    The uid contains around 256 bits of randomness and are unique at the level of seconds. This UUID should by cryptographically safe (can not be guessed)

    We generate a safe UID that is guaranteed unique (by usage of a PRNG to geneate 256 bits) and time stamping with the number of seconds at the moment when is generated
    This method should be safe to use at the level of very large distributed systems.
    The UUID is stamped with time (seconds): does it open a way to guess the UUID? It depends how safe is "crypto" PRNG, but it should be no problem...

 */

var generateUid = null;


exports.init = function(externalGenerator){
    generateUid = externalGenerator.generateUid;
    return module.exports;
};

exports.safe_uuid = function() {
    var buf = generateUid(32);
    stampWithTime(buf, 1000, 3);
    return encode(buf);
};



/*
    Try to generate a small UID that is unique against chance in the same millisecond second and in a specific context (eg in the same choreography execution)
    The id contains around 6*8 = 48  bits of randomness and are unique at the level of milliseconds
    This method is safe on a single computer but should be used with care otherwise
    This UUID is not cryptographically safe (can be guessed)
 */
exports.short_uuid = function(callback) {
    require('crypto').randomBytes(12, function (err, buf) {
        if (err) {
            callback(err);
            return;
        }
        stampWithTime(buf,1,2);
        callback(null, encode(buf));
    });
};
},{"crypto":false}],"D:\\work\\privatesky\\modules\\swarmutils\\lib\\uidGenerator.js":[function(require,module,exports){
(function (Buffer){
const crypto = require('crypto');
const Queue = require("./Queue");
var PSKBuffer = typeof $$ !== "undefined" && $$.PSKBuffer ? $$.PSKBuffer : Buffer;

function UidGenerator(minBuffers, buffersSize) {
    var buffers = new Queue();
    var lowLimit = .2;

    function fillBuffers(size) {
        //notifyObserver();
        const sz = size || minBuffers;
        if (buffers.length < Math.floor(minBuffers * lowLimit)) {
            for (var i = buffers.length; i < sz; i++) {
                generateOneBuffer(null);
            }
        }
    }

    fillBuffers();

    function generateOneBuffer(b) {
        if (!b) {
            b = PSKBuffer.alloc(0);
        }
        const sz = buffersSize - b.length;
        /*crypto.randomBytes(sz, function (err, res) {
            buffers.push(Buffer.concat([res, b]));
            notifyObserver();
        });*/
        buffers.push(PSKBuffer.concat([crypto.randomBytes(sz), b]));
        notifyObserver();
    }

    function extractN(n) {
        var sz = Math.floor(n / buffersSize);
        var ret = [];

        for (var i = 0; i < sz; i++) {
            ret.push(buffers.pop());
            setTimeout(generateOneBuffer, 1);
        }


        var remainder = n % buffersSize;
        if (remainder > 0) {
            var front = buffers.pop();
            ret.push(front.slice(0, remainder));
            //generateOneBuffer(front.slice(remainder));
            setTimeout(function () {
                generateOneBuffer(front.slice(remainder));
            }, 1);
        }

        //setTimeout(fillBuffers, 1);

        return Buffer.concat(ret);
    }

    var fillInProgress = false;

    this.generateUid = function (n) {
        var totalSize = buffers.length * buffersSize;
        if (n <= totalSize) {
            return extractN(n);
        } else {
            if (!fillInProgress) {
                fillInProgress = true;
                setTimeout(function () {
                    fillBuffers(Math.floor(minBuffers * 2.5));
                    fillInProgress = false;
                }, 1);
            }
            return crypto.randomBytes(n);
        }
    };

    var observer;
    this.registerObserver = function (obs) {
        if (observer) {
            console.error(new Error("One observer allowed!"));
        } else {
            if (typeof obs == "function") {
                observer = obs;
                //notifyObserver();
            }
        }
    };

    function notifyObserver() {
        if (observer) {
            var valueToReport = buffers.length * buffersSize;
            setTimeout(function () {
                observer(null, {"size": valueToReport});
            }, 10);
        }
    }
}

module.exports.createUidGenerator = function (minBuffers, bufferSize) {
    return new UidGenerator(minBuffers, bufferSize);
};

}).call(this,require("buffer").Buffer)

},{"./Queue":"D:\\work\\privatesky\\modules\\swarmutils\\lib\\Queue.js","buffer":false,"crypto":false}],"adler32":[function(require,module,exports){

"use strict";

var algorithm = require('./lib/algorithm');
var Hash = require('./lib/Hash');
var register = require('./lib/register');

exports.sum = algorithm.sum.bind(algorithm);
exports.roll = algorithm.roll.bind(algorithm);
exports.Hash = Hash;
exports.register = register;

},{"./lib/Hash":"D:\\work\\privatesky\\modules\\adler32\\lib\\Hash.js","./lib/algorithm":"D:\\work\\privatesky\\modules\\adler32\\lib\\algorithm.js","./lib/register":"D:\\work\\privatesky\\modules\\adler32\\lib\\register.js"}],"bar-fs-adapter":[function(require,module,exports){
module.exports.createFsAdapter = () => {
    const FsAdapter = require("./lib/FsAdapter");
    return new FsAdapter();
};
},{"./lib/FsAdapter":"D:\\work\\privatesky\\modules\\bar-fs-adapter\\lib\\FsAdapter.js"}],"bar":[function(require,module,exports){

const ArchiveConfigurator = require("./lib/ArchiveConfigurator");
const createFolderBrickStorage = require("./lib/FolderBrickStorage").createFolderBrickStorage;
const createFileBrickStorage = require("./lib/FileBrickStorage").createFileBrickStorage;

ArchiveConfigurator.prototype.registerStorageProvider("FolderBrickStorage", createFolderBrickStorage);
ArchiveConfigurator.prototype.registerStorageProvider("FileBrickStorage", createFileBrickStorage);

module.exports.ArchiveConfigurator = ArchiveConfigurator;
module.exports.createBrick = (config) => {
    const Brick = require("./lib/Brick");
    return new Brick(config);
};

module.exports.createArchive = (archiveConfigurator) => {
    const Archive = require("./lib/Archive");
    return new Archive(archiveConfigurator);
};
module.exports.createArchiveConfigurator = () => {
    return new ArchiveConfigurator();
};

module.exports.createBarMap = (header) => {
    const BarMap = require("./lib/FolderBarMap");
    return new BarMap(header);
};

module.exports.Seed = require('./lib/Seed');
module.exports.createFolderBrickStorage = createFolderBrickStorage;
module.exports.createFileBrickStorage = createFileBrickStorage;

},{"./lib/Archive":"D:\\work\\privatesky\\modules\\bar\\lib\\Archive.js","./lib/ArchiveConfigurator":"D:\\work\\privatesky\\modules\\bar\\lib\\ArchiveConfigurator.js","./lib/Brick":"D:\\work\\privatesky\\modules\\bar\\lib\\Brick.js","./lib/FileBrickStorage":"D:\\work\\privatesky\\modules\\bar\\lib\\FileBrickStorage.js","./lib/FolderBarMap":"D:\\work\\privatesky\\modules\\bar\\lib\\FolderBarMap.js","./lib/FolderBrickStorage":"D:\\work\\privatesky\\modules\\bar\\lib\\FolderBrickStorage.js","./lib/Seed":"D:\\work\\privatesky\\modules\\bar\\lib\\Seed.js"}],"dossier":[function(require,module,exports){
const se = require("swarm-engine");
se.initialise();

module.exports.load = function(seed, identity, callback){
    const pathName = "path";
    const path = require(pathName);
    const powerCord = new se.OuterThreadPowerCord(path.join(process.env.PSK_ROOT_INSTALATION_FOLDER, "psknode/bundles/threadBoot.js"), false, seed);

    let cord_identity;
    try{
        const crypto = require("pskcrypto");
        cord_identity = crypto.pskHash(seed, "hex");
        $$.swarmEngine.plug(cord_identity, powerCord);
    }catch(err){
        return callback(err);
    }

    const handler = {
        attachTo : $$.interactions.attachTo,
        startTransaction : function (transactionTypeName, methodName, ...args) {
            //todo: get identity from context somehow
            return $$.interactions.startSwarmAs(cord_identity, "transactionHandler", "start", identity, transactionTypeName, methodName, ...args);
        }
    };
    //todo implement a way to know when thread is ready
    setTimeout(()=>{
        callback(undefined, handler);
    }, 100);
};
},{"pskcrypto":"pskcrypto","swarm-engine":false}],"edfs-brick-storage":[function(require,module,exports){
module.exports.create = (brickTransportStrategyName) => {
    const EDFSBrickStorage = require("./EDFSBrickStorage");
    return new EDFSBrickStorage(brickTransportStrategyName)
};

},{"./EDFSBrickStorage":"D:\\work\\privatesky\\modules\\edfs-brick-storage\\EDFSBrickStorage.js"}],"edfs-middleware":[function(require,module,exports){
module.exports.getEDFSMiddleware = () => require("./lib/EDFSMiddleware");
module.exports.createEDFSClient = (url) => {
    const EDFSClient = require("./lib/EDFSClient");
    return new EDFSClient(url);
};


},{"./lib/EDFSClient":"D:\\work\\privatesky\\modules\\edfs-middleware\\lib\\EDFSClient.js","./lib/EDFSMiddleware":"D:\\work\\privatesky\\modules\\edfs-middleware\\lib\\EDFSMiddleware.js"}],"edfs":[function(require,module,exports){
require("./brickTransportStrategies/brickTransportStrategiesRegistry");
const constants = require("./moduleConstants");
module.exports = {
    attach(brickTransportStrategyName) {
        const EDFS = require("./lib/EDFS");
        return new EDFS(brickTransportStrategyName);
    },
    attachToEndpoint(endpoint) {
        //TODO:test endpoint against regex to determine transport strategy type
        //for now http will be used
        const transportStrategy = new this.HTTPBrickTransportStrategy(endpoint);
        const randomPart = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        const transportStrategyAlias = "seedBasedStrategy_"+randomPart;
        $$.brickTransportStrategiesRegistry.add(transportStrategyAlias, transportStrategy);
        return this.attach(transportStrategyAlias);
    },
    attachWithSeed(compactSeed) {
        const SEED = require("bar").Seed;
        const seed = new SEED(compactSeed);
        const transportStrategy = new this.HTTPBrickTransportStrategy(seed.getEndpoint());
        const transportStrategyAlias = "seedBasedStrategy";
        $$.brickTransportStrategiesRegistry.add(transportStrategyAlias, transportStrategy);
        return this.attach(transportStrategyAlias);
    },
    attachWithPin(pin, callback) {
        require("./seedCage").getSeed(pin, (err, seed) => {
            if (err) {
                return callback(err);
            }

            let edfs;
            try {
                edfs = this.attachWithSeed(seed);
            } catch (e) {
                return callback(e);
            }

            callback(undefined, edfs);
        });
    },
    checkForSeedCage(callback) {
        require("./seedCage").check(callback);
    },
    HTTPBrickTransportStrategy: require("./brickTransportStrategies/HTTPBrickTransportStrategy"),
    constants: constants
};


const or = require("overwrite-require");
const browserContexts = [or.constants.SERVICE_WORKER_ENVIRONMENT_TYPE];
if (browserContexts.indexOf($$.environmentType) !== -1) {
    module.exports.FetchBrickTransportStrategy = require("./brickTransportStrategies/FetchBrickTransportStrategy");
}




},{"./brickTransportStrategies/FetchBrickTransportStrategy":"D:\\work\\privatesky\\modules\\edfs\\brickTransportStrategies\\FetchBrickTransportStrategy.js","./brickTransportStrategies/HTTPBrickTransportStrategy":"D:\\work\\privatesky\\modules\\edfs\\brickTransportStrategies\\HTTPBrickTransportStrategy.js","./brickTransportStrategies/brickTransportStrategiesRegistry":"D:\\work\\privatesky\\modules\\edfs\\brickTransportStrategies\\brickTransportStrategiesRegistry.js","./lib/EDFS":"D:\\work\\privatesky\\modules\\edfs\\lib\\EDFS.js","./moduleConstants":"D:\\work\\privatesky\\modules\\edfs\\moduleConstants.js","./seedCage":"D:\\work\\privatesky\\modules\\edfs\\seedCage\\index.js","bar":"bar","overwrite-require":"overwrite-require"}],"overwrite-require":[function(require,module,exports){
(function (global){
/*
 require and $$.require are overwriting the node.js defaults in loading modules for increasing security, speed and making it work to the privatesky runtime build with browserify.
 The privatesky code for domains should work in node and browsers.
 */
function enableForEnvironment(envType){

    const moduleConstants = require("./moduleConstants");

    /**
     * Used to provide autocomplete for $$ variables
     * @classdesc Interface for $$ object
     *
     * @name $$
     * @class
     *
     */

    switch (envType) {
        case moduleConstants.BROWSER_ENVIRONMENT_TYPE :
            global = window;
            break;
        case moduleConstants.SERVICE_WORKER_ENVIRONMENT_TYPE:
            global = self;
            break;
    }

    if (typeof(global.$$) == "undefined") {
        /**
         * Used to provide autocomplete for $$ variables
         * @type {$$}
         */
        global.$$ = {};
    }

    if (typeof($$.__global) == "undefined") {
        $$.__global = {};
    }

    Object.defineProperty($$, "environmentType", {
        get: function(){
            return envType;
        },
        set: function (value) {
            throw Error("Environment type already set!");
        }
    });


    if (typeof($$.__global.requireLibrariesNames) == "undefined") {
        $$.__global.currentLibraryName = null;
        $$.__global.requireLibrariesNames = {};
    }


    if (typeof($$.__runtimeModules) == "undefined") {
        $$.__runtimeModules = {};
    }


    if (typeof(global.functionUndefined) == "undefined") {
        global.functionUndefined = function () {
            console.log("Called of an undefined function!!!!");
            throw new Error("Called of an undefined function");
        };
        if (typeof(global.webshimsRequire) == "undefined") {
            global.webshimsRequire = global.functionUndefined;
        }

        if (typeof(global.domainRequire) == "undefined") {
            global.domainRequire = global.functionUndefined;
        }

        if (typeof(global.pskruntimeRequire) == "undefined") {
            global.pskruntimeRequire = global.functionUndefined;
        }
    }

    const pastRequests = {};

    function preventRecursiveRequire(request) {
        if (pastRequests[request]) {
            const err = new Error("Preventing recursive require for " + request);
            err.type = "PSKIgnorableError";
            throw err;
        }

    }

    function disableRequire(request) {
        pastRequests[request] = true;
    }

    function enableRequire(request) {
        pastRequests[request] = false;
    }

    function requireFromCache(request) {
        const existingModule = $$.__runtimeModules[request];
        return existingModule;
    }

    function wrapStep(callbackName) {
        const callback = global[callbackName];

        if (callback === undefined) {
            return null;
        }

        if (callback === global.functionUndefined) {
            return null;
        }

        return function (request) {
            const result = callback(request);
            $$.__runtimeModules[request] = result;
            return result;
        }
    }


    function tryRequireSequence(originalRequire, request) {
        let arr;
        if (originalRequire) {
            arr = $$.__requireFunctionsChain.slice();
            arr.push(originalRequire);
        } else {
            arr = $$.__requireFunctionsChain;
        }

        preventRecursiveRequire(request);
        disableRequire(request);
        let result;
        const previousRequire = $$.__global.currentLibraryName;
        let previousRequireChanged = false;

        if (!previousRequire) {
            // console.log("Loading library for require", request);
            $$.__global.currentLibraryName = request;

            if (typeof $$.__global.requireLibrariesNames[request] == "undefined") {
                $$.__global.requireLibrariesNames[request] = {};
                //$$.__global.requireLibrariesDescriptions[request]   = {};
            }
            previousRequireChanged = true;
        }
        for (let i = 0; i < arr.length; i++) {
            const func = arr[i];
            try {

                if (func === global.functionUndefined) continue;
                result = func(request);

                if (result) {
                    break;
                }

            } catch (err) {
                if (err.type !== "PSKIgnorableError") {
                    $$.err("Require encountered an error while loading ", request, "\nCause:\n", err.stack);
                }
            }
        }

        if (!result) {
            $$.log("Failed to load module ", request, result);
        }

        enableRequire(request);
        if (previousRequireChanged) {
            //console.log("End loading library for require", request, $$.__global.requireLibrariesNames[request]);
            $$.__global.currentLibraryName = null;
        }
        return result;
    }

    function makeBrowserRequire(){
        console.log("Defining global require in browser");


        global.require = function (request) {

            ///*[requireFromCache, wrapStep(webshimsRequire), , wrapStep(pskruntimeRequire), wrapStep(domainRequire)*]
            return tryRequireSequence(null, request);
        }
    }

    function makeIsolateRequire(){
        // require should be provided when code is loaded in browserify
        const bundleRequire = require;

        $$.requireBundle('sandboxBase');
        // this should be set up by sandbox prior to
        const sandboxRequire = global.require;
        const cryptoModuleName = 'crypto';
        global.crypto = require(cryptoModuleName);

        function newLoader(request) {
            // console.log("newLoader:", request);
            //preventRecursiveRequire(request);
            const self = this;

            // console.log('trying to load ', request);

            function tryBundleRequire(...args) {
                //return $$.__originalRequire.apply(self,args);
                //return Module._load.apply(self,args)
                let res;
                try {
                    res = sandboxRequire.apply(self, args);
                } catch (err) {
                    if (err.code === "MODULE_NOT_FOUND") {
                        const p = path.join(process.cwd(), request);
                        res = sandboxRequire.apply(self, [p]);
                        request = p;
                    } else {
                        throw err;
                    }
                }
                return res;
            }

            let res;


            res = tryRequireSequence(tryBundleRequire, request);


            return res;
        }

        global.require = newLoader;
    }

    function makeNodeJSRequire(){
        const pathModuleName = 'path';
        const path = require(pathModuleName);
        const cryptoModuleName = 'crypto';
        const utilModuleName = 'util';
        $$.__runtimeModules["crypto"] = require(cryptoModuleName);
        $$.__runtimeModules["util"] = require(utilModuleName);

        const moduleModuleName = 'module';
        const Module = require(moduleModuleName);
        $$.__runtimeModules["module"] = Module;

        console.log("Redefining require for node");

        $$.__originalRequire = Module._load;
        const moduleOriginalRequire = Module.prototype.require;

        function newLoader(request) {
            // console.log("newLoader:", request);
            //preventRecursiveRequire(request);
            const self = this;

            function originalRequire(...args) {
                //return $$.__originalRequire.apply(self,args);
                //return Module._load.apply(self,args)
                let res;
                try {
                    res = moduleOriginalRequire.apply(self, args);
                } catch (err) {
                    if (err.code === "MODULE_NOT_FOUND") {
                        let pathOrName = request;
                        if(pathOrName.startsWith('/') || pathOrName.startsWith('./') || pathOrName.startsWith('../')){
                            pathOrName = path.join(process.cwd(), request);
                        }
                        res = moduleOriginalRequire.call(self, pathOrName);
                        request = pathOrName;
                    } else {
                        throw err;
                    }
                }
                return res;
            }

            function currentFolderRequire(request) {
                return
            }

            //[requireFromCache, wrapStep(pskruntimeRequire), wrapStep(domainRequire), originalRequire]
            return tryRequireSequence(originalRequire, request);
        }

        Module.prototype.require = newLoader;
        return newLoader;
    }

    require("./standardGlobalSymbols.js");

    if (typeof($$.require) == "undefined") {

        $$.__requireList = ["webshimsRequire"];
        $$.__requireFunctionsChain = [];

        $$.requireBundle = function (name) {
            name += "Require";
            $$.__requireList.push(name);
            const arr = [requireFromCache];
            $$.__requireList.forEach(function (item) {
                const callback = wrapStep(item);
                if (callback) {
                    arr.push(callback);
                }
            });

            $$.__requireFunctionsChain = arr;
        };

        $$.requireBundle("init");

        switch ($$.environmentType) {
            case moduleConstants.BROWSER_ENVIRONMENT_TYPE:
                makeBrowserRequire();
                $$.require = require;
                break;
            case moduleConstants.SERVICE_WORKER_ENVIRONMENT_TYPE:
                makeBrowserRequire();
                $$.require = require;
                break;
            case moduleConstants.ISOLATE_ENVIRONMENT_TYPE:
                makeIsolateRequire();
                $$.require = require;
                break;
            default:
               $$.require = makeNodeJSRequire();
        }

    }
};



module.exports = {
    enableForEnvironment,
    constants: require("./moduleConstants")
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./moduleConstants":"D:\\work\\privatesky\\modules\\overwrite-require\\moduleConstants.js","./standardGlobalSymbols.js":"D:\\work\\privatesky\\modules\\overwrite-require\\standardGlobalSymbols.js"}],"psk-http-client":[function(require,module,exports){
//to look nice the requireModule on Node
require("./lib/psk-abstract-client");
const or = require('overwrite-require');
if ($$.environmentType === or.constants.BROWSER_ENVIRONMENT_TYPE) {
	require("./lib/psk-browser-client");
} else {
	require("./lib/psk-node-client");
}
},{"./lib/psk-abstract-client":"D:\\work\\privatesky\\modules\\psk-http-client\\lib\\psk-abstract-client.js","./lib/psk-browser-client":"D:\\work\\privatesky\\modules\\psk-http-client\\lib\\psk-browser-client.js","./lib/psk-node-client":"D:\\work\\privatesky\\modules\\psk-http-client\\lib\\psk-node-client.js","overwrite-require":"overwrite-require"}],"pskcrypto":[function(require,module,exports){
const PskCrypto = require("./lib/PskCrypto");
const ssutil = require("./signsensusDS/ssutil");

module.exports = PskCrypto;

module.exports.hashValues = ssutil.hashValues;

module.exports.DuplexStream = require("./lib/utils/DuplexStream");

module.exports.isStream = require("./lib/utils/isStream");
},{"./lib/PskCrypto":"D:\\work\\privatesky\\modules\\pskcrypto\\lib\\PskCrypto.js","./lib/utils/DuplexStream":"D:\\work\\privatesky\\modules\\pskcrypto\\lib\\utils\\DuplexStream.js","./lib/utils/isStream":"D:\\work\\privatesky\\modules\\pskcrypto\\lib\\utils\\isStream.js","./signsensusDS/ssutil":"D:\\work\\privatesky\\modules\\pskcrypto\\signsensusDS\\ssutil.js"}],"pskdomain":[function(require,module,exports){
(function (__dirname){
function createConstitutionFromSources(sources, options, callback) {
    const child_process = require('child_process');
    const path = require('path');
    const fs = require('fs');

    let pskBuildPath = path.resolve(path.join(__dirname, '../../psknode/bin/scripts/pskbuild.js'));
    if(typeof process.env.PSK_ROOT_INSTALATION_FOLDER !== "undefined"){
        pskBuildPath = path.resolve(path.join(process.env.PSK_ROOT_INSTALATION_FOLDER, 'psknode/bin/scripts/pskbuild.js'));
    }

    let internalOptions = {
        constitutionName: 'domain',
        outputFolder: null,
        cleanupTmpDir: true
    };

    if (typeof sources === 'string') {
        sources = [sources];
    }

    if (typeof options === 'function') {
        callback = options;
    } else if (typeof options === 'string') {
        internalOptions.outputFolder = options;
    } else if (typeof options === 'object') {
        Object.assign(internalOptions, options);
    }

    let sourcesNames = [];
    let sourcesPaths = [];

    if (sources && sources.length && sources.length > 0) {
        sourcesNames = sources.map(source => path.basename(source));
        sourcesPaths = sources.map(source => path.dirname(source));
    }

    sourcesNames = sourcesNames.join(',');
    sourcesPaths = sourcesPaths.join(',');

    const projectMap = {
        [internalOptions.constitutionName]: {"deps": sourcesNames, "autoLoad": true},
    };

    getTmpDir('PSK_DOMAIN-', (err, tmpFolder) => {
        if (err) {
            return callback(err);
        }

        const projectMapPath = path.join(tmpFolder, 'projectMap.json');
        fs.writeFile(projectMapPath, JSON.stringify(projectMap), 'utf8', (err) => {
            if (err) {
                return callback(err);
            }

            let outputFolder = null;

            if (internalOptions.outputFolder) {
                outputFolder = internalOptions.outputFolder;
            } else {
                internalOptions.cleanupTmpDir = false;
                outputFolder = tmpFolder;
            }

            child_process.exec(`node ${pskBuildPath} --projectMap=${projectMapPath} --source=${sourcesPaths} --output=${outputFolder}`, (err) => {
                if (err) {
                    return callback(err);
                }

                callback(undefined, path.join(outputFolder, `${internalOptions.constitutionName}.js`));

                if (internalOptions.cleanupTmpDir) {
                    fs.rmdir(tmpFolder, {recursive: true}, (err) => {
                        if (err) {
                            console.warn(`Failed to delete temporary folder "${tmpFolder}"`);
                        }
                    });
                }
            });
        });
    });
}

function deployConstitutionCSB(constitutionBundle, domainName, callback) {
    const EDFS = require('edfs');
    const brickStorageStrategyName = "http";


    if(typeof domainName=== "function" && typeof callback === "undefined"){
        callback = domainName;
        domainName = "";
    }

    const edfs = EDFS.attach(brickStorageStrategyName);

    edfs.createCSB((err, constitutionCSB) => {
        if (err) {
            return callback(err);
        }

        addFilesToArchive(constitutionBundle, constitutionCSB, (err)=>{
            if(err){
                return callback(err);
            }
            const lastHandler = willReturnSeed(constitutionCSB, callback);

            if(domainName !== ""){
                constitutionCSB.writeFile(EDFS.constants.CSB.DOMAIN_IDENTITY_FILE, domainName, lastHandler);
            }else{
                lastHandler();
            }
        });
    });
}

function deployConstitutionFolderCSB(constitutionFolder, domainName, callback) {
    const fs = require('fs');
    const path = require('path');

    fs.readdir(constitutionFolder, (err, files) => {
        if(err) {
            return callback(err);
        }

        files = files.map(file => path.join(constitutionFolder, file));
        deployConstitutionCSB(files, domainName, callback);
    });
}

function deployConstitutionBar(constitutionBundle, callback) {
    const EDFS = require('edfs');
    const brickStorageStrategyName = "http";

    const edfs = EDFS.attach(brickStorageStrategyName);
    const constitutionBAR = edfs.createBar();

    addFilesToArchive(constitutionBundle, constitutionBAR, willReturnSeed(constitutionBAR, callback));

}

function getConstitutionFilesFromBar(seed, callback) {
    const EDFS = require('edfs');
    const brickStorageStrategyName = "http";

    const edfs = EDFS.attach(brickStorageStrategyName);
    const constitutionBAR = edfs.loadBar(seed);

    getConstitutionFilesFrom(constitutionBAR, callback)
}

function getConstitutionFilesFromCSB(seed, callback) {
    loadCSB(seed, (err, constitutionCSB) => {
        if (err) {
            return callback(err);
        }

        getConstitutionFilesFrom(constitutionCSB, callback);
    });
}

function ensureEnvironmentIsReady(edfsURL) {
    const EDFS = require('edfs');
    const brickStorageStrategyName = "http";

    if (!$$.securityContext) {
        $$.securityContext = require("psk-security-context").createSecurityContext();
    }

    const hasHttpStrategyRegistered = $$.brickTransportStrategiesRegistry.has(brickStorageStrategyName);

    if (!hasHttpStrategyRegistered) {
        $$.brickTransportStrategiesRegistry.add(brickStorageStrategyName, new EDFS.HTTPBrickTransportStrategy(edfsURL));
    }
}

function loadCSB(seed, callback) {
    const EDFS = require('edfs');
    const Seed = require('bar').Seed;
    const brickStorageStrategyName = "http";

    const seedObject = new Seed(seed);
    ensureEnvironmentIsReady(seedObject.getEndpoint());

    const edfs = EDFS.attach(brickStorageStrategyName);
    edfs.loadCSB(seed, callback);
}

function createCSB(callback) {
    const EDFS = require('edfs');
    const brickStorageStrategyName = "http";

    const edfs = EDFS.attach(brickStorageStrategyName);

    edfs.createCSB(callback);
}

/****************************** UTILITY FUNCTIONS ******************************/

function addFilesToArchive(files, archive, callback) {
    const EDFS = require('edfs');
    const path = require('path');
    const fs = require('fs');

    if (typeof files === 'string') {
        files = [files];
    }

    asyncReduce(files, __addFile, null, callback);

    function __addFile(_, filePath, callback) {
        // archive.addFile(filePath, `${EDFS.constants.CSB.CONSTITUTION_FOLDER}/` + path.basename(filePath), callback);
        fs.stat(filePath, (err, stats) => {
            if(err) {
                return callback(err);
            }

            if(stats.isDirectory()) {
                 fs.readdir(filePath, (err, fileNames) => {
                     const filePaths = fileNames.map(fileName => path.join(filePath, fileName));
                     asyncReduce(filePaths, __addFile, null, callback);
                 });
                // archive.addFolder(filePath, EDFS.constants.CSB.CONSTITUTION_FOLDER, callback);
            } else {
                archive.addFile(filePath, `${EDFS.constants.CSB.CONSTITUTION_FOLDER}/` + path.basename(filePath), callback);
            }
        });
    }
}

function getConstitutionFrom(csb, cb){
    getConstitutionFilesFrom(csb, cb);
}


function getConstitutionFilesFrom(archive, specifiedFiles, callback) {
    const EDFS = require('edfs');
    const path = require('path');

    if(typeof specifiedFiles === 'function') {
        callback = specifiedFiles;
        specifiedFiles = undefined;
    }

    if(typeof specifiedFiles === "undefined") {
        specifiedFiles = []; // if specifiedFiles is not given as parameter or is explicitly given as undefined
    }

    archive.listFiles(EDFS.constants.CSB.CONSTITUTION_FOLDER, (err, files) => {
        if (err) {
            return callback(err);
        }

        if(specifiedFiles.length > 0) {
            files = files.filter(file => specifiedFiles.includes(path.basename(file)));
        }

        asyncReduce(files, __readFile, {}, callback);
    });


    function __readFile(pastFilesContent, filePath, callback) {
        archive.readFile(filePath, (err, fileContent) => {
            if (err) {
                return callback(err);
            }

            pastFilesContent[path.basename(filePath)] = fileContent;
            callback();
        });
    }
}

function willReturnSeed(archive, callback) {
    return function (err) {
        if (err) {
            return callback(err);
        }

        const seed = archive.getSeed();
        callback(undefined, seed);
    }
}

/**
 * Traverse an array and collects result from calling handler on each array of the element
 * It's similar to Array.prototype.reduce but it's asynchronous
 */
function asyncReduce(array, handler, currentValue, callback) {
    function __callNext(index = 0) {
        if (index >= array.length) {
            return callback(undefined, currentValue);
        }

        handler(currentValue, array[index], (err, newCurrentValue) => {
            if (err) {
                return callback(err);
            }

            if (newCurrentValue) {
                currentValue = newCurrentValue;
            }

            __callNext(index + 1);
        })
    }

    __callNext();
}

function getTmpDir(dirNamePrefix, callback) {
    const path = require('path');
    const os = require('os');
    const fs = require('fs');

    const tmpFolder = os.tmpdir();
    fs.mkdtemp(path.join(tmpFolder, dirNamePrefix), callback);
}

module.exports = {
    createConstitutionFromSources,
    deployConstitutionBar,
    deployConstitutionCSB,
    deployConstitutionFolderCSB,
    ensureEnvironmentIsReady,
    getConstitutionFilesFromBar,
    getConstitutionFilesFromCSB,
    loadCSB,
    createCSB,
    getConstitutionFrom,
    getConstitutionFilesFrom
};

}).call(this,"/modules/pskdomain")

},{"bar":"bar","child_process":false,"edfs":"edfs","fs":false,"os":false,"path":false,"psk-security-context":false}],"swarmutils":[function(require,module,exports){
(function (global){
module.exports.OwM = require("./lib/OwM");
module.exports.beesHealer = require("./lib/beesHealer");

const uidGenerator = require("./lib/uidGenerator").createUidGenerator(200, 32);

module.exports.safe_uuid = require("./lib/safe-uuid").init(uidGenerator);

module.exports.Queue = require("./lib/Queue");
module.exports.combos = require("./lib/Combos");

module.exports.uidGenerator = uidGenerator;
module.exports.generateUid = uidGenerator.generateUid;
module.exports.TaskCounter = require("./lib/TaskCounter");
module.exports.SwarmPacker = require("./lib/SwarmPacker");

module.exports.createPskConsole = function () {
  return require('./lib/pskconsole');
};

module.exports.pingPongFork = require('./lib/pingpongFork');


if(typeof global.$$ == "undefined"){
  global.$$ = {};
}

if(typeof global.$$.uidGenerator == "undefined"){
    $$.uidGenerator = module.exports.safe_uuid;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./lib/Combos":"D:\\work\\privatesky\\modules\\swarmutils\\lib\\Combos.js","./lib/OwM":"D:\\work\\privatesky\\modules\\swarmutils\\lib\\OwM.js","./lib/Queue":"D:\\work\\privatesky\\modules\\swarmutils\\lib\\Queue.js","./lib/SwarmPacker":"D:\\work\\privatesky\\modules\\swarmutils\\lib\\SwarmPacker.js","./lib/TaskCounter":"D:\\work\\privatesky\\modules\\swarmutils\\lib\\TaskCounter.js","./lib/beesHealer":"D:\\work\\privatesky\\modules\\swarmutils\\lib\\beesHealer.js","./lib/pingpongFork":"D:\\work\\privatesky\\modules\\swarmutils\\lib\\pingpongFork.js","./lib/pskconsole":"D:\\work\\privatesky\\modules\\swarmutils\\lib\\pskconsole.js","./lib/safe-uuid":"D:\\work\\privatesky\\modules\\swarmutils\\lib\\safe-uuid.js","./lib/uidGenerator":"D:\\work\\privatesky\\modules\\swarmutils\\lib\\uidGenerator.js"}]},{},["D:\\work\\privatesky\\builds\\tmp\\edfsBar_intermediar.js"])