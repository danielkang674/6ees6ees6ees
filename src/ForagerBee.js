class ForagerBee extends Bee{
  // TODO..
  constructor(age=10, job='find pollen', canFly=true, treasureChest=[]){
    super(age);
    this.job = job;
    this.canFly = canFly;
    this.treasureChest = treasureChest;
  }

  forage(treasure){
    this.treasureChest.push(treasure);
  }
};
