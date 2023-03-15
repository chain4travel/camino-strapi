'use strict';

/**
 * events-past service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::events-past.events-past');
