import { logError, msgError } from "../../../common/utils";
import { createMeeting } from "../../../infrastructure/home";

const actions = {
  setLoading:
    (loading) =>
    ({ setState }) => {
      setState({ loading });
    },

  setVisible:
    (params) =>
    ({ setState }) => {
      setState({ visible: params });
    },

  onfinish:
    (values, date, time) =>
    async ({ setState, dispatch }) => {
      console.log(values, date, time);
      var date_formated = date + "T" + time + ":00Z";
      var data = {
        start_time: date_formated,
        topic: values.topic,
        password: values.password,
      };
      try {
        dispatch(actions.setVisible(false));
        const response = await createMeeting(data);
        window.prompt(
          "Copy to clipboard: Ctrl+C, Enter",
          `${response.start_url}`
        );
      } catch (error) {
        logError(error, "getJobCardList()");
        msgError(error);
      } finally {
        dispatch(actions.setLoading(false));
      }
    },

  create:
    () =>
    async ({ dispatch }) => {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      var d = new Date(); // for now
      d.getHours(); // => 9
      d.getMinutes(); // =>  30
      d.getSeconds(); // => 51
      today = yyyy + "-" + mm + "-" + dd;
      var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getMinutes();
      var date_formated = today + "T" + time + "Z";
      var data = {
        start_time: date_formated,
        topic: "Zoom meeting",
        password: "123455",
      };
      try {
        const response = await createMeeting(data);
        console.log("response", response);
        window.open(response.start_url);
      } catch (error) {
        logError(error, "getJobCardList()");
        msgError(error);
      } finally {
        dispatch(actions.setLoading(false));
      }
    },
};

export default actions;
