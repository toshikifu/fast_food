import {Alert, Button, Text, View} from 'react-native'
import React, {useState} from 'react'
import {Link, router} from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [form, setForm] = useState({name:"", email: "", password: ""})

    const submit = async () => {
        if(!form.name || !form.email || !form.password) Alert.alert("Error", "Please enter a valid email");

        setIsSubmitting(true)
        try {
            // Call appwrite sign up function

            Alert.alert("Success", "User signup successfully!")
            router.replace("/")
        } catch (error: any) {
            Alert.alert("Error", error.message)
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <View className={"gap-10 bg-white rounded-lg p-5 mt-5"}>
            <CustomInput
                placeholder={"Enter your full name"}
                value={form.name}
                onChangeText={(text)=>{setForm((prev)=>({...prev, name: text }))}}
                label={"Email"}
                keyboardType={"default"}
            />
            <CustomInput
                placeholder={"Enter your email"}
                value={form.email}
                onChangeText={(text)=>{setForm((prev)=>({...prev, email: text }))}}
                label={"Email"}
                keyboardType={"default"}
            />
            <CustomInput
                placeholder={"Enter your password"}
                value={form.password}
                onChangeText={(text)=>{setForm((prev)=>({...prev, password: text }))}}
                label={"Password"}
                secureTextEntry={true}
            />
            <CustomButton
                title={"Sign up"}
                isLoading={isSubmitting}
                onPress={submit}
            />

            <View className={"flex justify-center mt-5 flex-row gap-2"}>
                <Text className={"base-regular text-gray-100"}>
                    Already have an account?
                </Text>
                <Link href={"/sign-in"} className={"base-bold text-primary"}>
                    Sign in
                </Link>
            </View>
        </View>
    )
}
export default SignUp
