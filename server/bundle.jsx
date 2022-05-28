/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: ./src/components/TitleBar.css
/* harmony default export */ const TitleBar = (__webpack_require__.p + "60ade5ebee1c5cd91d010d35af288889.css");
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: ./src/components/TitleBar.jsx



var TitleBar_TitleBar = function TitleBar() {
  return (0,react_namespaceObject.jsx)("div", {
    className: "Barra"
  }, (0,react_namespaceObject.jsx)("div", {
    className: "left"
  }, (0,react_namespaceObject.jsx)("button", {
    type: "button",
    className: "lines"
  }), (0,react_namespaceObject.jsx)("div", {
    className: "Logo"
  }), (0,react_namespaceObject.jsx)("div", {
    className: "Country"
  }, "GT")), (0,react_namespaceObject.jsx)("div", {
    className: "search"
  }, (0,react_namespaceObject.jsx)("input", {
    type: "text",
    placeholder: "Buscar"
  }), (0,react_namespaceObject.jsx)("button", {
    type: "button",
    className: "lupa-button"
  }, (0,react_namespaceObject.jsx)("div", {
    className: "lupa-image"
  })), (0,react_namespaceObject.jsx)("button", {
    type: "button",
    className: "micro-button"
  }, (0,react_namespaceObject.jsx)("div", {
    className: "micro-image"
  }))), (0,react_namespaceObject.jsx)("div", {
    className: "right"
  }, (0,react_namespaceObject.jsx)("div", {
    className: "camera"
  }), (0,react_namespaceObject.jsx)("div", {
    className: "box"
  }), (0,react_namespaceObject.jsx)("div", {
    className: "bell"
  }), (0,react_namespaceObject.jsx)("div", {
    className: "profile"
  })));
};

/* harmony default export */ const components_TitleBar = (TitleBar_TitleBar);
;// CONCATENATED MODULE: ./src/components/Menu.css
/* harmony default export */ const Menu = (__webpack_require__.p + "05abd8c9906e84158d4be98bf3c3a607.css");
;// CONCATENATED MODULE: ./src/Images/Inicio.svg
const Inicio_namespaceObject = __webpack_require__.p + "93a115ad1bf405bb5a42.svg";
;// CONCATENATED MODULE: ./src/Images/explorar.svg
const explorar_namespaceObject = __webpack_require__.p + "5c504f208a8707233f4d.svg";
;// CONCATENATED MODULE: ./src/Images/shorts.svg
const shorts_namespaceObject = __webpack_require__.p + "a3f5df6c0ce8a83c00a7.svg";
;// CONCATENATED MODULE: ./src/Images/suscripciones.svg
const suscripciones_namespaceObject = __webpack_require__.p + "cb570221a301acc0b18f.svg";
;// CONCATENATED MODULE: ./src/Images/Biblioteca.svg
const Biblioteca_namespaceObject = __webpack_require__.p + "94a019ed01187b33d7fb.svg";
;// CONCATENATED MODULE: ./src/Images/Historial.svg
const Historial_namespaceObject = __webpack_require__.p + "f34e330add1867766307.svg";
;// CONCATENATED MODULE: ./src/Images/Mis videos.svg
const Mis_videos_namespaceObject = __webpack_require__.p + "4c1efad5f2d1f97f9c2b.svg";
;// CONCATENATED MODULE: ./src/Images/tarde.svg
const tarde_namespaceObject = __webpack_require__.p + "1c96777886dc9cf593f6.svg";
;// CONCATENATED MODULE: ./src/Images/Videos que me gustan.svg
const Videos_que_me_gustan_namespaceObject = __webpack_require__.p + "b1fd3fb75241ad3b9072.svg";
;// CONCATENATED MODULE: ./src/Images/showmore.svg
const showmore_namespaceObject = __webpack_require__.p + "90ac8192eeb29e5c47f8.svg";
;// CONCATENATED MODULE: ./src/Images/BTC.jpg
const BTC_namespaceObject = __webpack_require__.p + "a7f27f28ec23fc4e4397.jpg";
;// CONCATENATED MODULE: ./src/Images/Chuy.jpg
const Chuy_namespaceObject = __webpack_require__.p + "00104d82a524bc77a9a3.jpg";
;// CONCATENATED MODULE: ./src/Images/enchufe.jpg
const enchufe_namespaceObject = __webpack_require__.p + "01e8461c8d43cb9e28b8.jpg";
;// CONCATENATED MODULE: ./src/Images/Sergio.jpg
const Sergio_namespaceObject = __webpack_require__.p + "c971e876f9674751c2a2.jpg";
;// CONCATENATED MODULE: ./src/Images/XN.jpg
const XN_namespaceObject = __webpack_require__.p + "7a7c509d08dde236bfe7.jpg";
;// CONCATENATED MODULE: ./src/Images/Xifra.jpg
const Xifra_namespaceObject = __webpack_require__.p + "03fd7ab0b822198f39fa.jpg";
;// CONCATENATED MODULE: ./src/Images/Grefg.jpg
const Grefg_namespaceObject = __webpack_require__.p + "2ab14b6756ad54b0c84a.jpg";
;// CONCATENATED MODULE: ./src/Images/YTP.svg
const YTP_namespaceObject = __webpack_require__.p + "56a74c51b187867e4bf1.svg";
;// CONCATENATED MODULE: ./src/Images/videogames.svg
const videogames_namespaceObject = __webpack_require__.p + "52b3e2b5fbc297ce4b95.svg";
;// CONCATENATED MODULE: ./src/Images/directo.svg
const directo_namespaceObject = __webpack_require__.p + "ec4d1fdc4c8454fa4e66.svg";
;// CONCATENATED MODULE: ./src/Images/learn.svg
const learn_namespaceObject = __webpack_require__.p + "20a41e1d8752207ec8e5.svg";
;// CONCATENATED MODULE: ./src/Images/sport.svg
const sport_namespaceObject = __webpack_require__.p + "378745e485e1343fef16.svg";
;// CONCATENATED MODULE: ./src/Images/config.svg
const config_namespaceObject = __webpack_require__.p + "d89af1898025c9d40f00.svg";
;// CONCATENATED MODULE: ./src/Images/historiald.svg
const historiald_namespaceObject = __webpack_require__.p + "52a46aa9fcc0ed01a0dc.svg";
;// CONCATENATED MODULE: ./src/Images/Ayuda.svg
const Ayuda_namespaceObject = __webpack_require__.p + "beda4c02dd61b6223ffd.svg";
;// CONCATENATED MODULE: ./src/Images/sugerencia.svg
const sugerencia_namespaceObject = __webpack_require__.p + "1fbe88f02606a01f8bd6.svg";
;// CONCATENATED MODULE: ./src/components/Menu.jsx




























var menu = [['Explorar', explorar_namespaceObject], ['Shorts', shorts_namespaceObject], ['Suscripciones', suscripciones_namespaceObject]];
var menu2 = [['Biblioteca', Biblioteca_namespaceObject], ['Historial', Historial_namespaceObject], ['Mis vídeos', Mis_videos_namespaceObject], ['Ver más tarde', tarde_namespaceObject], ['Vídeos que me gustan', Videos_que_me_gustan_namespaceObject], ['Mostrar más', showmore_namespaceObject]];
var Suscripciones = [['Bitcoin al dia', BTC_namespaceObject], ['Chuy Almada', Chuy_namespaceObject], ['enchufetv', enchufe_namespaceObject], ['Sergio Peñuñuri', Sergio_namespaceObject], ['TheGrefg', Grefg_namespaceObject], ['Xifra Lifestyle', Xifra_namespaceObject], ['Xifra Nation', XN_namespaceObject]];
var moreYT = [['YouTube Premium', YTP_namespaceObject], ['Videojuegos', videogames_namespaceObject], ['Directo', directo_namespaceObject], ['Aprendizaje', learn_namespaceObject], ['Deportes', sport_namespaceObject]];
var extras = [['Configuración', config_namespaceObject], ['Historial de denuncias', historiald_namespaceObject], ['Ayuda', Ayuda_namespaceObject], ['Enviar sugerencias', sugerencia_namespaceObject]];

var Menu_Menu = function Menu() {
  return (0,react_namespaceObject.jsx)("div", {
    className: "Menu-Container"
  }, (0,react_namespaceObject.jsx)("div", {
    className: "Boton-Container"
  }, (0,react_namespaceObject.jsx)("div", {
    className: "Icon-container",
    style: {
      backgroundImage: "url(".concat(Inicio_namespaceObject, ")")
    }
  }), (0,react_namespaceObject.jsx)("text", null, "Inicio")), menu.map(function (obj) {
    return (0,react_namespaceObject.jsx)("div", {
      key: obj[0],
      className: "Boton1-Container"
    }, (0,react_namespaceObject.jsx)("div", {
      className: "Icon-container",
      style: {
        backgroundImage: "url(".concat(obj[1], ")")
      }
    }), (0,react_namespaceObject.jsx)("text", null, obj[0]));
  }), (0,react_namespaceObject.jsx)("hr", null), menu2.map(function (obj) {
    return (0,react_namespaceObject.jsx)("div", {
      key: obj[0],
      className: "Boton1-Container"
    }, (0,react_namespaceObject.jsx)("div", {
      className: "Icon-container",
      style: {
        backgroundImage: "url(".concat(obj[1], ")")
      }
    }), (0,react_namespaceObject.jsx)("text", null, obj[0]));
  }), (0,react_namespaceObject.jsx)("hr", null), (0,react_namespaceObject.jsx)("text", {
    className: "titulo"
  }, "SUSCRIPCIONES"), Suscripciones.map(function (obj) {
    return (0,react_namespaceObject.jsx)("div", {
      key: obj[0],
      className: "Boton1-Container"
    }, (0,react_namespaceObject.jsx)("div", {
      className: "perfil-container",
      style: {
        backgroundImage: "url(".concat(obj[1], ")")
      }
    }), (0,react_namespaceObject.jsx)("text", {
      className: "profile-name"
    }, obj[0]));
  }), (0,react_namespaceObject.jsx)("div", {
    className: "Boton1-Container"
  }, (0,react_namespaceObject.jsx)("div", {
    className: "Icon-container",
    style: {
      backgroundImage: "url(".concat(showmore_namespaceObject, ")")
    }
  }), (0,react_namespaceObject.jsx)("text", {
    className: "profile-name"
  }, "Mostrar 2 m\xE1s")), (0,react_namespaceObject.jsx)("hr", null), (0,react_namespaceObject.jsx)("text", {
    className: "titulo"
  }, "M\xC1S DE YOUTUBE"), moreYT.map(function (obj) {
    return (0,react_namespaceObject.jsx)("div", {
      key: obj[0],
      className: "Boton1-Container"
    }, (0,react_namespaceObject.jsx)("div", {
      className: "Icon-container",
      style: {
        backgroundImage: "url(".concat(obj[1], ")")
      }
    }), (0,react_namespaceObject.jsx)("text", null, obj[0]));
  }), (0,react_namespaceObject.jsx)("hr", null), extras.map(function (obj) {
    return (0,react_namespaceObject.jsx)("div", {
      key: obj[0],
      className: "Boton1-Container"
    }, (0,react_namespaceObject.jsx)("div", {
      className: "Icon-container",
      style: {
        backgroundImage: "url(".concat(obj[1], ")")
      }
    }), (0,react_namespaceObject.jsx)("text", null, obj[0]));
  }), (0,react_namespaceObject.jsx)("hr", null), (0,react_namespaceObject.jsx)("div", {
    className: "condiciones"
  }, "Informaci\xF3n Prensa"), (0,react_namespaceObject.jsx)("div", {
    className: "condiciones"
  }, "Derechos de autor Contactar"), (0,react_namespaceObject.jsx)("div", {
    className: "condiciones"
  }, "Creadores Publicidad"), (0,react_namespaceObject.jsx)("div", {
    className: "condiciones"
  }, "Desarrolladores"), (0,react_namespaceObject.jsx)("div", {
    className: "espacio"
  }, "s"), (0,react_namespaceObject.jsx)("div", {
    className: "condiciones"
  }, "T\xE9rminos Provacidad"), (0,react_namespaceObject.jsx)("div", {
    className: "condiciones"
  }, "Pol\xEDticas y seguridad"), (0,react_namespaceObject.jsx)("div", {
    className: "condiciones"
  }, "C\xF3mo funciona YouTube"), (0,react_namespaceObject.jsx)("div", {
    className: "condiciones"
  }, "Probar funciones nuevas"), (0,react_namespaceObject.jsx)("div", {
    className: "espacio"
  }, "s"), (0,react_namespaceObject.jsx)("div", {
    className: "registro"
  }, "\xA9 2022 Google LLC"), (0,react_namespaceObject.jsx)("div", {
    className: "espacio"
  }, "s"));
};

/* harmony default export */ const components_Menu = (Menu_Menu);
;// CONCATENATED MODULE: ./src/components/Carrusel.css
/* harmony default export */ const Carrusel = (__webpack_require__.p + "0a4cdf19345c34248b5e51fe24b0cadf.css");
;// CONCATENATED MODULE: ./src/components/Carrusel.jsx


var opciones = ['Barra', 'Equimapiento de ejercicio', 'Hollow Knight', 'Clash Royale', 'Mixes', 'El Rubius', 'Jedis', 'Calistenia', 'Cine de ciencia ficción', 'Arte', 'Musica', 'Bitcoin', 'Franco Escamilla', 'Personajes', 'Programación', 'Videojuego de sigilo', 'Subidas recientes', 'En directo', 'Visto', 'Novedades para ti'];
var opcionesshuffle = opciones.sort(function () {
  return 0.5 - Math.random();
});

var Carrusel_Carrusel = function Carrusel() {
  return (0,react_namespaceObject.jsx)("div", null, (0,react_namespaceObject.jsx)("hr", {
    className: "hr-carrusel"
  }), (0,react_namespaceObject.jsx)("div", {
    className: "Contenido"
  }, (0,react_namespaceObject.jsx)("div", {
    className: "boton-carruselw"
  }, (0,react_namespaceObject.jsx)("div", {
    className: "cat1"
  }, "Todo")), opcionesshuffle.map(function (op) {
    return (0,react_namespaceObject.jsx)("div", {
      key: op,
      className: "boton-carruselb"
    }, (0,react_namespaceObject.jsx)("div", {
      className: "cat"
    }, op));
  })), (0,react_namespaceObject.jsx)("hr", {
    className: "hr-carrusel"
  }));
};

/* harmony default export */ const components_Carrusel = (Carrusel_Carrusel);
;// CONCATENATED MODULE: ./src/components/Video.css
/* harmony default export */ const Video = (__webpack_require__.p + "44e2166f6b901314fc9babc2d9d4b393.css");
;// CONCATENATED MODULE: ./public/videos.json
const videos_namespaceObject = JSON.parse('[{"imagen":"https://i.ytimg.com/vi/GRewh-l_qmA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1ANeyf8ba8MUk265HyMhQXdx1WQ","perfil":"https://yt3.ggpht.com/ytc/AKedOLQq9FMBXwMFTupOXsei0lUFz0p7QaWePFtIqG56qg=s68-c-k-c0x00ffffff-no-rj","tiempo":"19:48","titulo":"DEJÉ QUE UN COFRE ESCOJA MI MAZO Y PASO ESTO🥶","creador":"BENIJU","verificado":true,"vistas":"2,6 M de visualizaciones • hace 2 mes"},{"imagen":"https://i.ytimg.com/vi/zN4rIHx22ZU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDe6_aVE0jRbGut5cH0pW7qUZKUGg","perfil":"https://yt3.ggpht.com/ytc/AKedOLSdb0BEMtHVOApxCCLl--ctg2UYKaO1dZ_wI8gcxQ=s68-c-k-c0x00ffffff-no-rj","tiempo":"6:44","titulo":"¿Por Que Realmente Qui Gon Perdió Contra Darth Maul En La...","creador":"La Sombra del Imperio","verificado":true,"vistas":"888.991 visualizaciones • hace 4 años"},{"imagen":"https://i.ytimg.com/vi/_mk6Y4anAnE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHI2fOqntzCQ3nUMVL_jJqyntQUw","perfil":"https://yt3.ggpht.com/ytc/AKedOLS-7GE2XMoKCh7i4nWThknUS3QIX5LIR2jvSGdJzg=s68-c-k-c0x00ffffff-no-rj","tiempo":"19:46","titulo":"Black Clover Openings 1-13","creador":"Crunchyroll","verificado":true,"vistas":"10 M de visualizaciones • hace 1 año"},{"imagen":"https://i.ytimg.com/vi/yqWYO7RRFfY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4crBm9PTqjH3w2tRnM24fI6lUXA","perfil":"https://yt3.ggpht.com/b6NMlvBZhI-wRg5AR2R1a21ze77T4V2p5qD53FIs9Sr_Kac7GHrWfOWNw6R0k2ug4APtWeRwcQ=s68-c-k-c0x00ffffff-no-rj","tiempo":"39:03","titulo":"PILOTO EN MOTOGP con Marc Márquez (Gran Premio Red Bull d...","creador":"TheGrefg","verificado":true,"vistas":"942.777 visualizaciones • hace 4 días"},{"imagen":"https://i.ytimg.com/vi/xyQY8a-ng6g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCHNhl0_Gu-0pwkLq9pH_58PtXeNA","perfil":"https://yt3.ggpht.com/HjXKmDGoAp6b-JdGYpqJYYeN4S_CMpD_kqWvldpN53cbzn-i73t6mVNo8mNki-xLPwi0BVSFi-o=s68-c-k-c0x00ffffff-no-rj","tiempo":"4:53","titulo":"Cómo afecta tu cerebro lo que comes - Mia Nacamulli","creador":"TED-Ed","verificado":true,"vistas":"14 M de visualizaciones • hace 5 año"},{"imagen":"https://i.ytimg.com/vi/7pecQmrSGas/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4O7OwRsDKfU6cxtP4BmORN_i63A","perfil":"https://yt3.ggpht.com/ytc/AKedOLRou_d6eiJdRxcCPiB9p4kyo3X1D7Gb1tpZrcXf-A=s68-c-k-c0x00ffffff-no-rj","tiempo":"5:43","titulo":"Por Qué Dooku no le Dijo a Anakin que Palpatine era Sidious - Star...","creador":"Apolo1138","verificado":true,"vistas":"669.242 visualizaciones • hace 5 año"},{"imagen":"https://i.ytimg.com/vi/Bv5d8s26XU4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-UaTcD60RTzQrR8_zN1YKYhexwg","perfil":"https://yt3.ggpht.com/xR8V_Y6G6s-rUNH_OfwjHo6GnYsptV4WuqtdFEN5J52cTVf5ENvonXtyjm35ZwGXNw2hJPMk=s68-c-k-c0x00ffffff-no-rj","tiempo":"10:08","titulo":"Tengen Uzui Epic Moments | Demon Slayer Season 2","creador":"ThunderAni","verificado":false,"vistas":"1,2 M de visualizaciones • hace 1 mes"},{"imagen":"https://i.ytimg.com/vi/6uV3p-cZuMk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXxbYC1WrUv4dKuuWX7EZg4X7Z0g","perfil":"https://yt3.ggpht.com/FD10O2oxA2corbND6j6ND0P_qAUC5Who9kiKvPJ12uRncpNET_rRAlPF7QYPDRav6dUNh_Qx=s68-c-k-c0x00ffffff-no-rj","tiempo":"3:05","titulo":"15 Normas ESPARTANAS que te harán duro como el ACERO","creador":"Célebres","verificado":false,"vistas":"1 M de visualizaciones • hace 4 meses"},{"imagen":"https://i.ytimg.com/vi/2OK-6IWP9CI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-kHn4seDV8u5l1oN1-uuYvfS4Dw","perfil":"https://yt3.ggpht.com/ytc/AKedOLRwypkoJG3bbfmvqGw0yEbnyvm2CP9wZ_V2fa1P0A=s68-c-k-c0x00ffffff-no-rj","tiempo":"21:25","titulo":"30 DETALLES ALUCINANTES de THE LAST OF US","creador":"Vandal","verificado":true,"vistas":"2 M de visualizaciones • hace 1 año"},{"imagen":"https://i.ytimg.com/vi/bRU1-iaBz88/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuvoXvdXshqW_LLL4xbMEigHFB8g","perfil":"https://yt3.ggpht.com/duclrC3_O4T_1hXFUXrlrfCtypPOn-hYxLDbXVhbhJGi4GSiF6yrvrxlbX5zY2WTdiZDr_4lfg=s68-c-k-c0x00ffffff-no-rj","tiempo":"10:18","titulo":"Posiblemente EL MEJOR JUEGO de la franquicia STAR WARS","creador":"SrSerpiente","verificado":false,"vistas":"44.908 visualizaciones • hace 1 mes"},{"imagen":"https://i.ytimg.com/vi/SwBBwY-kyYM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCT24WPWLPoIm54DReTBP5eFVIPFA","perfil":"https://yt3.ggpht.com/ytc/AKedOLSSdcXtnvpBxfClYQwL7da0PveRw5U9HIQ1MXD1_A=s68-c-k-c0x00ffffff-no-rj","tiempo":"23:52","titulo":"Spider-Man No Way Home : La Historia en 1 Video","creador":"El FedeWolf","verificado":true,"vistas":"3,8 M de visualizaciones • hace 1 mes"},{"imagen":"https://i.ytimg.com/vi/SiMdkAayzcA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAivMhL1lnuWP-rBfl2HoZPmtPGPA","perfil":"https://yt3.ggpht.com/ytc/AKedOLSOd5o6iyRv8ZBLUkaNLAOK6Qb9ooD9WZ8LjNnC=s68-c-k-c0x00ffffff-no-rj","tiempo":"18:21","titulo":"¿Cómo era la tierra en el tiempo de los DINOSAURIOS?","creador":"Kosmo ES","verificado":true,"vistas":"2,9 M de visualizaciones • hace 2 meses"},{"imagen":"https://i.ytimg.com/vi/blUM2Rnj2eo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBUISrYGiYNyUpWcnKKGkkJRKsDuw","perfil":"https://yt3.ggpht.com/ytc/AKedOLTXzvwQJjxHTQPMu50nWLAB317d1HiEnYxFg5QCGA=s68-c-k-c0x00ffffff-no-rj","tiempo":"35:22","titulo":"100 Detalles y Curiosidades de Spider-Man No Way Home","creador":"La red Geek de Spideremilio","verificado":true,"vistas":"336.050 visualizaciones • hace 1 mes"},{"imagen":"https://i.ytimg.com/vi/PKQHDEIK9kU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBCvyM5t-ATvryzzEqoxootnz1f_w","perfil":"https://yt3.ggpht.com/3zSTGExz98KDqbZrmzkMHsBQY79EUvMPhhX4V4Ax0pZKMrY8w14y5dNK_2m6M_OxFiyeEN-IfQ=s68-c-k-c0x00ffffff-no-rj","tiempo":"18:36","titulo":"CAD BANE ｜ Star Wars Fan-Film [4K]","creador":"Farrar Film","verificado":false,"vistas":"274.885 visualizaciones • hace 1 mes"},{"imagen":"https://i.ytimg.com/vi/YOooTtHTbO8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-LjeddpXRolUBDOoqeJKeMidZpA","perfil":"https://yt3.ggpht.com/ox78PKRMTr_MUKq2looPrnIdVG6YkHShKnBP6ljC8o4GhrK6yC7w00TEN2cwgcXS2Xp_exa4Omg=s68-c-k-c0x00ffffff-no-rj","tiempo":"8:22","titulo":"¿Quieres Tener BRAZOS GRANDES? Haz Estas 9 Cosas","creador":"BUFF Academy","verificado":true,"vistas":"715.383 visualizaciones • hace 2 meses"},{"imagen":"https://i.ytimg.com/vi/hGJBlsYcyrU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXVUZFInl9CZpMV_gTEaLd8-ERzw","perfil":"https://yt3.ggpht.com/ytc/AKedOLSOd5o6iyRv8ZBLUkaNLAOK6Qb9ooD9WZ8LjNnC=s68-c-k-c0x00ffffff-no-rj","tiempo":"10:55","titulo":"¿Qué tan peligroso es el agujero negro MÁS CERCANO a nuest... ","creador":"Kosmo ES","verificado":true,"vistas":"515.335 visualizaciones • hace 2 meses"},{"imagen":"https://i.ytimg.com/vi/N5CX5uNTIOk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCtzoxZGJzEWDjt2PsskdMg_EA9mA","perfil":"https://yt3.ggpht.com/ytc/AKedOLRUg-unScLYXgdCW9sfLvuAvUIAXvg8Ta4OlIXa=s68-c-k-c0x00ffffff-no-rj","tiempo":"14:35","titulo":"HOGWARTS LEGACY - ¡PRIMER GAMEPLAY de 14 MINUTOS!","creador":"Eurogamerspain","verificado":true,"vistas":"503.357 visualizaciones • hace 1 mes"},{"imagen":"https://i.ytimg.com/vi/7UN5fVQNHOs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqNbD8KaPbWJRYXD7gh6vaizO-VQ","perfil":"https://yt3.ggpht.com/ytc/AKedOLSSdcXtnvpBxfClYQwL7da0PveRw5U9HIQ1MXD1_A=s68-c-k-c0x00ffffff-no-rj","tiempo":"21:03","titulo":"The Batman : La Historia en 1 Video","creador":"El FedeWolf","verificado":true,"vistas":"1,7 M de visualizaciones • hace 12 días"},{"imagen":"https://i.ytimg.com/vi/bwvlhQsYGcc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCF0teVT_HbkdxNdepOkNtHud68tg","perfil":"https://yt3.ggpht.com/ytc/AKedOLT5R8oWI2SwnZoRRvkfUS9gS7slUz8YA5HoaiNz=s68-c-k-c0x00ffffff-no-rj","tiempo":"21:33","titulo":"Bitcoin. Como ganar, incluso habiendo entrado en el máximo...","creador":"Bitcoin al día","verificado":true,"vistas":"96.550 visualizaciones • hace 1 año"},{"imagen":"https://i.ytimg.com/vi/wj9Mnb6dXX0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBctVtyI_HjoZk9lIk2obob0J6GNQ","perfil":"https://yt3.ggpht.com/yFh1QLquBkPN0yaPW-g-5xNTTMM8DXlI_6rOU4dc3opiUNbAe7HNtAeqS0cnTm8bTLBzPcvwHg=s68-c-k-c0x00ffffff-no-rj","tiempo":"39:45","titulo":"LA MEJOR GUÍA DE JEFES QUE VAS A ENCONTRAR de HOLLO...","creador":"Acre","verificado":true,"vistas":"172.135 visualizaciones • hace 1 año"}]');
;// CONCATENATED MODULE: ./src/components/Video.jsx



var randomvideos = videos_namespaceObject.sort(function () {
  return 0.5 - Math.random();
});

var Video_Video = function Video() {
  return (0,react_namespaceObject.jsx)("div", {
    className: "video-contenedor"
  }, randomvideos.map(function (video) {
    return (0,react_namespaceObject.jsx)("div", {
      key: video.titulo,
      className: "video-contenido"
    }, (0,react_namespaceObject.jsx)("div", {
      className: "video-imagen",
      style: {
        backgroundImage: "url(".concat(video.imagen, ")")
      }
    }, (0,react_namespaceObject.jsx)("div", {
      className: "time"
    }, (0,react_namespaceObject.jsx)("div", {
      className: "texto-time"
    }, video.tiempo))), (0,react_namespaceObject.jsx)("div", {
      className: "footer-videos"
    }, (0,react_namespaceObject.jsx)("div", {
      className: "perfilimagen",
      style: {
        backgroundImage: "url(".concat(video.perfil, ")")
      }
    }), (0,react_namespaceObject.jsx)("div", {
      className: "footer-texto"
    }, (0,react_namespaceObject.jsx)("div", {
      className: "titulo-video"
    }, video.titulo), (0,react_namespaceObject.jsx)("div", {
      className: "footer-videos"
    }, (0,react_namespaceObject.jsx)("div", {
      className: "creador-contenido"
    }, video.creador), video.verificado && (0,react_namespaceObject.jsx)("div", {
      className: "verificatedimg"
    })), (0,react_namespaceObject.jsx)("div", {
      className: "vistas-contenido"
    }, video.vistas))));
  }));
};

/* harmony default export */ const components_Video = (Video_Video);
;// CONCATENATED MODULE: ./src/index.css
/* harmony default export */ const src = (__webpack_require__.p + "04cb1922480e82f76925c80e61b9570b.css");
;// CONCATENATED MODULE: ./src/App.jsx





/* Sebastian Aristondo Pérez
   Fecha de finalización 12/5/2022
   Recreación Youtube
*/



var App = function App() {
  return (0,react_namespaceObject.jsx)("div", {
    className: "indexs"
  }, (0,react_namespaceObject.jsx)(components_TitleBar, null), (0,react_namespaceObject.jsx)("div", {
    className: "cuerpo"
  }, (0,react_namespaceObject.jsx)(components_Menu, null), (0,react_namespaceObject.jsx)("div", {
    className: "videos"
  }, (0,react_namespaceObject.jsx)(components_Carrusel, null), (0,react_namespaceObject.jsx)(components_Video, null))));
};

/* harmony default export */ const src_App = (App);
;// CONCATENATED MODULE: ./server/index.jsx






var PORT = process.env.PORT || 3000;
var app = external_express_default()();
app.get('/', function (req, res) {
  var element = server_namespaceObject.renderToString((0,react_namespaceObject.jsx)(src_App, null));
  var html = "\n    <html lang=\"en\">\n    <head>\n        <title>YouTube</title>\n        <link rel=\"icon\" href=\"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/2048px-YouTube_social_white_squircle.svg.png\"/>\n    </head>\n    <body style=\"margin: 0px;\">\n        <div id=\"root\">".concat(element, "</div>\n        <script src=\"/bundle.js\"></script>\n    </body>\n    </html>\n  ");
  res.send(html);
});
app.use(external_express_default()["static"](external_path_default().join(__dirname, '../dist')));
app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});
/******/ })()
;