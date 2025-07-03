export function isValidFilterRange(start, end) {
    if (isEmpty(start, end))
        return;
    const regex = /^(202[5-6])-(0[1-9]|1[0-2])-(0[1-9]|1[\d]|2[\d]|3[0-1])\s((0[1-9]|1[\d]|2[0-3]):(0[\d]|1[\d]|2[\d]|3[\d]|4[\d]|5[\d]):(0[\d]|1[\d]|2[\d]|3[\d]|4[\d]|5[\d]))$/g;
    return start.match(regex) && end.match(regex);
}
function isEmpty(star, end) {
    return star.trim() == '' && end.trim() == '';
}
