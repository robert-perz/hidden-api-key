<template>
  <div class="search-wrapper">
    <label for="city"></label>
    <input
      class="search-input"
      type="text"
      required
      id="city"
      placeholder="Enter city name & press enter"
      v-if="data"
      v-model="data.city"
      @keyup.enter="getWeather"
    />
  </div>
  <div class="data-wrapper" v-if="data.weatherInfo">
    <h1 class="city">
      {{ data.city.charAt(0).toUpperCase() + data.city.slice(1) }}
    </h1>
    <h2 class="current-temp">
      {{ Math.round(data.weatherInfo.main.temp) }}&degC
    </h2>
    <h2>{{ data.weatherInfo.weather[0].main }}</h2>
    <h2>Wind speed: {{ data.weatherInfo.wind.speed }} m/s</h2>
    <h2>Feels like: {{ Math.round(data.weatherInfo.main.feels_like) }}&degC</h2>
    <h2>Perssure: {{ Math.round(data.weatherInfo.main.pressure) }} hPa</h2>
    <h2>Humidity: {{ data.weatherInfo.main.humidity }}%</h2>
  </div>
</template>

<script>
import { useWeatherApi } from "../composables/useWeatherApi";

export default {
  setup() {
    const { data, getWeather } = useWeatherApi();

    return { data, getWeather };
  },
};
</script>

<style lang=scss scoped>
@import "@/Sass/_variables.scss";

.data-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em auto 0 auto;
  padding: 2em;
  width: 300px;
  height: 500px;
  border-radius: 0.5em;
  background: $data-bcg;
  color: $font-color;
}
.data-wrapper > h2:not(.current-temp) {
  margin-top: 0.8em;
}
.search-input {
  font-size: 1rem;
  padding: 0.4em;
  border: none;
  border-radius: 0.2em;
  background: $data-bcg;
  text-align: center;
}
.search-input::placeholder {
  font-size: 0.8rem;
}
.search-input,
.search-input::placeholder {
  color: $font-color;
}
.search-input,
.wrapper {
  box-shadow: $box-shadow;
}
.city {
  margin-bottom: 0.8em;
}
.current-temp {
  font-size: 4rem;
}
.current-temp + h2 {
  margin-top: 1em;
}
</style>