import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';

const Table = () => {
    const products = [
        {State: 'Maharashtra', villages: 'Banvadi'},
        {State: 'Maharashtra', villages: 'Pimpalwadi'},
        {State: 'Maharashtra', villages: 'Chorambe'},
        {State: 'Maharashtra', villages: 'Chorambe'},
        {State: 'Maharashtra', villages: 'Tikekarwad'},
        {State: 'Maharashtra', villages: 'Lavhi Bk'},
        {State: 'Andhra Pradesh', villages: 'Chiluvuru '},
        {State: 'Andhra Pradesh', villages: 'Manchikallupudi'},
        {State: 'Andhra Pradesh', villages: 'K. R. Konduru'},
        {State: 'Andhra Pradesh', villages: 'Singupalem'},
        {State: 'Andhra Pradesh', villages: 'Penumuli'},
        {State: 'Andhra Pradesh', villages: 'Penumudi'},
        {State: 'Andhra Pradesh', villages: 'Karumuru'},
        {State: 'Andhra Pradesh', villages: 'Bethapudi'},
        {State: 'Andhra Pradesh', villages: 'Pedakakani'},
        {State: 'Andhra Pradesh', villages: 'Venigandla'},
        {State: 'Andhra Pradesh', villages: 'Dandamudi'},
        {State: 'Andhra Pradesh', villages: 'Gopalapuram'},
        {State: 'Andhra Pradesh', villages: 'Kanaparru'},
        {State: 'Andhra Pradesh', villages: 'Visweswaram'},
        {State: 'Andhra Pradesh', villages: 'Gorijavolu'},
        {State: 'Manipur', villages: 'Thaoroijam'},
        {State: 'Manipur', villages: 'YarouBamdiar'},
        {State: 'Manipur', villages: 'Lairenjam'},
        {State: 'Manipur', villages: 'WakchingKhullen'},
        {State: 'Manipur', villages: 'Salam Keikhu'}
    ];
    const columns = [
        {
            dataField: 'State',
            text: 'State  ',
            filter: textFilter({})
        },
        {
            dataField: 'villages',
            text: 'Villages'
        },
        /* ,
        {
            dataField: 'types',
            text: 'Types',
            filter: textFilter({})
        },  */
        {
            dataField: 'status',
            text: 'Status'
        }
        /*  ,
        {
            dataField: 'Source',
            text: 'Source',
            filter: textFilter({})
        }   */
    ];
    return (
        <BootstrapTable
            class="text-center p-2 mb-2 text-white"
            keyField="id"
            data={products}
            columns={columns}
            filter={filterFactory()}
        />
    );
};
export default Table;
