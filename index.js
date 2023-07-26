// Inputs
let StudentName = document.querySelector('#Student-name')
let StudentSurname = document.querySelector('#Student-surname')


//Кнопки

let addStudentButton = document.querySelector('.add-student')

// Таблица
let StudentsListElement = document.querySelector('.students-list')

let StudentsArray = []

addStudentButton.addEventListener('click', function(event){
   let StudentNameValue = StudentName.value
   let StudentSurnameValue = StudentSurname.value
  
   let studentObj = {
    studentNameKey: StudentNameValue,
    studentSurnameKey: StudentSurnameValue,
   }
   
   StudentsArray.push(studentObj)

   let innerHTMLWithStudents = ''

   StudentsArray.forEach((item, index) => {
     innerHTMLWithStudents += 
     `<div>
        <span>${index+1}</span>
        <span>${item.studentNameKey}</span>
        <span>${item.studentSurnameKey}</span>
     </div>`
  });

   StudentsListElement.innerHTML = innerHTMLWithStudents
  
})