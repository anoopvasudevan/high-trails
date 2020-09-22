import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import Button from "../../shared/components/UIElements/Button";
// import { useOptionsState } from "../../shared/hooks/useOptionsState";
import OptionsList from "./OptionsList";
import classes from "./FilterInput.module.css";

const FilterInput = (props) => {
  const [showOptions, setShowOptions] = useState(false);

  const { title, options, filterType, optionsState, onOptionSelect } = props;

  const buttonClickHandler = () => {
    setShowOptions((state) => !state);
  };

  // const { optionsState, onOptionSelect } = useOptionsState(options);

  return (
    <div className={classes.Container}>
      <div className={classes.TitleContainer} onClick={buttonClickHandler}>
        <p className={classes.Title}>{title}</p>
        <Button
          className={classes.Button}
          size="small"
          inverse
          noborder
          // onClick={buttonClickHandler}
        >
          <div
            className={`${classes.Icon} ${showOptions && classes.IconRotate}`}
          >
            <i className="fas fa-chevron-down"></i>
          </div>
        </Button>
      </div>

      <CSSTransition
        in={showOptions}
        timeout={200}
        classNames={{
          enter: classes.OptionsFormEnter,
          enterActive: classes.OptionsFormEnterActive,
          exit: classes.OptionsFormExit,
          exitActive: classes.OptionsFormExitActive,
        }}
        mountOnEnter
        unmountOnExit
      >
        <OptionsList
          className={classes.OptionsForm}
          title={title}
          options={options}
          type={filterType}
          onSelection={props.onFilter}
          onSortSelection={props.onSort}
          optionsState={optionsState}
          optionSelectHandler={onOptionSelect}
        />
      </CSSTransition>
    </div>
  );
};

export default FilterInput;
