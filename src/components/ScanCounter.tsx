import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

interface ScanCounterProps {
  count: number;
  onScan: () => void;
  onReset: () => void;
  onToggleStatus: () => void;
  isActive: boolean;
}

export const ScanCounter: React.FC<ScanCounterProps> = ({
  count,
  onScan,
  onReset,
  onToggleStatus,
  isActive,
}) => {
  return (
    <View style={styles.container}>

      {/* TITLE */}
      <Text style={styles.title}>
        Campus Gate Verification Log
      </Text>

      {/* TODAY'S GATE ENTRIES */}
      <View style={styles.counterDisplay}>
        <Text style={styles.label}>
          Today's Gate Entries:
        </Text>

        <Text style={styles.value}>
          {count}
        </Text>
      </View>

      {/* +1 SCAN AND RESET SCANS */}
      <View style={styles.btnRow}>

        <Pressable
          style={styles.btnPrimary}
          onPress={onScan}
        >
          <Text style={styles.btnText}>
            +1 Scan at Gate
          </Text>
        </Pressable>

        <Pressable
          style={styles.btnSecondary}
          onPress={onReset}
        >
          <Text style={styles.btnSecText}>
            Reset Scans
          </Text>
        </Pressable>

      </View>

      {/* SIMULATE PASS SUSPENSION - LAST/BOTTOM */}
      <Pressable
        style={[
          styles.suspendButton,
          !isActive && styles.activateButton,
        ]}
        onPress={onToggleStatus}
      >
        <Text
          style={[
            styles.suspendText,
            !isActive && styles.activateText,
          ]}
        >
          {isActive
            ? '⚠ Simulate Pass Suspension'
            : '✓ Activate Student Pass'}
        </Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#DCE3EA',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  title: {
    fontSize: 15,
    fontWeight: '800',
    color: '#172033',
    marginBottom: 14,
  },

  counterDisplay: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    backgroundColor: '#F8FAFC',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#DCE3EA',
  },

  label: {
    fontSize: 12,
    color: '#475569',
    fontWeight: '500',
  },

  value: {
    fontSize: 24,
    fontWeight: '800',
    color: '#087F95',
  },

  /* TWO BUTTONS IN ONE ROW */
  btnRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },

  btnPrimary: {
    flex: 1,
    backgroundColor: '#087F95',
    paddingVertical: 11,
    borderRadius: 8,
    alignItems: 'center',
  },

  btnSecondary: {
    flex: 1,
    backgroundColor: '#E2E8F0',
    paddingVertical: 11,
    borderRadius: 8,
    alignItems: 'center',
  },

  btnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },

  btnSecText: {
    color: '#334155',
    fontSize: 11,
    fontWeight: '800',
  },

  /* THIS MUST BE BELOW btnRow */
  suspendButton: {
    width: '100%',
    backgroundColor: '#FEE2E2',
    borderWidth: 1,
    borderColor: '#F87171',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },

  suspendText: {
    color: '#991B1B',
    fontSize: 11,
    fontWeight: '800',
  },

  activateButton: {
    backgroundColor: '#DCFCE7',
    borderColor: '#4ADE80',
  },

  activateText: {
    color: '#166534',
  },
});
