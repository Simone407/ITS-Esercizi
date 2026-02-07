import { View, Text, StyleSheet, TextInput } from 'react-native';
import { colors } from '../theme/colors';
import CustomButton from '../components/CustomButton';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crea il tuo account 🚀</Text>
      
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor={colors.dark.textSecondary}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.dark.textSecondary}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.dark.textSecondary}
          secureTextEntry
        />
      </View>

      <CustomButton
        title="Registrati"
        variant="primary"
        onPress={() => navigation.navigate('Home')}
      />

      <Text style={styles.link} onPress={() => navigation.goBack()}>
        ← Torna indietro
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.background,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.dark.text,
    marginBottom: 40,
    textAlign: 'center',
  },
  form: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: colors.dark.surface,
    color: colors.dark.text,
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  link: {
    color: colors.dark.primary,
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});
