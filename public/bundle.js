/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/client.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/client.js":
/*!**************************!*\
  !*** ./public/client.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '/jsm/controls/OrbitControls.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '/jsm/libs/stats.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nconst scene = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\n\nconst camera = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\n  80,\n  window.innerWidth / window.innerHeight,\n  0.1,\n  1000\n);\ncamera.position.z = 3;\nconst renderer = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({ antialias: true });\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.domElement);\n\nconst controls = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/jsm/controls/OrbitControls.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(camera, renderer.domElement);\ncontrols.minDistance = 1.35;\ncontrols.maxDistance = 5;\n\n// Lighting (allows all objects to be visible....a sun for ThreeJS)\nconst light = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0x333333, 1);\nlight.position.set(5, 3, 5).normalize();\nscene.add(light);\nscene.add(new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0xffffff));\n\n// Earth\n\nconst earthGeometry = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0.7, 32, 32);\nconst earthMaterial = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n  map: !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).loadTexture('/images/earthwithclouds.jpeg'),\n  color: 0xaaaaaa,\n  specular: 0x333333,\n  shininess: 25,\n});\nconst earth = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(earthGeometry, earthMaterial);\n\nearthMaterial.side = !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nscene.add(earth);\n\n// Bumps for texturing\n\nearthMaterial.bumpMap = !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).loadTexture('/images/earthbump1k.jpg');\nearthMaterial.bumpScale = 0.05;\n\n// Specular Texture\n\nearthMaterial.specularMap = !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).loadTexture(\n  '/images/earthspec1k.jpg'\n);\nearthMaterial.specular = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('grey');\n\n// Moon\n\nconst moonGeometry = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0.2, 32, 32);\nconst moonMaterial = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n  map: !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).loadTexture('/images/moonmap.jpg'),\n});\nmoonMaterial.bumpMap = !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).loadTexture('/images/moontextures.jpg');\nmoonMaterial.bumpScale = 0.05;\nconst moon = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(moonGeometry, moonMaterial);\nmoon.position.set(0, 0, 0);\nscene.add(moon);\n\n// Moon Orbit\nconst moonRadius = 2.6;\nlet startAngle = 3.5;\nconst angleIncrement = 0.001;\n\n// Clouds - Next Update\n\n// const clouds = new THREE.SphereBufferGeometry(0.71, 32, 32);\n// const cloudMaterial = new THREE.MeshPhongMaterial();\n// const cloudMesh = (clouds, cloudMaterial);\n// cloudMaterial.map = THREE.ImageUtils.loadTexture(\n//   '/images/earthcloudmapflipped.jpg'\n// );\n// scene.add(cloudMesh);\n\n// Stars\n\nconst stars = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(90, 32, 32);\nconst starMaterial = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\nstarMaterial.map = !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).loadTexture('/images/stars.jpg');\nstarMaterial.side = !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nconst starMesh = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/build/three.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(stars, starMaterial);\n\n// Adding Star Background\nscene.add(starMesh);\n\nwindow.addEventListener(\n  'resize',\n  () => {\n    camera.aspect = window.innerWidth / window.innerHeight;\n    camera.updateProjectionMatrix();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    render();\n  },\n  false\n);\n\nconst stats = !(function webpackMissingModule() { var e = new Error(\"Cannot find module '/jsm/libs/stats.module.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\ndocument.body.appendChild(stats.dom);\n\nlet animate = function () {\n  requestAnimationFrame(animate);\n  earth.rotation.x += 0;\n  earth.rotation.y += 0.001;\n  moon.rotation.x += 0;\n  moon.rotation.y += -0.0001;\n\n  startAngle += angleIncrement;\n  moon.position.x = moonRadius * Math.cos(startAngle);\n  moon.position.z = moonRadius * Math.sin(startAngle);\n  renderer.render(scene, camera);\n  controls.update();\n  render();\n  stats.update();\n};\n\nfunction render() {\n  renderer.render(scene, camera);\n}\n\nanimate();\n\n\n//# sourceURL=webpack:///./public/client.js?");

/***/ })

/******/ });