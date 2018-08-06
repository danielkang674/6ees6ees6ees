class HoneyMakerBee extends Bee{
  // TODO..
  constructor(job='make honey', honeyPot=0, age=10){
    super(age);
    this.job = job;
    this.honeyPot = honeyPot;
  }

  makeHoney(){
    this.honeyPot++;
  };

  giveHoney(){
    this.honeyPot--;
  };
};
