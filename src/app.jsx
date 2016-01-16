var React = require('react');
var ReactDOM = require('react-dom');
const {Table, Column, Cell} = require('fixed-data-table');
var Hello = React.createClass({
  render: function() {
    return (<MyTable />)
  }
});

class MyTable extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      myTableData: [
        {name: 'RylanRylanRylanRylanRylanRylanRylanRylanRylan', city: "Berlin"},
        {name: 'Amelia', city: "Berlin"},
        {name: 'Estevan', city: "Berlin"},
        {name: 'Florence', city: "Munich"},
        {name: 'Tressa', city: "Stuttgart"},
        {name: 'Hans', city: "Hamburg"},
      ],
    };
  }
  render() {
    return (
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={30}
        headerHeight={30}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Name</Cell>}
          cell={props =>(
            <Cell {...props}>
              {this.state.myTableData[props.rowIndex].name}
            </Cell>
          )}
          width={150}
        />
        <Column
          header={<Cell>City</Cell>}
          cell= {props => (
            <Cell {...props}>
              {this.state.myTableData[props.rowIndex].city}
            </Cell>
          )}
          width={150}
        />
      </Table>
    );
  }
}

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
