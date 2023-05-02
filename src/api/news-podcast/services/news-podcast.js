'use strict';

/**
 * news-podcast service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-podcast.news-podcast');
