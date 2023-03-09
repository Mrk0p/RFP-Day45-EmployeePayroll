window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => 
{
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" + 
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
     <tr>
      <td><img class="profile" alt="" src="../Day45-EmployeePayroll/assets/profile-images/Ellipse -2.png"></td>
      <td>Narayan Mahadevan</td>
      <td>Male</td>
      <td><div class='dept=label'>HR</div><div class='dept-label'>Finance</div></td>
      <td>3000000</td>
      <td>1 Nov 2020</td>
      <td>
         <img id="1" onclick="remove(this)" alt="delete"src=../Day45-EmployeePayroll/assets/icons/delete-black-18dp.svg">
         <img id="1" alt="edit" onclick="update(this)"src="../Day45-EmployeePayroll/assets/icons/create-black-18dp.svg">
      </td>    
</tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal =[
        {
            _name: 'Narayan Mahadevan',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary:'500000',
            _startDate: '29 Oct 2019',
            _note:'',
            _id: new Date().getTime(),
            _profilePic: '../Day45-EmployeePayroll/assets/profile-images/Ellipse -2.png'
        },
        {
            _name: 'Rashmika Mandanna',
            _gender: 'Female',
            _department: [
                'Finance'
            ],
            _salary:'5000000',
            _startDate: '29 Sept 2020',
            _note:'',
            _id: new Date().getTime(),
            _profilePic: '../Day45-EmployeePayroll/assets/profile-images/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}