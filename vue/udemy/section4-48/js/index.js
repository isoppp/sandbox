new Vue({
  el: '#app',
  data: {
    playerHP: 100,
    monsterHP: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    resetParams: function(runningFlag = false){
      this.playerHP = 100;
      this.monsterHP = 100;
      this.gameIsRunning = runningFlag;
      this.turns = []
    },
    startGame: function () {
      this.resetParams(true);
    },
    attack: function () {
      const damage = this.calculateDamage(4, 10);
      this.monsterHP -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      });

      if (this.checkWin()) return;

      this.monsterAttacks();
    },
    specialAttack: function () {
      const damage = this.calculateDamage(10, 20);
      this.monsterHP -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster hard for ' + damage
      });

      if (this.checkWin()) return;

      this.monsterAttacks();
    },
    heal: function () {
      this.playerHP += 10;
      this.monsterAttacks();

      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for ' + 10
      });

      this.playerHP = Math.min(this.playerHP, 100);
    },

    giveUp: function () {
      this.resetParams();
    },

    monsterAttacks: function () {
      const damage = this.calculateDamage(7, 12);
      this.playerHP -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + damage
      });
      this.checkWin();
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function () {
      if (this.monsterHP <= 0) {
        if (confirm('You won! New Game?')) {
          this.startGame();
        } else {
          this.resetParams();
        }
        return true;
      } else if (this.playerHP <= 0) {
        if (confirm('You lost! New Game?')) {
          this.startGame();
        } else {
          this.resetParams();
        }
        return false;
      }
    }
  }
});
