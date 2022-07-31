import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);


const handToInt = {'ROCK': 0, 'PAPER': 1, 'SCISSORS': 2};
const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};

function App() {
  const [myAcc, setMyAcc] = React.useState({
    view: 'ConnectAccount',
    ...defaults
  });

  React.useEffect(async () => {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    setMyAcc({acc, bal});
    if (await reach.canFundFromFaucet()) {
      setMyAcc({view: 'FundAccount'});
    } else {
      setMyAcc({view: 'DeployerOrAttacher'});
    }
  })

  return(
    <AppViews/>
  )
}