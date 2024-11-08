
class AuthService {
    // Key names to use in localStorage
    static STORAGE_KEY_USER = 'auth_user';
    static STORAGE_KEY_TOKENS = 'auth_tokens';
    // static STORAGE_KEY_VENDOR = 'vendor';

    // Save user and tokens to localStorage
    static login(response) {
        if (response.player) {
            localStorage.setItem(this.STORAGE_KEY_USER, JSON.stringify(response.player));
            // user.set(response.user)
        }
        if (response.tokens) {
            localStorage.setItem(this.STORAGE_KEY_TOKENS, JSON.stringify(response.tokens));
       }
       if(response.access && response.refresh){
            localStorage.setItem(this.STORAGE_KEY_TOKENS, JSON.stringify({access: response.access, refresh: response.refresh}));
       }

       return
    }
 
    // Check if the user is logged in
    static isLoggedIn() {
        const tokens = this.getTokens();
        return !!tokens && !!tokens.access && new Date(tokens.access.expires) > new Date();
    }

    // Get the logged-in user's data
    static getUser() {
        const userJson = localStorage.getItem(this.STORAGE_KEY_USER);
        if(userJson && userJson !== 'undefined') { 
            // user.set(JSON.parse(userJson))                          
            return JSON.parse(userJson);
        }
        return null;
    }
 
    // Get the stored tokens
    static getTokens() {
        const tokensJson = localStorage.getItem(this.STORAGE_KEY_TOKENS);
        return tokensJson && tokensJson !== 'undefined' ? JSON.parse(tokensJson) : null;
    }
 
    // Log the user out by clearing the localStorage
    static logout() {
        localStorage.removeItem(this.STORAGE_KEY_USER);
        localStorage.removeItem(this.STORAGE_KEY_TOKENS);
    }


    // Update the access token (if needed for refreshing tokens)
    static updateAccessToken(newAccessToken) {
        const tokens = this.getTokens();
        if (tokens) {
            tokens.access = newAccessToken;
            localStorage.setItem(this.STORAGE_KEY_TOKENS, JSON.stringify(tokens));
        }
    }
}
 
export default AuthService;
 
