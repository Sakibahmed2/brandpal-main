export const countUserByCountry = (users) => {
  const countries = new Set();

  users?.forEach((user) => {
    if (user.country) {
      countries.add(user.country);
    }
  });

  return countries.size;
};
