import axios, { AxiosResponse } from "axios"

interface responseData {
  numbers: number[]
}

// if the url is ivalid the axios client will throw an error and return empty array
export const getNumbersFromURL = async (url: string): Promise<number[]> => {
  try {
    const { data }: AxiosResponse<responseData> = await axios.get(url);
    return data.numbers
  } catch (err) {
    return []
  }
}