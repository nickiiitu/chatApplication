import React, { useContext, useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField } from "@mui/material";
import axios from "axios";
import { AuthContext } from "../../context/Auth-context";
const SearchBar = () => {
  const [val, setValue] = useState("");
  const [chosen, setChosen] = useState("");
  const [fetchedOptions, setFetchedOptions] = useState([]);
  const ctx = useContext(AuthContext);
 
  
  useEffect(() => {
    const fun = async () => {
      try {
      const chatId=  await axios.post("http://localhost:5000/api/chat", {
          foundUser: chosen,
          loggedInUserId: ctx.loggerId,
        });
        const result = await axios.get("http://localhost:5000/api/chat", {
          params: { id: ctx.loggerId },
          // params: { id: chatId._id },
        });
        console.log(result.data,"sear");
        ctx.dispatch({
          type: "updateChatList",
          payload: { data: result.data },
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (chosen) {
      fun();
    }
  }, [chosen]);

  const handelChange = async (value) => {
    if (
      (value < 48 && value > 57) ||
      (value < 65 && value > 90) ||
      (value < 97 && value > 122)
    ) {
      return;
    }
    setValue(value);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/user/search?id=${ctx.loggerId}&name=${value}`
      );
      const { data } = res;
      setFetchedOptions(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={fetchedOptions}
        getOptionLabel={(option) => option.name} //since our list of option is object we need name in options only
        sx={{ width: 700 }}
        onChange={(e, option) => setChosen(option)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Movie"
            value={val}
            onChange={(e) => handelChange(e.target.value)}
          />
        )}
      />
    </div>
  );
};
export default SearchBar;
