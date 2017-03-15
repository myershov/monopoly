class GameController {
  constructor() {
    this.name = 'Game';
    var a={name: 'Початок'},
        b={name: 'Музей'},
        c={name: 'Банк'},
        d={name: 'Школа'},
        e={name: 'Китнотеатр'},
        f={name: 'Чернігівське'},
        g={name: 'Парк'},
        h={name: 'Аеропорт'},
        i={name: 'Податкова'},
        j={name: 'Планетарій'},
        k={name: 'Укрзалізниця'},
        l={name: 'Мтс'},
        m={name: 'Театр'},
        n={name: 'Київстар'},
        p={name: 'Пропуск'},
        o={name: 'Бонус'},
        v={name: '+2 Ходи'};
    this.bloc = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,p];
    this.left = [l,b,c,d,e,f,g];
    this.right = [l,b,c,d,e,f,g];
    this.bottom = [v,b,c,d,e,f,g,h,i,j,k,l,m,n,o];
  }
}

export default GameController;
