import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';

const Table = () => {
    const products = [
        {company: 'Agua Wireless', State: 'Haryana', villages: 2},
        {
            company: 'Kritsnam Technologies',
            State: 'Andhra_Pradesh',
            villages: 3
        },
        {company: 'Ronds Technologies', State: 'Haryana', villages: 3}
    ];
    const columns = [
        {
            dataField: 'company',
            text: 'Company Name',
            filter: textFilter({})
        },
        {
            dataField: 'State',
            text: 'Location'
        },
        {
            dataField: 'villages',
            text: 'Villages'
        }
    ];
    return (
        <BootstrapTable
            class="text-center p-2 mb-2 bg-danger text-white"
            keyField="id"
            data={products}
            columns={columns}
            filter={filterFactory()}
        />
    );
};
export default Table;
/*  
onClick: (cell, row, rowIndex, formatExtraData) => {
            console.log(cell, row, rowIndex, formatExtraData);
            return (
                <Button
                    onClick={() => {
                        console.log('hello from button');
                    }}
                >
                    Follow
                </Button>
            );
        }
    };
 */
/*  import React from 'react';
//  import ReactDOM from 'react-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//  import filterFactory, {textFilter} from 'react-bootstrap-table2-filter';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class TableGreen extends React.Component {
    constructor() {
        super();
        this.State = {
            products: [
                {
                    company: 'GlobalM',
                    State: 'Maharastra',
                    villages: 5
                },
                {
                    company: 'GlobalM',
                    State: 'Andhra Pradesh',
                    villages: 14
                },
                {
                    company: 'GlobalM',
                    State: 'Manipur',
                    villages: 5
                },
                {
                    company: 'Greenvironment',
                    State: ' Gujrat',
                    villages: 9
                },
                {
                    company: 'Greenvironment',
                    State: 'Manipur',
                    villages: 2
                },
                {
                    company: 'Rydot Infotech',
                    State: 'Gujrat',
                    villages: 9
                },
                {
                    company: 'Rydot Infotech',
                    State: 'Manipur',
                    villages: 1
                },
                {
                    company: 'Rydot Infotech',
                    State: 'Rajasthan',
                    villages: 4
                },
                {
                    company: 'Rydot Infotech',
                    State: 'Uttar Pradesh',
                    villages: 9
                },
                {
                    company: 'Eyenetaqua Solutions',
                    State: 'Haryana',
                    villages: 10
                },
                {
                    company: 'Eyenetaqua Solutions',
                    State: 'Manipur',
                    villages: 1
                },
                {
                    company: 'Eyenetaqua Solutions',
                    State: 'Rajasthan',
                    villages: 11
                }
            ],
            columns: [
                {
                    dataField: 'company',
                    text: 'Company',
                    sort: true
                },
                {
                    dataField: 'State',
                    text: 'State',
                    sort: true
                },
                {
                    dataField: 'villages',
                    text: 'Villages',
                    sort: true
                },
                {
                    dataField: 'follow',
                    text: 'Follow',
                    formatter: this.linkFollow,
                    sort: true
                }
            ]
        };
    }

    linkFollow = (cell, row, rowIndex, formatExtraData) => {
        console.log(cell, row, rowIndex, formatExtraData);
        const navigate = `/ ${row.company}`;
        console.log('navigate', navigate);
        return (
            <Link to="/GlobalM" className="brand-link">
                <Button
                    onClick={() => {
                        console.log(row.company);
                    }}
                >
                    ClickMe
                </Button>
            </Link>
        );
    };

    render() {
        return (
            <div style={{padding: '20px'}}>
                <h1 className="h2">Products</h1>
                <BootstrapTable
                    keyField="id"
                    data={this.State.products}
                    columns={this.State.columns}
                />
            </div>
        );
    }
}
export default TableGreen;
    */
