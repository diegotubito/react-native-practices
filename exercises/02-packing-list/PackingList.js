import { StyleSheet, Text, View } from 'react-native';

const initialItems = [
  { id: 'passport', name: 'Passport', category: 'Documents', isPacked: true },
  { id: 'charger', name: 'Phone charger', category: 'Electronics', isPacked: false },
  { id: 'jacket', name: 'Rain jacket', category: 'Clothing', isPacked: false },
  { id: 'headphones', name: 'Headphones', category: 'Electronics', isPacked: true },
  { id: 'notebook', name: 'Notebook', category: 'Work', isPacked: false },
];

function PackingItem({ item }) {
  return (
    <View style={styles.item}>
      <View style={[styles.marker, item.isPacked && styles.packedMarker]}>
        <Text style={styles.markerText}>{item.isPacked ? '✓' : ''}</Text>
      </View>

      <View style={styles.itemContent}>
        <Text style={[styles.itemName, item.isPacked && styles.packedName]}>
          {item.name}
        </Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>

      <Text style={styles.status}>{item.isPacked ? 'Packed' : 'Pending'}</Text>
    </View>
  );
}

export default function PackingList() {
  const packedCount = initialItems.filter((item) => item.isPacked).length;

  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>EXERCISE 02</Text>
      <Text style={styles.title}>Packing list</Text>
      <Text style={styles.subtitle}>
        {packedCount} of {initialItems.length} packed
      </Text>

      <View style={styles.list}>
        {initialItems.map((item) => (
          <PackingItem key={item.id} item={item} />
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
  item: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 16,
  },
  marker: {
    alignItems: 'center',
    borderColor: '#94a3b8',
    borderRadius: 12,
    borderWidth: 2,
    height: 24,
    justifyContent: 'center',
    width: 24,
  },
  packedMarker: {
    backgroundColor: '#157347',
    borderColor: '#157347',
  },
  markerText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },
  itemContent: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    color: '#15202b',
    fontSize: 16,
    fontWeight: '600',
  },
  packedName: {
    color: '#64748b',
    textDecorationLine: 'line-through',
  },
  category: {
    color: '#64748b',
    fontSize: 13,
    marginTop: 2,
  },
  status: {
    color: '#53616f',
    fontSize: 13,
  },
});
