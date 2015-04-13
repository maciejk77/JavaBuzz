describe('JavaBuzz', function() {
  var javabuzz;
  
  beforeEach(function() {
    javabuzz = new Javabuzz();
  });


  describe('knows the number is devisible by three', function() {
    it('is divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);

    });  

  });

  describe('knows the number is not devisible by three', function(){
    it('is divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('knows the number is divisible by 5', function(){
    it('is divisible by 5', function(){
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);

    });
  });
  describe('knows the number is not divisible by 5',function(){
    it('not divisible by 5',function(){
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('knows the number is divisible by 15', function(){
    it('divisible by 15', function(){
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows the number is not devisible by 15', function(){
    it('not divisible by 15', function(){
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

  describe('when playing, says', function(){
    it('"Java" when a number is divisible by 3', function(){
      expect(javabuzz.says(3)).toEqual("Java");
    });
  });
  describe('when playing, says', function(){
    it('"Buzz" when a number is divisible by 5', function(){
      expect(javabuzz.says(5)).toEqual("Buzz");
    });
  });

});


