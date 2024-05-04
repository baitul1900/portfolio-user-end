import axios from "axios";
import { create } from "zustand";



const BASE_URL = "http://localhost:8000/api/v1"


const allData = create((set)=> ({
    serviceList: [],

  serviceRequestList: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/service`);
      set({ serviceList: res.data.data });
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  },

  // blog data here
  blogList : null,
  blogListRequest: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/blog`);
      if (res.data["status"]==="success") {
        set({ blogList: res.data.data });
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  }

}))


export default allData;