// Returns the day of the week for the given date.
function dayName(date) {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                           "Thursday", "Friday", "Saturday"];
    return daysOfTheWeek[date.getDay()];
}

let greeting = (date) => {
    return `Hello, world! Happy ${dayName(now)}!`;
}
