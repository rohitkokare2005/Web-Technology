let calculation = localStorage.getItem('calculation') || '';

        displayCalculation();

        function updateCalculation(value){
           calculation += value;
           console.log(calculation);

           localStorage.setItem('calculation' , calculation);

           displayCalculation();
        }

        function displayCalculation(){
          document.querySelector('.js-displayCalculation').
            innerHTML = calculation;
        }