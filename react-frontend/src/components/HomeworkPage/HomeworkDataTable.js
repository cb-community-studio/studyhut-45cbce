
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Rating } from 'primereact/rating';
import { Checkbox } from 'primereact/checkbox';


const HomeworkDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.subject}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.description}</p>
    const calendarTemplate2 = (rowData, { rowIndex }) => <Calendar className="w-20rem" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(rowData.dueDate)} showTime ></Calendar>
    const ratingTemplate3 = (rowData, { rowIndex }) => <Rating stars={5} style={{width:"20rem"}} value={rowData.priority} cancel={false}  />
    const checkboxTemplate4 = (rowData, { rowIndex }) => <Checkbox checked={rowData.isDone}  ></Checkbox>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="subject" header="Subject" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="description" header="Description" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="dueDate" header="Due date" body={calendarTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="priority" header="Priority" body={ratingTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="isDone" header="Completed" body={checkboxTemplate4} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default HomeworkDataTable;