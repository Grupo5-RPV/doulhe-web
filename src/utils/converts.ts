export function convertInReais(number: number) {
  const value = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);

  return value;
}

export function convertSeconds(secondsReq: number) {
  const hour = ('00' + Math.floor(secondsReq / 3600)).slice(-2);
  secondsReq %= 3600;
  // String(minutes).padStart(2, '0').split('')
  const minutes = ('00' + Math.floor(secondsReq / 60)).slice(-2);
  const seconds = ('00' + (secondsReq % 60)).slice(-2);

  return `${hour}:${minutes}:${seconds}`;
}
