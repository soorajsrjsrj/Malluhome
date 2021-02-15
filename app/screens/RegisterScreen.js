import React from 'react';

import Screen from '../components/Screen';

import * as Yup from 'yup';
import {AppFormField,AppForm,SubmitButton} from '../components/forms'
import{StyleSheet} from 'react-native';


const validationSchema = Yup.object().shape({
    name : Yup.string().required().min(2).max(20).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
    return (
       <Screen style={styles.container}>
           <AppForm
           
             
           initialValues={{name :'',email:'',password:''}}
           onSubmit ={values => console.log(values)}
           validationSchema={validationSchema}>

               <AppFormField 
               autoCapitalize="none"
               autoCorrect={false}
               
               
               icon="account"
               keyboardType="default"
                name="name"
               textContentType="name"
               placeholder="Name"
               
               />

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
                   <SubmitButton title="Register" />
           </AppForm>
        

       </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10,
    }
})

export default RegisterScreen;