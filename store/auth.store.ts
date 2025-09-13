import {create} from 'zustand'
import {User} from "@/type";
import {getCurrentUser} from "@/lib/appwrite";

type AuthState = {
    isAuthenticated: boolean
    user: User | null
    isLoading: boolean

    setIsAuthenticated: (value: boolean) => void
    setUser: (user: User | null) => void
    setIsLoading: (isLoading: boolean) => void

    fetchAuthenticatedUser: () => Promise<void>
}

const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,
    isLoading: true,

    setIsAuthenticated: (value) => set({isAuthenticated: value}),
    setUser: (user) => set({user}),
    setIsLoading: (value) =>     set({isLoading:value}),

    fetchAuthenticatedUser: async() => {
        set({isLoading: true})

        set({isAuthenticated:true, isLoading: false, user: {"$createdAt": "2025-09-12T12:59:19.803+00:00", "$id": "68c41927c3220c53e677", "$updatedAt": "2025-09-12T12:59:19.803+00:00", "clientCode": "", "clientEngine": "", "clientEngineVersion": "", "clientName": "Expo", "clientType": "mobile app", "clientVersion": "54.0", "countryCode": "jp", "countryName": "Japan", "current": true, "deviceBrand": "Apple", "deviceModel": "", "deviceName": "", "expire": "2026-09-12T12:59:19.799+00:00", "factors": ["password"], "ip": "2405:1201:2199:ba00:dde:4395:3fab:101a", "mfaUpdatedAt": "", "osCode": "IOS", "osName": "iOS", "osVersion": "", "provider": "email", "providerAccessToken": "", "providerAccessTokenExpiry": "", "providerRefreshToken": "", "providerUid": "test2@hoge.com", "secret": "", "userId": "68c41927000b323724e0"}})
        return
        try {
            const user = await getCurrentUser()

            if(user) set({isAuthenticated: true, user: user as User})
            else set({isAuthenticated: false, user: null})
        } catch (e) {
            console.error(e)
            set({isAuthenticated: false})
        } finally {
            set({isLoading: false})
        }
    }
}))

export default useAuthStore;
