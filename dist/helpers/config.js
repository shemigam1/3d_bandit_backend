"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    nodeEnv: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || '',
    JWT_SECRET: process.env.JWT_SECRET || '',
};
exports.default = config;
