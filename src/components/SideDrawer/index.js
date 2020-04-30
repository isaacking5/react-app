import React from 'react'
import { Drawer } from 'rsuite';

class SideDrawer extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        show: false
      };
      this.close = this.close.bind(this);
      this.toggleDrawer = this.toggleDrawer.bind(this);
    }
    close() {
      this.setState({
        show: false
      });
    }
    toggleDrawer() {
      this.setState({ show: true });
    }
    render() {
      return (
        <div>
          {/* <ButtonToolbar> */}
          <div>
            <button onClick={this.toggleDrawer}>Open</button>
          </div>
          {/* </ButtonToolbar> */}
          <Drawer
            show={this.state.show}
            onHide={this.close}
          >
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <div>Be happy, make everyone happy...!</div>
            </Drawer.Body>
            <Drawer.Footer>
              <button onClick={this.close} appearance="primary">Confirm</button>
              <button onClick={this.close} appearance="subtle">Cancel</button>
            </Drawer.Footer>
          </Drawer>
        </div>
      );
    }
  
  }
  
export default SideDrawer