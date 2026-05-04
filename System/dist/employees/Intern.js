"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intern = void 0;
// src/employees/Intern.ts
var Employee_1 = require("./Employee");
var Intern = /** @class */ (function (_super) {
    __extends(Intern, _super);
    function Intern(id, name, allowance) {
        var _this = _super.call(this, id, name, 0) || this; // Interns don't have base salary, only allowance
        _this.allowance = allowance;
        return _this;
    }
    Intern.prototype.calculateSalary = function () {
        return this.allowance;
    };
    Intern.prototype.getRole = function () {
        return "Intern";
    };
    Intern.prototype.getAllowance = function () {
        return this.allowance;
    };
    Intern.prototype.setAllowance = function (allowance) {
        this.allowance = allowance;
    };
    return Intern;
}(Employee_1.Employee));
exports.Intern = Intern;
