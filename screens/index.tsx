import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const HomePage: FC = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        paddingTop: 64,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{ display: 'flex', alignItems: 'flex-end', marginRight: 16 }}
      >
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'inter-bold',
              fontSize: 64,
            }}
          >
            27
          </Text>
          <Text
            style={{
              color: 'white',
              fontFamily: 'inter-medium',
              fontSize: 24,
              marginTop: -16,
            }}
          >
            Jakarta
          </Text>
          <View
            style={{
              backgroundColor: '#353362',
              borderRadius: 20,
              paddingHorizontal: 20,
              paddingVertical: 4,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontFamily: 'inter-medium',
                fontSize: 16,
              }}
            >
              Hujan
            </Text>
          </View>
        </View>
      </View>
      <LinearGradient
        colors={['#30aafd', '#c565f9']}
        style={{
          width: 350,
          height: 350,
          borderRadius: 175,
          transform: [{ rotateZ: '-45deg' }],
          position: 'absolute',
          top: -125,
          left: -150,
        }}
      />
    </View>
  )
}

export default HomePage
