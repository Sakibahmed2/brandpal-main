const getOfferValidation = (offerStartDate, offerEndDate) => {
  const currentDate = new Date();

  const startDate = new Date(offerStartDate);
  const endDate = new Date(offerEndDate);

  const isValid = currentDate >= startDate && currentDate <= endDate;

  //   Calculate the remaining days (if the offer is valid)
  const remainingTime = endDate - currentDate;
  const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  return { isValid, remainingDays };
};

export default getOfferValidation;
