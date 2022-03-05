function warnTheSheep(queue) {
    let reversedQueue = queue.reverse()
    let N = reversedQueue.indexOf('wolf')
    return reversedQueue[0] === 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${N}! You are about to be eaten by a wolf!`
}
//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15