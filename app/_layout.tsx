import { FontAwesome } from '@expo/vector-icons';
import { Stack, Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(private)"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
