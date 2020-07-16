import React, { useCallback } from "react";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { GithubActions } from "../../Redux/github/action";

const App: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Button
        label="click"
        handleClick={() => dispatch(GithubActions.Request("sugurusasaki"))}
      />
    </div>
  );
};

export default App;
