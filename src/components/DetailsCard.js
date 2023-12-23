import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DetailsCard(props) {

  const jsonData = [
    { "id": 1, "name": "task 1" },
    { "id": 2, "name": "task 2" },
    { "id": 3, "name": "task 3" }
  ];

  const propsValue = props.data;
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <div>
      {jsonData.map(item => (
        <Card key={item.id} style={{ margin: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <CardContent style={{ display: 'flex', alignItems: 'center' }}>
            {propsValue.includes("home") ? (
              <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
            ) : null}
            <span style={{ marginLeft: '8px', textTransform: 'uppercase' }}>
              {item.name}
            </span>
          </CardContent>
          <div>
            {propsValue.includes("home") ? (
              <div>
                <IconButton aria-label="edit" onClick={() => onEdit(task)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => onDelete(task)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ) : (
              null
            )}
            {propsValue.includes("complete") ? (
              <div>
                <IconButton aria-label="delete" onClick={() => onDelete(task)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ) : (
              null
            )}
            {propsValue.includes("trash") ? (
              null
            ) : (
              null
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}