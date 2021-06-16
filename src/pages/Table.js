import Card from '@app/../node_modules/react-bootstrap/esm/Card';
import React from 'react';
import Data from '../data/Data.json';

const Table = () => {
    return Data.map((data) => {
        return (
            <Card Key={data.id}>
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.stockPrice}</Card.Text>
                    <a
                        className="btn-primary"
                        href={data.timeElapsed}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Download
                    </a>
                </Card.Body>
            </Card>
        );
    });
};
export default Table;
