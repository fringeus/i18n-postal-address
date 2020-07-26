import { AddressObject } from './address-format'

export default interface PostalAddressInterface {
  // Public methods
  setAddress(newValue: string): void
  setAddress1(newValue: string): void
  setAddress2(newValue: string): void
  setAddressNum(newValue: string): void
  setCity(newValue: string): void
  setCompanyName(newValue: string): void
  setCountry(newValue: string): void
  setDo(newValue: string): void
  setDong(newValue: string): void
  setFirstLastName(newValue: string): void
  setFirstName(newValue: string): void
  setGu(newValue: string): void
  setHonorific(newValue: string): void
  setHonorific(newValue: string): void
  setJobTitle(newValue: string): void
  setLastName(newValue: string): void
  setPostalCode(newValue: string): void
  setPrefecture(newValue: string): void
  setProvince(newValue: string): void
  setRegion(newValue: string): void
  setRepublic(newValue: string): void
  setSecondLastName(newValue: string): void
  setSecondName(newValue: string): void
  setSi(newValue: string): void
  setState(newValue: string): void
  setTitle(newValue: string): void
  setOutputFormat(string: string): void
  setFormat(
    {
      country,
      type,
      useTransforms,
    }: { country: string, type: string, useTransforms: boolean },
  ): void
  toString(): string
  raw(): AddressObject
}