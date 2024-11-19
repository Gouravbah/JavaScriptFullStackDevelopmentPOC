import DataTableService from "../../services/service";

export const GetAction = () => async (dispatch) => {
  try {
    const res = await DataTableService.dataCall();
    dispatch({
      type: "Get_API",
      payload: res.data,
    });
    return { data: res.data };
  } catch (err) {
    console.log(err);
  }
};