import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    gap: 8,
  },
  primaryButton: {
    backgroundColor: '#071E3D',
  },
  primaryButtonDisabled: {
    backgroundColor: '#94A3B8',
  },
  primaryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#EFF6FF',
  },
  secondaryButtonDisabled: {
    backgroundColor: '#F1F5F9',
  },
  secondaryText: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
  },
  dangerButton: {
    backgroundColor: '#EF4444',
  },
  dangerButtonDisabled: {
    backgroundColor: '#FCA5A5',
  },
  dangerText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  outlineText: {
    color: '#334155',
    fontSize: 14,
    fontWeight: '700',
  },
  disabledText: {
    color: '#94A3B8',
  },
});

