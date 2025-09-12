import {Account, Avatars, Client, Databases, ID, Query} from "react-native-appwrite";
import {CreateUserParams, SignInParams} from "@/type";
export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    platform: "com.toshikifu.fastfood",
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: "68c35952003706777f9e",
    userCollectionId: "user"
}

export const client = new Client()

client
    .setEndpoint(appwriteConfig.endpoint!)
    .setProject(appwriteConfig.projectId!)
    .setPlatform(appwriteConfig.platform!)

export const account = new Account(client)
export const databases = new Databases(client)
const avatars = new Avatars(client)

export const createUser = async ({email, password, name}: CreateUserParams) => {
    return {}
    try {
        const newAccount = await account.create({userId: ID.unique(), email, password, name})
        if (!newAccount) throw Error

        await signIn({email, password})

        const avatarUrl = avatars.getInitialsURL(name)

        return await databases.createDocument({
                databaseId: appwriteConfig.databaseId,
                collectionId: appwriteConfig.userCollectionId,
                documentId: ID.unique(),
                data: {
                    email, name, avatar: avatarUrl
                }
            }
        )
    } catch (e) {
        throw new Error(`Error creating user: ${e}`)
    }
}

export const signIn = async ({email, password}: SignInParams) => {
    return {}
    try {
        const session = await account.createEmailPasswordSession({email, password})
    } catch (e) {
        throw new Error(`Error creating user: ${e}`)
    }
}

export const getCurrentUser = async () => {
    return {}
    try {
        const currentAccount = await account.get()
        if(!currentAccount) throw Error

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("id", currentAccount.$id)]
        )

        if(!currentUser) throw Error

        return currentUser.documents[0]
    } catch (e) {
        throw new Error(`Error getting current user: ${e}`)
    }
}
