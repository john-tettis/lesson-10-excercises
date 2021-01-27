






const createInstructor=(first,last)=>({first,last});

const favNum=81;

const instructor= {
    firstname:'colt',
    [favNum]:'that is a beautiful number!',
    sayHi(){
        return 'HI!';
    },
    sayBye(){
        return `${this.firstname} says bye`;
    }
}

function createAnimal(species, verb, noise){
    const animal={
        species,
        [verb](){
            return noise;
        }
    }
  return animal;

}