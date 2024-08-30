import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {SplashScreen} from '@/container/screens/splash/splash';
import {LoginScreen} from '@/container/screens/auth/login';
import {SignUp} from '@/container/screens/auth/signUp';
import {HomeScreen} from '@/container/screens/home/home';
import {ProfileScreen} from '@/container/screens/profile/profile';
import {EditProfileScreen} from '@/container/screens/editProfile/editProfile';
import {ContactScreen} from '@/container/screens/contact/contact';
import {PrivacyPolicyScreen} from '@/container/screens/privacyPolicy/privacyPolicy';
import {TermsConditionScreen} from '@/container/screens/termsCondition/termsCondition';
import {AddContentScreen} from '@/container/screens/addContent/AddContent';
import {UpdateContentScreen} from '@/container/screens/addContent/updateContent';
import BackUp from '@/container/screens/backUp/BackUp';

const Stack = createNativeStackNavigator();
function StackRoutes() {
  const token = useSelector((state: any) => state?.auth?.login?.token);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {token ? (
          <Stack.Screen name="home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen name="splash" component={SplashScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="signup" component={SignUp} />
          </>
        )}
        <Stack.Screen name="addContent" component={AddContentScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="editProfile" component={EditProfileScreen} />
        <Stack.Screen name="contact" component={ContactScreen} />
        <Stack.Screen name="privacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="termsCondition" component={TermsConditionScreen} />
        <Stack.Screen name="updateContent" component={UpdateContentScreen} />
        <Stack.Screen name="back-up" component={BackUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackRoutes;
