export async function fetchUserProfile(username: string) {
    // Perform network requests, database queries, or other asynchronous tasks
    // For example, you might use Axios or fetch to make an HTTP request
    const userProfileData = await fetch(`http://localhost:3000/profile?user=${username}`);
    const userProfile = await userProfileData.json();

    return userProfile;
}
