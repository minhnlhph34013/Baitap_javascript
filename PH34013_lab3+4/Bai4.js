const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];
  
  // Yêu cầu 1
  dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
  
  // Yêu cầu 2
  const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
  if (sarahsDog) {
    if (sarahsDog.curFood > sarahsDog.recommendedFood) {
      console.log("Chó của Sarah ăn quá nhiều!");
    } else if (sarahsDog.curFood < sarahsDog.recommendedFood) {
      console.log("Chó của Sarah ăn quá ít!");
    } else {
      console.log("Chó của Sarah ăn đúng khẩu phần khuyến nghị!");
    }
  }
  
  // Yêu cầu 3
  const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood)
                                .flatMap(dog => dog.owners);
  const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood)
                                .flatMap(dog => dog.owners);
  
  // Yêu cầu 4
  console.log(`${ownersEatTooMuch.join(' and ')}'s dogs ăn quá nhiều!`);
  console.log(`${ownersEatTooLittle.join(' and ')}'s dogs ăn quá ít!`);
  
  // Yêu cầu 5
  const isCorrectPortion = dogs.some(dog => dog.curFood === dog.recommendedFood);
  console.log(`Có chó nào ăn khẩu phần đúng không? ${isCorrectPortion}`);
  
  // Yêu cầu 6
  const isProperPortion = dogs.every(dog => dog.curFood > dog.recommendedFood * 0.9 &&
                                            dog.curFood < dog.recommendedFood * 1.1);
  console.log(`Có chó nào ăn khẩu phần hợp lý không? ${isProperPortion}`);
  
  // Yêu cầu 7
  const dogsProperPortion = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 &&
                                                dog.curFood < dog.recommendedFood * 1.1);
  console.log("Các chó có khẩu phần ăn hợp lý:");
  dogsProperPortion.forEach(dog => console.log(dog));
  
  // Yêu cầu 8
  const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
  console.log("Mảng chó mới sắp xếp theo khẩu phần ăn đề nghị:");
  sortedDogs.forEach(dog => console.log(dog));