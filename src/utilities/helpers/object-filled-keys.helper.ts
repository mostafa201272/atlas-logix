/**
 * RETURN OBJECT WITHOUT NULLABLE DATA
 * @param data
 * @returns
 */
export function objectFilledKeys(data: Record<string, unknown>): Record<string, unknown> {
  return Object.entries(data)
    .filter(([_, value]) => value !== null && value !== undefined && value !== '')
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}
