'use strict';


class Animal {

  constructor(value) {
    this.value = value;
    this.next = null;

  }
}



class AnimalShelter {

  constructor() {
    this.front = null;
    this.rear = null;

  }


  enqueue(animal) {

    if (this.isEmpty()) {
      this.front = animal;
      this.rear = animal;
      console.log(this);

    } else {

      this.rear = animal;
      this.rear.next = animal;
      console.log(this);
    }
  }


  dequeue(pref) {

    /*     console.log(this.rear.value); */

    if (this.isEmpty()) {
      throw ('error');

    } else if (this.rear.value === pref) {

      /* let temp = this.front;
      this.front = temp.rear;
      this.next = null; */
      console.log(this.rear.value);
      return this.rear.value;

    } else {
      return null;
    }
  }


  isEmpty() {
    return this.top === null;
  }

}





module.exports = {
  'Animal': Animal,
  'AnimalShelter': AnimalShelter,
};

