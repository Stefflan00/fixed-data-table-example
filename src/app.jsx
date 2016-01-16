var React = require('react');
var ReactDOM = require('react-dom');
const {Table, Column, Cell} = require('fixed-data-table');
var Hello = React.createClass({
  render: function() {
    return (<MyTable />)
  }
});

class MyCell extends React.Component {
  render() {
    var {rowIndex, data, field, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}


class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {name: 'Rylan', email: 'Angelita_Weimann42@gmail.com'},
        {name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com'},
        {name: 'Estevan', email: 'Aimee7@hotmail.com'},
        {name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com'},
        {name: 'Tressa', email: 'Yadira1@hotmail.com'},
      ],
    };
  }

  render() {
    return (
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Email</Cell>}
          cell={<MyCell data={rows} field="email" />}
          width={200}
        />
      </Table>
    );
  }
}


var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
