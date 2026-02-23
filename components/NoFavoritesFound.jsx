import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function NoFavoritesFound({ theme, styles }) {
  const router = useRouter();

  if (!theme || !styles) return null;

  return (
    <View style={styles.emptyState}>
      <View style={styles.emptyIconContainer}>
        <Ionicons name="heart-outline" size={80} color={theme.textLight} />
      </View>
      <Text style={styles.emptyTitle}>No favorites yet</Text>
      <TouchableOpacity style={styles.exploreButton} onPress={() => router.push("/")}>
        <Ionicons name="search" size={18} color={theme.background} />
        <Text style={styles.exploreButtonText}>Explore Recipes</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NoFavoritesFound;
