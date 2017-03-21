import { dashboard } from './dashboardInfo.service'
const { top, left, right, bottom } = dashboard;

class GameController {
    constructor() {
        this.name = 'Game';
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
        this.allCells = { ...top, ...left, ...right, ...bottom };
        this.currentMoveOfPlayer = 0;
        this.currentPosition = {
            player0: 0,
            player1: 0
        };
        this.playersLenght = 2; // TODO: Make dynamic
    }
    positionCheaps(currentPositionPlayer, nextPositionPlayer, cellName, currentMoveOfPlayer) {
        const currentPlayer = `#check${currentMoveOfPlayer}`;
        const tip = angular.element( document.querySelector(currentPlayer) )[0];
        if (currentPositionPlayer === nextPositionPlayer) {
            if(this.allCells[cellName].isRight) {
                tip.style.marginTop = this.allCells[cellName].positionX + 'px';
                tip.style.marginLeft = this.allCells[cellName].positionY - 30 + 'px';
            } else if(this.allCells[cellName].isBottom){
                tip.style.marginTop = this.allCells[cellName].positionX - 30 + 'px';
                tip.style.marginLeft = this.allCells[cellName].positionY + 'px';
            } else if(this.allCells[cellName].isLeft){
                tip.style.marginTop = this.allCells[cellName].positionX + 'px';
                tip.style.marginLeft = this.allCells[cellName].positionY + 30 + 'px';
            } else {
                tip.style.marginTop = this.allCells[cellName].positionX + 30 + 'px';
                tip.style.marginLeft = this.allCells[cellName].positionY + 'px';
            }
        } else {
            tip.style.marginTop = this.allCells[cellName].positionX + 'px';
            tip.style.marginLeft = this.allCells[cellName].positionY + 'px';
        }
    }
    changePlayerPosition () {
        const rand = Math.floor((Math.random() * 4) + 1);
        const player = `player${this.currentMoveOfPlayer}`;
        this.currentPosition[player] = this.currentPosition[player] + rand;
        if (this.currentPosition[player] >= dashboard.length) {   
             this.currentPosition[player] -= dashboard.length;
         }
        const cellName = `cell_${this.currentPosition[player]}`;
        const lastcurrentMoveOfPlayer = this.currentMoveOfPlayer;
        if (++this.currentMoveOfPlayer === this.playersLenght) {
            this.currentMoveOfPlayer = 0;}
        this.positionCheaps(this.currentPosition[player], this.currentPosition[`player${this.currentMoveOfPlayer}`],cellName,lastcurrentMoveOfPlayer);
    }
}

export default GameController;
