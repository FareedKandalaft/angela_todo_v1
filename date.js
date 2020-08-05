exports.getDate = () => {
    let today = new Date();
    let currentDay = today.getDay();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    return day;
}

// sample comments for git test
exports.getDay = () => {
    let today = new Date();
    let currentDay = today.getDay();
    let options = {
        weekday: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    return day;
}
