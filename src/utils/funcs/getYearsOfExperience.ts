export const getYearsOfExperience = () => {
  const curDate = new Date()
  const foundationDate = new Date(2002, 0)
  const differenceBetweenCurAndFoundationDate =
    curDate.getFullYear() - foundationDate.getFullYear()

  return differenceBetweenCurAndFoundationDate
}
