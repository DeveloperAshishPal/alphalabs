document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("auth_form");
  const resultDiv = document.getElementById("auth_result");
  const loadingDiv = document.getElementById("auth_loading");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    const serial = document.getElementById("auth_first_line").value.trim();
    const pin = document.getElementById("auth_second_line").value.trim();

    // Optional: show loading or "checking..."
    loadingDiv.innerHTML = `<p style="color:gray;">⏳ Checking authenticity...</p>`;

    // Call the function with 1 second delay
    checkProductAuth(serial, pin)
      .then((result) => {
        
        if (result === 'success') {
          resultDiv.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
            <div style="margin-top: 15px; font-size: 18px; color: black;">Verified your code</div>  
            <img src="images/tick.jpg" alt="Success" style="max-width: 250px; max-height: 250px; object-fit: contain;" />
              <div style="margin-top: 15px; font-size: 18px; color: green;">✅ This Product is authentic thanks for Buying this Product.</div>
            </div>
          `;
        } else {
          resultDiv.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
            <div style="margin-top: 15px; font-size: 18px; color: black;">Verified your code</div>  
              <img src="images/cross.png" alt="Failed" style="max-width: 250px; max-height: 250px; object-fit: contain;" />
              <div style="margin-top: 15px; font-size: 18px; color: red;">❌ This Product is Invalid contact your supplier.</div>
            </div>
          `;
        }
        
        // Hide the form after showing result
        form.style.display = "none";
      });
  });
});

function checkProductAuth(serial, pin) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const serialPattern = /^(ESN|esn)[0-9]{1,5}$/;
      const pinPattern = /^[0-9]{8}$/;

      if (!serialPattern.test(serial)) {
        resolve('fail');
      }

      if (!pinPattern.test(pin)) {
        resolve('fail');
      }
      resolve('success');
    }, 1000);
  });
}
