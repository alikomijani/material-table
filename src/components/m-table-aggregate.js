/* eslint-disable no-unused-vars */
import * as React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
/* eslint-enable no-unused-vars */

class MTableAggregate extends React.Component {
  state = {
    anchorEl: null,
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleOpenMenu = (event) => {
    event.stopPropagation();
    this.setState({ anchorEl: event.currentTarget });
  };
  cb = (key) => {
    this.handleClose();
    this.props.callAggregation(key);
  };
  render() {
    const button = (
      <IconButton
        size={this.props.size}
        color="inherit"
        onClick={this.handleOpenMenu}
      >
        <this.props.icons.Aggregations fontSize="small" />
      </IconButton>
    );
    return (
      <React.Fragment>
        <Tooltip title={"Aggregation"}>{button}</Tooltip>
        <Menu
          id="basic-menu"
          anchorEl={this.state.anchorEl}
          open={!!this.state.anchorEl}
          onClose={this.handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {this.props.aggregations.map((item) => (
            <MenuItem key={item.caption} onClick={() => this.cb(item.caption)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText> {item.caption}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </React.Fragment>
    );
  }
}

MTableAggregate.defaultProps = {
  aggregate: {},
};

MTableAggregate.propTypes = {
  size: PropTypes.string,
  icons: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  callAggregation: PropTypes.func.isRequired,
  aggregations: PropTypes.array,
};

export default MTableAggregate;
