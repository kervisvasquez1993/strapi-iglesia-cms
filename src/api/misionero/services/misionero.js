'use strict';

/**
 * misionero service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::misionero.misionero');
