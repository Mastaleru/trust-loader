if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,r,f)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const o={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return a;case"module":return o;default:return e(s)}})).then(e=>{const s=f(...e);return a.default||(a.default=s),a})}))}}define("./swPwa.js",["./workbox-c7e07407"],(function(e){"use strict";e.skipWaiting(),e.precacheAndRoute([{url:"assets/app-loader/app-loader.html",revision:"127efd41593e1b75bb0cafd1a37e7892"},{url:"assets/app-loader/app-loader.js",revision:"f6a2166c8959b3992764761e8bc7a449"},{url:"assets/css/app.css",revision:"805aeb4fd089ece9fec3fe9b398eb56a"},{url:"assets/css/blue-fluorite.css",revision:"7c7c0f96e486ef90d9063aaf6414c650"},{url:"assets/css/bootstrap.min.css",revision:"8fe70898895271ddc62823321011273a"},{url:"assets/css/nunito.css",revision:"698b44410f8c6fe92c697b4842982775"},{url:"assets/css/open-sans/OpenSans-Light.ttf",revision:"2d0bdc8df10dee036ca3bedf6f3647c6"},{url:"assets/css/open-sans/OpenSans-SemiBold.ttf",revision:"ba5cde21eeea0d57ab7efefc99596cce"},{url:"assets/css/stepper.min.css",revision:"e7ee6adba607f0d0425605082e4bfcc5"},{url:"assets/fontawesome-free-5.12.1-web/css/all.min.css",revision:"7d9f20afcdab719e7babda515e964a44"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-brands-400.eot",revision:"57dcda6f368ea90179f75cbdae96c263"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-brands-400.svg",revision:"39dc51162f292b85ec8f701292e6a5f4"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-brands-400.ttf",revision:"9ec698d1a597bff5df337094b71ddaaf"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-brands-400.woff",revision:"b564da88bbf0c4aa446fa19653713cd1"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-brands-400.woff2",revision:"067595ad77ecc0db9c81c8905a7eef32"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-regular-400.eot",revision:"3351f435b3c9037fd88aeb04dc1e43bc"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-regular-400.svg",revision:"dc2561f4401f40bd65bf2080b2ec5fde"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-regular-400.ttf",revision:"a0e3ac82940c1998c5977fd4bc1f5ef6"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-regular-400.woff",revision:"73cf49a2232c06c920b7a34e36bfb58c"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-regular-400.woff2",revision:"4165c2688309cbfb1b877caf8f75afb5"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-solid-900.eot",revision:"89e02bae13c9131c7468b1e729339ac1"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-solid-900.svg",revision:"7ed0b09414b0bf68b15ec4cfcb8a427d"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-solid-900.ttf",revision:"75f38a159982b6bd1704891332d95fa7"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-solid-900.woff",revision:"cdfec5cf5e9840889790bcf2c4042583"},{url:"assets/fontawesome-free-5.12.1-web/webfonts/fa-solid-900.woff2",revision:"55eb2a60e8181f0e68b558c991973bf0"},{url:"assets/images-pwa/apple_splash_1125.png",revision:"18a8c3b71a9f51cf29c558668b56003b"},{url:"assets/images-pwa/apple_splash_1242.png",revision:"f6962f07ff774da7251aa2b58c00e881"},{url:"assets/images-pwa/apple_splash_1536.png",revision:"2a564a0f8a96ff2616fff8dbf0a37d78"},{url:"assets/images-pwa/apple_splash_1668.png",revision:"f1c0372ae32c3d9850a073224158bd7f"},{url:"assets/images-pwa/apple_splash_2048.png",revision:"147e116cda7a3cef132920bc3c6e4839"},{url:"assets/images-pwa/apple_splash_640.png",revision:"72a08ce99e721791c3c4661319e5bb31"},{url:"assets/images-pwa/apple_splash_750.png",revision:"a3452b04c2261418d1fc7e5f2dc7b6de"},{url:"assets/images-pwa/apple-touch-icon.png",revision:"adaa7eaf8a85c549e637de3448fd42ae"},{url:"assets/images-pwa/icons-192.png",revision:"adaa7eaf8a85c549e637de3448fd42ae"},{url:"assets/images-pwa/icons-512.png",revision:"d21b9d493459cef3f4867113ef8163db"},{url:"assets/images-pwa/maskable_icon.png",revision:"6d059136471490068dafadc890d61663"},{url:"assets/images-pwa/touch-icon-ipad-retina.png",revision:"1a5be60d033b2435245261262343c003"},{url:"assets/images-pwa/touch-icon-ipad.png",revision:"aaca52c1d340b4e3d602f48f7bcaa3e7"},{url:"assets/images-pwa/touch-icon-iphone-retina.png",revision:"0245fbfdf64271e5e9c8dc28c593bf4d"},{url:"assets/images/background.jpg",revision:"f0c5a86d6b95b29c635e5342315e1776"},{url:"assets/images/login.png",revision:"6dcf13aa592e274ecfdecfa55b1369e5"},{url:"assets/js/stepper.min.js",revision:"3d54771a11777f3f883a51b261cea25b"},{url:"assets/pwa/pwa.css",revision:"853311e2789c6bc851e749b98d08446d"},{url:"assets/pwa/pwa.js",revision:"44d8c7ed0aff0e7701acb8624e6b6a08"},{url:"assets/pwa/save-to-home-screen-iphone.jpg",revision:"b29b58efc626a1a8559c6449f0c5802e"},{url:"assets/pwa/share-icon-iphone.jpg",revision:"54390e2c3d8ab90e9743eb72572e4dfb"},{url:"assets/pwa/workbox-window.prod.mjs",revision:"a41fb4eabe8eca15f2a2307b46e23088"},{url:"config-constants.js",revision:"9132feb0f079b1f0dfad2bd17f8149fe"},{url:"controllers/MainController.js",revision:"e7fd7f5e1bf56abe35b77f1fe957b958"},{url:"controllers/NewController.js",revision:"db3da8561f5677d61a727778a9f8ff6a"},{url:"controllers/RestoreController.js",revision:"2db058a06a2c5e682cc55b3a5cb8e062"},{url:"controllers/services/EventMiddleware.js",revision:"265f4d5ac9bb5717525386edbf0a64d2"},{url:"controllers/services/FileService.js",revision:"58146dc854d20af1817a06d1a096f2f3"},{url:"controllers/services/ScopedLocalStorage.js",revision:"2d27579a53f3abb7abb3ad867c223207"},{url:"controllers/services/SSAppRunner.js",revision:"02402b2bd414998df8c9d941aaddc393"},{url:"controllers/services/SWAgent.js",revision:"247d53e1a060cac4b5ffabf200f00c4f"},{url:"controllers/services/UIService.js",revision:"f008c7fd4c88f9fbc849e92365453d95"},{url:"controllers/services/WalletBuilderService.js",revision:"131bb55dd5fb4783f83df16d889404d2"},{url:"controllers/services/WalletService.js",revision:"4f731d3bb51ee9b99ac23cbff0c9b7e4"},{url:"index.html",revision:"cf374e67281b8a10d431dbecd942a023"},{url:"loader-config.js",revision:"102d28d1b8b381d17cb7aa693929d3dc"},{url:"new/index.html",revision:"a9546f99ba4bbe624a11bb06833cdd7c"},{url:"swLoader.js",revision:"f3ecca39b7a88b6b56b437b631c4640a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=swPwa.js.map
