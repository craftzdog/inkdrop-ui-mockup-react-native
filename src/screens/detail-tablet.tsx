import React from 'react'
import { ThreeColumnLayoutProps } from 'react-native-three-column-layout'
import DetailScreen from './detail'
import { TouchableOpacity } from '@/atoms'
import FeatherIcon from '@/components/icon'

type Props = ThreeColumnLayoutProps & { onDistractionFreeModeToggle: () => any }

const DetailScreenForTablet: React.FC<Props> = props => {
  const { onDistractionFreeModeToggle, middleViewVisible } = props

  return (
    <DetailScreen
      renderNavBarLeft={() => (
        <TouchableOpacity
          onPress={onDistractionFreeModeToggle}
          flexDirection="row"
          alignItems="center"
          height="100%"
        >
          <FeatherIcon
            name={middleViewVisible ? 'maximize-2' : 'minimize-2'}
            size={24}
          />
        </TouchableOpacity>
      )}
    />
  )
}

export default DetailScreenForTablet
