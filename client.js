$(document).ready(onReady);

function onReady() {
    // target submit button to collect form info
    console.log('JQ');
    $('#addSubmit').on('click', handleAddSubmit)
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
    <td>${employeeSalary}</td>
    <td>
        <button id="delete1">delete</button>
    </td>
    </tr>
    `)
    $('#firstName').val();
    $('#lastName').val();
    $('#employeeId').val();
    $('#employeeTitle').val();
    $('#employeeSalary').val();

    // empty inputs
    $('input').val('');
}

function deleteClick() {
    console.log('in deleteClick');

}