import React from 'react';

import NoticeCard from '../../components/NoticeCard/NoticeCard';
import Spinner from '../../components/Spinner/Spinner';

export default function AdminNoticeBoard(props) {
  const { notices, noticesError, onDeleteNotice } = props;

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
            { notices && notices.map((notice) => (
              <NoticeCard
                id={notice.id}
                admin
                onDeleteNotice={onDeleteNotice}
                key={notice.id}
                title={notice.title}
                description={notice.description}
                to={notice.name}
              />
            )) }
          </div>
        )}
    </>
  );
}
