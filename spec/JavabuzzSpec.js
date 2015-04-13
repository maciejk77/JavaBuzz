describe('JavaBuzz', function() {
  var javabuzz;

  describe('knows the number is devisible by three', function() {
    it('is divisible by 3', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);

    });  

  });

  describe('knows the number is not devisible by three', function(){
    it('is divisible by 3', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('knows the number is divisible by 5', function(){
    it('is divisible by 5', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);

    });
  });
  describe('knows the number is not divisible by 5',function(){
    it('not divisible by 5',function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('knows the number is divisible by 15', function(){
    it('divisible by 15', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows the number is not devisible by 15', function(){
    it('not divisible by 15', function(){
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

});


