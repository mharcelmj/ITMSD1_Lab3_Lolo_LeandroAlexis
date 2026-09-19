// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   ScrollView,
//   Pressable,
// } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// import { StudentProfile } from './src/types/student';
// import { StudentCard } from './src/components/StudentCard';
// import { ScanCounter } from './src/components/ScanCounter';

// const initialStudent: StudentProfile = {
//   name: 'Juan Carlos D. Dela Cruz',
//   idNumber: '2024-008492-MT',
//   program: 'BS in Information Technology (BSIT)',
//   yearLevel: '3rd Year — Section A',
//   avatarUrl:
//     'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
//   campus: 'Main Campus (Guang-guang, Mati City)',
// };

// export default function App() {
//   const [student] = useState<StudentProfile>(initialStudent);
//   const [isActive, setIsActive] = useState<boolean>(true);
//   const [gateScans, setGateScans] = useState<number>(3);

//   const handleScan = () => {
//     setGateScans((prev) => prev + 1);
//   };

//   const handleReset = () => {
//     setGateScans(0);
//   };

//   const togglePassStatus = () => {
//     setIsActive((prev) => !prev);
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <StatusBar style="auto" />

//       <ScrollView contentContainerStyle={styles.container}>

//         <View style={styles.header}>
//           <Text style={styles.university}>
//             DAVAO ORIENTAL STATE UNIVERSITY
//           </Text>

//           <Text style={styles.faculty}>
//             FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY
//           </Text>

//           <Text style={styles.passTitle}>
//             OFFICIAL STUDENT DIGITAL PASS
//           </Text>
//         </View>

//         <StudentCard
//           student={student}
//           isActive={isActive}
//         />

//         <Pressable
//           style={[
//             styles.toggleButton,
//             isActive
//               ? styles.suspendButton
//               : styles.activateButton,
//           ]}
//           onPress={togglePassStatus}
//         >
//           <Text style={styles.toggleText}>
//             {isActive
//               ? 'Suspend Pass'
//               : 'Activate Pass'}
//           </Text>
//         </Pressable>

//         <ScanCounter
//           count={gateScans}
//           onScan={handleScan}
//           onReset={handleReset}
//         />

//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#F8FAFC',
//   },

//   container: {
//     padding: 16,
//     gap: 16,
//   },

//   header: {
//     backgroundColor: '#00758F',
//     padding: 16,
//     borderRadius: 12,
//     borderBottomWidth: 4,
//     borderBottomColor: '#F29111',
//     alignItems: 'center',
//   },

//   university: {
//     color: '#FFFFFF',
//     fontSize: 13,
//     fontWeight: '800',
//     textAlign: 'center',
//   },

//   faculty: {
//     color: '#FFFFFF',
//     fontSize: 9,
//     fontWeight: '600',
//     textAlign: 'center',
//     marginTop: 4,
//   },

//   passTitle: {
//     color: '#FFFFFF',
//     fontSize: 9,
//     fontWeight: '700',
//     marginTop: 8,
//   },

//   toggleButton: {
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },

//   suspendButton: {
//     backgroundColor: '#FEE2E2',
//     borderWidth: 1,
//     borderColor: '#FCA5A5',
//   },

//   activateButton: {
//     backgroundColor: '#DCFCE7',
//     borderWidth: 1,
//     borderColor: '#86EFAC',
//   },

//   toggleText: {
//     fontWeight: '800',
//   },
// });
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { StudentProfile } from './src/types/student';
import { StudentCard } from './src/components/StudentCard';
import { ScanCounter } from './src/components/ScanCounter';

const initialStudent: StudentProfile = {
  name: 'LOLO, LEANDRO ALEXIS, S.',
  idNumber: '2024-1269',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3rd Year — Section F',
  avatarUrl:
    'https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/814534988_1593449202565439_6178003233017948725_n.jpg?stp=dst-jpg_tt6&cstp=mx896x1195&ctp=s896x1195&_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGGf2ldD-17me6pS2PUoowjhenV7bFzETiF6dXtsXMROPG7XbO1LtFKMvRY8Mg_CZWz1TW0dmvvZ2tTACtmP0qr&_nc_ohc=17degmteIVEQ7kNvwGn5sh7&_nc_oc=AdpV2HsGbH1OSghHn65MVgTl3qSPgtFH4YURau5Lk3th8F6OQ4HU0qPs95l4k3Yx7hfldqkFE2XCIy42a60in7o7&_nc_zt=23&_nc_ht=scontent.fcgy2-4.fna&_nc_gid=DuvDMTZTXN1JpaMjWy6VRA&_nc_ss=782a8&oh=00_AQIsQgB4jR2rdixL3oeJiCeXKBEERVLPw_RRZsMCsAlr2A&oe=6AB2DE27',
  campus: 'Main Campus (Guang-guang, Mati City)',
};

export default function App() {
  const [student] = useState<StudentProfile>(initialStudent);
  const [isActive, setIsActive] = useState(true);
  const [gateScans, setGateScans] = useState(0);

  const handleScan = () => {
    setGateScans((prev) => prev + 1);
  };

  const handleReset = () => {
    setGateScans(0);
  };

  const togglePassStatus = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.university}>
            DAVAO ORIENTAL STATE UNIVERSITY
          </Text>

          <Text style={styles.faculty}>
            FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY
          </Text>

          <View style={styles.passPill}>
            <Text style={styles.passTitle}>
              OFFICIAL STUDENT DIGITAL PASS • AY 2026–2027
            </Text>
          </View>
        </View>

        {/* STUDENT CARD */}
        <StudentCard
          student={student}
          isActive={isActive}
        />

        {/* CAMPUS GATE VERIFICATION */}
        <ScanCounter
          count={gateScans}
          onScan={handleScan}
          onReset={handleReset}
          onToggleStatus={togglePassStatus}
          isActive={isActive}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    gap: 56,
  },

  header: {
    width: '100%',
    backgroundColor: '#087F95',
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 18,
    borderBottomWidth: 4,
    borderBottomColor: '#F5A623',
    alignItems: 'center',
  },

  university: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
    textAlign: 'center',
  },

  faculty: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },

  passPill: {
    backgroundColor: '#006579',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 16,
  },

  passTitle: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
});