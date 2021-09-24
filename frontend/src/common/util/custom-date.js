export default class CustomDate {
    #year;
    #month;
    #day;

    constructor(year, month, day) {
        this.#year = parseInt(year);
        this.#month = parseInt(month);
        this.#day = parseInt(day);
    }

    get year() {
        return this.#year;
    }

    get month() {
        return this.#month;
    }
    get day() {
        return this.#day;
    }

    compare(customDate) {
        if (!customDate) {
            return -1;
        }
        const ts1 = new Date(this.#year, this.#month - 1, this.#day).getTime();
        const ts2 = new Date(customDate.year, customDate.month - 1, customDate.day).getTime();
        if (ts1 < ts2) {
            return -1;
        } else if (ts1 === ts2) {
            return 0;
        } else {
            return 1;
        }
    }

    isEqauls(customDate) {
        if (!customDate) {
            return false;
        }
        return this.#year === customDate.year && this.#month === customDate.month && this.#day === customDate.day;
    }

    toString(sep='-') {
        return `${this.#year}${sep}${this.#month}${sep}${this.#day}`;
    }
}
