export const shuffleArray = (arr: any[]) => 
    [...arr].sort( () => (Math.random() - 0.5))

export const removeDuplicates = ( arr: any, prop: any ) => {
    let obj: any = {};
    return Object.keys(arr.reduce((prev: any, next: any) => {
      if(!obj[next[prop]]) obj[next[prop]] = next; 
      return obj;
    }, obj)).map((i) => obj[i]);
}