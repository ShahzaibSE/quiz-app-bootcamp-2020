export const shuffleArray = (arr: any[]) => 
    [...arr].sort( () => (Math.random() - 0.5))

export const removeDuplicates = ( arr: any, prop: any ) => {
    let obj: any = {};
    // console.log("Original array")
    // console.log(arr)
    return Object.keys(arr.reduce((prev: any, next: any) => {
      // console.log("Current obj property")
      // console.log(obj[prev[prop]])
      // if(!obj[next[prop]]) obj[next[prop]] = next; 
      if(!obj[prev[prop]]) obj[next[prop]] = next;
      return obj;
    }, obj)).map((i) => obj[i]);
}