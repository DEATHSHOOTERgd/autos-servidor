'use strict';

/**
 * car-type service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::car-type.car-type');
