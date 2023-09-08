/**
 * Generates the absolute file path for a given component's display name.
 *
 * @param {string | undefined} displayName - The display name of the component.
 * @returns {string} - The absolute file path including the component's name.
 */
export function getAbsoluteFilePath(displayName: string | undefined) {
  const path = "/src/core/components/";

  return `${path}${displayName}`;
}
