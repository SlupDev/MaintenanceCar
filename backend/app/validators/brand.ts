import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new brand.
 */
export const createBrandValidator = vine.compile(
  vine.object({})
)

/**
 * Validator to validate the payload when updating
 * an existing brand.
 */
export const updateBrandValidator = vine.compile(
  vine.object({})
)