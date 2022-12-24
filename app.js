const maxLife = 50;
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 19;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_VALUE = 10;

let CurrentMonsterLife = maxLife;
let CurrentPlayerLife = maxLife;

adjustHealthBars(maxLife);

function reset() {
  if (CurrentMonsterLife <= 0 || CurrentPlayerLife <= 0) {
    resetGame(maxLife);
    CurrentMonsterLife = maxLife;
    CurrentPlayerLife = maxLife;
  }
}

function result(input) {
  if (input <= 0) {
    alert("You WON");
  }
}

function bonusLife() {
  // let count = 1;
  // if (count === 1 && CurrentPlayerLife <= 0) {
  //   CurrentPlayerLife = maxLife;
  //   --count;
  //   count--;
  // }
}

function monsterAttack() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  CurrentPlayerLife -= playerDamage;
  bonusLife();
  if (CurrentPlayerLife <= 0) {
    alert("You LOST");
    reset();
  }
  //reset(); // This wont work as the reset id not conditional, hence will be called
  // from this function when there is an attack, before the alert is called.
}

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  CurrentMonsterLife -= damage;
  monsterAttack();
  result(CurrentMonsterLife);
  reset();
}

function strongAttackHandler() {
  const strongDamage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  CurrentMonsterLife -= strongDamage;
  monsterAttack();
  result(CurrentMonsterLife);
  reset();
}

function healHandler() {
  let healedLife = increasePlayerHealth(HEAL_VALUE);
  CurrentPlayerLife += healedLife;
  if (CurrentPlayerLife > maxLife) {
    CurrentPlayerLife = maxLife;
  }
  monsterAttack();
}

// function shoLogHandler() {}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healHandler);
logBtn.addEventListener("click", shoLogHandler);
