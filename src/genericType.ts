// --------------------------------------
/* 泛型 */
function identity<T>(arg: any[]): T[] {
  const arr = arg;
  return arr;
}
const sat: string = "sss";
identity([sat]);
export default {};
