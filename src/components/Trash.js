import React, { useState } from 'react';
import FloatingActionButton from './FloatingAddButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Trash() {
    return (
        <div>
        <Card style={{ margin: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CardContent style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginLeft: '8px', textTransform: 'uppercase' }}>
              Hello
              </span>
        </CardContent>
        <div>
        </div>
      </Card>
      <Card style={{ margin: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <CardContent style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginLeft: '8px', textTransform: 'uppercase' }}>
              Hello2
              </span>
        </CardContent>
        <div>
        </div>
      </Card>
       <FloatingActionButton/>
       </div>
    );
}