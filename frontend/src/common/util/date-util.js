const getCurrentCalendarInfo = () => {
    return getCalendarInfo(new Date());
};

const getNextCalendarInfo = (calendarInfo) => {
    let date = !calendarInfo ? new Date() : new Date(calendarInfo.year, calendarInfo.month - 1);
    const nextDate = new Date(date.getFullYear(), date.getMonth() + 1);
    return getCalendarInfo(nextDate);
};

const getPrevCalendarInfo = (calendarInfo) => {
    let date = !calendarInfo ? new Date() : new Date(calendarInfo.year, calendarInfo.month - 1);
    const prevDate = new Date(date.getFullYear(), date.getMonth() - 1);
    return getCalendarInfo(prevDate);
};

const getCalendarInfo = (thatDate) => {
    const firstDate = new Date(thatDate.getFullYear(), thatDate.getMonth(), 1);
    const lastDate = new Date(thatDate.getFullYear(), thatDate.getMonth() + 1, 0);
    return {
        year: thatDate.getFullYear(),
        month: thatDate.getMonth() + 1,
        firstDate: firstDate.getDate(),
        lastDate: lastDate.getDate(),
        firstDay: firstDate.getDay(),
        lastDay: lastDate.getDay(),
    };
};

const isDayBeforeToday = (year, month, day) => new Date(year, month, day) < new Date();

export { getCurrentCalendarInfo, getNextCalendarInfo, getPrevCalendarInfo, isDayBeforeToday };
