"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var env_1 = require("@next/env");
var projectDir = process.cwd();
(0, env_1.loadEnvConfig)(projectDir);
console.log('PORT:', process.env.PORT);
