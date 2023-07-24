export function formatDate(date) {
    if (!date) {
      return 'N/A';
    }
    const parts = date.split('-');
    const day = parts[2];
    const month = getMonthName(parseInt(parts[1]));
    const year = parts[0];
    return `${day} ${month} ${year}`;
  }
  
  export function getMonthName(monthNumber) {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[monthNumber - 1];
  }
  