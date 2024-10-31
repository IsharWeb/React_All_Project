import conf from '../config/conf'
import { Client, ID, Account } from "appwrite";
// create Aouth Service 
export class AuthService {

    client = new Client();
    account;
    // call constructor client
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    // create account functions
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // here call login function
                return this.login({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
            // console.log(error);
        }
    }
    // create login fun
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }
    // create Verification fun
    async verification({ email }) {
        try {
            return await this.account.createVerification(email)
        } catch (error) {
            throw error;
        }
    }
    // user login or not
    async gerCorrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log(error);

        }

        return 0;
    }
    // logout fun
    async loginOut() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}

 const authService = new AuthService();

 export default authService