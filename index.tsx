import { Button } from '@material-ui/core';
import * as React from 'react';
import { render } from 'react-dom';
import './styles.scss';

export interface HelloMessageProps {
  toto?: string;
}

class HelloMessage extends React.Component<HelloMessageProps> {
  render() {
    const toto = 1;

    return (
      <Button variant="contained" color="primary">
        Hello {this.props.toto}
      </Button>
    );
  }
}

render(<HelloMessage toto="Jane" />, document.getElementById('app'));
