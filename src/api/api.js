import axios from "axios";
import { create } from "zustand";



const BASE_URL = "http://localhost:8000/api/v1"


const serviceData = create((set)=> ({
    serviceList: [],

  serviceRequestList: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/service`);
      set({ serviceList: res.data.data });
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  },
}))


export default serviceData;