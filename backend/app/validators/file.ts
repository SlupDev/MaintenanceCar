import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new file.
 */
export const createFileValidator = vine.compile(
  vine.object({})
)

/**
 * Validator to validate the payload when updating
 * an existing file.
 */
export const updateFileValidator = vine.compile(
  vine.object({})
)