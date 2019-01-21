import * as React from 'react';

export interface Props {
    name: string;
    value: any;
}


class DataListItem extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const { name, value } = this.props;
        return (
            <li className="data-list-item">
                <div className="data-name"> <span>{name}</span> </div>
                <div className="data-value"> <span>{value}</span> </div>
            </li>
        );
    };
}


export default DataListItem;