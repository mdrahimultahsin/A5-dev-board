function getDayDate() {
    const today = new Date();
    const day = today.getDay();
    const weekDays =['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const dayName = weekDays[day];
      const year = today.getFullYear();
      const date = today.getDate();
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
    
      const month = today.getMonth();
      const monthName = months[month];
      const yearDate = monthName+' '+date+' '+year;
      return `<p>${dayName}</p> <p class="font-semibold">${yearDate}</p>`;
}
