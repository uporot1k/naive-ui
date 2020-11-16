import create from '../../_styles/utils/create-component-base'
import { changeColor } from '../../_utils/color'
import inputCommonVariables from '../../input/styles/_common'
import inputNumberCommonVariables from './_common'

export default create({
  name: 'InputNumber',
  theme: 'dark',
  getDerivedVariables ({ base, derived }) {
    const {
      borderRadius
    } = base
    const {
      primaryColor,
      primaryColorHover,
      primaryColorPressed,
      errorColor,
      errorColorHover,
      errorColorPressed,
      warningColor,
      warningColorHover,
      warningColorPressed,
      textColor2: textColor,
      inputColorOverlay,
      inputColorDisabledOverlay: colorDisabled,
      textColorDisabled,
      placeholdeColor,
      placeholderColorDisabled,
      actionColorOverlay
    } = derived
    const color = inputColorOverlay
    const buttonTextColor = textColor
    const buttonColorDisabled = colorDisabled
    const buttonTextColorDisabled = textColorDisabled
    const buttonColor = actionColorOverlay
    const buttonColorHover = buttonColor
    const buttonColorActive = buttonColor
    const caretColor = null
    const buttonTextColorHover = primaryColorHover
    const buttonTextColorPressed = primaryColorPressed
    return {
      ...inputCommonVariables,
      ...inputNumberCommonVariables,
      borderRadius,
      // default
      buttonColorDisabled,
      buttonTextColorDisabled,
      placeholderColorDisabled,
      colorDisabled,
      textColorDisabled,
      textColor,
      border: '1px solid transparent',
      borderHover: `1px solid ${primaryColorHover}`,
      borderFocus: `1px solid ${primaryColorHover}`,
      buttonColor,
      buttonColorHover,
      buttonColorActive,
      buttonTextColor,
      buttonTextColorHover,
      buttonTextColorPressed,
      caretColor,
      color,
      colorFocus: changeColor(primaryColor, { alpha: 0.1 }),
      boxShadowFocus: `0 0 8px 0 ${changeColor(primaryColor, { alpha: 0.3 })}`,
      placeholdeColor,
      // warning
      borderWarning: `inset 0 0 0 1px ${warningColor}`,
      borderHoverWarning: `inset 0 0 0 1px ${warningColorHover}`,
      boxShadowFocusWarning: `0 0 8px 0 ${changeColor(warningColor, { alpha: 0.2 })}`,
      colorFocusWarning: changeColor(warningColor, { alpha: 0.1 }),
      caretColorWarning: warningColorHover,
      buttonTextColorHoverWarning: warningColorHover,
      buttonTextColorPressedWarning: warningColorPressed,
      // error
      borderError: `inset 0 0 0 1px ${errorColor}`,
      borderHoverError: `inset 0 0 0 1px ${errorColorHover}`,
      boxShadowFocusError: `0 0 8px 0 ${changeColor(errorColor, { alpha: 0.2 })}`,
      colorFocusError: changeColor(errorColor, { alpha: 0.1 }),
      caretColorError: errorColorHover,
      buttonTextColorHoverError: errorColorHover,
      buttonTextColorPressedError: errorColorPressed
    }
  }
})
