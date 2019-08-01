import React, { createRef, Component } from 'react';
import {
  Box, Text, Drop, Grommet,
} from 'grommet';
import { grommet } from 'grommet/themes';
import SearchForm from './SearchForm';

class ToolTip extends Component {
  state = {};

  ref = createRef();

  render() {
    const { over } = this.state;
    const { children } = this.props;
    const { tip } = this.props;

    return (
      <Grommet theme={grommet}>
        <Box fill align="center" justify="center">
          <Box
            label="Button"
            ref={this.ref}
            onMouseOver={() => this.setState({ over: true })}
            onMouseOut={() => this.setState({ over: false })}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            {children}
          </Box>

          {this.ref.current && over && (
          <Drop align={{ top: 'bottom', right: 'right' }} target={this.ref.current} plain>
            <Box
              margin="xsmall"
              pad="small"
              background="dark-1"
              round={{ size: 'small' }}
            >
              <Text>{tip}</Text>
            </Box>
          </Drop>
          )}
        </Box>
      </Grommet>
    );
  }
}

export default ToolTip;
