/*   Boshni ogritgan 2 chi masala */
const obj1 = {
  a: 1,
  b: 2,
  c: 3, 
  getA() {
    console.log(this.a);
    return this;
  },
  getB() {
      console.log(this.b);
      return this
    },
    getC() {
        console.log(this.c);
        return this
  }
};

obj1.getA().getB().getC();



