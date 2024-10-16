import conf from "../config/conf";
import {Client, Databases, Query, ID, Storage} from 'appwrite';

// create configuration service
export class ConfService {

    client = new Client();
    databases;
    storage;

    constructor() {

        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteDatabaseId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)

    }

    // create Post functinolatys 
    async  createPost({slug, userId, title, featuredImage, content, status,  }) {

        try {
            return await this.databases.createDocument(
               conf.appwriteDatabaseId,
               conf.appwriteCollectionId,
               slug,
              {

                  title,
                  featuredImage,
                  userId,
                  content,
                  status,

              }
            )
        } catch (error) {
            throw error;            
        }

    }
    
     // update Post functinolatys 
     async  updatePost( slug, {title, featuredImage, content, status,  }) {

        try {
            return await this.databases.updateDocument(
               conf.appwriteDatabaseId,
               conf.appwriteCollectionId,
               slug,
              {

                  title,
                  featuredImage,
                  content,
                  status,
                  
              }
            )
        } catch (error) {
            throw error;            
        }

    }
    
    // delete Post functinolatys 
    async  deletePost( slug ) {

        try {

             await this.databases.deleteDocument(

               conf.appwriteDatabaseId,
               conf.appwriteCollectionId,
               slug,

            )

            return true;

        } catch (error) {

            throw error;   
            // return false;         
        }

    }
    
    // give me one Post functinolatys 
    async  getPost( slug ) {

        try {

             await this.databases.getDocument(

               conf.appwriteDatabaseId,
               conf.appwriteCollectionId,
               slug,

            )

            return true;

        } catch (error) {

            throw error;   
            // return false;         
        }

    }
    
    // give me all Posts
    async allPost(quereis = [Query.equal("status" , "active")]){
       
        try {
            
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                quereis,
            )
        
       } catch (error) {
        throw error;
       }
    }

    // Uploade File Servicess

    // uploade file
    async  uploadPost(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            throw error;
        }
    }

      // delete file
      async  deletePost(fileId) {
        try {
             await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            throw error;
        }
    }

    getFilePreview(fileId){
        
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    
    }


}

const confService = new ConfService();

export default confService;