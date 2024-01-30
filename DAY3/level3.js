/*

Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/


function formatDateTime() {
    const now = new Date();
  
    // Get year, month, day, hours, and minutes
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
  
    // Assemble the formatted string
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
  
    return formattedDateTime;
  }
  
  // Example usage
  const formattedTime = formatDateTime();
  console.log(formattedTime);
  
