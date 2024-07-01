const animalElement = document.getElementById('animals');
const animals = ["dog", "cat", "lion"];

function template(animals) {
    let data = '';
   animals.forEach((animal) => {
     data += `<div class="col-md-4 p-lg-4" >
            <div class="card p-3 bg-white">
                <img src="" class="rounded" alt="cinque terre">
                <h1 >${animal}</h1>

                <p style="padding: 4px">Something short and leading about the collection below—its contents, the creato</p>
                <div class="btn-group col-1 pb-2">
                    <button type="button" class="btn btn-outline-secondary">view</button>
                    <button type="button" class="btn btn-outline-secondary">edit</button>
                </div>

            </div>
        </div>`

   });
    animalElement.innerHTML = data;
}

document.getElementById('input').addEventListener('input', (event) => {
    const filterValue = event.target.value;
    const newAnimal = [];

     animals.filter((animal) => {
       if(animal.includes(filterValue))
           newAnimal.push(animal)
    });

    template(newAnimal);
});

template(animals);