import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingVertical: 10,
    paddingBottom: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 8,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  activeIndicator: {
    width: 20,
    height: 3,
    backgroundColor: '#2563EB',
    borderRadius: 2,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: '#94A3B8',
    marginTop: 4,
  },
  navLabelActive: {
    fontSize: 10,
    fontWeight: '600',
    color: '#2563EB',
    marginTop: 4,
  },
});

