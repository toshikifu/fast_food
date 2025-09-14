import {Account, Avatars, Client, Databases, ID, Query, Storage} from "react-native-appwrite";
import {CreateUserParams, GetMenuParams, SignInParams} from "@/type";

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    platform: "com.toshikifu.fastfood",
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: "68c35952003706777f9e",
    bucketId: "68c54357003ce044fbbe",
    userCollectionId: "user",
    categoriesCollectionId: "categories",
    menuCollectionId: "menu",
    customizationsCollectionId: "customizations",
    menuCustomizationsCollectionId: "menu_customizations",
    devKey: process.env.EXPO_PUBLIC_APPWRITE_DEV_KEY,
}

export const client = new Client()

client
    .setEndpoint(appwriteConfig.endpoint!)
    .setProject(appwriteConfig.projectId!)
    .setPlatform(appwriteConfig.platform!)
    .setDevKey(appwriteConfig.devKey!)

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
const avatars = new Avatars(client)

export const createUser = async ({email, password, name}: CreateUserParams) => {
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
    try {
        const session = await account.createEmailPasswordSession({email, password})
        console.log(session)
    } catch (e) {
        throw new Error(`Error creating user: ${e}`)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get()
        if(!currentAccount) throw Error

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("$id", currentAccount.$id)]
        )

        if(!currentUser) throw Error

        return currentUser.documents[0]
    } catch (e) {
        throw new Error(`Error getting current user: ${e}`)
    }
}

export const getMenu = async ({category, query}: GetMenuParams) => {
    try {
        const queries: string[] = []

        if(category) queries.push(Query.equal("categories", category))
        if(query) queries.push(Query.search("name", query))

        const menus = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.menuCollectionId,
            queries
        )

        return menus.documents
    } catch (e) {
        throw new Error(`Error getting menu: ${e}`)
    }
}

export const getCategories = async () => {
    try {
        const categories = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.categoriesCollectionId,
        )
        return categories.documents
    } catch (e) {
        throw new Error(`Error getting categories: ${e}`)
    }
}
