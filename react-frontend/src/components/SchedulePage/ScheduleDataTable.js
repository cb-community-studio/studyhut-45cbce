
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const ScheduleDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.subject}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.timeStart}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.timeEnd}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.day}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.place}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="subject" header="Subject" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="timeStart" header="Start Time" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="timeEnd" header="End Time" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="day" header="Day" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="place" header="Place" body={pTemplate4} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default ScheduleDataTable;