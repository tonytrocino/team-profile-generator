import inquirer from "inquirer";
import fs from 'fs';
import util from 'util';
import Employee from "./lib/Employee";
import Manager from "./lib/Manager";
import Engineer from "./lib/Engineer";
import Intern  from"./lib/Intern";

console.log("hello world");

var employee = new Employee("Tony", 1, "a@b.com");
console.log(employee);