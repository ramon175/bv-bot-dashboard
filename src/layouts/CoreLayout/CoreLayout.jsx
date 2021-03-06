import React from 'react';
import 'styles/core.scss';
import classes from './CoreLayout.scss';
import FakeActionsPane from './FakeActionsPane';

export const CoreLayout = ({ children }) => (
  <div className={classes.layoutWrapper}>
    <div className={classes.appBar}>
      <img className={classes.logo} src="/bv-logo-novo.png" role="presentation" />
      <span className={classes.title}>BV Bot Painel do Administrador</span>
    </div>
    <div className={classes.mainContainer}>
      <FakeActionsPane />
      <div className={classes.chatContainer} >
        {children}
      </div>
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default CoreLayout;
