export const getTimeDescriptionFromLastUpdated = (lastUpdated) => {
    const lastDate = new Date(lastUpdated);
    const currentDate = new Date();

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisecondsPerMonth = millisecondsPerDay * 30.44;
    const millisecondsPerYear = millisecondsPerDay * 365.25;

    const difference = currentDate - lastDate;

    if (difference >= millisecondsPerYear) {
        const years = Math.floor(difference / millisecondsPerYear);
        return `${years} ${years === 1 ? 'year' : 'years'}`;
    } else if (difference >= millisecondsPerMonth) {
        const months = Math.floor(difference / millisecondsPerMonth);
        return `${months} ${months === 1 ? 'month' : 'months'}`;
    } else {
        const days = Math.floor(difference / millisecondsPerDay);
        return `${days} ${days === 1 ? 'day' : 'days'}`;
  }
};