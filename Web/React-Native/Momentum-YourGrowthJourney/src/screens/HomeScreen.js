import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { colors } from '../theme/colors';
import CustomButton from '../components/CustomButton';


export default function HomeScreen({ navigation }) {

  const cards = [
    {
      id: 1,
      icon: '🎯',
      title: 'Obiettivi',
      subtitle: '3 attivi',
      screen: 'Goals',
    },
    {
      id: 2,
      icon: '📝',
      title: 'Diario',
      subtitle: 'Ultima nota: oggi',
      screen: 'Diary',
    },
    {
      id: 3,
      icon: '🔥',
      title: 'Abitudini',
      subtitle: 'Streak: 12 giorni',
      screen: 'Habits',
    },
    {
      id: 4,
      icon: '😊',
      title: 'Mood Tracker',
      subtitle: 'Come ti senti oggi?',
      screen: 'Mood',
    },
    {
      id: 5,
      icon: '📊',
      title: 'Statistiche',
      subtitle: 'Vedi i tuoi progressi',
      screen: 'Stats',
    },
    {
      id: 6,
      icon: '⚙️',
      title: 'Impostazioni',
      subtitle: 'Personalizza la tua app',
      screen: 'Settings',
    },
  ];

  const handleCardPress = (screen) => {
    // TODO: implementare navigazione
    console.log(`Navigating to ${screen}`);
    alert(`Funzionalità "${screen}" in arrivo! 🚀`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Momentum</Text>
        <TouchableOpacity>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profilo Utente */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
            <TouchableOpacity style={styles.editBadge}>
              <Text style={styles.editIcon}>✏️</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>Mario Rossi</Text>
          <Text style={styles.userHandle}>@momentum_user</Text>
        </View>

        {/* Cards Grid */}
        <View style={styles.cardsContainer}>
          {cards.map((card) => (
            <TouchableOpacity
              key={card.id}
              style={styles.card}
              onPress={() => handleCardPress(card.screen)}
              activeOpacity={0.7}
            >
              <View style={styles.cardContent}>
                <Text style={styles.cardIcon}>{card.icon}</Text>
                <View style={styles.cardTextContainer}>
                  <Text style={styles.cardTitle}>{card.title}</Text>
                  <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
                </View>
                <Text style={styles.cardArrow}>→</Text>
              </View>
              
            </TouchableOpacity>
            
          ))}
        </View>
        <CustomButton
          title="Logout"
          variant="primary"
          onPress={() => navigation.navigate('Welcome')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: colors.dark.surface,
  },
  menuIcon: {
    fontSize: 24,
    color: colors.dark.text,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark.text,
    letterSpacing: 1,
  },
  notificationIcon: {
    fontSize: 22,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.dark.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.dark.primary,
  },
  avatarText: {
    fontSize: 50,
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.dark.primary,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.dark.background,
  },
  editIcon: {
    fontSize: 14,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.dark.text,
    marginBottom: 4,
  },
  userHandle: {
    fontSize: 16,
    color: colors.dark.textSecondary,
  },
  cardsContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.dark.surface,
    borderRadius: 16,
    marginBottom: 16,
    padding: 20,
    shadowColor: colors.dark.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.dark.text,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: colors.dark.textSecondary,
  },
  cardArrow: {
    fontSize: 24,
    color: colors.dark.primary,
    fontWeight: 'bold',
  },
});
