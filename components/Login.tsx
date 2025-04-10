import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  Alert,
} from 'react-native';

// Lấy chiều cao và chiều rộng của màn hình
const { height, width } = Dimensions.get('window');

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    Alert.alert('Login', `Username: ${username}, Password: ${password}`);
  }

  return (
    // Sử dụng ImageBackground để đặt hình nền
    <ImageBackground
      source={require('../images/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Logo Pokémon GO */}
        <Image source={require('../images/pkm.jpg')} style={{ width: '100%', height: 200, borderRadius: 20, margin: 10 }} resizeMode="cover"/>

        {/* Form đăng nhập */}
        <View style={styles.formContainer}>
          {/* Nút Register */}
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>REGISTER</Text>
          </TouchableOpacity>

          {/* Trường nhập liệu Username */}
          <TextInput
            style={styles.input}
            placeholder="USERNAME"
            placeholderTextColor="#888"
            value={username}
            onChangeText={setUsername} // Cập nhật giá trị username khi người dùng nhập
          />

          {/* Trường nhập liệu Password */}
          <TextInput
            style={styles.input}
            placeholder="PASSWORD"
            placeholderTextColor="#888"
            secureTextEntry={true} // Ẩn mật khẩu
            value={password}
            onChangeText={setPassword} // Cập nhật giá trị password khi người dùng nhập
          />

          {/* Nút Login */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#FFC107', // Màu vàng nhạt
    padding: 20,
    borderRadius: 10,
    marginBottom: 50,
  },
  registerButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  registerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#D32F2F', // Màu đỏ
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;