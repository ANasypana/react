export const strToData = str => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(str).toLocaleDateString('en-US', options)
}