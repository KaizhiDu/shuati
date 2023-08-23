// leetcode 348

/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.n = n;
    this.player1 = {}
    this.player2 = {}
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} player
 * @return {number}
 */
TicTacToe.prototype.move = function(row, col, player) {
    const same = row === col;
    const plus = row + col === this.n - 1;
    const rowValue = `row${row}`
    const colValue = `col${col}`
    if (player === 1) {
        if (this.player1[rowValue]) {
            this.player1[rowValue] = this.player1[rowValue] + 1;
        } else {
            this.player1[rowValue] = 1;
        }

        if (this.player1[colValue]) {
            this.player1[colValue] = this.player1[colValue] + 1;
        } else {
            this.player1[colValue] = 1;
        }
        if (same) {
            if (this.player1.same) {
                this.player1.same = this.player1.same + 1;
            } else {
                this.player1.same = 1;
            }
        }
        if (plus) {
            if (this.player1.plus) {
                this.player1.plus = this.player1.plus + 1;
            } else {
                this.player1.plus = 1;
            }
        }
        const check = !!Object.values(this.player1).find(item => item === this.n);
        if (check) {
            return 1;
        } else {
            return 0;
        }
    }

    if (player === 2) {
        if (this.player2[rowValue]) {
            this.player2[rowValue] = this.player2[rowValue] + 1;
        } else {
            this.player2[rowValue] = 1;
        }

        if (this.player2[colValue]) {
            this.player2[colValue] = this.player2[colValue] + 1;
        } else {
            this.player2[colValue] = 1;
        }
        if (same) {
            if (this.player2.same) {
                this.player2.same = this.player2.same + 1;
            } else {
                this.player2.same = 1;
            }
        }
        if (plus) {
            if (this.player2.plus) {
                this.player2.plus = this.player2.plus + 1;
            } else {
                this.player2.plus = 1;
            }
        }
        const check = !!Object.values(this.player2).find(item => item === this.n);
        if (check) {
            return 2;
        } else {
            return 0;
        }

    }


};



const ticTacToe = new TicTacToe(3);

console.log(ticTacToe.move(0, 0, 1));
console.log(ticTacToe.move(0, 2, 2));
console.log(ticTacToe.move(2, 2, 1));
console.log(ticTacToe.move(1, 1, 2));
console.log(ticTacToe.move(2, 0, 1));
console.log(ticTacToe.move(1, 0, 2));
console.log(ticTacToe.move(2, 1, 1));

// Example 1:
//
// Input
//     ["TicTacToe", "move", "move", "move", "move", "move", "move", "move"]
//     [[3], [0, 0, 1], [0, 2, 2], [2, 2, 1], [1, 1, 2], [2, 0, 1], [1, 0, 2], [2, 1, 1]]
// Output
//     [null, 0, 0, 0, 0, 0, 0, 1]
//
// Explanation
// TicTacToe ticTacToe = new TicTacToe(3);
// Assume that player 1 is "X" and player 2 is "O" in the board.
// ticTacToe.move(0, 0, 1); // return 0 (no one wins)
// |X| | |
// | | | |    // Player 1 makes a move at (0, 0).
// | | | |
//
// ticTacToe.move(0, 2, 2); // return 0 (no one wins)
// |X| |O|
// | | | |    // Player 2 makes a move at (0, 2).
// | | | |
//
// ticTacToe.move(2, 2, 1); // return 0 (no one wins)
// |X| |O|
// | | | |    // Player 1 makes a move at (2, 2).
// | | |X|
//
// ticTacToe.move(1, 1, 2); // return 0 (no one wins)
// |X| |O|
// | |O| |    // Player 2 makes a move at (1, 1).
// | | |X|
//
// ticTacToe.move(2, 0, 1); // return 0 (no one wins)
// |X| |O|
// | |O| |    // Player 1 makes a move at (2, 0).
// |X| |X|
//
// ticTacToe.move(1, 0, 2); // return 0 (no one wins)
// |X| |O|
// |O|O| |    // Player 2 makes a move at (1, 0).
// |X| |X|
//
// ticTacToe.move(2, 1, 1); // return 1 (player 1 wins)
// |X| |O|
// |O|O| |    // Player 1 makes a move at (2, 1).
// |X|X|X|

