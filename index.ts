// async function fetchUserData(
//   userId: number,
// ): Promise<{ id: number; name: string; email: string }> {
//   await delay(4000);

//   return {
//     id: userId,
//     name: `User ${userId}`,
//     email: `User ${userId}@gmail.com`,
//   };
// }

// function delay(ms: number): Promise<void> {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function main(): Promise<void> {
//   try {
//     console.log("Starting to fetch user Data....");
//     const user = await fetchUserData(123);
//     console.log("User data received:", user);

//     const [user1, user2, user3, user4] = await Promise.all([
//       fetchUserData(1),
//       fetchUserData(2),
//       fetchUserData(3),
//       fetchUserData(4),
//     ]);

//     console.log("Multiple Users:", { user1, user2, user3, user4 });
//   } catch (error) {
//     console.log("Error Reaching user data:", error);
//   }
// }

// main();
// console.log("Doing another task");

// -Fetch fetchUserId
// -Fetch fetchUserDetails
// -Save user log
// -Display success

function fetchUserId(callback: (error: Error | null, userId?: string) => void) {
  console.log("Fetching userId......");
  setTimeout(() => {
    const userId = "user 123";
    callback(null, userId);
  }, 2000);
}

function fetchUserDetails(
  userId: string,
  callback: (
    error: Error | null,
    details?: { name: string; email: string },
  ) => void,
) {
  console.log(`Fetching details for userId ${userId}`);
  setTimeout(() => {
    const details = { name: "Sam", email: "sam@gmmail.com" };
    callback(null, details);
  }, 300);
}

function saveUserLog(
  userName: string,
  userEmail: string,
  callback: (error: Error | null, logStatus?: string) => void,
) {
  console.log(`saving log for ${userName} with ${userEmail}`);
  setTimeout(() => {
    const status = `Log saved Successfully`;
    callback(null, status);
  }, 3000);
}
