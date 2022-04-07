const messages = {
    home: "Home",
    profile: "My profile",
    myCats: "My cats",
    todayThereIsNewPosts: "Today there is new posts to see",

    minutesAgo: "A momment ago | A minute ago | {n} minutes ago",
    hoursAgo: "An hour ago | {n} hours ago",
    daysAgo: "A day ago | {n} days ago",
    monthsName: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

    date: ({ named, linked }) => `${named("day")} ${linked(`monthsName.${named("month")}`)} ${named("year")} at ${named("hours")}:${named("minutes")} ${named("ampm")}`,
    seePost: "See post",

}

export default messages
