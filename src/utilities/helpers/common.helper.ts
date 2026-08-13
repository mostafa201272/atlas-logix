/**
 * DEEP CLONE
 * @param array
 * @returns
 */
export function deepClone<T>(array: T[]): T[] {
  return JSON.parse(JSON.stringify(array)) as T[];
}

/**
 * Generates a UUID v4 string.
 */
export function generateUUID(): string {
  return crypto.randomUUID();
}

/**
 * Replace object with a new one based on the ID
 * @param array
 * @param newObject
 * @returns
 */
export function replaceObjectById<T extends { id: string }>(array: T[], newObject: T): T[] {
  return array.map((item) => (item.id === newObject.id ? newObject : item));
}

/**
 * Delete object based on the ID
 * @param array
 * @param id
 * @returns
 */
export function deleteObjectById<T extends { id: string }>(array: T[], id: string): T[] {
  return array.filter((item) => item.id !== id);
}

/**
 * Capitalize the first letter of a string
 * @param string
 * @returns
 */
export function capitalize(string: string): string {
  return string.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}
