import axios from "axios";

const onPostClick = async () => {
    await axios.post("/pages/upload", {
      headers: { "Content-Type": "application/json" },
      data: {
        title,
        imageUrl,
        createdAt: new Date(createdAt),
    }
    });
  };

export default onPostClick;