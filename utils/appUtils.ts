export const returnPaginationRange = (totalPages: number, currentPage: number, limit: number, siblings: number) => {
    let totalPageNoInArray = 7 + siblings;
    if (totalPageNoInArray >= totalPages)
        return Array.from(Array(totalPages).keys()).map(i => i + 1)

    const leftSiblingIndex = Math.max(currentPage - siblings, 1);
    const rightSiblingIndex = Math.min(currentPage + siblings, totalPages);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;
    if (!shouldShowLeftDots && shouldShowRightDots) {
        let leftItemCount = 3 + 2 * siblings;
        let leftRange = Array.from(Array(leftItemCount).keys()).map(i => i + 1);
        return [...leftRange, "... ", totalPages];
    } else if (shouldShowLeftDots && !shouldShowRightDots) {
        let rightItemCount = 3 + 2 * siblings;
        let rightRange = Array.from(Array(rightItemCount).keys()).map(i => rightItemCount + i + 1);
        return [1, " ...", ...rightRange];
    } else {
        let middleRange = Array.from(Array(rightSiblingIndex - leftSiblingIndex + 1).keys()).map(i => i + leftSiblingIndex);
        return [1, "... ", ...middleRange, " ...", totalPages];
    }

}