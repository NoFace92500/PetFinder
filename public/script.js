  //get the ul element
  const ul = document.querySelector('ul');

  //GET array of students from localhost:8080/api/v1/students
  fetch('http://localhost:8080/api/v1/pets')
      .then(response => response.json())
      .then(pets => {
          //loop through the array of students
          pets.forEach(pet => {
              //create a new li element
              const li = document.createElement('li');
              //set the text of the li element to the student's name
              li.textContent = pet.name;
              //append the li element to the ul element
              ul.appendChild(li);
          });
      });