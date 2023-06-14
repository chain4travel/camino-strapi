'use strict';

/**
 * country-flag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::country-flag.country-flag');
