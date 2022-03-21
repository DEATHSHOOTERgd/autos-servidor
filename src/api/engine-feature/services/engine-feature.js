'use strict';

/**
 * engine-feature service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::engine-feature.engine-feature');
