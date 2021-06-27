import React from 'react';
//  import BootstrapTable from 'react-bootstrap-table-next';
//  import filterFactory from 'react-bootstrap-table2-filter';
import {Scrollbars} from 'react-custom-scrollbars';
import {JsonToTable} from 'react-json-to-table';

const Area = () => {
    const myJson = [
        {
            Area: 'Population',
            Banivadi: '174'
        },
        {
            Area: 'Number of Households',
            Banivadi: 'SVS'
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
            Area: 'Source Name',
            Banivadi: 'Paiyanami Tok(Spring)'
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
        },
        {
            Area: 'VWSC chairman',
            Banivadi: 'Bimal Prasad-8630024634'
        },
        {
            Area: 'Water Traffic',
            Banivadi: 'Nill'
        }
    ];
    return (
        <Scrollbars style={{height: 350}}>
            <JsonToTable
                json={myJson}
                onClick
                style={{width: 800}}
                class="border border-info"
            />
        </Scrollbars>
    );
};
export default Area;
