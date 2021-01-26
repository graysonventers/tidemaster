
const unixTimestampToDate = timestamp => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  return dateObject;
};

export default unixTimestampToDate;