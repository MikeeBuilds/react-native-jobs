import { useState }  from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator  } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter()
  
  const { data, isLoading, error } = useFetch('://api.jsonbin.io/b/60e8b2b5b5d9httpsd212b8b0b2b5/1')

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer} >
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <FlatList 
            data={[1,2,3,4, 5, 6, 7, 8]}
            renderItem={({ item }) => (
              <PopularJobCard item={item} 
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs