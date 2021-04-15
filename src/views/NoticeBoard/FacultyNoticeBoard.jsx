import React from 'react';
import { useSelector } from 'react-redux';

import NoticeCard from '../../components/NoticeCard/NoticeCard';
import Spinner from '../../components/Spinner/Spinner';

function FacultyNoticeBoard(props) {
  const { notices, noticesError } = props;
  const departmentId = useSelector((state) => state.user.departmentId);

  return (
    <>
      {!notices && !noticesError
        ? (
          <div className="flex flex-col space-y-3 justify-center items-center h-full">
            <div>
              <Spinner />
            </div>
            <div className="font-medium">
              Please wait...
            </div>
          </div>
        )
        : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            { notices && notices.map((notice) => {
              if (notice.department_id === departmentId) {
                return (
                  <NoticeCard
                    id={notice.id}
                    key={notice.id}
                    title={notice.title}
                    description={notice.description}
                    to={notice.name}
                  />
                );
              }
              return null;
            }) }
          </div>
        )}
    </>
  );
}

export default FacultyNoticeBoard;
