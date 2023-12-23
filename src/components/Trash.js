import React, { useState } from 'react';
import FloatingActionButton from './FloatingAddButton';
import DetailsCard from './DetailsCard';

export default function Trash(props) {
  return (
    <div>
      <DetailsCard data={props.data} />
      <FloatingActionButton />
    </div>
  );
}