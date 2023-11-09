import axios from "axios";

const onGetClick = async () => {
    const { data } = await axios.get("/api/users");
    console.log(data);
};

export default onGetClick;
