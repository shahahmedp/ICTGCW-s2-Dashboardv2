import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory /* , {textFilter}  */ from 'react-bootstrap-table2-filter';
//  import {Button} from 'react-bootstrap';
//  import {Link} from 'react-router-dom';

const Table = () => {
    const products = [
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
    ];
    const columns = [
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
            sort: true
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
//  formatter: this.linkFollow,
//  return <Button>click me</Button>;
/*  const test = () => {
        return (
            <Link to="/GlobalM" className="brand-link">
                <Button
                    onClick={() => {
                        console.log('row company');
                    }}
                >
                    ClickMe
                </Button>
            </Link>
        );
    };  */
/*  
  <Link to="/GlobalM" className="brand-link">
                <Button
                    onClick={() => {
                        console.log('row company');
                    }}
                >
                    ClickMe
                </Button>
            </Link> */
/*  const test = () => {

    console.log('hello');
    return <Button>click me</Button>;
};  */
