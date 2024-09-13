/* შექმენით ფუნქცია სადაც პარამეტრები იქნება მასივი, და რიცხი, რიცხვი არის აღმნიშვნელი თუ რამდენად უნდა დაიხლიჩოს ჩვენი მასივი.
 ფუნქციამ უნდა დაგვიბრუნოს დახლეჩილი მასივი. მაგ: ([1,2,3,4,5,6,7,8,], 2) => ეს დაგვიბრუნებს [[1,2], [3,4], [5,6], [7,8]].*/

function division(array, number) {
  const partitionedArray = [];

  for (let i = 0; i < array.length; i += number) {
    partitionedArray.push(array.slice(i, i + number));
  }

  return partitionedArray;
}
console.log(division([1, 2, 3, 4, 5, 6], 2));
