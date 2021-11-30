export default function objectSample() {
  const a: object = {
    name: 'TS',
    age: 28
  }
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: "Japanese",
    name: "Japan"
  }

  console.log("Object object sample 1:", country)

  country = {
    language: "English",
    name: "United States of America"
  }

  console.log("Object object sample 2:", country)

  // オプショナルとreadonly
  const maskedRider: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 22,
    lastName: "Hongou",
    firstName: "Takeshi"
  }

  maskedRider.gender = 'male'
  maskedRider.lastName = 'Fujioka'
  // maskedRider.firstName = 'Hiroshi'

  console.log("Object object sample 3:", maskedRider)


}