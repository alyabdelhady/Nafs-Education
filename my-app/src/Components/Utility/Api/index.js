import axios from "axios";

export const getCountriesData = () =>
  axios.get(
    `https://nafes.app/revision/revision-php/ws/appStatistics/StudentStatisticsWS.php?method=getAllStatisticsCount`
  );

export const getCountryData = (id) =>
  axios.get(
    `https://nafes.app/revision/revision-php/ws/appStatistics/StudentStatisticsWS.php?method=getAllStatisticsCountForCountry&countryId=${id}`
  );
