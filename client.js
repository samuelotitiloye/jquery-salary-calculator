$(document).ready(onReady);

function onReady() {
    // target submit button to collect form data
    // console.log('JQ');
    $('#addSubmit').on('click', handleAddSubmit);
    $('#employeeBody').on('click', '.deleteButton', deleteClick);
    totalSalaries();
}

// create handleAddSubmit function
function handleAddSubmit() {
    // declare & initialize variables to hold/get input values
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employeeId = $('#employeeId').val();
    let employeeTitle = $('#employeeTitle').val();
    let employeeSalary = $('#employeeSalary').val();

    // console.log('in handleAddSubmit');
    //append input values when button is clicked
    $('#employeeBody').append(`<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${employeeId}</td>
    <td>${employeeTitle}</td>
    <td class="employee-salary">${employeeSalary}</td>
    <td>
        <button class="deleteButton">delete</button>
    </td>
    </tr>
    `)
        // set the input value
    $('#firstName').val();
    $('#lastName').val();
    $('#employeeId').val();
    $('#employeeTitle').val();
    $('#employeeSalary').val();
    // let inputs = $('input');
    // console.log(inputs);


    // empty inputs
    $('input').val('');
    // new total once a new employee is added
    totalSalaries();

    // allow submit button if inputs are filled field
    if (firstName.length > 0 && lastName.length > 0 && employeeId > 0 && employeeTitle > 0 && employeeSalary > 0) {
        $('#firstName').val();
        $('#lastName').val();
        $('#employeeId').val();
        $('#employeeTitle').val();
        $('#employeeSalary').val();
    } else {
        // alert if input field is blank & add errorClass border
        //alert('Please fill out required fields');

        //     if (firstName.length === 0) {
        //         $('#firstName').addClass('error');
        //         // disable inputs 
        //         $('input').prop('disabled', true);
        //     } else {
        //         $('input').prop('disabled', false)
        //     }
    }
    if (firstName.length === 0) {
        $('#firstName').addClass('error');
    }
    if (lastName.length === 0) {
        $('#lastName').addClass('error');
    }
    if (employeeId.length === 0) {
        $('#employeeId').addClass('error');
    }
    if (employeeTitle.length === 0) {
        $('#employeeTitle').addClass('error');
    }
    if (employeeSalary.length === 0) {
        $('#employeeSalary').addClass('error');
    }
    //     // disable inputs 
    //     $('input').prop('disabled', true);
    // } else {
    //     $('input').prop('disabled', false)
    // // }
    // if (input === 0) {
    //     $('input').prop('disabled', true);
    // } else {
    //     $('input').prop('disabled', false)
    // }
}


// create a delete function to target each row of data.
function deleteClick() {
    // console.log('in deleteClick');
    $(this).parent().parent().remove();
    //call totalSalaries once an employee is removed
    totalSalaries();
}

// create totalSalaries function
function totalSalaries() {
    let allSalaries = $('.employee-salary'); // $ gets all values & stores it in the variable allSalaries[]
    // console.log(allSalaries)
    let totalSalaries = 0;
    // loop through totalSalaries
    for (let i = 0; i < allSalaries.length; i++) {
        totalSalaries += Number(allSalaries[i].innerHTML);
    }

    // calculate totalSalaries before/after an employee is 
    //added and display in the DOM

    // divide total salaries by 12 to get monthly cost
    totalSalaries = totalSalaries / 12;

    // target totalSalaries in the Index file to get the value
    $('#totalSalaries').html(totalSalaries);

    // write a conditional to check totalSalaries against 20000
    if (totalSalaries > 20000) {
        // set background color to red if totalSalaries > 20k
        $('#totalSalaries').css('background-color', 'red');
    } else {

        // set background color to back to white if totalSalaries < 20k
        $('#totalSalaries').css('background-color', 'white');
    }
    // disable inputs if required fields are not filled
    // if ()
}

// format values' decimals
// disable submit button if all inputs aren't filled
// table/ page styling
// alert a message if all input fields aren't filled.