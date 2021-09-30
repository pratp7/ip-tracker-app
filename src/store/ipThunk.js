import { ipActions } from "./ipSlice";

export const fetchData = (API) => {
  return async (dispatch) => {
    const ipFetching = async () => {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Failed to fetch data!");
      }
      const data = await response.json();
      // console.log(data);
      return data;
    };
    try {
      const ipdata = await ipFetching();
      dispatch(
        ipActions.detailsIP({
          ip: ipdata.ip,
          city: ipdata.location.city,
          country: ipdata.location.country,
          timezone: ipdata.location.timezone,
          isp: ipdata.isp,
          lat: ipdata.location.lat,
          lng: ipdata.location.lng,
        })
      );
      dispatch(ipActions.errorHandle(""));
    } catch (err) {
      console.log(err);
      dispatch(ipActions.errorHandle("Invalid Search!!"));
    }
  };
};
