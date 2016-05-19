import * as React from 'react';
import * as filters from '../../constants/filters';

const FILTER_TITLE = {
  [filters.SHOW_ALL]: 'All',
  [filters.SHOW_COMPLETED]: 'Completed',
  [filters.SHOW_ACTIVE]: 'Active'
};

interface Props {
  onFilterChange:(filter:string, name?:string)=>any;  
  filter:string;
}

export default class Footer extends React.Component<Props, any> {
  static propType = {
    filter: React.PropTypes.oneOf([
      filters.SHOW_ALL,
      filters.SHOW_COMPLETED,
      filters.SHOW_ACTIVE
    ]).isRequired
  }
  constructor() {
    super();
    this.renderFilter = this.renderFilter.bind(this);
  }
  
  renderFilter(filter:string, name:string) {
    if(filter === this.props.filter) {
      return (<span>{name}</span>);
    }
    return (
      <a href="#" onClick={e => {
        e.preventDefault();
        this.props.onFilterChange(filter);
      }}>
        {name}
      </a>
    );
  }
  
  render() {
    return (
      <p>
        Show:
        {''}
        {this.renderFilter(filters.SHOW_ALL, FILTER_TITLE[filters.SHOW_ALL])}
        {', '}
        {this.renderFilter(filters.SHOW_COMPLETED, FILTER_TITLE[filters.SHOW_COMPLETED])}
        {', '}
        {this.renderFilter(filters.SHOW_ACTIVE, FILTER_TITLE[filters.SHOW_ACTIVE])}
        .
      </p>
    );
  }
}