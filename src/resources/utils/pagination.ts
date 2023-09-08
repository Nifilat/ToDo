// utils/pagination.ts

/**
 * Paginate an array of items.
 *
 * @param items - The array of items to paginate.
 * @param currentPage - The current page number.
 * @param itemsPerPage - The number of items to display per page.
 */
export function paginate<T>(items: T[], currentPage: number, itemsPerPage: number): T[] {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }
  
  /**
   * Calculate the total number of pages based on the number of items and items per page.
   *
   * @param totalItems - The total number of items.
   * @param itemsPerPage - The number of items to display per page.
   */
  export function calculateTotalPages(totalItems: number, itemsPerPage: number): number {
    return Math.ceil(totalItems / itemsPerPage);
  }
  