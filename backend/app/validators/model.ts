import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new model.
 */
export const createModelValidator = vine.compile(
  vine.object({})
)

/**
 * Validator to validate the payload when updating
 * an existing model.
 */
export const updateModelValidator = vine.compile(
  vine.object({})
)