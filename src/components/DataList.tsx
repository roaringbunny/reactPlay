import * as React from 'react';
import DataListItem from './DataListItem';
import './DataList.css';

export interface Props {
    name: string;
    list: Array<DataListItemProps>;
}

interface DataListItemProps {
    name: string;
    value: any;
}

class DataList extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        console.log(props);
    }

    render() {
        const { name, list } = this.props;
        console.log('render', name, list);
        const header = emptyString(name) ? null : <div className="data-list-header">{name}</div>;
        const valueList = emptyList(list) ?
            <li className="data-list-item-empty">No items in list</li>
            : list.map((i, key) => <DataListItem name={i.name} value={i.value} key={key} />);

        return (
            <div className="data-list-container">
                {header}
                <ul className="data-list">
                    {valueList}
                </ul>
            </div>
        );
    }
}

export default DataList;

function emptyString(string: string) {
    return !string || !string.trim();
}
function emptyList(list: Array<any>) {
    console.log('emptyList', list);
    return !list || !list.length;
}