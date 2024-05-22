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
        set({ blogList: res.data.data.docs });
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  },

  // blog list with pagination 
  blog: [],
  totalPages: 1,
  currentPage: 1,
  fetchBlog : async ( page =1, limit = 10) => {
    try {
      let res = await axios.get(`${BASE_URL}/blog?page=${page}&limit=${limit}`);
      if (res.data["status"]==="success") {
        set({ blog: res.data.data.docs, totalPages: res.data.data.totalPages, currentPage: res.data.data.page });
      }
    }
    catch (e) {
      console.error('Error fetching services:', e);
    }
  },



  blogDetails : null,
  blogById : async (id) => {
    try {
      let res = await axios.get(`${BASE_URL}/blogBy/${id}`);
      if (res.data["status"]==="success") {
        set({ blogDetails: res.data.data });
      }
    }
    catch (e) {
      console.error('Error fetching services:', e);
    }
  },

  // project data is here
  projectList: null,
  projectListRequest: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/project`);
      if (res.data["status"]==="success") {
        set({ projectList: res.data["data"] });
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  }

}))


export default allData;