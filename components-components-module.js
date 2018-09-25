(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-components-module"],{

/***/ "./src/app/components/alerts/alerts.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/alerts/alerts.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Alerts</h2>\r\n\r\n<h4 class=\"mt-4\">Default</h4>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"alert alert-primary\" role=\"alert\">\r\n      This is a primary alert—check it out!\r\n    </div>\r\n    <div class=\"alert alert-secondary\" role=\"alert\">\r\n      This is a secondary alert—check it out!\r\n    </div>\r\n    <div class=\"alert alert-success\" role=\"alert\">\r\n      This is a success alert—check it out!\r\n    </div>\r\n    <div class=\"alert alert-danger\" role=\"alert\">\r\n      This is a danger alert—check it out!\r\n    </div>\r\n    <div class=\"alert alert-warning\" role=\"alert\">\r\n      This is a warning alert—check it out!\r\n    </div>\r\n    <div class=\"alert alert-info\" role=\"alert\">\r\n      This is a info alert—check it out!\r\n    </div>\r\n    <div class=\"alert alert-light\" role=\"alert\">\r\n      This is a light alert—check it out!\r\n    </div>\r\n    <div class=\"alert alert-dark\" role=\"alert\">\r\n      This is a dark alert—check it out!\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<h4 class=\"mt-4\">Link</h4>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"alert alert-primary\" role=\"alert\">\r\n      This is a primary alert with\r\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\r\n    </div>\r\n    <div class=\"alert alert-secondary\" role=\"alert\">\r\n      This is a secondary alert with\r\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\r\n    </div>\r\n    <div class=\"alert alert-success\" role=\"alert\">\r\n      This is a success alert with\r\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\r\n    </div>\r\n    <div class=\"alert alert-danger\" role=\"alert\">\r\n      This is a danger alert with\r\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\r\n    </div>\r\n    <div class=\"alert alert-warning\" role=\"alert\">\r\n      This is a warning alert with\r\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\r\n    </div>\r\n    <div class=\"alert alert-info\" role=\"alert\">\r\n      This is a info alert with\r\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\r\n    </div>\r\n    <div class=\"alert alert-light\" role=\"alert\">\r\n      This is a light alert with\r\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\r\n    </div>\r\n    <div class=\"alert alert-dark\" role=\"alert\">\r\n      This is a dark alert with\r\n      <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<h4 class=\"mt-4\">Additional content</h4>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"alert alert-success\" role=\"alert\">\r\n      <h4 class=\"alert-heading\">Well done!</h4>\r\n      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that\r\n        you can see how spacing within an alert works with this kind of content.</p>\r\n      <hr>\r\n      <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<h4 class=\"mt-4\">Dismissing</h4>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"alert alert-warning alert-dismissible fade show\" role=\"alert\">\r\n      <strong>Holy guacamole!</strong> You should check in on some of those fields below.\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"alert alert-primary alert-dismissible fade show\" role=\"alert\">\r\n      This is a primary alert—check it out!\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"alert alert-secondary alert-dismissible fade show\" role=\"alert\">\r\n      This is a secondary alert—check it out!\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n      This is a success alert—check it out!\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<h6 class=\"mt-5\">For complete information on Bootstrap 4 Alerts :\r\n    <a href=\"https://getbootstrap.com/docs/4.1/components/alerts/\" target=\"_blank\">Bootstrap 4 Alerts  <i class=\"material-icons\">launch</i></a>\r\n  </h6>\r\n"

/***/ }),

/***/ "./src/app/components/alerts/alerts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/alerts/alerts.component.ts ***!
  \*******************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlertsComponent = /** @class */ (function () {
    function AlertsComponent() {
    }
    AlertsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! ./alerts.component.html */ "./src/app/components/alerts/alerts.component.html")
        })
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/components/buttons/buttons.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/buttons/buttons.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center heading\">Buttons</h2>\r\n\r\n<div class=\"row mt-4\">\r\n  <div class=\"col-lg\">\r\n    <h4>Colored</h4>\r\n    <div class=\"card\">\r\n      <div class=\"card-body \">\r\n        <div class=\"text-center\">\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-primary\">Primary</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-secondary\">Secondary</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-success\">Success</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-danger\">Danger</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-warning\">Warning</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-info\">Info</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-light\">Light</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-dark\">Dark</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-link\">Link</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg mt-4 mt-md-0\">\r\n    <h4>Outline</h4>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"text-center\">\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-primary\">Primary</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-secondary\">Secondary</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-success\">Success</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-danger\">Danger</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-warning\">Warning</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-info\">Info</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-light\">Light</button>\r\n          <button type=\"button\" class=\"btn w-25 m-3 btn-outline-dark\">Dark</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<h4 class=\"mt-4\"> Sizes </h4>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <button type=\"button\" class=\"btn w-13 m-3 btn-primary btn-lg\">Large</button>\r\n    <button type=\"button\" class=\"btn w-13 m-3 btn-outline-primary btn-lg\">Large</button>\r\n    <button type=\"button\" class=\"btn w-13 m-3 btn-success\">Default</button>\r\n    <button type=\"button\" class=\"btn w-13 m-3 btn-outline-success\">Default</button>\r\n    <button type=\"button\" class=\"btn w-13 m-3 btn-warning btn-sm\">Small</button>\r\n    <button type=\"button\" class=\"btn w-13 m-3 btn-outline-warning btn-sm\">Small</button>\r\n  </div>\r\n</div>\r\n\r\n<h4 class=\"mt-4\">Types</h4>\r\n<div class=\"row\">\r\n  <div class=\"col-md \">\r\n    <h6>Default Border</h6>\r\n    <div class=\"card\">\r\n      <div class=\"card-body text-center\">\r\n        <button type=\"button\" class=\"btn w-30  m-3 btn-secondary\">Default</button>\r\n        <button type=\"button\" class=\"btn w-30  m-3 btn-outline-secondary\">Default</button>\r\n        <div class=\"w-100\"></div>\r\n        <button type=\"button\" class=\"btn w-30 w-sm-80 m-3 btn-dark\"><i class=\"material-icons\">volume_up</i> With Icon</button>\r\n        <button type=\"button\" class=\"btn w-30 w-sm-80 m-3 btn-outline-dark\"><i class=\"material-icons\">mic</i> With Icon</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md mt-3 mt-md-0\">\r\n    <h6>Rounded Border</h6>\r\n    <div class=\"card\">\r\n      <div class=\"card-body text-center\">      \r\n        <button type=\"button\" class=\"btn  w-30 m-3 btn-round btn-info\">Round</button>\r\n        <button type=\"button\" class=\"btn  w-30 m-3 btn-round btn-outline-info\">Round</button>\r\n        <div class=\"w-100\"></div>\r\n        <button type=\"button\" class=\"btn  w-30 w-sm-80 m-3 btn-round btn-warning\"><i class=\"material-icons\">check</i> With Icon</button>\r\n        <button type=\"button\" class=\"btn  w-30 w-sm-80 m-3 btn-round btn-outline-warning\"><i class=\"material-icons\">warning</i> With Icon</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  \r\n<h6 class=\"mt-3\">Only Icons</h6>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <button type=\"button\" class=\"btn m-3 btn-primary btn-just-icon\"><i class=\"material-icons\">send</i></button>\r\n    <button type=\"button\" class=\"btn m-3 btn-outline-primary btn-just-icon\"><i class=\"material-icons\">chat</i></button>\r\n    <button type=\"button\" class=\"btn m-3 btn-light btn-just-icon\"><i class=\"material-icons\">volume_up</i></button>\r\n    <button type=\"button\" class=\"btn m-3 btn-outline-light btn-just-icon\"><i class=\"material-icons\">videocam</i></button>\r\n    <button type=\"button\" class=\"btn m-3 btn-success rounded-circle btn-just-icon\"><i class=\"material-icons\">edit</i></button>\r\n    <button type=\"button\" class=\"btn m-3 btn-outline-success rounded-circle btn-just-icon\"><i class=\"material-icons\">add</i></button>\r\n    <button type=\"button\" class=\"btn m-3 btn-danger rounded-circle btn-just-icon\"><i class=\"material-icons\">favorite</i></button>\r\n    <button type=\"button\" class=\"btn m-3 btn-outline-danger rounded-circle btn-just-icon\"><i class=\"material-icons\">close</i></button>\r\n  </div>\r\n</div>\r\n\r\n<h6 class=\"mt-3\">Block Level</h6>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <button type=\"button\" class=\"btn my-3 btn-primary btn-md btn-block\">Block level button</button>\r\n    <button type=\"button\" class=\"btn btn-round my-3 btn-outline-primary btn-md btn-block\">Block level button</button>\r\n  </div>\r\n</div>\r\n\r\n<h4 class=\"mt-4\">Groups</h4>\r\n<h6>Horizontal Group</h6>\r\n<div class=\"card\">\r\n  <div class=\"card-body text-center\">\r\n    <div class=\"btn-group m-3\">\r\n      <button type=\"button\" class=\"btn btn-primary\">Left</button>\r\n      <button type=\"button\" class=\"btn btn-primary\">Middle</button>\r\n      <button type=\"button\" class=\"btn btn-primary\">Right</button>\r\n    </div>\r\n    <div class=\"btn-group m-3\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary\">Left</button>\r\n      <button type=\"button\" class=\"btn btn-outline-primary\">Midddle</button>\r\n      <button type=\"button\" class=\"btn btn-outline-primary\">Right</button>\r\n    </div>\r\n    <div class=\"btn-group-round m-3\">\r\n      <button type=\"button\" class=\"btn btn-secondary\">First</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\">Second</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\">Third</button>\r\n    </div>\r\n    <div class=\"btn-group-round m-3\">\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\">First</button>\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Second</button>\r\n      <button type=\"button\" class=\"btn btn-outline-secondary\">Third</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<h6 class=\"mt-3\">Vertical Group</h6>\r\n<div class=\"card\">\r\n  <div class=\"card-body text-center\">\r\n    <div class=\"btn-group btn-group-vertical m-3\">\r\n      <button type=\"button\" class=\"btn text-left btn-info\"> ALL </button>\r\n      <button type=\"button\" class=\"btn text-left btn-info\"> Published </button>\r\n      <button type=\"button\" class=\"btn text-left btn-info\"> Unpublished </button>\r\n      <button type=\"button\" class=\"btn text-left btn-info\"> Draft </button>\r\n    </div>\r\n    <div class=\"btn-group btn-group-vertical m-3\">\r\n      <button type=\"button\" class=\"btn btn-outline-info\"> One  </button>\r\n      <button type=\"button\" class=\"btn btn-outline-info\"> Two </button>\r\n      <button type=\"button\" class=\"btn btn-outline-info\"> Three </button>\r\n      <button type=\"button\" class=\"btn btn-outline-info\"> Four </button>\r\n    </div>\r\n    <div class=\"w-100 show-sm\"></div>\r\n    <!-- <div class=\"btn-group-round btn-group-vertical m-3\">\r\n      <button type=\"button\" class=\"btn pl-4 text-left btn-light\"> ALL </button>\r\n      <button type=\"button\" class=\"btn pl-4 text-left btn-light\"> Published </button>\r\n      <button type=\"button\" class=\"btn pl-4 text-left btn-light\"> Unpublished </button>\r\n      <button type=\"button\" class=\"btn pl-4 text-left btn-light\"> Draft </button>\r\n    </div> -->\r\n    <div class=\"btn-group-round btn-group-vertical m-3\">\r\n      <button type=\"button\" class=\"btn btn-outline-light\"> One </button>\r\n      <button type=\"button\" class=\"btn btn-outline-light\"> Two </button>\r\n      <button type=\"button\" class=\"btn btn-outline-light\"> Three </button>\r\n      <button type=\"button\" class=\"btn btn-outline-light\"> Four </button>\r\n    </div>\r\n    <div class=\"btn-group btn-group-vertical m-3\">\r\n      <button type=\"button\" class=\"btn btn-dark\" disabled> GROUP </button>\r\n      <button type=\"button\" class=\"btn btn-outline-dark\"> A </button>\r\n      <button type=\"button\" class=\"btn btn-outline-dark\"> B </button>\r\n      <button type=\"button\" class=\"btn btn-outline-dark\"> C </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<h6 class=\"mt-3\">Group with Icons</h6>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-8 text-center\">\r\n        <div class=\"btn-group m-3\">\r\n          <button type=\"button\" class=\"btn btn-success hide-sm\"> <i class=\"fa fa-fw fa-mail-forward\"></i> Forward</button>\r\n          <button type=\"button\" class=\"btn btn-success\"> <i class=\"fa fa-fw fa-archive\"></i> Archive</button>\r\n          <button type=\"button\" class=\"btn btn-success\"> <i class=\"fa fa-fw fa-folder\"></i> Move</button>\r\n        </div>\r\n        <!-- <div class=\"btn-group m-3\">\r\n          <button type=\"button\" class=\"btn btn-outline-success \"> <i class=\"fa fa-fw fa-pencil\"></i>Create</button>\r\n          <button type=\"button\" class=\"btn btn-outline-success\"> <i class=\"fa fa-fw fa-book\"></i>Read</button>\r\n          <button type=\"button\" class=\"btn btn-outline-success hide-sm\"> <i class=\"fa fa-fw fa-upload\"></i>upload</button>\r\n        </div> -->\r\n        <div class=\"btn-group m-3\">\r\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-caret-left\"></i>Left</button>\r\n          <button type=\"button\" class=\"btn btn-dark\" disabled>Middle</button>\r\n          <button type=\"button\" class=\"btn btn-outline-dark\"> Right <i class=\"fa fa-fw fa-caret-right\"></i></button>\r\n        </div>\r\n        <!-- <div class=\"btn-group-round m-3\">\r\n          <button type=\"button\" class=\"btn btn-danger\"> <i class=\"fa fa-fw fa-mail-forward\"></i> Forward</button>\r\n          <button type=\"button\" class=\"btn btn-danger hide-sm\"> <i class=\"fa fa-fw fa-archive\"></i> Archive</button>\r\n          <button type=\"button\" class=\"btn btn-danger \"> <i class=\"fa fa-fw fa-folder\"></i> Move</button>\r\n        </div> -->\r\n        <div class=\"btn-group-round m-3\">\r\n          <button type=\"button\" class=\"btn btn-outline-danger\"> <i class=\"fa fa-fw fa-pencil\"></i>Create</button>\r\n          <button type=\"button\" class=\"btn btn-outline-danger hide-sm\"> <i class=\"fa fa-fw fa-book\"></i>Read</button>\r\n          <button type=\"button\" class=\"btn btn-outline-danger\"> <i class=\"fa fa-fw fa-upload\"></i>upload</button>\r\n        </div>\r\n        <div class=\"btn-group-round m-3\">\r\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-caret-left\"></i>Left</button>\r\n          <button type=\"button\" class=\"btn btn-dark\" disabled>Middle</button>\r\n          <button type=\"button\" class=\"btn btn-outline-dark\"> Right <i class=\"fa fa-fw fa-caret-right\"></i></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col text-center\">\r\n        <div class=\"btn-group btn-group-vertical m-3\">\r\n          <button type=\"button\" class=\"btn btn-info\"> <i class=\"fa fa-fw fa-euro\"></i>EUR </button>\r\n          <button type=\"button\" class=\"btn btn-info\"> <i class=\"fa fa-fw fa-gbp\"></i> GBP </button>\r\n          <button type=\"button\" class=\"btn btn-info\"> <i class=\"fa fa-fw fa-dollar\"></i> USD </button>\r\n        </div>\r\n        <div class=\"btn-group btn-group-vertical m-3\">\r\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-euro\"></i>EUR </button>\r\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-gbp\"></i> GBP </button>\r\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-dollar\"></i> USD </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n    \r\n<h6 class=\"mt-3\">Group only Icons</h6>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-8 text-center\">\r\n        <div class=\"btn-group m-3\">\r\n          <button type=\"button\" class=\"btn btn-primary\"> <i class=\"fa fa-fw fa-align-left\"></i> </button>\r\n          <button type=\"button\" class=\"btn btn-primary\"> <i class=\"fa fa-fw fa-align-justify\"></i> </button>\r\n          <button type=\"button\" class=\"btn btn-primary\"> <i class=\"fa fa-fw fa-align-right\"></i> </button>\r\n        </div>\r\n        <div class=\"btn-group m-3\">\r\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-align-left\"></i> </button>\r\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-align-justify\"></i> </button>\r\n          <button type=\"button\" class=\"btn btn-outline-dark\"> <i class=\"fa fa-fw fa-align-right\"></i> </button>\r\n        </div>\r\n        <div class=\"btn-group-round m-3\">\r\n          <button type=\"button\" class=\"btn btn-secondary\"> <i class=\"fa fa-fw fa-bold\"></i> </button>\r\n          <button type=\"button\" class=\"btn btn-secondary\"> <i class=\"fa fa-fw fa-italic\"></i> </button>\r\n          <button type=\"button\" class=\"btn btn-secondary\"> <i class=\"fa fa-fw fa-underline\"></i> </button>\r\n        </div>\r\n        <div class=\"btn-group-round m-3\">\r\n        <button type=\"button\" class=\"btn btn-outline-success\"> <i class=\"fa fa-fw fa-bold\"></i> </button>\r\n        <button type=\"button\" class=\"btn btn-outline-success\"> <i class=\"fa fa-fw fa-italic\"></i> </button>\r\n          <button type=\"button\" class=\"btn btn-outline-success\"> <i class=\"fa fa-fw fa-underline\"></i> </button>\r\n        </div>\r\n        <div class=\"btn-group-round m-3\">\r\n          <button type=\"button\" class=\"btn btn-warning\"> <i class=\"fa fa-fw fa-plus\"></i> </button>\r\n          <button type=\"button\" class=\"btn btn-outline-warning\"> <i class=\"fa fa-fw fa-minus\"></i> </button>\r\n        </div>\r\n        <div class=\"btn-group-round m-3\">\r\n          <button type=\"button\" class=\"btn btn-outline-light\"> <i class=\"fa fa-fw fa-backward\"></i> </button>\r\n          <button type=\"button\" class=\"btn btn-light\"> <i class=\"fa fa-fw fa-play\"></i> </button>\r\n          <button type=\"button\" class=\"btn btn-outline-light\"> <i class=\"fa fa-fw fa-forward\"></i> </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col text-center\">\r\n        <div class=\"btn-group btn-group-vertical m-3\">\r\n          <button type=\"button\" class=\"btn btn-outline-primary\"> <i class=\"fa fa-fw fa-bar-chart\"></i> </button>\r\n          <button type=\"button\" class=\"btn btn-outline-primary\"> <i class=\"fa fa-fw fa-pie-chart\"></i>  </button>\r\n          <button type=\"button\" class=\"btn btn-outline-primary\"> <i class=\"fa fa-fw fa-line-chart\"></i> </button>\r\n        </div>\r\n        <div class=\"btn-group-round btn-group-vertical m-3\">\r\n          <button type=\"button\" class=\"btn btn-dark\"> <i class=\"fa fa-fw fa-bar-chart\"></i> </button>\r\n          <button type=\"button\" class=\"btn btn-dark\"> <i class=\"fa fa-fw fa-pie-chart\"></i>  </button>\r\n          <button type=\"button\" class=\"btn btn-dark\"> <i class=\"fa fa-fw fa-line-chart\"></i> </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<h4 class=\"mt-4\">Pagination</h4>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\" p-4 bg-primary\"> <h4 class=\"text-white\"> Current Page no : <span class=\"text-white\">{{ paginationPage }}</span>  </h4>  </div>\r\n    <div class=\"row p-md-3\">\r\n      <div class=\"col-md\">\r\n        <ul class=\"pagination\">\r\n          <li class=\"page-item\">  <a class=\"page-link \" (click)=\"decPage()\"><i class=\"material-icons\">keyboard_arrow_left</i></a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 1 \"><a class=\"page-link\" (click)=\"goToPage(1)\">1</a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 2 \"><a class=\"page-link\" (click)=\"goToPage(2)\">2</a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 3 \"><a class=\"page-link\" (click)=\"goToPage(3)\">3</a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 4 \"><a class=\"page-link\" (click)=\"goToPage(4)\">4</a></li>\r\n          <li class=\"page-item hide-sm\" [class.active]=\"paginationPage === 5 \"><a class=\"page-link\"  (click)=\"goToPage(5)\">5</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"incPage()\"><i class=\"material-icons\">keyboard_arrow_right</i></a></li>\r\n        </ul>\r\n        <ul class=\"pagination-round\">\r\n          <li class=\"page-item\">  <a class=\"page-link \" (click)=\"decPage()\"><i class=\"material-icons\">keyboard_arrow_left</i></a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 1 \" ><a class=\"page-link\" (click)=\"goToPage(1)\">1</a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 2 \" ><a class=\"page-link\" (click)=\"goToPage(2)\">2</a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 3 \" ><a class=\"page-link\" (click)=\"goToPage(3)\">3</a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 4 \" ><a class=\"page-link\" (click)=\"goToPage(4)\">4</a></li>\r\n          <li class=\"page-item hide-sm\"  [class.active]=\"paginationPage === 5 \"><a class=\"page-link\" (click)=\"goToPage(5)\">5</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"incPage()\"><i class=\"material-icons\">keyboard_arrow_right</i></a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md\">\r\n        <ul class=\"pagination-shwd\">\r\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"decPage()\"><i class=\"material-icons\">keyboard_arrow_left</i></a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 1 \"><a class=\"page-link\" (click)=\"goToPage(1)\">1</a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 2 \"><a class=\"page-link\" (click)=\"goToPage(2)\">2</a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 3 \"><a class=\"page-link\" (click)=\"goToPage(3)\">3</a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 4 \"><a class=\"page-link\" (click)=\"goToPage(4)\">4</a></li>\r\n          <li class=\"page-item hide-sm\" [class.active]=\"paginationPage ===  5\"><a class=\"page-link\" (click)=\"goToPage(5)\">5</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"incPage()\"><i class=\"material-icons\">keyboard_arrow_right</i></a></li>\r\n        </ul>\r\n        <ul class=\"pagination-round-shwd\">\r\n          <li class=\"page-item\"><a class=\"page-link \" (click)=\"decPage()\"><i class=\"material-icons\">keyboard_arrow_left</i></a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 1 \"><a class=\"page-link\" (click)=\"goToPage(1)\">1</a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 2 \"><a class=\"page-link\" (click)=\"goToPage(2)\">2</a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 3 \"><a class=\"page-link\" (click)=\"goToPage(3)\">3</a></li>\r\n          <li class=\"page-item\" [class.active]=\"paginationPage === 4 \"><a class=\"page-link\" (click)=\"goToPage(4)\">4</a></li>\r\n          <li class=\"page-item hide-sm\" [class.active]=\"paginationPage === 5 \"><a class=\"page-link\" (click)=\"goToPage(5)\">5</a></li>\r\n          <li class=\"page-item\"><a class=\"page-link\" (click)=\"incPage()\"><i class=\"material-icons\">keyboard_arrow_right</i></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/buttons/buttons.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/buttons/buttons.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**** fonts ****/\n/**** colcor ****/\n/**** z-index ******/\n/**** navbar ****/\n/**** sidebar ****/\n/** other **/\n/***** custom scrollbar webkit browser (not supported in firefox) ****/\n/** hover bg color **/\n.w-13 {\n  width: 13%; }\n.w-30 {\n  width: 30%; }\n.show-sm {\n  display: none; }\n@media (max-width: 1199.98px) {\n  .m-3 {\n    margin: .3rem !important; }\n  .w-25 {\n    width: 30% !important; }\n  .w-30 {\n    width: 45% !important; }\n  .w-13 {\n    width: 15% !important; } }\n@media (max-width: 991.98px) {\n  .w-25 {\n    width: 20% !important; } }\n@media (max-width: 767.98px) {\n  .w-13, .w-25, .w-30 {\n    width: 45% !important; }\n  .w-sm-80 {\n    width: 80% !important; }\n  .m-3 {\n    margin: .3rem !important; }\n  .hide-sm {\n    display: none; }\n  .show-sm {\n    display: block; } }\n"

/***/ }),

/***/ "./src/app/components/buttons/buttons.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/buttons/buttons.component.ts ***!
  \*********************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.paginationPage = 1;
    }
    ButtonsComponent.prototype.incPage = function () {
        if (this.paginationPage < 5) {
            this.paginationPage++;
        }
    };
    ButtonsComponent.prototype.decPage = function () {
        if (this.paginationPage > 1) {
            this.paginationPage--;
        }
    };
    ButtonsComponent.prototype.goToPage = function (number) {
        this.paginationPage = number;
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/app/components/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/components/buttons/buttons.component.scss")]
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/components/components-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/components-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ComponentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutingModule", function() { return ComponentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alerts/alerts.component */ "./src/app/components/alerts/alerts.component.ts");
/* harmony import */ var _grids_grids_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grids/grids.component */ "./src/app/components/grids/grids.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/components/icons/icons.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/components/panels/panels.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'alerts', component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__["AlertsComponent"] },
    { path: 'buttons', component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsComponent"] },
    { path: 'grids', component: _grids_grids_component__WEBPACK_IMPORTED_MODULE_4__["GridsComponent"] },
    { path: 'icons', component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__["IconsComponent"] },
    { path: 'notifications', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"] },
    { path: 'panels', component: _panels_panels_component__WEBPACK_IMPORTED_MODULE_8__["PanelsComponent"] },
    { path: 'typography', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__["TypographyComponent"] }
];
var ComponentsRoutingModule = /** @class */ (function () {
    function ComponentsRoutingModule() {
    }
    ComponentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ComponentsRoutingModule);
    return ComponentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var _grids_grids_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grids/grids.component */ "./src/app/components/grids/grids.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/components/icons/icons.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alerts/alerts.component */ "./src/app/components/alerts/alerts.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/components/panels/panels.component.ts");
/* harmony import */ var _components_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components-routing.module */ "./src/app/components/components-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_routing_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
            ],
            declarations: [_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsComponent"], _grids_grids_component__WEBPACK_IMPORTED_MODULE_3__["GridsComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"], _icons_icons_component__WEBPACK_IMPORTED_MODULE_5__["IconsComponent"], _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__["TypographyComponent"], _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_7__["AlertsComponent"], _panels_panels_component__WEBPACK_IMPORTED_MODULE_8__["PanelsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/grids/grids.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/grids/grids.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center heading\">Grid System</h2>\r\n\r\n<div class=\"grid-system mt-4\">\r\n  <h4>Always Horizontal</h4>\r\n  <h6 class=\"mt-2\">Equally distributed across all devices automatiaclly</h6>\r\n  <div class=\"row\">\r\n    <div class=\"col px-2 py-0\" *ngFor=\"let n of [0,1,2,3,4,5,7,8,9,10,11]\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <h6 class=\"mt-2\">Four columns across all devices</h6>\r\n  <div class=\"row\">\r\n    <div class=\"col-3 px-2 py-0\" *ngFor=\"let n of [0,1,2,3]\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col-3</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <h6 class=\"mt-2\">Three columns across all devices</h6>\r\n  <div class=\"row\">\r\n    <div class=\"col-4 px-2 py-0\" *ngFor=\"let n of [0,1,2]\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col-4</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <h6 class=\"mt-2\">Two columns across all devices</h6>\r\n  <div class=\"row\">\r\n    <div class=\"col-6 px-2 py-0\" *ngFor=\"let n of [0,1]\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col-6</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <h6 class=\"mt-2\">Single columns across all devices</h6>\r\n  <div class=\"row\">\r\n    <div class=\"col-12 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col-12</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <h4 class=\"mt-4\">Mixed Columns</h4> \r\n  <!-- <h6 class=\"mt-2\">Showing different sizes on different screens</h6> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 col-lg-4\" *ngFor=\"let n of [0,1,2,3,4,5]\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col-md-6 .col-lg-4</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <h4 class=\"mt-4\">Column wrapping</h4>\r\n  <div class=\"row\">\r\n    <div class=\"col-9 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col-9</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col-4\r\n          <br>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-6 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col-6\r\n          <br>Subsequent columns continue along the new line.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <h4 class=\"mt-4\">Offsetting columns</h4>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col-md-4</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4 offset-md-4\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col-md-4 .offset-md-4</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3 offset-md-3\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col-md-4 .offset-md-4</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 offset-md-3\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col-md-4 .offset-md-4</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 offset-md-3\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">.col-md-6 .offset-md-3</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  <h4 class=\"mt-4\">Vertical alignment</h4>\r\n  <div class=\"row alignment\">\r\n    <div class=\"col px-2 py-0 align-self-start\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">One of three columns</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col px-2 py-0 align-self-center\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">One of three columns</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col px-2 py-0 align-self-end\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">One of three columns</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  <h4 class=\"mt-4\">Horizontal alignment</h4>\r\n  <div class=\"row justify-content-start\">\r\n    <div class=\"col-4 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-4 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-end\">\r\n    <div class=\"col-4 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-around\">\r\n    <div class=\"col-4 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row justify-content-between\">\r\n    <div class=\"col-4 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4 px-2 py-0\">\r\n      <div class=\"card m-1 p-1\">\r\n        <div class=\"card-body text-center m-1 p-1\">One of two columns</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <h4 class=\"mt-4\">Example</h4>\r\n  <div class=\"card\">\r\n    <div class=\"card-body m-1\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-9\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md\">\r\n              <h5>Column 1</h5>\r\n             <p> Lorem ipsum dolor sit amet orem ipsum dolor sit amet consectetur, adipisicing elit.</p>\r\n            </div>\r\n            <div class=\"col-md\">\r\n              <h5>Column 2</h5>\r\n             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p> \r\n            </div>\r\n            <div class=\"w-100\"></div>\r\n            <div class=\"col-md\">\r\n              <h5>Column 3</h5>\r\n             <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt maxime voluptate molestiae placeat minima facilis, natus\r\n              corporis fugit voluptates </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md\">\r\n          <h5>Column 4</h5>\r\n         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt maxime voluptate molestiae placeat minima facilis, natus\r\n          corporis fugit voluptates </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <p class=\"mt-4 text-muted d-block\">For complete information on Bootstrap 4 Grid system :\r\n    <a href=\"https://getbootstrap.com/docs/4.1/layout/grid/\" target=\"_blank\">Bootstrap 4 Docs  <i class=\"material-icons\" style=\"font-size: .9rem\">launch</i></a>\r\n  </p>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/grids/grids.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/grids/grids.component.ts ***!
  \*****************************************************/
/*! exports provided: GridsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsComponent", function() { return GridsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridsComponent = /** @class */ (function () {
    function GridsComponent() {
    }
    GridsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grids',
            template: __webpack_require__(/*! ./grids.component.html */ "./src/app/components/grids/grids.component.html"),
            styles: ['.alignment{height:200px;}']
        })
    ], GridsComponent);
    return GridsComponent;
}());



/***/ }),

/***/ "./src/app/components/icons/icons.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/icons/icons.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"heading text-center\">Icons</h2>\r\n\r\n<div class=\"icons\">\r\n  <h4 class=\"mt-4\">Material Icons</h4>\r\n  <div class=\"card\">\r\n    <div class=\"card-body px-5 py-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col ex-md-icons p-3\" *ngFor=\"let icon of materialIcons\">\r\n          <i class=\"material-icons\">{{icon}}</i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p class=\"d-block text-muted text-right\">See All Material Icons : <a href=\"https://material.io/tools/icons/\" target=\"_blank\"> Matrial.io <i class=\"material-icons\" style=\"font-size: .9rem\">launch</i></a> </p>\r\n\r\n  <br>\r\n  <h4 class=\"mt-4\">Font Awesome Icons</h4>\r\n  <div class=\"card\">\r\n    <div class=\"card-body px-5 py-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col ex-fa-icons p-4\" *ngFor=\"let icon of fontAwesome\">\r\n          <i class=\"fa fa-{{icon}}\"></i>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p class=\"d-block text-muted text-right\">See All Font Awesome Icons : <a href=\"https://fontawesome.com/v4.7.0/icons/\"> Font Awsome <i class=\"material-icons\" style=\"font-size: .9rem\">launch</i></a></p>\r\n</div>"

/***/ }),

/***/ "./src/app/components/icons/icons.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/icons/icons.component.ts ***!
  \*****************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
        this.materialIcons = ['3d_rotation', 'accessibility', 'accessibility_new', 'accessible', 'keyboard_backspace', 'power',
            'accessible_forward', 'account_balance', 'account_balance_wallet', 'account_box', 'keyboard_arrow_right', 'cake',
            'account_circle', 'add_shopping_cart', 'alarm', 'alarm_add', 'alarm_off', 'alarm_on', 'videogame_asset', 'people',
            'all_out', 'android', 'announcement', 'done', 'done_all', 'done_outline', 'folder', 'computer', 'smartphone', 'mood',
            'donut_large', 'fingerprint', 'grade', 'group_work', 'help_outline', 'info', 'language', 'watch', 'tv', 'details',
            'launch', 'line_style', 'maximize', 'minimize', 'motorcycle', 'note_add', 'open_in_new', 'camera', 'dehaze', 'close',
            'payment', 'room', 'pets', 'search', 'reorder', 'settings', 'shop', 'star', 'subject', 'stores', 'crop_original', 'wc',
            'toc', 'today', 'toll', 'update', 'zoom_in', 'zoom_out', 'work', 'work_off', 'work_outline', 'control_point', 'menu',
            'error', 'warning', 'airplay', 'album', 'av_timer', 'equalizer', 'hd', 'games', 'mic', 'mic_none', 'crop', 'filter',
            'pause', 'note', 'play_arrow', 'videocam', 'videocam_off', 'volume_up', 'volume_mute', 'music_note', 'slideshow',
            'call', 'call_end', 'chat', 'forum', 'email', 'add', 'clear', 'create', 'block', 'ballot', 'drafts', 'navigate_before',
            'forward', 'reply', 'cloud', 'send', 'undo', 'bluetooth', 'style', 'timer', 'hotel', 'flight', 'layers', 'map', 'check'
        ];
        this.fontAwesome = ['address-book', 'address-card', 'adjust', 'anchor', 'archive', 'area-chart', 'arrows', 'arrows-h', 'arrows-v',
            'asterisk', 'at', 'automobile', 'balance-scale', 'ban', 'bar-chart', 'bath', 'battery-0', 'battery-1', 'battery-2', 'battery-3',
            'beer', 'bell', 'bicycle', 'binoculars', 'blind', 'bolt', 'bomb', 'book', 'bookmark', 'braille', 'bug', 'bus', 'cab', 'camera',
            'child', 'cloud', 'code', 'coffee', 'cog', 'cogs', 'credit-card', 'cube', 'cutlery', 'desktop', 'edit', 'envelope', 'eraser',
            'external-link', 'fighter-jet', 'file-photo-o', 'filter', 'fire', 'flash', 'flask', 'folder', 'gamepad', 'group', 'heart',
            'handshake-o', 'hourglass', 'i-cursor', 'industry', 'info', 'key', 'location-arrow', 'magic', 'male', 'map', 'map-signs',
            'motorcycle', 'paint-brush', 'paper-plane', 'percent', 'phone', 'power-off', 'refresh', 'reply', 'server', 'sign-in', 'sign-out',
            'sliders', 'snowflake-o', 'soccer-ball-o', 'sort', 'sort-asc', 'spinner', 'spoon', 'star-half-empty', 'sticky-note', 'street-view',
            'suitcase', 'sun-o', 'tachometer', 'tag', 'tags', 'television', 'terminal', 'thermometer', 'thumb-tack', 'thumbs-down', 'thumbs-o-up',
            'ticket', 'times', 'times-circle', 'tint', 'toggle-off', 'toggle-on', 'tree', 'umbrella', 'university', 'unlock', 'user', 'user-secret',
            'vcard', 'video-camera', 'volume-control-phone', 'volume-down', 'volume-off', 'volume-up', 'warning', 'wheelchair', 'window-close-o',
            'wifi', 'wrench', 'btc', 'money', 'ils', 'eur', 'inr', 'usd'
        ];
    }
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icons',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/app/components/icons/icons.component.html"),
            styles: ['.ex-md-icons i{font-size: 40px;} .ex-fa-icons i{font-size: 35px;}']
        })
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/components/notifications/notifications.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <h2 class=\"heading text-center\">Notifications</h2>\r\n<!--\r\n<br>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <form [formGroup]=\"form\">\r\n      <div class=\"form-group\">\r\n        <label for=\"type\">Type select</label>\r\n        <select id=\"type\" class=\"form-control\" name=\"type\" formControlName=\"type\">\r\n          <option *ngFor=\"let t of types\" [value]=\"t\">{{t}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"title\">Title</label>\r\n        <input class=\"form-control\" id=\"title\" name=\"title\" type=\"text\" formControlName=\"title\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"content\">Content</label>\r\n        <input class=\"form-control\" id=\"content\" name=\"content\" type=\"text\" formControlName=\"content\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"timeOut\">Time Out</label>\r\n        <input class=\"form-control\" id=\"timeOut\" name=\"timeOut\" type=\"number\" formControlName=\"timeOut\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"animate\">Animation</label>\r\n        <select class=\"form-control\" id=\"animate\" name=\"animate\" formControlName=\"animate\">\r\n          <option *ngFor=\"let t of animationTypes\" [value]=\"t\">{{t}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-inline\">\r\n        <label class=\"field-label\">Show progress bar?</label>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"showProgressBar\" id=\"showProgressBar-yes\" [value]=\"true\" formControlName=\"showProgressBar\">\r\n          <label class=\"form-check-label\" for=\"showProgressBar-yes\">Yes</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"showProgressBar\" id=\"showProgressBar-no\" [value]=\"false\" formControlName=\"showProgressBar\">\r\n          <label class=\"form-check-label\" for=\"showProgressBar-no\">No</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-inline\">\r\n        <label class=\"field-label\">Prevent Duplicates?</label>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"preventDuplicates\" id=\"preventDuplicates-yes\" [value]=\"true\" formControlName=\"preventDuplicates\">\r\n          <label class=\"form-check-label\" for=\"preventDuplicates-yes\">Yes</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"preventDuplicates\" id=\"preventDuplicates-no\" [value]=\"false\" formControlName=\"preventDuplicates\">\r\n          <label class=\"form-check-label\" for=\"preventDuplicates-no\">No</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-inline\">\r\n        <label class=\"field-label\">Prevent Last Duplicates?</label>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"preventLastDuplicates\" id=\"preventLastDuplicates-yes\" [value]=\"true\" formControlName=\"preventLastDuplicates\">\r\n          <label class=\"form-check-label\" for=\"preventLastDuplicates-yes\">Yes</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"preventLastDuplicates\" id=\"preventLastDuplicates-no\" [value]=\"false\" formControlName=\"preventLastDuplicates\">\r\n          <label class=\"form-check-label\" for=\"preventLastDuplicates-no\">No</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-inline\">\r\n        <label class=\"field-label\">Pause on hover?</label>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"pauseOnHover\" id=\"pauseOnHover-yes\" [value]=\"true\" formControlName=\"pauseOnHover\">\r\n          <label class=\"form-check-label\" for=\"pauseOnHover-yes\">Yes</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"pauseOnHover\" id=\"pauseOnHover-no\" [value]=\"false\" formControlName=\"pauseOnHover\">\r\n          <label class=\"form-check-label\" for=\"pauseOnHover-no\">No</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-inline\">\r\n        <label class=\"field-label\">Click to close?</label>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"clickToClose\" id=\"clickToClose-yes\" [value]=\"true\" formControlName=\"clickToClose\">\r\n          <label class=\"form-check-label\" for=\"clickToClose-yes\">Yes</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"clickToClose\" id=\"clickToClose-no\" [value]=\"false\" formControlName=\"clickToClose\">\r\n          <label class=\"form-check-label\" for=\"clickToClose-no\">No</label>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" (click)=\"create()\" class=\"btn btn-primary mb-2\">Confirm identity</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n<h6 class=\"text-right\">get detailed information at : <a href=\"https://github.com/flauc/angular2-notifications\"> angular2-notifications <i _ngcontent-c7=\"\" class=\"material-icons\">launch</i> </a></h6> -->\r\n"

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
// import { NotificationsService } from 'angular2-notifications';
// import { NotificationsService } from 'projects/angular6-notifications/src/public_api';
var NotificationsComponent = /** @class */ (function () {
    /*
        form: FormGroup;
      types = ['alert', 'error', 'info', 'warn', 'success'];
        animationTypes = ['fromRight', 'fromLeft', 'scale', 'rotate'];
        // options= {}
    
        logs: any[] = [];
    
      options: any = {
        progress: true,
        timeout: 1000 * 3,
        pauseOnHover: true,
        clickToClose: true,
        theme: 'default',
        rtl: false,
        className: 'my-notify',
        animate_in: 'notify-fade-in',
        animate_out: 'notify-fade-out',
        onCreate: item => {
          this.logs.push(item);
        },
        onDestroy: item => {
          this.logs.push(item);
        },
      };
    
      setting: any = {
        position: ['right', 'bottom'],
        offset: [20, 20],
        lastOnBottom: true,
        zIndex: 1031,
        minWidth: 300,
        maxWidth: 300,
      };
    
    */
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        /*	this.form = this.fb.group({
                type: 'success',
                title: 'This is just a title',
                content: 'This is just some content',
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: true,
                preventDuplicates: true,
                preventLastDuplicates: true,
                clickToClose: true,
                maxStack : 5,
                animate: 'fromRight'
            });*/
    };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__(/*! ./notifications.component.html */ "./src/app/components/notifications/notifications.component.html"),
            styles: ['']
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/components/panels/panels.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/panels/panels.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center heading\">Panels</h2>\r\n\r\n<h4 class=\"mt-4\">Horizontal Tabs</h4>\r\n<div class=\"row\">\r\n  <div class=\"col-xl\">\r\n    <h6>Default</h6>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"p-3 mb-4\">\r\n          <ul class=\"nav nav-tabs\" id=\"myTab1\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" id=\"home-tab1\" data-toggle=\"tab\" href=\"#home1\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" id=\"profile-tab1\" data-toggle=\"tab\" href=\"#profile1\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Profile</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" id=\"contact-tab1\" data-toggle=\"tab\" href=\"#contact1\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Contact</a>\r\n            </li>\r\n          </ul>\r\n          <div class=\"tab-content pt-2\" id=\"myTabContent1\">\r\n            <div class=\"tab-pane fade show active\" id=\"home1\" role=\"tabpanel\" aria-labelledby=\"home-tab\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n              master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n              dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum\r\n              iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</div>\r\n            <div class=\"tab-pane fade\" id=\"profile1\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore\r\n              velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.\r\n              Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.\r\n              Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero\r\n              magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts\r\n              beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint\r\n              qui sapiente accusamus tattooed echo park.</div>\r\n            <div class=\"tab-pane fade\" id=\"contact1\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack\r\n              lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore\r\n              carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred\r\n              pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice\r\n              blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable\r\n              tofu synth chambray yr.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl mt-4 mt-xl-0\">\r\n    <h6>With Icons</h6>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"p-3 mb-4\">\r\n          <ul class=\"nav nav-tabs\" id=\"myTab2\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" id=\"home2-tab\" data-toggle=\"tab\" href=\"#home2\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">\r\n                <i class=\"material-icons pr-2\"> home </i>Home</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" id=\"profile2-tab\" data-toggle=\"tab\" href=\"#profile2\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">\r\n                <i class=\"material-icons pr-2\"> person </i>Profile</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" id=\"contact2-tab\" data-toggle=\"tab\" href=\"#contact2\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">\r\n                <i class=\"material-icons pr-2\"> contacts </i>Contact</a>\r\n            </li>\r\n          </ul>\r\n          <div class=\"tab-content pt-2\" id=\"myTabContent2\">\r\n            <div class=\"tab-pane fade show active\" id=\"home2\" role=\"tabpanel\" aria-labelledby=\"home-tab\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth\r\n              master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh\r\n              dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip2 placeat salvia\r\n              cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</div>\r\n            <div class=\"tab-pane fade\" id=\"profile2\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation2 +1 labore\r\n              velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.\r\n              Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.\r\n              Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero\r\n              magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts\r\n              beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint\r\n              qui sapiente accusamus tattooed echo park.</div>\r\n            <div class=\"tab-pane fade\" id=\"contact2\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack\r\n              lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore\r\n              carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred\r\n              pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice\r\n              blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable\r\n              tofu synth chambray yr.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<h4 class=\"mt-4\">Vertical Tabs</h4>\r\n<h6>Default</h6>  \r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row p-3\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\r\n          <a class=\"nav-link active\" id=\"v-pills-home-tab\" data-toggle=\"pill\" href=\"#v-pills-home\" role=\"tab\" aria-controls=\"v-pills-home\"\r\n            aria-selected=\"true\">Home</a>\r\n          <a class=\"nav-link\" id=\"v-pills-profile-tab\" data-toggle=\"pill\" href=\"#v-pills-profile\" role=\"tab\" aria-controls=\"v-pills-profile\"\r\n            aria-selected=\"false\">Profile</a>\r\n          <a class=\"nav-link\" id=\"v-pills-messages-tab\" data-toggle=\"pill\" href=\"#v-pills-messages\" role=\"tab\" aria-controls=\"v-pills-messages\"\r\n            aria-selected=\"false\">Messages</a>\r\n          <a class=\"nav-link\" id=\"v-pills-settings-tab\" data-toggle=\"pill\" href=\"#v-pills-settings\" role=\"tab\" aria-controls=\"v-pills-settings\"\r\n            aria-selected=\"false\">Settings</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md\">\r\n        <div class=\"tab-content\" id=\"v-pills-tabContent\">\r\n          <div class=\"tab-pane fade show active\" id=\"v-pills-home\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt\r\n            do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit\r\n            excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit\r\n            mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</div>\r\n          <div class=\"tab-pane fade\" id=\"v-pills-profile\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna\r\n            pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id\r\n            veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu.\r\n            Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</div>\r\n          <div class=\"tab-pane fade\" id=\"v-pills-messages\" role=\"tabpanel\" aria-labelledby=\"v-pills-messages-tab\">Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris\r\n            ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit et et proident\r\n            Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna commodo est ea veniam consectetur.</div>\r\n          <div class=\"tab-pane fade\" id=\"v-pills-settings\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings-tab\">Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in\r\n            cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit\r\n            consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit adipisicing\r\n            labore officia magna elit nisi in aute tempor commodo eiusmod.div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<h6 class=\"mt-4\">With Icons</h6>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row p-3\">\r\n      <div class=\"col-md-3\">\r\n        <div class=\"nav flex-column nav-pills\" id=\"v-pills-tab1\" role=\"tablist\" aria-orientation=\"vertical\">\r\n          <a class=\"nav-link active\" id=\"v-pills-home1-tab\" data-toggle=\"pill\" href=\"#v-pills-home1\" role=\"tab\" aria-controls=\"v-pills-home1\"\r\n            aria-selected=\"true\"><i class=\"material-icons pr-2\">home</i> Home</a>\r\n          <a class=\"nav-link\" id=\"v-pills-profile2-tab\" data-toggle=\"pill\" href=\"#v-pills-profile2\" role=\"tab\" aria-controls=\"v-pills-profile2\"\r\n            aria-selected=\"false\"><i class=\"material-icons pr-2\">person</i>Profile</a>\r\n          <a class=\"nav-link\" id=\"v-pills-messages2-tab\" data-toggle=\"pill\" href=\"#v-pills-messages2\" role=\"tab\" aria-controls=\"v-pills-messages2\"\r\n            aria-selected=\"false\"><i class=\"material-icons pr-2\">message</i>Messages</a>\r\n          <a class=\"nav-link\" id=\"v-pills-settings2-tab\" data-toggle=\"pill\" href=\"#v-pills-settings2\" role=\"tab\" aria-controls=\"v-pills-settings2\"\r\n            aria-selected=\"false\"><i class=\"material-icons pr-2\">settings</i>Settings</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md\">\r\n        <div class=\"tab-content\" id=\"v-pills-tabContent\">\r\n          <div class=\"tab-pane fade show active\" id=\"v-pills-home1\" role=\"tabpanel\" aria-labelledby=\"v-pills-home-tab\">Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt\r\n            do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit\r\n            excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit\r\n            mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</div>\r\n          <div class=\"tab-pane fade\" id=\"v-pills-profile2\" role=\"tabpanel\" aria-labelledby=\"v-pills-profile-tab\">Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna\r\n            pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit id\r\n            veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem enim eu.\r\n            Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur qui.</div>\r\n          <div class=\"tab-pane fade\" id=\"v-pills-messages2\" role=\"tabpanel\" aria-labelledby=\"v-pills-messages2-tab\">Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris\r\n            ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit et et proident\r\n            Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna commodo est ea veniam consectetur.</div>\r\n          <div class=\"tab-pane fade\" id=\"v-pills-settings2\" role=\"tabpanel\" aria-labelledby=\"v-pills-settings2-tab\">Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident in\r\n            cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui mollit\r\n            consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit adipisicing\r\n            labore officia magna elit nisi in aute tempor commodo eiusmod.div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<h4 class=\"mt-4\">Accordion</h4>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"accordion mb-5 mt-3\" id=\"accordion\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingOne\">\r\n          <h5 class=\"mb-0\">\r\n            <button class=\"btn btn-link \" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n              Collapsible Group Item #1\r\n            </button>\r\n          </h5>\r\n        </div>\r\n        <div id=\"collapseOne\" class=\"collapse show px-3\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n          <div class=\"card-body\">\r\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n            labore sustainable VHS.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingTwo\">\r\n          <h5 class=\"mb-0\">\r\n            <button class=\"btn btn-link  collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n              Collapsible Group Item #2\r\n            </button>\r\n          </h5>\r\n        </div>\r\n        <div id=\"collapseTwo\" class=\"collapse px-3\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n          <div class=\"card-body\">\r\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n            labore sustainable VHS.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" id=\"headingThree\">\r\n          <h5 class=\"mb-0\">\r\n            <button class=\"btn btn-link  collapsed \" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n              Collapsible Group Item #3\r\n            </button>\r\n          </h5>\r\n        </div>\r\n        <div id=\"collapseThree\" class=\"collapse px-3\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n          <div class=\"card-body\">\r\n            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\r\n            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n            sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n            occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n            labore sustainable VHS.\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<h4 class=\"mt-4\">Custom Tab</h4>\r\n<div class=\"custom-tab\">\r\n  <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Home</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Profile</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">Contact</a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"tab-content\" id=\"myTabContent\">\r\n    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.\r\n      Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.\r\n      Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip\r\n      quis cardigan american apparel, butcher voluptate nisi qui.</div>\r\n    <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit,\r\n      blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth\r\n      letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,\r\n      assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore\r\n      stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry\r\n      richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo\r\n      park.</div>\r\n    <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi\r\n      farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy\r\n      salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg\r\n      banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably\r\n      haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/panels/panels.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/panels/panels.component.ts ***!
  \*******************************************************/
/*! exports provided: PanelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsComponent", function() { return PanelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelsComponent = /** @class */ (function () {
    function PanelsComponent() {
    }
    PanelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panels',
            template: __webpack_require__(/*! ./panels.component.html */ "./src/app/components/panels/panels.component.html")
        })
    ], PanelsComponent);
    return PanelsComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center heading\">Typography</h2>\r\n<br>\r\n<div class=\"row \">\r\n  <div class=\"col-xl\">\r\n    <h4>Headings</h4>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h1>h1. Heading\r\n          <span class=\"float-right note text-muted\">font-size:\r\n            <br> 2.50rem</span>\r\n        </h1>\r\n        <br>\r\n        <h2>h2. Heading\r\n          <span class=\"float-right note text-muted\">font-size:\r\n            <br> 2.00rem</span>\r\n        </h2>\r\n        <br>\r\n        <h3>h3. Heading\r\n          <span class=\"float-right note text-muted\">font-size:\r\n            <br> 1.75rem</span>\r\n        </h3>\r\n        <br>\r\n        <h4>h4. Heading\r\n          <span class=\"float-right note text-muted\">font-size:\r\n            <br> 1.50rem</span>\r\n        </h4>\r\n        <br>\r\n        <h5>h5. Heading\r\n          <span class=\"float-right note text-muted\">font-size:\r\n            <br> 1.25rem</span>\r\n        </h5>\r\n        <br>\r\n        <h6>h6. Heading\r\n          <span class=\"float-right note text-muted\">font-size:\r\n            <br> 1.00rem</span>\r\n        </h6>\r\n      </div>\r\n    </div>\r\n    <p class=\"float-right note\">* 1rem = 16px</p>\r\n  </div>\r\n  <div class=\"col-xl\">\r\n    <h4>Paragraph</h4>\r\n    <div class=\"card pb-3\">\r\n      <div class=\"card-body\">\r\n        <p>You can use the mark tag to\r\n          <mark>highlight</mark> text.</p>\r\n        <p>\r\n          <del>This line of text is meant to be treated as deleted text.</del>\r\n        </p>\r\n        <p>\r\n          <s>This line of text is meant to be treated as no longer accurate.</s>\r\n        </p>\r\n        <p>\r\n          <ins>This line of text is meant to be treated as an addition to the document.</ins>\r\n        </p>\r\n        <p>\r\n          <u>This line of text will render as underlined</u>\r\n        </p>\r\n        <p>\r\n          <small>This line of text is meant to be treated as fine print.</small>\r\n        </p>\r\n        <p>\r\n          <strong>This line rendered as bold text.</strong>\r\n        </p>\r\n        <p>\r\n          <em>This line rendered as italicized text.</em>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<div class=\"row\">\r\n  <div class=\"col-xl\">\r\n    <h3>Font Color</h3>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n          <p class=\"text-primary\">.text-primary</p>\r\n          <p class=\"text-secondary\">.text-secondary</p>\r\n          <p class=\"text-success\">.text-success</p>\r\n          <p class=\"text-danger\">.text-danger</p>\r\n          <p class=\"text-warning\">.text-warning</p>\r\n          <p class=\"text-info\">.text-info</p>\r\n          <p class=\"text-light bg-dark\">.text-light</p>\r\n          <p class=\"text-dark\">.text-dark</p>\r\n          <p class=\"text-muted\">.text-muted</p>\r\n          <p class=\"text-white bg-dark\">.text-white</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xl\">\r\n    <h3>Link Color</h3>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n          <p><a href=\"#\" class=\"text-primary\">Primary link</a></p>\r\n          <p><a href=\"#\" class=\"text-secondary\">Secondary link</a></p>\r\n          <p><a href=\"#\" class=\"text-success\">Success link</a></p>\r\n          <p><a href=\"#\" class=\"text-danger\">Danger link</a></p>\r\n          <p><a href=\"#\" class=\"text-warning\">Warning link</a></p>\r\n          <p><a href=\"#\" class=\"text-info\">Info link</a></p>\r\n          <p><a href=\"#\" class=\"text-light bg-dark\">Light link</a></p>\r\n          <p><a href=\"#\" class=\"text-dark\">Dark link</a></p>\r\n          <p><a href=\"#\" class=\"text-muted\">Muted link</a></p>\r\n          <p><a href=\"#\" class=\"text-white bg-dark\">White link</a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<div class=\"row\">\r\n  <div class=\"col-xl\">\r\n    <h4>Blockquote</h4>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <blockquote class=\"blockquote\">\r\n          <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n        </blockquote>\r\n        <blockquote class=\"blockquote\">\r\n          <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n          <footer class=\"blockquote-footer\">Someone famous in\r\n            <cite title=\"Source Title\">Source Title</cite>\r\n          </footer>\r\n        </blockquote>\r\n        <blockquote class=\"blockquote text-center\">\r\n          <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n          <footer class=\"blockquote-footer\">Someone famous in\r\n            <cite title=\"Source Title\">Source Title</cite>\r\n          </footer>\r\n        </blockquote>\r\n        <blockquote class=\"blockquote text-right\">\r\n          <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n          <footer class=\"blockquote-footer\">Someone famous in\r\n            <cite title=\"Source Title\">Source Title</cite>\r\n          </footer>\r\n        </blockquote>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<h4>List</h4>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl\">\r\n        <strong>Unordered List</strong>\r\n        <ul >\r\n          <li>Lorem ipsum dolor sit amet</li>\r\n          <li>Integer molestie lorem at massa</li>\r\n          <li>Nulla volutpat aliquam velit\r\n            <ul>\r\n              <li>Purus sodales ultricies</li>\r\n              <li>Vestibulum laoreet porttitor sem</li>\r\n              <li>Ac tristique libero volutpat at</li>\r\n            </ul>\r\n          </li>\r\n          <li>Faucibus porta lacus fringilla vel</li>\r\n          <li>Eget porttitor lorem</li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-xl\">\r\n        <strong>Ordered List</strong>\r\n        <ol>\r\n            <li>Lorem ipsum dolor sit amet</li>\r\n            <li>Integer molestie lorem at massa</li>\r\n            <li>Nulla volutpat aliquam velit\r\n              <ol>\r\n                <li>Purus sodales ultricies</li>\r\n                <li>Vestibulum laoreet porttitor sem</li>\r\n                <li>Ac tristique libero volutpat at</li>\r\n              </ol>\r\n            </li>\r\n            <li>Faucibus porta lacus fringilla vel</li>\r\n            <li>Eget porttitor lorem</li>\r\n          </ol>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <strong>Inline List</strong>\r\n      <ul class=\"list-inline\">\r\n        <li class=\"list-inline-item\">Lorem ipsum</li>\r\n        <li class=\"list-inline-item\">Phasellus iaculis</li>\r\n        <li class=\"list-inline-item\">Nulla volutpat</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br>\r\n<h4>Description list alignment</h4>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <dl class=\"row\">\r\n      <dt class=\"col-sm-3\">Description lists</dt>\r\n      <dd class=\"col-sm-9\">A description list is perfect for defining terms.</dd>\r\n\r\n      <dt class=\"col-sm-3\">Euismod</dt>\r\n      <dd class=\"col-sm-9\">\r\n        <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>\r\n        <p>Donec id elit non mi porta gravida at eget metus.</p>\r\n      </dd>\r\n\r\n      <dt class=\"col-sm-3\">Malesuada porta</dt>\r\n      <dd class=\"col-sm-9\">Etiam porta sem malesuada magna mollis euismod.</dd>\r\n\r\n      <dt class=\"col-sm-3 text-truncate\">Truncated term is truncated</dt>\r\n      <dd class=\"col-sm-9\">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\r\n\r\n      <dt class=\"col-sm-3\">Nesting</dt>\r\n      <dd class=\"col-sm-9\">\r\n        <dl class=\"row\">\r\n          <dt class=\"col-sm-4\">Nested definition list</dt>\r\n          <dd class=\"col-sm-8\">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>\r\n        </dl>\r\n      </dd>\r\n    </dl>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/components/typography/typography.component.html"),
            styles: ['.note{font-size: .75rem;}']
        })
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-components-module.js.map