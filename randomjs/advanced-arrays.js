const animals = [
  {
    "name": "cat",
    "size": "small",
    "weight": 5
  },
  {
    "name": "dog",
    "size": "small",
    "weight": 10
  },
  {
    "name": "lion",
    "size": "medium",
    "weight": 150
  },
  {
    "name": "elephant",
    "size": "big",
    "weight": 50000
  }
]

function animalNames_noMap() {
  let animal_names = [];

  for (let i = 0; i < animals.length; i++) {
    animal_names.push(animals[i].name);
  }
  return animal_names;
}

function animalNames_map() {
  return animals.map((animal, index, animals) => animal.name);
}

function smallAnimals_noFilter() {
  let small_animals = [];

  for (let i = 0; i < animals.length; i++) {
    if (animals[i].size === "small") {
      small_animals.push(animals[i])
    }
  }
  return small_animals;
}

function smallAnimals_Filter() {
  return animals.filter(animal => animal.size === "small");
}

function totalWeight_noReduce() {
  let total_weight = 0;

  for (let i=0; i< animals.length; i++) {
    total_weight += animals[i].weight
  }
  return total_weight;
}

function totalWeight_Reduce() {
  return animals.reduce((weight, animal, index, animals) => {
    return weight += animal.weight;
}, 0)
}