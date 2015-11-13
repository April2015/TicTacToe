describe("aiService", function() {


  it("first move by Black", function(){
    let state: IState = {board: [
      ['', '', '', '', 'W', '', 'W', '', 'O', '', 'B', '', 'B', '', '', '', '' ],
      ['', '', '', 'W', '', 'W', '', 'W', '', 'B', '', 'B', '', 'B', '', '', '' ],
      ['', '', 'O', '', 'W', '', 'W', '', 'O', '', 'B', '', 'B', '', 'O', '', '' ],
      ['', 'O', '', 'O', '', 'O', '', 'O', '', 'O', '', 'O', '', 'O', '', 'O', '' ],
      ['O', '', 'O', '', 'O', '', 'O', '', 'O', '', 'O', '', 'O', '', 'O', '', 'O' ],
      ['', 'O', '', 'O', '', 'O', '', 'O', '', 'O', '', 'O', '', 'O', '', 'O', '' ],
      ['', '', 'O', '', 'B', '', 'B', '', 'O', '', 'W', '', 'W', '', 'O', '', '' ],
      ['', '', '', 'B', '', 'B', '', 'B', '', 'W', '', 'W', '', 'W', '', '', '' ],
      ['', '', '', '', 'B', '', 'B', '', 'O', '', 'W', '', 'W', '', '', '', '' ] ],
      isInitialState: true,
    blackRemoved: 0, whiteRemoved: 0};
    let move = aiService.createComputerMove(state, 0, {maxDepth: 1});
    let expectedMove = gameLogic.createMove(state, move[5].set.value, 0);
    expect(angular.equals(move, expectedMove)).toBe(true);
  });

  it("Black finds an immediate winning move in less than a second", function() {
    let state: IState = {board: [
      ['', '', '', '', 'O', '', 'O', '', 'O', '', 'O', '', 'W', '', '', '', '' ],
      ['', '', '', 'O', '', 'O', '', 'O', '', 'B', '', 'B', '', 'O', '', '', '' ],
      ['', '', 'O', '', 'O', '', 'O', '', 'B', '', 'B', '', 'O', '', 'O', '', '' ],
      ['', 'O', '', 'O', '', 'B', '', 'B', '', 'O', '', 'O', '', 'B', '', 'O', '' ],
      ['O', '', 'O', '', 'B', '', 'W', '', 'W', '', 'O', '', 'O', '', 'O', '', 'O' ],
      ['', 'O', '', 'O', '', 'W', '', 'W', '', 'O', '', 'W', '', 'B', '', 'O', '' ],
      ['', '', 'O', '', 'O', '', 'O', '', 'W', '', 'W', '', 'B', '', 'B', '', '' ],
      ['', '', '', 'O', '', 'B', '', 'O', '', 'O', '', 'W', '', 'O', '', '', '' ],
      ['', '', '', '', 'O', '', 'O', '', 'O', '', 'O', '', 'B', '', '', '', '' ]],
      isInitialState: false,
      blackRemoved: 1, whiteRemoved: 5};
      let move = aiService.findComputerMove(<IUpdateUI>{
        turnIndexAfterMove: 0, stateAfterMove: state});
      let expectedMove = [{endMatch: {endMatchScores: [1, 0]}},
        {set: {key: 'board', value: [
          ['', '', '', '', 'O', '', 'O', '', 'O', '', 'O', '', 'B', '', '', '', '' ],
          ['', '', '', 'O', '', 'O', '', 'O', '', 'B', '', 'B', '', 'O', '', '', '' ],
          ['', '', 'O', '', 'O', '', 'O', '', 'B', '', 'O', '', 'O', '', 'O', '', '' ],
          ['', 'O', '', 'O', '', 'B', '', 'B', '', 'O', '', 'O', '', 'B', '', 'O', '' ],
          ['O', '', 'O', '', 'B', '', 'W', '', 'W', '', 'O', '', 'O', '', 'O', '', 'O' ],
          ['', 'O', '', 'O', '', 'W', '', 'W', '', 'O', '', 'W', '', 'B', '', 'O', '' ],
          ['', '', 'O', '', 'O', '', 'O', '', 'W', '', 'W', '', 'B', '', 'B', '', '' ],
          ['', '', '', 'O', '', 'B', '', 'O', '', 'O', '', 'W', '', 'O', '', '', '' ],
          ['', '', '', '', 'O', '', 'O', '', 'O', '', 'O', '', 'B', '', '', '', '' ]]}},
        {set: {key: 'isInitialState', value: false}},
        {set: {key: 'blackRemoved', value: 1}},
        {set: {key: 'whiteRemoved', value: 6}},
       {set: {key: 'action', value: {isInline: true, direction:  {row: -1, col:1},
        selfMarbles: [{row: 2, col: 10}, {row: 1, col: 11}],
        opponentMarbles: [{row: 0, col: 12}]}}}];

      expect(angular.equals(move, expectedMove)).toBe(true);
      });

  it("Expect a broadside move by Black", function(){
    let state: IState = {board: [
      ['', '', '', '', 'O', '', 'O', '', 'O', '', 'O', '', 'W', '', '', '', '' ],
      ['', '', '', 'O', '', 'O', '', 'O', '', 'B', '', 'O', '', 'O', '', '', '' ],
      ['', '', 'O', '', 'O', '', 'O', '', 'B', '', 'O', '', 'B', '', 'O', '', '' ],
      ['', 'O', '', 'O', '', 'B', '', 'B', '', 'O', '', 'B', '', 'O', '', 'B', '' ],
      ['O', '', 'O', '', 'B', '', 'W', '', 'W', '', 'O', '', 'O', '', 'O', '', 'O' ],
      ['', 'O', '', 'O', '', 'W', '', 'W', '', 'O', '', 'W', '', 'B', '', 'O', '' ],
      ['', '', 'O', '', 'O', '', 'O', '', 'W', '', 'W', '', 'B', '', 'B', '', '' ],
      ['', '', '', 'O', '', 'B', '', 'O', '', 'O', '', 'W', '', 'O', '', '', '' ],
      ['', '', '', '', 'O', '', 'O', '', 'O', '', 'O', '', 'B', '', '', '', '' ]],
      isInitialState: false,
    blackRemoved: 1, whiteRemoved: 5};
    let move = aiService.createComputerMove(state, 0, {maxDepth: 1});
    let expectedMove = gameLogic.createMove(state, move[5].set.value, 0);
     expect(angular.equals(move, expectedMove)).toBe(true);
  });

  it("Expect an inline move by white", function(){
    let state: IState = {board: [
      ['', '', '', '', 'O', '', 'O', '', 'O', '', 'O', '', 'O', '', '', '', '' ],
      ['', '', '', 'O', '', 'O', '', 'B', '', 'O', '', 'O', '', 'O', '', '', '' ],
      ['', '', 'O', '', 'O', '', 'O', '', 'B', '', 'O', '', 'O', '', 'O', '', '' ],
      ['', 'O', '', 'O', '', 'O', '', 'O', '', 'B', '', 'B', '', 'B', '', 'O', '' ],
      ['O', '', 'O', '', 'O', '', 'O', '', 'B', '', 'W', '', 'B', '', 'B', '', 'O' ],
      ['', 'O', '', 'O', '', 'W', '', 'W', '', 'B', '', 'W', '', 'O', '', 'O', '' ],
      ['', '', 'O', '', 'O', '', 'O', '', 'W', '', 'W', '', 'W', '', 'O', '', '' ],
      ['', '', '', 'O', '', 'B', '', 'W', '', 'W', '', 'W', '', 'B', '', '', '' ],
      ['', '', '', '', 'B', '', 'O', '', 'O', '', 'B', '', 'B', '', '', '', '' ]],
      isInitialState: false,
    blackRemoved: 0, whiteRemoved: 4};
    let move = aiService.createComputerMove(state, 1, {maxDepth: 1});
    let expectedMove = gameLogic.createMove(state, move[5].set.value, 1);
     expect(angular.equals(move, expectedMove)).toBe(true);
  });

  it("All possible moves by Black", function(){
    let state: IState = {board: [
        ['', '', '', '', 'O', '', 'O', '', 'O', '', 'O', '', 'W', '', '', '', '' ],
        ['', '', '', 'O', '', 'O', '', 'O', '', 'B', '', 'O', '', 'O', '', '', '' ],
        ['', '', 'O', '', 'O', '', 'O', '', 'B', '', 'O', '', 'B', '', 'O', '', '' ],
        ['', 'O', '', 'O', '', 'B', '', 'B', '', 'O', '', 'B', '', 'O', '', 'B', '' ],
        ['O', '', 'O', '', 'B', '', 'W', '', 'W', '', 'O', '', 'O', '', 'O', '', 'O' ],
        ['', 'O', '', 'O', '', 'W', '', 'W', '', 'O', '', 'W', '', 'B', '', 'O', '' ],
        ['', '', 'O', '', 'O', '', 'O', '', 'W', '', 'W', '', 'B', '', 'B', '', '' ],
        ['', '', '', 'O', '', 'B', '', 'O', '', 'O', '', 'W', '', 'O', '', '', '' ],
        ['', '', '', '', 'O', '', 'O', '', 'O', '', 'O', '', 'B', '', '', '', '' ]],
        isInitialState: false,
      blackRemoved: 1, whiteRemoved: 5};
    let moves = aiService.getPossibleMoves(state, 0);
    let expectedMove = gameLogic.createMove(state, moves[0][5].set.value, 0);
    expect(angular.equals(moves[0], expectedMove)).toBe(true);
  });



  // it("Expect a broadside move by Black", function(){
  //   let state: IState = {board: [
  //     ['', '', '', '', 'O', '', 'O', '', 'O', '', 'O', '', 'W', '', '', '', '' ],
  //     ['', '', '', 'O', '', 'O', '', 'O', '', 'B', '', 'O', '', 'O', '', '', '' ],
  //     ['', '', 'O', '', 'O', '', 'O', '', 'B', '', 'O', '', 'B', '', 'O', '', '' ],
  //     ['', 'O', '', 'O', '', 'B', '', 'B', '', 'O', '', 'B', '', 'O', '', 'B', '' ],
  //     ['O', '', 'O', '', 'B', '', 'W', '', 'W', '', 'O', '', 'O', '', 'O', '', 'O' ],
  //     ['', 'O', '', 'O', '', 'W', '', 'W', '', 'O', '', 'W', '', 'B', '', 'O', '' ],
  //     ['', '', 'O', '', 'O', '', 'O', '', 'W', '', 'W', '', 'B', '', 'B', '', '' ],
  //     ['', '', '', 'O', '', 'B', '', 'O', '', 'O', '', 'W', '', 'O', '', '', '' ],
  //     ['', '', '', '', 'O', '', 'O', '', 'O', '', 'O', '', 'B', '', '', '', '' ]],
  //   blackRemoved: 1, whiteRemoved: 5};
  //   let move = aiService.createComputerMove(state, 0, {maxDepth: 2});
  //   let action: Action = {isInline: false, direction:  {row: -1, col: -1},
  //    selfMarbles: [{row: 2, col: 12}, {row: 3, col: 11}],
  //    opponentMarbles: []};
  //   let expectedMove = [{setTurn: {turnIndex: 1}},
  //    {set: {key: 'action', value: action}},
  //   {set: {key: 'state', value: {board: [
  //     ['', '', '', '', 'O', '', 'O', '', 'O', '', 'O', '', 'W', '', '', '', '' ],
  //     ['', '', '', 'O', '', 'O', '', 'O', '', 'B', '', 'B', '', 'O', '', '', '' ],
  //     ['', '', 'O', '', 'O', '', 'O', '', 'B', '', 'B', '', 'O', '', 'O', '', '' ],
  //     ['', 'O', '', 'O', '', 'B', '', 'B', '', 'O', '', 'O', '', 'O', '', 'B', '' ],
  //     ['O', '', 'O', '', 'B', '', 'W', '', 'W', '', 'O', '', 'O', '', 'O', '', 'O' ],
  //     ['', 'O', '', 'O', '', 'W', '', 'W', '', 'O', '', 'W', '', 'B', '', 'O', '' ],
  //     ['', '', 'O', '', 'O', '', 'O', '', 'W', '', 'W', '', 'B', '', 'B', '', '' ],
  //     ['', '', '', 'O', '', 'B', '', 'O', '', 'O', '', 'W', '', 'O', '', '', '' ],
  //     ['', '', '', '', 'O', '', 'O', '', 'O', '', 'O', '', 'B', '', '', '', '' ]],
  //    blackRemoved: 1, whiteRemoved: 5}}}];
  //   expect(angular.equals(move, expectedMove)).toBe(true);
  // });

});
