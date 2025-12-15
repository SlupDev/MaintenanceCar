import vine from '@vinejs/vine'

/**
 * Validator to validate the payload when creating
 * a new maintenance.
 */
export const createMaintenanceValidator = vine.compile(
  vine.object({})
)

/**
 * Validator to validate the payload when updating
 * an existing maintenance.
 */
export const updateMaintenanceValidator = vine.compile(
  vine.object({})
)