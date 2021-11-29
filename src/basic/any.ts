export default function anySample() {
  let name: any = '仮面ライダー' // string型を代入したよ
  console.log("any sample 1:", typeof name, name)

  name = 50
  console.log("any sample 2:", typeof name, name)

}