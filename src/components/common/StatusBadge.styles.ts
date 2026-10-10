import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successBadge: {
    backgroundColor: '#DCFCE7',
  },
  warningBadge: {
    backgroundColor: '#FEF3C7',
  },
  dangerBadge: {
    backgroundColor: '#FEE2E2',
  },
  infoBadge: {
    backgroundColor: '#EFF6FF',
  },
  neutralBadge: {
    backgroundColor: '#F1F5F9',
  },
  text: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  successText: {
    color: '#16A34A',
  },
  warningText: {
    color: '#D97706',
  },
  dangerText: {
    color: '#DC2626',
  },
  infoText: {
    color: '#2563EB',
  },
  neutralText: {
    color: '#475569',
  },
});

