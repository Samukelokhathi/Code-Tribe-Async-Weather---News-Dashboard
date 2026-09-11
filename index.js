"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchUserData(userId) {
    await delay(4000);
    return {
        id: userId,
        name: `User ${userId}`,
        email: `User ${userId}@gmail.com`,
    };
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function main() {
    try {
        console.log('Starting to fetch user Data....');
        const user = await fetchUserData(123);
        console.log("User data received:", user);
        const [user1, user2, user3, user4] = await Promise.all([
            fetchUserData(1),
            fetchUserData(2),
            fetchUserData(3),
            fetchUserData(4),
        ]);
        console.log("Multiple Users:", { user1, user2, user3, user4 });
    }
    catch (error) {
        console.log("Error detching user data:", error);
    }
}
main();
console.log("Doing another task");
//# sourceMappingURL=index.js.map