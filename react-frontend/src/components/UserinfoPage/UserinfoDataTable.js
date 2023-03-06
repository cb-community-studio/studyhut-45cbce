
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';


const UserinfoDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const avatarTemplate1 = (rowData, { rowIndex }) => <Avatar image={rowData.avatar}  />
    const badgeTemplate2 = (rowData, { rowIndex }) => <Badge value={rowData.level}  ></Badge>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.points}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="name" header="Name" body={pTemplate0} style={{ minWidth: "8rem" }} />
            <Column field="avatar" header="Avatar" body={avatarTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="level" header="Level" body={badgeTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="points" header="Points" body={pTemplate3} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default UserinfoDataTable;