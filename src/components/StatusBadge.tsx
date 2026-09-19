import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface StatusBadgeProps {
  isActive: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  isActive,
}) => {
  return (
    <View
      style={[
        styles.badge,
        isActive ? styles.active : styles.suspended,
      ]}
    >
      <View
        style={[
          styles.dot,
          isActive ? styles.activeDot : styles.suspendedDot,
        ]}
      />

      <Text
        style={[
          styles.text,
          isActive ? styles.activeText : styles.suspendedText,
        ]}
      >
        {isActive
          ? 'STATUS: VERIFIED ACTIVE PASS'
          : 'STATUS: SUSPENDED'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    borderRadius: 8,
    marginTop: 14,
    borderWidth: 1,
  },

  active: {
    backgroundColor: '#DCFCE7',
    borderColor: '#4ADE80',
  },

  suspended: {
    backgroundColor: '#FEE2E2',
    borderColor: '#F87171',
  },

  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginRight: 8,
  },

  activeDot: {
    backgroundColor: '#16A34A',
  },

  suspendedDot: {
    backgroundColor: '#DC2626',
  },

  text: {
    fontSize: 11,
    fontWeight: '800',
  },

  activeText: {
    color: '#166534',
  },

  suspendedText: {
    color: '#991B1B',
  },
});