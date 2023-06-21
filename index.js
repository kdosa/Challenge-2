document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('ageForm');
  
    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    
      // Get the input values
      const day = parseInt(document.getElementById('day').value, 10);
      const month = parseInt(document.getElementById('month').value, 10);
      const year = parseInt(document.getElementById('year').value, 10);
  
      // Calculate the age
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();
    
      let ageInYears = currentYear - year;
      let ageInMonths = currentMonth - month;
      let ageInDays = currentDay - day;
    
      // Adjust the age if the current month or day is before the birth month or day
      if (ageInMonths < 0 || (ageInMonths === 0 && ageInDays < 0)) {
        ageInYears--;
        ageInMonths += 12;
      }
    
      if (ageInDays < 0) {
        const lastMonth = new Date(year, month - 1, 0);
        ageInDays = lastMonth.getDate() - day + currentDay;
      }
    
      // Update the age output
      document.getElementById('youtput').textContent = ageInYears;
      document.getElementById('moutput').textContent = ageInMonths;
      document.getElementById('doutput').textContent = ageInDays;
    });
  });
  