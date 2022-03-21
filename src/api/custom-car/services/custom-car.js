'use strict';

/**
 * custom-car service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-car.custom-car');
