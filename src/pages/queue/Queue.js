import React, { Component } from 'react';
import { List, Card, Icon, Spin } from 'antd';
import { IconText } from '../../global';

import { handleResolve, handleDelete } from './actions';

const { Item } = List;

class Queue extends Component {
  handleResolve = handleResolve.bind(this);
  handleDelete = handleDelete.bind(this);

  componentDidMount() {
    /**
     * Get the list of orders on component mount.
     */
  }

  render() {
    const style = {
      icon: {
        color: '#52C41A',
        marginRight: 8,
        fontSize: '85%'
      },
      loader: {
        textAlign: 'center'
      }
    }
    const mock = [];
    const actions = item => [
      <IconText icon="check" text="Resolve" onClick={this.handleResolve(item._id)} />,
      <IconText icon="delete" text="Remove" onClick={this.handleDelete(item._id)} />
    ];

    const {
      isGettingOrders
    } = this.props;

    return (
      <Card>
        {
          isGettingOrders ? (
            <div style={style.loader}>
              <Spin indicator={<Icon type="loading" style={{ fontSize: 36 }} spin />} />
            </div>
          ) : (
            <List
              itemLayout="horizontal"
              dataSource={mock}
              renderItem={item => (
                <Item actions={actions(item)}>
                  <Item.Meta
                    title={<span>{!!item.isProcessed && <Icon type="check-circle" style={style.icon}/>}{item.name}</span>}
                    description={item.order}
                  />
                </Item>
              )}
            />
          )
        }
      </Card>
    );
  }
}

export default Queue;