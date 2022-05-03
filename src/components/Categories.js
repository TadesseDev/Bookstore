import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  const handelCheckStatus = (event) => {
    dispatch(checkStatus(event.target.getAttribute('id')));
  };

  return (
    <div>
      {status}
      <button
        type="submit"
        id="CHECK_STATUS"
        onClick={handelCheckStatus}
      >
        Check status
      </button>
    </div>
  );
}
