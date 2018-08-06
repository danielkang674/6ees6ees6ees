class RetiredForagerBee extends ForagerBee{
  // TODO..
  constructor(age=40, job='gamble', canFly=false){
    super(age, job, canFly);
    this.color = 'grey';
  }

  forage(){
    return 'I am too old, let me play cards instead';
  };

  gamble(treasure){
    this.treasureChest.push(treasure);
  };
};
