import { useReducer } from "react";

const inputRedducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      const updatedState = {
        ...state,
        currOption: action.currSelection,
        optionsStatus: {
          ...state.optionsStatus,
          [action.currSelection]: action.checked,
        },
      };

      return updatedState;
    }

    case "RESET-OPTIONS-STATUS": {
      const updatedState = {
        ...state,
        optionsStatus: {
          ...state.optionsStatus,
          [action.option]: false,
        },
      };
      return updatedState;
    }

    case "RESET-CURR-OPTION": {
      const updatedState = {
        ...state,
        currOption: action.option,
      };
      return updatedState;
    }

    default:
      return state;
  }
};

export const useOptionsState = (options, currOption = "") => {
  const initialOptionsStatus = options.reduce((options, option) => {
    options[option] = false;
    return options;
  }, {});

  const [optionsState, dispatch] = useReducer(inputRedducer, {
    currOption: currOption,
    optionsStatus: initialOptionsStatus,
  });

  const updateOption = (e) => {
    dispatch({
      type: "CHANGE",
      currSelection: e.target.value,
      checked: e.target.checked,
    });
  };

  const resetOptionsStatus = (option) => {
    dispatch({
      type: "RESET-OPTIONS-STATUS",
      option,
    });
  };
  
  const resetCurrOption = (option) => {
    dispatch({
      type: "RESET-CURR-OPTION",
      option,
    });
  };

  return { optionsState, updateOption, resetOptionsStatus, resetCurrOption };
};
