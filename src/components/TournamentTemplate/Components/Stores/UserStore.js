
import { writable } from "svelte/store";
import  RESTClient  from "../Utils/RESTClient";
import AuthService from "../Services/AuthService";

 
// Initialize RESTClient for "player"
const playerClient = new RESTClient("player");
 
// Writable stores for managing user data
export const user = writable(null); // For current user
export const userStore = writable([]); // For list of users

if ( AuthService.isLoggedIn() ) {
  const response = await playerClient.get("/profile");
  if (!response.code) {
    user.set(response);
  } else {
    console.error("Error fetching signup data: ", response.message);
  }
}



// Fetch user data related to signup from the "player" API (optional, if needed)
const fetchUsers = async () => {
  try {
    const response = await playerClient.get("/signup");
    if (response) {
      userStore.set(response);
    } else {
      console.error("Error fetching signup data: ", response.message);
    }
  } catch (err) {
    console.error("Error fetching signup data: ", err.message);
  }
};

// Signup function to handle new user registration
const signupUser = async (userData) => {
  try {
    const response = await playerClient.post("/signup", userData); // Make signup API call
    if (response.code) {
      console.error("Error signing up: ", response.message);
      throw new Error(response.message);
    }

    // Update user state upon successful signup
    user.set(response.user);
  } catch (err) {
    console.error("Signup error: ", err.message);
    throw err; // Re-throw the error for handling in the UI
  }
};
 
// Export the stores and functions needed for signup
export {  fetchUsers, signupUser, playerClient };

