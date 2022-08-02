/* eslint-disable no-unused-vars */
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import React from "react";
import TableFooter from "@mui/material/TableFooter";
import * as CommonValues from "../utils/common-values";

/* eslint-enable no-unused-vars */

export default class MTableFooter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { columns, data } = this.props;
    const size = CommonValues.elementSize(this.props);
    return (
      <TableFooter>
        <TableRow>
          <TableCell />
          {columns.map((columnDef) => (
            <this.props.components.Cell
              size={size}
              errorState={this.props.errorState}
              icons={this.props.icons}
              columnDef={{
                cellStyle: this.props.options.cellStyle,
                ...columnDef,
              }}
              value={data[columnDef.field]}
              key={"cell-" + columnDef.field + "-" + columnDef.tableData.id}
              rowData={this.props.data}
              cellEditable={false}
              scrollWidth={this.props.scrollWidth}
            />
          ))}
        </TableRow>
      </TableFooter>
    );
  }
}

MTableFooter.defaultProps = {
  data: {},
  columns: [],
};

MTableFooter.propTypes = {
  actions: PropTypes.array,
  icons: PropTypes.any.isRequired,
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  scrollWidth: PropTypes.number.isRequired,
  columns: PropTypes.array,
  errorState: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
