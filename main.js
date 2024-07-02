const animalElement = document.getElementById('animals');
let index = ' ';
let box = [];
const animals = [
    {
        name : "dog",
        index :1
    }
    ,
    {
        name :"cat" ,
        index :2
    }
    ,
    {
        name : "lion",
        index :3
    }
    ,
    {
        name :"zibra",
        index :4
    }
];


function template(animals  ) {
    let data = '';
   animals.forEach((animal,key ) => {
     data += `<div class="col-md-4 p-lg-4" data-index="${animal.index}" onclick="deleting(${animal.index})"  " >
            <div class="card p-3 bg-white">
                <img src="paris.jpg" class="rounded" alt="cinque terre">
                <h1 >${animal.name}</h1>

                <p style="padding: 4px">Something short and leading about the collection below—its contents, the creato</p>
                <div class="btn-group col-1 pb-2">
                    <button type="button" class="btn btn-outline-secondary">view</button>
                    <button type="button" class="btn btn-outline-secondary">edit</button>
                </div>

            </div>
        </div>`

   });
    box = animals;
    animalElement.innerHTML = data;


}
template(animals);
document.getElementById('input').addEventListener('input', (event) => {
    const filterValue = event.target.value;
    const newAnimal = [];

     animals.filter((animal) => {
       if(animal.includes(filterValue))
           newAnimal.push(animal)
    });
    template(newAnimal);

  })
const deleting = (index) => {
    box = box.filter((animal) => {
        return animal.index !== index;
    })
    template(box);
}








