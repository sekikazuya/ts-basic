export default function primitiveSample () {
  let name: string = '仮面ライダー'
  // name = 123
  console.log("primitive sample 1:", typeof name, name)

  let anniv: number = 50
  // anniv = "50"
  console.log("primitive sample 2:", typeof anniv, anniv)

  let isHero: boolean = true
  console.log("primitive sample 3:", typeof isHero, isHero)

  const isOver50: boolean = anniv >= 50
  console.log("primitive sample 4:", typeof isOver50, isOver50)

}