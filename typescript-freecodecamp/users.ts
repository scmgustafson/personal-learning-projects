import { error } from "console";

type UserRole = "guest" | "admin" | "member";

type User = {
  id: number;
  username: string;
  role: UserRole;
};

// type UpdatedUser = {
//   id?: number;
//   username?: string;
//   role?: UserRole;
// };

type UpdatedUser = Partial<User>;

// Utility types use generic syntax of <>
// Partial type modifies type you pass in and sets all properties to optional

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "ted", role: "admin" },
  { id: nextUserId++, username: "dan", role: "member" },
  { id: nextUserId++, username: "yeet", role: "guest" },
];

function updateUser(id: number, updates: UpdatedUser) {
  let curUser = users.find((user) => user.id === id);
  if (!curUser) {
    console.error("User not found");
    return;
  }
  Object.assign(curUser, updates);
}

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error();
  }
  return user;
}

function addNewUser(userWithoutId: Omit<User, "id">): User {
  //omit allows us to use a type with a specific property removed
  let finalUser: User = {
    id: nextUserId++,
    // username: userWithoutId.username,
    // role: userWithoutId.role,
    ...userWithoutId, // can spread the remaining properties out with this syntax instead of using above
  };
  users.push(finalUser);
  return finalUser;
}

updateUser(1, { username: "New User" });
updateUser(3, { role: "admin" });

let partialUser: Omit<User, "id"> = { username: "timmy", role: "guest" };
addNewUser(partialUser);

console.log(users);
