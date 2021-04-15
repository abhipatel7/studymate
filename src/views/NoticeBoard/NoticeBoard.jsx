import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { GoPlus } from 'react-icons/go';
import { Modal } from 'antd';
import useSWR from 'swr';
import { toast } from 'react-toastify';

import { deleteNotice, createNotice, getNotice } from '../../api/notice';
import { getDepartments } from '../../api/department';
import { getTermsByDepartment } from '../../api/term';

import ROLES from '../../ROLES';
import PageTitle from '../../components/PageTitle/PageTitle';
import AdminNoticeBoard from './AdminNoticeBoard';
import StudentNoticeBoard from './StudentNoticeBoard';
import FacultyNoticeBoard from './FacultyNoticeBoard';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

export default function NoticeBoard() {
  const role = useSelector((state) => state.user.role);

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [department, setDepartment] = useState('');
  const [term, setTerm] = useState('');

  const { data: departments, error } = useSWR('/department', getDepartments, {
    revalidateOnFocus: false,
    onError: (err) => toast.error(err.msg),
  });

  const { data: terms, error: termError } = useSWR(department ? `/term/department/${department}` : null, getTermsByDepartment, {
    revalidateOnFocus: false,
    onError: (err) => toast.error(err.msg),
  });

  const { data: notices, error: noticesError, mutate: noticesMutation } = useSWR('/noticeboard', getNotice);

  const onCreateNotice = async (e) => {
    e.preventDefault();
    setConfirmLoading(true);
    if (title.trim() === '' || description.trim() === '' || !department || !term) {
      toast.error('Invalid input');
      setConfirmLoading(false);
    } else {
      try {
        await createNotice(title, description, department, term);
        noticesMutation();
        setVisible(false);
        setConfirmLoading(false);
        toast.success('Successfully created notice');
      } catch (err) {
        toast.error(err.msg);
        setConfirmLoading(false);
      }
    }
  };

  const onDeleteNotice = async (id) => {
    try {
      await deleteNotice(id);
      noticesMutation();
      toast.success('Notice deleted successfully');
    } catch (err) {
      toast.error(err.msg);
    }
  };

  let render = null;
  if (role === ROLES.admin) {
    render = (
      <AdminNoticeBoard
        notices={notices}
        noticesError={noticesError}
        onDeleteNotice={onDeleteNotice}
      />
    );
  } else if (role === ROLES.student) {
    render = (
      <StudentNoticeBoard
        notices={notices}
        noticesError={noticesError}
      />
    );
  } else if (role === ROLES.faculty) {
    render = (
      <FacultyNoticeBoard
        notices={notices}
        noticesError={noticesError}
      />
    );
  }

  return (
    <div className="flex flex-col p-5 space-y-3 h-full">
      <div className="flex flex-row justify-between">
        <PageTitle>Notice Board</PageTitle>
        { role === ROLES.admin ? (
          <Button
            sm
            rounded
            icon={<GoPlus size={15} />}
            onClick={() => setVisible(true)}
          >
            Add
          </Button>
        ) : null }
      </div>
      {render}
      <Modal
        title="Add Notice"
        okText="Add"
        okButtonProps={{ htmlType: 'submit', form: 'myForm' }}
        visible={visible}
        onOk={onCreateNotice}
        confirmLoading={confirmLoading}
        onCancel={() => setVisible(false)}
      >
        <form
          className="flex flex-col space-y-2 justify-center items-center"
          id="myForm"
        >
          <Input
            name="Title"
            type="text"
            value={title}
            placeholder="Title"
            handleChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full rounded px-3 py-2 border outline-none border-customGray bg-gray-100"
            name="Description"
            rows="4"
            cols="5"
            value={description}
            placeholder="Description..."
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex flex-row space-x-3 items-center justify-center w-full">
            <select
              name="department"
              value={department}
              className="w-1/2"
              onChange={(e) => setDepartment(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Department
              </option>
              { departments && departments.map(((depart) => (
                <option key={depart.id} value={depart.id}>{depart.name}</option>
              ))) }
            </select>
            <select
              name="term"
              value={term}
              className="w-1/2"
              onChange={(e) => setTerm(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Term
              </option>
              { terms && terms.map(((crrTerm) => (
                <option key={crrTerm.id} value={crrTerm.id}>Term {crrTerm.name}</option>
              ))) }
            </select>
          </div>
        </form>
      </Modal>
    </div>
  );
}
