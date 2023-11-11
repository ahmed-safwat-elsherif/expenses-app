/**
 * @param {Date} date
 * @param {number} amount
 */
export default (date, amount) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
