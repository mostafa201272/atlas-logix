import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE_PREFIX } from '@utilities/constants';

@Injectable({ providedIn: 'root' })
export class StorageService {
  /**
   * Event emitter for listening to changes in local storage.
   * Emits an object containing the key and the new value when an item is added, updated, or removed.
   */
  listeners: BehaviorSubject<Record<string, unknown>> = new BehaviorSubject<
    Record<string, unknown>
  >({});

  /**
   * Retrieve item from local storage and parse as JSON if applicable.
   * @param key - The key of the property to retrieve
   * @returns The parsed value if JSON, otherwise the raw string value, or null if not found
   */
  public getStorage = <T>(key: string): T | null => {
    const storageKey = `${LOCAL_STORAGE_PREFIX}.${key}`;
    const item = localStorage.getItem(storageKey);

    if (item === null) {
      return null;
    }

    try {
      return JSON.parse(item) as T;
    } catch (_error: unknown) {
      return item as T;
    }
  };

  /**
   * Add/set item to browser local storage.
   * @param key - The identifier for the local storage item
   * @param value - The value of the local storage item
   */
  public setStorage = (key: string, value: unknown): void => {
    const newKey = `${LOCAL_STORAGE_PREFIX}.${key}`;

    // Only store non-null and non-undefined values
    if (value === null || value === undefined) {
      return;
    }

    if (typeof value === 'object') {
      localStorage.setItem(newKey, JSON.stringify(value));
    } else {
      localStorage.setItem(newKey, String(value as string));
    }

    this.listeners.next({
      ...this.listeners.value,
      [newKey]: value,
    });
  };

  /**
   * Remove item from browser local storage.
   * @param key - The identifier for the local storage item
   */
  public removeStorageItem = (key: string): void => {
    localStorage.removeItem(`${LOCAL_STORAGE_PREFIX}.${key}`);
  };

  /**
   * Clear all items from local storage.
   */
  public empty = (): void => {
    localStorage.clear();
  };
}
