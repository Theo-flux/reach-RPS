'reach 0.1'

const player = {
  getHand: Fun([], uInt),
  setOutcome: Fun([uInt], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    // Specify Alice's interact interface here
    ...player,
  });
  const Bob = Participant('Bob', {
    // Specify Bob's interact interface here
    ...player,
  });
  init();
  // write your program here
  
});