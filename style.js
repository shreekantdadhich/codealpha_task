document.getElementById('ageForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const dob = new Date(document.getElementById('dob').value);
      const today = new Date();

      if (isNaN(dob)) {
        document.getElementById('result').textContent = "Please enter a valid date.";
        return;
      }

      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
      }

      document.getElementById('result').textContent = `Your age is ${age} years.`;
    });