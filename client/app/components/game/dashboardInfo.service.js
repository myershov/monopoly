const dashboard = {
    top: {
      cell_0: {
        name: 'Begin',
        positionX: 10,
        positionY: 10
      },
      cell_1: {
        name: 'Movie2342',
        positionX: 10,
        positionY: 60
      },
      cell_2: {
        name: 'Movie234234',
        positionX: 10,
        positionY: 110
      },
      cell_3: {
        name: 'Movie123sdf',
        positionX: 10,
        positionY: 160
      },
      cell_4: {
        name: 'Moasdfsdfvie',
        positionX: 10,
        positionY: 210
      },
      cell_5: {
        name: 'Movisadf asdfa de',
        positionX: 10,
        positionY: 260
      },
      cell_6: {
        name: 'Moviasdf sdafe',
        positionX: 10,
        positionY: 310
      },
      cell_7: {
        name: 'Moviasdf asd e',
        positionX: 10,
        positionY: 360
      },
      cell_8: {
        name: 'Movias dfa dfe',
        positionX: 10,
        positionY: 410
      },
      cell_9: {
        name: 'Moviasdfas df sa fde',
        positionX: 10,
        positionY: 460
      },
      cell_10: {
        name: 'Moviasdfas df sa fde',
        positionX: 10,
        positionY: 510
      },
      cell_11: {
        name: 'Moviasdfas df sa fde',
        positionX: 10,
        positionY: 560
      },
      cell_12: {
        name: 'Moviasdfas df sa fde',
        positionX: 10,
        positionY: 610
      },
      cell_13: {
        name: 'Moviasdfas df sa fde',
        positionX: 10,
        positionY: 760
      },
      cell_14: {
        name: 'Moviasdfas dsfasdfadfafaaa',
        positionX: 160,
        positionY: 760,
        isRight: true
      }
    },
    right: {
      cell_15:{
        name: 'Movie',
        positionX: 210,
        positionY: 760,
        isRight: true
      },
      cell_16:{
        name: 'Movie2342',
        positionX: 260,
        positionY: 760,
        isRight: true
      },
      cell_17:{
        name: 'Movie234234',
        positionX: 310,
        positionY: 760,
        isRight: true
      },
      cell_18:{
        name: 'Movie123sdf',
        positionX: 360,
        positionY: 760,
        isRight: true
      },
      cell_19:{
        name: 'Moasdfsdfvie',
        positionX: 410,
        positionY: 760,
        isRight: true
      },
      cell_20:{
        name: 'Movisadf asdfa de',
        positionX: 460,
        positionY: 760,
        isRight: true
      },
      cell_21:{
        name: 'Moviasdf sdafe',
        positionX: 610,
        positionY: 760,
        isBottom: true
      }
    },
    bottom: {
      cell_22:{
        name: 'Movie',
        positionX: 610,
        positionY: 610,
        isBottom: true
      },
      cell_23:{
        name: 'Movie2342',
        positionX: 610,
        positionY: 560,
        isBottom: true
      },
     cell_24: {
        name: 'Movie234234',
        positionX: 610,
        positionY: 510,
        isBottom: true
      },
      cell_25:{
        name: 'Movie123sdf',
        positionX: 610,
        positionY: 460,
        isBottom: true
      },
      cell_26:{
        name: 'Moasdfsdfvie',
        positionX: 610,
        positionY: 410,
        isBottom: true
      },
      cell_27:{
        name: 'Movisadf asdfa de',
        positionX: 610,
        positionY: 360,
        isBottom: true
      },
     cell_28: {
        name: 'Moviasdf sdafe',
        positionX: 610,
        positionY: 310,
        isBottom: true
      },
      cell_29:{
        name: 'Moviasdf asd e',
        positionX: 610,
        positionY: 260,
        isBottom: true
      },
      cell_30:{
        name: 'Movias dfa dfe',
        positionX: 610,
        positionY: 210,
        isBottom: true
      },
      cell_31:{
        name: 'Moviasdfas df sa fde',
        positionX: 610,
        positionY: 160,
        isBottom: true
      },
      cell_32:{
        name: 'Moviasdfas df sa fde',
        positionX: 610,
        positionY: 110,
        isBottom: true
      },
      cell_33:{
        name: 'Moviasdfas df sa fde',
        positionX: 610,
        positionY: 60,
        isBottom: true
      },
      cell_34:{
        name: 'Moviasdfas df sa fde',
        positionX: 610,
        positionY: 10,
        isBottom: true
      },
      cell_35:{
        name: 'Moviasdfas df sa fde',
        positionX: 610,
        positionY: -140,
        isBottom: true
      },
      cell_36:{
        name: 'Moviasdfas df sa fde',
        positionX: 460,
        positionY: -140,
        isLeft: true
      }
    },
    left: {
      cell_37:{
        name: 'Movie',
        positionX: 410,
        positionY: -140,
        isLeft: true
      },
      cell_38:{
        name: 'Movie2342',
        positionX: 360,
        positionY: -140,
        isLeft: true
      },
      cell_39:{
        name: 'Movie234234',
        positionX: 310,
        positionY: -140,
        isLeft: true
      },
      cell_40:{
        name: 'Movie123sdf',
        positionX: 260,
        positionY: -140,
        isLeft: true
      },
      cell_41:{
        name: 'Moasdfsdfvie',
        positionX: 210,
        positionY: -140,
        isLeft: true
      },
      cell_42:{
        name: 'Movisadf asdfa de',
        positionX: 160,
        positionY: -140,
        isLeft: true
      },
      cell_43:{
        name: 'Moviasdf',
        positionX: 10,
        positionY: -140
      }
    }
};
let length = 0;
for (let prop in dashboard) {
    for (let side in dashboard[prop]) {
        length++;
    }
}
dashboard.length = length;

export {dashboard};
