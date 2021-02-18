const formatDate = (value: string): string =>
  new Intl.DateTimeFormat('pt-br').format(
    new Date(value)
  )

export default formatDate;