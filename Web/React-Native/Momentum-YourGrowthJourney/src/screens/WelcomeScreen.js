import { View, Text, StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { colors } from '../theme/colors';
import CustomButton from '../components/CustomButton';

export default function WelcomeScreen({ navigation }) {
  // Animazioni
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    // Animazione entrata
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        delay: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Logo e Titolo */}
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Text style={styles.logo}>📈</Text>
        <Text style={styles.title}>MOMENTUM</Text>
        <Text style={styles.subtitle}>Your Growth Journey</Text>
      </Animated.View>

      {/* Bottoni */}
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <CustomButton
          title="Accedi"
          variant="primary"
          onPress={() => navigation.navigate('Login')}
        />
        <CustomButton
          title="Registrati"
          variant="secondary"
          onPress={() => navigation.navigate('Register')}
        />
      </Animated.View>

      {/* Footer decorativo */}
      <Animated.Text style={[styles.footer, { opacity: fadeAnim }]}>
        Track your progress, one step at a time
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.background,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    color: colors.dark.text,
    fontSize: 42,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  subtitle: {
    color: colors.dark.textSecondary,
    fontSize: 16,
    marginTop: 8,
    letterSpacing: 1,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 12,
  },
  footer: {
    color: colors.dark.textSecondary,
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
