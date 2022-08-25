import { countries, packages } from '@api/mock'
export const summary = (state) => {
  const { name, age, country, package: pack } = state
  const selfCountry = countries?.find(({ code }) => code === country)
  const selfPackage = packages?.find(({ key }) => key === pack)
  const subTotal = age * 10 * selfCountry?.rate
  const total = subTotal * selfPackage?.value + subTotal
  const res = {
    name,
    age,
    code: country,
    country: selfCountry?.name,
    package: selfPackage?.name,
    subTotal,
    total,
  }
  return res
}
