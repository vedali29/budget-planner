import axios from "axios";

//used ExchangeCurrency api to do it
const API_URL = 'https://v6.exchangerate-api.com/v6/da4d7f9301c08b9ef4b19434/latest/USD';

export const getConversionRates = async (currency) => {
    try {
      const response = await axios.get(`${API_URL}${currency}`);
      return response.data.rates; // `rates` is the field that contains conversion rates
    } catch (error) {
      console.error("Error fetching conversion rates", error);
      throw error;
    }
};