
$('.lastName').on("blur", function () {// todo add checks if name is filled in
    // this is a given standard cost
    var benefitCost = 1000;
    // there is a 10 % discount
    var discount = (1000 * 0.1);
    // get the employee firstname
    var firstName = $('.employeeFirstName').val();

    // if the employee's first name starts with an A apply discount
    if (firstName.substring(0, 1).toLowerCase() === 'a')
        benefitCost = 1000 - discount;

    // add cost to text field  
    $('#employeeBenefitCost').val(benefitCost);
});

function RemoveDependent(element) {
    $(element).parent().remove();

    BenefitCostCalculator.CalculateBenefitCost();
}