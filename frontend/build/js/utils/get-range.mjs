import { isValidFilterRange } from './valid-range.mjs';
const $startDate = document.getElementById('date-begin');
const $endDate = document.getElementById('date-end');
export function getFilterRangeInput() {
    const start = $startDate.value.trim();
    const end = $endDate.value.trim();
    if (!isValidFilterRange(start, end))
        return { start: '2025-06-27 16:30:00', end: '2025-06-27 16:45:00' };
    return { start, end };
}
