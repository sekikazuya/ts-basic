export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan'
  }
  console.log("Object alias sample 1:", japan)

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'United Stats of America'
  }
  console.log("Object alias sample 2:", america)

}