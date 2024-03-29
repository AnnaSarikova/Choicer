import {Button} from '@mui/material';
import React, {useState} from 'react';
import './Works.css';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {routes} from '../../Root';
import {IStore} from '../../store';

export const Works = () => {
  const user = useSelector((state: IStore) => state.user);
  const [activeTab, setActiveTab] = useState('blank');

  const setTab = (tabName: string): void => {
    setActiveTab(tabName);
  }

  const classWithActiveTab = (tabName: string): string => {
    let res = 'works__tab';
    if (activeTab === tabName) res += ' active';
    return res;
  }

  return (
      <>
        <div className="works__create-work">
          {user.role === 'admin' ? <Link to={routes.createWork}>
            <Button variant="outlined" sx={{border: '2px solid #FDD05A', borderRadius: '40px'}}>
              Создать работу
            </Button>
          </Link> : null}
        </div>
        <div className="works__tabs p3--line-height">
          <div className={classWithActiveTab('blank')} onClick={() => setTab('blank')}>
            Активные
          </div>
          <div className={classWithActiveTab('waiting')} onClick={() => setTab('waiting')}>
            В ожидании
          </div>
          <div className={classWithActiveTab('process')} onClick={() => setTab('process')}>
            На распределении
          </div>
          <div className={classWithActiveTab('complete')} onClick={() => setTab('complete')}>
            Завершенные
          </div>
        </div>
        <div className="works__list">
          <div className="works__list-empty p2--light">Темы еще не созданы</div>
        </div>
      </>
  );
}