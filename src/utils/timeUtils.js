export function getTimeFromNow(timeFrom) {
    const timeNow = new Date().getTime();
    const diff = timeNow - timeFrom;
    //for readablity kept expressions
    const oneDayMills = 1 * 24 * 60 * 60 * 1000;
    // diffreance greater then one day
    if (diff > oneDayMills) {
        return `${parseInt(diff / oneDayMills)} d`;
    }
    const oneHourMills = 1 * 60 * 60 * 1000;
    // diffreance greater then one hour
    if (diff > oneHourMills) {
        return `${parseInt(diff / oneHourMills)} h`;
    }
    const oneMinMills = 1 * 60 * 1000;
    // diffreance greater then one hour
    if (diff > oneMinMills) {
        return `${parseInt(diff / oneMinMills)} m`;
    }
    return 'a few seconds ago';
}