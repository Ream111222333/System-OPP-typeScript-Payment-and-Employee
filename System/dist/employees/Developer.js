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
exports.Developer = void 0;
// src/employees/Developer.ts
var Employee_1 = require("./Employee");
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(id, name, salary, overtimeHours, overtimeRate) {
        if (overtimeHours === void 0) { overtimeHours = 0; }
        if (overtimeRate === void 0) { overtimeRate = 50; }
        var _this = _super.call(this, id, name, salary) || this;
        _this.overtimeHours = overtimeHours;
        _this.overtimeRate = overtimeRate;
        return _this;
    }
    Developer.prototype.calculateSalary = function () {
        var overtimePay = this.overtimeHours * this.overtimeRate;
        return this.salary + overtimePay;
    };
    Developer.prototype.getRole = function () {
        return "Developer";
    };
    Developer.prototype.getOvertimeHours = function () {
        return this.overtimeHours;
    };
    Developer.prototype.getOvertimeRate = function () {
        return this.overtimeRate;
    };
    Developer.prototype.setOvertimeHours = function (hours) {
        this.overtimeHours = hours;
    };
    return Developer;
}(Employee_1.Employee));
exports.Developer = Developer;
