calcAverageHumarAge2 = function(ages){
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age *4));
    const adults = humanAges.filter(age => age >= 18);
    console.log(humanAges);
    console.log(adults);

    const averrage = adults.reduce(
        (acc, age, i, arr) =>  acc + age / arr.length,0
    );
    return averrage;
 };
 const calcAverageHumarAge = ages => ages.map(age => (age <= 2 ? 2 * age : 16 + age *4)).filter(age => age >= 18).reduce((acc,age,i,arr) => acc + age / arr.length,0);
  const avg1 = calcAverageHumarAge([5,2,4,1,15,8,3]);
  const avg2 = calcAverageHumarAge([16,6,10,5,6,1,4]);
  console.log(avg1, avg2);