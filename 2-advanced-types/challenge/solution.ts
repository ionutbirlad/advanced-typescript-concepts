// Replace the three interfaces with a generic interface that can be used to define the three types of users.
type UserType = "admin" | "guest" | "member";

type User<T extends UserType> = {
  id: number;
  username: string; 
  permissions?: T extends "admin" ? string[] : never;
  expirationDate?: T extends "guest" ? Date : never;
  memberSince?: T extends "member" ? Date : never;
}

// Update the function to accept the new generic user type.
function updateUser<T extends UserType>(user: User<T>) {
  console.log(`Updating user ${user.username}`);

  if (user.permissions && "permissions" in user) console.log("Permissions:", user.permissions.join(", "));
  if (user.expirationDate && "expirationDate" in user) console.log("Expires:", user.expirationDate.toISOString());
  if (user.memberSince && "memberSince" in user) console.log("Member Since:", user.memberSince.toISOString());
  // Simulate updating user in the database
}

// Update the function calls to use the new generic user type.
const admin: User<"admin"> = {
  id: 1,
  username: "adminUser",
  permissions: ["manage_system", "modify_users"]
};

const guest: User<"guest"> = {
  id: 2,
  username: "guestUser",
  expirationDate: new Date()
};

const member: User<"member"> = {
  id: 3,
  username: "memberUser",
  memberSince: new Date()
};

updateUser(admin);
updateUser(guest);
updateUser(member);
