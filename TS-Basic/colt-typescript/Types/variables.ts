let movieTitle: string = 'Amadeus'
movieTitle = 'Arrival'
// movieTitle = 9 
movieTitle.toUpperCase()

let numCatLives: number = 9
numCatLives += 1;
// numCatLives = 'zero'    type error!!

let gameOver: boolean = false
gameOver = true
// gameOver = 'true'


// 실제로 작성할 때는 위보다는 Type Interface(타입 추론)를 사용한다.
// 타입스크립트는 똑똑해서 굳이 타입을 annotation하지 않아도 타입을 저장한다.

let tvShow = 'Olive Kitteridge'
tvShow = 'Wow type interface!'
// tvShow = false     type error!!

let isFunny = false
isFunny = true
// isFunny = 'add'     type error!!



// Any!
const movies = ['Arrival', 'the Thing', 'Aliens', 'amadeus']
let foundMovie // 이렇게 초기화가 안 된 경우 annotation을 줄 필요가 있다. ex) let foundMovie: string

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus'
  }
}
