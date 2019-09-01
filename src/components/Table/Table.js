import React from 'react';
import Button from '../Button'
import './Table.css';

const Table = ({ list, onDismiss }) =>
  <div >
    <table className="table">
      <tr className="table-header">
        <th>Article Title</th>
      </tr>
    {list.map(item =>
        <tr key={item.objectID} className="table-row">
          <td style={{ width: '40%' }}><a href={item.url}>{item.title}</a></td>
          <td style={{ width: '30%' }}>{item.author}</td>
          <td style={{ width: '10%' }}>{item.num_comments}</td>
          <td style={{ width: '10%' }}>{item.points}</td>
          <td>
              <Button
                onClick={() => onDismiss(item.objectID)}
                className="button-inline"
              >
                Dismiss
              </Button>
            </td>
        </tr>
    
    )}
    </table>
  </div>

export default Table;