import ExpoIntentBroadcaster, {
  BroadcastAction,
} from '@focus8/expo-intent-broadcaster';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>ExpoIntentBroadcaster API Example</Text>
        <Group name="Action: android.intent.action.gotosleep">
          <Button
            title="Broadcast"
            onPress={() => {
              ExpoIntentBroadcaster.sendBroadcast(BroadcastAction.GOTO_SLEEP);
            }}
          />
        </Group>
        <Group name="Action: android.intent.action.exitsleep">
          <Button
            title="Broadcast"
            onPress={() => {
              ExpoIntentBroadcaster.sendBroadcast(BroadcastAction.EXIT_SLEEP);
            }}
          />
        </Group>
        <Group name="Action: android.intent.action.reboot">
          <Button
            title="Broadcast"
            onPress={() => {
              ExpoIntentBroadcaster.sendBroadcast(
                'android.intent.action.reboot'
              );
            }}
          />
        </Group>
        <Group name="Action: android.intent.action.shutdown">
          <Button
            title="Broadcast"
            onPress={() => {
              ExpoIntentBroadcaster.sendBroadcast(
                'android.intent.action.shutdown'
              );
            }}
          />
        </Group>
        <Group name="Action: com.xxx.action.BACK_LIGHT_BRIGHTNESS + extra brightness 100">
          <Button
            title="Broadcast"
            onPress={() => {
              ExpoIntentBroadcaster.sendBroadcast(
                'com.xxx.action.BACK_LIGHT_BRIGHTNESS',
                { brightness: 100 }
              );
            }}
          />
        </Group>
        <Group name="Action: com.xxx.action.BACK_LIGHT_BRIGHTNESS + extra brightness 10">
          <Button
            title="Broadcast"
            onPress={() => {
              ExpoIntentBroadcaster.sendBroadcast(
                'com.xxx.action.BACK_LIGHT_BRIGHTNESS',
                { brightness: 10 }
              );
            }}
          />
        </Group>
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  view: {
    flex: 1,
    height: 200,
  },
};
