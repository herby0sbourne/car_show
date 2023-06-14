export const fetchCars = async () => {
  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=bmw';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '81e69af384msh5b5ff8109154de8p186245jsn51d664ba6fc1',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
