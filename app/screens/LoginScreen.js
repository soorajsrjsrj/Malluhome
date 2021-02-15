import React from 'react';
import { Image, StyleSheet } from 'react-native';

import Screen from '../components/Screen';

import * as Yup from 'yup';
import {AppFormField,AppForm,SubmitButton} from '../components/forms'


const validationSchema = Yup.object().shape({
    email : Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {

    return (
       <Screen style={styles.container}>
           <Image
           style={styles.logo}
           source ={require("../assets/malluhome-logo.png")}/>
           <AppForm 
           
           initialValues={{email :'',password:''}}
           onSubmit ={values => console.log(values)}
           validationSchema={validationSchema}>

             
         <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
               name="email"
                textContentType="emailAddress"
                placeholder="Email"
            />
           
        
            <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
              name="password"
                secureTextEntry
                textContentType="password"
                />
                 
       <SubmitButton title="Login" />

              

           </AppForm>

        
       </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10

    },
    logo:{
        width:90,
        height:90,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20
    }
})

export default LoginScreen;