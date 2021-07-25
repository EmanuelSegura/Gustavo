(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/emanuel/Desktop/Gustavo-Julio/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1Xd2":
    /*!********************************************!*\
      !*** ./src/app/prensa/prensa.component.ts ***!
      \********************************************/

    /*! exports provided: PrensaComponent */

    /***/
    function Xd2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrensaComponent", function () {
        return PrensaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PrensaComponent = /*#__PURE__*/function () {
        function PrensaComponent() {
          _classCallCheck(this, PrensaComponent);
        }

        _createClass(PrensaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrensaComponent;
      }();

      PrensaComponent.ɵfac = function PrensaComponent_Factory(t) {
        return new (t || PrensaComponent)();
      };

      PrensaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrensaComponent,
        selectors: [["app-prensa"]],
        decls: 44,
        vars: 0,
        consts: [[1, "container", "text-center", "mt-5", "transition-slow-css"], ["target", "_blank", "href", "https://drive.google.com/file/d/1MKDRiGy5LoRHx0eTbRHR5Qt6wmqq_QNE/view?usp=sharing", "role", "button", 1, "btn", "btn-light", "prensa-pdf-title"], [1, "taller-gustavo", "container", "mt-5", "transition-slow-css"], [1, "card", "bg-dark"], ["src", "../assets/images/prensa/gustavo-2.JPG", "alt", "Gustavo Silverati pintando con espatula", 1, "card-img-top", "img-gustavo"], [1, "mt-5", "imgs-flex", "transition-slow-css"], [1, "card", "mb-3", "bg-dark", "article-img"], ["src", "../assets/images/prensa/diario.jpg", "alt", "Articulo en el diario El Eco de Tandil. Proximamente el paisaje sera el gran protagonista", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "mt-5", "bg-dark", "card", "mb-3", "article-img"], ["src", "../assets/images/prensa/diario2.jpg", "alt", "Articulo en el diario El Eco de Tandil. Hoy inauguran tres interesantes propuestas artisticas", 1, "card-img-top"], ["src", "../assets/images/prensa/triptico-mumbat.jpg", "alt", "Triptico museo de bellas artes tandil llamado dialogo critico con el autor", 1, "card-img-top"], ["src", "../assets/images/prensa/pequeno-formato.jpg", "alt", "Salon de pintura llamado peque\xF1o formato numero veintidos", 1, "card-img-top"], ["target", "_blank", "href", "http://www.culturamovil.com.ar/tandil/obra.php?id=130"], ["src", "../assets/images/prensa/qr.jpg", "alt", "Tarjeta de presentacion con codigo QR a la obra Secuencia Mistica de Gustavo Silverati ", 1, "card-img-top"]],
        template: function PrensaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Accede a mi PDF de prensa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Articulo en el diario El Eco de Tandil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Muestra en el Mumbat. (04/08/2011) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Articulo en el diario El Eco de Tandil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Muestra en el Mumbat. (18/08/2011)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Di\xE1logo Cr\xEDtico con el autor - Tr\xEDptico Mumbat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Septiembre 2011");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "XXII Sal\xF3n de Pintura \"Peque\xF1o Formato\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Mumbat (2009)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "C\xF3digo QR - Gustavo Silverati");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Secuencia mistica (2012) - Mumbat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".imgs-flex[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    visibility: hidden;\n}\n\n.article-img[_ngcontent-%COMP%] {\n    margin: 0 5rem;\n}\n\n\n\n.prensa-pdf-title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: large;\n    padding: 0.5rem 2rem;\n}\n\n\n\n.taller-gustavo[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n@media screen and (min-width: 768px) {\n    .imgs-flex[_ngcontent-%COMP%] {\n        visibility: visible;\n    }\n    .prensa-pdf-title[_ngcontent-%COMP%] {\n        font-size: xx-large;\n    }\n    \n    .taller-gustavo[_ngcontent-%COMP%] {\n        flex-direction: row;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlbnNhL3ByZW5zYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFHQSxlQUFlOztBQUVmO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBR0EscUJBQXFCOztBQUVyQjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQSxxQkFBcUI7SUFDckI7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3ByZW5zYS9wcmVuc2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdzLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5hcnRpY2xlLWltZyB7XG4gICAgbWFyZ2luOiAwIDVyZW07XG59XG5cblxuLyogUERGIFByZW5zYSAqL1xuXG4ucHJlbnNhLXBkZi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgcGFkZGluZzogMC41cmVtIDJyZW07XG59XG5cblxuLyogSW1hZ2VuZXMgR3VzdGF2byAqL1xuXG4udGFsbGVyLWd1c3Rhdm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5pbWdzLWZsZXgge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgICAucHJlbnNhLXBkZi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgfVxuICAgIC8qIEltYWdlbmVzIEd1c3Rhdm8gKi9cbiAgICAudGFsbGVyLWd1c3Rhdm8ge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrensaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-prensa',
            templateUrl: './prensa.component.html',
            styleUrls: ['./prensa.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 20,
        vars: 0,
        consts: [[1, "background-black"], [1, "mt-5", "container", "about-flex"], [1, "row"], [1, "img-flex", "col-lg", "img-fluid", "transition-css"], ["src", "../assets/images/about/gs.png", "alt", "Foto de perfil de el artista tandilense Gustavo Silverati", 1, "about-flex-child", "img-about"], [1, "col-lg", "about-flex-child", "text-group-about", "transition-slow-css"], [1, "text-about"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Gustavo Alfredo Silverati");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nace en Tandil, Buenos Aires, el 11 de Julio de 1962. Desde peque\xF1o demostr\xF3 su inter\xE9s por el dibujo y la pintura, recibiendo sus primeras lecciones en clases particulares de dibujo, para posteriormente asistir a la academia de pintura que por aquel entonces depend\xEDa del Museo Municipal de Bellas Artes de la ciudad de Tandil.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Asisti\xF3 a talleres dictados por el reconocido acuarelista Goyo Barja.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Permanente observador de obras de distintos artistas, con estilos y escuelas diversas, admira la pintura impresionista de Van Gogh, Sorolla, Casas, Regoyos, Monet, Fortuny y Fader.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ha participado en muestras colectivas y diversos salones, tales como: Sal\xF3n del Peque\xF1o Formato (2003, 2009). 6to, 7mo y 10mo \"Sal\xF3n de Arte Tango\" (2004, 2005 y 2008). Muestra Conmemorativa Aniversario de la Rep\xFAblica de Italia (2006). Primer Concurso Provincial de Pintura del Consejo Profesional de Agrimensura de la Provincia de Buenos Aires (2010).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Expuso su obra en : Muestra Colectiva \"Dialogo Critico con el Autor\" (Agosto de 2011), Sal\xF3n Nacional de Arte Sacro (2012) y Muestra individual en el Consejo Profesional de Ciencias Econ\xF3micas Delegaci\xF3n Tandil (Noviembre de 2012).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Recientemente su obra ha tomado un gir\xF3 radical volc\xE1ndose al expresionismo abstracto y la experimentaci\xF3n con diferentes t\xE9cnicas combinadas, su muestra mas reciente \"El Expertise de las Mariposas\" da cuenta de dicho proceso.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".background-black[_ngcontent-%COMP%] {\n    background-color: black;\n    width: 100%;\n    height: 100%;\n}\n\n\n\n.about-flex[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n\n\n.text-group-about[_ngcontent-%COMP%] {\n    text-align: justify;\n    text-justify: inter-word;\n    font-size: 1.3rem;\n    font-weight: lighter;\n}\n\n\n\n.img-about[_ngcontent-%COMP%] {\n    max-width: 100%;\n    max-height: 100%;\n    border-radius: 0.2rem;\n}\n\n\n\n.img-flex[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n@media (min-width: 768px) {\n    .img-about[_ngcontent-%COMP%] {\n        max-width: 90%;\n        max-height: 90%;\n    }\n    .img-flex[_ngcontent-%COMP%] {\n        justify-content: center;\n        align-items: flex-start;\n    }\n    .text-group-about[_ngcontent-%COMP%] {\n        font-size: 1.1rem;\n    }\n}\n\n@media (min-width: 1200px) {\n    .img-flex[_ngcontent-%COMP%] {\n        justify-content: flex-start;\n        align-items: flex-start;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOztBQUVmO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUdBLGFBQWE7O0FBRWI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBR0Esd0NBQXdDOztBQUV4QztJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFHQSx1Q0FBdUM7O0FBRXZDO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBR0EsbURBQW1EOztBQUVuRDtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUdBLFlBQVk7O0FBRVo7SUFDSTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSx1QkFBdUI7UUFDdkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO1FBQzNCLHVCQUF1QjtJQUMzQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJhY2tncm91bmQgKi9cblxuLmJhY2tncm91bmQtYmxhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuXG4vKiBGbGV4IGRhZCAqL1xuXG4uYWJvdXQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLyogcHJvcGllZGFkZXMgZGVsIGRpdiBkZSB0ZXh0byBncnVwYWwgKi9cblxuLnRleHQtZ3JvdXAtYWJvdXQge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5cbi8qIFByb3BpZWRhZGVzIGRlIGxhIGltYWdlbiBkZSBwZXJmaWwgKi9cblxuLmltZy1hYm91dCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuXG5cbi8qIFByb3BpZWRhZGVzIGZsZXggZGUgbGEgaW1hZ2VuIGVuIHN1IGRpdiBwYWRyZS4gKi9cblxuLmltZy1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLyogZGVza3RvcCAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuaW1nLWFib3V0IHtcbiAgICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDkwJTtcbiAgICB9XG4gICAgLmltZy1mbGV4IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICAudGV4dC1ncm91cC1hYm91dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5pbWctZmxleCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "D1Nz":
    /*!****************************************!*\
      !*** ./src/app/obra/obra.component.ts ***!
      \****************************************/

    /*! exports provided: ObraComponent */

    /***/
    function D1Nz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObraComponent", function () {
        return ObraComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/obra/espertise"];
      };

      var _c1 = function _c1() {
        return ["/obra/paisajes"];
      };

      var _c2 = function _c2() {
        return ["/obra/acuarelas"];
      };

      var ObraComponent = /*#__PURE__*/function () {
        function ObraComponent() {
          _classCallCheck(this, ObraComponent);
        }

        _createClass(ObraComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ObraComponent;
      }();

      ObraComponent.ɵfac = function ObraComponent_Factory(t) {
        return new (t || ObraComponent)();
      };

      ObraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ObraComponent,
        selectors: [["app-obra"]],
        decls: 32,
        vars: 6,
        consts: [[1, "container"], [1, "row", "mt-5", "mb-3"], [1, "col-lg-12"], [1, "text-obra-cabecera"], [1, "serie"], [1, "mt-5", "a", "card", "bg-dark", "text-white"], [3, "routerLink"], ["src", "../assets/images/espertise/1.png", "alt", "Obra El expertise de las mariposas - Imagen de cabecera que da presentacion a la serie que lleva el mismo nombre", 1, "img-dimension"], [1, "card-img-overlay"], [1, "mt-3", "margin-title", "card-title"], [1, "mt-3", "mb-5", "card-text"], [1, "mt-5", "card", "bg-dark", "text-white"], ["src", "../assets/images/obra/2-paisaje-mendocino.png", "alt", "Paisaje mendocino - Imagen de cabecera de la serie de pinturas titulado paisajes", 1, "img-dimension"], [1, "mt-3", "ml-3", "card-title"], ["src", "../assets/images/acuarelas/1.png", "alt", "Imagen de cabecera de la serie de pinturas titulado acuarelas", 1, "card-img"]],
        template: function ObraComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xC9ste \"relato pict\xF3rico\" se encuentra compuesto por las siguientes series:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "El Exp\xE9rtise de las mariposas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nueva colecci\xF3n realizada a lo largo de estos \xFAltimos meses. Expone una faceta emocional inmediata volcado en el plano del expresionismo abstracto y la experimentaci\xF3n con diferentes materiales y formato.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Paisajes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Esta colecci\xF3n recopila una serie de obras realizadas a lo largo de los a\xF1os. Colores fuertes, arboles variopintos, lagos, edificaciones reflejan una etapa de investigaci\xF3n figurativa e impresionista.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Acuarelas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Serie de paisajes realizados en acuarela.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["a[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n}\n\n\n\n.text-obra-cabecera[_ngcontent-%COMP%] {\n    font-size: x-large;\n    text-align: justify;\n}\n\n.card-img-overlay[_ngcontent-%COMP%] {\n    background-color: transparent;\n}\n\n.card-title[_ngcontent-%COMP%] {\n    background-color: transparent;\n    font-size: 1.5rem;\n}\n\n.card-text[_ngcontent-%COMP%] {\n    background-color: transparent;\n    font-size: 1rem;\n    text-align: justify;\n}\n\n\n\n.img-dimension[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n}\n\n\n\n.a[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.bg-dark[_ngcontent-%COMP%] {\n    background-color: black !important;\n}\n\n\n\n.margin-title[_ngcontent-%COMP%] {\n    margin-left: 1.5rem;\n}\n\n.serie[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n@media screen and (min-width: 768px) {\n    .card-title[_ngcontent-%COMP%] {\n        font-size: 3rem;\n    }\n    .card-text[_ngcontent-%COMP%] {\n        font-size: 1.5rem;\n    }\n    \n    .card[_ngcontent-%COMP%] {\n        width: 90%;\n        height: 90%;\n    }\n    \n    .margin-title[_ngcontent-%COMP%] {\n        margin-left: 11rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2JyYS9vYnJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOztBQUVwQztJQUNJLHFCQUFxQjtBQUN6Qjs7QUFHQSw0QkFBNEI7O0FBRTVCO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFHQSwwQkFBMEI7O0FBRTFCO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFHQSxnQ0FBZ0M7O0FBRWhDO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBR0EscURBQXFEOztBQUVyRDtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0EsMkNBQTJDO0lBQzNDO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBLHFEQUFxRDtJQUNyRDtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvb2JyYS9vYnJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBRdWl0YXIgbGluZWEgYXp1bCBkZSBsb3MgbGlua3MgICovXG5cbmE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG4vKiBEZXNjcmlwY2lvbiBkZSBjYWJlY2VyYSAqL1xuXG4udGV4dC1vYnJhLWNhYmVjZXJhIHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmNhcmQtaW1nLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5jYXJkLXRleHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5cbi8qIEVzY2FsYXIgcGFyYSAxMzY2eDc2OCAqL1xuXG4uaW1nLWRpbWVuc2lvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4vKiBFc2NhbGFyIGltYWdlbmVzIHZlcnRpY2FsZXMgKi9cblxuLmEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJnLWRhcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cblxuLyogTWFyZ2VuIHBhcmEgbGFzIGltYWdlbmVzIGRlIGxhIHNlcmllIGVuIHZlcnRpY2FsICovXG5cbi5tYXJnaW4tdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG59XG5cbi5zZXJpZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuICAgIC5jYXJkLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gICAgLyogUGlzYW5kbyBlbCAuY2FyZCBvcmlnaW5hbCBkZSBib290c3RyYXAgKi9cbiAgICAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgIH1cbiAgICAvKiBNYXJnZW4gcGFyYSBsYXMgaW1hZ2VuZXMgZGUgbGEgc2VyaWUgZW4gdmVydGljYWwgKi9cbiAgICAubWFyZ2luLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDExcmVtO1xuICAgIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObraComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-obra',
            templateUrl: './obra.component.html',
            styleUrls: ['./obra.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "DAe9":
    /*!******************************************************!*\
      !*** ./src/app/obra-child3/obra-child3.component.ts ***!
      \******************************************************/

    /*! exports provided: ObraChild3Component */

    /***/
    function DAe9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObraChild3Component", function () {
        return ObraChild3Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ObraChild3Component = /*#__PURE__*/function () {
        function ObraChild3Component() {
          _classCallCheck(this, ObraChild3Component);
        }

        _createClass(ObraChild3Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ObraChild3Component;
      }();

      ObraChild3Component.ɵfac = function ObraChild3Component_Factory(t) {
        return new (t || ObraChild3Component)();
      };

      ObraChild3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ObraChild3Component,
        selectors: [["app-obra-child3"]],
        decls: 16,
        vars: 0,
        consts: [[1, "mt-5", "mr-5", "ml-5", "acuarelas-css", "transition-slow-css"], [1, "cards"], [1, "bg-dark", "card", "scale"], ["src", "../assets/images/acuarelas/1.png", "alt", "Acuarela de Gustavo Silverati. El primero de la serie Acuarelas", 1, "card-img"], ["src", "../assets/images/acuarelas/2.png", "alt", "Acuarela de Gustavo Silverati. El segundo de la serie Acuarelas", 1, "card-img", "acuarela"], ["src", "../assets/images/acuarelas/3.png", "alt", "Acuarela de Gustavo Silverati. El tercero de la serie Acuarelas", 1, "card-img"], ["src", "../assets/images/acuarelas/4.png", "alt", "Acuarela de Gustavo Silverati. El cuarto de la serie Acuarelas", 1, "card-img", "acuarela"], ["src", "../assets/images/acuarelas/5.png", "alt", "Acuarela de Gustavo Silverati. El primero de la serie Acuarelas", 1, "card-img"], ["src", "../assets/images/acuarelas/6.png", "alt", "Acuarela de Gustavo Silverati. El segundo de la serie Acuarelas", 1, "card-img", "acuarela"]],
        template: function ObraChild3Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".cards[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n@media screen and (min-width: 768px) {\n    .cards[_ngcontent-%COMP%] {\n        flex-direction: row;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2JyYS1jaGlsZDMvb2JyYS1jaGlsZDMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBR0E7Ozs7R0FJRyIsImZpbGUiOiJzcmMvYXBwL29icmEtY2hpbGQzL29icmEtY2hpbGQzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5jYXJkcyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxufVxuXG5cbi8qIEFjdWFyZWxhcyBpbXBhclxuXG4uYW5jaG8ge1xuICAgIHdpZHRoOiA2MCU7XG59ICovIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObraChild3Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-obra-child3',
            templateUrl: './obra-child3.component.html',
            styleUrls: ['./obra-child3.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "DNZ7":
    /*!******************************************************!*\
      !*** ./src/app/home-header/home-header.component.ts ***!
      \******************************************************/

    /*! exports provided: HomeHeaderComponent */

    /***/
    function DNZ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeHeaderComponent", function () {
        return HomeHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeHeaderComponent = /*#__PURE__*/function () {
        function HomeHeaderComponent() {
          _classCallCheck(this, HomeHeaderComponent);
        }

        _createClass(HomeHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeHeaderComponent;
      }();

      HomeHeaderComponent.ɵfac = function HomeHeaderComponent_Factory(t) {
        return new (t || HomeHeaderComponent)();
      };

      HomeHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeHeaderComponent,
        selectors: [["app-home-header"]],
        decls: 9,
        vars: 0,
        consts: [[1, "position-all-home"], [1, "flex-background"], ["src", "../assets/images/home/el-principio.jpg", "alt", "Obra titulada 'El principio de lo eterno' pintada por Gustavo Silverati.", 1, "background", "img-responsive"], [1, "mt-5", "position-div-home"], [1, "text-home-title", "transition-css"], [1, "text-home-p", "transition-slow-css"]],
        template: function HomeHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gustavo Silverati");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " PINTURAS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".position-all-home[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.background[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 100vh;\n}\n\n.flex-background[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.position-div-home[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: transparent;\n}\n\n.text-home-title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: ligther;\n    font-size: 4rem;\n    background-color: transparent;\n    margin: 0 2rem;\n}\n\n.text-home-p[_ngcontent-%COMP%] {\n    font-weight: ligther;\n    text-align: center;\n    font-size: 2rem;\n    margin: 0 2rem 2rem 2rem;\n    background-color: transparent;\n    letter-spacing: 2rem;\n}\n\n@media screen and (max-width: 768px) {\n    .background[_ngcontent-%COMP%] {\n        \n        height: auto;\n        visibility: hidden;\n    }\n    .position-div-home[_ngcontent-%COMP%] {\n        position: static;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n    }\n    .position-all-home[_ngcontent-%COMP%] {\n        position: static;\n    }\n    .text-home-title[_ngcontent-%COMP%] {\n        font-size: 4rem;\n    }\n    .text-home-p[_ngcontent-%COMP%] {\n        font-size: 1.5rem;\n        text-align: center;\n        margin: 0;\n        letter-spacing: 1rem;\n        \n        margin-right: -1rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1oZWFkZXIvaG9tZS1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0k7UUFDSSxxRUFBcUU7UUFDckUsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxvQkFBb0I7UUFDcEIsb0RBQW9EO1FBQ3BELG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1oZWFkZXIvaG9tZS1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3NpdGlvbi1hbGwtaG9tZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDB2aDtcbn1cblxuLmZsZXgtYmFja2dyb3VuZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBvc2l0aW9uLWRpdi1ob21lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50ZXh0LWhvbWUtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogbGlndGhlcjtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luOiAwIDJyZW07XG59XG5cbi50ZXh0LWhvbWUtcCB7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ3RoZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBtYXJnaW46IDAgMnJlbSAycmVtIDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmJhY2tncm91bmQge1xuICAgICAgICAvKiBQYXJhIHF1ZSBubyB1c2UgZWwgYWx0byBkZSBsYSBpbWFnZW4geSBhcGFyZXpjYSB1biBzY3JvbGwgdmFjaW8uICovXG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgICAucG9zaXRpb24tZGl2LWhvbWUge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgLnBvc2l0aW9uLWFsbC1ob21lIHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICB9XG4gICAgLnRleHQtaG9tZS10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB9XG4gICAgLnRleHQtaG9tZS1wIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXJlbTtcbiAgICAgICAgLyogUGFyYSBjb250cmFyZXN0YXIgZWwgc3BhY2luZyBlbiBsYSB1bHRpbWEgbGV0cmEgKi9cbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home-header',
            templateUrl: './home-header.component.html',
            styleUrls: ['./home-header.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "GExm":
    /*!******************************************************!*\
      !*** ./src/app/obra-child2/obra-child2.component.ts ***!
      \******************************************************/

    /*! exports provided: ObraChild2Component */

    /***/
    function GExm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObraChild2Component", function () {
        return ObraChild2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ObraChild2Component = /*#__PURE__*/function () {
        function ObraChild2Component() {
          _classCallCheck(this, ObraChild2Component);
        }

        _createClass(ObraChild2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ObraChild2Component;
      }();

      ObraChild2Component.ɵfac = function ObraChild2Component_Factory(t) {
        return new (t || ObraChild2Component)();
      };

      ObraChild2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ObraChild2Component,
        selectors: [["app-obra-child2"]],
        decls: 92,
        vars: 0,
        consts: [[1, "mt-5", "card-columns", "transition-slow-css"], [1, "bg-dark", "card", "scale"], ["src", "../assets/images/paisajes/atardecer-en-San-Luis.png", "alt", "Cuadro de Paisaje llamado Atardecer en San Luis", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["src", "../assets/images/paisajes/ocaso.png", "alt", "Cuadro de paisaje llamado Ocaso", 1, "card-img-top"], ["src", "../assets/images/paisajes/sueno-onirico.png", "alt", "Cuadro de paisaje llamado Sue\xF1o on\xEDrico con caballos", 1, "card-img-top"], ["src", "../assets/images/paisajes/colores-de-purmamarca.png", "alt", "Cuadro de paisaje llamado colores de purmamarca", 1, "card-img-top"], ["src", "../assets/images/paisajes/verde-sinfonia.png", "alt", "Cuadro de paisaje llamado verde sinfonia", 1, "card-img-top"], ["src", "../assets/images/paisajes/paisaje-mendocino.png", "alt", "Cuadro de paisaje llamado paisaje mendocino", 1, "card-img-top"], ["src", "../assets/images/paisajes/recuerdo-un-abril.png", "alt", "Cuadro de paisaje llamado Recuerdo un Abril", 1, "card-img-top"], ["src", "../assets/images/paisajes/reflejos.png", "alt", "Cuadro de paisaje llamado reflejos", 1, "card-img-top"], ["src", "../assets/images/paisajes/un-dia-de-otono.png", "alt", "Cuadro de paisaje llamado un dia de oto\xF1o", 1, "card-img-top"], ["src", "../assets/images/paisajes/esas-nubecitas.png", "alt", "Cuadro de paisaje llamado esas nubecitas", 1, "card-img-top"], ["src", "../assets/images/paisajes/cuando-llega-el-alba.png", "alt", "Cuadro de paisaje llamado cuando llega el alba", 1, "card-img-top"], ["src", "../assets/images/paisajes/dorado-atardecer.jpg", "alt", "Cuadro de paisaje llamado dorado atardecer", 1, "card-img-top"], ["src", "../assets/images/paisajes/el-camino-encantado.jpg", "alt", "Cuadro de paisaje llamado el camino encantado", 1, "card-img-top"]],
        template: function ObraChild2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Atardecer en San Luis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Oleo s/MDF entelado 40 x 30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ocaso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Oleo s/tela 80 x 30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sue\xF1o on\xEDrico con caballos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Oleo s/tela 80 x 50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Colores de Purmamarca");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Oleo s/MDF entelada 70 x 50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Verde Sinfon\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Oleo s/tela 50 x 50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Paisaje mendocino");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Oleo s/MDF entelado 70 x 50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Recuerdo un Abril");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Oleo s/MDF entelado 70 x 50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Reflejos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Oleo s/MDF entelado 35 x 27");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Un d\xEDa de oto\xF1o");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Oleo s/MDF entelado 40 x 30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Esas Nubecitas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Oleo s/MDF entelado 50 x 40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Cuando llega el alba");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Oleo s/MDF entelado 70 x 50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Dorado atardecer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Oleo sobre mdf entelado 50 x 70");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h5", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "El camino encantado");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Oleo sobre mdf entelado 50 x 70");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".card-columns[_ngcontent-%COMP%] {\n    @include media-breakpoint-only(lg) {\n        -moz-column-count: 4;\n             column-count: 4;\n    }\n    @include media-breakpoint-only(xl) {\n        -moz-column-count: 5;\n             column-count: 5;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2JyYS1jaGlsZDIvb2JyYS1jaGlsZDIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksb0JBQWU7YUFBZixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxvQkFBZTthQUFmLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL29icmEtY2hpbGQyL29icmEtY2hpbGQyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb2x1bW5zIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LW9ubHkobGcpIHtcbiAgICAgICAgY29sdW1uLWNvdW50OiA0O1xuICAgIH1cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LW9ubHkoeGwpIHtcbiAgICAgICAgY29sdW1uLWNvdW50OiA1O1xuICAgIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObraChild2Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-obra-child2',
            templateUrl: './obra-child2.component.html',
            styleUrls: ['./obra-child2.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AppComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_35_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.playMusic();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_37_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.pauseMusic();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/home"];
      };

      var _c1 = function _c1() {
        return ["/obra"];
      };

      var _c2 = function _c2() {
        return ["/obra/espertise"];
      };

      var _c3 = function _c3() {
        return ["/obra/paisajes"];
      };

      var _c4 = function _c4() {
        return ["/obra/acuarelas"];
      };

      var _c5 = function _c5() {
        return ["/prensa"];
      };

      var _c6 = function _c6() {
        return ["/about"];
      };

      var _c7 = function _c7() {
        return ["/contacto"];
      };

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'Gustavo Silverati';
          this.home = 'Home';
          this.obra = 'Obra';
          this.prensa = 'Prensa';
          this.acercaDe = 'Acerca de';
          this.contacto = 'Contacto'; // 

          this.condition_default = false;
        }

        _createClass(AppComponent, [{
          key: "playMusic",
          value: function playMusic() {
            // El casteo para que funcione la funcion play() y pause()
            var statusMusic = document.getElementById('myAudio');

            if (this.condition_default == false) {
              statusMusic.play(); // Manejo del boolean para switchear el font awesome de los iconos en el front.

              this.condition_default = !this.condition_default;
            }

            return this.condition_default;
          }
        }, {
          key: "pauseMusic",
          value: function pauseMusic() {
            // El casteo para que funcione la funcion play() y pause()
            var statusMusic = document.getElementById('myAudio');

            if (this.condition_default == true) {
              statusMusic.pause(); // Manejo del boolean para switchear el font awesome de los iconos en el front.

              this.condition_default = !this.condition_default;
            }

            return this.condition_default;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 42,
        vars: 33,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "transition-very-slow-css"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "navbar-items-flex", "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], ["data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-link", "active", "navbar-item-flex", 3, "routerLink"], [1, "nav-item", "dropdown"], ["id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "navbar-item-flex", 3, "routerLink", "click"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "transition-css", 3, "click"], ["data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "dropdown-item", "item-css", 3, "routerLink"], [1, "nav-item"], ["data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-link", "navbar-item-flex", 3, "routerLink"], ["class", "nav-link navbar-item-flex music-nav", 3, "click", 4, "ngIf"], ["id", "myAudio", "loop", ""], ["src", "../assets/music/resolana.mp3", "type", "audio/mpeg"], [1, "nav-link", "navbar-item-flex", "music-nav", 3, "click"], [1, "fas", "fa-play"], [1, "fas", "fa-pause"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_11_listener() {
              return ctx.playMusic();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_14_listener() {
              return ctx.playMusic();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Serie \"El Exp\xE9rtise de las mariposas\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Serie \"Paisajes\"");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Acuarelas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AppComponent_div_35_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AppComponent_div_37_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "audio", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "source", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Tu navegador no soporta el tag de audio. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 15, ctx.home));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 17, ctx.obra), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c4));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 19, ctx.prensa), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c6));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 21, ctx.acercaDe));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c7));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 23, ctx.contacto));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.condition_default);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.condition_default);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "UvRC":
    /*!************************************************!*\
      !*** ./src/app/contacto/contacto.component.ts ***!
      \************************************************/

    /*! exports provided: ContactoComponent */

    /***/
    function UvRC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactoComponent", function () {
        return ContactoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactoComponent = /*#__PURE__*/function () {
        function ContactoComponent() {
          _classCallCheck(this, ContactoComponent);
        }

        _createClass(ContactoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactoComponent;
      }();

      ContactoComponent.ɵfac = function ContactoComponent_Factory(t) {
        return new (t || ContactoComponent)();
      };

      ContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactoComponent,
        selectors: [["app-contacto"]],
        decls: 32,
        vars: 0,
        consts: [[1, "container"], [1, "row", "mt-5", "contact-flex"], [1, "col-lg", "img-flex", "transition-slow-css"], ["src", "../assets/images/contacto/contacto.jpg", "alt", "Gustavo Silverati pintando en su taller", 1, "img-contact"], [1, "col-lg", "text-flex", "transition-css"], [1, "font-weight-bold"], [1, "mt-3"], ["href", "https://www.linkedin.com/in/emanuelsegura/", "target", "_blank", 1, "link"]],
        template: function ContactoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contacto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Para contactarse o consultar por las obras:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "silveratigustavo@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Celular:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " +542494634009");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Agradecimientos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Dise\xF1o Web:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Emanuel Segura");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Producci\xF3n:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Mat\xEDas Silverati");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Fotograf\xEDa:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Octavio Silverati");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".contact-flex[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin-bottom: 8rem;\n}\n\n.img-contact[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: 5px;\n}\n\n.img-flex[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.text-flex[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    text-align: justify;\n    text-justify: inter-word;\n    font-size: 1.3rem;\n    font-weight: lighter;\n    margin-top: 2rem;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n    color: white;\n}\n\n@media screen and (min-width: 768px) {\n    .text-flex[_ngcontent-%COMP%] {\n        margin-top: 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvL2NvbnRhY3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDhyZW07XG59XG5cbi5pbWctY29udGFjdCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmltZy1mbGV4IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4ubGluazpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC50ZXh0LWZsZXgge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contacto',
            templateUrl: './contacto.component.html',
            styleUrls: ['./contacto.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home-header/home-header.component */
      "DNZ7");
      /* harmony import */


      var _obra_obra_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./obra/obra.component */
      "D1Nz");
      /* harmony import */


      var _prensa_prensa_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./prensa/prensa.component */
      "1Xd2");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./contacto/contacto.component */
      "UvRC");
      /* harmony import */


      var _obra_child1_obra_child1_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./obra-child1/obra-child1.component */
      "eXK7");
      /* harmony import */


      var _obra_child2_obra_child2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./obra-child2/obra-child2.component */
      "GExm");
      /* harmony import */


      var _obra_child3_obra_child3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./obra-child3/obra-child3.component */
      "DAe9");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_4__["HomeHeaderComponent"], _obra_obra_component__WEBPACK_IMPORTED_MODULE_5__["ObraComponent"], _prensa_prensa_component__WEBPACK_IMPORTED_MODULE_6__["PrensaComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__["ContactoComponent"], _obra_child1_obra_child1_component__WEBPACK_IMPORTED_MODULE_9__["ObraChild1Component"], _obra_child2_obra_child2_component__WEBPACK_IMPORTED_MODULE_10__["ObraChild2Component"], _obra_child3_obra_child3_component__WEBPACK_IMPORTED_MODULE_11__["ObraChild3Component"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_4__["HomeHeaderComponent"], _obra_obra_component__WEBPACK_IMPORTED_MODULE_5__["ObraComponent"], _prensa_prensa_component__WEBPACK_IMPORTED_MODULE_6__["PrensaComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__["ContactoComponent"], _obra_child1_obra_child1_component__WEBPACK_IMPORTED_MODULE_9__["ObraChild1Component"], _obra_child2_obra_child2_component__WEBPACK_IMPORTED_MODULE_10__["ObraChild2Component"], _obra_child3_obra_child3_component__WEBPACK_IMPORTED_MODULE_11__["ObraChild3Component"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "eXK7":
    /*!******************************************************!*\
      !*** ./src/app/obra-child1/obra-child1.component.ts ***!
      \******************************************************/

    /*! exports provided: ObraChild1Component */

    /***/
    function eXK7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ObraChild1Component", function () {
        return ObraChild1Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ObraChild1Component = /*#__PURE__*/function () {
        function ObraChild1Component() {
          _classCallCheck(this, ObraChild1Component);
        }

        _createClass(ObraChild1Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ObraChild1Component;
      }();

      ObraChild1Component.ɵfac = function ObraChild1Component_Factory(t) {
        return new (t || ObraChild1Component)();
      };

      ObraChild1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ObraChild1Component,
        selectors: [["app-obra-child1"]],
        decls: 336,
        vars: 0,
        consts: [[1, "transition-slow-css"], [1, "mt-5", "obra-margin"], [1, "row", "obra-css"], [1, "col-md-6", "obra-child"], [1, "card-block"], [1, "card-title"], [1, "card-text"], [1, "col-md-6", "mt-2", "position-img"], ["src", "../assets/images/espertise/1.png", "alt", "Obra El expertise de las mariposas", 1, "dimensiones-img"], [1, "p-1", "text-center", "epigrafe"], [1, "col-md-6", "mt-2"], ["src", "../assets/images/espertise/2.png", "alt", "Obra El elixir de amor", 1, "w-100"], [1, "col-md-12", "mt-2", "position-img"], ["src", "../assets/images/espertise/3.png", "alt", "Obra Donde descansan las ninfas del mar", 1, "dimensiones-img"], ["src", "../assets/images/espertise/4.png", "alt", "Obra El escondite de las ranas", 1, "w-100"], ["src", "../assets/images/espertise/5.png", "alt", "Obra Cardumen primero", 1, "dimensiones-img"], ["src", "../assets/images/espertise/6.png", "alt", "Obra Arlequin en estado liquido", 1, "w-100"], ["src", "../assets/images/espertise/7.png", "alt", "Obra Florida a las 17:45 horas", 1, "dimensiones-img"], ["src", "../assets/images/espertise/8.png", "alt", "Obra El romance del Sr. Pulpo y la Srta. Medusa", 1, "w-100"], ["src", "../assets/images/espertise/9.png", "alt", "Obra Cardumen 2", 1, "dimensiones-img"], ["src", "../assets/images/espertise/10.png", "alt", "Obra voyeur de un abismo", 1, "w-100"], [1, "p-1", "text-right", "epigrafe"], ["src", "../assets/images/espertise/11.png", "alt", "Obra the final cut", 1, "dimensiones-img"], [1, "col-md-4", "col-xs-4", "obra-child"], [1, "col-md-8", "col-xs-8", "mt-2"], ["src", "../assets/images/espertise/12.png", "alt", "Obra casandra", 1, "w-100"], ["src", "../assets/images/espertise/13.jpg", "alt", "Obra: Si dejase de so\xF1ar.", 1, "dimensiones-img"], [1, "col-md-12", "mt-2", "text-center"], ["src", "../assets/images/espertise/26.jpg", "alt", "Obra: Conjuro.", 1, "dimensiones-img-extra"], ["src", "../assets/images/espertise/14.png", "alt", "Obra sublime deus", 1, "w-100"], ["src", "../assets/images/espertise/15.jpg", "alt", "Obra manha de carnaval", 1, "dimensiones-img"], ["src", "../assets/images/espertise/16.png", "alt", "Obra angel para un final", 1, "w-100"], [1, "poesia"], ["src", "../assets/images/espertise/17.png", "alt", "Obra el fuego fugaz de los amores de paso", 1, "w-100"], ["src", "../assets/images/espertise/18.jpg", "alt", "Obra el vuelo de icaro", 1, "dimensiones-img"], ["src", "../assets/images/espertise/19.png", "alt", "Obra sueno del juicio final", 1, "dimensiones-img"], ["src", "../assets/images/espertise/20.png", "alt", "Obra nube de mariposas", 1, "dimensiones-img"], ["src", "../assets/images/espertise/21.png", "alt", "Obra la herida del dragon", 1, "dimensiones-img-extra"], [1, "col-md-4", "obra-child"], [1, "col-md-8", "mt-2", "position-img"], ["src", "../assets/images/espertise/22.jpg", "alt", "Obra: El principio de lo eterno.", 1, "dimensiones-img"], [1, "col", "mt-2", "position-img"], ["src", "../assets/images/espertise/23.png", "alt", "Obra cuando se te oxida el alma", 1, "dimensiones-img-extra-xxl"], ["src", "../assets/images/espertise/24.jpg", "alt", "Obra soy lo prohibido", 1, "dimensiones-img-extra"], ["src", "../assets/images/espertise/25.jpg", "alt", "Obra: Ave del para\xEDso.", 1, "dimensiones-img-extra"]],
        template: function ObraChild1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "El Exp\xE9rtise de las Mariposas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Siempre me deslumbraron las mariposas y su m\xE1gica transformaci\xF3n, \u201Cla cris\xE1lida\u201D por la cual pasan de ser una oruga a una tan bella como fr\xE1gil mariposa.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Una vez que la metamorfosis se produce con \xE9xito, en la cris\xE1lida se abre una grieta y empieza a emerger la mariposa, esta se aferra a la cascara de la cris\xE1lida rota, las alas arrugadas se secan y comienzan a desplegarse, a la vez que la sangre del insecto fluye por todo su cuerpo y se prepara para el vuelo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "El proceso tarda alrededor de una hora y luego la mariposa puede volar. Esta hora es la que marcara el resto de su vida, es su \u201Cexpertise\u201D m\xE1s valioso. El esfuerzo que realiza para romper la grieta de la cris\xE1lida y el ejercicio para que sus alas se sequen y sus patas se desplieguen le permite despu\xE9s volar. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Alguna vez le\xED, que en una ocasi\xF3n, un investigador quiso facilitarle ese duro comienzo de vida a las mariposas, rompiendo \xE9l la cris\xE1lida, pero lo que consigui\xF3 no fue acelerar el proceso, sino que las mariposas cayeran al suelo y murieran por falta de fuerzas. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "El esfuerzo, por lo tanto, es la clave diaria de todo lo que somos y hacemos. Sin esfuerzo es imposible superar las dificultades, aprender y comprender al pr\xF3jimo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\"El expertise de las Mariposas\" Acr\xEDlico s/ tela 70 x 50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\"El elixir de amor\" Acr\xEDlico s/ tela 80 x 60");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "El elixir de amor (\u201CL\xB4elissir d\xB4amore\u201D) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Desde que escuche por vez primera esta exquisita opera de Gaetano Donizetti\xA0me vi seducido por su dulce armon\xEDa. El elixir de amor es una simple botella de vino, que un charlat\xE1n vende a un campesino simp\xE1tico y cr\xE9dulo llamado Nemorino, quien suspira por Adina, una rica hacendada.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Mientras la escuchaba, imagine colores, algunos intensos, otros en tono pastel, colores que aplique sobre el lienzo y en el que surgieron extra\xF1as burbujas y manchas;\xA0de esta manera realice esta pintura, que no dude en llamar \u201CEl elixir de amor\u201D. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\"Donde descansan las ninfas del mar\" Oleo y Barn\xEDz s/MDF entelado 40 x 30");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "El escondite de las ranas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\xC9ramos chicos con mi hermano Sandro y una de las cosas que m\xE1s nos entreten\xEDan, sobre todo a la hora de la siesta, en esos calurosos veranos de vacaciones, era cazar ranas.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "En esa \xE9poca, viv\xEDamos a la vera de una ruta, m\xE1s precisamente la ruta 215 que une el trayecto Cnel. Brandsen con la ciudad de La Plata.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Por el frente de nuestra humilde casa, levantada con mucho sacrificio por nuestro querido padre, pasaba un zanj\xF3n, con agua casi estancada, donde se criaban y reproduc\xEDan ranas. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Un simple palito del cual at\xE1bamos un piol\xEDn y en cuyo extremo coloc\xE1bamos un peque\xF1o trocito de carne, se convert\xEDa en nuestra eficaz herramienta de caza, las junt\xE1bamos por baldes para que nuestra madre las friera en una sart\xE9n por la noche, era una fiesta disfrutar de tan exquisito plato. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\"El escondite de las ranas\" Oleo y cera s/ papel de acuarela 28 x 22");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\"Cardumen I\" Oleo s/MDF entelado 24 x 18");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " \"Arlequ\xEDn en estado liquido\" Acr\xEDlico s/ tela 50 x 20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Arlequ\xEDn en estado l\xEDquido");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Colores de arlequ\xEDn, que en tantas oportunidades inspiraron al genio de Picasso, parecen surgir en forma de gotas liquidas impactadas sobre un fondo verde oscuro. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "La combinaci\xF3n de estos colores rojo, amarillo y anaranjados me sugirieron el t\xEDtulo de esta obra. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\"Florida 17:45\" Acr\xEDlico s/ tela 50 x 20");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "El romance del se\xF1or Pulpo y la se\xF1orita Medusa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "La misteriosa y fant\xE1stica relaci\xF3n entre un hombre mayor y una joven mujer, se ven reflejadas en esta pintura.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Como sucede con muchos \u201Camores imposibles\u201D, llenos de culpa y pasi\xF3n, la medusa intenta abandonar al pulpo, pero a la vez deja ser alcanzada y retenida una y otra vez por sus \xA0tent\xE1culos. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\"El romance del Sr. Pulpo y la Srta. Medusa\" Acr\xEDlico & Oleo s/ Tela 60 x 45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\"Cardumen II\" Oleo s/MDF entelado 50 x 40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\"Voyeur de un abismo\" Acrilico s/tela 90 x 35");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Voyeur de un abismo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Nietzsche escribi\xF3 \u201Ccuando miras al abismo, el abismo tambi\xE9n te mira a ti\u201D.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "El voyeur mira de forma furtiva, en realidad observa subrepticiamente como quien esp\xEDa detr\xE1s de una puerta, con la intenci\xF3n de no ser visto. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "La vida, algunas veces nos enfrenta al abismo, nos pone en su mismo l\xEDmite, desafi\xE1ndonos a seguir luchando, a bucear en nuestro interior, buscando esas fuerzas ocultas, que nos permitan seguir adelante. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\"The Final Cut\" Collage 28 x 22");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Casandra");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Si hay alguna maldici\xF3n cruel es sin duda la de conocer los males que van a acontecer y no poder hacer nada por evitarlos, siendo este el fatal destino de Casandra durante la conocida guerra de Troya. Casandra pertenec\xEDa a la Realeza Troyana siendo hija de Pr\xEDamo y de su esposa H\xE9cuba, reyes de Troya. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Era una joven ambiciosa y quer\xEDa tener un don especial por lo que rez\xF3 d\xEDa y noche al dios Apolo, dios al que se veneraba principalmente en la ciudad, para que le concediera el poder de la clarividencia para as\xED poder predecir el porvenir. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Apolo, enamorado de la bella joven, decidi\xF3 conced\xE9rselo una vez que esta le hubiese entregado su\xA0amor. Cuando ya le hab\xEDa concedido su deseo, Casandra reneg\xF3 de su amor por Apolo, lo que enfureci\xF3 al Dios. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\"Casandra\" Acrilico s/ tela 80 x 60");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\"Si dejase de so\xF1ar\" Acrilico sobre tela - 50 x 50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "img", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\"Conjuro\" Acrilico, \xF3leo y cera sobre papel - 28 x 22");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "\"Sublime Deus\" Acr\xEDlico y Barniz s/ papel de acuarela 28 x 22");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Sublime Deus");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "En esta Bula promulgada por el Papa Pablo III el 2 de Junio de 1537 se establec\xEDa el derecho a la libertad de los ind\xEDgenas de las indias, la prohibici\xF3n de someterlos a esclavitud y la conveniencia de predicar entre ellos la doctrina cristiana. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Ma\xF1ana de Carnaval (\u201CManha de Carnaval\u201D)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Esta dulce y a la vez melanc\xF3lica canci\xF3n que pertenece a Luis Bonf\xE1 y Antonio Mar\xEDa, fue el tema principal de la pel\xEDcula Orfeo Negro dirigida por el franc\xE9s Marcel Camus en 1959, con el carnaval de R\xEDo de Janeiro y el mito de Orfeo y Eur\xEDdice como protagonistas. Si bien a lo largo de los a\xF1os ha sido interpretada por muchos m\xFAsicos, con estilos muy distintos, la versi\xF3n que de la misma realizaron John Mc Laughlin, Paco de Lucia y Al Di Meola, es mi preferida. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\"Manha de Carnaval\" T\xE9cnica mixta, acr\xEDlico y \xF3leo, sobre MDF - 28 x 22. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\"Angel para un final\" Acr\xEDlico, Oleo y Barniz s/MDF entelado 60 x 40 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "\xC1ngel para un final");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "La poes\xEDa del cubano Silvio Rodr\xEDguez, refleja en la letra de esta hermosa canci\xF3n, de manera magistral, el desamor.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "\"Cuentan que cuando un silencio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Aparece entre dos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Era que pasaba un \xE1ngel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Que les robaba la voz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Y hubo tal silencio el d\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Que nos tocaba olvidar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Que de tal suerte yo todav\xEDa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "No termine de callar\".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "El Fuego Fugaz de los Amores de Paso");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " \xDAltimamente ando con problemas de insomnio. Desde hace algunos milenios, me cuesta dormir. Y dormir me gusta, me gusta mucho, porque cuando duermo, sue\xF1o. Entonces me hago amante o amanta, me quemo en el fuego fugaz de los amores de paso, soy c\xF3mico de la legua, pescador de alta mar o gitana adivinadora de la suerte; del \xE1rbol prohibido devoro hasta las hojas y bebo y bailo hasta rodar por los suelos\u2026 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Fragmento de \u201CTeolog\xEDa/3\u201D - El libro de los abrazos - Eduardo Galeano");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "\"El fuego fugaz de los amores de paso\" Acrilico sobre collage de etiquetas - 59 x 40 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "\"El vuelo de \xCDcaro\" Acrilico s/ tela 80 x 60 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "El vuelo de \xCDcaro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "\xCDcaro estaba retenido junto a su padre, D\xE9dalo, en la isla de\xA0Creta\xA0por el rey de la isla, llamado\xA0Minos. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "D\xE9dalo decidi\xF3 escapar de la isla en secreto, pero dado que Minos controlaba las aguas y la tierra, D\xE9dalo se puso a trabajar para fabricar alas para \xE9l y su joven hijo, \xCDcaro. Enlaz\xF3 plumas entre s\xED uniendo con hilo las plumas centrales y con cera las laterales, y le dio al conjunto la suave curvatura de las alas de un p\xE1jaro. \xCDcaro a veces corr\xEDa a recoger del suelo las plumas que el viento se hab\xEDa llevado o ablandaba la cera. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Cuando al fin termin\xF3 el trabajo, D\xE9dalo bati\xF3 sus alas y se hall\xF3 subiendo y suspendido en el aire. Equip\xF3 entonces a su hijo de la misma manera, y le ense\xF1\xF3 c\xF3mo volar. Cuando ambos estuvieron preparados para volar, D\xE9dalo advirti\xF3 a \xCDcaro que no volase demasiado alto porque el calor del sol derretir\xEDa la cera, ni demasiado bajo porque la espuma del mar mojar\xEDa las alas y no podr\xEDa volar. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Pasaron las islas de Samos, Delos, Paros, Lebintos y Calimna, entonces el muchacho comenz\xF3 a ascender.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "El ardiente sol abland\xF3 la cera que manten\xEDa unidas las plumas y estas se despegaron. \xCDcaro agit\xF3 sus brazos, pero no quedaban suficientes plumas para sostenerlo en el aire y cay\xF3 al mar. Su padre llor\xF3 y lamentando amargamente sus artes, y, en su memoria, llam\xF3\xA0Icaria\xA0a la tierra cercana al lugar del mar en el que \xCDcaro hab\xEDa ca\xEDdo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "D\xE9dalo lleg\xF3 sano y salvo a\xA0Sicilia, donde qued\xF3 bajo la protecci\xF3n del rey\xA0C\xF3calo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Intentar volar demasiado alto puede hacerte caer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "\"Sue\xF1o del juicio final\" Acr\xEDlico s/ papel de acuarela 28 x 22");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Nube de Mariposas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Un d\xEDa vi una nube de mariposas, o quiz\xE1s la imagin\xE9, no s\xE9, vaya a saber. Miles de mariposas, que desde el margen del r\xEDo Iguaz\xFA, levantaban vuelo, pero no eran las\xA0 amarronadas y gris\xE1ceas \u201Cautographa gamma\u201D que en alguna oportunidad ti\xF1eron el cielo de Madrid, fen\xF3meno que se repite cada cierto tiempo, probablemente relacionado con las abundantes lluvias de primavera, despu\xE9s de la puesta del sol. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Las que yo vi, o imagine, eran de brillantes colores que contrastaban con el color verdoso azulado del r\xEDo, formando una colorida nube. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "\"Nube de Mariposas\" Acr\xEDlico, Barniz y Oleo s/MDF entelado 50 x 40");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "\"La herida del Drag\xF3n\" Acr\xEDlico y Oleo s/tela 70 x 50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "La Herida del Drag\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Hera impuso a\xA0H\xE9rcules, el desaf\xEDo de afrontar doce dif\xEDciles pruebas, los doce trabajos de\xA0H\xE9rcules, de los cuales, el segundo era vencer a la temible Hidra de Lerna. Su principal caracter\xEDstica es que al cortarle una cabeza le salen otras dos. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "En vistas a su segundo trabajo,\xA0H\xE9rcules fue instruido para matar a la Hidra de Lerna. La bestia hab\xEDa sido criada en los pantanos desde donde se marchar\xEDa a las planicies para acometer reba\xF1os y asolar la tierra. La Hidra era de enorme tama\xF1o, con ocho cabezas mortales, y una novena en el centro que era inmortal.\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "H\xE9rcules\xA0simboliza el orden instituido por los seres humanos, esto es, la cultura. La Hidra representa el \xABcaos\xBB de la naturaleza en estado virgen, la realidad que a\xFAn no ha sido modificada por el hombre.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "El principio de lo eterno");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Quien puede comprobar si algo o alguien es eterno?, humanamente es imposible, solo se nos concede conocer el principio y el final de las cosas. El paso del tiempo es inexorable, al menos para los mortales. Detener el tiempo en los buenos momentos que la vida nos regala, solo es posible en la fantas\xEDa de un cuento, como el de Peter Pan, donde el cocodrilo se devora un reloj para detenerlo. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "\"El principio de lo eterno\" Acrilico sobre tela - 35 x 45");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "img", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "\"Cuando se te oxida el alma\" T\xE9cnica mixta, acr\xEDlico y \xF3leo, sobre tela - 30 x 60 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "img", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "\"Soy lo prohibido\" T\xE9cnica mixta, acr\xEDlico, \xF3leo y cera, sobre collage de cartulina - 28 x 22 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "article", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "img", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "\"Ave del para\xEDso\" Acrilico sobre tela - 50 x 50");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".obra-css[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin: 0 2rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    text-align: center;\n}\n\n.card-text[_ngcontent-%COMP%] {\n    font-size: x-large;\n    text-align: justify;\n}\n\n.dimensiones-img[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n\n\n.dimensiones-img-extra[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.dimensiones-img-extra-xl[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n\n\n.dimensiones-img-extra-xxl[_ngcontent-%COMP%] {\n    width: 38%;\n}\n\n.position-img[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n\n\n\n\n\n\n.obra-margin[_ngcontent-%COMP%] {\n    margin: 3rem 0 6rem 0;\n}\n\n\n\n.epigrafe[_ngcontent-%COMP%] {\n    font-size: 1rem;\n}\n\n\n\n.poesia[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: x-large;\n    font-style: italic;\n}\n\n@media (min-width: 768px) {\n    .card-title[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        text-align: left;\n    }\n    .card-text[_ngcontent-%COMP%] {\n        font-size: 1.3rem;\n        text-align: justify;\n    }\n    .epigrafe[_ngcontent-%COMP%] {\n        font-size: 1.3rem;\n    }\n    \n    .verticales-par[_ngcontent-%COMP%] {\n        display: flex;\n    }\n    \n    .dimensiones-img[_ngcontent-%COMP%] {\n        width: 80%;\n    }\n    \n    .dimensiones-img-extra[_ngcontent-%COMP%] {\n        width: 70%;\n    }\n    .dimensiones-img-extra-xl[_ngcontent-%COMP%] {\n        width: 60%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2JyYS1jaGlsZDEvb2JyYS1jaGlsZDEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUdBLDBCQUEwQjs7QUFFMUI7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBR0EsNEJBQTRCOztBQUU1QjtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFHQSwyRUFBMkU7O0FBRzNFOztHQUVHOztBQUdILHNDQUFzQzs7QUFFdEM7SUFDSSxxQkFBcUI7QUFDekI7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJLGVBQWU7QUFDbkI7O0FBR0EscUJBQXFCOztBQUVyQjtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQSwrREFBK0Q7SUFDL0Q7UUFDSSxhQUFhO0lBQ2pCO0lBQ0EsK0JBQStCO0lBQy9CO1FBQ0ksVUFBVTtJQUNkO0lBQ0EsMEJBQTBCO0lBQzFCO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL29icmEtY2hpbGQxL29icmEtY2hpbGQxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub2JyYS1jc3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDJyZW07XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmRpbWVuc2lvbmVzLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuLyogQ3VhbmRvIHNvbiBtdXkgYWx0YXMuICovXG5cbi5kaW1lbnNpb25lcy1pbWctZXh0cmEge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZGltZW5zaW9uZXMtaW1nLWV4dHJhLXhsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4vKiBDdWFuZG8gc29uIE1VWVlZWSBhbHRhcyAqL1xuXG4uZGltZW5zaW9uZXMtaW1nLWV4dHJhLXh4bCB7XG4gICAgd2lkdGg6IDM4JTtcbn1cblxuLnBvc2l0aW9uLWltZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi8qIERpbWVuc2lvbmVzIHBhcmEgcXVlIG5vIHNlIGVzdGlyZW4gbGFzIGltYWdlbmVzIGNvbiBjbGFzZXMgdy0xMDAgaC0xMDAgKi9cblxuXG4vKiAuZGltZW5zaW9uZXMtdG9wZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59ICovXG5cblxuLyogTWFyZ2VuIGRlIGxvcyBhcnRpY3Vsb3MgY29uIHRleHRvICovXG5cbi5vYnJhLW1hcmdpbiB7XG4gICAgbWFyZ2luOiAzcmVtIDAgNnJlbSAwO1xufVxuXG5cbi8qIGVwaWdyYWZlIGZvdG9zICovXG5cbi5lcGlncmFmZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5cbi8qIGZyYWdtZW50byBwb2VzaWEgKi9cblxuLnBvZXNpYSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgLmNhcmQtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cbiAgICAuZXBpZ3JhZmUge1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG4gICAgLyogQWNvbW9kYXIgbG9zIGN1YWRyb3MgdmVydGljYWxlcyBwYXJhIGFwcm92ZWNoYXIgZWwgZXNwYWNpbyAqL1xuICAgIC52ZXJ0aWNhbGVzLXBhciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC8qIERpbWVuc2lvbmVzIGltZyBlbiBkZXNrdG9wICovXG4gICAgLmRpbWVuc2lvbmVzLWltZyB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICAgIC8qIEN1YW5kbyBzb24gbXV5IGFsdGFzLiAqL1xuICAgIC5kaW1lbnNpb25lcy1pbWctZXh0cmEge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgIH1cbiAgICAuZGltZW5zaW9uZXMtaW1nLWV4dHJhLXhsIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObraChild1Component, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-obra-child1',
            templateUrl: './obra-child1.component.html',
            styleUrls: ['./obra-child1.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contacto/contacto.component */
      "UvRC");
      /* harmony import */


      var _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home-header/home-header.component */
      "DNZ7");
      /* harmony import */


      var _obra_child1_obra_child1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./obra-child1/obra-child1.component */
      "eXK7");
      /* harmony import */


      var _obra_child2_obra_child2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./obra-child2/obra-child2.component */
      "GExm");
      /* harmony import */


      var _obra_child3_obra_child3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./obra-child3/obra-child3.component */
      "DAe9");
      /* harmony import */


      var _obra_obra_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./obra/obra.component */
      "D1Nz");
      /* harmony import */


      var _prensa_prensa_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./prensa/prensa.component */
      "1Xd2");

      var routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _home_header_home_header_component__WEBPACK_IMPORTED_MODULE_4__["HomeHeaderComponent"]
      }, {
        path: 'obra',
        component: _obra_obra_component__WEBPACK_IMPORTED_MODULE_8__["ObraComponent"]
      }, {
        path: 'prensa',
        component: _prensa_prensa_component__WEBPACK_IMPORTED_MODULE_9__["PrensaComponent"]
      }, {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
      }, {
        path: 'contacto',
        component: _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_3__["ContactoComponent"]
      }, // Obras
      {
        path: 'obra/espertise',
        component: _obra_child1_obra_child1_component__WEBPACK_IMPORTED_MODULE_5__["ObraChild1Component"]
      }, {
        path: 'obra/paisajes',
        component: _obra_child2_obra_child2_component__WEBPACK_IMPORTED_MODULE_6__["ObraChild2Component"]
      }, {
        path: 'obra/acuarelas',
        component: _obra_child3_obra_child3_component__WEBPACK_IMPORTED_MODULE_7__["ObraChild3Component"]
      }]; // [RouterModule.forRoot(routes, { useHash: true })],
      // En prod. usar usehash true para evitar errores 404

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map