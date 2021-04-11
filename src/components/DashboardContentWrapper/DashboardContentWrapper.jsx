import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';

import Card from '../Card/Card';
import Button from '../Button/Button';
import DashboardContentCard from '../DashboardContentCard/DashboardContentCard';

export default function DashboardContentWrapper(props) {
  const history = useHistory();
  const { title, redirectTo, data } = props;

  return (
    <Card className="flex flex-col space-y-5">
      <div className="flex flex-row space-x-3 items-center justify-between">
        <div className="font-medium text-lg">{title}</div>
        <Button
          sm
          rounded
          icon={<GoPlus size={15} />}
          onClick={() => history.push(redirectTo)}
        >
          Add
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-2 lg:grid-cols-3">
        <DashboardContentCard />
        <DashboardContentCard />
        <DashboardContentCard />
        <DashboardContentCard />
        <DashboardContentCard />
        <DashboardContentCard />
        <DashboardContentCard />
        <DashboardContentCard />
      </div>
    </Card>
  );
}
