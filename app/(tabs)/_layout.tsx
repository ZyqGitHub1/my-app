import { FontAwesome } from '@expo/vector-icons';
import { Stack, Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome
              size={28}
              name="home"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <FontAwesome
              size={28}
              name="cog"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
