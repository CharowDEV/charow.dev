export const formatDate = (date: Date) => {
    const dateObject = new Date(date);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    }).format(dateObject);

    return formattedDate;
};
