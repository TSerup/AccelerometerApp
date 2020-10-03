function Round(value: number, decimal: number) {
    if (!value) {
      return 0;
    }
    const num = (Math.floor(value * 100) / 100).toFixed(decimal); 
    return num;
  }
  export default Round;