/**
 * @param {Date} date
 */
export default (date) => {
  const day = date.getDate();
  const formattedDay = day < 10 ? `0${day}` : day;

  const month = date.getMonth() + 1;
  const formattedmonth = month < 10 ? `0${month}` : month;

  return `${formattedDay}/${formattedmonth}/${date.getFullYear()}`;
};
