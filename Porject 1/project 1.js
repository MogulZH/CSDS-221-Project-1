$(document).ready(function () {

    // Function to calculate cost
    function calculateCost() {
      var numberOfAdults = parseInt($('#numberOfAdults').val());
      var checkInDate = new Date($('#checkInDate').val());
      var checkOutDate = new Date($('#checkOutDate').val());
      var days = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
      if (!isNaN(days) && days > 0) {
        $('#displayDays').val(days); 
        var cost = numberOfAdults * days * 150; 
        $('#displayCosts').val(cost); 
      } else {
        $('#displayDays').val(''); 
        $('#displayCosts').val(''); 
      }
    }
  
    $('#numberOfAdults, #checkInDate, #checkOutDate').change(calculateCost);
  
    $('button[type="submit"]').click(function (e) {
      e.preventDefault();
      var cost = $('#displayCosts').val();
      var isFormValid = true; 
      $('.has-error').removeClass('has-error'); 
  
      // Form validation
      $('input').each(function() {
        if ($(this).val() === '') {
          $(this).addClass('has-error');
          isFormValid = false;
        }
      });
  
      // Notify the user of missing fields
      if (!isFormValid) {
        var missingFields = $('.has-error').map(function() {
          return $(this).attr('name');
        }).get().join(', ');
  
        alert('The following fields are missing: ' + missingFields);
        return;
      }
  
      alert('Form is valid and has been submitted successfully!');
    });
  
  });