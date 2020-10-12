const studentsTable = document.querySelector('#stu-table');
const form = document.querySelector("#add-students-form");
const db = firebase.firestore();

// create element & render 
function renderStudents(doc){
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let tr = document.createElement("tr");
    tr.setAttribute('data-id', doc.id);
    td1.textContent = doc.data().name;
    td2.textContent = doc.data().age;
    td3.textContent = doc.data().gender;
    td4.textContent = doc.data().area;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    
    // delete 
    let cross = document.createElement('div');
    cross.textContent = 'x';
    tr.appendChild(cross);
    cross.addEventListener('click', (test) => {
        test.stopPropagation();
        let id = test.target.parentElement.getAttribute('data-id');
        console.log(id);
        db.collection('ClassA').doc(id).delete();
    });
    //

    studentsTable.appendChild(tr);
}

// getting data 
db.collection('ClassA').get().then(data => {
    data.docs.forEach(doc => {
        renderStudents(doc);
    });
});
// 

// add data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('ClassA').add({
        name: form.name.value,
        gender: form.gender.value,
        age: form.age.value,
        area: form.area.value
    });
    form.name.value = '';
    form.gender.value = '';
    form.age.value = '';
    form.area.value = '';
});
//