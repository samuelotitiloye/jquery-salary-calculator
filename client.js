$(document).ready(onReady);

function onReady() {
    // target submit button to collect form data
    console.log('JQ');
    $('#addSubmit').on('click', handleAddSubmit);
    $('#employeeBody').on('click', '.deleteButton', deleteClick);
    totalSalaries();

}

// create handleAddSubmit function
function handleAddSubmit() {
    // declare & initialize variables to hold input values
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let employeeId = $('#employeeId').val();
    let employeeTitle = $('#employeeTitle').val();
    let employeeSalary = $('#employeeSalary').val();

    console.log('in handleAddSubmit');
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
        // set the 
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
    // loop through ta
    for (let i = 0; i < allSalaries.length; i++) {
        totalSalaries += Number(allSalaries[i].innerHTML);
    }

    // calculate totalSalaries before/after an employee is 
    //added and display in the DOM
    totalSalaries = totalSalaries / 12;
}