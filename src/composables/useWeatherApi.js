import { reactive } from "vue";
import axios from "axios";

export function useWeatherApi() {
  const data = reactive({
    city: "",
    weatherInfo: null,
  });

  const url = "http://localhost:3000/";
  const metric = "metric";

  const getWeather = () => {
    try {
      axios(`${url}?q=${data.city}&units=${metric}`).then((response) => {
        data.weatherInfo = response.data;
      });
    }
    catch {
      alert('Error.Try again.')
    }

  }
  return { data, getWeather }
}