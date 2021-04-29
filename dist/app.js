/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function initVue() {
  new Vue({
    el: "#app",
    data: {
      module1: "position1",
      module2: "position2",
      module3: "position3",
      module4: "hide",
      dot1: "active",
      dot2: "",
      dot3: "",
      dot4: "",
      countdown: "",
      links: [{
        nome: "Home",
        drop: ["MaxCoach Education", "Course Portal", "Distant Learning", "Multimedia Pedagogy", "Modern Schooling", "Remote Training", "Health Coaching", "Gym Coaching", "Business", "Artist", "Kitchen Coach", "Motivation", "Dancing", "Guitar", "Yoga", "Photography", "Personal Finance"],
        image: "img/homepages-mega-menu-image-alt.jpg"
      }, {
        nome: "Pages",
        drop: ["Start Here", "Success Story", "About me", "About us", "About us 01", "About us 02", "About us 03", "Contact me", "Contact us", "Purchase Guide", "Privacy Policy", "Terms of Service"],
        image: false
      }, {
        nome: "Courses",
        drop: ["Courses Grid 01", "Courses Grid 02", "Courses Grid 03", "Membership Levels", "Become a Teacher", "Profile", "Checkout", "Single Layout"],
        image: false
      }, {
        nome: "Features",
        drop: ["Events", "Zoom Meetings"],
        image: false
      }, {
        nome: "Blog",
        drop: ["Blog Grid", "Blog Masonry", "Blog Classic", "Blog List"],
        image: false
      }, {
        nome: "Shop",
        drop: ["Shop Left Sidebar", "Shop Right Sidebar", "Cart", "Wishlist", "Single Product"],
        image: false
      }],
      socials: [{
        icon: "fa-twitter",
        name: "twitter"
      }, {
        icon: "fa-facebook",
        name: "facebook"
      }, {
        icon: "fa-instagram",
        name: "instagram"
      }, {
        icon: "fa-linkedin",
        name: "linkedin"
      }],
      explore: ["Start here", "Success story", "Blog", "Courses", "Contact us"],
      information: ["Membership", "Purchase guide", "Privacy policy", "Terms of services"]
    },
    methods: {
      carousel: function carousel(ind) {
        if (ind == 0) {
          this.module1 = "position1";
          this.module2 = "position2";
          this.module3 = "position3";
          this.module4 = "hide";
          this.dot1 = "active";
          this.dot2 = "";
          this.dot3 = "";
          this.dot4 = "";
        } else if (ind == 1) {
          this.module1 = "hide";
          this.module2 = "position1";
          this.module3 = "position2";
          this.module4 = "position3";
          this.dot1 = "";
          this.dot2 = "active";
          this.dot3 = "";
          this.dot4 = "";
        } else if (ind == 2) {
          this.module1 = "position3";
          this.module2 = "hide";
          this.module3 = "position1";
          this.module4 = "position2";
          this.dot1 = "";
          this.dot2 = "";
          this.dot3 = "active";
          this.dot4 = "";
        } else if (ind == 3) {
          this.module1 = "position2";
          this.module2 = "position3";
          this.module3 = "hide";
          this.module4 = "position1";
          this.dot1 = "";
          this.dot2 = "";
          this.dot3 = "";
          this.dot4 = "active";
        }
      },
      //se il numero è minore di 10 aggiunge uno 0
      addZero: function addZero(num) {
        if (num < 10) {
          return "0" + num;
        } else {
          return num;
        }
      }
    },
    mounted: function mounted() {
      var _this = this;

      // imposta la data di fine countdown
      var countDownDate = new Date("Apr 30, 2021 18:00:00").getTime(); // aggiorna il timer ogni secondo

      var x = setInterval(function () {
        // prende la data attuale
        var now = new Date().getTime(); // calcola il tempo mancante

        var distance = countDownDate - now; // converte i valori

        var days = _this.addZero(Math.floor(distance / (1000 * 60 * 60 * 24)));

        var hours = _this.addZero(Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));

        var minutes = _this.addZero(Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)));

        var seconds = _this.addZero(Math.floor(distance % (1000 * 60) / 1000)); // aggiorna il valore del data


        _this.countdown = days + ": " + hours + ": " + minutes + ": " + seconds; // stampa "expired" in caoìso il countdown sia finito

        if (distance < 0) {
          clearInterval(x);
          _this.countdown = "EXPIRED";
        }
      }, 1000);
    }
  });
}

function scrollNav() {
  $(document).bind('scroll', function () {
    if ($(document).scrollTop() > 130) {
      $('nav').addClass('fixed');
    } else {
      $('nav').removeClass('fixed');
    }
  });
}

function follow() {
  $('.jumbotron').mousemove(function (event) {
    var positionX = event.pageX;
    var positionY = event.pageY;
    $('#hero4').get(0).style.setProperty("bottom", 25 + positionY / 8 + "px");
    $('#hero4').get(0).style.setProperty("right", 120 + positionX / 8 + "px");
    $('#hero2').get(0).style.setProperty("bottom", 120 + -positionY / 8 + "px");
    $('#hero2').get(0).style.setProperty("left", 250 + -positionX / 8 + "px");
    $('#hero1').get(0).style.setProperty("bottom", 120 + positionY / 10 + "px");
    $('#hero1').get(0).style.setProperty("left", 230 + positionX / 10 + "px");
  });
  $('.youtube').mousemove(function (event) {
    var positionX = event.pageX;
    var positionY = event.pageY;
    $('.shape05').get(0).style.setProperty("bottom", 650 + -positionY / 15 + "px");
    $('.shape05').get(0).style.setProperty("left", 100 + -positionX / 15 + "px");
    $('.shape12').get(0).style.setProperty("bottom", 50 + positionY / 15 + "px");
    $('.shape12').get(0).style.setProperty("right", 100 + positionX / 15 + "px");
  });
}

function scrollUp() {
  var lastScrollTop = 0;
  $(document).scroll(function (event) {
    var st = $(this).scrollTop();

    if ($(this).scrollTop() > 0) {
      if (st < lastScrollTop) {
        $("#top").addClass("active");
      } else {
        $("#top").removeClass("active");
      }
    } else {
      $("#top").removeClass("active");
    }

    lastScrollTop = st;
  });
}

function init() {
  initVue();
  scrollNav();
  follow();
  scrollUp();
}

$(init);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;