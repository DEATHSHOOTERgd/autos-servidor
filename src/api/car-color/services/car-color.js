'use strict';

/**
 * car-color service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::car-color.car-color');
