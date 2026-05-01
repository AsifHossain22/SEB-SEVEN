// SpreadOperator

const friends = ["Asif", "Ratul", "Akash"];

const schoolFriends = ["Zihad", "Abir", "Safayat"];

const collegeFriends = ["Tanvir", "Miraj", "Fahim"];

friends.push(...schoolFriends);

console.log(friends);

const user = {
  name: "Asif",
  phone: "01234",
};

const otherInfo = {
  hobby: "Gardening",
  favoriteColor: "Blue",
};

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

// RestOperator

const sendInvitation = (...friends: string[]) => {
  //   console.log(`Sent Invitation to ${friend1}`);
  //   console.log(`Sent Invitation to ${friend2}`);
  //   console.log(`Sent Invitation to ${friend3}`);

  friends.forEach((friend: string) =>
    console.log(`Send invitation to ${friend}`),
  );
};
sendInvitation("Asif", "Ratul", "Akash", "Zihad", "Abir", "Safayat");
