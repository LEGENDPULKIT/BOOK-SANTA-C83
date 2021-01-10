import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config';
import { DrawerActions } from 'react-navigation-drawer';


export default class MyHeader extends Component
{
  constructor(props)
  {
    super()
    this.state=
    {
      value:"",
    }
  }
  getNumberOfUnreadNoticifications()
  {
    db.collection('all_noticification').where("noticification_status","==","unread")
    .onSnapshot((snapshot)=>
    {
      var UnreadNoticifications=snapshot.docs.map((doc)=>
      {
        doc.data()
      })
      this.setState({
        value:UnreadNoticifications.length
      })
    })
  }
  componentDidMount()
  {
    this.getNumberOfUnreadNoticifications()
  }
  BellIconWithBadge=()=>
  {
    return(
      <View>
        <Icon name="Bell" type='font-awesome' color='#696969' size={25} onPress={()=>
        {
          this.props.navigation.navigate('Noticification')
        }}
          />
          <Badge value={this.state.value} containerStyle={{position:'absolute',top:-4,right:-4,}}/>
      </View>
    )
  }
  render()
  {
    return(
      <Header leftComponent={<Icon name='bars' type='font-awesome' color='#696969' onPress={()=>this.props.navigation.toggleDrawer()}
      /> }
      centerComponent={{text:this.props.title,style:{color:'#90a5a9',fontSize:20,fontWeight:'bold'}}}
      rightComponent={<this.BellIconWithBadge {...this.props}/>}
      backgroundColor='#eaf8fe'
      />
    )
  }
  }

