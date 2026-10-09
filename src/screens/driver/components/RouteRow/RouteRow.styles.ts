import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCompact: {
    justifyContent: 'flex-start',
    marginBottom: 6,
  },
  station: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ring: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 3,
    backgroundColor: '#FFFFFF',
  },
  ringSm: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2.5,
  },
  ringBlue: {
    borderColor: '#2563EB',
  },
  ringTeal: {
    borderColor: '#0D9488',
  },
  stationName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0F172A',
  },
  stationNameSm: {
    fontSize: 14,
    marginLeft: -2,
  },
  line: {
    flex: 1,
    marginHorizontal: 10,
    height: 1,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderStyle: 'dashed',
  },
  lineSm: {
    flex: 0,
    width: 20,
    marginHorizontal: 6,
  },
});
