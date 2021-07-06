import React from 'react';
//  import BootstrapTable from 'react-bootstrap-table-next';
//  import filterFactory from 'react-bootstrap-table2-filter';
import {Scrollbars} from 'react-custom-scrollbars';
import {JsonToTable} from 'react-json-to-table';

const Area = () => {
    const myJson = [
        {
            Area: 'District Name',
            Banivadi: 'Satara'
        },
        {
            Area: 'Block Name',
            Banivadi: 'Karad'
        },
        {
            Area: 'Population',
            Banivadi: '174'
        },
        {
            Area: 'Number of Households',
            Banivadi: '30'
        },
        {
            Area: 'Scheme Type',
            Banivadi: 'SVC: Spring Soutrce - Gravity'
        },
        {
            Area: 'Year of Commisioning',
            Banivadi: '2020-21'
        },
        {
            Area: 'numbers of units installed',
            Banivadi: '10'
        },
        {
            Area: 'Water Source',
            Banivadi: '-'
        },
        {
            Area: 'Hours of Supply',
            Banivadi: '24 hours'
        },
        {
            Area: 'Treatement',
            Banivadi: 'Basic Chlorination'
        },
        {
            Area: 'Storage Reservoir Cpacity',
            Banivadi: '7.50 KL'
        },
        {
            Area: 'Target Daily Supply',
            Banivadi: '9.57 KL'
        }
    ];
    return (
        <Scrollbars style={{height: 450}}>
            <JsonToTable
                json={myJson}
                onClick
                style={{width: 800}}
                className="border border-info"
            />
        </Scrollbars>
    );
};
export default Area;
