import React from 'react';
import injectGlobal from '../hoc/global';
import WeekTable from '../components/WeekTable';

const columns = [1,2,3,4,5,6,7,8,9,10,11];

function WeeklyReport() {
  return (
    <WeekTable
      title="本周"
      columns={columns}
    />
  );
}

export default WeeklyReport;
