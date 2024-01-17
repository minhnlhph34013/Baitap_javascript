const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔄 SUBSTITUTION'],
    [47, '⚽ GOAL'],
    [61, '🔄 SUBSTITUTION'],
    [64, '🟨 YELLOW CARD'],
    [69, 'Red card'],
    [70, '🔄 SUBSTITUTION'],
    [72, '🔄 SUBSTITUTION'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟨 YELLOW CARD'],
]);

//1 
const events = [...new Set(gameEvents.values())];
console.log(events);
//2
gameEvents.delete(64);

//3
console.log(
    `An events happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An events happened, on average, every ${time / gameEvents.size} minutes`
);

//4 
for (const[min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}