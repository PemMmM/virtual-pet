const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
});

describe("constructor", () => {
  it("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it("increment the hunger by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  it("decrease fitness by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});

describe("walk", () => {
    it("increases fitness level by 4", () => {
        const pet = new Pet("Fido");
        pet.fitness = 0;
        pet.walk();
        expect(pet.fitness).toEqual(4);

    });

    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('fido');
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
      });
});

describe("feed", () => {
    it("decreases hunger level by 3", () => { 
        const pet = new Pet('fido');
        pet.hunger = 0;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    
    })

    it("decreases hunger level by 3", () => { 
        const pet = new Pet('fido');
        pet.hunger = 7;
        pet.feed();
        expect(pet.hunger).toEqual(4);
    
    })

    it("decreases hunger level by 3", () => { 
        const pet = new Pet('fido');
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    
    })
})

describe("checkup", () => {
    it()
})




