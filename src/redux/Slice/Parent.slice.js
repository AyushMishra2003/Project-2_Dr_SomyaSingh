import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance1 from "../../helper/axiosInstace";
// import { toast } from "sonner";

const initialState = {
  loading: false,
  error: null,
  dynamicPage: [],
  sections: [],
  specificSection: [],
  inquiryList: [],
  vendorList:[],
  openModel: false,
};

export const getAllPages = createAsyncThunk(
  "discounts/getCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance1.get(`/dynamic`);
      console.log(response);

      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add discount");
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSections = createAsyncThunk(
  "discounts/section",
  async (name, { rejectWithValue }) => {
    try {
      console.log(name);

      const response = await axiosInstance1.get(`/dynamic/${"Blog"}`);
      console.log(response);

    
      console.log(response?.data?.section);
      
      return response.data.sections;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add discount");
      return rejectWithValue(error.response.data);
    }
  }
);

export const modelOpen = createAsyncThunk(
  "discounts/section",
  async (_, { rejectWithValue }) => {
    console.log("model open called");
    console.log(openModel);
    openModel = !openModel;
    console.log(openModel);
  }
);

export const addSections = createAsyncThunk(
  "discounts/section",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);

      const formData = new FormData();

      formData.append("title", data?.title);
      formData.append("description", data?.description);
      formData.append("photo", data?.photo);
      formData.append("page", data?.page);

      const response = await axiosInstance1.post(`/dynamic/section`, formData);
      console.log(response);

      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add Section");
      return rejectWithValue(error.response.data);
    }
  }
);

export const getInquiry = createAsyncThunk(
  "discounts/inquiry",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance1.get(`/inquiry`);
      console.log(response);

      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add Section");
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteInquiry = createAsyncThunk(
  "discounts/inquiry",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance1.delete(`/inquiry/${id}`);
      console.log(response);

      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add Section");
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteAllInquiry = createAsyncThunk(
  "discounts/All/Inquiry",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance1.delete(`/inquiry/delete/all`);
      console.log(response);

      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add Section");
      return rejectWithValue(error.response.data);
    }
  }
);

export const addChild = createAsyncThunk(
  "discounts/section/chid",
  async ({ data, child }, { rejectWithValue }) => {
    try {
      console.log(data);
      console.log(child);

      const formData = new FormData();
      formData.append("title", data?.title);
      formData.append("description", data?.description);
      formData.append("photo", data?.photo);

      const response = await axiosInstance1.post(
        `/dynamic/child/${child}`,
        formData
      );
      console.log(response);

      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add Section");
      return rejectWithValue(error.response.data);
    }
  }
);

export const getSpecificSection = createAsyncThunk(
  "discounts/specificSection",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);

      const response = await axiosInstance1.post(`/dynamic/get/section`, data);
      console.log(response);

      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add discount");
      return rejectWithValue(error.response.data);
    }
  }
);


export const getVendor = createAsyncThunk(
  "discounts/vendor",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance1.get(`/vendor`);
      console.log(response);

      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to Get Vendor");
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteVendor = createAsyncThunk(
  "discounts/vendor",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance1.delete(`/vendor/${id}`);
      console.log(response);

      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add Section");
      return rejectWithValue(error.response.data);
    }
  }
);

export const addVendor = createAsyncThunk(
  "discounts/section",
  async (vendorData, { rejectWithValue }) => {
    try {

      const response = await axiosInstance1.post(`/vendor`, vendorData);
      console.log(response);

      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add Section");
      return rejectWithValue(error.response.data);
    }
  }
);


export const submitInquiry = createAsyncThunk(
    "discounts/submit/inquiry",
    async (inquiryData, { rejectWithValue }) => {
      try {
  

        console.log(inquiryData);
        
        // const response = await axiosInstance1.post(`/contact`, inquiryData);

        const response=await axiosInstance1.post("/inquiry",inquiryData)
  
  
        // toast.success(response.data.message);
        return response.data;
      } catch (error) {
        toast.error(error?.response?.data?.message || "Failed to add Section");
        return rejectWithValue(error.response.data);
      }
    }
);


const parentSlice = createSlice({
  name: "dynamicList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSections.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSpecificSection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getInquiry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVendor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPages.fulfilled, (state, action) => {
        state.loading = false;
        state.dynamicPage = action?.payload?.data;
      })
      .addCase(getSections.fulfilled, (state, action) => {
        console.log(action);

        state.loading = false;
        console.log(action);
        
        state.sections = action?.payload
      })
      .addCase(getSpecificSection.fulfilled, (state, action) => {
        console.log(action);

        state.loading = false;
        state.specificSection = action?.payload?.section?.children;
        console.log(state.specificSection);
      })
      .addCase(getInquiry.fulfilled, (state, action) => {
        console.log(action);

        state.loading = false;
        state.inquiryList = action?.payload?.data;
      })
      .addCase(getVendor.fulfilled, (state, action) => {
        console.log(action);

        state.loading = false;
        state.vendorList = action?.payload?.data;
        console.log(state.vendorList);
        
      })
      .addCase(getAllPages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSections.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getSpecificSection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getInquiry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default parentSlice.reducer;
