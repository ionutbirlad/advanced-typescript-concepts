"use strict";
// Update the function to accept the new generic user type.
function updateUser(user) {
    console.log(`Updating user ${user.username}`);
    if (user.permissions && "permissions" in user)
        console.log("Permissions:", user.permissions.join(", "));
    if (user.expirationDate && "expirationDate" in user)
        console.log("Expires:", user.expirationDate.toISOString());
    if (user.memberSince && "memberSince" in user)
        console.log("Member Since:", user.memberSince.toISOString());
    // Simulate updating user in the database
}
// Update the function calls to use the new generic user type.
const admin = {
    id: 1,
    username: "adminUser",
    permissions: ["manage_system", "modify_users"]
};
const guest = {
    id: 2,
    username: "guestUser",
    expirationDate: new Date()
};
const member = {
    id: 3,
    username: "memberUser",
    memberSince: new Date()
};
updateUser(admin);
updateUser(guest);
updateUser(member);
