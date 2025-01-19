import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Tab1() {
  return (
    <View>
      <Text>Tab1</Text>
      <Link href="/item">商品详情页</Link>
    </View>
  );
}
