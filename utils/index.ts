export async function featchCars() {
  const headers = {
    "X-RapidAPI-Key": "80f82378e7msh6ebfd76436b1099p1c4ac8jsna506fc786c84",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
