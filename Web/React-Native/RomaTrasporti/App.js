import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, Text, View, ScrollView, FlatList,
  TouchableOpacity, TextInput, Switch, Modal,
  SafeAreaView, Linking, Alert, RefreshControl, ActivityIndicator
} from 'react-native';
import { useState, useEffect, useMemo, createContext, useContext } from 'react';

// ==================== CONFIGURATION ====================
const APP_VERSION = '2.0.0';
const APP_NAME = 'Roma Capitale';

// ==================== 🎨 THEME SYSTEM ====================
const THEMES = {
  light: {
    // Backgrounds
    background: '#F8F9FA',
    surface: '#FFFFFF',
    surfaceVariant: '#F3F4F6',
    
    // Text
    text: '#1A1A1A',
    textSecondary: '#6B7280',
    textTertiary: '#9CA3AF',
    
    // Brand
    primary: '#8B4513',
    primaryLight: '#A0522D',
    primaryDark: '#654321',
    
    // Accents
    metro: '#FF6B00',
    bus: '#E91E63',
    environment: '#4CAF50',
    airport: '#2196F3',
    emergency: '#F44336',
    tourism: '#FF9800',
    municipio: '#9C27B0',
    
    // Semantic
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    
    // Borders & Dividers
    border: '#E5E7EB',
    divider: '#F3F4F6',
    
    // Overlay
    overlay: 'rgba(0, 0, 0, 0.5)',
    overlayLight: 'rgba(0, 0, 0, 0.2)',
    
    // Special
    gold: '#FFD700',
  },
  
  dark: {
    // Backgrounds
    background: '#121212',
    surface: '#1E1E1E',
    surfaceVariant: '#2C2C2C',
    
    // Text
    text: '#E5E5E5',
    textSecondary: '#9CA3AF',
    textTertiary: '#6B7280',
    
    // Brand
    primary: '#FFB347',
    primaryLight: '#FFC870',
    primaryDark: '#E89F30',
    
    // Accents
    metro: '#FF8533',
    bus: '#FF4081',
    environment: '#66BB6A',
    airport: '#42A5F5',
    emergency: '#FF5252',
    tourism: '#FFB74D',
    municipio: '#BA68C8',
    
    // Semantic
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171',
    info: '#60A5FA',
    
    // Borders & Dividers
    border: '#374151',
    divider: '#2C2C2C',
    
    // Overlay
    overlay: 'rgba(0, 0, 0, 0.7)',
    overlayLight: 'rgba(0, 0, 0, 0.4)',
    
    // Special
    gold: '#FFD700',
  }
};

// ==================== 🗄️ DATI ====================

const fermateMetroA = ['Battistini', 'Cornelia', 'Baldo degli Ubaldi', 'Valle Aurelia', 'Cipro', 'Ottaviano', 'Lepanto', 'Flaminio', 'Spagna', 'Barberini', 'Repubblica', 'Termini', 'Vittorio Emanuele', 'Manzoni', 'San Giovanni', 'Re di Roma', 'Ponte Lungo', 'Furio Camillo', 'Colli Albani', 'Arco di Travertino', 'Porta Furba', 'Numidio Quadrato', 'Lucio Sestio', 'Giulio Agricola', 'Subaugusta', 'Cinecittà', 'Anagnina'];

const fermateMetroB = ['Laurentina', 'EUR Fermi', 'EUR Palasport', 'EUR Magliana', 'Marconi', 'Basilica S. Paolo', 'Garbatella', 'Piramide', 'Circo Massimo', 'Colosseo', 'Cavour', 'Termini', 'Castro Pretorio', 'Policlinico', 'Bologna', 'Tiburtina FS', 'Quintiliani', 'Monti Tiburtini', 'Pietralata', 'Santa Maria del Soccorso', 'Ponte Mammolo', 'Rebibbia'];

const fermateMetroC = ['Monte Compatri-Pantano', 'Graniti', 'Finocchio', 'Bolognetta', 'Borghesiana', 'Due Leoni-Fontana Candida', 'Grotte Celoni', 'Torre Gaia', 'Torre Angela', 'Torrenova', 'Giardinetti', 'Torre Maura', 'Torre Spaccata', 'Alessandrino', 'Parco di Centocelle', 'Mirti', 'Gardenie', 'Teano', 'Malatesta', 'Pigneto', 'Lodi', 'San Giovanni', 'Porta Metronia', 'Colosseo'];

const lineeMetro = [
  { key: 'A', nome: 'Metro A', colore: '#ff6600', fermate: fermateMetroA, capolinea1: 'Anagnina', capolinea2: 'Battistini' },
  { key: 'B', nome: 'Metro B', colore: '#0066cc', fermate: fermateMetroB, capolinea1: 'Rebibbia', capolinea2: 'Laurentina' },
  { key: 'C', nome: 'Metro C', colore: '#00cc00', fermate: fermateMetroC, capolinea1: 'Monte Compatri-Pantano', capolinea2: 'Colosseo' }
];

const lineeBusPrincipali = [
  { numero: '64', percorso: 'Termini - San Pietro', tipo: 'Urbano', frequenza: '5-8 min' },
  { numero: '40', percorso: 'Termini - Castel S. Angelo', tipo: 'Urbano', frequenza: '10-15 min' },
  { numero: '81', percorso: 'Colosseo - Vaticano', tipo: 'Urbano', frequenza: '7-12 min' },
  { numero: '83', percorso: 'Colosseo - Trastevere', tipo: 'Urbano', frequenza: '10-15 min' },
  { numero: '85', percorso: 'San Giovanni - Piazza Risorgimento', tipo: 'Urbano', frequenza: '8-12 min' },
  { numero: '590', percorso: 'Termini - Eur', tipo: 'Express', frequenza: '15-20 min' },
  { numero: 'H', percorso: 'Termini - Ospedale S. Spirito', tipo: 'Express', frequenza: '10 min' },
  { numero: 'N1', percorso: 'Termini - Tiburtina (Notturno)', tipo: 'Notturno', frequenza: '30 min' },
  { numero: 'N2', percorso: 'Piramide - Ostiense (Notturno)', tipo: 'Notturno', frequenza: '30 min' },
];

const centriAMA = [
  { nome: 'Centro Raccolta Portuense', indirizzo: 'Via della Magliana, 876', orario: 'Lun-Sab: 7:00-12:00' },
  { nome: 'Centro Raccolta Tiburtina', indirizzo: 'Via Tiburtina, 1070', orario: 'Lun-Sab: 7:00-12:00' },
  { nome: 'Centro Raccolta Ostia', indirizzo: 'Via delle Baleniere, 120', orario: 'Lun-Sab: 7:00-12:00' },
  { nome: 'Centro Raccolta Tor Cervara', indirizzo: 'Via di Tor Cervara, 301', orario: 'Lun-Sab: 7:00-12:00' },
  { nome: 'Centro Raccolta Salario', indirizzo: 'Via Monte Sant Angelo, 20', orario: 'Lun-Sab: 7:00-12:00' },
];

const aeroportiRoma = [
  { 
    nome: 'Fiumicino (Leonardo da Vinci)', 
    codice: 'FCO', 
    collegamenti: ['Leonardo Express (Termini) - 32 min - €14', 'FL1 Treno Regionale - 48 min - €8', 'Bus Terravision - 55 min - €6', 'Bus SIT - 50 min - €7'], 
    terminal: ['T1: Voli nazionali', 'T3: Voli internazionali', 'T5: Voli USA/Israele'],
    info: 'Principale aeroporto di Roma, 30 km dal centro'
  },
  { 
    nome: 'Ciampino (G.B. Pastine)', 
    codice: 'CIA', 
    collegamenti: ['Bus Terravision (Termini) - 40 min - €6', 'Bus SIT (Termini) - 45 min - €7', 'Atral Bus - 40 min - €5'], 
    terminal: ['Terminal unico'],
    info: 'Aeroporto low-cost, 15 km dal centro'
  },
];

const municipiRoma = [
  { num: 'I', nome: 'Centro', zone: ['Monti', 'Trevi', 'Colonna', 'Campo Marzio', 'Ponte', 'Parione', 'Regola', 'Sant\'Eustachio', 'Pigna', 'Campitelli', 'Sant\'Angelo', 'Ripa', 'Trastevere', 'Esquilino', 'Ludovisi', 'Sallustiano', 'Castro Pretorio', 'Celio', 'Testaccio', 'San Saba', 'Prati', 'Borgo'] },
  { num: 'II', nome: 'Parioli/Nomentano', zone: ['Flaminio', 'Parioli', 'Pinciano', 'Salario', 'Trieste', 'Villa Ada'] },
  { num: 'III', nome: 'Monte Sacro', zone: ['Val Melaina', 'Fidene', 'Serpentara', 'Casalboccone'] },
  { num: 'IV', nome: 'Tiburtina', zone: ['Nomentano', 'Tiburtino', 'Pietralata', 'Collatino'] },
  { num: 'V', nome: 'Prenestino/Centocelle', zone: ['Prenestino', 'Torpignattara', 'Casilino', 'Alessandrino', 'Centocelle'] },
  { num: 'VI', nome: 'Roma delle Torri', zone: ['Torre Spaccata', 'Torre Maura', 'Torre Angela', 'Borghesiana'] },
  { num: 'VII', nome: 'San Giovanni/Cinecittà', zone: ['Tuscolano', 'Appio Latino', 'Appio Pignatelli', 'Cinecittà'] },
  { num: 'VIII', nome: 'Appia Antica', zone: ['Appia Antica', 'Ardeatino', 'Tor Marancia'] },
  { num: 'IX', nome: 'EUR', zone: ['EUR', 'Laurentino', 'Torrino', 'Cecchignola'] },
  { num: 'X', nome: 'Ostia/Acilia', zone: ['Ostia', 'Acilia', 'Castel Fusano'] },
  { num: 'XI', nome: 'Arvalia/Portuense', zone: ['Portuense', 'Magliana', 'Corviale'] },
  { num: 'XII', nome: 'Monte Verde', zone: ['Monteverde', 'Gianicolense', 'Aurelio Sud'] },
  { num: 'XIII', nome: 'Aurelia', zone: ['Aurelio', 'Boccea', 'Valle Aurelia'] },
  { num: 'XIV', nome: 'Monte Mario', zone: ['Trionfale', 'Monte Mario', 'Primavalle'] },
  { num: 'XV', nome: 'Cassia/Flaminia', zone: ['Cassia', 'Flaminia', 'Tor di Quinto', 'Labaro'] },
];

const emergenze = [
  { nome: 'Polizia di Stato', numero: '113', tipo: 'Emergenza', icon: '👮' },
  { nome: 'Carabinieri', numero: '112', tipo: 'Emergenza', icon: '🚔' },
  { nome: 'Vigili del Fuoco', numero: '115', tipo: 'Emergenza', icon: '🚒' },
  { nome: 'Emergenza Sanitaria', numero: '118', tipo: 'Emergenza', icon: '🚑' },
  { nome: 'Polizia Locale Roma Capitale', numero: '060606', tipo: 'Servizio', icon: '👮‍♀️' },
  { nome: 'ATAC Informazioni', numero: '06 57003', tipo: 'Servizio', icon: '🚌' },
  { nome: 'AMA Ambiente', numero: '060606', tipo: 'Servizio', icon: '♻️' },
  { nome: 'ACEA Guasti Acqua', numero: '800 130 331', tipo: 'Servizio', icon: '💧' },
  { nome: 'ARETI Guasti Luce', numero: '800 130 336', tipo: 'Servizio', icon: '💡' },
  { nome: 'Italgas Emergenze Gas', numero: '800 900 999', tipo: 'Emergenza', icon: '🔥' },
];

// ==================== 🔧 CONTEXT & HOOKS ====================

const AppContext = createContext();

const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

// ==================== 🛠️ UTILITY FUNCTIONS ====================

/**
 * 🔍 Fuzzy search semplice senza librerie esterne
 */
const fuzzySearch = (query, text) => {
  if (!query || !text) return false;
  const searchLower = query.toLowerCase().trim();
  const textLower = text.toLowerCase();
  
  // Match esatto
  if (textLower.includes(searchLower)) return true;
  
  // Match parziale caratteri in ordine
  let searchIndex = 0;
  for (let i = 0; i < textLower.length && searchIndex < searchLower.length; i++) {
    if (textLower[i] === searchLower[searchIndex]) {
      searchIndex++;
    }
  }
  return searchIndex === searchLower.length;
};

/**
 * 🎨 Evidenzia testo che matcha la query
 */
const HighlightedText = ({ text, query, style, theme }) => {
  if (!query) return <Text style={style}>{text}</Text>;
  
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) return <Text style={style}>{text}</Text>;
  
  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);
  
  return (
    <Text style={style}>
      {before}
      <Text style={{ backgroundColor: theme.warning, color: theme.text, fontWeight: 'bold' }}>
        {match}
      </Text>
      {after}
    </Text>
  );
};

/**
 * 🎲 Genera status random per linee metro (simulazione)
 */
const getLineStatus = () => {
  const statuses = [
    { text: 'Regolare', color: '#10B981', icon: '✅' },
    { text: 'Ritardi', color: '#F59E0B', icon: '⚠️' },
    { text: 'Guasto', color: '#EF4444', icon: '❌' }
  ];
  const random = Math.floor(Math.random() * 10);
  // 70% regolare, 20% ritardi, 10% guasto
  if (random < 7) return statuses[0];
  if (random < 9) return statuses[1];
  return statuses[2];
};

// ==================== 🧩 COMPONENTI RIUSABILI ====================

/**
 * 📦 Card base riusabile
 */
const Card = ({ children, style, onPress, theme, accessible, accessibilityLabel, accessibilityHint }) => {
  const Component = onPress ? TouchableOpacity : View;
  return (
    <Component
      style={[
        styles.card,
        { 
          backgroundColor: theme.surface,
          borderColor: theme.border,
        },
        style
      ]}
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      accessible={accessible}
      accessibilityRole={onPress ? "button" : "none"}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
    >
      {children}
    </Component>
  );
};

/**
 * 🔍 Barra di ricerca
 */
const SearchBar = ({ value, onChangeText, placeholder, theme, style }) => (
  <View style={[styles.searchContainer, { backgroundColor: theme.surface, borderColor: theme.border }, style]}>
    <Text style={{ marginRight: 8, fontSize: 18 }}>🔍</Text>
    <TextInput
      style={[styles.searchInput, { color: theme.text }]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.textSecondary}
      accessible={true}
      accessibilityLabel="Campo di ricerca"
      accessibilityHint="Inserisci testo per cercare fermate, linee o servizi"
    />
    {value.length > 0 && (
      <TouchableOpacity onPress={() => onChangeText('')} style={{ padding: 5 }}>
        <Text style={{ fontSize: 18 }}>✖️</Text>
      </TouchableOpacity>
    )}
  </View>
);

/**
 * ⭐ Pulsante preferiti
 */
const FavoriteButton = ({ isFavorite, onPress, size = 24 }) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={styles.favoriteBtn}
    accessible={true}
    accessibilityRole="button"
    accessibilityLabel={isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
    accessibilityHint="Tocca per gestire i preferiti"
  >
    <Text style={{ fontSize: size }}>{isFavorite ? '⭐' : '☆'}</Text>
  </TouchableOpacity>
);

/**
 * 🔢 Badge con contatore
 */
const Badge = ({ count, theme, style }) => {
  if (!count || count === 0) return null;
  return (
    <View style={[styles.badge, { backgroundColor: theme.error }, style]}>
      <Text style={styles.badgeText}>{count > 99 ? '99+' : count}</Text>
    </View>
  );
};

/**
 * 🏷️ Chip selezionabile
 */
const Chip = ({ label, selected, onPress, theme }) => (
  <TouchableOpacity
    style={[
      styles.chip,
      { 
        backgroundColor: selected ? theme.primary : theme.surface,
        borderColor: theme.border,
        borderWidth: 1,
      }
    ]}
    onPress={onPress}
    accessible={true}
    accessibilityRole="button"
    accessibilityLabel={`Filtro ${label}`}
    accessibilityState={{ selected }}
  >
    <Text style={[styles.chipText, { color: selected ? '#FFF' : theme.text }]}>
      {label}
    </Text>
  </TouchableOpacity>
);

/**
 * 📭 Empty State
 */
const EmptyState = ({ icon, message, theme }) => (
  <View style={styles.emptyState}>
    <Text style={{ fontSize: 64, marginBottom: 16 }}>{icon}</Text>
    <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
      {message}
    </Text>
  </View>
);

/**
 * ⏳ Loading Skeleton
 */
const LoadingCard = ({ theme }) => (
  <View style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.border }]}>
    <View style={[styles.skeleton, { backgroundColor: theme.divider, height: 20, width: '60%', marginBottom: 8 }]} />
    <View style={[styles.skeleton, { backgroundColor: theme.divider, height: 16, width: '80%' }]} />
  </View>
);

/**
 * 🎯 Status Indicator
 */
const StatusIndicator = ({ status, theme }) => (
  <View style={styles.statusContainer}>
    <Text style={{ fontSize: 16, marginRight: 6 }}>{status.icon}</Text>
    <Text style={[styles.statusText, { color: status.color }]}>{status.text}</Text>
  </View>
);

// ==================== 📱 SCHERMATE ====================

/**
 * 🏠 HOME SCREEN
 */
function HomeScreen({ onNavigate }) {
  const { theme, isDarkMode, toggleTheme, favorites } = useApp();
  
  const totalFavorites = Object.values(favorites).reduce((sum, arr) => sum + arr.length, 0);
  
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <ScrollView style={styles.container}>
        {/* Hero Section */}
        <View style={[styles.heroSection, { backgroundColor: theme.primary }]}>
          <View style={styles.heroHeader}>
            <View>
              <Text style={[styles.heroTitle, { color: theme.gold }]}>🏛️ {APP_NAME}</Text>
              <Text style={[styles.heroSubtitle, { color: '#FFF' }]}>Servizi, Mobilità e Informazioni</Text>
              <Text style={[styles.heroDate, { color: theme.gold, opacity: 0.9 }]}>Aggiornato a Gennaio 2026</Text>
            </View>
            <View style={styles.heroActions}>
              <TouchableOpacity 
                style={styles.iconButton}
                onPress={toggleTheme}
                accessible={true}
                accessibilityRole="button"
                accessibilityLabel={isDarkMode ? "Attiva tema chiaro" : "Attiva tema scuro"}
              >
                <Text style={{ fontSize: 24 }}>{isDarkMode ? '☀️' : '🌙'}</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.iconButton}
                onPress={() => onNavigate('settings')}
                accessible={true}
                accessibilityRole="button"
                accessibilityLabel="Apri impostazioni"
              >
                <Text style={{ fontSize: 24 }}>⚙️</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Quick Access Favorites */}
        {totalFavorites > 0 && (
          <TouchableOpacity 
            style={[styles.favoritesQuickAccess, { backgroundColor: theme.surface, borderColor: theme.border }]}
            onPress={() => onNavigate('favorites')}
          >
            <Text style={{ fontSize: 24, marginRight: 12 }}>⭐</Text>
            <View style={{ flex: 1 }}>
              <Text style={[styles.quickAccessTitle, { color: theme.text }]}>I tuoi Preferiti</Text>
              <Text style={[styles.quickAccessSubtitle, { color: theme.textSecondary }]}>
                {totalFavorites} element{totalFavorites === 1 ? 'o' : 'i'} salvat{totalFavorites === 1 ? 'o' : 'i'}
              </Text>
            </View>
            <Text style={{ fontSize: 20, color: theme.textTertiary }}>›</Text>
          </TouchableOpacity>
        )}

        {/* Main Grid */}
        <View style={styles.mainGrid}>
          <Card 
            style={[styles.mainCard, { backgroundColor: theme.metro }]} 
            onPress={() => onNavigate('trasporti')}
            theme={theme}
            accessible={true}
            accessibilityLabel="Sezione Trasporti"
            accessibilityHint="Tocca per accedere a metro, bus e informazioni ATAC"
          >
            <Text style={styles.mainCardEmoji}>🚇</Text>
            <Text style={styles.mainCardTitle}>TRASPORTI</Text>
            <Text style={styles.mainCardSubtitle}>ATAC • Metro • Bus</Text>
          </Card>

          <Card 
            style={[styles.mainCard, { backgroundColor: theme.environment }]} 
            onPress={() => onNavigate('ambiente')}
            theme={theme}
            accessible={true}
            accessibilityLabel="Sezione Ambiente"
            accessibilityHint="Tocca per accedere ai servizi AMA e raccolta rifiuti"
          >
            <Text style={styles.mainCardEmoji}>♻️</Text>
            <Text style={styles.mainCardTitle}>AMBIENTE</Text>
            <Text style={styles.mainCardSubtitle}>AMA • Rifiuti • Pulizia</Text>
          </Card>

          <Card 
            style={[styles.mainCard, { backgroundColor: theme.airport }]} 
            onPress={() => onNavigate('aeroporti')}
            theme={theme}
            accessible={true}
            accessibilityLabel="Sezione Aeroporti"
            accessibilityHint="Tocca per informazioni su Fiumicino e Ciampino"
          >
            <Text style={styles.mainCardEmoji}>✈️</Text>
            <Text style={styles.mainCardTitle}>AEROPORTI</Text>
            <Text style={styles.mainCardSubtitle}>FCO • CIA</Text>
          </Card>

          <Card 
            style={[styles.mainCard, { backgroundColor: theme.municipio }]} 
            onPress={() => onNavigate('municipi')}
            theme={theme}
            accessible={true}
            accessibilityLabel="Sezione Municipi"
            accessibilityHint="Tocca per esplorare i 15 municipi di Roma"
          >
            <Text style={styles.mainCardEmoji}>🏘️</Text>
            <Text style={styles.mainCardTitle}>MUNICIPI</Text>
            <Text style={styles.mainCardSubtitle}>15 Zone di Roma</Text>
          </Card>

          <Card 
            style={[styles.mainCard, { backgroundColor: theme.emergency }]} 
            onPress={() => onNavigate('emergenze')}
            theme={theme}
            accessible={true}
            accessibilityLabel="Sezione Emergenze"
            accessibilityHint="Tocca per numeri utili e servizi di emergenza"
          >
            <Text style={styles.mainCardEmoji}>🚨</Text>
            <Text style={styles.mainCardTitle}>EMERGENZE</Text>
            <Text style={styles.mainCardSubtitle}>Numeri Utili</Text>
          </Card>

          <Card 
            style={[styles.mainCard, { backgroundColor: theme.tourism }]} 
            onPress={() => onNavigate('turismo')}
            theme={theme}
            accessible={true}
            accessibilityLabel="Sezione Turismo"
            accessibilityHint="Tocca per informazioni turistiche e monumenti"
          >
            <Text style={styles.mainCardEmoji}>🎭</Text>
            <Text style={styles.mainCardTitle}>TURISMO</Text>
            <Text style={styles.mainCardSubtitle}>Info • Eventi</Text>
          </Card>
        </View>

        {/* Quick Links */}
        <View style={styles.quickLinks}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Link Rapidi</Text>
          <TouchableOpacity 
            style={[styles.linkButton, { backgroundColor: theme.surface, borderColor: theme.border }]} 
            onPress={() => Linking.openURL('https://www.comune.roma.it')}
            accessible={true}
            accessibilityRole="link"
            accessibilityLabel="Apri sito Comune di Roma"
          >
            <Text style={[styles.linkText, { color: theme.info }]}>🌐 Sito Comune di Roma</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.linkButton, { backgroundColor: theme.surface, borderColor: theme.border }]} 
            onPress={() => Linking.openURL('https://www.atac.roma.it')}
            accessible={true}
            accessibilityRole="link"
            accessibilityLabel="Apri portale ATAC"
          >
            <Text style={[styles.linkText, { color: theme.info }]}>🚌 Portale ATAC</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.linkButton, { backgroundColor: theme.surface, borderColor: theme.border }]} 
            onPress={() => Linking.openURL('https://www.amaroma.it')}
            accessible={true}
            accessibilityRole="link"
            accessibilityLabel="Apri portale AMA"
          >
            <Text style={[styles.linkText, { color: theme.info }]}>🗑️ Portale AMA</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
      <StatusBar style={isDarkMode ? "light" : "dark"} />
    </SafeAreaView>
  );
}

/**
 * 🚇 TRASPORTI SCREEN
 */
function TrasportiScreen({ onBack, onNavigate }) {
  const { theme, searchQuery, setSearchQuery } = useApp();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={[styles.backText, { color: theme.info }]}>← Home</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Trasporti ATAC</Text>
          <View style={{ width: 60 }} />
        </View>

        {/* Search Bar */}
        <SearchBar 
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Cerca linee, fermate..."
          theme={theme}
          style={{ margin: 15 }}
        />

        <ScrollView 
          contentContainerStyle={styles.sectionContent}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {/* Metro Card */}
          <Card
            style={[styles.transportCard, { backgroundColor: theme.metro }]}
            onPress={() => onNavigate('metro')}
            theme={theme}
            accessible={true}
            accessibilityLabel="Metropolitana"
            accessibilityHint="Apri sezione Metro con linee A, B e C"
          >
            <View style={styles.transportContent}>
              <Text style={styles.transportTitle}>🚇 METROPOLITANA</Text>
              <Text style={styles.transportSubtitle}>3 Linee • 73 Stazioni</Text>
              <Text style={styles.transportInfo}>Linee A, B, C operative</Text>
            </View>
          </Card>

          {/* Bus Card */}
          <Card
            style={[styles.transportCard, { backgroundColor: theme.bus }]}
            onPress={() => onNavigate('bus')}
            theme={theme}
            accessible={true}
            accessibilityLabel="Autobus"
            accessibilityHint="Apri sezione Bus con linee urbane e notturne"
          >
            <View style={styles.transportContent}>
              <Text style={styles.transportTitle}>🚌 AUTOBUS</Text>
              <Text style={styles.transportSubtitle}>350+ Linee Urbane</Text>
              <Text style={styles.transportInfo}>Bus diurni e notturni</Text>
            </View>
          </Card>

          {/* Prezzi */}
          <Card theme={theme} style={{ marginBottom: 15 }}>
            <Text style={[styles.infoTitle, { color: theme.text }]}>🎫 Biglietti e Prezzi 2026</Text>
            <View style={[styles.priceRow, { borderBottomColor: theme.divider }]}>
              <Text style={[styles.priceLabel, { color: theme.textSecondary }]}>BIT (100 min)</Text>
              <Text style={[styles.priceValue, { color: theme.text }]}>€ 1,50</Text>
            </View>
            <View style={[styles.priceRow, { borderBottomColor: theme.divider }]}>
              <Text style={[styles.priceLabel, { color: theme.textSecondary }]}>Roma 24h</Text>
              <Text style={[styles.priceValue, { color: theme.text }]}>€ 8,50</Text>
            </View>
            <View style={[styles.priceRow, { borderBottomColor: theme.divider }]}>
              <Text style={[styles.priceLabel, { color: theme.textSecondary }]}>Roma 72h</Text>
              <Text style={[styles.priceValue, { color: theme.text }]}>€ 22,00</Text>
            </View>
            <View style={[styles.priceRow, { borderBottomColor: theme.divider }]}>
              <Text style={[styles.priceLabel, { color: theme.textSecondary }]}>Mensile</Text>
              <Text style={[styles.priceValue, { color: theme.text }]}>€ 35,00</Text>
            </View>
            <View style={[styles.priceRow, { borderBottomWidth: 0 }]}>
              <Text style={[styles.priceLabel, { color: theme.textSecondary }]}>Under 19 Annuale</Text>
              <Text style={[styles.priceValue, { color: theme.success }]}>€ 50,00</Text>
            </View>
          </Card>

          {/* Orari */}
          <Card theme={theme}>
            <Text style={[styles.infoTitle, { color: theme.text }]}>🕐 Orari Metro</Text>
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>Lun-Gio: 5:30 - 23:30</Text>
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>Ven-Sab: 5:30 - 1:30</Text>
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>Domenica: 5:30 - 23:30</Text>
          </Card>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/**
 * 🚇 METRO SCREEN (Lista Linee)
 */
function MetroScreen({ onBack, onSelectLine }) {
  const { theme, searchQuery, setSearchQuery } = useApp();

  const filteredLines = useMemo(() => {
    if (!searchQuery) return lineeMetro;
    return lineeMetro.filter(linea => 
      fuzzySearch(searchQuery, linea.nome) ||
      fuzzySearch(searchQuery, linea.capolinea1) ||
      fuzzySearch(searchQuery, linea.capolinea2) ||
      linea.fermate.some(f => fuzzySearch(searchQuery, f))
    );
  }, [searchQuery]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={[styles.backText, { color: theme.info }]}>← Trasporti</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Linee Metro</Text>
          <View style={{ width: 60 }} />
        </View>

        {/* Search Bar */}
        <SearchBar 
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Cerca linee o fermate..."
          theme={theme}
          style={{ margin: 15 }}
        />

        <ScrollView contentContainerStyle={styles.sectionContent}>
          {filteredLines.length === 0 ? (
            <EmptyState 
              icon="🔍" 
              message={`Nessuna linea trovata per "${searchQuery}"`}
              theme={theme}
            />
          ) : (
            filteredLines.map((linea) => {
              const status = getLineStatus();
              return (
                <Card 
                  key={linea.key}
                  style={[styles.lineCard, { borderLeftColor: linea.colore, borderLeftWidth: 8 }]} 
                  onPress={() => onSelectLine(linea)}
                  theme={theme}
                  accessible={true}
                  accessibilityLabel={`${linea.nome}, da ${linea.capolinea1} a ${linea.capolinea2}, ${linea.fermate.length} fermate`}
                  accessibilityHint="Tocca per vedere tutte le fermate"
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <View style={{ flex: 1 }}>
                      <HighlightedText 
                        text={linea.nome}
                        query={searchQuery}
                        style={[styles.lineName, { color: linea.colore }]}
                        theme={theme}
                      />
                      <Text style={[styles.lineRoute, { color: theme.textSecondary }]}>
                        {linea.capolinea1} ↔ {linea.capolinea2}
                      </Text>
                      <Text style={[styles.lineStops, { color: theme.textTertiary }]}>
                        {linea.fermate.length} fermate
                      </Text>
                    </View>
                    <StatusIndicator status={status} theme={theme} />
                  </View>
                </Card>
              );
            })
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/**
 * 🚉 LINE DETAIL SCREEN (Fermate singola linea)
 */
function LineDetailScreen({ linea, onBack }) {
  const { theme, favorites, toggleFavorite, searchQuery, setSearchQuery } = useApp();
  const [direzione, setDirezione] = useState(1);

  const fermateOrdinate = direzione === 1 ? [...linea.fermate].reverse() : linea.fermate;
  const direzioneAttuale = direzione === 1 ? `${linea.capolinea1} → ${linea.capolinea2}` : `${linea.capolinea2} → ${linea.capolinea1}`;

  const filteredFermate = useMemo(() => {
    if (!searchQuery) return fermateOrdinate;
    return fermateOrdinate.filter(f => fuzzySearch(searchQuery, f));
  }, [searchQuery, fermateOrdinate]);

  const isLineFavorite = favorites.linee.includes(linea.nome);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={[styles.backText, { color: theme.info }]}>← Metro</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: linea.colore }]}>{linea.nome}</Text>
          <FavoriteButton 
            isFavorite={isLineFavorite}
            onPress={() => toggleFavorite('linee', linea.nome)}
            size={28}
          />
        </View>

        {/* Search Bar */}
        <SearchBar 
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Cerca fermata..."
          theme={theme}
          style={{ margin: 15 }}
        />

        {/* Direction Button */}
        <TouchableOpacity 
          style={[styles.directionButton, { backgroundColor: linea.colore, marginHorizontal: 15, marginBottom: 15 }]} 
          onPress={() => setDirezione(1 - direzione)}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel={`Direzione corrente: ${direzioneAttuale}`}
          accessibilityHint="Tocca per invertire la direzione"
        >
          <Text style={styles.directionText}>↕️ {direzioneAttuale}</Text>
        </TouchableOpacity>

        {/* Fermate List */}
        <FlatList
          data={filteredFermate}
          keyExtractor={(item, index) => `${item}-${index}`}
          contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 20 }}
          ListEmptyComponent={
            <EmptyState 
              icon="🔍" 
              message={`Nessuna fermata trovata per "${searchQuery}"`}
              theme={theme}
            />
          }
          renderItem={({ item, index }) => {
            const isFavorite = favorites.fermate.includes(item);
            return (
              <Card 
                style={styles.stopCard}
                theme={theme}
                accessible={true}
                accessibilityLabel={`Fermata ${index + 1}, ${item}`}
              >
                <Text style={[styles.stopNumber, { color: linea.colore }]}>
                  {String(index + 1).padStart(2, '0')}
                </Text>
                <HighlightedText 
                  text={item}
                  query={searchQuery}
                  style={[styles.stopName, { color: theme.text, flex: 1 }]}
                  theme={theme}
                />
                <FavoriteButton 
                  isFavorite={isFavorite}
                  onPress={() => toggleFavorite('fermate', item)}
                />
              </Card>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

/**
 * 🚌 BUS SCREEN
 */
function BusScreen({ onBack }) {
  const { theme, searchQuery, setSearchQuery } = useApp();
  const [selectedFilter, setSelectedFilter] = useState('Tutti');

  const filters = ['Tutti', 'Urbano', 'Express', 'Notturno'];

  const filteredBus = useMemo(() => {
    let buses = lineeBusPrincipali;
    
    // Filtro per tipo
    if (selectedFilter !== 'Tutti') {
      buses = buses.filter(bus => bus.tipo === selectedFilter);
    }
    
    // Filtro per ricerca
    if (searchQuery) {
      buses = buses.filter(bus => 
        fuzzySearch(searchQuery, bus.numero) ||
        fuzzySearch(searchQuery, bus.percorso)
      );
    }
    
    return buses;
  }, [selectedFilter, searchQuery]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={[styles.backText, { color: theme.info }]}>← Trasporti</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Linee Bus</Text>
          <View style={{ width: 60 }} />
        </View>

        {/* Search Bar */}
        <SearchBar 
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Cerca linea bus..."
          theme={theme}
          style={{ margin: 15 }}
        />

        {/* Filter Chips */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipContainer}
        >
          {filters.map(filter => (
            <Chip 
              key={filter}
              label={filter}
              selected={selectedFilter === filter}
              onPress={() => setSelectedFilter(filter)}
              theme={theme}
            />
          ))}
        </ScrollView>

        {/* Bus List */}
        <ScrollView contentContainerStyle={styles.sectionContent}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            {selectedFilter === 'Tutti' ? 'Linee Principali' : `Linee ${selectedFilter}`}
          </Text>
          {filteredBus.length === 0 ? (
            <EmptyState 
              icon="🔍" 
              message={searchQuery ? `Nessun bus trovato per "${searchQuery}"` : 'Nessun bus in questa categoria'}
              theme={theme}
            />
          ) : (
            filteredBus.map((bus, index) => (
              <Card key={index} style={styles.busCard} theme={theme}>
                <View style={[styles.busNumber, { backgroundColor: theme.bus }]}>
                  <Text style={styles.busNumberText}>{bus.numero}</Text>
                </View>
                <View style={styles.busInfo}>
                  <HighlightedText 
                    text={bus.percorso}
                    query={searchQuery}
                    style={[styles.busRoute, { color: theme.text }]}
                    theme={theme}
                  />
                  <Text style={[styles.busMeta, { color: theme.textSecondary }]}>
                    {bus.tipo} • Ogni {bus.frequenza}
                  </Text>
                </View>
              </Card>
            ))
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/**
 * ♻️ AMBIENTE SCREEN (AMA)
 */
function AmbienteScreen({ onBack }) {
  const { theme, favorites, toggleFavorite } = useApp();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const amaService = 'AMA 060606';
  const isFavorite = favorites.servizi.includes(amaService);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={[styles.backText, { color: theme.info }]}>← Home</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>AMA Ambiente</Text>
          <FavoriteButton 
            isFavorite={isFavorite}
            onPress={() => toggleFavorite('servizi', amaService)}
            size={28}
          />
        </View>

        <ScrollView 
          contentContainerStyle={styles.sectionContent}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {/* Raccolta Differenziata */}
          <Card theme={theme}>
            <Text style={[styles.infoTitle, { color: theme.text }]}>♻️ Raccolta Differenziata</Text>
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>🟦 Carta: Lun, Mer, Ven</Text>
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>🟨 Plastica/Lattine: Mar, Gio, Sab</Text>
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>🟫 Organico: Lun, Mer, Ven, Dom</Text>
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>⚫ Indifferenziato: Mar, Gio, Sab</Text>
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>🟩 Vetro: 1° e 3° mercoledì del mese</Text>
          </Card>

          {/* Centri di Raccolta */}
          <Card theme={theme}>
            <Text style={[styles.infoTitle, { color: theme.text }]}>📍 Centri di Raccolta</Text>
            {centriAMA.map((centro, index) => (
              <View key={index} style={[styles.centroCard, { borderBottomColor: theme.divider }]}>
                <Text style={[styles.centroNome, { color: theme.text }]}>{centro.nome}</Text>
                <Text style={[styles.centroIndirizzo, { color: theme.textSecondary }]}>{centro.indirizzo}</Text>
                <Text style={[styles.centroOrario, { color: theme.success }]}>{centro.orario}</Text>
              </View>
            ))}
          </Card>

          {/* Ritiro Ingombranti */}
          <Card theme={theme}>
            <Text style={[styles.infoTitle, { color: theme.text }]}>🗑️ Ritiro Ingombranti</Text>
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>• Fino a 12 ritiri gratuiti all'anno</Text>
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>• Max 2 al mese per utenza</Text>
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>• Prenotazione: 060606</Text>
            <Text style={[styles.infoText, { color: theme.textSecondary }]}>• Online: amaroma.it</Text>
          </Card>

          {/* Call to Action */}
          <TouchableOpacity 
            style={[styles.actionButton, { backgroundColor: theme.environment }]} 
            onPress={() => Linking.openURL('tel:060606')}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Chiama AMA al numero 060606"
          >
            <Text style={styles.actionButtonText}>📞 Chiama AMA 060606</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.actionButton, { backgroundColor: theme.info, marginTop: 10 }]} 
            onPress={() => Linking.openURL('https://www.amaroma.it')}
            accessible={true}
            accessibilityRole="link"
            accessibilityLabel="Apri sito web AMA"
          >
            <Text style={styles.actionButtonText}>🌐 Visita sito AMA</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/**
 * ✈️ AEROPORTI SCREEN
 */
function AeroportiScreen({ onBack }) {
  const { theme } = useApp();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={[styles.backText, { color: theme.info }]}>← Home</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Aeroporti Roma</Text>
          <View style={{ width: 60 }} />
        </View>

        <ScrollView contentContainerStyle={styles.sectionContent}>
          {aeroportiRoma.map((aeroporto, index) => (
            <Card key={index} style={styles.airportCard} theme={theme}>
              <Text style={[styles.airportName, { color: theme.airport }]}>{aeroporto.nome}</Text>
              <Text style={[styles.airportCode, { color: theme.textSecondary }]}>Codice IATA: {aeroporto.codice}</Text>
              <Text style={[styles.airportInfo, { color: theme.textTertiary }]}>{aeroporto.info}</Text>
              
              <Text style={[styles.airportSectionTitle, { color: theme.text }]}>🚄 Collegamenti</Text>
              {aeroporto.collegamenti.map((coll, idx) => (
                <Text key={idx} style={[styles.collegamentoText, { color: theme.textSecondary }]}>• {coll}</Text>
              ))}
              
              <Text style={[styles.airportSectionTitle, { color: theme.text }]}>🏢 Terminal</Text>
              {aeroporto.terminal.map((term, idx) => (
                <Text key={idx} style={[styles.terminalText, { color: theme.textSecondary }]}>• {term}</Text>
              ))}
            </Card>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/**
 * 🏘️ MUNICIPI SCREEN
 */
function MunicipiScreen({ onBack }) {
  const { theme, searchQuery, setSearchQuery } = useApp();

  const filteredMunicipi = useMemo(() => {
    if (!searchQuery) return municipiRoma;
    return municipiRoma.filter(mun => 
      fuzzySearch(searchQuery, mun.nome) ||
      fuzzySearch(searchQuery, `Municipio ${mun.num}`) ||
      mun.zone.some(z => fuzzySearch(searchQuery, z))
    );
  }, [searchQuery]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={[styles.backText, { color: theme.info }]}>← Home</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>15 Municipi</Text>
          <View style={{ width: 60 }} />
        </View>

        {/* Search Bar */}
        <SearchBar 
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Cerca municipio o zona..."
          theme={theme}
          style={{ margin: 15 }}
        />

        <ScrollView contentContainerStyle={styles.sectionContent}>
          {filteredMunicipi.length === 0 ? (
            <EmptyState 
              icon="🔍" 
              message={`Nessun municipio trovato per "${searchQuery}"`}
              theme={theme}
            />
          ) : (
            filteredMunicipi.map((mun, index) => (
              <Card key={index} style={styles.municipioCard} theme={theme}>
                <Text style={[styles.municipioNum, { color: theme.municipio }]}>Municipio {mun.num}</Text>
                <HighlightedText 
                  text={mun.nome}
                  query={searchQuery}
                  style={[styles.municipioNome, { color: theme.text }]}
                  theme={theme}
                />
                <Text style={[styles.municipioZone, { color: theme.textSecondary }]}>
                  {mun.zone.join(' • ')}
                </Text>
              </Card>
            ))
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/**
 * 🚨 EMERGENZE SCREEN
 */
function EmergenzeScreen({ onBack }) {
  const { theme, favorites, toggleFavorite } = useApp();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={[styles.backText, { color: theme.info }]}>← Home</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Emergenze</Text>
          <View style={{ width: 60 }} />
        </View>

        <ScrollView contentContainerStyle={styles.sectionContent}>
          <View style={[styles.emergenzaWarning, { backgroundColor: theme.error + '20', borderColor: theme.error }]}>
            <Text style={[styles.emergenzaWarningText, { color: theme.error }]}>
              ⚠️ In caso di emergenza chiama subito!
            </Text>
          </View>
          
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Emergenze</Text>
          {emergenze.filter(e => e.tipo === 'Emergenza').map((em, index) => {
            const isFavorite = favorites.servizi.includes(em.nome);
            return (
              <Card
                key={index}
                style={[styles.emergenzaCard, { backgroundColor: theme.emergency }]}
                onPress={() => Linking.openURL(`tel:${em.numero}`)}
                theme={theme}
                accessible={true}
                accessibilityRole="button"
                accessibilityLabel={`Chiama ${em.nome} al ${em.numero}`}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                      <Text style={{ fontSize: 24, marginRight: 8 }}>{em.icon}</Text>
                      <Text style={[styles.emergenzaNome, { color: '#FFF' }]}>{em.nome}</Text>
                    </View>
                    <Text style={[styles.emergenzaNumero, { color: '#FFF' }]}>📞 {em.numero}</Text>
                  </View>
                  <FavoriteButton 
                    isFavorite={isFavorite}
                    onPress={(e) => {
                      e.stopPropagation();
                      toggleFavorite('servizi', em.nome);
                    }}
                    size={28}
                  />
                </View>
              </Card>
            );
          })}

          <Text style={[styles.sectionTitle, { color: theme.text, marginTop: 20 }]}>Servizi Pubblici</Text>
          {emergenze.filter(e => e.tipo === 'Servizio').map((em, index) => {
            const isFavorite = favorites.servizi.includes(em.nome);
            return (
              <Card
                key={index}
                style={[styles.servizioCard, { borderLeftColor: theme.info }]}
                onPress={() => Linking.openURL(`tel:${em.numero.replace(/\s/g, '')}`)}
                theme={theme}
                accessible={true}
                accessibilityRole="button"
                accessibilityLabel={`Chiama ${em.nome} al ${em.numero}`}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                      <Text style={{ fontSize: 20, marginRight: 8 }}>{em.icon}</Text>
                      <Text style={[styles.servizioNome, { color: theme.text }]}>{em.nome}</Text>
                    </View>
                    <Text style={[styles.servizioNumero, { color: theme.info }]}>📞 {em.numero}</Text>
                  </View>
                  <FavoriteButton 
                    isFavorite={isFavorite}
                    onPress={(e) => {
                      e.stopPropagation();
                      toggleFavorite('servizi', em.nome);
                    }}
                  />
                </View>
              </Card>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/**
 * 🎭 TURISMO SCREEN
 */
function TurismoScreen({ onBack }) {
  const { theme } = useApp();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={[styles.backText, { color: theme.info }]}>← Home</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Turismo Roma</Text>
          <View style={{ width: 60 }} />
        </View>

        <ScrollView contentContainerStyle={styles.sectionContent}>
          <Card theme={theme}>
            <Text style={[styles.infoTitle, { color: theme.text }]}>🏛️ Monumenti Principali</Text>
            <Text style={[styles.turistaText, { color: theme.textSecondary }]}>• Colosseo - Piazza del Colosseo</Text>
            <Text style={[styles.turistaText, { color: theme.textSecondary }]}>• Fontana di Trevi - Piazza di Trevi</Text>
            <Text style={[styles.turistaText, { color: theme.textSecondary }]}>• Vaticano - Piazza San Pietro</Text>
            <Text style={[styles.turistaText, { color: theme.textSecondary }]}>• Pantheon - Piazza della Rotonda</Text>
            <Text style={[styles.turistaText, { color: theme.textSecondary }]}>• Fori Imperiali - Via dei Fori Imperiali</Text>
            <Text style={[styles.turistaText, { color: theme.textSecondary }]}>• Piazza Navona - Centro Storico</Text>
          </Card>

          <Card theme={theme}>
            <Text style={[styles.infoTitle, { color: theme.text }]}>🎫 Roma Pass 2026</Text>
            <Text style={[styles.turistaText, { color: theme.textSecondary }]}>• 72h: €52 (2 attrazioni + trasporti)</Text>
            <Text style={[styles.turistaText, { color: theme.textSecondary }]}>• 48h: €32 (1 attrazione + trasporti)</Text>
            <Text style={[styles.turistaText, { color: theme.textSecondary }]}>• Sconti in musei e siti archeologici</Text>
          </Card>

          <Card theme={theme}>
            <Text style={[styles.infoTitle, { color: theme.text }]}>ℹ️ Info Turistiche</Text>
            <Text style={[styles.turistaText, { color: theme.textSecondary }]}>📍 PIT Termini - Stazione Termini</Text>
            <Text style={[styles.turistaText, { color: theme.textSecondary }]}>📍 PIT Fiumicino - Terminal 3</Text>
            <Text style={[styles.turistaText, { color: theme.textSecondary }]}>📞 Turismo: 060608</Text>
            <Text style={[styles.turistaText, { color: theme.textSecondary }]}>🌐 turismoroma.it</Text>
          </Card>

          <TouchableOpacity 
            style={[styles.actionButton, { backgroundColor: theme.tourism }]} 
            onPress={() => Linking.openURL('tel:060608')}
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Chiama servizio turistico 060608"
          >
            <Text style={styles.actionButtonText}>📞 Chiama 060608</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/**
 * ⚙️ SETTINGS SCREEN
 */
function SettingsScreen({ onBack }) {
  const { theme, isDarkMode, toggleTheme, favorites, setFavorites } = useApp();

  const clearFavorites = () => {
    Alert.alert(
      'Cancella Preferiti',
      'Sei sicuro di voler cancellare tutti i preferiti?',
      [
        { text: 'Annulla', style: 'cancel' },
        { 
          text: 'Cancella', 
          style: 'destructive',
          onPress: () => {
            setFavorites({ fermate: [], linee: [], servizi: [] });
            Alert.alert('✅', 'Preferiti cancellati con successo');
          }
        }
      ]
    );
  };

  const totalFavorites = Object.values(favorites).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={[styles.backText, { color: theme.info }]}>← Home</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Impostazioni</Text>
          <View style={{ width: 60 }} />
        </View>

        <ScrollView contentContainerStyle={styles.sectionContent}>
          {/* Aspetto */}
          <Card theme={theme} style={{ marginBottom: 20 }}>
            <Text style={[styles.settingTitle, { color: theme.text }]}>🎨 Aspetto</Text>
            <View style={styles.settingRow}>
              <View>
                <Text style={[styles.settingLabel, { color: theme.text }]}>Tema scuro</Text>
                <Text style={[styles.settingDescription, { color: theme.textSecondary }]}>
                  Usa colori scuri per risparmiare batteria
                </Text>
              </View>
              <Switch 
                value={isDarkMode} 
                onValueChange={toggleTheme}
                trackColor={{ false: theme.border, true: theme.primary }}
                thumbColor={isDarkMode ? theme.primaryLight : '#f4f3f4'}
              />
            </View>
          </Card>

          {/* Preferiti */}
          <Card theme={theme} style={{ marginBottom: 20 }}>
            <Text style={[styles.settingTitle, { color: theme.text }]}>⭐ Preferiti</Text>
            <View style={[styles.settingRow, { marginBottom: 15 }]}>
              <View>
                <Text style={[styles.settingLabel, { color: theme.text }]}>Totale salvati</Text>
                <Text style={[styles.settingDescription, { color: theme.textSecondary }]}>
                  {totalFavorites} element{totalFavorites === 1 ? 'o' : 'i'}
                </Text>
              </View>
              <Badge count={totalFavorites} theme={theme} />
            </View>
            <TouchableOpacity 
              style={[styles.dangerButton, { backgroundColor: theme.error }]}
              onPress={clearFavorites}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Cancella tutti i preferiti"
            >
              <Text style={styles.dangerButtonText}>🗑️ Cancella tutti i preferiti</Text>
            </TouchableOpacity>
          </Card>

          {/* Informazioni */}
          <Card theme={theme}>
            <Text style={[styles.settingTitle, { color: theme.text }]}>ℹ️ Informazioni</Text>
            <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
              <Text style={[styles.settingLabel, { color: theme.textSecondary }]}>Versione</Text>
              <Text style={[styles.settingValue, { color: theme.text }]}>{APP_VERSION}</Text>
            </View>
            <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
              <Text style={[styles.settingLabel, { color: theme.textSecondary }]}>Sviluppatore</Text>
              <Text style={[styles.settingValue, { color: theme.text }]}>Roma Capitale</Text>
            </View>
            <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
              <Text style={[styles.settingLabel, { color: theme.textSecondary }]}>Copyright</Text>
              <Text style={[styles.settingValue, { color: theme.text }]}>© 2026</Text>
            </View>
          </Card>

          <TouchableOpacity 
            style={[styles.actionButton, { backgroundColor: theme.info, marginTop: 20 }]}
            onPress={() => Linking.openURL('https://www.comune.roma.it')}
            accessible={true}
            accessibilityRole="link"
            accessibilityLabel="Apri sito Roma Capitale"
          >
            <Text style={styles.actionButtonText}>🌐 Sito Roma Capitale</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

/**
 * ⭐ FAVORITES SCREEN
 */
function FavoritesScreen({ onBack, onNavigate }) {
  const { theme, favorites, toggleFavorite } = useApp();

  const totalFavorites = Object.values(favorites).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <Text style={[styles.backText, { color: theme.info }]}>← Home</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.text }]}>Preferiti</Text>
          <Badge count={totalFavorites} theme={theme} style={{ marginRight: 15 }} />
        </View>

        <ScrollView contentContainerStyle={styles.sectionContent}>
          {totalFavorites === 0 ? (
            <EmptyState 
              icon="⭐" 
              message="Nessun preferito salvato. Aggiungi fermate, linee o servizi toccando la stella!"
              theme={theme}
            />
          ) : (
            <>
              {/* Fermate */}
              {favorites.fermate.length > 0 && (
                <>
                  <Text style={[styles.sectionTitle, { color: theme.text }]}>🚉 Fermate ({favorites.fermate.length})</Text>
                  {favorites.fermate.map((fermata, index) => (
                    <Card key={index} style={styles.favoriteItem} theme={theme}>
                      <Text style={[styles.favoriteItemText, { color: theme.text, flex: 1 }]}>{fermata}</Text>
                      <FavoriteButton 
                        isFavorite={true}
                        onPress={() => toggleFavorite('fermate', fermata)}
                      />
                    </Card>
                  ))}
                </>
              )}

              {/* Linee */}
              {favorites.linee.length > 0 && (
                <>
                  <Text style={[styles.sectionTitle, { color: theme.text, marginTop: 20 }]}>🚇 Linee ({favorites.linee.length})</Text>
                  {favorites.linee.map((linea, index) => (
                    <Card key={index} style={styles.favoriteItem} theme={theme}>
                      <Text style={[styles.favoriteItemText, { color: theme.text, flex: 1 }]}>{linea}</Text>
                      <FavoriteButton 
                        isFavorite={true}
                        onPress={() => toggleFavorite('linee', linea)}
                      />
                    </Card>
                  ))}
                </>
              )}

              {/* Servizi */}
              {favorites.servizi.length > 0 && (
                <>
                  <Text style={[styles.sectionTitle, { color: theme.text, marginTop: 20 }]}>📞 Servizi ({favorites.servizi.length})</Text>
                  {favorites.servizi.map((servizio, index) => {
                    const emergenzaData = emergenze.find(e => e.nome === servizio);
                    return (
                      <Card 
                        key={index} 
                        style={styles.favoriteItem} 
                        theme={theme}
                        onPress={() => emergenzaData && Linking.openURL(`tel:${emergenzaData.numero.replace(/\s/g, '')}`)}
                      >
                        <View style={{ flex: 1 }}>
                          <Text style={[styles.favoriteItemText, { color: theme.text }]}>{servizio}</Text>
                          {emergenzaData && (
                            <Text style={[styles.favoriteItemSubtext, { color: theme.textSecondary }]}>
                              {emergenzaData.numero}
                            </Text>
                          )}
                        </View>
                        <FavoriteButton 
                          isFavorite={true}
                          onPress={() => toggleFavorite('servizi', servizio)}
                        />
                      </Card>
                    );
                  })}
                </>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

// ==================== 🚀 APP PRINCIPALE ====================

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedLine, setSelectedLine] = useState(null);
  const [navigationStack, setNavigationStack] = useState([{ screen: 'home', title: 'Home' }]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [favorites, setFavorites] = useState({
    fermate: [],
    linee: [],
    servizi: []
  });
  const [searchQuery, setSearchQuery] = useState('');
  
  const theme = isDarkMode ? THEMES.dark : THEMES.light;
  
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  const toggleFavorite = (type, item) => {
    setFavorites(prev => {
      const items = prev[type];
      const exists = items.includes(item);
      return {
        ...prev,
        [type]: exists 
          ? items.filter(i => i !== item)
          : [...items, item]
      };
    });
  };

  const navigate = (screen, data = null) => {
    setCurrentScreen(screen);
    if (data) setSelectedLine(data);
    setNavigationStack(prev => [...prev, { screen, title: screen }]);
    setSearchQuery(''); // Reset search on navigation
  };

  const goBack = () => {
    const newStack = [...navigationStack];
    newStack.pop();
    const previous = newStack[newStack.length - 1] || { screen: 'home', title: 'Home' };
    setCurrentScreen(previous.screen);
    setNavigationStack(newStack);
    setSearchQuery(''); // Reset search on back
    if (previous.screen === 'home') setSelectedLine(null);
  };

  // Context value
  const contextValue = {
    theme,
    isDarkMode,
    toggleTheme,
    favorites,
    setFavorites,
    toggleFavorite,
    searchQuery,
    setSearchQuery,
  };

  // Routing
  const renderScreen = () => {
    switch(currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={navigate} />;
      case 'trasporti':
        return <TrasportiScreen onBack={goBack} onNavigate={navigate} />;
      case 'metro':
        return <MetroScreen onBack={goBack} onSelectLine={(linea) => navigate('lineDetail', linea)} />;
      case 'lineDetail':
        return selectedLine ? <LineDetailScreen linea={selectedLine} onBack={goBack} /> : <HomeScreen onNavigate={navigate} />;
      case 'bus':
        return <BusScreen onBack={goBack} />;
      case 'ambiente':
        return <AmbienteScreen onBack={goBack} />;
      case 'aeroporti':
        return <AeroportiScreen onBack={goBack} />;
      case 'municipi':
        return <MunicipiScreen onBack={goBack} />;
      case 'emergenze':
        return <EmergenzeScreen onBack={goBack} />;
      case 'turismo':
        return <TurismoScreen onBack={goBack} />;
      case 'settings':
        return <SettingsScreen onBack={goBack} />;
      case 'favorites':
        return <FavoritesScreen onBack={goBack} onNavigate={navigate} />;
      default:
        return <HomeScreen onNavigate={navigate} />;
    }
  };

  return (
    <AppContext.Provider value={contextValue}>
      {renderScreen()}
    </AppContext.Provider>
  );
}

// ==================== 🎨 STILI ====================

const styles = StyleSheet.create({
  // 📐 Layout Base
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  
  // 🎯 Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    elevation: 2,
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  
  // 🏆 Hero Section
  heroSection: {
    padding: 30,
  },
  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  heroDate: {
    fontSize: 12,
  },
  heroActions: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // ⚡ Quick Access
  favoritesQuickAccess: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 15,
    borderRadius: 12,
    borderWidth: 1,
    elevation: 2,
  },
  quickAccessTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  quickAccessSubtitle: {
    fontSize: 13,
  },
  
  // 🎴 Main Grid
  mainGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  mainCard: {
    width: '48%',
    height: 140,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  mainCardEmoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  mainCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  mainCardSubtitle: {
    fontSize: 12,
    color: '#FFF',
    opacity: 0.9,
  },
  
  // 🔗 Quick Links
  quickLinks: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  linkButton: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    borderWidth: 1,
  },
  linkText: {
    fontSize: 15,
  },
  
  // 📦 Cards
  card: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    borderWidth: 1,
  },
  
  // 🔍 Search
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 1,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 0,
  },
  
  // ⭐ Favorite Button
  favoriteBtn: {
    padding: 8,
  },
  
  // 🔢 Badge
  badge: {
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  
  // 🏷️ Chip
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '600',
  },
  chipContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  
  // 📭 Empty State
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
  },
  
  // ⏳ Skeleton
  skeleton: {
    borderRadius: 4,
  },
  
  // 🎯 Status
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  
  // 📄 Content
  sectionContent: {
    padding: 15,
  },
  
  // 🚇 Transport Cards
  transportCard: {
    height: 120,
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
  },
  transportContent: {
    padding: 20,
    justifyContent: 'center',
  },
  transportTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  transportSubtitle: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 3,
  },
  transportInfo: {
    fontSize: 13,
    color: '#FFF',
    opacity: 0.9,
  },
  
  // 💰 Prices
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  priceLabel: {
    fontSize: 15,
  },
  priceValue: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  
  // 🚉 Lines & Stops
  lineCard: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 12,
  },
  lineName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lineRoute: {
    fontSize: 14,
    marginBottom: 3,
  },
  lineStops: {
    fontSize: 12,
  },
  directionButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  directionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  stopCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 8,
    borderRadius: 8,
  },
  stopNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 40,
  },
  stopName: {
    fontSize: 16,
  },
  
  // 🚌 Bus
  busCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  busNumber: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  busNumberText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  busInfo: {
    flex: 1,
  },
  busRoute: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  busMeta: {
    fontSize: 13,
  },
  
  // ♻️ AMA Centers
  centroCard: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
  },
  centroNome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  centroIndirizzo: {
    fontSize: 14,
    marginBottom: 3,
  },
  centroOrario: {
    fontSize: 13,
    fontWeight: '600',
  },
  
  // ✈️ Airports
  airportCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  airportName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  airportCode: {
    fontSize: 14,
    marginBottom: 8,
  },
  airportInfo: {
    fontSize: 13,
    marginBottom: 15,
    fontStyle: 'italic',
  },
  airportSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
  },
  collegamentoText: {
    fontSize: 14,
    marginBottom: 6,
  },
  terminalText: {
    fontSize: 14,
    marginBottom: 6,
  },
  
  // 🏘️ Municipi
  municipioCard: {
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
  },
  municipioNum: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  municipioNome: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  municipioZone: {
    fontSize: 12,
    lineHeight: 18,
  },
  
  // 🚨 Emergenze
  emergenzaWarning: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
  },
  emergenzaWarningText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emergenzaCard: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
  },
  emergenzaNome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  emergenzaNumero: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  servizioCard: {
    padding: 18,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 4,
  },
  servizioNome: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  servizioNumero: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  
  // 🎭 Turismo
  turistaText: {
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
  
  // 🔘 Action Buttons
  actionButton: {
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  dangerButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  dangerButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
  },
  
  // ⚙️ Settings
  settingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  settingDescription: {
    fontSize: 13,
    marginTop: 4,
  },
  settingValue: {
    fontSize: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  
  // ⭐ Favorites
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
  },
  favoriteItemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  favoriteItemSubtext: {
    fontSize: 13,
    marginTop: 4,
  },
});
