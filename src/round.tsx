// Function for rounding numbers to fixed decimal (max 4)
function Round(value: number, decimal: number) {
    if (!value) {
      return 0;
    }
    const num = (Math.floor(value * 10000) / 10000).toFixed(decimal); 
    return num;
  }
  export default Round;