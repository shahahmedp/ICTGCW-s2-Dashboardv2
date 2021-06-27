import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';

const Table = () => {
    const products = [
        {State: 'Maharastra', villages: 'Banvadi'},
        {State: 'Maharastra', villages: 'Pimpalwadi'},
        {State: 'Maharastra', villages: 'Chorambe'},
        {State: 'Maharastra', villages: 'Chorambe'},
        {State: 'Maharastra', villages: 'Tikekarwad'},
        {State: 'Maharastra', villages: 'Lavhi Bk'},
        {State: 'Andhra Pradesh', villages: 'Chiluvuru '},
        {State: 'Maharastra', villages: 'Manchikallupudi'},
        {State: 'Maharastra', villages: 'K. R. Konduru'},
        {State: 'Maharastra', villages: 'Singupalem'},
        {State: 'Maharastra', villages: 'Penumudi'},
        {State: 'Maharastra', villages: 'Karumuru'},
        {State: 'Maharastra', villages: 'Bethapudi'},
        {State: 'Maharastra', villages: 'Pedakakani'},
        {State: 'Maharastra', villages: 'PedakVenigandlaakani'},
        {State: 'Maharastra', villages: 'Dandamudi'},
        {State: 'Maharastra', villages: 'Gopalapuram'},
        {State: 'Maharastra', villages: 'Gorijavolu'},
        {State: 'Maharastra', villages: 'Kanaparru'},
        {State: 'Maharastra', villages: 'Visweswaram'},
        {State: 'Manipur', villages: 'Thaoroijam'},
        {State: 'Manipur', villages: 'YarouBamdiar'},
        {State: 'Manipur', villages: 'Lairenjam'},
        {State: 'Manipur', villages: 'WakchingKhullen'},
        {State: 'Manipur', villages: 'Salam Keikhu'}
    ];
    const columns = [
        {
            dataField: 'State',
            text: 'state',
            filter: textFilter({})
        },
        {
            dataField: 'villages',
            text: 'villages'
        },
        {
            dataField: 'types',
            text: 'Types',
            filter: textFilter({})
        },
        {
            dataField: 'status',
            text: 'Status'
        },
        {
            dataField: 'Source',
            text: 'Source',
            filter: textFilter({})
        }
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
