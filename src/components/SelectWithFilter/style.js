export default (props) => {
  const { isSuccess, isError, disabled } = props
  const getColor = () => {
    if (isError) return '#FB6B5B'
    if (isSuccess) return '#26a69a'
    if (disabled) return 'whitesmoke'
    return '#dbdbdb'
  }

  return {
    control: (styles, { isDisabled, isFocused, isSelected }) => ({
      ...styles,
      borderRadius: 3,
      height: 30,
      minHeight: 30,
      borderColor: getColor()
    }),
    singleValue: (styles) => ({
      ...styles,
      color: '#363636'
    }),
    placeholder: (styles) => ({
      ...styles,
      color: '#363636'
    })
  }
}
