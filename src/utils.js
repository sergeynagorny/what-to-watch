export const convertMinutesToDuration = (n) => {
  const setTimeUnitFormat = (unit, symbol) => unit.toString().padStart(2, `0`) + `${symbol} `;

  const num = n;
  const hours = (num / 60);
  let rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);

  rhours = rhours === 0 ? `` : setTimeUnitFormat(rhours, `h`);
  rminutes = rminutes === 0 ? `` : setTimeUnitFormat(rminutes, `m`);

  return `${rhours}${rminutes}`;
};
