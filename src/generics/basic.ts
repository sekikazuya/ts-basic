export default function genericsBasicSample() {
  // ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i=0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log("Generics basic sample 1:", stringReduce(["May ", "the ","force ", "be ", "with ", "you"], ""))
}