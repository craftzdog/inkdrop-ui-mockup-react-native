import * as React from 'react'
import { memo, useCallback, useEffect, useRef } from 'react'
import { Animated, View, StyleSheet } from 'react-native'
export type ThreeColumnLayoutProps = {
  type: 'three-column'
  leftViewVisible: boolean
  middleViewVisible: boolean
}
type RenderView = (callbacks: ThreeColumnLayoutProps) => React.ReactNode
type Props = {
  renderLeftView: RenderView
  renderMiddleView: RenderView
  renderRightView: RenderView
  leftViewVisible?: boolean
  middleViewVisible?: boolean
  leftViewWidth?: number
  middleViewWidth?: number
}

const ThreeColumnLayout: React.FC<Props> = props => {
  const {
    renderLeftView,
    renderMiddleView,
    renderRightView,
    leftViewVisible = true,
    middleViewVisible = true,
    leftViewWidth = 240,
    middleViewWidth = 320
  } = props
  const viewProps: ThreeColumnLayoutProps = {
    type: 'three-column',
    leftViewVisible,
    middleViewVisible
  }
  const leftValue = useRef(
    new Animated.Value(leftViewVisible ? leftViewWidth : 0)
  ).current
  const middleValue = useRef(
    new Animated.Value(middleViewVisible ? middleViewWidth : 0)
  ).current
  const animatedLeftViewStyle = {
    flexBasis: leftValue
  }
  const animatedMiddleViewStyle = {
    flexBasis: middleValue
  }
  const toggleLeftView = useCallback(
    (visible: boolean) => {
      if (visible) {
        Animated.spring(leftValue, {
          useNativeDriver: false,
          toValue: leftViewWidth,
          bounciness: 0
        }).start()
      } else {
        Animated.spring(leftValue, {
          useNativeDriver: false,
          toValue: 0,
          bounciness: 0
        }).start()
      }
    },
    [leftValue, leftViewWidth]
  )
  const toggleMiddleView = useCallback(
    (visible: boolean) => {
      if (visible) {
        Animated.spring(middleValue, {
          useNativeDriver: false,
          toValue: middleViewWidth,
          bounciness: 0
        }).start()
      } else {
        Animated.spring(middleValue, {
          useNativeDriver: false,
          toValue: 0,
          bounciness: 0
        }).start()
      }
    },
    [middleValue, middleViewWidth]
  )
  useEffect(() => {
    toggleLeftView(leftViewVisible)
  }, [leftViewVisible, toggleLeftView])
  useEffect(() => {
    toggleMiddleView(middleViewVisible)
  }, [middleViewVisible, toggleMiddleView])

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.leftViewContainer, animatedLeftViewStyle]}>
        <View
          style={{
            flex: 1,
            width: leftViewWidth
          }}
        >
          {renderLeftView(viewProps)}
        </View>
      </Animated.View>
      <Animated.View
        style={[styles.middleViewContainer, animatedMiddleViewStyle]}
      >
        <View
          style={{
            flex: 1,
            width: middleViewWidth
          }}
        >
          {renderMiddleView(viewProps)}
        </View>
      </Animated.View>
      <View style={styles.rightViewContainer}>
        {renderRightView(viewProps)}
      </View>
    </View>
  )
}

export default memo<Props>(ThreeColumnLayout)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  leftViewContainer: {
    flexShrink: 0,
    flexGrow: 0
  },
  middleViewContainer: {
    flexShrink: 0,
    flexGrow: 0
  },
  rightViewContainer: {
    flex: 1
  }
})
