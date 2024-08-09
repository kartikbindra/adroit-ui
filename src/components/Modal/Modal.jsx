import React, { useState } from 'react';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';
import { cva } from 'class-variance-authority';
import { cn } from '../utils';


export const Modal = ({ trigger, title, description, modalCancel, modalAction, ...props}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Modal Trigger Button */}
      {/* <button
        onClick={toggleModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        Open Modal
      </button> */}
      {/* <Button onClick={toggleModal} label={'Open Modal'}/> */}
      <div onClick={toggleModal}>{trigger}</div>


      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-overlay-8"
            onClick={toggleModal}
          ></div>
          
          <div className="relative bg-white p-6 rounded-sm shadow-lg z-10 w-[50%]">
            <p className="text-lg mb-2 font-semibold">{title}</p>
            <p className="text-sm mb-4 text-neutral-11">{description}</p>
            {/* <button
              onClick={toggleModal}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            >
              Close Modal
            </button> */}
            <div className="w-full flex justify-end gap-2">
              <div onClick={toggleModal}>{modalCancel}</div>
              <div>{modalAction}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Modal.propTypes = {
  trigger: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  modalCancel: PropTypes.node,
  modalAction: PropTypes.node,
};

Modal.defaultProps = {
  trigger: <Button label={'Open Modal'}/>,
  title: 'Are your sure?',
  description: 'This action cannot be undone. Are you sure you want to continue?',
  modalCancel: <Button label={'Cancel'} variant={'outline-neutral'}/>,
  modalAction: <Button label={'Continue'}/>,
};

