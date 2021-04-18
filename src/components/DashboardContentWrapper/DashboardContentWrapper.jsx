import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { Result } from 'antd';

import Card from '../Card/Card';
import Button from '../Button/Button';
import DashboardContentCard from '../DashboardContentCard/DashboardContentCard';
import Spinner from '../Spinner/Spinner';

export default function DashboardContentWrapper(props) {
  const history = useHistory();
  const {
    title, redirectTo, data, error, onDelete, admin,
  } = props;

  let render = (<div>No data found</div>);
  if (!data && !error) {
    render = (
      <div className="flex flex-col space-y-3 justify-center items-center h-full w-full">
        <div>
          <Spinner />
        </div>
        <div className="font-medium">
          Please wait...
        </div>
      </div>
    );
  } else if (error) {
    render = (
      <div>We could not get data</div>
    );
  } else if (data.length >= 1) {
    render = (
      <>
        { data.map((item) => (
          <DashboardContentCard
            key={item.id}
            title={item.name}
            id={item.id}
            onDelete={onDelete}
            item={item}
            admin={admin}
          />
        ))}
      </>
    );
  } else if (data.length === 0) {
    render = (
      <Result
        title="No data found!"
      />
    );
  }

  return (
    <Card className="flex flex-col space-y-5">
      <div className="flex flex-row space-x-3 items-center justify-between">
        <div className="font-medium text-lg">{title}</div>
        {admin
          ? (
            <Button
              sm
              rounded
              icon={<GoPlus size={15} />}
              onClick={() => history.push(redirectTo)}
            >
              Add
            </Button>
          ) : null }
      </div>
      <div className="grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
        {render}
      </div>
    </Card>
  );
}
