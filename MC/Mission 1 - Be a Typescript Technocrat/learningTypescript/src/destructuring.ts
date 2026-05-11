//* Object Destructuring
const user = {
  id: 101,
  name: {
    firstName: "Asif",
    middleName: "Hossain",
    lastName: "Ratul",
  },
  gender: "Male",
  favoriteColor: "Blue",
};

// const myFavoriteColor = user.favoriteColor;
// const myMiddleName = user.name.middleName;

const {
  favoriteColor: myFavoriteColor,
  name: { middleName },
} = user;
// console.log(myFavoriteColor);
// console.log(middleName);

//* Array Destructuring
const friends = ["Zihad", "Abir", "Shamim"];

const [, , myBestFriend] = friends;
console.log(myBestFriend);
