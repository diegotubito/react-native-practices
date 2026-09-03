import { StyleSheet, Text, View } from 'react-native';

const users = [
  { id: 'u1', name: 'Ana Torres', team: 'Design', isActive: true },
  { id: 'u2', name: 'Bruno Silva', team: 'Engineering', isActive: false },
  { id: 'u3', name: 'Carla Ruiz', team: 'Engineering', isActive: true },
  { id: 'u4', name: 'Diego Paz', team: 'Product', isActive: true },
  { id: 'u5', name: 'Elena Soto', team: 'Engineering', isActive: true },
  { id: 'u6', name: 'Facundo Rey', team: 'Design', isActive: false },
];

function UserRow({ user }) {
  return (
    <View style={styles.row}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{user.name[0]}</Text>
      </View>

      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.detail}>
          {user.team} · {user.isActive ? 'Active' : 'Inactive'}
        </Text>
      </View>
    </View>
  );
}

export default function UserDirectory() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>EXERCISE 01</Text>
      <Text style={styles.title}>User directory</Text>
      <Text style={styles.subtitle}>{users.length} users</Text>

      <View style={styles.list}>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  eyebrow: {
    color: '#53616f',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  title: {
    color: '#15202b',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 6,
  },
  subtitle: {
    color: '#53616f',
    fontSize: 16,
    marginTop: 4,
  },
  list: {
    gap: 12,
    marginTop: 24,
  },
  row: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    flexDirection: 'row',
    gap: 12,
    padding: 16,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: '#dce8ff',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  avatarText: {
    color: '#174ea6',
    fontSize: 16,
    fontWeight: '700',
  },
  name: {
    color: '#15202b',
    fontSize: 16,
    fontWeight: '600',
  },
  detail: {
    color: '#53616f',
    fontSize: 14,
    marginTop: 2,
  },
});
