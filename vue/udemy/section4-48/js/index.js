new Vue({
  el: '#app',
  data: {
    playerHP: 100,
    monsterHP: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function () {
      this.playerHP = 100;
      this.monsterHP = 100;
      this.gameIsRunning = true;
    },
    attack: function () {
      this.monsterHP -= this.calculateDamage(4, 10);
      if (this.checkWin()) {
        return;
      }
      this.monsterAttacks();
    },
    specialAttack: function () {
      this.monsterHP -= this.calculateDamage(10, 20);
      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },
    heal: function () {
      this.playerHP += 10;
      this.monsterAttacks();
      this.playerHP = Math.min(this.playerHP, 100);
    },
    giveUp: function () {

    },
    monsterAttacks: function () {
      this.playerHP -= this.calculateDamage(7, 12);
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
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHP <= 0) {
        if (confirm('You lost! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return false;
      }
    }
  }
});
