import React, { useCallback } from 'react'
import DetailScreen from './detail'
import FeatherIcon from '@/components/icon'
import { TouchableOpacity } from '@/atoms'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/navs'

type Props = {}

const DetailScreenForPhone: React.FC<Props> = _props => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const handleBackPress = useCallback(() => {
    navigation.goBack()
  }, [])

  return (
    <DetailScreen
      renderNavBarLeft={() => (
        <TouchableOpacity onPress={handleBackPress} p="sm">
          <FeatherIcon name="arrow-left" size={24} />
        </TouchableOpacity>
      )}
    />
  )
}

export default DetailScreenForPhone
